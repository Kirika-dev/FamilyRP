mp.events.add('openBusRouteSelectionMenu', (routes) => {
    let routeList = routes.split(',');
    let menu = mp.browsers.new('./src_client/Bus/busRouteSelectionMenu.html');
    menu.execute(`showBusRouteSelectionMenu(${JSON.stringify(routeList)})`);
});

mp.events.add('selectBusRoute', (routeIndex) => {
    mp.events.callRemote('selectBusRoute', routeIndex);
});
