mp.events.addCommand('setmusic3d', (player) => {
    if (!player.vehicle) {
        player.outputChatBox('Ты должен находиться в транспорте!');
        return;
    }

    let vehicle = player.vehicle;
    let pos = vehicle.position;

    let sound = mp.audio.createSound("./example.mp3", pos, {
        volume: 1.0,
        loop: true
    });

    vehicle.setVariable('musicSound', sound);
    player.outputChatBox("Музыка запущена для транспорта!");
});
