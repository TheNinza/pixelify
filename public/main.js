const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

// global booleans

const isMac = process.platform === "darwin";

// creating Window

const createWindow = () => {
  const win = new BrowserWindow({
    width: 450,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
    resizable: false,
    fullscreenable: false,
    maximizable: false,
  });

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "..", "build", "index.html")}`
  );

  win.removeMenu(true);
};

// handling electron events

app.on("ready", createWindow);

/**
 * On OS X it's common for applications and their menu bar
 * to stay active until the user quits explicitly with cmd + q
 */
app.on("window-all-closed", () => {
  if (!isMac) {
    app.quit();
  }
});

/**
 * On OS X it's common to re-create a window in the app
 * when the dock icon is clicked and there are no other
 * windows open.
 */
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
