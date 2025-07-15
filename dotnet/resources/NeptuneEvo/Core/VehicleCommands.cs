using System;
using System.Collections.Generic;
using System.IO;
using GTANetworkAPI;
using NeptuneEvo.Fractions.Table.Vehicle;
using NeptuneEvo.Handles;
using Newtonsoft.Json;

public class VehicleCommands : Script
{
    private static Dictionary<int, string> VehicleCategories = new Dictionary<int, string>
    {
        { 0, "Compacts" }, { 1, "Sedans" }, { 2, "SUVs" }, { 3, "Coupes" }, { 4, "Muscle" },
        { 5, "Sports Classics" }, { 6, "Sports" }, { 7, "Super" }, { 8, "Motorcycles" },
        { 9, "Off-road" }, { 10, "Industrial" }, { 11, "Utility" }, { 12, "Vans" }, { 13, "Cycles" },
        { 14, "Boats" }, { 15, "Helicopters" }, { 16, "Planes" }, { 17, "Service" },
        { 18, "Emergency" }, { 19, "Military" }, { 20, "Commercial" }, { 21, "Trains" }
    };

    private static List<string> StandardVehicles = new List<string>(Enum.GetNames(typeof(VehicleHash)));
    private static Dictionary<string, List<string>> categorizedVehicles = new Dictionary<string, List<string>>();




    private const string DLC_FOLDER = "C:/Servers/redage_v3-main/client_packages/game_resources/dlcpacks"; // Укажи правильный путь!

    [Command("getdlcvehicles")]
    public void GetDLCVehicles(Player player)
    {
        try
        {
            if (!Directory.Exists(DLC_FOLDER))
            {
                player.SendChatMessage("❌ Папка dlcpacks не найдена!");
                return;
            }

            string[] dlcPacks = Directory.GetDirectories(DLC_FOLDER);
            List<string> vehicleNames = new List<string>();

            foreach (string folder in dlcPacks)
            {
                string dlcName = Path.GetFileName(folder);
                vehicleNames.Add(dlcName);
            }

            string result = string.Join(", ", vehicleNames);
            File.WriteAllText("dlc_vehicles_list.txt", result); // Сохраняем список в файл

            player.SendChatMessage($"✅ Найдено DLC-пакетов: {vehicleNames.Count}. Список сохранён в dlc_vehicles_list.txt.");
        }
        catch (Exception e)
        {
            player.SendChatMessage($"❌ Ошибка при получении списка DLC: {e.Message}");
        }
    }
    [Command("setmusic")]
    public void SetMusic(Player player, string url)
    {
        if (!player.IsInVehicle)
        {
            player.SendChatMessage("Ты должен находиться в транспорте!");
            return;
        }

        Vehicle vehicle = player.Vehicle;
        vehicle.SetSharedData("musicUrl", url);

        player.SendChatMessage($"Музыка установлена в транспорт: {url}");
        NAPI.Util.ConsoleOutput($"[DEBUG] URL музыки установлен: {url}");
    }
}


