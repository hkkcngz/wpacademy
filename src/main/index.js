const { app, BrowserWindow, ipcMain, protocol, shell } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: false, // allow loading local file iframes
    },
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#f8fafc',
    icon: path.join(__dirname, '../../assets/icon.png'),
    show: false,
  });

  mainWindow.loadFile(path.join(__dirname, '../../src/renderer/index.html'));

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// ──────────────────────────────────────────────
//  IPC: Read directory structure for lessons
// ──────────────────────────────────────────────
const ROOT = path.join(__dirname, '../../');

function readDesc(dirPath) {
  const descPath = path.join(dirPath, 'desc.md');
  if (fs.existsSync(descPath)) {
    return fs.readFileSync(descPath, 'utf-8').trim();
  }
  return null;
}

function hasIndex(dirPath) {
  return fs.existsSync(path.join(dirPath, 'index.html'));
}

function listSubDirs(parentPath) {
  if (!fs.existsSync(parentPath)) return [];
  return fs
    .readdirSync(parentPath, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
}

// Build full lesson tree: months > weeks > days > sections
ipcMain.handle('get-lessons', () => {
  const lessonsPath = path.join(ROOT, 'lessons');
  const months = listSubDirs(lessonsPath);

  return months.map((monthId) => {
    const monthPath = path.join(lessonsPath, monthId);
    const weeks = listSubDirs(monthPath);

    return {
      id: monthId,
      label: friendlyMonth(monthId),
      weeks: weeks.map((weekId) => {
        const weekPath = path.join(monthPath, weekId);
        const days = listSubDirs(weekPath);

        return {
          id: weekId,
          label: friendlyWeek(weekId),
          desc: readDesc(weekPath),
          days: days.map((dayId) => {
            const dayPath = path.join(weekPath, dayId);
            const sections = ['ders', 'egzersiz', 'odev'].filter((s) =>
              fs.existsSync(path.join(dayPath, s))
            );

            return {
              id: dayId,
              label: friendlyDay(dayId),
              desc: readDesc(dayPath),
              sections: sections.map((s) => ({
                id: s,
                label: friendlySection(s),
                hasContent: hasIndex(path.join(dayPath, s)),
                filePath: path.join(dayPath, s, 'index.html'),
              })),
            };
          }),
        };
      }),
    };
  });
});

// Build extras tree
ipcMain.handle('get-extras', () => {
  const extrasPath = path.join(ROOT, 'extras');
  const items = listSubDirs(extrasPath);

  return items.map((id) => {
    const itemPath = path.join(extrasPath, id);
    return {
      id,
      label: slugToLabel(id),
      desc: readDesc(itemPath),
      hasContent: hasIndex(itemPath),
      filePath: path.join(itemPath, 'index.html'),
    };
  });
});

// Open a local HTML file in the content pane
ipcMain.handle('get-file-url', (_, filePath) => {
  return 'file://' + filePath.replace(/\\/g, '/');
});

// Open external links in browser
ipcMain.on('open-external', (_, url) => shell.openExternal(url));

// ──────────────────────────────────────────────
//  Label helpers
// ──────────────────────────────────────────────
function friendlyMonth(id) {
  const n = id.replace('month', '');
  return `${n}. Ay`;
}
function friendlyWeek(id) {
  const n = id.replace('week', '');
  return `${n}. Hafta`;
}
function friendlyDay(id) {
  const n = id.replace('day', '');
  return `${n}. Gün`;
}
function friendlySection(id) {
  return { ders: 'Ders', egzersiz: 'Egzersiz', odev: 'Ödev' }[id] || id;
}
function slugToLabel(slug) {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
