/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
! function(e) {
    function t(e) {
        var t = e.length,
            r = $.type(e);
        return "function" === r || $.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    if (!e.jQuery) {
        var $ = function(e, t) {
            return new $.fn.init(e, t)
        };
        $.isWindow = function(e) {
            return null != e && e == e.window
        }, $.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[o.call(e)] || "object" : typeof e
        }, $.isArray = Array.isArray || function(e) {
            return "array" === $.type(e)
        }, $.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== $.type(e) || e.nodeType || $.isWindow(e)) return !1;
            try {
                if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            for (t in e);
            return void 0 === t || n.call(e, t)
        }, $.each = function(e, r, a) {
            var n, o = 0,
                i = e.length,
                s = t(e);
            if (a) {
                if (s)
                    for (; i > o && (n = r.apply(e[o], a), n !== !1); o++);
                else
                    for (o in e)
                        if (n = r.apply(e[o], a), n === !1) break
            } else if (s)
                for (; i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++);
            else
                for (o in e)
                    if (n = r.call(e[o], o, e[o]), n === !1) break;
            return e
        }, $.data = function(e, t, a) {
            if (void 0 === a) {
                var n = e[$.expando],
                    o = n && r[n];
                if (void 0 === t) return o;
                if (o && t in o) return o[t]
            } else if (void 0 !== t) {
                var n = e[$.expando] || (e[$.expando] = ++$.uuid);
                return r[n] = r[n] || {}, r[n][t] = a, a
            }
        }, $.removeData = function(e, t) {
            var a = e[$.expando],
                n = a && r[a];
            n && $.each(t, function(e, t) {
                delete n[t]
            })
        }, $.extend = function() {
            var e, t, r, a, n, o, i = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof i && (u = i, i = arguments[s] || {}, s++), "object" != typeof i && "function" !== $.type(i) && (i = {}), s === l && (i = this, s--); l > s; s++)
                if (null != (n = arguments[s]))
                    for (a in n) e = i[a], r = n[a], i !== r && (u && r && ($.isPlainObject(r) || (t = $.isArray(r))) ? (t ? (t = !1, o = e && $.isArray(e) ? e : []) : o = e && $.isPlainObject(e) ? e : {}, i[a] = $.extend(u, o, r)) : void 0 !== r && (i[a] = r));
            return i
        }, $.queue = function(e, r, a) {
            function n(e, r) {
                var a = r || [];
                return null != e && (t(Object(e)) ? ! function(e, t) {
                    for (var r = +t.length, a = 0, n = e.length; r > a;) e[n++] = t[a++];
                    if (r !== r)
                        for (; void 0 !== t[a];) e[n++] = t[a++];
                    return e.length = n, e
                }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a
            }
            if (e) {
                r = (r || "fx") + "queue";
                var o = $.data(e, r);
                return a ? (!o || $.isArray(a) ? o = $.data(e, r, n(a)) : o.push(a), o) : o || []
            }
        }, $.dequeue = function(e, t) {
            $.each(e.nodeType ? [e] : e, function(e, r) {
                t = t || "fx";
                var a = $.queue(r, t),
                    n = a.shift();
                "inprogress" === n && (n = a.shift()), n && ("fx" === t && a.unshift("inprogress"), n.call(r, function() {
                    $.dequeue(r, t)
                }))
            })
        }, $.fn = $.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                    return e || document
                }
                var t = this[0],
                    e = e.apply(t),
                    r = this.offset(),
                    a = /^(?:body|html)$/i.test(e.nodeName) ? {
                        top: 0,
                        left: 0
                    } : $(e).offset();
                return r.top -= parseFloat(t.style.marginTop) || 0, r.left -= parseFloat(t.style.marginLeft) || 0, e.style && (a.top += parseFloat(e.style.borderTopWidth) || 0, a.left += parseFloat(e.style.borderLeftWidth) || 0), {
                    top: r.top - a.top,
                    left: r.left - a.left
                }
            }
        };
        var r = {};
        $.expando = "velocity" + (new Date).getTime(), $.uuid = 0;
        for (var a = {}, n = a.hasOwnProperty, o = a.toString, i = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < i.length; s++) a["[object " + i[s] + "]"] = i[s].toLowerCase();
        $.fn.init.prototype = $.fn, e.Velocity = {
            Utilities: $
        }
    }
}(window),
function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    return function(e, t, r, a) {
        function n(e) {
            for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
                var n = e[t];
                n && a.push(n)
            }
            return a
        }

        function o(e) {
            return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
        }

        function i(e) {
            var t = $.data(e, "velocity");
            return null === t ? a : t
        }

        function s(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e)
            }
        }

        function l(e, r, a, n) {
            function o(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function i(e, t) {
                return 3 * t - 6 * e
            }

            function s(e) {
                return 3 * e
            }

            function l(e, t, r) {
                return ((o(t, r) * e + i(t, r)) * e + s(t)) * e
            }

            function u(e, t, r) {
                return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t)
            }

            function c(t, r) {
                for (var n = 0; m > n; ++n) {
                    var o = u(r, e, a);
                    if (0 === o) return r;
                    var i = l(r, e, a) - t;
                    r -= i / o
                }
                return r
            }

            function p() {
                for (var t = 0; b > t; ++t) w[t] = l(t * x, e, a)
            }

            function f(t, r, n) {
                var o, i, s = 0;
                do i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i; while (Math.abs(o) > h && ++s < v);
                return i
            }

            function d(t) {
                for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) r += x;
                --n;
                var i = (t - w[n]) / (w[n + 1] - w[n]),
                    s = r + i * x,
                    l = u(s, e, a);
                return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x)
            }

            function g() {
                V = !0, (e != r || a != n) && p()
            }
            var m = 4,
                y = .001,
                h = 1e-7,
                v = 10,
                b = 11,
                x = 1 / (b - 1),
                S = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var P = 0; 4 > P; ++P)
                if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
            e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
            var w = S ? new Float32Array(b) : new Array(b),
                V = !1,
                C = function(t) {
                    return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n)
                };
            C.getControlPoints = function() {
                return [{
                    x: e,
                    y: r
                }, {
                    x: a,
                    y: n
                }]
            };
            var T = "generateBezier(" + [e, r, a, n] + ")";
            return C.toString = function() {
                return T
            }, C
        }

        function u(e, t) {
            var r = e;
            return g.isString(e) ? v.Easings[e] || (r = !1) : r = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = v.Easings[v.defaults.easing] ? v.defaults.easing : h), r
        }

        function c(e) {
            if (e) {
                var t = (new Date).getTime(),
                    r = v.State.calls.length;
                r > 1e4 && (v.State.calls = n(v.State.calls));
                for (var o = 0; r > o; o++)
                    if (v.State.calls[o]) {
                        var s = v.State.calls[o],
                            l = s[0],
                            u = s[2],
                            f = s[3],
                            d = !!f,
                            m = null;
                        f || (f = v.State.calls[o][3] = t - 16);
                        for (var y = Math.min((t - f) / u.duration, 1), h = 0, b = l.length; b > h; h++) {
                            var S = l[h],
                                w = S.element;
                            if (i(w)) {
                                var V = !1;
                                if (u.display !== a && null !== u.display && "none" !== u.display) {
                                    if ("flex" === u.display) {
                                        var C = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        $.each(C, function(e, t) {
                                            x.setPropertyValue(w, "display", t)
                                        })
                                    }
                                    x.setPropertyValue(w, "display", u.display)
                                }
                                u.visibility !== a && "hidden" !== u.visibility && x.setPropertyValue(w, "visibility", u.visibility);
                                for (var T in S)
                                    if ("element" !== T) {
                                        var k = S[T],
                                            A, F = g.isString(k.easing) ? v.Easings[k.easing] : k.easing;
                                        if (1 === y) A = k.endValue;
                                        else {
                                            var E = k.endValue - k.startValue;
                                            if (A = k.startValue + E * F(y, u, E), !d && A === k.currentValue) continue
                                        }
                                        if (k.currentValue = A, "tween" === T) m = A;
                                        else {
                                            if (x.Hooks.registered[T]) {
                                                var j = x.Hooks.getRoot(T),
                                                    H = i(w).rootPropertyValueCache[j];
                                                H && (k.rootPropertyValue = H)
                                            }
                                            var N = x.setPropertyValue(w, T, k.currentValue + (0 === parseFloat(A) ? "" : k.unitType), k.rootPropertyValue, k.scrollData);
                                            x.Hooks.registered[T] && (i(w).rootPropertyValueCache[j] = x.Normalizations.registered[j] ? x.Normalizations.registered[j]("extract", null, N[1]) : N[1]), "transform" === N[0] && (V = !0)
                                        }
                                    }
                                u.mobileHA && i(w).transformCache.translate3d === a && (i(w).transformCache.translate3d = "(0px, 0px, 0px)", V = !0), V && x.flushTransformCache(w)
                            }
                        }
                        u.display !== a && "none" !== u.display && (v.State.calls[o][2].display = !1), u.visibility !== a && "hidden" !== u.visibility && (v.State.calls[o][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], y, Math.max(0, f + u.duration - t), f, m), 1 === y && p(o)
                    }
            }
            v.State.isTicking && P(c)
        }

        function p(e, t) {
            if (!v.State.calls[e]) return !1;
            for (var r = v.State.calls[e][0], n = v.State.calls[e][1], o = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
                var p = r[u].element;
                if (t || o.loop || ("none" === o.display && x.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && x.setPropertyValue(p, "visibility", o.visibility)), o.loop !== !0 && ($.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test($.queue(p)[1])) && i(p)) {
                    i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};
                    var f = !1;
                    $.each(x.Lists.transforms3D, function(e, t) {
                        var r = /^scale/.test(t) ? 1 : 0,
                            n = i(p).transformCache[t];
                        i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (f = !0, delete i(p).transformCache[t])
                    }), o.mobileHA && (f = !0, delete i(p).transformCache.translate3d), f && x.flushTransformCache(p), x.Values.removeClass(p, "velocity-animating")
                }
                if (!t && o.complete && !o.loop && u === c - 1) try {
                    o.complete.call(n, n)
                } catch (d) {
                    setTimeout(function() {
                        throw d
                    }, 1)
                }
                s && o.loop !== !0 && s(n), i(p) && o.loop === !0 && !t && ($.each(i(p).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), v(p, "reverse", {
                    loop: !0,
                    delay: o.delay
                })), o.queue !== !1 && $.dequeue(p, o.queue)
            }
            v.State.calls[e] = !1;
            for (var g = 0, m = v.State.calls.length; m > g; g++)
                if (v.State.calls[g] !== !1) {
                    l = !0;
                    break
                }
            l === !1 && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
        }
        var f = function() {
                if (r.documentMode) return r.documentMode;
                for (var e = 7; e > 4; e--) {
                    var t = r.createElement("div");
                    if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                }
                return a
            }(),
            d = function() {
                var e = 0;
                return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                    var r = (new Date).getTime(),
                        a;
                    return a = Math.max(0, 16 - (r - e)), e = r + a, setTimeout(function() {
                        t(r + a)
                    }, a)
                }
            }(),
            g = {
                isString: function(e) {
                    return "string" == typeof e
                },
                isArray: Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                isFunction: function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                },
                isNode: function(e) {
                    return e && e.nodeType
                },
                isNodeList: function(e) {
                    return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                },
                isWrapped: function(e) {
                    return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                },
                isSVG: function(e) {
                    return t.SVGElement && e instanceof t.SVGElement
                },
                isEmptyObject: function(e) {
                    for (var t in e) return !1;
                    return !0
                }
            },
            $, m = !1;
        if (e.fn && e.fn.jquery ? ($ = e, m = !0) : $ = t.Velocity.Utilities, 8 >= f && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= f) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var y = 400,
            h = "swing",
            v = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: t.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: r.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: $,
                Redirects: {},
                Easings: {},
                Promise: t.Promise,
                defaults: {
                    queue: "",
                    duration: y,
                    easing: h,
                    begin: a,
                    complete: a,
                    progress: a,
                    display: a,
                    visibility: a,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(e) {
                    $.data(e, "velocity", {
                        isSVG: g.isSVG(e),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 2,
                    patch: 2
                },
                debug: !1
            };
        t.pageYOffset !== a ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
        var b = function() {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }

            function t(t, r, a) {
                var n = {
                    x: t.x + a.dx * r,
                    v: t.v + a.dv * r,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: n.v,
                    dv: e(n)
                }
            }

            function r(r, a) {
                var n = {
                        dx: r.v,
                        dv: e(r)
                    },
                    o = t(r, .5 * a, n),
                    i = t(r, .5 * a, o),
                    s = t(r, a, i),
                    l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx),
                    u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);
                return r.x = r.x + l * a, r.v = r.v + u * a, r
            }
            return function a(e, t, n) {
                var o = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    i = [0],
                    s = 0,
                    l = 1e-4,
                    u = .016,
                    c, p, f;
                for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, o.tension = e, o.friction = t, c = null !== n, c ? (s = a(e, t), p = s / n * u) : p = u;;)
                    if (f = r(f || o, p), i.push(1 + f.x), s += 16, !(Math.abs(f.x) > l && Math.abs(f.v) > l)) break;
                return c ? function(e) {
                    return i[e * (i.length - 1) | 0]
                } : s
            }
        }();
        v.Easings = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        }, $.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(e, t) {
            v.Easings[t[0]] = l.apply(null, t[1])
        });
        var x = v.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var e = 0; e < x.Lists.colors.length; e++) {
                        var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var r, a, n;
                    if (f)
                        for (r in x.Hooks.templates) {
                            a = x.Hooks.templates[r], n = a[0].split(" ");
                            var o = a[1].match(x.RegEx.valueSplit);
                            "Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), x.Hooks.templates[r] = [n.join(" "), o.join(" ")])
                        }
                    for (r in x.Hooks.templates) {
                        a = x.Hooks.templates[r], n = a[0].split(" ");
                        for (var e in n) {
                            var i = r + n[e],
                                s = e;
                            x.Hooks.registered[i] = [r, s]
                        }
                    }
                },
                getRoot: function(e) {
                    var t = x.Hooks.registered[e];
                    return t ? t[0] : e
                },
                cleanRootPropertyValue: function(e, t) {
                    return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
                },
                extractValue: function(e, t) {
                    var r = x.Hooks.registered[e];
                    if (r) {
                        var a = r[0],
                            n = r[1];
                        return t = x.Hooks.cleanRootPropertyValue(a, t), t.toString().match(x.RegEx.valueSplit)[n]
                    }
                    return t
                },
                injectValue: function(e, t, r) {
                    var a = x.Hooks.registered[e];
                    if (a) {
                        var n = a[0],
                            o = a[1],
                            i, s;
                        return r = x.Hooks.cleanRootPropertyValue(n, r), i = r.toString().match(x.RegEx.valueSplit), i[o] = t, s = i.join(" ")
                    }
                    return r
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, r) {
                        switch (e) {
                            case "name":
                                return "clip";
                            case "extract":
                                var a;
                                return x.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(x.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;
                            case "inject":
                                return "rect(" + r + ")"
                        }
                    },
                    blur: function(e, t, r) {
                        switch (e) {
                            case "name":
                                return v.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var a = parseFloat(r);
                                if (!a && 0 !== a) {
                                    var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    a = n ? n[1] : 0
                                }
                                return a;
                            case "inject":
                                return parseFloat(r) ? "blur(" + r + ")" : "none"
                        }
                    },
                    opacity: function(e, t, r) {
                        if (8 >= f) switch (e) {
                            case "name":
                                return "filter";
                            case "extract":
                                var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                                return r = a ? a[1] / 100 : 1;
                            case "inject":
                                return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
                        } else switch (e) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return r;
                            case "inject":
                                return r
                        }
                    }
                },
                register: function() {
                    9 >= f || v.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var e = 0; e < x.Lists.transformsBase.length; e++) ! function() {
                        var t = x.Lists.transformsBase[e];
                        x.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");
                                case "inject":
                                    var o = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                        case "translate":
                                            o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                            break;
                                        case "scal":
                                        case "scale":
                                            v.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);
                                            break;
                                        case "skew":
                                            o = !/(deg|\d)$/i.test(n);
                                            break;
                                        case "rotate":
                                            o = !/(deg|\d)$/i.test(n)
                                    }
                                    return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t]
                            }
                        }
                    }();
                    for (var e = 0; e < x.Lists.colors.length; e++) ! function() {
                        var t = x.Lists.colors[e];
                        x.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                                case "name":
                                    return t;
                                case "extract":
                                    var o;
                                    if (x.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n;
                                    else {
                                        var i, s = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : x.RegEx.isHex.test(n) ? i = "rgb(" + x.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), o = (i || n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= f || 3 !== o.split(" ").length || (o += " 1"), o;
                                case "inject":
                                    return 8 >= f ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                },
                SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (f || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                },
                prefixCheck: function(e) {
                    if (v.State.prefixMatches[e]) return [v.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
                        var n;
                        if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function(e) {
                                return e.toUpperCase()
                            }), g.isString(v.State.prefixElement.style[n])) return v.State.prefixMatches[e] = n, [n, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function(e) {
                    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                        a;
                    return e = e.replace(t, function(e, t, r, a) {
                        return t + t + r + r + a + a
                    }), a = r.exec(e), a ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                },
                getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                },
                getDisplayType: function(e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                },
                addClass: function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                },
                removeClass: function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function(e, r, n, o) {
                function s(e, r) {
                    function n() {
                        u && x.setPropertyValue(e, "display", "none")
                    }
                    var l = 0;
                    if (8 >= f) l = $.css(e, r);
                    else {
                        var u = !1;
                        if (/^(width|height)$/.test(r) && 0 === x.getPropertyValue(e, "display") && (u = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !o) {
                            if ("height" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                return n(), c
                            }
                            if ("width" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var p = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                return n(), p
                            }
                        }
                        var d;
                        d = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), l = 9 === f && "filter" === r ? d.getPropertyValue(r) : d[r], ("" === l || null === l) && (l = e.style[r]), n()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
                        var g = s(e, "position");
                        ("fixed" === g || "absolute" === g && /top|left/i.test(r)) && (l = $(e).position()[r] + "px")
                    }
                    return l
                }
                var l;
                if (x.Hooks.registered[r]) {
                    var u = r,
                        c = x.Hooks.getRoot(u);
                    n === a && (n = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (n = x.Normalizations.registered[c]("extract", e, n)), l = x.Hooks.extractValue(u, n)
                } else if (x.Normalizations.registered[r]) {
                    var p, d;
                    p = x.Normalizations.registered[r]("name", e), "transform" !== p && (d = s(e, x.Names.prefixCheck(p)[0]), x.Values.isCSSNullValue(d) && x.Hooks.templates[r] && (d = x.Hooks.templates[r][1])), l = x.Normalizations.registered[r]("extract", e, d)
                }
                if (!/^[\d-]/.test(l))
                    if (i(e) && i(e).isSVG && x.Names.SVGAttribute(r))
                        if (/^(height|width)$/i.test(r)) try {
                            l = e.getBBox()[r]
                        } catch (g) {
                            l = 0
                        } else l = e.getAttribute(r);
                        else l = s(e, x.Names.prefixCheck(r)[0]);
                return x.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + r + ": " + l), l
            },
            setPropertyValue: function(e, r, a, n, o) {
                var s = r;
                if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);
                else if (x.Normalizations.registered[r] && "transform" === x.Normalizations.registered[r]("name", e)) x.Normalizations.registered[r]("inject", e, a), s = "transform", a = i(e).transformCache[r];
                else {
                    if (x.Hooks.registered[r]) {
                        var l = r,
                            u = x.Hooks.getRoot(r);
                        n = n || x.getPropertyValue(e, u), a = x.Hooks.injectValue(l, a, n), r = u
                    }
                    if (x.Normalizations.registered[r] && (a = x.Normalizations.registered[r]("inject", e, a), r = x.Normalizations.registered[r]("name", e)), s = x.Names.prefixCheck(r)[0], 8 >= f) try {
                        e.style[s] = a
                    } catch (c) {
                        v.debug && console.log("Browser does not support [" + a + "] for [" + s + "]")
                    } else i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;
                    v.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a)
                }
                return [s, a]
            },
            flushTransformCache: function(e) {
                function t(t) {
                    return parseFloat(x.getPropertyValue(e, t))
                }
                var r = "";
                if ((f || v.State.isAndroid && !v.State.isChrome) && i(e).isSVG) {
                    var a = {
                        translate: [t("translateX"), t("translateY")],
                        skewX: [t("skewX")],
                        skewY: [t("skewY")],
                        scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                        rotate: [t("rotateZ"), 0, 0]
                    };
                    $.each(i(e).transformCache, function(e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e])
                    })
                } else {
                    var n, o;
                    $.each(i(e).transformCache, function(t) {
                        return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(r += t + n + " "))
                    }), o && (r = "perspective" + o + " " + r)
                }
                x.setPropertyValue(e, "transform", r)
            }
        };
        x.Hooks.register(), x.Normalizations.register(), v.hook = function(e, t, r) {
            var n = a;
            return e = o(e), $.each(e, function(e, o) {
                if (i(o) === a && v.init(o), r === a) n === a && (n = v.CSS.getPropertyValue(o, t));
                else {
                    var s = v.CSS.setPropertyValue(o, t, r);
                    "transform" === s[0] && v.CSS.flushTransformCache(o), n = s
                }
            }), n
        };
        var S = function() {
            function e() {
                return l ? T.promise || null : f
            }

            function n() {
                function e(e) {
                    function p(e, t) {
                        var r = a,
                            i = a,
                            s = a;
                        return g.isArray(e) ? (r = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? s = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (i = t ? e[1] : u(e[1], o.duration), e[2] !== a && (s = e[2]))) : r = e, t || (i = i || o.easing), g.isFunction(r) && (r = r.call(n, w, P)), g.isFunction(s) && (s = s.call(n, w, P)), [r || 0, i, s]
                    }

                    function f(e, t) {
                        var r, a;
                        return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                            return r = e, ""
                        }), r || (r = x.Values.getUnitType(e)), [a, r]
                    }

                    function d() {
                        var e = {
                                myParent: n.parentNode || r.body,
                                position: x.getPropertyValue(n, "position"),
                                fontSize: x.getPropertyValue(n, "fontSize")
                            },
                            a = e.position === N.lastPosition && e.myParent === N.lastParent,
                            o = e.fontSize === N.lastFontSize;
                        N.lastParent = e.myParent, N.lastPosition = e.position, N.lastFontSize = e.fontSize;
                        var s = 100,
                            l = {};
                        if (o && a) l.emToPx = N.lastEmToPx, l.percentToPxWidth = N.lastPercentToPxWidth, l.percentToPxHeight = N.lastPercentToPxHeight;
                        else {
                            var u = i(n).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                            v.init(u), e.myParent.appendChild(u), $.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                v.CSS.setPropertyValue(u, t, "hidden")
                            }), v.CSS.setPropertyValue(u, "position", e.position), v.CSS.setPropertyValue(u, "fontSize", e.fontSize), v.CSS.setPropertyValue(u, "boxSizing", "content-box"), $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                v.CSS.setPropertyValue(u, t, s + "%")
                            }), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = N.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                        }
                        return null === N.remToPx && (N.remToPx = parseFloat(x.getPropertyValue(r.body, "fontSize")) || 16), null === N.vwToPx && (N.vwToPx = parseFloat(t.innerWidth) / 100, N.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = N.remToPx, l.vwToPx = N.vwToPx, l.vhToPx = N.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), n), l
                    }
                    if (o.begin && 0 === w) try {
                        o.begin.call(m, m)
                    } catch (y) {
                        setTimeout(function() {
                            throw y
                        }, 1)
                    }
                    if ("scroll" === k) {
                        var S = /^x$/i.test(o.axis) ? "Left" : "Top",
                            V = parseFloat(o.offset) || 0,
                            C, A, F;
                        o.container ? g.isWrapped(o.container) || g.isNode(o.container) ? (o.container = o.container[0] || o.container, C = o.container["scroll" + S], F = C + $(n).position()[S.toLowerCase()] + V) : o.container = null : (C = v.State.scrollAnchor[v.State["scrollProperty" + S]], A = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], F = $(n).offset()[S.toLowerCase()] + V), s = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: C,
                                currentValue: C,
                                endValue: F,
                                unitType: "",
                                easing: o.easing,
                                scrollData: {
                                    container: o.container,
                                    direction: S,
                                    alternateValue: A
                                }
                            },
                            element: n
                        }, v.debug && console.log("tweensContainer (scroll): ", s.scroll, n)
                    } else if ("reverse" === k) {
                        if (!i(n).tweensContainer) return void $.dequeue(n, o.queue);
                        "none" === i(n).opts.display && (i(n).opts.display = "auto"), "hidden" === i(n).opts.visibility && (i(n).opts.visibility = "visible"), i(n).opts.loop = !1, i(n).opts.begin = null, i(n).opts.complete = null, b.easing || delete o.easing, b.duration || delete o.duration, o = $.extend({}, i(n).opts, o);
                        var E = $.extend(!0, {}, i(n).tweensContainer);
                        for (var j in E)
                            if ("element" !== j) {
                                var H = E[j].startValue;
                                E[j].startValue = E[j].currentValue = E[j].endValue, E[j].endValue = H, g.isEmptyObject(b) || (E[j].easing = o.easing), v.debug && console.log("reverse tweensContainer (" + j + "): " + JSON.stringify(E[j]), n)
                            }
                        s = E
                    } else if ("start" === k) {
                        var E;
                        i(n).tweensContainer && i(n).isAnimating === !0 && (E = i(n).tweensContainer), $.each(h, function(e, t) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                var r = p(t, !0),
                                    n = r[0],
                                    o = r[1],
                                    i = r[2];
                                if (x.RegEx.isHex.test(n)) {
                                    for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(n), u = i ? x.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
                                        var f = [l[c]];
                                        o && f.push(o), u !== a && f.push(u[c]), h[e + s[c]] = f
                                    }
                                    delete h[e]
                                }
                            }
                        });
                        for (var R in h) {
                            var O = p(h[R]),
                                z = O[0],
                                q = O[1],
                                M = O[2];
                            R = x.Names.camelCase(R);
                            var I = x.Hooks.getRoot(R),
                                B = !1;
                            if (i(n).isSVG || "tween" === I || x.Names.prefixCheck(I)[1] !== !1 || x.Normalizations.registered[I] !== a) {
                                (o.display !== a && null !== o.display && "none" !== o.display || o.visibility !== a && "hidden" !== o.visibility) && /opacity|filter/.test(R) && !M && 0 !== z && (M = 0), o._cacheValues && E && E[R] ? (M === a && (M = E[R].endValue + E[R].unitType), B = i(n).rootPropertyValueCache[I]) : x.Hooks.registered[R] ? M === a ? (B = x.getPropertyValue(n, I), M = x.getPropertyValue(n, R, B)) : B = x.Hooks.templates[I][1] : M === a && (M = x.getPropertyValue(n, R));
                                var W, G, D, X = !1;
                                if (W = f(R, M), M = W[0], D = W[1], W = f(R, z), z = W[0].replace(/^([+-\/*])=/, function(e, t) {
                                        return X = t, ""
                                    }), G = W[1], M = parseFloat(M) || 0, z = parseFloat(z) || 0, "%" === G && (/^(fontSize|lineHeight)$/.test(R) ? (z /= 100, G = "em") : /^scale/.test(R) ? (z /= 100, G = "") : /(Red|Green|Blue)$/i.test(R) && (z = z / 100 * 255, G = "")), /[\/*]/.test(X)) G = D;
                                else if (D !== G && 0 !== M)
                                    if (0 === z) G = D;
                                    else {
                                        l = l || d();
                                        var Y = /margin|padding|left|right|width|text|word|letter/i.test(R) || /X$/.test(R) || "x" === R ? "x" : "y";
                                        switch (D) {
                                            case "%":
                                                M *= "x" === Y ? l.percentToPxWidth : l.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                M *= l[D + "ToPx"]
                                        }
                                        switch (G) {
                                            case "%":
                                                M *= 1 / ("x" === Y ? l.percentToPxWidth : l.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                M *= 1 / l[G + "ToPx"]
                                        }
                                    }
                                switch (X) {
                                    case "+":
                                        z = M + z;
                                        break;
                                    case "-":
                                        z = M - z;
                                        break;
                                    case "*":
                                        z = M * z;
                                        break;
                                    case "/":
                                        z = M / z
                                }
                                s[R] = {
                                    rootPropertyValue: B,
                                    startValue: M,
                                    currentValue: M,
                                    endValue: z,
                                    unitType: G,
                                    easing: q
                                }, v.debug && console.log("tweensContainer (" + R + "): " + JSON.stringify(s[R]), n)
                            } else v.debug && console.log("Skipping [" + I + "] due to a lack of browser support.")
                        }
                        s.element = n
                    }
                    s.element && (x.Values.addClass(n, "velocity-animating"), L.push(s), "" === o.queue && (i(n).tweensContainer = s, i(n).opts = o), i(n).isAnimating = !0, w === P - 1 ? (v.State.calls.push([L, m, o, null, T.resolver]), v.State.isTicking === !1 && (v.State.isTicking = !0, c())) : w++)
                }
                var n = this,
                    o = $.extend({}, v.defaults, b),
                    s = {},
                    l;
                switch (i(n) === a && v.init(n), parseFloat(o.delay) && o.queue !== !1 && $.queue(n, o.queue, function(e) {
                    v.velocityQueueEntryFlag = !0, i(n).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(o.delay)),
                        next: e
                    }
                }), o.duration.toString().toLowerCase()) {
                    case "fast":
                        o.duration = 200;
                        break;
                    case "normal":
                        o.duration = y;
                        break;
                    case "slow":
                        o.duration = 600;
                        break;
                    default:
                        o.duration = parseFloat(o.duration) || 1
                }
                v.mock !== !1 && (v.mock === !0 ? o.duration = o.delay = 1 : (o.duration *= parseFloat(v.mock) || 1, o.delay *= parseFloat(v.mock) || 1)), o.easing = u(o.easing, o.duration), o.begin && !g.isFunction(o.begin) && (o.begin = null), o.progress && !g.isFunction(o.progress) && (o.progress = null), o.complete && !g.isFunction(o.complete) && (o.complete = null), o.display !== a && null !== o.display && (o.display = o.display.toString().toLowerCase(), "auto" === o.display && (o.display = v.CSS.Values.getDisplayType(n))), o.visibility !== a && null !== o.visibility && (o.visibility = o.visibility.toString().toLowerCase()), o.mobileHA = o.mobileHA && v.State.isMobile && !v.State.isGingerbread, o.queue === !1 ? o.delay ? setTimeout(e, o.delay) : e() : $.queue(n, o.queue, function(t, r) {
                    return r === !0 ? (T.promise && T.resolver(m), !0) : (v.velocityQueueEntryFlag = !0, void e(t))
                }), "" !== o.queue && "fx" !== o.queue || "inprogress" === $.queue(n)[0] || $.dequeue(n)
            }
            var s = arguments[0] && (arguments[0].p || $.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties)),
                l, f, d, m, h, b;
            if (g.isWrapped(this) ? (l = !1, d = 0, m = this, f = this) : (l = !0, d = 1, m = s ? arguments[0].elements || arguments[0].e : arguments[0]), m = o(m)) {
                s ? (h = arguments[0].properties || arguments[0].p, b = arguments[0].options || arguments[0].o) : (h = arguments[d], b = arguments[d + 1]);
                var P = m.length,
                    w = 0;
                if (!/^(stop|finish)$/i.test(h) && !$.isPlainObject(b)) {
                    var V = d + 1;
                    b = {};
                    for (var C = V; C < arguments.length; C++) g.isArray(arguments[C]) || !/^(fast|normal|slow)$/i.test(arguments[C]) && !/^\d/.test(arguments[C]) ? g.isString(arguments[C]) || g.isArray(arguments[C]) ? b.easing = arguments[C] : g.isFunction(arguments[C]) && (b.complete = arguments[C]) : b.duration = arguments[C]
                }
                var T = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                l && v.Promise && (T.promise = new v.Promise(function(e, t) {
                    T.resolver = e, T.rejecter = t
                }));
                var k;
                switch (h) {
                    case "scroll":
                        k = "scroll";
                        break;
                    case "reverse":
                        k = "reverse";
                        break;
                    case "finish":
                    case "stop":
                        $.each(m, function(e, t) {
                            i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer)
                        });
                        var A = [];
                        return $.each(v.State.calls, function(e, t) {
                            t && $.each(t[1], function(r, n) {
                                var o = b === a ? "" : b;
                                return o === !0 || t[2].queue === o || b === a && t[2].queue === !1 ? void $.each(m, function(r, a) {
                                    a === n && ((b === !0 || g.isString(b)) && ($.each($.queue(a, g.isString(b) ? b : ""), function(e, t) {
                                        g.isFunction(t) && t(null, !0)
                                    }), $.queue(a, g.isString(b) ? b : "", [])), "stop" === h ? (i(a) && i(a).tweensContainer && o !== !1 && $.each(i(a).tweensContainer, function(e, t) {
                                        t.endValue = t.currentValue
                                    }), A.push(e)) : "finish" === h && (t[2].duration = 1))
                                }) : !0
                            })
                        }), "stop" === h && ($.each(A, function(e, t) {
                            p(t, !0)
                        }), T.promise && T.resolver(m)), e();
                    default:
                        if (!$.isPlainObject(h) || g.isEmptyObject(h)) {
                            if (g.isString(h) && v.Redirects[h]) {
                                var F = $.extend({}, b),
                                    E = F.duration,
                                    j = F.delay || 0;
                                return F.backwards === !0 && (m = $.extend(!0, [], m).reverse()), $.each(m, function(e, t) {
                                    parseFloat(F.stagger) ? F.delay = j + parseFloat(F.stagger) * e : g.isFunction(F.stagger) && (F.delay = j + F.stagger.call(t, e, P)), F.drag && (F.duration = parseFloat(E) || (/^(callout|transition)/.test(h) ? 1e3 : y), F.duration = Math.max(F.duration * (F.backwards ? 1 - e / P : (e + 1) / P), .75 * F.duration, 200)), v.Redirects[h].call(t, t, F || {}, e, P, m, T.promise ? T : a)
                                }), e()
                            }
                            var H = "Velocity: First argument (" + h + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return T.promise ? T.rejecter(new Error(H)) : console.log(H), e()
                        }
                        k = "start"
                }
                var N = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    L = [];
                $.each(m, function(e, t) {
                    g.isNode(t) && n.call(t)
                });
                var F = $.extend({}, v.defaults, b),
                    R;
                if (F.loop = parseInt(F.loop), R = 2 * F.loop - 1, F.loop)
                    for (var O = 0; R > O; O++) {
                        var z = {
                            delay: F.delay,
                            progress: F.progress
                        };
                        O === R - 1 && (z.display = F.display, z.visibility = F.visibility, z.complete = F.complete), S(m, "reverse", z)
                    }
                return e()
            }
        };
        v = $.extend(S, v), v.animate = S;
        var P = t.requestAnimationFrame || d;
        return v.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function() {
            r.hidden ? (P = function(e) {
                return setTimeout(function() {
                    e(!0)
                }, 16)
            }, c()) : P = t.requestAnimationFrame || d
        }), e.Velocity = v, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = v.defaults), $.each(["Down", "Up"], function(e, t) {
            v.Redirects["slide" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r),
                    u = l.begin,
                    c = l.complete,
                    p = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    },
                    f = {};
                l.display === a && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                    u && u.call(i, i);
                    for (var r in p) {
                        f[r] = e.style[r];
                        var a = v.CSS.getPropertyValue(e, r);
                        p[r] = "Down" === t ? [a, 0] : [0, a]
                    }
                    f.overflow = e.style.overflow, e.style.overflow = "hidden"
                }, l.complete = function() {
                    for (var t in f) e.style[t] = f[t];
                    c && c.call(i, i), s && s.resolver(i)
                }, v(e, p, l)
            }
        }), $.each(["In", "Out"], function(e, t) {
            v.Redirects["fade" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r),
                    u = {
                        opacity: "In" === t ? 1 : 0
                    },
                    c = l.complete;
                l.complete = n !== o - 1 ? l.begin = null : function() {
                    c && c.call(i, i), s && s.resolver(i)
                }, l.display === a && (l.display = "In" === t ? "auto" : "none"), v(this, u, l)
            }
        }), v
    }(window.jQuery || window.Zepto || window, window, document)
});
/* VelocityJS.org UI Pack (5.0.4). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
! function(t) {
    "function" == typeof require && "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(["velocity"], t) : t()
}(function() {
    return function(t, a, e, r) {
        function n(t, a) {
            var e = [];
            return t && a ? ($.each([t, a], function(t, a) {
                var r = [];
                $.each(a, function(t, a) {
                    for (; a.toString().length < 5;) a = "0" + a;
                    r.push(a)
                }), e.push(r.join(""))
            }), parseFloat(e[0]) > parseFloat(e[1])) : !1
        }
        if (!t.Velocity || !t.Velocity.Utilities) return void(a.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
        var i = t.Velocity,
            $ = i.Utilities,
            s = i.version,
            o = {
                major: 1,
                minor: 1,
                patch: 0
            };
        if (n(o, s)) {
            var l = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
            throw alert(l), new Error(l)
        }
        i.RegisterEffect = i.RegisterUI = function(t, a) {
            function e(t, a, e, r) {
                var n = 0,
                    s;
                $.each(t.nodeType ? [t] : t, function(t, a) {
                    r && (e += t * r), s = a.parentNode, $.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(t, e) {
                        n += parseFloat(i.CSS.getPropertyValue(a, e))
                    })
                }), i.animate(s, {
                    height: ("In" === a ? "+" : "-") + "=" + n
                }, {
                    queue: !1,
                    easing: "ease-in-out",
                    duration: e * ("In" === a ? .6 : 1)
                })
            }
            return i.Redirects[t] = function(n, s, o, l, c, u) {
                function f() {
                    s.display !== r && "none" !== s.display || !/Out$/.test(t) || $.each(c.nodeType ? [c] : c, function(t, a) {
                        i.CSS.setPropertyValue(a, "display", "none")
                    }), s.complete && s.complete.call(c, c), u && u.resolver(c || n)
                }
                var p = o === l - 1;
                a.defaultDuration = "function" == typeof a.defaultDuration ? a.defaultDuration.call(c, c) : parseFloat(a.defaultDuration);
                for (var d = 0; d < a.calls.length; d++) {
                    var g = a.calls[d],
                        y = g[0],
                        m = s.duration || a.defaultDuration || 1e3,
                        X = g[1],
                        Y = g[2] || {},
                        O = {};
                    if (O.duration = m * (X || 1), O.queue = s.queue || "", O.easing = Y.easing || "ease", O.delay = parseFloat(Y.delay) || 0, O._cacheValues = Y._cacheValues || !0, 0 === d) {
                        if (O.delay += parseFloat(s.delay) || 0, 0 === o && (O.begin = function() {
                                s.begin && s.begin.call(c, c);
                                var a = t.match(/(In|Out)$/);
                                a && "In" === a[0] && y.opacity !== r && $.each(c.nodeType ? [c] : c, function(t, a) {
                                    i.CSS.setPropertyValue(a, "opacity", 0)
                                }), s.animateParentHeight && a && e(c, a[0], m + O.delay, s.stagger)
                            }), null !== s.display)
                            if (s.display !== r && "none" !== s.display) O.display = s.display;
                            else if (/In$/.test(t)) {
                            var v = i.CSS.Values.getDisplayType(n);
                            O.display = "inline" === v ? "inline-block" : v
                        }
                        s.visibility && "hidden" !== s.visibility && (O.visibility = s.visibility)
                    }
                    d === a.calls.length - 1 && (O.complete = function() {
                        if (a.reset) {
                            for (var t in a.reset) {
                                var e = a.reset[t];
                                i.CSS.Hooks.registered[t] !== r || "string" != typeof e && "number" != typeof e || (a.reset[t] = [a.reset[t], a.reset[t]])
                            }
                            var s = {
                                duration: 0,
                                queue: !1
                            };
                            p && (s.complete = f), i.animate(n, a.reset, s)
                        } else p && f()
                    }, "hidden" === s.visibility && (O.visibility = s.visibility)), i.animate(n, y, O)
                }
            }, i
        }, i.RegisterEffect.packagedEffects = {
            "callout.bounce": {
                defaultDuration: 550,
                calls: [
                    [{
                        translateY: -30
                    }, .25],
                    [{
                        translateY: 0
                    }, .125],
                    [{
                        translateY: -15
                    }, .125],
                    [{
                        translateY: 0
                    }, .25]
                ]
            },
            "callout.shake": {
                defaultDuration: 800,
                calls: [
                    [{
                        translateX: -11
                    }, .125],
                    [{
                        translateX: 11
                    }, .125],
                    [{
                        translateX: -11
                    }, .125],
                    [{
                        translateX: 11
                    }, .125],
                    [{
                        translateX: -11
                    }, .125],
                    [{
                        translateX: 11
                    }, .125],
                    [{
                        translateX: -11
                    }, .125],
                    [{
                        translateX: 0
                    }, .125]
                ]
            },
            "callout.flash": {
                defaultDuration: 1100,
                calls: [
                    [{
                        opacity: [0, "easeInOutQuad", 1]
                    }, .25],
                    [{
                        opacity: [1, "easeInOutQuad"]
                    }, .25],
                    [{
                        opacity: [0, "easeInOutQuad"]
                    }, .25],
                    [{
                        opacity: [1, "easeInOutQuad"]
                    }, .25]
                ]
            },
            "callout.pulse": {
                defaultDuration: 825,
                calls: [
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1
                    }, .5, {
                        easing: "easeInExpo"
                    }],
                    [{
                        scaleX: 1,
                        scaleY: 1
                    }, .5]
                ]
            },
            "callout.swing": {
                defaultDuration: 950,
                calls: [
                    [{
                        rotateZ: 15
                    }, .2],
                    [{
                        rotateZ: -10
                    }, .2],
                    [{
                        rotateZ: 5
                    }, .2],
                    [{
                        rotateZ: -5
                    }, .2],
                    [{
                        rotateZ: 0
                    }, .2]
                ]
            },
            "callout.tada": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        scaleX: .9,
                        scaleY: .9,
                        rotateZ: -3
                    }, .1],
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        rotateZ: 3
                    }, .1],
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        rotateZ: -3
                    }, .1],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    [{
                        scaleX: 1,
                        scaleY: 1,
                        rotateZ: 0
                    }, .2]
                ]
            },
            "transition.fadeIn": {
                defaultDuration: 500,
                calls: [
                    [{
                        opacity: [1, 0]
                    }]
                ]
            },
            "transition.fadeOut": {
                defaultDuration: 500,
                calls: [
                    [{
                        opacity: [0, 1]
                    }]
                ]
            },
            "transition.flipXIn": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        rotateY: [0, -55]
                    }]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipXOut": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        rotateY: 55
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateY: 0
                }
            },
            "transition.flipYIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        rotateX: [0, -45]
                    }]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipYOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        rotateX: 25
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateX: 0
                }
            },
            "transition.flipBounceXIn": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [.725, 0],
                        transformPerspective: [400, 400],
                        rotateY: [-10, 90]
                    }, .5],
                    [{
                        opacity: .8,
                        rotateY: 10
                    }, .25],
                    [{
                        opacity: 1,
                        rotateY: 0
                    }, .25]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipBounceXOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [.9, 1],
                        transformPerspective: [400, 400],
                        rotateY: -10
                    }, .5],
                    [{
                        opacity: 0,
                        rotateY: 90
                    }, .5]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateY: 0
                }
            },
            "transition.flipBounceYIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [.725, 0],
                        transformPerspective: [400, 400],
                        rotateX: [-10, 90]
                    }, .5],
                    [{
                        opacity: .8,
                        rotateX: 10
                    }, .25],
                    [{
                        opacity: 1,
                        rotateX: 0
                    }, .25]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipBounceYOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [.9, 1],
                        transformPerspective: [400, 400],
                        rotateX: -15
                    }, .5],
                    [{
                        opacity: 0,
                        rotateX: 90
                    }, .5]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateX: 0
                }
            },
            "transition.swoopIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["100%", "50%"],
                        transformOriginY: ["100%", "100%"],
                        scaleX: [1, 0],
                        scaleY: [1, 0],
                        translateX: [0, -700],
                        translateZ: 0
                    }]
                ],
                reset: {
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.swoopOut": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "100%"],
                        transformOriginY: ["100%", "100%"],
                        scaleX: 0,
                        scaleY: 0,
                        translateX: -700,
                        translateZ: 0
                    }]
                ],
                reset: {
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    scaleX: 1,
                    scaleY: 1,
                    translateX: 0
                }
            },
            "transition.whirlIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, 0],
                        scaleY: [1, 0],
                        rotateY: [0, 160]
                    }, 1, {
                        easing: "easeInOutSine"
                    }]
                ]
            },
            "transition.whirlOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [0, "easeInOutQuint", 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: 0,
                        scaleY: 0,
                        rotateY: 160
                    }, 1, {
                        easing: "swing"
                    }]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1,
                    rotateY: 0
                }
            },
            "transition.shrinkIn": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, 1.5],
                        scaleY: [1, 1.5],
                        translateZ: 0
                    }]
                ]
            },
            "transition.shrinkOut": {
                defaultDuration: 600,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: 1.3,
                        scaleY: 1.3,
                        translateZ: 0
                    }]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1
                }
            },
            "transition.expandIn": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, .625],
                        scaleY: [1, .625],
                        translateZ: 0
                    }]
                ]
            },
            "transition.expandOut": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: .5,
                        scaleY: .5,
                        translateZ: 0
                    }]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1
                }
            },
            "transition.bounceIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        scaleX: [1.05, .3],
                        scaleY: [1.05, .3]
                    }, .4],
                    [{
                        scaleX: .9,
                        scaleY: .9,
                        translateZ: 0
                    }, .2],
                    [{
                        scaleX: 1,
                        scaleY: 1
                    }, .5]
                ]
            },
            "transition.bounceOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        scaleX: .95,
                        scaleY: .95
                    }, .35],
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        translateZ: 0
                    }, .35],
                    [{
                        opacity: [0, 1],
                        scaleX: .3,
                        scaleY: .3
                    }, .3]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1
                }
            },
            "transition.bounceUpIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [-30, 1e3]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateY: 10
                    }, .2],
                    [{
                        translateY: 0
                    }, .2]
                ]
            },
            "transition.bounceUpOut": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        translateY: 20
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateY: -1e3
                    }, .8]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.bounceDownIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [30, -1e3]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateY: -10
                    }, .2],
                    [{
                        translateY: 0
                    }, .2]
                ]
            },
            "transition.bounceDownOut": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        translateY: -20
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateY: 1e3
                    }, .8]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.bounceLeftIn": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [30, -1250]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateX: -10
                    }, .2],
                    [{
                        translateX: 0
                    }, .2]
                ]
            },
            "transition.bounceLeftOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        translateX: 30
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateX: -1250
                    }, .8]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.bounceRightIn": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [-30, 1250]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateX: 10
                    }, .2],
                    [{
                        translateX: 0
                    }, .2]
                ]
            },
            "transition.bounceRightOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        translateX: -30
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateX: 1250
                    }, .8]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideUpIn": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, 20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideUpOut": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: -20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideDownIn": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, -20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideDownOut": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: 20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideLeftIn": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, -20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideLeftOut": {
                defaultDuration: 1050,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: -20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideRightIn": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, 20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideRightOut": {
                defaultDuration: 1050,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: 20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideUpBigIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, 75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideUpBigOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: -75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideDownBigIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, -75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideDownBigOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: 75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideLeftBigIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, -75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideLeftBigOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: -75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideRightBigIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, 75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideRightBigOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: 75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.perspectiveUpIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: ["100%", "100%"],
                        rotateX: [0, -180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveUpOut": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: ["100%", "100%"],
                        rotateX: -180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateX: 0
                }
            },
            "transition.perspectiveDownIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateX: [0, 180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveDownOut": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateX: 180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateX: 0
                }
            },
            "transition.perspectiveLeftIn": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateY: [0, -180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveLeftOut": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateY: -180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateY: 0
                }
            },
            "transition.perspectiveRightIn": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: ["100%", "100%"],
                        transformOriginY: [0, 0],
                        rotateY: [0, 180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveRightOut": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: ["100%", "100%"],
                        transformOriginY: [0, 0],
                        rotateY: 180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateY: 0
                }
            }
        };
        for (var c in i.RegisterEffect.packagedEffects) i.RegisterEffect(c, i.RegisterEffect.packagedEffects[c]);
        i.RunSequence = function(t) {
            var a = $.extend(!0, [], t);
            a.length > 1 && ($.each(a.reverse(), function(t, e) {
                var r = a[t + 1];
                if (r) {
                    var n = e.o || e.options,
                        s = r.o || r.options,
                        o = n && n.sequenceQueue === !1 ? "begin" : "complete",
                        l = s && s[o],
                        c = {};
                    c[o] = function() {
                        var t = r.e || r.elements,
                            a = t.nodeType ? [t] : t;
                        l && l.call(a, a), i(e)
                    }, r.o ? r.o = $.extend({}, s, c) : r.options = $.extend({}, s, c)
                }
            }), a.reverse()), i(a[0])
        }
    }(window.jQuery || window.Zepto || window, window, document)
});

//freewall
! function(a) {
    function f(c) {
        function l(b) {
            j.gutterX, j.gutterY;
            var f = j.cellH,
                g = j.cellW,
                k = a(b),
                l = k.find(k.attr("data-handle"));
            d.setDraggable(b, {
                handle: l[0],
                onStart: function(a) {
                    i.animate && d.transition && d.setTransition(this, ""), k.css("z-index", 9999).addClass("fw-float"), i.onBlockDrag.call(b, a)
                },
                onDrag: function(a) {
                    var d = k.position(),
                        e = Math.round(d.top / f),
                        l = Math.round(d.left / g),
                        m = Math.round(k.width() / g),
                        n = Math.round(k.height() / f);
                    e = Math.min(Math.max(0, e), j.limitRow - n), l = Math.min(Math.max(0, l), j.limitCol - m), h.setHoles({
                        top: e,
                        left: l,
                        width: m,
                        height: n
                    }), h.refresh(), i.onBlockMove.call(b, a)
                },
                onDrop: function(c) {
                    var d = k.position(),
                        e = Math.round(d.top / f),
                        l = Math.round(d.left / g),
                        m = Math.round(k.width() / g),
                        n = Math.round(k.height() / f);
                    e = Math.min(Math.max(0, e), j.limitRow - n), l = Math.min(Math.max(0, l), j.limitCol - m), k.removeClass("fw-float"), k.css({
                        zIndex: "auto",
                        top: e * f,
                        left: l * g
                    });
                    var o, p, q, r;
                    for (p = 0; n > p; ++p)
                        for (o = 0; m > o; ++o) q = p + e + "-" + (o + l), r = j.matrix[q], r && 1 != r && a("#" + r).removeAttr("data-position");
                    j.holes = {}, k.attr({
                        "data-width": k.width(),
                        "data-height": k.height(),
                        "data-position": e + "-" + l
                    }), h.refresh(), i.onBlockDrop.call(b, c)
                }
            })
        }
        var f = a(c);
        "static" == f.css("position") && f.css("position", "relative");
        var g = Number.MAX_VALUE,
            h = this;
        d.totalGrid += 1;
        var i = a.extend({}, d.defaultConfig),
            j = {
                arguments: null,
                blocks: {},
                events: {},
                matrix: {},
                holes: {},
                cellW: 0,
                cellH: 0,
                cellS: 1,
                filter: "",
                lastId: 0,
                length: 0,
                maxWoB: 0,
                maxHoB: 0,
                minWoB: g,
                minHoB: g,
                running: 0,
                gutterX: 15,
                gutterY: 15,
                totalCol: 0,
                totalRow: 0,
                limitCol: 666666,
                limitRow: 666666,
                sortFunc: null,
                keepOrder: !1
            };
        i.runtime = j, j.totalGrid = d.totalGrid;
        var k = document.body.style;
        d.transition || (null != k.webkitTransition || null != k.MozTransition || null != k.msTransition || null != k.OTransition || null != k.transition) && (d.transition = !0), a.extend(h, {
            addCustomEvent: function(a, b) {
                var c = j.events;
                return a = a.toLowerCase(), !c[a] && (c[a] = []), b.eid = c[a].length, c[a].push(b), this
            },
            appendBlock: function(b) {
                var c = a(b).appendTo(f),
                    g = null,
                    h = [];
                j.arguments && (a.isFunction(j.sortFunc) && c.sort(j.sortFunc), c.each(function(a, b) {
                    b.index = ++a, g = d.loadBlock(b, i), g && h.push(g)
                }), e[i.engine](h, i), d.setWallSize(j, f), j.length = c.length, c.each(function(a, b) {
                    d.showBlock(b, i), (i.draggable || b.getAttribute("data-draggable")) && l(b)
                }))
            },
            appendHoles: function(a) {
                var d, b = [].concat(a),
                    c = {};
                for (d = 0; d < b.length; ++d) c = b[d], j.holes[c.top + "-" + c.left + "-" + c.width + "-" + c.height] = c;
                return this
            },
            container: f,
            destroy: function() {
                var b = f.find(i.selector).removeAttr("id");
                b.each(function(b, c) {
                    $item = a(c);
                    var d = 1 * $item.attr("data-width") || "",
                        e = 1 * $item.attr("data-height") || "";
                    $item.width(d).height(e).css({
                        position: "static"
                    })
                })
            },
            fillHoles: function(a) {
                if (0 == arguments.length) j.holes = {};
                else {
                    var d, b = [].concat(a),
                        c = {};
                    for (d = 0; d < b.length; ++d) c = b[d], delete j.holes[c.top + "-" + c.left + "-" + c.width + "-" + c.height]
                }
                return this
            },
            filter: function(a) {
                return j.filter = a, j.arguments && this.refresh(), this
            },
            fireEvent: function(a, b, c) {
                var d = j.events;
                if (a = a.toLowerCase(), d[a] && d[a].length)
                    for (var e = 0; e < d[a].length; ++e) d[a][e].call(this, b, c);
                return this
            },
            fitHeight: function(a) {
                var a = a ? a : f.height() || b.height();
                this.fitZone("auto", a), j.arguments = arguments
            },
            fitWidth: function(a) {
                var a = a ? a : f.width() || b.width();
                this.fitZone(a, "auto"), j.arguments = arguments
            },
            fitZone: function(c, g) {
                var k = f.find(i.selector).removeAttr("id"),
                    m = null,
                    n = [];
                g = g ? g : f.height() || b.height(), c = c ? c : f.width() || b.width(), j.arguments = arguments, d.resetGrid(j), d.adjustUnit(c, g, i), j.filter ? (k.data("active", 0), k.filter(j.filter).data("active", 1)) : k.data("active", 1), a.isFunction(j.sortFunc) && k.sort(j.sortFunc), k.each(function(b, c) {
                    var e = a(c);
                    c.index = ++b, m = d.loadBlock(c, i), m && e.data("active") && n.push(m)
                }), h.fireEvent("onGridReady", f, i), e[i.engine](n, i), d.setWallSize(j, f), h.fireEvent("onGridArrange", f, i), j.length = k.length, k.each(function(a, b) {
                    d.showBlock(b, i), (i.draggable || b.getAttribute("data-draggable")) && l(b)
                })
            },
            fixPos: function(b) {
                return a(b.block).attr({
                    "data-position": b.top + "-" + b.left
                }), this
            },
            fixSize: function(b) {
                return null != b.height && a(b.block).attr({
                    "data-height": b.height
                }), null != b.width && a(b.block).attr({
                    "data-width": b.width
                }), this
            },
            prepend: function(a) {
                return f.prepend(a), j.arguments && this.refresh(), this
            },
            refresh: function() {
                var a = arguments.length ? arguments : j.arguments,
                    b = j.arguments,
                    c = b ? b.callee : this.fitWidth;
                return c.apply(this, Array.prototype.slice.call(a, 0)), this
            },
            reset: function(b) {
                return a.extend(i, b), this
            },
            setHoles: function(a) {
                var d, b = [].concat(a),
                    c = {};
                for (j.holes = {}, d = 0; d < b.length; ++d) c = b[d], j.holes[c.top + "-" + c.left + "-" + c.width + "-" + c.height] = c;
                return this
            },
            sortBy: function(a) {
                return j.sortFunc = a, j.arguments && this.refresh(), this
            },
            unFilter: function() {
                return delete j.filter, this.refresh(), this
            }
        }), f.attr("data-min-width", 80 * Math.floor(b.width() / 80));
        for (var m in d.plugin) d.plugin.hasOwnProperty(m) && d.plugin[m].call(h, i, f);
        b.resize(function() {
            j.running || (j.running = 1, setTimeout(function() {
                j.running = 0, i.onResize.call(h, f)
            }, 122), f.attr("data-min-width", 80 * Math.floor(b.width() / 80)))
        })
    }
    null == a.isNumeric && (a.isNumeric = function(a) {
        return null != a && a.constructor === Number
    }), null == a.isFunction && (a.isFunction = function(a) {
        return null != a && a instanceof Function
    });
    var b = a(window),
        c = a(document),
        d = {
            defaultConfig: {
                animate: !1,
                cellW: 100,
                cellH: 100,
                delay: 0,
                engine: "giot",
                fixSize: null,
                gutterX: 15,
                gutterY: 15,
                keepOrder: !1,
                selector: "> div",
                draggable: !1,
                cacheSize: !0,
                rightToLeft: !1,
                bottomToTop: !1,
                onGapFound: function() {},
                onComplete: function() {},
                onResize: function() {},
                onBlockDrag: function() {},
                onBlockMove: function() {},
                onBlockDrop: function() {},
                onBlockReady: function() {},
                onBlockFinish: function() {},
                onBlockActive: function() {},
                onBlockResize: function() {}
            },
            plugin: {},
            totalGrid: 1,
            transition: !1,
            loadBlock: function(b, c) {
                var d = c.runtime,
                    e = d.gutterX,
                    f = d.gutterY,
                    g = d.cellH,
                    h = d.cellW,
                    i = null,
                    j = a(b),
                    k = j.data("active"),
                    l = j.attr("data-position"),
                    m = parseInt(j.attr("data-fixSize")),
                    n = d.lastId++ + "-" + d.totalGrid;
                if (j.hasClass("fw-float")) return null;
                j.attr({
                    id: n,
                    "data-delay": b.index
                }), c.animate && this.transition && this.setTransition(b, ""), isNaN(m) && (m = null), null == m && (m = c.fixSize);
                var o = m ? "ceil" : "round";
                null == j.attr("data-height") && j.attr("data-height", j.height()), null == j.attr("data-width") && j.attr("data-width", j.width());
                var p = 1 * j.attr("data-height"),
                    q = 1 * j.attr("data-width");
                c.cacheSize || (b.style.width = "", q = j.width(), b.style.height = "", p = j.height());
                var r = q ? Math[o]((q + e) / h) : 0,
                    s = p ? Math[o]((p + f) / g) : 0;
                if (m || "auto" != c.cellH || (j.width(h * r - e), b.style.height = "", p = j.height(), s = p ? Math.round((p + f) / g) : 0), m || "auto" != c.cellW || (j.height(g * s - f), b.style.width = "", q = j.width(), r = q ? Math.round((q + e) / h) : 0), null != m && (r > d.limitCol || s > d.limitRow)) i = null;
                else if (s && s < d.minHoB && (d.minHoB = s), r && r < d.minWoB && (d.minWoB = r), s > d.maxHoB && (d.maxHoB = s), r > d.maxWoB && (d.maxWoB = r), 0 == q && (r = 0), 0 == p && (s = 0), i = {
                        resize: !1,
                        id: n,
                        width: r,
                        height: s,
                        fixSize: m
                    }, l) {
                    l = l.split("-"), i.y = 1 * l[0], i.x = 1 * l[1], i.width = null != m ? r : Math.min(r, d.limitCol - i.x), i.height = null != m ? s : Math.min(s, d.limitRow - i.y);
                    var t = i.y + "-" + i.x + "-" + i.width + "-" + i.height;
                    k ? (d.holes[t] = {
                        id: i.id,
                        top: i.y,
                        left: i.x,
                        width: i.width,
                        height: i.height
                    }, this.setBlock(i, c)) : delete d.holes[t]
                }
                return null == j.attr("data-state") ? j.attr("data-state", "init") : j.attr("data-state", "move"), c.onBlockReady.call(b, i, c), l && k ? null : i
            },
            setBlock: function(a, b) {
                var c = b.runtime,
                    d = c.gutterX,
                    e = c.gutterY,
                    f = a.height,
                    g = a.width,
                    h = c.cellH,
                    i = c.cellW,
                    j = a.x,
                    k = a.y;
                b.rightToLeft && (j = c.limitCol - j - g), b.bottomToTop && (k = c.limitRow - k - f);
                var l = {
                    fixSize: a.fixSize,
                    resize: a.resize,
                    top: k * h,
                    left: j * i,
                    width: i * g - d,
                    height: h * f - e
                };
                return l.top = 1 * l.top.toFixed(2), l.left = 1 * l.left.toFixed(2), l.width = 1 * l.width.toFixed(2), l.height = 1 * l.height.toFixed(2), a.id && (c.blocks[a.id] = l), l
            },
            showBlock: function(b, c) {
                function k() {
                    if (i && g.attr("data-state", "start"), c.animate && h.transition && h.setTransition(b, j), f) f.fixSize && (f.height = 1 * g.attr("data-height"), f.width = 1 * g.attr("data-width")), g.css({
                        opacity: 1,
                        width: f.width,
                        height: f.height
                    }), g[e]({
                        top: f.top,
                        left: f.left
                    }), null != g.attr("data-nested") && h.nestedGrid(b, c);
                    else {
                        var a = parseInt(b.style.height) || 0,
                            k = parseInt(b.style.width) || 0,
                            l = parseInt(b.style.left) || 0,
                            m = parseInt(b.style.top) || 0;
                        g[e]({
                            left: l + k / 2,
                            top: m + a / 2,
                            width: 0,
                            height: 0,
                            opacity: 0
                        })
                    }
                    d.length -= 1, c.onBlockFinish.call(b, f, c), 0 == d.length && c.onComplete.call(b, f, c)
                }
                var d = c.runtime,
                    e = c.animate && !this.transition ? "animate" : "css",
                    f = d.blocks[b.id],
                    g = a(b),
                    h = this,
                    i = "move" != g.attr("data-state"),
                    j = i ? "width 0.5s, height 0.5s" : "top 0.5s, left 0.5s, width 0.5s, height 0.5s, opacity 0.5s";
                b.delay && clearTimeout(b.delay), g.hasClass("fw-float") || (h.setTransition(b, ""), b.style.position = "absolute", c.onBlockActive.call(b, f, c), f && f.resize && c.onBlockResize.call(b, f, c), c.delay > 0 ? b.delay = setTimeout(k, c.delay * g.attr("data-delay")) : k())
            },
            nestedGrid: function(b, c) {
                var d, e = a(b),
                    g = c.runtime,
                    h = e.attr("data-gutterX") || c.gutterX,
                    i = e.attr("data-gutterY") || c.gutterY,
                    j = e.attr("data-method") || "fitZone",
                    k = e.attr("data-nested") || "> div",
                    l = e.attr("data-cellH") || c.cellH,
                    m = e.attr("data-cellW") || c.cellW,
                    n = g.blocks[b.id];
                if (n) switch (d = new f(e), d.reset({
                    cellH: l,
                    cellW: m,
                    gutterX: 1 * h,
                    gutterY: 1 * i,
                    selector: k,
                    cacheSize: !1
                }), j) {
                    case "fitHeight":
                        d[j](n.height);
                        break;
                    case "fitWidth":
                        d[j](n.width);
                        break;
                    case "fitZone":
                        d[j](n.width, n.height)
                }
            },
            adjustBlock: function(b, c) {
                var d = c.runtime,
                    e = d.gutterX,
                    f = d.gutterY,
                    g = a("#" + b.id),
                    h = d.cellH,
                    i = d.cellW;
                "auto" == c.cellH && (g.width(b.width * i - e), g[0].style.height = "", b.height = Math.round((g.height() + f) / h))
            },
            adjustUnit: function(b, c, d) {
                var e = d.gutterX,
                    f = d.gutterY,
                    g = d.runtime,
                    h = d.cellW,
                    i = d.cellH;
                if (a.isFunction(h) && (h = h(b)), h = 1 * h, !a.isNumeric(h) && (h = 1), a.isFunction(i) && (i = i(c)), i = 1 * i, !a.isNumeric(i) && (i = 1), a.isNumeric(b)) {
                    1 > h && (h *= b);
                    var j = Math.max(1, Math.floor(b / h));
                    a.isNumeric(e) || (e = (b - j * h) / Math.max(1, j - 1), e = Math.max(0, e)), j = Math.floor((b + e) / h), g.cellW = (b + e) / Math.max(j, 1), g.cellS = g.cellW / h, g.gutterX = e, g.limitCol = j
                }
                if (a.isNumeric(c)) {
                    1 > i && (i *= c);
                    var k = Math.max(1, Math.floor(c / i));
                    a.isNumeric(f) || (f = (c - k * i) / Math.max(1, k - 1), f = Math.max(0, f)), k = Math.floor((c + f) / i), g.cellH = (c + f) / Math.max(k, 1), g.cellS = g.cellH / i, g.gutterY = f, g.limitRow = k
                }
                a.isNumeric(b) || (1 > h && (h = g.cellH), g.cellW = 1 != h ? h * g.cellS : 1, g.gutterX = e, g.limitCol = 666666), a.isNumeric(c) || (1 > i && (i = g.cellW), g.cellH = 1 != i ? i * g.cellS : 1, g.gutterY = f, g.limitRow = 666666), g.keepOrder = d.keepOrder
            },
            resetGrid: function(a) {
                a.blocks = {}, a.length = 0, a.cellH = 0, a.cellW = 0, a.lastId = 1, a.matrix = {}, a.totalCol = 0, a.totalRow = 0
            },
            setDraggable: function(b, d) {
                var e = !1,
                    f = {
                        startX: 0,
                        startY: 0,
                        top: 0,
                        left: 0,
                        handle: null,
                        onDrop: function() {},
                        onDrag: function() {},
                        onStart: function() {}
                    };
                a(b).each(function() {
                    function l(a) {
                        return a.stopPropagation(), a = a.originalEvent, a.touches && (e = !0, a = a.changedTouches[0]), 2 != a.button && 3 != a.which && (b.onStart.call(h, a), b.startX = a.clientX, b.startY = a.clientY, b.top = parseInt(i.css("top")) || 0, b.left = parseInt(i.css("left")) || 0, c.bind("mouseup touchend", n), c.bind("mousemove touchmove", m)), !1
                    }

                    function m(a) {
                        a = a.originalEvent, e && (a = a.changedTouches[0]), i.css({
                            top: b.top - (b.startY - a.clientY),
                            left: b.left - (b.startX - a.clientX)
                        }), b.onDrag.call(h, a)
                    }

                    function n(a) {
                        a = a.originalEvent, e && (a = a.changedTouches[0]), b.onDrop.call(h, a), c.unbind("mouseup touchend", n), c.unbind("mousemove touchmove", m)
                    }
                    var b = a.extend({}, f, d),
                        g = b.handle || this,
                        h = this,
                        i = a(h),
                        j = a(g),
                        k = i.css("position");
                    "absolute" != k && i.css("position", "relative"), i.find("iframe, form, input, textarea, .ignore-drag").each(function() {
                        a(this).on("touchstart mousedown", function(a) {
                            a.stopPropagation()
                        })
                    }), c.unbind("mouseup touchend", n), c.unbind("mousemove touchmove", m), j.unbind("mousedown touchstart").bind("mousedown touchstart", l)
                })
            },
            setTransition: function(b, c) {
                var d = b.style,
                    e = a(b);
                !this.transition && e.stop ? e.stop() : null != d.webkitTransition ? d.webkitTransition = c : null != d.MozTransition ? d.MozTransition = c : null != d.msTransition ? d.msTransition = c : null != d.OTransition ? d.OTransition = c : d.transition = c
            },
            getFreeArea: function(a, b, c) {
                for (var d = Math.min(a + c.maxHoB, c.limitRow), e = Math.min(b + c.maxWoB, c.limitCol), f = e, g = d, h = c.matrix, i = a; g > i; ++i)
                    for (var j = b; e > j; ++j) h[i + "-" + j] && j > b && f > j && (f = j);
                for (var i = a; d > i; ++i)
                    for (var j = b; f > j; ++j) h[i + "-" + j] && i > a && g > i && (g = i);
                return {
                    top: a,
                    left: b,
                    width: f - b,
                    height: g - a
                }
            },
            setWallSize: function(a, b) {
                var c = a.totalRow,
                    d = a.totalCol,
                    e = a.gutterY,
                    f = a.gutterX,
                    g = a.cellH,
                    h = a.cellW,
                    i = Math.max(0, h * d - f),
                    j = Math.max(0, g * c - e);
                b.attr({
                    "data-total-col": d,
                    "data-total-row": c,
                    "data-wall-width": Math.ceil(i),
                    "data-wall-height": Math.ceil(j)
                }), a.limitCol < a.limitRow && !b.attr("data-height") && b.height(Math.ceil(j))
            }
        },
        e = {
            giot: function(a, b) {
                function u(a, b, c, d, e) {
                    for (var f = b; b + e > f;) {
                        for (var g = c; c + d > g;) n[f + "-" + g] = a, ++g > i && (i = g);
                        ++f > j && (j = f)
                    }
                }
                var c = b.runtime,
                    e = c.limitRow,
                    f = c.limitCol,
                    g = 0,
                    h = 0,
                    i = c.totalCol,
                    j = c.totalRow,
                    k = {},
                    l = c.holes,
                    m = null,
                    n = c.matrix,
                    o = Math.max(f, e),
                    p = null,
                    q = null,
                    r = e > f ? 1 : 0,
                    s = null,
                    t = Math.min(f, e);
                for (var v in l) l.hasOwnProperty(v) && u(l[v].id || !0, l[v].top, l[v].left, l[v].width, l[v].height);
                for (var w = 0; o > w && a.length; ++w) {
                    r ? h = w : g = w, s = null;
                    for (var x = 0; t > x && a.length; ++x)
                        if (m = null, r ? g = x : h = x, !c.matrix[h + "-" + g]) {
                            if (p = d.getFreeArea(h, g, c), null == b.fixSize) {
                                if (s && !r && c.minHoB > p.height) {
                                    s.height += p.height, s.resize = !0, u(s.id, s.y, s.x, s.width, s.height), d.setBlock(s, b);
                                    continue
                                }
                                if (s && r && c.minWoB > p.width) {
                                    s.width += p.width, s.resize = !0, u(s.id, s.y, s.x, s.width, s.height), d.setBlock(s, b);
                                    continue
                                }
                            }
                            if (c.keepOrder) m = a.shift(), m.resize = !0;
                            else {
                                for (var v = 0; v < a.length; ++v)
                                    if (!(a[v].height > p.height || a[v].width > p.width)) {
                                        m = a.splice(v, 1)[0];
                                        break
                                    }
                                if (null == m && null == b.fixSize)
                                    for (var v = 0; v < a.length; ++v)
                                        if (null == a[v].fixSize) {
                                            m = a.splice(v, 1)[0], m.resize = !0;
                                            break
                                        }
                            }
                            if (null != m) m.resize && (r ? (m.width = p.width, "auto" == b.cellH && d.adjustBlock(m, b), m.height = Math.min(m.height, p.height)) : (m.height = p.height, m.width = Math.min(m.width, p.width))), k[m.id] = {
                                id: m.id,
                                x: g,
                                y: h,
                                width: m.width,
                                height: m.height,
                                resize: m.resize,
                                fixSize: m.fixSize
                            }, s = k[m.id], u(s.id, s.y, s.x, s.width, s.height), d.setBlock(s, b);
                            else {
                                var q = {
                                    x: g,
                                    y: h,
                                    fixSize: 0
                                };
                                if (r) {
                                    q.width = p.width, q.height = 0;
                                    for (var y = g - 1, z = h; n[z + "-" + y];) n[z + "-" + g] = !0, q.height += 1, z += 1
                                } else {
                                    q.height = p.height, q.width = 0;
                                    for (var z = h - 1, y = g; n[z + "-" + y];) n[h + "-" + y] = !0, q.width += 1, y += 1
                                }
                                b.onGapFound(d.setBlock(q, b), b)
                            }
                        }
                }
                c.matrix = n, c.totalRow = j, c.totalCol = i
            }
        };
    f.addConfig = function(b) {
        a.extend(d.defaultConfig, b)
    }, f.createEngine = function(b) {
        a.extend(e, b)
    }, f.createPlugin = function(b) {
        a.extend(d.plugin, b)
    }, f.getMethod = function(a) {
        return d[a]
    }, window.Freewall = window.freewall = f
}(window.Zepto || window.jQuery);

/*!
 * Lightbox v2.8.1
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 */
! function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.lightbox = b(a.jQuery)
}(this, function(a) {
    function b(b) {
        this.album = [], this.currentImageIndex = void 0, this.init(), this.options = a.extend({}, this.constructor.defaults), this.option(b)
    }
    return b.defaults = {
        albumLabel: "Image %1 of %2",
        alwaysShowNavOnTouchDevices: !1,
        fadeDuration: 500,
        fitImagesInViewport: !0,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: !0,
        wrapAround: !1
    }, b.prototype.option = function(b) {
        a.extend(this.options, b)
    }, b.prototype.imageCountLabel = function(a, b) {
        return this.options.albumLabel.replace(/%1/g, a).replace(/%2/g, b)
    }, b.prototype.init = function() {
        this.enable(), this.build()
    }, b.prototype.enable = function() {
        var b = this;
        a("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(c) {
            return b.start(a(c.currentTarget)), !1
        })
    }, b.prototype.build = function() {
        var b = this;
        a('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(a("body")), this.$lightbox = a("#lightbox"), this.$overlay = a("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10), this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10), this.containerBottomPadding = parseInt(this.$container.css("padding-bottom"), 10), this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10), this.$overlay.hide().on("click", function() {
            return b.end(), !1
        }), this.$lightbox.hide().on("click", function(c) {
            return "lightbox" === a(c.target).attr("id") && b.end(), !1
        }), this.$outerContainer.on("click", function(c) {
            return "lightbox" === a(c.target).attr("id") && b.end(), !1
        }), this.$lightbox.find(".lb-prev").on("click", function() {
            return 0 === b.currentImageIndex ? b.changeImage(b.album.length - 1) : b.changeImage(b.currentImageIndex - 1), !1
        }), this.$lightbox.find(".lb-next").on("click", function() {
            return b.currentImageIndex === b.album.length - 1 ? b.changeImage(0) : b.changeImage(b.currentImageIndex + 1), !1
        }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function() {
            return b.end(), !1
        })
    }, b.prototype.start = function(b) {
        function c(a) {
            d.album.push({
                link: a.attr("href"),
                title: a.attr("data-title") || a.attr("title")
            })
        }
        var d = this,
            e = a(window);
        e.on("resize", a.proxy(this.sizeOverlay, this)), a("select, object, embed").css({
            visibility: "hidden"
        }), this.sizeOverlay(), this.album = [];
        var f, g = 0,
            h = b.attr("data-lightbox");
        if (h) {
            f = a(b.prop("tagName") + '[data-lightbox="' + h + '"]');
            for (var i = 0; i < f.length; i = ++i) c(a(f[i])), f[i] === b[0] && (g = i)
        } else if ("lightbox" === b.attr("rel")) c(b);
        else {
            f = a(b.prop("tagName") + '[rel="' + b.attr("rel") + '"]');
            for (var j = 0; j < f.length; j = ++j) c(a(f[j])), f[j] === b[0] && (g = j)
        }
        var k = e.scrollTop() + this.options.positionFromTop,
            l = e.scrollLeft();
        this.$lightbox.css({
            top: k + "px",
            left: l + "px"
        }).fadeIn(this.options.fadeDuration), this.changeImage(g)
    }, b.prototype.changeImage = function(b) {
        var c = this;
        this.disableKeyboardNav();
        var d = this.$lightbox.find(".lb-image");
        this.$overlay.fadeIn(this.options.fadeDuration), a(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
        var e = new Image;
        e.onload = function() {
            var f, g, h, i, j, k, l;
            d.attr("src", c.album[b].link), f = a(e), d.width(e.width), d.height(e.height), c.options.fitImagesInViewport && (l = a(window).width(), k = a(window).height(), j = l - c.containerLeftPadding - c.containerRightPadding - 20, i = k - c.containerTopPadding - c.containerBottomPadding - 120, c.options.maxWidth && c.options.maxWidth < j && (j = c.options.maxWidth), c.options.maxHeight && c.options.maxHeight < j && (i = c.options.maxHeight), (e.width > j || e.height > i) && (e.width / j > e.height / i ? (h = j, g = parseInt(e.height / (e.width / h), 10), d.width(h), d.height(g)) : (g = i, h = parseInt(e.width / (e.height / g), 10), d.width(h), d.height(g)))), c.sizeContainer(d.width(), d.height())
        }, e.src = this.album[b].link, this.currentImageIndex = b
    }, b.prototype.sizeOverlay = function() {
        this.$overlay.width(a(window).width()).height(a(document).height())
    }, b.prototype.sizeContainer = function(a, b) {
        function c() {
            d.$lightbox.find(".lb-dataContainer").width(g), d.$lightbox.find(".lb-prevLink").height(h), d.$lightbox.find(".lb-nextLink").height(h), d.showImage()
        }
        var d = this,
            e = this.$outerContainer.outerWidth(),
            f = this.$outerContainer.outerHeight(),
            g = a + this.containerLeftPadding + this.containerRightPadding,
            h = b + this.containerTopPadding + this.containerBottomPadding;
        e !== g || f !== h ? this.$outerContainer.animate({
            width: g,
            height: h
        }, this.options.resizeDuration, "swing", function() {
            c()
        }) : c()
    }, b.prototype.showImage = function() {
        this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn("slow"), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav()
    }, b.prototype.updateNav = function() {
        var a = !1;
        try {
            document.createEvent("TouchEvent"), a = this.options.alwaysShowNavOnTouchDevices ? !0 : !1
        } catch (b) {}
        this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (a && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), a && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), a && this.$lightbox.find(".lb-next").css("opacity", "1"))))
    }, b.prototype.updateDetails = function() {
        var b = this;
        if ("undefined" != typeof this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title && this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click", function(b) {
                void 0 !== a(this).attr("target") ? window.open(a(this).attr("href"), a(this).attr("target")) : location.href = a(this).attr("href")
            }), this.album.length > 1 && this.options.showImageNumberLabel) {
            var c = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find(".lb-number").text(c).fadeIn("fast")
        } else this.$lightbox.find(".lb-number").hide();
        this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() {
            return b.sizeOverlay()
        })
    }, b.prototype.preloadNeighboringImages = function() {
        if (this.album.length > this.currentImageIndex + 1) {
            var a = new Image;
            a.src = this.album[this.currentImageIndex + 1].link
        }
        if (this.currentImageIndex > 0) {
            var b = new Image;
            b.src = this.album[this.currentImageIndex - 1].link
        }
    }, b.prototype.enableKeyboardNav = function() {
        a(document).on("keyup.keyboard", a.proxy(this.keyboardAction, this))
    }, b.prototype.disableKeyboardNav = function() {
        a(document).off(".keyboard")
    }, b.prototype.keyboardAction = function(a) {
        var b = 27,
            c = 37,
            d = 39,
            e = a.keyCode,
            f = String.fromCharCode(e).toLowerCase();
        e === b || f.match(/x|o|c/) ? this.end() : "p" === f || e === c ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : ("n" === f || e === d) && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0))
    }, b.prototype.end = function() {
        this.disableKeyboardNav(), a(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), a("select, object, embed").css({
            visibility: "visible"
        })
    }, new b
});
//# sourceMappingURL=lightbox.min.map

/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.5.2
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2015, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof module && "object" == typeof module.exports ? require("jquery") : jQuery)
}(function(t) {
    function e() {
        var e = o.settings;
        if (e.autoDispose && !t.contains(document.documentElement, this)) return t(this).timeago("dispose"), this;
        var r = a(this);
        return isNaN(r.datetime) || (0 == e.cutoff || Math.abs(n(r.datetime)) < e.cutoff) && t(this).text(i(r.datetime)), this
    }

    function a(e) {
        if (e = t(e), !e.data("timeago")) {
            e.data("timeago", {
                datetime: o.datetime(e)
            });
            var a = t.trim(e.text());
            o.settings.localeTitle ? e.attr("title", e.data("timeago").datetime.toLocaleString()) : a.length <= 0 || o.isTime(e) && e.attr("title") || e.attr("title", a)
        }
        return e.data("timeago")
    }

    function i(t) {
        return o.inWords(n(t))
    }

    function n(t) {
        return (new Date).getTime() - t.getTime()
    }
    t.timeago = function(e) {
        return i(e instanceof Date ? e : "string" == typeof e ? t.timeago.parse(e) : "number" == typeof e ? new Date(e) : t.timeago.datetime(e))
    };
    var o = t.timeago;
    t.extend(t.timeago, {
        settings: {
            refreshMillis: 6e4,
            allowPast: !0,
            allowFuture: !1,
            localeTitle: !1,
            cutoff: 0,
            autoDispose: !0,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "ago",
                suffixFromNow: "from now",
                inPast: "any moment now",
                seconds: "less than a minute",
                minute: "about a minute",
                minutes: "%d minutes",
                hour: "about an hour",
                hours: "about %d hours",
                day: "a day",
                days: "%d days",
                month: "about a month",
                months: "%d months",
                year: "about a year",
                years: "%d years",
                wordSeparator: " ",
                numbers: []
            }
        },
        inWords: function(e) {
            function a(a, n) {
                var o = t.isFunction(a) ? a(n, e) : a,
                    r = i.numbers && i.numbers[n] || n;
                return o.replace(/%d/i, r)
            }
            if (!this.settings.allowPast && !this.settings.allowFuture) throw "timeago allowPast and allowFuture settings can not both be set to false.";
            var i = this.settings.strings,
                n = i.prefixAgo,
                o = i.suffixAgo;
            if (this.settings.allowFuture && 0 > e && (n = i.prefixFromNow, o = i.suffixFromNow), !this.settings.allowPast && e >= 0) return this.settings.strings.inPast;
            var r = Math.abs(e) / 1e3,
                s = r / 60,
                u = s / 60,
                m = u / 24,
                l = m / 365,
                d = 45 > r && a(i.seconds, Math.round(r)) || 90 > r && a(i.minute, 1) || 45 > s && a(i.minutes, Math.round(s)) || 90 > s && a(i.hour, 1) || 24 > u && a(i.hours, Math.round(u)) || 42 > u && a(i.day, 1) || 30 > m && a(i.days, Math.round(m)) || 45 > m && a(i.month, 1) || 365 > m && a(i.months, Math.round(m / 30)) || 1.5 > l && a(i.year, 1) || a(i.years, Math.round(l)),
                f = i.wordSeparator || "";
            return void 0 === i.wordSeparator && (f = " "), t.trim([n, d, o].join(f))
        },
        parse: function(e) {
            var a = t.trim(e);
            return a = a.replace(/\.\d+/, ""), a = a.replace(/-/, "/").replace(/-/, "/"), a = a.replace(/T/, " ").replace(/Z/, " UTC"), a = a.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), a = a.replace(/([\+\-]\d\d)$/, " $100"), new Date(a)
        },
        datetime: function(e) {
            var a = t(e).attr(o.isTime(e) ? "datetime" : "title");
            return o.parse(a)
        },
        isTime: function(e) {
            return "time" === t(e).get(0).tagName.toLowerCase()
        }
    });
    var r = {
        init: function() {
            var a = t.proxy(e, this);
            a();
            var i = o.settings;
            i.refreshMillis > 0 && (this._timeagoInterval = setInterval(a, i.refreshMillis))
        },
        update: function(a) {
            var i = a instanceof Date ? a : o.parse(a);
            t(this).data("timeago", {
                datetime: i
            }), o.settings.localeTitle && t(this).attr("title", i.toLocaleString()), e.apply(this)
        },
        updateFromDOM: function() {
            t(this).data("timeago", {
                datetime: o.parse(t(this).attr(o.isTime(this) ? "datetime" : "title"))
            }), e.apply(this)
        },
        dispose: function() {
            this._timeagoInterval && (window.clearInterval(this._timeagoInterval), this._timeagoInterval = null)
        }
    };
    t.fn.timeago = function(t, e) {
        var a = t ? r[t] : r.init;
        if (!a) throw Error("Unknown function name '" + t + "' for timeago");
        return this.each(function() {
            a.call(this, e)
        }), this
    }, document.createElement("abbr"), document.createElement("time")
});

/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : jQuery && !jQuery.fn.hoverIntent && e(jQuery)
}(function(e) {
    "use strict";
    var t, n, o = {
            interval: 100,
            sensitivity: 6,
            timeout: 0
        },
        i = 0,
        r = function(e) {
            t = e.pageX, n = e.pageY
        },
        u = function(e, o, i, v) {
            return Math.sqrt((i.pX - t) * (i.pX - t) + (i.pY - n) * (i.pY - n)) < v.sensitivity ? (o.off("mousemove.hoverIntent" + i.namespace, r), delete i.timeoutId, i.isActive = !0, delete i.pX, delete i.pY, v.over.apply(o[0], [e])) : (i.pX = t, i.pY = n, i.timeoutId = setTimeout(function() {
                u(e, o, i, v)
            }, v.interval), void 0)
        },
        v = function(e, t, n, o) {
            return delete t.data("hoverIntent")[n.id], o.apply(t[0], [e])
        };
    e.fn.hoverIntent = function(t, n, s) {
        var a = i++,
            d = e.extend({}, o);
        d = e.isPlainObject(t) ? e.extend(d, t) : e.isFunction(n) ? e.extend(d, {
            over: t,
            out: n,
            selector: s
        }) : e.extend(d, {
            over: t,
            out: t,
            selector: n
        });
        var m = function(t) {
            var n = e.extend({}, t),
                o = e(this),
                i = o.data("hoverIntent");
            i || o.data("hoverIntent", i = {});
            var s = i[a];
            s || (i[a] = s = {
                id: a
            }), s.timeoutId && (s.timeoutId = clearTimeout(s.timeoutId));
            var m = s.namespace = ".hoverIntent" + a;
            if ("mouseenter" === t.type) {
                if (s.isActive) return;
                s.pX = n.pageX, s.pY = n.pageY, o.on("mousemove.hoverIntent" + m, r), s.timeoutId = setTimeout(function() {
                    u(n, o, s, d)
                }, d.interval)
            } else {
                if (!s.isActive) return;
                o.off("mousemove.hoverIntent" + m, r), s.timeoutId = setTimeout(function() {
                    v(n, o, s, d.out)
                }, d.timeout)
            }
        };
        return this.on({
            "mouseenter.hoverIntent": m,
            "mouseleave.hoverIntent": m
        }, d.selector)
    }
});

/*! waitForImages jQuery Plugin 2015-06-02 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    var b = "waitForImages";
    a.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"],
        hasImageAttributes: ["srcset"]
    }, a.expr[":"]["has-src"] = function(b) {
        return a(b).is('img[src][src!=""]')
    }, a.expr[":"].uncached = function(b) {
        return a(b).is(":has-src") ? !b.complete : !1
    }, a.fn.waitForImages = function() {
        var c, d, e, f = 0,
            g = 0,
            h = a.Deferred();
        if (a.isPlainObject(arguments[0]) ? (e = arguments[0].waitForAll, d = arguments[0].each, c = arguments[0].finished) : 1 === arguments.length && "boolean" === a.type(arguments[0]) ? e = arguments[0] : (c = arguments[0], d = arguments[1], e = arguments[2]), c = c || a.noop, d = d || a.noop, e = !!e, !a.isFunction(c) || !a.isFunction(d)) throw new TypeError("An invalid callback was supplied.");
        return this.each(function() {
            var i = a(this),
                j = [],
                k = a.waitForImages.hasImageProperties || [],
                l = a.waitForImages.hasImageAttributes || [],
                m = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            e ? i.find("*").addBack().each(function() {
                var b = a(this);
                b.is("img:has-src") && j.push({
                    src: b.attr("src"),
                    element: b[0]
                }), a.each(k, function(a, c) {
                    var d, e = b.css(c);
                    if (!e) return !0;
                    for (; d = m.exec(e);) j.push({
                        src: d[2],
                        element: b[0]
                    })
                }), a.each(l, function(c, d) {
                    var e, f = b.attr(d);
                    return f ? (e = f.split(","), void a.each(e, function(c, d) {
                        d = a.trim(d).split(" ")[0], j.push({
                            src: d,
                            element: b[0]
                        })
                    })) : !0
                })
            }) : i.find("img:has-src").each(function() {
                j.push({
                    src: this.src,
                    element: this
                })
            }), f = j.length, g = 0, 0 === f && (c.call(i[0]), h.resolveWith(i[0])), a.each(j, function(e, j) {
                var k = new Image,
                    l = "load." + b + " error." + b;
                a(k).one(l, function m(b) {
                    var e = [g, f, "load" == b.type];
                    return g++, d.apply(j.element, e), h.notifyWith(j.element, e), a(this).off(l, m), g == f ? (c.call(i[0]), h.resolveWith(i[0]), !1) : void 0
                }), k.src = j.src
            })
        }), h.promise()
    }
});