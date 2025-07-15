mp.events.add("client.armyKPP2.open.gate", () => {
    mp.game.object.doorControl(mp.game.joaat('bmjr_block_gate'), -2323.495, 3392.751, 30.12666, false, 0.0, 50.0, 0);
    mp.game.object.doorControl(mp.game.joaat('bmjr_block_gate'), -2314.485, 3405.073, 30.13932, false, 0.0, 50.0, 0);
});

mp.events.add("client.armyKPP2.close.gate", () => {
    mp.game.object.doorControl(mp.game.joaat('bmjr_block_gate'), -2323.495, 3392.751, 30.12666, true, 0.0, 50.0, 0);
    mp.game.object.doorControl(mp.game.joaat('bmjr_block_gate'), -2314.485, 3405.073, 30.13932, true, 0.0, 50.0, 0);
});
mp.events.add("client.armyKPP1.open.gate", () => {
    mp.game.object.doorControl(mp.game.joaat('bmjr_block_gate'), -1569.503, 2784.424, 16.93626, false, 0.0, 50.0, 0);
    mp.game.object.doorControl(mp.game.joaat('bmjr_block_gate'), -1580.521, 2773.849, 16.87911, false, 0.0, 50.0, 0);
    mp.game.object.doorControl(mp.game.joaat('fluorine4305_bollard_02'), -1590.81665, 2793.07837, 14.4444895, true, 0.0, 50.0, 0);
    mp.game.object.doorControl(mp.game.joaat('fluorine4305_bollard_02'), -1595.13354, 2789.505, 14.2615585, true, 0.0, 50.0, 0);
    mp.game.object.doorControl(mp.game.joaat('fluorine4305_bollard_02'), -1583.61743, 2799.44727, 14.3025675, true, 0.0, 50.0, 0);
    mp.game.object.doorControl(mp.game.joaat('fluorine4305_bollard_02'), -1587.928, 2795.68677, 14.4546747, true, 0.0, 50.0, 0);
});

mp.events.add("client.armyKPP1.close.gate", () => {
    mp.game.object.doorControl(mp.game.joaat('bmjr_block_gate'), -1569.503, 2784.424, 16.93626, true, 0.0, 50.0, 0);
    mp.game.object.doorControl(mp.game.joaat('bmjr_block_gate'), -1580.521, 2773.849, 16.87911, true, 0.0, 50.0, 0);
    mp.game.object.doorControl(mp.game.joaat('fluorine4305_bollard_02'), -1590.81665, 2793.07837, 14.4444895, false, 0.0, 50.0, 0);
    mp.game.object.doorControl(mp.game.joaat('fluorine4305_bollard_02'), -1595.13354, 2789.505, 14.2615585, false, 0.0, 50.0, 0);
    mp.game.object.doorControl(mp.game.joaat('fluorine4305_bollard_02'), -1583.61743, 2799.44727, 14.3025675, false, 0.0, 50.0, 0);
    mp.game.object.doorControl(mp.game.joaat('fluorine4305_bollard_02'), -1587.928, 2795.68677, 14.4546747, false, 0.0, 50.0, 0);
});
// Открытие/закрытие ворот
