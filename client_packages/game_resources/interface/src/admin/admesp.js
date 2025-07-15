var esptoggle = 0;
var myalvl = 0;

mp.keys.bind(Keys.VK_F12, false, function () {
    if (!loggedin || localplayer.getVariable('IS_ADMIN') !== true) return;
    myalvl = localplayer.getVariable('ALVL');
    esptoggle = (esptoggle + 1) % 4;

    const messages = [
        "ESP: \u041E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u043E", 
        "ESP: \u0418\u0433\u0440\u043E\u043A\u0438", 
        "ESP: \u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442", 
        "ESP: \u0418\u0433\u0440\u043E\u043A\u0438 \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442"
    ];
    
    mp.events.call('notify', 1 + (esptoggle > 0), 8, messages[esptoggle], 3000);
});

mp.events.add('render', () => {
    if (!loggedin || localplayer.getVariable('IS_ADMIN') !== true) return;
    if (esptoggle < 1) return;

    try {
        let position;
        
        if (esptoggle === 1 || esptoggle === 3) {
            mp.players.forEachInStreamRange(player => {
                if (player.handle !== 0 && player !== mp.players.local && myalvl >= player.getVariable('ALVL')) {
                    position = player.position;
                    let color = player.getVariable('IS_ADMIN') ? [255, 0, 0, 255] : [255, 255, 255, 255];
                    
                    mp.game.graphics.drawText(
                        `${player.name} (${player.remoteId})`, 
                        [position.x, position.y, position.z + 1.5], 
                        { scale: [0.4, 0.4], outline: true, color, font: 0 }
                    );
                }
            });
        }
        
        if (esptoggle === 2 || esptoggle === 3 || localplayer.getVariable('PLAYER_DL')) {
            mp.vehicles.forEachInStreamRange(vehicle => {
                if (vehicle.handle !== 0) {
                    position = vehicle.position;
                    let lockedStatus = vehicle.getVariable('LOCKED') ? "Locked" : "Unlocked";
                    let text = `${mp.game.vehicle.getDisplayNameFromVehicleModel(vehicle.model)} (${vehicle.getNumberPlateText()} | ID: ${vehicle.remoteId} | HP: ${(vehicle.getEngineHealth() / 10).toFixed(1)} | ${lockedStatus})`;
                    
                    mp.game.graphics.drawText(
                        text, 
                        [position.x, position.y, position.z - 0.5], 
                        { scale: [0.35, 0.35], outline: true, color: [0, 255, 0, 255], font: 0 }
                    );
                }
            });
        }
    } catch (e) { }
});
