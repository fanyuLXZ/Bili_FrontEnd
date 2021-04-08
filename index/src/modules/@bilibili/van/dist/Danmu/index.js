/* eslint-disable */
!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("babel-runtime/core-js/object/assign"), require("querystring"), require("axios"), require("babel-runtime/core-js/promise"), require("jsonp")); else if ("function" == typeof define && define.amd) define(["babel-runtime/core-js/object/assign", "querystring", "axios", "babel-runtime/core-js/promise", "jsonp"], t); else {
        var r = "object" == typeof exports ? t(require("babel-runtime/core-js/object/assign"), require("querystring"), require("axios"), require("babel-runtime/core-js/promise"), require("jsonp")) : t(e["babel-runtime/core-js/object/assign"], e.querystring, e.axios, e["babel-runtime/core-js/promise"], e.jsonp);
        for (var n in r) ("object" == typeof exports ? exports : e)[n] = r[n]
    }
}(this, function (e, t, r, n, o) {
    return function (e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {i: n, l: !1, exports: {}};
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }

        return r.m = e, r.c = t, r.i = function (e) {
            return e
        }, r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: n})
        }, r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "../", r(r.s = 105)
    }({
        105: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var n = function (e) {
                return e && e.__esModule ? e : {default: e}
            }(r(63));
            t.default = n.default
        }, 14: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            t.throttle = function (e, t, r) {
                var n = null, o = void 0;
                return function () {
                    var i = this, u = arguments, a = +new Date;
                    clearTimeout(n), o || (o = a), a - o >= r ? (e.apply(i, u), o = a) : n = setTimeout(function () {
                        e.apply(i, u)
                    }, t)
                }
            }, t.debounce = function (e, t) {
                var r = void 0;
                return t = t || 200, function () {
                    var n = this, o = arguments;
                    r && clearTimeout(r), r = setTimeout(function () {
                        r = null, e.apply(n, o)
                    }, t)
                }
            }, t.checkInView = function (e, t) {
                if (e) {
                    var r = e.getBoundingClientRect(), n = t || 0;
                    return r.top < window.innerHeight + n && r.bottom >= 0
                }
            }, t.trimHttp = function (e) {
                return e ? e.replace(/^http:/, "") : ""
            };
            var n = t.webp = function () {
                try {
                    return 0 == document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
                } catch (e) {
                    return !1
                }
            }();
            t.formatImg = function (e, t, r, o) {
                if (!e) return e;
                var i = e.match(/(.*\.(jpg|jpeg|gif|png|bmp))(\?.*)?/), u = -1 != e.indexOf("/bfs/");
                if (!i || "gif" === i[2] || "bmp" === i[2] || !u) return e;
                var a = (o || 85) + "q", s = t && r ? "@" + t + "w_" + r + "h_" + a : "@" + a, c = i[3] ? i[3] : "";
                return n ? i[1] + s + ".webp" + c : i[1] + s + "." + i[2] + c
            }, t.isBeta = function (e) {
                var t = !1, r = cookie.get("DedeUserID").slice(-1);
                return r && $.isArray(e) && (t = $.inArray(+r, e) > -1), t
            }
        }, 2: function (e, t) {
            e.exports = require("babel-runtime/core-js/object/assign")
        }, 4: function (e, t) {
            e.exports = require("querystring")
        }, 6: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var n = s(r(2)), o = s(r(8)), i = s(r(7)), u = s(r(9)), a = s(r(4));

            function s(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function c(e) {
                return e.url.indexOf("http") < 0 && (e.url = window.location.protocol + e.url), e.jsonp ? function (e) {
                    return new o.default(function (t, r) {
                        e.query = e.params || e.query, e.query = (0, n.default)({jsonp: "jsonp"}, e.query), e.url = e.query ? e.url + "?" + a.default.stringify(e.query) : e.url, (0, u.default)(e.url, e, function (n, o) {
                            if (n) return e.fallback ? c(e.fallback) : r(n);
                            var i = {code: o.code, data: o};
                            return t(i)
                        })
                    })
                }(e) : function (e) {
                    e.params = e.params || e.query, "post" == e.method.toLocaleLowerCase() && (e.headers && e.headers["Content-Type"] || (e.data = e.data ? a.default.stringify(e.data) : e.data));
                    return (0, i.default)(e).catch(function (t) {
                        if (e.fallback) return c(e.fallback);
                        throw t
                    })
                }(e)
            }

            t.default = c
        }, 63: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var n = function (e) {
                return e && e.__esModule ? e : {default: e}
            }(r(6)), o = r(14);
            t.default = {
                install: function (e, t) {
                    var r = t && t.api || "//api.bilibili.com/x/v2/dm/ajax";
                    e.directive("van-danmu", {
                        bind: function (e, t) {
                            var i = t.value;
                            if (i && "number" == typeof i) {
                                var u = !1, a = !1, s = null, c = 0, f = 0, l = 0, d = [];
                                e.addEventListener("mouseenter", function () {
                                    a = !0, (0, o.debounce)(function () {
                                        a && (u ? p() : (u = !0, function (t) {
                                            (0, n.default)({
                                                method: "get",
                                                url: r,
                                                params: {aid: t}
                                            }).then(function (t) {
                                                if (t && t.data && 0 === t.data.code) {
                                                    var r = t.data.data;
                                                    l = r.length, function (t) {
                                                        (s = document.createElement("div")).className = "van-danmu";
                                                        for (var r = 0; r < t.length; r++) {
                                                            var n = document.createElement("span");
                                                            n.className = "van-danmu-item" + (r % 2 ? " row2" : ""), n.innerHTML = t[r], s.appendChild(n), d.push(n)
                                                        }
                                                        e.appendChild(s), s.style.opacity = a ? 1 : 0
                                                    }(r), l > 0 && p()
                                                }
                                            })
                                        }(i)), s && (s.style.opacity = 1))
                                    }, 350)()
                                }), e.addEventListener("mouseleave", function () {
                                    a = !1, s && (s.style.opacity = 0)
                                })
                            }

                            function p() {
                                c = setTimeout(function () {
                                    if (clearTimeout(c), c = null, d[f]) {
                                        var e = Math.floor(2e3 * Math.random() + 3e3);
                                        d[f].style.transition = "transform " + e / 1e3 + "s linear", d[f].style.transform = "translateX(" + (-d[f].offsetWidth - d[f].parentElement.offsetWidth) + "px)";
                                        var t = f;
                                        d[t].timeout = setTimeout(function () {
                                            clearTimeout(d[t].timeout), d[t].style.transition = "", d[t].style.transform = "translateX(0)"
                                        }, e)
                                    }
                                    ++f > l - 1 && (f = 0), a && p()
                                }, 1500)
                            }
                        }
                    })
                }
            }
        }, 7: function (e, t) {
            e.exports = require("axios")
        }, 8: function (e, t) {
            e.exports = require("babel-runtime/core-js/promise")
        }, 9: function (e, t) {
            e.exports = require("jsonp")
        }
    })
});