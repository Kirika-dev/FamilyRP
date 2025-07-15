let DeathScreen2;

global.checker2 = {
  menuOpen: false,
};

mp.events.add("DeathScreen2::open", () => {
  if (!global.checker2.menuOpen) {
    setTimeout(() => {
      DeathScreen2 = mp.browsers.new("package://cef/deathscreen/index2.html");
      DeathScreen2.execute(`app.Open()`);
      global.checker2.menuOpen = true;

      global.menuOpen();
    }, 2800);
  }
});

mp.events.add("MedicButton2::click", () => {
  mp.events.callRemote('server:OnHospitalDialogCallback', 2);
});

mp.events.add("LoseButton2::click", () => {
  mp.events.callRemote('server:OnHospitalDialogCallback', 3);
});

mp.events.add('DeathScreen2::close', () => {
  if (global.checker2.menuOpen) {
    DeathScreen2.execute(`app.Close()`);

    setTimeout(() => {
      global.checker2.menuOpen = false;

      global.menuClose();

      DeathScreen2.destroy();
    }, 100);
  }
});