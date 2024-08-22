const { app, BrowserWindow } = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    resizable: false,
  })
 
  win.loadFile('./src/index.html')
}

app.whenReady().then(() => {
  createWindow()
})
