using GTANetworkAPI;
using GTANetworkMethods;
using Newtonsoft.Json;
using Redage.SDK;
using System;
using Newtonsoft.Json;
using System.Collections.Generic;
using Repository = NeptuneEvo.Chars.Repository;
using NeptuneEvo.Handles;
using MySqlX.XDevAPI.Relational;


namespace NeptuneEvo.VehicleModel
{
    class VMain : Script
    {
        private static nLog Log = new nLog("VehicleModel.Main");
        public static void SendVehicleDataToClient(ExtPlayer player)
        {
            string vehicleDataJson = JsonConvert.SerializeObject(VehicleData);
            player.TriggerEvent("receiveVehicleData", vehicleDataJson);
        }
        public static Dictionary<uint, VehicleInfo> VehicleData = new Dictionary<uint, VehicleInfo>()
        {
            //{ NAPI.Util.GetHashKey("Faggio2"), new VehicleInfo("Motoroom", 3, 250, "Piaggio Vespa")},
            { NAPI.Util.GetHashKey("Faggio2"), new VehicleInfo("Motoroom", 3, 250,"Piaggio Vespa")},
            { NAPI.Util.GetHashKey("Verus"), new VehicleInfo("Motoroom", 5, 17500,"Can-Am Renegade")},
            { NAPI.Util.GetHashKey("Sanchez2"), new VehicleInfo("Motoroom", 5, 1750,"Yamaha WR450F")},
            { NAPI.Util.GetHashKey("Enduro"), new VehicleInfo("Motoroom", 5, 2000,"BMW R 1200 GS")},
            { NAPI.Util.GetHashKey("PCJ"), new VehicleInfo("Motoroom", 5, 3250,"Suzuki GSX-R750")},
            { NAPI.Util.GetHashKey("izhjup5"), new VehicleInfo("Motoroom",2,200000, "ИЖ ЮПИТЕР 5")},
            { NAPI.Util.GetHashKey("Hexer"), new VehicleInfo("Motoroom", 5, 3500,"Harley-Davidson Fat Boy")},
            { NAPI.Util.GetHashKey("Lectro"), new VehicleInfo("Motoroom", 5, 3750,"Ducati 1199 Panigale")},
            { NAPI.Util.GetHashKey("Nemesis"), new VehicleInfo("Motoroom", 5, 3750, "Nemesis") },
            { NAPI.Util.GetHashKey("Hakuchou"), new VehicleInfo("Motoroom", 5, 4250, "Hakuchou") },
            { NAPI.Util.GetHashKey("Ruffian"), new VehicleInfo("Motoroom", 5, 4750, "Ruffian") },
            { NAPI.Util.GetHashKey("Bmx"), new VehicleInfo("Motoroom", 0, 800, "BMX") },
            { NAPI.Util.GetHashKey("Scorcher"), new VehicleInfo("Motoroom", 0, 1200, "Scorcher") },
            { NAPI.Util.GetHashKey("BF400"), new VehicleInfo("Motoroom", 5, 5000, "BF400") },
            { NAPI.Util.GetHashKey("CarbonRS"), new VehicleInfo("Motoroom", 5, 5750, "Carbon RS") },
            { NAPI.Util.GetHashKey("Bati"), new VehicleInfo("Motoroom", 5, 7000, "Bati 801") },
            { NAPI.Util.GetHashKey("Double"), new VehicleInfo("Motoroom", 5, 7500, "Double-T") },
            { NAPI.Util.GetHashKey("Diablous"), new VehicleInfo("Motoroom", 5, 10000, "Diablous") },
            { NAPI.Util.GetHashKey("Cliffhanger"), new VehicleInfo("Motoroom", 5, 11250, "Cliffhanger") },
            { NAPI.Util.GetHashKey("Akuma"), new VehicleInfo("Motoroom", 5, 13750, "Akuma") },
            { NAPI.Util.GetHashKey("Thrust"), new VehicleInfo("Motoroom", 5, 16500, "Thrust") },
            { NAPI.Util.GetHashKey("Nightblade"), new VehicleInfo("Motoroom", 5, 6000, "Nightblade") },
            { NAPI.Util.GetHashKey("Vindicator"), new VehicleInfo("Motoroom", 6, 8500, "Vindicator") },
            { NAPI.Util.GetHashKey("Ratbike"), new VehicleInfo("Motoroom", 5, 4500, "Ratbike") },
            { NAPI.Util.GetHashKey("Blazer"), new VehicleInfo("Motoroom", 7, 5200, "Blazer") },
            { NAPI.Util.GetHashKey("Gargoyle"), new VehicleInfo("Motoroom", 5, 6800, "Gargoyle") },
            { NAPI.Util.GetHashKey("Sanctus"), new VehicleInfo("Motoroom", 5, 500000, "Sanctus") },
            { NAPI.Util.GetHashKey("Bagger"), new VehicleInfo("Motoroom", 6, 2200, "Bagger") },
            { NAPI.Util.GetHashKey("Diablous2"), new VehicleInfo("Motoroom", 5, 5600, "Diablous2") },
            { NAPI.Util.GetHashKey("Sovereign"), new VehicleInfo("Motoroom", 6, 2100, "Sovereign") },
            { NAPI.Util.GetHashKey("Avarus"), new VehicleInfo("Motoroom", 5, 4800, "Avarus") },
            { NAPI.Util.GetHashKey("Bati2"), new VehicleInfo("Motoroom", 5, 7000, "Bati 801RR") },
            { NAPI.Util.GetHashKey("Daemon"), new VehicleInfo("Motoroom", 5, 4800, "Daemon") },
            { NAPI.Util.GetHashKey("Daemon2"), new VehicleInfo("Motoroom", 5, 4700, "Daemon2") },
            { NAPI.Util.GetHashKey("Defiler"), new VehicleInfo("Motoroom", 5, 6000, "Defiler") },
            { NAPI.Util.GetHashKey("Vortex"), new VehicleInfo("Motoroom", 5, 5800, "Vortex") },
            { NAPI.Util.GetHashKey("Vader"), new VehicleInfo("Motoroom", 5, 4950, "Vader") },
            { NAPI.Util.GetHashKey("Esskey"), new VehicleInfo("Motoroom", 5, 4000, "Esskey") },
            { NAPI.Util.GetHashKey("Faggio"), new VehicleInfo("Motoroom", 3, 260, "Faggio") },
            { NAPI.Util.GetHashKey("Faggio3"), new VehicleInfo("Motoroom", 3, 300, "Faggio Mod") },
            { NAPI.Util.GetHashKey("Manchez"), new VehicleInfo("Motoroom", 5, 1900, "Manchez") },
            { NAPI.Util.GetHashKey("Wolfsbane"), new VehicleInfo("Motoroom", 5, 4800, "Wolfsbane") },
            { NAPI.Util.GetHashKey("Zombiea"), new VehicleInfo("Motoroom", 5, 5000, "Zombie Bobber") },
            { NAPI.Util.GetHashKey("Zombieb"), new VehicleInfo("Motoroom", 5, 5100, "Zombie Chopper") },
            { NAPI.Util.GetHashKey("Blazer4"), new VehicleInfo("Motoroom", 7, 5800, "Blazer Aqua") },
            { NAPI.Util.GetHashKey("Deathbike"), new VehicleInfo("Motoroom", 5, 14000, "Deathbike") },
            { NAPI.Util.GetHashKey("Fcr"), new VehicleInfo("Motoroom", 5, 6000, "FCR 1000") },
            { NAPI.Util.GetHashKey("Fcr2"), new VehicleInfo("Motoroom", 5, 7000, "FCR 1000 Custom") },
            { NAPI.Util.GetHashKey("Hakuchou2"), new VehicleInfo("Motoroom", 5, 18000, "Hakuchou Drag") },
            { NAPI.Util.GetHashKey("Innovation"), new VehicleInfo("Motoroom", 5, 25000, "Innovation") },
            { NAPI.Util.GetHashKey("Stryder"), new VehicleInfo("Motoroom", 7, 20000, "Stryder") },
            { NAPI.Util.GetHashKey("Fixter"), new VehicleInfo("Motoroom", 0, 1000, "Fixter") },
            { NAPI.Util.GetHashKey("Cruiser"), new VehicleInfo("Motoroom", 0, 1200, "Cruiser") },
            { NAPI.Util.GetHashKey("Tribike"), new VehicleInfo("Motoroom", 0, 1500, "Tri-Cycles Race Bike") },
            { NAPI.Util.GetHashKey("Tribike2"), new VehicleInfo("Motoroom", 0, 1500, "Tri-Cycles Race Bike 2") },
            { NAPI.Util.GetHashKey("Tribike3"), new VehicleInfo("Motoroom", 0, 1500, "Tri-Cycles Race Bike 3") },
            { NAPI.Util.GetHashKey("Blazer3"), new VehicleInfo("Motoroom", 7, 8000, "Blazer Lifeguard") },
            { NAPI.Util.GetHashKey("20r1"), new VehicleInfo("Motoroom", 7, 8000, "Yamaha YZF-R1 2020") },
            { NAPI.Util.GetHashKey("r1"), new VehicleInfo("Motoroom", 7, 8000, "Yamaha YZF-R1") },
            { NAPI.Util.GetHashKey("yzfr1"), new VehicleInfo("Motoroom", 7, 8000, "Yamaha YZF-R1") },
            { NAPI.Util.GetHashKey("cbr1000rrr"), new VehicleInfo("Motoroom", 7, 8000, "Honda CBR1000RR-R") },
            { NAPI.Util.GetHashKey("BmwM3"), new VehicleInfo("Germany Autoroom", 15, 2800000, "BMW M3 E92")},
            { NAPI.Util.GetHashKey("BmwM5"), new VehicleInfo("Germany Autoroom", 25, 6000000, "BMW M5 F90")},
            { NAPI.Util.GetHashKey("BmwM8"), new VehicleInfo("Germany Autoroom", 15, 8000000, "BMW M8 F92")},
            { NAPI.Util.GetHashKey("BmwI8"), new VehicleInfo("Germany Autoroom", 15, 4500000, "BMW i8")},
            { NAPI.Util.GetHashKey("MBC63S"), new VehicleInfo("Germany Autoroom", 13, 6000000, "Mercedes C63S")},
            { NAPI.Util.GetHashKey("MBG63"), new VehicleInfo("Germany Autoroom", 35, 14000000, "Mercedes G63")},
            { NAPI.Util.GetHashKey("AudiR8"), new VehicleInfo("Germany Autoroom", 8, 5150000, "Audi R8")},
            { NAPI.Util.GetHashKey("flatbed"), new VehicleInfo("Germany Autoroom", 8, 999, "Flatbed")},
            { NAPI.Util.GetHashKey("DodgeViper"), new VehicleInfo("Central Asia Autoroom", 6, 3000000, "Dodge Viper")},
            { NAPI.Util.GetHashKey("BentleyC"), new VehicleInfo("Central Asia Autoroom", 12, 6000000, "Bentley Continental")},
            { NAPI.Util.GetHashKey("Camry"), new VehicleInfo("Japan Autoroom", 25, 2500000, "Toyota Camry")},
            { NAPI.Util.GetHashKey("LX570"), new VehicleInfo("Japan Autoroom", 35, 8000000, "Lexus LX570")},
            { NAPI.Util.GetHashKey("AudiRS7"), new VehicleInfo("Germany Autoroom", 17, 5650000, "Audi RS7")},
            { NAPI.Util.GetHashKey("r8c20"), new VehicleInfo("Germany Autoroom", 17, 5650000, "Audi R8 Spyder 2020")},
            { NAPI.Util.GetHashKey("NGTR"), new VehicleInfo("Japan Autoroom", 12, 1600000, "Nissan GTR")},
            { NAPI.Util.GetHashKey("mark100"), new VehicleInfo("Japan Autoroom", 12, 1600000, "Nissan GTR")},
            { NAPI.Util.GetHashKey("Lambo770"), new VehicleInfo("Central Asia Autoroom", 4, 292984992, "Lamborghini Centenario")},
            { NAPI.Util.GetHashKey("BMWE38"), new VehicleInfo("Germany Autoroom", 20, 650000, "BMW E38")},
            { NAPI.Util.GetHashKey("MBE420"), new VehicleInfo("Germany Autoroom", 20, 650000, "Mercedes E420")},
            { NAPI.Util.GetHashKey("BentleyB"), new VehicleInfo("Central Asia Autoroom", 35, 10000000, "Bentley Bentayga")},
            { NAPI.Util.GetHashKey("MazdaRX7"), new VehicleInfo("Japan Autoroom", 13, 900000, "Mazda RX7")},
            { NAPI.Util.GetHashKey("Supra"), new VehicleInfo("Japan Autoroom", 13, 1100000, "Toyota Supra")},
            { NAPI.Util.GetHashKey("SubaruWRX"), new VehicleInfo("Japan Autoroom", 18, 1100000, "Subaru WRX")},
            { NAPI.Util.GetHashKey("BMWX6"), new VehicleInfo("Germany Autoroom", 35, 6000000, "BMW X6M")},
            { NAPI.Util.GetHashKey("MBC63"), new VehicleInfo("Germany Autoroom", 20, 5500000, "Mercedes C63")},
            { NAPI.Util.GetHashKey("MLEvoX"), new VehicleInfo("Japan Autoroom", 18, 850000, "Mitsubishi Lancer EVO X")},
            { NAPI.Util.GetHashKey("AudiTT"), new VehicleInfo("Germany Autoroom", 15, 7000000, "Audi TT")},
            { NAPI.Util.GetHashKey("Skyline"), new VehicleInfo("Japan Autoroom", 13, 1000000, "Nissan Skyline")},
            { NAPI.Util.GetHashKey("TeslaS"), new VehicleInfo("Central Asia Autoroom", 35, 4000000, "Tesla Model S")},
            { NAPI.Util.GetHashKey("regera"), new VehicleInfo("Central Asia Autoroom", 40, 300042760, "Koenigsegg Regera")},
            { NAPI.Util.GetHashKey("agerars"), new VehicleInfo("Central Asia Autoroom", 40, 300042760, "Koenigsegg Agera RS")},
            { NAPI.Util.GetHashKey("Lambo640"), new VehicleInfo("Central Asia Autoroom", 13, 12000000, "Lamborghini Murcielago")},
            { NAPI.Util.GetHashKey("Ferrari488"), new VehicleInfo("Central Asia Autoroom", 13, 23700000, "Ferrari 488")},
            { NAPI.Util.GetHashKey("mbamggt"), new VehicleInfo("Germany Autoroom", 13, 11000000, "Mercedes GT")},
            { NAPI.Util.GetHashKey("audia6"), new VehicleInfo("Germany Autoroom", 18, 2000000, "Audi A6")},
            { NAPI.Util.GetHashKey("w140"), new VehicleInfo("Germany Autoroom", 18, 2000000, "Mercedes W140")},
            { NAPI.Util.GetHashKey("porschegt4"), new VehicleInfo("Germany Autoroom", 13, 13500000, "Porsche GT 4")},
            { NAPI.Util.GetHashKey("cadctsv"), new VehicleInfo("Central Asia Autoroom", 25, 2500000, "Cadillac CTS V")},
            { NAPI.Util.GetHashKey("Lambo580"), new VehicleInfo("Central Asia Autoroom", 13, 8000000, "Lamborghini Aventadoor")},
            { NAPI.Util.GetHashKey("db11"), new VehicleInfo("Central Asia Autoroom", 18, 6500000, "AstonMartin DB11")},
            { NAPI.Util.GetHashKey("jesko"), new VehicleInfo("Central Asia Autoroom", 15, 500000000, "Koenigsegg Jesko")},
            { NAPI.Util.GetHashKey("vapidse"), new VehicleInfo("Central Asia Autoroom", 120, 1500000, "Ford Transit")},
            { NAPI.Util.GetHashKey("minic"), new VehicleInfo("Central Asia Autoroom", 20, 2000000, "Minicooper")},
            { NAPI.Util.GetHashKey("mbx18"), new VehicleInfo("Elite Autoroom", 45, 1700000, "mbx18")},
            { NAPI.Util.GetHashKey("bmwx5"), new VehicleInfo("Germany Autoroom", 35, 1000000, "BMW X5")},
            { NAPI.Util.GetHashKey("impala67"), new VehicleInfo("Central Asia Autoroom", 25, 700000, "Chevrole Impala 67")},
            { NAPI.Util.GetHashKey("jeepsrt8"), new VehicleInfo("Central Asia Autoroom", 35, 2000000, "Jeep Srt")},
            { NAPI.Util.GetHashKey("sian"), new VehicleInfo("Central Asia Autoroom", 15, 8000000, "Lamborghini Sian")},
            { NAPI.Util.GetHashKey("lp670sv"), new VehicleInfo("Central Asia Autoroom", 15, 8000000, "Lamborghini Murcielago LP 670-4 SV")},
            { NAPI.Util.GetHashKey("escalade900"), new VehicleInfo("Central Asia Autoroom", 35, 1000000, "Cadilac Escalade 900")},
            { NAPI.Util.GetHashKey("apocalypse6x6"), new VehicleInfo("Central Asia Autoroom", 35, 1000000, "Cadilac Escalade 900")},
            { NAPI.Util.GetHashKey("jdap6x6g"), new VehicleInfo("Central Asia Autoroom", 35, 1000000, "Cadilac Escalade 900")},
            { NAPI.Util.GetHashKey("hiphiz"), new VehicleInfo("Central Asia Autoroom", 35, 1000000, "Cadilac Escalade 900")},
            { NAPI.Util.GetHashKey("lc100"), new VehicleInfo("Japan Autoroom", 35, 1000000, "Toyota Lc100")},
            { NAPI.Util.GetHashKey("lx570khann"), new VehicleInfo("Japan Autoroom", 35, 1000000, "Toyota Lc100")},
            { NAPI.Util.GetHashKey("padshilux"), new VehicleInfo("Japan Autoroom", 35, 1000000, "Toyota Lc100")},
            { NAPI.Util.GetHashKey("mb63gls"), new VehicleInfo("Germany Autoroom", 35, 3000000, "Mersedes GLS 63")},
            { NAPI.Util.GetHashKey("panamera"), new VehicleInfo("Germany Autoroom", 25, 4500000, "Porshe Panamera")},
            { NAPI.Util.GetHashKey("urus"), new VehicleInfo("Central Asia Autoroom", 35, 20000000, "Lamborghini Urus")},
            { NAPI.Util.GetHashKey("silvias15"), new VehicleInfo("Japan Autoroom", 18, 700000, "Nissan Silvia ")},
            //{ NAPI.Util.GetHashKey("rrcullinan"), new VehicleInfo("Central Asia Autoroom", 35, 12000000, "Kylik**")},
            { NAPI.Util.GetHashKey("diabloSV"), new VehicleInfo("Central Asia Autoroom", 15, 70000000, "diabloSV")},
            { NAPI.Util.GetHashKey("lexusgsf"), new VehicleInfo("Japan Autoroom", 20, 3000000, "Lexus LSF")},
            { NAPI.Util.GetHashKey("p1"), new VehicleInfo("Central Asia Autoroom", 8, 70000000, "Maclare P1")},
            { NAPI.Util.GetHashKey("fxxkevo"), new VehicleInfo("Central Asia Autoroom", 8, 70000000, "Ferrari Spider")},
            { NAPI.Util.GetHashKey("f812"), new VehicleInfo("Central Asia Autoroom", 8, 70000000, "Ferrari 812 Superfast")},
            { NAPI.Util.GetHashKey("taycan"), new VehicleInfo("Germany Autoroom", 20, 700000, "Porshe Taycan")},
            { NAPI.Util.GetHashKey("macan"), new VehicleInfo("Germany Autoroom", 20, 700000, "Porshe macan")},
            { NAPI.Util.GetHashKey("g636x6"), new VehicleInfo("Germany Autoroom", 90, 15000000, "Mercedes G63 6x6") },
            { NAPI.Util.GetHashKey("m5g60w"), new VehicleInfo("Germany Autoroom", 50, 14000000, "BMW M5 G60") },
            { NAPI.Util.GetHashKey("bmwe39"), new VehicleInfo("Germany Autoroom", 20, 700000, "BMW E39") },
            { NAPI.Util.GetHashKey("w223"), new VehicleInfo("Germany Autoroom", 20, 7500000, "Mercedes W223") },
            { NAPI.Util.GetHashKey("e34"), new VehicleInfo("Germany Autoroom", 18, 500000, "BMW E34") },
            { NAPI.Util.GetHashKey("v250"), new VehicleInfo("Germany Autoroom", 180, 20000000, "Mercedes V-Class") },
            { NAPI.Util.GetHashKey("m750li"), new VehicleInfo("Germany Autoroom", 12, 800000, "BMW 750Li") },
            { NAPI.Util.GetHashKey("dzsb500"), new VehicleInfo("Germany Autoroom", 30, 3500000, "Mercedes S500") },
            { NAPI.Util.GetHashKey("RRSVR"), new VehicleInfo("Central Asia Autoroom", 60, 4500000, "Range Rover SVR") },
            { NAPI.Util.GetHashKey("ftype"), new VehicleInfo("Central Asia Autoroom", 18, 5500000, "Jaguar F-Type") },
            { NAPI.Util.GetHashKey("wey500"), new VehicleInfo("China Autoroom", 75, 4500000, "Tank 500") },
            { NAPI.Util.GetHashKey("wey300"), new VehicleInfo("China Autoroom", 65, 3500000, "Tank 300") },
            { NAPI.Util.GetHashKey("youga"), new VehicleInfo("China Autoroom", 75, 4500000, "Tank 500") },
            { NAPI.Util.GetHashKey("youga2"), new VehicleInfo("China Autoroom", 65, 3500000, "Tank 300") },
            { NAPI.Util.GetHashKey("youga3"), new VehicleInfo("China Autoroom", 75, 4500000, "Tank 500") },
            { NAPI.Util.GetHashKey("youga4"), new VehicleInfo("China Autoroom", 65, 3500000, "Tank 300") },
            { NAPI.Util.GetHashKey("2024lixiangl9"), new VehicleInfo("China Autoroom", 65, 3500000, "Li Xiang L9 2024") },
            { NAPI.Util.GetHashKey("ehs9"), new VehicleInfo("China Autoroom", 35, 7800000, "Hongqi E-HS9") },
            { NAPI.Util.GetHashKey("brz13"), new VehicleInfo("Japan Autoroom", 18, 1800000, "Subaru BRZ") },
            { NAPI.Util.GetHashKey("pajieluo"), new VehicleInfo("Japan Autoroom", 56, 1800000, "Mitsubishi Pajero VI") },
            { NAPI.Util.GetHashKey("markii"), new VehicleInfo("Japan Autoroom", 20, 900000, "Toyota Mark II") },
            { NAPI.Util.GetHashKey("bug300ss"), new VehicleInfo("Central Asia Autoroom", 8, 350000000, "Bugatti Chiron") },
            { NAPI.Util.GetHashKey("btourbillon24"), new VehicleInfo("Central Asia Autoroom", 8, 350000000, "Bugatti Chiron") },
            { NAPI.Util.GetHashKey("c8"), new VehicleInfo("Central Asia Autoroom", 15, 6500000, "Chevrolet Corvette C8") },
            { NAPI.Util.GetHashKey("datsun"), new VehicleInfo("Central Asia Autoroom", 18, 500000, "Datsun 240Z") },
            { NAPI.Util.GetHashKey("dawn"), new VehicleInfo("Central Asia Autoroom", 18, 12000000, "Rolls-Royce Dawn") },
            { NAPI.Util.GetHashKey("gemera"), new VehicleInfo("Central Asia Autoroom", 35, 350000000, "Koenigsegg Gemera") },
            //{ NAPI.Util.GetHashKey("lp700r"), new VehicleInfo("Central Asia Autoroom", 18, 23000000, "Lamborghini Huracan") },
            { NAPI.Util.GetHashKey("lp770"), new VehicleInfo("Central Asia Autoroom", 18, 23000000, "Lamborghini Huracan") },
            { NAPI.Util.GetHashKey("nisgtir"), new VehicleInfo("Central Asia Autoroom", 18, 23000000, "Nissan GT-R") },
            { NAPI.Util.GetHashKey("93mustang"), new VehicleInfo("Central Asia Autoroom", 18, 23000000, "Ford Mustang 93") },
            { NAPI.Util.GetHashKey("nissunny"), new VehicleInfo("Central Asia Autoroom", 18, 23000000, "Nissan Sunny") },
            { NAPI.Util.GetHashKey("fer296fh5"), new VehicleInfo("Central Asia Autoroom", 18, 23000000, "Ferrari 296 GTB") },
            { NAPI.Util.GetHashKey("rmodlp770"), new VehicleInfo("Central Asia Autoroom", 18, 23000000, "Lamborghini Huracan") },
            { NAPI.Util.GetHashKey("rrcullinan"), new VehicleInfo("Central Asia Autoroom", 65, 15000000, "Rolls-Royce Cullinan") },
            { NAPI.Util.GetHashKey("bwphantom"), new VehicleInfo("Central Asia Autoroom", 65, 15000000, "Rolls-Royce Phantom") },
            { NAPI.Util.GetHashKey("16challenger"), new VehicleInfo("Central Asia Autoroom", 18, 1500000, "Dodge Challenger") },
            { NAPI.Util.GetHashKey("206gti"), new VehicleInfo("Central Asia Autoroom", 25, 700000, "Peugeot 206 GTI") },
            { NAPI.Util.GetHashKey("rmodveneno"), new VehicleInfo("Central Asia Autoroom", 18, 23000000, "Lamborghini Veneno") },
            { NAPI.Util.GetHashKey("dodgecharger"), new VehicleInfo("Central Asia Autoroom", 18, 3400000, "Dodge Charger") },
            { NAPI.Util.GetHashKey("bugatti"), new VehicleInfo("Central Asia Autoroom", 13, 25000000, "Bugatti Veyron") },
            { NAPI.Util.GetHashKey("fmustang95"), new VehicleInfo("Central Asia Autoroom", 18, 800000, "Ford Mustang 95") },
            { NAPI.Util.GetHashKey("fordraptor"), new VehicleInfo("Central Asia Autoroom", 90, 3450000, "Ford Raptor") },
            { NAPI.Util.GetHashKey("ffastback66"), new VehicleInfo("Central Asia Autoroom", 18, 800000, "Ford Mustang 66") },
            { NAPI.Util.GetHashKey("c7"), new VehicleInfo("Central Asia Autoroom", 18, 1780000, "Chevrolet Camaro C7") },
            { NAPI.Util.GetHashKey("century24"), new VehicleInfo("Central Asia Autoroom", 180, 20000000, "Buick GL8 Century") },
            { NAPI.Util.GetHashKey("crownvic"), new VehicleInfo("Central Asia Autoroom", 18, 800000, "Ford Crown Victoria") },
             { NAPI.Util.GetHashKey("19raptor"), new VehicleInfo("Central Asia Autoroom", 18, 800000, "Ford Crown Victoria") },
                        { NAPI.Util.GetHashKey("oka"), new VehicleInfo("Russian Autoroom", 5, 12000, "Ока") },
                        { NAPI.Util.GetHashKey("1970smz_s3d"), new VehicleInfo("Russian Autoroom", 5, 12000, "СМЗ С-3Д 1970") },
                        { NAPI.Util.GetHashKey("2101"), new VehicleInfo("Russian Autoroom", 6, 30000, "ВАЗ 2101") },
                        { NAPI.Util.GetHashKey("2105"), new VehicleInfo("Russian Autoroom", 6, 45000, "ВАЗ 2105") },
                        { NAPI.Util.GetHashKey("06A"), new VehicleInfo("Russian Autoroom", 6, 47000, "LADA 06A") },
                        {NAPI.Util.GetHashKey("2103"), new VehicleInfo("Russian Autoroom", 6, 35000, "ВАЗ 2103") },
                        {NAPI.Util.GetHashKey("21009"), new VehicleInfo("Russian Autoroom", 8, 50000, "ВАЗ 21009") },
                        {NAPI.Util.GetHashKey("2140"), new VehicleInfo("Russian Autoroom", 6, 35000, "Москвич 2140") },
                        {NAPI.Util.GetHashKey("uaz3962"), new VehicleInfo("Russian Autoroom", 15, 90000, "УАЗ 3962") },
                        {NAPI.Util.GetHashKey("volga31"), new VehicleInfo("Russian Autoroom", 7, 40000, "Волга 31") },
                        {NAPI.Util.GetHashKey("2109samara"), new VehicleInfo("Russian Autoroom", 9, 48000, "ВАЗ 2109 Самара") },
                        {NAPI.Util.GetHashKey("27175"), new VehicleInfo("Russian Autoroom", 13, 40000, "ВАЗ 27175") },
                        {NAPI.Util.GetHashKey("volga"), new VehicleInfo("Russian Autoroom", 5, 1000000, "Волга") },
                        {NAPI.Util.GetHashKey("1970gaz24lr"), new VehicleInfo("Russian Autoroom", 5, 1000000, "ГАЗ 24 ЛР 1970") },
                        {NAPI.Util.GetHashKey("ural10"), new VehicleInfo("Russian Autoroom", 20, 200000, "Урал 10") },
                        {NAPI.Util.GetHashKey("zaz965"), new VehicleInfo("Russian Autoroom", 7, 40000, "Запорожец 965") },
                        {NAPI.Util.GetHashKey("zaz968m"), new VehicleInfo("Russian Autoroom", 9, 48000, "Запорожец 968М") },
                        {NAPI.Util.GetHashKey("pobeda"), new VehicleInfo("Russian Autoroom", 13, 40000, "Победа") },
                        {NAPI.Util.GetHashKey("gaz21a"), new VehicleInfo("Russian Autoroom", 5, 1000000, "ГАЗ 21А") },
                        {NAPI.Util.GetHashKey("niva"), new VehicleInfo("Russian Autoroom", 18, 120000, "Нива") },
                        {NAPI.Util.GetHashKey("2010lada2329"), new VehicleInfo("Russian Autoroom", 18, 120000, "Лада 2329 2010") },
                        {NAPI.Util.GetHashKey("aurussenat"), new VehicleInfo("Russian Autoroom", 25, 5000000, "Аурус Сенат") },
                        { NAPI.Util.GetHashKey("lp700r"), new VehicleInfo("Russian Autoroom", 20, 700000, "Lamborghini Aventador LP700-4") },
                        { NAPI.Util.GetHashKey("apriora"), new VehicleInfo("Russian Autoroom", 20, 700000, "Lada Priora") },
                        { NAPI.Util.GetHashKey("tigr"), new VehicleInfo("Russian Autoroom", 20, 700000, "GAZ Tigr") },
                        { NAPI.Util.GetHashKey("lada2101"), new VehicleInfo("Russian Autoroom", 20, 700000, "Lada 2101") },
                        { NAPI.Util.GetHashKey("LADA10"), new VehicleInfo("Russian Autoroom", 20, 700000, "Lada 10") },
                        { NAPI.Util.GetHashKey("2023nivatravel"), new VehicleInfo("Russian Autoroom", 20, 700000, "Lada Niva Travel 2023") },
                        { NAPI.Util.GetHashKey("2023vestang"), new VehicleInfo("Russian Autoroom", 20, 700000, "Lada Vesta NG 2023") },
                        { NAPI.Util.GetHashKey("grantafl"), new VehicleInfo("Russian Autoroom", 20, 700000, "Lada Granta FL") },
                        { NAPI.Util.GetHashKey("hrprem"), new VehicleInfo("Russian Autoroom", 20, 700000, "Lada HR Premier") },
                        { NAPI.Util.GetHashKey("kalina2119"), new VehicleInfo("Russian Autoroom", 20, 700000, "Lada Kalina 2119") },
                        { NAPI.Util.GetHashKey("lada2111"), new VehicleInfo("Russian Autoroom", 20, 700000, "Lada 2111") },
                        { NAPI.Util.GetHashKey("lada2112c"), new VehicleInfo("Russian Autoroom", 20, 700000, "Lada 2112 Coupe") },
                        { NAPI.Util.GetHashKey("vaz2113"), new VehicleInfo("Russian Autoroom", 20, 700000, "Lada 2113") },
                        { NAPI.Util.GetHashKey("lada2114t"), new VehicleInfo("Russian Autoroom", 20, 700000, "Lada 2114 Turbo") },
                        { NAPI.Util.GetHashKey("vaz2115"), new VehicleInfo("Russian Autoroom", 20, 700000, "Lada 2115") },
                        { NAPI.Util.GetHashKey("ecto1"), new VehicleInfo("Russian Autoroom", 20, 700000, "Ecto-1") },
                        { NAPI.Util.GetHashKey("bmwm5e392002wb"), new VehicleInfo("Russian Autoroom", 20, 700000, "BMW M5 E39 2002 Widebody") },
                        { NAPI.Util.GetHashKey("barracks"), new VehicleInfo("Russian Autoroom", 33, 700000, "Barracks") },
                        { NAPI.Util.GetHashKey("Prototipo"), new VehicleInfo("Russian Autoroom", 25, 2500000, "Prototipo") },
                        { NAPI.Util.GetHashKey("vestamp"), new VehicleInfo("Russian Autoroom", 25, 2500000, "Vesta MP") },
                        { NAPI.Util.GetHashKey("Tezeract"), new VehicleInfo("Russian Autoroom", 25, 2250000, "Tezeract") },
                        { NAPI.Util.GetHashKey("Tyrant"), new VehicleInfo("Russian Autoroom", 25, 2250000, "Tyrant") },
                        { NAPI.Util.GetHashKey("Openwheel2"), new VehicleInfo("Russian Autoroom", 10, 1500000, "Openwheel 2") },
                        { NAPI.Util.GetHashKey("Nero2"), new VehicleInfo("Russian Autoroom", 25, 600000, "Nero 2") },
                        { NAPI.Util.GetHashKey("Camper"), new VehicleInfo("Russian Autoroom", 45, 500000, "Camper") },
                        { NAPI.Util.GetHashKey("Patriot2"), new VehicleInfo("Russian Autoroom", 25, 400000, "Patriot 2") },
                        { NAPI.Util.GetHashKey("Speedo2"), new VehicleInfo("Russian Autoroom", 25, 400000, "Speedo 2") },
                        { NAPI.Util.GetHashKey("Journey"), new VehicleInfo("Russian Autoroom", 25, 350000, "Journey") },
                        { NAPI.Util.GetHashKey("Vagrant"), new VehicleInfo("Russian Autoroom", 5, 1000000, "Vagrant") },
                        { NAPI.Util.GetHashKey("Veto"), new VehicleInfo("Russian Autoroom", 25, 250000, "Veto") },
                        { NAPI.Util.GetHashKey("1969liaz667"), new VehicleInfo("Russian Autoroom", 25, 250000, "Liaz 667") },
                        {NAPI.Util.GetHashKey("mi8cargo"), new VehicleInfo("AirAutoRoom", 33, 1, "Mil Mi-8 Cargo") },
                        {NAPI.Util.GetHashKey("cargobob"), new VehicleInfo("AirAutoRoom", 33, 1, "Cargobob") },
                        { NAPI.Util.GetHashKey("monza"), new VehicleInfo("Russian Autoroom", 20, 540000, "Ferrari Monza")},
                        { NAPI.Util.GetHashKey("mysterycar"), new VehicleInfo("Russian Autoroom", 20, 540000, "Mystery Car")},
                        { NAPI.Util.GetHashKey("deluxo"), new VehicleInfo("Russian Autoroom", 20, 540000, "Mystery Car")},
                        { NAPI.Util.GetHashKey("deluxo2"), new VehicleInfo("Russian Autoroom", 20, 540000, "Mystery Car")},
                         { NAPI.Util.GetHashKey("caracara2"), new VehicleInfo("Russian Autoroom", 20, 540000, "Mystery Car")},
        };

        public class VehicleInfo
        {
            /// <summary>
            /// Класс авто
            /// </summary>
            public string Class;
            /// <summary>
            /// Максиммальное колличество слотов инвентаря
            /// </summary>
            public int MaxSlots;
            /// <summary>
            /// Цена
            /// </summary>
            public int Price;
            /// <summary>
            /// Название
            /// </summary>
            public string Name;


            public VehicleInfo(string Class, int MaxSlots, int Price, string Name)
            {
                this.Class = Class;
                this.MaxSlots = MaxSlots;
                this.Price = Price;
                this.Name = Name;
            }


        }

        public static int GetMaxSlots(uint Model)
        {
            try
            {
                if (VehicleData.ContainsKey(Model)) return VehicleData[Model].MaxSlots;
                return Repository.InventoryMaxSlots["vehicle"];
            }
            catch (Exception e)
            {
                Log.Write($"GetMaxSlots Exception: {e.ToString()}");
                return 15;
            }
        }
        public static string GetName(uint Model)
        {
            try
            {
                if (VehicleData.ContainsKey(Model))
                {
                    Log.Write($"Транспортное средство найдено: {Model}");
                    return VehicleData[Model].Name;
                }
                else
                {
                    Log.Write($"Транспортное средство не найдено: {Model}");
                    return null;
                }
            }
            catch (Exception e)
            {
                Log.Write($"getName Exception: {e.ToString()}");
                return null;
            }
        }
        

        public static string GetRealVehicleName(uint Model)
        {
            if (VehicleData.ContainsKey(Model))
            {
                return VehicleData[Model].Name;
            }
            else
            {
                return null;
            }
        }
        

        //public static string GetVehicleModelName(uint Name)
        //{
        //    if (VehicleData.ContainsValue(Name))
        //    {
        //        return VehicleData.FirstOrDefault(x => x.Value == Name).Key;
        //    }
        //    else
        //    {
        //        return null;
        //    }
        //}
        //public static string GetRealVehicleNameHash(VehicleHash1 model)
        //{
        //    if (modelList2.ContainsKey((VehicleHash1)model))
        //    {
        //        return modelList2[model];
        //    }
        //    else
        //    {
        //        return "null";
        //    }
        //}
        //private static Dictionary<VehicleHash1, string> modelList2 = new Dictionary<VehicleHash1, string>()
        //{
        //      { (VehicleHash1)NAPI.Util.GetHashKey("taxi"), "Roll-Roys Calinan" },
        //      { (VehicleHash1)NAPI.Util.GetHashKey("3338918751u"), "GAZ" },
        //      { (VehicleHash1)NAPI.Util.GetHashKey("Faggio2"), "Piaggio Vespa"},
        //    {(VehicleHash1)NAPI.Util.GetHashKey("ural10"), "URAL M 67" },
        //    {(VehicleHash1)NAPI.Util.GetHashKey("zaz965"), "Zapor Gorbatiy" },

        //      //{ (VehicleHash)NAPI.Util.GetHashKey ("55628203u"), "motoroller Vespa"},

        //};


        //public static Dictionary<VehicleHash1, string> ModelList2 { get => modelList2; set => modelList2 = value; }
    }

}
