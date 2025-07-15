using GTANetworkAPI;
using System;
using System.Collections.Generic;
using NeptuneEvo.Core;
using Redage.SDK;
using NeptuneEvo.MoneySystem;
using Newtonsoft.Json;
using NeptuneEvo.Handles;
using NeptuneEvo.Accounts;
using NeptuneEvo.Character;
using NeptuneEvo.Players;
using NeptuneEvo.Fractions;

namespace NeptuneEvo.GUI
{
    class Dashboard : Script
    {

        public static void Event_OnPlayerDisconnected(Player player, DisconnectionType type, string reason)
        {
            try
            {
                if (!isopen.ContainsKey(player)) return;
                isopen.Remove(player);
            }
            catch (Exception e) { Log.Write("PlayerDisconnected: " + e.Message, nLog.Type.Error); }
        }

        private static nLog Log = new nLog("Dashboard");
        public static Dictionary<Player, bool> isopen = new Dictionary<Player, bool>();
        private static Dictionary<int, string> Status = new Dictionary<int, string>
        {// Group id, Status
            {0, "Игрок" },
            {16, "Администратор" }
        };
        private static Dictionary<int, string> Gender = new Dictionary<int, string>
        {// Group id, Status
            {0, "Женский" },
            {1, "Мужской" }
        };







        public static void Close(Player player, bool resetOpenOut = false)
        {
            int data = (resetOpenOut) ? 11 : 1;
            Trigger.ClientEvent((Handles.ExtPlayer)player, "board", data);
            player.ResetData("OPENOUT_TYPE");
        }
        public static void sendStats(ExtPlayer player, int fractionId)
        {
            try
            {
                var sessionData = player.GetSessionData();
                if (sessionData == null) return;
                var accountData = player.GetAccountData();
                if (accountData == null) return;
                var characterData = player.GetCharacterData();
                if (characterData == null) return;
                var fractionData = Manager.GetFractionData(fractionId);
                if (fractionData == null)
                    return;

                string status =
                    (characterData.AdminLVL >= 1) ? "Администратор" :
                    (accountData.VipLvl > 0) ? $"{Group.GroupNames[accountData.VipLvl]} до {accountData.VipDate.ToString("dd.MM.yyyy")}" :
                    $"{Group.GroupNames[accountData.VipLvl]}";

                long bank = (characterData.Bank != 0) ? Bank.Accounts[characterData.Bank].Balance : 0;

                string lic = "";
                for (int i = 0; i < characterData.Licenses.Count; i++)
                    if (characterData.Licenses[i]) lic += $"{Main.LicWords[i]} / ";
                if (lic == "") lic = "Отсутствуют";

                string work = (characterData.WorkID > 0) ? Jobs.WorkManager.JobStats[characterData.WorkID - 1] : "Безработный";
               





                List<object> data = new List<object>
                {
                    characterData.LVL, //0
                    $"{characterData.EXP}/{characterData.EXP + 3 + characterData.LVL * 3}", //1
                    
                    status, //3
                    characterData.Warns,//4
                    lic,//5
                    characterData.CreateDate.ToString("dd.MM.yyyy"),//6
                    work,//7
                    
                    
                    characterData.FirstName,//10
                    characterData.LastName,//11
                    characterData.UUID,//12
                    characterData.Bank,//13
                    
                };

                string json = JsonConvert.SerializeObject(data);
                Log.Debug("data is: " + json.ToString());
                Trigger.ClientEvent((Handles.ExtPlayer)player, "board", 2, json);

                data.Clear();

            }
            catch (Exception e)
            {
                Log.Write("EXCEPTION AT \"DASHBOARD_SENDSTATS\":\n" + e.ToString(), nLog.Type.Error);
            }
        }
    }
}
        


       

