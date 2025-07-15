"use strict";
(self["webpackChunkcef"] = self["webpackChunkcef"] || []).push([[4977], {
    24977: function(i, e, o) {
        o.r(e),
        o.d(e, {
            default: function() {
                return l
            }
        });
        var t = o(14789)
          , a = {
            id: "preview",
            title: "cef.tattoo.welcome",
            subTitle: "cef.tattoo.select-service",
            items: [{
                id: "donate",
                title: "cef.clothes.precategories.donate",
                subTitle: "cef.tattoo.select-tattoo-type",
                items: [{
                    id: "heads",
                    title: "cef.tattoo.heads",
                    items: new Array(100).fill(null).map(((i,e)=>({
                        id: e,
                        title: `Кастом тату №${e + 1}`,
                        cost: 1e3,
                        type: "donate"
                    })))
                }, {
                    id: "torso",
                    title: "cef.tattoo.torso",
                    items: new Array(100).fill(null).map(((i,e)=>({
                        id: e,
                        title: `Кастом тату №${e + 1}`,
                        cost: 1e3,
                        type: "donate"
                    })))
                }, {
                    id: "leftHand",
                    title: "cef.tattoo.leftHand",
                    items: new Array(100).fill(null).map(((i,e)=>({
                        id: e,
                        title: `Кастом тату №${e + 1}`,
                        cost: 1e3,
                        type: "donate"
                    })))
                }, {
                    id: "rightHand",
                    title: "cef.tattoo.rightHand",
                    items: new Array(100).fill(null).map(((i,e)=>({
                        id: e,
                        title: `Кастом тату №${e + 1}`,
                        cost: 1e3,
                        type: "donate"
                    })))
                }, {
                    id: "leftFoot",
                    title: "cef.tattoo.leftFoot",
                    items: new Array(100).fill(null).map(((i,e)=>({
                        id: e,
                        title: `Кастом тату №${e + 1}`,
                        cost: 1e3,
                        type: "donate"
                    })))
                }, {
                    id: "rightFoot",
                    title: "cef.tattoo.rightFoot",
                    items: new Array(100).fill(null).map(((i,e)=>({
                        id: e,
                        title: `Кастом тату №${e + 1}`,
                        cost: 1e3,
                        type: "donate"
                    })))
                }]
            }, {
                id: "default",
                title: "cef.clothes.precategories.main",
                subTitle: "cef.clothes.select-clothes-type",
                items: [{
                    id: "heads",
                    title: "cef.tattoo.heads",
                    items: new Array(100).fill(null).map(((i,e)=>({
                        id: e,
                        title: `Обычное тату №${e + 1}`,
                        cost: 1e3,
                        type: "money"
                    })))
                }, {
                    id: "torso",
                    title: "cef.tattoo.torso",
                    items: new Array(100).fill(null).map(((i,e)=>({
                        id: e,
                        title: `Обычное тату №${e + 1}`,
                        cost: 1e3,
                        type: "money"
                    })))
                }, {
                    id: "leftHand",
                    title: "cef.tattoo.leftHand",
                    items: new Array(100).fill(null).map(((i,e)=>({
                        id: e,
                        title: `Обычное тату №${e + 1}`,
                        cost: 1e3,
                        type: "money"
                    })))
                }, {
                    id: "rightHand",
                    title: "cef.tattoo.rightHand",
                    items: new Array(100).fill(null).map(((i,e)=>({
                        id: e,
                        title: `Обычное тату №${e + 1}`,
                        cost: 1e3,
                        type: "money"
                    })))
                }, {
                    id: "leftFoot",
                    title: "cef.tattoo.leftFoot",
                    items: new Array(100).fill(null).map(((i,e)=>({
                        id: e,
                        title: `Обычное тату №${e + 1}`,
                        cost: 1e3,
                        type: "money"
                    })))
                }, {
                    id: "rightFoot",
                    title: "cef.tattoo.rightFoot",
                    items: new Array(100).fill(null).map(((i,e)=>({
                        id: e,
                        title: `Обычное тату №${e + 1}`,
                        cost: 1e3,
                        type: "money"
                    })))
                }]
            }, {
                id: "remove",
                title: "cef.tattoo.remove",
                subTitle: "",
                items: []
            }]
        }
          , n = o(92706);
        const d = Date.now()
          , r = [0, 1, 2, 3, 4]
          , s = [];
        var l = {
            "interface.changeRoute": i=>{
                "clothes" === i ? window.app.$store.commit("clothes/toggle", t.Z) : "tattoo" === i ? window.app.toggle_tattoo(JSON.stringify({
                    value: !0,
                    gender: 0,
                    categories: a,
                    shopPrices: [{
                        category: "torso",
                        price: 120
                    }, {
                        category: "heads",
                        price: 120
                    }, {
                        category: "leftHand",
                        price: 120
                    }, {
                        category: "rightHand",
                        price: 120
                    }, {
                        category: "leftFoot",
                        price: 120
                    }, {
                        category: "rightFoot",
                        price: 120
                    }, {
                        category: "remove",
                        price: 120
                    }]
                })) : "marketPlace" === i || "upgradeProperty" === i && app.$store.commit("upgradeProperty/toggle", JSON.stringify({
                    value: !0,
                    page: "garage",
                    propertyInfo: {
                        id: 1,
                        title: "Maze Bank",
                        garagePlaces: 0,
                        interior: {
                            interiors: 3,
                            lighting: 1,
                            signs: 2
                        }
                    },
                    garageFloorPrices: {
                        1: 15e5,
                        2: 3e6,
                        3: 45e5
                    },
                    availableCustomization: {
                        interiors: [{
                            id: 1,
                            price: 15e4
                        }, {
                            id: 2,
                            price: 285e3
                        }, {
                            id: 3,
                            price: 415e3
                        }, {
                            id: 4,
                            price: 5e5
                        }],
                        lighting: [{
                            id: 1,
                            price: 75e3
                        }, {
                            id: 2,
                            price: 81500
                        }, {
                            id: 3,
                            price: 85e3
                        }, {
                            id: 4,
                            price: 87500
                        }, {
                            id: 5,
                            price: 92500
                        }, {
                            id: 6,
                            price: 99500
                        }, {
                            id: 7,
                            price: 105e3
                        }, {
                            id: 8,
                            price: 127500
                        }, {
                            id: 9,
                            price: 15e4
                        }],
                        signs: [{
                            id: 1,
                            price: 5e4
                        }, {
                            id: 2,
                            price: 62500
                        }, {
                            id: 3,
                            price: 75e3
                        }, {
                            id: 4,
                            price: 87500
                        }, {
                            id: 5,
                            price: 1e5
                        }, {
                            id: 6,
                            price: 132500
                        }, {
                            id: 7,
                            price: 165e3
                        }, {
                            id: 8,
                            price: 197500
                        }, {
                            id: 9,
                            price: 25e4
                        }]
                    }
                }))
            }
            ,
            "tattoo.close": ()=>{
                window.app.toggle_tattoo(JSON.stringify({
                    value: !1
                })),
                window.app.$router.push("/")
            }
            ,
            "ipad.organization.captureMap.getData": ()=>{
                const i = {
                    [83]: {
                        factionId: 8,
                        colorRgb: [168, 84, 241]
                    },
                    [60]: {
                        factionId: 9,
                        colorRgb: [240, 203, 88],
                        textColorRgb: [0, 0, 0]
                    },
                    [25]: {
                        factionId: 10,
                        colorRgb: [23, 129, 93]
                    },
                    [1]: {
                        factionId: 11,
                        colorRgb: [225, 59, 59]
                    },
                    [57]: {
                        factionId: 12,
                        colorRgb: [101, 185, 231]
                    },
                    [4]: {
                        factionId: -1,
                        colorRgb: [255, 255, 255]
                    }
                }
                  , e = {
                    [63]: {
                        type: "attack",
                        initialTime: Date.now(),
                        startTime: Date.now() + Math.floor(108e5),
                        attackerId: 9,
                        defenderId: 12,
                        peopleCount: 9,
                        caliberLabel: ".357 Magnum 1"
                    },
                    [37]: {
                        type: "defence",
                        initialTime: Date.now(),
                        startTime: Date.now() + Math.floor(54e5),
                        attackerId: 12,
                        defenderId: 9,
                        peopleCount: 8,
                        caliberLabel: ".357 Magnum 2"
                    },
                    [5]: {
                        type: "anotherAttack",
                        initialTime: Date.now(),
                        startTime: Date.now() + Math.floor(18e4),
                        attackerId: 11,
                        defenderId: 10,
                        peopleCount: 7,
                        caliberLabel: ".357 Magnum 3"
                    }
                }
                  , o = [{
                    id: 1,
                    position: {
                        x: -185,
                        y: -1455,
                        z: 32
                    },
                    color: 25,
                    spawn: !0
                }, {
                    id: 2,
                    position: {
                        x: -185,
                        y: -1595,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 3,
                    position: {
                        x: -185,
                        y: -1735,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 4,
                    position: {
                        x: -45,
                        y: -1455,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 5,
                    position: {
                        x: -45,
                        y: -1595,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 6,
                    position: {
                        x: -45,
                        y: -1735,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 7,
                    position: {
                        x: -45,
                        y: -1875,
                        z: 32
                    },
                    color: 83,
                    spawn: !0
                }, {
                    id: 8,
                    position: {
                        x: 95,
                        y: -1455,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 9,
                    position: {
                        x: 95,
                        y: -1595,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 10,
                    position: {
                        x: 95,
                        y: -1735,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 11,
                    position: {
                        x: 95,
                        y: -1875,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 12,
                    position: {
                        x: 95,
                        y: -2015,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 13,
                    position: {
                        x: 95,
                        y: -2155,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 14,
                    position: {
                        x: 235,
                        y: -1315,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 15,
                    position: {
                        x: 235,
                        y: -1455,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 16,
                    position: {
                        x: 235,
                        y: -1595,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 17,
                    position: {
                        x: 235,
                        y: -1735,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 18,
                    position: {
                        x: 235,
                        y: -1875,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 19,
                    position: {
                        x: 235,
                        y: -2015,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 20,
                    position: {
                        x: 235,
                        y: -2155,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 21,
                    position: {
                        x: 375,
                        y: -1315,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 22,
                    position: {
                        x: 375,
                        y: -1455,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 23,
                    position: {
                        x: 375,
                        y: -1595,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 24,
                    position: {
                        x: 375,
                        y: -1735,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 25,
                    position: {
                        x: 375,
                        y: -1875,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 26,
                    position: {
                        x: 375,
                        y: -2015,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 27,
                    position: {
                        x: 375,
                        y: -2155,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 28,
                    position: {
                        x: 515,
                        y: -1315,
                        z: 32
                    },
                    color: 1,
                    spawn: !0
                }, {
                    id: 29,
                    position: {
                        x: 515,
                        y: -1455,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 30,
                    position: {
                        x: 515,
                        y: -1595,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 31,
                    position: {
                        x: 515,
                        y: -1735,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 32,
                    position: {
                        x: 515,
                        y: -1875,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 33,
                    position: {
                        x: 515,
                        y: -2015,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 34,
                    position: {
                        x: 515,
                        y: -2155,
                        z: 32
                    },
                    color: 60
                }, {
                    id: 35,
                    position: {
                        x: 785,
                        y: -1435,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 36,
                    position: {
                        x: 785,
                        y: -1575,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 37,
                    position: {
                        x: 785,
                        y: -1715,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 38,
                    position: {
                        x: 785,
                        y: -1855,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 39,
                    position: {
                        x: 785,
                        y: -1995,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 40,
                    position: {
                        x: 785,
                        y: -2135,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 41,
                    position: {
                        x: 785,
                        y: -2275,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 42,
                    position: {
                        x: 785,
                        y: -2415,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 43,
                    position: {
                        x: 925,
                        y: -1435,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 44,
                    position: {
                        x: 925,
                        y: -1575,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 45,
                    position: {
                        x: 925,
                        y: -1715,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 46,
                    position: {
                        x: 925,
                        y: -1855,
                        z: 26
                    },
                    color: 60,
                    spawn: !0
                }, {
                    id: 47,
                    position: {
                        x: 925,
                        y: -1995,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 48,
                    position: {
                        x: 925,
                        y: -2135,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 49,
                    position: {
                        x: 925,
                        y: -2275,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 50,
                    position: {
                        x: 925,
                        y: -2415,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 51,
                    position: {
                        x: 1065,
                        y: -1715,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 52,
                    position: {
                        x: 1065,
                        y: -1855,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 53,
                    position: {
                        x: 1065,
                        y: -1995,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 54,
                    position: {
                        x: 1065,
                        y: -2135,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 55,
                    position: {
                        x: 1065,
                        y: -2275,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 56,
                    position: {
                        x: 1065,
                        y: -2415,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 57,
                    position: {
                        x: 1205,
                        y: -1575,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 58,
                    position: {
                        x: 1205,
                        y: -1715,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 59,
                    position: {
                        x: 1205,
                        y: -1855,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 60,
                    position: {
                        x: 1205,
                        y: -1995,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 61,
                    position: {
                        x: 1205,
                        y: -2135,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 62,
                    position: {
                        x: 1205,
                        y: -2275,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 63,
                    position: {
                        x: 1205,
                        y: -2415,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 64,
                    position: {
                        x: 1345,
                        y: -1575,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 65,
                    position: {
                        x: 1345,
                        y: -1715,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 66,
                    position: {
                        x: 1345,
                        y: -1855,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 67,
                    position: {
                        x: 1345,
                        y: -1995,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 68,
                    position: {
                        x: 1345,
                        y: -2135,
                        z: 26
                    },
                    color: 60
                }, {
                    id: 69,
                    position: {
                        x: 1485,
                        y: -1435,
                        z: 26
                    },
                    color: 57,
                    spawn: !0
                }, {
                    id: 70,
                    position: {
                        x: 1485,
                        y: -1575,
                        z: 26
                    },
                    color: 60
                }].map(((o,t)=>{
                    const a = {
                        [35]: 1,
                        [36]: 1,
                        [43]: 1,
                        [44]: 57
                    }[o.id] || o.color;
                    return {
                        id: o.id,
                        position: o.position,
                        color: a,
                        spawn: o.spawn,
                        actionData: e[t],
                        factionId: i[a].factionId,
                        colorRgb: i[a].colorRgb,
                        textColorRgb: i[a].textColorRgb
                    }
                }
                ))
                  , t = {
                    type: "attack",
                    zoneId: 63,
                    startTime: Date.now() + Math.floor(36e5)
                }
                  , a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
                setTimeout((()=>{
                    window.app.ipad_organization_captureMap_getMainResult(JSON.stringify({
                        zones: o,
                        calibers: ["caliber 1", "caliber 2", "caliber 3", "caliber 4"],
                        isAdmin: !1,
                        fightDefence: 2,
                        fightDefenceEndTime: Date.now() + Math.floor(18e5),
                        fightAttack: 3,
                        fightAttackEndTime: Date.now() + Math.floor(3e3),
                        selfAction: t,
                        notificationIds: a,
                        readedNotificationIds: r,
                        maxDelayCaptureMinutes: 15,
                        freezeActive: !0,
                        canEdit: !0
                    }))
                }
                ), 300)
            }
            ,
            "ipad.organization.captureMap.getCaptureData": i=>{
                if (37 !== i) {
                    const i = [{
                        id: 0,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 1,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 2,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 3,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 4,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 5,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 6,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 7,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 8,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 9,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 10,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 11,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 12,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 13,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 14,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 15,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 16,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 17,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 18,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 19,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 20,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 21,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 22,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 23,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 24,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 25,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 26,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 27,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 28,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 29,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 30,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 31,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 32,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 33,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 34,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 35,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 36,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 37,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 38,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 39,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 40,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 41,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 42,
                        login: "Mark Minerov",
                        uid: 200,
                        rank: 5,
                        status: !0
                    }, {
                        id: 43,
                        login: "Ivan Ivanov",
                        uid: 220,
                        rank: 3,
                        status: "20.05.2022 20:22"
                    }].map((i=>({
                        ...i,
                        id: i.id + 100,
                        login: `Kek ${i.id + 100}`
                    })));
                    return void setTimeout((()=>{
                        window.app.ipad_organization_captureMap_getCaptureDataResult(JSON.stringify({
                            members: i,
                            actionData: null
                        }))
                    }
                    ), 300)
                }
                const e = [{
                    id: 0,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 1,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 2,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 3,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 4,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 5,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 6,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 7,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 8,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 9,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 10,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 11,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 12,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 13,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 14,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 15,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 16,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 17,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 18,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 19,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 20,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 21,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 22,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 23,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 24,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 25,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 26,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 27,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 28,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 29,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 30,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 31,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 32,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 33,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 34,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 35,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 36,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 37,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 38,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 39,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 40,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 41,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 42,
                    login: "Mark Minerov",
                    uid: 200,
                    rank: 5,
                    status: !0
                }, {
                    id: 43,
                    login: "Ivan Ivanov",
                    uid: 220,
                    rank: 3,
                    status: "20.05.2022 20:22"
                }].map((i=>({
                    ...i,
                    login: `Test ${i.id}`
                })))
                  , o = {
                    type: "attack",
                    initialTime: d,
                    startTime: d + Math.floor(108e5) + 6e4,
                    attackerId: 9,
                    defenderId: 12,
                    peopleCount: 10,
                    caliberId: 0,
                    caliberLabel: "magnum",
                    selectedPlayers: [5, 10, 15, 16],
                    additionalTime: 12e4,
                    attackerAdditionalTime: 6e4,
                    defenderAdditionalTime: 6e4
                };
                setTimeout((()=>{
                    window.app.ipad_organization_captureMap_getCaptureDataResult(JSON.stringify({
                        members: e,
                        actionData: o
                    }))
                }
                ), 300)
            }
            ,
            "ipad.organization.captureMap.getLogs": ()=>{
                const i = [{
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }, {
                    adm: 4,
                    login: "Michael Henderson",
                    uid: "200000",
                    action: "Перекрасил квадрат 86 на фракцию 22",
                    comment: "Отмена капта",
                    date: new Date
                }];
                setTimeout((()=>{
                    window.app.ipad_organization_captureMap_getLogsResult(JSON.stringify({
                        logs: i
                    }))
                }
                ), 300)
            }
            ,
            "ipad.organization.captureMap.getNotifications": ()=>{
                const i = [{
                    login: "Mark Minerov",
                    isNew: !0,
                    sid: 23232,
                    date: new Date,
                    message: "Капт за 32 квадрат отправляется на переигровку в связи с непредоставлением откатов со стороны Marabunta. Дата переигровки 21.05.2022. Время выбирайте обоюдно",
                    fractionIds: [12, 8]
                }, {
                    login: "Mark Minerov",
                    isNew: !0,
                    sid: 23232,
                    date: new Date,
                    message: "Капт за 32 квадрат отправляется на переигровку в связи с непредоставлением откатов со стороны Marabunta. Дата переигровки 21.05.2022. Время выбирайте обоюдно",
                    fractionIds: [12, 8]
                }, {
                    login: "Mark Minerov",
                    isNew: !0,
                    sid: 23232,
                    date: new Date,
                    message: "Капт за 32 квадрат отправляется на переигровку в связи с непредоставлением откатов со стороны Marabunta. Дата переигровки 21.05.2022. Время выбирайте обоюдно",
                    fractionIds: [12, 8]
                }, {
                    login: "Mark Minerov",
                    isNew: !0,
                    sid: 23232,
                    date: new Date,
                    message: "Капт за 32 квадрат отправляется на переигровку в связи с непредоставлением откатов со стороны Marabunta. Дата переигровки 21.05.2022. Время выбирайте обоюдно",
                    fractionIds: [12, 8]
                }, {
                    login: "Mark Minerov",
                    isNew: !0,
                    sid: 23232,
                    date: new Date,
                    message: "Капт за 32 квадрат отправляется на переигровку в связи с непредоставлением откатов со стороны Marabunta. Дата переигровки 21.05.2022. Время выбирайте обоюдно",
                    fractionIds: [12, 8]
                }, {
                    login: "Mark Minerov",
                    isNew: !0,
                    sid: 23232,
                    date: new Date,
                    message: "Капт за 32 квадрат отправляется на переигровку в связи с непредоставлением откатов со стороны Marabunta. Дата переигровки 21.05.2022. Время выбирайте обоюдно",
                    fractionIds: [12, 8]
                }, {
                    login: "Mark Minerov",
                    isNew: !0,
                    sid: 23232,
                    date: new Date,
                    message: "Капт за 32 квадрат отправляется на переигровку в связи с непредоставлением откатов со стороны Marabunta. Дата переигровки 21.05.2022. Время выбирайте обоюдно",
                    fractionIds: [12, 8]
                }, {
                    login: "Mark Minerov",
                    isNew: !0,
                    sid: 23232,
                    date: new Date,
                    message: "Капт за 32 квадрат отправляется на переигровку в связи с непредоставлением откатов со стороны Marabunta. Дата переигровки 21.05.2022. Время выбирайте обоюдно",
                    fractionIds: [12, 8]
                }, {
                    login: "Mark Minerov",
                    isNew: !0,
                    sid: 23232,
                    date: new Date,
                    message: "Капт за 32 квадрат отправляется на переигровку в связи с непредоставлением откатов со стороны Marabunta. Дата переигровки 21.05.2022. Время выбирайте обоюдно",
                    fractionIds: [12, 8]
                }, {
                    login: "Mark Minerov",
                    isNew: !0,
                    sid: 23232,
                    date: new Date,
                    message: "Капт за 32 квадрат отправляется на переигровку в связи с непредоставлением откатов со стороны Marabunta. Дата переигровки 21.05.2022. Время выбирайте обоюдно",
                    fractionIds: [12, 8]
                }, {
                    login: "Mark Minerov",
                    isNew: !0,
                    sid: 23232,
                    date: new Date,
                    message: "Капт за 32 квадрат отправляется на переигровку в связи с непредоставлением откатов со стороны Marabunta. Дата переигровки 21.05.2022. Время выбирайте обоюдно",
                    fractionIds: [12, 8]
                }, {
                    login: "Mark Minerov",
                    isNew: !0,
                    sid: 23232,
                    date: new Date,
                    message: "Капт за 32 квадрат отправляется на переигровку в связи с непредоставлением откатов со стороны Marabunta. Дата переигровки 21.05.2022. Время выбирайте обоюдно",
                    fractionIds: [12, 8]
                }, {
                    login: "Mark Minerov",
                    isNew: !0,
                    sid: 23232,
                    date: new Date,
                    message: "Капт за 32 квадрат отправляется на переигровку в связи с непредоставлением откатов со стороны Marabunta. Дата переигровки 21.05.2022. Время выбирайте обоюдно",
                    fractionIds: [12, 8]
                }, {
                    login: "Mark Minerov",
                    isNew: !0,
                    sid: 23232,
                    date: new Date,
                    message: "Капт за 32 квадрат отправляется на переигровку в связи с непредоставлением откатов со стороны Marabunta. Дата переигровки 21.05.2022. Время выбирайте обоюдно",
                    fractionIds: [12, 8]
                }, {
                    login: "Mark Minerov",
                    isNew: !0,
                    sid: 23232,
                    date: new Date,
                    message: "Капт за 32 квадрат отправляется на переигровку в связи с непредоставлением откатов со стороны Marabunta. Дата переигровки 21.05.2022. Время выбирайте обоюдно",
                    fractionIds: [12, 8]
                }].map(((i,e)=>({
                    ...i,
                    id: e,
                    isNew: !r.includes(e)
                })));
                setTimeout((()=>{
                    window.app.ipad_organization_captureMap_getNotificationsResult(JSON.stringify({
                        notifications: i
                    }))
                }
                ), 300)
            }
            ,
            "ipad.organization.captureMap.notificationMarkAsRead": i=>{
                r.includes(i) || r.push(i)
            }
            ,
            "marketplace.requestBusinessStats": (i,e,o)=>{
                const t = ()=>"atm" === e ? {
                    total: {
                        cashOut: (0,
                        n.XF)(1, 1e8),
                        cashIn: (0,
                        n.XF)(1, 1e8),
                        deposits: (0,
                        n.XF)(1, 1e8),
                        operations: (0,
                        n.XF)(1, 1e3),
                        visitors: (0,
                        n.XF)(1, 1e3),
                        money: (0,
                        n.XF)(1, 1e8)
                    }
                } : "billboards" === e ? {
                    total: {
                        profit: (0,
                        n.XF)(1, 1e8)
                    }
                } : {
                    total: {
                        income: (0,
                        n.XF)(1, 1e8),
                        netProfit: (0,
                        n.XF)(1, 1e8),
                        averageCheck: (0,
                        n.XF)(1, 1e8),
                        salesCount: (0,
                        n.XF)(1, 1e5),
                        profitability: (0,
                        n.XF)(1, 1e4) / 100
                    },
                    topCustomers: Array(25).fill({
                        name: "Иванов Иван"
                    }).map((i=>({
                        ...i,
                        total: (0,
                        n.XF)(100, 1e8)
                    }))),
                    topProducts: Array(25).fill({
                        name: "Пойло"
                    }).map((i=>({
                        ...i,
                        total: (0,
                        n.XF)(100, 1e8)
                    })))
                };
                window.app.marketplace_updateBusinessStats(JSON.stringify({
                    id: i,
                    tableName: e,
                    interval: o,
                    stats: t()
                }))
            }
            ,
            "marketplace.switchFavorite": (i,e)=>{
                const o = s.findIndex((o=>o.type === i && o.id === e));
                if (-1 === o) {
                    const o = {
                        type: i,
                        id: e
                    };
                    return s.push(o),
                    window.app.marketplace_addFavorite(JSON.stringify({
                        newFavorite: o
                    }))
                }
                s.splice(o, 1),
                window.app.marketplace_removeFavorite(JSON.stringify({
                    type: i,
                    id: e
                }))
            }
            ,
            "marketplace.requestPurchaseHistory": ()=>{}
            ,
            "quiz.exit": ()=>{
                window.app.toggle_quiz(JSON.stringify({
                    value: !1
                }))
            }
            ,
            "quiz.sendResults": ()=>{
                window.app.main_showNotify(JSON.stringify({
                    type: "success",
                    text: "Вы успешно получили бонус в 200 MC."
                }))
            }
        }
    }
}]);
