const FishingStatus = mp.browsers.new("package://cef/FishingStatus/index.html");

mp.events.add("client:show::FishingStatus", () => {
   FishingStatus.execute(`app.Open()`);
});

mp.events.add("client:close::FishingStatus", () => {
  FishingStatus.execute(`app.Close()`);
});

