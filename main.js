const {BrowserWindow, app, ipcMain, Menu} = require("electron");
const path = require("path");
const url = require("url"); 

let mainWindow;

app.on("ready", function(){ 
    // Initialize the main window
    mainWindow = new BrowserWindow({
        height: 600,
        width: 1200,
        title: "Random Generator",
        show: false
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,"views","index.html"),
        protocol: "File:",
        slashes: true // File://./viewsindex.html
    }));
    mainWindow.on("ready-to-show",() =>{
        mainWindow.show();
    });
    mainWindow.on("closed", () =>{
        app.quit();
    });
    // TODO: Menu init
    Menu.setApplicationMenu(null);
});

// Middle Squares View
ipcMain.on("ShowView:MiddleSquares", function(){
    let cuad_med = new BrowserWindow({
        height: 300,
        width: 600,
        title: "Cuadrados Medios",
        show: false
    });
    cuad_med.loadURL(url.format({
        pathname: path.join(__dirname, "views", "mid-sq.html"),
        protocol: "File:",
        slashed: true
    }));
    cuad_med.on("ready-to-show", function(){
        cuad_med.show();
    });
    cuad_med.on("closed", function(){
        cuad_med = null;
    })
});

// Middle Products
ipcMain.on("ShowView:MiddleProducts", function(){
    let prod_med = new BrowserWindow({
        width: 600,
        height: 300,
        show: false,
        title: "Productos Medios"
    });
    prod_med.loadURL(url.format({
        pathname: path.join(__dirname, "views", "mid-prod.html"),
        protocol: "File:",
        slashes: true
    }));
    prod_med.on("ready-to-show",  function(){
        prod_med.show();
    });
    prod_med.on("closed", function(){
        prod_med = null;
    })
});

// Constant Multiplier
ipcMain.on("ShowView:ConstantMultiplier", function(){
    let prod_med = new BrowserWindow({
        width: 600,
        height: 300,
        show: false,
        title: "Multiplicador Constante"
    });
    prod_med.loadURL(url.format({
        pathname: path.join(__dirname, "views", "const-mul.html"),
        protocol: "File:",
        slashes: true
    }));
    prod_med.on("ready-to-show",  function(){
        prod_med.show();
    });
    prod_med.on("closed", function(){
        prod_med = null;
    })
});

// linear congruential generator
ipcMain.on("ShowView:LinearCongruential", function(){
    let prod_med = new BrowserWindow({
        width: 600,
        height: 300,
        show: false,
        title: "Congruencial Lineal"
    });
    prod_med.loadURL(url.format({
        pathname: path.join(__dirname, "views", "lin-cong.html"),
        protocol: "File:",
        slashes: true
    }));
    prod_med.on("ready-to-show",  function(){
        prod_med.show();
    });
    prod_med.on("closed", function(){
        prod_med = null;
    })
});

// Multiplicative Congruential Generator
ipcMain.on("ShowView:MultiplicativeCongruential", function(){
    let prod_med = new BrowserWindow({
        width: 600,
        height: 300,
        show: false,
        title: "Congruencial Multiplicativo"
    });
    prod_med.loadURL(url.format({
        pathname: path.join(__dirname, "views", "mult-cong.html"),
        protocol: "File:",
        slashes: true
    }));
    prod_med.on("ready-to-show",  function(){
        prod_med.show();
    });
    prod_med.on("closed", function(){
        prod_med = null;
    })
});

// Aditive Congruential Generator
ipcMain.on("ShowView:AditiveCongruential", function(){
    let prod_med = new BrowserWindow({
        width: 600,
        height: 300,
        show: false,
        title: "Congruencial Aditivo"
    });
    prod_med.loadURL(url.format({
        pathname: path.join(__dirname, "views", "ad-cong.html"),
        protocol: "File:",
        slashes: true
    }));
    prod_med.on("ready-to-show",  function(){
        prod_med.show();
    });
    prod_med.on("closed", function(){
        prod_med = null;
    })
});

// Cuadratic Congruential Generator
ipcMain.on("ShowView:CuadraticCongruential", function(){
    let prod_med = new BrowserWindow({
        width: 600,
        height: 300,
        show: false,
        title: "Congruencial Cuadratico"
    });
    prod_med.loadURL(url.format({
        pathname: path.join(__dirname, "views", "cuad-cong.html"),
        protocol: "File:",
        slashes: true
    }));
    prod_med.on("ready-to-show",  function(){
        prod_med.show();
    });
    prod_med.on("closed", function(){
        prod_med = null;
    })
});

// Blum Blum Shub Generator
ipcMain.on("ShowView:BlumBlumShub", function(){
    let prod_med = new BrowserWindow({
        width: 600,
        height: 300,
        show: false,
        title: "Blum Blum Shub"
    });
    prod_med.loadURL(url.format({
        pathname: path.join(__dirname, "views", "blum-Blum-Shub.html"),
        protocol: "File:",
        slashes: true
    }));
    prod_med.on("ready-to-show",  function(){
        prod_med.show();
    });
    prod_med.on("closed", function(){
        prod_med = null;
    })
});



////////////// Defining routing for test events.

// Media Test
ipcMain.on("ShowView:MediaTest", function(e, collection){
    let mediaTestWindow = new BrowserWindow({
        width: 1200,
        height: 600,
        title: "Prueba de Medias",
        show: false
    });
    mediaTestWindow.loadURL(url.format({
        pathname:  path.join(__dirname, "views", "viewMediaTest.html"),
        protocol: "File:",
        slashes: true
    }));
    mediaTestWindow.on("ready-to-show", function(){
        mediaTestWindow.webContents.send("message", collection);
        mediaTestWindow.show();
    });
    mediaTestWindow.on("closed", function(){
        mediaTestWindow = null;
    })
})

// Variance Test
ipcMain.on("ShowView:Variance", function(e, collection){
    let mediaTestWindow = new BrowserWindow({
        width: 1200,
        height: 600,
        title: "Prueba de Varianza",
        show: false
    });
    mediaTestWindow.loadURL(url.format({
        pathname:  path.join(__dirname, "views", "viewVarianceTest.html"),
        protocol: "File:",
        slashes: true
    }));
    mediaTestWindow.on("ready-to-show", function(){
        mediaTestWindow.webContents.send("message", collection);
        mediaTestWindow.show();
    });
    mediaTestWindow.on("closed", function(){
        mediaTestWindow = null;
    })
})

// Uniformity Test
ipcMain.on("ShowView:UniformityTest", function(e, collection){
    let mediaTestWindow = new BrowserWindow({
        width: 1200,
        height: 600,
        title: "Prueba de Uniformidad",
        show: false
    });
    mediaTestWindow.loadURL(url.format({
        pathname:  path.join(__dirname, "views", "viewUniformityTest.html"),
        protocol: "File:",
        slashes: true
    }));
    mediaTestWindow.on("ready-to-show", function(){
        mediaTestWindow.webContents.send("message", collection);
        mediaTestWindow.show();
    });
    mediaTestWindow.on("closed", function(){
        mediaTestWindow = null;
    })
})

// Independence Test
ipcMain.on("ShowView:IndependenceTest", function(e, collection){
    let mediaTestWindow = new BrowserWindow({
        width: 1200,
        height: 600,
        title: "Prueba de Independencia",
        show: false
    });
    mediaTestWindow.loadURL(url.format({
        pathname:  path.join(__dirname, "views", "viewIndependenceTest.html"),
        protocol: "File:",
        slashes: true
    }));
    mediaTestWindow.on("ready-to-show", function(){
        mediaTestWindow.webContents.send("message", collection);
        mediaTestWindow.show();
    });
    mediaTestWindow.on("closed", function(){
        mediaTestWindow = null;
    })
})

/////////////// Open Results for random generators

ipcMain.on("ShowView:ViewCollection", (e, collection) =>{
    let mediaTestWindow = new BrowserWindow({
        width: 1200,
        height: 600,
        title: "Vista de Resultados",
        show: false
    });
    mediaTestWindow.loadURL(url.format({
        pathname:  path.join(__dirname, "views", "viewCollection.html"),
        protocol: "File:",
        slashes: true
    }));
    mediaTestWindow.on("ready-to-show", () => { 
        mediaTestWindow.show();
        mediaTestWindow.webContents.send("ShowView:ShowRandNums", collection);
    });
    mediaTestWindow.on("closed", function(){
        mediaTestWindow = null;
    })
});
