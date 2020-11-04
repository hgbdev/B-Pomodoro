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

module.exports.Setting = sequelize.define('Setting', {
  name: { type: Sequelize.STRING, unique: true },
  background: Sequelize.STRING,
  pomodoro: Sequelize.INTEGER,
  s_break: Sequelize.INTEGER,
  l_break: Sequelize.INTEGER,
  interval: Sequelize.INTEGER,
  auto_start: Sequelize.BOOLEAN,
});

module.exports.sequelize = sequelize;
