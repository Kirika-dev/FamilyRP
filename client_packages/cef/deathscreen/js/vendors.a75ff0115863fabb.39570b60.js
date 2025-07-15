"use strict";
(self["webpackChunkcef"] = self["webpackChunkcef"] || []).push([[8905], {
    23627: function(e, t, a) {
        a.d(t, {
            o: function() {
                return te
            }
        });
        var n = a(48560)
          , l = a(57692)
          , r = a(33690)
          , o = a(78221);
        /*!
  * vue-i18n v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
        const s = "9.13.1";
        function u() {
            "boolean" !== typeof __VUE_I18N_FULL_INSTALL__ && ((0,
            n.E9)().__VUE_I18N_FULL_INSTALL__ = !0),
            "boolean" !== typeof __VUE_I18N_LEGACY_API__ && ((0,
            n.E9)().__VUE_I18N_LEGACY_API__ = !0),
            "boolean" !== typeof __INTLIFY_JIT_COMPILATION__ && ((0,
            n.E9)().__INTLIFY_JIT_COMPILATION__ = !1),
            "boolean" !== typeof __INTLIFY_DROP_MESSAGE_COMPILER__ && ((0,
            n.E9)().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1),
            "boolean" !== typeof __INTLIFY_PROD_DEVTOOLS__ && ((0,
            n.E9)().__INTLIFY_PROD_DEVTOOLS__ = !1)
        }
        const i = l.kU.__EXTEND_POINT__
          , c = (0,
        n.pf)(i)
          , _ = {
            FALLBACK_TO_ROOT: i,
            NOT_SUPPORTED_PRESERVE: c(),
            NOT_SUPPORTED_FORMATTER: c(),
            NOT_SUPPORTED_PRESERVE_DIRECTIVE: c(),
            NOT_SUPPORTED_GET_CHOICE_INDEX: c(),
            COMPONENT_NAME_LEGACY_COMPATIBLE: c(),
            NOT_FOUND_PARENT_SCOPE: c(),
            IGNORE_OBJ_FLATTEN: c(),
            NOTICE_DROP_ALLOW_COMPOSITION: c(),
            NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: c()
        };
        _.FALLBACK_TO_ROOT,
        _.NOT_SUPPORTED_PRESERVE,
        _.NOT_SUPPORTED_FORMATTER,
        _.NOT_SUPPORTED_PRESERVE_DIRECTIVE,
        _.NOT_SUPPORTED_GET_CHOICE_INDEX,
        _.COMPONENT_NAME_LEGACY_COMPATIBLE,
        _.NOT_FOUND_PARENT_SCOPE,
        _.IGNORE_OBJ_FLATTEN,
        _.NOTICE_DROP_ALLOW_COMPOSITION,
        _.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG;
        const m = l.$s.__EXTEND_POINT__
          , f = (0,
        n.pf)(m)
          , g = {
            UNEXPECTED_RETURN_TYPE: m,
            INVALID_ARGUMENT: f(),
            MUST_BE_CALL_SETUP_TOP: f(),
            NOT_INSTALLED: f(),
            NOT_AVAILABLE_IN_LEGACY_MODE: f(),
            REQUIRED_VALUE: f(),
            INVALID_VALUE: f(),
            CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: f(),
            NOT_INSTALLED_WITH_PROVIDE: f(),
            UNEXPECTED_ERROR: f(),
            NOT_COMPATIBLE_LEGACY_VUE_I18N: f(),
            BRIDGE_SUPPORT_VUE_2_ONLY: f(),
            MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: f(),
            NOT_AVAILABLE_COMPOSITION_IN_LEGACY: f(),
            __EXTEND_POINT__: f()
        };
        function p(e, ...t) {
            return (0,
            r.t)(e, null, void 0)
        }
        g.UNEXPECTED_RETURN_TYPE,
        g.INVALID_ARGUMENT,
        g.MUST_BE_CALL_SETUP_TOP,
        g.NOT_INSTALLED,
        g.UNEXPECTED_ERROR,
        g.NOT_AVAILABLE_IN_LEGACY_MODE,
        g.REQUIRED_VALUE,
        g.INVALID_VALUE,
        g.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN,
        g.NOT_INSTALLED_WITH_PROVIDE,
        g.NOT_COMPATIBLE_LEGACY_VUE_I18N,
        g.BRIDGE_SUPPORT_VUE_2_ONLY,
        g.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION,
        g.NOT_AVAILABLE_COMPOSITION_IN_LEGACY;
        const v = (0,
        n.je)("__translateVNode")
          , E = (0,
        n.je)("__datetimeParts")
          , b = (0,
        n.je)("__numberParts")
          , O = (0,
        n.je)("__setPluralRules");
        (0,
        n.je)("__intlifyMeta");
        const L = (0,
        n.je)("__injectWithOption")
          , T = (0,
        n.je)("__dispose");
        function I(e) {
            if (!(0,
            n.Kn)(e))
                return e;
            for (const t in e)
                if ((0,
                n.RI)(e, t))
                    if (t.includes(".")) {
                        const a = t.split(".")
                          , l = a.length - 1;
                        let r = e
                          , o = !1;
                        for (let e = 0; e < l; e++) {
                            if (a[e]in r || (r[a[e]] = {}),
                            !(0,
                            n.Kn)(r[a[e]])) {
                                o = !0;
                                break
                            }
                            r = r[a[e]]
                        }
                        o || (r[a[l]] = e[t],
                        delete e[t]),
                        (0,
                        n.Kn)(r[a[l]]) && I(r[a[l]])
                    } else
                        (0,
                        n.Kn)(e[t]) && I(e[t]);
            return e
        }
        function d(e, t) {
            const {messages: a, __i18n: l, messageResolver: r, flatJson: o} = t
              , s = (0,
            n.PO)(a) ? a : (0,
            n.kJ)(l) ? {} : {
                [e]: {}
            };
            if ((0,
            n.kJ)(l) && l.forEach((e=>{
                if ("locale"in e && "resource"in e) {
                    const {locale: t, resource: a} = e;
                    t ? (s[t] = s[t] || {},
                    (0,
                    n.p$)(a, s[t])) : (0,
                    n.p$)(a, s)
                } else
                    (0,
                    n.HD)(e) && (0,
                    n.p$)(JSON.parse(e), s)
            }
            )),
            null == r && o)
                for (const u in s)
                    (0,
                    n.RI)(s, u) && I(s[u]);
            return s
        }
        function N(e) {
            return e.type
        }
        function P(e, t, a) {
            let l = (0,
            n.Kn)(t.messages) ? t.messages : {};
            "__i18nGlobal"in a && (l = d(e.locale.value, {
                messages: l,
                __i18n: a.__i18nGlobal
            }));
            const r = Object.keys(l);
            if (r.length && r.forEach((t=>{
                e.mergeLocaleMessage(t, l[t])
            }
            )),
            (0,
            n.Kn)(t.datetimeFormats)) {
                const a = Object.keys(t.datetimeFormats);
                a.length && a.forEach((a=>{
                    e.mergeDateTimeFormat(a, t.datetimeFormats[a])
                }
                ))
            }
            if ((0,
            n.Kn)(t.numberFormats)) {
                const a = Object.keys(t.numberFormats);
                a.length && a.forEach((a=>{
                    e.mergeNumberFormat(a, t.numberFormats[a])
                }
                ))
            }
        }
        function R(e) {
            return (0,
            o.createVNode)(o.Text, null, e, 0)
        }
        const k = "__INTLIFY_META__"
          , F = ()=>[]
          , D = ()=>!1;
        let h = 0;
        function A(e) {
            return (t,a,n,l)=>e(a, n, (0,
            o.getCurrentInstance)() || void 0, l)
        }
        const M = ()=>{
            const e = (0,
            o.getCurrentInstance)();
            let t = null;
            return e && (t = N(e)[k]) ? {
                [k]: t
            } : null
        }
        ;
        function C(e={}, t) {
            const {__root: a, __injectWithOption: r} = e
              , u = void 0 === a
              , i = e.flatJson
              , c = n._f ? o.ref : o.shallowRef
              , _ = !!e.translateExistCompatible;
            let m = !(0,
            n.jn)(e.inheritLocale) || e.inheritLocale;
            const f = c(a && m ? a.locale.value : (0,
            n.HD)(e.locale) ? e.locale : l.ZW)
              , T = c(a && m ? a.fallbackLocale.value : (0,
            n.HD)(e.fallbackLocale) || (0,
            n.kJ)(e.fallbackLocale) || (0,
            n.PO)(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : f.value)
              , N = c(d(f.value, e))
              , P = c((0,
            n.PO)(e.datetimeFormats) ? e.datetimeFormats : {
                [f.value]: {}
            })
              , k = c((0,
            n.PO)(e.numberFormats) ? e.numberFormats : {
                [f.value]: {}
            });
            let C = a ? a.missingWarn : !(0,
            n.jn)(e.missingWarn) && !(0,
            n.Kj)(e.missingWarn) || e.missingWarn
              , y = a ? a.fallbackWarn : !(0,
            n.jn)(e.fallbackWarn) && !(0,
            n.Kj)(e.fallbackWarn) || e.fallbackWarn
              , H = a ? a.fallbackRoot : !(0,
            n.jn)(e.fallbackRoot) || e.fallbackRoot
              , U = !!e.fallbackFormat
              , S = (0,
            n.mf)(e.missing) ? e.missing : null
              , W = (0,
            n.mf)(e.missing) ? A(e.missing) : null
              , j = (0,
            n.mf)(e.postTranslation) ? e.postTranslation : null
              , V = a ? a.warnHtmlMessage : !(0,
            n.jn)(e.warnHtmlMessage) || e.warnHtmlMessage
              , w = !!e.escapeParameter;
            const $ = a ? a.modifiers : (0,
            n.PO)(e.modifiers) ? e.modifiers : {};
            let G, x = e.pluralRules || a && a.pluralRules;
            const Y = ()=>{
                u && (0,
                l.Oz)(null);
                const t = {
                    version: s,
                    locale: f.value,
                    fallbackLocale: T.value,
                    messages: N.value,
                    modifiers: $,
                    pluralRules: x,
                    missing: null === W ? void 0 : W,
                    missingWarn: C,
                    fallbackWarn: y,
                    fallbackFormat: U,
                    unresolving: !0,
                    postTranslation: null === j ? void 0 : j,
                    warnHtmlMessage: V,
                    escapeParameter: w,
                    messageResolver: e.messageResolver,
                    messageCompiler: e.messageCompiler,
                    __meta: {
                        framework: "vue"
                    }
                };
                t.datetimeFormats = P.value,
                t.numberFormats = k.value,
                t.__datetimeFormatters = (0,
                n.PO)(G) ? G.__datetimeFormatters : void 0,
                t.__numberFormatters = (0,
                n.PO)(G) ? G.__numberFormatters : void 0;
                const a = (0,
                l.kA)(t);
                return u && (0,
                l.Oz)(a),
                a
            }
            ;
            function B() {
                return [f.value, T.value, N.value, P.value, k.value]
            }
            G = Y(),
            (0,
            l.zn)(G, f.value, T.value);
            const J = (0,
            o.computed)({
                get: ()=>f.value,
                set: e=>{
                    f.value = e,
                    G.locale = f.value
                }
            })
              , K = (0,
            o.computed)({
                get: ()=>T.value,
                set: e=>{
                    T.value = e,
                    G.fallbackLocale = T.value,
                    (0,
                    l.zn)(G, f.value, e)
                }
            })
              , X = (0,
            o.computed)((()=>N.value))
              , z = (0,
            o.computed)((()=>P.value))
              , Q = (0,
            o.computed)((()=>k.value));
            function Z() {
                return (0,
                n.mf)(j) ? j : null
            }
            function q(e) {
                j = e,
                G.postTranslation = e
            }
            function ee() {
                return S
            }
            function te(e) {
                null !== e && (W = A(e)),
                S = e,
                G.missing = W
            }
            const ae = (e,t,r,o,s,i)=>{
                let c;
                B();
                try {
                    __INTLIFY_PROD_DEVTOOLS__ && (0,
                    l.VB)(M()),
                    u || (G.fallbackContext = a ? (0,
                    l.Vw)() : void 0),
                    c = e(G)
                } finally {
                    __INTLIFY_PROD_DEVTOOLS__ && (0,
                    l.VB)(null),
                    u || (G.fallbackContext = void 0)
                }
                if ("translate exists" !== r && (0,
                n.hj)(c) && c === l.zS || "translate exists" === r && !c) {
                    const [e,n] = t();
                    return a && H ? o(a) : s(e)
                }
                if (i(c))
                    return c;
                throw p(g.UNEXPECTED_RETURN_TYPE)
            }
            ;
            function ne(...e) {
                return ae((t=>Reflect.apply(l.Iu, null, [t, ...e])), (()=>(0,
                l.cr)(...e)), "translate", (t=>Reflect.apply(t.t, t, [...e])), (e=>e), (e=>(0,
                n.HD)(e)))
            }
            function le(...e) {
                const [t,a,l] = e;
                if (l && !(0,
                n.Kn)(l))
                    throw p(g.INVALID_ARGUMENT);
                return ne(t, a, (0,
                n.f0)({
                    resolvedMessage: !0
                }, l || {}))
            }
            function re(...e) {
                return ae((t=>Reflect.apply(l.t2, null, [t, ...e])), (()=>(0,
                l.Ls)(...e)), "datetime format", (t=>Reflect.apply(t.d, t, [...e])), (()=>l.In), (e=>(0,
                n.HD)(e)))
            }
            function oe(...e) {
                return ae((t=>Reflect.apply(l.Rx, null, [t, ...e])), (()=>(0,
                l.sb)(...e)), "number format", (t=>Reflect.apply(t.n, t, [...e])), (()=>l.In), (e=>(0,
                n.HD)(e)))
            }
            function se(e) {
                return e.map((e=>(0,
                n.HD)(e) || (0,
                n.hj)(e) || (0,
                n.jn)(e) ? R(String(e)) : e))
            }
            const ue = e=>e
              , ie = {
                normalize: se,
                interpolate: ue,
                type: "vnode"
            };
            function ce(...e) {
                return ae((t=>{
                    let a;
                    const n = t;
                    try {
                        n.processor = ie,
                        a = Reflect.apply(l.Iu, null, [n, ...e])
                    } finally {
                        n.processor = null
                    }
                    return a
                }
                ), (()=>(0,
                l.cr)(...e)), "translate", (t=>t[v](...e)), (e=>[R(e)]), (e=>(0,
                n.kJ)(e)))
            }
            function _e(...e) {
                return ae((t=>Reflect.apply(l.Rx, null, [t, ...e])), (()=>(0,
                l.sb)(...e)), "number format", (t=>t[b](...e)), F, (e=>(0,
                n.HD)(e) || (0,
                n.kJ)(e)))
            }
            function me(...e) {
                return ae((t=>Reflect.apply(l.t2, null, [t, ...e])), (()=>(0,
                l.Ls)(...e)), "datetime format", (t=>t[E](...e)), F, (e=>(0,
                n.HD)(e) || (0,
                n.kJ)(e)))
            }
            function fe(e) {
                x = e,
                G.pluralRules = x
            }
            function ge(e, t) {
                return ae((()=>{
                    if (!e)
                        return !1;
                    const a = (0,
                    n.HD)(t) ? t : f.value
                      , r = Ee(a)
                      , o = G.messageResolver(r, e);
                    return _ ? null != o : (0,
                    l.MB)(o) || (0,
                    l.yS)(o) || (0,
                    n.HD)(o)
                }
                ), (()=>[e]), "translate exists", (a=>Reflect.apply(a.te, a, [e, t])), D, (e=>(0,
                n.jn)(e)))
            }
            function pe(e) {
                let t = null;
                const a = (0,
                l.gA)(G, T.value, f.value);
                for (let n = 0; n < a.length; n++) {
                    const l = N.value[a[n]] || {}
                      , r = G.messageResolver(l, e);
                    if (null != r) {
                        t = r;
                        break
                    }
                }
                return t
            }
            function ve(e) {
                const t = pe(e);
                return null != t ? t : a && a.tm(e) || {}
            }
            function Ee(e) {
                return N.value[e] || {}
            }
            function be(e, t) {
                if (i) {
                    const a = {
                        [e]: t
                    };
                    for (const e in a)
                        (0,
                        n.RI)(a, e) && I(a[e]);
                    t = a[e]
                }
                N.value[e] = t,
                G.messages = N.value
            }
            function Oe(e, t) {
                N.value[e] = N.value[e] || {};
                const a = {
                    [e]: t
                };
                if (i)
                    for (const l in a)
                        (0,
                        n.RI)(a, l) && I(a[l]);
                t = a[e],
                (0,
                n.p$)(t, N.value[e]),
                G.messages = N.value
            }
            function Le(e) {
                return P.value[e] || {}
            }
            function Te(e, t) {
                P.value[e] = t,
                G.datetimeFormats = P.value,
                (0,
                l.R7)(G, e, t)
            }
            function Ie(e, t) {
                P.value[e] = (0,
                n.f0)(P.value[e] || {}, t),
                G.datetimeFormats = P.value,
                (0,
                l.R7)(G, e, t)
            }
            function de(e) {
                return k.value[e] || {}
            }
            function Ne(e, t) {
                k.value[e] = t,
                G.numberFormats = k.value,
                (0,
                l.bB)(G, e, t)
            }
            function Pe(e, t) {
                k.value[e] = (0,
                n.f0)(k.value[e] || {}, t),
                G.numberFormats = k.value,
                (0,
                l.bB)(G, e, t)
            }
            h++,
            a && n._f && ((0,
            o.watch)(a.locale, (e=>{
                m && (f.value = e,
                G.locale = e,
                (0,
                l.zn)(G, f.value, T.value))
            }
            )),
            (0,
            o.watch)(a.fallbackLocale, (e=>{
                m && (T.value = e,
                G.fallbackLocale = e,
                (0,
                l.zn)(G, f.value, T.value))
            }
            )));
            const Re = {
                id: h,
                locale: J,
                fallbackLocale: K,
                get inheritLocale() {
                    return m
                },
                set inheritLocale(e) {
                    m = e,
                    e && a && (f.value = a.locale.value,
                    T.value = a.fallbackLocale.value,
                    (0,
                    l.zn)(G, f.value, T.value))
                },
                get availableLocales() {
                    return Object.keys(N.value).sort()
                },
                messages: X,
                get modifiers() {
                    return $
                },
                get pluralRules() {
                    return x || {}
                },
                get isGlobal() {
                    return u
                },
                get missingWarn() {
                    return C
                },
                set missingWarn(e) {
                    C = e,
                    G.missingWarn = C
                },
                get fallbackWarn() {
                    return y
                },
                set fallbackWarn(e) {
                    y = e,
                    G.fallbackWarn = y
                },
                get fallbackRoot() {
                    return H
                },
                set fallbackRoot(e) {
                    H = e
                },
                get fallbackFormat() {
                    return U
                },
                set fallbackFormat(e) {
                    U = e,
                    G.fallbackFormat = U
                },
                get warnHtmlMessage() {
                    return V
                },
                set warnHtmlMessage(e) {
                    V = e,
                    G.warnHtmlMessage = e
                },
                get escapeParameter() {
                    return w
                },
                set escapeParameter(e) {
                    w = e,
                    G.escapeParameter = e
                },
                t: ne,
                getLocaleMessage: Ee,
                setLocaleMessage: be,
                mergeLocaleMessage: Oe,
                getPostTranslationHandler: Z,
                setPostTranslationHandler: q,
                getMissingHandler: ee,
                setMissingHandler: te,
                [O]: fe
            };
            return Re.datetimeFormats = z,
            Re.numberFormats = Q,
            Re.rt = le,
            Re.te = ge,
            Re.tm = ve,
            Re.d = re,
            Re.n = oe,
            Re.getDateTimeFormat = Le,
            Re.setDateTimeFormat = Te,
            Re.mergeDateTimeFormat = Ie,
            Re.getNumberFormat = de,
            Re.setNumberFormat = Ne,
            Re.mergeNumberFormat = Pe,
            Re[L] = r,
            Re[v] = ce,
            Re[E] = me,
            Re[b] = _e,
            Re
        }
        function y(e) {
            const t = (0,
            n.HD)(e.locale) ? e.locale : l.ZW
              , a = (0,
            n.HD)(e.fallbackLocale) || (0,
            n.kJ)(e.fallbackLocale) || (0,
            n.PO)(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : t
              , r = (0,
            n.mf)(e.missing) ? e.missing : void 0
              , o = !(0,
            n.jn)(e.silentTranslationWarn) && !(0,
            n.Kj)(e.silentTranslationWarn) || !e.silentTranslationWarn
              , s = !(0,
            n.jn)(e.silentFallbackWarn) && !(0,
            n.Kj)(e.silentFallbackWarn) || !e.silentFallbackWarn
              , u = !(0,
            n.jn)(e.fallbackRoot) || e.fallbackRoot
              , i = !!e.formatFallbackMessages
              , c = (0,
            n.PO)(e.modifiers) ? e.modifiers : {}
              , _ = e.pluralizationRules
              , m = (0,
            n.mf)(e.postTranslation) ? e.postTranslation : void 0
              , f = !(0,
            n.HD)(e.warnHtmlInMessage) || "off" !== e.warnHtmlInMessage
              , g = !!e.escapeParameterHtml
              , p = !(0,
            n.jn)(e.sync) || e.sync;
            let v = e.messages;
            if ((0,
            n.PO)(e.sharedMessages)) {
                const t = e.sharedMessages
                  , a = Object.keys(t);
                v = a.reduce(((e,a)=>{
                    const l = e[a] || (e[a] = {});
                    return (0,
                    n.f0)(l, t[a]),
                    e
                }
                ), v || {})
            }
            const {__i18n: E, __root: b, __injectWithOption: O} = e
              , L = e.datetimeFormats
              , T = e.numberFormats
              , I = e.flatJson
              , d = e.translateExistCompatible;
            return {
                locale: t,
                fallbackLocale: a,
                messages: v,
                flatJson: I,
                datetimeFormats: L,
                numberFormats: T,
                missing: r,
                missingWarn: o,
                fallbackWarn: s,
                fallbackRoot: u,
                fallbackFormat: i,
                modifiers: c,
                pluralRules: _,
                postTranslation: m,
                warnHtmlMessage: f,
                escapeParameter: g,
                messageResolver: e.messageResolver,
                inheritLocale: p,
                translateExistCompatible: d,
                __i18n: E,
                __root: b,
                __injectWithOption: O
            }
        }
        function H(e={}, t) {
            {
                const t = C(y(e))
                  , {__extender: a} = e
                  , l = {
                    id: t.id,
                    get locale() {
                        return t.locale.value
                    },
                    set locale(e) {
                        t.locale.value = e
                    },
                    get fallbackLocale() {
                        return t.fallbackLocale.value
                    },
                    set fallbackLocale(e) {
                        t.fallbackLocale.value = e
                    },
                    get messages() {
                        return t.messages.value
                    },
                    get datetimeFormats() {
                        return t.datetimeFormats.value
                    },
                    get numberFormats() {
                        return t.numberFormats.value
                    },
                    get availableLocales() {
                        return t.availableLocales
                    },
                    get formatter() {
                        return {
                            interpolate() {
                                return []
                            }
                        }
                    },
                    set formatter(e) {},
                    get missing() {
                        return t.getMissingHandler()
                    },
                    set missing(e) {
                        t.setMissingHandler(e)
                    },
                    get silentTranslationWarn() {
                        return (0,
                        n.jn)(t.missingWarn) ? !t.missingWarn : t.missingWarn
                    },
                    set silentTranslationWarn(e) {
                        t.missingWarn = (0,
                        n.jn)(e) ? !e : e
                    },
                    get silentFallbackWarn() {
                        return (0,
                        n.jn)(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn
                    },
                    set silentFallbackWarn(e) {
                        t.fallbackWarn = (0,
                        n.jn)(e) ? !e : e
                    },
                    get modifiers() {
                        return t.modifiers
                    },
                    get formatFallbackMessages() {
                        return t.fallbackFormat
                    },
                    set formatFallbackMessages(e) {
                        t.fallbackFormat = e
                    },
                    get postTranslation() {
                        return t.getPostTranslationHandler()
                    },
                    set postTranslation(e) {
                        t.setPostTranslationHandler(e)
                    },
                    get sync() {
                        return t.inheritLocale
                    },
                    set sync(e) {
                        t.inheritLocale = e
                    },
                    get warnHtmlInMessage() {
                        return t.warnHtmlMessage ? "warn" : "off"
                    },
                    set warnHtmlInMessage(e) {
                        t.warnHtmlMessage = "off" !== e
                    },
                    get escapeParameterHtml() {
                        return t.escapeParameter
                    },
                    set escapeParameterHtml(e) {
                        t.escapeParameter = e
                    },
                    get preserveDirectiveContent() {
                        return !0
                    },
                    set preserveDirectiveContent(e) {},
                    get pluralizationRules() {
                        return t.pluralRules || {}
                    },
                    __composer: t,
                    t(...e) {
                        const [a,l,r] = e
                          , o = {};
                        let s = null
                          , u = null;
                        if (!(0,
                        n.HD)(a))
                            throw p(g.INVALID_ARGUMENT);
                        const i = a;
                        return (0,
                        n.HD)(l) ? o.locale = l : (0,
                        n.kJ)(l) ? s = l : (0,
                        n.PO)(l) && (u = l),
                        (0,
                        n.kJ)(r) ? s = r : (0,
                        n.PO)(r) && (u = r),
                        Reflect.apply(t.t, t, [i, s || u || {}, o])
                    },
                    rt(...e) {
                        return Reflect.apply(t.rt, t, [...e])
                    },
                    tc(...e) {
                        const [a,l,r] = e
                          , o = {
                            plural: 1
                        };
                        let s = null
                          , u = null;
                        if (!(0,
                        n.HD)(a))
                            throw p(g.INVALID_ARGUMENT);
                        const i = a;
                        return (0,
                        n.HD)(l) ? o.locale = l : (0,
                        n.hj)(l) ? o.plural = l : (0,
                        n.kJ)(l) ? s = l : (0,
                        n.PO)(l) && (u = l),
                        (0,
                        n.HD)(r) ? o.locale = r : (0,
                        n.kJ)(r) ? s = r : (0,
                        n.PO)(r) && (u = r),
                        Reflect.apply(t.t, t, [i, s || u || {}, o])
                    },
                    te(e, a) {
                        return t.te(e, a)
                    },
                    tm(e) {
                        return t.tm(e)
                    },
                    getLocaleMessage(e) {
                        return t.getLocaleMessage(e)
                    },
                    setLocaleMessage(e, a) {
                        t.setLocaleMessage(e, a)
                    },
                    mergeLocaleMessage(e, a) {
                        t.mergeLocaleMessage(e, a)
                    },
                    d(...e) {
                        return Reflect.apply(t.d, t, [...e])
                    },
                    getDateTimeFormat(e) {
                        return t.getDateTimeFormat(e)
                    },
                    setDateTimeFormat(e, a) {
                        t.setDateTimeFormat(e, a)
                    },
                    mergeDateTimeFormat(e, a) {
                        t.mergeDateTimeFormat(e, a)
                    },
                    n(...e) {
                        return Reflect.apply(t.n, t, [...e])
                    },
                    getNumberFormat(e) {
                        return t.getNumberFormat(e)
                    },
                    setNumberFormat(e, a) {
                        t.setNumberFormat(e, a)
                    },
                    mergeNumberFormat(e, a) {
                        t.mergeNumberFormat(e, a)
                    },
                    getChoiceIndex(e, t) {
                        return -1
                    }
                };
                return l.__extender = a,
                l
            }
        }
        const U = {
            tag: {
                type: [String, Object]
            },
            locale: {
                type: String
            },
            scope: {
                type: String,
                validator: e=>"parent" === e || "global" === e,
                default: "parent"
            },
            i18n: {
                type: Object
            }
        };
        function S({slots: e}, t) {
            if (1 === t.length && "default" === t[0]) {
                const t = e.default ? e.default() : [];
                return t.reduce(((e,t)=>[...e, ...t.type === o.Fragment ? t.children : [t]]), [])
            }
            return t.reduce(((t,a)=>{
                const n = e[a];
                return n && (t[a] = n()),
                t
            }
            ), {})
        }
        function W(e) {
            return o.Fragment
        }
        const j = (0,
        o.defineComponent)({
            name: "i18n-t",
            props: (0,
            n.f0)({
                keypath: {
                    type: String,
                    required: !0
                },
                plural: {
                    type: [Number, String],
                    validator: e=>(0,
                    n.hj)(e) || !isNaN(e)
                }
            }, U),
            setup(e, t) {
                const {slots: a, attrs: l} = t
                  , r = e.i18n || ae({
                    useScope: e.scope,
                    __useComponent: !0
                });
                return ()=>{
                    const s = Object.keys(a).filter((e=>"_" !== e))
                      , u = {};
                    e.locale && (u.locale = e.locale),
                    void 0 !== e.plural && (u.plural = (0,
                    n.HD)(e.plural) ? +e.plural : e.plural);
                    const i = S(t, s)
                      , c = r[v](e.keypath, i, u)
                      , _ = (0,
                    n.f0)({}, l)
                      , m = (0,
                    n.HD)(e.tag) || (0,
                    n.Kn)(e.tag) ? e.tag : W();
                    return (0,
                    o.h)(m, _, c)
                }
            }
        })
          , V = j;
        function w(e) {
            return (0,
            n.kJ)(e) && !(0,
            n.HD)(e[0])
        }
        function $(e, t, a, l) {
            const {slots: r, attrs: s} = t;
            return ()=>{
                const t = {
                    part: !0
                };
                let u = {};
                e.locale && (t.locale = e.locale),
                (0,
                n.HD)(e.format) ? t.key = e.format : (0,
                n.Kn)(e.format) && ((0,
                n.HD)(e.format.key) && (t.key = e.format.key),
                u = Object.keys(e.format).reduce(((t,l)=>a.includes(l) ? (0,
                n.f0)({}, t, {
                    [l]: e.format[l]
                }) : t), {}));
                const i = l(e.value, t, u);
                let c = [t.key];
                (0,
                n.kJ)(i) ? c = i.map(((e,t)=>{
                    const a = r[e.type]
                      , n = a ? a({
                        [e.type]: e.value,
                        index: t,
                        parts: i
                    }) : [e.value];
                    return w(n) && (n[0].key = `${e.type}-${t}`),
                    n
                }
                )) : (0,
                n.HD)(i) && (c = [i]);
                const _ = (0,
                n.f0)({}, s)
                  , m = (0,
                n.HD)(e.tag) || (0,
                n.Kn)(e.tag) ? e.tag : W();
                return (0,
                o.h)(m, _, c)
            }
        }
        const G = (0,
        o.defineComponent)({
            name: "i18n-n",
            props: (0,
            n.f0)({
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, U),
            setup(e, t) {
                const a = e.i18n || ae({
                    useScope: e.scope,
                    __useComponent: !0
                });
                return $(e, t, l.FZ, ((...e)=>a[b](...e)))
            }
        })
          , x = G
          , Y = (0,
        o.defineComponent)({
            name: "i18n-d",
            props: (0,
            n.f0)({
                value: {
                    type: [Number, Date],
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, U),
            setup(e, t) {
                const a = e.i18n || ae({
                    useScope: e.scope,
                    __useComponent: !0
                });
                return $(e, t, l.n0, ((...e)=>a[E](...e)))
            }
        })
          , B = Y;
        function J(e, t) {
            const a = e;
            if ("composition" === e.mode)
                return a.__getInstance(t) || e.global;
            {
                const n = a.__getInstance(t);
                return null != n ? n.__composer : e.global.__composer
            }
        }
        function K(e) {
            const t = t=>{
                const {instance: a, modifiers: n, value: l} = t;
                if (!a || !a.$)
                    throw p(g.UNEXPECTED_ERROR);
                const r = J(e, a.$);
                const o = X(l);
                return [Reflect.apply(r.t, r, [...z(o)]), r]
            }
              , a = (a,l)=>{
                const [r,s] = t(l);
                n._f && e.global === s && (a.__i18nWatcher = (0,
                o.watch)(s.locale, (()=>{
                    l.instance && l.instance.$forceUpdate()
                }
                ))),
                a.__composer = s,
                a.textContent = r
            }
              , l = e=>{
                n._f && e.__i18nWatcher && (e.__i18nWatcher(),
                e.__i18nWatcher = void 0,
                delete e.__i18nWatcher),
                e.__composer && (e.__composer = void 0,
                delete e.__composer)
            }
              , r = (e,{value: t})=>{
                if (e.__composer) {
                    const a = e.__composer
                      , n = X(t);
                    e.textContent = Reflect.apply(a.t, a, [...z(n)])
                }
            }
              , s = e=>{
                const [a] = t(e);
                return {
                    textContent: a
                }
            }
            ;
            return {
                created: a,
                unmounted: l,
                beforeUpdate: r,
                getSSRProps: s
            }
        }
        function X(e) {
            if ((0,
            n.HD)(e))
                return {
                    path: e
                };
            if ((0,
            n.PO)(e)) {
                if (!("path"in e))
                    throw p(g.REQUIRED_VALUE, "path");
                return e
            }
            throw p(g.INVALID_VALUE)
        }
        function z(e) {
            const {path: t, locale: a, args: l, choice: r, plural: o} = e
              , s = {}
              , u = l || {};
            return (0,
            n.HD)(a) && (s.locale = a),
            (0,
            n.hj)(r) && (s.plural = r),
            (0,
            n.hj)(o) && (s.plural = o),
            [t, u, s]
        }
        function Q(e, t, ...a) {
            const l = (0,
            n.PO)(a[0]) ? a[0] : {}
              , r = !!l.useI18nComponentName
              , o = !(0,
            n.jn)(l.globalInstall) || l.globalInstall;
            o && ([r ? "i18n" : V.name, "I18nT"].forEach((t=>e.component(t, V))),
            [x.name, "I18nN"].forEach((t=>e.component(t, x))),
            [B.name, "I18nD"].forEach((t=>e.component(t, B)))),
            e.directive("t", K(t))
        }
        function Z(e, t, a) {
            return {
                beforeCreate() {
                    const n = (0,
                    o.getCurrentInstance)();
                    if (!n)
                        throw p(g.UNEXPECTED_ERROR);
                    const l = this.$options;
                    if (l.i18n) {
                        const n = l.i18n;
                        if (l.__i18n && (n.__i18n = l.__i18n),
                        n.__root = t,
                        this === this.$root)
                            this.$i18n = q(e, n);
                        else {
                            n.__injectWithOption = !0,
                            n.__extender = a.__vueI18nExtend,
                            this.$i18n = H(n);
                            const e = this.$i18n;
                            e.__extender && (e.__disposer = e.__extender(this.$i18n))
                        }
                    } else if (l.__i18n)
                        if (this === this.$root)
                            this.$i18n = q(e, l);
                        else {
                            this.$i18n = H({
                                __i18n: l.__i18n,
                                __injectWithOption: !0,
                                __extender: a.__vueI18nExtend,
                                __root: t
                            });
                            const e = this.$i18n;
                            e.__extender && (e.__disposer = e.__extender(this.$i18n))
                        }
                    else
                        this.$i18n = e;
                    l.__i18nGlobal && P(t, l, l),
                    this.$t = (...e)=>this.$i18n.t(...e),
                    this.$rt = (...e)=>this.$i18n.rt(...e),
                    this.$tc = (...e)=>this.$i18n.tc(...e),
                    this.$te = (e,t)=>this.$i18n.te(e, t),
                    this.$d = (...e)=>this.$i18n.d(...e),
                    this.$n = (...e)=>this.$i18n.n(...e),
                    this.$tm = e=>this.$i18n.tm(e),
                    a.__setInstance(n, this.$i18n)
                },
                mounted() {
                    0
                },
                unmounted() {
                    const e = (0,
                    o.getCurrentInstance)();
                    if (!e)
                        throw p(g.UNEXPECTED_ERROR);
                    const t = this.$i18n;
                    delete this.$t,
                    delete this.$rt,
                    delete this.$tc,
                    delete this.$te,
                    delete this.$d,
                    delete this.$n,
                    delete this.$tm,
                    t.__disposer && (t.__disposer(),
                    delete t.__disposer,
                    delete t.__extender),
                    a.__deleteInstance(e),
                    delete this.$i18n
                }
            }
        }
        function q(e, t) {
            e.locale = t.locale || e.locale,
            e.fallbackLocale = t.fallbackLocale || e.fallbackLocale,
            e.missing = t.missing || e.missing,
            e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn,
            e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn,
            e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages,
            e.postTranslation = t.postTranslation || e.postTranslation,
            e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage,
            e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml,
            e.sync = t.sync || e.sync,
            e.__composer[O](t.pluralizationRules || e.pluralizationRules);
            const a = d(e.locale, {
                messages: t.messages,
                __i18n: t.__i18n
            });
            return Object.keys(a).forEach((t=>e.mergeLocaleMessage(t, a[t]))),
            t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((a=>e.mergeDateTimeFormat(a, t.datetimeFormats[a]))),
            t.numberFormats && Object.keys(t.numberFormats).forEach((a=>e.mergeNumberFormat(a, t.numberFormats[a]))),
            e
        }
        const ee = (0,
        n.je)("global-vue-i18n");
        function te(e={}, t) {
            const a = __VUE_I18N_LEGACY_API__ && (0,
            n.jn)(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__
              , l = !(0,
            n.jn)(e.globalInjection) || e.globalInjection
              , r = !__VUE_I18N_LEGACY_API__ || !a || !!e.allowComposition
              , o = new Map
              , [s,u] = ne(e, a)
              , i = (0,
            n.je)("");
            function c(e) {
                return o.get(e) || null
            }
            function _(e, t) {
                o.set(e, t)
            }
            function m(e) {
                o.delete(e)
            }
            {
                const e = {
                    get mode() {
                        return __VUE_I18N_LEGACY_API__ && a ? "legacy" : "composition"
                    },
                    get allowComposition() {
                        return r
                    },
                    async install(t, ...r) {
                        if (t.__VUE_I18N_SYMBOL__ = i,
                        t.provide(t.__VUE_I18N_SYMBOL__, e),
                        (0,
                        n.PO)(r[0])) {
                            const t = r[0];
                            e.__composerExtend = t.__composerExtend,
                            e.__vueI18nExtend = t.__vueI18nExtend
                        }
                        let o = null;
                        !a && l && (o = fe(t, e.global)),
                        __VUE_I18N_FULL_INSTALL__ && Q(t, e, ...r),
                        __VUE_I18N_LEGACY_API__ && a && t.mixin(Z(u, u.__composer, e));
                        const s = t.unmount;
                        t.unmount = ()=>{
                            o && o(),
                            e.dispose(),
                            s()
                        }
                    },
                    get global() {
                        return u
                    },
                    dispose() {
                        s.stop()
                    },
                    __instances: o,
                    __getInstance: c,
                    __setInstance: _,
                    __deleteInstance: m
                };
                return e
            }
        }
        function ae(e={}) {
            const t = (0,
            o.getCurrentInstance)();
            if (null == t)
                throw p(g.MUST_BE_CALL_SETUP_TOP);
            if (!t.isCE && null != t.appContext.app && !t.appContext.app.__VUE_I18N_SYMBOL__)
                throw p(g.NOT_INSTALLED);
            const a = le(t)
              , l = oe(a)
              , r = N(t)
              , s = re(e, r);
            if (__VUE_I18N_LEGACY_API__ && "legacy" === a.mode && !e.__useComponent) {
                if (!a.allowComposition)
                    throw p(g.NOT_AVAILABLE_IN_LEGACY_MODE);
                return ce(t, s, l, e)
            }
            if ("global" === s)
                return P(l, e, r),
                l;
            if ("parent" === s) {
                let n = se(a, t, e.__useComponent);
                return null == n && (n = l),
                n
            }
            const u = a;
            let i = u.__getInstance(t);
            if (null == i) {
                const a = (0,
                n.f0)({}, e);
                "__i18n"in r && (a.__i18n = r.__i18n),
                l && (a.__root = l),
                i = C(a),
                u.__composerExtend && (i[T] = u.__composerExtend(i)),
                ie(u, t, i),
                u.__setInstance(t, i)
            }
            return i
        }
        function ne(e, t, a) {
            const n = (0,
            o.effectScope)();
            {
                const a = __VUE_I18N_LEGACY_API__ && t ? n.run((()=>H(e))) : n.run((()=>C(e)));
                if (null == a)
                    throw p(g.UNEXPECTED_ERROR);
                return [n, a]
            }
        }
        function le(e) {
            {
                const t = (0,
                o.inject)(e.isCE ? ee : e.appContext.app.__VUE_I18N_SYMBOL__);
                if (!t)
                    throw p(e.isCE ? g.NOT_INSTALLED_WITH_PROVIDE : g.UNEXPECTED_ERROR);
                return t
            }
        }
        function re(e, t) {
            return (0,
            n.Qr)(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local"
        }
        function oe(e) {
            return "composition" === e.mode ? e.global : e.global.__composer
        }
        function se(e, t, a=!1) {
            let n = null;
            const l = t.root;
            let r = ue(t, a);
            while (null != r) {
                const t = e;
                if ("composition" === e.mode)
                    n = t.__getInstance(r);
                else if (__VUE_I18N_LEGACY_API__) {
                    const e = t.__getInstance(r);
                    null != e && (n = e.__composer,
                    a && n && !n[L] && (n = null))
                }
                if (null != n)
                    break;
                if (l === r)
                    break;
                r = r.parent
            }
            return n
        }
        function ue(e, t=!1) {
            return null == e ? null : t && e.vnode.ctx || e.parent
        }
        function ie(e, t, a) {
            (0,
            o.onMounted)((()=>{
                0
            }
            ), t),
            (0,
            o.onUnmounted)((()=>{
                const n = a;
                e.__deleteInstance(t);
                const l = n[T];
                l && (l(),
                delete n[T])
            }
            ), t)
        }
        function ce(e, t, a, r={}) {
            const s = "local" === t
              , u = (0,
            o.shallowRef)(null);
            if (s && e.proxy && !e.proxy.$options.i18n && !e.proxy.$options.__i18n)
                throw p(g.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
            const i = (0,
            n.jn)(r.inheritLocale) ? r.inheritLocale : !(0,
            n.HD)(r.locale)
              , c = (0,
            o.ref)(!s || i ? a.locale.value : (0,
            n.HD)(r.locale) ? r.locale : l.ZW)
              , _ = (0,
            o.ref)(!s || i ? a.fallbackLocale.value : (0,
            n.HD)(r.fallbackLocale) || (0,
            n.kJ)(r.fallbackLocale) || (0,
            n.PO)(r.fallbackLocale) || !1 === r.fallbackLocale ? r.fallbackLocale : c.value)
              , m = (0,
            o.ref)(d(c.value, r))
              , f = (0,
            o.ref)((0,
            n.PO)(r.datetimeFormats) ? r.datetimeFormats : {
                [c.value]: {}
            })
              , v = (0,
            o.ref)((0,
            n.PO)(r.numberFormats) ? r.numberFormats : {
                [c.value]: {}
            })
              , E = s ? a.missingWarn : !(0,
            n.jn)(r.missingWarn) && !(0,
            n.Kj)(r.missingWarn) || r.missingWarn
              , b = s ? a.fallbackWarn : !(0,
            n.jn)(r.fallbackWarn) && !(0,
            n.Kj)(r.fallbackWarn) || r.fallbackWarn
              , O = s ? a.fallbackRoot : !(0,
            n.jn)(r.fallbackRoot) || r.fallbackRoot
              , L = !!r.fallbackFormat
              , T = (0,
            n.mf)(r.missing) ? r.missing : null
              , I = (0,
            n.mf)(r.postTranslation) ? r.postTranslation : null
              , N = s ? a.warnHtmlMessage : !(0,
            n.jn)(r.warnHtmlMessage) || r.warnHtmlMessage
              , P = !!r.escapeParameter
              , R = s ? a.modifiers : (0,
            n.PO)(r.modifiers) ? r.modifiers : {}
              , k = r.pluralRules || s && a.pluralRules;
            function F() {
                return [c.value, _.value, m.value, f.value, v.value]
            }
            const D = (0,
            o.computed)({
                get: ()=>u.value ? u.value.locale.value : c.value,
                set: e=>{
                    u.value && (u.value.locale.value = e),
                    c.value = e
                }
            })
              , h = (0,
            o.computed)({
                get: ()=>u.value ? u.value.fallbackLocale.value : _.value,
                set: e=>{
                    u.value && (u.value.fallbackLocale.value = e),
                    _.value = e
                }
            })
              , A = (0,
            o.computed)((()=>u.value ? u.value.messages.value : m.value))
              , M = (0,
            o.computed)((()=>f.value))
              , C = (0,
            o.computed)((()=>v.value));
            function y() {
                return u.value ? u.value.getPostTranslationHandler() : I
            }
            function H(e) {
                u.value && u.value.setPostTranslationHandler(e)
            }
            function U() {
                return u.value ? u.value.getMissingHandler() : T
            }
            function S(e) {
                u.value && u.value.setMissingHandler(e)
            }
            function W(e) {
                return F(),
                e()
            }
            function j(...e) {
                return u.value ? W((()=>Reflect.apply(u.value.t, null, [...e]))) : W((()=>""))
            }
            function V(...e) {
                return u.value ? Reflect.apply(u.value.rt, null, [...e]) : ""
            }
            function w(...e) {
                return u.value ? W((()=>Reflect.apply(u.value.d, null, [...e]))) : W((()=>""))
            }
            function $(...e) {
                return u.value ? W((()=>Reflect.apply(u.value.n, null, [...e]))) : W((()=>""))
            }
            function G(e) {
                return u.value ? u.value.tm(e) : {}
            }
            function x(e, t) {
                return !!u.value && u.value.te(e, t)
            }
            function Y(e) {
                return u.value ? u.value.getLocaleMessage(e) : {}
            }
            function B(e, t) {
                u.value && (u.value.setLocaleMessage(e, t),
                m.value[e] = t)
            }
            function J(e, t) {
                u.value && u.value.mergeLocaleMessage(e, t)
            }
            function K(e) {
                return u.value ? u.value.getDateTimeFormat(e) : {}
            }
            function X(e, t) {
                u.value && (u.value.setDateTimeFormat(e, t),
                f.value[e] = t)
            }
            function z(e, t) {
                u.value && u.value.mergeDateTimeFormat(e, t)
            }
            function Q(e) {
                return u.value ? u.value.getNumberFormat(e) : {}
            }
            function Z(e, t) {
                u.value && (u.value.setNumberFormat(e, t),
                v.value[e] = t)
            }
            function q(e, t) {
                u.value && u.value.mergeNumberFormat(e, t)
            }
            const ee = {
                get id() {
                    return u.value ? u.value.id : -1
                },
                locale: D,
                fallbackLocale: h,
                messages: A,
                datetimeFormats: M,
                numberFormats: C,
                get inheritLocale() {
                    return u.value ? u.value.inheritLocale : i
                },
                set inheritLocale(e) {
                    u.value && (u.value.inheritLocale = e)
                },
                get availableLocales() {
                    return u.value ? u.value.availableLocales : Object.keys(m.value)
                },
                get modifiers() {
                    return u.value ? u.value.modifiers : R
                },
                get pluralRules() {
                    return u.value ? u.value.pluralRules : k
                },
                get isGlobal() {
                    return !!u.value && u.value.isGlobal
                },
                get missingWarn() {
                    return u.value ? u.value.missingWarn : E
                },
                set missingWarn(e) {
                    u.value && (u.value.missingWarn = e)
                },
                get fallbackWarn() {
                    return u.value ? u.value.fallbackWarn : b
                },
                set fallbackWarn(e) {
                    u.value && (u.value.missingWarn = e)
                },
                get fallbackRoot() {
                    return u.value ? u.value.fallbackRoot : O
                },
                set fallbackRoot(e) {
                    u.value && (u.value.fallbackRoot = e)
                },
                get fallbackFormat() {
                    return u.value ? u.value.fallbackFormat : L
                },
                set fallbackFormat(e) {
                    u.value && (u.value.fallbackFormat = e)
                },
                get warnHtmlMessage() {
                    return u.value ? u.value.warnHtmlMessage : N
                },
                set warnHtmlMessage(e) {
                    u.value && (u.value.warnHtmlMessage = e)
                },
                get escapeParameter() {
                    return u.value ? u.value.escapeParameter : P
                },
                set escapeParameter(e) {
                    u.value && (u.value.escapeParameter = e)
                },
                t: j,
                getPostTranslationHandler: y,
                setPostTranslationHandler: H,
                getMissingHandler: U,
                setMissingHandler: S,
                rt: V,
                d: w,
                n: $,
                tm: G,
                te: x,
                getLocaleMessage: Y,
                setLocaleMessage: B,
                mergeLocaleMessage: J,
                getDateTimeFormat: K,
                setDateTimeFormat: X,
                mergeDateTimeFormat: z,
                getNumberFormat: Q,
                setNumberFormat: Z,
                mergeNumberFormat: q
            };
            function te(e) {
                e.locale.value = c.value,
                e.fallbackLocale.value = _.value,
                Object.keys(m.value).forEach((t=>{
                    e.mergeLocaleMessage(t, m.value[t])
                }
                )),
                Object.keys(f.value).forEach((t=>{
                    e.mergeDateTimeFormat(t, f.value[t])
                }
                )),
                Object.keys(v.value).forEach((t=>{
                    e.mergeNumberFormat(t, v.value[t])
                }
                )),
                e.escapeParameter = P,
                e.fallbackFormat = L,
                e.fallbackRoot = O,
                e.fallbackWarn = b,
                e.missingWarn = E,
                e.warnHtmlMessage = N
            }
            return (0,
            o.onBeforeMount)((()=>{
                if (null == e.proxy || null == e.proxy.$i18n)
                    throw p(g.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
                const a = u.value = e.proxy.$i18n.__composer;
                "global" === t ? (c.value = a.locale.value,
                _.value = a.fallbackLocale.value,
                m.value = a.messages.value,
                f.value = a.datetimeFormats.value,
                v.value = a.numberFormats.value) : s && te(a)
            }
            )),
            ee
        }
        const _e = ["locale", "fallbackLocale", "availableLocales"]
          , me = ["t", "rt", "d", "n", "tm", "te"];
        function fe(e, t) {
            const a = Object.create(null);
            _e.forEach((e=>{
                const n = Object.getOwnPropertyDescriptor(t, e);
                if (!n)
                    throw p(g.UNEXPECTED_ERROR);
                const l = (0,
                o.isRef)(n.value) ? {
                    get() {
                        return n.value.value
                    },
                    set(e) {
                        n.value.value = e
                    }
                } : {
                    get() {
                        return n.get && n.get()
                    }
                };
                Object.defineProperty(a, e, l)
            }
            )),
            e.config.globalProperties.$i18n = a,
            me.forEach((a=>{
                const n = Object.getOwnPropertyDescriptor(t, a);
                if (!n || !n.value)
                    throw p(g.UNEXPECTED_ERROR);
                Object.defineProperty(e.config.globalProperties, `$${a}`, n)
            }
            ));
            const n = ()=>{
                delete e.config.globalProperties.$i18n,
                me.forEach((t=>{
                    delete e.config.globalProperties[`$${t}`]
                }
                ))
            }
            ;
            return n
        }
        if (u(),
        __INTLIFY_JIT_COMPILATION__ ? (0,
        l.Pw)(l.MY) : (0,
        l.Pw)(l.M1),
        (0,
        l.zL)(l.GK),
        (0,
        l.tl)(l.gA),
        __INTLIFY_PROD_DEVTOOLS__) {
            const e = (0,
            n.E9)();
            e.__INTLIFY__ = !0,
            (0,
            l.Ve)(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
        }
    }
}]);
