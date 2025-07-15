let musicBrowser = null;

// Включаем музыку при посадке в авто
mp.events.add('playerEnterVehicle', (vehicle) => {
    let url = vehicle.getVariable('musicUrl');
    if (url) {
        playMusic(url);
    }
});

// Включаем музыку, если транспорт появился рядом
mp.events.add('entityStreamIn', (entity) => {
    if (entity.type === 'vehicle') {
        let url = entity.getVariable('musicUrl');
        if (url) {
            playMusic(url);
        }
    }
});

// Останавливаем музыку при выходе из машины
mp.events.add('playerExitVehicle', () => {
    stopMusic();
});

// Функция для воспроизведения музыки
function playMusic(url) {
    if (musicBrowser) {
        musicBrowser.destroy();
    }
    musicBrowser = mp.browsers.new('package://cef/music/index.html');
    musicBrowser.execute(`playMusic("${url}");`);
}

// Функция для остановки музыки
function stopMusic() {
    if (musicBrowser) {
        musicBrowser.destroy();
        musicBrowser = null;
    }
}
