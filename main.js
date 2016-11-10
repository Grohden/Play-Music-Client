const {app, BrowserWindow} = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({width: 970, height: 800});
    win.setMenu(null); // plans to make frameless and add a close button.
    win.loadURL('file://'+__dirname+'/index.html');

    // Open the DevTools.
    //win.webContents.openDevTools();

    // Emitted when the window is closed.
    win.on('closed', function() {
        win = null
    });


    win.on('app-command', (e, cmd) => {
        console.log(cmd);
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (win === null) {
        createWindow()
    }
});





