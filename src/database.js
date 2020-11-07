const Sequelize = require('sequelize');

var sequelize = new Sequelize('', '', '', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },

  storage: './database.sqlite', // Chỉ dùng khi MS là SQLite
});

module.exports.Settings = sequelize.define(
  'settings',
  {
    name_setting: { type: Sequelize.STRING, allowNull: false, unique: true },
    value_setting: { type: Sequelize.STRING, allowNull: false },
  },
  { timestamps: false }
);

module.exports.sequelize = sequelize;

// background
// pomodoro
// s_break
// l_break
// interval
// auto_start
