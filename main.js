const {BrowserWindow, app} = require("electron");
const path = require("path");
const url = require("url"); 

let mainWindow;

app.on("ready", function(){
    mainWindow = new BrowserWindow({
        height: 300,
        width: 600,
        title: "Random Generator"
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,"index.html"),
        protocol: "File:",
        slashed: true
    }));
    mainWindow.show();
});