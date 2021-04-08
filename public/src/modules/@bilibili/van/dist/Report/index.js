!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t(require("babel-runtime/core-js/object/keys"));
    else {
        var n = "object" == typeof exports ? t(require("babel-runtime/core-js/object/keys")) : t(e["babel-runtime/core-js/object/keys"]);
        for (var o in n) ("object" == typeof exports ? exports : e)[o] = n[o]
    }
}(this, function () {
    return function (e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var r = t[o] = {i: o, l: !1, exports: {}};
            return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }

        return n.m = e, n.c = t, n.i = function (e) {
            return e
        }, n.d = function (e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: o})
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "../", n(n.s = 117)
    }({
        117: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var o = function (e) {
                return e && e.__esModule ? e : {default: e}
            }(n(66));
            t.default = o.default
        }, 142: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            t.customReport = function (e, t) {
                if ("undefined" != typeof window) {
                    var n = window.reportConfig && window.reportConfig.msgObjects || null;
                    e && "string" == typeof e && n && window[n] && (window[n][e] = t || "")
                }
            }
        }, 3: function (e) {
            e.exports = require("babel-runtime/core-js/object/keys")
        }, 66: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var o = function (e) {
                return e && e.__esModule ? e : {default: e}
            }(n(3)), r = n(142);
            t.default = {
                install: function (e) {
                    e.directive("van-report", {
                        bind: function (e, t) {
                            e.event = (0, o.default)(t.modifiers)[0] || "click", e.field = t.arg, e.valueData = t.value || "", e.field && e.addEventListener(e.event, function () {
                                (0, r.customReport)(e.field, e.valueData)
                            })
                        }, update: function (e, t) {
                            e.event = (0, o.default)(t.modifiers)[0] || "click", e.field = t.arg, e.valueData = t.value || ""
                        }
                    })
                }
            }
        }
    })
});