const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
require('./database');

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
  win.setMenuBarVisibility(false);
  // In main process.

  ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg); // prints "ping"
    event.reply('asynchronous-reply', 'pong');
  });
}

app.whenReady().then(createWindow);
