global.binderFunctions.Whistle = () => {
            if (!mp.game.streaming.hasAnimDictLoaded("rcmnigel1c")) {
                mp.game.streaming.requestAnimDict("rcmnigel1c");
                do {
                    await mp.game.waitAsync(10);
                } while (!mp.game.streaming.hasAnimDictLoaded("rcmnigel1c"));
            }

        if (!mp.players.exists(player) || player.handle === 0) {
            return mp.game.streaming.removeAnimDict("rcmnigel1c");
        }

        localPlayer.taskPlayAnim("rcmnigel1c", "hailing_whistle_waive_a", 2.7, 2.7, -1, 49, 0, false, false, false);

	mp.game.streaming.removeAnimDict("rcmnigel1c");
        await mp.game.waitAsync(1000 * mp.game.entity.getEntityAnimDuration("rcmnigel1c", "hailing_whistle_waive_a"));
        mp.game.invoke("0x176CECF6F920D707", localPlayer.handle);
};
