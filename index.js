const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

// Fonction pour créer la fenêtre de chargement
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

// Fonction pour créer la fenêtre principale
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

    // Définition du menu personnalisé pour la fenêtre principale
    const template = [
        {
            label: 'Nintenleak',
            submenu: [
                {
                    label: 'Home',
                    click: () => { mainWindow.loadFile('index.html'); }
                },
                {
                    label: 'Discord',
                    click: () => { shell.openExternal('https://discord.gg/PkYbaCzs5J'); }
                },
                { type: 'separator' },
                {
                    label: 'Exit',
                    role: 'quit'
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
});
