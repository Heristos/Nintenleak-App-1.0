const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
    const win = new BrowserWindow({
        width: 1256,
        height: 700,
        icon: path.join(__dirname, 'assets', 'icon.ico'), // Spécifiez le chemin vers votre icône
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');
}

app.on('ready', createWindow);