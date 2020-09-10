const { app, BrowserWindow } = require('electron');

app.disableHardwareAcceleration()

let win

app.whenReady().then(() => {
    win = new BrowserWindow({
        transparent: true,
        webPreferences: {
            offscreen: true
        }
    })

    win.loadURL('http://github.com');
})
