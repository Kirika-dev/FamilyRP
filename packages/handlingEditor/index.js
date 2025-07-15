const handlingManager = require('./handlingManager'); // Импорт handlingManager

mp.events.addCommand('edithandling', (player, fullText, model, key, value) => {
    if (!model || !key || isNaN(parseFloat(value))) {
        player.outputChatBox('Использование: /edithandling [model] [key] [value]');
        return;
    }

    const success = handlingManager.updateHandling(model, key, value); // Используем handlingManager
    if (success) {
        player.outputChatBox(`Handling ${key} для ${model} успешно изменён на ${value}.`);
        mp.world.reboot(); // Перезапуск мира
    } else {
        player.outputChatBox('Ошибка изменения handling.meta. Проверьте консоль сервера.');
    }
});
