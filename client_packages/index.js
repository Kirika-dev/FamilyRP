const rpc = require("./rage-rpc.min.js");
global.rpc = rpc;


require("./main.js");
require("./CharPrev/cCharPrev.js");
require('./admin/adminpanel.js');
require('./admin/govMenu.js');
// Jail system [by Ale]
//require('./cef/JailBar/js/client.js');
//require('./cef/JailForm/js/clientJail.js');
require('./cef/JailForm/js/clientArmy.js');
require('./cef/FishingStatus/js/client.js');