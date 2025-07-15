const serverAPI = {get: function (a, b, c, d) {
    rpc.callServer(a, b).then(function (a) {
      a.error ? d(a.errorText) : c(a.data);
    }).catch(function (a) {
      d(a);
    });
  }, getAsync: async function (a, b) {
    try {
      const c = await rpc.callServer(a, b);
      if (c.error) throw c.errorText; else return c.data;
    } catch (a) {
      throw `${a}`;
    }
  }, send: function (a, b) {
    rpc.triggerServer(a, b);
  }, triggerRemote: function (a, ...b) {
    mp.trigger("__call_remote_event", a, ...b);
  }, callApiAsync: async function (a, ...b) {
    return await rpc.callClient("api." + a, b);
  }, getApiAsync: async function (a, b) {
    try {
      const c = await rpc.callClient(a, b);
      if (c.error) throw c.errorText; else return c.data;
    } catch (a) {
      throw `${a}`;
    }
  }, isChatOpenAsync: async function () {
    return await rpc.callClient("client_getGlobalValue", "isChatOpen");
  }, getGlobalValueAsync: async function (a) {
    return await rpc.callClient("client_getGlobalValue", a);
  }, setGlobalValueAsync: async function (a, b) {
    return rpc.triggerClient("client_setGlobalValue", [a, b]);
  }, notifyError: function (a) {
    rpc.triggerClient("clientFunc_notifyError", a);
  }, notifySuccess: function (a) {rpc.triggerClient("clientFunc_notifySuccess", a);
}, currencyFormat: function (a) {
  function b(a, b) {
    const c = ("string" == typeof a ? a : a.toString()).split(".");
    if (0 >= b) return c[0];
    let d = c[1] || "";
    if (d.length > b) return `${c[0]}.${d.substr(0, b)}`;
    for (; d.length < b;) d += "0";
    return `${c[0]}.${d}`;
  }
  if ("" == a || isNaN(a)) return "0";
  let c = parseInt(a), d = c / 1e6;
  if (2 < d) return b(d, 2) + "M";
  let e = c / 1e3;
  return 0 < Math.floor(e) ? b(e, 1) + "K" : c;
}, currencyFormatSpace: function (a) {
  return a.toString().split("").reverse().reduce(function (a, b, c) {
    return "-" == b ? a : b + (c && !(c % 3) ? " " : "") + a;
  }, "");
}};
"undefined" == typeof rpc && (window.MP_TEST = true, window.mp = {invoke() {}}, window.rpc = {on() {}, triggerServer() {}, triggerClient() {}, register() {}, callServer() {}, callClient() {}});