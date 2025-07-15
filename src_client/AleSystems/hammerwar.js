let hammerwarBlip = null;
gm.events.add('createHammerWarBlip', function (position) {
	if (hammerwarBlip != null)
		hammerwarBlip.destroy();

	hammerwarBlip = mp.blips.new(378, position,
	{
		name: translateText("ВЗХ"),
		scale: 1,
		color: 1,
		alpha: 255,
		drawDistance: 100,
		shortRange: true,
		rotation: 0,
		dimension: 0,
	});
});

gm.events.add('deleteHammerWarBlip', function () {
	if (hammerwarBlip != null)
		hammerwarBlip.destroy();

	hammerwarBlip = null;
});