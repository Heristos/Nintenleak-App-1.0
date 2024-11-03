const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

let loadingWindow; // Déclaration de loadingWindow dans la portée globale

// Fonction pour créer la fenêtre de chargement
function createLoadingWindow() {
    loadingWindow = new BrowserWindow({
        width: 300,
        height: 300,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        icon: path.join(__dirname, 'assets', 'icon.ico'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    loadingWindow.loadFile('loading.html');
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
            nodeIntegration: true,
            contextIsolation: false
        },
        show: false
    });

    mainWindow.loadURL('https://nintenleak.fr'); // Charger nintenleak.fr comme page d'accueil

    mainWindow.once('ready-to-show', () => {
        setTimeout(() => {
            mainWindow.show();
            if (loadingWindow) {
                loadingWindow.close();
                loadingWindow = null;
            }
        }, 3000);
    });

    // Définition du menu personnalisé pour la fenêtre principale
    const template = [
        {
            label: 'Nintenleak',
            submenu: [
                {
                    label: 'Home',
                    click: () => { mainWindow.loadURL('https://nintenleak.fr'); }
                },
                {
                    label: 'Discord',
                    click: () => {
                        // Essayer d'ouvrir Discord avec le protocole discord://
                        shell.openExternal('discord://discord.gg/PkYbaCzs5J').catch(() => {
                            // Si Discord n'est pas installé, ouvrir dans le navigateur
                            shell.openExternal('https://discord.gg/PkYbaCzs5J');
                        });
                    }
                },
                { type: 'separator' },
                {
                    label: 'Exit',
                    role: 'quit'
                }
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'Aide',
                    click: () => { shell.openExternal('https://discord.gg/RW25XPPf'); }
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return mainWindow;
}

app.whenReady().then(() => {
    createLoadingWindow();
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
