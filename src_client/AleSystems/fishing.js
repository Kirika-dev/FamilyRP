const minigameBrowser = mp.browsers.new(`http://package/interface/modules/FishingMinigame/index.html`);

mp.events.add("client.fishing.minigame.open", () => {
    minigameBrowser.active = true;
    minigameBrowser.execute(`openMinigame()`);
    global.menuOpen();
});

mp.events.add("client.fishing.minigame.end", (state) => mp.events.callRemote("server.fishing.minigame.end", state));

mp.events.add("client.fishing.minigame.close", () => {
    global.menuClose();
    minigameBrowser.active = false;
});


const storeBrowser = mp.browsers.new(`http://package/interface/modules/FishingShop/index.html`);
mp.events.add("client.fishing.store.open", (items) => {
    storeBrowser.execute(`app.Open(${items})`);
    global.menuOpen();
});

mp.events.add("client.fishing.store.action", (category, index, value) => mp.events.callRemote("server.fishing.store.action", category, index, value));

mp.events.add("client.fishing.store.close", () => {
    storeBrowser.execute(`app.Reset()`);
    global.menuClose();
});