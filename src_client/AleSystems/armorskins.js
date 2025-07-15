const storeBrowser = mp.browsers.new(`package://cef/ArmorSkins/index.html`);
mp.events.add("client.skins.open", () => {
    storeBrowser.execute(`app.Open()`);
    global.menuOpen();
});

mp.events.add("client.skins.action", (index) => mp.events.callRemote("server.skins.action", index));

mp.events.add("client.skins.close", () => {
    storeBrowser.execute(`app.Reset()`);
    global.menuClose();
});