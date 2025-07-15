"use strict";
(self["webpackChunkcef"] = self["webpackChunkcef"] || []).push([[7409], {
    17409: function(e, t, a) {
        a.r(t),
        a.d(t, {
            default: function() {
                return G
            }
        });
        var o = a(78221);
        const i = e=>((0,
        o.pushScopeId)("data-v-178c977e"),
        e = e(),
        (0,
        o.popScopeId)(),
        e)
          , n = {
            key: 0,
            class: "ipad-wrapper"
        }
          , l = {
            class: "ipad",
            ref: "ipad"
        }
          , c = i((()=>(0,
        o.createElementVNode)("div", {
            class: "ipad-shell"
        }, null, -1)))
          , p = {
            ref: "window",
            class: "ipad-window"
        }
          , s = {
            class: "time-info row-block"
        }
          , d = {
            class: "connection-info align-center row-block"
        }
          , r = i((()=>(0,
        o.createElementVNode)("div", {
            class: "connection-info__text-battery align-center"
        }, [(0,
        o.createElementVNode)("span", null, "100"), (0,
        o.createElementVNode)("span", null, "%")], -1)))
          , m = {
            class: "locked-time"
        }
          , h = {
            class: "time-container column-block"
        }
          , k = {
            class: "time-container__text-main"
        }
          , u = {
            class: "time-container__text-dayInfo"
        }
          , g = {
            class: "locked-hint column-block"
        }
          , f = {
            class: "locked-hint__text"
        }
          , w = ["src"]
          , v = {
            class: "ipad-content"
        }
          , b = {
            key: 0,
            class: "active-application full-height full-width"
        }
          , y = {
            key: 0,
            class: "home-page"
        }
          , N = {
            class: "apps-block row-block"
        }
          , C = ["onClick"]
          , E = ["src"]
          , V = ["src"]
          , _ = ["src"]
          , x = {
            class: "fast-apps"
        }
          , B = {
            class: "fast-apps-content"
        }
          , A = ["onClick"]
          , S = ["src"];
        function $(e, t) {
            const a = (0,
            o.resolveComponent)("SVGComponent")
              , i = (0,
            o.resolveComponent)("app");
            return (0,
            o.openBlock)(),
            (0,
            o.createBlock)(o.Transition, {
                appear: "",
                name: "ipad-slide"
            }, {
                default: (0,
                o.withCtx)((()=>[e.show ? ((0,
                o.openBlock)(),
                (0,
                o.createElementBlock)("div", n, [(0,
                o.createElementVNode)("div", l, [c, (0,
                o.createElementVNode)("div", {
                    onClick: t[0] || (t[0] = t=>!!e.possibleToUnlock && e.switchState(!e.disabled)),
                    class: "ipad-shadow-button"
                }), (0,
                o.createElementVNode)("div", p, [(0,
                o.createElementVNode)("div", {
                    onClick: t[1] || (t[1] = t=>!!e.possibleToUnlock && e.switchState(!1)),
                    class: (0,
                    o.normalizeClass)([{
                        disabled: e.disabled
                    }, "ipad-shadow"]),
                    style: (0,
                    o.normalizeStyle)({
                        "background-color": `rgba(0, 0, 0, ${e.brightness})`
                    })
                }, null, 6), e.navbar.showed ? ((0,
                o.openBlock)(),
                (0,
                o.createElementBlock)("div", {
                    key: 0,
                    class: (0,
                    o.normalizeClass)([e.navbarColor ? "black" : "white", "ipad-statusbar row-block align-center justify-between"])
                }, [(0,
                o.createElementVNode)("div", s, (0,
                o.toDisplayString)(e.time) + ", " + (0,
                o.toDisplayString)(e.weekday) + ", " + (0,
                o.toDisplayString)(e.date), 1), (0,
                o.createElementVNode)("div", d, [(0,
                o.createVNode)(a, {
                    class: "connection-info__picture-wifi",
                    path: "icons/ipad/statusbar/wifi.svg"
                }), r, (0,
                o.createVNode)(a, {
                    class: "connection-info__picture-battery",
                    path: "icons/ipad/statusbar/battery.svg"
                })])], 2)) : (0,
                o.createCommentVNode)("", !0), (0,
                o.createVNode)(o.Transition, {
                    name: "slideY"
                }, {
                    default: (0,
                    o.withCtx)((()=>[e.lockWindow.removed ? (0,
                    o.createCommentVNode)("", !0) : ((0,
                    o.openBlock)(),
                    (0,
                    o.createElementBlock)("div", {
                        key: 0,
                        onClick: t[2] || (t[2] = (...t)=>e.unlockClick && e.unlockClick(...t)),
                        class: "ipad-locked"
                    }, [(0,
                    o.createElementVNode)("div", m, [(0,
                    o.createElementVNode)("div", h, [(0,
                    o.createElementVNode)("div", k, (0,
                    o.toDisplayString)(e.time), 1), (0,
                    o.createElementVNode)("div", u, (0,
                    o.toDisplayString)(e.weekday) + ", " + (0,
                    o.toDisplayString)(e.date), 1)])]), (0,
                    o.createElementVNode)("div", g, [(0,
                    o.createElementVNode)("div", f, (0,
                    o.toDisplayString)(e.$t("cef.ipad.click-to-unblock")), 1), (0,
                    o.createElementVNode)("img", {
                        src: `${e.cdn}/img/ipad/locked-decoration.svg`,
                        class: "locked-hint__picture"
                    }, null, 8, w)])]))])),
                    _: 1
                }), (0,
                o.createElementVNode)("div", v, [(0,
                o.createVNode)(o.Transition, {
                    name: "fade-out"
                }, {
                    default: (0,
                    o.withCtx)((()=>[e.openedApp && e.lockWindow.removed ? ((0,
                    o.openBlock)(),
                    (0,
                    o.createElementBlock)("div", {
                        key: 0,
                        class: (0,
                        o.normalizeClass)(["expanding-cover full-width full-height", e.expandingClass ? `expanding-${e.expandingClass}` : "expanded"]),
                        style: (0,
                        o.normalizeStyle)({
                            "animation-duration": `${e.$options.EXPANDING_DURATION}ms`,
                            ...e.expandingStyles,
                            "background-color": e.expanderColor
                        })
                    }, [(0,
                    o.createVNode)(o.Transition, {
                        appear: "",
                        name: "local-fade"
                    }, {
                        default: (0,
                        o.withCtx)((()=>[e.expandingClass ? (0,
                        o.createCommentVNode)("", !0) : ((0,
                        o.openBlock)(),
                        (0,
                        o.createElementBlock)("div", b, [(0,
                        o.createVNode)(i, {
                            application: e.openedPath,
                            class: "full-height full-width"
                        }, null, 8, ["application"])]))])),
                        _: 1
                    })], 6)) : (0,
                    o.createCommentVNode)("", !0)])),
                    _: 1
                }), (0,
                o.createVNode)(o.Transition, {
                    appear: "",
                    name: "local-fade"
                }, {
                    default: (0,
                    o.withCtx)((()=>[e.lockWindow.removed && !e.expandingClass ? ((0,
                    o.openBlock)(),
                    (0,
                    o.createElementBlock)("div", y, [(0,
                    o.createElementVNode)("div", N, [((0,
                    o.openBlock)(!0),
                    (0,
                    o.createElementBlock)(o.Fragment, null, (0,
                    o.renderList)(e.apps, (a=>((0,
                    o.openBlock)(),
                    (0,
                    o.createElementBlock)("div", {
                        onClick: t=>e.openApp(a, t),
                        class: "app-content column-block"
                    }, ["organization" !== a.path && "family" !== a.path || !a.iconPath ? "organization" !== a.path && "family" !== a.path || a.iconPath ? ((0,
                    o.openBlock)(),
                    (0,
                    o.createElementBlock)("img", {
                        key: 2,
                        src: `${e.cdn}/img/global/ios/apps/${a.iconPath}`,
                        class: "app-content__icon",
                        alt: ""
                    }, null, 8, _)) : ((0,
                    o.openBlock)(),
                    (0,
                    o.createElementBlock)("img", {
                        key: 1,
                        src: `${e.cdn}/img/ipad/apps/organizations/family.svg`,
                        class: "app-content__icon",
                        alt: ""
                    }, null, 8, V)) : ((0,
                    o.openBlock)(),
                    (0,
                    o.createElementBlock)("img", {
                        key: 0,
                        src: `${a.iconPath}`,
                        class: "app-content__icon",
                        alt: ""
                    }, null, 8, E)), (0,
                    o.createElementVNode)("div", {
                        onClick: t[3] || (t[3] = (0,
                        o.withModifiers)((()=>{}
                        ), ["prevent", "stop"])),
                        class: "app-content__title"
                    }, (0,
                    o.toDisplayString)(e.unescapeString(e.$t(a.title))), 1)], 8, C)))), 256))]), (0,
                    o.createElementVNode)("div", x, [(0,
                    o.createElementVNode)("div", B, [((0,
                    o.openBlock)(!0),
                    (0,
                    o.createElementBlock)(o.Fragment, null, (0,
                    o.renderList)(e.fastApps, (t=>((0,
                    o.openBlock)(),
                    (0,
                    o.createElementBlock)("div", {
                        onClick: a=>e.openApp(t, a),
                        class: "app-content column-block"
                    }, [(0,
                    o.createElementVNode)("img", {
                        src: `${e.cdn}/img/global/ios/apps/${t.iconPath}`,
                        class: "app-content__icon",
                        alt: ""
                    }, null, 8, S)], 8, A)))), 256))])])])) : (0,
                    o.createCommentVNode)("", !0)])),
                    _: 1
                })])], 512)], 512)])) : (0,
                o.createCommentVNode)("", !0)])),
                _: 1
            })
        }
        function D(e, t, a, i, n, l) {
            const c = (0,
            o.resolveComponent)("router-view");
            return (0,
            o.openBlock)(),
            (0,
            o.createBlock)(c)
        }
        var I = {
            name: "app",
            props: {
                application: {
                    required: !0,
                    type: String
                }
            },
            mounted() {
                this.$router.push({
                    name: this.application
                })
            },
            beforeUnmount() {
                this.$router.push("/ipad")
            }
        }
          , T = a(83744);
        const z = (0,
        T.Z)(I, [["render", D]]);
        var P = z
          , U = a(33907)
          , R = a(49759)
          , W = {
            name: "ipad",
            mixins: [R.Z],
            components: {
                App: P
            },
            EXPANDING_DURATION: 500,
            mounted() {
                setTimeout(this.initApps, 250)
            },
            data() {
                return {
                    expandingClass: !1,
                    expandingStyles: {}
                }
            },
            methods: {
                ...(0,
                U.OI)({
                    closeApp: "ipad/closeApp",
                    unlockClick: "ipad/unlockClick",
                    showNotify: "main/showNotify"
                }),
                ...(0,
                U.nv)({
                    openApplication: "ipad/openApp",
                    dispatchSwitchState: "ipad/switchState",
                    lockDevice: "ipad/lockDevice",
                    initApps: "ipad/initApps"
                }),
                switchState(e) {
                    this.openedApp && "driving-school" === this.openedApp || this.dispatchSwitchState(e)
                },
                openApp(e, t) {
                    if ("business" === e.path && !this.biz)
                        return this.showNotify({
                            text: this.$t("cef.ipad.no-business"),
                            type: "error"
                        });
                    if ("home" === e.path && !this.houseId && !this.apartmentId)
                        return this.showNotify({
                            text: this.$t("cef.ipad.no-house"),
                            type: "error"
                        });
                    if ("no-fraction" === e.path)
                        return this.showNotify({
                            text: this.$t("cef.ipad.no-org"),
                            type: "error"
                        });
                    if ("no-family" === e.path)
                        return this.showNotify({
                            text: this.$t("cef.ipad.no-family"),
                            type: "error"
                        });
                    if ("marketplace" === e.path)
                        return mp.trigger2("ipad.close"),
                        void mp.trigger2("marketplace.init", !0);
                    const a = t.target.getBoundingClientRect()
                      , o = this.$refs.ipad.getBoundingClientRect()
                      , i = this.$refs.window.getBoundingClientRect()
                      , n = o.left
                      , l = o.width
                      , c = i.width
                      , p = o.top
                      , s = o.height
                      , d = i.height;
                    this.expandingStyles.left = a.left - n - (l - c) / 2 + "px",
                    this.expandingStyles.top = a.top - p - (s - d) / 2 + "px",
                    this.expandingClass = "out",
                    setTimeout((()=>{
                        this.expandingClass = null,
                        this.expandingStyles = {}
                    }
                    ), this.$options.EXPANDING_DURATION),
                    this.openApplication({
                        app: e
                    })
                }
            },
            computed: {
                ...(0,
                U.rn)({
                    show: e=>e.ipad.show,
                    date: e=>e.main.date ? e.main.date.format("DD MMMM") : null,
                    time: e=>e.main.time,
                    weekday: e=>e.main.weekday,
                    openedApp: e=>e.ipad.openedApp,
                    openedPath: e=>e.ipad.openedPath,
                    app: e=>e.ipad.app,
                    disabled: e=>e.ipad.disabled,
                    possibleToUnlock: e=>e.ipad.possibleToUnlock,
                    brightness: e=>e.ipad.brightness,
                    lockWindow: e=>e.ipad.lockWindow,
                    apps: e=>e.ipad.apps,
                    fastApps: e=>e.ipad.fastApps,
                    biz: e=>e.ipad.biz,
                    member: e=>e.main.member,
                    family: e=>e.main.family,
                    houseId: e=>e.ipad.houseId,
                    apartmentId: e=>e.ipad.apartmentId,
                    workingApps: e=>e.ipad.workingApps,
                    navbar: e=>e.ipad.navbar,
                    colorSchema: e=>e.ipad.colorSchema[e.ipad.openedApp]
                }),
                navbarColor() {
                    return this.navbar.app && null !== this.openedApp || this.navbar.lockWindow
                },
                expanderColor() {
                    return "organization" === this.openedApp || "family" === this.openedApp ? this.colorSchema.backgroundColor : this.app.color
                }
            },
            watch: {
                show(e) {
                    e || this.lockDevice()
                }
            }
        };
        const M = (0,
        T.Z)(W, [["render", $], ["__scopeId", "data-v-178c977e"]]);
        var G = M
    }
}]);
