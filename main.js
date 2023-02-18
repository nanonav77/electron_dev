

const { app, BrowserWindow} = require("electron")


function createMainWindow(){

    const { screen } = require('electron')
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.workAreaSize
    
    mainWindow = new BrowserWindow({ width, height})
    
    mainWindow.loadFile('src/views/index.html')
    

}

function createAddColaboradorWindow(){

    const addColaboradorWindow = new BrowserWindow({
    
        width: 1000,
        height: 700,
        modal: true,
        show: false,
        parent: mainWindow

    })

    addColaboradorWindow.loadFile('src/views/addCol.html')

    addColaboradorWindow.once("ready-to-show", () => {
        addColaboradorWindow.show();
    });

}

app.whenReady().then(() => {
 
    createMainWindow() 

})