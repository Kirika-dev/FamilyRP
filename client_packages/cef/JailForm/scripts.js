let gateStatusText = document.getElementById('gate-status-text');
let openGateBtn = document.getElementById('open-gate-btn');
let closeGateBtn = document.getElementById('close-gate-btn');

// Обработчик для открытия ворот
openGateBtn.addEventListener('click', () => {
    // Отправляем событие на сервер для открытия ворот
    mp.trigger('client.armyKPP2.open.gate');

    // Обновляем статус на UI
    gateStatusText.textContent = "Статус: Открыты";
});

// Обработчик для закрытия ворот
closeGateBtn.addEventListener('click', () => {
    // Отправляем событие на сервер для закрытия ворот
    mp.trigger('client.armyKPP2.close.gate');

    // Обновляем статус на UI
    gateStatusText.textContent = "Статус: Закрыты";
});

// Получаем данные о статусе ворот с сервера
mp.events.add("client.armyKPP2.update.status", (status) => {
    gateStatusText.textContent = `Статус: ${status ? "Открыты" : "Закрыты"}`;
});
