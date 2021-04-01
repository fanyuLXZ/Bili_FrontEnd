/* eslint-disable */
!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var n = t();
        for (var i in n) ("object" == typeof exports ? exports : e)[i] = n[i]
    }
}(this, (function () {
    return function (e) {
        var t = {};

        function n(i) {
            console.log(i)
            if (t[i]) return t[i].exports;
            var o = t[i] = {i: i, l: !1, exports: {}};
            return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function (t) {
                return e[t]
            }.bind(null, o));
            return i
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };

            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 6)
    }([function (e, t) {
        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        e.exports = function (e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
    }, function (e, t, n) {
        "use strict";
        t.decode = t.parse = n(4), t.encode = t.stringify = n(5)
    }, function (e, t) {
        e.exports = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
    }, function (e, t) {
        function n(t) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function (e) {
                return typeof e
            } : e.exports = n = function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, n(t)
        }

        e.exports = n
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        e.exports = function (e, t, n, r) {
            t = t || "&", n = n || "=";
            var a = {};
            if ("string" != typeof e || 0 === e.length) return a;
            var c = /\+/g;
            e = e.split(t);
            var s = 1e3;
            r && "number" == typeof r.maxKeys && (s = r.maxKeys);
            var u = e.length;
            s > 0 && u > s && (u = s);
            for (var l = 0; l < u; ++l) {
                var f, d, p, h, y = e[l].replace(c, "%20"), v = y.indexOf(n);
                v >= 0 ? (f = y.substr(0, v), d = y.substr(v + 1)) : (f = y, d = ""), p = decodeURIComponent(f), h = decodeURIComponent(d), i(a, p) ? o(a[p]) ? a[p].push(h) : a[p] = [a[p], h] : a[p] = h
            }
            return a
        };
        var o = Array.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    }, function (e, t, n) {
        "use strict";
        var i = function (e) {
            switch (typeof e) {
                case"string":
                    return e;
                case"boolean":
                    return e ? "true" : "false";
                case"number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
            }
        };
        e.exports = function (e, t, n, c) {
            return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? r(a(e), (function (a) {
                var c = encodeURIComponent(i(a)) + n;
                return o(e[a]) ? r(e[a], (function (e) {
                    return c + encodeURIComponent(i(e))
                })).join(t) : c + encodeURIComponent(i(e[a]))
            })).join(t) : c ? encodeURIComponent(i(c)) + n + encodeURIComponent(i(e)) : ""
        };
        var o = Array.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        };

        function r(e, t) {
            if (e.map) return e.map(t);
            for (var n = [], i = 0; i < e.length; i++) n.push(t(e[i], i));
            return n
        }

        var a = Object.keys || function (e) {
            var t = [];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t
        }
    }, function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(2), o = n.n(i), r = n(0), a = n.n(r), c = n(3), s = n.n(c), u = n(1), l = n.n(u), f = function (e) {
            var t = e.method, n = e.url, i = e.data, o = e.headers,
                r = "POST" === (t = t.toLocaleUpperCase()) ? l.a.stringify(i) : "",
                a = "GET" === t ? l.a.stringify(i) : "",
                c = a ? -1 !== n.indexOf("?") ? "".concat(n, "&").concat(a) : "".concat(n, "?").concat(a) : n;
            return new Promise((function (e, n) {
                var i = new XMLHttpRequest;
                if (i.onreadystatechange = function () {
                    if (i.readyState === XMLHttpRequest.DONE) if (200 === i.status) {
                        var t = null;
                        try {
                            t = JSON.parse(i.responseText)
                        } catch (e) {
                            t = i.responseText
                        }
                        e(t)
                    } else n(i.status)
                }, i.withCredentials = !0, i.open(t, c, !0), "POST" === t && o && "object" === s()(o)) for (var a in o) i.setRequestHeader(a, o[a]);
                i.send(r)
            }))
        }, d = function (e) {
            var t = "" + document.cookie, n = t.indexOf(e + "=");
            if (-1 === n || "" === e) return "";
            var i = t.indexOf(";", n);
            return -1 === i && (i = t.length), unescape(t.substring(n + e.length + 1, i))
        }, p = function (e) {
            return e && "function" == typeof e
        }, h = function () {
            function e() {
                o()(this, e), this.callbacks = window.__BiliUserWatch__ || [], this.once = [], this.locked = !1, this.cache = null, this.isLogin = !1, this.MiniLogin = null, this._onStorage(), this.callbacks.length > 0 && this._getNav()
            }

            return a()(e, null, [{
                key: "init", value: function () {
                    return e.instace || (e.instace = new e), e.instace
                }
            }]), a()(e, [{
                key: "_notice", value: function (e) {
                    for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, i = this.callbacks.length; n < i; n++) {
                        var o = this.callbacks[n];
                        o.state = o.state || 0, (0 === o.state || t) && (o(e), o.state++)
                    }
                    for (var r = 0, a = this.once.length; r < a; r++) this.once[r](e);
                    this.once = []
                }
            }, {
                key: "_clean", value: function () {
                    this.locked = !1, this.isLogin = !1, this.cache = null
                }
            }, {
                key: "_setBiliLoginState", value: function () {
                    var e = Number(window.localStorage.getItem("bili-login-state") || 1);
                    window.localStorage.setItem("bili-login-state", ++e)
                }
            }, {
                key: "_onStorage", value: function () {
                    var e = this;
                    window.addEventListener("storage", (function (t) {
                        "bili-login-state" === t.key && e.refresh()
                    }))
                }
            }, {
                key: "_getNav", value: function () {
                    var e = this;
                    this.cache ? this._notice(this.cache) : this.locked || (this.locked = !0, {
                        "code": 0,
                        "message": "0",
                        "ttl": 1,
                        "data": {
                            "isLogin": true,
                            "email_verified": 1,
                            "face": "http://i2.hdslb.com/bfs/face/ca2beb0816787f7faea7740bc10a283fef354bb5.jpg",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 10800,
                                "current_exp": 21903,
                                "next_exp": 28800
                            },
                            "mid": 26119890,
                            "mobile_verified": 1,
                            "money": 880.2,
                            "moral": 70,
                            "official": {
                                "role": 0,
                                "title": "",
                                "desc": "",
                                "type": -1
                            },
                            "officialVerify": {
                                "type": -1,
                                "desc": ""
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": "",
                                "image_enhance_frame": ""
                            },
                            "scores": 0,
                            "uname": "冰丿繁羽",
                            "vipDueDate": 1618588800000,
                            "vipStatus": 1,
                            "vipType": 1,
                            "vip_pay_type": 1,
                            "vip_theme_type": 0,
                            "vip_label": {
                                "path": "",
                                "text": "大会员",
                                "label_theme": "vip",
                                "text_color": "#FFFFFF",
                                "bg_style": 1,
                                "bg_color": "#FB7299",
                                "border_color": ""
                            },
                            "vip_avatar_subscript": 1,
                            "vip_nickname_color": "",
                            "vip": {
                                "type": 1,
                                "status": 1,
                                "due_date": 1618588800000,
                                "vip_pay_type": 1,
                                "theme_type": 0,
                                "label": {
                                    "path": "",
                                    "text": "大会员",
                                    "label_theme": "vip",
                                    "text_color": "#FFFFFF",
                                    "bg_style": 1,
                                    "bg_color": "#FB7299",
                                    "border_color": ""
                                },
                                "avatar_subscript": 1,
                                "nickname_color": "",
                                "role": 1,
                                "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                            },
                            "wallet": {
                                "mid": 26119890,
                                "bcoin_balance": 0,
                                "coupon_balance": 0,
                                "coupon_due_time": 0
                            },
                            "has_shop": false,
                            "shop_url": "",
                            "allowance_count": 0,
                            "answer_status": 0
                        }
                    })
                    //     f({
                    //     method: "GET",
                    //     url: "//api.bilibili.com/x/web-interface/nav"
                    // }).then((function (t) {
                    //     e.cache = t, e.isLogin = t.data && t.data.isLogin, e._notice(t, !0)
                    // })))
                }
            }, {
                key: "_addOnce", value: function (e) {
                    this.once.push(e), this._getNav()
                }
            }, {
                key: "_addCallbacks", value: function (e) {
                    this.callbacks.push(e), this._getNav()
                }
            }, {
                key: "get", value: function (t) {
                    if (!p(t)) return new Promise((function (t) {
                        e.instace._addOnce((function (e) {
                            t(e)
                        }))
                    }));
                    this._addOnce(t)
                }
            }, {
                key: "watch", value: function (e) {
                    p(e) && this._addCallbacks(e)
                }
            }, {
                key: "unWatch", value: function (e) {
                    if (p(e)) {
                        var t = this.callbacks.indexOf(e);
                        -1 !== t && this.callbacks.splice(t, 1)
                    }
                }
            }, {
                key: "refresh", value: function () {
                    this._clean(), this._getNav()
                }
            }, {
                key: "quickLogin", value: function (e) {
                    var t, n = this;
                    this.MiniLogin ? this._Login(e) : (t = "//s1.hdslb.com/bfs/seed/jinkela/short/mini-login/miniLogin.umd.min.js", new Promise((function (e) {
                        var n = document.createElement("script");
                        n.type = "text/javascript", n.readyState ? n.onreadystatechange = function () {
                            "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, e())
                        } : n.onload = function () {
                            e()
                        }, n.src = t, document.body.appendChild(n)
                    }))).then((function () {
                        n.MiniLogin = new window.MiniLogin, n._Login(e)
                    }))
                }
            }, {
                key: "_Login", value: function (e) {
                    var t = this;
                    this.MiniLogin.showComponent(), this.MiniLogin.addEventListener("success", (function () {
                        t.refresh(), t._setBiliLoginState(), e && e({
                            code: 0,
                            message: "success"
                        }), t.MiniLogin.removeEventListener("success"), t.MiniLogin.removeEventListener("cancel")
                    })), this.MiniLogin.addEventListener("cancel", (function () {
                        e && e({
                            code: -1,
                            message: "cancel"
                        }), t.MiniLogin.removeEventListener("success"), t.MiniLogin.removeEventListener("cancel")
                    }))
                }
            }, {
                key: "logout", value: function (e, t) {
                    var n = this, i = "function" == typeof e && e, o = {biliCSRF: d("bili_jct")};
                    t && (o.gourl = t), f({
                        method: "POST",
                        url: "//passport.bilibili.com/login/exit/v2",
                        headers: {"Content-type": "application/x-www-form-urlencoded"},
                        data: o
                    }).then((function (e) {
                        e.status && (n.refresh(), n._setBiliLoginState(), i && i({
                            code: 0,
                            message: "log out success",
                            data: e.data
                        }), t && (window.location = e.data.redirectUrl))
                    })).catch((function (e) {
                        i && i({code: -1, message: "XMLHttpRequest status:" + e})
                    }))
                }
            }]), e
        }(), y = {};
        "undefined" != typeof window && (y = window.__BiliUser__ || function () {
            var e = null;
            if (/\.?bilibili\.com$/.test(document.domain)) {
                document.domain = "bilibili.com";
                try {
                    e = window.parent.__BiliUser__
                } catch (e) {
                }
            }
            return e
        }() || h.init(), window.__BiliUser__ = y);
        t.default = y
    }])
}));