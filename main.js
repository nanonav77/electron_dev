
const { app, BrowserWindow, ipcMain} = require("electron")
const path = require("path")

// DECLARAMOS LA FUNCIÓN QUE CREA 
// LA VENTANA DE PRINCIPAL DEL SISTEMA
function createMainWindow(){

    const { screen } = require('electron')
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.workAreaSize
    
    mainWindow = new BrowserWindow({ width, height,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        
    })
    
    mainWindow.loadFile('src/views/index.html')
    
}

// DECLARAMOS LA FUNCIÓN QUE CREA 
// LA VENTANA DE AGREGAR COLABORADOR
function createAddColaboradorWindow(){

    const addColaboradorWindow = new BrowserWindow({
    
        width: 850,
        height: 550,
        modal: true,
        show:false,
        resizable:false,
        parent: mainWindow,

        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },

    })

    addColaboradorWindow.loadFile('src/views/addCol.html')

    addColaboradorWindow.once("ready-to-show", () => {
        addColaboradorWindow.show();
    });

}
// LLAMAMOS LA FUNCIÓN DE VENTANA PARA AÑADIR COLABORADOR
ipcMain.on("openAddColaboradorWindow", (event, arg) => {
    createAddColaboradorWindow();
});


// DECLARAMOS LA FUNCIÓN QUE CREA 
// LA VENTANA DE MODIFICAR COLABORADOR
function createUpdateColaboradorWindow(){

    const updateColaboradorWindow = new BrowserWindow({
    
        width: 850,
        height: 550,
        modal: true,
        show:false,
        resizable:false,
        parent: mainWindow,

        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },

    })

    updateColaboradorWindow.loadFile('src/views/updCol.html')

    updateColaboradorWindow.once("ready-to-show", () => {
        updateColaboradorWindow.show();
    });

}
// LLAMAMOS LA FUNCIÓN DE VENTANA PARA MODIFICAR COLABORADOR
ipcMain.on("openUpdateColaboradorWindow", (event, arg) => {
    createUpdateColaboradorWindow();
});


app.whenReady().then(() => {
 
    createMainWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createMainWindow();
        }
    }); 

});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});

