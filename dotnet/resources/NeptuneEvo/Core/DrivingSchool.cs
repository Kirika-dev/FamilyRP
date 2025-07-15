using System;
using GTANetworkAPI;
using Localization;
using NeptuneEvo.Handles;
using NeptuneEvo.Accounts;
using NeptuneEvo.Players.Models;
using NeptuneEvo.Players;
using NeptuneEvo.Character.Models;
using NeptuneEvo.Character;
using NeptuneEvo.Functions;
using NeptuneEvo.GUI;
using NeptuneEvo.Players.Popup.List.Models;
using NeptuneEvo.Quests;
using NeptuneEvo.VehicleData.LocalData;
using NeptuneEvo.VehicleData.LocalData.Models;
using Redage.SDK;
using System.Collections.Generic;
using NeptuneEvo.Fractions.Table.Vehicle;
using GTANetworkMethods;
using Database;
using Repository = NeptuneEvo.Chars.Repository;
using NeptuneEvo.BattlePass.Models;
using static NeptuneEvo.Functions.CustomColShape;

namespace NeptuneEvo.Core
{
    class DrivingSchool : Script
    {
        private static byte Step = 0;
        private static readonly nLog Log = new nLog("Core.DrivingSchool");

        private static Vector3 enterSchool = new Vector3(-915.0237, -2038.613, 9.40);

        private static Vector3[] startCourseCoord = new Vector3[3]
        {
            new Vector3(-893.7903, -2049.06, 8.884938),
            new Vector3(-954.3961, -2057.442, 8.28232),
            new Vector3(-954.3961, -2057.442, 8.28232),
        };
        private static Vector3[] startCourseRot = new Vector3[3]
        {
            new Vector3(0, 0, 130f),
            new Vector3(0, 0, 126.2345),
            new Vector3(0, 0, 126.2345),
        };

        public static List<Vector3> drivingCoords = new List<Vector3>()
        {
            new Vector3(-922.5455, -2078.952, 8.884938),     //as1
            new Vector3(-943.9007, -2124.576, 8.903489),     //as2
            new Vector3(-1009.972, -2098.968, 12.68621),     //as3
            new Vector3(-1083.344, -1949.253, 12.72149),     //as4
            new Vector3(-893.1658, -1755.668, 18.6328),     //as5
            new Vector3(-802.588, -1660.319, 16.18098),     //as6
            new Vector3(-707.9262, -1529.791, 12.5376),     //as7
            new Vector3(-672.6287, -1470.063, 10.11085),     //as8
            new Vector3(-645.9832, -1395.972, 10.24782),     //as9
            new Vector3(-634.21, -1318.427, 10.24249),     //as10
            new Vector3(-674.2361, -1243.223, 10.25624),     //as11
            //new Vector3(-787.47986, -1292.7037, 5.0881996),     //as12
            //new Vector3(-704.8362, -1247.507, 9.798345),     //as13
            //new Vector3(-704.6472, -1247.343, 10.67442),     //as1
            new Vector3(-686.6135, -1252.129, 11.03791),     //as2
            new Vector3(-668.1112, -1277.741, 11.11878),     //as3
            new Vector3(-647.9838, -1297.883, 11.11266),     //as4
            new Vector3(-631.2891, -1299.402, 11.10439),     //as5
            new Vector3(-612.2523, -1283.693, 11.10192),     //as6
            new Vector3(-582.577, -1247.959, 13.36889),     //as7
            new Vector3(-551.6786, -1204.123, 18.13077),     //as8
            new Vector3(-540.2383, -1181.224, 19.18878),     //as9
            new Vector3(-510.3582, -1179.808, 20.25262),     //as10
            new Vector3(-489.511, -1218.502, 21.78694),     //as11
            new Vector3(-515.7674, -1296.293, 28.07829),     //as12
            new Vector3(-534.27, -1349.218, 29.60077),     //as13
            new Vector3(-519.2154, -1400.633, 29.65829),     //as14
            new Vector3(-474.7718, -1426.947, 29.6368),     //as15
            new Vector3(-438.2497, -1434.056, 29.6976),     //as16
            new Vector3(-392.2361, -1440.421, 29.69909),     //as17
            new Vector3(-355.8693, -1440.931, 29.81322),     //as18
            new Vector3(-302.8323, -1441.081, 31.73903),     //as19
            new Vector3(-286.3747, -1453.478, 31.72387),     //as20
            new Vector3(-292.7627, -1507.852, 29.64017),     //as21
            new Vector3(-329.7639, -1587.84, 22.43151),     //as22
            new Vector3(-383.8394, -1681.795, 19.32527),     //as23
            new Vector3(-411.5873, -1749.223, 20.53662),     //as24
            new Vector3(-428.1123, -1765.016, 20.96091),     //as25
            new Vector3(-484.4346, -1776.815, 21.43759),     //as26
            new Vector3(-550.9955, -1747.087, 22.35854),     //as27
            new Vector3(-609.9813, -1705.323, 24.43946),     //as28
            new Vector3(-654.9661, -1664.971, 25.63946),     //as29
            new Vector3(-701.2487, -1616.159, 23.39617),     //as30
            new Vector3(-715.5563, -1603.546, 22.83745),     //as31
            new Vector3(-736.1861, -1612.059, 24.43959),     //as32
            new Vector3(-763.5643, -1642.022, 27.34238),     //as33
            new Vector3(-771.7167, -1694.855, 29.66684),     //as34
            new Vector3(-770.2577, -1722.702, 29.6922),     //as35
            new Vector3(-762.8403, -1745.841, 29.74304),     //as36
            new Vector3(-754.4462, -1759.328, 29.74207),     //as37
            new Vector3(-728.3046, -1759.528, 30.03871),     //as38
            new Vector3(-661.0937, -1753.61, 37.98396),     //as39
            new Vector3(-559.1539, -1723.255, 37.78191),     //as40
            new Vector3(-510.9143, -1702.245, 37.25971),     //as41
            new Vector3(-444.6659, -1643.36, 32.99823),     //as42
            new Vector3(-392.0374, -1524.149, 25.89943),     //as43
            new Vector3(-384.0456, -1396.677, 22.64989),     //as44
            new Vector3(-389.9767, -1305.895, 22.36889),     //as45
            new Vector3(-390.8521, -1190.269, 21.19579),     //as46
            new Vector3(-390.8799, -1070.524, 22.41175),     //as47
            new Vector3(-382.655, -914.3037, 35.94333),     //as48
            new Vector3(-384.1105, -832.9343, 39.32611),     //as49
            new Vector3(-392.9055, -739.7156, 37.61785),     //as50
            new Vector3(-393.7488, -666.5231, 37.62029),     //as51
            new Vector3(-393.5527, -604.5363, 33.92249),     //as52
            new Vector3(-404.7963, -508.064, 34.13367),     //as53
            new Vector3(-441.523, -476.5334, 33.31015),     //as54
            new Vector3(-523.574, -468.2849, 32.58505),     //as55
            new Vector3(-609.9857, -475.7358, 35.1473),     //as56
            new Vector3(-632.9848, -477.7071, 35.26155),     //as57
            new Vector3(-644.2718, -491.5341, 35.19373),     //as58
            new Vector3(-644.6234, -541.7328, 35.1782),     //as59
            new Vector3(-645.2361, -570.4226, 35.4185),     //as60
            new Vector3(-640.3406, -635.2014, 32.45972),     //as61
            new Vector3(-640.1005, -683.8199, 31.69821),     //as62
            new Vector3(-640.896, -779.8826, 25.85054),     //as63
            new Vector3(-640.9213, -809.8345, 25.52384),     //as64
            new Vector3(-645.9667, -859.3205, 25.0564),     //as65
            new Vector3(-646.494, -939.6482, 22.5421),     //as66
            new Vector3(-649.717, -1000.834, 20.64941),     //as67
            new Vector3(-752.1108, -1101.364, 11.19446),     //as68
            new Vector3(-769.0291, -1141.633, 11.00855),     //as69
            new Vector3(-731.3914, -1191.951, 11.05298),     //as70
            new Vector3(-703.2067, -1227.076, 11.04342),     //as71
            new Vector3(-656.5361, -1389.274, 10.16991),     //as14
            new Vector3(-696.2311, -1483.91, 10.59189),     //as15
            new Vector3(-761.0922, -1598.723, 14.0109),     //as16
            new Vector3(-848.3638, -1702.412, 18.45708),     //as17
            new Vector3(-997.0919, -1855.749, 17.40573),     //as18
            new Vector3(-1095.221, -1963.519, 12.68603),     //as19
            new Vector3(-1014.577, -2102.444, 12.75051),     //as20
            new Vector3(-910.9487, -2071.962, 8.884502),     //as21
        };

        [ServerEvent(Event.ResourceStart)]
        public void onResourceStart()
        {
            try
            {
                CustomColShape.CreateCylinderColShape(enterSchool, 1, 2, 0, ColShapeEnums.DriveSchool);

                NAPI.Marker.CreateMarker(1, enterSchool - new Vector3(0, 0, 0.7f), new Vector3(), new Vector3(), 1, new Color(255, 255, 255, 220));
                NAPI.TextLabel.CreateTextLabel(Main.StringToU16("~w~Автошкола"), enterSchool + new Vector3(0, 0, 1f), 5f, 0.3f, 0, new Color(255, 255, 255));

               Main.CreateBlip(new Main.BlipData(498, "Автошкола", enterSchool, 2, true));
                PedSystem.Repository.CreateQuest("mp_m_securoguard_01", enterSchool, 220f, title: "~y~NPC~w~ Офицер Бенсон\nВыдача лицензий", colShapeEnums: ColShapeEnums.DriveSchool);

                for (int i = 0; i < 89; i++)
                {
                    var shape = CustomColShape.CreateCylinderColShape(drivingCoords[i], 7, 5, 0, ColShapeEnums.DriveSchoolCoord, i);
                    shape.OnEntityEnterColShape += OnPlayerEnterDrive;
                    shape.SetData("NUMBER", i);

                }
            }
            catch (Exception e)
            {
                Log.Write($"onResourceStart Exception: {e.ToString()}");
            }
        }

        [ServerEvent(Event.PlayerEnterVehicle)]
        public void onPlayerEnterVehicleHandler(ExtPlayer player, ExtVehicle vehicle, sbyte seatid)
        {
            try
            {
                var sessionData = player.GetSessionData();
                if (sessionData == null) return;

                var characterData = player.GetCharacterData();
                if (characterData == null) return;

                var vehicleLocalData = vehicle.GetVehicleLocalData();
                if (vehicleLocalData != null)
                {
                    if (vehicleLocalData.Access != VehicleAccess.School) return;
                    if (vehicleLocalData.WorkDriver != characterData.UUID)
                    {
                        VehicleManager.WarpPlayerOutOfVehicle(player);
                        Notify.Send(player, NotifyType.Warning, NotifyPosition.BottomCenter, $"Эта учебная машина не предназначается для Вас.", 3000);
                        return;
                    }
                    if (sessionData.TimersData.SchoolTimer != null)
                    {
                        Timers.Stop(sessionData.TimersData.SchoolTimer);
                        sessionData.TimersData.SchoolTimer = null;
                    }
                }
            }
            catch (Exception e)
            {
                Log.Write($"onPlayerEnterVehicleHandler Exception: {e.ToString()}");
            }
        }

        [ServerEvent(Event.PlayerExitVehicle)]
        public void Event_OnPlayerExitVehicle(ExtPlayer player, ExtVehicle vehicle)
        {
            try
            {
                var sessionData = player.GetSessionData();
                if (sessionData == null) return;
                if (!player.IsCharacterData()) return;
                if (sessionData.DSchoolData.Vehicle == vehicle)
                {
                    if (sessionData.TimersData.SchoolTimer == null) sessionData.TimersData.SchoolTimer = Timers.StartOnce(60000, () => timer_exitVehicle(player), true);
                    Notify.Send(player, NotifyType.Warning, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.FailExamIfNotSit), 7000);
                    return;
                }
            }
            catch (Exception e)
            {
                Log.Write($"Event_OnPlayerExitVehicle Exception: {e.ToString()}");
            }
        }

        private void timer_exitVehicle(ExtPlayer player)
        {
            try
            {
                var sessionData = player.GetSessionData();
                if (sessionData == null) return;
                if (!player.IsCharacterData()) return;
                if (sessionData.DSchoolData.Vehicle == null) return;
                if (player.IsInVehicle && player.Vehicle == sessionData.DSchoolData.Vehicle) return;
                VehicleStreaming.DeleteVehicle(sessionData.DSchoolData.Vehicle);
                Trigger.ClientEvent(player, "deleteCheckpoint", 12, 0);
                sessionData.DSchoolData.IsDriving = false;
                sessionData.DSchoolData.Vehicle = null;
                if (sessionData.TimersData.SchoolTimer != null)
                {
                    Timers.Stop(sessionData.TimersData.SchoolTimer);
                    sessionData.TimersData.SchoolTimer = null;
                }
                Notify.Send(player, NotifyType.Warning, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.FailExam), 5000);
            }
            catch (Exception e)
            {
                Log.Write($"timer_exitVehicle Exception: {e.ToString()}");
            }
        }

        public static void onPlayerDisconnected(ExtPlayer player, DisconnectionType type, string reason)
        {
            try
            {
                var sessionData = player.GetSessionData();
                if (sessionData == null) return;
                if (sessionData.DSchoolData.Vehicle != null)
                {
                    VehicleStreaming.DeleteVehicle(sessionData.DSchoolData.Vehicle);
                    sessionData.DSchoolData.Vehicle = null;
                    if (sessionData.TimersData.SchoolTimer != null)
                    {
                        Timers.Stop(sessionData.TimersData.SchoolTimer);
                        sessionData.TimersData.SchoolTimer = null;
                    }
                }
            }
            catch (Exception e)
            {
                Log.Write($"onPlayerDisconnected Exception: {e.ToString()}");
            }
        }
        #region DriveSchoolCoord
        [Interaction(ColShapeEnums.DriveSchoolCoord, In: true)]
        public static void OnPlayerEnterDrive(GTANetworkAPI.ColShape shape, GTANetworkAPI.Player player)
        {
            try
            {
                


                //if (!player.IsInVehicle || player.VehicleSeat != 0) return;
                //if (vehicleLocalData.Access = (VehicleAccess)Index) return;


                //if (!sessionData.DSchoolData.IsDriving) return;
                //if (player.Vehicle != sessionData.DSchoolData.Vehicle) return;
                //if (ListId != sessionData.DSchoolData.Check) return;
                //int check = sessionData.DSchoolData.Check;
                //if (check == drivingCoords.Count - 1)
                //{
                //    sessionData.DSchoolData.IsDriving = false;
                //    var vehHP = player.Vehicle.Health;
                //    VehicleStreaming.DeleteVehicle(sessionData.DSchoolData.Vehicle);
                //    sessionData.DSchoolData.Vehicle = null;
                //    if (vehHP < 500)
                //    {
                //        Notify.Send(player, NotifyType.Warning, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.FailExam), 5000);
                //        return;
                //    }

                //    characterData.Licenses[sessionData.DSchoolData.License] = true;
                //    Notify.Send(player, NotifyType.Warning, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.SucExam), 5000);
                //    Repository.PlayerStats(player);
                //    Trigger.ClientEvent(player, "deleteCheckpoint", 12, 0);
                //    return;
                //}

                //sessionData.DSchoolData.Check = (short)(check + 1);
                //if (check + 2 < drivingCoords.Count)
                //    Trigger.ClientEvent(player, "createCheckpoint", 12, 1, drivingCoords[check + 1] - new Vector3(0, 0, 2), 4, 0, 255, 0, 0, drivingCoords[check + 2] - new Vector3(0, 0, 1.12));
                //else
                //    Trigger.ClientEvent(player, "createCheckpoint", 12, 1, drivingCoords[check + 1] - new Vector3(0, 0, 2), 4, 0, 255, 0, 0);
                //Trigger.ClientEvent(player, "createWaypoint", drivingCoords[check + 1].X, drivingCoords[check + 1].Y);


                if (!player.IsInVehicle || player.VehicleSeat != 0) return;
                if (!player.Vehicle.HasData("ACCESS") || player.Vehicle.GetData<string>("ACCESS") != "SCHOOL") return;
                if (!player.HasData("IS_DRIVING")) return;
                if (player.Vehicle != player.GetData<GTANetworkAPI.Vehicle>("SCHOOLVEH")) return;
                if (shape.GetData<int>("NUMBER") != player.GetData<int>("CHECK")) return;
                Trigger.ClientEvent((ExtPlayer)player, "deleteCheckpoint", 12, 0);
                var check = player.GetData<int>("CHECK");
                if (check == drivingCoords.Count - 1)
                {
                    player.ResetData("IS_DRIVING");
                    var vehHP = player.Vehicle.Health;
                    NAPI.Task.Run(() =>
                    {
                        try
                        {
                            NAPI.Entity.DeleteEntity(player.Vehicle);
                        }
                        catch { }
                    });
                    player.ResetData("SCHOOLVEH");
                    if (vehHP < 500)
                    {
                        Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter, $"Вы провалили экзамен", 3000);
                        return;
                    }
                    //Main.Player[player].Licenses[player.GetData<int>("LICENSE")] = true;
                    Notify.Send(player, NotifyType.Success, NotifyPosition.BottomCenter, $"Вы успешно сдали экзамен", 3000);
                    Repository.PlayerStats((ExtPlayer)player);
                    Trigger.ClientEvent((ExtPlayer)player, "deleteCheckpoint", 12, 0);
                    return;
                }

                player.SetData("CHECK", check + 1);
                if (check + 2 < drivingCoords.Count)
                    Trigger.ClientEvent((ExtPlayer)player, "createCheckpoint", 12, 1, drivingCoords[check + 1] - new Vector3(0, 0, 2), 4, 0, 255, 0, 0, drivingCoords[check + 2] - new Vector3(0, 0, 1.12));
                else
                    Trigger.ClientEvent((ExtPlayer)player, "createCheckpoint", 12, 1, drivingCoords[check + 1] - new Vector3(0, 0, 2), 4, 0, 255, 0, 0);
                Trigger.ClientEvent((ExtPlayer)player, "createWaypoint", drivingCoords[check + 1].X, drivingCoords[check + 1].Y);
            }

            catch (Exception e)
            {
                Log.Write($"OnPlayerEnterDrive Exception: {e.ToString()}");
            }
        }
        #endregion
        public static void startDrivingCourse(ExtPlayer player, int index)
            
        {
            try
            {
                if (!FunctionsAccess.IsWorking("startDrivingCourse"))
                {
                    Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.FunctionOffByAdmins), 3000);
                    return;
                }
                var sessionData = player.GetSessionData();
                if (sessionData == null) return;
                var characterData = player.GetCharacterData();
                if (characterData == null) return;
                if (sessionData.DSchoolData.IsDriving || sessionData.WorkData.OnWork)
                {
                    Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.CantDoThisNow), 3000);
                    return;
                }
                if (characterData.Licenses[index])
                {
                    Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.YouAlreadyHaveLic), 3000);
                    return;
                }
                var fractionData = Fractions.Manager.GetFractionData((int) Fractions.Models.Fractions.CITY);
                if (fractionData == null)
                    return;
                Random rnd = new Random();
                uint dim = Convert.ToUInt32(rnd.Next(50, 80));
                switch (index)
                {
                    /*case 0:
                        if (Chars.UpdateData.CanIChange(player, Main.LicPrices[0], true) != 255) return;
                        characterData.Licenses[0] = true;
                        MoneySystem.Wallet.Change(player, -Main.LicPrices[0]);
                        fractionData.Money += Main.LicPrices[3];
                        //GameLog.Money($"player({characterData.UUID})", $"frac(6)", Main.LicPrices[3], $"buyLic");
                        Notify.Send(player, NotifyType.Success, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.SucBuyMotoLic), 3000);
                        //Repository.PlayerStats(player);
                        return;
                    case 1:
                        if (Chars.UpdateData.CanIChange(player, Main.LicPrices[1], true) != 255) return;
                        characterData.Licenses[1] = true;
                        qMain.UpdateQuestsStage(player, Zdobich.QuestName, (int)zdobich_quests.Stage7, 2, isUpdateHud: true);
                        qMain.UpdateQuestsComplete(player, Zdobich.QuestName, (int)zdobich_quests.Stage7, true);
                        MoneySystem.Wallet.Change(player, -Main.LicPrices[1]);
                        //fractionData.Money += Main.LicPrices[3];
                        //GameLog.Money($"player({characterData.UUID})", $"frac(6)", Main.LicPrices[3], $"buyLic");
                        Notify.Send(player, NotifyType.Success, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.SucBuyVehLic), 3000);
                        //Repository.PlayerStats(player);
                        return;
                    case 2:
                        if (Chars.UpdateData.CanIChange(player, Main.LicPrices[2], true) != 255) return;
                        characterData.Licenses[2] = true;
                        MoneySystem.Wallet.Change(player, -Main.LicPrices[2]);
                        //fractionData.Money += Main.LicPrices[3];
                        //GameLog.Money($"player({characterData.UUID})", $"frac(6)", Main.LicPrices[3], $"buyLic");
                        Notify.Send(player, NotifyType.Success, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.SucBuyGruzLic), 3000);
                        //Repository.PlayerStats(player);
                        return;*/
                    case 0:
                        try
                        {
                            if (Chars.UpdateData.CanIChange(player, Main.LicPrices[0], true) != 255) return;
                            GTANetworkAPI.Vehicle vehicle = VehicleStreaming.CreateVehicle1((VehicleHash)VehicleHash1.ural10, startCourseCoord[0], startCourseRot[0], 30, 111, $"KAT_A_{player.Value}{player.GetUUID()}", acc: VehicleAccess.School, petrol: 9999, workdriv: characterData.UUID);
                            vehicle.SetMod(53, 2);
                            vehicle.SetMod(1, 0);
                            vehicle.SetMod(4, 2);
                            vehicle.SetMod(5, 0);
                            vehicle.SetMod(8, 0);
                            vehicle.SetMod(9, 0);
                            vehicle.SetMod(10, 1);
                            vehicle.SetMod(11, 3);
                            vehicle.SetMod(12, 2);
                            vehicle.SetMod(13, 2);
                            vehicle.SetMod(15, 3);
                            vehicle.SetMod(18, 0);
                            qMain.UpdateQuestsStage(player, Zdobich.QuestName, (int)zdobich_quests.Stage7, 2, isUpdateHud: true);
                            qMain.UpdateQuestsComplete(player, Zdobich.QuestName, (int)zdobich_quests.Stage7, true);
                            //if (Step++ >= 13) Step = 0;
                            sessionData.DSchoolData.Vehicle = (ExtVehicle)vehicle;
                            sessionData.DSchoolData.IsDriving = true;
                            sessionData.DSchoolData.License = 0;
                            sessionData.DSchoolData.Check = 0;
                            player.SetIntoVehicle(vehicle, 0);
                            
                            player.SetData("SCHOOLVEH", vehicle);
                            vehicle.SetData("ACCESS", "SCHOOL");
                            vehicle.SetData("DRIVER", player);
                            player.SetData("IS_DRIVING", true);
                            player.SetData("LICENSE", 0);
                            player.SetData("CHECK", 0);
                            //player.SetIntoVehicle(vehicle, (int)VehicleSeat.Driver);
                            Trigger.ClientEvent(player, "setIntoVehicle", vehicle, VehicleSeat.Driver - 1);
                            Trigger.ClientEvent(player, "createCheckpoint", 12, 1, drivingCoords[0] - new Vector3(0, 0, 2), 4, 0, 255, 0, 0);
                            Trigger.ClientEvent(player, "createWaypoint", drivingCoords[0].X, drivingCoords[0].Y);
                            MoneySystem.Wallet.Change(player, -Main.LicPrices[0]);
                            fractionData.Money += Main.LicPrices[0];
                            characterData.Licenses[sessionData.DSchoolData.License] = true;
                            GameLog.Money($"player({characterData.UUID})", $"frac(6)", Main.LicPrices[0], $"buyLic");
                            Notify.Send(player, NotifyType.Info, NotifyPosition.BottomCenter, $"Чтобы завести транспорт, нажмите B", 3000);
                            Repository.PlayerStats(player);
                        }
                        catch (Exception e)
                        {
                            Log.Write($"startDrivingCourse case 0 Exception: {e.ToString()}");
                        }
                        return;
                    case 1:
                        try
                        {
                            if (Chars.UpdateData.CanIChange(player, Main.LicPrices[1], true) != 255) return;
                            GTANetworkAPI.Vehicle vehicle = VehicleStreaming.CreateVehicle1((VehicleHash)VehicleHash1.pobeda, startCourseCoord[0], startCourseRot[0], 30, 111, $"KAT_B_{player.Value}{player.GetUUID()}", acc: VehicleAccess.School, petrol: 9999, workdriv: characterData.UUID);
                            vehicle.SetMod(53, 2);
                            vehicle.SetMod(11, 3);
                            vehicle.SetMod(12, 2);
                            vehicle.SetMod(13, 2);
                            vehicle.SetMod(15, 3);
                            vehicle.SetMod(18, 0);
                            qMain.UpdateQuestsStage(player, Zdobich.QuestName, (int)zdobich_quests.Stage7, 2, isUpdateHud: true);
                            qMain.UpdateQuestsComplete(player, Zdobich.QuestName, (int)zdobich_quests.Stage7, true);
                            //if (Step++ >= 13) Step = 0;
                            sessionData.DSchoolData.Vehicle = (ExtVehicle)vehicle;
                            sessionData.DSchoolData.IsDriving = true;
                            sessionData.DSchoolData.License = 1;
                            sessionData.DSchoolData.Check = 0;
                            player.SetIntoVehicle(vehicle, 0);
                            player.SetData("SCHOOLVEH", vehicle);
                            vehicle.SetData("ACCESS", "SCHOOL");
                            vehicle.SetData("DRIVER", player);
                            player.SetData("IS_DRIVING", true);
                            player.SetData("LICENSE", 1);
                            player.SetData("CHECK", 0);
                            player.SetIntoVehicle(vehicle, (int)VehicleSeat.Driver);
                            Trigger.ClientEvent(player, "setIntoVehicle", vehicle, VehicleSeat.Driver - 1);
                            Trigger.ClientEvent(player, "createCheckpoint", 12, 1, drivingCoords[0] - new Vector3(0, 0, 2), 4, 0, 255, 0, 0);
                            Trigger.ClientEvent(player, "createWaypoint", drivingCoords[0].X, drivingCoords[0].Y);
                            MoneySystem.Wallet.Change(player, -Main.LicPrices[1]);
                            fractionData.Money += Main.LicPrices[1];
                            characterData.Licenses[1] = true;
                            GameLog.Money($"player({characterData.UUID})", $"frac(6)", Main.LicPrices[1], $"buyLic");
                            Notify.Send(player, NotifyType.Info, NotifyPosition.BottomCenter, $"Чтобы завести транспорт, нажмите B", 3000);
                            Repository.PlayerStats(player);
                        }
                        catch (Exception e)
                        {
                            Log.Write($"startDrivingCourse case 1 Exception: {e.ToString()}");
                        }
                        return;
                    case 2:
                        try
                        {
                            if (Chars.UpdateData.CanIChange(player, Main.LicPrices[2], true) != 255) return;
                            GTANetworkAPI.Vehicle vehicle = VehicleStreaming.CreateVehicle((uint)VehicleHash1.gaz66r, startCourseCoord[0], 130f, 30, 111, $"KAT_C_{player.Value}{player.GetUUID()}", acc: VehicleAccess.School, petrol: 9999, workdriv: characterData.UUID);
                            vehicle.SetMod(53, 2);
                            vehicle.SetMod(11, 3);
                            vehicle.SetMod(12, 2);
                            vehicle.SetMod(13, 2);
                            vehicle.SetMod(15, 3);
                            vehicle.SetMod(18, 0);
                            qMain.UpdateQuestsStage(player, Zdobich.QuestName, (int)zdobich_quests.Stage7, 2, isUpdateHud: true);
                            qMain.UpdateQuestsComplete(player, Zdobich.QuestName, (int)zdobich_quests.Stage7, true);
                            //if (Step++ >= 13) Step = 0;
                            sessionData.DSchoolData.Vehicle = (ExtVehicle)vehicle;
                            sessionData.DSchoolData.IsDriving = true;
                            sessionData.DSchoolData.License = 2;
                            sessionData.DSchoolData.Check = 0;
                            player.SetIntoVehicle(vehicle, 0);
                            player.SetData("SCHOOLVEH", vehicle);
                            vehicle.SetData("ACCESS", "SCHOOL");
                            vehicle.SetData("DRIVER", player);
                            player.SetData("IS_DRIVING", true);
                            player.SetData("LICENSE", 2);
                            player.SetData("CHECK", 0);
                            //player.SetIntoVehicle(vehicle, (int)VehicleSeat.Driver);
                            Trigger.ClientEvent(player, "setIntoVehicle", vehicle, VehicleSeat.Driver - 1);
                            Trigger.ClientEvent(player, "createCheckpoint", 12, 1, drivingCoords[0] - new Vector3(0, 0, 2), 4, 0, 255, 0, 0);
                            Trigger.ClientEvent(player, "createWaypoint", drivingCoords[0].X, drivingCoords[0].Y);
                            MoneySystem.Wallet.Change(player, -Main.LicPrices[2]);
                            fractionData.Money += Main.LicPrices[2];
                            characterData.Licenses[sessionData.DSchoolData.License] = true;
                            GameLog.Money($"player({characterData.UUID})", $"frac(6)", Main.LicPrices[2], $"buyLic");
                            Notify.Send(player, NotifyType.Info, NotifyPosition.BottomCenter, $"Чтобы завести транспорт, нажмите B", 3000);
                            Repository.PlayerStats(player);
                        }
                        catch (Exception e)
                        {
                            Log.Write($"startDrivingCourse case 2 Exception: {e.ToString()}");
                        }
                        return;
                    case 3:
                        if (Chars.UpdateData.CanIChange(player, Main.LicPrices[3], true) != 255) return;
                        characterData.Licenses[3] = true;
                        //characterData.Licenses[sessionData.DSchoolData.License] = true;
                        MoneySystem.Wallet.Change(player, -Main.LicPrices[3]);
                        fractionData.Money += Main.LicPrices[3];
                        GameLog.Money($"player({characterData.UUID})", $"frac(6)", Main.LicPrices[3], $"buyLic");
                        Notify.Send(player, NotifyType.Success, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.SucBuySeaLic), 3000);
                        //Repository.PlayerStats(player);
                        return;
                    case 4:
                        if (Chars.UpdateData.CanIChange(player, Main.LicPrices[4], true) != 255) return;
                        if (characterData.LVL < 20)
                        {
                            Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.LicMustBe20), 3000);
                            return;
                        }
                        characterData.Licenses[4] = true;
                        MoneySystem.Wallet.Change(player, -Main.LicPrices[4]);
                        fractionData.Money += Main.LicPrices[4];
                        GameLog.Money($"player({characterData.UUID})", $"frac(6)", Main.LicPrices[4], $"buyLic");
                        Notify.Send(player, NotifyType.Success, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.SucBuyHeliLic), 3000);
                        //Repository.PlayerStats(player);
                        return;
                    case 5:
                        if (Chars.UpdateData.CanIChange(player, Main.LicPrices[5], true) != 255) return;
                        if (characterData.LVL < 20)
                        {
                            Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.LicMustBe20), 3000);
                            return;
                        }
                        characterData.Licenses[5] = true;
                        MoneySystem.Wallet.Change(player, -Main.LicPrices[5]);
                        fractionData.Money += Main.LicPrices[5];
                        GameLog.Money($"player({characterData.UUID})", $"frac(6)", Main.LicPrices[5], $"buyLic");
                        Notify.Send(player, NotifyType.Success, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.SucBuyPlaneLic), 3000);
                        //Repository.PlayerStats(player);
                        return;
                    default:
                        // Not supposed to end up here. 
                        break;
                }
            }
            catch (Exception e)
            {
                Log.Write($"startDrivingCourse Exception: {e.ToString()}");
            }
        }
        
        #region menu
        [Interaction(ColShapeEnums.DriveSchool)]
        public static void OnDriveSchool(ExtPlayer player)
        {
            try
            {
                if (!player.IsCharacterData()) return;
                var frameList = new FrameListData();

                frameList.Header = "Лицензии";
                frameList.Callback = callback_driveschool;
                frameList.List.Add(new ListData(LangFunc.GetText(LangType.Ru, DataName.MotoLic, Main.LicPrices[0]), 0));
                
                frameList.List.Add(new ListData(LangFunc.GetText(LangType.Ru, DataName.LegLic, Main.LicPrices[1]), 1));
                
                frameList.List.Add(new ListData(LangFunc.GetText(LangType.Ru, DataName.GruzLic, Main.LicPrices[2]), 2));
                
                frameList.List.Add(new ListData(LangFunc.GetText(LangType.Ru, DataName.VodLic, Main.LicPrices[3]), 3));
                
                frameList.List.Add(new ListData(LangFunc.GetText(LangType.Ru, DataName.VertLic, Main.LicPrices[4]), 4));
                
                frameList.List.Add(new ListData(LangFunc.GetText(LangType.Ru, DataName.SamLic, Main.LicPrices[5]), 5));
                
                Players.Popup.List.Repository.Open(player, frameList); 
                BattlePass.Repository.UpdateReward(player, 149);
            }
            catch (Exception e)
            {
                Log.Write($"OnDriveSchool Exception: {e.ToString()}");
            }
        }
        private static void callback_driveschool(ExtPlayer player, object listItem)
        {
            if (!(listItem is int)) 
                return;
            
            if (!player.IsCharacterData()) 
                return;
            
            startDrivingCourse(player, Convert.ToInt32(listItem));
        }
        #endregion
    }
}