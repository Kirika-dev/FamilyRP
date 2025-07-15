// Открытие админ-панели по эвенту
mp.events.add("openAdminPanel", (json) => {
  if (!loggedin || chatActive || global.isAdmin !== true) return;

  if (!global.AdminMenu) {
      global.AdminMenu = mp.browsers.new('package://cef/AdminMenu/index.html');
  }

  global.AdminMenu.active = true;
  global.AdminMenu.enable = true;
  global.menuOpen();
  global.AdminMenu.execute(`openMenu();`);
});

// Настройки администратора
global.adminConfig = {
  mode: false,
  menuOpen: false,
};

// Кнопка F3 для открытия/закрытия панели
mp.keys.bind(Keys.VK_F3, false, () => {
  if (!loggedin || chatActive || global.isAdmin !== true) return;

  if (!global.AdminMenu) {
      global.AdminMenu = mp.browsers.new('package://cef/AdminMenu/index.html');
      global.AdminMenu.active = true;
      global.AdminMenu.enable = true;
  }

  if (!global.adminConfig.menuOpen) {
      global.adminConfig.mode = true;
      global.adminConfig.menuOpen = true;
      global.menuOpen();
      global.AdminMenu.execute(`openMenu();`);
  } else {
      global.adminConfig.mode = false;
      global.adminConfig.menuOpen = false;
      global.menuClose();
      if (global.AdminMenu) {
          global.AdminMenu.execute(`closeMenu();`);
          global.AdminMenu.destroy();
          global.AdminMenu = null;
      }
  }
});

// Эвент закрытия панели
mp.events.add("closeAdminPanel", () => {
  if (global.AdminMenu) {
      global.AdminMenu.execute(`closeMenu();`);
      global.AdminMenu.destroy();
      global.AdminMenu = null;
  }
  global.menuClose();
  global.adminConfig.mode = false;
  global.adminConfig.menuOpen = false;
});
