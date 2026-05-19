const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('wpapi', {
  getLessons:   ()       => ipcRenderer.invoke('get-lessons'),
  getExtras:    ()       => ipcRenderer.invoke('get-extras'),
  getFileUrl:   (p)      => ipcRenderer.invoke('get-file-url', p),
  openExternal: (url)    => ipcRenderer.send('open-external', url),
});
