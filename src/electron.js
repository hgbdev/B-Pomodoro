const { app, BrowserWindow } = require('electron');
const path = require('path');


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, './../public/assets/icon.png'),
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  win.loadFile(path.join(__dirname, './../build/index.html'));
  win.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);
