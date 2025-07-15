let govMenuBrowser = null;

mp.events.add('showGovMenu', () => {
    if (govMenuBrowser === null) {
    govMenuBrowser = mp.browsers.new('package://cef/AdminMenu/govMenu.html');
    mp.gui.cursor.show(true, true);
    mp.gui.chat.activate(false);
}
});

mp.events.add('closeGovMenu', () => {
    if (govMenuBrowser !== null) {
        govMenuBrowser.destroy();
        govMenuBrowser = null;
        mp.gui.cursor.show(false, false);
        mp.gui.chat.activate(true);
    }
});

mp.events.add('submitGovMessage', (msg1, msg2) => {
    mp.events.callRemote('sendGovMessage', msg1, msg2);
    mp.events.call('closeGovMenu');
});
