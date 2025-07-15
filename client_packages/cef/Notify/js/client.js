const NotifyBrowser = mp.browsers.new("package://cef/Notify/index.html");

gm.events.add('client::addNotify', (typeMsg, msg, time) => {
    if (NotifyBrowser) {
        NotifyBrowser.execute(`app.$store.commit('main/showNotify', {
            type: '${typeMsg}',
            text: '${msg}',
            duration: ${time}
        })`);
    }
});
