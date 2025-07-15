const HudBrowser = mp.browsers.new("package://cef/Hud/index.html");

gm.events.add('client::Hud', (playerId, playerStatic, playerCash, ) => {
    if (NotifyBrowser) {
        NotifyBrowser.execute(`app.$store.commit('main/showNotify', {
            type: '${typeMsg}',
            text: '${msg}',
            duration: ${time}
        })`);
    }
});
