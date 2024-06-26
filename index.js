const { app, BrowserWindow } = require('electron');
const path = require('path');

function createLoadingWindow() {
   const loadingWin = new BrowserWindow({
       width: 300,
       height: 300,
       frame: false,
       transparent: true,
       alwaysOnTop: true,
       icon: path.join(__dirname, 'assets', 'icon.ico'),
       webPreferences: {
           nodeIntegration: true
       }
   });

   loadingWin.loadFile('loading.html');

   return loadingWin;
}

function createMainWindow() {
   const mainWindow = new BrowserWindow({
       width: 1256,
       height: 700,
       minWidth: 1256,
       minHeight: 700,
       icon: path.join(__dirname, 'assets', 'icon.ico'),
       webPreferences: {
           nodeIntegration: true
       },
       show: false
   });

   mainWindow.loadFile('index.html');

   mainWindow.once('ready-to-show', () => {
       setTimeout(() => {
           mainWindow.show();
           if (loadingWindow) {
               loadingWindow.close();
           }
       }, 3000);
   });

   return mainWindow;
}

let loadingWindow;
app.on('ready', () => {
   loadingWindow = createLoadingWindow();
   const mainWindow = createMainWindow();
});
