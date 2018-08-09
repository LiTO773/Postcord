import {app, BrowserWindow} from 'electron';

let mainWindow = null;

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({});

  mainWindow.loadURL(`file://${__dirname}/src/renderer/index.html`);
});
