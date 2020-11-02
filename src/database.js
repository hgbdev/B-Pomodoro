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

var Project = sequelize.define('Setting', {
  name: Sequelize.STRING,
  background: Sequelize.STRING,
  pomodoro: Sequelize.INTEGER,
  s_break: Sequelize.INTEGER,
  l_break: Sequelize.INTEGER,
  interval: Sequelize.INTEGER,
  auto_start: Sequelize.BOOLEAN,
});

Project.sync();