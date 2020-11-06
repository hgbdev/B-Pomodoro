const { log } = require('console');
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const controller = require('./controller');
const { sequelize } = require('./database');

require('dotenv').config();

function createWindow() {
  console.log('ENV: ', process.env.ENV);
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, './../public/assets/icon.png'),
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL('http://localhost:3000');
  //win.loadFile(path.join(__dirname, './../build/index.html'));
  //win.setMenuBarVisibility(false);
  // In main process.

  ipcMain.on('react-message', async (event, arg) => {
    const res = await controller(arg.event, arg.data);
    console.log(res);
    event.reply('electron-reply', 'pong');
  });
}

sequelize.sync().then(() => {
  console.log('START ELECTRON APP');
  app.whenReady().then(createWindow);
});
