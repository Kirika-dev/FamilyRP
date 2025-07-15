let megaphoneCEF = null; // Объявляем переменную глобально, но не создаем браузер сразу

mp.events.add("PlayMegaphoneNoise", () => {
    if (!megaphoneCEF) {
        megaphoneCEF = mp.browsers.new("package://cef/megaphone.html"); // Создаем CEF только при первом вызове
        mp.gui.chat.push("CEF создан!"); // Проверяем, создаётся ли CEF
    }
    mp.gui.chat.push("Мегафон ВКЛЮЧЕН");
    megaphoneCEF.execute(`playMegaphoneSound();`);
});

mp.events.add("StopMegaphoneNoise", () => {
    if (megaphoneCEF) {
        megaphoneCEF.execute(`stopMegaphoneSound();`);
        mp.gui.chat.push("Мегафон ВЫКЛЮЧЕН");
        megaphoneCEF.destroy(); // Удаляем CEF после выключения мегафона
        megaphoneCEF = null; // Обнуляем переменную
    }
});
