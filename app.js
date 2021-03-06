const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function(){
  // Create new window
  mainWindow = new BrowserWindow({
    minHeight: 1000,
    minWidth: 800,
    webPreferences: {
      allowRunningInsecureContent: true
    }
  });
  // Load html into window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Build menu from template
  /* const mainMenu = Menu.buildFromTemplate(mainMenuTemplate); */
  // Insert menu
  /* Menu.setApplicationMenu(mainMenu); */
});

// Create menu template
const mainMenuTemplate = [{}];
