let JailFormBrowser;

mp.events.add("client.jail.form", () => {
    JailFormBrowser = mp.browsers.new("package://cef/JailForm/index.html");
    global.menuOpen();
    global.menuOpenCustom();
});

mp.events.add("client.jail.server", (localId, article, time) => {
    mp.events.callRemote("server_prison_form", localId, article, time);
});

mp.events.add("client.jail.form.close.menu", () => {
    mp.events.callRemote("server.jail.form.close.menu");
})

mp.events.add("client.jail.form.close", () => {
    global.menuClose();
		global.menuCloseCustom();
    JailFormBrowser.destroy();
});
 
mp.events.add("client.jail.open.gate", () => {
    mp.game.object.doorControl(mp.game.joaat('bmjr_block_gate'), -2323.495, 3392.751, 30.12666, false, 0.0, 50.0, 0);
    mp.game.object.doorControl(mp.game.joaat('bmjr_block_gate'), -2314.485, 3405.073, 30.13932, false, 0.0, 50.0, 0);
});

mp.events.add("client.jail.close.gate", () => {
    mp.game.object.doorControl(mp.game.joaat('bmjr_block_gate'), -2323.495, 3392.751, 30.12666, true, 0.0, 50.0, 0);
    mp.game.object.doorControl(mp.game.joaat('bmjr_block_gate'), -2314.485, 3405.073, 30.13932, true, 0.0, 50.0, 0);
});

// mp.events.add("client.jail.open.gate", () => {
//     mp.game.object.doorControl(mp.game.joaat('bmjr_block_gate'), -2323.495, 3392.751, 30.12666, false, 0.0, 50.0, 0);
//     mp.game.object.doorControl(mp.game.joaat('bmjr_block_gate'), -2323.495, 3392.751, 30.12666, false, 0.0, 50.0, 0);
// });

// mp.events.add("client.jail.close.gate", () => {
//     mp.game.object.doorControl(mp.game.joaat('bmjr_block_gate'), -2323.495, 3392.751, 30.12666, true, 0.0, 50.0, 0);
//     mp.game.object.doorControl(mp.game.joaat('bmjr_block_gate'), -2323.495, 3392.751, 30.12666, true, 0.0, 50.0, 0);
// });