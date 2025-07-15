let DeathScreen;

global.checker = {
  menuOpen: false,
};

mp.events.add("DeathScreen::open", (killerName, killerStatic, weaponName, distance) => {
  if (!global.checker.menuOpen) {
    setTimeout(() => {
      DeathScreen = mp.browsers.new("package://cef/deathscreen/index.html");
      DeathScreen.execute(`app.Open()`);
      global.checker.menuOpen = true;

      global.menuOpen();

      DeathScreen.execute(`app.killerName='${killerName}'`);
      DeathScreen.execute(`app.killerStatic=${killerStatic}`);
      DeathScreen.execute(`app.weapon='${weaponName}'`);
      DeathScreen.execute(`app.distance=${distance}`);
    }, 2800);
  }
});

mp.events.add("MedicButton::click", () => {
  mp.events.callRemote('server:OnHospitalDialogCallback', 2);
});

mp.events.add("LoseButton::click", () => {
  mp.events.callRemote('server:OnHospitalDialogCallback', 3);
});

mp.events.add('DeathScreen::close', () => {
  if (global.checker.menuOpen) {
    DeathScreen.execute(`app.Close()`);

    setTimeout(() => {
      global.checker.menuOpen = false;

      global.menuClose();

      DeathScreen.destroy();
    }, 100);
  }
});