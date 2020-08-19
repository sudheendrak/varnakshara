/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
var h, aa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    },
    ba = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    },
    ca = function(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    },
    da = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    },
    ea;
if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
else {
    var fa;
    a: {
        var ha = {
                $j: !0
            },
            ia = {};
        try {
            ia.__proto__ = ha;
            fa = ia.$j;
            break a
        } catch (a) {}
        fa = !1
    }
    ea = fa ? function(a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a
    } : null
}
var ja = ea,
    ka = function(a, b) {
        a.prototype = da(b.prototype);
        a.prototype.constructor = a;
        if (ja) ja(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.D = b.prototype
    },
    la = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                Pi: e,
                Gj: f
            }
        }
        return {
            Pi: -1,
            Gj: void 0
        }
    },
    ma = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a,
        b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    },
    na = function(a) {
        a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        return globalThis
    },
    oa = na(this),
    pa = function(a, b) {
        if (b) {
            var c = oa;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ma(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    };
pa("Array.prototype.findIndex", function(a) {
    return a ? a : function(b, c) {
        return la(this, b, c).Pi
    }
});
var qa = function(a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + ""
};
pa("String.prototype.endsWith", function(a) {
    return a ? a : function(b, c) {
        var d = qa(this, b, "endsWith");
        b += "";
        void 0 === c && (c = d.length);
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var e = b.length; 0 < e && 0 < c;)
            if (d[--c] != b[--e]) return !1;
        return 0 >= e
    }
});
pa("Array.prototype.find", function(a) {
    return a ? a : function(b, c) {
        return la(this, b, c).Gj
    }
});
pa("String.prototype.startsWith", function(a) {
    return a ? a : function(b, c) {
        var d = qa(this, b, "startsWith");
        b += "";
        var e = d.length,
            f = b.length;
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var g = 0; g < f && c < e;)
            if (d[c++] != b[g++]) return !1;
        return g >= f
    }
});
pa("String.prototype.repeat", function(a) {
    return a ? a : function(b) {
        var c = qa(this, null, "repeat");
        if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
        b |= 0;
        for (var d = ""; b;)
            if (b & 1 && (d += c), b >>>= 1) c += c;
        return d
    }
});
var ra = function() {
        ra = function() {};
        oa.Symbol || (oa.Symbol = sa)
    },
    ta = function(a, b) {
        this.a = a;
        ma(this, "description", {
            configurable: !0,
            writable: !0,
            value: b
        })
    };
ta.prototype.toString = function() {
    return this.a
};
var sa = function() {
        function a(c) {
            if (this instanceof a) throw new TypeError("Symbol is not a constructor");
            return new ta("jscomp_symbol_" + (c || "") + "_" + b++, c)
        }
        var b = 0;
        return a
    }(),
    va = function() {
        ra();
        var a = oa.Symbol.iterator;
        a || (a = oa.Symbol.iterator = oa.Symbol("Symbol.iterator"));
        "function" != typeof Array.prototype[a] && ma(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return ua(aa(this))
            }
        });
        va = function() {}
    },
    ua = function(a) {
        va();
        a = {
            next: a
        };
        a[oa.Symbol.iterator] = function() {
            return this
        };
        return a
    },
    wa = function(a, b) {
        va();
        a instanceof String && (a += "");
        var c = 0,
            d = {
                next: function() {
                    if (c < a.length) {
                        var e = c++;
                        return {
                            value: b(e, a[e]),
                            done: !1
                        }
                    }
                    d.next = function() {
                        return {
                            done: !0,
                            value: void 0
                        }
                    };
                    return d.next()
                }
            };
        d[Symbol.iterator] = function() {
            return d
        };
        return d
    };
pa("Array.prototype.keys", function(a) {
    return a ? a : function() {
        return wa(this, function(b) {
            return b
        })
    }
});
pa("Array.prototype.values", function(a) {
    return a ? a : function() {
        return wa(this, function(b, c) {
            return c
        })
    }
});
pa("Array.from", function(a) {
    return a ? a : function(b, c, d) {
        c = null != c ? c : function(k) {
            return k
        };
        var e = [],
            f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
        if ("function" == typeof f) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
        } else
            for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
        return e
    }
});
pa("Object.is", function(a) {
    return a ? a : function(b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
    }
});
pa("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});
pa("String.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        return -1 !== qa(this, b, "includes").indexOf(b, c || 0)
    }
});
var xa = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
pa("WeakMap", function(a) {
    function b() {}

    function c(l) {
        var m = typeof l;
        return "object" === m && null !== l || "function" === m
    }

    function d(l) {
        if (!xa(l, f)) {
            var m = new b;
            ma(l, f, {
                value: m
            })
        }
    }

    function e(l) {
        var m = Object[l];
        m && (Object[l] = function(q) {
            if (q instanceof b) return q;
            d(q);
            return m(q)
        })
    }
    if (function() {
            if (!a || !Object.seal) return !1;
            try {
                var l = Object.seal({}),
                    m = Object.seal({}),
                    q = new a([
                        [l, 2],
                        [m, 3]
                    ]);
                if (2 != q.get(l) || 3 != q.get(m)) return !1;
                q.delete(l);
                q.set(m, 4);
                return !q.has(l) && 4 == q.get(m)
            } catch (r) {
                return !1
            }
        }()) return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var g = 0,
        k = function(l) {
            this.qa = (g += Math.random() + 1).toString();
            if (l) {
                l = ba(l);
                for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
            }
        };
    k.prototype.set = function(l, m) {
        if (!c(l)) throw Error("Invalid WeakMap key");
        d(l);
        if (!xa(l, f)) throw Error("WeakMap key fail: " + l);
        l[f][this.qa] = m;
        return this
    };
    k.prototype.get = function(l) {
        return c(l) && xa(l, f) ? l[f][this.qa] : void 0
    };
    k.prototype.has = function(l) {
        return c(l) && xa(l, f) && xa(l[f],
            this.qa)
    };
    k.prototype.delete = function(l) {
        return c(l) && xa(l, f) && xa(l[f], this.qa) ? delete l[f][this.qa] : !1
    };
    return k
});
pa("Map", function(a) {
    if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var k = Object.seal({
                        x: 4
                    }),
                    l = new a(ba([
                        [k, "s"]
                    ]));
                if ("s" != l.get(k) || 1 != l.size || l.get({
                        x: 4
                    }) || l.set({
                        x: 4
                    }, "t") != l || 2 != l.size) return !1;
                var m = l.entries(),
                    q = m.next();
                if (q.done || q.value[0] != k || "s" != q.value[1]) return !1;
                q = m.next();
                return q.done || 4 != q.value[0].x || "t" != q.value[1] || !m.next().done ? !1 : !0
            } catch (r) {
                return !1
            }
        }()) return a;
    va();
    var b = new WeakMap,
        c = function(k) {
            this.b = {};
            this.a =
                f();
            this.size = 0;
            if (k) {
                k = ba(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        };
    c.prototype.set = function(k, l) {
        k = 0 === k ? 0 : k;
        var m = d(this, k);
        m.list || (m.list = this.b[m.id] = []);
        m.qb ? m.qb.value = l : (m.qb = {
            next: this.a,
            Lc: this.a.Lc,
            head: this.a,
            key: k,
            value: l
        }, m.list.push(m.qb), this.a.Lc.next = m.qb, this.a.Lc = m.qb, this.size++);
        return this
    };
    c.prototype.delete = function(k) {
        k = d(this, k);
        return k.qb && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this.b[k.id], k.qb.Lc.next = k.qb.next, k.qb.next.Lc = k.qb.Lc,
            k.qb.head = null, this.size--, !0) : !1
    };
    c.prototype.clear = function() {
        this.b = {};
        this.a = this.a.Lc = f();
        this.size = 0
    };
    c.prototype.has = function(k) {
        return !!d(this, k).qb
    };
    c.prototype.get = function(k) {
        return (k = d(this, k).qb) && k.value
    };
    c.prototype.entries = function() {
        return e(this, function(k) {
            return [k.key, k.value]
        })
    };
    c.prototype.keys = function() {
        return e(this, function(k) {
            return k.key
        })
    };
    c.prototype.values = function() {
        return e(this, function(k) {
            return k.value
        })
    };
    c.prototype.forEach = function(k, l) {
        for (var m = this.entries(),
                q; !(q = m.next()).done;) q = q.value, k.call(l, q[1], q[0], this)
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function(k, l) {
            var m = l && typeof l;
            "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++g, b.set(l, m)) : m = "p_" + l;
            var q = k.b[m];
            if (q && xa(k.b, m))
                for (k = 0; k < q.length; k++) {
                    var r = q[k];
                    if (l !== l && r.key !== r.key || l === r.key) return {
                        id: m,
                        list: q,
                        index: k,
                        qb: r
                    }
                }
            return {
                id: m,
                list: q,
                index: -1,
                qb: void 0
            }
        },
        e = function(k, l) {
            var m = k.a;
            return ua(function() {
                if (m) {
                    for (; m.head != k.a;) m = m.Lc;
                    for (; m.next != m.head;) return m =
                        m.next, {
                            done: !1,
                            value: l(m)
                        };
                    m = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        },
        f = function() {
            var k = {};
            return k.Lc = k.next = k.head = k
        },
        g = 0;
    return c
});
pa("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) xa(b, d) && c.push([d, b[d]]);
        return c
    }
});
pa("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) xa(b, d) && c.push(b[d]);
        return c
    }
});
var ya = "function" == typeof Object.assign ? Object.assign : function(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (d)
            for (var e in d) xa(d, e) && (a[e] = d[e])
    }
    return a
};
pa("Object.assign", function(a) {
    return a || ya
});
var za = za || {},
    n = this || self,
    Aa = function(a, b) {
        a = a.split(".");
        var c = n;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    },
    Da = function(a) {
        if (a && a != n) return Ba(a.document);
        null === Ca && (Ca = Ba(n.document));
        return Ca
    },
    Ea = /^[\w+/_-]+[=]{0,2}$/,
    Ca = null,
    Ba = function(a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Ea.test(a) ? a :
            ""
    },
    Fa = function(a, b) {
        a = a.split(".");
        b = b || n;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    },
    Ga = function() {},
    Ha = function(a) {
        a.eh = void 0;
        a.M = function() {
            return a.eh ? a.eh : a.eh = new a
        }
    },
    Ka = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable &&
                    !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    },
    La = function(a) {
        return "array" == Ka(a)
    },
    Ma = function(a) {
        var b = Ka(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    },
    Na = function(a) {
        return "function" == Ka(a)
    },
    Oa = function(a) {
        var b = typeof a;
        return "object" == b && null !=
            a || "function" == b
    },
    Ra = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Pa) && a[Pa] || (a[Pa] = ++Qa)
    },
    Pa = "closure_uid_" + (1E9 * Math.random() >>> 0),
    Qa = 0,
    Sa = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    },
    Ta = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    },
    p = function(a, b, c) {
        Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf("native code") ? p = Sa : p = Ta;
        return p.apply(null, arguments)
    },
    Ua = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    },
    Va = Date.now || function() {
        return +new Date
    },
    t = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.D = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
var Wa = function(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Wa);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
t(Wa, Error);
Wa.prototype.name = "CustomError";
var Xa;
var Ya = function(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    Wa.call(this, c + a[d])
};
t(Ya, Wa);
Ya.prototype.name = "AssertionError";
var Za = function(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else a && (e += ": " + a, f = b);
        throw new Ya("" + e, f || []);
    },
    v = function(a, b, c) {
        a || Za("", null, b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    $a = function(a, b) {
        throw new Ya("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    },
    ab = function(a, b, c) {
        "number" !== typeof a && Za("Expected number but got %s: %s.", [Ka(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    bb = function(a, b, c) {
        "string" !== typeof a && Za("Expected string but got %s: %s.",
            [Ka(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    cb = function(a, b, c) {
        Na(a) || Za("Expected function but got %s: %s.", [Ka(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    db = function(a, b, c) {
        Oa(a) || Za("Expected object but got %s: %s.", [Ka(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    eb = function(a, b, c) {
        La(a) || Za("Expected array but got %s: %s.", [Ka(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    fb = function(a, b, c) {
        "boolean" !== typeof a && Za("Expected boolean but got %s: %s.",
            [Ka(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    gb = function(a, b, c) {
        Oa(a) && 1 == a.nodeType || Za("Expected Element but got %s: %s.", [Ka(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    ib = function(a, b, c, d) {
        a instanceof b || Za("Expected instanceof %s but got %s.", [hb(b), hb(a)], c, Array.prototype.slice.call(arguments, 3));
        return a
    },
    hb = function(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name ||
            Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
var lb = function(a) {
        var b = jb(a);
        b && (!a || !(a instanceof b.Location) && a instanceof b.Element) && $a("Argument is not a Location (or a non-Element mock); got: %s", kb(a))
    },
    mb = function(a, b) {
        var c = jb(a);
        c && "undefined" != typeof c[b] && (a && (a instanceof c[b] || !(a instanceof c.Location || a instanceof c.Element)) || $a("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, kb(a)))
    },
    kb = function(a) {
        if (Oa(a)) try {
            return a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
        } catch (b) {
            return "<object could not be stringified>"
        } else return void 0 ===
            a ? "undefined" : null === a ? "null" : typeof a
    },
    jb = function(a) {
        try {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c || n;
            if (c.Element && c.Location) return c
        } catch (d) {}
        return null
    };
var nb = function() {
        return null
    },
    ob = function(a) {
        var b = b || 0;
        return function() {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    },
    pb = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
var qb = function(a) {
        return a[a.length - 1]
    },
    rb = Array.prototype.indexOf ? function(a, b) {
        v(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    w = Array.prototype.forEach ? function(a, b, c) {
        v(null != a.length);
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c,
            e[f], f, a)
    },
    sb = Array.prototype.filter ? function(a, b) {
        v(null != a.length);
        return Array.prototype.filter.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var k = f[g];
                b.call(void 0, k, g, a) && (d[e++] = k)
            } return d
    },
    tb = Array.prototype.map ? function(a, b, c) {
        v(null != a.length);
        return Array.prototype.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    },
    ub = Array.prototype.reduce ? function(a, b, c) {
        v(null != a.length);
        return Array.prototype.reduce.call(a, b, c)
    } : function(a, b, c) {
        var d = c;
        w(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    },
    vb = Array.prototype.some ? function(a, b) {
        v(null != a.length);
        return Array.prototype.some.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    },
    wb = Array.prototype.every ? function(a, b) {
        v(null != a.length);
        return Array.prototype.every.call(a,
            b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && !b.call(void 0, d[e], e, a)) return !1;
        return !0
    },
    xb = function(a, b) {
        var c = 0;
        w(a, function(d, e, f) {
            b.call(void 0, d, e, f) && ++c
        }, void 0);
        return c
    },
    yb = function(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                } b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    },
    zb = function(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length -
                    1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                } b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    },
    Ab = function(a, b) {
        return 0 <= rb(a, b)
    },
    Bb = function(a, b) {
        Ab(a, b) || a.push(b)
    },
    Db = function(a, b) {
        b = rb(a, b);
        var c;
        (c = 0 <= b) && Cb(a, b);
        return c
    },
    Cb = function(a, b) {
        v(null != a.length);
        Array.prototype.splice.call(a, b, 1)
    },
    Eb = function(a) {
        return Array.prototype.concat.apply([], arguments)
    },
    Fb = function(a) {
        return Array.prototype.concat.apply([], arguments)
    },
    Gb = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c =
                    Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    },
    Hb = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (Ma(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    },
    Jb = function(a, b, c, d) {
        v(null != a.length);
        Array.prototype.splice.apply(a, Ib(arguments, 1))
    },
    Ib = function(a, b, c) {
        v(null != a.length);
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    },
    Kb = function(a, b) {
        return Eb.apply([], tb(a, b, void 0))
    };
var Lb = function(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    },
    Mb = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    },
    Nb = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    },
    Ob = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    },
    Pb = function(a, b) {
        return null !== a && b in a
    },
    Qb = function(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    },
    Sb = function() {
        var a = Rb,
            b;
        for (b in a) return !1;
        return !0
    },
    Tb = function(a, b, c) {
        if (null !== a && b in a) throw Error('The object already contains the key "' +
            b + '"');
        a[b] = c
    },
    Ub = function(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    },
    Vb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    Wb = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Vb.length; f++) c = Vb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    },
    Xb = function(a) {
        var b = arguments.length;
        if (1 == b && La(arguments[0])) return Xb.apply(null, arguments[0]);
        if (b % 2) throw Error("Uneven number of arguments");
        for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
        return c
    },
    Yb = function(a) {
        var b = arguments.length;
        if (1 == b && La(arguments[0])) return Yb.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
        return c
    };
var Zb = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};
var bc = function(a, b) {
    this.a = a === $b && b || "";
    this.b = ac
};
bc.prototype.uc = !0;
bc.prototype.ub = function() {
    return this.a
};
bc.prototype.toString = function() {
    return "Const{" + this.a + "}"
};
var cc = function(a) {
        if (a instanceof bc && a.constructor === bc && a.b === ac) return a.a;
        $a("expected object of type Const, got '" + a + "'");
        return "type_error:Const"
    },
    dc = function(a) {
        return new bc($b, a)
    },
    ac = {},
    $b = {},
    ec = dc("");
var fc = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
    gc = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/,
    hc = /^http:\/\/.*/,
    ic = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i,
    jc = function(a) {
        return ic.test(a)
    },
    kc = /\s+/,
    lc = /[\d\u06f0-\u06f9]/,
    mc = function(a) {
        var b = 0,
            c = 0,
            d = !1;
        a = a.split(kc);
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            gc.test(f) ? (b++, c++) : hc.test(f) ? d = !0 : fc.test(f) ? c++ : lc.test(f) && (d = !0)
        }
        return -1 == (0 == c ? d ? 1 : 0 : .4 < b / c ? -1 : 1)
    };
var pc = function(a, b) {
    this.a = a === nc && b || "";
    this.b = oc
};
h = pc.prototype;
h.uc = !0;
h.ub = function() {
    return this.a.toString()
};
h.ah = !0;
h.Vc = function() {
    return 1
};
h.toString = function() {
    return "TrustedResourceUrl{" + this.a + "}"
};
var rc = function(a) {
        return qc(a).toString()
    },
    qc = function(a) {
        if (a instanceof pc && a.constructor === pc && a.b === oc) return a.a;
        $a("expected object of type TrustedResourceUrl, got '" + a + "' of type " + Ka(a));
        return "type_error:TrustedResourceUrl"
    },
    sc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    oc = {},
    tc = function(a) {
        return new pc(nc, a)
    },
    uc = function(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c) {
            var e = c[d];
            e = La(e) ? e : [e];
            for (var f = 0; f < e.length; f++) {
                var g = e[f];
                null != g && (b ||
                    (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
            }
        }
        return b
    },
    nc = {};
var vc = function(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    },
    wc = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    },
    xc = function(a) {
        return /^[\s\xa0]*$/.test(a)
    },
    yc = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    },
    zc = function(a, b) {
        a = String(a).toLowerCase();
        b = String(b).toLowerCase();
        return a < b ? -1 : a == b ? 0 : 1
    },
    Ac = function(a) {
        return a.replace(/(\r\n|\r|\n)/g, "<br>")
    },
    Ic = function(a, b) {
        if (b) a = a.replace(Bc, "&amp;").replace(Cc, "&lt;").replace(Dc,
            "&gt;").replace(Ec, "&quot;").replace(Fc, "&#39;").replace(Gc, "&#0;");
        else {
            if (!Hc.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Bc, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Cc, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Dc, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ec, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Fc, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Gc, "&#0;"))
        }
        return a
    },
    Bc = /&/g,
    Cc = /</g,
    Dc = />/g,
    Ec = /"/g,
    Fc = /'/g,
    Gc = /\x00/g,
    Hc = /[\x00&<>"']/,
    Jc = function(a, b) {
        return -1 != a.indexOf(b)
    },
    Lc = function(a,
        b) {
        var c = 0;
        a = yc(String(a)).split(".");
        b = yc(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = Kc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Kc(0 == f[2].length, 0 == g[2].length) || Kc(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    },
    Kc = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
var Oc = function(a, b) {
    this.a = a === Mc && b || "";
    this.b = Nc
};
h = Oc.prototype;
h.uc = !0;
h.ub = function() {
    return this.a.toString()
};
h.ah = !0;
h.Vc = function() {
    return 1
};
h.toString = function() {
    return "SafeUrl{" + this.a + "}"
};
var Pc = function(a) {
        if (a instanceof Oc && a.constructor === Oc && a.b === Nc) return a.a;
        $a("expected object of type SafeUrl, got '" + a + "' of type " + Ka(a));
        return "type_error:SafeUrl"
    },
    Qc = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,
    Rc = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,
    Sc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Tc = function(a) {
        if (a instanceof Oc) return a;
        a = "object" == typeof a && a.uc ? a.ub() : String(a);
        Sc.test(a) || (a = "about:invalid#zClosurez");
        return new Oc(Mc, a)
    },
    Uc = function(a, b) {
        if (a instanceof Oc) return a;
        a = "object" == typeof a && a.uc ? a.ub() : String(a);
        if (b && /^data:/i.test(a)) {
            b = a.replace(/(%0A|%0D)/g, "");
            var c = b.match(Rc);
            c = c && Qc.test(c[1]);
            b = new Oc(Mc, c ? b : "about:invalid#zClosurez");
            if (b.ub() == a) return b
        }
        v(Sc.test(a), "%s does not match the safe URL pattern", a) || (a = "about:invalid#zClosurez");
        return new Oc(Mc, a)
    },
    Nc = {},
    Mc = {};
var Xc = function() {
    this.a = "";
    this.b = Vc
};
Xc.prototype.uc = !0;
var Vc = {};
Xc.prototype.ub = function() {
    return this.a
};
Xc.prototype.toString = function() {
    return "SafeStyle{" + this.a + "}"
};
var Yc = function(a) {
        if (a instanceof Xc && a.constructor === Xc && a.b === Vc) return a.a;
        $a("expected object of type SafeStyle, got '" + a + "' of type " + Ka(a));
        return "type_error:SafeStyle"
    },
    Zc = function(a) {
        var b = new Xc;
        b.a = a;
        return b
    },
    $c = Zc(""),
    bd = function(a) {
        var b = "",
            c;
        for (c in a) {
            if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
            var d = a[c];
            null != d && (d = La(d) ? tb(d, ad).join(" ") : ad(d), b += c + ":" + d + ";")
        }
        return b ? Zc(b) : $c
    },
    ad = function(a) {
        if (a instanceof Oc) return 'url("' + Pc(a).replace(/</g,
            "%3c").replace(/[\\"]/g, "\\$&") + '")';
        a = a instanceof bc ? cc(a) : cd(String(a));
        if (/[{;}]/.test(a)) throw new Ya("Value does not allow [{;}], got: %s.", [a]);
        return a
    },
    cd = function(a) {
        var b = a.replace(dd, "$1").replace(dd, "$1").replace(ed, "url");
        if (fd.test(b)) {
            if (gd.test(a)) return $a("String value disallows comments, got: " + a), "zClosurez";
            for (var c = b = !0, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                "'" == e && c ? b = !b : '"' == e && b && (c = !c)
            }
            if (!b || !c) return $a("String value requires balanced quotes, got: " + a), "zClosurez";
            if (!hd(a)) return $a("String value requires balanced square brackets and one identifier per pair of brackets, got: " +
                a), "zClosurez"
        } else return $a("String value allows only [-,.\"'%_!# a-zA-Z0-9\\[\\]] and simple functions, got: " + a), "zClosurez";
        return id(a)
    },
    hd = function(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    },
    fd = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
    ed = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    dd = /\b(calc|cubic-bezier|fit-content|hsl|hsla|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
    gd = /\/\*/,
    id = function(a) {
        return a.replace(ed, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, k, l) {
                f = k;
                return l
            });
            b = Tc(d).ub();
            return c + f + b + f + e
        })
    };
var kd = function() {
    this.a = "";
    this.b = jd
};
kd.prototype.uc = !0;
var jd = {},
    md = function(a, b) {
        if (Jc(a, "<")) throw Error("Selector does not allow '<', got: " + a);
        var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
        a: {
            for (var d = {
                    "(": ")",
                    "[": "]"
                }, e = [], f = 0; f < c.length; f++) {
                var g = c[f];
                if (d[g]) e.push(d[g]);
                else if (Qb(d, g) && e.pop() != g) {
                    c = !1;
                    break a
                }
            }
            c = 0 == e.length
        }
        if (!c) throw Error("() and [] in selector must be balanced, got: " + a);
        b instanceof Xc || (b = bd(b));
        a = a + "{" + Yc(b).replace(/</g, "\\3C ") + "}";
        return ld(a)
    },
    od = function(a) {
        var b = "",
            c = function(d) {
                La(d) ? w(d, c) : b += nd(d)
            };
        w(arguments, c);
        return ld(b)
    };
kd.prototype.ub = function() {
    return this.a
};
kd.prototype.toString = function() {
    return "SafeStyleSheet{" + this.a + "}"
};
var nd = function(a) {
        if (a instanceof kd && a.constructor === kd && a.b === jd) return a.a;
        $a("expected object of type SafeStyleSheet, got '" + a + "' of type " + Ka(a));
        return "type_error:SafeStyleSheet"
    },
    ld = function(a) {
        var b = new kd;
        b.a = a;
        return b
    },
    pd = ld("");
var qd;
a: {
    var rd = n.navigator;
    if (rd) {
        var sd = rd.userAgent;
        if (sd) {
            qd = sd;
            break a
        }
    }
    qd = ""
}
var x = function(a) {
        return Jc(qd, a)
    },
    td = function(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
var ud = function() {
        return x("Trident") || x("MSIE")
    },
    vd = function() {
        return x("Firefox") || x("FxiOS")
    },
    xd = function() {
        return x("Safari") && !(wd() || x("Coast") || x("Opera") || x("Edge") || x("Edg/") || x("OPR") || vd() || x("Silk") || x("Android"))
    },
    wd = function() {
        return (x("Chrome") || x("CriOS")) && !x("Edge")
    },
    yd = function() {
        function a(e) {
            e = yb(e, d);
            return c[e] || ""
        }
        var b = qd;
        if (!ud()) {
            b = td(b);
            var c = {};
            w(b, function(e) {
                c[e[0]] = e[1]
            });
            var d = Ua(Pb, c);
            x("Opera") ? a(["Version", "Opera"]) : x("Edge") ? a(["Edge"]) : x("Edg/") ? a(["Edg"]) : wd() &&
                a(["Chrome", "CriOS", "HeadlessChrome"])
        }
    };
var Ad = function() {
    this.a = "";
    this.c = zd;
    this.b = null
};
h = Ad.prototype;
h.ah = !0;
h.Vc = function() {
    return this.b
};
h.uc = !0;
h.ub = function() {
    return this.a.toString()
};
h.toString = function() {
    return "SafeHtml{" + this.a + "}"
};
var Cd = function(a) {
        return Bd(a).toString()
    },
    Bd = function(a) {
        if (a instanceof Ad && a.constructor === Ad && a.c === zd) return a.a;
        $a("expected object of type SafeHtml, got '" + a + "' of type " + Ka(a));
        return "type_error:SafeHtml"
    },
    Ed = function(a) {
        if (a instanceof Ad) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.ah && (c = a.Vc());
        return Dd(Ic(b && a.uc ? a.ub() : String(a)), c)
    },
    Fd = function(a) {
        if (a instanceof Ad) return a;
        a = Ed(a);
        return Dd(Ac(Cd(a)), a.Vc())
    },
    Gd = /^[a-zA-Z0-9-]+$/,
    Id = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    },
    Jd = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    },
    Ld = function(a, b, c) {
        var d = String(a);
        if (!Gd.test(d)) throw Error("Invalid tag name <" + d + ">.");
        if (d.toUpperCase() in Jd) throw Error("Tag name <" + d + "> is not allowed for SafeHtml.");
        return Kd(String(a), b, c)
    },
    Nd = function(a) {
        var b = Ed(Md),
            c = b.Vc(),
            d = [],
            e = function(f) {
                La(f) ? w(f, e) : (f = Ed(f), d.push(Cd(f)), f = f.Vc(), 0 == c ? c = f : 0 != f && c != f && (c = null))
            };
        w(a, e);
        return Dd(d.join(Cd(b)),
            c)
    },
    Od = function(a) {
        return Nd(Array.prototype.slice.call(arguments))
    },
    zd = {},
    Dd = function(a, b) {
        return Pd(a, b)
    },
    Pd = function(a, b) {
        var c = new Ad;
        c.a = a;
        c.b = b;
        return c
    },
    Kd = function(a, b, c) {
        var d = null,
            e = "";
        if (b)
            for (l in b) {
                if (!Gd.test(l)) throw Error('Invalid attribute name "' + l + '".');
                var f = b[l];
                if (null != f) {
                    var g = a;
                    var k = l;
                    if (f instanceof bc) f = cc(f);
                    else if ("style" == k.toLowerCase()) {
                        if (!Oa(f)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof f + " given: " + f);
                        f instanceof Xc || (f = bd(f));
                        f = Yc(f)
                    } else {
                        if (/^on/i.test(k)) throw Error('Attribute "' + k + '" requires goog.string.Const value, "' + f + '" given.');
                        if (k.toLowerCase() in Id)
                            if (f instanceof pc) f = rc(f);
                            else if (f instanceof Oc) f = Pc(f);
                        else if ("string" === typeof f) f = Tc(f).ub();
                        else throw Error('Attribute "' + k + '" on tag "' + g + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + f + '" given.');
                    }
                    f.uc && (f = f.ub());
                    v("string" === typeof f || "number" === typeof f, "String or number value expected, got " + typeof f +
                        " with value: " + f);
                    k = k + '="' + Ic(String(f)) + '"';
                    e += " " + k
                }
            }
        var l = "<" + a + e;
        null == c ? c = [] : La(c) || (c = [c]);
        !0 === Zb[a.toLowerCase()] ? (v(!c.length, "Void tag <" + a + "> does not allow content."), l += ">") : (d = Od(c), l += ">" + Cd(d) + "</" + a + ">", d = d.Vc());
        (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
        return Pd(l, d)
    };
Pd("<!DOCTYPE html>", 0);
var Md = Pd("", 0),
    Qd = Pd("<br>", 0);
var Rd = function(a, b, c) {
        bb(cc(a), "must provide justification");
        v(!xc(cc(a)), "must provide non-empty justification");
        return Pd(b, c || null)
    },
    Sd = function(a) {
        var b = dc("Output of CSS sanitizer");
        bb(cc(b), "must provide justification");
        v(!xc(cc(b)), "must provide non-empty justification");
        return Zc(a)
    };
var Td = {
        MATH: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    },
    Ud = pb(function() {
        if ("undefined" === typeof document) return !1;
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        if (!a.firstChild) return !1;
        b = a.firstChild.firstChild;
        a.innerHTML = Bd(Md);
        return !b.parentElement
    }),
    Vd = function(a, b) {
        if (Ud())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Bd(b)
    },
    Wd = function(a, b) {
        if (Td[a.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " +
            a.tagName + ".");
        Vd(a, b)
    },
    Xd = function(a, b) {
        mb(a, "HTMLAnchorElement");
        b = b instanceof Oc ? b : Uc(b);
        a.href = Pc(b)
    },
    Yd = function(a, b) {
        mb(a, "HTMLIFrameElement");
        a.src = rc(b)
    },
    Zd = function(a, b) {
        mb(a, "HTMLScriptElement");
        a.src = qc(b);
        (b = Da()) && a.setAttribute("nonce", b)
    },
    $d = function(a, b) {
        lb(a);
        b = b instanceof Oc ? b : Uc(b);
        a.href = Pc(b)
    },
    ae = function(a, b) {
        lb(a);
        b = b instanceof Oc ? b : Uc(b);
        a.replace(Pc(b))
    },
    be = function(a, b, c) {
        a = a instanceof Oc ? a : Uc(a);
        (b || n).open(Pc(a), c ? cc(c) : "", void 0, void 0)
    };
var ce = function(a) {
        return a.replace(/(\r\n|\r|\n)/g, "\n")
    },
    de = function(a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    },
    ee = function(a) {
        return encodeURIComponent(String(a))
    },
    fe = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    },
    ge = function(a) {
        return a = Ic(a, void 0)
    },
    je = function(a) {
        return Jc(a, "&") ? "document" in n ? he(a) : ie(a) : a
    },
    he = function(a) {
        var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var c = n.document.createElement("div");
        return a.replace(ke, function(d,
            e) {
            var f = b[d];
            if (f) return f;
            "#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (f = String.fromCharCode(e)));
            f || (Wd(c, Rd(dc("Single HTML entity."), d + " ")), f = c.firstChild.nodeValue.slice(0, -1));
            return b[d] = f
        })
    },
    ie = function(a) {
        return a.replace(/&([^;]+);/g, function(b, c) {
            switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? b : String.fromCharCode(c)
            }
        })
    },
    ke = /&([^;\s<&]+);?/g,
    le = function(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
            "\\$1").replace(/\x08/g, "\\x08")
    },
    me = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    },
    ne = function(a) {
        return null == a ? "" : String(a)
    },
    oe = function(a) {
        return Array.prototype.join.call(arguments, "")
    },
    pe = function(a) {
        var b = Number(a);
        return 0 == b && xc(a) ? NaN : b
    },
    qe = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    },
    re = function(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
var se = function() {
        return x("iPhone") && !x("iPod") && !x("iPad")
    },
    te = function() {
        return se() || x("iPad") || x("iPod")
    },
    ue = function(a) {
        var b = qd,
            c = "";
        x("Windows") ? (c = /Windows (?:NT|Phone) ([0-9.]+)/, c = (b = c.exec(b)) ? b[1] : "0.0") : te() ? (c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, c = (b = c.exec(b)) && b[1].replace(/_/g, ".")) : x("Macintosh") ? (c = /Mac OS X ([0-9_.]+)/, c = (b = c.exec(b)) ? b[1].replace(/_/g, ".") : "10") : Jc(qd.toLowerCase(), "kaios") ? (c = /(?:KaiOS)\/(\S+)/i, c = (b = c.exec(b)) && b[1]) : x("Android") ? (c = /Android\s+([^\);]+)(\)|;)/,
            c = (b = c.exec(b)) && b[1]) : x("CrOS") && (c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, c = (b = c.exec(b)) && b[1]);
        return 0 <= Lc(c || "", a)
    };
var ve = function(a) {
    ve[" "](a);
    return a
};
ve[" "] = Ga;
var we = function(a, b) {
        try {
            return ve(a[b]), !0
        } catch (c) {}
        return !1
    },
    xe = function(a, b, c) {
        return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
    };
var ye = x("Opera"),
    y = ud(),
    ze = x("Edge"),
    Be = ze || y,
    Ce = x("Gecko") && !(Jc(qd.toLowerCase(), "webkit") && !x("Edge")) && !(x("Trident") || x("MSIE")) && !x("Edge"),
    De = Jc(qd.toLowerCase(), "webkit") && !x("Edge"),
    Ee = De && x("Mobile"),
    Fe = x("Macintosh"),
    Ge = x("Windows"),
    He = x("Android"),
    Ie = se(),
    Je = x("iPad"),
    Ke = x("iPod"),
    Le = te(),
    Me = function() {
        var a = n.document;
        return a ? a.documentMode : void 0
    },
    Ne;
a: {
    var Oe = "",
        Pe = function() {
            var a = qd;
            if (Ce) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (ze) return /Edge\/([\d\.]+)/.exec(a);
            if (y) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (De) return /WebKit\/(\S+)/.exec(a);
            if (ye) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();Pe && (Oe = Pe ? Pe[1] : "");
    if (y) {
        var Qe = Me();
        if (null != Qe && Qe > parseFloat(Oe)) {
            Ne = String(Qe);
            break a
        }
    }
    Ne = Oe
}
var Re = Ne,
    Se = {},
    Te = function(a) {
        return xe(Se, a, function() {
            return 0 <= Lc(Re, a)
        })
    },
    Ve = function(a) {
        return Number(Ue) >= a
    },
    We;
We = n.document && y ? Me() : void 0;
var Ue = We;
var Xe = vd(),
    Ye = se() || x("iPod"),
    Ze = x("iPad"),
    $e = x("Android") && !(wd() || vd() || x("Opera") || x("Silk")),
    af = wd(),
    bf = xd() && !te();
var cf = {},
    df = null,
    ef = function(a, b) {
        v(Ma(a), "encodeByteArray takes an array as a parameter");
        void 0 === b && (b = 0);
        if (!df) {
            df = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                cf[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var k = f[g],
                        l = df[k];
                    void 0 === l ? df[k] = g : v(l === g)
                }
            }
        }
        b = cf[b];
        c = [];
        for (d = 0; d < a.length; d += 3) {
            l = a[d];
            var m = (e = d + 1 < a.length) ? a[d + 1] : 0;
            k = (f = d + 2 < a.length) ? a[d + 2] : 0;
            g = l >> 2;
            l = (l & 3) << 4 | m >> 4;
            m = (m &
                15) << 2 | k >> 6;
            k &= 63;
            f || (k = 64, e || (m = 64));
            c.push(b[g], b[l], b[m] || "", b[k] || "")
        }
        return c.join("")
    };
var ff = function() {},
    gf = "function" == typeof Uint8Array,
    kf = function(a, b, c, d) {
        a.a = null;
        b || (b = []);
        a.w = void 0;
        a.g = -1;
        a.b = b;
        a: {
            var e = a.b.length;b = -1;
            if (e && (b = e - 1, e = a.b[b], !(null === e || "object" != typeof e || La(e) || gf && e instanceof Uint8Array))) {
                a.h = b - a.g;
                a.c = e;
                break a
            } - 1 < c ? (a.h = Math.max(c, b + 1 - a.g), a.c = null) : a.h = Number.MAX_VALUE
        }
        a.m = {};
        if (d)
            for (c = 0; c < d.length; c++) b = d[c], b < a.h ? (b += a.g, a.b[b] = a.b[b] || hf) : (jf(a), a.c[b] = a.c[b] || hf)
    },
    hf = Object.freeze ? Object.freeze([]) : [],
    jf = function(a) {
        var b = a.h + a.g;
        a.b[b] || (a.c =
            a.b[b] = {})
    },
    lf = function(a, b) {
        if (b < a.h) {
            b += a.g;
            var c = a.b[b];
            return c === hf ? a.b[b] = [] : c
        }
        if (a.c) return c = a.c[b], c === hf ? a.c[b] = [] : c
    },
    mf = function(a, b) {
        a = lf(a, 1);
        return null == a ? b : a
    },
    A = function(a, b, c) {
        ib(a, ff);
        b < a.h ? a.b[b + a.g] = c : (jf(a), a.c[b] = c);
        return a
    },
    nf = function(a, b, c) {
        a.a || (a.a = {});
        if (!a.a[c]) {
            for (var d = lf(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.a[c] = e
        }
    },
    of = function(a, b, c) {
        ib(a, ff);
        a.a || (a.a = {});
        var d = c ? c.zb() : c;
        a.a[b] = c;
        return A(a, b, d)
    },
    pf = function(a, b, c) {
        ib(a, ff);
        a.a || (a.a = {});
        c = c || [];
        for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].zb();
        a.a[b] = c;
        return A(a, b, d)
    },
    qf = function(a, b, c) {
        nf(a, c, b);
        var d = a.a[b];
        d || (d = a.a[b] = []);
        c = new c;
        a = lf(a, b);
        d.push(c);
        a.push(c.zb());
        return c
    },
    rf = function(a) {
        if (a.a)
            for (var b in a.a) {
                var c = a.a[b];
                if (La(c))
                    for (var d = 0; d < c.length; d++) c[d] && c[d].zb();
                else c && c.zb()
            }
    };
ff.prototype.zb = function() {
    rf(this);
    return this.b
};
ff.prototype.o = gf ? function() {
    var a = Uint8Array.prototype.toJSON;
    Uint8Array.prototype.toJSON = function() {
        return ef(this)
    };
    try {
        return JSON.stringify(this.b && this.zb(), sf)
    } finally {
        Uint8Array.prototype.toJSON = a
    }
} : function() {
    return JSON.stringify(this.b && this.zb(), sf)
};
var sf = function(a, b) {
    return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
};
ff.prototype.toString = function() {
    rf(this);
    return this.b.toString()
};
var uf = function(a) {
        return new a.constructor(tf(a.zb()))
    },
    tf = function(a) {
        if (La(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? tf(v(d)) : d)
            }
            return b
        }
        if (gf && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? tf(v(d)) : d);
        return b
    };
var wf = function(a) {
    kf(this, a, -1, vf)
};
t(wf, ff);
var vf = [2];
var yf = function(a) {
    kf(this, a, -1, xf)
};
t(yf, ff);
var xf = [1, 2, 3, 4];
var zf = function(a) {
    if (!a) return "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    a = a.substring(0, a.indexOf("://"));
    if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a && "app" !== a) throw Error("Invalid URI scheme in origin: " + a);
    c = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e =
            b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === a && "80" !== e || "https" === a && "443" !== e) c = ":" + e
    }
    return a + "://" + b + c
};
var Af = {
    ascii_tlds: "aarp abarth abb abbott abbvie abc able abogado abudhabi ac academy accenture accountant accountants aco actor ad adac ads adult ae aeg aero aetna af afamilycompany afl africa ag agakhan agency ai aig aigo airbus airforce airtel akdn al alfaromeo alibaba alipay allfinanz allstate ally alsace alstom am americanexpress americanfamily amex amfam amica amsterdam analytics android anquan anz ao aol apartments app apple aq aquarelle ar arab aramco archi army arpa art arte as asda asia associates at athleta attorney au auction audi audible audio auspost author auto autos avianca aw aws ax axa az azure ba baby baidu banamex bananarepublic band bank bar barcelona barclaycard barclays barefoot bargains baseball basketball bauhaus bayern bb bbc bbt bbva bcg bcn bd be beats beauty beer bentley berlin best bestbuy bet bf bg bh bharti bi bible bid bike bing bingo bio biz bj black blackfriday blockbuster blog bloomberg blue bm bms bmw bn bnpparibas bo boats boehringer bofa bom bond boo book booking bosch bostik boston bot boutique box br bradesco bridgestone broadway broker brother brussels bs bt budapest bugatti build builders business buy buzz bv bw by bz bzh ca cab cafe cal call calvinklein cam camera camp cancerresearch canon capetown capital capitalone car caravan cards care career careers cars casa case caseih cash casino cat catering catholic cba cbn cbre cbs cc cd ceb center ceo cern cf cfa cfd cg ch chanel channel charity chase chat cheap chintai christmas chrome church ci cipriani circle cisco citadel citi citic city cityeats ck cl claims cleaning click clinic clinique clothing cloud club clubmed cm cn co coach codes coffee college cologne com comcast commbank community company compare computer comsec condos construction consulting contact contractors cooking cookingchannel cool coop corsica country coupon coupons courses cpa cr credit creditcard creditunion cricket crown crs cruise cruises csc cu cuisinella cv cw cx cy cymru cyou cz dabur dad dance data date dating datsun day dclk dds de deal dealer deals degree delivery dell deloitte delta democrat dental dentist desi design dev dhl diamonds diet digital direct directory discount discover dish diy dj dk dm dnp do docs doctor dog domains dot download drive dtv dubai duck dunlop dupont durban dvag dvr dz earth eat ec eco edeka edu education ee eg email emerck energy engineer engineering enterprises epson equipment er ericsson erni es esq estate esurance et etisalat eu eurovision eus events exchange expert exposed express extraspace fage fail fairwinds faith family fan fans farm farmers fashion fast fedex feedback ferrari ferrero fi fiat fidelity fido film final finance financial fire firestone firmdale fish fishing fit fitness fj fk flickr flights flir florist flowers fly fm fo foo food foodnetwork football ford forex forsale forum foundation fox fr free fresenius frl frogans frontdoor frontier ftr fujitsu fujixerox fun fund furniture futbol fyi ga gal gallery gallo gallup game games gap garden gay gb gbiz gd gdn ge gea gent genting george gf gg ggee gh gi gift gifts gives giving gl glade glass gle global globo gm gmail gmbh gmo gmx gn godaddy gold goldpoint golf goo goodyear goog google gop got gov gp gq gr grainger graphics gratis green gripe grocery group gs gt gu guardian gucci guge guide guitars guru gw gy hair hamburg hangout haus hbo hdfc hdfcbank health healthcare help helsinki here hermes hgtv hiphop hisamitsu hitachi hiv hk hkt hm hn hockey holdings holiday homedepot homegoods homes homesense honda horse hospital host hosting hot hoteles hotels hotmail house how hr hsbc ht hu hughes hyatt hyundai ibm icbc ice icu id ie ieee ifm ikano il im imamat imdb immo immobilien in inc industries infiniti info ing ink institute insurance insure int intel international intuit investments io ipiranga iq ir irish is ismaili ist istanbul it itau itv iveco jaguar java jcb jcp je jeep jetzt jewelry jio jll jm jmp jnj jo jobs joburg jot joy jp jpmorgan jprs juegos juniper kaufen kddi ke kerryhotels kerrylogistics kerryproperties kfh kg kh ki kia kim kinder kindle kitchen kiwi km kn koeln komatsu kosher kp kpmg kpn kr krd kred kuokgroup kw ky kyoto kz la lacaixa lamborghini lamer lancaster lancia land landrover lanxess lasalle lat latino latrobe law lawyer lb lc lds lease leclerc lefrak legal lego lexus lgbt li lidl life lifeinsurance lifestyle lighting like lilly limited limo lincoln linde link lipsy live living lixil lk llc llp loan loans locker locus loft lol london lotte lotto love lpl lplfinancial lr ls lt ltd ltda lu lundbeck lupin luxe luxury lv ly ma macys madrid maif maison makeup man management mango map market marketing markets marriott marshalls maserati mattel mba mc mckinsey md me med media meet melbourne meme memorial men menu merckmsd metlife mg mh miami microsoft mil mini mint mit mitsubishi mk ml mlb mls mm mma mn mo mobi mobile moda moe moi mom monash money monster mormon mortgage moscow moto motorcycles mov movie mp mq mr ms msd mt mtn mtr mu museum mutual mv mw mx my mz na nab nadex nagoya name nationwide natura navy nba nc ne nec net netbank netflix network neustar new newholland news next nextdirect nexus nf nfl ng ngo nhk ni nico nike nikon ninja nissan nissay nl no nokia northwesternmutual norton now nowruz nowtv np nr nra nrw ntt nu nyc nz obi observer off office okinawa olayan olayangroup oldnavy ollo om omega one ong onl online onyourside ooo open oracle orange org organic origins osaka otsuka ott ovh pa page panasonic paris pars partners parts party passagens pay pccw pe pet pf pfizer pg ph pharmacy phd philips phone photo photography photos physio pics pictet pictures pid pin ping pink pioneer pizza pk pl place play playstation plumbing plus pm pn pnc pohl poker politie porn post pr pramerica praxi press prime pro prod productions prof progressive promo properties property protection pru prudential ps pt pub pw pwc py qa qpon quebec quest qvc racing radio raid re read realestate realtor realty recipes red redstone redumbrella rehab reise reisen reit reliance ren rent rentals repair report republican rest restaurant review reviews rexroth rich richardli ricoh rightathome ril rio rip rmit ro rocher rocks rodeo rogers room rs rsvp ru rugby ruhr run rw rwe ryukyu sa saarland safe safety sakura sale salon samsclub samsung sandvik sandvikcoromant sanofi sap sarl sas save saxo sb sbi sbs sc sca scb schaeffler schmidt scholarships school schule schwarz science scjohnson scor scot sd se search seat secure security seek select sener services ses seven sew sex sexy sfr sg sh shangrila sharp shaw shell shia shiksha shoes shop shopping shouji show showtime shriram si silk sina singles site sj sk ski skin sky skype sl sling sm smart smile sn sncf so soccer social softbank software sohu solar solutions song sony soy space sport spot spreadbetting sr srl ss st stada staples star statebank statefarm stc stcgroup stockholm storage store stream studio study style su sucks supplies supply support surf surgery suzuki sv swatch swiftcover swiss sx sy sydney symantec systems sz tab taipei talk taobao target tatamotors tatar tattoo tax taxi tc tci td tdk team tech technology tel temasek tennis teva tf tg th thd theater theatre tiaa tickets tienda tiffany tips tires tirol tj tjmaxx tjx tk tkmaxx tl tm tmall tn to today tokyo tools top toray toshiba total tours town toyota toys tr trade trading training travel travelchannel travelers travelersinsurance trust trv tt tube tui tunes tushu tv tvs tw tz ua ubank ubs ug uk unicom university uno uol ups us uy uz va vacations vana vanguard vc ve vegas ventures verisign versicherung vet vg vi viajes video vig viking villas vin vip virgin visa vision vistaprint viva vivo vlaanderen vn vodka volkswagen volvo vote voting voto voyage vu vuelos wales walmart walter wang wanggou watch watches weather weatherchannel webcam weber website wed wedding weibo weir wf whoswho wien wiki williamhill win windows wine winners wme wolterskluwer woodside work works world wow ws wtc wtf xbox xerox xfinity xihuan xin xn--11b4c3d xn--1ck2e1b xn--1qqw23a xn--2scrj9c xn--30rr7y xn--3bst00m xn--3ds443g xn--3e0b707e xn--3hcrj9c xn--3oq18vl8pn36a xn--3pxu8k xn--42c2d9a xn--45br5cyl xn--45brj9c xn--45q11c xn--4gbrim xn--54b7fta0cc xn--55qw42g xn--55qx5d xn--5su34j936bgsg xn--5tzm5g xn--6frz82g xn--6qq986b3xl xn--80adxhks xn--80ao21a xn--80aqecdr1a xn--80asehdb xn--80aswg xn--8y0a063a xn--90a3ac xn--90ae xn--90ais xn--9dbq2a xn--9et52u xn--9krt00a xn--b4w605ferd xn--bck1b9a5dre4c xn--c1avg xn--c2br7g xn--cck2b3b xn--cg4bki xn--clchc0ea0b2g2a9gcd xn--czr694b xn--czrs0t xn--czru2d xn--d1acj3b xn--d1alf xn--e1a4c xn--eckvdtc9d xn--efvy88h xn--estv75g xn--fct429k xn--fhbei xn--fiq228c5hs xn--fiq64b xn--fiqs8s xn--fiqz9s xn--fjq720a xn--flw351e xn--fpcrj9c3d xn--fzc2c9e2c xn--fzys8d69uvgm xn--g2xx48c xn--gckr3f0f xn--gecrj9c xn--gk3at1e xn--h2breg3eve xn--h2brj9c xn--h2brj9c8c xn--hxt814e xn--i1b6b1a6a2e xn--imr513n xn--io0a7i xn--j1aef xn--j1amh xn--j6w193g xn--jlq61u9w7b xn--jvr189m xn--kcrx77d1x4a xn--kprw13d xn--kpry57d xn--kpu716f xn--kput3i xn--l1acc xn--lgbbat1ad8j xn--mgb9awbf xn--mgba3a3ejt xn--mgba3a4f16a xn--mgba7c0bbn0a xn--mgbaakc7dvf xn--mgbaam7a8h xn--mgbab2bd xn--mgbah1a3hjkrd xn--mgbai9azgqp6j xn--mgbayh7gpa xn--mgbbh1a xn--mgbbh1a71e xn--mgbc0a9azcg xn--mgbca7dzdo xn--mgberp4a5d4ar xn--mgbgu82a xn--mgbi4ecexp xn--mgbpl2fh xn--mgbt3dhd xn--mgbtx2b xn--mgbx4cd0ab xn--mix891f xn--mk1bu44c xn--mxtq1m xn--ngbc5azd xn--ngbe9e0a xn--ngbrx xn--node xn--nqv7f xn--nqv7fs00ema xn--nyqy26a xn--o3cw4h xn--ogbpf8fl xn--otu796d xn--p1acf xn--p1ai xn--pbt977c xn--pgbs0dh xn--pssy2u xn--q9jyb4c xn--qcka1pmc xn--qxa6a xn--qxam xn--rhqv96g xn--rovu88b xn--rvc1e0am3e xn--s9brj9c xn--ses554g xn--t60b56a xn--tckwe xn--tiq49xqyj xn--unup4y xn--vermgensberater-ctb xn--vermgensberatung-pwb xn--vhquv xn--vuq861b xn--w4r85el8fhu5dnra xn--w4rs40l xn--wgbh1c xn--wgbl6a xn--xhq521b xn--xkc2al3hye2a xn--xkc2dl3a5ee0h xn--y9a3aq xn--yfro4i67o xn--ygbi2ammx xn--zfr164b xxx xyz yachts yahoo yamaxun yandex ye yodobashi yoga yokohama you youtube yt yun za zappos zara zero zip zm zone zuerich zw".split(" "),
    unicode_tlds: "\u0915\u0949\u092e \u30bb\u30fc\u30eb \u4f5b\u5c71 \u0cad\u0cbe\u0cb0\u0ca4 \u6148\u5584 \u96c6\u56e2 \u5728\u7ebf \ud55c\uad6d \u0b2d\u0b3e\u0b30\u0b24 \u5927\u4f17\u6c7d\u8f66 \u70b9\u770b \u0e04\u0e2d\u0e21 \u09ad\u09be\u09f0\u09a4 \u09ad\u09be\u09b0\u09a4 \u516b\u5366 \u0645\u0648\u0642\u0639 \u09ac\u09be\u0982\u09b2\u09be \u516c\u76ca \u516c\u53f8 \u9999\u683c\u91cc\u62c9 \u7f51\u7ad9 \u79fb\u52a8 \u6211\u7231\u4f60 \u043c\u043e\u0441\u043a\u0432\u0430 \u049b\u0430\u0437 \u043a\u0430\u0442\u043e\u043b\u0438\u043a \u043e\u043d\u043b\u0430\u0439\u043d \u0441\u0430\u0439\u0442 \u8054\u901a \u0441\u0440\u0431 \u0431\u0433 \u0431\u0435\u043b \u05e7\u05d5\u05dd \u65f6\u5c1a \u5fae\u535a \u6de1\u9a6c\u9521 \u30d5\u30a1\u30c3\u30b7\u30e7\u30f3 \u043e\u0440\u0433 \u0928\u0947\u091f \u30b9\u30c8\u30a2 \uc0bc\uc131 \u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd \u5546\u6807 \u5546\u5e97 \u5546\u57ce \u0434\u0435\u0442\u0438 \u043c\u043a\u0434 \u0435\u044e \u30dd\u30a4\u30f3\u30c8 \u65b0\u95fb \u5de5\u884c \u5bb6\u96fb \u0643\u0648\u0645 \u4e2d\u6587\u7f51 \u4e2d\u4fe1 \u4e2d\u56fd \u4e2d\u570b \u5a31\u4e50 \u8c37\u6b4c \u0c2d\u0c3e\u0c30\u0c24\u0c4d \u0dbd\u0d82\u0d9a\u0dcf \u96fb\u8a0a\u76c8\u79d1 \u8d2d\u7269 \u30af\u30e9\u30a6\u30c9 \u0aad\u0abe\u0ab0\u0aa4 \u901a\u8ca9 \u092d\u093e\u0930\u0924\u092e\u094d \u092d\u093e\u0930\u0924 \u092d\u093e\u0930\u094b\u0924 \u7f51\u5e97 \u0938\u0902\u0917\u0920\u0928 \u9910\u5385 \u7f51\u7edc \u043a\u043e\u043c \u0443\u043a\u0440 \u9999\u6e2f \u8bfa\u57fa\u4e9a \u98df\u54c1 \u98de\u5229\u6d66 \u53f0\u6e7e \u53f0\u7063 \u624b\u8868 \u624b\u673a \u043c\u043e\u043d \u0627\u0644\u062c\u0632\u0627\u0626\u0631 \u0639\u0645\u0627\u0646 \u0627\u0631\u0627\u0645\u0643\u0648 \u0627\u06cc\u0631\u0627\u0646 \u0627\u0644\u0639\u0644\u064a\u0627\u0646 \u0627\u062a\u0635\u0627\u0644\u0627\u062a \u0627\u0645\u0627\u0631\u0627\u062a \u0628\u0627\u0632\u0627\u0631 \u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627 \u067e\u0627\u06a9\u0633\u062a\u0627\u0646 \u0627\u0644\u0627\u0631\u062f\u0646 \u0628\u0627\u0631\u062a \u0628\u06be\u0627\u0631\u062a \u0627\u0644\u0645\u063a\u0631\u0628 \u0627\u0628\u0648\u0638\u0628\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u0680\u0627\u0631\u062a \u0643\u0627\u062b\u0648\u0644\u064a\u0643 \u0633\u0648\u062f\u0627\u0646 \u0647\u0645\u0631\u0627\u0647 \u0639\u0631\u0627\u0642 \u0645\u0644\u064a\u0633\u064a\u0627 \u6fb3\u9580 \ub2f7\ucef4 \u653f\u5e9c \u0634\u0628\u0643\u0629 \u0628\u064a\u062a\u0643 \u0639\u0631\u0628 \u10d2\u10d4 \u673a\u6784 \u7ec4\u7ec7\u673a\u6784 \u5065\u5eb7 \u0e44\u0e17\u0e22 \u0633\u0648\u0631\u064a\u0629 \u62db\u8058 \u0440\u0443\u0441 \u0440\u0444 \u73e0\u5b9d \u062a\u0648\u0646\u0633 \u5927\u62ff \u307f\u3093\u306a \u30b0\u30fc\u30b0\u30eb \u03b5\u03c5 \u03b5\u03bb \u4e16\u754c \u66f8\u7c4d \u0d2d\u0d3e\u0d30\u0d24\u0d02 \u0a2d\u0a3e\u0a30\u0a24 \u7f51\u5740 \ub2f7\ub137 \u30b3\u30e0 \u5929\u4e3b\u6559 \u6e38\u620f verm\u00f6gensberater verm\u00f6gensberatung \u4f01\u4e1a \u4fe1\u606f \u5609\u91cc\u5927\u9152\u5e97 \u5609\u91cc \u0645\u0635\u0631 \u0642\u0637\u0631 \u5e7f\u4e1c \u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8 \u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe \u0570\u0561\u0575 \u65b0\u52a0\u5761 \u0641\u0644\u0633\u0637\u064a\u0646 \u653f\u52a1".split(" ")
};
try {
    (new self.OffscreenCanvas(0, 0)).getContext("2d")
} catch (a) {}
var Bf = !y || Ve(9),
    Cf = !Ce && !y || y && Ve(9) || Ce && Te("1.9.1"),
    Df = y && !Te("9"),
    Ef = y || ye || De,
    Ff = y && !Ve(9);
var Gf = function(a, b) {
    return a + Math.random() * (b - a)
};
var Hf = function(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.a = void 0 !== b ? b : 0
};
Hf.prototype.toString = function() {
    return "(" + this.x + ", " + this.a + ")"
};
var If = function(a, b) {
    return new Hf(a.x - b.x, a.a - b.a)
};
Hf.prototype.ceil = function() {
    this.x = Math.ceil(this.x);
    this.a = Math.ceil(this.a);
    return this
};
Hf.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.a = Math.floor(this.a);
    return this
};
Hf.prototype.round = function() {
    this.x = Math.round(this.x);
    this.a = Math.round(this.a);
    return this
};
var Jf = function(a, b) {
    this.width = a;
    this.height = b
};
h = Jf.prototype;
h.toString = function() {
    return "(" + this.width + " x " + this.height + ")"
};
h.aspectRatio = function() {
    return this.width / this.height
};
h.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
h.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
h.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var Mf = function(a) {
        return a ? new Kf(Lf(a)) : Xa || (Xa = new Kf)
    },
    Nf = function(a) {
        return "string" === typeof a ? document.getElementById(a) : a
    },
    Of = function(a, b) {
        return (b || document).getElementsByTagName(String(a))
    },
    Qf = function(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Pf(document, "*", a, b)
    },
    B = function(a, b) {
        var c = b || document,
            d = null;
        c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : d = Rf("*", a, b);
        return d || null
    },
    C = function(a, b) {
        b = B(a, b);
        return v(b, "No element found with className: " +
            a)
    },
    Pf = function(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && Ab(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    },
    Rf = function(a,
        b, c) {
        var d = document,
            e = c || d,
            f = a && "*" != a ? String(a).toUpperCase() : "";
        return e.querySelectorAll && e.querySelector && (f || b) ? e.querySelector(f + (b ? "." + b : "")) : Pf(d, a, b, c)[0] || null
    },
    Tf = function(a, b) {
        Lb(b, function(c, d) {
            c && "object" == typeof c && c.uc && (c = c.ub());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Sf.hasOwnProperty(d) ? a.setAttribute(Sf[d], c) : vc(d, "aria-") || vc(d, "data-") ? a.setAttribute(d, c) : a[d] = c
        })
    },
    Sf = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    },
    Vf = function(a) {
        a = a.document;
        a = Uf(a) ? a.documentElement : a.body;
        return new Jf(a.clientWidth, a.clientHeight)
    },
    Xf = function(a) {
        var b = Wf(a);
        a = a.parentWindow || a.defaultView;
        return y && Te("10") && a.pageYOffset != b.scrollTop ? new Hf(b.scrollLeft, b.scrollTop) : new Hf(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    },
    Wf = function(a) {
        return a.scrollingElement ? a.scrollingElement :
            !De && Uf(a) ? a.documentElement : a.body || a.documentElement
    },
    Yf = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    },
    D = function(a, b, c) {
        return Zf(document, arguments)
    },
    Zf = function(a, b) {
        var c = String(b[0]),
            d = b[1];
        if (!Bf && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', ge(d.name), '"');
            if (d.type) {
                c.push(' type="', ge(d.type), '"');
                var e = {};
                Wb(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = $f(a, c);
        d && ("string" === typeof d ? c.className = d : La(d) ? c.className = d.join(" ") : Tf(c, d));
        2 < b.length && ag(a, c, b,
            2);
        return c
    },
    ag = function(a, b, c, d) {
        function e(g) {
            g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !Ma(f) || Oa(f) && 0 < f.nodeType ? e(f) : w(bg(f) ? Gb(f) : f, e)
        }
    },
    cg = function(a) {
        return $f(document, a)
    },
    $f = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    },
    dg = function(a) {
        return document.createTextNode(String(a))
    },
    eg = function(a, b) {
        var c = $f(a, "DIV");
        y ? (Wd(c, Od(Qd, b)), c.removeChild(v(c.firstChild))) : Wd(c, b);
        if (1 ==
            c.childNodes.length) c = c.removeChild(v(c.firstChild));
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    },
    Uf = function(a) {
        return "CSS1Compat" == a.compatMode
    },
    fg = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    },
    gg = function(a, b) {
        v(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    },
    hg = function(a, b) {
        ag(Lf(a), a, arguments, 1)
    },
    ig = function(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    },
    jg = function(a, b) {
        v(null != a && null != b, "goog.dom.insertSiblingBefore expects non-null arguments");
        b.parentNode && b.parentNode.insertBefore(a, b)
    },
    kg = function(a, b) {
        v(null != a && null != b, "goog.dom.insertSiblingAfter expects non-null arguments");
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    },
    lg =
    function(a, b, c) {
        v(null != a, "goog.dom.insertChildAt expects a non-null parent");
        a.insertBefore(b, a.childNodes[c] || null)
    },
    mg = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    },
    ng = function(a) {
        return Cf && void 0 != a.children ? a.children : sb(a.childNodes, function(b) {
            return 1 == b.nodeType
        })
    },
    pg = function(a) {
        return void 0 !== a.firstElementChild ? a.firstElementChild : og(a.firstChild, !0)
    },
    og = function(a, b) {
        for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
        return a
    },
    qg = function(a) {
        return Oa(a) &&
            1 == a.nodeType
    },
    rg = function(a) {
        var b;
        if (Ef && !(y && Te("9") && !Te("10") && n.SVGElement && a instanceof n.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return qg(b) ? b : null
    },
    sg = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    },
    vg = function(a, b) {
        if (a == b) return 0;
        if (a.compareDocumentPosition) return a.compareDocumentPosition(b) &
            2 ? 1 : -1;
        if (y && !Ve(9)) {
            if (9 == a.nodeType) return -1;
            if (9 == b.nodeType) return 1
        }
        if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
            var c = 1 == a.nodeType,
                d = 1 == b.nodeType;
            if (c && d) return a.sourceIndex - b.sourceIndex;
            var e = a.parentNode,
                f = b.parentNode;
            return e == f ? tg(a, b) : !c && sg(e, b) ? -1 * ug(a, b) : !d && sg(f, a) ? ug(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
        }
        d = Lf(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        a = d.createRange();
        a.selectNode(b);
        a.collapse(!0);
        return c.compareBoundaryPoints(n.Range.START_TO_END,
            a)
    },
    ug = function(a, b) {
        var c = a.parentNode;
        if (c == b) return -1;
        for (; b.parentNode != c;) b = b.parentNode;
        return tg(b, a)
    },
    tg = function(a, b) {
        for (; b = b.previousSibling;)
            if (b == a) return -1;
        return 1
    },
    wg = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var k = 1; k < c; k++)
                if (g != d[k][b]) return f;
            f = g
        }
        return f
    },
    Lf = function(a) {
        v(a,
            "Node cannot be null or undefined.");
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    },
    xg = function(a) {
        return a.contentDocument || a.contentWindow.document
    },
    E = function(a, b) {
        v(null != a, "goog.dom.setTextContent expects a non-null value for node");
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(v(a.lastChild));
            a.firstChild.data = String(b)
        } else {
            ig(a);
            var c = Lf(a);
            a.appendChild(c.createTextNode(String(b)))
        }
    },
    yg = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    zg = {
        IMG: " ",
        BR: "\n"
    },
    Ag = function(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    },
    Bg = function(a) {
        return y && !Te("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex")
    },
    Cg = function(a) {
        a = a.tabIndex;
        return "number" === typeof a && 0 <= a && 32768 > a
    },
    Eg = function(a) {
        if (Df && null !== a && "innerText" in a) a = ce(a.innerText);
        else {
            var b = [];
            Dg(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g,
            "");
        Df || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    },
    Fg = function(a) {
        var b = [];
        Dg(a, b, !1);
        return b.join("")
    },
    Dg = function(a, b, c) {
        if (!(a.nodeName in yg))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in zg) b.push(zg[a.nodeName]);
        else
            for (a = a.firstChild; a;) Dg(a, b, c), a = a.nextSibling
    },
    bg = function(a) {
        if (a && "number" == typeof a.length) {
            if (Oa(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (Na(a)) return "function" ==
                typeof a.item
        }
        return !1
    },
    Hg = function(a) {
        return Gg(a, function(b) {
            return "string" === typeof b.className && Ab(b.className.split(/\s+/), "gt-baf-entry-clickable")
        }, void 0)
    },
    Gg = function(a, b, c) {
        for (var d = 0; a && (null == c || d <= c);) {
            v("parentNode" != a.name);
            if (b(a)) return a;
            a = a.parentNode;
            d++
        }
        return null
    },
    Ig = function(a) {
        try {
            var b = a && a.activeElement;
            return b && b.nodeName ? b : null
        } catch (c) {
            return null
        }
    },
    Kf = function(a) {
        this.a = a || n.document || document
    };
Kf.prototype.j = function(a) {
    return "string" === typeof a ? this.a.getElementById(a) : a
};
Kf.prototype.c = Kf.prototype.j;
Kf.prototype.vd = function(a, b) {
    return B(a, b || this.a)
};
Kf.prototype.b = function(a, b, c) {
    return Zf(this.a, arguments)
};
var Jg = function(a, b) {
        return $f(a.a, b)
    },
    Kg = function(a) {
        a = a.a;
        return a.parentWindow || a.defaultView
    };
h = Kf.prototype;
h.appendChild = gg;
h.ti = hg;
h.zf = ig;
h.zi = mg;
h.wi = ng;
h.pi = pg;
h.jm = qg;
h.contains = sg;
h.Af = E;
h.xi = Eg;
var Lg = function() {
    this.La = this.La;
    this.Fa = this.Fa
};
Lg.prototype.La = !1;
Lg.prototype.isDisposed = function() {
    return this.La
};
Lg.prototype.Ia = function() {
    this.La || (this.La = !0, this.T())
};
var Ng = function(a, b) {
    b = Ua(Mg, b);
    a.La ? b() : (a.Fa || (a.Fa = []), a.Fa.push(b))
};
Lg.prototype.T = function() {
    if (this.Fa)
        for (; this.Fa.length;) this.Fa.shift()()
};
var Mg = function(a) {
    a && "function" == typeof a.Ia && a.Ia()
};
var F = function(a, b) {
    this.type = a;
    this.a = this.target = b;
    this.defaultPrevented = this.c = !1
};
F.prototype.stopPropagation = function() {
    this.c = !0
};
F.prototype.preventDefault = function() {
    this.defaultPrevented = !0
};
var Og = Object.freeze || function(a) {
    return a
};
var Pg = !y || Ve(9),
    Qg = !y || Ve(9),
    Rg = y && !Te("9"),
    Sg = function() {
        if (!n.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            n.addEventListener("test", Ga, b), n.removeEventListener("test", Ga, b)
        } catch (c) {}
        return a
    }();
var Tg;
Tg = De ? "webkitTransitionEnd" : ye ? "otransitionend" : "transitionend";
var Ug = {
    Id: "mousedown",
    Jd: "mouseup",
    le: "mousecancel",
    Pp: "mousemove",
    Rp: "mouseover",
    Qp: "mouseout",
    Np: "mouseenter",
    Op: "mouseleave"
};
var Vg = function(a, b) {
    F.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.g = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.b = null;
    a && this.init(a, b)
};
t(Vg, F);
var Wg = Og([1, 4, 2]),
    Xg = Og({
        2: "touch",
        3: "pen",
        4: "mouse"
    });
Vg.prototype.init = function(a, b) {
    var c = this.type = a.type,
        d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.a = b;
    (b = a.relatedTarget) ? Ce && (we(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX :
        a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.g = Fe ? a.metaKey : a.ctrlKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Xg[a.pointerType] || "";
    this.state = a.state;
    this.b = a;
    a.defaultPrevented && this.preventDefault()
};
var Yg = function(a) {
    return (Pg ? 0 == a.b.button : "click" == a.type ? !0 : !!(a.b.button & Wg[0])) && !(De && Fe && a.ctrlKey)
};
Vg.prototype.stopPropagation = function() {
    Vg.D.stopPropagation.call(this);
    this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
};
Vg.prototype.preventDefault = function() {
    Vg.D.preventDefault.call(this);
    var a = this.b;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Rg) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
var Zg = "closure_listenable_" + (1E6 * Math.random() | 0),
    $g = function(a) {
        return !(!a || !a[Zg])
    },
    ah = 0;
var bh = function(a, b, c, d, e) {
        this.listener = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Pf = e;
        this.key = ++ah;
        this.$d = this.hf = !1
    },
    ch = function(a) {
        a.$d = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.Pf = null
    };
var dh = function(a) {
    this.src = a;
    this.a = {};
    this.b = 0
};
dh.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [], this.b++);
    var g = eh(a, b, d, e); - 1 < g ? (b = a[g], c || (b.hf = !1)) : (b = new bh(b, this.src, f, !!d, e), b.hf = c, a.push(b));
    return b
};
var fh = function(a, b) {
    var c = b.type;
    if (!(c in a.a)) return !1;
    var d = Db(a.a[c], b);
    d && (ch(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
    return d
};
dh.prototype.tf = function(a, b) {
    a = this.a[a.toString()];
    var c = [];
    if (a)
        for (var d = 0; d < a.length; ++d) {
            var e = a[d];
            e.capture == b && c.push(e)
        }
    return c
};
dh.prototype.Ae = function(a, b, c, d) {
    a = this.a[a.toString()];
    var e = -1;
    a && (e = eh(a, b, c, d));
    return -1 < e ? a[e] : null
};
dh.prototype.hasListener = function(a, b) {
    var c = void 0 !== a,
        d = c ? a.toString() : "",
        e = void 0 !== b;
    return Mb(this.a, function(f) {
        for (var g = 0; g < f.length; ++g)
            if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
        return !1
    })
};
var eh = function(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.$d && f.listener == b && f.capture == !!c && f.Pf == d) return e
    }
    return -1
};
var gh = "closure_lm_" + (1E6 * Math.random() | 0),
    hh = {},
    ih = 0,
    G = function(a, b, c, d, e) {
        if (d && d.once) return jh(a, b, c, d, e);
        if (La(b)) {
            for (var f = 0; f < b.length; f++) G(a, b[f], c, d, e);
            return null
        }
        c = kh(c);
        return $g(a) ? a.listen(b, c, Oa(d) ? !!d.capture : !!d, e) : lh(a, b, c, !1, d, e)
    },
    lh = function(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = Oa(e) ? !!e.capture : !!e,
            k = mh(a);
        k || (a[gh] = k = new dh(a));
        c = k.add(b, c, d, g, f);
        if (c.a) return c;
        d = nh();
        c.a = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Sg || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(),
            d, e);
        else if (a.attachEvent) a.attachEvent(oh(b.toString()), d);
        else if (a.addListener && a.removeListener) v("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        ih++;
        return c
    },
    nh = function() {
        var a = ph,
            b = Qg ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    },
    jh = function(a, b, c, d, e) {
        if (La(b)) {
            for (var f = 0; f < b.length; f++) jh(a, b[f], c, d, e);
            return null
        }
        c = kh(c);
        return $g(a) ?
            a.jh(b, c, Oa(d) ? !!d.capture : !!d, e) : lh(a, b, c, !0, d, e)
    },
    qh = function(a, b, c, d, e) {
        if (La(b))
            for (var f = 0; f < b.length; f++) qh(a, b[f], c, d, e);
        else d = Oa(d) ? !!d.capture : !!d, c = kh(c), $g(a) ? a.Ga(b, c, d, e) : a && (a = mh(a)) && (b = a.Ae(b, c, d, e)) && rh(b)
    },
    rh = function(a) {
        if ("number" === typeof a || !a || a.$d) return !1;
        var b = a.src;
        if ($g(b)) return fh(b.Ub, a);
        var c = a.type,
            d = a.a;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(oh(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        ih--;
        (c = mh(b)) ?
        (fh(c, a), 0 == c.b && (c.src = null, b[gh] = null)) : ch(a);
        return !0
    },
    sh = function(a, b) {
        if (!a) return 0;
        if ($g(a)) return a.rh(b);
        a = mh(a);
        if (!a) return 0;
        var c = 0;
        b = b && b.toString();
        for (var d in a.a)
            if (!b || d == b)
                for (var e = a.a[d].concat(), f = 0; f < e.length; ++f) rh(e[f]) && ++c;
        return c
    },
    oh = function(a) {
        return a in hh ? hh[a] : hh[a] = "on" + a
    },
    uh = function(a, b, c, d) {
        var e = !0;
        if (a = mh(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.$d && (f = th(f, d), e = e && !1 !== f)
                }
        return e
    },
    th = function(a, b) {
        var c =
            a.listener,
            d = a.Pf || a.src;
        a.hf && rh(a);
        return c.call(d, b)
    },
    vh = function(a, b) {
        v($g(a), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance.");
        a.dispatchEvent(b)
    },
    ph = function(a, b) {
        if (a.$d) return !0;
        if (!Qg) {
            var c = b || Fa("window.event");
            b = new Vg(c, this);
            var d = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break a
                    } catch (g) {
                        e = !0
                    }
                    if (e || void 0 == c.returnValue) c.returnValue = !0
                }
                c = [];
                for (e = b.a; e; e = e.parentNode) c.push(e);a = a.type;
                for (e = c.length -
                    1; !b.c && 0 <= e; e--) {
                    b.a = c[e];
                    var f = uh(c[e], a, !0, b);
                    d = d && f
                }
                for (e = 0; !b.c && e < c.length; e++) b.a = c[e],
                f = uh(c[e], a, !1, b),
                d = d && f
            }
            return d
        }
        return th(a, new Vg(b, this))
    },
    mh = function(a) {
        a = a[gh];
        return a instanceof dh ? a : null
    },
    wh = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
    kh = function(a) {
        v(a, "Listener can not be null.");
        if (Na(a)) return a;
        v(a.handleEvent, "An object listener must have handleEvent method.");
        a[wh] || (a[wh] = function(b) {
            return a.handleEvent(b)
        });
        return a[wh]
    };
var yh = function(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
        if (xh(a.keyCode)) return !0;
        switch (a.keyCode) {
            case 18:
            case 20:
            case 93:
            case 17:
            case 40:
            case 35:
            case 27:
            case 36:
            case 45:
            case 37:
            case 224:
            case 91:
            case 144:
            case 12:
            case 34:
            case 33:
            case 19:
            case 255:
            case 44:
            case 39:
            case 145:
            case 16:
            case 38:
            case 252:
            case 224:
            case 92:
                return !1;
            case 0:
                return !Ce;
            default:
                return 166 > a.keyCode || 183 < a.keyCode
        }
    },
    Ah = function(a, b, c, d, e, f) {
        if (De && !Te("525")) return !0;
        if (Fe && e) return xh(a);
        if (e &&
            !d) return !1;
        if (!Ce) {
            "number" === typeof b && (b = zh(b));
            var g = 17 == b || 18 == b || Fe && 91 == b;
            if ((!c || Fe) && g || Fe && 16 == b && (d || f)) return !1
        }
        if ((De || ze) && d && c) switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (y && d && b == a) return !1;
        switch (a) {
            case 13:
                return Ce ? f || e ? !1 : !(c && d) : !0;
            case 27:
                return !(De || ze || Ce)
        }
        return Ce && (d || e || f) ? !1 : xh(a)
    },
    xh = function(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (De || ze) && 0 == a) return !0;
        switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
            case 163:
            case 58:
                return !0;
            case 173:
                return Ce;
            default:
                return !1
        }
    },
    zh = function(a) {
        if (Ce) a = Bh(a);
        else if (Fe && De) switch (a) {
            case 93:
                a = 91
        }
        return a
    },
    Bh = function(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };
var Ch = function(a, b) {
        b = Gb(b);
        var c = Ig(document);
        if (c) {
            var d = b.indexOf(c);
            c = d + 1 === b.length ? 0 : d + 1;
            d = 0 > d - 1 ? b.length - 1 : d - 1;
            switch (a.keyCode) {
                case 39:
                    b[c].focus();
                    break;
                case 37:
                    b[d].focus()
            }
        }
    },
    Dh = function(a, b) {
        G(a, "click", b, !1);
        G(a, "keypress", function(c) {
            13 === c.keyCode && b(c)
        }, !1)
    };
var Eh = function(a, b, c, d) {
    window.__gaTracker && __gaTracker("send", "event", a, b, c, d)
};
var Mh = function(a) {
        this.b = !1;
        this.a = [];
        this.c = {};
        for (var b = 0; b < H(a, 1); b++) {
            var c = Fh(a, b),
                d = I(c, 0),
                e = "";
            Gh(c, 3) && (e = I(c, 3));
            d in this.c ? d = this.c[d] : (c = new Hh(d, e), this.c[d] = c, this.a.push(c), d = c);
            for (c = 0; c < Fh(a, b).b(); c++) {
                var f = Fh(a, b).c(c);
                e = f;
                e = 0 == H(e, 2) ? -Ra(e) : Ih(e, 2, 0);
                var g = d;
                if (e in g.b) e = g.b[e];
                else {
                    var k = new Jh;
                    g.b[e] = k;
                    g.a.push(k);
                    e = k
                }
                g = I(f, 0);
                k = I(f, 4);
                var l = Gh(f, 3) ? Kh(f, 3) : -1;
                var m = [];
                for (var q = 0; q < H(f, 1); q++) m.push(Ih(f, 1, q));
                f = e;
                g in f.b || (k = new Lh(g, k, l, m), f.b[g] = k, f.a.push(k));
                this.b |=
                    1 < e.a.length
            }
        }
    },
    Nh = function(a) {
        for (var b = 0, c = 0; c < a.a.length; c++) {
            for (var d = a.a[c], e = 0, f = 0; f < d.a.length; f++) e += d.a[f].a.length;
            b += e
        }
        for (d = c = 0; d < a.a.length; d++) {
            e = a.a[d];
            for (var g = f = 0; g < e.a.length; g++) {
                for (var k = e.a[g], l = 0, m = 0; m < k.a.length; m++) l += k.a[m].a ? 1 : 0;
                f += l
            }
            c += f
        }
        return b - c
    },
    Oh = function(a) {
        for (var b = [], c = 0; c < a.a.length; c++)
            for (var d = 0; d < a.a[c].a.length; d++) Array.prototype.push.apply(b, a.a[c].a[d].a);
        return b
    },
    Ph = function(a) {
        for (var b = 0; b < a.a.length; b++)
            for (var c = 0; c < a.a[b].a.length; c++) a.a[b].a[c].a.sort(function(d,
                e) {
                return e.Pb - d.Pb
            })
    },
    Hh = function(a, b) {
        this.g = a;
        this.c = b;
        this.a = [];
        this.b = {}
    };
Hh.prototype.Pb = function() {
    for (var a = 0, b = 0; b < this.a.length; b++) a = Math.max(a, this.a[b].Pb());
    return a
};
var Rh = function(a) {
        for (var b = 0; b < a.a.length; b++)
            if (Qh(a.a[b])) return !0;
        return !1
    },
    Jh = function() {
        this.a = [];
        this.b = {}
    };
Jh.prototype.Pb = function() {
    for (var a = 0, b = 0; b < this.a.length; b++) a = Math.max(a, this.a[b].Pb);
    return a
};
var Qh = function(a) {
        for (var b = 0; b < a.a.length; b++)
            if (a.a[b].a) return !0;
        return !1
    },
    Lh = function(a, b, c, d) {
        this.text = a;
        this.Qe = b;
        this.Pb = c;
        this.fg = d;
        this.a = !1;
        this.b = 0
    };
var J = function() {
    Lg.call(this);
    this.Ub = new dh(this);
    this.bk = this;
    this.qh = null
};
t(J, Lg);
J.prototype[Zg] = !0;
h = J.prototype;
h.Nd = function() {
    return this.qh
};
h.Ed = function(a) {
    this.qh = a
};
h.addEventListener = function(a, b, c, d) {
    G(this, a, b, c, d)
};
h.removeEventListener = function(a, b, c, d) {
    qh(this, a, b, c, d)
};
h.dispatchEvent = function(a) {
    Sh(this);
    var b = this.Nd();
    if (b) {
        var c = [];
        for (var d = 1; b; b = b.Nd()) c.push(b), v(1E3 > ++d, "infinite loop")
    }
    b = this.bk;
    d = a.type || a;
    if ("string" === typeof a) a = new F(a, b);
    else if (a instanceof F) a.target = a.target || b;
    else {
        var e = a;
        a = new F(d, b);
        Wb(a, e)
    }
    e = !0;
    if (c)
        for (var f = c.length - 1; !a.c && 0 <= f; f--) {
            var g = a.a = c[f];
            e = Th(g, d, !0, a) && e
        }
    a.c || (g = a.a = b, e = Th(g, d, !0, a) && e, a.c || (e = Th(g, d, !1, a) && e));
    if (c)
        for (f = 0; !a.c && f < c.length; f++) g = a.a = c[f], e = Th(g, d, !1, a) && e;
    return e
};
h.T = function() {
    J.D.T.call(this);
    this.rh();
    this.qh = null
};
h.listen = function(a, b, c, d) {
    Sh(this);
    return this.Ub.add(String(a), b, !1, c, d)
};
h.jh = function(a, b, c, d) {
    return this.Ub.add(String(a), b, !0, c, d)
};
h.Ga = function(a, b, c, d) {
    var e = this.Ub;
    a = String(a).toString();
    if (a in e.a) {
        var f = e.a[a];
        b = eh(f, b, c, d); - 1 < b ? (ch(f[b]), Cb(f, b), 0 == f.length && (delete e.a[a], e.b--), e = !0) : e = !1
    } else e = !1;
    return e
};
h.rh = function(a) {
    if (this.Ub) {
        var b = this.Ub;
        a = a && a.toString();
        var c = 0,
            d;
        for (d in b.a)
            if (!a || d == a) {
                for (var e = b.a[d], f = 0; f < e.length; f++) ++c, ch(e[f]);
                delete b.a[d];
                b.b--
            } b = c
    } else b = 0;
    return b
};
var Th = function(a, b, c, d) {
    b = a.Ub.a[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.$d && g.capture == c) {
            var k = g.listener,
                l = g.Pf || g.src;
            g.hf && fh(a.Ub, g);
            e = !1 !== k.call(l, d) && e
        }
    }
    return e && !d.defaultPrevented
};
J.prototype.tf = function(a, b) {
    return this.Ub.tf(String(a), b)
};
J.prototype.Ae = function(a, b, c, d) {
    return this.Ub.Ae(String(a), b, c, d)
};
J.prototype.hasListener = function(a, b) {
    return this.Ub.hasListener(void 0 !== a ? String(a) : void 0, b)
};
var Sh = function(a) {
    v(a.Ub, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
};
var Uh = function(a, b) {
    this.c = a;
    this.g = b;
    this.b = 0;
    this.a = null
};
Uh.prototype.get = function() {
    if (0 < this.b) {
        this.b--;
        var a = this.a;
        this.a = a.next;
        a.next = null
    } else a = this.c();
    return a
};
var Vh = function(a, b) {
    a.g(b);
    100 > a.b && (a.b++, b.next = a.a, a.a = b)
};
var Wh = function(a) {
        n.setTimeout(function() {
            throw a;
        }, 0)
    },
    Xh, Yh = function() {
        var a = n.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !x("Presto") && (a = function() {
            var e = cg("IFRAME");
            e.style.display = "none";
            Yd(e, tc(cc(ec)));
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.write(Bd(Md));
            e.close();
            var g = "callImmediate" + Math.random(),
                k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = p(function(l) {
                if (("*" == k || l.origin == k) && l.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, k)
                }
            }
        });
        if ("undefined" !== typeof a && !ud()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.di;
                    c.di = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    di: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in cg("SCRIPT") ? function(e) {
            var f = cg("SCRIPT");
            f.onreadystatechange =
                function() {
                    f.onreadystatechange = null;
                    f.parentNode.removeChild(f);
                    f = null;
                    e();
                    e = null
                };
            document.documentElement.appendChild(f)
        } : function(e) {
            n.setTimeout(e, 0)
        }
    };
var Zh = function() {
        this.b = this.a = null
    },
    ai = new Uh(function() {
        return new $h
    }, function(a) {
        a.reset()
    });
Zh.prototype.add = function(a, b) {
    var c = ai.get();
    c.set(a, b);
    this.b ? this.b.next = c : (v(!this.a), this.a = c);
    this.b = c
};
var di = function() {
        var a = ci,
            b = null;
        a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
        return b
    },
    $h = function() {
        this.next = this.a = this.Dc = null
    };
$h.prototype.set = function(a, b) {
    this.Dc = a;
    this.a = b;
    this.next = null
};
$h.prototype.reset = function() {
    this.next = this.a = this.Dc = null
};
var hi = function(a, b) {
        ei || fi();
        gi || (ei(), gi = !0);
        ci.add(a, b)
    },
    ei, fi = function() {
        if (n.Promise && n.Promise.resolve) {
            var a = n.Promise.resolve(void 0);
            ei = function() {
                a.then(ii)
            }
        } else ei = function() {
            var b = ii;
            !Na(n.setImmediate) || n.Window && n.Window.prototype && !x("Edge") && n.Window.prototype.setImmediate == n.setImmediate ? (Xh || (Xh = Yh()), Xh(b)) : n.setImmediate(b)
        }
    },
    gi = !1,
    ci = new Zh,
    ii = function() {
        for (var a; a = di();) {
            try {
                a.Dc.call(a.a)
            } catch (b) {
                Wh(b)
            }
            Vh(ai, a)
        }
        gi = !1
    };
var ji = function(a) {
    if (!a) return !1;
    try {
        return !!a.$goog_Thenable
    } catch (b) {
        return !1
    }
};
var mi = function(a) {
        this.a = 0;
        this.m = void 0;
        this.g = this.b = this.c = null;
        this.h = this.o = !1;
        if (a != Ga) try {
            var b = this;
            a.call(void 0, function(c) {
                ki(b, 2, c)
            }, function(c) {
                if (!(c instanceof li)) try {
                    if (c instanceof Error) throw c;
                    throw Error("Promise rejected.");
                } catch (d) {}
                ki(b, 3, c)
            })
        } catch (c) {
            ki(this, 3, c)
        }
    },
    ni = function() {
        this.next = this.context = this.c = this.b = this.a = null;
        this.g = !1
    };
ni.prototype.reset = function() {
    this.context = this.c = this.b = this.a = null;
    this.g = !1
};
var oi = new Uh(function() {
        return new ni
    }, function(a) {
        a.reset()
    }),
    pi = function(a, b, c) {
        var d = oi.get();
        d.b = a;
        d.c = b;
        d.context = c;
        return d
    },
    ri = function(a, b, c) {
        qi(a, b, c, null) || hi(Ua(b, a))
    },
    si = function(a) {
        new mi(function(b, c) {
            var d = a.length,
                e = [];
            if (d)
                for (var f = function(m, q) {
                        d--;
                        e[m] = q;
                        0 == d && b(e)
                    }, g = function(m) {
                        c(m)
                    }, k = 0, l; k < a.length; k++) l = a[k], ri(l, Ua(f, k), g);
            else b(e)
        })
    };
mi.prototype.then = function(a, b, c) {
    null != a && cb(a, "opt_onFulfilled should be a function.");
    null != b && cb(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
    return ti(this, Na(a) ? a : null, Na(b) ? b : null, c)
};
mi.prototype.$goog_Thenable = !0;
mi.prototype.cancel = function(a) {
    if (0 == this.a) {
        var b = new li(a);
        hi(function() {
            ui(this, b)
        }, this)
    }
};
var ui = function(a, b) {
        if (0 == a.a)
            if (a.c) {
                var c = a.c;
                if (c.b) {
                    for (var d = 0, e = null, f = null, g = c.b; g && (g.g || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.a && 1 == d ? ui(c, b) : (f ? (d = f, v(c.b), v(null != d), d.next == c.g && (c.g = d), d.next = d.next.next) : vi(c), wi(c, e, 3, b)))
                }
                a.c = null
            } else ki(a, 3, b)
    },
    yi = function(a, b) {
        a.b || 2 != a.a && 3 != a.a || xi(a);
        v(null != b.b);
        a.g ? a.g.next = b : a.b = b;
        a.g = b
    },
    ti = function(a, b, c, d) {
        var e = pi(null, null, null);
        e.a = new mi(function(f, g) {
            e.b = b ? function(k) {
                    try {
                        var l = b.call(d, k);
                        f(l)
                    } catch (m) {
                        g(m)
                    }
                } :
                f;
            e.c = c ? function(k) {
                try {
                    var l = c.call(d, k);
                    void 0 === l && k instanceof li ? g(k) : f(l)
                } catch (m) {
                    g(m)
                }
            } : g
        });
        e.a.c = a;
        yi(a, e);
        return e.a
    };
mi.prototype.G = function(a) {
    v(1 == this.a);
    this.a = 0;
    ki(this, 2, a)
};
mi.prototype.C = function(a) {
    v(1 == this.a);
    this.a = 0;
    ki(this, 3, a)
};
var ki = function(a, b, c) {
        0 == a.a && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, qi(c, a.G, a.C, a) || (a.m = c, a.a = b, a.c = null, xi(a), 3 != b || c instanceof li || zi(a, c)))
    },
    qi = function(a, b, c, d) {
        if (a instanceof mi) return null != b && cb(b, "opt_onFulfilled should be a function."), null != c && cb(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), yi(a, pi(b || Ga, c || null, d)), !0;
        if (ji(a)) return a.then(b, c, d), !0;
        if (Oa(a)) try {
            var e = a.then;
            if (Na(e)) return Ai(a,
                e, b, c, d), !0
        } catch (f) {
            return c.call(d, f), !0
        }
        return !1
    },
    Ai = function(a, b, c, d, e) {
        var f = !1,
            g = function(l) {
                f || (f = !0, c.call(e, l))
            },
            k = function(l) {
                f || (f = !0, d.call(e, l))
            };
        try {
            b.call(a, g, k)
        } catch (l) {
            k(l)
        }
    },
    xi = function(a) {
        a.o || (a.o = !0, hi(a.w, a))
    },
    vi = function(a) {
        var b = null;
        a.b && (b = a.b, a.b = b.next, b.next = null);
        a.b || (a.g = null);
        null != b && v(null != b.b);
        return b
    };
mi.prototype.w = function() {
    for (var a; a = vi(this);) wi(this, a, this.a, this.m);
    this.o = !1
};
var wi = function(a, b, c, d) {
        if (3 == c && b.c && !b.g)
            for (; a && a.h; a = a.c) a.h = !1;
        if (b.a) b.a.c = null, Bi(b, c, d);
        else try {
            b.g ? b.b.call(b.context) : Bi(b, c, d)
        } catch (e) {
            Ci.call(null, e)
        }
        Vh(oi, b)
    },
    Bi = function(a, b, c) {
        2 == b ? a.b.call(a.context, c) : a.c && a.c.call(a.context, c)
    },
    zi = function(a, b) {
        a.h = !0;
        hi(function() {
            a.h && Ci.call(null, b)
        })
    },
    Ci = Wh,
    li = function(a) {
        Wa.call(this, a)
    };
t(li, Wa);
li.prototype.name = "cancel";
var Di = function(a, b) {
    J.call(this);
    this.c = a || 1;
    this.b = b || n;
    this.g = p(this.o, this);
    this.h = Va()
};
t(Di, J);
Di.prototype.enabled = !1;
Di.prototype.a = null;
var Ei = function(a, b) {
    a.c = b;
    a.a && a.enabled ? (a.stop(), a.start()) : a.a && a.stop()
};
Di.prototype.o = function() {
    if (this.enabled) {
        var a = Va() - this.h;
        0 < a && a < .8 * this.c ? this.a = this.b.setTimeout(this.g, this.c - a) : (this.a && (this.b.clearTimeout(this.a), this.a = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
    }
};
Di.prototype.start = function() {
    this.enabled = !0;
    this.a || (this.a = this.b.setTimeout(this.g, this.c), this.h = Va())
};
Di.prototype.stop = function() {
    this.enabled = !1;
    this.a && (this.b.clearTimeout(this.a), this.a = null)
};
Di.prototype.T = function() {
    Di.D.T.call(this);
    this.stop();
    delete this.b
};
var Fi = function(a, b, c) {
        if (Na(a)) c && (a = p(a, c));
        else if (a && "function" == typeof a.handleEvent) a = p(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : n.setTimeout(a, b || 0)
    },
    Gi = function(a) {
        n.clearTimeout(a)
    };
var Hi = function() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        q = m = 0
    }

    function b(r) {
        for (var u = g, z = 0; 64 > z; z += 4) u[z / 4] = r[z] << 24 | r[z + 1] << 16 | r[z + 2] << 8 | r[z + 3];
        for (z = 16; 80 > z; z++) r = u[z - 3] ^ u[z - 8] ^ u[z - 14] ^ u[z - 16], u[z] = (r << 1 | r >>> 31) & 4294967295;
        r = e[0];
        var O = e[1],
            W = e[2],
            Ja = e[3],
            S = e[4];
        for (z = 0; 80 > z; z++) {
            if (40 > z)
                if (20 > z) {
                    var Ia = Ja ^ O & (W ^ Ja);
                    var Hd = 1518500249
                } else Ia = O ^ W ^ Ja, Hd = 1859775393;
            else 60 > z ? (Ia = O & W | Ja & (O | W), Hd = 2400959708) : (Ia = O ^ W ^ Ja, Hd = 3395469782);
            Ia = ((r << 5 | r >>>
                27) & 4294967295) + Ia + S + Hd + u[z] & 4294967295;
            S = Ja;
            Ja = W;
            W = (O << 30 | O >>> 2) & 4294967295;
            O = r;
            r = Ia
        }
        e[0] = e[0] + r & 4294967295;
        e[1] = e[1] + O & 4294967295;
        e[2] = e[2] + W & 4294967295;
        e[3] = e[3] + Ja & 4294967295;
        e[4] = e[4] + S & 4294967295
    }

    function c(r, u) {
        if ("string" === typeof r) {
            r = unescape(encodeURIComponent(r));
            for (var z = [], O = 0, W = r.length; O < W; ++O) z.push(r.charCodeAt(O));
            r = z
        }
        u || (u = r.length);
        z = 0;
        if (0 == m)
            for (; z + 64 < u;) b(r.slice(z, z + 64)), z += 64, q += 64;
        for (; z < u;)
            if (f[m++] = r[z++], q++, 64 == m)
                for (m = 0, b(f); z + 64 < u;) b(r.slice(z, z + 64)), z += 64, q += 64
    }

    function d() {
        var r = [],
            u = 8 * q;
        56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
        for (var z = 63; 56 <= z; z--) f[z] = u & 255, u >>>= 8;
        b(f);
        for (z = u = 0; 5 > z; z++)
            for (var O = 24; 0 <= O; O -= 8) r[u++] = e[z] >> O & 255;
        return r
    }
    for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0;
    var m, q;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        digestString: function() {
            for (var r = d(), u = "", z = 0; z < r.length; z++) u += "0123456789ABCDEF".charAt(Math.floor(r[z] / 16)) + "0123456789ABCDEF".charAt(r[z] % 16);
            return u
        }
    }
};
var Ji = function(a, b, c) {
        var d = [],
            e = [];
        if (1 == (La(c) ? 2 : 1)) return e = [b, a], w(d, function(k) {
            e.push(k)
        }), Ii(e.join(" "));
        var f = [],
            g = [];
        w(c, function(k) {
            g.push(k.key);
            f.push(k.value)
        });
        c = Math.floor((new Date).getTime() / 1E3);
        e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
        w(d, function(k) {
            e.push(k)
        });
        a = Ii(e.join(" "));
        a = [c, a];
        0 == g.length || a.push(g.join(""));
        return a.join("_")
    },
    Ii = function(a) {
        var b = Hi();
        b.update(a);
        return b.digestString().toLowerCase()
    };
var Ki = function() {
    this.a = document || {
        cookie: ""
    }
};
h = Ki.prototype;
h.isEnabled = function() {
    return navigator.cookieEnabled
};
h.set = function(a, b, c, d, e, f) {
    if ("object" === typeof c) {
        v(null == d);
        v(null == e);
        v(null == f);
        var g = c.Tq;
        f = c.Zq;
        e = c.domain;
        d = c.path;
        c = c.Sq
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === c && (c = -1);
    e = e ? ";domain=" + e : "";
    d = d ? ";path=" + d : "";
    f = f ? ";secure" : "";
    c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Va() + 1E3 * c)).toUTCString();
    this.a.cookie = a + "=" + b + e + d + c + f + (null != g ? ";samesite=" + g : "")
};
h.get = function(a, b) {
    for (var c = a + "=", d = (this.a.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
        f = yc(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
        if (f == a) return ""
    }
    return b
};
h.sb = function() {
    return Li(this).keys
};
h.Kb = function() {
    return Li(this).values
};
h.sf = function() {
    return this.a.cookie ? (this.a.cookie || "").split(";").length : 0
};
var Li = function(a) {
    a = (a.a.cookie || "").split(";");
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = yc(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return {
        keys: b,
        values: c
    }
};
var Mi = function(a) {
    var b = zf(String(n.location.href)),
        c;
    (c = n.__SAPISID || n.__APISID || n.__OVERRIDE_SID) ? c = !0: (c = new Ki, c = c.get("SAPISID") || c.get("APISID") || c.get("__Secure-3PAPISID") || c.get("SID"), c = !!c);
    if (c && (c = (b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? n.__SAPISID : n.__APISID, c || (c = new Ki, c = c.get(b ? "SAPISID" : "APISID") || c.get("__Secure-3PAPISID")), c)) {
        b = b ? "SAPISIDHASH" : "APISIDHASH";
        var d = String(n.location.href);
        return d && c && b ? [b, Ji(zf(d), c, a || null)].join(" ") : null
    }
    return null
};
var Ni = function(a, b, c) {
    this.reset(a, b, c, void 0, void 0)
};
Ni.prototype.a = null;
var Oi = 0;
Ni.prototype.reset = function(a, b, c, d, e) {
    "number" == typeof e || Oi++;
    d || Va();
    delete this.a
};
var Pi = function(a) {
        this.g = a;
        this.b = this.c = this.a = null
    },
    Qi = function(a, b) {
        this.name = a;
        this.value = b
    };
Qi.prototype.toString = function() {
    return this.name
};
var Ri = new Qi("SEVERE", 1E3),
    Si = new Qi("WARNING", 900),
    Ti = new Qi("INFO", 800),
    Ui = new Qi("CONFIG", 700),
    Vi = new Qi("FINE", 500);
Pi.prototype.getParent = function() {
    return this.a
};
var Wi = function(a) {
    if (a.c) return a.c;
    if (a.a) return Wi(a.a);
    $a("Root logger has no level set.");
    return null
};
Pi.prototype.log = function(a, b, c) {
    if (a.value >= Wi(this).value)
        for (Na(b) && (b = b()), a = new Ni(a, String(b), this.g), c && (a.a = c), c = this; c;) c = c.getParent()
};
Pi.prototype.config = function(a, b) {
    this.log(Ui, a, b)
};
var Xi = {},
    Yi = null,
    Zi = function(a) {
        Yi || (Yi = new Pi(""), Xi[""] = Yi, Yi.c = Ui);
        var b;
        if (!(b = Xi[a])) {
            b = new Pi(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1);
            c = Zi(a.substr(0, c));
            c.b || (c.b = {});
            c.b[d] = b;
            b.a = c;
            Xi[a] = b
        }
        return b
    };
var $i = function(a, b) {
        a && a.log(Ri, b, void 0)
    },
    aj = function(a, b) {
        a && a.log(Si, b, void 0)
    },
    bj = function(a, b) {
        a && a.log(Ti, b, void 0)
    },
    cj = function(a, b) {
        a && a.log(Vi, b, void 0)
    };
var dj = function(a) {
    v(0 < a, "Initial value must be greater than zero.");
    v(3E5 >= a, "Max value should be at least as large as initial value.");
    v(!0, "Randomness factor should be between 0 and 1.");
    this.a = this.b = this.c = a
};
dj.prototype.reset = function() {
    this.a = this.b = this.c
};
dj.prototype.Y = function() {
    return this.b
};
var ej = function() {};
ej.prototype.a = null;
var gj = function(a) {
    var b;
    (b = a.a) || (b = {}, fj(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
    return b
};
var hj, ij = function() {};
t(ij, ej);
var jj = function(a) {
        return (a = fj(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    },
    fj = function(a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.b = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b
    };
hj = new ij;
var kj = "StopIteration" in n ? n.StopIteration : {
        message: "StopIteration",
        stack: ""
    },
    lj = function() {};
lj.prototype.next = function() {
    throw kj;
};
lj.prototype.kc = function() {
    return this
};
var mj = function(a) {
        if (a instanceof lj) return a;
        if ("function" == typeof a.kc) return a.kc(!1);
        if (Ma(a)) {
            var b = 0,
                c = new lj;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw kj;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    },
    nj = function(a, b, c) {
        if (Ma(a)) try {
            w(a, b, c)
        } catch (d) {
            if (d !== kj) throw d;
        } else {
            a = mj(a);
            try {
                for (;;) b.call(c, a.next(), void 0, a)
            } catch (d) {
                if (d !== kj) throw d;
            }
        }
    },
    oj = function(a, b, c) {
        a = mj(a);
        try {
            for (; b.call(c, a.next(), void 0, a););
        } catch (d) {
            if (d !== kj) throw d;
        }
    };
var pj = function(a, b) {
    this.b = {};
    this.a = [];
    this.g = this.c = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if (a)
        if (a instanceof pj)
            for (c = a.sb(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
        else
            for (d in a) this.set(d, a[d])
};
pj.prototype.sf = function() {
    return this.c
};
pj.prototype.Kb = function() {
    qj(this);
    for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
    return a
};
pj.prototype.sb = function() {
    qj(this);
    return this.a.concat()
};
var sj = function(a, b) {
        return rj(a.b, b)
    },
    tj = function(a) {
        a.b = {};
        a.a.length = 0;
        a.c = 0;
        a.g = 0
    },
    qj = function(a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                rj(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            var e = {};
            for (c = b = 0; b < a.a.length;) d = a.a[b], rj(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    };
pj.prototype.get = function(a, b) {
    return rj(this.b, a) ? this.b[a] : b
};
pj.prototype.set = function(a, b) {
    rj(this.b, a) || (this.c++, this.a.push(a), this.g++);
    this.b[a] = b
};
pj.prototype.forEach = function(a, b) {
    for (var c = this.sb(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);
        a.call(b, f, e, this)
    }
};
pj.prototype.kc = function(a) {
    qj(this);
    var b = 0,
        c = this.g,
        d = this,
        e = new lj;
    e.next = function() {
        if (c != d.g) throw Error("The map has changed since the iterator was created");
        if (b >= d.a.length) throw kj;
        var f = d.a[b++];
        return a ? f : d.b[f]
    };
    return e
};
var rj = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var uj = function(a) {
        if (a.Kb && "function" == typeof a.Kb) return a.Kb();
        if ("string" === typeof a) return a.split("");
        if (Ma(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return Nb(a)
    },
    vj = function(a, b, c) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
        else if (Ma(a) || "string" === typeof a) w(a, b, c);
        else {
            if (a.sb && "function" == typeof a.sb) var d = a.sb();
            else if (a.Kb && "function" == typeof a.Kb) d = void 0;
            else if (Ma(a) || "string" === typeof a) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++) d.push(f)
            } else d = Ob(a);
            e = uj(a);
            f = e.length;
            for (var g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
        }
    };
var wj = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
    xj = function(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? fe(e) : "")
            }
        }
    },
    yj = function(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.substr(0, d), e, a.substr(c)];
        c = a[1];
        a[1] =
            b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    },
    zj = function(a, b, c) {
        bb(a);
        if (La(b)) {
            eb(b);
            for (var d = 0; d < b.length; d++) zj(a, String(b[d]), c)
        } else null != b && c.push(a + ("" === b ? "" : "=" + ee(b)))
    },
    Aj = function(a, b) {
        v(0 == Math.max(a.length - (b || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
        var c = [];
        for (b = b || 0; b < a.length; b += 2) zj(a[b], a[b + 1], c);
        return c.join("&")
    },
    Bj = function(a) {
        var b = [],
            c;
        for (c in a) zj(c, a[c], b);
        return b.join("&")
    },
    Cj = function(a, b) {
        var c = 2 == arguments.length ? Aj(arguments[1],
            0) : Aj(arguments, 1);
        return yj(a, c)
    },
    Dj = function(a, b, c) {
        c = null != c ? "=" + ee(c) : "";
        return yj(a, b + c)
    },
    Ej = function(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    },
    Fj = /#|$/,
    Gj = function() {
        var a = n.location.href,
            b = a.search(Fj),
            c = Ej(a, 0, "authuser", b);
        if (0 > c) return null;
        var d = a.indexOf("&", c);
        if (0 > d || d > b) d = b;
        c += 9;
        return fe(a.substr(c, d - c))
    },
    Hj = /[?&]($|#)/,
    Ij = function(a, b) {
        v(0 > a.indexOf("#") &&
            0 > a.indexOf("?"), "goog.uri.utils: Fragment or query identifiers are not supported: [%s]", a);
        wc(a, "/") && (a = a.substr(0, a.length - 1));
        vc(b, "/") && (b = b.substr(1));
        return oe(a, "/", b)
    };
var Jj = function(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    },
    Mj = function(a) {
        var b = [];
        Kj(new Lj, a, b);
        return b.join("")
    },
    Lj = function() {},
    Kj = function(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (La(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), Kj(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Nj(d, c), c.push(":"), Kj(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    Nj(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    },
    Oj = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    },
    Pj = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
    Nj = function(a, b) {
        b.push('"', a.replace(Pj, function(c) {
            var d = Oj[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Oj[c] = d);
            return d
        }), '"')
    };
var Qj = function(a) {
    J.call(this);
    this.headers = new pj;
    this.jg = a || null;
    this.Hb = !1;
    this.hg = this.Aa = null;
    this.Ui = this.Xd = "";
    this.Ad = 0;
    this.Pe = "";
    this.zd = this.dh = this.Sf = this.Hg = !1;
    this.ce = 0;
    this.dg = null;
    this.gj = "";
    this.gg = this.Ue = !1
};
t(Qj, J);
Qj.prototype.F = Zi("goog.net.XhrIo");
var Rj = /^https?$/i,
    Sj = ["POST", "PUT"],
    Tj = [],
    Uj = function(a, b, c, d, e, f, g) {
        var k = new Qj;
        Tj.push(k);
        b && k.listen("complete", b);
        k.jh("ready", k.fk);
        f && (k.ce = Math.max(0, f));
        g && (k.Ue = g);
        k.send(a, c, d, e);
        return k
    };
Qj.prototype.fk = function() {
    this.Ia();
    Db(Tj, this)
};
Qj.prototype.send = function(a, b, c, d) {
    if (this.Aa) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Xd + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.Xd = a;
    this.Pe = "";
    this.Ad = 0;
    this.Ui = b;
    this.Hg = !1;
    this.Hb = !0;
    this.Aa = this.jg ? jj(this.jg) : jj(hj);
    this.hg = this.jg ? gj(this.jg) : gj(hj);
    this.Aa.onreadystatechange = p(this.cj, this);
    try {
        cj(this.F, Vj(this, "Opening Xhr")), this.dh = !0, this.Aa.open(b, String(a), !0), this.dh = !1
    } catch (f) {
        cj(this.F, Vj(this, "Error opening Xhr: " + f.message));
        this.nf(5,
            f);
        return
    }
    a = c || "";
    var e = new pj(this.headers);
    d && vj(d, function(f, g) {
        e.set(g, f)
    });
    d = yb(e.sb(), Wj);
    c = n.FormData && a instanceof n.FormData;
    !Ab(Sj, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function(f, g) {
        this.Aa.setRequestHeader(g, f)
    }, this);
    this.gj && (this.Aa.responseType = this.gj);
    "withCredentials" in this.Aa && this.Aa.withCredentials !== this.Ue && (this.Aa.withCredentials = this.Ue);
    try {
        Yj(this), 0 < this.ce && (this.gg = Zj(this.Aa), cj(this.F, Vj(this, "Will abort after " +
            this.ce + "ms if incomplete, xhr2 " + this.gg)), this.gg ? (this.Aa.timeout = this.ce, this.Aa.ontimeout = p(this.dd, this)) : this.dg = Fi(this.dd, this.ce, this)), cj(this.F, Vj(this, "Sending request")), this.Sf = !0, this.Aa.send(a), this.Sf = !1
    } catch (f) {
        cj(this.F, Vj(this, "Send error: " + f.message)), this.nf(5, f)
    }
};
var Zj = function(a) {
        return y && Te(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
    },
    Wj = function(a) {
        return "content-type" == a.toLowerCase()
    };
Qj.prototype.dd = function() {
    "undefined" != typeof za && this.Aa && (this.Pe = "Timed out after " + this.ce + "ms, aborting", this.Ad = 8, cj(this.F, Vj(this, this.Pe)), this.dispatchEvent("timeout"), this.abort(8))
};
Qj.prototype.nf = function(a, b) {
    this.Hb = !1;
    this.Aa && (this.zd = !0, this.Aa.abort(), this.zd = !1);
    this.Pe = b;
    this.Ad = a;
    ak(this);
    bk(this)
};
var ak = function(a) {
    a.Hg || (a.Hg = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
};
Qj.prototype.abort = function(a) {
    this.Aa && this.Hb && (cj(this.F, Vj(this, "Aborting")), this.Hb = !1, this.zd = !0, this.Aa.abort(), this.zd = !1, this.Ad = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), bk(this))
};
Qj.prototype.T = function() {
    this.Aa && (this.Hb && (this.Hb = !1, this.zd = !0, this.Aa.abort(), this.zd = !1), bk(this, !0));
    Qj.D.T.call(this)
};
Qj.prototype.cj = function() {
    this.isDisposed() || (this.dh || this.Sf || this.zd ? ck(this) : this.Xm())
};
Qj.prototype.Xm = function() {
    ck(this)
};
var ck = function(a) {
        if (a.Hb && "undefined" != typeof za)
            if (a.hg[1] && 4 == dk(a) && 2 == a.Sc()) cj(a.F, Vj(a, "Local request error detected and ignored"));
            else if (a.Sf && 4 == dk(a)) Fi(a.cj, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == dk(a)) {
            cj(a.F, Vj(a, "Request complete"));
            a.Hb = !1;
            try {
                if (ek(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
                else {
                    a.Ad = 6;
                    try {
                        var b = 2 < dk(a) ? a.Aa.statusText : ""
                    } catch (c) {
                        cj(a.F, "Can not get status: " + c.message), b = ""
                    }
                    a.Pe = b + " [" + a.Sc() + "]";
                    ak(a)
                }
            } finally {
                bk(a)
            }
        }
    },
    bk = function(a,
        b) {
        if (a.Aa) {
            Yj(a);
            var c = a.Aa,
                d = a.hg[0] ? Ga : null;
            a.Aa = null;
            a.hg = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
                $i(a.F, "Problem encountered resetting onreadystatechange: " + e.message)
            }
        }
    },
    Yj = function(a) {
        a.Aa && a.gg && (a.Aa.ontimeout = null);
        a.dg && (Gi(a.dg), a.dg = null)
    };
Qj.prototype.mb = function() {
    return !!this.Aa
};
var ek = function(a) {
        var b = a.Sc();
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = String(a.Xd).match(wj)[1] || null, !a && n.self && n.self.location && (a = n.self.location.protocol, a = a.substr(0, a.length - 1)), b = !Rj.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    },
    dk = function(a) {
        return a.Aa ? a.Aa.readyState : 0
    };
Qj.prototype.Sc = function() {
    try {
        return 2 < dk(this) ? this.Aa.status : -1
    } catch (a) {
        return -1
    }
};
var fk = function(a) {
        try {
            return a.Aa ? a.Aa.responseText : ""
        } catch (b) {
            return cj(a.F, "Can not get responseText: " + b.message), ""
        }
    },
    gk = function(a) {
        if (a.Aa) {
            a: {
                a = a.Aa.responseText;
                if (n.JSON) try {
                    var b = n.JSON.parse(a);
                    v("object" == typeof b);
                    var c = b;
                    break a
                } catch (d) {}
                c = Jj(a)
            }
            return c
        }
    };
Qj.prototype.getResponseHeader = function(a) {
    if (this.Aa && 4 == dk(this)) return a = this.Aa.getResponseHeader(a), null === a ? void 0 : a
};
Qj.prototype.getAllResponseHeaders = function() {
    return this.Aa && 4 == dk(this) ? this.Aa.getAllResponseHeaders() || "" : ""
};
var Vj = function(a, b) {
    return b + " [" + a.Ui + " " + a.Xd + " " + a.Sc() + "]"
};
var hk = function(a, b, c) {
    Uj(a.url, function(d) {
        d = d.target;
        ek(d) ? b(fk(d)) : c(d.Sc())
    }, a.un, a.body, a.rn, a.Vn, a.withCredentials)
};
var ik = function(a) {
    kf(this, a, -1, null)
};
t(ik, ff);
var jk = function(a) {
    kf(this, a, -1, null)
};
t(jk, ff);
var lk = function(a) {
    kf(this, a, 30, kk)
};
t(lk, ff);
var kk = [3, 20, 27];
var nk = function(a) {
    kf(this, a, 17, mk)
};
t(nk, ff);
var mk = [3, 5],
    ok = function(a) {
        var b = Va().toString();
        return A(a, 4, b)
    },
    pk = function(a, b) {
        return pf(a, 3, b)
    },
    qk = function(a, b) {
        return A(a, 14, b)
    };
var sk = function(a) {
    kf(this, a, 6, rk)
};
t(sk, ff);
var rk = [5];
var tk = function(a) {
    kf(this, a, -1, null)
};
t(tk, ff);
var uk = new function() {
    this.a = tk
};
var wk = function(a, b, c, d, e, f, g, k, l, m, q) {
    J.call(this);
    this.ia = a;
    this.N = b || Ga;
    this.h = new nk;
    this.Na = d;
    this.V = q;
    this.a = [];
    this.R = "";
    this.xa = Ua(Gf, 0, 1);
    this.G = e || null;
    this.m = c || null;
    this.C = g || !1;
    this.K = l || null;
    this.na = this.X = !1;
    this.W = this.O = -1;
    this.c = null;
    this.F = Zi("playlog.clearcut.ClearcutBase");
    this.Ue = !k;
    this.L = 0;
    this.ra = 1;
    this.Z = f || !1;
    a = new jk;
    a = A(a, 1, 1);
    f || (f = new ik, b = document.documentElement.getAttribute("lang"), f = A(f, 5, b), of (a, 11, f)); of (this.h, 1, a);
    A(this.h, 2, this.ia);
    this.g = new dj(1E4);
    this.b =
        new Di(this.g.Y());
    Ng(this, this.b);
    G(this.b, "tick", ob(vk(this, m)), !1, this);
    this.w = new Di(6E5);
    Ng(this, this.w);
    G(this.w, "tick", ob(vk(this, m)), !1, this);
    this.C || this.w.start();
    this.Z || (G(Yf(), "beforeunload", this.o, !1, this), G(Yf(), "unload", this.o, !1, this), G(document, "pagehide", this.o, !1, this))
};
t(wk, J);
var vk = function(a, b) {
    return b ? function() {
        b().then(a.flush.bind(a))
    } : a.flush
};
wk.prototype.T = function() {
    this.o();
    wk.D.T.call(this)
};
var xk = function(a) {
    a.G || (a.G = .01 > a.xa() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
    return a.G
};
wk.prototype.log = function(a) {
    a = uf(a);
    var b = this.ra++;
    A(a, 21, b);
    if (!lf(a, 1)) {
        b = a;
        var c = Va().toString();
        A(b, 1, c)
    }
    this.c && (b = uf(this.c), of (a, 16, b));
    for (; 1E3 <= this.a.length;) this.a.shift(), ++this.L;
    this.a.push(a);
    this.dispatchEvent(new yk(a));
    this.C || this.b.enabled || this.b.start()
};
wk.prototype.flush = function(a, b) {
    if (0 == this.a.length) a && a();
    else {
        var c = Va();
        if (this.W > c && this.O < c) bj(this.F, "Not flushing because server requested delay."), b && b("throttled");
        else {
            var d = qk(pk(ok(uf(this.h)), this.a), this.L);
            c = {};
            var e = this.N();
            e && (c.Authorization = e);
            var f = xk(this);
            this.m && (c["X-Goog-AuthUser"] = this.m, f = Dj(f, "authuser", this.m));
            this.K && (c["X-Goog-PageId"] = this.K, f = Dj(f, "pageId", this.K));
            if (e && this.R == e) bj(this.F, "XHR with unauthorized request not retried"), b && b("stale-auth-token");
            else {
                bj(this.F,
                    "Flushing log to clearcut.");
                this.a = [];
                this.b.enabled && this.b.stop();
                this.L = 0;
                var g = d.o();
                c = {
                    url: f,
                    body: g,
                    Oq: 1,
                    rn: c,
                    un: "POST",
                    withCredentials: this.Ue,
                    Vn: 0
                };
                f = p(function(k) {
                    this.g.reset();
                    Ei(this.b, this.g.Y());
                    if (k) {
                        try {
                            var l = JSON.parse(k.replace(")]}'\n", ""));
                            var m = new sk(l)
                        } catch (q) {
                            aj(this.F, "Response parse failed: " + q)
                        }
                        m && (k = mf(m, "-1"), k = Number(k), 0 < k && (this.O = Va(), this.W = this.O + k), m.c ? (m.a || (m.a = {}), uk.a ? (!m.a[175237375] && m.c[175237375] && (m.a[175237375] = new uk.a(m.c[175237375])), m = m.a[175237375]) :
                            m = m.c[175237375]) : m = void 0, m && (m = mf(m, -1), -1 != m && (this.g = new dj(1 > m ? 1 : m), Ei(this.b, this.g.Y()))))
                    }
                    a && a()
                }, this);
                g = p(function(k) {
                    nf(d, lk, 3);
                    var l = d.a[3];
                    l == hf && (l = d.a[3] = []);
                    var m = this.g;
                    m.a = Math.min(3E5, 2 * m.a);
                    m.b = Math.min(3E5, m.a + Math.round(.2 * (Math.random() - .5) * m.a));
                    Ei(this.b, this.g.Y());
                    401 == k && e && (this.R = e);
                    if (500 <= k && 600 > k || 401 == k || 0 == k) this.a = l.concat(this.a), this.C || this.b.enabled || this.b.start();
                    aj(this.F, "Flush failed. Status code: " + k);
                    b && b("net-send-failed", k)
                }, this);
                this.V ? this.V.send(c,
                    f, g) : this.Na(c, f, g)
            }
        }
    }
};
wk.prototype.o = function() {
    this.X && zk(this);
    this.na && Ak(this);
    this.flush()
};
var zk = function(a) {
        bj(a.F, "Flushing log using sendBeacon.");
        Bk(a, 32, 10, function(b, c) {
            b = Dj(b, "format", "json");
            return Yf().navigator.sendBeacon(b, c.o())
        })
    },
    Ak = function(a) {
        bj(a.F, "Flushing log using Image GET.");
        Bk(a, 6, 5, function(b, c) {
            c = c.o();
            for (var d = [], e = 0, f = 0; f < c.length; f++) {
                var g = c.charCodeAt(f);
                255 < g && (d[e++] = g & 255, g >>= 8);
                d[e++] = g
            }
            c = ef(d, 3);
            c = Cj(b, "format", "base64json", "p", c);
            b = new Image;
            mb(b, "HTMLImageElement");
            c = c instanceof Oc ? c : Uc(c, /^data:image\//i.test(c));
            b.src = Pc(c);
            return !0
        })
    },
    Bk = function(a,
        b, c, d) {
        if (0 != a.a.length) {
            var e = xk(a);
            for (var f = e.search(Fj), g = 0, k, l = []; 0 <= (k = Ej(e, g, "format", f));) l.push(e.substring(g, k)), g = Math.min(e.indexOf("&", k) + 1 || f, f);
            l.push(e.substr(g));
            e = l.join("").replace(Hj, "$1");
            e = Cj(e, "auth", a.N(), "authuser", a.m || "0");
            for (f = 0; f < c && a.a.length; ++f) {
                g = a.a.slice(0, b);
                k = pk(ok(uf(a.h)), g);
                if (!d(e, k)) break;
                a.a = a.a.slice(g.length)
            }
        }
    },
    yk = function() {
        this.type = "event-logged"
    };
t(yk, F);
var Ck = function(a, b, c, d, e, f, g) {
    wk.call(this, a, Mi, b, hk, c, d, e, void 0, f, g)
};
t(Ck, wk);
var Dk = function(a, b) {
    this.a = new Ck(375, a, void 0, !1, !0);
    Ng(this, this.a);
    this.a.X = !!Yf().navigator.sendBeacon && (af || Xe && Te(45));
    this.a.na = !0;
    b && 0 < b.length && (a = new yf, a = A(a, 3, b || []), b = this.a, a ? (b.c || (b.c = new wf), a = a.o(), A(b.c, 4, a)) : b.c && A(b.c, 4, void 0));
    this.g = 0;
    this.b = new Di(1E3);
    Ng(this, this.b);
    G(this.b, "tick", this.c, !1, this);
    this.b.start()
};
t(Dk, J);
Dk.prototype.T = function() {
    this.b.stop();
    qh(this.b, "tick", this.c, !1, this);
    this.c();
    Dk.D.T.call(this)
};
Dk.prototype.c = function() {
    0 < this.g && this.a.flush(p(this.h, this))
};
Dk.prototype.h = function() {
    this.g = 0
};
Dk.prototype.log = function(a) {
    this.a.log(a);
    900 <= ++this.g && this.c()
};
var Ek = function(a) {
        return (a = a.exec(qd)) ? a[1] : ""
    },
    Fk = function() {
        if (Xe) return Ek(/Firefox\/([0-9.]+)/);
        if (y || ze || ye) return Re;
        if (af) return te() ? Ek(/CriOS\/([0-9.]+)/) : Ek(/Chrome\/([0-9.]+)/);
        if (bf && !te()) return Ek(/Version\/([0-9.]+)/);
        if (Ye || Ze) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(qd);
            if (a) return a[1] + "." + a[2]
        } else if ($e) return (a = Ek(/Android\s+([0-9.]+)/)) ? a : Ek(/Version\/([0-9.]+)/);
        return ""
    }(),
    Gk = function(a) {
        return 0 <= Lc(Fk, a)
    };
var Hk = function() {
    this.a = y ? Gk(9) : af && Gk(25) || y && Gk(8) || ze || Xe && Gk(19) || ye && Gk(12.1) || bf && Gk(5.1) || Ze && Gk(3.2) || $e && Gk(2.1)
};
Ha(Hk);
var Kk = function(a, b) {
        var c = Ik[b];
        b = Jk[b];
        c = null != c ? Gb(c) : [];
        if (a.a && null != b)
            for (a = 0; a < b.length; a++) c.push(b[a]);
        return c
    },
    Mk = function(a) {
        return 0 <= a.indexOf("-i0-") && !Lk(a)
    },
    Lk = function(a) {
        return 0 <= a.indexOf("-i0-handwrit")
    },
    Ik = {
        af: ["latn-002-t-k0-und"],
        am: ["am-t-i0-und", "und-ethi-t-k0-und"],
        ar: ["ar-t-i0-und", "ar-t-k0-und"],
        be: ["be-t-i0-und", "be-t-k0-und"],
        bg: ["bg-t-i0-und", "bg-t-k0-und", "bg-t-k0-qwerty"],
        bn: ["bn-t-i0-und", "bn-t-k0-und", "bn-t-und-latn-k0-und"],
        bs: ["bs-t-k0-und"],
        ca: ["ca-t-k0-und"],
        chr: ["chr-t-k0-und", "chr-t-und-latn-k0-und"],
        cs: ["cs-t-k0-und", "cs-t-k0-qwertz"],
        cy: ["latn-002-t-k0-und"],
        da: ["da-t-k0-und"],
        de: ["de-t-k0-und", "de-ch-t-k0-und", "en-us-t-k0-intl"],
        el: ["el-t-i0-und", "el-t-k0-und"],
        en: ["en-t-k0-und", "en-t-k0-dvorak"],
        es: ["es-t-k0-und", "en-us-t-k0-intl"],
        et: ["et-t-k0-und"],
        eu: ["eu-t-k0-und"],
        fa: ["fa-t-i0-und", "fa-t-k0-und"],
        fi: ["fi-t-k0-und"],
        fr: ["fr-t-k0-und", "en-us-t-k0-intl"],
        ga: ["latn-002-t-k0-und"],
        gl: ["gl-t-k0-und"],
        gu: ["gu-t-i0-und", "gu-t-k0-und", "gu-t-und-latn-k0-qwerty"],
        ha: ["latn-002-t-k0-und"],
        hi: ["hi-t-i0-und", "hi-t-k0-und", "hi-t-k0-qwerty"],
        hr: ["hr-t-k0-und"],
        ht: ["fr-t-k0-und"],
        hu: ["hu-t-k0-101key"],
        hy: ["hy-hyr-t-k0-und", "hy-hyt-t-k0-und"],
        id: ["latn-002-t-k0-und"],
        ig: ["latn-002-t-k0-und"],
        is: ["is-t-k0-und"],
        it: ["it-t-k0-und", "en-us-t-k0-intl"],
        iw: ["he-t-i0-und", "he-t-k0-und"],
        jw: ["latn-002-t-k0-und"],
        ja: ["ja-t-ja-hira-i0-und"],
        ka: ["ka-t-k0-und", "ka-t-k0-legacy"],
        kk: ["kk-t-k0-und"],
        km: ["km-t-k0-und"],
        kn: ["kn-t-i0-und", "kn-t-k0-und", "kn-t-und-latn-k0-und"],
        ko: ["ko-t-k0-und"],
        ku: ["ku-t-k0-und"],
        ky: ["ky-cyrl-t-k0-und"],
        lb: ["fr-t-k0-und", "en-us-t-k0-intl"],
        lo: ["lo-t-k0-und"],
        lt: ["lt-t-k0-und"],
        lv: ["lv-t-k0-und"],
        mg: ["latn-002-t-k0-und"],
        mi: ["mi-t-k0-und"],
        mk: ["mk-t-k0-und"],
        ml: ["ml-t-i0-und", "ml-t-und-latn-k0-und", "ml-t-k0-und"],
        mn: ["mn-cyrl-t-k0-und"],
        mr: ["mr-t-i0-und", "hi-t-k0-qwerty"],
        ms: ["latn-002-t-k0-und"],
        mt: ["mt-t-k0-und"],
        my: ["my-t-k0-und", "my-t-k0-myansan"],
        ne: ["ne-t-i0-und", "ne-t-k0-und", "ne-t-und-latn-k0-und"],
        nl: ["nl-t-k0-und", "en-us-t-k0-intl"],
        no: ["no-t-k0-und"],
        ny: ["latn-002-t-k0-und"],
        pa: ["pa-t-i0-und", "pa-guru-t-und-latn-k0-und", "pa-guru-t-k0-und"],
        pl: ["pl-t-k0-und"],
        ps: ["ps-t-k0-und"],
        pt: ["pt-br-t-k0-und", "pt-pt-t-k0-und", "en-us-t-k0-intl"],
        ro: ["ro-t-k0-und", "ro-t-k0-legacy", "ro-t-k0-extended"],
        ru: ["ru-t-i0-und", "ru-t-k0-und"],
        rw: ["latn-002-t-k0-und"],
        sd: ["sd-t-k0-und"],
        si: ["si-t-i0-und", "si-t-k0-und"],
        sk: ["sk-t-k0-und", "sk-t-k0-qwerty"],
        sl: ["sl-t-k0-und"],
        sn: ["latn-002-t-k0-und"],
        so: ["latn-002-t-k0-und"],
        sq: ["sq-t-k0-und"],
        sr: ["sr-t-i0-und", "sr-cyrl-t-k0-und",
            "sr-latn-t-k0-und"
        ],
        st: ["latn-002-t-k0-und"],
        su: ["latn-002-t-k0-und"],
        sv: ["sv-t-k0-und"],
        sw: ["latn-002-t-k0-und"],
        ta: "ta-t-i0-und ta-t-k0-ta99 ta-t-und-latn-k0-und ta-t-k0-und ta-t-k0-typewriter ta-t-k0-itrans".split(" "),
        te: ["te-t-i0-und", "te-t-k0-und", "te-t-und-latn-k0-und"],
        tg: ["tg-t-k0-und"],
        th: ["th-t-i0-und", "th-t-k0-und", "th-t-k0-pattajoti", "th-t-k0-tis"],
        tk: ["latn-002-t-k0-und"],
        tl: ["latn-002-t-k0-und"],
        tr: ["tr-t-k0-und", "tr-t-k0-legacy"],
        tt: ["tt-t-k0-und"],
        ug: ["ug-t-k0-und"],
        uk: ["uk-t-i0-und",
            "uk-t-k0-101key"
        ],
        ur: ["ur-t-i0-und", "ur-t-k0-und"],
        uz: ["uz-latn-t-k0-und", "uz-cyrl-t-k0-und", "uz-cyrl-t-k0-legacy"],
        vi: ["vi-t-i0-und", "vi-t-k0-legacy", "vi-t-k0-viqr", "vi-t-k0-und", "vi-t-k0-vni"],
        wo: ["latn-002-t-k0-und"],
        xh: ["latn-002-t-k0-und"],
        yi: ["yi-t-k0-und"],
        yo: ["latn-002-t-k0-und"],
        yue: ["yue-hant-t-i0-und", "zh-hant-t-i0-cangjie-1982"],
        zu: ["latn-002-t-k0-und"],
        "zh-CN": "zh-t-i0-pinyin zh-t-i0-wubi-1986 zh-hant-t-i0-und zh-hant-t-i0-cangjie-1982 zh-hant-t-i0-pinyin yue-hant-t-i0-und".split(" "),
        "zh-TW": ["zh-hant-t-i0-und", "zh-hant-t-i0-cangjie-1982", "zh-hant-t-i0-pinyin", "yue-hant-t-i0-und"]
    },
    Jk = {
        af: ["af-t-i0-handwrit"],
        am: ["am-t-i0-handwrit"],
        ar: ["ar-t-i0-handwrit"],
        auto: ["mul-t-i0-handwrit"],
        az: ["az-t-i0-handwrit"],
        be: ["be-t-i0-handwrit"],
        bg: ["bg-t-i0-handwrit"],
        bn: ["bn-t-i0-handwrit"],
        bs: ["bs-t-i0-handwrit"],
        ca: ["ca-t-i0-handwrit"],
        ceb: ["ceb-t-i0-handwrit"],
        co: ["co-t-i0-handwrit"],
        cs: ["cs-t-i0-handwrit"],
        cy: ["cy-t-i0-handwrit"],
        da: ["da-t-i0-handwrit"],
        de: ["de-t-i0-handwrit"],
        el: ["el-t-i0-handwrit"],
        en: ["en-t-i0-handwrit"],
        eo: ["eo-t-i0-handwrit"],
        es: ["es-t-i0-handwrit"],
        et: ["et-t-i0-handwrit"],
        eu: ["eu-t-i0-handwrit"],
        fa: ["fa-t-i0-handwrit"],
        fi: ["fi-t-i0-handwrit"],
        fr: ["fr-t-i0-handwrit"],
        fy: ["fy-t-i0-handwrit"],
        ga: ["ga-t-i0-handwrit"],
        gd: ["gd-t-i0-handwrit"],
        gl: ["gl-t-i0-handwrit"],
        gu: ["gu-t-i0-handwrit"],
        haw: ["haw-t-i0-handwrit"],
        hi: ["hi-t-i0-handwrit"],
        hmn: ["hmn-t-i0-handwrit"],
        hr: ["hr-t-i0-handwrit"],
        ht: ["ht-t-i0-handwrit"],
        hu: ["hu-t-i0-handwrit"],
        hy: ["hy-t-i0-handwrit"],
        id: ["id-t-i0-handwrit"],
        is: ["is-t-i0-handwrit"],
        it: ["it-t-i0-handwrit"],
        iw: ["he-t-i0-handwrit"],
        ja: ["ja-t-i0-handwrit"],
        jv: ["jv-t-i0-handwrit"],
        ka: ["ka-t-i0-handwrit"],
        kk: ["kk-t-i0-handwrit"],
        km: ["km-t-i0-handwrit"],
        kn: ["kn-t-i0-handwrit"],
        ko: ["ko-t-i0-handwrit"],
        ku: ["ku-t-i0-handwrit"],
        ky: ["ky-t-i0-handwrit"],
        la: ["la-t-i0-handwrit"],
        lb: ["lb-t-i0-handwrit"],
        lo: ["lo-t-i0-handwrit"],
        lt: ["lt-t-i0-handwrit"],
        lv: ["lv-t-i0-handwrit"],
        mg: ["mg-t-i0-handwrit"],
        mi: ["mi-t-i0-handwrit"],
        mk: ["mk-t-i0-handwrit"],
        ml: ["ml-t-i0-handwrit"],
        mn: ["mn-t-i0-handwrit"],
        mr: ["mr-t-i0-handwrit"],
        ms: ["ms-t-i0-handwrit"],
        mt: ["mt-t-i0-handwrit"],
        my: ["my-t-i0-handwrit"],
        ne: ["ne-t-i0-handwrit"],
        nl: ["nl-t-i0-handwrit"],
        no: ["no-t-i0-handwrit"],
        ny: ["ny-t-i0-handwrit"],
        pa: ["pa-t-i0-handwrit"],
        pl: ["pl-t-i0-handwrit"],
        pt: ["pt-t-i0-handwrit"],
        ro: ["ro-t-i0-handwrit"],
        ru: ["ru-t-i0-handwrit"],
        si: ["si-t-i0-handwrit"],
        sk: ["sk-t-i0-handwrit"],
        sl: ["sl-t-i0-handwrit"],
        sm: ["sm-t-i0-handwrit"],
        sn: ["sn-t-i0-handwrit"],
        so: ["so-t-i0-handwrit"],
        sq: ["sq-t-i0-handwrit"],
        sr: ["sr-t-i0-handwrit"],
        su: ["su-t-i0-handwrit"],
        sv: ["sv-t-i0-handwrit"],
        sw: ["sw-t-i0-handwrit"],
        ta: ["ta-t-i0-handwrit"],
        te: ["te-t-i0-handwrit"],
        tg: ["tg-t-i0-handwrit"],
        th: ["th-t-i0-handwrit"],
        tl: ["fil-t-i0-handwrit"],
        tr: ["tr-t-i0-handwrit"],
        uk: ["uk-t-i0-handwrit"],
        ur: ["ur-t-i0-handwrit"],
        uz: ["uz-t-i0-handwrit"],
        vi: ["vi-t-i0-handwrit"],
        xh: ["xh-t-i0-handwrit"],
        "zh-CN": ["zh-t-i0-handwrit"],
        zu: ["zu-t-i0-handwrit"]
    };
var Nk = function(a) {
    kf(this, a, -1, null)
};
t(Nk, ff);
Nk.prototype.Md = function() {
    return lf(this, 1)
};
Nk.prototype.eb = function() {
    return lf(this, 4)
};
var Ok = function(a) {
    kf(this, a, -1, null)
};
t(Ok, ff);
var Qk = function(a) {
    kf(this, a, -1, null)
};
t(Qk, ff);
var Rk = function(a) {
    kf(this, a, -1, null)
};
t(Rk, ff);
var Tk = function(a) {
    kf(this, a, -1, Sk)
};
t(Tk, ff);
var Sk = [1];
var Uk = function(a) {
    kf(this, a, -1, null)
};
t(Uk, ff);
var Vk = function(a) {
    kf(this, a, -1, null)
};
t(Vk, ff);
var Wk = function(a) {
    kf(this, a, -1, null)
};
t(Wk, ff);
var Xk = function(a) {
    kf(this, a, -1, null)
};
t(Xk, ff);
var Yk = function(a) {
    kf(this, a, -1, null)
};
t(Yk, ff);
Yk.prototype.Ua = function() {
    return lf(this, 1)
};
var Zk = function(a) {
    kf(this, a, -1, null)
};
t(Zk, ff);
var al = function(a) {
    kf(this, a, -1, $k)
};
t(al, ff);
var $k = [1, 3, 4];
var bl = function(a) {
    kf(this, a, -1, null)
};
t(bl, ff);
var cl = function() {
    var a = new bl;
    return A(a, 1, 1)
};
var dl = function(a) {
    kf(this, a, -1, null)
};
t(dl, ff);
dl.prototype.Jb = function() {
    return lf(this, 1)
};
var el = function(a) {
    kf(this, a, -1, null)
};
t(el, ff);
var gl = function(a) {
    kf(this, a, -1, fl)
};
t(gl, ff);
var fl = [1];
gl.prototype.eb = function() {
    return lf(this, 5)
};
var hl = function(a) {
    kf(this, a, -1, null)
};
t(hl, ff);
var jl = function(a) {
    kf(this, a, -1, il)
};
t(jl, ff);
var il = [2];
var kl = function(a) {
    kf(this, a, -1, null)
};
t(kl, ff);
var ll = function() {
    var a = new kl;
    return A(a, 1, 3)
};
var ml = function(a) {
    kf(this, a, -1, null)
};
t(ml, ff);
var nl = function(a) {
    kf(this, a, -1, null)
};
t(nl, ff);
nl.prototype.qf = function() {
    return lf(this, 4)
};
nl.prototype.Li = function() {
    return null != lf(this, 4)
};
var ol = function(a) {
    kf(this, a, -1, null)
};
t(ol, ff);
var ql = function(a) {
    kf(this, a, -1, pl)
};
t(ql, ff);
var pl = [3, 4];
var sl = function(a) {
    kf(this, a, -1, rl)
};
t(sl, ff);
var rl = [3];
sl.prototype.Be = function() {
    return lf(this, 1)
};
var ul = function(a) {
    kf(this, a, -1, tl)
};
t(ul, ff);
var tl = [2];
var wl = function(a) {
    kf(this, a, -1, vl)
};
t(wl, ff);
var vl = [26, 80];
wl.prototype.Ce = function() {
    return lf(this, 1)
};
wl.prototype.Be = function() {
    return lf(this, 53)
};
var xl = function() {
        this.h = 0;
        this.G = this.o = this.g = this.c = this.w = "";
        this.m = this.b = this.C = 0;
        Hk.M();
        this.a = null
    },
    yl = {
        bh: 27,
        btn: 1,
        clks: 2,
        clkt: 3,
        pb: 4,
        sel: 5,
        selalt: 6,
        tws_confirm: 7,
        tws_lsugg: 8,
        tws_revert: 9,
        tws_spell: 10,
        is: 11
    };
Ha(xl);
var zl = function() {
        var a = DATA.DisplayLanguage,
            b = xl.M();
        b.h = 2;
        b.w = a;
        return b
    },
    Al = function(a, b) {
        "string" === typeof b && (b = yl[b], b = null != b ? b : 0);
        a.C = b
    },
    Bl = function(a, b) {
        if ("string" === typeof b) {
            var c = 0;
            0 <= b.indexOf("-k0-") ? c = 2 : Mk(b) ? c = 1 : Lk(b) && (c = 5);
            b = c
        }
        a.b = b
    };
xl.prototype.store = function(a) {
    A(a, 65, this.h);
    A(a, 16, this.c);
    A(a, 14, this.o);
    A(a, 1, this.g);
    A(a, 50, this.w);
    A(a, 52, this.G);
    A(a, 32, this.b)
};
var Dl = function(a, b) {
        var c = a[b - 1];
        if (null == c || Cl(c)) a = a[a.length - 1], Cl(a) && (c = a[b]);
        return c
    },
    Cl = function(a) {
        return Oa(a) && !Ma(a)
    };
var Fl = function(a, b) {
        return a === b ? !0 : wb(a, function(c, d) {
            if (Cl(c)) {
                d = db(c);
                for (var e in d) {
                    c = d[e];
                    var f = Dl(b, +e);
                    if (!El(c, f)) return !1
                }
                return !0
            }
            e = Dl(b, d + 1);
            return El(c, e)
        }) && wb(b, function(c, d) {
            if (Cl(c)) {
                c = db(c);
                for (var e in c)
                    if (null == Dl(a, +e)) return !1;
                return !0
            }
            return null == c == (null == Dl(a, d + 1))
        })
    },
    El = function(a, b) {
        return a === b || null == a && null == b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b) ? !0 : La(a) && La(b) ? Fl(eb(a), eb(b)) : !1
    };
var Gl = function() {},
    Hl = function(a, b, c) {
        a = a.a = b = b || [];
        if (a.length) {
            var d = a.length - 1;
            b = a[d];
            if (Cl(b) && (delete a[d], d < c)) {
                d = 0;
                for (var e in b) {
                    var f = +e;
                    f <= c ? (a[f - 1] = b[e], delete b[e]) : d++
                }
                d && (a[c] = b)
            }
        }
    },
    Gh = function(a, b) {
        return null != a.a[b]
    },
    Il = function(a, b, c) {
        a = a.a[b];
        return null != a ? a : c
    },
    Jl = function(a, b) {
        return !!Il(a, b, void 0)
    },
    Kh = function(a, b) {
        return Il(a, b, 0)
    },
    I = function(a, b, c) {
        return Il(a, b, c || "")
    },
    Kl = function(a, b) {
        a = a.a;
        a[b] || (a[b] = []);
        return a[b]
    },
    Ih = function(a, b, c) {
        return Kl(a, b)[c]
    },
    Ll = function(a,
        b, c) {
        return Kl(a, b)[c]
    },
    Ml = function(a, b, c) {
        for (var d = [], e = 0; e < H(a, b); e++) d.push(new c(Ll(a, b, e)));
        return d.slice().values()
    },
    H = function(a, b) {
        return a.a[b] ? a.a[b].length : 0
    };
Gl.prototype.zb = function() {
    return this.a
};
var Nl = function(a) {
    var b = a.za();
    a = a.a;
    for (var c = {}, d = 0; d < a.length; d++)
        if (void 0 !== a[d] && null !== a[d]) {
            var e = !1,
                f = void 0,
                g = void 0,
                k;
            for (k in b)
                if (g = b[k], f = k, g.H == d) {
                    e = !0;
                    break
                } if (e)
                if (g = v(g), g.sa)
                    if (g.J)
                        for (c[f] = [], e = 0; e < a[d].length; e++) c[f].push(g.sa(a[d][e]));
                    else c[f] = g.sa(a[d]);
            else c[f] = a[d]
        } return c
};
Gl.prototype.toString = function() {
    return JSON.stringify(Nl(this))
};
var Ol = function(a, b) {
    var c = [];
    a = new a(c);
    var d = ib(a, Gl).za(),
        e;
    for (e in b) {
        var f = v(d[e]),
            g = b[e];
        if (f.va)
            if (g instanceof Array) {
                var k = [];
                for (var l = 0; l < g.length; l++) k.push(f.va(g[l]).zb())
            } else k = f.va(g).zb();
        else k = g;
        c[f.H] = k
    }
    return a
};
var Pl = function(a) {
    Hl(this, a, 1)
};
t(Pl, Gl);
var Ql = {
    romanization: {
        H: 0,
        J: !1
    }
};
Pl.prototype.za = function() {
    return Ql
};
var Rl = function(a) {
    Hl(this, a, 3)
};
t(Rl, Gl);
var Sl = {
    source_span_index: {
        H: 0,
        J: !1
    },
    target_span_index: {
        H: 1,
        J: !1
    },
    direction: {
        H: 2,
        J: !1
    }
};
Rl.prototype.za = function() {
    return Sl
};
var Tl = function(a) {
    Hl(this, a, 2)
};
t(Tl, Gl);
var Ul = {
    begin: {
        H: 0,
        J: !1
    },
    end: {
        H: 1,
        J: !1
    }
};
Tl.prototype.za = function() {
    return Ul
};
var Vl = function(a) {
    Hl(this, a, 3)
};
t(Vl, Gl);
var Wl = {
    source_span: {
        H: 0,
        va: function(a) {
            return Ol(Tl, a)
        },
        sa: function(a) {
            return Nl(new Tl(a))
        },
        J: !0
    },
    target_span: {
        H: 1,
        va: function(a) {
            return Ol(Tl, a)
        },
        sa: function(a) {
            return Nl(new Tl(a))
        },
        J: !0
    },
    link: {
        H: 2,
        va: function(a) {
            return Ol(Rl, a)
        },
        sa: function(a) {
            return Nl(new Rl(a))
        },
        J: !0
    }
};
Vl.prototype.za = function() {
    return Wl
};
var Xl = function(a) {
    Hl(this, a, 2)
};
t(Xl, Gl);
var Yl = {
    model_path: {
        H: 0,
        J: !1
    },
    label: {
        H: 1,
        J: !1
    }
};
Xl.prototype.za = function() {
    return Yl
};
var Zl = function(a) {
    Hl(this, a, 2)
};
t(Zl, Gl);
var $l = {
    checkpoint_md5: {
        H: 0,
        J: !1
    },
    launch_doc: {
        H: 1,
        J: !1
    }
};
Zl.prototype.za = function() {
    return $l
};
var am = function(a) {
    Hl(this, a, 1)
};
t(am, Gl);
var bm = {
    model_tracking: {
        H: 0,
        va: function(a) {
            return Ol(Zl, a)
        },
        sa: function(a) {
            return Nl(new Zl(a))
        },
        J: !1
    }
};
am.prototype.za = function() {
    return bm
};
var cm = function(a) {
    Hl(this, a, 9)
};
t(cm, Gl);
var dm = {
    trans: {
        H: 0,
        J: !1
    },
    orig: {
        H: 1,
        J: !1
    },
    translit: {
        H: 2,
        J: !1
    },
    src_translit: {
        H: 3,
        J: !1
    },
    backend: {
        H: 4,
        J: !1
    },
    model: {
        H: 5,
        J: !0
    },
    word_alignment: {
        H: 6,
        va: function(a) {
            return Ol(Vl, a)
        },
        sa: function(a) {
            return Nl(new Vl(a))
        },
        J: !1
    },
    model_specification: {
        H: 7,
        va: function(a) {
            return Ol(Xl, a)
        },
        sa: function(a) {
            return Nl(new Xl(a))
        },
        J: !0
    },
    translation_engine_debug_info: {
        H: 8,
        va: function(a) {
            return Ol(am, a)
        },
        sa: function(a) {
            return Nl(new am(a))
        },
        J: !0
    }
};
cm.prototype.za = function() {
    return dm
};
cm.prototype.Tc = function() {
    return I(this, 0)
};
cm.prototype.Li = function() {
    return Gh(this, 4)
};
cm.prototype.qf = function() {
    return Il(this, 4, 0)
};
var em = function(a) {
    Hl(this, a, 4)
};
t(em, Gl);
var fm = {
    gender: {
        H: 0,
        J: !1
    },
    translation: {
        H: 1,
        J: !1
    },
    sentences: {
        H: 2,
        va: function(a) {
            return Ol(cm, a)
        },
        sa: function(a) {
            return Nl(new cm(a))
        },
        J: !0
    },
    romanization: {
        H: 3,
        va: function(a) {
            return Ol(Pl, a)
        },
        sa: function(a) {
            return Nl(new Pl(a))
        },
        J: !1
    }
};
h = em.prototype;
h.za = function() {
    return fm
};
h.Rc = function() {
    return Il(this, 0, 0)
};
h.tb = function() {
    return I(this, 1)
};
h.hc = function() {
    return H(this, 2)
};
h.bb = function(a) {
    return new cm(Ll(this, 2, a))
};
var gm = function(a) {
    Hl(this, a, 2)
};
t(gm, Gl);
var hm = {
    gendered_translations: {
        H: 0,
        va: function(a) {
            return Ol(em, a)
        },
        sa: function(a) {
            return Nl(new em(a))
        },
        J: !0
    },
    status: {
        H: 1,
        J: !1
    }
};
gm.prototype.za = function() {
    return hm
};
gm.prototype.Sc = function() {
    return Il(this, 1, 0)
};
var K = function() {
    this.b = null;
    this.a = xl.M()
};
t(K, Lg);
Ha(K);
K.prototype.config = function(a, b) {
    this.b = new Dk(a, b);
    Ng(this, this.b)
};
var km = function(a, b, c, d, e) {
        b = im(a, 237, b, void 0, void 0, void 0, e);
        if (null != c) {
            e = new Tk;
            var f = a.a.a;
            null != f && A(e, 1, f || []);
            A(e, 2, jm(c)); of (b, 83, e)
        }
        void 0 !== d && 0 != d && A(b, 74, d);
        L(a, b)
    },
    lm = function(a, b, c) {
        L(a, im(a, 190, b, c, !0, 0))
    },
    mm = function(a, b, c, d) {
        L(a, im(a, 78, b, c, d, 0))
    },
    nm = function(a, b) {
        var c = M(a, 21),
            d = ll(); of (c, 56, d);
        if (null != b) {
            d = new Tk;
            var e = a.a.a;
            null != e && A(d, 1, e || []);
            A(d, 2, jm(b)); of (c, 83, d)
        }
        L(a, c)
    },
    om = {},
    pm = (om.st = 231, om.unst = 232, om.sw = 229, om.lnk = 230, om),
    qm = function(a, b, c) {
        var d = M(a, 148),
            e = new Qk;
        b = A(e, 1, b);
        c && A(b, 5, c); of (d, 63, b);
        L(a, d)
    },
    rm = function(a, b) {
        b = M(a, b);
        var c = cl(); of (b, 46, c);
        L(a, b)
    },
    sm = function(a, b, c, d, e, f) {
        b = M(a, b ? 84 : 85);
        var g = cl();
        c = A(g, 2, c);
        d = A(c, 3, d);
        e = A(d, 4, e + 1);
        0 < f.length && A(e, 5, f); of (b, 46, e);
        L(a, b)
    },
    um = function(a, b, c) {
        L(a, tm(a, 251, b, c))
    },
    wm = function(a, b) {
        L(a, vm(a, 71, b))
    },
    xm = function(a, b) {
        L(a, vm(a, 72, b))
    },
    ym = function(a, b) {
        var c = M(a, 244);
        b = A(c, 74, b);
        L(a, b)
    },
    Am = function(a, b) {
        L(a, zm(a, 245, b))
    },
    Bm = function(a) {
        L(a, M(a, 223))
    },
    Cm = function(a) {
        var b = K.M(),
            c = M(b, 22),
            d = ll();
        a = A(d, 2, a); of (c, 56, a);
        L(b, c)
    };
K.prototype.c = function() {
    L(this, M(this, 145))
};
var Dm = function(a, b, c, d, e, f, g, k) {
        b = M(a, b);
        var l = new nl;
        c = A(l, 1, c);
        c = A(c, 4, 1);
        d = A(c, 7, d);
        e = A(d, 5, e);
        f && A(e, 8, f);
        void 0 !== g && A(e, 6, g + 1); of (b, 43, e);
        null != k && (f = new Tk, k = A(f, 2, jm(k)), f = a.a.a, null != f && A(k, 1, f || []), of (b, 83, k));
        L(a, b)
    },
    Em = function(a) {
        var b = M(a, 1);
        A(b, 53, a.a.C);
        L(a, b);
        Al(a.a, 0)
    },
    Fm = function(a, b, c, d) {
        b = M(a, b);
        var e = new ol;
        c = A(e, 1, c);
        d = A(c, 2, d); of (b, 75, d);
        L(a, b)
    };
K.prototype.g = function() {
    L(this, M(this, 25))
};
var Gm = function(a, b) {
        for (var c = M(a, 339), d = new Tk, e = 0; e < b.length; e++) {
            var f = jm(b[e].Rc());
            ib(d, ff);
            lf(d, 1).push(f)
        }
        b = lf(d, 1);
        a.a.a = b; of (c, 83, d);
        L(a, c)
    },
    M = function(a, b) {
        var c = new wl;
        a.a.store(c);
        A(c, 31, b);
        return c
    },
    im = function(a, b, c, d, e, f, g) {
        var k = new Nk;
        c = A(k, 1, c);
        void 0 !== d && A(c, 4, d);
        void 0 !== e && A(c, 2, e);
        void 0 !== f && 0 != f && A(c, 3, f);
        void 0 !== g && 0 != g && A(c, 5, g);
        a = M(a, b);
        return of(a, 61, c)
    },
    Hm = function(a, b, c, d) {
        var e = new Uk;
        c = A(e, 1, c + 1);
        d = A(c, 2, d);
        a = M(a, b);
        return of(a, 60, d)
    },
    Im = function(a, b, c, d, e, f, g, k) {
        for (var l =
                new al, m = [], q = 0; q < c.length; q++) {
            var r = c[q];
            var u = new Vk;
            u = A(u, 1, r[0]);
            r = A(u, 2, !!r[1]);
            m.push(r)
        }
        pf(l, 1, m);
        c = new Zk;
        d = A(c, 1, !!d); of (l, 2, d);
        d = [];
        for (c = 0; c < e.length; c++) m = new Yk, m = A(m, 1, e[c]), d.push(m);
        pf(l, 3, d);
        e = [];
        for (d = 0; d < f.length; d++) c = f[d], m = new Wk, m = A(m, 1, !!c[0]), c = A(m, 2, !!c[1]), e.push(c);
        pf(l, 4, e);
        g && (f = new Xk, f = A(f, 1, !0), of (l, 5, f));
        0 != k && A(l, 6, k);
        a = M(a, b);
        return of(a, 66, l)
    },
    Jm = function(a, b) {
        a = M(a, b);
        b = new gl;
        b = A(b, 1, []);
        A(b, 4, 1); of (a, 59, b);
        return a
    },
    tm = function(a, b, c, d) {
        var e = new el;
        d = A(e,
            1, d);
        a = M(a, b);
        c = A(a, 74, c);
        return of(c, 71, d)
    },
    vm = function(a, b, c) {
        var d = new hl;
        c = A(d, 1, c);
        a = M(a, b);
        return of(a, 44, c)
    },
    zm = function(a, b, c) {
        a = M(a, b);
        b = new gl;
        c = A(b, 5, c); of (a, 59, c);
        return a
    },
    L = function(a, b) {
        if (a.b) {
            var c = new lk;
            b = b.o();
            c = A(c, 8, b);
            a.b.log(c)
        }
    },
    jm = function(a) {
        switch (a) {
            case 2:
                return 1;
            case 1:
                return 2;
            default:
                return 0
        }
    };
var Km = function() {
    this.g = [];
    this.b = {};
    this.a = {};
    this.h = !1;
    this.sh = 1;
    this.oe = {};
    this.c = null;
    this.o = "";
    G(window, "beforeunload", this.G, !1, this)
};
Ha(Km);
var Lm = function(a, b, c) {
        if (null == b) return "1";
        switch (Ka(b)) {
            case "string":
                return a = b, 64 < a.length && (null == c || !c) && (a = a.substr(0, 64)), ee(a);
            case "number":
                return "" + b;
            case "boolean":
                return b ? "1" : "0";
            case "array":
                var d = [],
                    e;
                for (e in b) d.push(Lm(a, b[e], c));
                return d.join(",");
            case "object":
                d = [];
                for (e in b) d.push(Mm(a, e, b[e], c));
                return d.join(",");
            default:
                return ""
        }
    },
    Mm = function(a, b, c, d) {
        return [ee(b), Lm(a, c, d || "smtalt" == b)].join("=")
    };
Km.prototype.log = function(a, b) {
    this.g.push([a, b]);
    this.h || (this.h = !0, Fi(this.m, 0, this))
};
var Pm = function(a, b, c, d, e) {
        b = a.o + "/gen204?" + Mm(a, c, d) + "&" + Mm(a, "client", b, !0);
        e && (b += Nm(a, e));
        Om(a, b)
    },
    Nm = function(a, b) {
        var c = "";
        void 0 !== b && Lb(b, function(d, e) {
            if (d instanceof Array)
                for (var f = 0; f < d.length; f++) c += "&" + Mm(this, e, d[f]);
            else c += "&" + Mm(this, e, d)
        }, a);
        return c
    };
Km.prototype.m = function() {
    for (var a = 0; a < this.g.length; a++) {
        var b = this.g[a];
        Qm(this, b[0], b[1])
    }
    this.g = [];
    this.h = !1
};
var Qm = function(a, b, c) {
        Om(a, a.o + "/gen204?" + (a.c ? ["client=", a.c, "&"].join("") : "") + Mm(a, b, c))
    },
    Om = function(a, b) {
        var c = new Image,
            d = a.sh++;
        a.oe[d] = c;
        c.onload = c.onerror = function() {
            delete Km.M().oe[d]
        };
        c.src = b;
        c = null
    },
    Sm = function(a, b, c, d) {
        var e = null;
        b in a.b && (e = a.b[b]);
        a.b[b] = Rm(e, c, d)
    },
    Tm = function(a, b) {
        var c = 0,
            d = null;
        b in a.a && (d = a.a[b], c = d[0], d = d[1]);
        d = Rm(d, 1, "accumulate");
        a.a[b] = [c, d];
        Gi(a.a[b][0]);
        c = Fi(p(a.w, a, b), 2E3);
        a.a[b][0] = c
    };
Km.prototype.w = function(a) {
    Qm(this, a, this.a[a][1]);
    a in this.a && (Gi(this.a[a][0]), delete this.a[a])
};
var Um = function(a, b, c) {
        null == b && (b = 1);
        "accumulate" == c ? (isNaN(a) && (a = parseInt(a, 10)), isNaN(b) && (b = parseInt(b, 10)), a += b) : a = b;
        return a
    },
    Rm = function(a, b, c) {
        if ("object" == Ka(b)) {
            "object" != Ka(a) && (a = {});
            for (var d in b) a[d] = Um(d in a ? a[d] : null, b[d], c)
        } else a = Um(a, b, c);
        return a
    },
    Vm = function(a) {
        var b = [],
            c;
        for (c in a.b) b.push(Mm(a, c, a.b[c]));
        a.b = {};
        return b.join("&")
    };
Km.prototype.G = function() {
    this.m();
    for (var a in this.a) 0 != this.a[a] && this.w(a)
};
var Wm = function(a, b) {
    this.b = this.m = this.c = "";
    this.o = null;
    this.h = this.w = "";
    this.g = !1;
    var c;
    a instanceof Wm ? (this.g = void 0 !== b ? b : a.g, Xm(this, a.c), this.m = a.m, this.b = a.b, Ym(this, a.o), Zm(this, a.w), $m(this, an(a.a)), this.h = a.h) : a && (c = String(a).match(wj)) ? (this.g = !!b, Xm(this, c[1] || "", !0), this.m = bn(c[2] || ""), this.b = bn(c[3] || "", !0), Ym(this, c[4]), Zm(this, c[5] || "", !0), $m(this, c[6] || "", !0), this.h = bn(c[7] || "")) : (this.g = !!b, this.a = new cn(null, this.g))
};
Wm.prototype.toString = function() {
    var a = [],
        b = this.c;
    b && a.push(dn(b, en, !0), ":");
    var c = this.b;
    if (c || "file" == b) a.push("//"), (b = this.m) && a.push(dn(b, en, !0), "@"), a.push(ee(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.o, null != c && a.push(":", String(c));
    if (c = this.w) this.b && "/" != c.charAt(0) && a.push("/"), a.push(dn(c, "/" == c.charAt(0) ? fn : gn, !0));
    (c = this.a.toString()) && a.push("?", c);
    (c = this.h) && a.push("#", dn(c, hn));
    return a.join("")
};
var Xm = function(a, b, c) {
        a.c = c ? bn(b, !0) : b;
        a.c && (a.c = a.c.replace(/:$/, ""))
    },
    Ym = function(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.o = b
        } else a.o = null
    },
    Zm = function(a, b, c) {
        a.w = c ? bn(b, !0) : b
    },
    $m = function(a, b, c) {
        b instanceof cn ? (a.a = b, jn(a.a, a.g)) : (c || (b = dn(b, kn)), a.a = new cn(b, a.g))
    },
    mn = function(a, b, c) {
        La(c) || (c = [String(c)]);
        ln(a.a, b, c)
    },
    nn = function(a) {
        return a instanceof Wm ? new Wm(a) : new Wm(a, void 0)
    },
    bn = function(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) :
            ""
    },
    dn = function(a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, on), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    },
    on = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    },
    en = /[#\/\?@]/g,
    gn = /[#\?:]/g,
    fn = /[#\?]/g,
    kn = /[#\?@]/g,
    hn = /#/g,
    cn = function(a, b) {
        this.b = this.a = null;
        this.c = a || null;
        this.h = !!b
    },
    pn = function(a) {
        a.a || (a.a = new pj, a.b = 0, a.c && xj(a.c, function(b, c) {
            a.add(fe(b), c)
        }))
    };
cn.prototype.sf = function() {
    pn(this);
    return this.b
};
cn.prototype.add = function(a, b) {
    pn(this);
    this.c = null;
    a = qn(this, a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b);
    this.b = ab(this.b) + 1;
    return this
};
var rn = function(a, b) {
        pn(a);
        b = qn(a, b);
        sj(a.a, b) && (a.c = null, a.b = ab(a.b) - a.a.get(b).length, a = a.a, rj(a.b, b) && (delete a.b[b], a.c--, a.g++, a.a.length > 2 * a.c && qj(a)))
    },
    sn = function(a, b) {
        pn(a);
        b = qn(a, b);
        return sj(a.a, b)
    };
h = cn.prototype;
h.forEach = function(a, b) {
    pn(this);
    this.a.forEach(function(c, d) {
        w(c, function(e) {
            a.call(b, e, d, this)
        }, this)
    }, this)
};
h.sb = function() {
    pn(this);
    for (var a = this.a.Kb(), b = this.a.sb(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c
};
h.Kb = function(a) {
    pn(this);
    var b = [];
    if ("string" === typeof a) sn(this, a) && (b = Eb(b, this.a.get(qn(this, a))));
    else {
        a = this.a.Kb();
        for (var c = 0; c < a.length; c++) b = Eb(b, a[c])
    }
    return b
};
h.set = function(a, b) {
    pn(this);
    this.c = null;
    a = qn(this, a);
    sn(this, a) && (this.b = ab(this.b) - this.a.get(a).length);
    this.a.set(a, [b]);
    this.b = ab(this.b) + 1;
    return this
};
h.get = function(a, b) {
    if (!a) return b;
    a = this.Kb(a);
    return 0 < a.length ? String(a[0]) : b
};
var ln = function(a, b, c) {
    rn(a, b);
    0 < c.length && (a.c = null, a.a.set(qn(a, b), Gb(c)), a.b = ab(a.b) + c.length)
};
cn.prototype.toString = function() {
    if (this.c) return this.c;
    if (!this.a) return "";
    for (var a = [], b = this.a.sb(), c = 0; c < b.length; c++) {
        var d = b[c],
            e = ee(d);
        d = this.Kb(d);
        for (var f = 0; f < d.length; f++) {
            var g = e;
            "" !== d[f] && (g += "=" + ee(d[f]));
            a.push(g)
        }
    }
    return this.c = a.join("&")
};
var an = function(a) {
        var b = new cn;
        b.c = a.c;
        a.a && (b.a = new pj(a.a), b.b = a.b);
        return b
    },
    qn = function(a, b) {
        b = String(b);
        a.h && (b = b.toLowerCase());
        return b
    },
    jn = function(a, b) {
        b && !a.h && (pn(a), a.c = null, a.a.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (rn(this, d), ln(this, e, c))
        }, a));
        a.h = b
    };
cn.prototype.g = function(a) {
    for (var b = 0; b < arguments.length; b++) vj(arguments[b], function(c, d) {
        this.add(d, c)
    }, this)
};
var tn = {
        Wq: !0
    },
    un = {
        Yq: !0
    },
    vn = {
        Xq: !0
    },
    wn = {
        Vq: !0
    },
    xn = {
        Uq: !0
    },
    yn = function() {
        throw Error("Do not instantiate directly");
    };
yn.prototype.qd = null;
yn.prototype.Sa = function() {
    return this.content
};
yn.prototype.toString = function() {
    return this.content
};
var zn = function(a) {
        if (a.nc !== tn) throw Error("Sanitized content was not of kind HTML.");
        return Rd(dc("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."), a.toString(), a.qd)
    },
    An = function() {
        yn.call(this)
    };
t(An, yn);
An.prototype.nc = tn;
var Bn = function() {
    yn.call(this)
};
t(Bn, yn);
Bn.prototype.nc = un;
Bn.prototype.qd = 1;
var Cn = function() {
    yn.call(this)
};
t(Cn, yn);
Cn.prototype.nc = vn;
Cn.prototype.qd = 1;
var Dn = function() {
    yn.call(this)
};
t(Dn, yn);
Dn.prototype.nc = wn;
Dn.prototype.qd = 1;
var En = function() {
    yn.call(this)
};
t(En, yn);
En.prototype.nc = xn;
En.prototype.qd = 1;
var Fn = function(a, b, c) {
    (b = null != a && a.nc === b) && v(a.constructor === c);
    return b
};
var Gn = function(a) {
        if (null != a) switch (a.qd) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    },
    P = function(a) {
        return Fn(a, tn, An) ? a : a instanceof Ad ? N(Cd(a), a.Vc()) : N(ge(String(String(a))), Gn(a))
    },
    N = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.qd = d);
            return c
        }
    }(An),
    Hn = function(a, b) {
        return a && b && a.mm && b.mm ? a.nc !== b.nc ? !1 : a.toString() === b.toString() : a instanceof yn && b instanceof yn ? a.nc != b.nc ? !1 : a.toString() == b.toString() :
            a == b
    },
    In = function(a) {
        return a instanceof yn ? !!a.Sa() : !!a
    },
    Jn = function(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    },
    Q = function(a) {
        Fn(a, tn, An) ? (a = a.Sa(), a = String(a).replace(Kn, "").replace(Ln, "&lt;"), a = String(a).replace(Mn, Nn)) : a = ge(String(a));
        return a
    },
    On = /['()]/g,
    Pn = function(a) {
        return "%" + a.charCodeAt(0).toString(16)
    },
    Qn = function(a) {
        a = ee(String(a));
        On.lastIndex = 0;
        return On.test(a) ? a.replace(On, Pn) : a
    },
    Un = function(a) {
        Fn(a, un, Bn) || Fn(a, vn, Cn) ? a = String(a).replace(Rn, Sn) : a instanceof Oc ?
            a = String(Pc(a)).replace(Rn, Sn) : a instanceof pc ? a = String(rc(a)).replace(Rn, Sn) : (a = String(a), Tn.test(a) ? a = a.replace(Rn, Sn) : ($a("Bad value `%s` for |filterNormalizeUri", [a]), a = "about:invalid#zSoyz"));
        return a
    },
    Wn = function(a) {
        Fn(a, xn, En) ? a = Jn(a.Sa()) : null == a ? a = "" : a instanceof Xc ? a = Jn(Yc(a)) : a instanceof kd ? a = Jn(nd(a)) : (a = String(a), Vn.test(a) || ($a("Bad value `%s` for |filterCssValue", [a]), a = "zSoyz"));
        return a
    },
    Xn = function(a, b, c, d) {
        a || (a = c instanceof Function ? c.displayName || c.name || "unknown type name" :
            c instanceof Object ? c.constructor.displayName || c.constructor.name || Object.prototype.toString.call(c) : null === c ? "null" : typeof c, $a("expected param " + b + " of type " + d + (", but got " + a) + "."));
        return c
    },
    Yn = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    },
    Nn = function(a) {
        return Yn[a]
    },
    Zn = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\x0B": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    },
    $n = function(a) {
        return Zn[a]
    },
    ao = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    },
    Sn = function(a) {
        return ao[a]
    },
    Mn = /[\x00\x22\x27\x3c\x3e]/g,
    bo = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
    Rn = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    Vn = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
    Tn = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
    co = /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i,
    eo = function(a) {
        return String(a).replace(bo, $n)
    },
    Kn = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    Ln = /</g;
var fo = function(a) {
    var b = a.um,
        c = a.tm,
        d = a.Wn,
        e = a.Nn,
        f = a.url;
    return N('<div id="' + Q(a.id) + '" class="cp-promo" style="display:none"><div class="cp-promo-c"><div class="cp-dismiss"></div><a href="' + Q(Un(f)) + '" target="_blank" class="cp-promo-href"><div class="cp-promo-graphic"></div><div class="cp-promo-text-c"><div class="cp-promo-text"><div class="cp-promo-title">' + P(d) + '</div><div class="cp-promo-subtext">' + P(e) + '</div></div></div><div class="cp-promo-bottom"><div class="cp-promo-link"><div class="cp-promo-link-badge"></div><div class="cp-promo-link-arrow"></div><div class="cp-promo-link-text">' +
        P(b) + '</div><div class="cp-promo-link-subtext">' + P(c) + "</div></div></div></a></div></div>")
};
fo.a = "trans.common.templates.communityPromotion";
var go = function(a) {
    return N('<div><div class="speech-mic"><div class="gt-speech-l1"></div><div class="gt-speech-l2"></div><div class="gt-speech-l3"></div><div class="gt-speech-l4"></div></div><div class="speech-mic-label">' + P(a.label) + "</div></div>")
};
go.a = "trans.common.templates.speechInput";
var ho = function(a) {
    var b = a.cg,
        c = a.qm,
        d = a.rm,
        e = a.Gh,
        f = a.xo;
    return N('<div class="gt-ex-info">' + (a.Hn ? '<span class="gt-ex-quote">\x3c!--This SVG renders a quotation mark.--\x3e<svg viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></span>' : "") + '<div class="gt-ex-top"><div class="gt-ex-text" dir="' + Q(a.Kn) + '">' + P(b) + '</div></div><div class="gt-ex-mt" style="display:none"><span class="gt-cd-mt" dir="' + Q(e) + '"></span><br><span class="gt-cd-mt-label">' +
        P(f) + '</span><span class="gt-ex-credit"><a class="gt-ex-link" target="_blank" href="' + Q(Un(c)) + '">' + P(d) + "</a></span></div></div>")
};
ho.a = "trans.common.templates.exampleSentence";
var io = function(a) {
    var b = a.Nm;
    a = a.Om;
    return N('<div class="st-stp1">' + (b ? "" : '<div class="st-stp1-text"><div>' + P(a) + "</div></div>") + '<div id="st-buttons"></div>' + (b ? '<div class="st-stp1-epu-text">' + P(a) + "</div>" : "") + "</div>")
};
io.a = "trans.common.templates.submitTranslation";
var jo = function() {
    return N('<div class="gt-cc-t"><span class="gt-cc-tc"></span><span class="gt-cc-bc"></span></div><div class="gt-cc"><div class="gt-cc-l"><div class="gt-cc-l-i"></div><div class="gt-cc-exp" style="display:none"><div class="cd-exp-ar"></div></div></div><div class="gt-cc-r"><div class="gt-cc-r-i"></div></div></div>')
};
jo.a = "trans.common.templates.cardContainer";
var ko = function() {
    return N('<div class="gt-cd-t"><div class="gt-cd-tl"></div><div class="gt-cd-tr"></div></div><div class="gt-cd-c"></div><div class="cd-expand-button" role="button" tabindex="0"><span class="jfk-button-img"></span><span class="cd-expand-label"></span></div>')
};
ko.a = "trans.common.templates.card";
var lo = function() {
    return N('<span class="gt-ct-text"></span><span class="gt-ct-translit" style="display:none"></span><div class="gt-ct-tts goog-inline-block"></div>')
};
lo.a = "trans.common.templates.lexiconTitle";
var mo = function(a) {
    var b = a.rk,
        c = a.Nj,
        d = a.vk,
        e = a.Mk,
        f = a.Qn,
        g = a.Pn,
        k = a.Gh,
        l = a.hk;
    a = '<div class="gt-def-info" lang="' + Q(a.Ba) + '">' + (c ? '<span class="gt-def-num">' + P(b) + "</span>" : "") + '<div class="gt-def-row">' + P(d) + '<div class="gt-mt-md" style="display:none"><span class="gt-cd-mt"></span></div></div>' + (e ? '<div class="gt-def-example"><q>' + P(e) + '</q><div class="gt-mt-ex" style="display:none"><q class="gt-cd-mt" dir="' + Q(k) + '"></q></div></div>' : "");
    if (0 < g.length) {
        a += '<div class="gt-def-synonym"><span class="gt-def-synonym-title">' +
            P(f) + ': </span><span class="gt-def-synonyms-group"></span><span class="gt-def-synonyms-group"></span>';
        f = g.length;
        for (b = 0; b < f; b++)
            for (d = g[b], e = d.length, k = 0; k < e; k++) {
                var m = d[k];
                var q = c ? "" : k != e - 1 ? ", " : b != f - 1 ? "; " : "";
                a += (l ? c ? '<span class="gt-cd-cl"> ' + P(m) + " </span>" : '<span class="gt-cd-cl">' + P(m) + "</span>" : '<span class="gt-cd-ncl">' + P(m) + "</span>") + q
            }
        a += "</div>"
    }
    return N(a + "</div>")
};
mo.a = "trans.common.templates.definitionRow";
var no = function(a) {
    var b = a.zk,
        c = a.Sk,
        d = a.Tk,
        e = a.cn;
    a = a.Gd;
    return N((a ? "" : '<div class="gt-card-expand-wrapper gt-card-collapsed">') + '<div class="gt-baf-cell gt-baf-pos-head">' + (e ? '<span class="gt-cd-pos">' + P(e) + "</span>" : "") + (b ? '<div class="gt-cd-pos-pop">' + P(c) + '<div class="help-icon-container tlid-frequency-help-icon-container"><div class="help-icon tlid-frequency-help-icon"></div><div class="help-tooltip tlid-frequency-help-tooltip"><p>' + P(d) + "</p></div></div></div>" : "") + "</div>" + (a ? "" : "</div>"))
};
no.a = "trans.common.templates.partOfSpeechEntryHeading";
var oo = function(a) {
    var b = a.gh,
        c = a.Qe,
        d = a.Sn,
        e = a.Gd,
        f = a.Fo;
    a = a.Go;
    return N((e ? "" : '<div class="gt-card-expand-wrapper gt-card-collapsed">') + '<div class="gt-baf-cell gt-baf-term-text-parent"' + (d ? ' style="direction: ' + Q(Wn(d)) + ';"' : "") + '><span class="gt-baf-term-text' + (b ? " gt-baf-word-selected" : "") + '">' + (c ? '<span class="gt-baf-cell gt-baf-previous-word gt-baf-previous-word-mobile">' + P(c) + "</span>" : "") + '<span class="' + Q(a) + '">' + P(f) + "</span></span></div>" + (e ? "" : "</div>"))
};
oo.a = "trans.common.templates.termText";
var po = function(a) {
    var b = a.jf,
        c = a.wk,
        d = a.fg;
    a = a.Gd;
    c = (a ? "" : '<div class="gt-card-expand-wrapper gt-card-collapsed">') + '<div class="gt-baf-cell gt-baf-translations gt-baf-translations-mobile"' + (c ? ' style="direction: ' + Q(Wn(c)) + ';"' : "") + ">";
    for (var e = d.length, f = 0; f < e; f++) {
        var g = d[f];
        c += "<span" + (b ? ' class="' + Q(b) + '"' : "") + ">" + P(g) + "</span>" + (f != e - 1 ? ", " : "")
    }
    return N(c + ("</div>" + (a ? "" : "</div>")))
};
po.a = "trans.common.templates.translationsCell";
var ro = function(a) {
    var b = a.Pb,
        c = a.Gd;
    a = (c ? "" : '<div class="gt-card-expand-wrapper gt-card-collapsed">') + '<div class="gt-baf-cell gt-baf-entry-score" title="' + Q(a.zc) + '">';
    for (var d = Math.max(0, Math.ceil(b + 1 - 1)), e = 0; e < d; e++) {
        var f = N(qo({
            className: "filled"
        }));
        a += f
    }
    if (3 > b)
        for (b = Math.max(0, Math.ceil(4 - (b + 1))), d = 0; d < b; d++) e = N(qo({
            className: "empty"
        })), a += e;
    return N(a + ("</div>" + (c ? "" : "</div>")))
};
ro.a = "trans.common.templates.backAndForthViewEntryScore";
var qo = function(a) {
    return N('<div class="' + Q(a.className) + ' gt-score-dot"></div>')
};
var so, to = {
    Ko: "activedescendant",
    Po: "atomic",
    Qo: "autocomplete",
    So: "busy",
    Vo: "checked",
    Wo: "colindex",
    ap: "controls",
    cp: "describedby",
    gp: "disabled",
    ip: "dropeffect",
    jp: "expanded",
    kp: "flowto",
    mp: "grabbed",
    rp: "haspopup",
    tp: "hidden",
    vp: "invalid",
    wp: "label",
    xp: "labelledby",
    yp: "level",
    Dp: "live",
    Sp: "multiline",
    Tp: "multiselectable",
    Yp: "orientation",
    Zp: "owns",
    $p: "posinset",
    bq: "pressed",
    gq: "readonly",
    iq: "relevant",
    jq: "required",
    nq: "rowindex",
    qq: "selected",
    tq: "setsize",
    SORT: "sort",
    Iq: "valuemax",
    Jq: "valuemin",
    Kq: "valuenow",
    Lq: "valuetext"
};
var uo = {
    Lo: "alert",
    Mo: "alertdialog",
    No: "application",
    Oo: "article",
    Ro: "banner",
    To: "button",
    Uo: "checkbox",
    Xo: "columnheader",
    Yo: "combobox",
    Zo: "complementary",
    $o: "contentinfo",
    bp: "definition",
    ep: "dialog",
    fp: "directory",
    hp: "document",
    lp: "form",
    np: "grid",
    pp: "gridcell",
    qp: "group",
    sp: "heading",
    up: "img",
    zp: "link",
    Ap: "list",
    Bp: "listbox",
    Cp: "listitem",
    Ep: "log",
    Fp: "main",
    Gp: "marquee",
    Hp: "math",
    Ip: "menu",
    Jp: "menubar",
    Kp: "menuitem",
    Lp: "menuitemcheckbox",
    Mp: "menuitemradio",
    Vp: "navigation",
    Wp: "note",
    Xp: "option",
    aq: "presentation",
    cq: "progressbar",
    eq: "radio",
    fq: "radiogroup",
    hq: "region",
    kq: "row",
    lq: "rowgroup",
    mq: "rowheader",
    oq: "scrollbar",
    pq: "search",
    rq: "separator",
    uq: "slider",
    vq: "spinbutton",
    wq: "status",
    xq: "tab",
    yq: "tablist",
    zq: "tabpanel",
    Aq: "textbox",
    Bq: "textinfo",
    Cq: "timer",
    Dq: "toolbar",
    Eq: "tooltip",
    Fq: "tree",
    Gq: "treegrid",
    Hq: "treeitem"
};
Yb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
var vo = "combobox grid group listbox menu menubar radiogroup row rowgroup tablist textbox toolbar tree treegrid".split(" "),
    wo = function(a, b) {
        b ? (v(Qb(uo, b), "No such ARIA role " + b), a.setAttribute("role", b)) : a.removeAttribute("role")
    },
    yo = function(a, b, c) {
        La(c) && (c = c.join(" "));
        var d = xo(b);
        "" === c || void 0 == c ? (so || (so = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = so, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    },
    zo = function(a, b) {
        a = a.getAttribute(xo(b));
        return null == a || void 0 == a ? "" : String(a)
    },
    Ao = function(a) {
        var b = zo(a, "activedescendant");
        return Lf(a).getElementById(b)
    },
    Bo = function(a, b) {
        var c = "";
        b && (c = b.id, v(c, "The active element should have an id."));
        yo(a, "activedescendant", c)
    },
    Co = function(a, b) {
        yo(a, "label", b)
    },
    xo = function(a) {
        v(a, "ARIA attribute cannot be empty.");
        v(Qb(to, a), "No such ARIA attribute " +
            a);
        return "aria-" + a
    };
var Do = function(a) {
        return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    },
    Eo = function(a) {
        return a.classList ? a.classList : Do(a).match(/\S+/g) || []
    },
    Fo = function(a, b) {
        "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
    },
    Go = function(a, b) {
        return a.classList ? a.classList.contains(b) : Ab(Eo(a), b)
    },
    R = function(a, b) {
        if (a.classList) a.classList.add(b);
        else if (!Go(a, b)) {
            var c = Do(a);
            Fo(a, c + (0 < c.length ? " " + b : b))
        }
    },
    Ho = function(a, b) {
        if (a.classList) w(b,
            function(e) {
                R(a, e)
            });
        else {
            var c = {};
            w(Eo(a), function(e) {
                c[e] = !0
            });
            w(b, function(e) {
                c[e] = !0
            });
            b = "";
            for (var d in c) b += 0 < b.length ? " " + d : d;
            Fo(a, b)
        }
    },
    T = function(a, b) {
        a.classList ? a.classList.remove(b) : Go(a, b) && Fo(a, sb(Eo(a), function(c) {
            return c != b
        }).join(" "))
    },
    Io = function(a, b) {
        a.classList ? w(b, function(c) {
            T(a, c)
        }) : Fo(a, sb(Eo(a), function(c) {
            return !Ab(b, c)
        }).join(" "))
    },
    U = function(a, b, c) {
        c ? R(a, b) : T(a, b)
    };
var Mo = function(a, b) {
        v(a, "Soy template may not be null.");
        var c = Mf();
        a = a(b || Jo, void 0, void 0);
        a = Ko(a);
        Lo(a.ub());
        return eg(c.a, a)
    },
    No = function(a, b, c, d) {
        v(a, "Soy template may not be null.");
        a = a(b || Jo, void 0, c);
        d = Jg(d || Mf(), "DIV");
        a = Ko(a);
        Lo(a.ub());
        Vd(d, a);
        1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType && (d = a));
        return d
    },
    Ko = function(a) {
        if (!Oa(a)) return Ed(String(a));
        if (a instanceof yn) return zn(a);
        $a("Soy template output is unsafe for use as HTML: " + a);
        return Ed("zSoyz")
    },
    Lo = function(a) {
        var b =
            a.match(Oo);
        v(!b, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", b && b[0], a)
    },
    Oo = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,
    Jo = {};
var Po = function(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
};
h = Po.prototype;
h.toString = function() {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
h.contains = function(a) {
    return this && a ? a instanceof Po ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.a >= this.top && a.a <= this.bottom : !1
};
h.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
h.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
h.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
var Qo = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    },
    Ro = function(a) {
        return new Po(a.top, a.left + a.width, a.top + a.height, a.left)
    };
h = Qo.prototype;
h.toString = function() {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
h.contains = function(a) {
    return a instanceof Hf ? a.x >= this.left && a.x <= this.left + this.width && a.a >= this.top && a.a <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
};
h.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
h.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
h.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var To = function(a, b, c) {
        if ("string" === typeof b)(b = So(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = So(c, d);
                f && (c.style[f] = e)
            }
    },
    Uo = {},
    So = function(a, b) {
        var c = Uo[b];
        if (!c) {
            var d = qe(b);
            c = d;
            void 0 === a.style[d] && (d = (De ? "Webkit" : Ce ? "Moz" : y ? "ms" : ye ? "O" : null) + re(d), void 0 !== a.style[d] && (c = d));
            Uo[b] = c
        }
        return c
    },
    Vo = function(a, b) {
        var c = Lf(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    },
    Wo = function(a, b) {
        return Vo(a,
            b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    },
    Yo = function(a, b, c) {
        if (b instanceof Hf) {
            var d = b.x;
            b = b.a
        } else d = b, b = c;
        a.style.left = Xo(d, !1);
        a.style.top = Xo(b, !1)
    },
    Zo = function(a) {
        a = a ? Lf(a) : document;
        return !y || Ve(9) || Uf(Mf(a).a) ? a.documentElement : a.body
    },
    $o = function(a) {
        var b = a.body;
        a = a.documentElement;
        return new Hf(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
    },
    ap = function(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        y && a.ownerDocument.body &&
            (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    },
    bp = function(a) {
        if (y && !Ve(8)) return v(a && "offsetParent" in a), a.offsetParent;
        var b = Lf(a),
            c = Wo(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = Wo(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" ==
                    c || "relative" == c)) return a;
        return null
    },
    dp = function(a) {
        for (var b = new Po(0, Infinity, Infinity, 0), c = Mf(a), d = c.a.body, e = c.a.documentElement, f = Wf(c.a); a = bp(a);)
            if (!(y && 0 == a.clientWidth || De && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != Wo(a, "overflow")) {
                var g = cp(a),
                    k = new Hf(a.clientLeft, a.clientTop);
                g.x += k.x;
                g.a += k.a;
                b.top = Math.max(b.top, g.a);
                b.right = Math.min(b.right, g.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, g.a + a.clientHeight);
                b.left = Math.max(b.left, g.x)
            } d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left,
            d);
        b.top = Math.max(b.top, f);
        c = Vf(Kg(c) || window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    },
    gp = function(a, b) {
        b = b || Wf(document);
        var c = b || Wf(document);
        var d = cp(a),
            e = cp(c),
            f = ep(c);
        if (c == Wf(document)) {
            var g = d.x - c.scrollLeft;
            d = d.a - c.scrollTop;
            y && !Ve(10) && (g += f.left, d += f.top)
        } else g = d.x - e.x - f.left, d = d.a - e.a - f.top;
        a = fp(a);
        f = c.clientHeight - a.height;
        e = c.scrollLeft;
        var k = c.scrollTop;
        e += Math.min(g, Math.max(g - (c.clientWidth -
            a.width), 0));
        k += Math.min(d, Math.max(d - f, 0));
        c = new Hf(e, k);
        b.scrollLeft = c.x;
        b.scrollTop = c.a
    },
    cp = function(a) {
        var b = Lf(a);
        db(a, "Parameter is required");
        var c = new Hf(0, 0),
            d = Zo(b);
        if (a == d) return c;
        a = ap(a);
        b = Xf(Mf(b).a);
        c.x = a.left + b.x;
        c.a = a.top + b.a;
        return c
    },
    ip = function(a, b) {
        a = hp(a);
        b = hp(b);
        return new Hf(a.x - b.x, a.a - b.a)
    },
    jp = function(a) {
        a = ap(a);
        return new Hf(a.left, a.top)
    },
    hp = function(a) {
        v(a);
        if (1 == a.nodeType) return jp(a);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new Hf(a.clientX, a.clientY)
    },
    kp = function(a,
        b, c) {
        if (b instanceof Jf) c = b.height, b = b.width;
        else if (void 0 == c) throw Error("missing height argument");
        a.style.width = Xo(b, !0);
        a.style.height = Xo(c, !0)
    },
    Xo = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    },
    lp = function(a) {
        var b = fp;
        if ("none" != Wo(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    },
    fp = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = De && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = ap(a), new Jf(a.right - a.left, a.bottom - a.top)) : new Jf(b, c)
    },
    mp = function(a) {
        var b = cp(a);
        a = lp(a);
        return new Qo(b.x, b.a, a.width, a.height)
    },
    np = function(a, b) {
        v(a);
        a = a.style;
        "opacity" in a ? a.opacity = b : "MozOpacity" in a ? a.MozOpacity = b : "filter" in a && (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")")
    },
    V = function(a, b) {
        a.style.display = b ? "" : "none"
    },
    op = function(a) {
        return "none" != a.style.display
    },
    qp = function(a) {
        var b = Mf(void 0),
            c = b.a;
        if (y && c.createStyleSheet) return b =
            c.createStyleSheet(), pp(b, a), b;
        c = Pf(b.a, "HEAD", void 0, void 0)[0];
        if (!c) {
            var d = Pf(b.a, "BODY", void 0, void 0)[0];
            c = b.b("HEAD");
            d.parentNode.insertBefore(c, d)
        }
        d = b.b("STYLE");
        pp(d, a);
        b.appendChild(c, d);
        return d
    },
    pp = function(a, b) {
        b = nd(b);
        y && void 0 !== a.cssText ? a.cssText = b : a.innerHTML = b
    },
    rp = function(a) {
        return "rtl" == Wo(a, "direction")
    },
    sp = Ce ? "MozUserSelect" : De || ze ? "WebkitUserSelect" : null,
    tp = function(a, b, c) {
        c = c ? null : a.getElementsByTagName("*");
        if (sp) {
            if (b = b ? "none" : "", a.style && (a.style[sp] = b), c) {
                a = 0;
                for (var d; d =
                    c[a]; a++) d.style && (d.style[sp] = b)
            }
        } else if (y || ye)
            if (b = b ? "on" : "", a.setAttribute("unselectable", b), c)
                for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
    },
    up = function(a, b, c) {
        a = a.style;
        Ce ? a.MozBoxSizing = c : De ? a.WebkitBoxSizing = c : a.boxSizing = c;
        a.width = Math.max(b.width, 0) + "px";
        a.height = Math.max(b.height, 0) + "px"
    },
    vp = function(a, b, c, d) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var e = a.style[c],
            f = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] =
            f;
        return +b
    },
    wp = function(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? vp(a, b, "left", "pixelLeft") : 0
    },
    xp = function(a, b) {
        if (y) {
            var c = wp(a, b + "Left"),
                d = wp(a, b + "Right"),
                e = wp(a, b + "Top");
            a = wp(a, b + "Bottom");
            return new Po(e, d, a, c)
        }
        c = Vo(a, b + "Left");
        d = Vo(a, b + "Right");
        e = Vo(a, b + "Top");
        a = Vo(a, b + "Bottom");
        return new Po(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
    },
    yp = function(a) {
        return xp(a, "padding")
    },
    zp = {
        thin: 2,
        medium: 4,
        thick: 6
    },
    Ap = function(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] :
                null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in zp ? zp[b] : vp(a, b, "left", "pixelLeft")
    },
    ep = function(a) {
        if (y && !Ve(9)) {
            var b = Ap(a, "borderLeft"),
                c = Ap(a, "borderRight"),
                d = Ap(a, "borderTop");
            a = Ap(a, "borderBottom");
            return new Po(d, c, a, b)
        }
        b = Vo(a, "borderLeftWidth");
        c = Vo(a, "borderRightWidth");
        d = Vo(a, "borderTopWidth");
        a = Vo(a, "borderBottomWidth");
        return new Po(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    };
var Bp = function(a) {
    Lg.call(this);
    this.m = a;
    this.c = {}
};
t(Bp, Lg);
var Cp = [];
Bp.prototype.listen = function(a, b, c, d) {
    return Dp(this, a, b, c, d)
};
var Ep = function(a, b, c, d) {
        Dp(a, b, "click", c, !1, d)
    },
    Dp = function(a, b, c, d, e, f) {
        La(c) || (c && (Cp[0] = c.toString()), c = Cp);
        for (var g = 0; g < c.length; g++) {
            var k = G(b, c[g], d || a.handleEvent, e || !1, f || a.m || a);
            if (!k) break;
            a.c[k.key] = k
        }
        return a
    };
Bp.prototype.jh = function(a, b, c, d) {
    return Fp(this, a, b, c, d)
};
var Fp = function(a, b, c, d, e, f) {
    if (La(c))
        for (var g = 0; g < c.length; g++) Fp(a, b, c[g], d, e, f);
    else {
        b = jh(b, c, d || a.handleEvent, e, f || a.m || a);
        if (!b) return a;
        a.c[b.key] = b
    }
    return a
};
Bp.prototype.Ga = function(a, b, c, d, e) {
    if (La(b))
        for (var f = 0; f < b.length; f++) this.Ga(a, b[f], c, d, e);
    else c = c || this.handleEvent, d = Oa(d) ? !!d.capture : !!d, e = e || this.m || this, c = kh(c), d = !!d, b = $g(a) ? a.Ae(b, c, d, e) : a ? (a = mh(a)) ? a.Ae(b, c, d, e) : null : null, b && (rh(b), delete this.c[b.key]);
    return this
};
var Gp = function(a) {
    Lb(a.c, function(b, c) {
        this.c.hasOwnProperty(c) && rh(b)
    }, a);
    a.c = {}
};
Bp.prototype.T = function() {
    Bp.D.T.call(this);
    Gp(this)
};
Bp.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};
var Hp = function() {};
Ha(Hp);
Hp.prototype.a = 0;
var X = function(a) {
    J.call(this);
    this.a = a || Mf();
    this.Na = Ip;
    this.qa = null;
    this.ya = !1;
    this.v = null;
    this.O = void 0;
    this.L = this.o = this.G = this.na = null;
    this.wb = !1
};
t(X, J);
X.prototype.Hd = Hp.M();
var Ip = null,
    Jp = function(a, b) {
        switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? "highlight" : "unhighlight";
            case 4:
                return b ? "activate" : "deactivate";
            case 8:
                return b ? "select" : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? "focus" : "blur";
            case 64:
                return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    },
    Kp = function(a) {
        return a.qa || (a.qa = ":" + (a.Hd.a++).toString(36))
    },
    Lp = function(a, b) {
        if (a.G && a.G.L) {
            var c = a.G.L,
                d = a.qa;
            d in c && delete c[d];
            Tb(a.G.L, b, a)
        }
        a.qa = b
    };
X.prototype.j = function() {
    return this.v
};
var Mp = function(a) {
    a = a.v;
    v(a, "Can not call getElementStrict before rendering/decorating.");
    return a
};
X.prototype.vd = function(a) {
    return this.v ? this.a.vd(a, this.v) : null
};
var Y = function(a) {
        a.O || (a.O = new Bp(a));
        return v(a.O)
    },
    Op = function(a, b) {
        if (a == b) throw Error("Unable to set parent component");
        if (b && a.G && a.qa && Np(a.G, a.qa) && a.G != b) throw Error("Unable to set parent component");
        a.G = b;
        X.D.Ed.call(a, b)
    };
X.prototype.getParent = function() {
    return this.G
};
X.prototype.Ed = function(a) {
    if (this.G && this.G != a) throw Error("Method not supported");
    X.D.Ed.call(this, a)
};
X.prototype.Ja = function() {
    this.v = Jg(this.a, "DIV")
};
X.prototype.render = function(a) {
    Pp(this, a)
};
var Pp = function(a, b, c) {
    if (a.ya) throw Error("Component already rendered");
    a.v || a.Ja();
    b ? b.insertBefore(a.v, c || null) : a.a.a.body.appendChild(a.v);
    a.G && !a.G.ya || a.aa()
};
h = X.prototype;
h.ba = function(a) {
    if (this.ya) throw Error("Component already rendered");
    if (a && this.Wc(a)) {
        this.wb = !0;
        var b = Lf(a);
        this.a && this.a.a == b || (this.a = Mf(a));
        this.Da(a);
        this.aa()
    } else throw Error("Invalid element to decorate");
};
h.Wc = function() {
    return !0
};
h.Da = function(a) {
    this.v = a
};
h.aa = function() {
    this.ya = !0;
    Qp(this, function(a) {
        !a.ya && a.j() && a.aa()
    })
};
h.ab = function() {
    Qp(this, function(a) {
        a.ya && a.ab()
    });
    this.O && Gp(this.O);
    this.ya = !1
};
h.T = function() {
    this.ya && this.ab();
    this.O && (this.O.Ia(), delete this.O);
    Qp(this, function(a) {
        a.Ia()
    });
    !this.wb && this.v && mg(this.v);
    this.G = this.na = this.v = this.L = this.o = null;
    X.D.T.call(this)
};
h.ib = function(a, b) {
    this.pd(a, Rp(this), b)
};
h.pd = function(a, b, c) {
    v(!!a, "Provided element must not be null.");
    if (a.ya && (c || !this.ya)) throw Error("Component already rendered");
    if (0 > b || b > Rp(this)) throw Error("Child component index out of bounds");
    this.L && this.o || (this.L = {}, this.o = []);
    if (a.getParent() == this) {
        var d = Kp(a);
        this.L[d] = a;
        Db(this.o, a)
    } else Tb(this.L, Kp(a), a);
    Op(a, this);
    Jb(this.o, b, 0, a);
    a.ya && this.ya && a.getParent() == this ? (c = this.Yb(), b = c.childNodes[b] || null, b != a.j() && c.insertBefore(a.j(), b)) : c ? (this.v || this.Ja(), b = Sp(this, b + 1), Pp(a, this.Yb(),
        b ? b.v : null)) : this.ya && !a.ya && a.v && a.v.parentNode && 1 == a.v.parentNode.nodeType && a.aa()
};
h.Yb = function() {
    return this.v
};
var Tp = function(a) {
        null == a.Na && (a.Na = rp(a.ya ? a.v : a.a.a.body));
        return a.Na
    },
    Rp = function(a) {
        return a.o ? a.o.length : 0
    },
    Np = function(a, b) {
        a.L && b ? (a = a.L, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
        return b
    },
    Sp = function(a, b) {
        return a.o ? a.o[b] || null : null
    },
    Qp = function(a, b, c) {
        a.o && w(a.o, b, c)
    },
    Up = function(a, b) {
        return a.o && b ? rb(a.o, b) : -1
    };
X.prototype.removeChild = function(a, b) {
    if (a) {
        var c = "string" === typeof a ? a : Kp(a);
        a = Np(this, c);
        if (c && a) {
            var d = this.L;
            c in d && delete d[c];
            Db(this.o, a);
            b && (a.ab(), a.v && mg(a.v));
            Op(a, null)
        }
    }
    if (!a) throw Error("Child is not in parent component");
    return a
};
var Vp = function(a) {
    Hl(this, a, 4)
};
t(Vp, Gl);
var Wp = {
    word_postproc: {
        H: 0,
        J: !1
    },
    score: {
        H: 1,
        J: !1
    },
    has_preceding_space: {
        H: 2,
        J: !1
    },
    attach_to_next_token: {
        H: 3,
        J: !1
    }
};
Vp.prototype.za = function() {
    return Wp
};
var Xp = function(a) {
    Hl(this, a, 2)
};
t(Xp, Gl);
var Yp = {
    begin: {
        H: 0,
        J: !1
    },
    end: {
        H: 1,
        J: !1
    }
};
Xp.prototype.za = function() {
    return Yp
};
var Zp = function(a) {
    Hl(this, a, 7)
};
t(Zp, Gl);
var $p = {
    src_phrase: {
        H: 0,
        J: !1
    },
    alternative: {
        H: 2,
        va: function(a) {
            return Ol(Vp, a)
        },
        sa: function(a) {
            return Nl(new Vp(a))
        },
        J: !0
    },
    srcunicodeoffsets: {
        H: 3,
        va: function(a) {
            return Ol(Xp, a)
        },
        sa: function(a) {
            return Nl(new Xp(a))
        },
        J: !0
    },
    raw_src_segment: {
        H: 4,
        J: !1
    },
    start_pos: {
        H: 5,
        J: !1
    },
    end_pos: {
        H: 6,
        J: !1
    }
};
Zp.prototype.za = function() {
    return $p
};
var aq = function(a, b) {
        return new Vp(Ll(a, 2, b))
    },
    bq = function(a, b) {
        return new Xp(Ll(a, 3, b))
    };
var cq = function(a) {
    Hl(this, a, 8)
};
t(cq, Gl);
var dq = {
    word: {
        H: 0,
        J: !1
    },
    styles: {
        H: 1,
        J: !0
    },
    has_preceding_space: {
        H: 2,
        J: !1
    },
    attach_to_next_token: {
        H: 3,
        J: !1
    },
    confidence: {
        H: 4,
        J: !1
    },
    start_pos: {
        H: 5,
        J: !1
    },
    end_pos: {
        H: 6,
        J: !1
    },
    not_from_first_segment: {
        H: 7,
        J: !1
    }
};
cq.prototype.za = function() {
    return dq
};
var eq = function(a) {
    Hl(this, a, 3)
};
t(eq, Gl);
var fq = {
    gloss: {
        H: 0,
        J: !1
    },
    definition_id: {
        H: 1,
        J: !1
    },
    example: {
        H: 2,
        J: !1
    }
};
eq.prototype.za = function() {
    return fq
};
var gq = function(a) {
    Hl(this, a, 3)
};
t(gq, Gl);
var hq = {
    pos: {
        H: 0,
        J: !1
    },
    entry: {
        H: 1,
        va: function(a) {
            return Ol(eq, a)
        },
        sa: function(a) {
            return Nl(new eq(a))
        },
        J: !0
    },
    base_form: {
        H: 2,
        J: !1
    }
};
gq.prototype.za = function() {
    return hq
};
gq.prototype.b = function() {
    return H(this, 1)
};
gq.prototype.c = function(a) {
    return new eq(Ll(this, 1, a))
};
var iq = function(a) {
    Hl(this, a, 6)
};
t(iq, Gl);
var jq = {
    word: {
        H: 0,
        J: !1
    },
    reverse_translation: {
        H: 1,
        J: !0
    },
    synset_id: {
        H: 2,
        J: !0
    },
    score: {
        H: 3,
        J: !1
    },
    previous_word: {
        H: 4,
        J: !1
    },
    gender: {
        H: 5,
        J: !1
    }
};
iq.prototype.za = function() {
    return jq
};
iq.prototype.Rc = function() {
    return Il(this, 5, 0)
};
var kq = function(a) {
    Hl(this, a, 5)
};
t(kq, Gl);
var lq = {
    pos: {
        H: 0,
        J: !1
    },
    terms: {
        H: 1,
        J: !0
    },
    entry: {
        H: 2,
        va: function(a) {
            return Ol(iq, a)
        },
        sa: function(a) {
            return Nl(new iq(a))
        },
        J: !0
    },
    base_form: {
        H: 3,
        J: !1
    },
    pos_enum: {
        H: 4,
        J: !1
    }
};
kq.prototype.za = function() {
    return lq
};
var mq = function(a, b) {
    return Ih(a, 1, b)
};
kq.prototype.b = function() {
    return H(this, 2)
};
kq.prototype.c = function(a) {
    return new iq(Ll(this, 2, a))
};
var nq = function(a) {
    Hl(this, a, 17)
};
t(nq, Gl);
var oq = {
    animacy: {
        H: 0,
        J: !1
    },
    inflection_aspect: {
        H: 1,
        J: !1
    },
    grammatical_case: {
        H: 2,
        J: !1
    },
    degree: {
        H: 3,
        J: !1
    },
    gender: {
        H: 4,
        J: !1
    },
    mood: {
        H: 5,
        J: !1
    },
    nonfinite_form: {
        H: 6,
        J: !1
    },
    number: {
        H: 7,
        J: !1
    },
    person: {
        H: 8,
        J: !1
    },
    polarity: {
        H: 9,
        J: !1
    },
    referent: {
        H: 10,
        J: !1
    },
    strength: {
        H: 11,
        J: !1
    },
    tense: {
        H: 12,
        J: !1
    },
    imperfect_suffix: {
        H: 13,
        J: !1
    },
    voice: {
        H: 14,
        J: !1
    },
    infinitive_number: {
        H: 15,
        J: !1
    },
    precedes: {
        H: 16,
        J: !1
    }
};
nq.prototype.za = function() {
    return oq
};
nq.prototype.Rc = function() {
    return Il(this, 4, 0)
};
var pq = function(a) {
    Hl(this, a, 2)
};
t(pq, Gl);
var qq = {
    written_form: {
        H: 0,
        J: !1
    },
    features: {
        H: 1,
        va: function(a) {
            return Ol(nq, a)
        },
        sa: function(a) {
            return Nl(new nq(a))
        },
        J: !1
    }
};
pq.prototype.za = function() {
    return qq
};
var rq = function(a) {
    Hl(this, a, 4)
};
t(rq, Gl);
var sq = {
    title: {
        H: 0,
        J: !1
    },
    description: {
        H: 1,
        J: !1
    },
    image_url: {
        H: 2,
        J: !1
    },
    image_ref_url: {
        H: 3,
        J: !1
    }
};
rq.prototype.za = function() {
    return sq
};
var tq = function(a) {
    Hl(this, a, 4)
};
t(tq, Gl);
var uq = {
    srclangs: {
        H: 0,
        J: !0
    },
    extended_srclangs: {
        H: 3,
        J: !0
    },
    detected_target: {
        H: 1,
        J: !1
    },
    srclangs_confidences: {
        H: 2,
        J: !0
    }
};
tq.prototype.za = function() {
    return uq
};
var vq = function(a) {
    Hl(this, a, 1)
};
t(vq, Gl);
var wq = {
    word: {
        H: 0,
        J: !0
    }
};
vq.prototype.za = function() {
    return wq
};
var xq = function(a) {
    Hl(this, a, 6)
};
t(xq, Gl);
var yq = {
    spell_html_res: {
        H: 0,
        J: !1
    },
    spell_res: {
        H: 1,
        J: !1
    },
    correction_type: {
        H: 2,
        J: !0
    },
    correction_translation: {
        H: 3,
        J: !1
    },
    related: {
        H: 4,
        J: !1
    },
    confident: {
        H: 5,
        J: !1
    }
};
xq.prototype.za = function() {
    return yq
};
var zq = function(a) {
    Hl(this, a, 2)
};
t(zq, Gl);
var Aq = {
    synonym: {
        H: 0,
        J: !0
    },
    definition_id: {
        H: 1,
        J: !1
    }
};
zq.prototype.za = function() {
    return Aq
};
var Bq = function(a) {
    Hl(this, a, 3)
};
t(Bq, Gl);
var Cq = {
    pos: {
        H: 0,
        J: !1
    },
    entry: {
        H: 1,
        va: function(a) {
            return Ol(zq, a)
        },
        sa: function(a) {
            return Nl(new zq(a))
        },
        J: !0
    },
    base_form: {
        H: 2,
        J: !1
    }
};
Bq.prototype.za = function() {
    return Cq
};
Bq.prototype.b = function() {
    return H(this, 1)
};
Bq.prototype.c = function(a) {
    return new zq(Ll(this, 1, a))
};
var Dq = function(a) {
    Hl(this, a, 6)
};
t(Dq, Gl);
var Eq = {
    text: {
        H: 0,
        J: !1
    },
    source: {
        H: 1,
        J: !1
    },
    link: {
        H: 2,
        J: !1
    },
    translation: {
        H: 3,
        J: !1
    },
    source_type: {
        H: 4,
        J: !1
    },
    definition_id: {
        H: 5,
        J: !1
    }
};
Dq.prototype.za = function() {
    return Eq
};
Dq.prototype.Be = function() {
    return I(this, 1)
};
Dq.prototype.tb = function() {
    return I(this, 3)
};
var Fq = function(a) {
    Hl(this, a, 1)
};
t(Fq, Gl);
var Gq = {
    example: {
        H: 0,
        va: function(a) {
            return Ol(Dq, a)
        },
        sa: function(a) {
            return Nl(new Dq(a))
        },
        J: !0
    }
};
Fq.prototype.za = function() {
    return Gq
};
var Hq = function(a) {
    Hl(this, a, 19)
};
t(Hq, Gl);
var Iq = {
    sentences: {
        H: 0,
        va: function(a) {
            return Ol(cm, a)
        },
        sa: function(a) {
            return Nl(new cm(a))
        },
        J: !0
    },
    dict: {
        H: 1,
        va: function(a) {
            return Ol(kq, a)
        },
        sa: function(a) {
            return Nl(new kq(a))
        },
        J: !0
    },
    src: {
        H: 2,
        J: !1
    },
    err: {
        H: 3,
        J: !1
    },
    styled_words: {
        H: 4,
        va: function(a) {
            return Ol(cq, a)
        },
        sa: function(a) {
            return Nl(new cq(a))
        },
        J: !0
    },
    alternative_translations: {
        H: 5,
        va: function(a) {
            return Ol(Zp, a)
        },
        sa: function(a) {
            return Nl(new Zp(a))
        },
        J: !0
    },
    confidence: {
        H: 6,
        J: !1
    },
    spell: {
        H: 7,
        va: function(a) {
            return Ol(xq, a)
        },
        sa: function(a) {
            return Nl(new xq(a))
        },
        J: !1
    },
    autocorrection: {
        H: 10,
        J: !1
    },
    ld_result: {
        H: 8,
        va: function(a) {
            return Ol(tq, a)
        },
        sa: function(a) {
            return Nl(new tq(a))
        },
        J: !1
    },
    server_time: {
        H: 9,
        J: !1
    },
    synsets: {
        H: 11,
        va: function(a) {
            return Ol(Bq, a)
        },
        sa: function(a) {
            return Nl(new Bq(a))
        },
        J: !0
    },
    definitions: {
        H: 12,
        va: function(a) {
            return Ol(gq, a)
        },
        sa: function(a) {
            return Nl(new gq(a))
        },
        J: !0
    },
    examples: {
        H: 13,
        va: function(a) {
            return Ol(Fq, a)
        },
        sa: function(a) {
            return Nl(new Fq(a))
        },
        J: !1
    },
    related_words: {
        H: 14,
        va: function(a) {
            return Ol(vq, a)
        },
        sa: function(a) {
            return Nl(new vq(a))
        },
        J: !1
    },
    knowledge_results: {
        H: 15,
        va: function(a) {
            return Ol(rq, a)
        },
        sa: function(a) {
            return Nl(new rq(a))
        },
        J: !0
    },
    query_inflections: {
        H: 16,
        va: function(a) {
            return Ol(pq, a)
        },
        sa: function(a) {
            return Nl(new pq(a))
        },
        J: !0
    },
    target_inflections: {
        H: 17,
        va: function(a) {
            return Ol(pq, a)
        },
        sa: function(a) {
            return Nl(new pq(a))
        },
        J: !0
    },
    gendered_translation_result: {
        H: 18,
        va: function(a) {
            return Ol(gm, a)
        },
        sa: function(a) {
            return Nl(new gm(a))
        },
        J: !1
    }
};
Hq.prototype.za = function() {
    return Iq
};
var Jq = function(a) {
        return new xq(a.a[7])
    },
    Kq = function(a) {
        return new vq(a.a[14])
    };
Hq.prototype.hc = function() {
    return H(this, 0)
};
Hq.prototype.bb = function(a) {
    return new cm(Ll(this, 0, a))
};
var Fh = function(a, b) {
        return new kq(Ll(a, 1, b))
    },
    Lq = function(a, b) {
        return new Zp(Ll(a, 5, b))
    };
var Mq = function(a, b) {
    X.call(this);
    this.W = b;
    this.Ra = a;
    this.gf = this.text = this.Ma = this.Ba = "";
    this.data = null;
    this.nb = Km.M()
};
t(Mq, X);
h = Mq.prototype;
h.update = function(a, b, c, d) {
    this.text = a;
    this.Ba = b;
    this.Ma = c;
    this.data = d;
    this.setVisible(!1);
    return !1
};
h.setVisible = function(a) {
    var b = this.j();
    b && V(b, a)
};
h.isVisible = function() {
    var a = this.j();
    return a ? op(a) : !1
};
h.zj = function() {
    return {}
};
h.Jb = function() {
    return this.W
};
h.log = function(a, b) {
    var c = {};
    c.dt = this.W;
    c.sl = this.Ba;
    c.tl = this.Ma;
    c.hl = this.Ra;
    c.q = this.text;
    c.e = a;
    b && Wb(c, b);
    Wb(c, this.zj());
    this.nb.log("lexicon", c);
    b = this.Ba;
    c = this.Ma;
    window.__gaTracker && (__gaTracker("set", "dimension1", this.Ra), __gaTracker("set", "dimension2", b + "|" + c), __gaTracker("set", "dimension3", b), __gaTracker("set", "dimension4", c));
    Eh("lexicon", this.W + ":" + a, "", 1)
};
var Nq = function(a, b, c, d, e) {
    Mq.call(this, a, b);
    this.Oc = this.b = null;
    this.V = c;
    this.xj = d;
    this.X = e;
    this.N = this.h = null;
    this.m = !1;
    this.ia = "More";
    this.qc = !1;
    this.Ca = "Less";
    this.Xh = !1;
    this.F = K.M();
    this.c = []
};
t(Nq, Mq);
h = Nq.prototype;
h.Ja = function() {
    Nq.D.Ja.call(this);
    this.Da(cg("DIV"))
};
h.Da = function(a) {
    Nq.D.Da.call(this, a);
    R(this.j(), "gt-cd");
    R(this.j(), "gt-cd-" + this.W);
    Ag(this.j(), !0);
    this.j().appendChild(Mo(ko));
    this.Oc = B("gt-cd-tl", this.j());
    this.b = B("gt-cd-c", this.j());
    this.h = B("cd-expand-button", this.j());
    this.N = B("cd-expand-label", this.j());
    V(this.h, !1)
};
h.T = function() {
    this.Dd();
    Nq.D.T.call(this)
};
h.Md = function() {
    return this.X
};
h.ze = function() {
    return this.c.length
};
h.Lg = function(a) {
    return this.c.indexOf(a)
};
h.Dd = function() {
    this.c = []
};
h.eb = function() {
    return this.ze()
};
h.update = function(a, b, c, d) {
    Nq.D.update.call(this, a, b, c, d);
    this.m = this.qc = !1;
    mg(null);
    V(this.h, !1);
    T(this.h, "collapse");
    Oq(this, a);
    return !1
};
h.aa = function() {
    var a = this;
    Nq.D.aa.call(this);
    this.h && Dh(this.h, this.Yn.bind(this));
    Y(this).listen(this, "a", p(this.Wi, this, "clks"), !1);
    Y(this).listen(this, "b", p(this.Wi, this, "clkt"), !1);
    this.j() && (Y(this).listen(this.j(), "focusout", function(b) {
        sg(a.j(), b.relatedTarget) || T(a.j(), "clear-outline")
    }), Y(this).listen(this.j(), "mousedown", function() {
        R(a.j(), "clear-outline")
    }), Y(this).listen(this.j(), "mouseup", function() {
        R(a.j(), "clear-outline")
    }))
};
h.Yn = function() {
    this.m = !this.m;
    this.ee(this.m);
    if (this.m) R(this.h, "collapse"), E(this.N, this.Ca), this.log("expand"), lm(this.F, this.X, this.eb());
    else {
        T(this.h, "collapse");
        E(this.N, this.ia);
        this.log("collapse");
        var a = this.F,
            b = this.eb();
        L(a, im(a, 189, this.X, b, !0, 0))
    }
};
h.Wi = function(a, b) {
    b = b.target;
    var c = this.F;
    L(c, im(c, 79, this.X, this.ze(), this.qc, this.Lg(b) + 1));
    b = Eg(b);
    this.log(a, {
        clk: b
    })
};
var Oq = function(a, b) {
        var c = D("DIV"),
            d = a.V.indexOf("%1$s");
        if (-1 != d) {
            var e = a.V.slice(0, d);
            d = a.V.slice(d + 4, a.V.length);
            e && hg(c, e);
            e = D("SPAN", {
                "class": "gt-card-ttl-txt"
            });
            To(e, "direction", jc(a.Ba) ? "rtl" : "ltr");
            E(e, b);
            c.appendChild(e);
            d && hg(c, d);
            a.Oc && (ig(a.Oc), a.Oc.appendChild(c))
        } else a.Oc && E(a.Oc, a.xj)
    },
    Pq = function(a, b, c) {
        a.qc = !0;
        V(a.h, !0);
        null != b && (a.ia = b);
        null != c && (a.Ca = c);
        E(a.N, a.ia)
    };
Nq.prototype.ee = function(a) {
    for (var b, c, d = Qf("gt-card-expand-wrapper", this.j()), e = 0; e < d.length; e++) {
        b = d[e];
        To(b, "max-height", Vo(b, "height"));
        c = b.firstChild;
        var f = xp(c, "margin");
        c = lp(c).height + f.top + f.bottom;
        To(b, "max-height", a ? c + "px" : 0);
        a ? (T(b, "gt-card-collapsed"), R(b, "gt-card-expanded"), yo(b, "hidden", !1), jh(b, Tg, function(g) {
            To(g.target, "max-height", "unset")
        }, !1)) : (T(b, "gt-card-expanded"), R(b, "gt-card-collapsed"), yo(b, "hidden", !0))
    }
};
var Qq = function(a, b) {
    if (b) return a;
    a = D("DIV", {
        "class": "gt-card-expand-wrapper gt-card-collapsed"
    }, a);
    yo(a, "hidden", !0);
    return a
};
var Sq = function(a, b) {
        var c = Array.prototype.slice.call(arguments),
            d = c.shift();
        if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
        return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, k, l, m, q, r) {
            if ("%" == m) return "%";
            var u = c.shift();
            if ("undefined" == typeof u) throw Error("[goog.string.format] Not enough arguments");
            arguments[0] = u;
            return Rq[m].apply(null, arguments)
        })
    },
    Rq = {
        s: function(a, b, c) {
            return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ?
                a + me(" ", Number(c) - a.length) : me(" ", Number(c) - a.length) + a
        },
        f: function(a, b, c, d, e) {
            d = a.toString();
            isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
            var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
            0 <= Number(a) && (d = f + d);
            if (isNaN(c) || d.length >= Number(c)) return d;
            d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
            a = Number(c) - d.length - f.length;
            return d = 0 <= b.indexOf("-", 0) ? f + d + me(" ", a) : f + me(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
        },
        d: function(a, b, c, d, e, f, g, k) {
            return Rq.f(parseInt(a,
                10), b, c, d, 0, f, g, k)
        }
    };
Rq.i = Rq.d;
Rq.u = Rq.d;
var Tq = function(a, b, c, d, e, f, g) {
    Nq.call(this, a, null != c && c ? "mbd" : "bd", MSG_TRANSLATIONS_OF, "", 11);
    this.g = c;
    this.R = null != d ? d : !1;
    this.xa = "";
    this.xa = this.g && this.R ? "gt-baf-cell gt-baf-word" : this.g ? "gt-baf-cell gt-baf-word-clickable" : "gt-baf-word-clickable";
    this.C = this.R ? null : "gt-baf-back";
    this.Ob = f || "";
    this.$b = g || "";
    this.w = null;
    this.ra = !1;
    this.Z = null != e ? e : !0;
    this.K = {};
    this.K[1] = b[2];
    this.K[2] = b[1];
    this.K[3] = b[0];
    this.Ta = b[3]
};
t(Tq, Nq);
Tq.prototype.update = function(a, b, c, d) {
    Tq.D.update.call(this, a, b, c, d);
    if (!d || 0 == H(d, 1)) return !1;
    ig(this.b);
    this.Dd();
    this.w = new Mh(d);
    Uq(this, this.w);
    a = D("TBODY");
    b = D("TABLE", {
        "class": "gt-baf-table"
    }, a);
    c = this.w.a;
    for (var e = 0; e < c.length; e++) {
        var f = c[e],
            g = Vq(this, f, this.g && this.Z && 0 === e);
        gg(a, g);
        f = f.a;
        for (var k = g = 0; k < f.length; k++) {
            var l = f[k];
            if (!this.g && this.w.b && 0 < k) {
                var m = Qh(l);
                var q = D("DIV", {
                    "class": "gt-baf-cell gt-baf-sep"
                });
                m = Qq(q, m);
                this.g || (m = D("TD", {
                    colspan: 4
                }, m), m = D("TR", null, m));
                gg(a, m)
            }
            l =
                l.a;
            for (m = 0; m < l.length; m++) {
                q = l[m];
                var r = d.bb(0).Tc();
                q = Wq(this, q, r, g);
                a.appendChild(q);
                g++
            }
        }
        this.b.appendChild(b);
        0 < Nh(this.w) && (f = this.Ta.replace("%1$s", Nh(this.w).toLocaleString(this.Ra)), Pq(this, f, MSG_FEWER_TRANSLATIONS_LABEL))
    }
    this.setVisible(!0);
    return !0
};
Tq.prototype.aa = function() {
    Tq.D.aa.call(this);
    R(this.j(), "gt-cd-baf");
    Y(this).listen(this.j(), "click", this.xb);
    Y(this).listen(this.j(), "mouseover", this.fb);
    Y(this).listen(this.j(), "mouseout", this.$a)
};
var Uq = function(a, b) {
        var c = Oh(b);
        c = c.sort(function(g, k) {
            return k.Pb - g.Pb
        });
        var d = 0;
        a.ra = !1;
        for (var e = 0; e < c.length; e++) {
            var f = c[e]; - 1 < f.Pb && (a.ra = !0);
            f.b = .05 <= f.Pb ? 3 : .0025 <= f.Pb ? 2 : 1;
            f.a = 12 > e || 3 == f.b;
            d += f.a ? 0 : 1
        }
        if (4 >= d)
            for (e = 0; e < c.length; e++) c[e].a = !0;
        b.b && Ph(b)
    },
    Xq = function(a, b) {
        for (var c = [], d = 0; d < b.length; d++) {
            var e = D("SPAN", null, b[d]);
            null != a.C && (R(e, a.C), a.c.push(e));
            c.push(e);
            d < b.length - 1 && c.push(dg(", "))
        }
        return c
    },
    Vq = function(a, b, c) {
        var d = b.c;
        d && (a.gf = d, Oq(a, d));
        b = No(no, {
            zk: c,
            Sk: a.Ob,
            Tk: a.$b,
            cn: b.g,
            Gd: Rh(b)
        });
        if (c) {
            c = C("tlid-frequency-help-icon", b);
            var e = C("tlid-frequency-help-icon-container", b),
                f = C("tlid-frequency-help-tooltip", b);
            Y(a).listen(c, "click", function() {
                U(e, "show-tooltip", !Go(e, "show-tooltip"))
            });
            Y(a).listen(document, "click", function(g) {
                var k = gb(g.target);
                Go(e, "show-tooltip") && (g = k.classList.contains("tlid-frequency-help-icon"), k = sg(f, k), g || k || T(e, "show-tooltip"))
            })
        }
        a = D("TD", {
            colspan: 4
        }, b);
        return D("TR", null, a)
    },
    Yq = function(a, b) {
        return jc(b) !== jc(a.Ra) ? jc(b) ? "rtl" : "ltr" : ""
    },
    Wq = function(a, b, c, d) {
        if (a.g) {
            var e = b.text,
                f = null != b.Qe ? b.Qe : "",
                g = e === c;
            c = b.a;
            d = a.R ? "gt-baf-entry-clickable" : "gt-baf-entry";
            g && (d += " gt-baf-entry-selected");
            d = D("TR", {
                "class": d
            });
            var k = D("TD");
            e = No(oo, {
                gh: g,
                Qe: f,
                Sn: Yq(a, a.Ma),
                Gd: c,
                Fo: e,
                Go: a.xa
            });
            gg(k, e);
            e = D("TD");
            f = No(po, {
                jf: null != a.C ? a.C : "",
                wk: Yq(a, a.Ba),
                fg: b.fg,
                Gd: c
            });
            gg(e, f);
            gg(d, k);
            gg(d, e);
            k = b.b;
            b = a.K[b.b];
            a.g && a.Z && k && b && (b = No(ro, {
                Pb: k,
                zc: b,
                Gd: c
            }), c = D("TD"), gg(c, b), gg(d, c));
            a.C && (b = Qf(a.C, d), w(b, function(l) {
                this.c.push(l)
            }, a));
            b = a.R ? C("gt-baf-word",
                d) : C("gt-baf-word-clickable", d);
            a.c.push(b);
            return d
        }
        f = b.text;
        g = b.Qe;
        e = b.a;
        c = Zq(a, b.b, e);
        k = null;
        g && (k = $q(g, e));
        f = ar(a, f, g, e);
        b = Xq(a, b.fg);
        b = br(a, b, e);
        b = D("TR", null, c, k, f, b);
        jc(a.Ba) != jc(a.Ra) && 1 == d % 2 && R(b, "gt-baf-translations-alt");
        return b
    },
    Zq = function(a, b, c) {
        if (!a.ra || !a.Z) return a = D("DIV", {
            "class": "gt-baf-cell"
        }), c = Qq(a, c), D("TD", null, c);
        a = D("DIV", {
            "class": "gt-baf-cell gt-baf-marker-container",
            title: a.K[b]
        });
        b = Sq("width: %dpx", 8 * b);
        b = D("DIV", {
            "class": "gt-baf-cts",
            style: b
        });
        gg(a, b);
        c = Qq(a, c);
        return D("TD",
            null, c)
    },
    $q = function(a, b) {
        var c = D("DIV", {
            "class": "gt-baf-cell gt-baf-previous-word"
        });
        E(c, a);
        a = Qq(c, b);
        return D("TD", null, a)
    },
    ar = function(a, b, c, d) {
        var e = null;
        jc(a.Ma) !== jc(a.Ra) && (e = jc(a.Ma) ? dc("direction: rtl;") : dc("direction: ltr;"));
        b = D("SPAN", a.xa, b);
        a.c.push(b);
        a = D("DIV", "gt-baf-cell", b);
        a = Qq(a, d);
        d || R(a, "gt-card-widen-wrapper");
        d = D("TD", null, a);
        c || (d.m = 2);
        c && e && (c = cc(e), 0 === c.length ? c = $c : (v(wc(c, ";"), "Last character of style string is not ';': " + c), v(Jc(c, ":"), "Style string must contain at least one ':', to specify a \"name: value\" pair: " +
            c), c = Zc(c)), d.style.cssText = Yc(c));
        return d
    },
    br = function(a, b, c) {
        a = jc(a.Ba) !== jc(a.Ra) ? Sq("direction: %s", jc(a.Ba) ? "rtl" : "ltr") : "";
        b = D("DIV", {
            "class": "gt-baf-cell gt-baf-translations",
            style: a
        }, b);
        c = Qq(b, c);
        return D("TD", {
            style: "width: 100%"
        }, c)
    };
Tq.prototype.ee = function(a) {
    Tq.D.ee.call(this, a);
    for (var b = Qf("gt-card-widen-wrapper", this.j()), c = 0; c < b.length; c++) {
        var d = b[c],
            e = B("gt-baf-cell", d),
            f = xp(e, "margin");
        e = e.scrollWidth + f.left + f.right + 1;
        To(d, "max-width", a ? e + "px" : 0)
    }
};
Tq.prototype.xb = function(a) {
    var b = Hg(a.target);
    null != b ? (a = B("gt-baf-word", b), null != a && this.dispatchEvent(new F("b", a))) : Go(a.target, "gt-baf-word-clickable") ? this.dispatchEvent(new F("b", a.target)) : Go(a.target, "gt-baf-back") && this.dispatchEvent(new F("a", a.target))
};
Tq.prototype.fb = function(a) {
    if (Go(a.target, "gt-baf-back")) {
        var b = Pf(document, null, "gt-baf-back", this.j());
        a = Eg(a.target);
        for (var c = 0; c < b.length; c++) Eg(b[c]) == a && R(b[c], "gt-baf-hl")
    }
};
Tq.prototype.$a = function() {
    for (var a = Pf(document, null, "gt-baf-hl", this.j()), b = 0; b < a.length; b++) T(a[b], "gt-baf-hl")
};
var dr = function(a) {
        this.a = null != a ? new cn(cr(a)) : new cn;
        this.b = "home";
        sn(this.a, "view") && (this.b = this.a.get("view"), rn(this.a, "view"))
    },
    er = function(a, b) {
        a.b = b;
        return a
    },
    gr = function(a, b, c, d) {
        fr(a);
        a.a.set("op", "translate").set("sl", b).set("tl", c);
        null == d || xc(d) || a.a.set("text", d)
    },
    hr = function(a, b, c, d) {
        fr(a);
        a.a.set("op", "star").set("sl", b).set("tl", c).set("text", d)
    },
    fr = function(a) {
        rn(a.a, "op");
        rn(a.a, "sl");
        rn(a.a, "tl");
        rn(a.a, "text")
    };
dr.prototype.Pa = function() {
    return ir(this, "sl")
};
dr.prototype.ma = function() {
    return ir(this, "tl")
};
var ir = function(a, b) {
        var c = "";
        sn(a.a, b) && (c = a.a.get(b), c = fe(c));
        return c
    },
    jr = function(a, b) {
        return sn(a.a, "op") && a.a.get("op") === b
    };
dr.prototype.toString = function() {
    var a = "view=" + this.b,
        b = this.a;
    pn(b);
    0 == b.b || (a += "&" + this.a.toString());
    return a
};

function cr(a) {
    if (a.startsWith("view=")) return a;
    var b = new dr;
    if (a.startsWith("op=")) switch (a = new cn(a), a.get("op")) {
        case "showhistory":
            return er(b, "history").toString();
        case "showsaved":
            return er(b, "saved").toString();
        case "star":
            if (sn(a, "sl") && sn(a, "tl") && sn(a, "text") && sn(a, "page")) {
                switch (a.get("page")) {
                    case "history":
                        er(b, "history");
                        break;
                    default:
                        er(b, "home")
                }
                hr(b, a.get("sl"), a.get("tl"), a.get("text"))
            }
            return b.toString();
        default:
            return er(b, "home").toString()
    } else {
        a = a.split(/[|\/]/);
        er(b, "home");
        var c = "",
            d = "",
            e = "";
        0 < a.length && 0 < a[0].length && (c = a[0]);
        1 < a.length && 0 < a[1].length && (d = a[1]);
        2 < a.length && 0 < a[2].length && (e = a[2]);
        0 < c.length && 0 < d.length && (0 < e.length ? gr(b, c, d, e) : gr(b, c, d), 3 < a.length && "share" === a[3] && b.a.set("op", "share"));
        return b.toString()
    }
};
var lr = function() {
        return !kr() && (x("iPod") || x("iPhone") || x("Android") || x("IEMobile"))
    },
    kr = function() {
        return x("iPad") || x("Android") && !x("Mobile") || x("Silk")
    },
    mr = function() {
        return !lr() && !kr()
    };
var nr = function(a, b) {
    F.call(this, "navigate");
    this.Eh = a;
    this.nm = b
};
t(nr, F);
var or = function(a, b) {
    a = [a];
    for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
    return a.join("\x0B")
};
var tr = function(a, b, c, d) {
    J.call(this);
    if (a && !b) throw Error("Can't use invisible history without providing a blank page.");
    if (c) var e = c;
    else {
        e = "history_state" + pr;
        var f = Ld("input", {
            type: "text",
            name: e,
            id: e,
            style: dc("display:none")
        });
        document.write(Bd(f));
        e = Nf(e)
    }
    this.w = e;
    this.a = c ? Yf(Lf(c)) : window;
    this.G = b;
    y && !b && (this.G = "https" == window.location.protocol ? tc(cc(dc("https:///"))) : tc(cc(dc('javascript:""'))));
    this.b = new Di(150);
    Ng(this, this.b);
    this.g = !a;
    this.c = new Bp(this);
    if (a || qr) {
        if (d) var g = d;
        else {
            a =
                "history_iframe" + pr;
            d = this.G;
            b = {
                id: a,
                style: dc("display:none"),
                sandbox: void 0
            };
            d && rc(d);
            c = {};
            c.src = d || null;
            c.srcdoc = null;
            d = {
                sandbox: ""
            };
            e = {};
            for (g in c) v(g.toLowerCase() == g, "Must be lower case"), e[g] = c[g];
            for (g in d) v(g.toLowerCase() == g, "Must be lower case"), e[g] = d[g];
            if (b)
                for (g in b) {
                    f = g.toLowerCase();
                    if (f in c) throw Error('Cannot override "' + f + '" attribute, got "' + g + '" with value "' + b[g] + '"');
                    f in d && delete e[f];
                    e[g] = b[g]
                }
            g = Kd("iframe", e, void 0);
            document.write(Bd(g));
            g = Nf(a)
        }
        this.C = g;
        this.N = !0
    }
    qr &&
        (this.c.listen(this.a, "load", this.Tm), this.O = this.L = !1);
    this.g ? rr(this, this.getToken(), !0) : sr(this, this.w.value);
    pr++
};
t(tr, J);
tr.prototype.m = !1;
tr.prototype.o = !1;
tr.prototype.h = null;
var ur = function(a, b) {
        var c = b || or;
        return function() {
            var d = this || n;
            d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
            var e = c(Ra(a), arguments);
            return d.hasOwnProperty(e) ? d[e] : d[e] = a.apply(this, arguments)
        }
    }(function() {
        return y ? Ve(8) : "onhashchange" in n
    }),
    qr = y && !Ve(8);
h = tr.prototype;
h.Yd = null;
h.T = function() {
    tr.D.T.call(this);
    this.c.Ia();
    this.oa(!1)
};
h.oa = function(a) {
    if (a != this.m)
        if (qr && !this.L) this.O = a;
        else if (a)
        if (ye ? this.c.listen(this.a.document, vr, this.R) : Ce && this.c.listen(this.a, "pageshow", this.Ym), ur() && this.g) this.c.listen(this.a, "hashchange", this.Vm), this.m = !0, this.dispatchEvent(new nr(this.getToken(), !1));
        else {
            if (!y || lr() || this.L) this.c.listen(this.b, "tick", p(this.K, this, !0)), this.m = !0, qr || (this.h = this.getToken(), this.dispatchEvent(new nr(this.getToken(), !1))), this.b.start()
        }
    else this.m = !1, Gp(this.c), this.b.stop()
};
h.Tm = function() {
    this.L = !0;
    this.w.value && sr(this, this.w.value, !0);
    this.oa(this.O)
};
h.Ym = function(a) {
    a.b.persisted && (this.oa(!1), this.oa(!0))
};
h.Vm = function() {
    var a = wr(this.a);
    a != this.h && xr(this, a, !0)
};
h.getToken = function() {
    return null != this.Yd ? this.Yd : this.g ? wr(this.a) : yr(this) || ""
};
var wr = function(a) {
        a = a.location.href;
        var b = a.indexOf("#");
        return 0 > b ? "" : a.substring(b + 1)
    },
    zr = function(a, b, c) {
        a.getToken() != b && (a.g ? (rr(a, b, c), ur() || y && !lr() && sr(a, b, c, void 0), a.m && a.K(!1)) : (sr(a, b, c), a.Yd = a.h = a.w.value = b, a.dispatchEvent(new nr(b, !1))))
    },
    rr = function(a, b, c) {
        a = a.a.location;
        var d = a.href.split("#")[0],
            e = Jc(a.href, "#");
        if (qr || e || b) d += "#" + b;
        d != a.href && (b = d, d = dc("URL taken from location.href."), bb(cc(d), "must provide justification"), v(!xc(cc(d)), "must provide non-empty justification"), b =
            new Oc(Mc, b), c ? ae(a, b) : $d(a, b))
    },
    sr = function(a, b, c, d) {
        if (a.N || b != yr(a))
            if (a.N = !1, b = ee(b), y) {
                var e = xg(a.C);
                e.open("text/html", c ? "replace" : void 0);
                c = Od(Ld("title", {}, d || a.a.document.title), Ld("body", {}, b));
                e.write(Bd(c));
                e.close()
            } else ib(a.G, pc, "this.iframeSrc_ must be set on calls to setIframeToken_"), e = rc(a.G) + "#" + b, (a = a.C.contentWindow) && (c ? ae(a.location, e) : $d(a.location, e))
    },
    yr = function(a) {
        if (y) return a = xg(a.C), a.body ? fe(a.body.innerHTML) : null;
        var b = a.C.contentWindow;
        if (b) {
            try {
                var c = fe(wr(b))
            } catch (d) {
                return a.o ||
                    (1 != a.o && Ei(a.b, 1E4), a.o = !0), null
            }
            a.o && (0 != a.o && Ei(a.b, 150), a.o = !1);
            return c || null
        }
        return null
    };
tr.prototype.K = function(a) {
    if (this.g) {
        var b = wr(this.a);
        b != this.h && xr(this, b, a)
    }
    if (!this.g || qr)
        if (b = yr(this) || "", null == this.Yd || b == this.Yd) this.Yd = null, b != this.h && xr(this, b, a)
};
var xr = function(a, b, c) {
    a.h = a.w.value = b;
    a.g ? (qr && sr(a, b), rr(a, b)) : sr(a, b);
    a.dispatchEvent(new nr(a.getToken(), c))
};
tr.prototype.R = function() {
    this.b.stop();
    this.b.start()
};
var vr = ["mousedown", "keydown", "mousemove"],
    pr = 0;
var Ar = function(a, b, c) {
    var d = this;
    J.call(this);
    this.b = new tr(!1, void 0, b, c);
    this.c = null;
    this.h = 0;
    this.g = a || !1;
    G(this.b, "navigate", function(e) {
        e.nm && d.dispatchEvent({
            type: "c",
            Eh: e.Eh
        })
    }, !1)
};
t(Ar, J);
var Cr = function(a, b, c, d) {
        var e = "",
            f = "",
            g = "";
        if (a.g) b = new dr(b), e = b.Pa(), f = b.ma(), g = ir(b, "text");
        else {
            var k = [];
            w(b.split(/[|\/]/), function(l) {
                k.push(fe(l))
            });
            e = ne(k[0]);
            f = ne(k[1]);
            2 < k.length && (g = k[2])
        }!xc(e) && !xc(f) && 0 <= c.indexOf(e) && ("auto" === f || 0 <= d.indexOf(f)) ? Br(a.c, e, f, g, "bh") : Br(a.c, "", "", "", "bh")
    },
    Dr = function(a, b, c, d) {
        var e = new dr(b);
        b = e.Pa();
        e = e.ma();
        !xc(b) && !xc(e) && 0 <= c.indexOf(b) && ("auto" === e || 0 <= d.indexOf(e)) ? Br(a.c, b, e, "", "bh") : Br(a.c, "", "", "", "bh")
    },
    Fr = function(a, b, c, d, e) {
        b = null != b ? b :
            "auto";
        c = null != c ? c : "en";
        a.g ? (a = Er(a), gr(a, b, c, d), null != e && "share" === e && a.a.set("op", "share"), b = a.toString()) : (b = b + "/" + c + "/" + ee(d), e && (b += "/" + e));
        return b
    },
    Er = function(a) {
        if (!a.g) throw Error("Should never be invoked without new URL fragment schema");
        return new dr(a.b.getToken())
    },
    Gr = function(a, b, c, d, e, f) {
        a.a(Fr(a, b, c, d, f), !e || null != f)
    };
Ar.prototype.a = function(a, b) {
    var c = (new Date).getTime();
    2E3 < c - this.h ? zr(this.b, a, !1) : zr(this.b, a, !0);
    this.h = b ? 0 : c
};
var Hr = function() {},
    Ir;
Ha(Hr);
var Jr = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
};
Hr.prototype.Zc = function() {};
Hr.prototype.kb = function(a) {
    return a.a.b("DIV", Kr(this, a).join(" "), a.Sa())
};
Hr.prototype.Cb = function(a) {
    return a
};
var Mr = function(a, b, c) {
    if (a = a.j ? a.j() : a) {
        var d = [b];
        y && !Te("7") && (d = Lr(Eo(a), b), d.push(b));
        (c ? Ho : Io)(a, d)
    }
};
Hr.prototype.Yc = function() {
    return !0
};
Hr.prototype.Va = function(a, b) {
    b.id && Lp(a, b.id);
    var c = this.Cb(b);
    c && c.firstChild ? Nr(a, c.firstChild.nextSibling ? Gb(c.childNodes) : c.firstChild) : a.$c = null;
    var d = 0,
        e = this.wa(),
        f = this.wa(),
        g = !1,
        k = !1,
        l = !1,
        m = Gb(Eo(b));
    w(m, function(r) {
        g || r != e ? k || r != f ? d |= this.g(r) : k = !0 : (g = !0, f == e && (k = !0));
        1 == this.g(r) && (gb(c), Bg(c) && Cg(c) && Ag(c, !1))
    }, this);
    a.ad = d;
    g || (m.push(e), f == e && (k = !0));
    k || m.push(f);
    (a = a.ac) && m.push.apply(m, a);
    if (y && !Te("7")) {
        var q = Lr(m);
        0 < q.length && (m.push.apply(m, q), l = !0)
    }
    g && k && !a && !l || Fo(b, m.join(" "));
    return b
};
Hr.prototype.Ff = function(a) {
    Tp(a) && this.Ug(a.j(), !0);
    a.isEnabled() && this.Qd(a, a.isVisible())
};
var Or = function(a, b, c) {
        if (a = c || a.Zc()) v(b, "The element passed as a first parameter cannot be null."), c = b.getAttribute("role") || null, a != c && wo(b, a)
    },
    Qr = function(a, b, c) {
        v(b);
        v(c);
        var d = b.fb;
        null != d && Co(c, d);
        b.isVisible() || yo(c, "hidden", !b.isVisible());
        b.isEnabled() || a.jc(c, 1, !b.isEnabled());
        Pr(b, 8) && a.jc(c, 8, b.gh());
        Pr(b, 16) && a.jc(c, 16, b.Ea(16));
        Pr(b, 64) && a.jc(c, 64, b.Ea(64))
    };
h = Hr.prototype;
h.Gf = function(a, b) {
    tp(a, !b, !y && !ye)
};
h.Ug = function(a, b) {
    Mr(a, this.wa() + "-rtl", b)
};
h.Tg = function(a) {
    var b;
    return Pr(a, 32) && (b = a.j()) ? Bg(b) && Cg(b) : !1
};
h.Qd = function(a, b) {
    var c;
    if (Pr(a, 32) && (c = a.j())) {
        if (!b && a.Ea(32)) {
            try {
                c.blur()
            } catch (d) {}
            a.Ea(32) && a.Hf(null)
        }(Bg(c) && Cg(c)) != b && Ag(c, b)
    }
};
h.setVisible = function(a, b) {
    V(a, b);
    a && yo(a, "hidden", !b)
};
h.xd = function(a, b, c) {
    var d = a.j();
    if (d) {
        var e = this.a(b);
        e && Mr(a, e, c);
        this.jc(d, b, c)
    }
};
h.jc = function(a, b, c) {
    Ir || (Ir = {
        1: "disabled",
        8: "selected",
        16: "checked",
        64: "expanded"
    });
    v(a, "The element passed as a first parameter cannot be null.");
    b = Ir[b];
    var d = a.getAttribute("role") || null;
    d && (d = Jr[d] || b, b = "checked" == b || "selected" == b ? d : b);
    b && yo(a, b, c)
};
h.Lb = function(a, b) {
    var c = this.Cb(a);
    c && (ig(c), b && ("string" === typeof b ? E(c, b) : (a = function(d) {
        if (d) {
            var e = Lf(c);
            c.appendChild("string" === typeof d ? e.createTextNode(d) : d)
        }
    }, La(b) ? w(b, a) : !Ma(b) || "nodeType" in b ? a(b) : w(Gb(b), a))))
};
h.wa = function() {
    return "goog-control"
};
var Kr = function(a, b) {
        var c = a.wa(),
            d = [c],
            e = a.wa();
        e != c && d.push(e);
        c = b.getState();
        for (e = []; c;) {
            var f = c & -c;
            e.push(a.a(f));
            c &= ~f
        }
        d.push.apply(d, e);
        (a = b.ac) && d.push.apply(d, a);
        y && !Te("7") && d.push.apply(d, Lr(d));
        return d
    },
    Lr = function(a, b) {
        var c = [];
        b && (a = Eb(a, [b]));
        w([], function(d) {
            !wb(d, Ua(Ab, a)) || b && !Ab(d, b) || c.push(d.join("_"))
        });
        return c
    };
Hr.prototype.a = function(a) {
    this.b || Rr(this);
    return this.b[a]
};
Hr.prototype.g = function(a) {
    if (!this.O) {
        this.b || Rr(this);
        var b = this.b,
            c = {},
            d;
        for (d in b) c[b[d]] = d;
        this.O = c
    }
    a = parseInt(this.O[a], 10);
    return isNaN(a) ? 0 : a
};
var Rr = function(a) {
    var b = a.wa(),
        c = !Jc(b.replace(/\xa0|\s/g, " "), " ");
    v(c, "ControlRenderer has an invalid css class: '" + b + "'");
    a.b = {
        1: b + "-disabled",
        2: b + "-hover",
        4: b + "-active",
        8: b + "-selected",
        16: b + "-checked",
        32: b + "-focused",
        64: b + "-open"
    }
};
var Sr = function() {};
t(Sr, Hr);
Ha(Sr);
h = Sr.prototype;
h.Zc = function() {
    return "button"
};
h.jc = function(a, b, c) {
    switch (b) {
        case 8:
        case 16:
            v(a, "The button DOM element cannot be null.");
            yo(a, "pressed", c);
            break;
        default:
        case 64:
        case 1:
            Sr.D.jc.call(this, a, b, c)
    }
};
h.kb = function(a) {
    var b = Sr.D.kb.call(this, a);
    Tr(b, a.h);
    var c = a.Y();
    c && this.Bf(b, c);
    Pr(a, 16) && this.jc(b, 16, a.Ea(16));
    return b
};
h.Va = function(a, b) {
    b = Sr.D.Va.call(this, a, b);
    var c = this.Y(b);
    a.ia = c;
    a.h = b.title;
    Pr(a, 16) && this.jc(b, 16, a.Ea(16));
    return b
};
h.Y = Ga;
h.Bf = Ga;
var Tr = function(a, b) {
        a && (b ? a.title = b : a.removeAttribute("title"))
    },
    Vr = function(a, b, c) {
        var d = Tp(b),
            e = a.wa() + "-collapse-left";
        a = a.wa() + "-collapse-right";
        Ur(b, d ? a : e, !!(c & 1));
        Ur(b, d ? e : a, !!(c & 2))
    };
Sr.prototype.wa = function() {
    return "goog-button"
};
var Xr = function(a, b) {
    J.call(this);
    a && Wr(this, a, b)
};
t(Xr, J);
h = Xr.prototype;
h.v = null;
h.Wf = null;
h.hh = null;
h.Xf = null;
h.Eb = -1;
h.tc = -1;
h.Pg = !1;
var Yr = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    },
    Zr = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    },
    $r = !De || Te("525"),
    as = Fe && Ce;
Xr.prototype.a = function(a) {
    if (De || ze)
        if (17 == this.Eb && !a.ctrlKey || 18 == this.Eb && !a.altKey || Fe && 91 == this.Eb && !a.metaKey) this.tc = this.Eb = -1; - 1 == this.Eb && (a.ctrlKey && 17 != a.keyCode ? this.Eb = 17 : a.altKey && 18 != a.keyCode ? this.Eb = 18 : a.metaKey && 91 != a.keyCode && (this.Eb = 91));
    $r && !Ah(a.keyCode, this.Eb, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.tc = zh(a.keyCode), as && (this.Pg = a.altKey))
};
Xr.prototype.b = function(a) {
    this.tc = this.Eb = -1;
    this.Pg = a.altKey
};
Xr.prototype.handleEvent = function(a) {
    var b = a.b,
        c = b.altKey;
    if (y && "keypress" == a.type) {
        var d = this.tc;
        var e = 13 != d && 27 != d ? b.keyCode : 0
    } else(De || ze) && "keypress" == a.type ? (d = this.tc, e = 0 <= b.charCode && 63232 > b.charCode && xh(d) ? b.charCode : 0) : ye && !De ? (d = this.tc, e = xh(d) ? b.keyCode : 0) : ("keypress" == a.type ? (as && (c = this.Pg), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.tc, e = b.charCode) : (d = b.keyCode || this.tc, e = b.charCode || 0)) : (d = b.keyCode || this.tc, e = b.charCode || 0), Fe && 63 == e && 224 == d && (d = 191));
    var f = d = zh(d);
    d ? 63232 <= d && d in Yr ? f = Yr[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in Zr && (f = Zr[b.keyIdentifier]);
    Ce && $r && "keypress" == a.type && !Ah(f, this.Eb, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.Eb, this.Eb = f, b = new bs(f, e, a, b), b.altKey = c, this.dispatchEvent(b))
};
Xr.prototype.j = function() {
    return this.v
};
var Wr = function(a, b, c) {
        a.Xf && cs(a);
        a.v = b;
        a.Wf = G(a.v, "keypress", a, c);
        a.hh = G(a.v, "keydown", a.a, c, a);
        a.Xf = G(a.v, "keyup", a.b, c, a)
    },
    cs = function(a) {
        a.Wf && (rh(a.Wf), rh(a.hh), rh(a.Xf), a.Wf = null, a.hh = null, a.Xf = null);
        a.v = null;
        a.Eb = -1;
        a.tc = -1
    };
Xr.prototype.T = function() {
    Xr.D.T.call(this);
    cs(this)
};
var bs = function(a, b, c, d) {
    Vg.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.repeat = c
};
t(bs, Vg);
var es = function(a, b) {
        if (!a) throw Error("Invalid class name " + a);
        if (!Na(b)) throw Error("Invalid decorator function " + b);
        ds[a] = b
    },
    fs = {},
    ds = {};
var Z = function(a, b, c) {
    X.call(this, c);
    if (!b) {
        for (b = this.constructor; b;) {
            var d = Ra(b);
            if (d = fs[d]) break;
            b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor
        }
        b = d ? Na(d.M) ? d.M() : new d : null
    }
    this.c = b;
    this.$c = void 0 !== a ? a : null;
    this.fb = null
};
t(Z, X);
h = Z.prototype;
h.$c = null;
h.ad = 0;
h.Te = 39;
h.Ac = 255;
h.Se = 0;
h.If = !0;
h.ac = null;
h.Yg = !0;
h.cf = !1;
h.Vg = null;
var hs = function(a, b) {
        a.ya && b != a.Yg && gs(a, b);
        a.Yg = b
    },
    is = function(a, b) {
        b && (a.ac ? Ab(a.ac, b) || a.ac.push(b) : a.ac = [b], Mr(a, b, !0))
    },
    js = function(a, b) {
        b && a.ac && Db(a.ac, b) && (0 == a.ac.length && (a.ac = null), Mr(a, b, !1))
    },
    Ur = function(a, b, c) {
        c ? is(a, b) : js(a, b)
    };
Z.prototype.Ja = function() {
    var a = this.c.kb(this);
    this.v = a;
    Or(this.c, a, this.C());
    this.cf || this.c.Gf(a, !1);
    this.isVisible() || this.c.setVisible(a, !1)
};
Z.prototype.C = function() {
    return this.Vg
};
var ks = function(a, b) {
    a.fb = b;
    (a = a.j()) && Co(a, b)
};
Z.prototype.Yb = function() {
    return this.c.Cb(this.j())
};
Z.prototype.Wc = function(a) {
    return this.c.Yc(a)
};
Z.prototype.Da = function(a) {
    this.v = a = this.c.Va(this, a);
    Or(this.c, a, this.C());
    this.cf || this.c.Gf(a, !1);
    this.If = "none" != a.style.display
};
Z.prototype.aa = function() {
    Z.D.aa.call(this);
    Qr(this.c, this, Mp(this));
    this.c.Ff(this);
    if (this.Te & -2 && (this.Yg && gs(this, !0), Pr(this, 32))) {
        var a = this.j();
        if (a) {
            var b = this.w || (this.w = new Xr);
            Wr(b, a);
            Y(this).listen(b, "key", this.Xa).listen(a, "focus", this.Zk).listen(a, "blur", this.Hf)
        }
    }
};
var gs = function(a, b) {
    var c = Y(a),
        d = a.j();
    b ? (c.listen(d, Ug.Id, a.vb).listen(d, [Ug.Jd, Ug.le], a.Db).listen(d, "mouseover", a.Ie).listen(d, "mouseout", a.Zg), a.Me != Ga && c.listen(d, "contextmenu", a.Me), y && (Te(9) || c.listen(d, "dblclick", a.Fi), a.K || (a.K = new ls(a), Ng(a, a.K)))) : (c.Ga(d, Ug.Id, a.vb).Ga(d, [Ug.Jd, Ug.le], a.Db).Ga(d, "mouseover", a.Ie).Ga(d, "mouseout", a.Zg), a.Me != Ga && c.Ga(d, "contextmenu", a.Me), y && (Te(9) || c.Ga(d, "dblclick", a.Fi), Mg(a.K), a.K = null))
};
Z.prototype.ab = function() {
    Z.D.ab.call(this);
    this.w && cs(this.w);
    this.isVisible() && this.isEnabled() && this.c.Qd(this, !1)
};
Z.prototype.T = function() {
    Z.D.T.call(this);
    this.w && (this.w.Ia(), delete this.w);
    delete this.c;
    this.K = this.ac = this.$c = null
};
Z.prototype.Sa = function() {
    return this.$c
};
Z.prototype.g = function(a) {
    this.c.Lb(this.j(), a);
    this.$c = a
};
var Nr = function(a, b) {
    a.$c = b
};
h = Z.prototype;
h.rb = function() {
    var a = this.Sa();
    if (!a) return "";
    a = "string" === typeof a ? a : La(a) ? tb(a, Fg).join("") : Eg(a);
    return de(a)
};
h.isVisible = function() {
    return this.If
};
h.setVisible = function(a, b) {
    return b || this.If != a && this.dispatchEvent(a ? "show" : "hide") ? ((b = this.j()) && this.c.setVisible(b, a), this.isEnabled() && this.c.Qd(this, a), this.If = a, !0) : !1
};
h.isEnabled = function() {
    return !this.Ea(1)
};
h.oa = function(a) {
    var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !ms(this, 1, !a) || (a || (ns(this, !1), this.Mb(!1)), this.isVisible() && this.c.Qd(this, a), os(this, 1, !a, !0))
};
h.Mb = function(a) {
    ms(this, 2, a) && os(this, 2, a)
};
h.mb = function() {
    return this.Ea(4)
};
var ns = function(a, b) {
    ms(a, 4, b) && os(a, 4, b)
};
h = Z.prototype;
h.gh = function() {
    return this.Ea(8)
};
h.cd = function(a) {
    ms(this, 8, a) && os(this, 8, a)
};
h.bd = function(a) {
    ms(this, 16, a) && os(this, 16, a)
};
h.ae = function(a) {
    ms(this, 32, a) && os(this, 32, a)
};
h.Wa = function(a) {
    ms(this, 64, a) && os(this, 64, a)
};
h.getState = function() {
    return this.ad
};
h.Ea = function(a) {
    return !!(this.ad & a)
};
var os = function(a, b, c, d) {
        d || 1 != b ? Pr(a, b) && c != a.Ea(b) && (a.c.xd(a, b, c), a.ad = c ? a.ad | b : a.ad & ~b) : a.oa(!c)
    },
    Pr = function(a, b) {
        return !!(a.Te & b)
    };
Z.prototype.Oa = function(a, b) {
    if (this.ya && this.Ea(a) && !b) throw Error("Component already rendered");
    !b && this.Ea(a) && os(this, a, !1);
    this.Te = b ? this.Te | a : this.Te & ~a
};
var ps = function(a, b) {
        return !!(a.Ac & b) && Pr(a, b)
    },
    ms = function(a, b, c) {
        return Pr(a, b) && a.Ea(b) != c && (!(a.Se & b) || a.dispatchEvent(Jp(b, c))) && !a.isDisposed()
    };
h = Z.prototype;
h.Ie = function(a) {
    (!a.relatedTarget || !sg(this.j(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && ps(this, 2) && this.Mb(!0)
};
h.Zg = function(a) {
    a.relatedTarget && sg(this.j(), a.relatedTarget) || !this.dispatchEvent("leave") || (ps(this, 4) && ns(this, !1), ps(this, 2) && this.Mb(!1))
};
h.Me = Ga;
h.vb = function(a) {
    this.isEnabled() && (ps(this, 2) && this.Mb(!0), Yg(a) && (ps(this, 4) && ns(this, !0), this.c && this.c.Tg(this) && this.j().focus()));
    !this.cf && Yg(a) && a.preventDefault()
};
h.Db = function(a) {
    this.isEnabled() && (ps(this, 2) && this.Mb(!0), this.mb() && this.xc(a) && ps(this, 4) && ns(this, !1))
};
h.Fi = function(a) {
    this.isEnabled() && this.xc(a)
};
h.xc = function(a) {
    ps(this, 16) && this.bd(!this.Ea(16));
    ps(this, 8) && this.cd(!0);
    ps(this, 64) && this.Wa(!this.Ea(64));
    var b = new F("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.g = a.g);
    return this.dispatchEvent(b)
};
h.Zk = function() {
    ps(this, 32) && this.ae(!0)
};
h.Hf = function() {
    ps(this, 4) && ns(this, !1);
    ps(this, 32) && this.ae(!1)
};
h.Xa = function(a) {
    return this.isVisible() && this.isEnabled() && this.Rd(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
h.Rd = function(a) {
    return 13 == a.keyCode && this.xc(a)
};
if (!Na(Z)) throw Error("Invalid component class " + Z);
if (!Na(Hr)) throw Error("Invalid renderer class " + Hr);
var qs = Ra(Z);
fs[qs] = Hr;
es("goog-control", function() {
    return new Z(null)
});
var ls = function(a) {
    Lg.call(this);
    this.b = a;
    this.a = !1;
    this.c = new Bp(this);
    Ng(this, this.c);
    a = Mp(this.b);
    this.c.listen(a, Ug.Id, this.h).listen(a, Ug.Jd, this.o).listen(a, "click", this.g)
};
t(ls, Lg);
var rs = !y || Ve(9);
ls.prototype.h = function() {
    this.a = !1
};
ls.prototype.o = function() {
    this.a = !0
};
var ss = function(a, b) {
    if (!rs) return a.button = 0, a.type = b, a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
    return c
};
ls.prototype.g = function(a) {
    if (this.a) this.a = !1;
    else {
        var b = a.b,
            c = b.button,
            d = b.type,
            e = ss(b, "mousedown");
        this.b.vb(new Vg(e, a.a));
        e = ss(b, "mouseup");
        this.b.Db(new Vg(e, a.a));
        rs || (b.button = c, b.type = d)
    }
};
ls.prototype.T = function() {
    this.b = null;
    ls.D.T.call(this)
};
var ts = function() {};
t(ts, Sr);
Ha(ts);
h = ts.prototype;
h.Zc = function() {};
h.kb = function(a) {
    hs(a, !1);
    a.Ac &= -256;
    a.Oa(32, !1);
    return a.a.b("BUTTON", {
        "class": Kr(this, a).join(" "),
        disabled: !a.isEnabled(),
        title: a.h || "",
        value: a.Y() || ""
    }, a.rb() || "")
};
h.Yc = function(a) {
    return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
};
h.Va = function(a, b) {
    hs(a, !1);
    a.Ac &= -256;
    a.Oa(32, !1);
    if (b.disabled) {
        var c = bb(this.a(1));
        R(b, c)
    }
    return ts.D.Va.call(this, a, b)
};
h.Ff = function(a) {
    Y(a).listen(a.j(), "click", a.xc)
};
h.Gf = Ga;
h.Ug = Ga;
h.Tg = function(a) {
    return a.isEnabled()
};
h.Qd = Ga;
h.xd = function(a, b, c) {
    ts.D.xd.call(this, a, b, c);
    (a = a.j()) && 1 == b && (a.disabled = c)
};
h.Y = function(a) {
    return a.value
};
h.Bf = function(a, b) {
    a && (a.value = b)
};
h.jc = Ga;
var us = function(a, b, c) {
    Z.call(this, a, b || ts.M(), c)
};
t(us, Z);
h = us.prototype;
h.Y = function() {
    return this.ia
};
h.Cf = function(a) {
    this.ia = a;
    this.c.Bf(this.j(), a)
};
h.wd = function(a) {
    this.h = a;
    Tr(this.j(), a)
};
h.T = function() {
    us.D.T.call(this);
    delete this.ia;
    delete this.h
};
h.aa = function() {
    us.D.aa.call(this);
    if (Pr(this, 32)) {
        var a = this.j();
        a && Y(this).listen(a, "keyup", this.Rd)
    }
};
h.Rd = function(a) {
    return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.xc(a) : 32 == a.keyCode
};
es("goog-button", function() {
    return new us(null)
});
var vs = function() {};
t(vs, Sr);
Ha(vs);
h = vs.prototype;
h.kb = function(a) {
    var b = Kr(this, a);
    b = a.a.b("DIV", "goog-inline-block " + b.join(" "), this.kf(a.Sa(), a.a));
    Tr(b, a.h);
    return b
};
h.Zc = function() {
    return "button"
};
h.Cb = function(a) {
    return a && a.firstChild && a.firstChild.firstChild
};
h.kf = function(a, b) {
    return b.b("DIV", "goog-inline-block " + (this.wa() + "-outer-box"), b.b("DIV", "goog-inline-block " + (this.wa() + "-inner-box"), a))
};
h.Yc = function(a) {
    return "DIV" == a.tagName
};
h.Va = function(a, b) {
    v(b);
    ws(b, !0);
    ws(b, !1);
    a: {
        var c = a.a.pi(b);
        var d = this.wa() + "-outer-box";
        if (c && Go(c, d) && (c = a.a.pi(c), d = this.wa() + "-inner-box", c && Go(c, d))) {
            c = !0;
            break a
        }
        c = !1
    }
    c || b.appendChild(this.kf(b.childNodes, a.a));
    Ho(b, ["goog-inline-block", this.wa()]);
    return vs.D.Va.call(this, a, b)
};
h.wa = function() {
    return "goog-custom-button"
};
var ws = function(a, b) {
    if (a)
        for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
            d = b ? c.nextSibling : c.previousSibling;
            if (3 == c.nodeType) {
                var e = c.nodeValue;
                if ("" == yc(e)) a.removeChild(c);
                else {
                    c.nodeValue = b ? e.replace(/^[\s\xa0]+/, "") : e.replace(/[\s\xa0]+$/, "");
                    break
                }
            } else break;
            c = d
        }
};
var xs = function(a, b, c) {
    us.call(this, a, b || vs.M(), c);
    this.Oa(16, !0)
};
t(xs, us);
es("goog-toggle-button", function() {
    return new xs(null)
});
var ys = function(a) {
    a = a || {};
    var b = a.attributes,
        c = a.content,
        d = a.disabled,
        e = a.id,
        f = a.er,
        g = a.title,
        k = a.Ao,
        l = a.value,
        m = N;
    e = '<div role="button"' + (e ? ' id="' + Q(e) + '"' : "") + ' class="';
    var q = a || {};
    a = q.Pq;
    var r = q.disabled,
        u = q.checked,
        z = q.width,
        O = "goog-inline-block jfk-button ";
    q = q.style;
    switch (Oa(q) ? q.toString() : q) {
        case 0:
            O += "jfk-button-standard";
            break;
        case 2:
            O += "jfk-button-action";
            break;
        case 3:
            O += "jfk-button-primary";
            break;
        case 1:
            O += "jfk-button-default";
            break;
        case 4:
            O += "jfk-button-flat";
            break;
        case 5:
            O += "jfk-button-mini";
            break;
        case 6:
            O += "jfk-button-contrast";
            break;
        default:
            O += "jfk-button-standard"
    }
    O += (Hn(z, 1) ? " jfk-button-narrow" : "") + (u ? " jfk-button-checked" : "") + (a ? " " + a : "") + (r ? " jfk-button-disabled" : "");
    d = e + Q(O) + '"' + (d ? ' aria-disabled="true"' : ' tabindex="' + (f ? Q(f) : "0") + '"') + (g ? k ? ' data-tooltip="' + Q(g) + '"' : ' title="' + Q(g) + '"' : "") + (l ? ' value="' + Q(l) + '"' : "");
    b ? (Fn(b, wn, Dn) ? b = b.Sa().replace(/([^"'\s])$/, "$1 ") : (b = String(b), co.test(b) || ($a("Bad value `%s` for |filterHtmlAttributes", [b]), b = "zSoyz")), b = " " + b) : b = "";
    return m(d +
        b + ">" + P(null != c ? c : "") + "</div>")
};
ys.a = "jfk.templates.button.strict";
var zs = function(a, b, c) {
    Lg.call(this);
    this.Zb = a;
    this.c = b || 0;
    this.a = c;
    this.b = p(this.Ng, this)
};
t(zs, Lg);
h = zs.prototype;
h.qa = 0;
h.T = function() {
    zs.D.T.call(this);
    this.stop();
    delete this.Zb;
    delete this.a
};
h.start = function(a) {
    this.stop();
    this.qa = Fi(this.b, void 0 !== a ? a : this.c)
};
h.stop = function() {
    this.mb() && Gi(this.qa);
    this.qa = 0
};
h.mb = function() {
    return 0 != this.qa
};
h.Ng = function() {
    this.qa = 0;
    this.Zb && this.Zb.call(this.a)
};
var Cs = function(a) {
        return je(yc(a.replace(As, function(b, c) {
            return Bs.test(c) ? "" : " "
        }).replace(/[\t\n ]+/g, " ")))
    },
    Bs = /^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i,
    As = /<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;
var Ds = function() {};
Ds.prototype.b = function() {};
var Es = function() {
    if (Ge) {
        var a = /Windows NT ([0-9.]+)/;
        return (a = a.exec(qd)) ? a[1] : "0"
    }
    return Fe ? (a = /10[_.][0-9_.]+/, (a = a.exec(qd)) ? a[0].replace(/_/g, ".") : "10") : He ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(qd)) ? a[1] : "") : Ie || Je || Ke ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(qd)) ? a[1].replace(/_/g, ".") : "") : ""
}();
var Is = function(a, b, c, d, e, f, g, k, l) {
        v(c);
        var m = Fs(c),
            q = mp(a),
            r = dp(a);
        if (r) {
            var u = new Qo(r.left, r.top, r.right - r.left, r.bottom - r.top);
            r = Math.max(q.left, u.left);
            var z = Math.min(q.left + q.width, u.left + u.width);
            if (r <= z) {
                var O = Math.max(q.top, u.top);
                u = Math.min(q.top + q.height, u.top + u.height);
                O <= u && (q.left = r, q.top = O, q.width = z - r, q.height = u - O)
            }
        }
        r = Mf(a);
        O = Mf(c);
        if (r.a != O.a) {
            z = r.a.body;
            O = Kg(O);
            u = new Hf(0, 0);
            var W = Yf(Lf(z));
            if (we(W, "parent")) {
                var Ja = z;
                do {
                    var S = W == O ? cp(Ja) : jp(v(Ja));
                    u.x += S.x;
                    u.a += S.a
                } while (W && W != O &&
                    W != W.parent && (Ja = W.frameElement) && (W = W.parent))
            }
            z = If(u, cp(z));
            !y || Ve(9) || Uf(r.a) || (z = If(z, Xf(r.a)));
            q.left += z.x;
            q.top += z.a
        }
        a = Gs(a, b);
        b = q.left;
        a & 4 ? b += q.width : a & 2 && (b += q.width / 2);
        q = new Hf(b, q.top + (a & 1 ? q.height : 0));
        q = If(q, m);
        e && (q.x += (a & 4 ? -1 : 1) * e.x, q.a += (a & 1 ? -1 : 1) * e.a);
        if (g)
            if (l) var Ia = l;
            else if (Ia = dp(c)) Ia.top -= m.a, Ia.right -= m.x, Ia.bottom -= m.a, Ia.left -= m.x;
        return Hs(q, c, d, f, Ia, g, k)
    },
    Fs = function(a) {
        if (a = a.offsetParent) {
            var b = "HTML" == a.tagName || "BODY" == a.tagName;
            if (!b || "static" != Wo(a, "position")) {
                var c =
                    cp(a);
                if (!b) {
                    b = rp(a);
                    var d;
                    if (d = b) {
                        d = bf && Gk(10);
                        var e = Le && 0 <= Lc(Es, 10);
                        d = Ce || d || e
                    }
                    b = d ? -a.scrollLeft : !b || Be && Te("8") || "visible" == Wo(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
                    c = If(c, new Hf(b, a.scrollTop))
                }
            }
        }
        return c || new Hf
    },
    Hs = function(a, b, c, d, e, f, g) {
        a = new Hf(a.x, a.a);
        var k = Gs(b, c);
        c = lp(b);
        g = g ? new Jf(g.width, g.height) : new Jf(c.width, c.height);
        a = new Hf(a.x, a.a);
        g = new Jf(g.width, g.height);
        var l = 0;
        if (d || 0 != k) k & 4 ? a.x -= g.width + (d ? d.right : 0) : k & 2 ? a.x -= g.width / 2 : d && (a.x += d.left),
            k & 1 ? a.a -= g.height + (d ? d.bottom : 0) : d && (a.a += d.top);
        if (f) {
            if (e) {
                d = a;
                k = g;
                l = 0;
                65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                132 == (f & 132) && (d.a < e.top || d.a >= e.bottom) && (f &= -5);
                d.x < e.left && f & 1 && (d.x = e.left, l |= 1);
                if (f & 16) {
                    var m = d.x;
                    d.x < e.left && (d.x = e.left, l |= 4);
                    d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, m + k.width - e.left), k.width = Math.max(k.width, 0), l |= 4)
                }
                d.x + k.width > e.right && f & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
                f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                d.a < e.top && f & 4 && (d.a =
                    e.top, l |= 2);
                f & 32 && (m = d.a, d.a < e.top && (d.a = e.top, l |= 8), d.a + k.height > e.bottom && (k.height = Math.min(e.bottom - d.a, m + k.height - e.top), k.height = Math.max(k.height, 0), l |= 8));
                d.a + k.height > e.bottom && f & 4 && (d.a = Math.max(e.bottom - k.height, e.top), l |= 2);
                f & 8 && (l |= (d.a < e.top ? 64 : 0) | (d.a + k.height > e.bottom ? 128 : 0));
                e = l
            } else e = 256;
            l = e
        }
        f = new Qo(0, 0, 0, 0);
        f.left = a.x;
        f.top = a.a;
        f.width = g.width;
        f.height = g.height;
        e = l;
        if (e & 496) return e;
        Yo(b, new Hf(f.left, f.top));
        g = new Jf(f.width, f.height);
        c == g || c && g && c.width == g.width && c.height ==
            g.height || (c = g, a = Lf(b), g = Uf(Mf(a).a), !y || Te("10") || g && Te("8") ? up(b, c, "border-box") : (a = b.style, g ? (g = yp(b), b = ep(b), a.pixelWidth = c.width - b.left - g.left - g.right - b.right, a.pixelHeight = c.height - b.top - g.top - g.bottom - b.bottom) : (a.pixelWidth = c.width, a.pixelHeight = c.height)));
        return e
    },
    Gs = function(a, b) {
        return (b & 8 && rp(a) ? b ^ 4 : b) & -9
    };
var Js = function(a, b) {
    this.g = a;
    this.m = !!b;
    this.o = {
        0: this.g + "-arrowright",
        1: this.g + "-arrowup",
        2: this.g + "-arrowdown",
        3: this.g + "-arrowleft"
    }
};
t(Js, Ds);
h = Js.prototype;
h.Tf = !1;
h.vg = 2;
h.Zh = 20;
h.xg = 3;
h.oh = -5;
h.bf = !1;
var Ks = function(a, b, c, d, e) {
    null != b && (a.xg = b);
    null != c && (a.vg = c);
    "number" === typeof d && (a.Zh = Math.max(d, 15));
    "number" === typeof e && (a.oh = e)
};
Js.prototype.b = function(a, b, c) {
    v(this.h, "Must call setElements first.");
    a = this.vg;
    2 == a && (a = 0);
    Ls(this, this.xg, a, 2 == this.vg ? Ms(this.xg) ? this.a.offsetHeight / 2 : this.a.offsetWidth / 2 : this.Zh, 0, c)
};
var Ls = function(a, b, c, d, e, f) {
        if (a.c) {
            var g = Ns(b, c);
            var k = a.c;
            var l = lp(k);
            l = (Ms(b) ? l.height / 2 : l.width / 2) - d;
            var m = Gs(k, g),
                q;
            if (q = dp(k)) k = Ro(mp(k)), Ms(b) ? k.top < q.top && !(m & 1) ? l -= q.top - k.top : k.bottom > q.bottom && m & 1 && (l -= k.bottom - q.bottom) : k.left < q.left && !(m & 4) ? l -= q.left - k.left : k.right > q.right && m & 4 && (l -= k.right - q.right);
            k = l;
            k = Ms(b) ? new Hf(a.oh, k) : new Hf(k, a.oh);
            l = Ms(b) ? 6 : 9;
            a.bf && 2 == e && (l = Ms(b) ? 4 : 1);
            m = b ^ 3;
            Ms(b) && "rtl" == a.c.dir && (m = b);
            g = Is(a.c, Ns(m, c), a.a, g, k, f, a.Tf ? l : 0, void 0, null);
            if (2 != e && g & 496) {
                Ls(a, b ^
                    3, c, d, a.bf && 0 == e ? 1 : 2, f);
                return
            }!a.m || g & 496 || (e = parseFloat(a.a.style.left), f = parseFloat(a.a.style.top), v(!isNaN(e) && !isNaN(f), "Could not parse position."), isFinite(e) && 0 == e % 1 && isFinite(f) && 0 == f % 1 || Yo(a.a, Math.round(e), Math.round(f)))
        }
        Os(a, b, c, d)
    },
    Os = function(a, b, c, d) {
        var e = a.h;
        Lb(a.o, function(f) {
            U(e, f, !1)
        }, a);
        R(e, a.o[b]);
        e.style.top = e.style.left = e.style.right = e.style.bottom = "";
        a.c ? (c = ip(a.c, a.a), d = Ps(a.c, b), Ms(b) ? e.style.top = Qs(c.a + d.a, a.a.offsetHeight - 15) + "px" : e.style.left = Qs(c.x + d.x, a.a.offsetWidth -
            15) + "px") : e.style[0 == c ? Ms(b) ? "top" : "left" : Ms(b) ? "bottom" : "right"] = d + "px"
    },
    Qs = function(a, b) {
        return 15 > b ? 15 : Math.min(Math.max(a, 15), b)
    },
    Ns = function(a, b) {
        switch (a) {
            case 2:
                return 0 == b ? 1 : 5;
            case 1:
                return 0 == b ? 0 : 4;
            case 0:
                return 0 == b ? 12 : 13;
            default:
                return 0 == b ? 8 : 9
        }
    },
    Ps = function(a, b) {
        var c = 0,
            d = 0;
        a = lp(a);
        switch (b) {
            case 2:
                c = a.width / 2;
                break;
            case 1:
                c = a.width / 2;
                d = a.height;
                break;
            case 0:
                d = a.height / 2;
                break;
            case 3:
                c = a.width, d = a.height / 2
        }
        return new Hf(c, d)
    },
    Ms = function(a) {
        return 0 == a || 3 == a
    };
var Rs = function(a) {
    Lg.call(this);
    this.b = a || Mf()
};
t(Rs, Lg);
Rs.prototype.h = function() {
    wo(this.j(), "tooltip");
    yo(this.j(), "live", "polite")
};
var Ss = function(a) {
    Rs.call(this, a);
    this.a = this.b.b("DIV", "jfk-tooltip-contentId");
    this.g = this.b.b("DIV", "jfk-tooltip-arrow", this.b.b("DIV", "jfk-tooltip-arrowimplbefore"), this.b.b("DIV", "jfk-tooltip-arrowimplafter"));
    this.c = this.b.b("DIV", {
        "class": "jfk-tooltip",
        role: "tooltip"
    }, this.a, this.g);
    this.h()
};
t(Ss, Rs);
Ss.prototype.j = function() {
    return this.c
};
Ss.prototype.T = function() {
    Ss.D.T.call(this);
    this.c && mg(this.c)
};
var Ts = function(a) {
    Ss.call(this, a)
};
t(Ts, Ss);
Ts.prototype.h = function() {
    wo(this.j(), "tooltip")
};
var Zs = function(a) {
        var b = a.getAttribute("title");
        b && Us(a, b)
    },
    Us = function(a, b, c) {
        c || (c = b instanceof Ad ? Cs(Cd(b)) : b);
        a.removeAttribute("title");
        a.removeAttribute("data-tooltip-contained");
        a.removeAttribute("data-tooltip");
        b ? (b instanceof Ad ? a.a = b : (a.setAttribute("data-tooltip", b), a.a = null), a.setAttribute("aria-label", c)) : (a.a = null, a.removeAttribute("aria-label"));
        a = Mf(a) || Mf();
        b = Ra(a.a);
        $s[b] || ($s[b] = new at(a))
    },
    bt = function(a, b) {
        var c = "";
        switch (b) {
            case 0:
                c += "l";
                break;
            case 2:
                c += "t";
                break;
            case 3:
                c += "r";
                break;
            default:
                c += "b"
        }
        a.setAttribute("data-tooltip-align", c + ",c")
    },
    $s = {},
    at = function(a) {
        Bp.call(this);
        this.K = a;
        this.L = new zs(this.X, 0, this);
        Ng(this, this.L);
        var b = Yf();
        this.w = Na(b.MutationObserver) ? new b.MutationObserver(p(this.V, this)) : null;
        a = a.a;
        this.listen(a, "mouseout mousedown click blur focusout keydown".split(" "), this.R, !0);
        this.listen(a, ["mouseover", "focus", "focusin"], this.na, !0)
    };
t(at, Bp);
at.prototype.T = function() {
    ct(this);
    at.D.T.call(this)
};
var dt = function(a, b) {
    switch (b.type) {
        case "mousedown":
        case "mouseover":
        case "mouseout":
        case "click":
            a.O = !1;
            break;
        case "keydown":
            a.O = !0
    }
};
at.prototype.na = function(a) {
    this.w && this.w.disconnect();
    dt(this, a);
    var b = a.target;
    a = "focus" == a.type || "focusin" == a.type;
    var c = this.a && sg(this.a.a, b);
    if (this.O || !a || c) {
        this.W = a;
        if (a = b && b.getAttribute && this.w) a = b.getAttribute("role") || null, a = Ab(vo, a);
        a && (this.w.observe(b, {
            attributes: !0
        }), (a = Ao(b)) && (b = a));
        this.g = b
    } else this.g = null;
    et(this)
};
at.prototype.R = function(a) {
    dt(this, a);
    var b = a.target;
    a = "mousedown" == a.type || "click" == a.type;
    b = this.a && sg(this.a.a, b);
    a && b || (this.g = null, et(this))
};
at.prototype.V = function(a) {
    w(a, p(function(b) {
        var c = Ao(b.target);
        c && "aria-activedescendant" == b.attributeName && (this.g = c, et(this))
    }, this))
};
var et = function(a) {
        if (!(a.L.mb() && a.b && a.o)) {
            ct(a);
            var b = null != a.o ? a.o : 50;
            a.L.start(a.b ? b : 300)
        }
    },
    ct = function(a) {
        a.G && (Gi(a.G), a.G = 0, a.b = null)
    };
at.prototype.X = function() {
    if (!this.g) ft(this), this.o = this.b = null;
    else if (!(this.b && this.a && sg(this.a.j(), this.g)) || this.b.getAttribute("data-tooltip-unhoverable")) {
        var a = Gg(this.g, function(k) {
                return k.getAttribute && (k.getAttribute("data-tooltip-contained") || k.getAttribute("data-tooltip") || k.a) && !k.getAttribute("data-tooltip-suspended")
            }),
            b = !1;
        this.b && this.b != a && (ft(this), this.o = this.b = null, b = !0);
        if (!this.b && a && (this.b = a, gt(this, a))) {
            var c = Md;
            if (a.getAttribute("data-tooltip-contained"))
                for (var d = Qf("jfk-tooltip-data",
                        a), e = 0; e < d.length; e++) {
                    if (d[e].parentNode == a) {
                        c = d[e].cloneNode(!0);
                        break
                    }
                } else c = a.a ? a.a : Fd(a.getAttribute("data-tooltip"));
            d = a.getAttribute("data-tooltip-align");
            e = a.getAttribute("data-tooltip-class");
            var f = a.getAttribute("data-tooltip-offset");
            f = xc(ne(f)) ? -1 : Number(f);
            var g = a.getAttribute("data-tooltip-hide-delay");
            g = xc(ne(g)) ? null : Number(g);
            if (!b && (a = a.getAttribute("data-tooltip-delay"), a = Math.max(0, a - 300))) {
                this.G = Fi(Ua(this.N, this.b, c, d, f, e, g), a, this);
                return
            }
            this.N(this.b, c, d, f, e, g)
        }
    }
};
var gt = function(a, b) {
        return b.getAttribute("data-tooltip-only-on-overflow") && b.offsetWidth >= b.scrollWidth && b.offsetHeight >= b.scrollHeight || a.W && "mouse" == b.getAttribute("data-tooltip-trigger") ? !1 : !0
    },
    ht = function(a) {
        if (a) switch (a.toLowerCase().split(",")[0]) {
            case "l":
                return 0;
            case "t":
                return 2;
            case "r":
                return 3
        }
        return 1
    };
at.prototype.N = function(a, b, c, d, e, f) {
    this.G = 0;
    this.o = f;
    if (!this.a) {
        this.a = new Ts(this.K);
        ft(this);
        gg(this.K.a.body, this.a.j());
        Ng(this, this.a);
        this.h = new Js("jfk-tooltip", !0);
        this.h.Tf = !0;
        this.h.bf = !0;
        f = this.h;
        var g = this.a.g;
        f.a = this.a.j();
        f.h = g
    }
    a: {
        if (c) switch (c.toLowerCase().split(",")[1]) {
            case "l":
                f = 0;
                break a;
            case "r":
                f = 1;
                break a
        }
        f = 2
    }
    Ks(this.h, ht(c), f, void 0, d);
    T(this.a.j(), "jfk-tooltip-hide");
    this.C != e && (this.C && !xc(ne(this.C)) && T(this.a.j(), this.C), xc(ne(e)) || R(this.a.j(), e), this.C = e);
    Yo(this.a.j(),
        0, 0);
    if (b instanceof Ad) Wd(this.a.a, b);
    else
        for (ig(this.a.a); c = b.firstChild;) this.a.a.appendChild(c);
    this.h.c = a;
    this.h.b(null, 0)
};
var ft = function(a) {
    a.a && R(a.a.j(), "jfk-tooltip-hide")
};
var jt = function(a, b, c, d) {
    us.call(this, a, it.M(), b);
    this.N = c || 0;
    this.m = d || 0;
    this.$a = !1
};
t(jt, us);
jt.prototype.getStyle = function() {
    return this.N
};
var lt = function(a, b) {
    a.N != b && (a.N = b, kt(a))
};
h = jt.prototype;
h.wd = function(a) {
    this.h = a;
    var b = this.j();
    b && (this.$a ? Us(b, a, void 0) : a ? b.title = a : b.removeAttribute("title"))
};
h.oa = function(a) {
    this.isEnabled() != a && (jt.D.oa.call(this, a), kt(this))
};
h.ae = function(a) {
    jt.D.ae.call(this, a);
    mt(this, !1)
};
h.vb = function(a) {
    jt.D.vb.call(this, a);
    this.isEnabled() && mt(this, !0)
};
h.Db = function(a) {
    jt.D.Db.call(this, a);
    this.isEnabled() && mt(this, !0)
};
var mt = function(a, b) {
        a.j() && U(a.j(), "jfk-button-clear-outline", b)
    },
    kt = function(a) {
        a.j() && nt(a.c, a)
    },
    it = function() {
        this.K = this.wa() + "-standard";
        this.c = this.wa() + "-action";
        this.L = this.wa() + "-primary";
        this.m = this.wa() + "-default";
        this.w = this.wa() + "-flat";
        this.C = this.wa() + "-narrow";
        this.G = this.wa() + "-mini";
        this.o = this.wa() + "-contrast"
    };
t(it, Sr);
Ha(it);
h = it.prototype;
h.ed = function(a, b, c) {
    a && lt(c, a);
    b && c.m != b && (c.m = b, kt(c))
};
h.wa = function() {
    return "jfk-button"
};
h.kb = function(a) {
    ib(a, jt, "Button is expected to be instance of jfk.Button");
    var b = a.a,
        c = No(ys, {
            disabled: !a.isEnabled(),
            checked: a.Ea(16),
            style: a.getStyle(),
            title: a.h,
            Ao: a.$a,
            value: a.Y(),
            width: a.m
        }, void 0, b);
    b.ti(c, a.Sa());
    this.Va(a, c);
    return c
};
h.Va = function(a, b) {
    it.D.Va.call(this, a, b);
    this.h || (this.h = Xb(this.K, Ua(this.ed, 0, null), this.c, Ua(this.ed, 2, null), this.L, Ua(this.ed, 3, null), this.m, Ua(this.ed, 1, null), this.w, Ua(this.ed, 4, null), this.G, Ua(this.ed, 5, null), this.o, Ua(this.ed, 6, null), this.C, Ua(this.ed, null, 1)));
    for (var c = Eo(b), d = 0; d < c.length; ++d) {
        var e = this.h[c[d]];
        e && e(a)
    }
    if (c = b.getAttribute("data-tooltip")) a.h = c, a.$a = !0;
    return b
};
h.Y = function(a) {
    return a.getAttribute("value") || ""
};
h.Bf = function(a, b) {
    a && a.setAttribute("value", b)
};
var nt = function(a, b) {
    function c(g, k) {
        (g ? d : e).push(k)
    }
    v(b.j(), "Button element must already exist when updating style.");
    var d = [],
        e = [],
        f = b.getStyle();
    c(0 == f, a.K);
    c(2 == f, a.c);
    c(3 == f, a.L);
    c(4 == f, a.w);
    c(5 == f, a.G);
    c(1 == f, a.m);
    c(6 == f, a.o);
    c(1 == b.m, a.C);
    c(!b.isEnabled(), a.wa() + "-disabled");
    Io(b.j(), e);
    Ho(b.j(), d)
};
var ot = function(a, b, c, d) {
    xs.call(this, a, c || Sr.M(), d);
    this.N = a;
    this.m = b || null;
    this.b = null
};
t(ot, xs);
ot.prototype.bd = function(a) {
    ot.D.bd.call(this, a);
    pt(this)
};
ot.prototype.oa = function(a) {
    ot.D.oa.call(this, a);
    pt(this)
};
var pt = function(a) {
        a.isEnabled() ? null != a.m && a.g(a.Ea(16) ? a.m : a.N) : a.b ? (a.g(a.b), a.b = null) : a.g("")
    },
    rt = function() {
        jt.call(this);
        this.b = !1;
        qt(this)
    };
t(rt, jt);
var st = function(a, b) {
        a.b = b;
        qt(a)
    },
    qt = function(a) {
        a.b ? (js(a, "unstarred"), is(a, "starred")) : (js(a, "starred"), is(a, "unstarred"))
    },
    tt = function() {};
t(tt, Sr);
Ha(tt);
tt.prototype.kb = function(a) {
    var b = a.a.b("DIV", Kr(this, a).join(" ")),
        c = a.a.b("SPAN"),
        d = a.a.b("SPAN");
    R(b, "gt-icon-c");
    Fo(d, "gt-icon-text");
    Fo(c, "gt-icon");
    b.appendChild(c);
    a.Sa() && (b.appendChild(d), this.Lb(b, a.Sa()));
    return b
};
tt.prototype.Lb = function(a, b) {
    a && (a = void 0 !== a.lastElementChild ? a.lastElementChild : og(a.lastChild, !1)) && E(a, b)
};
tt.prototype.wa = function() {
    return "trans-tool-button"
};
tt.prototype.Va = function(a, b) {
    var c = a.Sa();
    b = tt.D.Va.call(this, a, b);
    a.$c = c;
    c = a.a.b("SPAN");
    var d = a.a.b("SPAN");
    R(b, "gt-icon-c");
    Fo(d, "gt-icon-text");
    Fo(c, "gt-icon");
    ig(b);
    b.appendChild(c);
    a.Sa() && (b.appendChild(d), this.Lb(b, a.Sa()));
    return b
};
var ut = function(a, b) {
    this.c = a;
    this.h = b || !1
};
t(ut, Sr);
ut.prototype.kb = function(a) {
    var b = a.a.b("DIV", Kr(this, a).join(" ") + " goog-inline-block"),
        c = a.a.b("SPAN");
    this.c && R(b, this.c);
    Fo(c, "jfk-button-img");
    b.appendChild(c);
    a.Sa() && this.Lb(b, a.Sa());
    return b
};
ut.prototype.Lb = function(a, b) {
    a && !this.h && (Us(a, b, void 0), bt(a, 2))
};
ut.prototype.wa = function() {
    return "goog-toolbar-button"
};
ut.prototype.Va = function(a, b) {
    var c = a.a.b("SPAN");
    this.c && R(b, this.c);
    Fo(c, "jfk-button-img");
    ig(b);
    b.appendChild(c);
    a.Sa() && this.Lb(b, a.Sa());
    return b = ut.D.Va.call(this, a, b)
};
var vt = function(a, b, c, d) {
        this.text = a;
        this.Ba = b;
        this.Ma = c;
        this.data = d
    },
    wt = function(a, b, c, d) {
        this.g = a;
        this.c = b;
        this.h = c;
        this.o = d;
        this.a = [];
        this.b = -1;
        G(this.g, "action", this.fn, !1, this);
        G(this.c, "action", this.Mm, !1, this);
        G(this.h, "action", this.$n, !1, this)
    };
h = wt.prototype;
h.push = function(a, b, c, d) {
    this.a.splice(++this.b);
    this.a.push(new vt(a, b, c, d));
    xt(this)
};
h.reset = function() {
    this.a = [];
    this.b = -1
};
h.fn = function() {
    0 < this.b && (--this.b, xt(this));
    Km.M().log("lxprev")
};
h.Mm = function() {
    this.b < this.a.length - 1 && (++this.b, xt(this));
    Km.M().log("lxnext")
};
h.$n = function() {
    1 < this.a.length && (this.a.splice(1), this.b = 0, xt(this));
    Km.M().log("lxclear")
};
var xt = function(a) {
    var b = a.a[a.b];
    a.o.update(b.text, b.Ba, b.Ma, b.data);
    a.g.oa(1 < a.b);
    a.c.oa(a.b < a.a.length - 1)
};
var yt = function() {
    this.b = 0;
    this.a = []
};
Ha(yt);
yt.prototype.c = function(a) {
    var b = new Image,
        c = this.b++;
    this.a[c] = b;
    b.onload = b.onerror = function() {
        delete yt.M().a[c]
    };
    b.src = a;
    b = null
};
var zt = !1,
    At = function(a) {
        if (a = a.match(/[\d]+/g)) a.length = 3
    };
(function() {
    if (navigator.plugins && navigator.plugins.length) {
        var a = navigator.plugins["Shockwave Flash"];
        if (a && (zt = !0, a.description)) {
            At(a.description);
            return
        }
        if (navigator.plugins["Shockwave Flash 2.0"]) {
            zt = !0;
            return
        }
    }
    if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], zt = !(!a || !a.enabledPlugin))) {
        At(a.enabledPlugin.description);
        return
    }
    if ("undefined" != typeof ActiveXObject) {
        try {
            var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            zt = !0;
            At(b.GetVariable("$version"));
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            zt = !0;
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), zt = !0, At(b.GetVariable("$version"))
        } catch (c) {}
    }
})();
var Bt = zt;
var Ct = function() {
    J.call(this);
    this.url = ""
};
t(Ct, J);
Ct.prototype.fe = function() {
    this.dispatchEvent(new Dt(this.url))
};
Ct.prototype.play = function(a) {
    this.url = a
};
Ct.prototype.c = function() {
    this.dispatchEvent(new Et(this.url))
};
var Ft = function(a) {
    F.call(this, "sound_play_start");
    this.url = a
};
t(Ft, F);
var Gt = function(a) {
    F.call(this, "sound_finished");
    this.url = a
};
t(Gt, F);
var Dt = function(a) {
    F.call(this, "sound_interrupted");
    this.url = a
};
t(Dt, F);
var Et = function(a) {
    F.call(this, "sound_error");
    this.url = a
};
t(Et, F);
var Ht = function() {
    Ct.call(this);
    this.o = Audio;
    this.a = new this.o;
    this.b = {}
};
t(Ht, Ct);
Ht.prototype.Fh = function() {
    return !this.a.paused
};
Ht.prototype.fe = function() {
    Ht.D.fe.call(this);
    this.a.pause()
};
Ht.prototype.play = function(a) {
    Ht.D.play.call(this, a);
    It(this, this.a);
    this.a = null;
    null != this.b[a] ? (this.a = this.b[a], this.b[a] = null, this.a.play()) : (this.a = Jt(this, a), this.a.autoplay = !0)
};
Ht.prototype.Fj = function(a) {
    n.setTimeout(p(this.m, this, a), 1E3)
};
var Jt = function(a, b) {
        var c = new a.o;
        c.setAttribute("src", b);
        G(c, "play", a.h, !1, a);
        G(c, "ended", a.g, !1, a);
        G(c, "error", a.c, !1, a);
        c.load();
        return c
    },
    It = function(a, b) {
        qh(b, "play", a.h);
        qh(b, "ended", a.g)
    };
Ht.prototype.m = function(a) {
    null != this.b[a] && (It(this, this.b[a]), this.b[a] = null);
    this.b[a] = Jt(this, a)
};
Ht.prototype.h = function() {
    qh(this.a, "play", this.h);
    this.dispatchEvent(new Ft(this.url))
};
Ht.prototype.g = function() {
    qh(this.a, "ended", this.g);
    this.dispatchEvent(new Gt(this.url))
};
var Kt = function(a) {
    Ct.call(this);
    this.a = a;
    this.b = !1
};
t(Kt, Ct);
h = Kt.prototype;
h.Fh = function() {
    return this.b
};
h.fe = function() {
    this.b = !1;
    null != this.a.o && this.a.o();
    Lt();
    Kt.D.fe.call(this)
};
h.play = function(a) {
    Kt.D.play.call(this, a);
    n.setTimeout(p(this.jn, this), 0)
};
h.jn = function() {
    this.b = !0;
    var a = p(this.ao, this);
    n.SoundStopCB_ = a;
    null != this.a.g && this.a.g("SoundStopCB_");
    try {
        if (null != this.a.c) this.a.c(this.Aj());
        else {
            this.b = !1;
            Lt();
            this.c();
            return
        }
        var b = p(this.Aj, this);
        n._TTSSoundFile = b
    } catch (c) {
        this.b = !1;
        Lt();
        this.c();
        return
    }
    null != this.a.h ? this.a.h() : (this.b = !1, Lt(), this.c())
};
h.Fj = function(a) {
    var b = yt.M();
    n.setTimeout(p(b.c, b, a), 1E3)
};
h.Aj = function() {
    return this.url.substring(1)
};
h.ao = function() {
    this.b = !1;
    Lt();
    this.dispatchEvent(new Gt(this.url))
};
var Lt = function() {
        n.SoundStopCB_ = null
    },
    Mt = function() {
        this.a = "";
        this.b = null;
        this.c = !1;
        this.F = null
    };
Ha(Mt);
Mt.prototype.get = function() {
    if (null != this.a && 0 != this.a.length) {
        var a = Nf(this.a);
        if (!this.c && (Nt("audio/mpeg") ? (this.b = new Ht, a = "html5") : null != a && "OBJECT" == a.tagName && Bt ? (this.b = new Kt(a), a = "flash") : (this.b = null, a = "none"), this.c = !0, !this.g && this.F)) {
            this.g = !0;
            var b = Nt("audio/mpeg") ? 1 : 0,
                c = Nt("audio/ogg") ? 1 : 0,
                d = Nt("audio/wav") ? 1 : 0;
            a: {
                try {
                    var e = D("AUDIO");
                    if (null != e && null != e.volume) {
                        var f = e.volume;
                        break a
                    }
                } catch (g) {}
                f = -1
            }
            this.F.log("ttsaudio", {
                mp3: b,
                ogg: c,
                wav: d,
                vol: f,
                type: a
            })
        }
    }
    return this.b
};
var Nt = function(a) {
    try {
        var b = D("AUDIO");
        return null != b && null != b.canPlayType && null != b.load && null != b.play && null != b.paused && null != b.pause && "no" != b.canPlayType(a) && "" != b.canPlayType(a)
    } catch (c) {
        return !1
    }
};
var Ot = function(a, b, c) {
    J.call(this);
    this.K = b;
    this.m = c ? c : 0;
    this.F = K.M();
    this.C = Mt.M();
    this.C.a = a;
    this.C.F = b;
    this.b = this.C.get();
    this.G = this.c = null;
    this.a = this.o = 0;
    this.g = {};
    this.h = 0;
    this.w = !1;
    this.O = null
};
t(Ot, J);
Ot.prototype.set = function(a, b, c, d, e) {
    this.c = a;
    this.o = b;
    this.G = c;
    null != d && (this.O = d);
    null != e && (this.g = Ub(e));
    this.g.total = a.length;
    this.g.ttslocation = this.m;
    Pt(this)
};
Ot.prototype.start = function() {
    this.b.Fh() && this.b.fe();
    G(this.b, "sound_play_start", this.V, !1, this);
    G(this.b, "sound_finished", this.R, !1, this);
    G(this.b, "sound_interrupted", this.L, !1, this);
    G(this.b, "sound_error", this.N, !1, this);
    this.h = (new Date).getTime();
    Qt(this, "ttsstart", this.g);
    var a = this.F,
        b = this.m,
        c = this.o,
        d = this.c.length,
        e = this.O;
    null != e ? Dm(a, 31, b, c, d, void 0, void 0, e) : Dm(a, 31, b, c, d);
    this.b.play(this.c[this.a]);
    Rt(this)
};
Ot.prototype.stop = function() {
    if (this.c && this.b.Fh()) {
        var a = Ub(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.h;
        Qt(this, "ttsstop", a);
        Dm(this.F, 32, this.m, this.o, this.c.length, this.G[this.a], this.a);
        Pt(this);
        this.b.fe();
        St(this)
    }
};
var Pt = function(a) {
        a.a = 0;
        a.w = !1;
        qh(a.b, "sound_play_start", a.V, !1, a);
        qh(a.b, "sound_finished", a.R, !1, a);
        qh(a.b, "sound_interrupted", a.L, !1, a);
        qh(a.b, "sound_error", a.N, !1, a)
    },
    Qt = function(a, b, c) {
        a.K && a.K.log(b, c)
    };
Ot.prototype.V = function() {
    if (!this.w) {
        this.dispatchEvent(new Tt(this.c));
        var a = Ub(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.h;
        Qt(this, "ttsplaystart", a);
        Dm(this.F, 33, this.m, this.o, this.c.length, this.G[this.a], this.a);
        this.w = !0
    }
};
Ot.prototype.R = function() {
    this.a += 1;
    if (this.a < this.c.length) this.b.play(this.c[this.a]), Rt(this);
    else {
        St(this);
        Pt(this);
        var a = Ub(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.h;
        Qt(this, "ttsfinish", a);
        Dm(this.F, 34, this.m, this.o, this.c.length)
    }
};
Ot.prototype.L = function() {
    var a = Ub(this.g);
    a.idx = this.a;
    a.time = (new Date).getTime() - this.h;
    Qt(this, "ttsinterrupted", a);
    St(this);
    Pt(this)
};
Ot.prototype.N = function() {
    var a = Ub(this.g);
    a.idx = this.a;
    a.time = (new Date).getTime() - this.h;
    Qt(this, "ttserror", a);
    qm(this.F, 155);
    St(this);
    Pt(this)
};
var St = function(a) {
        a.dispatchEvent(new Ut(a.c))
    },
    Rt = function(a) {
        var b = a.c[a.a + 1];
        null != b && a.b.Fj(b)
    },
    Tt = function() {
        F.call(this, "play_start_playlist")
    };
t(Tt, F);
var Ut = function() {
    F.call(this, "stop_playlist")
};
t(Ut, F);
var Vt = function(a) {
    this.F = a
};
Vt.prototype.g = function(a, b, c) {
    Wt(a, b, c, p(this.b, this), p(this.c, this))
};
var Wt = function(a, b, c, d, e) {
    var f = [];
    d(f, b);
    b = "";
    for (d = 0; d < f.length; d++) {
        var g = yc(b + f[d]);
        g.length <= c ? b += f[d] : (xc(b) || (a.push(yc(b)), b = ""), g = yc(f[d]), g.length <= c ? b = f[d] : e(a, g, c))
    }
    xc(b) || a.push(yc(b))
};
Vt.prototype.c = function(a, b, c) {
    for (var d = 0; d < b.length; d += c) a.push(b.substr(d, c))
};
var Xt = / /g,
    Yt = /([?.,;:!][ ]+)|([\u3001\u3002\uff01\uff08\uff09\uff0c\uff0e\uff1a\uff1b\uff1f][ ]?)/g;
Vt.prototype.b = function(a, b) {
    Zt(a, b, Xt)
};
Vt.prototype.a = function(a, b) {
    Zt(a, b, Yt);
    for (b = 0; b < a.length; b++) {
        var c = {
            length: a[b].length
        };
        this.F && this.F.log("tbphrase", c)
    }
};
var Zt = function(a, b, c) {
    for (var d = 0; c.test(b);) {
        var e = c.lastIndex;
        e > d && a.push(b.substr(d, e - d));
        d = e
    }
    b.length > d && a.push(b.substr(d))
};
var $t = [0, 200],
    au = {
        af: 1,
        ar: 1,
        bn: 1,
        bs: 1,
        ca: 1,
        cs: 1,
        cy: 1,
        da: 1,
        de: 1,
        el: 1,
        en: 1,
        eo: 1,
        es: 1,
        et: 1,
        fi: 1,
        fr: 1,
        gu: 1,
        hi: 1,
        hr: 1,
        hu: 1,
        hy: 1,
        id: 1,
        is: 1,
        it: 1,
        ja: 1,
        jw: 1,
        km: 1,
        kn: 1,
        ko: 1,
        la: 1,
        lv: 1,
        mk: 1,
        ml: 1,
        mr: 1,
        my: 1,
        ne: 1,
        nl: 1,
        no: 1,
        pl: 1,
        pt: 1,
        ro: 1,
        ru: 1,
        si: 1,
        sk: 1,
        sq: 1,
        sr: 1,
        su: 1,
        sv: 1,
        sw: 1,
        ta: 1,
        te: 1,
        th: 1,
        tl: 1,
        tr: 1,
        vi: 1,
        uk: 1,
        ur: 1,
        zh: 1,
        "zh-cn": 1,
        "zh-tw": 1
    };
var bu = function(a) {
        return function() {
            return a
        }
    },
    cu = function(a, b) {
        for (var c = 0; c < b.length - 2; c += 3) {
            var d = b.charAt(c + 2);
            d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
            d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
            a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
        }
        return a
    },
    du = null,
    eu = function(a) {
        if (null !== du) var b = du;
        else {
            b = bu(String.fromCharCode(84));
            var c = bu(String.fromCharCode(75));
            b = [b(), b()];
            b[1] = c();
            b = (du = window[b.join(c())] || "") || ""
        }
        var d = bu(String.fromCharCode(116));
        c = bu(String.fromCharCode(107));
        d = [d(), d()];
        d[1] = c();
        c = "&" + d.join("") +
            "=";
        d = b.split(".");
        b = Number(d[0]) || 0;
        for (var e = [], f = 0, g = 0; g < a.length; g++) {
            var k = a.charCodeAt(g);
            128 > k ? e[f++] = k : (2048 > k ? e[f++] = k >> 6 | 192 : (55296 == (k & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (k = 65536 + ((k & 1023) << 10) + (a.charCodeAt(++g) & 1023), e[f++] = k >> 18 | 240, e[f++] = k >> 12 & 63 | 128) : e[f++] = k >> 12 | 224, e[f++] = k >> 6 & 63 | 128), e[f++] = k & 63 | 128)
        }
        a = b;
        for (f = 0; f < e.length; f++) a += e[f], a = cu(a, "+-a^+6");
        a = cu(a, "+-3^+b+-f");
        a ^= Number(d[1]) || 0;
        0 > a && (a = (a & 2147483647) + 2147483648);
        a %= 1E6;
        return c + (a.toString() + "." +
            (a ^ b))
    };
var fu = function(a, b) {
        this.a = b;
        for (var c = [], d = !0, e = a.length - 1; 0 <= e; e--) {
            var f = a[e] | 0;
            d && f == b || (c[e] = f, d = !1)
        }
        this.b = c
    },
    gu = {},
    hu = function(a) {
        return -128 <= a && 128 > a ? xe(gu, a, function(b) {
            return new fu([b | 0], 0 > b ? -1 : 0)
        }) : new fu([a | 0], 0 > a ? -1 : 0)
    },
    ku = function(a) {
        if (isNaN(a) || !isFinite(a)) return iu;
        if (0 > a) return ju(ku(-a));
        for (var b = [], c = 1, d = 0; a >= c; d++) b[d] = a / c | 0, c *= 4294967296;
        return new fu(b, 0)
    },
    lu = function(a, b) {
        if (0 == a.length) throw Error("number format error: empty string");
        b = b || 10;
        if (2 > b || 36 < b) throw Error("radix out of range: " +
            b);
        if ("-" == a.charAt(0)) return ju(lu(a.substring(1), b));
        if (0 <= a.indexOf("-")) throw Error('number format error: interior "-" character');
        for (var c = ku(Math.pow(b, 8)), d = iu, e = 0; e < a.length; e += 8) {
            var f = Math.min(8, a.length - e),
                g = parseInt(a.substring(e, e + f), b);
            8 > f ? (f = ku(Math.pow(b, f)), d = mu(d, f).add(ku(g))) : (d = mu(d, c), d = d.add(ku(g)))
        }
        return d
    },
    iu = hu(0),
    nu = hu(1),
    ou = hu(16777216),
    pu = function(a) {
        if (-1 == a.a) return -pu(ju(a));
        for (var b = 0, c = 1, d = 0; d < a.b.length; d++) b += qu(a, d) * c, c *= 4294967296;
        return b
    };
fu.prototype.toString = function(a) {
    a = a || 10;
    if (2 > a || 36 < a) throw Error("radix out of range: " + a);
    if (ru(this)) return "0";
    if (-1 == this.a) return "-" + ju(this).toString(a);
    for (var b = ku(Math.pow(a, 6)), c = this, d = "";;) {
        var e = su(c, b).a;
        c = tu(c, mu(e, b));
        var f = ((0 < c.b.length ? c.b[0] : c.a) >>> 0).toString(a);
        c = e;
        if (ru(c)) return f + d;
        for (; 6 > f.length;) f = "0" + f;
        d = "" + f + d
    }
};
var uu = function(a, b) {
        return 0 > b ? 0 : b < a.b.length ? a.b[b] : a.a
    },
    qu = function(a, b) {
        a = uu(a, b);
        return 0 <= a ? a : 4294967296 + a
    },
    ru = function(a) {
        if (0 != a.a) return !1;
        for (var b = 0; b < a.b.length; b++)
            if (0 != a.b[b]) return !1;
        return !0
    },
    vu = function(a, b) {
        a = tu(a, b);
        return -1 == a.a ? -1 : ru(a) ? 0 : 1
    },
    ju = function(a) {
        for (var b = a.b.length, c = [], d = 0; d < b; d++) c[d] = ~a.b[d];
        return (new fu(c, ~a.a)).add(nu)
    };
fu.prototype.abs = function() {
    return -1 == this.a ? ju(this) : this
};
fu.prototype.add = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0, e = 0; e <= b; e++) {
        var f = d + (uu(this, e) & 65535) + (uu(a, e) & 65535),
            g = (f >>> 16) + (uu(this, e) >>> 16) + (uu(a, e) >>> 16);
        d = g >>> 16;
        f &= 65535;
        g &= 65535;
        c[e] = g << 16 | f
    }
    return new fu(c, c[c.length - 1] & -2147483648 ? -1 : 0)
};
var tu = function(a, b) {
        return a.add(ju(b))
    },
    mu = function(a, b) {
        if (ru(a) || ru(b)) return iu;
        if (-1 == a.a) return -1 == b.a ? mu(ju(a), ju(b)) : ju(mu(ju(a), b));
        if (-1 == b.a) return ju(mu(a, ju(b)));
        if (0 > vu(a, ou) && 0 > vu(b, ou)) return ku(pu(a) * pu(b));
        for (var c = a.b.length + b.b.length, d = [], e = 0; e < 2 * c; e++) d[e] = 0;
        for (e = 0; e < a.b.length; e++)
            for (var f = 0; f < b.b.length; f++) {
                var g = uu(a, e) >>> 16,
                    k = uu(a, e) & 65535,
                    l = uu(b, f) >>> 16,
                    m = uu(b, f) & 65535;
                d[2 * e + 2 * f] += k * m;
                wu(d, 2 * e + 2 * f);
                d[2 * e + 2 * f + 1] += g * m;
                wu(d, 2 * e + 2 * f + 1);
                d[2 * e + 2 * f + 1] += k * l;
                wu(d, 2 * e + 2 * f + 1);
                d[2 * e + 2 * f + 2] += g * l;
                wu(d, 2 * e + 2 * f + 2)
            }
        for (e = 0; e < c; e++) d[e] = d[2 * e + 1] << 16 | d[2 * e];
        for (e = c; e < 2 * c; e++) d[e] = 0;
        return new fu(d, 0)
    },
    wu = function(a, b) {
        for (;
            (a[b] & 65535) != a[b];) a[b + 1] += a[b] >>> 16, a[b] &= 65535, b++
    },
    xu = function(a, b) {
        this.a = a;
        this.b = b
    },
    su = function(a, b) {
        if (ru(b)) throw Error("division by zero");
        if (ru(a)) return new xu(iu, iu);
        if (-1 == a.a) return b = su(ju(a), b), new xu(ju(b.a), ju(b.b));
        if (-1 == b.a) return b = su(a, ju(b)), new xu(ju(b.a), b.b);
        if (30 < a.b.length) {
            if (-1 == a.a || -1 == b.a) throw Error("slowDivide_ only works with positive integers.");
            for (var c = nu, d = b; 0 >= vu(d, a);) c = yu(c, 1), d = yu(d, 1);
            var e = zu(c, 1),
                f = zu(d, 1);
            d = zu(d, 2);
            for (c = zu(c, 2); !ru(d);) {
                var g = f.add(d);
                0 >= vu(g, a) && (e = e.add(c), f = g);
                d = zu(d, 1);
                c = zu(c, 1)
            }
            b = tu(a, mu(e, b));
            return new xu(e, b)
        }
        for (e = iu; 0 <= vu(a, b);) {
            c = Math.max(1, Math.floor(pu(a) / pu(b)));
            d = Math.ceil(Math.log(c) / Math.LN2);
            d = 48 >= d ? 1 : Math.pow(2, d - 48);
            f = ku(c);
            for (g = mu(f, b); - 1 == g.a || 0 < vu(g, a);) c -= d, f = ku(c), g = mu(f, b);
            ru(f) && (f = nu);
            e = e.add(f);
            a = tu(a, g)
        }
        return new xu(e, a)
    };
fu.prototype.and = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++) c[d] = uu(this, d) & uu(a, d);
    return new fu(c, this.a & a.a)
};
fu.prototype.or = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++) c[d] = uu(this, d) | uu(a, d);
    return new fu(c, this.a | a.a)
};
fu.prototype.xor = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++) c[d] = uu(this, d) ^ uu(a, d);
    return new fu(c, this.a ^ a.a)
};
var yu = function(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.b.length + c + (0 < b ? 1 : 0), e = [], f = 0; f < d; f++) e[f] = 0 < b ? uu(a, f - c) << b | uu(a, f - c - 1) >>> 32 - b : uu(a, f - c);
        return new fu(e, a.a)
    },
    zu = function(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.b.length - c, e = [], f = 0; f < d; f++) e[f] = 0 < b ? uu(a, f + c) >>> b | uu(a, f + c + 1) << 32 - b : uu(a, f + c);
        return new fu(e, a.a)
    };
var Au = function(a) {
        this.a = a
    },
    Du = function(a) {
        this.b = null;
        var b = iu;
        if (a instanceof fu) {
            if (0 != a.a || 0 > vu(a, iu) || 0 < vu(a, Bu)) throw Error("The address does not look like an IPv4.");
            b = Ub(a)
        } else {
            if (!Cu.test(a)) throw Error(a + " does not look like an IPv4 address.");
            var c = a.split(".");
            if (4 != c.length) throw Error(a + " does not look like an IPv4 address.");
            for (var d = 0; d < c.length; d++) {
                var e = pe(c[d]);
                if (isNaN(e) || 0 > e || 255 < e || 1 != c[d].length && vc(c[d], "0")) throw Error("In " + a + ", octet " + d + " is not valid");
                e = ku(e);
                b =
                    yu(b, 8).or(e)
            }
        }
        this.a = b
    };
t(Du, Au);
var Cu = /^[0-9.]*$/,
    Bu = tu(yu(nu, 32), nu);
Du.prototype.toString = function() {
    if (this.b) return this.b;
    for (var a = qu(this.a, 0), b = [], c = 3; 0 <= c; c--) b[c] = String(a & 255), a >>>= 8;
    return this.b = b.join(".")
};
var Hu = function(a) {
    this.b = null;
    var b = iu;
    if (a instanceof fu) {
        if (0 != a.a || 0 > vu(a, iu) || 0 < vu(a, Eu)) throw Error("The address does not look like a valid IPv6.");
        b = Ub(a)
    } else {
        if (!Fu.test(a)) throw Error(a + " is not a valid IPv6 address.");
        var c = a.split(":");
        if (-1 != c[c.length - 1].indexOf(".")) {
            a = qu(Ub((new Du(c[c.length - 1])).a), 0);
            var d = [];
            d.push((a >>> 16 & 65535).toString(16));
            d.push((a & 65535).toString(16));
            Cb(c, c.length - 1);
            Hb(c, d);
            a = c.join(":")
        }
        d = a.split("::");
        if (2 < d.length || 1 == d.length && 8 != c.length) throw Error(a +
            " is not a valid IPv6 address.");
        if (1 < d.length) {
            c = d[0].split(":");
            d = d[1].split(":");
            1 == c.length && "" == c[0] && (c = []);
            1 == d.length && "" == d[0] && (d = []);
            var e = 8 - (c.length + d.length);
            if (1 > e) c = [];
            else {
                for (var f = [], g = 0; g < e; g++) f[g] = "0";
                c = Fb(c, f, d)
            }
        }
        if (8 != c.length) throw Error(a + " is not a valid IPv6 address");
        for (d = 0; d < c.length; d++) {
            e = lu(c[d], 16);
            if (0 > vu(e, iu) || 0 < vu(e, Gu)) throw Error(c[d] + " in " + a + " is not a valid hextet.");
            b = yu(b, 16).or(e)
        }
    }
    this.a = b
};
t(Hu, Au);
var Fu = /^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/,
    Gu = hu(65535),
    Eu = tu(yu(nu, 128), nu);
Hu.prototype.toString = function() {
    if (this.b) return this.b;
    for (var a = [], b = 3; 0 <= b; b--) {
        var c = qu(this.a, b),
            d = c & 65535;
        a.push((c >>> 16).toString(16));
        a.push(d.toString(16))
    }
    c = b = -1;
    for (var e = d = 0, f = 0; f < a.length; f++) "0" == a[f] ? (e++, -1 == c && (c = f), e > d && (d = e, b = c)) : (c = -1, e = 0);
    0 < d && (b + d == a.length && a.push(""), a.splice(b, d, ""), 0 == b && (a = [""].concat(a)));
    return this.b = a.join(":")
};
var Iu = function(a) {
        this.b = a ? a : []
    },
    Ju, Ku = {
        http: 1,
        https: 1,
        ftp: 1
    },
    Lu = function(a, b) {
        try {
            var c = nn(a)
        } catch (l) {
            return !1
        }
        if (!(a = c.c && !Ku[c.c.toLowerCase()] || !c.b)) {
            c = c.b;
            a: {
                a = c.split(".");
                for (var d = 0; d < a.length; d++)
                    if (!a[d]) {
                        var e = !1;
                        break a
                    } if (1 < a.length) {
                    b = a[a.length - 1].toLowerCase();
                    if (!Ju) {
                        try {
                            e = Af
                        } catch (l) {
                            throw Error("Variable CFG_twsfe_likelyurl_module_file has not been loaded. This is probaly due the configuration data not being properly included.");
                        }
                        a = {};
                        var f = e.ascii_tlds;
                        for (d = 0; d < f.length; d++) {
                            var g =
                                f[d];
                            a[g.toLowerCase()] = 1
                        }
                        e = e.unicode_tlds;
                        for (d = 0; d < e.length; d++) g = e[d], a[g.toLowerCase()] = 1;
                        Ju = a
                    }
                    e = !!Ju[b]
                } else e = !b
            }
            if (!e) {
                try {
                    var k = vc(c, "[") && wc(c, "]") ? new Hu(c.substring(1, c.length - 1)) : new Du(c)
                } catch (l) {
                    k = null
                }
                e = null != k
            }
            a = !e
        }
        return a ? !1 : !0
    },
    Mu = function(a) {
        a = yc(a);
        if (0 <= a.search(/[\s\xa0@]/)) return !1;
        if (Lu(a, !1)) return !0;
        var b = a.replace(/%([0-9A-Fa-f][0-9A-Fa-f])/g, function(c, d) {
            return String.fromCharCode(Number("0x" + d))
        });
        return Lu(b, !1) ? !0 : Lu("http://" + a, !0) || Lu("http://" + b, !0)
    };
Iu.prototype.a = function(a, b) {
    if ("string" != typeof a) throw Error("Pattern is not a string.");
    var c = arguments;
    return a.replace(/%(\d+)\$\w/g, function(d, e) {
        e = parseInt(e, 10);
        return 0 < e && e < c.length ? c[e] : d
    })
};
var Nu = function(a) {
        var b = (new Wm(n.location.href)).a,
            c = b.get("e"),
            d = b.get("expid");
        b = b.get("expflags");
        var e = "";
        if (b) return "expflags=" + b;
        c && (e += "e=" + c);
        d && (e && (e += "&"), e += "expid=" + d);
        a.b.length && (e && (e += "&"), e += "xid=" + a.b.join());
        return e
    },
    Ou = function(a) {
        for (var b = "", c = 0; c < H(a, 5); c++) {
            var d = Lq(a, c);
            Gh(d, 4) && 0 < I(d, 4).length ? b = I(d, 4) : (new Zp(d.zb())).a[4] = b
        }
    },
    Pu = function(a) {
        var b = DATA.DisplayLanguage,
            c = DATA.LoginUrl,
            d = nn(n.location.href),
            e = d.toString();
        a && (d.h = a, 2E3 >= ee(d.toString()).length && (e = d.toString()));
        d = c + "/Login?hl=" + b + "&continue=" + ee(e);
        a = {
            target: "_top"
        };
        b = window;
        c = d instanceof Oc ? d : Tc("undefined" != typeof d.href ? d.href : String(d));
        d = a.target || d.target;
        e = [];
        for (var f in a) switch (f) {
            case "width":
            case "height":
            case "top":
            case "left":
                e.push(f + "=" + a[f]);
                break;
            case "target":
            case "noopener":
            case "noreferrer":
                break;
            default:
                e.push(f + "=" + (a[f] ? 1 : 0))
        }
        f = e.join(",");
        if (te() && b.navigator && b.navigator.standalone && d && "_self" != d) f = cg("A"), Xd(f, c), f.setAttribute("target", d), a.noreferrer && f.setAttribute("rel", "noreferrer"),
            a = document.createEvent("MouseEvent"), a.initMouseEvent("click", !0, !0, b, 1), f.dispatchEvent(a);
        else if (a.noreferrer) {
            if (f = b.open("", d, f), a = Pc(c), f && (Be && Jc(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"), f.opener = null, a = Rd(dc("b/12014412, meta tag with sanitized URL"), '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + ge(a) + '">'), f = f.document)) f.write(Bd(a)), f.close()
        } else(f = b.open(Pc(c), d, f)) && a.noopener && (f.opener = null)
    },
    Qu = function(a) {
        a = sb(Array.from(Ml(a, 0, cm)), function(b) {
            return b.Li()
        });
        a = tb(a, function(b) {
            return b.qf()
        });
        return ub(a, function(b, c) {
            return b && 1 == c
        }, 0 < a.length)
    };
var Ru = function(a, b, c, d, e, f, g) {
    J.call(this);
    this.a = a;
    this.Z = Km.M();
    this.F = K.M();
    this.ia = new Vt(this.Z);
    this.Na = b;
    this.N = this.W = this.h = this.c = "";
    this.V = 0;
    this.m = !1;
    this.b = new Ot("tts", Km.M(), c);
    this.X = null != this.b.b && (He && Jc(qd, "UCBrowser") ? !1 : !0);
    this.G = Ze || Ye;
    G(this.b, "stop_playlist", this.O, !1, this);
    G(this.a, "action", this.Ej, !1, this);
    null != this.a.j() && G(this.a.j(), "click", this.mo, !1, this);
    this.R = (a = /(sa=[^#&]+)/.exec(window.location.href)) ? a[0] : null;
    this.C = (a = /ttsspeed=([^&]+)/.exec(window.location.href)) ?
        a[0] : null;
    this.K = (a = /gl=([^&]+)/.exec(window.location.href)) ? a[0] : null;
    this.g = 0;
    this.ra = !!d;
    this.xa = !!e;
    this.L = f || null;
    this.na = g || null;
    this.o = "";
    this.Ca = new Iu;
    this.w = null
};
t(Ru, J);
Ru.prototype.T = function() {
    Ru.D.T.call(this);
    qh(this.b, "stop_playlist", this.O, !1, this);
    qh(this.a, "action", this.Ej, !1, this)
};
Ru.prototype.O = function() {
    this.a.bd(!1)
};
var Su = function(a, b, c, d, e, f) {
    b = oe("/translate_tts?ie=UTF-8&q=", ee(b), "&tl=", c, "&total=", d, "&idx=", e, "&textlen=", b.length, eu(b), a.Na, f);
    a.K && (b += "&" + a.K);
    return b
};
h = Ru.prototype;
h.update = function(a, b, c, d, e) {
    var f = /([^?.,;:!"#$%&'()*+\-/<=>?@[\]^_`{|}~\u3001\u3002\uff01\uff08\uff09\uff0c\uff0e\uff1a\uff1b\uff1f])/;
    this.o = "";
    if (null != c)
        for (var g = 0; g < H(c, 5); g++) {
            var k = Lq(c, g),
                l = Kh(bq(k, 0), 0),
                m = Kh(bq(k, 0), 1);
            l = I(k, 4).substring(l, m);
            k = I(aq(k, 0), 0);
            if (l == k && f.test(l)) {
                this.o = I(c, 2);
                break
            }
        }
    this.g = 0;
    this.X ? xc(a) ? (Tu(this, !1), this.a.oa(!1)) : (a != this.c || b != this.h || e != this.w ? (this.c = a, this.h = b, this.w = e || null, c = !1) : c = !0, c || (this.b.stop(), this.m = !this.X || !b || xc(a) || this.G && a.length > $t[au[b.toLowerCase()]] ?
        !1 : b.toLowerCase() in au), Tu(this, this.xa || this.m), this.a.oa(this.m)) : (Tu(this, !1), this.a.oa(!1));
    null != d && (this.a.isEnabled() && null != this.L ? this.a.j().setAttribute("data-tooltip", this.L) : this.a.isEnabled() || null == this.na || this.a.j().setAttribute("data-tooltip", this.Ca.a(this.na, d)))
};
h.play = function() {
    if (this.c != this.W || this.h != this.N || this.g != this.V) {
        if (this.G) var a = [this.c];
        else {
            a = $t[au[this.h.toLowerCase()]];
            var b = [],
                c = this.ia,
                d = this.c.replace(/[ \u3000\n\r\t\s]+/g, " ");
            Wt(b, d, a, p(c.a, c), p(c.g, c));
            a = b
        }
        b = [];
        c = [];
        d = "";
        null != this.R && (d += "&" + this.R);
        null != this.C ? d += "&ttsspeed=" + this.C : 0 != this.g && (d += "&ttsspeed=" + this.g);
        this.o && (d += "&hint=" + this.o);
        for (var e = 0; e < a.length; e++) b.push(Su(this, a[e], this.h, a.length, e, d)), c.push(a[e].length);
        this.b.set(b, this.c.length, c, this.w, {
            textlen: this.c.length,
            tl: this.h
        });
        this.W = this.c;
        this.N = this.h;
        this.V = this.g
    }
    this.b.start();
    this.ra && (this.g = 0 === this.g ? .24 : 0)
};
h.stop = function() {
    this.b.stop()
};
h.Ej = function() {
    this.a.Ea(16) ? this.play() : this.stop()
};
h.mo = function(a) {
    this.a.isEnabled() || (a.stopPropagation(), this.dispatchEvent("userInteractionWhileDisabled"), a = this.F, L(a, M(a, 306)), Pm(this.Z, "webapp", "dia", "click", {
        dias: "vo"
    }))
};
var Tu = function(a, b) {
    a.a.setVisible(b);
    b || a.b.stop()
};
var Uu = function(a) {
        if (0 == a) return 0;
        if (1 == a) return 1;
        var b = .4 * a,
            c = .4 + -.2 * a;
        b += a * (c - b);
        return b + a * (c + a * (.2 + .8 * a - c) - b)
    },
    Vu = function(a) {
        if (0 == a) return 0;
        if (1 == a) return 1;
        var b = 0 * a,
            c = 1 * a;
        b += a * (c - b);
        return b + a * (c + a * (1 + 0 * a - c) - b)
    },
    Wu = function(a) {
        var b = a - 0;
        if (0 >= b) return 0;
        if (1 <= b) return 1;
        for (var c = 0, d = 1, e = 0, f = 0; 8 > f; f++) {
            e = Uu(b);
            var g = (Uu(b + 1E-6) - e) / 1E-6;
            if (1E-6 > Math.abs(e - a)) return b;
            if (1E-6 > Math.abs(g)) break;
            else e < a ? c = b : d = b, b -= (e - a) / g
        }
        for (f = 0; 1E-6 < Math.abs(e - a) && 8 > f; f++) e < a ? (c = b, b = (b + d) / 2) : (d = b, b = (b +
            c) / 2), e = Uu(b);
        return b
    };
var Xu = function(a) {
        var b = [];
        if (a.sentences)
            for (var c = 0, d; d = a.sentences[c]; c++) d.trans && b.push(d.trans);
        return b.join("")
    },
    Yu = function() {
        for (var a = Array(51), b = 0; 51 > b; b++) a[b] = Vu(Wu(b / 50));
        return function(c) {
            if (0 >= c) return 0;
            if (1 <= c) return 1;
            var d = 50 * c;
            c = Math.floor(d);
            d -= c;
            return a[c] * (1 - d) + a[c + 1] * d
        }
    };
var Zu = function(a, b) {
    Mq.call(this, a, "ttl");
    this.b = this.c = null;
    this.g = new ot(MSG_LISTEN, void 0, new ut("trans-listen-button"));
    this.h = new Ru(this.g, "&client=" + (b ? b : "webapp") + "&prev=lc", 7)
};
t(Zu, Mq);
Zu.prototype.Ja = function() {
    Zu.D.Ja.call(this);
    this.Da(cg("DIV"))
};
Zu.prototype.Da = function(a) {
    Zu.D.Da.call(this, a);
    this.j().appendChild(Mo(lo));
    this.c = B("gt-ct-text", this.j());
    a = B("gt-ct-tts", this.j());
    this.b = B("gt-ct-translit", this.j());
    this.g.ba(a)
};
Zu.prototype.update = function(a, b, c, d) {
    Zu.D.update.call(this, a, b, c, d);
    E(this.c, a);
    this.h.update(a, b);
    if (this.data) {
        a = [];
        if (0 < this.data.hc())
            for (b = 0; b < this.data.hc(); b++) c = this.data.bb(b), Gh(c, 3) && "" != I(c, 3) && a.push(I(c, 3));
        0 < a.length ? (E(this.b, a.join(" ")), V(this.b, !0)) : V(this.b, !1)
    }
    this.setVisible(!0);
    return !0
};
var $u = function(a, b, c, d, e) {
    Mq.call(this, a, "cm");
    this.Z = b;
    this.C = new Zu(a, e ? e : "webapp");
    this.w = null;
    this.ra = c;
    this.b = new X;
    this.ib(this.b);
    this.c = new X;
    this.ib(this.c);
    this.g = this.m = this.K = this.N = this.R = null;
    this.h = [];
    this.X = !!d;
    this.ia = xl.M();
    this.F = K.M()
};
t($u, Mq);
h = $u.prototype;
h.Ja = function() {
    $u.D.Ja.call(this);
    this.Da(cg("DIV"))
};
h.Da = function(a) {
    $u.D.Da.call(this, a);
    this.j().appendChild(Mo(jo));
    this.C.ba(B("gt-cc-tc", this.j()));
    this.w = B("gt-cc-t", this.j());
    V(this.w, !1);
    this.b.ba(B("gt-cc-l-i", this.j()));
    this.c.ba(B("gt-cc-r-i", this.j()));
    a = B("gt-cc-bc", this.j());
    this.R = new us("", new ut("prev-button"));
    this.R.render(a);
    this.N = new us("", new ut("next-button"));
    this.N.render(a);
    this.K = new us("", new ut("big-clear-button"));
    this.K.render(a);
    this.m = B("gt-cc-exp", this.j());
    this.g = new wt(this.R, this.N, this.K, this)
};
h.aa = function() {
    $u.D.aa.call(this);
    Y(this).listen(this, "a", this.Il);
    Y(this).listen(this, "b", this.Rl);
    Y(this).listen(this.m, "click", this.Al)
};
h.Al = function() {
    V(this.m, !1);
    w(this.h, function(c) {
        c.setVisible(!0)
    });
    var a = {},
        b = this.F;
    Qp(this.b, function(c) {
        c.isVisible() && (mm(b, c.Md(), c.eb(), c.qc), a[c.Jb()] = c.qc ? "e" : "ne")
    });
    lm(this.F, 15, Rp(this.b));
    this.log("expand", a)
};
h.Il = function(a) {
    a = Eg(a.target);
    av(this, this.Ba, this.Ma, a, !1, "clks")
};
h.Rl = function(a) {
    a = Eg(a.target);
    av(this, this.Ma, this.Ba, a, !1, "clkt")
};
h.Gl = function(a) {
    var b = a.text;
    if (!(50 < b.length)) {
        var c = this.g.a[0];
        a.o ? av(this, c.Ma, c.Ba, b, !0, "sel") : av(this, c.Ba, c.Ma, b, !0, "sel")
    }
};
var av = function(a, b, c, d, e, f) {
    if (d != a.text || b != a.Ba) "zh-TW" == b && (b = "zh-CN"), Al(a.ia, f), e ? (E(a.C.c, "..."), bv(a.Z, b, c, a.Ra, d, p(a.V, a, d, b, c), !1, "UTF-8", new cn("source=" + f))) : (a.dispatchEvent("translationRefreshed"), Br(a.ra, b, c, d, f))
};
$u.prototype.setVisible = function(a) {
    var b = this.j();
    b = !(!b || !B("gender-promo-visible", b));
    $u.D.setVisible.call(this, a || b)
};
$u.prototype.update = function(a, b, c, d) {
    $u.D.update.call(this, a, b, c, d);
    var e = 1 != this.g.a.length;
    V(this.w, e);
    U(this.j(), "show-as-one-card", this.X && e);
    var f = 0,
        g = 0,
        k = !0;
    this.h = [];
    Qp(this.b, function(r) {
        var u = r.update(a, b, c, d);
        f |= u;
        u && (k ? k = !1 : r.Xh || (r.setVisible(!1), this.h.push(r)))
    }, this);
    cv(this, this.b);
    e = 0 < this.h.length;
    V(this.m, e);
    Qp(this.c, function(r) {
        g |= r.update(a, b, c, d)
    }, this);
    var l = f || g;
    this.setVisible(l);
    this.C.update(a, b, c, d);
    if (l) {
        var m = {},
            q = this.F;
        Qp(this.b, function(r) {
            r.isVisible() && (mm(q, r.Md(),
                r.eb(), r.qc), m[r.Jb()] = r.qc ? "e" : "ne")
        });
        Qp(this.c, function(r) {
            r.isVisible() && (mm(q, r.Md(), r.eb(), r.qc), m[r.Jb()] = r.qc ? "e" : "ne")
        });
        m[this.Jb()] = e ? "e" : "ne";
        this.log("show", m);
        mm(this.F, 15, Rp(this.b), !0)
    }
    return l
};
$u.prototype.V = function(a, b, c, d) {
    this.g.push(a, b, c, d);
    this.isVisible() || (a = this.g, 1 < a.a.length && (a.a.splice(a.a.length - 1), a.b = a.a.length - 1, xt(a)))
};
var cv = function(a, b) {
    var c = [];
    Qp(b, function(d) {
        if (d.isVisible() || Ab(this.h, d)) {
            var e = d.gf || d.text;
            Ab(c, e) ? d.Oc && E(d.Oc, d.xj) : c.push(e)
        }
    }, a)
};
var dv = {
    kg: {
        1E3: {
            other: "0K"
        },
        1E4: {
            other: "00K"
        },
        1E5: {
            other: "000K"
        },
        1E6: {
            other: "0M"
        },
        1E7: {
            other: "00M"
        },
        1E8: {
            other: "000M"
        },
        1E9: {
            other: "0B"
        },
        1E10: {
            other: "00B"
        },
        1E11: {
            other: "000B"
        },
        1E12: {
            other: "0T"
        },
        1E13: {
            other: "00T"
        },
        1E14: {
            other: "000T"
        }
    },
    Ih: {
        1E3: {
            other: "0 thousand"
        },
        1E4: {
            other: "00 thousand"
        },
        1E5: {
            other: "000 thousand"
        },
        1E6: {
            other: "0 million"
        },
        1E7: {
            other: "00 million"
        },
        1E8: {
            other: "000 million"
        },
        1E9: {
            other: "0 billion"
        },
        1E10: {
            other: "00 billion"
        },
        1E11: {
            other: "000 billion"
        },
        1E12: {
            other: "0 trillion"
        },
        1E13: {
            other: "00 trillion"
        },
        1E14: {
            other: "000 trillion"
        }
    }
};
dv = {
    kg: {
        1E3: {
            other: "0\u0cb8\u0cbe"
        },
        1E4: {
            other: "00\u0cb8\u0cbe"
        },
        1E5: {
            other: "000\u0cb8\u0cbe"
        },
        1E6: {
            other: "0\u0cae\u0cbf"
        },
        1E7: {
            other: "00\u0cae\u0cbf"
        },
        1E8: {
            other: "000\u0cae\u0cbf"
        },
        1E9: {
            other: "0\u0cac\u0cbf"
        },
        1E10: {
            other: "00\u0cac\u0cbf"
        },
        1E11: {
            other: "000\u0cac\u0cbf"
        },
        1E12: {
            other: "0\u0c9f\u0ccd\u0cb0\u0cbf"
        },
        1E13: {
            other: "00\u0c9f\u0ccd\u0cb0\u0cbf"
        },
        1E14: {
            other: "000\u0c9f\u0ccd\u0cb0\u0cbf"
        }
    },
    Ih: {
        1E3: {
            other: "0 \u0cb8\u0cbe\u0cb5\u0cbf\u0cb0"
        },
        1E4: {
            other: "00 \u0cb8\u0cbe\u0cb5\u0cbf\u0cb0"
        },
        1E5: {
            other: "000 \u0cb8\u0cbe\u0cb5\u0cbf\u0cb0"
        },
        1E6: {
            other: "0 \u0cae\u0cbf\u0cb2\u0cbf\u0caf\u0ca8\u0ccd"
        },
        1E7: {
            other: "00 \u0cae\u0cbf\u0cb2\u0cbf\u0caf\u0ca8\u0ccd"
        },
        1E8: {
            other: "000 \u0cae\u0cbf\u0cb2\u0cbf\u0caf\u0ca8\u0ccd"
        },
        1E9: {
            other: "0 \u0cac\u0cbf\u0cb2\u0cbf\u0caf\u0ca8\u0ccd"
        },
        1E10: {
            other: "00 \u0cac\u0cbf\u0cb2\u0cbf\u0caf\u0ca8\u0ccd"
        },
        1E11: {
            other: "000 \u0cac\u0cbf\u0cb2\u0cbf\u0caf\u0ca8\u0ccd"
        },
        1E12: {
            other: "0 \u0c9f\u0ccd\u0cb0\u0cbf\u0cb2\u0cbf\u0caf\u0ca8\u0ccd\u200c"
        },
        1E13: {
            other: "00 \u0c9f\u0ccd\u0cb0\u0cbf\u0cb2\u0cbf\u0caf\u0ca8\u0ccd\u200c"
        },
        1E14: {
            other: "000 \u0c9f\u0ccd\u0cb0\u0cbf\u0cb2\u0cbf\u0caf\u0ca8\u0ccd\u200c"
        }
    }
};
var ev = {
    AED: [2, "dh", "\u062f.\u0625."],
    ALL: [0, "Lek", "Lek"],
    AUD: [2, "$", "AU$"],
    BDT: [2, "\u09f3", "Tk"],
    BGN: [2, "lev", "lev"],
    BRL: [2, "R$", "R$"],
    CAD: [2, "$", "C$"],
    CDF: [2, "FrCD", "CDF"],
    CHF: [2, "CHF", "CHF"],
    CLP: [0, "$", "CL$"],
    CNY: [2, "\u00a5", "RMB\u00a5"],
    COP: [32, "$", "COL$"],
    CRC: [0, "\u20a1", "CR\u20a1"],
    CZK: [50, "K\u010d", "K\u010d"],
    DKK: [50, "kr.", "kr."],
    DOP: [2, "RD$", "RD$"],
    EGP: [2, "\u00a3", "LE"],
    ETB: [2, "Birr", "Birr"],
    EUR: [2, "\u20ac", "\u20ac"],
    GBP: [2, "\u00a3", "GB\u00a3"],
    HKD: [2, "$", "HK$"],
    HRK: [2, "kn", "kn"],
    HUF: [34,
        "Ft", "Ft"
    ],
    IDR: [0, "Rp", "Rp"],
    ILS: [34, "\u20aa", "IL\u20aa"],
    INR: [2, "\u20b9", "Rs"],
    IRR: [0, "Rial", "IRR"],
    ISK: [0, "kr", "kr"],
    JMD: [2, "$", "JA$"],
    JPY: [0, "\u00a5", "JP\u00a5"],
    KRW: [0, "\u20a9", "KR\u20a9"],
    LKR: [2, "Rs", "SLRs"],
    LTL: [2, "Lt", "Lt"],
    MNT: [0, "\u20ae", "MN\u20ae"],
    MVR: [2, "Rf", "MVR"],
    MXN: [2, "$", "Mex$"],
    MYR: [2, "RM", "RM"],
    NOK: [50, "kr", "NOkr"],
    PAB: [2, "B/.", "B/."],
    PEN: [2, "S/.", "S/."],
    PHP: [2, "\u20b1", "PHP"],
    PKR: [0, "Rs", "PKRs."],
    PLN: [50, "z\u0142", "z\u0142"],
    RON: [2, "RON", "RON"],
    RSD: [0, "din", "RSD"],
    RUB: [50, "\u20bd",
        "RUB"
    ],
    SAR: [2, "Rial", "Rial"],
    SEK: [50, "kr", "kr"],
    SGD: [2, "$", "S$"],
    THB: [2, "\u0e3f", "THB"],
    TRY: [2, "\u20ba", "TRY"],
    TWD: [2, "NT$", "NT$"],
    TZS: [0, "TSh", "TSh"],
    UAH: [2, "\u0433\u0440\u043d.", "UAH"],
    USD: [2, "$", "US$"],
    UYU: [2, "$", "$U"],
    VND: [48, "\u20ab", "VN\u20ab"],
    YER: [0, "Rial", "Rial"],
    ZAR: [2, "R", "ZAR"]
};
var fv = {
    ng: ".",
    We: ",",
    qg: "%",
    $e: "0",
    Rh: "+",
    pg: "-",
    og: "E",
    rg: "\u2030",
    Xe: "\u221e",
    Nh: "NaN",
    lg: "#,##0.###",
    Vh: "#E0",
    Qh: "#,##0%",
    Jh: "\u00a4#,##0.00",
    Ve: "USD"
};
fv = {
    ng: ".",
    We: ",",
    qg: "%",
    $e: "0",
    Rh: "+",
    pg: "-",
    og: "E",
    rg: "\u2030",
    Xe: "\u221e",
    Nh: "NaN",
    lg: "#,##0.###",
    Vh: "#E0",
    Qh: "#,##0%",
    Jh: "\u00a4#,##0.00",
    Ve: "INR"
};
var iv = function(a) {
        this.L = 40;
        this.b = 1;
        this.Fa = 0;
        this.c = 3;
        this.O = this.g = 0;
        this.R = !1;
        this.K = this.w = "";
        this.h = fv.pg;
        this.G = "";
        this.a = 1;
        this.m = !1;
        this.o = [];
        this.La = this.N = !1;
        this.C = 0;
        if ("number" == typeof a) switch (a) {
            case 1:
                gv(this, fv.lg);
                break;
            case 2:
                gv(this, fv.Vh);
                break;
            case 3:
                gv(this, fv.Qh);
                break;
            case 4:
                a = fv.Jh;
                var b = ["0"],
                    c = ev[fv.Ve];
                if (c) {
                    c = c[0] & 7;
                    if (0 < c) {
                        b.push(".");
                        for (var d = 0; d < c; d++) b.push("0")
                    }
                    a = a.replace(/0.00/g, b.join(""))
                }
                gv(this, a);
                break;
            case 5:
                hv(this, 1);
                break;
            case 6:
                hv(this, 2);
                break;
            default:
                throw Error("Unsupported pattern type.");
        } else gv(this, a)
    },
    gv = function(a, b) {
        b.replace(/ /g, "\u00a0");
        var c = [0];
        a.w = jv(a, b, c);
        for (var d = c[0], e = -1, f = 0, g = 0, k = 0, l = -1, m = b.length, q = !0; c[0] < m && q; c[0]++) switch (b.charAt(c[0])) {
            case "#":
                0 < g ? k++ : f++;
                0 <= l && 0 > e && l++;
                break;
            case "0":
                if (0 < k) throw Error('Unexpected "0" in pattern "' + b + '"');
                g++;
                0 <= l && 0 > e && l++;
                break;
            case ",":
                0 < l && a.o.push(l);
                l = 0;
                break;
            case ".":
                if (0 <= e) throw Error('Multiple decimal separators in pattern "' + b + '"');
                e = f + g + k;
                break;
            case "E":
                if (a.La) throw Error('Multiple exponential symbols in pattern "' +
                    b + '"');
                a.La = !0;
                a.O = 0;
                c[0] + 1 < m && "+" == b.charAt(c[0] + 1) && (c[0]++, a.R = !0);
                for (; c[0] + 1 < m && "0" == b.charAt(c[0] + 1);) c[0]++, a.O++;
                if (1 > f + g || 1 > a.O) throw Error('Malformed exponential pattern "' + b + '"');
                q = !1;
                break;
            default:
                c[0]--, q = !1
        }
        0 == g && 0 < f && 0 <= e && (g = e, 0 == g && g++, k = f - g, f = g - 1, g = 1);
        if (0 > e && 0 < k || 0 <= e && (e < f || e > f + g) || 0 == l) throw Error('Malformed pattern "' + b + '"');
        k = f + g + k;
        a.c = 0 <= e ? k - e : 0;
        0 <= e && (a.g = f + g - e, 0 > a.g && (a.g = 0));
        a.b = (0 <= e ? e : k) - f;
        a.La && (a.L = f + a.b, 0 == a.c && 0 == a.b && (a.b = 1));
        a.o.push(Math.max(0, l));
        a.N = 0 == e || e ==
            k;
        d = c[0] - d;
        a.K = jv(a, b, c);
        c[0] < b.length && ";" == b.charAt(c[0]) ? (c[0]++, 1 != a.a && (a.m = !0), a.h = jv(a, b, c), c[0] += d, a.G = jv(a, b, c)) : (a.h += a.w, a.G += a.K)
    },
    hv = function(a, b) {
        a.C = b;
        gv(a, fv.lg);
        a.g = 0;
        a.c = 2;
        if (0 < a.g) throw Error("Can't combine significant digits and minimum fraction digits");
        a.Fa = 2
    };
iv.prototype.parse = function(a, b) {
    b = b || [0];
    if (0 != this.C) throw Error("Parsing of compact numbers is unimplemented");
    a = a.replace(/ |\u202f/g, "\u00a0");
    var c = a.indexOf(this.w, b[0]) == b[0],
        d = a.indexOf(this.h, b[0]) == b[0];
    c && d && (this.w.length > this.h.length ? d = !1 : this.w.length < this.h.length && (c = !1));
    c ? b[0] += this.w.length : d && (b[0] += this.h.length);
    if (a.indexOf(fv.Xe, b[0]) == b[0]) {
        b[0] += fv.Xe.length;
        var e = Infinity
    } else {
        e = a;
        var f = !1,
            g = !1,
            k = !1,
            l = -1,
            m = 1,
            q = fv.ng,
            r = fv.We,
            u = fv.og;
        if (0 != this.C) throw Error("Parsing of compact style numbers is not implemented");
        r = r.replace(/\u202f/g, "\u00a0");
        for (var z = ""; b[0] < e.length; b[0]++) {
            var O = e.charAt(b[0]),
                W = kv(O);
            if (0 <= W && 9 >= W) z += W, k = !0;
            else if (O == q.charAt(0)) {
                if (f || g) break;
                z += ".";
                f = !0
            } else if (O == r.charAt(0) && ("\u00a0" != r.charAt(0) || b[0] + 1 < e.length && 0 <= kv(e.charAt(b[0] + 1)))) {
                if (f || g) break
            } else if (O == u.charAt(0)) {
                if (g) break;
                z += "E";
                g = !0;
                l = b[0]
            } else if ("+" == O || "-" == O) {
                if (k && l != b[0] - 1) break;
                z += O
            } else if (1 == this.a && O == fv.qg.charAt(0)) {
                if (1 != m) break;
                m = 100;
                if (k) {
                    b[0]++;
                    break
                }
            } else if (1 == this.a && O == fv.rg.charAt(0)) {
                if (1 !=
                    m) break;
                m = 1E3;
                if (k) {
                    b[0]++;
                    break
                }
            } else break
        }
        1 != this.a && (m = this.a);
        e = parseFloat(z) / m
    }
    if (c) {
        if (a.indexOf(this.K, b[0]) != b[0]) return NaN;
        b[0] += this.K.length
    } else if (d) {
        if (a.indexOf(this.G, b[0]) != b[0]) return NaN;
        b[0] += this.G.length
    }
    return d ? -e : e
};
var sv = function(a, b) {
        if (isNaN(b)) return fv.Nh;
        var c = [];
        var d = b,
            e = b;
        if (0 == a.C) var f = lv;
        else d = Math.abs(d), e = Math.abs(e), f = mv(a, 1 >= d ? 0 : nv(d)).Dg, e = ov(e, -f), pv(a, e), d = ov(d, -f), d = pv(a, d), f = mv(a, f + nv(d.Ri));
        b = ov(b, -f.Dg);
        c.push(f.prefix);
        d = 0 > b || 0 == b && 0 > 1 / b;
        c.push(d ? a.h : a.w);
        if (isFinite(b))
            if (b = b * (d ? -1 : 1) * a.a, a.La)
                if (0 == b) qv(a, b, a.b, c), rv(a, 0, c);
                else {
                    e = Math.log(b) / Math.log(10);
                    v(!0);
                    e = Math.floor(e + 2E-15);
                    b = ov(b, -e);
                    var g = a.b;
                    1 < a.L && a.L > a.b ? (g = e % a.L, 0 > g && (g = a.L + g), b = ov(b, g), e -= g, g = 1) : 1 > a.b ? (e++, b = ov(b, -1)) :
                        (e -= a.b - 1, b = ov(b, a.b - 1));
                    qv(a, b, g, c);
                    rv(a, e, c)
                }
        else qv(a, b, a.b, c);
        else c.push(fv.Xe);
        c.push(d ? a.G : a.K);
        c.push(f.rj);
        return c.join("")
    },
    pv = function(a, b) {
        var c = ov(b, a.c);
        0 < a.Fa && (c = tv(c, a.Fa, a.c));
        c = Math.round(c);
        isFinite(c) ? (b = Math.floor(ov(c, -a.c)), a = Math.floor(c - ov(b, a.c))) : a = 0;
        return {
            Ri: b,
            Rk: a
        }
    },
    qv = function(a, b, c, d) {
        if (a.g > a.c) throw Error("Min value must be less than max value");
        d || (d = []);
        b = pv(a, b);
        var e = b.Ri,
            f = b.Rk,
            g = 0 < a.g || 0 < f || !1;
        b = a.g;
        g && (b = a.g);
        for (var k = "", l = e; 1E20 < l;) k = "0" + k, l = Math.round(ov(l,
            -1));
        k = l + k;
        var m = fv.ng;
        l = fv.$e.charCodeAt(0);
        var q = k.length,
            r = 0;
        if (0 < e || 0 < c) {
            for (e = q; e < c; e++) d.push(String.fromCharCode(l));
            if (2 <= a.o.length)
                for (c = 1; c < a.o.length; c++) r += a.o[c];
            c = q - r;
            if (0 < c) {
                e = a.o;
                r = q = 0;
                for (var u, z = fv.We, O = k.length, W = 0; W < O; W++)
                    if (d.push(String.fromCharCode(l + 1 * Number(k.charAt(W)))), 1 < O - W)
                        if (u = e[r], W < c) {
                            var Ja = c - W;
                            (1 === u || 0 < u && 1 === Ja % u) && d.push(z)
                        } else r < e.length && (W === c ? r += 1 : u === W - c - q + 1 && (d.push(z), q += u, r += 1))
            } else {
                c = k;
                k = a.o;
                e = fv.We;
                u = c.length;
                z = [];
                for (q = k.length - 1; 0 <= q && 0 < u; q--) {
                    r =
                        k[q];
                    for (O = 0; O < r && 0 <= u - O - 1; O++) z.push(String.fromCharCode(l + 1 * Number(c.charAt(u - O - 1))));
                    u -= r;
                    0 < u && z.push(e)
                }
                d.push.apply(d, z.reverse())
            }
        } else g || d.push(String.fromCharCode(l));
        (a.N || g) && d.push(m);
        f = String(f);
        g = f.split("e+");
        2 == g.length && (f = String(tv(parseFloat(g[0]), a.Fa, 1)), f = f.replace(".", ""), f += me("0", parseInt(g[1], 10) - f.length + 1));
        a.c + 1 > f.length && (f = "1" + me("0", a.c - f.length) + f);
        for (a = f.length;
            "0" == f.charAt(a - 1) && a > b + 1;) a--;
        for (e = 1; e < a; e++) d.push(String.fromCharCode(l + 1 * Number(f.charAt(e))))
    },
    rv =
    function(a, b, c) {
        c.push(fv.og);
        0 > b ? (b = -b, c.push(fv.pg)) : a.R && c.push(fv.Rh);
        b = "" + b;
        for (var d = fv.$e, e = b.length; e < a.O; e++) c.push(d);
        c.push(b)
    },
    kv = function(a) {
        a = a.charCodeAt(0);
        if (48 <= a && 58 > a) return a - 48;
        var b = fv.$e.charCodeAt(0);
        return b <= a && a < b + 10 ? a - b : -1
    },
    jv = function(a, b, c) {
        for (var d = "", e = !1, f = b.length; c[0] < f; c[0]++) {
            var g = b.charAt(c[0]);
            if ("'" == g) c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++, d += "'") : e = !e;
            else if (e) d += g;
            else switch (g) {
                case "#":
                case "0":
                case ",":
                case ".":
                case ";":
                    return d;
                case "\u00a4":
                    c[0] +
                        1 < f && "\u00a4" == b.charAt(c[0] + 1) ? (c[0]++, d += fv.Ve) : (g = fv.Ve, d += g in ev ? ev[g][1] : g);
                    break;
                case "%":
                    if (!a.m && 1 != a.a) throw Error("Too many percent/permill");
                    if (a.m && 100 != a.a) throw Error("Inconsistent use of percent/permill characters");
                    a.a = 100;
                    a.m = !1;
                    d += fv.qg;
                    break;
                case "\u2030":
                    if (!a.m && 1 != a.a) throw Error("Too many percent/permill");
                    if (a.m && 1E3 != a.a) throw Error("Inconsistent use of percent/permill characters");
                    a.a = 1E3;
                    a.m = !1;
                    d += fv.rg;
                    break;
                default:
                    d += g
            }
        }
        return d
    },
    lv = {
        prefix: "",
        rj: "",
        Dg: 0
    },
    mv = function(a,
        b) {
        a = 1 == a.C ? dv.kg : dv.Ih;
        null == a && (a = dv.kg);
        if (3 > b) return lv;
        b = Math.min(14, b);
        var c = a[ov(1, b)];
        for (--b; !c && 3 <= b;) c = a[ov(1, b)], b--;
        if (!c) return lv;
        a = c.other;
        return a && "0" != a ? (a = /([^0]*)(0+)(.*)/.exec(a)) ? {
            prefix: a[1],
            rj: a[3],
            Dg: b + 1 - (a[2].length - 1)
        } : lv : lv
    },
    nv = function(a) {
        if (!isFinite(a)) return 0 < a ? a : 0;
        for (var b = 0; 1 <= (a /= 10);) b++;
        return b
    },
    ov = function(a, b) {
        v(0 == b % 1, 'Cannot shift by fractional digits "%s".', b);
        if (!a || !isFinite(a) || 0 == b) return a;
        a = String(a).split("e");
        return parseFloat(a[0] + "e" + (parseInt(a[1] ||
            0, 10) + b))
    },
    uv = function(a, b) {
        v(0 == b % 1, 'Cannot round to fractional digits "%s".', b);
        return a && isFinite(a) ? ov(Math.round(ov(a, b)), -b) : a
    },
    tv = function(a, b, c) {
        if (!a) return a;
        b = b - nv(a) - 1;
        return b < -c ? uv(a, -c) : uv(a, b)
    };
var vv = function(a, b, c) {
    X.call(this);
    this.h = a;
    this.b = b;
    this.c = c;
    this.g = new iv("######")
};
t(vv, X);
vv.prototype.Wc = function(a) {
    return a && "DIV" == a.tagName && B("cc-ctr", a) && B("cc-msg", a) ? !0 : !1
};
vv.prototype.init = function() {
    wv(this, !1);
    xv(this, 0)
};
var xv = function(a, b) {
        b = sv(a.g, b);
        var c = sv(a.g, a.h);
        E(B("cc-ctr", a.j()), b + "/" + c)
    },
    wv = function(a, b) {
        if (b) {
            var c = B("cc-ctr", a.j()),
                d = a.c;
            T(c, a.b);
            R(c, d)
        } else c = B("cc-ctr", a.j()), d = a.b, T(c, a.c), R(c, d);
        V(B("cc-msg", a.j()), b)
    };
var yv = function(a, b) {
    Lg.call(this);
    this.c = this.b = 0;
    this.Zb = a;
    this.g = b;
    this.a = new zs(p(this.Wk, this), 0, this)
};
t(yv, Lg);
h = yv.prototype;
h.T = function() {
    this.a.Ia();
    delete this.Zb;
    delete this.g;
    yv.D.T.call(this)
};
h.start = function(a, b) {
    this.stop();
    b = b || 0;
    this.b = Math.max(a || 0, 0);
    this.c = 0 > b ? -1 : Va() + b;
    this.a.start(0 > b ? this.b : Math.min(this.b, b))
};
h.stop = function() {
    this.a.stop()
};
h.mb = function() {
    return this.a.mb()
};
h.Wk = function() {
    if (!this.Zb.call(this.g))
        if (0 > this.c) this.a.start(this.b);
        else {
            var a = this.c - Va();
            0 >= a || this.a.start(Math.min(this.b, a))
        }
};
var Av = function(a) {
    J.call(this);
    this.v = a;
    this.a = this.v.value;
    this.b = new Bp(this);
    this.g = Va();
    zv ? this.b.listen(a, "paste", this.Kd) : this.b.listen(a, ["keydown", "blur", "focus", "mouseover", "input"], this.zl);
    this.c = new yv(p(this.ei, this))
};
t(Av, J);
var zv = De || y || ze || Ce && Te("1.9");
h = Av.prototype;
h.dc = "init";
h.F = Zi("goog.events.PasteHandler");
h.T = function() {
    Av.D.T.call(this);
    this.b.Ia();
    this.b = null;
    this.c.Ia();
    this.c = null
};
h.getState = function() {
    return this.dc
};
h.ei = function() {
    if (this.a == this.v.value) return !1;
    bj(this.F, "detected textchange after paste");
    this.dispatchEvent("after_paste");
    return !0
};
h.Kd = function(a) {
    a = new Vg(a.b);
    a.type = "paste";
    this.dispatchEvent(a);
    Fi(function() {
        this.ei() || this.c.start(50, 200)
    }, 0, this)
};
h.zl = function(a) {
    switch (this.dc) {
        case "init":
            switch (a.type) {
                case "blur":
                    this.dc = "init";
                    break;
                case "focus":
                    this.dc = "focused";
                    break;
                case "mouseover":
                    this.dc = "init";
                    this.v.value != this.a && (bj(this.F, "paste by dragdrop while on init!"), this.Kd(a));
                    break;
                default:
                    $i(this.F, "unexpected event " + a.type + "during init")
            }
            break;
        case "focused":
            switch (a.type) {
                case "input":
                    var b = this.g + 400;
                    if (Va() > b || "focus" == this.h) bj(this.F, "paste by textchange while focused!"), this.Kd(a);
                    break;
                case "blur":
                    this.dc = "init";
                    break;
                case "keydown":
                    bj(this.F,
                        "key down ... looking for ctrl+v");
                    if (Fe && ye && 0 == a.keyCode || Fe && ye && 17 == a.keyCode) break;
                    this.dc = "typing";
                    break;
                case "mouseover":
                    this.v.value != this.a && (bj(this.F, "paste by dragdrop while focused!"), this.Kd(a));
                    break;
                default:
                    $i(this.F, "unexpected event " + a.type + " during focused")
            }
            break;
        case "typing":
            switch (a.type) {
                case "input":
                    this.dc = "focused";
                    break;
                case "blur":
                    this.dc = "init";
                    break;
                case "keydown":
                    if (a.ctrlKey && 86 == a.keyCode || a.shiftKey && 45 == a.keyCode || a.metaKey && 86 == a.keyCode) bj(this.F, "paste by ctrl+v while keypressed!"),
                        this.Kd(a);
                    break;
                case "mouseover":
                    this.v.value != this.a && (bj(this.F, "paste by dragdrop while keypressed!"), this.Kd(a));
                    break;
                default:
                    $i(this.F, "unexpected event " + a.type + " during keypressed")
            }
            break;
        default:
            $i(this.F, "invalid " + this.dc + " state")
    }
    this.g = Va();
    this.a = this.v.value;
    bj(this.F, a.type + " -> " + this.dc);
    this.h = a.type
};
var Bv = function() {};
t(Bv, Hr);
Ha(Bv);
h = Bv.prototype;
h.Zc = function() {};
h.Va = function(a, b) {
    hs(a, !1);
    a.Ac &= -256;
    a.Oa(32, !1);
    Bv.D.Va.call(this, a, b);
    a.g(b.value);
    return b
};
h.kb = function(a) {
    hs(a, !1);
    a.Ac &= -256;
    a.Oa(32, !1);
    return a.a.b("TEXTAREA", {
        "class": Kr(this, a).join(" "),
        disabled: !a.isEnabled()
    }, a.Sa() || "")
};
h.Yc = function(a) {
    return "TEXTAREA" == a.tagName
};
h.Ug = Ga;
h.Tg = function(a) {
    return a.isEnabled()
};
h.Qd = Ga;
h.xd = function(a, b, c) {
    Bv.D.xd.call(this, a, b, c);
    (a = a.j()) && 1 == b && (a.disabled = c)
};
h.jc = Ga;
h.Lb = function(a, b) {
    a && (a.value = b)
};
h.wa = function() {
    return "goog-textarea"
};
var Cv = function(a, b, c) {
    Z.call(this, a, b || Bv.M(), c);
    hs(this, !1);
    this.cf = !0;
    (b = this.j()) && this.c.Gf(b, !0);
    this.Td = "" != a;
    a || (this.$c = "")
};
t(Cv, Z);
var Dv = !(y && !Ve(11));
h = Cv.prototype;
h.Ud = !1;
h.Qf = !1;
h.Td = !1;
h.Jc = 0;
h.lh = 0;
h.Mi = !1;
h.Zf = !1;
h.vh = !1;
h.uh = !1;
h.Cd = "";
var Ev = function(a) {
        return a.m.top + a.m.bottom + a.W.top + a.W.bottom
    },
    Fv = function(a) {
        var b = a.lh,
            c = a.j();
        b && c && a.Zf && (b -= Ev(a));
        return b
    };
Cv.prototype.b = function(a) {
    this.g(String(a))
};
Cv.prototype.Y = function() {
    return this.j().value != this.Cd || Gv(this) || this.Td ? this.j().value : ""
};
Cv.prototype.g = function(a) {
    Cv.D.g.call(this, a);
    this.Td = "" != a;
    Hv(this)
};
Cv.prototype.oa = function(a) {
    Cv.D.oa.call(this, a);
    this.j().disabled = !a
};
var Hv = function(a) {
        a.j() && a.N()
    },
    Gv = function(a) {
        v(a.j());
        return "placeholder" in a.j()
    },
    Iv = function(a) {
        a.Cd && (Gv(a) ? a.j().placeholder = a.Cd : !a.j() || a.Td || a.Qf || (R(v(a.j()), "textarea-placeholder-input"), a.j().value = a.Cd))
    };
Cv.prototype.aa = function() {
    Cv.D.aa.call(this);
    var a = this.j();
    To(a, {
        overflowY: "hidden",
        overflowX: "auto",
        boxSizing: "border-box",
        MsBoxSizing: "border-box",
        WebkitBoxSizing: "border-box",
        MozBoxSizing: "border-box"
    });
    this.m = yp(a);
    this.W = ep(a);
    Y(this).listen(a, "scroll", this.N).listen(a, "focus", this.N).listen(a, "keyup", this.N).listen(a, "mouseup", this.$b).listen(a, "blur", this.Ta);
    Iv(this);
    Hv(this)
};
var Jv = function(a) {
        if (!a.Mi) {
            var b = a.j().cloneNode(!1);
            To(b, {
                position: "absolute",
                height: "auto",
                top: "-9999px",
                margin: "0",
                padding: "1px",
                border: "1px solid #000",
                overflow: "hidden"
            });
            gg(a.a.a.body, b);
            var c = b.scrollHeight;
            b.style.padding = "10px";
            var d = b.scrollHeight;
            a.vh = d > c;
            b.style.borderWidth = "10px";
            a.uh = b.scrollHeight > d;
            b.style.height = "100px";
            100 != b.offsetHeight && (a.Zf = !0);
            mg(b);
            a.Mi = !0
        }
        b = a.j();
        isNaN(a.m.top) && (a.m = yp(b), a.W = ep(b));
        c = a.j().scrollHeight;
        var e = a.j();
        d = e.offsetHeight - e.clientHeight;
        if (!a.vh) {
            var f =
                a.m;
            d -= f.top + f.bottom
        }
        a.uh || (e = ep(e), d -= e.top + e.bottom);
        c += 0 < d ? d : 0;
        a.Zf ? c -= Ev(a) : (a.vh || (d = a.m, c += d.top + d.bottom), a.uh || (a = ep(b), c += a.top + a.bottom));
        return c
    },
    Kv = function(a, b) {
        a.Jc != b && (a.Jc = b, a.j().style.height = b + "px")
    },
    Lv = function(a) {
        var b = a.j();
        b.style.height = "auto";
        var c = b.value.match(/\n/g) || [];
        b.rows = c.length + 1;
        a.Jc = 0
    };
Cv.prototype.Ta = function() {
    Gv(this) || (this.Qf = !1, "" == this.j().value && (this.Td = !1, Iv(this)))
};
Cv.prototype.N = function(a) {
    if (!this.Ud) {
        var b = this.j();
        !Gv(this) && a && "focus" == a.type && (b.value == this.Cd && this.Cd && !this.Qf && (T(b, "textarea-placeholder-input"), b.value = ""), this.Qf = !0, this.Td = "" != b.value);
        var c = !1;
        this.Ud = !0;
        a = this.Jc;
        if (b.scrollHeight) {
            var d = !1,
                e = !1,
                f = Jv(this),
                g = b.offsetHeight,
                k = Fv(this);
            var l = 0;
            var m = this.j();
            l && m && this.Zf && (l -= Ev(this));
            k && f < k ? (Kv(this, k), d = !0) : l && f > l ? (Kv(this, l), b.style.overflowY = "", e = !0) : g != f ? Kv(this, f) : this.Jc || (this.Jc = f);
            d || e || !Dv || (c = !0)
        } else Lv(this);
        this.Ud = !1;
        c && (b = this.j(), this.Ud || (this.Ud = !0, (e = b.scrollHeight) ? (f = Jv(this), c = Fv(this), c && f <= c || (d = this.m, b.style.paddingBottom = d.bottom + 1 + "px", Jv(this) == f && (b.style.paddingBottom = d.bottom + e + "px", b.scrollTop = 0, e = Jv(this) - e, e >= c ? Kv(this, e) : Kv(this, c)), b.style.paddingBottom = d.bottom + "px")) : Lv(this), this.Ud = !1));
        a != this.Jc && this.dispatchEvent("resize")
    }
};
Cv.prototype.$b = function() {
    var a = this.j(),
        b = a.offsetHeight;
    a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
    b != this.Jc && (this.Jc = this.lh = b)
};
var Mv = function(a, b) {
    Cv.call(this, a);
    this.yc = !!b;
    this.ra = "";
    this.xa = null;
    this.R = 0;
    this.X = this.Z = !1;
    this.Ca = null
};
t(Mv, Cv);
Mv.prototype.b = function(a) {
    Mv.D.b.call(this, a);
    this.V("set")
};
Mv.prototype.aa = function() {
    Mv.D.aa.call(this);
    G(this.j(), "compositionstart", p(this.xb, this), !1, this);
    G(this.j(), "compositionend", p(this.nb, this), !1, this);
    this.Ca = new Xr(this.j());
    G(this.Ca, "key", function(a) {
        Nv(this, "key", {
            keyCode: a.keyCode
        })
    }, !1, this);
    G(this.j(), "input", function() {
        Nv(this, "input")
    }, !1, this);
    G(new Av(this.j()), "paste", function() {
        this.Z = !0;
        Nv(this, "paste")
    }, !1, this);
    G(this.j(), "drop", function() {
        Nv(this, "drop")
    }, !1, this);
    this.xa = new Di(1E3);
    G(this.xa, "tick", function() {
            this.V("timer")
        },
        !1, this);
    this.xa.start()
};
Mv.prototype.xb = function() {
    this.X = !0
};
Mv.prototype.nb = function() {
    this.X = !1;
    Nv(this, "input")
};
var Nv = function(a, b, c) {
    Fi(p(a.V, a, b, c), 0, a)
};
Mv.prototype.V = function(a, b) {
    if (!this.X)
        if (this.yc && "key" == a && b && 13 == b.keyCode) this.dispatchEvent("enter");
        else {
            var c = this.Y();
            "" == c.trim() && c != this.ra && this.dispatchEvent("clear");
            c != this.ra && (this.R += 1, this.ra = c, c = new F("change"), this.Z && (this.Z = !1, a = "paste"), c.changeType = a, null != b && Wb(c, b), this.dispatchEvent(c))
        }
};
var Ov = function(a) {
        return yc(a.Y())
    },
    Pv = function(a) {
        var b = a.R;
        a.R = 0;
        return b
    };
var Qv = function(a, b) {
    J.call(this);
    this.rd = a;
    this.a = [];
    null != b && this.Ed(b)
};
t(Qv, J);
Qv.prototype.update = function(a, b) {
    for (var c = this.a.length = 0; c < a.length; ++c) this.a.push(a[c]);
    this.dispatchEvent({
        type: this.rd,
        data: this.a,
        selected: null != b ? b : null
    })
};
var Rv = function(a, b) {
    J.call(this);
    this.R = !!b;
    this.a = "";
    this.V = a;
    this.c = this.b = "";
    this.L = new Qv("srcSuggestionUpdated", this);
    this.K = new Qv("staticSrcSuggestionUpdated", this);
    this.O = new Qv("staticTgtSuggestionUpdated", this);
    this.W = [];
    this.ia = new Qv("srcEmphasizeUpdated", this);
    this.X = new Qv("tgtEmphasizeUpdated", this);
    this.Z = this.na = 0;
    this.o = [];
    this.m = [];
    this.C = [];
    this.N = [];
    this.G = !1;
    this.w = ""
};
t(Rv, J);
var Sv = function(a, b) {
        var c = [];
        if (b) {
            for (var d = "auto" == a.a ? a.c : a.a, e = -1, f = 0; f < b.length; ++f) b[f] == d ? "auto" != a.a && (e = f) : c.push(b[f]);
            b = -1 != e && 3 > e
        } else b = !1;
        b || a.G || a.L.update(c ? c.slice(0, 3) : [])
    },
    Uv = function(a) {
        var b = a.K,
            c = a.a;
        a = Tv(a.C, a.o);
        b.update(a, c)
    },
    Vv = function(a) {
        var b = a.O,
            c = a.b;
        a = Tv(a.N, a.m);
        b.update(a, c)
    };
Rv.prototype.g = function(a, b) {
    b = null != b ? b : 0;
    if (3 == b || 4 == b || 5 == b) this.G = !0;
    6 == b && (this.w = a);
    "zh-TW" == a && (a = "zh-CN");
    "auto" != a && Wv(this, "");
    if (this.a != a) {
        Xv(this, this.K, a, this.o);
        var c = this.a;
        this.a = a;
        this.R && Yv(this.a, this.o);
        this.V && c != this.a && this.V(jc(this.a) ? "rtl" : "ltr");
        a = "auto" == c ? void 0 : p(this.h, this, c, 6);
        this.na = b;
        Zv(this, this.a, "srcLanguageUpdated", b, a)
    }
};
Rv.prototype.h = function(a, b) {
    b = null != b ? b : 0;
    6 != b && 5 != b || "zh-CN" != a || "zh-TW" != this.w || (a = "zh-TW");
    5 == b && (this.w = this.b);
    Xv(this, this.O, a, this.m);
    if (this.b != a) {
        var c = this.b;
        this.b = a;
        this.R && Yv(this.b, this.m);
        this.Z = b;
        Zv(this, this.b, "tgtLanguageUpdated", b, p(this.g, this, c, 6))
    }
};
var Xv = function(a, b, c, d) {
        for (var e = Gb(b.a), f = "auto" != c, g = 0; g < e.length; g++)
            if (c == e[g]) {
                f = !1;
                break
            } if (a.R && "auto" != c) {
            g = e.length;
            d = e = [c].concat(d instanceof Array ? d : ca(ba(d)), e instanceof Array ? e : ca(ba(e)));
            a = {};
            for (var k = f = 0; k < d.length;) {
                var l = d[k++];
                var m = l;
                m = Oa(m) ? "o" + Ra(m) : (typeof m).charAt(0) + m;
                Object.prototype.hasOwnProperty.call(a, m) || (a[m] = !0, d[f++] = l)
            }
            d.length = f;
            e.length = g
        } else if (f)
            for (a = {}, 0 < d.length && (a[d[0]] = !0), 1 < d.length && (a[d[1]] = !0), g = e.length - 1; 0 <= g; g--)
                if (!a[e[g]]) {
                    e[g] = c;
                    break
                } b.update(e,
            c)
    },
    Wv = function(a, b) {
        "auto" == b && (b = "");
        a.c != b && (a.c = b, a.dispatchEvent({
            type: "detectSrcUpdated",
            data: a.c
        }))
    },
    $v = function(a) {
        for (var b = DATA.RecentLanguages.recent_sl, c = 0; c < b.length; ++c) a.o.push(b[c])
    },
    aw = function(a) {
        for (var b = DATA.RecentLanguages.recent_tl, c = 0; c < b.length; ++c) a.m.push(b[c])
    },
    bw = function(a) {
        a.C = [];
        a.N = [];
        for (var b = window.DEFAULT_SOURCES || [], c = window.DEFAULT_TARGETS || [], d = 0; d < b.length; d++) Bb(a.C, b[d]);
        for (b = 0; b < c.length; b++) Bb(a.N, c[b])
    },
    cw = function(a) {
        if (!a || 0 == a.length) return "";
        for (var b = [], c = 0; c < a.length; ++c) b.push(a[c]);
        return b.join("|")
    },
    Zv = function(a, b, c, d, e) {
        a.dispatchEvent({
            type: c,
            data: b,
            bi: 6 == d
        });
        e && (3 == d || 4 == d) && a.a == a.b && "zh-CN" != a.a && e();
        4 != d && 3 != d || a.dispatchEvent("languageSelected")
    },
    dw = function(a, b) {
        for (var c = [], d = 0; d < a.length && !(a[d] != b && c.push(a[d]), 3 <= c.length); ++d);
        return c
    },
    Yv = function(a, b) {
        if ("auto" != a) {
            for (var c = 0; c < b.length && b[c] != a; ++c);
            c == b.length ? (b.unshift(a), 10 < b.length && b.pop()) : (b.splice(c, 1), b.unshift(a))
        }
    },
    Tv = function(a, b) {
        for (var c = {}, d = [], e = 0; e < b.length &&
            3 > d.length; e++) d.push(b[e]), c[b[e]] = !0;
        for (e = 0; e < a.length && 3 > d.length; e++) null == c[a[e]] && (c[a[e]] = !0, d.push(a[e]));
        return d
    };
var hw = function(a, b) {
        var c = 0,
            d = 0;
        if (ew(a)) c = a.selectionStart, d = b ? -1 : a.selectionEnd;
        else if (fw()) {
            var e = gw(a),
                f = e[0];
            e = e[1];
            if (f.inRange(e)) {
                f.setEndPoint("EndToStart", e);
                if ("textarea" == a.type) {
                    a = e.duplicate();
                    var g = f.text;
                    c = g;
                    e = d = a.text;
                    for (var k = !1; !k;) 0 == f.compareEndPoints("StartToEnd", f) ? k = !0 : (f.moveEnd("character", -1), f.text == g ? c += "\r\n" : k = !0);
                    if (b) b = [c.length, -1];
                    else {
                        for (b = !1; !b;) 0 == a.compareEndPoints("StartToEnd", a) ? b = !0 : (a.moveEnd("character", -1), a.text == d ? e += "\r\n" : b = !0);
                        b = [c.length, c.length +
                            e.length
                        ]
                    }
                    return b
                }
                c = f.text.length;
                d = b ? -1 : f.text.length + e.text.length
            }
        }
        return [c, d]
    },
    gw = function(a) {
        var b = a.ownerDocument || a.document,
            c = b.selection.createRange();
        "textarea" == a.type ? (b = b.body.createTextRange(), b.moveToElementText(a)) : b = a.createTextRange();
        return [b, c]
    },
    iw = function(a, b) {
        "textarea" == a.type && (b = ce(a.value.substring(0, b)).length);
        return b
    },
    ew = function(a) {
        try {
            return "number" == typeof a.selectionStart
        } catch (b) {
            return !1
        }
    },
    fw = function() {
        return y && !Te("9")
    };
var jw = function(a, b, c, d) {
    var e = DATA.DisplayLanguage,
        f = DATA.MaxSingleQueryLength;
    this.b = a;
    this.h = b;
    this.L = e;
    this.g = c;
    this.c = f;
    this.a = d || null;
    this.o = !1;
    this.m = new Km;
    this.m.c = "webapp";
    this.F = K.M()
};
jw.prototype.init = function() {
    G(this.b, "change", this.w, !1, this);
    G(document, "selectionchange", this.C, !1, this);
    G(new Av(this.b.j()), "paste", this.G, !1, this)
};
jw.prototype.w = function(a) {
    var b = this.b.Y().length;
    this.a && xv(this.a, b);
    var c = "set" == a.changeType;
    a = "key" == a.changeType;
    if (b > this.c) {
        if (!op(this.g.j()) && !a || c) this.g.setVisible(!0), a = this.h.c, "" == a && (a = this.h.a), c = b - this.c, Pm(this.m, "webapp", "ov", "1", {
            sl: this.h.a,
            tl: this.h.b,
            dl: a,
            hl: this.L,
            ql: b,
            ol: c
        }), a = this.F, L(a, tm(a, 250, b, c)), this.a && wv(this.a, !0), b = this.b.Y().substring(this.c), this.g.g = b, b = this.g, c = {
            maximum_input_count: sv(b.W, this.c)
        }, a = kw(b.V, c), E(B("snck-msg", b.j()), a), c = kw(b.X, c), E(B("ovfl-xlt",
            b.j()), c);
        this.b.g(this.b.Y().substring(0, this.c));
        this.a && xv(this.a, this.c)
    } else b < this.c && this.a && wv(this.a, !1), (c || 0 == b) && lw(this)
};
var lw = function(a) {
    a.g.g = "";
    a.g.setVisible(!1);
    a.a && wv(a.a, !1)
};
jw.prototype.C = function() {
    var a = hw(this.b.j(), !1),
        b = this.b.Y().length;
    this.o = 0 != b && 0 == a[0] && a[1] == b
};
jw.prototype.G = function() {
    this.o && lw(this)
};
var mw = function(a, b, c, d, e, f, g, k) {
    X.call(this);
    this.c = Km.M();
    this.R = a;
    this.N = b;
    this.W = c;
    this.V = d;
    this.X = e;
    this.b = f;
    this.m = g;
    this.h = null != k ? k : null;
    this.F = K.M();
    this.w = !1
};
t(mw, X);
mw.prototype.setVisible = function(a) {
    a && !this.w ? (this.c.log("community-promo", "show-" + this.b), wm(this.F, this.m), V(this.g, !0)) : V(this.g, !1)
};
mw.prototype.Da = function(a) {
    mw.D.Da.call(this, a);
    this.g = Mo(fo, {
        um: this.R,
        tm: this.N,
        Wn: this.W,
        Nn: this.V,
        url: this.X,
        id: this.b
    });
    a.appendChild(this.g);
    var b = B("cp-dismiss", a);
    Y(this).listen(b, "click", this.C);
    a = B("cp-promo-href", a);
    Y(this).listen(a, "click", this.K)
};
mw.prototype.C = function() {
    this.c.log("community-promo", "dismiss-" + this.b);
    Om(this.c, "/translate/uc?ua=dcp&uav=" + this.b);
    var a = this.F;
    L(a, vm(a, 74, this.m));
    this.setVisible(!1);
    this.w = !0
};
mw.prototype.K = function(a) {
    this.c.log("community-promo", "click-" + this.b);
    xm(this.F, this.m);
    this.h && this.h.a() && (this.h.reset(), a.preventDefault(), a.stopPropagation())
};
var nw = function(a, b) {
    this.a = a;
    this.b = b || null
};
nw.prototype.Ua = function() {
    return this.a
};
nw.prototype.tb = function() {
    return this.b
};
var ow = function() {};
t(ow, Hr);
Ha(ow);
h = ow.prototype;
h.Zc = function() {
    return "menuitem"
};
h.kb = function(a) {
    var b = D("DIV", null, a.Ua());
    R(b, "gt-is-sg");
    var c = D("DIV", null, "");
    R(c, a.ni ? "gt-is-ld-top" : "gt-is-ld");
    c = ["DIV", Kr(this, a), c];
    var d = D("SPAN");
    if (a.Pc) {
        var e = new us(null, new ut);
        e.render(d);
        R(e.j(), "gt-is-flag");
        Us(e.j(), a.Ig, void 0);
        e.setVisible(!1);
        a.Vb = e;
        d.id = Kp(e)
    }
    e = D("DIV");
    R(e, "gt-is-ca");
    var f = new us;
    f.v = e;
    a.oc = f;
    c = c.concat([b, d, e]);
    a.qn && (b = D("DIV", null, a.tb()), c.push(b), R(b, "gt-is-tr"));
    b = D.apply(null, c);
    b.id = Kp(a);
    return a.v = b
};
h.Yc = function(a) {
    return "DIV" == a.tagName
};
h.wa = function() {
    return "gt-is-itm"
};
h.xd = function(a, b, c) {
    ow.D.xd.call(this, a, b, c);
    2 == b && a.Pc && a.Vb && !a.Ld && a.Vb.setVisible(c)
};
var pw = function(a, b, c, d, e, f, g) {
    Z.call(this, a.Ua(), f || ow.M(), g);
    this.Zd = a;
    this.Pc = b;
    this.Ig = c;
    this.oc = null;
    this.ni = d;
    this.qn = e;
    this.Ld = !1;
    this.Oa(1, !1)
};
t(pw, Z);
pw.prototype.Ua = function() {
    return this.Zd.Ua()
};
pw.prototype.tb = function() {
    return this.Zd.tb()
};
pw.prototype.vb = function(a) {
    this.Pc && sg(this.Vb.j(), a.target) ? (this.Ld = !0, this.Vb.vb(a)) : this.oc && sg(this.oc.j(), a.target) ? this.oc.vb(a) : pw.D.vb.call(this, a)
};
pw.prototype.Db = function(a) {
    if (this.oc && sg(this.oc.j(), a.target)) this.oc.Db(a);
    else if (this.Pc && sg(this.Vb.j(), a.target) && this.Ld) this.Vb.Db(a), this.Ld = !1, this.Ea(2) || this.Vb.setVisible(!1);
    else {
        if (this.Pc) {
            var b = this.getParent();
            w(b.b, function(c) {
                c.Ld && (c.Ld = !1, ns(c.Vb, !1));
                c != this && c.Vb.setVisible(!1)
            })
        }
        pw.D.Db.call(this, a)
    }
};
var qw = function(a, b, c, d) {
    var e = "md";
    null != d && d && (e = "m" + e);
    Nq.call(this, a, e, MSG_DEFINITIONS_OF, "", 7);
    this.K = b;
    this.C = null != c ? c : !0
};
t(qw, Nq);
qw.prototype.update = function(a, b, c, d) {
    qw.D.update.call(this, a, b, c, d);
    if (!d || 0 == H(d, 12) && 0 == H(d, 15)) return !1;
    ig(this.b);
    this.Dd();
    this.g = 0;
    a = H(d, 12);
    b = 3 > a;
    for (var e = c = 0; e < H(d, 12); e++) c += (new gq(Ll(d, 12, e))).b();
    c = 5 > c ? c : 3;
    for (e = this.w = 0; e < a; ++e) {
        var f = new gq(Ll(d, 12, e)),
            g = I(new gq(Ll(d, 12, e)), 2),
            k = D("DIV", {
                "class": "gt-cd-pos"
            });
        this.b.appendChild(k);
        E(k, I(f, 0));
        k = d;
        var l = b,
            m = c,
            q = Math.ceil(m / a),
            r = D("DIV", {
                "class": "gt-def-list"
            }),
            u = jc(this.Ba) ? "rtl" : "ltr";
        To(r, {
            direction: u
        });
        for (u = 0; u < f.b(); ++u) {
            var z =
                f.c(u),
                O = I(z, 0),
                W = I(z, 2);
            var Ja = k;
            for (var S = [], Ia = 0; Ia < H(Ja, 11); ++Ia)
                for (var Hd = new Bq(Ll(Ja, 11, Ia)), Xj = 0; Xj < Hd.b(); ++Xj) {
                    var Wc = Hd.c(Xj);
                    if (I(z, 1) == I(Wc, 1)) {
                        for (var bi = [], Ae = 0; Ae < H(Wc, 0); ++Ae) Bb(bi, Ih(Wc, 0, Ae));
                        Bb(S, bi)
                    }
                }
            Ja = S;
            if (z = 1 > u || l && u < q && this.w < m) this.w += 1;
            O = rw(this, u + 1, O, W, Ja, z);
            r.appendChild(O);
            this.g += 1
        }
        this.b.appendChild(r)
    }
    for (e = 0; e < H(d, 15); e++) l = new rq(Ll(d, 15, e)), m = I(l, 1), k = I(l, 2), f = D("DIV", {
        "class": "gt-def-row"
    }), m = D("DIV", {
        "class": "gt-kp-desc"
    }, m), q = D("A"), q.setAttribute("href", I(l,
        3)), q.setAttribute("target", "_blank"), l = D("IMG", {
        "class": "gt-kp-image"
    }), l.setAttribute("src", k), q.appendChild(l), f.appendChild(q), f.appendChild(m), this.b.appendChild(f);
    g && (this.gf = g, Oq(this, g));
    if (!b && this.g > 1 * a || b && this.g > c) d = MSG_N_MORE_DEFINITIONS_LABEL.replace("%1$s", (this.g - this.w).toLocaleString(this.Ra)), Pq(this, d, MSG_FEWER_DEFINITIONS_LABEL);
    else
        for (d = Qf("gt-card-expand-wrapper", this.j()), g = 0; g < d.length; g++) a = d[g], B("gt-def-synonym", a) && T(a, "gt-card-expand-wrapper");
    this.setVisible(!0);
    return !0
};
qw.prototype.aa = function() {
    qw.D.aa.call(this);
    Y(this).listen(this.j(), "click", this.R)
};
qw.prototype.Da = function(a) {
    qw.D.Da.call(this, a)
};
var rw = function(a, b, c, d, e, f) {
    var g = jc(a.Ma) ? "rtl" : "ltr";
    b = No(mo, {
        rk: b.toLocaleString(a.Ra),
        Nj: a.K,
        vk: c,
        Mk: d,
        Qn: MSG_SYNONYMS_LOWERCASE,
        Pn: e,
        Gh: g,
        hk: a.C,
        Ba: a.Ba
    });
    a.C && w(Qf("gt-cd-cl", b), function(k) {
        this.c.push(k)
    }, a);
    (c = B("gt-def-synonym-title", b)) && jc(a.Ra) != jc(a.Ba) && (a = jc(a.Ra), To(c, "direction", a ? "rtl" : "ltr"), To(c, "padding-" + (a ? "left" : "right"), "8px"));
    return Qq(b, f)
};
qw.prototype.R = function(a) {
    Go(a.target, "gt-cd-cl") && this.dispatchEvent(new F("a", a.target))
};
qw.prototype.eb = function() {
    return this.C ? this.ze() : this.g
};
var tw = function(a) {
        sw();
        return Pd(a, null)
    },
    uw = function(a) {
        sw();
        return ld(a)
    },
    vw = function(a) {
        sw();
        return tc(a)
    },
    sw = Ga;
var ww = function(a, b, c) {
    var d = "ex";
    c && (d = "m" + d);
    this.K = b;
    Nq.call(this, a, d, MSG_EXAMPLES_OF, MSG_EXAMPLES, 9);
    this.g = new Fq;
    this.C = this.w = "ltr"
};
t(ww, Nq);
ww.prototype.update = function(a, b, c, d) {
    ww.D.update.call(this, a, b, c, d);
    ig(this.b);
    this.g = new Fq(d.a[13]);
    if (0 == H(this.g, 0)) return !1;
    this.setVisible(!0);
    3 <= H(this.g, 0) && (a = MSG_N_MORE_EXAMPLES_LABEL.replace("%1$s", (H(this.g, 0) - 1).toLocaleString(this.Ra)), Pq(this, a, MSG_FEWER_EXAMPLES_LABEL));
    this.w = jc(this.Ba) ? "rtl" : "ltr";
    this.C = jc(this.Ma) ? "rtl" : "ltr";
    for (a = 0; a < H(this.g, 0); ++a) {
        b = 0 == a || 1 == a && 2 == H(this.g, 0);
        var e = new Dq(Ll(this.g, 0, a));
        c = I(e, 0);
        d = e.Be();
        e = I(e, 2);
        var f = MSG_MT_FROM_GOOGLE;
        c = No(ho, {
            Kn: this.w,
            cg: tw(c),
            qm: e,
            rm: d,
            Gh: this.C,
            xo: f,
            Hn: this.K
        });
        b = Qq(c, b);
        this.b.appendChild(b)
    }
    return !0
};
ww.prototype.zj = function() {
    var a = {};
    a.total = H(this.g, 0);
    return a
};
ww.prototype.eb = function() {
    return H(this.g, 0)
};
var xw = null != window.KNOWLEDGE_PANEL,
    yw = null != window.MSG_SPEECH_INPUT_TURN_ON,
    zw = null != window.ADD_INFLECTION;
var Aw;

function Bw() {
    var a = DATA.SentenceGenderLanguagePairs,
        b = DATA.SingleWordGenderLanguagePairs;
    Aw = {};
    if (a)
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            Aw[d.Target] = {};
            Aw[d.Target][d.Source] = !0
        }
    if (b)
        for (c = 0; c < b.length; c++) a = b[c], Aw[a.Target] = {}, Aw[a.Target][a.Source] = !0
}

function Cw(a, b) {
    if ("auto" === a) throw Error('detectedSourceLanguage should not be "auto". Did you mean shouldRequestGenderedTranslations()?');
    return !!Aw[b] && !!Aw[b][a]
};
var Dw = function() {};
Ha(Dw);
var Ew = function(a) {
        a: {
            var b = a.changedTouches[0];
            switch (a.type) {
                case "touchstart":
                    var c = "mousedown";
                    break;
                case "touchmove":
                    c = "mousemove";
                    break;
                case "touchend":
                    c = "mouseup";
                    break;
                default:
                    b = null;
                    break a
            }
            var d = document.createEvent("MouseEvent");d.initMouseEvent(c, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);b = d
        }
        null != b && (a.changedTouches[0].target.dispatchEvent(b), a.preventDefault())
    },
    Fw = Ye || Ze || $e,
    Gw = function(a, b) {
        Fw && (b.addEventListener("touchstart", Ew, !0), b.addEventListener("touchmove",
            Ew, !0), b.addEventListener("touchend", Ew, !0), b.addEventListener("touchcancel", Ew, !0))
    };
var Hw = function(a) {
    this.a = a
};
Ha(Hw);
var Iw = function(a, b) {
    a && (a.tabIndex = b ? 0 : -1)
};
Hw.prototype.c = function(a) {
    return a.a.b("DIV", Jw(this, a).join(" "))
};
Hw.prototype.b = function(a) {
    return a
};
Hw.prototype.Df = function(a) {
    return "DIV" == a.tagName
};
var Mw = function(a, b, c) {
        c.id && Lp(b, c.id);
        var d = a.Ee(),
            e = !1,
            f = Eo(c);
        f && w(f, function(g) {
            g == d ? e = !0 : g && (g == d + "-disabled" ? b.oa(!1) : g == d + "-horizontal" ? Kw(b, "horizontal") : g == d + "-vertical" && Kw(b, "vertical"))
        }, a);
        e || R(c, d);
        Lw(a, b, a.b(c));
        return c
    },
    Lw = function(a, b, c) {
        if (c)
            for (var d = c.firstChild, e; d && d.parentNode == c;) {
                e = d.nextSibling;
                if (1 == d.nodeType) {
                    var f = a.Mg(d);
                    f && (f.v = d, b.isEnabled() || f.oa(!1), b.ib(f), f.ba(d))
                } else d.nodeValue && "" != yc(d.nodeValue) || c.removeChild(d);
                d = e
            }
    };
Hw.prototype.Mg = function(a) {
    a: {
        v(a);a = Eo(a);
        for (var b = 0, c = a.length; b < c; b++) {
            var d = a[b];
            if (d = d in ds ? ds[d]() : null) {
                a = d;
                break a
            }
        }
        a = null
    }
    return a
};
Hw.prototype.Rg = function(a) {
    a = a.j();
    v(a, "The container DOM element cannot be null.");
    tp(a, !0, Ce);
    y && (a.hideFocus = !0);
    var b = this.a;
    b && wo(a, b)
};
Hw.prototype.Ee = function() {
    return "goog-container"
};
var Jw = function(a, b) {
        a = a.Ee();
        var c = [a, "horizontal" == b.Bd ? a + "-horizontal" : a + "-vertical"];
        b.isEnabled() || c.push(a + "-disabled");
        return c
    },
    Nw = function() {
        return "vertical"
    };
var Ow = function(a, b, c) {
    X.call(this, c);
    this.Gc = b || Hw.M();
    this.Bd = a || Nw()
};
t(Ow, X);
h = Ow.prototype;
h.Wd = null;
h.He = null;
h.Gc = null;
h.Bd = null;
h.Hc = !0;
h.Xc = !0;
h.ud = !0;
h.Ka = -1;
h.Za = null;
h.Kc = !1;
h.Bc = null;
var Pw = function(a) {
        return a.Wd || a.j()
    },
    Sw = function(a, b) {
        if (a.ud) {
            var c = Pw(a),
                d = a.ya;
            a.Wd = b;
            var e = Pw(a);
            d && (a.Wd = c, Qw(a, !1), a.Wd = b, Wr(Rw(a), e), Qw(a, !0))
        } else throw Error("Can't set key event target for container that doesn't support keyboard focus!");
    },
    Rw = function(a) {
        return a.He || (a.He = new Xr(Pw(a)))
    };
h = Ow.prototype;
h.Ja = function() {
    this.v = this.Gc.c(this)
};
h.Yb = function() {
    return this.Gc.b(this.j())
};
h.Wc = function(a) {
    return this.Gc.Df(a)
};
h.Da = function(a) {
    this.v = Mw(this.Gc, this, a);
    "none" == a.style.display && (this.Hc = !1)
};
h.aa = function() {
    Ow.D.aa.call(this);
    Qp(this, function(b) {
        b.ya && Tw(this, b)
    }, this);
    var a = this.j();
    this.Gc.Rg(this);
    this.setVisible(this.Hc, !0);
    Y(this).listen(this, "enter", this.Wg).listen(this, "highlight", this.Fe).listen(this, "unhighlight", this.Sg).listen(this, "open", this.El).listen(this, "close", this.Yk).listen(a, Ug.Id, this.vb).listen(Lf(a), [Ug.Jd, Ug.le], this.vl).listen(a, [Ug.Id, Ug.Jd, Ug.le, "mouseover", "mouseout", "contextmenu"], this.cl);
    this.ud && Qw(this, !0)
};
var Qw = function(a, b) {
    var c = Y(a),
        d = Pw(a);
    b ? c.listen(d, "focus", a.Bi).listen(d, "blur", a.Ef).listen(Rw(a), "key", a.Xa) : c.Ga(d, "focus", a.Bi).Ga(d, "blur", a.Ef).Ga(Rw(a), "key", a.Xa)
};
h = Ow.prototype;
h.ab = function() {
    this.Qb(-1);
    this.Za && this.Za.Wa(!1);
    this.Kc = !1;
    Ow.D.ab.call(this)
};
h.T = function() {
    Ow.D.T.call(this);
    this.He && (this.He.Ia(), this.He = null);
    this.Gc = this.Za = this.Bc = this.Wd = null
};
h.Wg = function() {
    return !0
};
h.Fe = function(a) {
    var b = Up(this, a.target);
    if (-1 < b && b != this.Ka) {
        var c = Uw(this);
        c && c.Mb(!1);
        this.Ka = b;
        c = Uw(this);
        this.Kc && ns(c, !0);
        this.Za && c != this.Za && (Pr(c, 64) ? c.Wa(!0) : this.Za.Wa(!1))
    }
    b = this.j();
    v(b, "The DOM element for the container cannot be null.");
    null != a.target.j() && yo(b, "activedescendant", a.target.j().id)
};
h.Sg = function(a) {
    a.target == Uw(this) && (this.Ka = -1);
    a = this.j();
    v(a, "The DOM element for the container cannot be null.");
    a.removeAttribute(xo("activedescendant"))
};
h.El = function(a) {
    (a = a.target) && a != this.Za && a.getParent() == this && (this.Za && this.Za.Wa(!1), this.Za = a)
};
h.Yk = function(a) {
    a.target == this.Za && (this.Za = null);
    var b = this.j(),
        c = a.target.j();
    b && a.target.Ea(2) && c && Bo(b, c)
};
h.vb = function(a) {
    this.Xc && (this.Kc = !0);
    var b = Pw(this);
    b && Bg(b) && Cg(b) ? b.focus() : a.preventDefault()
};
h.vl = function() {
    this.Kc = !1
};
h.cl = function(a) {
    a: {
        var b = a.target;
        if (this.Bc)
            for (var c = this.j(); b && b !== c;) {
                var d = b.id;
                if (d in this.Bc) {
                    b = this.Bc[d];
                    break a
                }
                b = b.parentNode
            }
        b = null
    }
    if (b) switch (a.type) {
        case Ug.Id:
            b.vb(a);
            break;
        case Ug.Jd:
        case Ug.le:
            b.Db(a);
            break;
        case "mouseover":
            b.Ie(a);
            break;
        case "mouseout":
            b.Zg(a);
            break;
        case "contextmenu":
            b.Me(a)
    }
};
h.Bi = function() {};
h.Ef = function() {
    this.Qb(-1);
    this.Kc = !1;
    this.Za && this.Za.Wa(!1)
};
h.Xa = function(a) {
    return this.isEnabled() && this.isVisible() && (0 != Rp(this) || this.Wd) && this.Ge(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
h.Ge = function(a) {
    var b = Uw(this);
    if (b && "function" == typeof b.Xa && b.Xa(a) || this.Za && this.Za != b && "function" == typeof this.Za.Xa && this.Za.Xa(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.keyCode) {
        case 27:
            if (this.ud) Pw(this).blur();
            else return !1;
            break;
        case 36:
            Vw(this);
            break;
        case 35:
            Ww(this);
            break;
        case 38:
            if ("vertical" == this.Bd) Xw(this);
            else return !1;
            break;
        case 37:
            if ("horizontal" == this.Bd) Tp(this) ? Yw(this) : Xw(this);
            else return !1;
            break;
        case 40:
            if ("vertical" == this.Bd) Yw(this);
            else return !1;
            break;
        case 39:
            if ("horizontal" == this.Bd) Tp(this) ? Xw(this) : Yw(this);
            else return !1;
            break;
        default:
            return !1
    }
    return !0
};
var Tw = function(a, b) {
    var c = b.j();
    c = c.id || (c.id = Kp(b));
    a.Bc || (a.Bc = {});
    a.Bc[c] = b
};
Ow.prototype.ib = function(a, b) {
    ib(a, Z, "The child of a container must be a control");
    Ow.D.ib.call(this, a, b)
};
Ow.prototype.pd = function(a, b, c) {
    ib(a, Z);
    a.Se |= 2;
    a.Se |= 64;
    a.Oa(32, !1);
    hs(a, !1);
    var d = a.getParent() == this ? Up(this, a) : -1;
    Ow.D.pd.call(this, a, b, c);
    a.ya && this.ya && Tw(this, a);
    a = d; - 1 == a && (a = Rp(this));
    a == this.Ka ? this.Ka = Math.min(Rp(this) - 1, b) : a > this.Ka && b <= this.Ka ? this.Ka++ : a < this.Ka && b > this.Ka && this.Ka--
};
Ow.prototype.removeChild = function(a, b) {
    a = "string" === typeof a ? Np(this, a) : a;
    ib(a, Z);
    if (a) {
        var c = Up(this, a); - 1 != c && (c == this.Ka ? (a.Mb(!1), this.Ka = -1) : c < this.Ka && this.Ka--);
        var d = a.j();
        d && d.id && this.Bc && (c = this.Bc, d = d.id, d in c && delete c[d])
    }
    a = Ow.D.removeChild.call(this, a, b);
    hs(a, !0);
    return a
};
var Kw = function(a, b) {
    if (a.j()) throw Error("Component already rendered");
    a.Bd = b
};
Ow.prototype.isVisible = function() {
    return this.Hc
};
Ow.prototype.setVisible = function(a, b) {
    if (b || this.Hc != a && this.dispatchEvent(a ? "show" : "hide")) {
        this.Hc = a;
        var c = this.j();
        c && (V(c, a), this.ud && Iw(Pw(this), this.Xc && this.Hc), b || this.dispatchEvent(this.Hc ? "aftershow" : "afterhide"));
        return !0
    }
    return !1
};
Ow.prototype.isEnabled = function() {
    return this.Xc
};
Ow.prototype.oa = function(a) {
    this.Xc != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Xc = !0, Qp(this, function(b) {
        b.Hj ? delete b.Hj : b.oa(!0)
    })) : (Qp(this, function(b) {
        b.isEnabled() ? b.oa(!1) : b.Hj = !0
    }), this.Kc = this.Xc = !1), this.ud && Iw(Pw(this), a && this.Hc))
};
var Zw = function(a, b) {
    b != a.ud && a.ya && Qw(a, b);
    a.ud = b;
    a.Xc && a.Hc && Iw(Pw(a), b)
};
Ow.prototype.Qb = function(a) {
    (a = Sp(this, a)) ? a.Mb(!0): -1 < this.Ka && Uw(this).Mb(!1)
};
var Uw = function(a) {
        return Sp(a, a.Ka)
    },
    Vw = function(a) {
        $w(a, function(b, c) {
            return (b + 1) % c
        }, Rp(a) - 1)
    },
    Ww = function(a) {
        $w(a, function(b, c) {
            b--;
            return 0 > b ? c - 1 : b
        }, 0)
    },
    Yw = function(a) {
        $w(a, function(b, c) {
            return (b + 1) % c
        }, a.Ka)
    },
    Xw = function(a) {
        $w(a, function(b, c) {
            b--;
            return 0 > b ? c - 1 : b
        }, a.Ka)
    },
    $w = function(a, b, c) {
        c = 0 > c ? Up(a, a.Za) : c;
        var d = Rp(a);
        c = b.call(a, c, d);
        for (var e = 0; e <= d;) {
            var f = Sp(a, c);
            if (f && a.ci(f)) {
                a.Qb(c);
                break
            }
            e++;
            c = b.call(a, c, d)
        }
    };
Ow.prototype.ci = function(a) {
    return a.isVisible() && a.isEnabled() && Pr(a, 2)
};
var ax = function() {};
t(ax, Hr);
Ha(ax);
ax.prototype.wa = function() {
    return "goog-menuheader"
};
var bx = function(a, b, c) {
    Z.call(this, a, c || ax.M(), b);
    this.Oa(1, !1);
    this.Oa(2, !1);
    this.Oa(4, !1);
    this.Oa(32, !1);
    this.ad = 1
};
t(bx, Z);
es("goog-menuheader", function() {
    return new bx(null)
});
var cx = function() {
    this.c = []
};
t(cx, Hr);
Ha(cx);
var dx = function(a, b) {
    var c = a.c[b];
    if (!c) {
        switch (b) {
            case 0:
                c = a.wa() + "-highlight";
                break;
            case 1:
                c = a.wa() + "-checkbox";
                break;
            case 2:
                c = a.wa() + "-content"
        }
        a.c[b] = c
    }
    return c
};
h = cx.prototype;
h.Zc = function() {
    return "menuitem"
};
h.kb = function(a) {
    var b = a.a.b("DIV", Kr(this, a).join(" "), ex(this, a.Sa(), a.a));
    fx(this, a, b, Pr(a, 8) || Pr(a, 16));
    return b
};
h.Cb = function(a) {
    return a && a.firstChild
};
h.Va = function(a, b) {
    v(b);
    var c = pg(b),
        d = dx(this, 2);
    c && Go(c, d) || b.appendChild(ex(this, b.childNodes, a.a));
    Go(b, "goog-option") && (a.Oa(16, !0), a && b && fx(this, a, b, !0));
    return cx.D.Va.call(this, a, b)
};
h.Lb = function(a, b) {
    var c = this.Cb(a),
        d = gx(this, a) ? c.firstChild : null;
    cx.D.Lb.call(this, a, b);
    d && !gx(this, a) && c.insertBefore(d, c.firstChild || null)
};
var ex = function(a, b, c) {
        a = dx(a, 2);
        return c.b("DIV", a, b)
    },
    gx = function(a, b) {
        return (b = a.Cb(b)) ? (b = b.firstChild, a = dx(a, 1), !!b && qg(b) && Go(b, a)) : !1
    },
    fx = function(a, b, c, d) {
        Or(a, c, b.C());
        Qr(a, b, c);
        d != gx(a, c) && (U(c, "goog-option", d), c = a.Cb(c), d ? (a = dx(a, 1), c.insertBefore(b.a.b("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
    };
cx.prototype.a = function(a) {
    switch (a) {
        case 2:
            return dx(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return cx.D.a.call(this, a)
    }
};
cx.prototype.g = function(a) {
    var b = dx(this, 0);
    switch (a) {
        case "goog-option-selected":
            return 16;
        case b:
            return 2;
        default:
            return cx.D.g.call(this, a)
    }
};
cx.prototype.wa = function() {
    return "goog-menuitem"
};
var hx = function(a, b, c, d) {
    Z.call(this, a, d || cx.M(), c);
    this.na = b
};
t(hx, Z);
h = hx.prototype;
h.Y = function() {
    var a = this.na;
    return null != a ? a : this.rb()
};
h.Oa = function(a, b) {
    hx.D.Oa.call(this, a, b);
    switch (a) {
        case 8:
            this.Ea(16) && !b && this.bd(!1);
            (a = this.j()) && this && a && fx(this.c, this, a, b);
            break;
        case 16:
            (a = this.j()) && this && a && fx(this.c, this, a, b)
    }
};
h.rb = function() {
    var a = this.Sa();
    return La(a) ? (a = tb(a, function(b) {
        return qg(b) && (Go(b, "goog-menuitem-accel") || Go(b, "goog-menuitem-mnemonic-separator")) ? "" : Fg(b)
    }).join(""), de(a)) : hx.D.rb.call(this)
};
h.Db = function(a) {
    var b = this.getParent();
    if (b) {
        var c = b.X;
        b.X = null;
        if (b = c && "number" === typeof a.clientX) b = new Hf(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.a == b.a : !1;
        if (b) return
    }
    hx.D.Db.call(this, a)
};
h.Rd = function(a) {
    return a.keyCode == this.mh && this.xc(a) ? !0 : hx.D.Rd.call(this, a)
};
h.Vk = function() {
    return this.mh
};
es("goog-menuitem", function() {
    return new hx(null)
});
hx.prototype.C = function() {
    return Pr(this, 16) ? "menuitemcheckbox" : Pr(this, 8) ? "menuitemradio" : hx.D.C.call(this)
};
hx.prototype.getParent = function() {
    return Z.prototype.getParent.call(this)
};
hx.prototype.Nd = function() {
    return Z.prototype.Nd.call(this)
};
var ix = function() {};
t(ix, Hr);
Ha(ix);
ix.prototype.kb = function(a) {
    return a.a.b("DIV", this.wa())
};
ix.prototype.Va = function(a, b) {
    b.id && Lp(a, b.id);
    if ("HR" == b.tagName) {
        var c = b;
        b = this.kb(a);
        jg(b, c);
        mg(c)
    } else R(b, this.wa());
    return b
};
ix.prototype.Lb = function() {};
ix.prototype.wa = function() {
    return "goog-menuseparator"
};
var jx = function(a, b) {
    Z.call(this, null, a || ix.M(), b);
    this.Oa(1, !1);
    this.Oa(2, !1);
    this.Oa(4, !1);
    this.Oa(32, !1);
    this.ad = 1
};
t(jx, Z);
jx.prototype.aa = function() {
    jx.D.aa.call(this);
    var a = this.j();
    v(a, "The DOM element for the separator cannot be null.");
    wo(a, "separator")
};
es("goog-menuseparator", function() {
    return new jx
});
var kx = function(a) {
    this.a = a || "menu"
};
t(kx, Hw);
Ha(kx);
h = kx.prototype;
h.Df = function(a) {
    return "UL" == a.tagName || kx.D.Df.call(this, a)
};
h.Mg = function(a) {
    return "HR" == a.tagName ? new jx : kx.D.Mg.call(this, a)
};
h.mc = function(a, b) {
    return sg(a.j(), b)
};
h.Ee = function() {
    return "goog-menu"
};
h.Rg = function(a) {
    kx.D.Rg.call(this, a);
    a = a.j();
    v(a, "The menu DOM element cannot be null.");
    yo(a, "haspopup", "true")
};
var lx = function(a) {
    jx.call(this, ix.M(), a)
};
t(lx, jx);
es("goog-menuseparator", function() {
    return new jx
});
var mx = function(a, b) {
    Ow.call(this, "vertical", b || kx.M(), a);
    Zw(this, !1)
};
t(mx, Ow);
h = mx.prototype;
h.me = !0;
h.mc = function(a) {
    if (this.Gc.mc(this, a)) return !0;
    for (var b = 0, c = Rp(this); b < c; b++) {
        var d = Sp(this, b);
        if ("function" == typeof d.mc && d.mc(a)) return !0
    }
    return !1
};
h.eb = function() {
    return Rp(this)
};
h.setVisible = function(a, b, c) {
    (b = mx.D.setVisible.call(this, a, b)) && a && this.ya && this.me && Pw(this).focus();
    a && c && "number" === typeof c.clientX ? this.X = new Hf(c.clientX, c.clientY) : this.X = null;
    return b
};
h.Wg = function(a) {
    this.me && Pw(this).focus();
    return mx.D.Wg.call(this, a)
};
h.Oi = function(a) {
    var b = new RegExp("^" + le(a), "i");
    $w(this, function(c, d) {
        var e = 0 > c ? 0 : c,
            f = !1;
        do {
            ++c;
            c == d && (c = 0, f = !0);
            var g = Sp(this, c).rb();
            if (g && g.match(b)) return c
        } while (!f || c != e);
        return this.Ka
    }, this.Ka)
};
h.ci = function(a) {
    return a.isEnabled() && a.isVisible() && Pr(a, 2)
};
h.Da = function(a) {
    for (var b = this.Gc, c = Pf(this.a.a, "DIV", b.Ee() + "-content", a), d = c.length, e = 0; e < d; e++) Lw(b, this, c[e]);
    mx.D.Da.call(this, a)
};
h.Ge = function(a) {
    var b = mx.D.Ge.call(this, a);
    b || Qp(this, function(c) {
        !b && c.Vk && c.mh == a.keyCode && (this.isEnabled() && this.Qb(Up(this, c)), b = c.Xa(a))
    }, this);
    return b
};
h.Qb = function(a) {
    mx.D.Qb.call(this, a);
    (a = Sp(this, a)) && gp(a.j(), this.j())
};
var nx = function(a, b, c) {
    hx.call(this, a, b, c);
    this.Oa(8, !0)
};
t(nx, hx);
nx.prototype.xc = function() {
    return this.dispatchEvent("action")
};
es("goog-option", function() {
    return new nx(null)
});
var ox = function() {};
t(ox, vs);
Ha(ox);
ox.prototype.Cb = function(a) {
    return ox.D.Cb.call(this, a && a.firstChild)
};
ox.prototype.Va = function(a, b) {
    var c = Pf(document, "*", "goog-menu", b)[0];
    if (c) {
        V(c, !1);
        gg(Lf(c).body, c);
        var d = new mx;
        d.ba(c);
        a.Ke(d)
    }
    return ox.D.Va.call(this, a, b)
};
ox.prototype.kf = function(a, b) {
    return ox.D.kf.call(this, [b.b("DIV", "goog-inline-block " + (this.wa() + "-caption"), a), b.b("DIV", "goog-inline-block " + (this.wa() + "-dropdown"), "\u00a0")], b)
};
ox.prototype.wa = function() {
    return "goog-menu-button"
};
var px = function() {
    this.c = []
};
t(px, cx);
Ha(px);
px.prototype.kb = function(a) {
    var b = px.D.kb.call(this, a);
    v(b);
    R(b, "goog-submenu");
    qx(this, a, b);
    return b
};
px.prototype.Va = function(a, b) {
    b = px.D.Va.call(this, a, b);
    v(b);
    R(b, "goog-submenu");
    qx(this, a, b);
    var c = Pf(document, "DIV", "goog-menu", b);
    if (c.length) {
        var d = new mx(a.a);
        c = c[0];
        V(c, !1);
        a.a.a.body.appendChild(c);
        d.ba(c);
        rx(a, d)
    }
    return b
};
px.prototype.Lb = function(a, b) {
    var c = this.Cb(a),
        d = c && c.lastChild;
    px.D.Lb.call(this, a, b);
    d && c.lastChild != d && Go(d, "goog-submenu-arrow") && c.appendChild(d)
};
px.prototype.Ff = function(a) {
    px.D.Ff.call(this, a);
    var b = a.Yb(),
        c = Pf(a.a.a, "SPAN", "goog-submenu-arrow", b)[0];
    sx(a, c);
    c != b.lastChild && b.appendChild(c);
    a = a.j();
    v(a, "The sub menu DOM element cannot be null.");
    yo(a, "haspopup", "true")
};
var qx = function(a, b, c) {
        var d = b.a.b("SPAN");
        d.className = "goog-submenu-arrow";
        sx(b, d);
        a.Cb(c).appendChild(d)
    },
    sx = function(a, b) {
        v(b);
        Tp(a) ? (R(b, "goog-submenu-arrow-rtl"), E(b, "\u25c4")) : (T(b, "goog-submenu-arrow-rtl"), E(b, "\u25ba"))
    };
var ux = function(a, b, c) {
    this.a = a;
    this.g = b;
    this.w = c
};
t(ux, Ds);
ux.prototype.b = function(a, b, c) {
    Is(this.a, this.g, a, b, void 0, c, this.w)
};
var vx = function(a, b, c, d) {
    ux.call(this, a, b);
    this.h = c ? 5 : 0;
    this.o = d || void 0
};
t(vx, ux);
vx.prototype.m = function() {
    return this.h
};
vx.prototype.c = function(a) {
    this.h = a
};
vx.prototype.b = function(a, b, c, d) {
    var e = Is(this.a, this.g, a, b, null, c, 10, d, this.o);
    if (e & 496) {
        var f = wx(e, this.g);
        b = wx(e, b);
        e = Is(this.a, f, a, b, null, c, 10, d, this.o);
        e & 496 && (f = wx(e, f), b = wx(e, b), Is(this.a, f, a, b, null, c, this.h, d, this.o))
    }
};
var wx = function(a, b) {
    a & 48 && (b ^= 4);
    a & 192 && (b ^= 1);
    return b
};
var xx = function(a, b, c, d) {
    hx.call(this, a, b, c, d || px.M())
};
t(xx, hx);
h = xx.prototype;
h.we = null;
h.Ah = null;
h.kh = !1;
h.cb = null;
h.pf = !1;
h.aa = function() {
    xx.D.aa.call(this);
    Y(this).listen(this.getParent(), "hide", this.bj);
    this.cb && yx(this, this.cb, !0)
};
h.ab = function() {
    Y(this).Ga(this.getParent(), "hide", this.bj);
    this.cb && (yx(this, this.cb, !1), this.pf || (this.cb.ab(), mg(this.cb.j())));
    xx.D.ab.call(this)
};
h.T = function() {
    this.cb && !this.pf && this.cb.Ia();
    this.cb = null;
    xx.D.T.call(this)
};
h.Mb = function(a) {
    xx.D.Mb.call(this, a);
    a || (this.we && Gi(this.we), this.we = Fi(this.Cc, 218, this))
};
h.yh = function() {
    var a = this.getParent();
    a && Uw(a) == this && (zx(this, !0), Ax(this))
};
h.Cc = function() {
    var a = this.cb;
    a && a.getParent() == this && (zx(this, !1), Qp(a, function(b) {
        "function" == typeof b.Cc && b.Cc()
    }))
};
var Bx = function(a) {
    a.we && Gi(a.we);
    a.Ah && Gi(a.Ah)
};
xx.prototype.setVisible = function(a, b) {
    (a = xx.D.setVisible.call(this, a, b)) && !this.isVisible() && this.Cc();
    return a
};
var Ax = function(a) {
    Qp(a.getParent(), function(b) {
        b != this && "function" == typeof b.Cc && (b.Cc(), Bx(b))
    }, a)
};
h = xx.prototype;
h.Xa = function(a) {
    var b = a.keyCode,
        c = Tp(this) ? 37 : 39,
        d = Tp(this) ? 39 : 37;
    if (!this.kh) {
        if (!this.isEnabled() || b != c && 13 != b && b != this.mh) return !1;
        this.yh();
        Vw(Cx(this));
        Bx(this)
    } else if (!Cx(this).Xa(a))
        if (b == d) this.Cc();
        else return !1;
    a.preventDefault();
    return !0
};
h.Rm = function() {
    if (this.cb.getParent() == this) {
        Bx(this);
        var a = this.Nd();
        a.Qb(Up(a, this));
        Ax(this)
    }
};
h.bj = function(a) {
    a.target == this.Nd() && (this.Cc(), Bx(this))
};
h.Ie = function(a) {
    this.isEnabled() && (Bx(this), this.Ah = Fi(this.yh, 218, this));
    xx.D.Ie.call(this, a)
};
h.xc = function(a) {
    Bx(this);
    if (Pr(this, 8) || Pr(this, 16)) return xx.D.xc.call(this, a);
    this.yh();
    return !0
};
var zx = function(a, b) {
        !b && Cx(a) && Cx(a).Qb(-1);
        a.dispatchEvent(Jp(64, b));
        var c = Cx(a);
        b != a.kh && U(v(a.j()), "goog-submenu-open", b);
        if (b != c.isVisible() && (b && (c.ya || c.render(), c.Qb(-1)), c.setVisible(b), b)) {
            c = new vx(a.j(), 12, !1);
            var d = Cx(a),
                e = d.j();
            d.isVisible() || (e.style.visibility = "hidden", V(e, !0));
            c.b(e, 8);
            d.isVisible() || (V(e, !1), e.style.visibility = "visible")
        }
        a.kh = b
    },
    yx = function(a, b, c) {
        var d = Y(a);
        (c ? d.listen : d.Ga).call(d, b, "enter", a.Rm)
    };
xx.prototype.eb = function() {
    return Rp(Cx(this))
};
var Cx = function(a) {
        a.cb ? a.pf && a.cb.getParent() != a && Op(a.cb, a) : rx(a, new mx(a.a));
        a.cb.j() || a.cb.Ja();
        return a.cb
    },
    rx = function(a, b) {
        var c = a.cb;
        b != c && (c && (a.Cc(), a.ya && yx(a, c, !1)), a.cb = b, a.pf = !1, b && (Op(b, a), b.setVisible(!1, !0), b.me = !1, Zw(b, !1), a.ya && yx(a, b, !0)))
    };
xx.prototype.mc = function(a) {
    return Cx(this).mc(a)
};
es("goog-submenu", function() {
    return new xx(null)
});
var Dx = function(a, b, c, d) {
    vx.call(this, a, b, c || d);
    (c || d) && this.c(65 | (d ? 32 : 132))
};
t(Dx, vx);
var Ex = function(a, b, c, d, e) {
    us.call(this, a, c || ox.M(), d);
    this.Oa(64, !0);
    this.m = new Dx(null, 9);
    b && this.Ke(b);
    this.ra = null;
    this.N = new Di(500);
    !Ye && !Ze || Te("533.17.9") || (this.Uf = !0);
    this.md = e || kx.M()
};
t(Ex, us);
h = Ex.prototype;
h.Uf = !1;
h.aa = function() {
    Ex.D.aa.call(this);
    Fx(this, !0);
    this.b && Gx(this, this.b, !0);
    yo(Mp(this), "haspopup", !!this.b)
};
h.ab = function() {
    Ex.D.ab.call(this);
    Fx(this, !1);
    if (this.b) {
        this.Wa(!1);
        this.b.ab();
        Gx(this, this.b, !1);
        var a = this.b.j();
        a && mg(a)
    }
};
h.T = function() {
    Ex.D.T.call(this);
    this.b && (this.b.Ia(), delete this.b);
    delete this.xb;
    this.N.Ia()
};
h.vb = function(a) {
    Ex.D.vb.call(this, a);
    this.mb() && (this.Wa(!this.Ea(64), a), this.b && (this.b.Kc = this.Ea(64)))
};
h.Db = function(a) {
    Ex.D.Db.call(this, a);
    this.b && !this.mb() && (this.b.Kc = !1)
};
h.xc = function() {
    ns(this, !1);
    return !0
};
h.ul = function(a) {
    this.b && this.b.isVisible() && !this.mc(a.target) && this.Wa(!1)
};
h.mc = function(a) {
    return a && sg(this.j(), a) || this.b && this.b.mc(a) || !1
};
h.Rd = function(a) {
    if (32 == a.keyCode) {
        if (a.preventDefault(), "keyup" != a.type) return !0
    } else if ("key" != a.type) return !1;
    if (this.b && this.b.isVisible()) {
        var b = 13 == a.keyCode || 32 == a.keyCode,
            c = this.b.Xa(a);
        return c && this.b && this.b.Za instanceof xx || 27 != a.keyCode && !b ? c : (this.Wa(!1), !0)
    }
    return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.Wa(!0, a), !0) : !1
};
h.Xg = function() {
    this.Wa(!1)
};
h.Cl = function() {
    this.mb() || this.Wa(!1)
};
h.Hf = function(a) {
    this.Uf || this.Wa(!1);
    Ex.D.Hf.call(this, a)
};
var Hx = function(a) {
    a.b || a.Ke(new mx(a.a, a.md));
    return a.b || null
};
Ex.prototype.Ke = function(a) {
    var b = this.b;
    if (a != b && (b && (this.Wa(!1), this.ya && Gx(this, b, !1), delete this.b), this.ya && yo(Mp(this), "haspopup", !!a), a)) {
        this.b = a;
        Op(a, this);
        a.setVisible(!1);
        var c = this.Uf;
        (a.me = c) && Zw(a, !0);
        this.ya && Gx(this, a, !0)
    }
    return b
};
var Ix = function(a, b) {
        b && (a.m = b, a.xb = b.a)
    },
    Jx = function(a, b) {
        a.ra = b
    };
h = Ex.prototype;
h.Je = function(a) {
    Hx(this).ib(a, !0)
};
h.eb = function() {
    return this.b ? Rp(this.b) : 0
};
h.setVisible = function(a, b) {
    (a = Ex.D.setVisible.call(this, a, b)) && !this.isVisible() && this.Wa(!1);
    return a
};
h.oa = function(a) {
    Ex.D.oa.call(this, a);
    this.isEnabled() || this.Wa(!1)
};
h.Wa = function(a, b) {
    Ex.D.Wa.call(this, a);
    if (this.b && this.Ea(64) == a) {
        if (a) this.b.ya || this.b.render(), this.X = dp(this.j()), this.nb = mp(this.j()), Kx(this), !b || 40 != b.keyCode && 38 != b.keyCode ? this.b.Qb(-1) : Vw(this.b);
        else {
            ns(this, !1);
            this.b.Kc = !1;
            var c = this.j();
            c && (yo(c, "activedescendant", ""), yo(c, "owns", ""));
            null != this.R && (this.R = void 0, (c = this.b.j()) && kp(c, "", ""))
        }
        this.b.setVisible(a, !1, b);
        this.isDisposed() || (b = Y(this), c = a ? b.listen : b.Ga, c.call(b, this.a.a, "mousedown", this.ul, !0), this.Uf && c.call(b, this.b, "blur",
            this.Cl), c.call(b, this.N, "tick", this.jd), a ? this.N.start() : this.N.stop())
    }
    this.b && this.b.j() && Mp(this.b).removeAttribute(xo("hidden"))
};
var Kx = function(a) {
    if (a.b.ya) {
        var b = a.m;
        a.m.a = a.xb || a.j();
        var c = a.b.j();
        a.b.isVisible() || (c.style.visibility = "hidden", V(c, !0));
        !a.R && a.m.m && a.m.h & 32 && (a.R = lp(c));
        b.b(c, b.g ^ 1, a.ra, a.R);
        a.b.isVisible() || (V(c, !1), c.style.visibility = "visible")
    }
};
Ex.prototype.jd = function() {
    var a = mp(this.j()),
        b = dp(this.j());
    var c = this.nb;
    (c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.X, c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
    if (c) {
        if (c = this.b.ya && b && this.X) c = this.X, c = b.right - b.left < c.right - c.left;
        c && (c = this.b.j(), this.b.isVisible() || (c.style.visibility = "hidden", V(c, !0)), Yo(c, new Hf(0, 0)));
        this.nb = a;
        this.X = b;
        Kx(this)
    }
};
var Gx = function(a, b, c) {
        var d = Y(a);
        c = c ? d.listen : d.Ga;
        c.call(d, b, "action", a.Xg);
        c.call(d, b, "close", a.yc);
        c.call(d, b, "highlight", a.fd);
        c.call(d, b, "unhighlight", a.hd)
    },
    Fx = function(a, b) {
        var c = Y(a);
        (b ? c.listen : c.Ga).call(c, a.j(), "keydown", a.kd)
    };
Ex.prototype.fd = function(a) {
    (a = a.target.j()) && Lx(this, a)
};
Ex.prototype.kd = function(a) {
    Pr(this, 32) && this.j() && this.b && this.b.isVisible() && a.stopPropagation()
};
Ex.prototype.hd = function() {
    if (!Uw(this.b)) {
        var a = this.j();
        v(a, "The menu button DOM element cannot be null.");
        yo(a, "activedescendant", "");
        yo(a, "owns", "")
    }
};
Ex.prototype.yc = function(a) {
    if (this.Ea(64) && a.target instanceof hx) {
        a = a.target;
        var b = a.j();
        a.isVisible() && a.Ea(2) && null != b && Lx(this, b)
    }
};
var Lx = function(a, b) {
    a = a.j();
    v(a, "The menu button DOM element cannot be null.");
    b = Ao(b) || b;
    if (!b.id) {
        var c = Hp.M();
        b.id = ":" + (c.a++).toString(36)
    }
    Bo(a, b);
    yo(a, "owns", b.id)
};
es("goog-menu-button", function() {
    return new Ex(null)
});
var Nx = function(a) {
    J.call(this);
    this.a = [];
    Mx(this, a)
};
t(Nx, J);
Nx.prototype.b = null;
Nx.prototype.eb = function() {
    return this.a.length
};
var Mx = function(a, b) {
        b && (w(b, function(c) {
            Ox(c, !1)
        }, a), Hb(a.a, b))
    },
    Px = function(a, b, c) {
        b && (Ox(b, !1), Jb(a.a, c, 0, b))
    },
    Qx = function(a) {
        var b = a.b;
        return b ? rb(a.a, b) : -1
    },
    Rx = function(a) {
        var b = a.a;
        if (!La(b))
            for (var c = b.length - 1; 0 <= c; c--) delete b[c];
        b.length = 0;
        a.b = null
    };
Nx.prototype.T = function() {
    Nx.D.T.call(this);
    delete this.a;
    this.b = null
};
var Ox = function(a, b) {
    a && "function" == typeof a.cd && a.cd(b)
};
var Sx = function(a, b, c, d, e) {
    Ex.call(this, a, b, c, d, e || new kx("listbox"));
    this.Z = this.Sa();
    this.xa = null;
    this.Vg = "listbox"
};
t(Sx, Ex);
h = Sx.prototype;
h.Ha = null;
h.aa = function() {
    Sx.D.aa.call(this);
    Tx(this);
    Ux(this)
};
h.Da = function(a) {
    Sx.D.Da.call(this, a);
    (a = this.rb()) ? (this.Z = a, Tx(this)) : Vx(this) || Wx(this, 0)
};
h.T = function() {
    Sx.D.T.call(this);
    this.Ha && (this.Ha.Ia(), this.Ha = null);
    this.Z = null
};
h.Xg = function(a) {
    Xx(this, a.target);
    Sx.D.Xg.call(this, a);
    a.stopPropagation();
    this.dispatchEvent("action")
};
h.Hl = function() {
    var a = Vx(this);
    Sx.D.Cf.call(this, a && a.Y());
    Tx(this)
};
h.Ke = function(a) {
    var b = Sx.D.Ke.call(this, a);
    a != b && (this.Ha && Rx(this.Ha), a && (this.Ha ? Qp(a, function(c) {
        Yx(c);
        var d = this.Ha;
        Px(d, c, d.eb())
    }, this) : Zx(this, a)));
    return b
};
h.Je = function(a) {
    Yx(a);
    Sx.D.Je.call(this, a);
    if (this.Ha) {
        var b = this.Ha;
        Px(b, a, b.eb())
    } else Zx(this, Hx(this));
    $x(this)
};
var Xx = function(a, b) {
        if (a.Ha) {
            var c = Vx(a),
                d = a.Ha;
            b != d.b && (Ox(d.b, !1), d.b = b, Ox(b, !0));
            d.dispatchEvent("select");
            b != c && a.dispatchEvent("change")
        }
    },
    Wx = function(a, b) {
        a.Ha && Xx(a, a.Ha.a[b] || null)
    };
Sx.prototype.Cf = function(a) {
    if (null != a && this.Ha)
        for (var b = 0, c; c = this.Ha.a[b] || null; b++)
            if (c && "function" == typeof c.Y && c.Y() == a) {
                Xx(this, c);
                return
            } Xx(this, null)
};
Sx.prototype.Y = function() {
    var a = Vx(this);
    return a ? a.Y() : null
};
var Vx = function(a) {
        return a.Ha ? a.Ha.b : null
    },
    Zx = function(a, b) {
        a.Ha = new Nx;
        b && Qp(b, function(c) {
            Yx(c);
            var d = this.Ha;
            Px(d, c, d.eb())
        }, a);
        Ux(a)
    },
    Ux = function(a) {
        a.Ha && Y(a).listen(a.Ha, "select", a.Hl)
    },
    Tx = function(a) {
        var b = Vx(a);
        a.g(b ? b.rb() : a.Z);
        var c = a.c.Cb(a.j());
        c && a.a.jm(c) && (null == a.xa && (a.xa = zo(c, "label")), b = b ? b.j() : null, Co(c, b ? zo(b, "label") : a.xa), $x(a))
    },
    $x = function(a) {
        var b = a.c;
        if (b && (b = b.Cb(a.j()))) {
            var c = Mp(a);
            b.id || (b.id = ":" + (Hp.M().a++).toString(36));
            wo(b, "option");
            yo(b, "selected", !0);
            yo(c, "activedescendant",
                b.id);
            a.Ha && (c = Gb(a.Ha.a), yo(b, "setsize", ay(c)), a = Qx(a.Ha), yo(b, "posinset", 0 <= a ? ay(Ib(c, 0, a + 1)) : 0))
        }
    },
    ay = function(a) {
        return xb(a, function(b) {
            return b instanceof hx
        })
    },
    Yx = function(a) {
        a.Vg = a instanceof hx ? "option" : "separator"
    };
Sx.prototype.Wa = function(a, b) {
    Sx.D.Wa.call(this, a, b);
    this.Ea(64) ? Hx(this).Qb(this.Ha ? Qx(this.Ha) : -1) : $x(this)
};
es("goog-select", function() {
    return new Sx(null)
});
var dy = function(a, b, c, d, e, f, g, k, l) {
    c = new by(c);
    Sx.call(this, "", c, g, k);
    this.m.c && this.m.c(33);
    this.Ta = a;
    this.$b = a.id;
    Lp(c, this.$b + "-menu");
    this.W = [];
    this.V = null;
    this.Ca = null != f ? f : "";
    this.ld = !!l;
    for (a = 0; a < b.length; a++) {
        var m;
        f = null != d && a < d.length && null != d[a] ? d[a] : b[a];
        "separator" != f ? m = new nx(b[a], f) : m = new lx;
        this.Je(m)
    }
    this.ba(this.Ta);
    a: {
        b = null != e ? e : cy(this, 0);
        for (e = 0; d = this.b ? Sp(this.b, e) : null; e++)
            if (d instanceof hx && d.Y() == b) {
                b = e;
                break a
            } b = -1
    }
    0 <= b && Wx(this, b)
};
t(dy, Sx);
dy.prototype.g = function(a) {
    this.ld ? a = this.Ca : this.Ca && (a = this.Ca + " " + a);
    dy.D.g.call(this, a)
};
var ey = function(a) {
    a.V && (Gi(a.V), a.V = null);
    a.V = Fi(function() {
        a.W = []
    }, 1E3)
};
dy.prototype.T = function() {
    mg(this.Ta);
    this.Ta = null;
    dy.D.T.call(this)
};
dy.prototype.Xa = function(a) {
    if (!this.Ea(64) && 48 <= a.keyCode && 90 >= a.keyCode) {
        ey(this);
        this.W.push(String.fromCharCode(a.keyCode));
        a = this.W.join("");
        var b = new RegExp("^" + le(a), "i"),
            c = this.Ha ? Qx(this.Ha) : -1,
            d = c; - 1 < d && 1 < a.length && d--;
        var e = this.eb(),
            f = 0 > d ? 0 : d,
            g = !1,
            k = !1;
        do {
            ++d;
            d == e && (d = 0, g = !0);
            var l = this.b ? Sp(this.b, d) : null;
            if (l instanceof hx && (l = l.rb()) && l.match(b)) {
                k = !0;
                break
            }
            g && d == f && 3 == a.length && (l = a.split(""), l[1] == l[2] && (b = new RegExp("^" + l[1], "i"), this.W = [l[1]], g = !1))
        } while (!g || d != f);
        k && d != c && Wx(this,
            d);
        return !0
    }
    return dy.D.Xa.call(this, a)
};
var cy = function(a, b) {
    var c = "";
    a = a.b ? Sp(a.b, b) : null;
    a instanceof hx && (c = a.Y());
    return c
};
dy.prototype.Y = function() {
    var a = this.Ha ? Qx(this.Ha) : -1;
    return -1 != a ? cy(this, a) : ""
};
var by = function(a, b, c) {
    this.b = a;
    this.m = [];
    this.K = [];
    mx.call(this, b, c)
};
t(by, mx);
h = by.prototype;
h.Di = D("DIV", {
    id: "goog-menuitem-group-",
    "class": "goog-menuitem-group"
});
h.$g = !1;
h.Fd = 0;
h.Ja = function() {
    by.D.Ja.call(this);
    this.j().id = Kp(this)
};
h.pd = function(a, b, c) {
    this.$g && (this.c = b == Rp(this) ? this.g[b - 1] : this.g[b]);
    by.D.pd.call(this, a, b, c);
    this.c && (this.c = null, fy(this))
};
h.removeChild = function(a, b) {
    "string" === typeof a && (a = Np(this, a));
    var c = Up(this, a);
    this.$g && (this.c = 0 == c ? this.g[c + 1] : this.g[c]);
    a = by.D.removeChild.call(this, a, b);
    this.c && (this.c = null, fy(this));
    return a
};
h.Yb = function() {
    var a;
    this.c ? a = this.c : a = by.D.Yb.call(this);
    return a
};
h.render = function(a) {
    by.D.render.call(this, a);
    fy(this);
    Gw(Dw.M(), this.j())
};
h.ba = function(a) {
    by.D.ba.call(this, a);
    fy(this);
    Gw(Dw.M(), this.j())
};
var fy = function(a) {
        a.$g = !0;
        gy(a);
        var b = a.j();
        b.innerHTML = "";
        var c = [],
            d = 0;
        var e = document.createElement("table");
        var f = e.insertRow(-1);
        for (var g = 0, k; k = a.h[g]; g++) {
            var l = f.insertCell(f.cells.length);
            l.appendChild(k);
            Go(k, "goog-groupmenu-separator") ? (c.push(l), f = e.insertRow(e.rows.length)) : d++
        }
        for (g = 0; l = c[g]; g++) l.setAttribute("colspan", d);
        b.appendChild(e)
    },
    hy = function(a, b, c) {
        Ab(a.h, b.Tb) || a.h.push(b.Tb);
        Sp(a, c + 1) && (b.Tb = a.Di.cloneNode(!0), b.Tb.id += b.Zi, b.Zi++, b.Nf = 1);
        return b
    },
    gy = function(a) {
        a.h = [];
        a.g = {};
        var b = a.Di.cloneNode(!0);
        b.id += 1;
        var c = {
            Tb: b,
            Zi: 2,
            Nf: 1
        };
        Qp(a, function(d, e) {
            c.Tb.appendChild(d.j());
            this.g[e] = c.Tb;
            c.Nf == this.b ? c = hy(this, c, e) : d instanceof hx && c.Nf++;
            Ab(this.K, e) && (T(c.Tb, "goog-menuitem-group"), R(c.Tb, "goog-groupmenu-separator"), this.g[e] = c.Tb, c = hy(this, c, e))
        }, a);
        1 == c.Nf || Ab(a.h, c.Tb) || a.h.push(c.Tb)
    };
by.prototype.setVisible = function(a, b, c) {
    (a = by.D.setVisible.call(this, a, b, c)) && this.Fd && (Gi(this.Fd), this.Fd = 0);
    return a
};
by.prototype.Ge = function(a) {
    var b = by.D.Ge.call(this, a);
    if (b) return b;
    switch (a.keyCode) {
        case 37:
            return $w(this, p(this.w, this), this.Ka), !0;
        case 39:
            return $w(this, p(this.C, this), this.Ka), !0;
        default:
            return 48 <= a.keyCode && 90 >= a.keyCode ? (iy(this), this.m.push(String.fromCharCode(a.keyCode)), this.Oi(this.m.join("")), !0) : !1
    }
};
var iy = function(a) {
    a.Fd && (Gi(a.Fd), a.Fd = 0);
    a.Fd = Fi(function() {
        this.m = []
    }, 1E3, a)
};
by.prototype.Oi = function(a) {
    var b = new RegExp("^" + le(a), "i"),
        c = this.Ka; - 1 < c && 1 < a.length && c--;
    $w(this, function(d, e) {
        var f = 0 > d ? 0 : d,
            g = !1;
        do {
            ++d;
            d == e && (d = 0, g = !0);
            var k = Sp(this, d).rb();
            if (k && k.match(b)) return d
        } while (!g || d != f);
        return this.Ka
    }, c)
};
by.prototype.w = function(a, b) {
    a -= this.b;
    var c;
    0 > a && (c = a + b + (Math.ceil(b / this.b) * this.b - b) + this.b);
    return c || a
};
by.prototype.C = function(a, b) {
    a += this.b;
    var c;
    a > b && (c = a - b - (Math.ceil(b / this.b) * this.b - b) - this.b);
    return c || a
};
var jy = function(a, b) {
    try {
        return JSON.parse(a)
    } catch (d) {
        var c = Km.M();
        b.js = a;
        b.error = d.message;
        c.log("jsonParseErr", b);
        throw d;
    }
};
var ly = function(a, b) {
        this.a = ky;
        this.b = a;
        this.c = Yb(b)
    },
    ky = null,
    ny = function(a, b) {
        var c = ["sl", "tl", "src", "trg", "ts"];
        if (!ky && "openDatabase" in window) try {
            ky = window.openDatabase("GoogleTranslateMobileWebApp", "1.0", "Google Translate Mobile Web App", 5E5)
        } catch (e) {}
        if (ky) {
            var d = new ly(a, c);
            my(d, a, c, function(e) {
                b && b(e, d)
            })
        } else b && b(!1, null)
    },
    oy = function(a) {
        return function(b) {
            a && a(!1, b.code)
        }
    },
    my = function(a, b, c, d) {
        var e = [];
        e.push("CREATE TABLE IF NOT EXISTS", b);
        b = [];
        for (var f = 0, g = c.length; f < g; f++) b.push(c[f] +
            " TEXT");
        e.push("(", b.join(","), ")");
        a.a.transaction(function(k) {
            k.executeSql(e.join(" "))
        }, oy(d), d ? Ua(d, !0, null) : Ga)
    },
    py = function(a, b) {
        for (var c in b)
            if (!Pb(a.c, c)) return !1;
        return !0
    },
    ry = function(a, b, c, d) {
        var e = [
            ["ts"]
        ];
        if (py(a, b)) {
            var f = [];
            f.push("SELECT * FROM", a.b);
            var g = [],
                k = [];
            qy(b, g, k);
            g.length && f.push("WHERE", g.join(" AND "));
            if (e && 0 < e.length) {
                b = [];
                for (g = 0; g < e.length; ++g) b.push(e[g][0] + " " + (e[g][1] ? "ASC" : "DESC"));
                f.push("ORDER BY", b.join(","))
            }
            c && f.push("LIMIT", c);
            var l = [];
            a.a.transaction(function(m) {
                m.executeSql(f.join(" "),
                    k,
                    function(q, r) {
                        q = 0;
                        for (var u = r.rows.length; q < u; q++) l.push(r.rows.item(q))
                    })
            }, oy(d), d ? Ua(d, !0, l || null) : Ga)
        } else d && d(!1, -1)
    },
    ty = function(a, b, c) {
        sy(a, [b], c)
    },
    sy = function(a, b, c) {
        for (var d = 0, e = b.length; d < e; d++)
            if (!py(a, b[d])) {
                c && c(!1, -1);
                return
            } var f = [];
        d = 0;
        for (e = b.length; d < e; d++) {
            var g = b[d],
                k = [],
                l = [],
                m = [],
                q;
            for (q in g) k.push(q), l.push(g[q]), m.push("?");
            f.push([
                ["INSERT INTO", a.b, "(", k.join(","), ") VALUES (", m.join(","), ")"].join(" "), l
            ])
        }
        a.a.transaction(function(r) {
            for (var u = 0, z = f.length; u < z; u++) r.executeSql(f[u][0],
                f[u][1])
        }, oy(c), c ? Ua(c, !0, null) : Ga)
    },
    uy = function(a, b, c) {
        if (py(a, b)) {
            var d = [];
            d.push("DELETE FROM", a.b);
            var e = [],
                f = [];
            qy(b, e, f);
            e.length && d.push("WHERE", e.join(" AND "));
            a.a.transaction(function(g) {
                g.executeSql(d.join(" "), f)
            }, oy(c), c ? Ua(c, !0, null) : Ga)
        } else c && c(!1, -1)
    },
    qy = function(a, b, c) {
        for (var d in a) b.push(d + "=?"), c.push(a[d])
    };
var vy = function(a) {
        this.a = a
    },
    wy = function(a, b) {
        ny(a, function(c, d) {
            var e = null;
            c && (e = new vy(d));
            b && b(c, e)
        })
    },
    zy = function(a, b, c, d) {
        var e = xy.a;
        yy(e, a, b, c, function(f) {
            f && (f = {}, f.sl = a, f.tl = b, f.src = c, f.trg = Mj(d), f.ts = (new Date).getTime(), ty(e.a, f, function() {}))
        })
    },
    yy = function(a, b, c, d, e) {
        var f = {};
        b && (f.sl = b);
        c && (f.tl = c);
        d && (f.src = d);
        uy(a.a, f, function(g) {
            e && e(g)
        })
    },
    Ay = function(a, b, c, d, e, f) {
        var g = {};
        b && (g.sl = b);
        c && (g.tl = c);
        d && (g.src = d);
        ry(a.a, g, e, function(k, l) {
            var m = [];
            if (k)
                for (var q = 0, r = l.length; q < r; q++) {
                    var u = {},
                        z;
                    for (z in l[q]) u[z] = l[q][z];
                    var O = jy(u.trg, {
                        "class": "trans.common.WebSqlTranslations"
                    });
                    u.trg = O;
                    m.push(u)
                }
            f && f(k, m)
        })
    },
    By = function(a, b, c, d, e, f) {
        Ay(a, b, c, d, e, function(g, k) {
            f && f(g, k)
        })
    };
var Cy = function(a) {
        this.a = a
    },
    Dy = function(a) {
        wy("TranslationHistory", function(b, c) {
            c = b ? new Cy(c) : null;
            a && a(b, c)
        })
    };
var Ey = dc("//www.gstatic.com/inputtools/js/ita/inputtools_3.js"),
    Fy = dc("//www.gstatic.com/inputtools/js/ita/inputtools_d_3.js");
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var Hy = function(a) {
    var b = Gy;
    this.h = [];
    this.O = b;
    this.K = a || null;
    this.g = this.a = !1;
    this.c = void 0;
    this.G = this.C = this.m = !1;
    this.o = 0;
    this.b = null;
    this.w = 0
};
Hy.prototype.cancel = function(a) {
    if (this.a) this.c instanceof Hy && this.c.cancel();
    else {
        if (this.b) {
            var b = this.b;
            delete this.b;
            a ? b.cancel(a) : (b.w--, 0 >= b.w && b.cancel())
        }
        this.O ? this.O.call(this.K, this) : this.G = !0;
        this.a || Iy(this, new Jy(this))
    }
};
Hy.prototype.L = function(a, b) {
    this.m = !1;
    Ky(this, a, b)
};
var Ky = function(a, b, c) {
        a.a = !0;
        a.c = c;
        a.g = !b;
        Ly(a)
    },
    Ny = function(a) {
        if (a.a) {
            if (!a.G) throw new My(a);
            a.G = !1
        }
    };
Hy.prototype.qe = function(a) {
    Ny(this);
    Oy(a);
    Ky(this, !0, a)
};
var Iy = function(a, b) {
        Ny(a);
        Oy(b);
        Ky(a, !1, b)
    },
    Oy = function(a) {
        v(!(a instanceof Hy), "An execution sequence may not be initiated with a blocking Deferred.")
    },
    Py = function(a, b, c, d) {
        v(!a.C, "Blocking Deferreds can not be re-used");
        a.h.push([b, c, d]);
        a.a && Ly(a)
    };
Hy.prototype.then = function(a, b, c) {
    var d, e, f = new mi(function(g, k) {
        d = g;
        e = k
    });
    Py(this, d, function(g) {
        g instanceof Jy ? f.cancel() : e(g)
    });
    return f.then(a, b, c)
};
Hy.prototype.$goog_Thenable = !0;
var Qy = function(a) {
        return vb(a.h, function(b) {
            return Na(b[1])
        })
    },
    Ly = function(a) {
        if (a.o && a.a && Qy(a)) {
            var b = a.o,
                c = Ry[b];
            c && (n.clearTimeout(c.qa), delete Ry[b]);
            a.o = 0
        }
        a.b && (a.b.w--, delete a.b);
        b = a.c;
        for (var d = c = !1; a.h.length && !a.m;) {
            var e = a.h.shift(),
                f = e[0],
                g = e[1];
            e = e[2];
            if (f = a.g ? g : f) try {
                var k = f.call(e || a.K, b);
                void 0 !== k && (a.g = a.g && (k == b || k instanceof Error), a.c = b = k);
                if (ji(b) || "function" === typeof n.Promise && b instanceof n.Promise) d = !0, a.m = !0
            } catch (l) {
                b = l, a.g = !0, Qy(a) || (c = !0)
            }
        }
        a.c = b;
        d && (k = p(a.L, a, !0), d =
            p(a.L, a, !1), b instanceof Hy ? (Py(b, k, d), b.C = !0) : b.then(k, d));
        c && (b = new Sy(b), Ry[b.qa] = b, a.o = b.qa)
    },
    My = function() {
        Wa.call(this)
    };
t(My, Wa);
My.prototype.message = "Deferred has already fired";
My.prototype.name = "AlreadyCalledError";
var Jy = function() {
    Wa.call(this)
};
t(Jy, Wa);
Jy.prototype.message = "Deferred was canceled";
Jy.prototype.name = "CanceledError";
var Sy = function(a) {
    this.qa = n.setTimeout(p(this.a, this), 0);
    this.nf = a
};
Sy.prototype.a = function() {
    v(Ry[this.qa], "Cannot throw an error that is not scheduled.");
    delete Ry[this.qa];
    throw this.nf;
};
var Ry = {};
var Wy = function(a, b) {
        var c = b || {};
        b = c.document || document;
        var d = rc(a),
            e = cg("SCRIPT"),
            f = {
                hj: e,
                dd: void 0
            },
            g = new Hy(f),
            k = null,
            l = null != c.timeout ? c.timeout : 5E3;
        0 < l && (k = window.setTimeout(function() {
            Ty(e, !0);
            Iy(g, new Uy(1, "Timeout reached for loading script " + d))
        }, l), f.dd = k);
        e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Ty(e, c.gk || !1, k), g.qe(null))
        };
        e.onerror = function() {
            Ty(e, !0, k);
            Iy(g, new Uy(0, "Error while loading script " + d))
        };
        f = c.attributes || {};
        Wb(f, {
            type: "text/javascript",
            charset: "UTF-8"
        });
        Tf(e, f);
        Zd(e, a);
        Vy(b).appendChild(e);
        return g
    },
    Vy = function(a) {
        var b = Of("HEAD", a);
        return b && 0 != b.length ? b[0] : a.documentElement
    },
    Gy = function() {
        if (this && this.hj) {
            var a = this.hj;
            a && "SCRIPT" == a.tagName && Ty(a, !0, this.dd)
        }
    },
    Ty = function(a, b, c) {
        null != c && n.clearTimeout(c);
        a.onload = Ga;
        a.onerror = Ga;
        a.onreadystatechange = Ga;
        b && window.setTimeout(function() {
            mg(a)
        }, 0)
    },
    Uy = function(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        Wa.call(this, c);
        this.code = a
    };
t(Uy, Wa);
var Xy = function() {
    this.c = this.b = !1;
    this.a = []
};
Ha(Xy);
var Yy = dc("//www.gstatic.cn/inputtools/js/ita/inputtools_1.js"),
    Zy = dc("//www.gstatic.cn/inputtools/js/ita/inputtools_d_1.js");
Xy.prototype.g = function() {
    this.c = !0;
    for (var a = 0; a < this.a.length; ++a) this.a[a]()
};
Xy.prototype.load = function(a, b) {
    this.b ? this.b && !this.c ? this.a.push(a) : a() : (this.b = !0, this.a.push(a), a = 0 <= n.location.href.indexOf("?deb=static") || 0 <= n.location.href.indexOf("&deb=static"), Wy(tc(cc(b ? a ? Zy : Yy : a ? Fy : Ey))).then(p(this.g, this)))
};
var az = function() {
    this.g = Hk.M();
    this.c = {};
    this.b = {};
    this.a = {};
    this.a["gt-input-tool"] = new $y
};
Ha(az);
var cz = function(a, b, c) {
        b = bz(a, b, c);
        if (void 0 !== b) a = b.Vi;
        else {
            a: {
                a = Kk(a.g, c);
                if (null != a)
                    for (c = 0; c < a.length; c++)
                        if (Mk(a[c])) {
                            a = a[c];
                            break a
                        } a = ""
            }
            a = a || ""
        }
        return a
    },
    bz = function(a, b, c) {
        if (a = dz(a, b)) return a.a[c]
    },
    dz = function(a, b, c) {
        var d = a.a[b];
        c && void 0 === d && (d = new $y, a.a[b] = d);
        return d
    },
    ez = function(a, b, c) {
        var d = {
            ua: "itui"
        };
        d.uav = "string" === typeof a ? a : a ? 1 : 0;
        d.sl = b;
        d.tl = "und";
        d.hl = c;
        var e = new Image;
        e.src = "/translate/uc?" + Bj(d);
        e.onload = function() {
            e.onload = null
        }
    },
    $y = function() {
        this.a = {};
        for (var a in fz) this.a[a] =
            new gz(fz[a], "")
    },
    fz = {
        iw: !1,
        ja: !1,
        vi: !1,
        "zh-CN": !1
    };
$y.prototype.update = function(a, b, c) {
    var d = this.a[a];
    void 0 !== d ? (d.isEnabled = b, d.Vi = c) : this.a[a] = new gz(b, c)
};
var gz = function(a, b) {
    this.isEnabled = a;
    this.Vi = b
};
var hz = function(a, b, c, d, e, f) {
    J.call(this);
    this.C = Hk.M();
    this.h = a;
    this.W = c;
    this.Z = b;
    this.g = this.b = null;
    this.o = this.L = "";
    this.G = this.h.id;
    this.a = "";
    this.m = this.c = !1;
    Km.M();
    this.O = d;
    this.V = e;
    this.X = jc(d) ? [5, 4] : [1, 0];
    this.na = [30, 0, 0, 0];
    this.w = az.M();
    this.N = xl.M();
    this.F = K.M();
    this.K = !0;
    null != f && f.a(this, "change")
};
t(hz, J);
var kz = function(a, b) {
        if (null == a.b) a.o = b, (null != Ik[b] || a.C.a && null != Jk[b]) && a.K && (a.K = !1, Xy.M().load(p(a.ia, a), a.V));
        else if (a.L != b)
            if (a.L = b, null != Ik[b] || a.C.a && null != Jk[b]) {
                var c = Kk(a.C, b),
                    d = cz(a.w, a.G, b),
                    e = a.w,
                    f = a.G,
                    g = bz(e, f, b);
                b = void 0 !== g ? g.isEnabled : Mk(cz(e, f, b));
                a.m = !0;
                a.a = Ab(c, d) ? d : c[0];
                a.b.disableCurrentInputTool();
                a.c = b;
                a.b.setInputTools(c);
                a.b.activateInputTool(a.a);
                a.c ? a.b.enableCurrentInputTool() : a.b.disableCurrentInputTool();
                null == a.g && (a.g = a.b.showControl({
                    ui: "kd",
                    container: a.h
                }));
                a.b.localize(a.O);
                a.g.show();
                iz(a);
                jz(a);
                a.m = !1;
                Bl(a.N, a.c ? a.a : "")
            } else a.b.disableCurrentInputTool(), null != a.g && a.g.hide()
    },
    iz = function(a) {
        null != a.b && a.b.repositionKeyboard(a.W, a.X, a.na)
    };
hz.prototype.isEnabled = function() {
    return null != this.b && this.c
};
var lz = function(a) {
    return a.isEnabled() && Mk(a.a)
};
hz.prototype.R = function(a) {
    iz(this);
    if (!this.m && (this.a != a.currInputToolName || this.c != a.currInputToolActive)) {
        this.a = a.currInputToolName;
        this.c = a.currInputToolActive;
        jz(this);
        a = this.c;
        var b = this.L,
            c = this.O,
            d = this.G,
            e = this.a;
        dz(this.w, d, !0).update(b, a, e);
        ez((a ? "1" : "0") + "." + d + "." + e, b, c);
        Bl(this.N, this.c ? this.a : "");
        this.c && (0 <= this.a.indexOf("-k0-") ? (a = this.F, L(a, M(a, 171))) : Mk(this.a) ? (a = this.F, L(a, M(a, 172))) : Lk(this.a) && (a = this.F, L(a, M(a, 146))))
    }
    this.dispatchEvent("change")
};
hz.prototype.ia = function() {
    var a = new google.elements.inputtools.InputToolsController;
    a.setAutoDirection(!1);
    a.setApplicationName("translate");
    a.addPageElements([this.Z]);
    a.addEventListener(google.elements.inputtools.EventType.INPUT_TOOL_ENABLED, this.R, this);
    this.b = a;
    "" != this.o && (kz(this, this.o), this.o = "")
};
var jz = function(a) {
    var b = B("ita-kd-inputtool-icon", a.h);
    if (null != b) {
        var c = Mk(a.a) ? a.isEnabled() ? window.MSG_IME_OFF || "" : window.MSG_IME_ON || "" : 0 <= a.a.indexOf("-k0-") ? a.isEnabled() ? window.MSG_VK_OFF || "" : window.MSG_VK_ON || "" : Lk(a.a) ? a.isEnabled() ? window.MSG_HW_OFF || "" : window.MSG_HW_ON || "" : "";
        Us(b, c, void 0);
        bt(b, 2)
    }
    a = B("ita-kd-dropdown", a.h);
    null != a && (Us(a, window.MSG_CHANGE_ITA || "", void 0), bt(a, 2))
};
Zi("goog.dom.SavedRange");
var nz = function(a, b, c, d, e) {
    this.c = !!b;
    this.h = null;
    this.g = 0;
    this.L = !1;
    this.K = !c;
    a && mz(this, a, d);
    this.depth = void 0 != e ? e : this.g || 0;
    this.c && (this.depth *= -1)
};
t(nz, lj);
var mz = function(a, b, c, d) {
    if (a.h = b) a.g = "number" === typeof c ? c : 1 != a.h.nodeType ? 0 : a.c ? -1 : 1;
    "number" === typeof d && (a.depth = d)
};
nz.prototype.next = function() {
    if (this.L) {
        if (!this.h || this.K && 0 == this.depth) throw kj;
        var a = this.h;
        var b = this.c ? -1 : 1;
        if (this.g == b) {
            var c = this.c ? a.lastChild : a.firstChild;
            c ? mz(this, c) : mz(this, a, -1 * b)
        } else(c = this.c ? a.previousSibling : a.nextSibling) ? mz(this, c) : mz(this, a.parentNode, -1 * b);
        this.depth += this.g * (this.c ? -1 : 1)
    } else this.L = !0;
    a = this.h;
    if (!this.h) throw kj;
    return a
};
nz.prototype.splice = function(a) {
    var b = this.h,
        c = this.c ? 1 : -1;
    this.g == c && (this.g = -1 * c, this.depth += this.g * (this.c ? -1 : 1));
    this.c = !this.c;
    nz.prototype.next.call(this);
    this.c = !this.c;
    c = Ma(arguments[0]) ? arguments[0] : arguments;
    for (var d = c.length - 1; 0 <= d; d--) kg(c[d], b);
    mg(b)
};
var oz = function() {},
    pz = function(a) {
        if (a.getSelection) return a.getSelection();
        a = a.document;
        var b = a.selection;
        if (b) {
            try {
                var c = b.createRange();
                if (c.parentElement) {
                    if (c.parentElement().document != a) return null
                } else if (!c.length || c.item(0).document != a) return null
            } catch (d) {
                return null
            }
            return b
        }
        return null
    },
    qz = function(a) {
        for (var b = [], c = 0, d = a.De(); c < d; c++) b.push(a.Od(c));
        return b
    },
    rz = function(a) {
        return a.fh() ? a.Wb() : a.rc()
    };
oz.prototype.fh = function() {
    return !1
};
var sz = function(a, b) {
    nz.call(this, a, b, !0)
};
t(sz, nz);
var tz = function(a, b, c, d, e) {
    this.b = this.a = null;
    this.G = this.C = 0;
    this.o = !!e;
    if (a) {
        this.a = a;
        this.C = b;
        this.b = c;
        this.G = d;
        if (1 == a.nodeType && "BR" != a.tagName)
            if (a = a.childNodes, b = a[b]) this.a = b, this.C = 0;
            else {
                a.length && (this.a = qb(a));
                var f = !0
            } 1 == c.nodeType && ((this.b = c.childNodes[d]) ? this.G = 0 : this.b = c)
    }
    nz.call(this, this.o ? this.b : this.a, this.o, !0);
    if (f) try {
        this.next()
    } catch (g) {
        if (g != kj) throw g;
    }
};
t(tz, sz);
tz.prototype.w = function() {
    return this.a
};
tz.prototype.m = function() {
    return this.L && (this.h != (this.o ? this.a : this.b) ? !1 : this.o ? this.C ? -1 != this.g : 1 == this.g : !this.G || 1 != this.g)
};
tz.prototype.next = function() {
    if (this.m()) throw kj;
    return tz.D.next.call(this)
};
var uz = function() {},
    vz = function(a, b) {
        b = b.ye();
        try {
            return 0 <= a.lc(b, 0, 0) && 0 >= a.lc(b, 1, 1)
        } catch (c) {
            if (!y) throw c;
            return !1
        }
    };
uz.prototype.kc = function() {
    return new tz(this.bc(), this.Fc(), this.Ec(), this.Uc())
};
var wz = function(a) {
    this.a = a
};
t(wz, uz);
var yz = function(a) {
        var b = Lf(a).createRange();
        if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
        else if (xz(a)) {
            for (var c, d = a;
                (c = d.firstChild) && xz(c);) d = c;
            b.setStart(d, 0);
            for (d = a;
                (c = d.lastChild) && xz(c);) d = c;
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
        } else c = a.parentNode, a = rb(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
        return b
    },
    zz = function(a, b, c, d) {
        var e = Lf(a).createRange();
        e.setStart(a, b);
        e.setEnd(c, d);
        return e
    };
h = wz.prototype;
h.ye = function() {
    return this.a
};
h.Og = function() {
    return this.a.commonAncestorContainer
};
h.bc = function() {
    return this.a.startContainer
};
h.Fc = function() {
    return this.a.startOffset
};
h.Ec = function() {
    return this.a.endContainer
};
h.Uc = function() {
    return this.a.endOffset
};
h.lc = function(a, b, c) {
    return this.a.compareBoundaryPoints(1 == c ? 1 == b ? n.Range.START_TO_START : n.Range.START_TO_END : 1 == b ? n.Range.END_TO_START : n.Range.END_TO_END, a)
};
h.cc = function() {
    return this.a.collapsed
};
h.Ai = function() {
    return this.a.toString()
};
h.select = function(a) {
    var b = Yf(Lf(this.bc()));
    this.Re(b.getSelection(), a)
};
h.Re = function(a) {
    a.removeAllRanges();
    a.addRange(this.a)
};
var Az = function(a) {
    this.a = a
};
t(Az, wz);
Az.prototype.Re = function(a, b) {
    !b || this.cc() ? Az.D.Re.call(this, a, b) : (a.collapse(this.Ec(), this.Uc()), a.extend(this.bc(), this.Fc()))
};
var Bz = function(a) {
    this.b = this.a = this.o = null;
    this.h = this.g = -1;
    this.c = a
};
t(Bz, uz);
var Cz = Zi("goog.dom.browserrange.IeRange"),
    Dz = function(a) {
        var b = Lf(a).body.createTextRange();
        if (1 == a.nodeType) b.moveToElementText(a), xz(a) && !a.childNodes.length && b.collapse(!1);
        else {
            for (var c = 0, d = a; d = d.previousSibling;) {
                var e = d.nodeType;
                if (3 == e) c += d.length;
                else if (1 == e) {
                    b.moveToElementText(d);
                    break
                }
            }
            d || b.moveToElementText(a.parentNode);
            b.collapse(!d);
            c && b.move("character", c);
            b.moveEnd("character", a.length)
        }
        return b
    };
Bz.prototype.ye = function() {
    return this.c
};
Bz.prototype.Og = function() {
    if (!this.o) {
        var a = this.c.text,
            b = this.c.duplicate(),
            c = a.replace(/ +$/, "");
        (c = a.length - c.length) && b.moveEnd("character", -c);
        c = b.parentElement();
        b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
        if (this.cc() && 0 < b) return this.o = c;
        for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) c = c.parentNode;
        for (; 1 == c.childNodes.length && c.innerText == Ez(c.firstChild) && xz(c.firstChild);) c = c.firstChild;
        0 == a.length && (c = Fz(this, c));
        this.o = c
    }
    return this.o
};
var Fz = function(a, b) {
    for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
        var f = c[d];
        if (xz(f)) {
            var g = Dz(f),
                k = g.htmlText != f.outerHTML;
            if (a.cc() && k ? 0 <= a.lc(g, 1, 1) && 0 >= a.lc(g, 1, 0) : a.c.inRange(g)) return Fz(a, f)
        }
    }
    return b
};
h = Bz.prototype;
h.bc = function() {
    this.a || (this.a = Gz(this, 1), this.cc() && (this.b = this.a));
    return this.a
};
h.Fc = function() {
    0 > this.g && (this.g = Hz(this, 1), this.cc() && (this.h = this.g));
    return this.g
};
h.Ec = function() {
    if (this.cc()) return this.bc();
    this.b || (this.b = Gz(this, 0));
    return this.b
};
h.Uc = function() {
    if (this.cc()) return this.Fc();
    0 > this.h && (this.h = Hz(this, 0), this.cc() && (this.g = this.h));
    return this.h
};
h.lc = function(a, b, c) {
    return this.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
};
var Gz = function(a, b, c) {
        c = c || a.Og();
        if (!c || !c.firstChild) return c;
        for (var d = 1 == b, e = 0, f = c.childNodes.length; e < f; e++) {
            var g = d ? e : f - e - 1,
                k = c.childNodes[g];
            try {
                var l = Iz(k)
            } catch (q) {
                continue
            }
            var m = l.ye();
            if (a.cc())
                if (!xz(k)) {
                    if (0 == a.lc(m, 1, 1)) {
                        a.g = a.h = g;
                        break
                    }
                } else {
                    if (vz(l, a)) return Gz(a, b, k)
                }
            else {
                if (vz(a, l)) {
                    if (!xz(k)) {
                        d ? a.g = g : a.h = g + 1;
                        break
                    }
                    return Gz(a, b, k)
                }
                if (0 > a.lc(m, 1, 0) && 0 < a.lc(m, 0, 1)) return Gz(a, b, k)
            }
        }
        return c
    },
    Hz = function(a, b) {
        var c = 1 == b,
            d = c ? a.bc() : a.Ec();
        if (1 == d.nodeType) {
            d = d.childNodes;
            for (var e =
                    d.length, f = c ? 1 : -1, g = c ? 0 : e - 1; 0 <= g && g < e; g += f) {
                var k = d[g];
                if (!xz(k) && 0 == a.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), Iz(k).ye())) return c ? g : g + 1
            }
            return -1 == g ? 0 : g
        }
        a = a.c.duplicate();
        b = Dz(d);
        a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
        a = a.text.length;
        return c ? d.length - a : a
    },
    Ez = function(a) {
        return 3 == a.nodeType ? a.nodeValue : a.innerText
    };
Bz.prototype.cc = function() {
    return 0 == this.c.compareEndPoints("StartToEnd", this.c)
};
Bz.prototype.Ai = function() {
    return this.c.text
};
Bz.prototype.select = function() {
    this.c.select()
};
var Jz = function(a) {
    this.a = a
};
t(Jz, wz);
Jz.prototype.Re = function(a) {
    a.collapse(this.bc(), this.Fc());
    this.Ec() == this.bc() && this.Uc() == this.Fc() || a.extend(this.Ec(), this.Uc());
    0 == a.rangeCount && a.addRange(this.a)
};
var Kz = function(a) {
    this.a = a
};
t(Kz, wz);
Kz.prototype.lc = function(a, b, c) {
    return Te("528") ? Kz.D.lc.call(this, a, b, c) : this.a.compareBoundaryPoints(1 == c ? 1 == b ? n.Range.START_TO_START : n.Range.END_TO_START : 1 == b ? n.Range.START_TO_END : n.Range.END_TO_END, a)
};
Kz.prototype.Re = function(a, b) {
    b ? a.setBaseAndExtent(this.Ec(), this.Uc(), this.bc(), this.Fc()) : a.setBaseAndExtent(this.bc(), this.Fc(), this.Ec(), this.Uc())
};
var Lz = function(a) {
        return Ff ? new Bz(a, Lf(a.parentElement())) : De ? new Kz(a) : Ce ? new Az(a) : ye ? new Jz(a) : new wz(a)
    },
    Iz = function(a) {
        if (y && !Ve(9)) {
            var b = new Bz(Dz(a), Lf(a));
            if (xz(a)) {
                for (var c, d = a;
                    (c = d.firstChild) && xz(c);) d = c;
                b.a = d;
                b.g = 0;
                for (d = a;
                    (c = d.lastChild) && xz(c);) d = c;
                b.b = d;
                b.h = 1 == d.nodeType ? d.childNodes.length : d.length;
                b.o = a
            } else b.a = b.b = b.o = a.parentNode, b.g = rb(b.o.childNodes, a), b.h = b.g + 1;
            a = b
        } else a = De ? new Kz(yz(a)) : Ce ? new Az(yz(a)) : ye ? new Jz(yz(a)) : new wz(yz(a));
        return a
    },
    xz = function(a) {
        return fg(a) ||
            3 == a.nodeType
    };
var Mz = function() {
    this.c = this.b = this.h = this.a = this.o = null;
    this.g = !1
};
t(Mz, oz);
var Nz = function(a, b) {
        var c = new Mz;
        c.o = a;
        c.g = !!b;
        return c
    },
    Oz = function(a, b) {
        return Nz(Iz(a), b)
    };
Mz.prototype.Jb = function() {
    return "text"
};
Mz.prototype.Kg = function() {
    return Pz(this).ye()
};
Mz.prototype.De = function() {
    return 1
};
Mz.prototype.Od = function() {
    return this
};
var Pz = function(a) {
    var b;
    if (!(b = a.o)) {
        b = a.Wb();
        var c = a.Xb(),
            d = a.rc(),
            e = a.sc();
        if (y && !Ve(9)) {
            var f = b,
                g = c,
                k = d,
                l = e,
                m = !1;
            1 == f.nodeType && (g > f.childNodes.length && $i(Cz, "Cannot have startOffset > startNode child count"), g = f.childNodes[g], m = !g, f = g || f.lastChild || f, g = 0);
            var q = Dz(f);
            g && q.move("character", g);
            f == k && g == l ? q.collapse(!0) : (m && q.collapse(!1), m = !1, 1 == k.nodeType && (l > k.childNodes.length && $i(Cz, "Cannot have endOffset > endNode child count"), k = (g = k.childNodes[l]) || k.lastChild || k, l = 0, m = !g), f = Dz(k), f.collapse(!m),
                l && f.moveEnd("character", l), q.setEndPoint("EndToEnd", f));
            l = new Bz(q, Lf(b));
            l.a = b;
            l.g = c;
            l.b = d;
            l.h = e;
            b = l
        } else b = De ? new Kz(zz(b, c, d, e)) : Ce ? new Az(zz(b, c, d, e)) : ye ? new Jz(zz(b, c, d, e)) : new wz(zz(b, c, d, e));
        b = a.o = b
    }
    return b
};
h = Mz.prototype;
h.wf = function() {
    return Pz(this).Og()
};
h.Wb = function() {
    return this.a || (this.a = Pz(this).bc())
};
h.Xb = function() {
    return null != this.h ? this.h : this.h = Pz(this).Fc()
};
h.rc = function() {
    return this.b || (this.b = Pz(this).Ec())
};
h.sc = function() {
    return null != this.c ? this.c : this.c = Pz(this).Uc()
};
h.fh = function() {
    return this.g
};
h.yf = function() {
    return Pz(this).cc()
};
h.xf = function() {
    return Pz(this).Ai()
};
h.kc = function() {
    return new tz(this.Wb(), this.Xb(), this.rc(), this.sc())
};
h.select = function() {
    Pz(this).select(this.g)
};
var Qz = function() {};
t(Qz, oz);
var Rz = function() {
    this.c = this.b = this.a = null
};
t(Rz, Qz);
h = Rz.prototype;
h.Jb = function() {
    return "control"
};
h.Kg = function() {
    return this.a || document.body.createControlRange()
};
h.De = function() {
    return this.a ? this.a.length : 0
};
h.Od = function(a) {
    return Oz(this.a.item(a))
};
h.wf = function() {
    return wg.apply(null, Sz(this))
};
h.Wb = function() {
    return Tz(this)[0]
};
h.Xb = function() {
    return 0
};
h.rc = function() {
    var a = Tz(this),
        b = qb(a);
    return yb(a, function(c) {
        return sg(c, b)
    })
};
h.sc = function() {
    return this.rc().childNodes.length
};
var Sz = function(a) {
        if (!a.b && (a.b = [], a.a))
            for (var b = 0; b < a.a.length; b++) a.b.push(a.a.item(b));
        return a.b
    },
    Tz = function(a) {
        a.c || (a.c = Sz(a).concat(), a.c.sort(function(b, c) {
            return b.sourceIndex - c.sourceIndex
        }));
        return a.c
    };
Rz.prototype.yf = function() {
    return !this.a || !this.a.length
};
Rz.prototype.xf = function() {
    return ""
};
Rz.prototype.kc = function() {
    return new Uz(this)
};
Rz.prototype.select = function() {
    this.a && this.a.select()
};
var Uz = function(a) {
    this.o = this.b = this.a = null;
    a && (this.o = Tz(a), this.a = this.o.shift(), this.b = qb(this.o) || this.a);
    nz.call(this, this.a, !1, !0)
};
t(Uz, sz);
Uz.prototype.w = function() {
    return this.a
};
Uz.prototype.m = function() {
    return !this.depth && !this.o.length
};
Uz.prototype.next = function() {
    if (this.m()) throw kj;
    if (!this.depth) {
        var a = this.o.shift();
        mz(this, a, 1, 1);
        return a
    }
    return Uz.D.next.call(this)
};
var Vz = function() {
    this.F = Zi("goog.dom.MultiRange");
    this.a = [];
    this.g = [];
    this.c = this.b = null
};
t(Vz, Qz);
h = Vz.prototype;
h.Jb = function() {
    return "mutli"
};
h.Kg = function() {
    1 < this.a.length && aj(this.F, "getBrowserRangeObject called on MultiRange with more than 1 range");
    return this.a[0]
};
h.De = function() {
    return this.a.length
};
h.Od = function(a) {
    this.g[a] || (this.g[a] = Nz(Lz(this.a[a]), void 0));
    return this.g[a]
};
h.wf = function() {
    if (!this.c) {
        for (var a = [], b = 0, c = this.De(); b < c; b++) a.push(this.Od(b).wf());
        this.c = wg.apply(null, a)
    }
    return this.c
};
var Xz = function(a) {
    a.b || (a.b = qz(a), a.b.sort(function(b, c) {
        var d = b.Wb();
        b = b.Xb();
        var e = c.Wb();
        c = c.Xb();
        return d == e && b == c ? 0 : Wz(d, b, e, c) ? 1 : -1
    }));
    return a.b
};
h = Vz.prototype;
h.Wb = function() {
    return Xz(this)[0].Wb()
};
h.Xb = function() {
    return Xz(this)[0].Xb()
};
h.rc = function() {
    return qb(Xz(this)).rc()
};
h.sc = function() {
    return qb(Xz(this)).sc()
};
h.yf = function() {
    return 0 == this.a.length || 1 == this.a.length && this.Od(0).yf()
};
h.xf = function() {
    return tb(qz(this), function(a) {
        return a.xf()
    }).join("")
};
h.kc = function() {
    return new Yz(this)
};
h.select = function() {
    var a = pz(Yf(Lf(y ? this.wf() : this.Wb())));
    a.removeAllRanges();
    for (var b = 0, c = this.De(); b < c; b++) a.addRange(this.Od(b).Kg())
};
var Yz = function(a) {
    this.a = null;
    this.b = 0;
    a && (this.a = tb(Xz(a), function(b) {
        return mj(b)
    }));
    nz.call(this, a ? this.w() : null, !1, !0)
};
t(Yz, sz);
Yz.prototype.w = function() {
    return this.a[0].w()
};
Yz.prototype.m = function() {
    return this.a[this.b].m()
};
Yz.prototype.next = function() {
    try {
        var a = this.a[this.b],
            b = a.next();
        mz(this, a.h, a.g, a.depth);
        return b
    } catch (c) {
        if (c !== kj || this.a.length - 1 == this.b) throw c;
        this.b++;
        return this.next()
    }
};
var $z = function() {
        var a = pz(window);
        return a && Zz(a)
    },
    Zz = function(a) {
        var b = !1;
        if (a.createRange) try {
            var c = a.createRange()
        } catch (e) {
            return null
        } else if (a.rangeCount) {
            if (1 < a.rangeCount) {
                b = new Vz;
                c = 0;
                for (var d = a.rangeCount; c < d; c++) b.a.push(a.getRangeAt(c));
                return b
            }
            c = a.getRangeAt(0);
            b = Wz(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
        } else return null;
        (a = c) && a.addElement ? (b = new Rz, b.a = a, a = b) : a = Nz(Lz(a), b);
        return a
    },
    Wz = function(a, b, c, d) {
        if (a == c) return d < b;
        var e;
        if (1 == a.nodeType && b)
            if (e = a.childNodes[b]) a =
                e, b = 0;
            else if (sg(a, c)) return !0;
        if (1 == c.nodeType && d)
            if (e = c.childNodes[d]) c = e, d = 0;
            else if (sg(c, a)) return !1;
        return 0 < (vg(a, c) || b - d)
    };
var aA = function() {
        var a = $z();
        return null != a && !a.yf() && 0 < a.xf().length
    },
    bA = function(a) {
        $z();
        Oz(a, void 0).select();
        a.setAttribute("tabIndex", "-1")
    },
    cA = function(a) {
        var b = D("TEXTAREA", {
            id: "hdt"
        });
        To(b, {
            position: "absolute",
            top: Xf(document).a + "px",
            left: "-1000px"
        });
        gg(document.body, b);
        b.focus();
        E(b, a);
        a = 0;
        if (ew(b)) b.selectionStart = a;
        else if (fw()) {
            var c = gw(b),
                d = c[0];
            d.inRange(c[1]) && (a = iw(b, a), d.collapse(!0), d.move("character", a), d.select())
        }
        a = b.value.length;
        ew(b) ? b.selectionEnd = a : fw() && (d = gw(b), c = d[1], d[0].inRange(c) &&
            (a = iw(b, a), d = iw(b, hw(b, !0)[0]), c.collapse(!0), c.moveEnd("character", a - d), c.select()));
        return b
    };
var dA = function(a, b, c, d, e, f, g) {
    g = void 0 === g ? function() {} : g;
    this.L = Km.M();
    this.G = b;
    this.g = c;
    this.C = d;
    this.o = e || null;
    this.w = f;
    this.m = g;
    this.b = this.c = this.a = 0;
    this.F = K.M();
    this.delay = new zs(this.Yf, 3E3, this);
    this.h = a;
    G(a, "copy", this.Cj, !1, this);
    G(a, "mouseup", this.Dj, !1, this);
    G(a, "contextmenu", this.Ei, !1, this);
    G(a, "click", this.Bj, !1, this);
    G(n, "blur", this.flush, !1, this);
    G(n, "beforeunload", this.flush, !1, this)
};
t(dA, Lg);
h = dA.prototype;
h.flush = function() {
    this.delay.stop();
    0 < this.a + this.c + this.b && this.Yf()
};
h.T = function() {
    this.flush();
    this.delay.Ia();
    qh(this.h, "copy", this.Cj, !1, this);
    qh(this.h, "mouseup", this.Dj, !1, this);
    qh(this.h, "contextmenu", this.Ei, !1, this);
    qh(this.h, "click", this.Bj, !1, this);
    qh(n, "blur", this.flush, !1, this);
    qh(n, "beforeunload", this.flush, !1, this);
    dA.D.T.call(this)
};
h.Cj = function() {
    this.delay.stop();
    if (void 0 !== this.w) {
        var a = this.w().length,
            b = null != n.getSelection ? n.getSelection().toString().length : document.selection && "Control" != document.selection.type ? document.selection.createRange().text.length : 0;
        this.Yf(1, a, b);
        km(this.F, this.g, this.m(), a, b)
    } else this.Yf(1), km(this.F, this.g, this.m())
};
h.Yf = function(a, b, c) {
    a = {
        cpy: a || 0,
        clk: this.a,
        sel: this.c,
        ctx: this.b
    };
    null != b && null != c && (a.ql = b, a.cpl = c);
    null != this.o && (a.sl = this.o.a(), a.tl = this.o.b());
    Pm(this.L, this.C, "ilog", this.G, a);
    this.b = this.c = this.a = 0
};
h.Dj = function() {
    if (aA()) {
        this.c++;
        var a = this.F;
        L(a, im(a, 211, this.g));
        59 <= this.c ? this.flush() : this.delay.start()
    }
};
h.Bj = function(a) {
    Yg(a) && (this.a++, a = this.F, L(a, im(a, 212, this.g)), 59 <= this.a ? this.flush() : this.delay.start())
};
h.Ei = function() {
    this.b++;
    var a = this.F;
    L(a, im(a, 210, this.g));
    59 <= this.b ? this.flush() : this.delay.start()
};
var eA = {
    8: "backspace",
    9: "tab",
    13: "enter",
    16: "shift",
    17: "ctrl",
    18: "alt",
    19: "pause",
    20: "caps-lock",
    27: "esc",
    32: "space",
    33: "pg-up",
    34: "pg-down",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    45: "insert",
    46: "delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    59: "semicolon",
    61: "equals",
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    93: "context",
    96: "num-0",
    97: "num-1",
    98: "num-2",
    99: "num-3",
    100: "num-4",
    101: "num-5",
    102: "num-6",
    103: "num-7",
    104: "num-8",
    105: "num-9",
    106: "num-multiply",
    107: "num-plus",
    109: "num-minus",
    110: "num-period",
    111: "num-division",
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",
    186: "semicolon",
    187: "equals",
    189: "dash",
    188: ",",
    190: ".",
    191: "/",
    192: "`",
    219: "open-square-bracket",
    220: "\\",
    221: "close-square-bracket",
    222: "single-quote",
    224: "win"
};
var fA = function(a, b, c, d, e, f, g, k, l) {
        this.a = a;
        this.h = b;
        this.G = c;
        this.c = d;
        this.g = e;
        this.o = f;
        this.m = g;
        this.w = k;
        this.b = l
    },
    lA = function(a) {
        var b = a.b;
        b = (b = b && "composed" in b && b && "composedPath" in b && b.composed && b.composedPath()) && 0 < b.length ? b[0] : a.target;
        return gA(hA(iA(jA((new kA).keyCode(a.keyCode || 0).key(a.key || "").shiftKey(!!a.shiftKey).altKey(!!a.altKey).ctrlKey(!!a.ctrlKey).metaKey(!!a.metaKey).target(a.target), b), function() {
            return a.preventDefault()
        }), function() {
            return a.stopPropagation()
        }))
    },
    kA = function() {
        this.c =
            null;
        this.g = "";
        this.G = this.o = this.m = this.C = this.h = this.b = this.a = this.w = null
    };
h = kA.prototype;
h.keyCode = function(a) {
    this.c = a;
    return this
};
h.key = function(a) {
    this.g = a;
    return this
};
h.shiftKey = function(a) {
    this.w = a;
    return this
};
h.altKey = function(a) {
    this.a = a;
    return this
};
h.ctrlKey = function(a) {
    this.b = a;
    return this
};
h.metaKey = function(a) {
    this.h = a;
    return this
};
h.target = function(a) {
    this.C = a;
    return this
};
var jA = function(a, b) {
        a.m = b;
        return a
    },
    iA = function(a, b) {
        a.o = b;
        return a
    },
    hA = function(a, b) {
        a.G = b;
        return a
    },
    gA = function(a) {
        return new fA(ab(a.c), a.g, fb(a.w), fb(a.a), fb(a.b), fb(a.h), v(a.C), v(a.m), cb(a.o), cb(a.G))
    };
var oA = function(a) {
        J.call(this);
        this.b = this.c = {};
        this.h = 0;
        this.N = Yb(mA);
        this.V = Yb(nA);
        this.m = !0;
        this.o = null;
        this.a = a;
        G(this.a, "keydown", this.w, void 0, this);
        G(this.a, "synthetic-keydown", this.C, void 0, this);
        Ge && (G(this.a, "keypress", this.K, void 0, this), G(this.a, "synthetic-keypress", this.O, void 0, this));
        G(this.a, "keyup", this.G, void 0, this);
        G(this.a, "synthetic-keyup", this.L, void 0, this)
    },
    pA;
t(oA, J);
var qA = function(a) {
        this.a = a || null;
        this.next = a ? null : {}
    },
    mA = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
    nA = "color date datetime datetime-local email month number password search tel text time url week".split(" ");
oA.prototype.R = function(a, b) {
    rA(this.c, sA(arguments), a)
};
var sA = function(a) {
    if ("string" === typeof a[1]) a = tb(tA(a[1]), function(d) {
        ab(d.keyCode, "A non-modifier key is needed in each stroke.");
        return uA(d.key || "", d.keyCode, d.modifiers)
    });
    else {
        var b = a,
            c = 1;
        La(a[1]) && (b = a[1], c = 0);
        for (a = []; c < b.length; c += 2) a.push(uA("", b[c], b[c + 1]))
    }
    return a
};
oA.prototype.T = function() {
    oA.D.T.call(this);
    this.c = {};
    qh(this.a, "keydown", this.w, !1, this);
    qh(this.a, "synthetic-keydown", this.C, !1, this);
    Ge && (qh(this.a, "keypress", this.K, !1, this), qh(this.a, "synthetic-keypress", this.O, !1, this));
    qh(this.a, "keyup", this.G, !1, this);
    qh(this.a, "synthetic-keyup", this.L, !1, this);
    this.a = null
};
var tA = function(a) {
    a = a.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
    a = a.split(" ");
    for (var b = [], c, d = 0; c = a[d]; d++) {
        var e = c.split("+"),
            f = null,
            g = null;
        c = 0;
        for (var k, l = 0; k = e[l]; l++) {
            switch (k) {
                case "shift":
                    c |= 1;
                    continue;
                case "ctrl":
                    c |= 2;
                    continue;
                case "alt":
                    c |= 4;
                    continue;
                case "meta":
                    c |= 8;
                    continue
            }
            null !== g && $a("At most one non-modifier key can be in a stroke.");
            e = void 0;
            f = k;
            if (!pA) {
                g = {};
                for (e in eA) g[eA[e]] = zh(parseInt(e, 10));
                pA = g
            }
            g = pA[f];
            ab(g, "Key name not found in goog.events.KeyNames: " +
                k);
            f = k;
            break
        }
        b.push({
            key: f,
            keyCode: g,
            modifiers: c
        })
    }
    return b
};
oA.prototype.G = function(a) {
    a = lA(a);
    Ce && vA(this, a);
    Ge && !this.g && wA(a) && xA(this, a, !0)
};
oA.prototype.L = function(a) {
    a = a.b();
    Ce && vA(this, a);
    Ge && !this.g && wA(a) && xA(this, a, !0)
};
var vA = function(a, b) {
        32 == a.o && 32 == b.a && (0, b.b)();
        a.o = null
    },
    wA = function(a) {
        return Ge && a.g && a.c
    };
oA.prototype.K = function(a) {
    a = lA(a);
    32 < a.a && wA(a) && (this.g = !0)
};
oA.prototype.O = function(a) {
    a = a.b();
    32 < a.a && wA(a) && (this.g = !0)
};
var rA = function(a, b, c) {
        var d = b.shift();
        w(d, function(e) {
            if ((e = a[e]) && (0 == b.length || e.a)) throw Error("Keyboard shortcut conflicts with existing shortcut");
        });
        b.length ? w(d, function(e) {
            e = e.toString();
            var f = new qA;
            e = e in a ? a[e] : a[e] = f;
            f = b.slice(0);
            rA(v(e.next, "An internal node must have a next map"), f, c)
        }) : w(d, function(e) {
            a[e] = new qA(c)
        })
    },
    yA = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = a[b[c]];
            if (d) return d
        }
    },
    uA = function(a, b, c) {
        c = c || 0;
        b = ["c_" + b + "_" + c];
        "" != a && b.push("n_" + a + "_" + c);
        return b
    };
oA.prototype.w = function(a) {
    xA(this, lA(a))
};
oA.prototype.C = function(a) {
    xA(this, a.b())
};
var xA = function(a, b, c) {
        a: {
            var d = b.a;
            if ("" != b.h) {
                var e = b.h;
                if ("Control" == e || "Shift" == e || "Meta" == e || "AltGraph" == e) {
                    d = !1;
                    break a
                }
            } else if (16 == d || 17 == d || 18 == d) {
                d = !1;
                break a
            }
            e = b.w;
            var f = "TEXTAREA" == e.tagName || "INPUT" == e.tagName || "BUTTON" == e.tagName || "SELECT" == e.tagName,
                g = !f && (e.isContentEditable || e.ownerDocument && "on" == e.ownerDocument.designMode);d = !f && !g || a.N[d] ? !0 : g ? !1 : b.c || b.g || b.o ? !0 : "INPUT" == e.tagName && a.V[e.type] ? 13 == d : "INPUT" == e.tagName || "BUTTON" == e.tagName ? 32 != d : !1
        }
        d && (!c && wA(b) ? a.g = !1 : (c = zh(b.a),
            d = uA(b.h, c, (b.G ? 1 : 0) | (b.g ? 2 : 0) | (b.c ? 4 : 0) | (b.o ? 8 : 0)), (e = yA(a.b, d)) && (e = !(1500 <= Va() - a.h)), e || (a.b = a.c, a.h = Va()), (e = yA(a.b, d)) && e.next && (a.b = e.next, a.h = Va()), e && (e.next ? (0, b.b)() : (a.b = a.c, a.h = Va(), a.m && (0, b.b)(), d = bb(e.a, "A terminal node must have a string shortcut identifier."), e = a.dispatchEvent(new zA("shortcut", d, b.m)), (e &= a.dispatchEvent(new zA("shortcut_" + d, d, b.m))) || (0, b.b)(), Ce && (a.o = c)))))
    },
    zA = function(a, b, c) {
        F.call(this, a, c);
        this.identifier = b
    };
t(zA, F);
var AA = function(a) {
    this.c = a;
    this.g = Km.M();
    this.F = K.M();
    this.a = new oA(document);
    this.a.m = !1;
    this.a.R("CTRL_SHIFT_S", 83, (Fe ? 8 : 2) | 1);
    G(this.a, "shortcut", this.b, !1, this)
};
t(AA, Lg);
AA.prototype.T = function() {
    AA.D.T.call(this);
    qh(this.a, "shortcut", this.b, !1, this)
};
AA.prototype.b = function(a) {
    "CTRL_SHIFT_S" == a.identifier && (vh(this.c.b, "action"), a = this.F, L(a, M(a, 289)), this.g.log("swaplang"))
};
var CA = function(a, b, c, d, e, f) {
    J.call(this);
    this.v = a;
    this.b = D("DIV", "sl-sugg-button-container");
    this.C = b;
    a = B("sl-sugg-button-container", this.v) ? ng(this.v.firstElementChild) : ng(this.v);
    this.g = c ? c : a.length;
    ig(this.v);
    this.c = !!d;
    this.o = !!e;
    this.a = [];
    c = this.c ? this.g + 1 : this.g;
    for (d = 0; d < c; ++d) e = new jt(""), e.Oa(16, !0), G(e, "action", this.O, !1, this), e.render(this.b), Vr(e.c, e, 0 == d ? 2 : 3), this.a.push(e);
    this.v.appendChild(this.b);
    this.h = [];
    this.m = D("DIV", "ls-left-arrow");
    this.w = D("DIV", "ls-right-arrow");
    this.G = 0;
    f && (this.v.insertBefore(this.m, this.v.firstChild), this.v.appendChild(this.w), G(this.m, "mouseover", function() {
        BA(this, 2)
    }, !1, this), G(this.m, "mouseout", function() {
        clearTimeout(this.G)
    }, !1, this), G(this.w, "mouseover", function() {
        BA(this, -2)
    }, !1, this), G(this.w, "mouseout", function() {
        clearTimeout(this.G)
    }, !1, this));
    this.F = K.M()
};
t(CA, J);
var BA = function(a, b) {
    a.b.scrollLeft -= b;
    a.G = setTimeout(function() {
        BA(a, b)
    }, 10)
};
CA.prototype.L = function(a) {
    this.render(a.data, a.selected)
};
CA.prototype.O = function(a) {
    var b = a.a.Y();
    if (a.a.Ea(16)) {
        a: {
            var c = a.a;
            for (var d = 0, e = 0; d < this.a.length; d++) {
                var f = this.a[d];
                if (f && f.isVisible()) {
                    if (c == f) {
                        c = e;
                        break a
                    }
                    e++
                }
            }
            c = -1
        }
        sm(this.F, this.c, 2, b, c, "")
    }
    else a.a.bd(!0);
    gp(a.a.j(), this.v);
    this.dispatchEvent({
        type: "click",
        data: b
    })
};
CA.prototype.render = function(a, b) {
    a = a.slice(0, this.g);
    var c = this.h.slice();
    c.length = this.g;
    a: {
        c = Gb(c).sort();
        var d = Gb(a).sort();
        if (Ma(c) && Ma(d) && c.length == d.length) {
            for (var e = c.length, f = 0; f < e; f++)
                if (c[f] !== d[f]) {
                    c = !1;
                    break a
                } c = !0
        } else c = !1
    }
    c = !c;
    this.h = a;
    a = 0;
    this.c && this.o && (a = 1);
    for (d = 0; d < this.h.length; d++) {
        e = this.a[a];
        f = this.h[d];
        if (c) {
            e.Cf(f);
            var g = this.C(f);
            e.g(g)
        }
        DA(this, e, e.Y() == b, f);
        a++
    }
    for (; a < this.g; a++) this.a[a].setVisible(!1);
    this.c && (a = this.a[this.o ? 0 : this.a.length - 1], a.Cf("auto"), a.g(detect_language),
        DA(this, a, a.Y() == b));
    V(this.v, !0)
};
var DA = function(a, b, c, d) {
    b.setVisible(!0);
    b.bd(c);
    c && gp(b.j(), a.b);
    d && (b.j().id = "sugg-item-" + d)
};
CA.prototype.K = function(a) {
    if (this.c) {
        var b = this.a[this.o ? 0 : this.a.length - 1];
        "" == a.data ? b.g(detect_language) : (a = source_language_detected.replace(/%\d\$s/g, this.C(a.data)), b.g(a))
    }
};
var EA = function(a) {
        this.a = a;
        this.b = this.m = this.h = this.o = this.g = null;
        this.O = !1;
        this.c = null;
        this.C = function() {
            return ""
        };
        this.w = Km.M();
        this.W = xl.M();
        this.F = K.M();
        this.G = null
    },
    HA = function(a, b) {
        b.lj && (a.g = b.lj, FA(a.g, a.La, a), GA(a, a.a, "srcLanguageUpdated", a.Jl), GA(a, a.a, "detectSrcUpdated", a.ll));
        b.uj && (a.o = b.uj, FA(a.o, a.N, a), GA(a, a.a, "tgtLanguageUpdated", a.Sl));
        b.ij && (a.K = b.ij, GA(a, a.K, "action", a.Fa));
        b.kj && (a.R = b.kj, GA(a, a.R, "action", p(a.L, a, "src", !0)));
        b.tj && (a.V = b.tj, GA(a, a.V, "action", p(a.L, a, "tgt",
            !1)));
        if (b.mj) {
            a.h = b.mj;
            GA(a, a.h, "click", a.Kl);
            var c = a.h;
            G(a.a, "staticSrcSuggestionUpdated", c.L, !1, c);
            c = a.h;
            G(a.a, "detectSrcUpdated", c.K, !1, c)
        }
        b.vj && (a.m = b.vj, GA(a, a.m, "click", a.Tl), c = a.m, G(a.a, "staticTgtSuggestionUpdated", c.L, !1, c));
        b.Nc && (a.b = b.Nc, GA(a, a.b, "action", a.Ql));
        b.wj && (a.c = b.wj, GA(a, new Xr(a.c.j()), "key", a.Ji), GA(a, new Av(a.c.j()), "paste", a.Ji));
        b.Ya && (a.C = b.Ya)
    },
    JA = function(a, b) {
        (a.O = b) && a.b ? a.b.oa(!1) : IA(a)
    },
    GA = function(a, b, c, d) {
        b && G(b, c, d, !1, a)
    };
EA.prototype.La = function() {
    var a = this.g,
        b = this.a.g;
    var c = cw(this.a.W);
    KA(this, a, b, c, "slc")
};
EA.prototype.N = function() {
    var a = this.o,
        b = this.a.h;
    var c = cw(this.a.X.a);
    KA(this, a, b, c, "tlc", !0)
};
var LA = function(a, b, c) {
    var d = {};
    d.lpk = c;
    a.G = d;
    a.G.lsa = b;
    Pm(a.w, "webapp", "lsa", b, d)
};
EA.prototype.Fa = function() {
    this.g && this.g.isVisible() ? (LA(this, "lso", "src"), rm(this.F, 217)) : this.o && this.o.isVisible() && (LA(this, "lso", "tgt"), rm(this.F, 219))
};
EA.prototype.L = function(a, b) {
    LA(this, "lsc", a);
    rm(this.F, b ? 218 : 220)
};
var KA = function(a, b, c, d, e, f) {
    var g = b.Y(),
        k = MA(a),
        l = NA(a, f);
    c.call(a.a, g, 4);
    null != b.O && Wb(k, b.O);
    "" != d && (k.emphlang = d);
    b = cw(a.a.L.a);
    f || "" == b || (k.bslang = b);
    "" != l && (k.sugglang = l);
    a.G = k;
    a.G[e] = g;
    Pm(a.w, "webapp", e, g, k)
};
h = EA.prototype;
h.Jl = function(a) {
    this.g.Y() != a.data && OA(this.g, a.data);
    IA(this);
    a.bi && (PA(this, "slauto", MA(this)), rm(this.F, 221))
};
h.ll = function() {
    IA(this)
};
h.Sl = function(a) {
    this.o.Y() != a.data && OA(this.o, a.data);
    IA(this);
    a.bi && (PA(this, "tlauto", MA(this)), rm(this.F, 222))
};
h.Kl = function(a) {
    if (a.data == this.a.a) a.target.dispatchEvent({
        type: "clickSelected"
    }), a.preventDefault();
    else {
        var b = this.a.g,
            c = NA(this),
            d = MA(this, a.data);
        b.call(this.a, a.data, 3);
        d.sugglang = c;
        PA(this, "ssuggclick", d)
    }
};
h.Tl = function(a) {
    if (a.data == this.a.b) a.target.dispatchEvent({
        type: "clickSelected"
    }), a.preventDefault();
    else {
        var b = this.a.h,
            c = NA(this, !0),
            d = MA(this, a.data);
        b.call(this.a, a.data, 3);
        d.sugglang = c;
        PA(this, "tsuggclick", d)
    }
};
h.Ql = function() {
    var a = MA(this),
        b = this.a.a,
        c = this.a.b,
        d = b;
    if ("auto" == b && (d = this.a.c, !d)) return;
    (b = this.C()) && this.c && (this.c.b(b), Al(this.W, 28));
    PA(this, "swapclick", a);
    a = this.a;
    a.g(c, 5);
    a.h(d, 5);
    a.dispatchEvent("languageSelected");
    Sm(this.w, "swap", 1, "accumulate");
    c = this.F;
    d = M(c, 89);
    a = cl(); of (d, 46, a);
    L(c, d)
};
h.Ji = function(a) {
    if ("paste" == a.type || 2 > yc(this.c.Y()).length) this.a.G = !1
};
var MA = function(a, b) {
        var c = {};
        c.sl = a.a.a;
        c.tl = a.a.b;
        b && (c.val = b);
        (b = a.a.c) && (c.dsl = b);
        a.c && (c.ql = yc(a.c.Y()).length);
        return c
    },
    QA = function(a) {
        Sm(a.w, "ssel", a.a.na);
        Sm(a.w, "tsel", a.a.Z)
    },
    PA = function(a, b, c) {
        a.G = c;
        a.w.log(b, c)
    },
    NA = function(a, b) {
        return b ? cw(a.a.O.a) : cw(a.a.K.a)
    },
    IA = function(a) {
        if (a.b && !a.O) {
            var b = a.a.a;
            "auto" == b && (b = a.a.c);
            "zh-CN" == b && "zh-TW" == a.a.w && (b = "zh-TW");
            "" == b || b == a.a.b ? a.b.oa(!1) : a.b.oa(!0)
        }
    };
var RA = 0,
    SA = /^[a-zA-Z0-9_\-]*$/,
    TA = function(a) {
        v(a.match(SA), "ControlType.create contains invalid characters" + a);
        return a + "+" + RA++
    };
var UA = function(a, b) {
    Lg.call(this);
    this.c = null;
    this.g = b;
    this.a = [];
    if (a > this.g) throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
    for (b = 0; b < a; b++) this.a.push(this.b())
};
t(UA, Lg);
var VA = function(a, b) {
        a.c = b
    },
    XA = function(a, b) {
        a.a.length < a.g ? a.a.push(b) : WA(b)
    };
UA.prototype.b = function() {
    return this.c ? this.c() : {}
};
var WA = function(a) {
    if (Oa(a))
        if (Na(a.Ia)) a.Ia();
        else
            for (var b in a) delete a[b]
};
UA.prototype.T = function() {
    UA.D.T.call(this);
    for (var a = this.a; a.length;) WA(a.pop());
    delete this.a
};
var $A = function() {
    this.a = [];
    this.b = new pj;
    this.L = this.K = this.O = this.m = 0;
    this.c = new pj;
    this.o = this.C = 0;
    this.Fa = 1;
    this.g = new UA(0, 4E3);
    this.g.b = function() {
        return new YA
    };
    this.G = new UA(0, 50);
    this.G.b = function() {
        return new ZA
    };
    var a = this;
    this.w = new UA(0, 2E3);
    VA(this.w, function() {
        return a.Fa++
    });
    this.h = {}
};
$A.prototype.F = Zi("goog.debug.Trace");
var ZA = function() {
    this.Hh = this.time = this.count = 0
};
ZA.prototype.toString = function() {
    var a = [];
    a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
    this.Hh && a.push(" [VarAlloc = ", this.Hh, "]");
    return a.join("")
};
var YA = function() {},
    cB = function(a, b, c, d) {
        var e = []; - 1 == c ? e.push("    ") : e.push(aB(a.b - c));
        e.push(" ", bB(a.b - b));
        0 == a.a ? e.push(" Start        ") : 1 == a.a ? (e.push(" Done "), e.push(aB(a.h - a.startTime), " ms ")) : e.push(" Comment      ");
        e.push(d, a);
        0 < a.g && e.push("[VarAlloc ", a.g, "] ");
        return e.join("")
    };
YA.prototype.toString = function() {
    return null == this.type ? v(this.c) : "[" + this.type + "] " + this.c
};
var dB = {
    jr: !0
};
$A.prototype.rh = function() {
    this.h = {}
};
var eB = function(a) {
    a.h.stop && nj(a.b, function(b) {
        this.h.stop(b.id, dB)
    }, a);
    tj(a.b)
};
$A.prototype.reset = function() {
    eB(this);
    for (var a = 0; a < this.a.length; a++) {
        var b = this.a[a];
        b.id ? sj(this.b, b.id) || (XA(this.w, b.id), XA(this.g, b)) : XA(this.g, b)
    }
    this.a.length = 0;
    this.m = Va();
    this.o = this.C = this.L = this.K = this.O = 0;
    a = this.c.sb();
    for (b = 0; b < a.length; b++) {
        var c = this.c.get(a[b]);
        c.count = 0;
        c.time = 0;
        c.Hh = 0;
        XA(this.G, c)
    }
    tj(this.c)
};
$A.prototype.toString = function() {
    for (var a = [], b = -1, c = [], d = 0; d < this.a.length; d++) {
        var e = this.a[d];
        1 == e.a && c.pop();
        a.push(" ", cB(e, this.m, b, c.join("")));
        b = e.b;
        a.push("\n");
        0 == e.a && c.push("|  ")
    }
    if (0 != this.b.sf()) {
        var f = Va();
        a.push(" Unstopped timers:\n");
        nj(this.b, function(g) {
            a.push("  ", g, " (", f - g.startTime, " ms, started at ", bB(g.startTime), ")\n")
        })
    }
    b = this.c.sb();
    for (d = 0; d < b.length; d++) c = this.c.get(b[d]), 1 < c.count && a.push(" TOTAL ", c, "\n");
    a.push("Total tracers created ", this.C, "\n", "Total comments created ",
        this.o, "\n", "Overhead start: ", this.O, " ms\n", "Overhead end: ", this.K, " ms\n", "Overhead comment: ", this.L, " ms\n");
    return a.join("")
};
var aB = function(a) {
        a = Math.round(a);
        var b = "";
        1E3 > a && (b = " ");
        100 > a && (b = "  ");
        10 > a && (b = "   ");
        return b + a
    },
    bB = function(a) {
        a = Math.round(a);
        return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
    };
new $A;
var fB = function() {};
fB.prototype.stopPropagation = function() {
    this.g = !0;
    this.h()
};
fB.prototype.c = function() {
    return this.g || !1
};
var gB = function(a) {
    this.a = [];
    this.name = a
};
gB.prototype.c = Zi("wireless.events.browser.Dispatcher");
gB.prototype.dispatchEvent = function(a, b) {
    var c = "*" == a.a.charAt(0),
        d;
    this.handleEvent(a, b) && (d = !0);
    for (var e = (b || "") + this.name + "->", f = -1, g;
        (!d || c) && (g = this.a[++f]);) d = g.dispatchEvent(a, e) || d;
    d || b || aj(this.c, "Event not handled: " + a.a + " type: " + (a ? a.type : "none") + " customArg: " + a.b);
    return d
};
var hB = function(a, b) {
    gB.call(this, b);
    this.g = a;
    this.b = [];
    this.C = {}
};
t(hB, gB);
var iB = new hB(void 0, "root");
Aa("_e", function(a, b, c, d) {
    a = a || {};
    a.a = b;
    a.b = c;
    a.o = d || a.currentTarget || null;
    a.h = a.stopPropagation;
    a.stopPropagation = fB.prototype.stopPropagation;
    a.c = fB.prototype.c;
    return iB.dispatchEvent(a)
});
var jB = function(a, b, c) {
    v(b, a.name + " - registerHandler: Missing controlType.");
    v(c, a.name + " - registerHandler: Missing handlerFunc. controlType: " + b);
    v(!a.C[b], a.name + " - registerHandler: Handler already defined. controlType: " + b);
    c = a.b.push(c, a.g) - 2;
    a.C[b] = c
};
hB.prototype.handleEvent = function(a, b) {
    var c = this.C[a.a];
    if (void 0 !== c) return kB(this, a, a.a, a.b, b), this.b[c].call(this.b[c + 1], a, a.a, a.b), !0
};
var kB = function(a, b, c, d, e) {
    ")" == c.slice(-1) || bj(a.c, p(function() {
        var f = "";
        b && (f = "BrowserType=" + b.type, b.which && (f += " key=" + b.which), f = " (" + f + ")");
        var g = "";
        void 0 !== d && (g = " customArg: " + d);
        return (e || "") + this.name + " handling event: " + c + g + f
    }, a))
};
var lB = function(a, b) {
        this.Code = a;
        this.Name = b
    },
    pB = function(a, b, c) {
        this.qa = b.qa + "_" + a.Code;
        "rcnt" == c ? this.qa += "_r" : "srch" == c && (this.qa += "_s");
        mB[this.qa] = this;
        this.b = b;
        this.a = c;
        this.Nb = a.Name;
        this.code = a.Code;
        this.v = No(nB, {
            id: this.qa,
            name: a.Name,
            code: a.Code,
            qe: oB
        })
    },
    qB = {},
    rB = (qB.rglr = 0, qB.rcnt = 2, qB.srch = 3, qB);
pB.prototype.j = function() {
    return this.v
};
pB.prototype.re = function(a) {
    this.b.re(this.Nb, this.code, this.a, a)
};
var mB = {},
    sB = function(a) {
        if (a && a.parentNode && a.parentNode.children)
            for (var b = 0, c = 0, d = a.parentNode; b < d.children.length; b++) {
                var e = d.children[b];
                if (op(e) && Go(e, "language_list_item_wrapper")) {
                    if (a == e) return c;
                    c++
                }
            }
        return -1
    },
    tB = function(a, b, c) {
        (b = mB[c]) && b.re(sB(a.currentTarget))
    },
    uB = null,
    oB = TA("changeLanguage"),
    vB = TA("searchEdited"),
    zB = function(a, b) {
        Lg.call(this);
        this.a = [];
        this.c = [];
        this.g = [];
        this.qa = a;
        this.C = null;
        this.L = [];
        this.ra = new J;
        this.v = D("DIV", "language-list");
        this.h = b;
        this.o = No(wB, {
            qe: vB,
            vm: this.qa,
            wm: this.h.o
        });
        gg(this.v, this.o);
        V(this.o, !1);
        this.G = new jt;
        this.G.ba(B("back-image-black", this.o));
        this.G.wd(this.h.b);
        ks(this.G, this.h.b);
        G(this.G, "action", this.ia, !1, this);
        if (b = B("clear-image-black", this.o)) this.N = new jt, this.N.ba(b), this.N.wd(this.h.a), ks(this.N, this.h.a), G(this.N, "action", this.W, !1, this), V(b, !1);
        this.m = D("DIV", "language-list-unfiltered-langs-" + this.qa);
        this.Z = D("DIV", "language_list_languages language_list_" + a);
        gg(this.Z, this.m);
        gg(this.v, this.Z);
        this.b = D("DIV", "language_list_languages language_list_" +
            a);
        gg(this.v, this.b);
        V(this.b, !1);
        this.R = "";
        this.w = xB(this.h.h, this.m);
        V(this.w, !1);
        this.Ca = xB(this.h.c, this.m);
        yB[this.qa] = this;
        this.xa = 0;
        this.F = K.M();
        this.Na = "";
        this.O = {}
    };
t(zB, Lg);
var yB = {},
    FA = function(a, b, c) {
        G(a.ra, "returned", b, !1, c)
    },
    OA = function(a, b) {
        for (var c = 0; c < a.a.length; c++)
            if (a.a[c].code === b) {
                null != a.C && (a.C.setAttribute("aria-label", a.a[c].Nb), E(a.C, a.a[c].Nb));
                a.V(a.a[c].Nb, a.a[c].code);
                a.R = b;
                break
            }
    };
zB.prototype.Y = function() {
    return this.R
};
var BB = function(a, b, c) {
        AB(yB[c], (new Vg(a)).target.value)
    },
    AB = function(a, b) {
        var c = B("clear-image-black", a.o);
        a.Na = b;
        if ("" === b) V(a.m.parentElement, !0), V(a.b, !1), c && V(c, !1);
        else
            for (V(a.m.parentElement, !1), V(a.b, !0), c && V(c, !0), a = ng(a.b), c = 0; c < a.length; c++) {
                var d = a[c],
                    e = b,
                    f = Eg(d),
                    g = 0 == zc(e, f.substr(0, e.length));
                V(d, g);
                d = B("language_list_item", d);
                E(d, f);
                g && (g = D("B", null, f.substr(0, e.length)), e = D("DIV", null, g, f.substr(e.length)), ig(d), gg(d, e))
            }
    };
zB.prototype.re = function(a, b, c, d) {
    OA(this, b);
    sm(this.F, "sl_list" == this.qa, rB[c], b, d, "srch" == c ? this.Na : "");
    this.O.ct = (Va() - this.xa).toString();
    this.O.stp = c;
    this.close()
};
zB.prototype.V = function(a, b) {
    if ("auto" != b) {
        a = new lB(b, a);
        for (var c = 0; c < this.c.length; c++)
            if (this.c[c].code === b) {
                CB(this, c, 1);
                break
            } b = new pB(a, this, "rcnt");
        lg(this.w, b.j(), 1);
        this.c.splice(0, 0, b);
        5 < this.c.length && CB(this, 5, this.c.length - 5);
        V(this.w, !0)
    }
};
var EB = function(a) {
    a.xa = Va();
    a.ia();
    DB(a, a.a);
    DB(a, a.c);
    DB(a, a.g);
    for (var b = 0; b < a.a.length; b++) {
        var c = a.a[b],
            d = a.L.includes(c.code);
        U(c.j(), "item-emphasized", d)
    }
    rm(a.F, "sl_list" === a.qa ? 82 : 83)
};
zB.prototype.close = function() {
    vh(this.ra, "returned")
};
var DB = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            U(b[c].j(), "item-selected", b[c].code === a.R);
            var d = B("language_list_item", b[c].j()),
                e = "";
            b[c].code === a.R && (e = a.h.g.replace("%1$s", b[c].Nb));
            d.setAttribute("aria-label", e)
        }
    },
    CB = function(a, b, c) {
        for (var d = b; d < b + c; d++) mg(a.c[d].j());
        a.c.splice(b, c);
        V(a.w, 0 < a.c.length)
    },
    GB = function(a, b) {
        CB(a, 0, a.c.length);
        V(a.w, 0 < b.length);
        for (var c = 0; c < b.length && 5 > c; c++) {
            for (var d = new lB(b[c], ""), e = 0; e < a.a.length; e++) a.a[e].code === b[c] && (d.Name = a.a[e].Nb);
            d = FB(a, d, a.w, "rcnt");
            a.c.push(d)
        }
        a.L = b
    },
    IB = function(a) {
        V(a.o, !0);
        a.W();
        HB(a).focus()
    },
    JB = function(a) {
        !op(a.o) && IB(a)
    };
zB.prototype.ia = function() {
    this.W();
    V(this.o, !1)
};
zB.prototype.setVisible = function(a) {
    V(this.v, a)
};
zB.prototype.isVisible = function() {
    return op(this.v)
};
zB.prototype.W = function() {
    HB(this).value = "";
    AB(this, "")
};
var HB = function(a) {
        return gb(a.v.querySelector("#" + a.qa + "-search-box"))
    },
    FB = function(a, b, c, d) {
        d = new pB(b, a, d);
        "auto" === b.Code ? lg(a.m, d.j(), 0) : gg(c, d.j());
        return d
    },
    xB = function(a, b) {
        a = No(KB, {
            text: a
        });
        gg(b, a);
        return a
    };
zB.prototype.K = function(a) {
    for (var b = 0; b < this.a.length; b++) mg(this.a[b].j());
    for (b = 0; b < this.g.length; b++) mg(this.g[b].j());
    this.a = [];
    this.g = [];
    if (null != a)
        for (b = 0; b < a.length; b++) {
            var c = FB(this, a[b], this.Ca, "rglr");
            this.a.push(c);
            "auto" != a[b].Code && (c = FB(this, a[b], this.b, "srch"), this.g.push(c))
        }
};
zB.prototype.T = function() {
    zB.D.T.call(this)
};
zB.prototype.j = function() {
    return this.v
};
var LB = function(a) {
    this.a = a
};
LB.prototype.tb = function() {
    return null
};
LB.prototype.Ua = function() {
    return this.a
};
var MB = {
        "* ARIA-CHECKED": !0,
        "* ARIA-COLCOUNT": !0,
        "* ARIA-COLINDEX": !0,
        "* ARIA-DESCRIBEDBY": !0,
        "* ARIA-DISABLED": !0,
        "* ARIA-GOOG-EDITABLE": !0,
        "* ARIA-LABEL": !0,
        "* ARIA-LABELLEDBY": !0,
        "* ARIA-MULTILINE": !0,
        "* ARIA-MULTISELECTABLE": !0,
        "* ARIA-ORIENTATION": !0,
        "* ARIA-PLACEHOLDER": !0,
        "* ARIA-READONLY": !0,
        "* ARIA-REQUIRED": !0,
        "* ARIA-ROLEDESCRIPTION": !0,
        "* ARIA-ROWCOUNT": !0,
        "* ARIA-ROWINDEX": !0,
        "* ARIA-SELECTED": !0,
        "* ABBR": !0,
        "* ACCEPT": !0,
        "* ACCESSKEY": !0,
        "* ALIGN": !0,
        "* ALT": !0,
        "* AUTOCOMPLETE": !0,
        "* AXIS": !0,
        "* BGCOLOR": !0,
        "* BORDER": !0,
        "* CELLPADDING": !0,
        "* CELLSPACING": !0,
        "* CHAROFF": !0,
        "* CHAR": !0,
        "* CHECKED": !0,
        "* CLEAR": !0,
        "* COLOR": !0,
        "* COLSPAN": !0,
        "* COLS": !0,
        "* COMPACT": !0,
        "* COORDS": !0,
        "* DATETIME": !0,
        "* DIR": !0,
        "* DISABLED": !0,
        "* ENCTYPE": !0,
        "* FACE": !0,
        "* FRAME": !0,
        "* HEIGHT": !0,
        "* HREFLANG": !0,
        "* HSPACE": !0,
        "* ISMAP": !0,
        "* LABEL": !0,
        "* LANG": !0,
        "* MAX": !0,
        "* MAXLENGTH": !0,
        "* METHOD": !0,
        "* MULTIPLE": !0,
        "* NOHREF": !0,
        "* NOSHADE": !0,
        "* NOWRAP": !0,
        "* OPEN": !0,
        "* READONLY": !0,
        "* REQUIRED": !0,
        "* REL": !0,
        "* REV": !0,
        "* ROLE": !0,
        "* ROWSPAN": !0,
        "* ROWS": !0,
        "* RULES": !0,
        "* SCOPE": !0,
        "* SELECTED": !0,
        "* SHAPE": !0,
        "* SIZE": !0,
        "* SPAN": !0,
        "* START": !0,
        "* SUMMARY": !0,
        "* TABINDEX": !0,
        "* TITLE": !0,
        "* TYPE": !0,
        "* VALIGN": !0,
        "* VALUE": !0,
        "* VSPACE": !0,
        "* WIDTH": !0
    },
    NB = {
        "* USEMAP": !0,
        "* ACTION": !0,
        "* CITE": !0,
        "* HREF": !0,
        "* LONGDESC": !0,
        "* SRC": !0,
        "LINK HREF": !0,
        "* FOR": !0,
        "* HEADERS": !0,
        "* NAME": !0,
        "A TARGET": !0,
        "* CLASS": !0,
        "* ID": !0,
        "* STYLE": !0
    };
var OB = {};

function PB(a) {
    if (y && !Te(9)) return [0, 0, 0, 0];
    var b = OB.hasOwnProperty(a) ? OB[a] : null;
    if (b) return b;
    65536 < Object.keys(OB).length && (OB = {});
    var c = [0, 0, 0, 0];
    b = QB(a, /\\[0-9A-Fa-f]{6}\s?/g);
    b = QB(b, /\\[0-9A-Fa-f]{1,5}\s/g);
    b = QB(b, /\\./g);
    b = b.replace(/:not\(([^\)]*)\)/g, "     $1 ");
    b = b.replace(/{[^]*/gm, "");
    b = RB(b, c, /(\[[^\]]+\])/g, 2);
    b = RB(b, c, /(#[^\#\s\+>~\.\[:]+)/g, 1);
    b = RB(b, c, /(\.[^\s\+>~\.\[:]+)/g, 2);
    b = RB(b, c, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
    b = RB(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
    b = RB(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
    b = b.replace(/[\*\s\+>~]/g, " ");
    b = b.replace(/[#\.]/g, " ");
    RB(b, c, /([^\s\+>~\.\[:]+)/g, 3);
    b = c;
    return OB[a] = b
}

function RB(a, b, c, d) {
    return a.replace(c, function(e) {
        b[d] += 1;
        return Array(e.length + 1).join(" ")
    })
}

function QB(a, b) {
    return a.replace(b, function(c) {
        return Array(c.length + 1).join("A")
    })
};
var SB = {
        rgb: !0,
        rgba: !0,
        alpha: !0,
        rect: !0,
        image: !0,
        "linear-gradient": !0,
        "radial-gradient": !0,
        "repeating-linear-gradient": !0,
        "repeating-radial-gradient": !0,
        "cubic-bezier": !0,
        matrix: !0,
        perspective: !0,
        rotate: !0,
        rotate3d: !0,
        rotatex: !0,
        rotatey: !0,
        steps: !0,
        rotatez: !0,
        scale: !0,
        scale3d: !0,
        scalex: !0,
        scaley: !0,
        scalez: !0,
        skew: !0,
        skewx: !0,
        skewy: !0,
        translate: !0,
        translate3d: !0,
        translatex: !0,
        translatey: !0,
        translatez: !0
    },
    TB = /[\n\f\r"'()*<>]/g,
    UB = {
        "\n": "%0a",
        "\f": "%0c",
        "\r": "%0d",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "*": "%2a",
        "<": "%3c",
        ">": "%3e"
    };

function VB(a) {
    return v(UB[a])
}
var WB = function(a, b, c) {
    b = yc(b);
    if ("" == b) return null;
    if (0 == zc("url(", b.substr(0, 4))) {
        if (!b.endsWith(")") || 1 < (b ? b.split("(").length - 1 : 0) || 1 < (b ? b.split(")").length - 1 : 0) || !c) a = null;
        else {
            a: {
                b = b.substring(4, b.length - 1);
                for (var d = 0; 2 > d; d++) {
                    var e = "\"'".charAt(d);
                    if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
                        b = b.substring(1, b.length - 1);
                        break a
                    }
                }
            }
            a = c ? (a = c(b, a)) && "about:invalid#zClosurez" != Pc(a) ? 'url("' + Pc(a).replace(TB, VB) + '")' : null : null
        }
        return a
    }
    if (0 < b.indexOf("(")) {
        if (/"|'/.test(b)) return null;
        for (a = /([\-\w]+)\(/g; c =
            a.exec(b);)
            if (!(c[1] in SB)) return null
    }
    return b
};

function XB(a, b) {
    a = n[a];
    return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
}

function YB(a, b) {
    return (a = n[a]) && a.prototype && a.prototype[b] || null
}
var ZB = XB("Element", "attributes") || XB("Node", "attributes"),
    $B = YB("Element", "hasAttribute"),
    aC = YB("Element", "getAttribute"),
    bC = YB("Element", "setAttribute"),
    cC = YB("Element", "removeAttribute"),
    dC = YB("Element", "getElementsByTagName"),
    eC = YB("Element", "matches") || YB("Element", "msMatchesSelector"),
    fC = XB("Node", "nodeName"),
    gC = XB("Node", "nodeType"),
    hC = XB("Node", "parentNode"),
    iC = XB("HTMLElement", "style") || XB("Element", "style"),
    jC = XB("HTMLStyleElement", "sheet"),
    kC = YB("CSSStyleDeclaration", "getPropertyValue"),
    lC = YB("CSSStyleDeclaration", "setProperty");

function mC(a, b, c, d) {
    if (a) return a.apply(b);
    a = b[c];
    if (!d(a)) throw Error("Clobbering detected");
    return a
}

function nC(a, b, c, d) {
    if (a) return a.apply(b, d);
    if (y && 10 > document.documentMode) {
        if (!b[c].call) throw Error("IE Clobbering detected");
    } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
    return b[c].apply(b, d)
}

function oC(a) {
    return mC(ZB, a, "attributes", function(b) {
        return b instanceof NamedNodeMap
    })
}

function pC(a, b, c) {
    try {
        nC(bC, a, "setAttribute", [b, c])
    } catch (d) {
        if (-1 == d.message.indexOf("A security problem occurred")) throw d;
    }
}

function qC(a) {
    rC(a);
    return mC(iC, a, "style", function(b) {
        return b instanceof CSSStyleDeclaration
    })
}

function rC(a) {
    if (!(a instanceof HTMLElement)) throw Error("Not an HTMLElement");
}

function sC(a) {
    rC(a);
    return mC(jC, a, "sheet", function(b) {
        return b instanceof CSSStyleSheet
    })
}

function tC(a) {
    return mC(fC, a, "nodeName", function(b) {
        return "string" == typeof b
    })
}

function uC(a) {
    return mC(gC, a, "nodeType", function(b) {
        return "number" == typeof b
    })
}

function vC(a) {
    return mC(hC, a, "parentNode", function(b) {
        return !(b && "string" == typeof b.name && b.name && "parentnode" == b.name.toLowerCase())
    })
}

function wC(a, b) {
    return nC(kC, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [b]) || ""
}

function xC(a, b, c) {
    nC(lC, a, a.setProperty ? "setProperty" : "setAttribute", [b, c])
};
var yC = y && 10 > document.documentMode ? null : /\s*([^\s'",]+[^'",]*(('([^'\r\n\f\\]|\\[^])*')|("([^"\r\n\f\\]|\\[^])*")|[^'",])*)/g,
    zC = {
        "-webkit-border-horizontal-spacing": !0,
        "-webkit-border-vertical-spacing": !0
    },
    CC = function(a, b, c) {
        var d = [];
        a = AC(Gb(a.cssRules));
        w(a, function(e) {
            if (b && !/[a-zA-Z][\w-:\.]*/.test(b)) throw Error("Invalid container id");
            if (!(b && y && 10 == document.documentMode && /\\['"]/.test(e.selectorText))) {
                var f = b ? e.selectorText.replace(yC, "#" + b + " $1") : e.selectorText;
                d.push(md(f, BC(e.style, c)))
            }
        });
        return od(d)
    },
    AC = function(a) {
        return sb(a, function(b) {
            return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE
        })
    },
    EC = function(a, b, c) {
        a = DC("<style>" + a + "</style>");
        return null == a || null == a.sheet ? pd : CC(a.sheet, void 0 != b ? b : null, c)
    },
    DC = function(a) {
        if (y && !Te(10) || "function" != typeof n.DOMParser) return null;
        a = Rd(dc("Never attached to DOM."), "<html><head></head><body>" + a + "</body></html>");
        return (new DOMParser).parseFromString(Bd(a), "text/html").body.children[0]
    },
    BC = function(a, b) {
        if (!a) return $c;
        var c = document.createElement("div").style,
            d = FC(a);
        w(d, function(e) {
            var f = De && e in zC ? e : e.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
            vc(f, "--") || vc(f, "var") || (e = wC(a, e), e = WB(f, e, b), null != e && xC(c, f, e))
        });
        return Sd(c.cssText || "")
    },
    HC = function(a) {
        var b = Array.from(nC(dC, a, "getElementsByTagName", ["STYLE"])),
            c = Kb(b, function(e) {
                return Gb(sC(e).cssRules)
            });
        c = AC(c);
        c.sort(function(e, f) {
            e = PB(e.selectorText);
            a: {
                f = PB(f.selectorText);
                for (var g = Math.min(e.length, f.length), k = 0; k < g; k++) {
                    var l = e[k];
                    var m = f[k];
                    l = l > m ? 1 : l <
                        m ? -1 : 0;
                    if (0 != l) {
                        e = l;
                        break a
                    }
                }
                e = e.length;f = f.length;e = e > f ? 1 : e < f ? -1 : 0
            }
            return -e
        });
        a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
        for (var d; d = a.nextNode();) w(c, function(e) {
            nC(eC, d, d.matches ? "matches" : "msMatchesSelector", [e.selectorText]) && e.style && GC(d, e.style)
        });
        w(b, mg)
    },
    GC = function(a, b) {
        var c = FC(a.style),
            d = FC(b);
        w(d, function(e) {
            if (!(0 <= c.indexOf(e))) {
                var f = wC(b, e);
                xC(a.style, e, f)
            }
        })
    },
    FC = function(a) {
        Ma(a) ? a = Gb(a) : (a = Ob(a), Db(a, "cssText"));
        return a
    };
var IC = "undefined" != typeof WeakMap && -1 != WeakMap.toString().indexOf("[native code]"),
    JC = 0,
    KC = function() {
        this.c = [];
        this.b = [];
        this.a = "data-elementweakmap-index-" + JC++
    };
KC.prototype.set = function(a, b) {
    if (nC($B, a, "hasAttribute", [this.a])) {
        var c = parseInt(nC(aC, a, "getAttribute", [this.a]) || null, 10);
        this.b[c] = b
    } else c = this.b.push(b) - 1, pC(a, this.a, c.toString()), this.c.push(a);
    return this
};
KC.prototype.get = function(a) {
    if (nC($B, a, "hasAttribute", [this.a])) return a = parseInt(nC(aC, a, "getAttribute", [this.a]) || null, 10), this.b[a]
};
KC.prototype.clear = function() {
    this.c.forEach(function(a) {
        nC(cC, a, "removeAttribute", [this.a])
    }, this);
    this.c = [];
    this.b = []
};
var LC = Zi("goog.html.sanitizer.SafeDomTreeProcessor"),
    MC = !y || Ve(10),
    NC = !y || null == document.documentMode,
    OC = function() {};
var PC = {
    APPLET: !0,
    AUDIO: !0,
    BASE: !0,
    BGSOUND: !0,
    EMBED: !0,
    FORM: !0,
    IFRAME: !0,
    ISINDEX: !0,
    KEYGEN: !0,
    LAYER: !0,
    LINK: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    SVG: !0,
    STYLE: !0,
    TEMPLATE: !0,
    VIDEO: !0
};
var QC = {
    A: !0,
    ABBR: !0,
    ACRONYM: !0,
    ADDRESS: !0,
    AREA: !0,
    ARTICLE: !0,
    ASIDE: !0,
    B: !0,
    BDI: !0,
    BDO: !0,
    BIG: !0,
    BLOCKQUOTE: !0,
    BR: !0,
    BUTTON: !0,
    CAPTION: !0,
    CENTER: !0,
    CITE: !0,
    CODE: !0,
    COL: !0,
    COLGROUP: !0,
    DATA: !0,
    DATALIST: !0,
    DD: !0,
    DEL: !0,
    DETAILS: !0,
    DFN: !0,
    DIALOG: !0,
    DIR: !0,
    DIV: !0,
    DL: !0,
    DT: !0,
    EM: !0,
    FIELDSET: !0,
    FIGCAPTION: !0,
    FIGURE: !0,
    FONT: !0,
    FOOTER: !0,
    FORM: !0,
    H1: !0,
    H2: !0,
    H3: !0,
    H4: !0,
    H5: !0,
    H6: !0,
    HEADER: !0,
    HGROUP: !0,
    HR: !0,
    I: !0,
    IMG: !0,
    INPUT: !0,
    INS: !0,
    KBD: !0,
    LABEL: !0,
    LEGEND: !0,
    LI: !0,
    MAIN: !0,
    MAP: !0,
    MARK: !0,
    MENU: !0,
    METER: !0,
    NAV: !0,
    NOSCRIPT: !0,
    OL: !0,
    OPTGROUP: !0,
    OPTION: !0,
    OUTPUT: !0,
    P: !0,
    PRE: !0,
    PROGRESS: !0,
    Q: !0,
    S: !0,
    SAMP: !0,
    SECTION: !0,
    SELECT: !0,
    SMALL: !0,
    SOURCE: !0,
    SPAN: !0,
    STRIKE: !0,
    STRONG: !0,
    STYLE: !0,
    SUB: !0,
    SUMMARY: !0,
    SUP: !0,
    TABLE: !0,
    TBODY: !0,
    TD: !0,
    TEXTAREA: !0,
    TFOOT: !0,
    TH: !0,
    THEAD: !0,
    TIME: !0,
    TR: !0,
    TT: !0,
    U: !0,
    UL: !0,
    VAR: !0,
    WBR: !0
};
var RC = {
        "ANNOTATION-XML": !0,
        "COLOR-PROFILE": !0,
        "FONT-FACE": !0,
        "FONT-FACE-SRC": !0,
        "FONT-FACE-URI": !0,
        "FONT-FACE-FORMAT": !0,
        "FONT-FACE-NAME": !0,
        "MISSING-GLYPH": !0
    },
    VC = function(a) {
        a = a || new SC;
        TC(a);
        this.a = Ub(a.a);
        this.h = Ub(a.L);
        this.c = Ub(a.K);
        this.w = a.G;
        w(a.m, function(b) {
                if (!vc(b, "data-")) throw new Ya('Only "data-" attributes allowed, got: %s.', [b]);
                if (vc(b, "data-sanitizer-")) throw new Ya('Attributes with "%s" prefix are not allowed, got: %s.', ["data-sanitizer-", b]);
                this.a["* " + b.toUpperCase()] = UC
            },
            this);
        w(a.o, function(b) {
            b = b.toUpperCase();
            if (!Jc(b, "-") || RC[b]) throw new Ya("Only valid custom element tag names allowed, got: %s.", [b]);
            this.c[b] = !0
        }, this);
        this.m = a.c;
        this.g = a.C;
        this.b = null;
        this.o = a.w
    };
t(VC, OC);
var WC = function(a) {
        return function(b, c) {
            return (b = a(yc(b), c)) && "about:invalid#zClosurez" != Pc(b) ? Pc(b) : null
        }
    },
    SC = function() {
        this.a = {};
        w([MB, NB], function(a) {
            w(Ob(a), function(b) {
                this.a[b] = UC
            }, this)
        }, this);
        this.b = {};
        this.m = [];
        this.o = [];
        this.L = Ub(PC);
        this.K = Ub(QC);
        this.G = !1;
        this.La = Tc;
        this.Fa = this.h = this.O = this.c = nb;
        this.C = null;
        this.g = this.w = !1
    },
    XC = function(a, b) {
        return function(c, d, e, f) {
            c = a(c, d, e, f);
            return null == c ? null : b(c, d, e, f)
        }
    },
    YC = function(a, b, c, d) {
        a[c] && !b[c] && (a[c] = XC(a[c], d))
    },
    TC = function(a) {
        if (a.g) throw Error("HtmlSanitizer.Builder.build() can only be used once.");
        YC(a.a, a.b, "* USEMAP", ZC);
        var b = WC(a.La);
        w(["* ACTION", "* CITE", "* HREF"], function(d) {
            YC(this.a, this.b, d, b)
        }, a);
        var c = WC(a.c);
        w(["* LONGDESC", "* SRC", "LINK HREF"], function(d) {
            YC(this.a, this.b, d, c)
        }, a);
        w(["* FOR", "* HEADERS", "* NAME"], function(d) {
            YC(this.a, this.b, d, Ua($C, this.O))
        }, a);
        YC(a.a, a.b, "A TARGET", Ua(aD, ["_blank", "_self"]));
        YC(a.a, a.b, "* CLASS", Ua(bD, a.h));
        YC(a.a, a.b, "* ID", Ua(cD, a.h));
        YC(a.a, a.b, "* STYLE", Ua(a.Fa, c));
        a.g = !0
    },
    dD = function(a, b) {
        a || (a = "*");
        return (a + " " + b).toUpperCase()
    },
    UC = function(a) {
        return yc(a)
    },
    aD = function(a, b) {
        b = yc(b);
        return Ab(a, b.toLowerCase()) ? b : null
    },
    ZC = function(a) {
        return (a = yc(a)) && "#" == a.charAt(0) ? a : null
    },
    $C = function(a, b, c) {
        return a(yc(b), c)
    },
    bD = function(a, b, c) {
        b = b.split(/(?:\s+)/);
        for (var d = [], e = 0; e < b.length; e++) {
            var f = a(b[e], c);
            f && d.push(f)
        }
        return 0 == d.length ? null : d.join(" ")
    },
    cD = function(a, b, c) {
        return a(yc(b), c)
    },
    eD = function(a, b) {
        var c = b.data;
        (b = vC(b)) && "style" == tC(b).toLowerCase() && !("STYLE" in a.h) && "STYLE" in a.c && (c = nd(EC(c, a.b, p(function(d, e) {
            return this.m(d, {
                Qq: e
            })
        }, a))));
        return document.createTextNode(c)
    },
    fD = function(a) {
        var b = new SC;
        b = new VC(b);
        var c = !("STYLE" in b.h) && "STYLE" in b.c;
        c = "*" == b.g && c ? "sanitizer-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Va()).toString(36)) : b.g;
        b.b = c;
        if (MC) {
            c = a;
            if (MC) {
                a = cg("SPAN");
                b.b && "*" == b.g && (a.id = b.b);
                b.o && (c = DC("<div>" + c + "</div>"), v(c, "Older browsers that don't support inert parsing should not get to this branch"), HC(c), c = c.innerHTML);
                c = Rd(dc("Never attached to DOM."), c);
                var d = document.createElement("template");
                if (NC && "content" in d) Vd(d, c), d = d.content;
                else {
                    var e = document.implementation.createHTMLDocument("x");
                    d = e.body;
                    Vd(e.body, c)
                }
                c = document.createTreeWalker(d, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
                for (d = IC ? new WeakMap : new KC; e = c.nextNode();) {
                    c: {
                        var f = b;
                        var g = e;
                        var k = uC(g);
                        switch (k) {
                            case 3:
                                g = eD(f, g);
                                break c;
                            case 1:
                                k = g;
                                1 == uC(k) || $a("Expected Node of type Element but got Node of type %s", uC(k));
                                g = f;
                                f = k;
                                if ("TEMPLATE" == tC(f).toUpperCase()) g = null;
                                else {
                                    k = tC(f).toUpperCase();
                                    if (k in g.h) var l = null;
                                    else g.c[k] ? l = document.createElement(k) : (l = cg("SPAN"), g.w && pC(l, "data-sanitizer-original-tag", k.toLowerCase()));
                                    if (l) {
                                        var m = l,
                                            q = oC(f);
                                        if (null != q)
                                            for (var r = 0; k = q[r]; r++)
                                                if (k.specified) {
                                                    var u = g;
                                                    var z = f,
                                                        O = k,
                                                        W = O.name;
                                                    if (vc(W, "data-sanitizer-")) u = null;
                                                    else {
                                                        var Ja = tC(z);
                                                        O = O.value;
                                                        var S = {
                                                                tagName: yc(Ja).toLowerCase(),
                                                                attributeName: yc(W).toLowerCase()
                                                            },
                                                            Ia = {
                                                                nk: void 0
                                                            };
                                                        "style" == S.attributeName && (Ia.nk = qC(z));
                                                        z = dD(Ja, W);
                                                        z in u.a ? (u = u.a[z], u = u(O, S, Ia)) : (W = dD(null, W), W in u.a ? (u = u.a[W], u = u(O, S, Ia)) : u = null)
                                                    }
                                                    null !==
                                                        u && pC(m, k.name, u)
                                                } g = l
                                    } else g = null
                                }
                                break c;
                            default:
                                aj(LC, "Dropping unknown node type: " + k), g = null
                        }
                    }
                    if (g) {
                        if (1 == uC(g) && d.set(e, g), e = vC(e), f = !1, e) k = uC(e), l = tC(e).toLowerCase(), m = vC(e), 11 != k || m ? "body" == l && m && (k = vC(m)) && !vC(k) && (f = !0) : f = !0, k = null, f || !e ? k = a : 1 == uC(e) && (k = d.get(e)), k.content && (k = k.content), k.appendChild(g)
                    } else ig(e)
                }
                d.clear && d.clear();
                b = a
            } else b = cg("SPAN");
            0 < oC(b).length && (a = cg("SPAN"), a.appendChild(b), b = a);
            b = (new XMLSerializer).serializeToString(b);
            b = b.slice(b.indexOf(">") + 1, b.lastIndexOf("</"))
        } else b =
            "";
        return Rd(dc("Output of HTML sanitizer"), b)
    };
var gD = function() {};
t(gD, Hr);
Ha(gD);
gD.prototype.Zc = function() {
    return "menuitem"
};
gD.prototype.kb = function(a) {
    var b = fD(a.nd);
    b = eg(document, b);
    var c = b.querySelector("div");
    if (!c) throw Error("Invalid item label");
    var d = Ed(a.Ua());
    Wd(c, d);
    Ho(c, ["gt-is-sp", "gt-is-cont"]);
    c = ["DIV", Kr(this, a)];
    d = D("DIV");
    R(d, "gt-is-ld");
    b = D("DIV", null, b);
    R(b, "gt-is-lb");
    c = c.concat([d, b]);
    if (a.Ob) {
        b = D("A", {
            href: "#"
        }, a.Ob);
        R(b, "gt-is-act");
        var e = new Z;
        e.ba(b);
        Op(e, a);
        b.addEventListener("mouseup", function(f) {
            e.mb() && f.stopPropagation()
        });
        c.push(b)
    }
    b = D.apply(null, c);
    b.id = Kp(a);
    return a.v = b
};
gD.prototype.Yc = function(a) {
    return "DIV" == a.tagName
};
gD.prototype.wa = function() {
    return "gt-is-itm"
};
var hD = function(a, b, c, d, e) {
    e = void 0 === e ? "" : e;
    Z.call(this, a.Ua(), c || gD.M(), d);
    this.Zd = a;
    this.nd = b;
    this.Ob = e;
    this.Oa(1, !1)
};
t(hD, Z);
hD.prototype.Ua = function() {
    return this.Zd.Ua()
};
hD.prototype.tb = function() {
    return this.Zd.tb()
};
var iD = function(a) {
    F.call(this, a)
};
t(iD, F);
Mf(window.document);
new J;
var jD = function(a) {
        var b = a.getBoundingClientRect();
        if (y) {
            var c = hp(a);
            a = lp(a);
            b.left = c.x;
            b.right = c.x + a.width;
            b.top = c.a;
            b.bottom = c.a + a.height
        }
        return b
    },
    kD = function(a, b) {
        var c = Mf(a),
            d = 0;
        if ("number" === typeof b) d = b;
        else if (y && !Te(9)) {
            if (b = c.a.selection.createRange()) try {
                var e = a.createTextRange(),
                    f = e.duplicate();
                e.moveToBookmark(b.getBookmark());
                f.setEndPoint("EndToStart", e);
                d = f.text.length
            } catch (m) {}
        } else d = a.selectionStart;
        e = "_h#" + Ra(a);
        var g = c.j(e);
        g ? c.zf(g) : g = c.b("PRE", {
            id: e
        });
        g.parentNode || c.a.body.appendChild(g);
        var k = [];
        w(a.value, function(m, q, r) {
            k.push(" " == m && q + 1 != r.length && " " == r[q + 1] ? "\u00a0" : m)
        });
        k = k.join("");
        c.appendChild(g, c.a.createTextNode(String(k.substring(0, d))));
        e = Jg(c, "SPAN");
        e.appendChild(c.a.createTextNode("\u200b"));
        c.appendChild(g, e);
        c.appendChild(g, c.a.createTextNode(String(k.substring(d) + " ")));
        c = Eo(a);
        w(c, function(m) {
            R(g, m)
        });
        var l = "white-space:pre-wrap;word-wrap:pre-wrap;position:absolute;z-index:-9;visibility:hidden;display:block;";
        w("font-family font-size font-weight font-style text-transform text-decoration letter-spacing word-spacing line-height text-align vertical-align direction width height margin-top margin-right margin-bottom margin-left padding-top padding-right padding-bottom padding-left border-top-width border-right-width border-bottom-width border-left-width border-top-style border-right-style border-bottom-style border-left-style overflow-x overflow-y".split(" "),
            function(m) {
                try {
                    var q;
                    (q = Vo(a, m) || (a.currentStyle ? a.currentStyle[m] : null) || a.style[m]) && (l += m + ":" + q + ";")
                } catch (r) {}
            });
        g.style.cssText = l;
        c = Wo(a, "overflowX");
        g.style.overflowX = c && "visible" != c ? c : "auto";
        c = Wo(a, "overflowY");
        g.style.overflowY = c && "visible" != c ? c : "auto";
        g.scrollTop = a.scrollTop;
        g.scrollLeft = a.scrollLeft;
        Yo(g, cp(a));
        c = jD(e);
        return "INPUT" == a.tagName.toUpperCase() ? new Hf(c.left, Math.ceil(hp(a).a + lp(a).height)) : new Hf(c.left, Math.ceil(c.bottom))
    };
var lD = function(a, b) {
    X.call(this, b);
    this.c = a
};
t(lD, X);
lD.prototype.b = "info";
lD.prototype.g = !1;
var mD = {
    info: "jfk-butterBar-info",
    error: "jfk-butterBar-error",
    warning: "jfk-butterBar-warning",
    promo: "jfk-butterBar-promo"
};
lD.prototype.Jb = function() {
    return this.b
};
var nD = function(a, b) {
    a.c = b;
    if (b = a.j()) {
        var c = a.a;
        c.zf(b);
        c.ti(b, a.c)
    }
};
lD.prototype.isVisible = function() {
    var a = this.j();
    return null != a && Go(a, "jfk-butterBar-shown")
};
lD.prototype.setVisible = function(a) {
    v(this.ya, "setVisible must only be called after the butter bar is rendered.");
    U(this.j(), "jfk-butterBar-shown", a)
};
lD.prototype.Ja = function() {
    this.v = this.a.b("DIV", "jfk-butterBar");
    v(this.j(), "The DOM element for the butter bar cannot be null.");
    var a = this.j();
    a && (yo(a, "live", "assertive"), yo(a, "atomic", "true"));
    nD(this, this.c);
    this.g = this.g;
    (a = this.j()) && U(a, "jfk-butterBar-mini", this.g);
    a = this.b;
    if (this.Yb()) {
        var b = this.j(),
            c = mD[a];
        T(b, mD[this.b]);
        R(b, c)
    }
    this.b = a
};
var oD = function(a, b, c) {
    J.call(this);
    this.w = c.client;
    this.g = a;
    this.a = b;
    this.o = c.gm;
    this.W = !1;
    this.C = c.En;
    this.O = c.hm;
    this.$a = c.lk || null;
    this.N = c.ea;
    this.ie = c.Ra;
    this.xa = c.On;
    this.Ye = c.vo;
    this.K = null;
    this.R = c.qo;
    this.ra = c.zm;
    this.L = 0;
    this.m = {};
    this.Pc = c.ek;
    this.Ig = c.Qk;
    this.ld = c.In;
    this.Ta = c.Nq;
    this.jd = c.lm;
    this.md = !!c.$q;
    this.X = !!c.im;
    this.ia = !!c.Mq;
    this.he = c.Ln || "Did you mean: <div>%1$s</div>";
    this.nd = c.cr || "Translating <div>%1$s</div>";
    this.ge = c.dr || "Undo";
    this.Ze = c.ir || 500;
    a = new lD("");
    a.render(Nf("gt-bbar"));
    a.setVisible(!1);
    this.V = a;
    this.c = this.b = this.h = "";
    this.G = Km.M();
    "async_translate_onebox" == this.w && (this.G.o = "/translate");
    this.Z = new Bp(this);
    this.je = new Xr(this.o.j());
    this.Ca = xl.M();
    this.F = K.M();
    this.na = !0;
    this.ld && this.Z.listen(this.je, "key", this.$b).listen(this.o, "change", this.fd);
    this.Z.listen(this.a, "action", this.wb).listen(this.o.j(), "blur", this.Ob).listen(this.o.j(), "focus", this.yc).listen(this.N, "srcLanguageUpdated", this.Na).listen(this.N, "tgtLanguageUpdated", this.Na);
    null != this.O && this.Z.listen(this.O,
        "change", this.hd)
};
t(oD, J);
oD.prototype.update = function() {
    0 != this.h.length || this.ia ? this.na && (qD(this, this.g.a[0]), this.L++, this.m[this.L] = {}, this.m[this.L][0] = Va(), rD(this.xa, this.h, this.b, this.c, p(this.kd, this, this.h, this.b, this.c, this.L))) : pD(this)
};
var tD = function(a) {
    var b = a.a;
    b.c && b.removeChild(b.c, !0);
    b.c = null;
    sD(a, !!Rp(a.a))
};
oD.prototype.hd = function() {
    lz(this.O) && pD(this)
};
oD.prototype.$b = function(a) {
    if (!this.a.isVisible()) return !1;
    if (27 == a.keyCode) {
        var b = uD(this.g.a);
        Pm(this.G, this.w, "is", "0", {
            q: this.h,
            sl: this.b,
            tl: this.c,
            sn: b.length,
            s: b
        });
        b = this.F;
        var c = vD(this),
            d = wD(this);
        L(b, Im(b, 204, c, d, xD(this), [], null != this.a.h, 0));
        pD(this)
    }
    13 == a.keyCode && -1 == this.a.Ka && (b = uD(this.g.a), Pm(this.G, this.w, "is", "8", {
        q: this.h,
        sl: this.b,
        tl: this.c,
        sn: b.length,
        s: b
    }), b = this.F, c = vD(this), d = wD(this), L(b, Im(b, 205, c, d, xD(this), [], null != this.a.h, 0)), pD(this));
    if (36 == a.keyCode || 35 == a.keyCode) return !1;
    b = this.a.Xa(a);
    38 != a.keyCode && 40 != a.keyCode || -1 == this.a.Ka || (a = Uw(this.a), a != this.a.c && this.o.Y() != a.Ua() && (this.W = !0, Al(this.Ca, "is"), this.o.b(a.Ua()), qD(this)));
    return b
};
oD.prototype.fd = function(a) {
    this.W ? this.W = !1 : this.O && lz(this.O) ? pD(this) : "set" == a.changeType ? pD(this) : Fi(p(this.ke, this, a), 0)
};
oD.prototype.ke = function() {
    var a = Jc(this.o.Y(), "\n") ? "" : yD(this.o.Y()),
        b = this.N.a,
        c = this.N.b;
    if (a != this.h || b != this.b || c != this.c) this.h = a, this.b = b, this.c = c, this.update()
};
var yD = function(a) {
    return a.replace(/[ \n\t\r\f,\.\?!]+/g, " ").replace(/^ /, "")
};
oD.prototype.wb = function(a) {
    var b = vD(this),
        c = wD(this),
        d = xD(this),
        e = [],
        f = null != this.a.h;
    if (a.target == this.a.h) f = this.F, L(f, Im(f, 185, b, c, d, e, !0, 1)), zD(this, "it", "translationSelected", "");
    else if (a.target == this.a.g) a = this.F, L(a, Im(a, 181, b, c, d, e, f, 1)), zD(this, "ss", "spellingSelected", c);
    else if (a.target.getParent && a.target.getParent() === this.a.g) zD(this, "ss", "ignoreSpellingSuggestion", "");
    else if (a.target == this.a.c) a = this.F, L(a, Im(a, 183, b, c, d, e, f, 1)), zD(this, "ls", "languageSelected", d[0]);
    else {
        a = a.target;
        a: {
            var g = this.a.b;
            for (var k = 0; k < g.length; k++)
                if (g[k] == a) {
                    g = k;
                    break a
                } g = -1
        }
        k = this.F;
        L(k, Im(k, 142, b, c, d, e, f, g + 1));
        AD(this, a.Ua(), "2")
    }
};
var zD = function(a, b, c, d) {
        var e = uD(a.g.a);
        Pm(a.G, a.w, "is", "b", {
            q: a.h,
            sl: a.b,
            tl: a.c,
            sn: e.length,
            s: e,
            si: 0,
            sy: b
        });
        pD(a);
        a.dispatchEvent(new iD(c, d))
    },
    AD = function(a, b, c) {
        for (var d = uD(a.g.a), e = 0, f = 0; f < d.length; f++)
            if (d[f] == b) {
                e = f + 1;
                break
            } Pm(a.G, a.w, "is", c, {
            q: a.h,
            sl: a.b,
            tl: a.c,
            sn: d.length,
            s: d,
            si: e
        });
        a.h = yD(b);
        Al(a.Ca, "is");
        a.o.b(b);
        "2" == c ? (pD(a), a.o.j().blur(), a.dispatchEvent("suggestionSelected")) : (a.update(), a.dispatchEvent("suggestionCopied"))
    };
oD.prototype.Na = function() {
    pD(this)
};
oD.prototype.kd = function(a, b, c, d, e) {
    this.m[d][1] = Va();
    0 == this.h.length && !this.ia || 0 == e.length && !this.X ? pD(this) : 0 == e.length ? BD(this) : this.b != b || this.c != c ? BD(this) : this.R ? (this.m[d][2] = Va(), this.K && this.K.abort(), this.K = CD(this.Ye, this.b, this.c, this.ie, e, p(this.Hd, this, a, d, e), "is", void 0, this.Ze)) : DD(this, a, tb(e, function(f) {
        return new nw(f)
    }), d)
};
oD.prototype.Hd = function(a, b, c, d, e) {
    null == d ? (ED(this, a, c, e), qm(this.F, 145)) : (this.m[b][3] = Va(), c.length == d.length ? DD(this, a, tb(c, function(f, g) {
        return new nw(c[g], d[g])
    }), b) : (FD(this), qm(this.F, 146), DD(this, a, tb(c, function(f) {
        return new nw(f)
    }), b)))
};
var BD = function(a) {
        GD(a.a, []);
        a.g.a = [];
        qD(a);
        var b = a.a;
        b.o && 0 != b.o.length || sD(a, !1)
    },
    pD = function(a) {
        HD(a.xa);
        a.K && a.K.abort();
        sD(a, !1);
        for (var b = a.a, c = []; b.o && 0 != b.o.length;) c.push(b.removeChild(Sp(b, 0), !0));
        b.b = [];
        b.c = null;
        b.g = null;
        b.h = null;
        b = a.g;
        b.a = [];
        b.b = null;
        b.c = null;
        qD(a)
    },
    DD = function(a, b, c, d) {
        var e = a.m[d][1] - a.m[d][0];
        if (a.R) var f = a.m[d][3] - a.m[d][2];
        delete a.m[d];
        if (0 != c.length) {
            var g = c;
            c.length > a.ra && (g = Ib(c, 0, a.ra));
            a.g.a = g;
            c = {};
            a.R && (c.td = f);
            if (a.L > d) ID(a, !1), JD(a, e, b, g, c, !1);
            else {
                var k = [];
                w(g, function(m, q) {
                    q = new pw(m, this.Pc, this.Ig, 0 == q && !this.X, this.R, this.$a);
                    k.push(q);
                    if ((q = this.g.b) && q.Ua() == m.Ua()) {
                        m = "";
                        var r = void 0 === r ? !1 : r;
                        q = uD(this.g.a);
                        Ab(q, m) && (m = "");
                        m ? (m = new LB(m), r = new hD(m, r ? this.nd : this.he, void 0, void 0, r ? this.ge : void 0), this.g.b = m, KD(this.a, r), LD(this.a, !0), sD(this, !0)) : (this.g.b = null, KD(this.a, null), sD(this, !!Rp(this.a)))
                    }
                }, a);
                GD(a.a, k);
                6 < MD(a.g) && tD(a);
                a.X && LD(a.a, !!a.a.h);
                qD(a, g[0]);
                if (!a.jd) {
                    d = Xf(Mf(document).a);
                    f = kD(a.o.j(), a.o.Y().length);
                    var l = cp(rg(a.a.j()));
                    f.x = 0;
                    f.a += d.a;
                    f.a -= l.a;
                    Yo(a.a.j(), f)
                }
                a.Pc && ND(a);
                OD(a);
                sD(a, !0);
                ID(a, !0);
                JD(a, e, b, g, c, !0)
            }
        }
    },
    sD = function(a, b) {
        a.Ta || a.a.setVisible(b)
    },
    vD = function(a) {
        var b = [];
        a = a.a.b;
        for (var c = 0; c < a.length; c++) b.push([a[c].Ua(), a[c].tb()]);
        return b
    },
    wD = function(a) {
        return a.a.g ? a.a.g.Ua() : ""
    },
    xD = function(a) {
        a = a.a.c ? a.a.c.Zd.a : "";
        return "" != a ? [a] : []
    },
    ID = function(a, b) {
        var c = a.F,
            d = vD(a),
            e = wD(a);
        L(c, Im(c, b ? 141 : 203, d, e, xD(a), [], null != a.a.h, 0))
    },
    qD = function(a, b) {
        if (a.C)
            if (b) {
                var c = a.o.Y();
                vc(b.Ua(), c) ? a.C.b(b.Ua()) : a.C.b(c)
            } else a.C.b("")
    },
    ND = function(a) {
        w(a.a.b, function(b) {
            b.Vb && G(b.Vb, "action", this.xb, !1, this)
        }, a)
    };
oD.prototype.xb = function(a) {
    var b = this.a.b;
    w(b, function(c, d) {
        if (c.Vb == a.target) {
            var e = D("SPAN", null, (window.MSG_SUGGESTION_FLAGGED || "").replace("%1$s", c.Ua())),
                f = D("SPAN", null, " ");
            c = D("A", {
                href: "javascript:;"
            }, window.MSG_DISMISS || "");
            e = D("DIV", null, e, f, c);
            nD(this.V, e);
            this.V.setVisible(!0);
            G(c, "click", this.nb, !1, this);
            PD(this, d + 1, b)
        }
    }, this)
};
var OD = function(a) {
    w(a.a.b, function(b) {
        b.oc && G(b.oc, "action", this.fb, !1, this)
    }, a)
};
oD.prototype.fb = function(a) {
    w(this.a.b, function(b) {
        b.oc == a.target && AD(this, b.Ua(), "a")
    }, this)
};
oD.prototype.nb = function() {
    this.V.setVisible(!1)
};
oD.prototype.Ob = function() {
    this.a && (this.md ? (BD(this), this.na = !1) : sD(this, !1));
    this.C && this.C.b("")
};
oD.prototype.yc = function() {
    this.na = !0
};
var PD = function(a, b, c) {
        c = tb(c, function(d) {
            return d.Ua()
        });
        Pm(a.G, a.w, "is", "3", {
            q: a.h,
            sl: a.b,
            tl: a.c,
            sn: c.length,
            s: c,
            si: b
        })
    },
    uD = function(a) {
        return a ? tb(a, function(b) {
            return b ? b.Ua() : ""
        }) : []
    },
    QD = function(a) {
        if (!a) return [];
        a = tb(a, function(b) {
            return b ? b.tb() : ""
        });
        return sb(a, function(b) {
            return null != b
        })
    },
    JD = function(a, b, c, d, e, f) {
        d = uD(d);
        b = {
            q: c,
            sl: a.b,
            tl: a.c,
            sd: b,
            sn: d.length,
            s: d
        };
        for (var g in e) b[g] = e[g];
        Pm(a.G, a.w, "is", f ? "1" : "7", b)
    },
    FD = function(a) {
        var b = a.g.a,
            c = uD(b);
        b = QD(b);
        Pm(a.G, a.w, "is", "6", {
            q: a.h,
            sl: a.b,
            tl: a.c,
            sn: c.length,
            s: c,
            tn: b.length,
            st: b
        })
    },
    ED = function(a, b, c, d) {
        b = {
            q: b,
            sl: a.b,
            tl: a.c,
            sn: c.length,
            s: c
        };
        d && (b.ec = d);
        Pm(a.G, a.w, "is", "9", b)
    };
var RD = function(a, b, c, d) {
    var e = mr();
    this.g = a;
    this.C = b;
    this.O = c;
    this.w = d;
    this.G = void 0 === e ? !1 : e;
    this.a = "";
    this.b = new zs(this.K, 300, this);
    this.c = this.h = 0;
    this.m = !1;
    this.o = Km.M();
    G(this.g, "change", this.L, !1, this);
    this.b.start(void 0)
};
RD.prototype.L = function(a) {
    var b = "";
    a.changeType && (b = a.changeType);
    "paste" == b && (this.h++, Sm(this.o, "pc", 1, "accumulate"));
    "set" == b && this.c++;
    this.b.start(void 0)
};
RD.prototype.K = function() {
    if (this.C) {
        this.b.stop();
        var a = yc(this.g.Y());
        if (a != this.a)
            if (this.w && this.w()) this.b.start(300);
            else if (!(2E3 < ee(a).length && 0 == this.h && 0 == this.c) || this.G) {
            this.c = this.h = 0;
            var b = a.substring(0, this.a.length) == this.a;
            (a = this.a.substring(0, a.length) == a) || 0 != this.a.length && b && !this.m ? Sm(this.o, "otf", "2") : Sm(this.o, "otf", "1");
            this.m = a;
            this.O()
        }
    }
};
RD.prototype.reset = function(a) {
    this.b.stop();
    this.a = yc(this.g.Y());
    a || (this.m = !1)
};
var SD = function() {
    J.call(this);
    this.a = 0;
    this.endTime = this.startTime = null
};
t(SD, J);
SD.prototype.c = function() {
    this.b("begin")
};
SD.prototype.g = function() {
    this.b("end")
};
SD.prototype.b = function(a) {
    this.dispatchEvent(a)
};
var TD = function(a, b) {
        La(b) || (b = [b]);
        v(0 < b.length, "At least one Css3Property should be specified.");
        b = tb(b, function(c) {
            if ("string" === typeof c) return c;
            db(c, "Expected css3 property to be an object.");
            var d = c.ej + " " + c.duration + "s " + c.timing + " " + c.delay + "s";
            v(c.ej && "number" === typeof c.duration && c.timing && "number" === typeof c.delay, "Unexpected css3 property value: %s", d);
            return d
        });
        To(a, "transition", b.join(","))
    },
    UD = pb(function() {
        if (y) return Te("10.0");
        var a = cg("DIV"),
            b = De ? "-webkit" : Ce ? "-moz" : y ? "-ms" : ye ?
            "-o" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        Wd(a, Ld("div", {
            style: c
        }));
        a = a.firstChild;
        v(a.nodeType == Node.ELEMENT_NODE);
        b = a.style[qe("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[So(a, "transition")] || "")
    });
var VD = function(a, b, c, d, e) {
    SD.call(this);
    this.v = a;
    this.m = b;
    this.w = c;
    this.h = d;
    this.G = La(e) ? e : [e]
};
t(VD, SD);
h = VD.prototype;
h.play = function() {
    if (1 == this.a) return !1;
    this.c();
    this.b("play");
    this.startTime = Va();
    this.a = 1;
    if (UD()) return To(this.v, this.w), this.o = Fi(this.dn, void 0, this), !0;
    this.Qg(!1);
    return !1
};
h.dn = function() {
    lp(this.v);
    TD(this.v, this.G);
    To(this.v, this.h);
    this.o = Fi(p(this.Qg, this, !1), 1E3 * this.m)
};
h.stop = function() {
    1 == this.a && this.Qg(!0)
};
h.Qg = function(a) {
    To(this.v, "transition", "");
    Gi(this.o);
    To(this.v, this.h);
    this.endTime = Va();
    this.a = 0;
    a ? this.b("stop") : this.b("finish");
    this.g()
};
h.T = function() {
    this.stop();
    VD.D.T.call(this)
};
var XD = function(a, b) {
    J.call(this);
    this.c = new Bp(this);
    a = a || null;
    WD(this);
    this.v = a;
    b && (this.Sd = b)
};
t(XD, J);
h = XD.prototype;
h.v = null;
h.ai = !0;
h.$h = null;
h.Vd = !1;
h.ih = -1;
h.Sd = "toggle_display";
h.Jb = function() {
    return this.Sd
};
h.j = function() {
    return this.v
};
h.setAutoHide = function(a) {
    WD(this);
    this.ai = a
};
var WD = function(a) {
    if (a.Vd) throw Error("Can not change this state of the popup while showing.");
};
XD.prototype.isVisible = function() {
    return this.Vd
};
XD.prototype.setVisible = function(a) {
    this.o && this.o.stop();
    this.h && this.h.stop();
    if (a) {
        if (!this.Vd && this.dispatchEvent("beforeshow")) {
            if (!this.v) throw Error("Caller must call setElement before trying to show the popup");
            this.m();
            a = Lf(this.v);
            if (this.ai)
                if (this.c.listen(a, "mousedown", this.aj, !0), y) {
                    try {
                        var b = a.activeElement
                    } catch (d) {}
                    for (; b && "IFRAME" == b.nodeName;) {
                        try {
                            var c = xg(b)
                        } catch (d) {
                            break
                        }
                        a = c;
                        b = a.activeElement
                    }
                    this.c.listen(a, "mousedown", this.aj, !0);
                    this.c.listen(a, "deactivate", this.$i)
                } else this.c.listen(a,
                    "blur", this.$i);
            "toggle_display" == this.Sd ? (this.v.style.visibility = "visible", V(this.v, !0)) : "move_offscreen" == this.Sd && this.m();
            this.Vd = !0;
            this.ih = Va();
            this.o ? (jh(this.o, "end", this.Ci, !1, this), this.o.play()) : this.Ci()
        }
    } else YD(this)
};
XD.prototype.m = Ga;
var YD = function(a, b) {
    a.Vd && a.dispatchEvent({
        type: "beforehide",
        target: b
    }) && (a.c && Gp(a.c), a.Vd = !1, Va(), a.h ? (jh(a.h, "end", Ua(a.ii, b), !1, a), a.h.play()) : a.ii(b))
};
h = XD.prototype;
h.ii = function(a) {
    "toggle_display" == this.Sd ? this.$l() : "move_offscreen" == this.Sd && (this.v.style.top = "-10000px");
    this.dispatchEvent({
        type: "hide",
        target: a
    })
};
h.$l = function() {
    this.v.style.visibility = "hidden";
    V(this.v, !1)
};
h.Ci = function() {
    this.dispatchEvent("show")
};
h.aj = function(a) {
    a = a.target;
    sg(this.v, a) || ZD(this, a) || 150 > Va() - this.ih || YD(this, a)
};
h.$i = function(a) {
    var b = Lf(this.v);
    if ("undefined" != typeof document.activeElement) {
        if (a = b.activeElement, !a || sg(this.v, a) || "BODY" == a.tagName || ZD(this, a)) return
    } else if (a.target != b) return;
    150 > Va() - this.ih || YD(this)
};
var ZD = function(a, b) {
    return vb(a.$h || [], function(c) {
        return b === c || sg(c, b)
    })
};
XD.prototype.T = function() {
    XD.D.T.call(this);
    this.c.Ia();
    Mg(this.o);
    Mg(this.h);
    delete this.v;
    delete this.c;
    delete this.$h
};
var $D = function(a, b) {
    this.L = b || void 0;
    XD.call(this, a)
};
t($D, XD);
$D.prototype.m = function() {
    if (this.L) {
        var a = !this.isVisible() && "move_offscreen" != this.Jb(),
            b = this.j();
        a && (b.style.visibility = "hidden", V(b, !0));
        this.L.b(b, 8, this.Xi);
        a && V(b, !1)
    }
};
var aE = function(a, b) {
    $D.call(this, a);
    this.g = b;
    this.a = 0;
    this.b = null;
    this.w = 0;
    this.setVisible(!0);
    this.setVisible(!1);
    R(this.j(), "round-trip-popup");
    R(this.g, "round-trip-content")
};
t(aE, $D);
aE.prototype.show = function() {
    Gi(this.w);
    0 == this.a ? this.w = Fi(p(this.C, this, 1), 300) : this.C(1)
};
aE.prototype.K = function() {
    Gi(this.w);
    1 == this.a ? jh(this.b, "finish", p(this.K, this)) : 0 == this.a && (this.w = Fi(p(this.C, this, -1), 200))
};
aE.prototype.C = function(a) {
    if (this.a != a && (0 != this.a || !(this.isVisible() && 1 == a || !this.isVisible() && -1 == a))) {
        var b = this.isVisible();
        this.setVisible(!0);
        var c = -Math.ceil(lp(this.g).width);
        rp(this.j()) && (c = -c);
        var d = 1 == a ? c : 0;
        c = 1 == a ? 0 : c;
        this.setVisible(b);
        if (UD()) {
            b = .2;
            if (0 != this.a) {
                var e = parseInt(Vo(this.g, "left"), 10);
                this.G();
                b *= (c - e) / (c - d);
                d = e
            }
            this.a = a;
            this.b = new VD(this.g, b, {
                left: d + "px"
            }, {
                left: c + "px"
            }, "left " + b + "s");
            this.b.play();
            jh(this.b, "finish", p(this.G, this)); - 1 == a ? jh(this.b, "finish", p(this.setVisible,
                this, !1)) : this.setVisible(!0)
        } else To(this.g, "left", c + "px"), this.setVisible(1 == a ? !0 : !1)
    }
};
aE.prototype.G = function() {
    0 != this.a && (this.b.stop(), Fi(p(sh, this, this.b)), this.a = 0, this.b = null)
};
var cE = function(a) {
        this.v = a || null;
        this.a = D("DIV", "gt-hl-layer", dg(""));
        this.b = null;
        this.v && (jg(this.a, this.v), bE(this))
    },
    eE = function(a, b, c, d, e) {
        var f = d || "gt-hl-text";
        d = a.v && (a.v.value || Eg(a.v));
        bE(a);
        ig(a.a);
        if (b != c || e) {
            if (0 < b) {
                var g = d.substring(0, b);
                dE(a.a, g, 0, e)
            }
            b < c && (g = d.substring(b, c), f = D("SPAN", f), dE(f, g, b, e), gg(a.a, f));
            c < d.length && (g = d.substring(c), dE(a.a, g, c, e))
        }
    },
    bE = function(a) {
        var b;
        var c = a.v,
            d = Lf(c);
        (b = y && c.currentStyle) && Uf(Mf(d).a) && "auto" != b.width && "auto" != b.height && !b.boxSizing ? (d = vp(c,
            b.width, "width", "pixelWidth"), c = vp(c, b.height, "height", "pixelHeight"), b = new Jf(d, c)) : (b = new Jf(c.offsetWidth, c.offsetHeight), d = yp(c), c = ep(c), b = new Jf(b.width - c.left - d.left - d.right - c.right, b.height - c.top - d.top - d.bottom - c.bottom));
        c = a.a;
        d = Lf(c);
        var e = Uf(Mf(d).a);
        !y || Te("10") || e && Te("8") ? up(c, b, "content-box") : (d = c.style, e ? (d.pixelWidth = b.width, d.pixelHeight = b.height) : (e = yp(c), c = ep(c), d.pixelWidth = b.width + c.left + e.left + e.right + c.right, d.pixelHeight = b.height + c.top + e.top + e.bottom + c.bottom));
        d = cp(a.v);
        c =
            a.a;
        b = d.x;
        d = d.a;
        e = cp(c);
        b instanceof Hf && (d = b.a, b = b.x);
        b = ab(b) - e.x;
        Yo(c, c.offsetLeft + b, c.offsetTop + (Number(d) - e.a));
        c = yp(a.v);
        To(a.a, "paddingLeft", c.left + "px");
        To(a.a, "paddingRight", c.right + "px");
        a.a.dir = a.v.dir
    },
    dE = function(a, b, c, d) {
        d = d || [];
        for (var e = 0, f; f = d[e]; e++)
            if (!(0 > f.xe - c)) {
                if (f.xe - c >= b.length) break;
                if (0 < f.xe - c) {
                    var g = b.substring(0, f.xe - c);
                    fE(a, g)
                }
                var k = f.className || "gt-hl-text";
                g = b.substring(f.xe - c, f.Dh - c);
                var l = D("SPAN");
                Fo(l, k);
                fE(l, g);
                gg(a, l);
                b = b.substring(f.Dh - c);
                c = f.Dh
            } b && fE(a, b)
    },
    fE =
    function(a, b) {
        b = ce(b).split("\n");
        for (var c = 0, d = b.length; c < d; c++) 0 < c && gg(a, D("BR")), gg(a, dg(b[c]))
    };
var gE = function(a, b) {
    this.a = a instanceof Hf ? a : new Hf(a, b)
};
t(gE, Ds);
gE.prototype.b = function(a, b, c, d) {
    v(a);
    var e = $o(Lf(a)),
        f = this.a.x + e.x;
    e = this.a.a + e.a;
    var g = Fs(a);
    f -= g.x;
    e -= g.a;
    Hs(new Hf(f, e), a, b, c, null, null, d)
};
var hE = function(a, b) {
    gE.call(this, a, b)
};
t(hE, gE);
hE.prototype.g = 0;
hE.prototype.c = function(a) {
    this.g = a
};
hE.prototype.b = function(a, b, c, d) {
    var e = Zo(a);
    e = dp(e);
    var f = Wf(Mf(a).a);
    f = new Hf(this.a.x + f.scrollLeft, this.a.a + f.scrollTop);
    var g = b,
        k = Hs(f, a, g, c, e, 10, d);
    if (0 != (k & 496)) {
        if (k & 16 || k & 32) g ^= 4;
        if (k & 64 || k & 128) g ^= 1;
        k = Hs(f, a, g, c, e, 10, d);
        0 != (k & 496) && Hs(f, a, b, c, e, this.g, d)
    }
};
var iE = function(a, b) {
    mx.call(this, a, b);
    this.me = !0;
    Zw(this, !0);
    this.setVisible(!1, !0);
    this.b = new pj
};
t(iE, mx);
h = iE.prototype;
h.yj = !1;
h.Ti = 0;
h.Bb = null;
h.Da = function(a) {
    iE.D.Da.call(this, a);
    (a = a.getAttribute("for") || a.htmlFor) && jE(this, this.a.j(a), 1)
};
h.aa = function() {
    iE.D.aa.call(this);
    this.b.forEach(this.ef, this);
    var a = Y(this);
    a.listen(this, "action", this.ph);
    a.listen(this.a.a, "mousedown", this.Ca, !0)
};
var jE = function(a, b, c, d, e, f) {
    b && sj(a.b, Ra(b)) || (c = a.Ag(b, c, d, e, f), a.ya && a.ef(c), b = Ua(a.Wm, b), a.j() && Y(a).listen(a.j(), "keydown", b))
};
h = iE.prototype;
h.Wm = function(a, b) {
    if (27 == b.keyCode) a.focus();
    else if (a = Sp(this, this.Ka)) {
        a = a.j();
        var c = new Vg(b.b, a);
        c.target = a;
        if (32 == b.keyCode || 13 == b.keyCode) $g(a) ? Th(a, "keydown", !1, c) : uh(a, "keydown", !1, c);
        32 == b.keyCode && this.Ic()
    }
};
h.Ag = function(a, b, c, d, e) {
    if (!a) return null;
    b = {
        v: a,
        sj: b,
        Cm: c,
        rd: d ? "contextmenu" : "mousedown",
        Xi: e
    };
    this.b.set(Ra(a), b);
    return b
};
h.ef = function(a) {
    Y(this).listen(a.v, a.rd, this.$f);
    "contextmenu" != a.rd && Y(this).listen(a.v, "keydown", this.Zm)
};
h.lf = function() {
    if (this.ya)
        for (var a = this.b.sb(), b = 0; b < a.length; b++) this.Cg(this.b.get(a[b]));
    tj(this.b)
};
h.Cg = function(a) {
    Y(this).Ga(a.v, a.rd, this.$f)
};
h.Mf = function(a, b, c) {
    b = void 0 !== a.sj ? new vx(a.v, a.sj, !0) : new hE(b, c);
    b.c && b.c(5);
    var d = a.Cm;
    c = a.Xi;
    var e = a.v;
    a = this.isVisible();
    var f;
    (f = this.isVisible()) || (f = 150 > Va() - this.Ti);
    f && this.yj ? this.Ic() : (this.Bb = e || null, this.dispatchEvent("beforeshow") && (d = "undefined" != typeof d ? d : 8, a || (this.j().style.visibility = "hidden"), V(this.j(), !0), b.b(this.j(), d, c), a || (this.j().style.visibility = "visible"), this.Qb(-1), this.setVisible(!0)))
};
h.Ic = function() {
    this.isVisible() && (this.setVisible(!1), this.isVisible() || (this.Ti = Va(), this.Bb = null))
};
h.ph = function() {
    this.Ic()
};
h.$f = function(a) {
    kE(this, a)
};
h.Zm = function(a) {
    32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || kE(this, a);
    40 == a.keyCode && Vw(this)
};
var kE = function(a, b) {
    for (var c = a.b.sb(), d = 0; d < c.length; d++) {
        var e = a.b.get(c[d]);
        if (e.v == b.a) {
            a.Mf(e, b.clientX, b.clientY);
            b.preventDefault();
            b.stopPropagation();
            break
        }
    }
};
iE.prototype.Ca = function(a) {
    this.isVisible() && !this.mc(a.target) && this.Ic()
};
iE.prototype.Ef = function(a) {
    iE.D.Ef.call(this, a);
    this.Ic()
};
iE.prototype.T = function() {
    iE.D.T.call(this);
    this.b && (tj(this.b), delete this.b)
};
var lE = function(a, b, c, d) {
    return new VD(a, .218, {
        opacity: c
    }, {
        opacity: d
    }, {
        ej: "opacity",
        duration: .218,
        timing: b,
        delay: 0
    })
};
var mE = function(a) {
    J.call(this);
    this.v = a;
    a = y ? "focusout" : "blur";
    this.a = G(this.v, y ? "focusin" : "focus", this, !y);
    this.b = G(this.v, a, this, !y)
};
t(mE, J);
mE.prototype.handleEvent = function(a) {
    var b = new Vg(a.b);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b)
};
mE.prototype.T = function() {
    mE.D.T.call(this);
    rh(this.a);
    rh(this.b);
    delete this.v
};
var nE = function(a, b, c) {
    iE.call(this, b, c);
    this.w = new pj;
    this.g = a || 5;
    this.C = null;
    this.K = !1;
    this.h = Array(this.g);
    this.V = Array(this.g);
    this.R = Km.M();
    this.F = K.M();
    this.W = this.m = this.zc = null;
    this.yj = !0
};
t(nE, iE);
var oE = "";
nE.prototype.Ja = function() {
    nE.D.Ja.call(this);
    for (var a = 0; a < this.g; ++a) this.ib(new hx(""), !0);
    "" != oE && (this.m = new hx(oE), is(this.m, "gt-edit-menuitem"), this.ib(this.m, !0))
};
nE.prototype.render = function(a) {
    nE.D.render.call(this, a);
    R(this.j(), "alt-menu")
};
nE.prototype.wh = function(a) {
    a = this.w.get(Ra(a));
    for (var b = 0; b < H(a, 2) && b < this.g; ++b) {
        var c = Sp(this, b);
        c.g(I(aq(a, b), 0));
        c.na = b;
        c.setVisible(!0, !0)
    }
    for (; b < this.g; ++b) Sp(this, b).setVisible(!1);
    this.m && this.m.setVisible(!0, !0)
};
var pE = function(a, b, c) {
    a.w.set(Ra(b), c);
    jE(a, b, 9, 8, !1, new Po(-2, 1, -2, 1))
};
h = nE.prototype;
h.lf = function() {
    nE.D.lf.call(this);
    null != this.zc && this.zc.b();
    tj(this.w)
};
h.setVisible = function(a, b) {
    var c = this.Bb;
    this.W = c;
    if (a && null != c) {
        qE(this, c);
        Tm(this.R, "altshow");
        var d = this.F;
        L(d, M(d, 207))
    } else null != this.C && eE(this.C, 0, 0);
    null != c && (a ? this.Bg(c) : this.zg(c));
    b = nE.D.setVisible.call(this, a, b);
    a && null != this.j() && tp(this.j(), !1);
    return b
};
h.rb = function() {
    if (null != this.W) {
        var a = Eg(this.W);
        if (null != a) return a
    }
    return ""
};
h.Ic = function() {
    nE.D.Ic.call(this);
    if (this.K)
        for (var a = 0; a < this.h.length; a++) {
            var b = this.h[a];
            Gi(b.w);
            b.G();
            b.C(-1);
            b.G();
            b.setVisible(!1)
        }
};
h.Bg = function(a) {
    R(a, "trans-target");
    null !== this.zc ? this.zc.b(a) : a.title = ""
};
h.zg = function(a) {
    T(a, "trans-target");
    null !== this.zc ? this.zc.a(a) : a.title = ""
};
h.Xa = function(a) {
    if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode) return !1;
    var b = nE.D.Xa.call(this, a);
    if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
        var c = rp(this.Bb.parentNode.parentNode),
            d = null;
        if (!c && 37 == a.keyCode || c && 39 == a.keyCode) d = !1;
        if (!c && 39 == a.keyCode || c && 37 == a.keyCode) d = !0;
        if (this.sg(d) && (c = this.Bb, (c = d ? void 0 !== c.nextElementSibling ? c.nextElementSibling : og(c.nextSibling, !0) : void 0 !== c.previousElementSibling ? c.previousElementSibling : og(c.previousSibling, !1)) && c != this.Bb)) return this.Ic(),
            this.jj(d), this.Mf(c ? this.b.get(Ra(c)) : null, 0, 0), rE(this), a.preventDefault(), a.stopPropagation(), !0
    }
    return b
};
h.Mf = function(a, b, c) {
    rp((a.v || this.Bb).parentNode.parentNode) ? To(this.j(), "direction", "rtl") : To(this.j(), "direction", "");
    if (this.K)
        for (var d = 0; d < this.h.length; d++) sE(this, d), E(this.h[d].g, "...");
    this.wh(a.v);
    nE.D.Mf.call(this, a, b, c)
};
var tE = function(a, b, c) {
        !a.K || b >= a.g || "" == c || (E(a.h[b].g, c), sE(a, b))
    },
    sE = function(a, b) {
        Is(Sp(a, b).j(), 12, a.h[b].j(), 8, new Hf(1, 0))
    };
h = nE.prototype;
h.Fe = function(a) {
    nE.D.Fe.call(this, a);
    var b = this.Bb;
    if (null != b) {
        Tm(this.R, "altmenuhl");
        var c = this.F;
        L(c, M(c, 209));
        qE(this, b);
        a = this.uf(a.target); - 1 != a && a != this.g && (Gi(this.V[a]), this.V[a] = Fi(this.xm, 300, this), this.K && (b = this.h[a], rp(this.Bb.parentNode.parentNode) ? (R(b.j(), "rtl"), To(b.j(), "direction", "rtl")) : (T(b.j(), "rtl"), To(b.j(), "direction", "")), sE(this, a), b.show()))
    }
};
h.xm = function() {
    Tm(this.R, "altmenuhold");
    var a = this.F;
    L(a, M(a, 208))
};
h.Sg = function(a) {
    nE.D.Sg.call(this, a);
    a = this.uf(a.target); - 1 != a && a != this.g && (Gi(this.V[a]), this.K && this.h[a].K())
};
h.uf = function(a) {
    return Up(this, a)
};
h.sg = function() {
    return !0
};
h.jj = function() {};
h.Ag = function(a, b, c, d, e) {
    (a = nE.D.Ag.call(this, a, b, c, d, e)) && "mousedown" == a.rd && (a.rd = "click");
    return a
};
h.ef = function(a) {
    nE.D.ef.call(this, a);
    Y(this).listen(a.v, "mouseover", this.xa);
    Y(this).listen(a.v, "mouseout", this.N);
    Y(this).listen(a.v, "contextmenu", this.ia);
    Y(this).listen(a.v, "mousemove", this.ra)
};
h.Cg = function(a) {
    nE.D.Cg.call(this, a);
    Y(this).Ga(a.v, "mouseover", this.xa);
    Y(this).Ga(a.v, "mouseout", this.N);
    Y(this).Ga(a.v, "contextmenu", this.ia);
    Y(this).Ga(a.v, "mousemove", this.ra)
};
var qE = function(a, b) {
        if (null != a.C && (b = a.w.get(Ra(b))) && (a = a.C, a.b))
            for (var c = a.v && (a.v.value || Eg(a.v)), d = -1, e = -1, f = !1, g = 0; g < H(a.b, 5); g++) {
                var k = Lq(a.b, g);
                if (0 != H(k, 2) && (0 == Kh(k, 5) && (f = c.indexOf(I(k, 4), e + 1), 0 <= f ? (d = f, e = d + I(k, 4).length, f = !0) : f = !1), Lq(a.b, g).zb() == b.zb())) {
                    if (f) {
                        c = [];
                        for (e = 0; e < H(b, 3); ++e) c.push({
                            xe: d + Kh(bq(b, e), 0),
                            Dh: d + Kh(bq(b, e), 1)
                        });
                        eE(a, 0, 0, void 0, c)
                    } else d = c.indexOf(I(b, 0)), 0 <= d && eE(a, d, d + I(b, 0).length);
                    break
                }
            }
    },
    uE = function(a, b) {
        b ? oj(a.b.kc(!1), function(c) {
            "" == this.a.xi(c.v) && (R(c.v,
                "trans-target-empty"), this.a.Af(c.v, "_"));
            return !0
        }, a) : oj(a.b.kc(!1), function(c) {
            Go(c.v, "trans-target-empty") && (T(c.v, "trans-target-empty"), this.a.Af(c.v, ""));
            return !0
        }, a)
    };
nE.prototype.xa = function(a) {
    !aA() && this.isEnabled() && (R(a.target, "trans-target-highlight"), qE(this, a.target), uE(this, !0), Tm(this.R, "althighlight"), a = this.F, L(a, M(a, 206)))
};
nE.prototype.N = function(a) {
    T(a.target, "trans-target-highlight");
    null == this.C || this.isVisible() || eE(this.C, 0, 0);
    uE(this, !1)
};
nE.prototype.ra = function(a) {
    aA() && this.N(a)
};
nE.prototype.ia = function(a) {
    aA() || (this.N(a), Oz(a.target, void 0).select())
};
var rE = function(a) {
    oj(a.b.kc(!1), function(b) {
        T(b.v, "trans-target-highlight");
        return !0
    }, a)
};
nE.prototype.ph = function(a) {
    a && a.a && a.a.Bb && (a.h = a.a.Bb);
    nE.D.ph.call(this, a)
};
nE.prototype.$f = function(a) {
    aA() ? rE(this) : this.Xc && nE.D.$f.call(this, a)
};
var vE = function(a, b, c) {
    this.Z = this.c = null;
    nE.call(this, a, b, c)
};
t(vE, nE);
h = vE.prototype;
h.jj = function(a) {
    this.c = a
};
h.setVisible = function(a, b) {
    b = vE.D.setVisible.call(this, a, b);
    this.c = null;
    a ? this.Z = this.rb() : null != this.Z && this.Z != this.rb() && this.dispatchEvent(new F("action", this));
    return b
};
h.Bg = function(a) {
    vE.D.Bg.call(this, a);
    R(a, "trans-edit");
    a.contentEditable = !0;
    Sw(this, a);
    Pw(this).focus();
    Ag(Pw(this), !0);
    Y(this).listen(a, "keydown", this.Gi);
    Y(this).listen(a, "mouseout", this.Of);
    Y(this).listen(a, "mouseover", this.Of);
    if (null != this.c) {
        a = Oz(a, void 0);
        var b = this.c ? a.Xb() : a.sc(),
            c = rz(a);
        a = c;
        var d = b,
            e = new Mz;
        e.g = Wz(a, d, c, b);
        if (qg(a) && !fg(a)) {
            var f = a.parentNode;
            d = rb(f.childNodes, a);
            a = f
        }
        qg(c) && !fg(c) && (f = c.parentNode, b = rb(f.childNodes, c), c = f);
        e.g ? (e.a = c, e.h = b, e.b = a, e.c = d) : (e.a = a, e.h = d, e.b =
            c, e.c = b);
        e.select()
    }
};
h.zg = function(a) {
    vE.D.zg.call(this, a);
    T(a, "trans-edit");
    a.contentEditable = !1;
    Pw(this) && Ag(Pw(this), !1);
    Y(this).Ga(a, "keydown", this.Gi);
    Y(this).Ga(a, "mouseout", this.Of);
    Y(this).Ga(a, "mouseover", this.Of)
};
h.Of = function() {
    var a = $z();
    null == a || a.Wb() == a.rc() && a.Xb() == a.sc() || this.setVisible(a.Wb() == a.rc())
};
h.Gi = function(a) {
    for (var b = 0; b < this.g; ++b) Sp(this, b).setVisible(!1);
    this.m && this.m.setVisible(!1);
    if (13 == a.keyCode || 3 == a.keyCode) return null === Uw(this) ? (this.Ic(), a.stopPropagation(), a.preventDefault(), !0) : !1;
    null === Uw(this) || !yh(a) && 37 != a.keyCode && 39 != a.keyCode || (this.Bb.focus(), this.Qb(Up(this, null)));
    return !1
};
h.sg = function(a) {
    var b = $z();
    if (b.Wb() == b.rc() && b.Xb() == b.sc()) {
        var c = b.fh() ? b.Xb() : b.sc();
        b = Oz(rz(b), void 0);
        if (!a && c == b.Xb() || a && c == b.sc()) return !0
    }
    return !1
};
var wE = function(a, b, c) {
    nE.call(this, a, b, c);
    this.c = null
};
t(wE, nE);
h = wE.prototype;
h.render = function(a) {
    wE.D.render.call(this, a);
    this.c = new xE("");
    this.ib(this.c, !0)
};
h.wh = function(a) {
    wE.D.wh.call(this, a);
    this.c.j().firstChild.value = this.a.xi(a)
};
h.setVisible = function(a, b) {
    b = wE.D.setVisible.call(this, a, b);
    a && null != this.j() && (Pw(this) == this.c.j().firstChild || Pw(this) == this.c.j().firstChild.nextSibling) && this.c.Mb(!0);
    return b
};
h.Fe = function(a) {
    wE.D.Fe.call(this, a);
    a.target == this.c ? Sw(this, this.c.j().firstChild) : Sw(this, this.j());
    Pw(this).focus();
    Pw(this).tabIndex = 0
};
h.uf = function(a) {
    return a == this.c ? -1 : wE.D.uf.call(this, a)
};
h.Xa = function(a) {
    return 9 == a.keyCode ? (this.c.Ea(2) ? (Pw(this) == this.c.j().firstChild ? Sw(this, this.c.j().firstChild.nextSibling) : Sw(this, this.c.j().firstChild), Pw(this).focus(), Pw(this).tabIndex = 0) : this.c.Mb(!0), a.preventDefault(), a.stopPropagation(), !0) : wE.D.Xa.call(this, a)
};
h.sg = function() {
    return null === Uw(this) || !(Uw(this) instanceof xE)
};
var xE = function(a, b, c) {
    Z.call(this, a, c || yE.M(), b);
    this.Oa(4, !1)
};
t(xE, Z);
xE.prototype.vb = function(a) {
    a.target == this.j().firstChild.nextSibling && this.dispatchEvent("action")
};
xE.prototype.aa = function() {
    xE.D.aa.call(this);
    Y(this).listen(this.j().firstChild, "keydown", function(a) {
        32 == a.keyCode && a.stopPropagation()
    })
};
xE.prototype.rb = function() {
    return this.j().firstChild.value
};
var yE = function() {};
t(yE, Hr);
Ha(yE);
yE.prototype.kb = function(a) {
    var b = a.a.b("INPUT", {
            value: a.Sa(),
            id: "alt-input-text",
            type: "text"
        }),
        c = a.a.b("INPUT", {
            value: "",
            id: "alt-input-submit",
            "class": "",
            type: "button"
        });
    return a.a.b("DIV", {
        id: "alt-input"
    }, b, c)
};
var zE = function(a, b, c, d, e, f) {
    this.a = a;
    this.w = b;
    this.C = c;
    this.G = d;
    G(this.a.j(), "focus", function() {
        R(d, "focus")
    });
    G(this.a.j(), "blur", function() {
        T(d, "focus")
    });
    this.c = f;
    null != this.c && G(this.c, "action", this.K, !1, this);
    this.h = !1;
    this.g = null;
    this.b = !1;
    this.m = null;
    this.o = e;
    this.L = !1;
    this.F = K.M()
};
zE.prototype.K = function() {
    this.b = !1;
    this.a.b("");
    this.a.j().focus();
    var a = this.F;
    L(a, M(a, 27));
    this.c.setVisible(!1)
};
var AE = function(a) {
    a.h = !1;
    T(a.G, "full-edit");
    V(a.C, !0);
    V(a.w, !1);
    V(a.o, a.L);
    a.a.setVisible(!1);
    a.a.ae(!1)
};
zE.prototype.O = function(a) {
    this.b = !1;
    "" != this.a.Y() && (this.c.setVisible(!0), this.a.Y() != this.m && (this.b = !0));
    a()
};
var BE = function(a, b, c, d, e) {
    X.call(this);
    this.b = d;
    Km.M();
    this.c = new jt(a);
    lt(this.c, 2);
    this.m = null;
    this.w = new jt(b);
    this.h = null;
    this.N = c;
    this.K = e || !1;
    this.C = this.g = null
};
t(BE, X);
h = BE.prototype;
h.oa = function(a) {
    this.c.oa(a)
};
h.Ja = function() {
    BE.D.Ja.call(this);
    this.Da(cg("DIV"))
};
h.Da = function(a) {
    BE.D.Da.call(this, a);
    null == this.b || this.b.wb || this.b.ba(a);
    R(a, "st-wrap");
    a.appendChild(Mo(io, {
        Nm: this.K,
        Om: this.N
    }));
    this.g = B("st-stp1", a);
    a = Nf("st-buttons");
    this.c.render(a);
    this.c.Ed(this);
    Y(this).listen(this.c, "action", this.kl);
    this.w.render(a);
    this.w.Ed(this);
    Y(this).listen(this.w, "action", this.io)
};
h.kl = function(a) {
    V(this.g, !1);
    null != this.b && this.b.setVisible(!0);
    null != this.m && this.m(a)
};
h.io = function(a) {
    V(this.g, !1);
    null != this.h && this.h(a)
};
h.reset = function() {
    this.C && Gi(this.C);
    this.C = null;
    lt(this.c, 2);
    np(this.j(), 1);
    V(this.j(), !0);
    V(this.g, !0);
    null != this.b && this.b.setVisible(!1)
};
var CE = function(a, b) {
        this.b = a;
        this.a = "";
        b && (this.a = b);
        this.c = 0;
        this.F = K.M()
    },
    DE = function(a) {
        a = a.Kb("q").join("");
        return eu(a)
    },
    EE = function(a, b, c, d, e, f) {
        c = c.toString();
        c += DE(d);
        d = d.toString();
        var g = "POST";
        b += "?" + c;
        2E3 > b.length + d.length && (g = "GET", b += "&" + d, d = "");
        ++a.c;
        return Uj(b, function(k) {
            --a.c;
            e(k)
        }, g, d, void 0, f)
    },
    CD = function(a, b, c, d, e, f, g, k, l) {
        var m = a.a + "/translate_a/t",
            q = new cn,
            r = new cn;
        q.set("client", a.b);
        q.set("sl", b);
        q.set("tl", c);
        q.set("hl", d);
        q.set("v", "1.0");
        null != g && q.set("source", g);
        k &&
            q.g(k);
        (b = !La(e) || La(e) && 1 == e.length) ? r.set("q", e): ln(r, "q", e);
        e = p(a.h, a, b, f);
        return EE(a, m, q, r, e, l)
    },
    FE = function(a, b, c, d) {
        var e = new cn,
            f = new cn;
        e.set("client", a.b);
        e.set("sl", c);
        c = a.a + "/translate_a/single";
        e.set("dt", "rm");
        f.set("q", b);
        EE(a, c, e, f, p(a.o, a, d), void 0)
    },
    GE = function(a, b, c, d, e, f, g, k, l, m, q) {
        var r = a.a + "/translate_a/single",
            u = new cn,
            z = new cn;
        u.set("client", a.b);
        u.set("sl", b);
        u.set("tl", c);
        u.set("hl", d);
        ln(u, "dt", f);
        null != k && (u.set("ie", k), u.set("oe", k));
        m && u.set("dj", "1");
        l && u.g(l);
        z.set("q",
            e);
        EE(a, r, u, z, p(a.g, a, g, q), void 0)
    },
    bv = function(a, b, c, d, e, f, g, k, l, m) {
        var q = "at bd ex ld md qc rw rm ss t".split(" ");
        g && (q = "at bd ex ld md qca rw rm ss t".split(" "));
        xw && q.push("kr");
        zw && Aw[c] && (Aw[c][b] || "auto" === b) && q.push("gt");
        GE(a, b, c, d, e, q, f, k, l, void 0, m)
    };
CE.prototype.o = function(a, b) {
    b = b.target;
    HE(b) && (b = IE(b, "handleTransliterationResult_"), b = new Hq(b), 0 < b.hc() && a(I(b.bb(0), 3)))
};
CE.prototype.g = function(a, b, c) {
    c = c.target;
    HE(c) ? (b = IE(c, "handleSingleResult_"), La(b) && (b = new Hq(b)), a(b)) : (JE(this, c), b && b(c.Sc()))
};
CE.prototype.h = function(a, b, c) {
    c = c.target;
    if (ek(c)) {
        c = IE(c, "handleTextResult_");
        var d = [];
        if (a) d.push(La(c) ? c[0] : c);
        else if (La(c))
            for (a = 0; a < c.length; ++a) d.push(La(c[a]) ? c[a][0] : c[a]);
        b(d)
    } else JE(this, c), b(null, c.Ad)
};
var IE = function(a, b) {
        return jy(fk(a), {
            "class": "trans.common.TranslationAPI",
            func: b,
            url: String(a.Xd)
        })
    },
    HE = function(a) {
        return ek(a) && ("[" == fk(a)[0] || "{" == fk(a)[0])
    },
    KE = {},
    LE = (KE[1] = 15, KE[2] = 16, KE[3] = 17, KE[4] = 18, KE[5] = 19, KE[6] = 20, KE[7] = 21, KE[8] = 22, KE[9] = 23, KE),
    JE = function(a, b) {
        var c = b.Ad;
        qm(a.F, 156, c in LE ? LE[c] : 0);
        a = Km.M();
        c = String(b.Xd);
        b = fk(b);
        a.log("invalidResponse", {
            q: c.substring(0, 500),
            ql: c.length,
            r: b.substring(0, 500),
            rl: b.length
        })
    };
CE.prototype.m = function() {
    return this.c
};
var ME = y || De || ye || ze || !1;
af && Gk("4") || bf && Te("533") || Ce && Te("2.0") || y && Te("10") || ye && yd();
var NE = function(a, b, c, d, e, f, g, k, l) {
    X.call(this, a);
    this.c = g || null;
    if (null != this.c) {
        a = this.c;
        g = p(this.wl, this);
        a.g = p(a.O, a, g);
        g = a.a.j();
        var m = new Xr(g);
        G(m, "key", a.g, !1, a);
        m = new Av(g);
        G(m, "paste", a.g, !1, a);
        G(g, "keyup", a.g, !1, a)
    }
    this.h = null;
    this.C = "auto";
    this.X = this.m = "";
    this.Ca = new CE("mt");
    this.fb = !!b && ME && !y;
    this.R = null != e ? e : 0;
    this.b = this.fb ? new vE : new wE;
    l && this.b.oa(!1);
    if (0 < this.R)
        for (b = this.b, b.K = !0, e = 0; e < b.g; e++) a = D("DIV", "goog-menu", ""), l = D("DIV", null, a), a = new aE(l, a), b.h[e] = a, document.body.appendChild(l);
    this.b.render(c);
    this.g = k || null;
    this.ra = null != d ? d : -1;
    this.N = Km.M();
    this.K = new pj;
    this.xa = "t";
    this.V = this.W = null;
    this.w = f || null;
    this.Z = !1;
    null != this.w && (c = p(this.$a, this), this.w.m = c, c = p(this.jl, this), this.w.h = c);
    this.ia = null;
    this.F = K.M()
};
t(NE, X);
var WE = function(a, b, c, d, e) {
        if (null != a.w) {
            var f = a.w;
            V(f.j(), !1);
            V(f.g, !1);
            null != f.b && f.b.setVisible(!1)
        }
        b && (a.h = new Hq(b), a.V = null);
        c && (a.C = c);
        d && (a.m = d);
        e && (a.X = e);
        OE(a) && (AE(a.c), null != a.g && a.g.a(!1));
        if (a.h) {
            b = 0 != Qf("alt-edited").length;
            a.a.zf(a.j());
            a.b.lf();
            a.ia && (a.ia.b = a.h);
            d = "";
            for (c = e = 0; c < H(a.h, 5); c++) PE(a.h, c) && (d += " "), d += QE(a.h, c), e += H(Lq(a.h, c), 2);
            if (0 == e) return !1;
            d = [];
            e = !1;
            Ou(a.h);
            for (c = 0; c < H(a.h, 5); c++) {
                f = Lq(a.h, c);
                var g = aq(f, 0);
                PE(a.h, c) ? a.a.appendChild(a.j(), a.a.a.createTextNode(" ")) :
                    ("km" == a.m || "lo" == a.m) && a.a.appendChild(a.j(), De ? eg(document, Ld("WBR")) : ye ? dg("&shy;") : y ? dg("&#8203;") : eg(document, Ld("WBR")));
                Gh(f, 4) && 0 < I(f, 4).length && 0 == Kh(f, 5) && d.push(I(f, 4));
                var k, l = QE(a.h, c);
                xc(l) ? 0 == l.length || (k = RE(l)) : (k = a.a.b("SPAN", null, l), g = Kh(g, 1), v(0 <= g, "Invalid confidence value: " + g), v(1E3 >= g, "Invalid confidence value: " + g), 0 <= a.ra && g < a.ra && R(k, "alt-low-conf"), sj(a.K, a.C + "." + a.m + "." + I(f, 0)) && (g = a.K.get(a.C + "." + a.m + "." + I(f, 0)), g != SE(f, 0) && (a.a.Af(k, g), R(k, "alt-edited"), e = !0, TE(a, !0))),
                    null != a.b.zc ? a.b.zc.a(k) : k.title = "", pE(a.b, k, f));
                k && a.a.appendChild(a.j(), k)
            }
            if (null != a.c) {
                k = a.C + "." + a.m;
                for (c = 0; c < d.length; ++c) k += "." + d[c];
                sj(a.K, k) && (UE(a, !1), e = !0, VE(a, a.K.get(k)), null != a.g && a.g.a(!1), TE(a, !0))
            }
            e || (TE(a, !1), UE(a, !1));
            (e || b) && a.dispatchEvent("action");
            return 0 < H(a.h, 5)
        }
        TE(a, !1);
        UE(a, !1);
        return !1
    },
    RE = function(a) {
        a = Ac(ge(a)).split("<br>");
        var b = document.createDocumentFragment(),
            c = 0;
        w(a, function(d) {
            0 != c && b.appendChild(D("BR"));
            c++;
            "" != d && b.appendChild(dg(je(d)))
        });
        return b
    },
    XE = function(a,
        b) {
        if (OE(a)) return a.c.a.Y();
        var c = [];
        if (a.j() && a.j().childNodes)
            for (var d = 0; d < a.j().childNodes.length; ++d) {
                var e = a.j().childNodes[d];
                c[d] = b && "BR" == e.tagName ? "\n" : Eg(e)
            }
        return c.join("")
    },
    ZE = function(a, b, c, d) {
        if (b)
            for (a = 0; a < H(b, 5); a++) {
                var e = Lq(b, a),
                    f = c;
                if ((e = e && ib(e, Gl)) && Fl(f.a, e.a)) {
                    c = b;
                    b = a;
                    f = -1;
                    a = H(c, 5);
                    for (e = b; 0 <= e; e--)
                        if (0 == Kh(Lq(c, e), 5)) {
                            f = e;
                            break
                        } for (e = b + 1; e <= H(c, 5); e++)
                        if (0 == Kh(Lq(c, e), 5)) {
                            a = e;
                            break
                        } if (d) b = YE(c, f, a);
                    else if (d = c, c = f, d) {
                        f = b + 1;
                        e = b;
                        for (b = QE(d, b).length; 64 > b && (f != a || e != c);) f <
                            a && (b += QE(d, f++).length + 1), 64 > b && e > c && (b += QE(d, --e).length + 1);
                        b = YE(d, e, f)
                    } else b = "";
                    return b
                }
            }
        return ""
    },
    YE = function(a, b, c) {
        var d = [];
        d.push(QE(a, b));
        for (b += 1; b < c; b++) PE(a, b) && d.push(" "), d.push(QE(a, b));
        return d.join("")
    },
    PE = function(a, b) {
        if (0 == b) return !1;
        var c = Lq(a, b),
            d = Lq(a, b - 1);
        return Jl(aq(c, 0), 2) && !Jl(aq(d, 0), 3) && !wc(QE(a, b - 1), "\n")
    };
h = NE.prototype;
h.Ce = function() {
    return this.m
};
h.Ja = function() {
    this.Da(Jg(this.a, "span"))
};
h.Da = function(a) {
    NE.D.Da.call(this, a);
    WE(this)
};
h.aa = function() {
    NE.D.aa.call(this);
    Y(this).listen(this.b, "action", this.Ta);
    null != this.g && null != this.g.b && (Y(this).listen(this.g.b, "click", this.Ul), Ep(Y(this), this.g.b, this.F.g, this.F));
    Y(this).listen(this.b, "show", this.Fl);
    this.j() && Y(this).listen(this.j(), "keydown", function(a) {
        32 == a.keyCode && a.stopPropagation()
    }, !0)
};
h.T = function() {
    NE.D.T.call(this);
    this.b.Ia()
};
h.wl = function() {
    this.w.oa(this.c.b);
    TE(this, this.c.b)
};
var $E = function(a) {
    null != a.g && a.g.a(!0);
    var b = a.c,
        c = XE(a);
    R(b.G, "full-edit");
    b.c.setVisible(!0);
    b.m = c;
    b.a.g(c);
    b.a.setVisible(!0);
    b.a.ae(!0);
    V(b.w, !0);
    V(b.C, !1);
    b.L = op(b.o);
    V(b.o, !1);
    c = b.a.j();
    c.focus();
    c.setSelectionRange(c.value.length, c.value.length);
    b.h = !0;
    a.Z = op(a.w.j());
    a.w.reset();
    null != a.g ? a.w.oa(op(a.g.b)) : a.w.oa(!1);
    TE(a, !1)
};
NE.prototype.Ta = function(a) {
    if ("hide" != a.type || a.target == this.b)
        if (a.target == this.b.m && null != this.c) {
            this.N.log("editpopupclk");
            var b = this.F;
            L(b, M(b, 233));
            $E(this)
        } else {
            var c = a.h;
            null == c && null != a.a && (c = a.a.Bb);
            b = a.target.rb();
            if (null != c && null != a.target) {
                var d = c,
                    e = v(this.b.w.get(Ra(d)));
                this.a.Af(d, b);
                b == SE(e, 0) ? (T(d, "alt-edited"), 0 == Qf("alt-edited").length && (TE(this, !1), UE(this, !1))) : (R(d, "alt-edited"), TE(this, !0), UE(this, !0));
                null != this.K && this.K.set(this.C + "." + this.m + "." + I(e, 0), b);
                e = v(this.b.w.get(Ra(c)));
                null != this.K && this.K.set(this.C + "." + this.m + "." + I(e, 0), b);
                d = SE(e, 0);
                c = Up(this.b, a.target);
                d = {
                    sl: this.C,
                    tl: this.m,
                    utrans: b,
                    gtrans: d,
                    index: c,
                    ophrase: I(e, 0),
                    osentence: I(e, 4),
                    tsentence: ZE(this, this.h, e)
                };
                0 < H(e, 2) && (d.confidence = Kh(aq(e, 0), 1));
                if (a.target instanceof xE || -1 == c) d.manual = 1, c = this.F, L(c, M(c, 240));
                else {
                    a = this.F;
                    e = M(a, 239);
                    var f = new ul,
                        g = qf(qf(f, 2, sl), 3, ql);
                    A(g, 1, c); of (e, 27, f);
                    L(a, e)
                }
                for (var k in d) "string" === typeof d[k] && 64 < d[k].length && (d.tr = 1, d[k] = d[k].substr(0, 64));
                this.N.log("usealt", d,
                    null);
                k = new F("usealt");
                k.text = b;
                this.dispatchEvent(k);
                this.dispatchEvent("action")
            }
        }
};
var VE = function(a, b) {
    if (a.j()) {
        null == a.W && (a.V = Gb(a.a.wi(a.j())));
        a.W = b;
        var c;
        if (c = a.j().childNodes && 0 < a.j().childNodes.length) c = (c = a.j().childNodes[0]) ? sj(a.b.b, Ra(c)) : !1;
        if (c) a.a.zf(a.j()), a.b.lf(), b = a.a.b("SPAN", "alt-edited", a.W), a.a.appendChild(a.j(), b), pE(a.b, b, new Zp);
        else {
            ig(a.j());
            a = a.j();
            c = ge(b);
            b = D("DIV");
            c = Ac(c).split("<br>");
            for (var d = 0; d < c.length; ++d) {
                var e = c[d];
                e.length && (e = D("SPAN", e), gg(b, e));
                d != c.length - 1 && (e = D("BR"), gg(b, e))
            }
            gg(a, b)
        }
    }
};
h = NE.prototype;
h.Ul = function() {
    if (null != this.c && OE(this)) {
        var a = this.c;
        a.c.setVisible(!0);
        a.a.g(a.m);
        a.a.j().focus();
        a.g(null)
    } else OE(this) && (null != this.g && this.g.a(!1), AE(this.c)), tj(this.K), this.W = null, WE(this), this.dispatchEvent("action");
    this.N.log("clkundo", void 0, null)
};
h.jl = function() {
    OE(this) && (this.c.b && (VE(this, this.c.a.Y()), this.Z = !0), AE(this.c), null != this.g && this.g.a(!1), this.c.b && TE(this, !0), this.w.oa(!0), V(this.w.j(), this.Z), this.dispatchEvent("action"));
    var a = this.F;
    L(a, M(a, 215));
    this.N.log("clkcancel", void 0, null)
};
h.Fl = function() {
    var a = this.b.w.get(Ra(this.b.Bb));
    if (a) {
        if (0 < this.R) {
            var b = new cn("source=baf");
            if (1 == this.R) {
                for (var c = [], d = 0, e = H(a, 2); d < e; d++) c.push(SE(a, d));
                CD(this.Ca, this.m, this.C, aF(this), c, p(this.Cn, this), void 0, b, void 0)
            } else
                for (d = 0, e = H(a, 2); d < e; d++) c = SE(a, d), GE(this.Ca, this.m, this.C, aF(this), c, ["at", "t"], p(this.Dn, this, d), void 0, b)
        }
        b = new F("click");
        b.text = this.b.rb();
        b.m = H(this.h, 5);
        this.dispatchEvent(b);
        b = {};
        b.confidence = Kh(aq(a, 0), 1);
        this.C && this.m && this.X && (b.segments = H(this.h, 5), b.sl =
            this.C, b.tl = this.m, b.hl = this.X);
        a = this.F;
        L(a, M(a, 238));
        this.N.log("phrsclk", b, null)
    }
};
h.Dn = function(a, b) {
    if (1 == this.R || 1 < H(b, 5)) {
        var c = b.bb(0).Tc();
        var d = 1;
        for (var e = b.hc(); d < e; d++) c += " " + b.bb(d).Tc();
        d = c
    } else if (1 == H(b, 5)) {
        c = [];
        b = Lq(b, 0);
        d = 0;
        for (e = Math.min(this.R, H(b, 2)); d < e; d++) c.push(SE(b, d));
        d = c.join(", ")
    } else d = "...";
    tE(this.b, a, d)
};
h.Cn = function(a) {
    for (var b = 0; b < a.length; b++) tE(this.b, b, a[b])
};
var TE = function(a, b) {
        null != a.g && null != a.g.b && V(a.g.b, b)
    },
    UE = function(a, b) {
        null != a.w && (b && a.w.reset(), V(a.w.j(), b))
    };
NE.prototype.$a = function() {
    var a = this.F;
    L(a, M(a, 374));
    var b = [],
        c;
    null != this.V ? c = this.V : c = ng(this.j());
    a = {
        segment: []
    };
    for (var d = null, e = 0, f = 0; f < c.length; f++) {
        var g = Lq(this.h, f);
        if (null != g) {
            var k = Eg(c[f]);
            a: {
                var l = k;
                var m = g;
                if (0 == H(m, 2)) l = 0;
                else {
                    for (var q = 0; q < H(m, 2); ++q)
                        if (l == SE(m, q)) {
                            l = q;
                            break a
                        } l = -1
                }
            }
            m = yc(I(g, 4));
            q = ZE(this, this.h, g, !0);
            if (0 != m.length) {
                if (0 == b.length || m != b[b.length - 1]) b.push(m), d = bF(this, b.length - 1), e = 0, d = {
                    source: m,
                    original_target: q,
                    segment_source: d,
                    phrase_correction: []
                }, a.segment.push(d);
                if (0 != l)
                    for (m = SE(g, 0).length, l = {
                            alternative_index: l,
                            edited_phrase: k,
                            source_span: [],
                            target_span: [{
                                start: e,
                                end: e + m
                            }]
                        }, d.phrase_correction.push(l), m = 0; m < H(g, 3); ++m) q = bq(g, m), l.source_span.push({
                        start: Kh(q, 0),
                        end: Kh(q, 1)
                    });
                e += k.length;
                Jl(aq(g, 0), 2) && e++
            }
        }
    }
    if (OE(this)) {
        this.dispatchEvent("action");
        AE(this.c);
        null != this.g && this.g.a(!1);
        TE(this, !0);
        this.c.a.Y() != XE(this) && VE(this, this.c.a.Y());
        c = this.C + "." + this.m;
        for (f = 0; f < b.length; ++f) c += "." + b[f];
        b = this.c.a.Y();
        this.K.set(c, b);
        a.contains_full_edit = !0
    }
    a.edited_target =
        XE(this, !0);
    b = new cn;
    b.set("ue", JSON.stringify(a));
    b.set("sl", this.C);
    b.set("tl", this.m);
    Uj("/translate_suggestion?client=" + this.xa, void 0, "POST", b.toString(), void 0, 1E4)
};
var bF = function(a, b) {
        if (b < a.h.hc()) switch (a.h.bb(b).qf()) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            case 10:
                return 4;
            case 3:
                return 5
        }
        return 0
    },
    OE = function(a) {
        return null != a.c && a.c.h
    },
    QE = function(a, b) {
        a = Lq(a, b);
        return 0 == H(a, 2) ? I(a, 0) : SE(a, 0)
    },
    SE = function(a, b) {
        return I(aq(a, b), 0)
    },
    aF = function(a) {
        a = a.X;
        0 === a.length && null != Nf("hl") && (a = Nf("hl").value);
        return a
    };
var cF = function(a) {
    Hl(this, a, 7)
};
t(cF, Gl);
var dF = {
    translation_id: {
        H: 0,
        J: !1
    },
    sl: {
        H: 1,
        J: !1
    },
    tl: {
        H: 2,
        J: !1
    },
    source: {
        H: 3,
        J: !1
    },
    trans: {
        H: 4,
        J: !1
    },
    write_timestamp: {
        H: 5,
        J: !1
    },
    label: {
        H: 6,
        J: !0
    }
};
cF.prototype.za = function() {
    return dF
};
cF.prototype.Be = function() {
    return I(this, 3)
};
cF.prototype.Tc = function() {
    return I(this, 4)
};
var eF = function(a) {
    Hl(this, a, 7)
};
t(eF, Gl);
var fF = {
    total: {
        H: 0,
        J: !1
    },
    token: {
        H: 1,
        J: !1
    },
    translations: {
        H: 2,
        va: function(a) {
            return Ol(cF, a)
        },
        sa: function(a) {
            return Nl(new cF(a))
        },
        J: !0
    },
    error: {
        H: 3,
        J: !1
    },
    timestamp: {
        H: 4,
        J: !1
    },
    id: {
        H: 5,
        J: !1
    },
    max_translations: {
        H: 6,
        J: !1
    }
};
eF.prototype.za = function() {
    return fF
};
eF.prototype.getToken = function() {
    return I(this, 1)
};
var gF = function() {
    var a = DATA.Usage;
    this.g = DATA.DisplayLanguage;
    this.a = "";
    this.b = a;
    this.h = ""
};
gF.prototype.c = function(a, b) {
    b = b.target;
    if (ek(b) && "" != fk(b) && null != gk(b)) {
        b = gk(b);
        b = new eF(b);
        var c = b.getToken();
        null != c && "" != c && (this.a = c)
    } else b = new eF, b.a[3] = this.h;
    a(b)
};
var hF = function(a, b, c, d, e, f) {
    var g = window.location.href;
    b = new Wm(b);
    (g = (new Wm(g, !0)).a.get("authuser")) && b.a.set("authuser", g);
    b = b.toString();
    b += "&hl=" + a.g;
    a.b && (b += "&xt=" + a.b);
    Uj(b, p(a.c, a, c), d, e, f)
};
gF.prototype.tb = function(a, b, c, d, e, f) {
    var g = {
        cm: "g"
    };
    null != b && "all" != b && (g.sl = b);
    null != c && "all" != c && (g.tl = c);
    null != d && "" != d && (g.q = d);
    null != e && "" != e && (g.utrans = e);
    null != f && "0" != f && (g.od = f);
    "" != this.a && (g.tk = this.a, this.a = "");
    hF(this, "/translate_a/sg?client=webapp&" + Bj(g), a, "GET", void 0, {
        "cache-control": "no-cache"
    })
};
var iF = function(a, b, c, d, e, f, g) {
        var k = {
            cm: "a"
        };
        k.sl = c;
        k.tl = d;
        k.ql = e.length + "";
        g && (k.edit = "1");
        c = {};
        c.q = e;
        c.utrans = f;
        hF(a, "/translate_a/sg?client=webapp&" + Bj(k), b, "POST", Bj(c))
    },
    jF = function(a, b, c) {
        var d = {
            cm: "d"
        };
        d.count = c.length + "";
        var e = {};
        e.id = c;
        hF(a, "/translate_a/sg?client=webapp&" + Bj(d), b, "POST", Bj(e))
    };
var Rb = {},
    kF = null,
    lF = function(a) {
        a = Ra(a);
        delete Rb[a];
        Sb() && kF && kF.stop()
    },
    nF = function() {
        kF || (kF = new zs(function() {
            mF()
        }, 20));
        var a = kF;
        a.mb() || a.start()
    },
    mF = function() {
        var a = Va();
        Lb(Rb, function(b) {
            oF(b, a)
        });
        Sb() || nF()
    };
var pF = function(a, b, c, d) {
    SD.call(this);
    if (!La(a) || !La(b)) throw Error("Start and end parameters must be arrays");
    if (a.length != b.length) throw Error("Start and end points must be the same length");
    this.o = a;
    this.K = b;
    this.duration = c;
    this.L = d;
    this.coords = [];
    this.progress = 0;
    this.G = null
};
t(pF, SD);
pF.prototype.play = function(a) {
    if (a || 0 == this.a) this.progress = 0, this.coords = this.o;
    else if (1 == this.a) return !1;
    lF(this);
    this.startTime = a = Va(); - 1 == this.a && (this.startTime -= this.duration * this.progress);
    this.endTime = this.startTime + this.duration;
    this.G = this.startTime;
    this.progress || this.c();
    this.b("play"); - 1 == this.a && this.b("resume");
    this.a = 1;
    var b = Ra(this);
    b in Rb || (Rb[b] = this);
    nF();
    oF(this, a);
    return !0
};
pF.prototype.stop = function(a) {
    lF(this);
    this.a = 0;
    a && (this.progress = 1);
    qF(this, this.progress);
    this.b("stop");
    this.g()
};
pF.prototype.T = function() {
    0 == this.a || this.stop(!1);
    this.b("destroy");
    pF.D.T.call(this)
};
var oF = function(a, b) {
        ab(a.startTime);
        ab(a.endTime);
        ab(a.G);
        b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
        a.progress = (b - a.startTime) / (a.endTime - a.startTime);
        1 < a.progress && (a.progress = 1);
        a.G = b;
        qF(a, a.progress);
        1 == a.progress ? (a.a = 0, lF(a), a.b("finish"), a.g()) : 1 == a.a && a.C()
    },
    qF = function(a, b) {
        Na(a.L) && (b = a.L(b));
        a.coords = Array(a.o.length);
        for (var c = 0; c < a.o.length; c++) a.coords[c] = (a.K[c] - a.o[c]) * b + a.o[c]
    };
pF.prototype.C = function() {
    this.b("animate")
};
pF.prototype.b = function(a) {
    this.dispatchEvent(new rF(a, this))
};
var rF = function(a, b) {
    F.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.duration = b.duration;
    this.progress = b.progress;
    this.state = b.a
};
t(rF, F);
var sF = function(a, b, c, d, e) {
    pF.call(this, b, c, d, e);
    this.h = a
};
t(sF, pF);
sF.prototype.m = Ga;
sF.prototype.C = function() {
    this.m();
    sF.D.C.call(this)
};
sF.prototype.g = function() {
    this.m();
    sF.D.g.call(this)
};
sF.prototype.c = function() {
    this.m();
    sF.D.c.call(this)
};
var tF = function(a, b, c, d, e) {
    "number" === typeof b && (b = [b]);
    "number" === typeof c && (c = [c]);
    sF.call(this, a, b, c, d, e);
    if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
    this.w = -1
};
t(tF, sF);
var uF = 1 / 1024;
tF.prototype.m = function() {
    var a = this.coords[0];
    Math.abs(a - this.w) >= uF && (np(this.h, a), this.w = a)
};
tF.prototype.c = function() {
    this.w = -1;
    tF.D.c.call(this)
};
tF.prototype.g = function() {
    this.w = -1;
    tF.D.g.call(this)
};
tF.prototype.show = function() {
    this.h.style.display = ""
};
var vF = function(a, b, c) {
    tF.call(this, a, 0, 1, b, c)
};
t(vF, tF);
var wF = function(a, b, c) {
    tF.call(this, a, 1, 0, b, c)
};
t(wF, tF);
wF.prototype.c = function() {
    this.show();
    wF.D.c.call(this)
};
wF.prototype.g = function() {
    this.h.style.display = "none";
    wF.D.g.call(this)
};
var xF = function(a, b, c) {
    tF.call(this, a, 0, 1, b, c)
};
t(xF, tF);
xF.prototype.c = function() {
    this.show();
    xF.D.c.call(this)
};
var yF = function(a, b, c) {
    var d = "rw";
    null != c && c && (d = "m" + d);
    this.g = b;
    Nq.call(this, a, d, MSG_SEE_ALSO, MSG_SEE_ALSO, 10);
    this.Xh = !0
};
t(yF, Nq);
yF.prototype.update = function(a, b, c, d) {
    yF.D.update.call(this, a, b, c, d);
    if (!d || 0 == H(Kq(d), 0)) return !1;
    (a = this.j()) && Co(a, Eg(this.Oc));
    ig(this.b);
    this.Dd();
    c = a = D("DIV", {
        "class": "gt-rw-div"
    });
    b = 15 < H(Kq(d), 0);
    for (var e = 0; e < H(Kq(d), 0); ++e) {
        var f = Kq(d);
        var g = Ih(f, 0, e);
        f = D("SPAN", {
            "class": "gt-cd-cl"
        });
        E(f, g);
        wo(f, "option");
        f.tabIndex = -1;
        this.c.push(f);
        if (10 == e && b) {
            var k = D("DIV", {
                "class": "gt-rw-div"
            });
            c = k;
            k = b ? D("SPAN", {
                "class": "gt-card-fadein-wrapper"
            }, k) : k;
            To(k, {
                display: "none"
            })
        }
        this.g || 0 != e && e != H(Kq(d), 0) &&
            c.appendChild(dg(", "));
        c.appendChild(f)
    }
    c = jc(this.Ba) ? "rtl" : "ltr";
    To(this.b, {
        direction: c
    });
    this.b.appendChild(a);
    k && this.b.appendChild(k);
    b && (d = MSG_N_MORE_RELATED_LABEL.replace("%1$s", (H(Kq(d), 0) - 7).toLocaleString(this.Ra)), Pq(this, d, MSG_FEWER_RELATED_LABEL));
    zF(this, Gb(ng(a)));
    this.setVisible(!0);
    return !0
};
yF.prototype.aa = function() {
    yF.D.aa.call(this);
    var a = this.j();
    a && (wo(a, "listbox"), Dh(a, this.w.bind(this)))
};
var zF = function(a, b) {
    a.g && (sh(a.j(), "keydown"), G(a.j(), "keydown", function(c) {
        Ch(c, b)
    }, !1))
};
yF.prototype.w = function(a) {
    Go(a.target, "gt-cd-cl") && this.dispatchEvent(new F("a", a.target))
};
yF.prototype.ee = function(a) {
    var b = [],
        c = Qf("gt-card-fadein-wrapper", this.j());
    if (this.g) {
        if (a) var d = Gb(Qf("gt-cd-cl", this.j()));
        else d = B("gt-rw-div", this.j()), d = Gb(ng(d));
        zF(this, d)
    }
    for (var e = 0; e < c.length; e++) d = c[e], a ? b.push(new xF(d, 218)) : b.push(new wF(d, 218));
    for (e = 0; e < b.length; e++) b[e].play()
};
var AF = function() {},
    BF = function(a) {
        var b = D("SPAN");
        b.style.color = "transparent";
        b.style.background = "transparent";
        b.style.top = "-1000px";
        b.style.left = "-1000px";
        b.style.position = "absolute";
        gg(document.body, b);
        E(b, a);
        a = b.offsetWidth;
        mg(b);
        return a
    };
Ha(AF);
var CF = function() {
    AF.M()
};
Ha(CF);
var DF = function(a) {
    var b = BF(a);
    a = BF(a.substr(0, 1));
    return b != a
};
var EF = function() {
    zB.apply(this, arguments)
};
ka(EF, zB);
EF.prototype.K = function(a) {
    zB.prototype.K.call(this, a);
    FF(this.Z);
    FF(this.b);
    this.j().addEventListener("keydown", p(this.Ta, this), !1)
};
var FF = function(a) {
        U(a, "tw-ll-top", !0);
        a.addEventListener("scroll", function() {
            U(a, "tw-ll-top", 0 >= a.scrollTop)
        })
    },
    GF = function(a) {
        return Ig(document) === HB(a)
    };
EF.prototype.na = function(a) {
    return Ig(document) === a.j()
};
var HF = function(a) {
    a = Vo(a.m, "columnCount");
    return parseInt(a, 10) || 1
};
EF.prototype.Ta = function(a) {
    if (this.isVisible()) switch (a.keyCode) {
        case 27:
            this.close();
            break;
        case 13:
            if (GF(this)) {
                var b = IF(this);
                op(this.b) && null != b && (b.re(sB(b.j())), a.preventDefault())
            } else b = (op(this.b) ? this.g : this.a).find(this.na) || null, null != b && (b.re(sB(b.j())), a.preventDefault());
            break;
        case 40:
            GF(this) ? (b = IF(this), null != b && (HB(this).blur(), b.j().focus(), a.preventDefault())) : JF(this, a);
            break;
        case 38:
            GF(this) || KF(this, a);
            break;
        case 39:
            if (!GF(this) && (b = HF(this), 1 < b)) {
                var c = Math.ceil(this.a.length /
                        b),
                    d = (op(this.b) ? this.g : this.a).findIndex(this.na) + c;
                d >= this.a.length && (d -= b * c);
                0 > d && (d += c);
                this.a[d].j().focus();
                a.preventDefault()
            }
            break;
        case 37:
            GF(this) || (b = HF(this), 1 < b && (c = Math.ceil(this.a.length / b), d = (op(this.b) ? this.g : this.a).findIndex(this.na) - c, 0 > d && (d += b * c), d >= this.a.length && (d -= c), this.a[d].j().focus(), a.preventDefault()));
            break;
        default:
            this.X(a)
    }
};
var JF = function(a, b) {
        var c = Ig(document);
        if (c)
            for (var d = a.a.find(function(g) {
                    return "auto" === g.code
                }), e = a.a.find(function(g) {
                    return "auto" !== g.code
                }), f = c;;) {
                (f = d && f === d.j() ? e.j() : f.nextElementSibling) || (f = !op(a.b) && d ? d.j() : c.parentElement.children[0]);
                if (f === c) break;
                if (0 <= f.tabIndex && op(f)) {
                    f.focus();
                    b.preventDefault();
                    break
                }
            }
    },
    KF = function(a, b) {
        var c = Ig(document);
        if (c)
            for (var d = a.a.find(function(g) {
                    return "auto" === g.code
                }), e = zb(a.a, function(g) {
                    return "auto" !== g.code
                }), f = c;;) {
                (f = d && f === d.j() ? e.j() : f.previousElementSibling) ||
                (f = !op(a.b) && d ? d.j() : qb(c.parentElement.children));
                if (f === c) break;
                if (0 <= f.tabIndex && op(f)) {
                    f.focus();
                    b.preventDefault();
                    break
                }
            }
    },
    IF = function(a) {
        if (op(a.b)) return a = a.g.find(function(c) {
            return op(c.j())
        }), null != a ? a : null;
        var b = qb(a.a);
        return "auto" === b.code ? b : a.a[0]
    };
EF.prototype.X = function(a) {
    GF(this) || !xh(a.keyCode) || a.altKey || a.ctrlKey || a.metaKey || (JB(this), HB(this).focus())
};
var LF = function(a, b, c, d) {
    this.Ba = a;
    this.Ma = b;
    this.cg = c;
    this.c = d;
    this.b = this.a = null
};
var MF = function(a) {
        this.a = a;
        Km.M()
    },
    NF = function(a) {
        wy("TranslationStarred", function(b, c) {
            c = b ? new MF(c) : null;
            a && a(b, c)
        })
    },
    OF = function(a, b, c, d, e) {
        By(a.a, b, c, d, 0, e)
    };
var PF = function(a, b, c, d) {
    this.a = a;
    this.w = b;
    this.o = c;
    this.h = "AUTO" === this.o.toUpperCase() && b.src ? b.src : null;
    this.m = d;
    this.b = this.Ya();
    this.g = this.c = null
};
PF.prototype.Ya = function() {
    return Xu(this.w)
};
PF.prototype.Pa = function() {
    return this.o
};
var QF = function(a) {
    return "AUTO" === a.o.toUpperCase() && null != a.h ? a.h : a.o
};
PF.prototype.ma = function() {
    return this.m
};
var RF = function(a, b) {
        a.w = b;
        a.b = a.Ya()
    },
    SF = function(a, b) {
        xc(a.b) || (a.b = b)
    },
    TF = function(a, b) {
        return a.a === b.a && a.b === b.b && QF(a) === QF(b) && a.ma() === b.ma()
    },
    UF = function(a, b) {
        var c = a.a.toLowerCase();
        a = a.Ya().toLowerCase();
        b = b.toLowerCase();
        return c.includes(b) || a.includes(b)
    },
    VF = function(a) {
        return a.Ya() !== a.b
    },
    WF = function(a) {
        var b = JSON.parse(JSON.stringify(a.w));
        v(b instanceof Object, "Translation result isn't JSON");
        b = new PF(a.a, b, a.o, a.m);
        null != a.c && (b.c = a.c);
        null != a.g && (b.g = a.g);
        null != a.h && (b.h = a.h);
        SF(b, a.b);
        return b
    };
var XF = function(a) {
    return 1 == a % 10 && 11 != a % 100 ? "one" : 2 == a % 10 && 12 != a % 100 ? "two" : 3 == a % 10 && 13 != a % 100 ? "few" : "other"
};
XF = function() {
    return "other"
};
var YF = function(a, b) {
    if (void 0 === b) {
        b = a + "";
        var c = b.indexOf(".");
        b = Math.min(-1 == c ? 0 : b.length - c - 1, 3)
    }
    return 1 == (a | 0) && 0 == b ? "one" : "other"
};
YF = function(a) {
    return 0 == (a | 0) || 1 == a ? "one" : "other"
};
var bG = function(a) {
        this.g = a;
        this.b = this.a = this.h = null;
        a = fv;
        var b = dv;
        if (ZF !== a || $F !== b) ZF = a, $F = b, aG = new iv(1);
        this.o = aG
    },
    ZF = null,
    $F = null,
    aG = null,
    cG = /'([{}#].*?)'/g,
    dG = /''/g,
    eG = function(a, b) {
        return kw(a, b)
    },
    kw = function(a, b) {
        if (a.g) {
            a.h = [];
            var c = fG(a, a.g);
            a.b = gG(a, c);
            a.g = null
        }
        if (!a.b || 0 == a.b.length) return "";
        a.a = Gb(a.h);
        c = [];
        hG(a, a.b, b, !1, c);
        b = c.join("");
        for (v(-1 == b.search("#"), "Not all # were replaced."); 0 < a.a.length;) b = b.replace(a.c(a.a), a.a.pop());
        return b
    },
    hG = function(a, b, c, d, e) {
        for (var f = 0; f < b.length; f++) switch (b[f].type) {
            case 4:
                e.push(b[f].value);
                break;
            case 3:
                var g = b[f].value,
                    k = a,
                    l = e,
                    m = c[g];
                void 0 === m ? l.push("Undefined parameter - " + g) : (k.a.push(m), l.push(k.c(k.a)));
                break;
            case 2:
                g = b[f].value;
                k = a;
                l = c;
                m = d;
                var q = e,
                    r = g.df;
                void 0 === l[r] ? q.push("Undefined parameter - " + r) : (r = g[l[r]], void 0 === r && (r = g.other, eb(r, "Invalid option or missing other option for select block.")), hG(k, r, l, m, q));
                break;
            case 0:
                g = b[f].value;
                iG(a, g, c, YF, d, e);
                break;
            case 1:
                g = b[f].value;
                iG(a, g, c, XF, d, e);
                break;
            default:
                $a("Unrecognized block type: " + b[f].type)
        }
    },
    iG = function(a, b, c,
        d, e, f) {
        var g = b.df,
            k = b.Yh,
            l = +c[g];
        isNaN(l) ? f.push("Undefined or invalid parameter - " + g) : (k = l - k, g = b[c[g]], void 0 === g && (d = d(Math.abs(k)), bb(d, "Invalid plural key."), g = b[d], void 0 === g && (g = b.other), eb(g, "Invalid option or missing other option for plural block.")), b = [], hG(a, g, c, e, b), c = b.join(""), bb(c, "Empty block in plural."), e ? f.push(c) : (a = sv(a.o, k), f.push(c.replace(/#/g, a))))
    },
    fG = function(a, b) {
        var c = a.h,
            d = p(a.c, a);
        b = b.replace(dG, function() {
            c.push("'");
            return d(c)
        });
        return b = b.replace(cG, function(e, f) {
            c.push(f);
            return d(c)
        })
    },
    jG = function(a) {
        var b = 0,
            c = [],
            d = [],
            e = /[{}]/g;
        e.lastIndex = 0;
        for (var f; f = e.exec(a);) {
            var g = f.index;
            "}" == f[0] ? (f = c.pop(), v(void 0 !== f && "{" == f, "No matching { for }."), 0 == c.length && (f = {
                type: 1
            }, f.value = a.substring(b, g), d.push(f), b = g + 1)) : (0 == c.length && (b = a.substring(b, g), "" != b && d.push({
                type: 0,
                value: b
            }), b = g + 1), c.push("{"))
        }
        v(0 == c.length, "There are mismatched { or } in the pattern.");
        b = a.substring(b);
        "" != b && d.push({
            type: 0,
            value: b
        });
        return d
    },
    kG = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,
    lG = /^\s*(\w+)\s*,\s*selectordinal\s*,/,
    mG = /^\s*(\w+)\s*,\s*select\s*,/,
    gG = function(a, b) {
        var c = [];
        b = jG(b);
        for (var d = 0; d < b.length; d++) {
            var e = {};
            if (0 == b[d].type) e.type = 4, e.value = b[d].value;
            else if (1 == b[d].type) {
                var f = b[d].value;
                switch (kG.test(f) ? 0 : lG.test(f) ? 1 : mG.test(f) ? 2 : /^\s*\w+\s*/.test(f) ? 3 : 5) {
                    case 2:
                        e.type = 2;
                        e.value = nG(a, b[d].value);
                        break;
                    case 0:
                        e.type = 0;
                        e.value = oG(a, b[d].value);
                        break;
                    case 1:
                        e.type = 1;
                        e.value = pG(a, b[d].value);
                        break;
                    case 3:
                        e.type = 3;
                        e.value = b[d].value;
                        break;
                    default:
                        $a("Unknown block type for pattern: " +
                            b[d].value)
                }
            } else $a("Unknown part of the pattern.");
            c.push(e)
        }
        return c
    },
    nG = function(a, b) {
        var c = "";
        b = b.replace(mG, function(k, l) {
            c = l;
            return ""
        });
        var d = {};
        d.df = c;
        b = jG(b);
        for (var e = 0; e < b.length;) {
            var f = b[e].value;
            bb(f, "Missing select key element.");
            e++;
            v(e < b.length, "Missing or invalid select value element.");
            var g;
            1 == b[e].type ? g = gG(a, b[e].value) : $a("Expected block type.");
            d[f.replace(/\s/g, "")] = g;
            e++
        }
        eb(d.other, "Missing other key in select statement.");
        return d
    },
    oG = function(a, b) {
        var c = "",
            d = 0;
        b = b.replace(kG,
            function(l, m, q) {
                c = m;
                q && (d = parseInt(q, 10));
                return ""
            });
        var e = {};
        e.df = c;
        e.Yh = d;
        b = jG(b);
        for (var f = 0; f < b.length;) {
            var g = b[f].value;
            bb(g, "Missing plural key element.");
            f++;
            v(f < b.length, "Missing or invalid plural value element.");
            var k;
            1 == b[f].type ? k = gG(a, b[f].value) : $a("Expected block type.");
            e[g.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = k;
            f++
        }
        eb(e.other, "Missing other key in plural statement.");
        return e
    },
    pG = function(a, b) {
        var c = "";
        b = b.replace(lG, function(k, l) {
            c = l;
            return ""
        });
        var d = {};
        d.df = c;
        d.Yh = 0;
        b = jG(b);
        for (var e =
                0; e < b.length;) {
            var f = b[e].value;
            bb(f, "Missing ordinal key element.");
            e++;
            v(e < b.length, "Missing or invalid ordinal value element.");
            if (1 == b[e].type) var g = gG(a, b[e].value);
            else $a("Expected block type.");
            d[f.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = g;
            e++
        }
        eb(d.other, "Missing other key in selectordinal statement.");
        return d
    };
bG.prototype.c = function(a) {
    v(0 < a.length, "Literal array is empty.");
    return "\ufddf_" + (a.length - 1).toString(10) + "_"
};
var sG = function(a, b, c, d) {
        this.N = a;
        this.R = b;
        this.L = c;
        this.b = d;
        this.F = K.M();
        this.G = 1E4;
        this.h = 0;
        this.Fa = new iv("######");
        this.O = new bG(DATA.TooManyPhrases);
        this.o = null;
        this.g = [];
        if ("openDatabase" in window) {
            a = !0;
            try {
                window.openDatabase("", "", "", 0)
            } catch (e) {
                a = !1
            }
        } else a = !1;
        this.c = a;
        this.C = !1;
        this.c && qG(this);
        this.w = new gF;
        this.a = [];
        this.m = !1;
        rG(this)
    },
    qG = function(a) {
        NF(function(b, c) {
            b && c && (a.o = c, OF(a.o, null, null, null, function(d, e) {
                d && (a.g = tb(e, function(f) {
                    return new LF(f.sl, f.tl, f.src, f.trg)
                }), a.g.reverse());
                a.C = !0;
                tG(a)
            }))
        })
    },
    uG = function(a, b) {
        Gh(b, 6) && (b = Number(I(b, 6, ""))) && (a.G = b)
    },
    rG = function(a) {
        DATA.SignedIn && a.w.tb(function(b) {
            return vG(a, b)
        }, "", "", "", "", "1")
    },
    tG = function(a) {
        if ((!a.c || a.C) && a.m) {
            var b = a.F;
            L(b, zm(b, 241, a.g.length));
            b = a.F;
            L(b, zm(b, 242, a.a.length));
            b = {};
            Pm(a.b, "webapp", "stld", "b", (b.wc = a.g.length, b.gc = a.a.length, b));
            b = a.g.concat(a.a);
            a.h = b.length;
            a.N(b)
        }
    },
    wG = function(a, b, c) {
        if (a.c && !a.o) return !1;
        var d = QF(b),
            e = b.ma(),
            f = b.a,
            g = function() {
                var k = 0 === c;
                a.h += k ? 1 : -1;
                a.R(b, k)
            };
        if (0 === c) {
            if (300 <
                f.length) return a.L(DATA.PhraseTooLong), d = {}, Pm(a.b, "webapp", "stlm", "l", (d.sz = f.length, d)), ym(a.F, f.length), !1;
            if (a.h >= a.G) return f = {}, Pm(a.b, "webapp", "stlm", "n", (f.sz = a.h + 1, f)), Am(a.F, a.h + 1), a.L(eG(a.O, {
                saved_phrase_limit: sv(a.Fa, a.G)
            })), !1;
            iF(a.w, p(a.La, a, b, g), d, e, f, b.b, VF(b))
        } else if (1 == c) null != b.c ? jF(a.w, p(a.K, a, b, g), [b.c]) : a.c && yy(a.o.a, d, e, f, g);
        else throw "Unexpected operation";
        return !0
    };
sG.prototype.La = function(a, b, c) {
    uG(this, c);
    if (c && !I(c, 3) && I(c, 5)) {
        a.c = I(c, 5);
        a.g = Number(I(c, 4, ""));
        var d = {};
        d.trans = a.b;
        d = {
            sentences: [d]
        };
        a = new LF(QF(a), a.ma(), a.a, d);
        a.a = I(c, 5);
        a.b = pe(I(c, 4, ""));
        this.a.push(a);
        b(!0)
    } else Pm(this.b, "webapp", "stfl", "a"), qm(this.F, 151)
};
sG.prototype.K = function(a, b, c) {
    uG(this, c);
    c && !I(c, 3) ? (Pm(this.b, "webapp", "stsu", "d"), c = this.F, L(c, M(c, 234)), a = xG(this, a), -1 === a ? (Pm(this.b, "webapp", "stfl", "u"), qm(this.F, 154)) : (Pm(this.b, "webapp", "stsu", "u"), c = this.F, L(c, M(c, 235)), Jb(this.a, a, 1)), b(!0)) : (Pm(this.b, "webapp", "stfl", "d"), qm(this.F, 152))
};
var vG = function(a, b) {
        uG(a, b);
        a.a = Array.from(Ml(b, 2, cF)).map(function(c) {
            var d = {};
            d.trans = c.Tc();
            d = {
                sentences: [d]
            };
            d = new LF(I(c, 1), I(c, 2), c.Be(), d);
            d.a = I(c, 0);
            d.b = Number(I(c, 5, ""));
            return d
        });
        a.m = !0;
        tG(a)
    },
    yG = function(a, b, c, d, e) {
        OF(a.o, b, c, d, function(f, g) {
            e(f && 0 < g.length)
        })
    },
    xG = function(a, b) {
        var c = QF(b),
            d = b.ma(),
            e = b.a,
            f = b.b,
            g = -1;
        a.a.forEach(function(k, l) {
            c === k.Ba && d === k.Ma && e === k.cg && f === Xu(k.c) && (k.a && (b.c = k.a), k.b && (b.g = k.b), g = l)
        });
        return g
    },
    zG = function(a, b, c) {
        if (!a.c || a.o) {
            var d = QF(b),
                e = b.ma(),
                f = b.a; - 1 !== xG(a, b) ? c(!0) : a.c ? yG(a, d, e, f, c) : c(!1)
        }
    };
var BG = function(a, b) {
    J.call(this);
    var c = ba(a);
    for (a = c.next(); !a.done; a = c.next()) AG(a.value, this.a.bind(this));
    b = ba(b);
    for (a = b.next(); !a.done; a = b.next()) AG(a.value, this.b.bind(this))
};
ka(BG, J);
BG.prototype.a = function(a) {
    a = CG(a.target);
    if ("" != a) {
        var b = new F("select");
        b.text = a;
        this.dispatchEvent(b)
    }
};
BG.prototype.b = function(a) {
    a = CG(a.target);
    if ("" != a) {
        var b = new F("select");
        b.text = a;
        b.o = !0;
        this.dispatchEvent(b)
    }
};
var CG = function(a) {
    var b = "";
    try {
        if (ew(a)) var c = a.value.substring(a.selectionStart, a.selectionEnd);
        else if (fw()) {
            var d = gw(a),
                e = d[1];
            if (d[0].inRange(e)) {
                if ("textarea" == a.type) {
                    var f = e.duplicate(),
                        g = f.text;
                    a = g;
                    for (d = !1; !d;) 0 == f.compareEndPoints("StartToEnd", f) ? d = !0 : (f.moveEnd("character", -1), f.text == g ? a += "\r\n" : d = !0);
                    var k = a
                } else k = e.text;
                var l = k
            } else l = "";
            c = l
        } else throw Error("Cannot get the selection text");
        b = c.trim();
        if ("" != b) return b
    } catch (m) {}
    b = pz(window);
    return b.toString ? b.toString().trim() : ""
};

function AG(a, b) {
    G(a, "mouseup", b);
    G(a, "keyup", function(c) {
        16 == c.keyCode && b(c)
    })
};
var DG = function() {},
    EG = new DG,
    FG = ["click", "keydown", "keyup"];
DG.prototype.listen = function(a, b, c, d, e) {
    var f = function(g) {
        var k = kh(b),
            l = qg(g.target) ? g.target.getAttribute("role") || null : null;
        "click" == g.type && Yg(g) ? k.call(d, g) : 13 != g.keyCode && 3 != g.keyCode || "keyup" == g.type ? 32 != g.keyCode || "keyup" != g.type || "button" != l && "tab" != l || (k.call(d, g), g.preventDefault()) : (g.type = "keypress", k.call(d, g))
    };
    f.Zb = b;
    f.zn = d;
    e ? e.listen(a, FG, f, c) : G(a, FG, f, c)
};
DG.prototype.Ga = function(a, b, c, d, e) {
    for (var f, g = 0; f = FG[g]; g++) {
        var k = a;
        var l = f;
        var m = !!c;
        l = $g(k) ? k.tf(l, m) : k ? (k = mh(k)) ? k.tf(l, m) : [] : [];
        for (k = 0; m = l[k]; k++) {
            var q = m.listener;
            if (q.Zb == b && q.zn == d) {
                e ? e.Ga(a, f, m.listener, c, d) : qh(a, f, m.listener, c, d);
                break
            }
        }
    }
};
var GG = function(a) {
    var b = a.Fn;
    a = a.uid;
    a = '<div class="' + Q("jfk-bubble") + '" role="alertdialog"' + (a ? ' aria-describedby="' + Q(a) + '"' : "") + '><div class="' + Q("jfk-bubble-content-id") + '"' + (a ? ' id="' + Q(a) + '"' : "") + "></div>";
    b && (b = a += '<div class="' + Q("jfk-bubble-closebtn-id") + " " + Q("jfk-bubble-closebtn") + '" aria-label="', a = "\u0cae\u0cc1\u0c9a\u0ccd\u0c9a\u0cc1".replace(Mn, Nn), a = b + a + '" role="button" tabindex=0></div>');
    a += '<div class="' + Q("jfk-bubble-arrow-id") + " " + Q("jfk-bubble-arrow") + '"><div class="' + Q("jfk-bubble-arrowimplbefore") +
        '"></div><div class="' + Q("jfk-bubble-arrowimplafter") + '"></div></div></div>';
    return N(a)
};
GG.a = "jfk.templates.bubble.main";
var HG = function(a) {
    X.call(this, a);
    this.c = new Js("jfk-bubble", !0);
    this.b = new $D;
    this.K = []
};
t(HG, X);
HG.prototype.g = !0;
HG.prototype.h = !1;
var IG = function(a, b, c, d) {
        v(!a.ya, "Must call setPosition() before rendering");
        a.c.bf = !1;
        Ks(a.c, 1, b, c, d)
    },
    JG = function(a, b) {
        v(!a.ya, "Must call showCloseButton() before rendering");
        a.g = b
    },
    LG = function(a, b) {
        v("string" === typeof b || b.nodeType || b instanceof An || b instanceof Ad, "Content must be a string or HTML.");
        a.V = b;
        KG(a, b)
    },
    KG = function(a, b) {
        a = a.Yb();
        b && a && ("string" === typeof b ? E(a, b) : b instanceof An ? Wd(a, zn(b)) : b instanceof Ad ? Wd(a, b) : (Wd(a, Md), gg(a, b)))
    };
h = HG.prototype;
h.setAutoHide = function(a) {
    this.b.setAutoHide(a)
};
h.Yb = function() {
    return this.vd("jfk-bubble-content-id")
};
h.Ja = function() {
    this.v = No(GG, {
        Fn: this.g,
        uid: "bubble-" + Ra(this)
    }, void 0, this.a);
    KG(this, this.V);
    V(this.j(), !1);
    var a = this.b,
        b = this.j();
    WD(a);
    a.v = b;
    if (!Ee) {
        a = this.b;
        b = lE(this.j(), "ease-out", 0, 1);
        var c = lE(this.j(), "ease-in", 1, 0);
        a.o = b;
        a.h = c
    }
    Ho(this.j(), this.K)
};
h.aa = function() {
    HG.D.aa.call(this);
    Y(this).listen(this.b, ["beforeshow", "show", "beforehide", "hide"], this.R);
    if (this.g) {
        var a = Y(this),
            b = this.vd("jfk-bubble-closebtn-id");
        EG.listen(b, Ua(this.setVisible, !1), void 0, a.m || a, a)
    }
    a = this.j();
    v(a, "getElement() returns null.");
    b = this.vd("jfk-bubble-arrow-id");
    v(b, "No arrow element is found!");
    var c = this.c;
    c.a = a;
    c.h = b;
    a = this.b;
    a.L = this.c || void 0;
    a.isVisible() && a.m()
};
h.setVisible = function(a) {
    this.b.setVisible(a)
};
h.isVisible = function() {
    return this.b.isVisible()
};
var MG = function(a) {
    a.isVisible() && a.b.m()
};
HG.prototype.T = function() {
    this.b.Ia();
    delete this.b;
    HG.D.T.call(this)
};
HG.prototype.m = function() {
    hp(this.j());
    return !1
};
HG.prototype.R = function(a) {
    if ("show" == a.type || "hide" == a.type) {
        var b = Y(this),
            c = this.a;
        c = y ? Kg(c) : c.a;
        "show" == a.type ? b.listen(c, "scroll", this.m) : b.Ga(c, "scroll", this.m)
    }
    b = this.dispatchEvent(a.type);
    this.h && "hide" == a.type && this.Ia();
    return b
};
var NG = function(a, b) {
        this.a = a;
        this.b = b
    },
    OG = {
        af: "af-ZA",
        am: "am-ET",
        az: "az-AZ",
        bg: "bg-BG",
        ca: "ca-ES",
        cs: "cs-CZ",
        da: "da-DK",
        de: "de-DE",
        el: "el-GR",
        eu: "eu-ES",
        fa: "fa-IR",
        fi: "fi-FI",
        tl: "fil-PH",
        gl: "gl-ES",
        gu: "gu-IN",
        hi: "hi-IN",
        hr: "hr-HR",
        hu: "hu-HU",
        hy: "hy-AM",
        iw: "he-IL",
        id: "id-ID",
        is: "is-IS",
        it: "it-IT",
        ja: "ja-JP",
        jw: "jv-ID",
        ka: "ka-GE",
        km: "km-KH",
        kn: "kn-IN",
        ko: "ko-KR",
        lo: "lo-LA",
        lt: "lt-LT",
        lv: "lv-LV",
        ml: "ml-IN",
        mr: "mr-IN",
        ms: "ms-MY",
        ne: "ne-NP",
        no: "nb-NO",
        nl: "nl-NL",
        pl: "pl-PL",
        ro: "ro-RO",
        ru: "ru-RU",
        si: "si-LK",
        sk: "sk-SK",
        sl: "sl-SI",
        sr: "sr-RS",
        su: "su-ID",
        sv: "sv-SE",
        te: "te-IN",
        th: "th-TH",
        tr: "tr-TR",
        uk: "uk-UA",
        vi: "vi-VN",
        zu: "zu-ZA",
        "ar::ae": "ar-AE",
        "ar::bh": "ar-BH",
        "ar::dz": "ar-DZ",
        "ar::eg": "ar-EG",
        "ar::il": "ar-IL",
        "ar::jo": "ar-JO",
        "ar::kw": "ar-KW",
        "ar::lb": "ar-LB",
        "ar::ma": "ar-MA",
        "ar::om": "ar-OM",
        "ar::ps": "ar-PS",
        "ar::qa": "ar-QA",
        "ar::sa": "ar-SA",
        "ar::tn": "ar-TN",
        ar: "ar-EG",
        "bn::bd": "bn-BD",
        "bn::in": "bn-IN",
        bn: "bn-BD",
        "en::au": "en-AU",
        "en::ca": "en-CA",
        "en::com": "en-US",
        "en::gh": "en-GH",
        "en::ie": "en-IE",
        "en::in": "en-IN",
        "en::ke": "en-KE",
        "en::ng": "en-NG",
        "en::nz": "en-NZ",
        "en::ph": "en-PH",
        "en::tz": "en-TZ",
        "en::uk": "en-GB",
        "en::za": "en-ZA",
        en: "en-001",
        "es::ar": "es-AR",
        "es::bo": "es-BO",
        "es::cl": "es-CL",
        "es::co": "es-CO",
        "es::cr": "es-CR",
        "es::do": "es-DO",
        "es::ec": "es-EC",
        "es::es": "es-ES",
        "es::gt": "es-GT",
        "es::hn": "es-HN",
        "es::mx": "es-MX",
        "es::ni": "es-NI",
        "es::pa": "es-PA",
        "es::pe": "es-PE",
        "es::pr": "es-PR",
        "es::py": "es-PY",
        "es::sv": "es-SV",
        "es::com": "es-US",
        "es::uy": "es-UY",
        "es::ve": "es-VE",
        es: "es-ES",
        "fr::ca": "fr-CA",
        "fr::fr": "fr-FR",
        fr: "fr-FR",
        "pt::pt": "pt-PT",
        pt: "pt-BR",
        "ta::in": "ta-IN",
        "ta::lk": "ta-LK",
        "ta::sg": "ta-SG",
        "ta::my": "ta-MY",
        ta: "ta-IN",
        "sw::ke": "sw",
        "sw::tz": "sw-TZ",
        sw: "sw",
        "ur::pk": "ur-PK",
        "ur::in": "ur-IN",
        ur: "ur-PK",
        "zh-CN:zh-TW:hk": "yue-Hant-HK",
        "zh-CN:zh-CN:hk": "cmn-Hans-HK",
        "zh-CN:zh-TW": "cmn-Hant-TW",
        "zh-CN": "cmn-Hans-CN"
    };
NG.prototype.get = function(a) {
    return OG[a + ":" + this.b + ":" + this.a] || OG[a + "::" + this.a] || OG[a + ":" + this.b] || OG[a] || null
};
var PG = function(a, b) {
    HG.call(this, b);
    this.C = 0;
    this.c.Tf = !0;
    this.setAutoHide(!1);
    this.c.c = a;
    MG(this);
    IG(this, 2);
    JG(this, !1);
    LG(this, No(go, {
        label: MSG_SPEAK_NOW
    }))
};
t(PG, HG);
PG.prototype.aa = function() {
    PG.D.aa.call(this);
    this.w = B("gt-speech-l3", this.j())
};
var QG = function(a) {
    0 == a.C++ && R(a.w, "trigger");
    Fi(a.N, 600, a)
};
PG.prototype.N = function() {
    0 == --this.C && T(this.w, "trigger")
};
var RG = function(a, b, c, d, e, f, g, k, l) {
    J.call(this);
    this.X = a;
    this.K = b;
    this.a = null;
    yw && "webkitSpeechRecognition" in window && (a = new webkitSpeechRecognition, a.continuous = mr(), a.interimResults = !0, this.a = a);
    this.V = new NG(c, d);
    this.R = !e;
    this.c = "";
    this.Hb = !1;
    this.b = null;
    this.w = "init";
    this.m = f || null;
    this.C = l || null;
    this.L = g || null;
    this.na = !!k;
    this.Z = new Iu;
    this.o = Km.M();
    this.W = xl.M();
    this.F = K.M();
    this.h = null;
    this.G = ""
};
t(RG, J);
RG.prototype.init = function(a) {
    if (null != this.a) {
        var b = Nf("gt-src-tools-l");
        a = this.h = a || gb(b);
        this.b = new ot(MSG_SPEECH_INPUT_TURN_ON, MSG_SPEECH_INPUT_TURN_OFF, new ut("speech-button", !1));
        this.b.ba(D("DIV", {
            id: "gt-speech",
            tabindex: "0"
        }));
        lg(a, this.b.j(), 1);
        this.g = new PG(this.b.j());
        this.g.render(this.b.j());
        this.a.onresult = p(this.N, this);
        this.a.onstart = p(this.Pl, this);
        this.a.onspeechstart = p(this.ho, this);
        this.a.onend = p(this.xl, this);
        this.a.onspeechend = p(this.Nl, this);
        this.a.onerror = p(this.ia, this);
        this.a.onnomatch =
            p(this.O, this);
        G(this.b, "action", this.bo, !1, this);
        G(this.h, "click", this.fo, !1, this)
    }
};
var SG = function(a, b) {
        var c = a.W;
        b ? (c.m = c.b, c.b = 3) : c.b = c.m;
        a.g.setVisible(b && a.R)
    },
    TG = "init:buttonOn end:buttonOn buttonOn:start start:speechStart speechStart:result result:result result:buttonOff buttonOff:speechEnd speechEnd:end".split(" "),
    UG = function(a, b) {
        if (!(0 <= TG.indexOf(a.w + ":" + b))) {
            var c = {};
            c.from = a.w;
            c.to = b;
            a.o.log("speech", c)
        }
        a.w = b
    };
h = RG.prototype;
h.bo = function() {
    if (this.b.Ea(16)) {
        var a = this.F;
        L(a, M(a, 149));
        Pm(this.o, "webapp", "si", "start", {
            sl: this.G
        });
        JA(this.K, !0);
        this.c = "";
        this.a.start();
        UG(this, "buttonOn")
    } else this.a.stop(), SG(this, !1), UG(this, "buttonOff"), JA(this.K, !1)
};
h.fo = function() {
    if (!this.b.isEnabled()) {
        this.dispatchEvent("userInteractionWhileDisabled");
        var a = this.F;
        L(a, M(a, 305));
        Pm(this.o, "webapp", "dia", "click", {
            dias: "vi"
        })
    }
};
h.Pl = function() {
    this.Hb = !0;
    SG(this, !0);
    UG(this, "start");
    this.dispatchEvent("start")
};
h.ho = function() {
    QG(this.g);
    UG(this, "speechStart");
    this.dispatchEvent("speechStart")
};
h.xl = function() {
    VG(this);
    UG(this, "end");
    this.dispatchEvent("end")
};
h.Nl = function() {
    QG(this.g);
    UG(this, "speechEnd")
};
var VG = function(a) {
    a.Hb = !1;
    SG(a, !1);
    a.b.bd(!1)
};
RG.prototype.N = function(a) {
    QG(this.g);
    for (var b = "", c = a.resultIndex; c < a.results.length; ++c) this.a.continuous && (this.c || b) && 0 < a.results[c].length && a.results[c][0].transcript && a.results[c][0].transcript.length && " " != a.results[c][0].transcript[0] || (a.results[c].isFinal ? this.c += a.results[c][0].transcript : b += a.results[c][0].transcript);
    a = this.c + b;
    Sm(this.o, "inputm", 3);
    this.X.b(a);
    UG(this, "result")
};
RG.prototype.ia = function() {
    VG(this);
    UG(this, "error")
};
RG.prototype.O = function() {
    VG(this);
    UG(this, "noMatch")
};
RG.prototype.mb = function() {
    return this.Hb
};
var WG = function(a, b, c, d, e, f) {
    X.call(this);
    this.V = a;
    this.X = b;
    this.ia = c;
    this.Z = d || "";
    this.ra = e || "";
    this.Ca = f || function() {};
    this.c = this.R = this.g = "";
    this.b = !1;
    this.K = !0;
    this.w = [];
    this.m = "";
    this.W = !1;
    this.N = new zs(this.ym, 1E3, this);
    this.C = null;
    this.h = Km.M();
    this.F = K.M()
};
t(WG, X);
h = WG.prototype;
h.setVisible = function(a) {
    a || (this.W = this.b = !1, this.N.stop());
    V(this.j(), a)
};
h.isVisible = function() {
    return op(this.j())
};
h.show = function(a) {
    if ("" == a.ue) this.setVisible(!1);
    else {
        if (a.Bh) {
            if (this.W) return
        } else this.W = !0;
        this.m = a.Bh || "";
        this.g = a.dj || "";
        this.R = a.nj || "";
        this.c = this.m ? this.c : a.ue;
        this.C = a.ji ? tw(a.ji) : Ed(a.ue);
        this.b = !!a.gi && this.K;
        var b = a.Bh ? this.X : a.gi && this.K ? this.Z : this.ia;
        if (this.b && a.ve && Ab(a.ve, 6)) {
            this.setVisible(!1);
            var c = Nf("src-translit");
            c && E(c, this.c);
            if (a.result)
                for (c = 0; c < a.result.hc(); c++) a.result.bb(c).a[3] = 0 == c ? this.c : ""
        } else this.b ? (c = this.j(), T(c, "gt-spell-correct-message"), R(c, "gt-related-suggest-message")) :
            (c = this.j(), T(c, "gt-related-suggest-message"), R(c, "gt-spell-correct-message")), this.setVisible(!0);
        E(this.j(), b + " ");
        this.w = a.ve || [];
        b = D("a", {
            tabindex: 0,
            href: "javascript:void(0)"
        });
        To(b, {
            direction: jc(this.R) ? "rtl" : "ltr"
        });
        To(b, {
            "text-decoration": "none"
        });
        this.C && Wd(b, this.C);
        G(b, "click", this.Sm, !1, this);
        this.j().appendChild(b);
        b = D("DIV", "gt-spell-icon");
        this.j().appendChild(b);
        !this.b || a.ve && Ab(a.ve, 6) || (a = D("div"), E(a, this.ra + " "), b = D("a", {
            tabindex: 1,
            href: "javascript:void(0)"
        }), G(b, "click", this.xa,
            !1, this), E(b, this.g), a.appendChild(b), this.j().appendChild(a), R(a, "gt-revert-correct-message"));
        this.N.start()
    }
};
h.ym = function() {
    var a = {};
    a.orig = this.g;
    a.sl = this.R;
    this.b && (a.autocorrect = this.b);
    this.m ? (a.corrlang = this.m, this.h.log("langidshow", a), mm(this.F, 5, 1, !1)) : (a.corr = this.c, a.corrtype = this.w, this.h.log("spell", a), mm(this.F, 4, 1, !1))
};
h.Sm = function() {
    if (this.m) {
        var a = this.g;
        64 < a.length && (a = a.substr(0, 64));
        Sm(this.h, "orig", a);
        Sm(this.h, "psl", this.R);
        this.C && this.Ca(Cd(this.C), this.m);
        Br(this.V, this.m, "", this.g, "tws_lsugg");
        a = this.F;
        L(a, im(a, 79, 5, 1, !1, 1))
    } else a = this.g, 64 < a.length && (a = a.substr(0, 64)), Sm(this.h, "orig", a), Sm(this.h, "corrtype", this.w), this.b ? Br(this.V, "", "", this.c, "tws_confirm") : Br(this.V, "", "", this.c, "tws_spell"), a = this.F, L(a, im(a, 79, 4, 1, !1, 1));
    a = this.N;
    a.mb() && (a.stop(), a.Ng());
    this.setVisible(!1)
};
var XG = {},
    YG = (XG[1] = 1, XG[2] = 2, XG[3] = 3, XG[4] = 4, XG[5] = 5, XG[6] = 6, XG[7] = 7, XG[8] = 8, XG[9] = 9, XG[10] = 10, XG);
WG.prototype.xa = function() {
    var a = this.c;
    64 < a.length && (a = a.substr(0, 64));
    Sm(this.h, "corr", a);
    Sm(this.h, "corrtype", this.w);
    this.K = !1;
    Br(this.V, "", "", this.g, "tws_revert");
    a = this.N;
    a.mb() && (a.stop(), a.Ng());
    this.setVisible(!1);
    a = this.F;
    for (var b = this.g, c = [], d = 0; d < this.w.length; d++) {
        var e = YG[this.w[d]];
        c.push(e ? e : 0)
    }
    d = new jl;
    b = A(d, 1, b);
    c = A(b, 2, c || []);
    b = M(a, 139);
    c = of (b, 55, c);
    L(a, c)
};
var ZG = function() {
        this.a = vw(INPUT_SUGGESTION_SERVER_URL);
        this.dd = 5E3
    },
    $G = 0;
ZG.prototype.send = function(a, b, c, d) {
    a = a ? Ub(a) : {};
    d = d || "_" + ($G++).toString(36) + Va().toString(36);
    var e = "_callbacks___" + d;
    b && (n[e] = aH(d, b), a.callback = e);
    b = {
        timeout: this.dd,
        gk: !0
    };
    e = rc(this.a);
    e = sc.exec(e);
    var f = e[3] || "";
    e = tc(e[1] + uc("?", e[2] || "", a) + uc("#", f, void 0));
    b = Wy(e, b);
    Py(b, null, bH(d, a, c), void 0);
    return {
        qa: d,
        ki: b
    }
};
ZG.prototype.cancel = function(a) {
    a && (a.ki && a.ki.cancel(), a.qa && cH(a.qa, !1))
};
var bH = function(a, b, c) {
        return function() {
            cH(a, !1);
            c && c(b)
        }
    },
    aH = function(a, b) {
        return function(c) {
            cH(a, !0);
            b.apply(void 0, arguments)
        }
    },
    cH = function(a, b) {
        a = "_callbacks___" + a;
        if (n[a])
            if (b) try {
                delete n[a]
            } catch (c) {
                n[a] = void 0
            } else n[a] = Ga
    };
var dH = function() {
        var a = INPUT_SUGGESTION_CLIENT_NAME,
            b = INPUT_SUGGESTION_DATASET;
        this.g = new ZG;
        this.g.dd = 500;
        this.a = null;
        this.h = 0;
        this.c = !1;
        this.C = Km.M();
        this.F = K.M();
        this.m = b || "translate";
        this.G = a || "translate_separate_corpus"
    },
    rD = function(a, b, c, d, e) {
        HD(a);
        if (0 == b.length || 64 < b.length || "auto" == c) e([]);
        else {
            c = "zh-CN" == c || "zh-TW" == c ? "zh" : c;
            var f = 167 - (Va() - a.h);
            0 > f && (f = 0);
            a.b = Fi(function() {
                if (this.b) {
                    this.b = void 0;
                    var g = c;
                    this.h = Va();
                    var k = {};
                    k.q = b;
                    k.client = this.G;
                    k.ds = this.m;
                    k.hl = g;
                    k.requiredfields = "tl:" +
                        d;
                    this.a = this.g.send(k, p(this.w, this, b, g, d, e), p(this.o, this, "4", b, g, d, 144))
                }
            }, f, a)
        }
    },
    HD = function(a) {
        a.a && (a.c = !0, a.g.cancel(a.a), a.a = null);
        a.b && (Gi(a.b), a.b = void 0)
    };
dH.prototype.o = function(a, b, c, d, e, f, g, k) {
    if (!this.c) {
        b = {
            q: b,
            sl: c,
            tl: d
        };
        if (null != g) try {
            b.se = g.substring(0, 64)
        } catch (l) {
            throw Error(l + " context is " + g);
        }
        k && (b.msg = k.substring(0, 64));
        qm(this.F, e);
        Pm(this.C, "webapp", "is", a, b)
    }
    this.c = !1
};
dH.prototype.w = function(a, b, c, d, e) {
    try {
        var f = tb(e[1], function(g) {
            return je(g[0])
        }, this);
        d(f)
    } catch (g) {
        this.o("5", a, b, c, 53, null, Mj(e), g.message)
    }
    this.a = null
};
var eH = function() {
        this.a = [];
        this.c = this.b = null
    },
    MD = function(a) {
        var b = a.a.length;
        b += a.b ? 1 : 0;
        b += a.c ? 1 : 0;
        return a = b + (a.c ? 1 : 0)
    };
var fH = function(a) {
    this.a = a || "menu"
};
t(fH, Hw);
Ha(fH);
fH.prototype.Ee = function() {
    return "gt-is"
};
fH.prototype.b = function(a) {
    return pg(a)
};
fH.prototype.Df = function(a) {
    return "DIV" == a.tagName && a.firstChild && "DIV" == a.firstChild.tagName ? !0 : !1
};
fH.prototype.c = function() {
    var a = D("DIV", "gt-is"),
        b = D("DIV", "gt-is-ctr");
    gg(a, b);
    return a
};
var gH = function(a, b, c) {
    Ow.call(this, a || Nw(fH.M()), b || fH.M(), c);
    this.b = [];
    this.h = this.g = this.c = null;
    Zw(this, !1)
};
t(gH, Ow);
var GD = function(a, b) {
        w(a.b, function(c) {
            this.removeChild(c, !0)
        }, a);
        w(b, function(c, d) {
            this.c ? this.pd(c, Up(this, this.c), !0) : this.ib(c, !0);
            d = "gt-is-si-" + d;
            c.vd("gt-is-sg").id = d
        }, a);
        a.b = b
    },
    KD = function(a, b) {
        a.g && a.removeChild(a.g, !0);
        if (b) {
            var c = Up(a, a.h) + 1;
            a.pd(b, c, !0)
        }
        a.g = b
    },
    LD = function(a, b) {
        (a = a.b[0]) && (a = a.vd(a.ni ? "gt-is-ld-top" : "gt-is-ld")) && V(a, b)
    };
gH.prototype.Xa = function(a) {
    return 27 == a.keyCode ? (this.setVisible(!1), a.stopPropagation(), a.preventDefault(), !0) : gH.D.Xa.call(this, a)
};
var hH = function(a, b, c) {
    var d = "ss";
    null != c && c && (d = "m" + d);
    this.w = b;
    Nq.call(this, a, d, MSG_SYNONYMS_OF, MSG_SYNONYMS, 8);
    this.g = []
};
t(hH, Nq);
h = hH.prototype;
h.update = function(a, b, c, d) {
    hH.D.update.call(this, a, b, c, d);
    if (!d || 0 == H(d, 11)) return !1;
    ig(this.b);
    this.Dd();
    var e = c = 0;
    for (a = 0; a < H(d, 11); ++a) {
        var f = new Bq(Ll(d, 11, a)),
            g = I(f, 2);
        c += f.b();
        for (b = 0; b < f.b(); ++b) e += H(f.c(b), 0)
    }
    if (b = 2 < c / H(d, 11) && 1 < e - c) a = MSG_N_MORE_SYNONYMS_LABEL.replace("%1$s", (e - c).toLocaleString(this.Ra)), Pq(this, a, MSG_FEWER_SYNONYMS_LABEL);
    c = 1 == c / H(d, 11);
    g && (this.gf = g, Oq(this, g));
    for (a = 0; a < H(d, 11); ++a) {
        f = new Bq(Ll(d, 11, a));
        g = D("DIV", {
            "class": "gt-cd-pos"
        });
        this.b.appendChild(g);
        E(g, I(f, 0));
        g = f;
        f = c;
        e = b;
        var k = D("UL", {
            "class": "gt-syn-list"
        });
        var l = jc(this.Ba) ? "rtl" : "ltr";
        To(k, {
            direction: l
        });
        if (e) {
            l = D("SPAN", {
                "class": "gt-syn-span"
            });
            for (var m = D("DIV", {
                    "class": "gt-syn-row"
                }, l), q = [], r = 0; r < g.b(); ++r) {
                var u = g.c(r);
                u = Ih(u, 0, 0);
                if (!Ab(q, u)) {
                    q.push(u);
                    this.w || 0 < r && l.appendChild(dg(", "));
                    var z = D("SPAN", {
                        "class": "gt-cd-cl"
                    });
                    l.appendChild(z);
                    this.w ? E(z, " " + u + " ") : E(z, u);
                    this.g.push(z)
                }
            }
            l = D("DIV", {
                "class": "gt-syn-summary-row"
            }, m);
            k.appendChild(l)
        }
        for (l = 0; l < g.b(); ++l) {
            m = g.c(l);
            r = e;
            u = f ? "DIV" : "LI";
            q = D("SPAN", {
                "class": "gt-syn-span"
            });
            u = D(u, {
                "class": "gt-syn-row"
            }, q);
            r = Qq(u, !r);
            for (u = 0; u < H(m, 0); ++u) z = D("SPAN", {
                "class": "gt-cd-cl"
            }), q.appendChild(z), this.w ? E(z, " " + Ih(m, 0, u) + " ") : E(z, Ih(m, 0, u)), this.c.push(z), this.w || u < H(m, 0) - 1 && q.appendChild(dg(", "));
            k.appendChild(r)
        }
        this.b.appendChild(k)
    }
    this.setVisible(!0);
    return !0
};
h.aa = function() {
    hH.D.aa.call(this);
    Y(this).listen(this.j(), "click", this.jo)
};
h.jo = function(a) {
    Go(a.target, "gt-cd-cl") && this.dispatchEvent(new F("a", a.target))
};
h.ee = function(a) {
    hH.D.ee.call(this, a);
    for (var b = Qf("gt-syn-summary-row", this.j()), c = 0; c < b.length; c++) {
        var d = b[c],
            e = B("gt-syn-row", d),
            f = xp(e, "margin");
        e = lp(e).height + f.top + f.bottom;
        To(d, "max-height", a ? 0 : e + "px")
    }
};
h.ze = function() {
    return this.m ? hH.D.ze.call(this) : this.g.length
};
h.Lg = function(a) {
    return this.m ? hH.D.Lg.call(this, a) : this.g.indexOf(a)
};
h.Dd = function() {
    hH.D.Dd.call(this);
    this.g = []
};
var iH = function(a, b) {
    this.C = Km.M();
    this.F = K.M();
    this.g = a;
    y || ze || Ce || G(a, "copy", this.m, !1, this);
    this.a = b;
    for (a = 0; a < b.length; a++) G(b[a], "mousedown", this.w, !1, this);
    this.c = this.b = null;
    this.o = this.h = !1
};
t(iH, Lg);
iH.prototype.T = function() {
    iH.D.T.call(this);
    qh(this.g, "copy", this.m, !1, this);
    this.g = null;
    for (var a = 0; a < this.a.length; a++) qh(this.a[a], "mousedown", this.w, !1, this);
    this.a = null
};
iH.prototype.m = function() {
    var a = $z();
    a && this.g && (this.c = a, Fi(this.G, 0, this), Nf("gt-res-edit") && (this.h = op(Nf("gt-res-edit")), this.o = op(Nf("gt-res-undo")), V(Nf("gt-res-edit"), !1), V(Nf("gt-res-undo"), !1)), a = pz(window).toString(), this.b = cA(a))
};
iH.prototype.w = function(a) {
    var b = a.b.detail;
    1 < b && Yg(a) && Ab(this.a, a.target) && (a.preventDefault(), bA(this.g), a = {}, a.clickCount = b, this.C.log("dblClickSelectall", a), b = this.F, L(b, M(b, 236)))
};
iH.prototype.G = function() {
    this.c && (this.c.select(), this.c = null);
    this.b && (mg(this.b), this.b = null);
    this.h && V(Nf("gt-res-edit"), !0);
    this.o && V(Nf("gt-res-undo"), !0)
};
var jH = function(a) {
    this.a = qp(new kd);
    this.b = (La(a) ? a.join(",") : a) + "{font-family:%FONT%arial,sans-serif!important}"
};
jH.prototype.set = function(a) {
    pp(this.a, uw("" == a ? "" : this.b.replace("%FONT%", '"' + a + '",')))
};
var kH = function() {
    CF.M();
    var a = BF("\u1288") == BF("\u1290"),
        b = DF("\u09a5\u09cd"),
        c = DF("\u1780\u17d1"),
        d = DF("\u0e81\u0ec8"),
        e = DF("\u0d15\u0d4d"),
        f = DF("\u1001\u1039\u1010"),
        g = DF("\u0da5\u0dca");
    var k = DF("\u0ba4\u0bcd") || BF("\u0bb1\u0bc6\u0bbe") + BF("\u0bb1") != BF("\u0bb1\u0bc6") + BF("\u0bb1\u0bbe");
    this.a = {
        am: a,
        bn: b,
        km: c,
        lo: d,
        ml: e,
        my: f,
        ps: !0,
        sd: !0,
        si: g,
        ta: k
    }
};
Ha(kH);
var lH = {
        "Noto Sans Ethiopic": "notosansethiopic",
        "Noto Naskh Arabic": "notonaskharabic",
        "Noto Sans Malayalam": "notosansmalayalam",
        "Noto Sans Myanmar": "notosansmyanmar",
        "Noto Sans Sinhala": "notosanssinhala"
    },
    mH = {
        Dhyana: bf || ye || $e || Ze || Ye
    },
    nH = {
        lo: Ge && 0 <= Lc(Es, "6.0")
    },
    oH = {
        am: "Noto Sans Ethiopic",
        bn: "Lohit Bengali",
        lo: "Dhyana",
        km: "Nokora",
        ml: "Noto Sans Malayalam",
        my: "Noto Sans Myanmar",
        ps: "Noto Naskh Arabic",
        sd: "Noto Naskh Arabic",
        si: "Noto Sans Sinhala",
        ta: "Lohit Tamil"
    },
    pH = function() {
        this.a = {};
        kH.M()
    };
Ha(pH);
var tH = function() {
        this.h = kH.M();
        this.g = pH.M();
        this.c = new jH(qH);
        this.a = new jH(rH);
        this.b = new jH(sH)
    },
    qH = ["body", "#gb"],
    rH = "#source .gt-hl-layer .gt-baf-translations .round-trip-content .vk-cap .vk-t .orig".split(" "),
    sH = "#result_box .gt-baf-word .gt-baf-word-clickable .alt-menu .gt-ex-translate #alt-input-text .text-wrap".split(" "),
    uH = function(a, b, c) {
        a: {
            var d = nH[c],
                e = a.h.a[c];
            if ((null == d || !d) && null != e && e && (c = oH[c], null != c && (d = mH[c], null == d || !d))) break a;c = ""
        }
        a = a.g;
        "" != c && null == a.a[c] && (a = a.a, d = c,
            e = new Wm, null != lH[d] ? Zm(e, "/earlyaccess/" + lH[d] + ".css") : (Zm(e, "/css"), e.a.set("family", d)), a[c] = qp(uw("@import url(//fonts.googleapis.com" + e.toString() + ");")));b.set(c)
    };
var vH = function(a) {
    J.call(this);
    this.v = a;
    this.b = C("tlid-app-download-button", this.v);
    this.F = K.M();
    this.a = Km.M();
    Dh(this.b, this.c.bind(this))
};
ka(vH, J);
vH.prototype.c = function() {
    if (Go(this.v, "popup-open")) wH(this, !1);
    else {
        if (Go(this.v, "tlid-android-download")) {
            var a = this.F;
            L(a, M(a, 333));
            this.a.log("cad=and", {})
        } else Go(this.v, "tlid-ios-download") && (a = this.F, L(a, M(a, 334)), this.a.log("cad=ios", {}));
        wH(this, !0)
    }
};
var wH = function(a, b) {
    U(a.v, "popup-open", b);
    b && a.dispatchEvent("popup_opened")
};
var yH = function(a) {
        this.v = a;
        a = Qf("tlid-app-download-button-container", this.v);
        for (var b = [], c = 0; c < a.length; c++) b.push(new vH(a[c]));
        this.a = b;
        xH(this)
    },
    xH = function(a) {
        a.a.forEach(function(b) {
            G(b, "popup_opened", p(a.b, a, b), !1, a)
        });
        G(a.v, "keydown", function(b) {
            Ch(b, Qf("tlid-app-download-button", a.v))
        }, !1)
    };
yH.prototype.b = function(a) {
    this.a.forEach(function(b) {
        b != a && wH(b, !1)
    })
};
var zH = function(a) {
        this.a = a;
        this.b = C("tlid-brain-logo", this.a);
        this.c = C("tlid-no-brain-logo", this.a)
    },
    CH = function(a, b, c) {
        b = AH(b, c) && !BH(b, c) ? !0 : "en" !== b && "en" !== c ? AH(b, "en") && AH("en", c) && !BH(b, c) : !1;
        U(a.b, "hidden", !b);
        U(a.c, "hidden", b)
    },
    AH = function(a, b) {
        var c = !1;
        w(DATA.NeuralEnabledPairs, function(d) {
            d.Source === a && d.Target === b && (c = !0)
        });
        return c
    },
    BH = function(a, b) {
        var c = !1;
        w(DATA.ExcludedPairs, function(d) {
            d.Source === a && d.Target === b && (c = !0)
        });
        return c
    };
var EH = function(a, b, c) {
    J.call(this);
    this.target = a;
    this.m = b || a;
    this.g = c || new Qo(NaN, NaN, NaN, NaN);
    this.c = Lf(a);
    this.a = new Bp(this);
    Ng(this, this.a);
    this.deltaY = this.deltaX = this.C = this.G = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.o = !0;
    this.b = !1;
    G(this.m, ["touchstart", "mousedown"], this.pj, !1, this);
    this.h = DH
};
t(EH, J);
var DH = n.document && n.document.documentElement && !!n.document.documentElement.setCapture && !!n.document.releaseCapture;
h = EH.prototype;
h.oa = function(a) {
    this.o = a
};
h.T = function() {
    EH.D.T.call(this);
    qh(this.m, ["touchstart", "mousedown"], this.pj, !1, this);
    Gp(this.a);
    this.h && this.c.releaseCapture();
    this.m = this.target = null
};
h.pj = function(a) {
    var b = "mousedown" == a.type;
    if (!this.o || this.b || b && !Yg(a)) this.dispatchEvent("earlycancel");
    else if (this.dispatchEvent(new FH("start", this, a.clientX, a.clientY, a))) {
        this.b = !0;
        b && a.preventDefault();
        b = this.c;
        var c = b.documentElement,
            d = !this.h;
        this.a.listen(b, ["touchmove", "mousemove"], this.Dl, {
            capture: d,
            passive: !1
        });
        this.a.listen(b, ["touchend", "mouseup"], this.mf, d);
        this.h ? (c.setCapture(!1), this.a.listen(c, "losecapture", this.mf)) : this.a.listen(Yf(b), "blur", this.mf);
        this.K && this.a.listen(this.K,
            "scroll", this.L, d);
        this.clientX = this.G = a.clientX;
        this.clientY = this.C = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        this.deltaX = this.target.offsetLeft;
        this.deltaY = this.target.offsetTop;
        this.w = Xf(Mf(this.c).a)
    }
};
h.mf = function(a, b) {
    Gp(this.a);
    this.h && this.c.releaseCapture();
    this.b ? (this.b = !1, this.dispatchEvent(new FH("end", this, a.clientX, a.clientY, a, GH(this, this.deltaX), HH(this, this.deltaY), b || "touchcancel" == a.type))) : this.dispatchEvent("earlycancel")
};
h.Dl = function(a) {
    if (this.o) {
        var b = a.clientX - this.clientX,
            c = a.clientY - this.clientY;
        this.clientX = a.clientX;
        this.clientY = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        if (!this.b) {
            var d = this.G - this.clientX,
                e = this.C - this.clientY;
            if (0 < d * d + e * e)
                if (this.dispatchEvent(new FH("start", this, a.clientX, a.clientY, a))) this.b = !0;
                else {
                    this.isDisposed() || this.mf(a);
                    return
                }
        }
        c = IH(this, b, c);
        b = c.x;
        c = c.a;
        this.b && this.dispatchEvent(new FH("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (JH(this, a, b, c), a.preventDefault())
    }
};
var IH = function(a, b, c) {
    var d = Xf(Mf(a.c).a);
    b += d.x - a.w.x;
    c += d.a - a.w.a;
    a.w = d;
    a.deltaX += b;
    a.deltaY += c;
    return new Hf(GH(a, a.deltaX), HH(a, a.deltaY))
};
EH.prototype.L = function(a) {
    var b = IH(this, 0, 0);
    a.clientX = this.clientX;
    a.clientY = this.clientY;
    JH(this, a, b.x, b.a)
};
var JH = function(a, b, c, d) {
        a.target.style.left = c + "px";
        a.target.style.top = d + "px";
        a.dispatchEvent(new FH("drag", a, b.clientX, b.clientY, b, c, d))
    },
    GH = function(a, b) {
        var c = a.g;
        a = isNaN(c.left) ? null : c.left;
        c = isNaN(c.width) ? 0 : c.width;
        return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
    },
    HH = function(a, b) {
        var c = a.g;
        a = isNaN(c.top) ? null : c.top;
        c = isNaN(c.height) ? 0 : c.height;
        return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
    },
    FH = function(a, b, c, d, e, f, g) {
        F.call(this, a);
        this.clientX = c;
        this.clientY = d;
        this.left = void 0 !== f ? f : b.deltaX;
        this.top = void 0 !== g ? g : b.deltaY
    };
t(FH, F);
var KH = function(a) {
    this.vc = new Map;
    var b = arguments.length;
    if (1 < b) {
        if (b % 2) throw Error("Uneven number of arguments");
        for (var c = 0; c < b; c += 2) this.set(arguments[c], arguments[c + 1])
    } else if (a)
        if (a instanceof KH)
            for (b = ba(a.vc), c = b.next(); !c.done; c = b.next()) {
                var d = ba(c.value);
                c = d.next().value;
                d = d.next().value;
                this.vc.set(c, d)
            } else if (a)
                for (b = ba(Object.entries(a)), c = b.next(); !c.done; c = b.next()) d = ba(c.value), c = d.next().value, d = d.next().value, this.vc.set(c, d)
};
h = KH.prototype;
h.sf = function() {
    return this.vc.size
};
h.Kb = function() {
    return Array.from(this.vc.values())
};
h.sb = function() {
    return Array.from(this.vc.keys())
};
h.get = function(a, b) {
    return this.vc.has(a) ? this.vc.get(a) : b
};
h.set = function(a, b) {
    this.vc.set(a, b);
    return this
};
h.forEach = function(a, b) {
    var c = this;
    b = void 0 === b ? this : b;
    this.vc.forEach(function(d, e) {
        return a.call(b, d, e, c)
    })
};
(function() {
    for (var a = ["ms", "moz", "webkit", "o"], b, c = 0; b = a[c] && !n.requestAnimationFrame; ++c) n.requestAnimationFrame = n[b + "RequestAnimationFrame"], n.cancelAnimationFrame = n[b + "CancelAnimationFrame"] || n[b + "CancelRequestAnimationFrame"];
    if (!n.requestAnimationFrame) {
        var d = 0;
        n.requestAnimationFrame = function(e) {
            var f = (new Date).getTime(),
                g = Math.max(0, 16 - (f - d));
            d = f + g;
            return n.setTimeout(function() {
                e(f + g)
            }, g)
        };
        n.cancelAnimationFrame || (n.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        })
    }
})();
var LH = [
        [],
        []
    ],
    MH = 0,
    NH = !1,
    OH = 0,
    QH = function(a, b) {
        var c = OH++,
            d = {
                Bm: {
                    id: c,
                    Dc: a.measure,
                    context: b
                },
                Km: {
                    id: c,
                    Dc: a.Jm,
                    context: b
                },
                state: {},
                Ib: void 0,
                Vf: !1
            };
        return function() {
            0 < arguments.length ? (d.Ib || (d.Ib = []), d.Ib.length = 0, d.Ib.push.apply(d.Ib, arguments), d.Ib.push(d.state)) : d.Ib && 0 != d.Ib.length ? (d.Ib[0] = d.state, d.Ib.length = 1) : d.Ib = [d.state];
            d.Vf || (d.Vf = !0, LH[MH].push(d));
            NH || (NH = !0, window.requestAnimationFrame(PH))
        }
    },
    PH = function() {
        NH = !1;
        var a = LH[MH],
            b = a.length;
        MH = (MH + 1) % 2;
        for (var c, d = 0; d < b; ++d) {
            c = a[d];
            var e = c.Bm;
            c.Vf = !1;
            e.Dc && e.Dc.apply(e.context, c.Ib)
        }
        for (d = 0; d < b; ++d) c = a[d], e = c.Km, c.Vf = !1, e.Dc && e.Dc.apply(e.context, c.Ib), c.state = {};
        a.length = 0
    };
var RH = y ? tc(cc(dc('javascript:""'))) : tc(cc(dc("about:blank")));
rc(RH);
var SH = y ? tc(cc(dc('javascript:""'))) : tc(cc(dc("javascript:undefined")));
rc(SH);
var TH = function(a, b) {
    this.v = a;
    this.b = b
};
var UH = function(a, b) {
    X.call(this, b);
    this.W = !!a;
    this.g = null;
    this.R = QH({
        Jm: this.ag
    }, this)
};
t(UH, X);
h = UH.prototype;
h.Jg = null;
h.Lf = !1;
h.Ab = null;
h.ob = null;
h.ic = null;
h.wg = !1;
h.Le = function() {
    return "goog-modalpopup"
};
h.rf = function() {
    return this.Ab
};
h.Ja = function() {
    UH.D.Ja.call(this);
    var a = this.j();
    v(a);
    Ho(a, yc(this.Le()).split(" "));
    Ag(a, !0);
    V(a, !1);
    VH(this);
    WH(this)
};
var VH = function(a) {
        if (a.W && !a.ob) {
            var b = a.a.b("IFRAME", {
                frameborder: 0,
                style: "border:0;vertical-align:bottom;"
            });
            Yd(b, RH);
            a.ob = b;
            a.ob.className = a.Le() + "-bg";
            V(a.ob, !1);
            np(a.ob, 0)
        }
        a.Ab || (a.Ab = a.a.b("DIV", a.Le() + "-bg"), V(a.Ab, !1))
    },
    WH = function(a) {
        a.ic || (a.ic = Jg(a.a, "SPAN"), V(a.ic, !1), Ag(a.ic, !0), a.ic.style.position = "absolute")
    };
h = UH.prototype;
h.fj = function() {
    this.wg = !1
};
h.Wc = function(a) {
    return !!a && "DIV" == a.tagName
};
h.Da = function(a) {
    UH.D.Da.call(this, a);
    a = yc(this.Le()).split(" ");
    Ho(v(this.j()), a);
    VH(this);
    WH(this);
    Ag(this.j(), !0);
    V(this.j(), !1)
};
h.aa = function() {
    v(!!this.Ab, "Background element must not be null.");
    this.ob && jg(this.ob, this.j());
    jg(this.Ab, this.j());
    UH.D.aa.call(this);
    kg(this.ic, this.j());
    this.Jg = new mE(this.a.a);
    Y(this).listen(this.Jg, "focusin", this.Um);
    XH(this, !1)
};
h.ab = function() {
    this.isVisible() && this.setVisible(!1);
    Mg(this.Jg);
    UH.D.ab.call(this);
    mg(this.ob);
    mg(this.Ab);
    mg(this.ic)
};
h.setVisible = function(a) {
    v(this.ya, "ModalPopup must be rendered first.");
    if (a != this.Lf)
        if (this.m && this.m.stop(), this.C && this.C.stop(), this.h && this.h.stop(), this.w && this.w.stop(), this.ya && XH(this, a), a) {
            if (this.dispatchEvent("beforeshow")) {
                try {
                    this.g = this.a.a.activeElement
                } catch (e) {}
                this.ag();
                var b = Yf(this.a.a) || window;
                if ("fixed" == Wo(this.j(), "position")) var c = a = 0;
                else c = Xf(this.a.a), a = c.x, c = c.a;
                var d = lp(this.j());
                b = Vf(b || window);
                a = Math.max(a + b.width / 2 - d.width / 2, 0);
                c = Math.max(c + b.height / 2 - d.height /
                    2, 0);
                Yo(this.j(), a, c);
                Yo(this.ic, a, c);
                Y(this).listen(Kg(this.a), "resize", this.ag).listen(Kg(this.a), "orientationchange", this.R);
                YH(this, !0);
                this.oi();
                this.Lf = !0;
                this.m && this.C ? (jh(this.m, "end", this.Kf, !1, this), this.C.play(), this.m.play()) : this.Kf()
            }
        } else if (this.dispatchEvent("beforehide")) {
        Y(this).Ga(Kg(this.a), "resize", this.ag).Ga(Kg(this.a), "orientationchange", this.R);
        this.Lf = !1;
        this.h && this.w ? (jh(this.h, "end", this.Jf, !1, this), this.w.play(), this.h.play()) : this.Jf();
        a: {
            try {
                c = this.a;
                d = c.a.body;
                b =
                    c.a.activeElement || d;
                if (!this.g || this.g == d) {
                    this.g = null;
                    break a
                }(b == d || c.contains(this.j(), b)) && this.g.focus()
            } catch (e) {}
            this.g = null
        }
    }
};
var XH = function(a, b) {
        a.K || (a.K = new TH(Mp(a), a.a));
        a = a.K;
        if (b) {
            a.a || (a.a = []);
            b = a.b.wi(a.b.a.body);
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d == a.v || zo(d, "hidden") || (yo(d, "hidden", !0), a.a.push(d))
            }
        } else if (a.a) {
            for (c = 0; c < a.a.length; c++) a.a[c].removeAttribute(xo("hidden"));
            a.a = null
        }
    },
    YH = function(a, b) {
        a.ob && V(a.ob, b);
        a.Ab && V(a.Ab, b);
        V(a.j(), b);
        V(a.ic, b)
    };
h = UH.prototype;
h.Kf = function() {
    this.dispatchEvent("show")
};
h.Jf = function() {
    YH(this, !1);
    this.dispatchEvent("hide")
};
h.isVisible = function() {
    return this.Lf
};
h.ag = function() {
    this.ob && V(this.ob, !1);
    this.Ab && V(this.Ab, !1);
    var a = this.a.a,
        b = Vf(Yf(a) || window || window),
        c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth));
    a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
    this.ob && (V(this.ob, !0), kp(this.ob, c, a));
    this.Ab && (V(this.Ab, !0), kp(this.Ab, c, a))
};
h.Um = function(a) {
    this.wg ? this.fj() : a.target == this.ic && Fi(this.oi, 0, this)
};
h.oi = function() {
    try {
        y && this.a.a.body.focus(), this.j().focus()
    } catch (a) {}
};
h.T = function() {
    Mg(this.m);
    this.m = null;
    Mg(this.h);
    this.h = null;
    Mg(this.C);
    this.C = null;
    Mg(this.w);
    this.w = null;
    UH.D.T.call(this)
};
var cI = function(a, b, c) {
    UH.call(this, b, c);
    this.c = a || "modal-dialog";
    this.b = ZH(ZH(new $H, aI, !0), bI, !1, !0)
};
t(cI, UH);
h = cI.prototype;
h.li = !0;
h.Yi = !0;
h.Eg = !0;
h.ff = .5;
h.Ch = "";
h.yd = null;
h.Qc = null;
h.Gb = null;
h.yb = null;
h.eg = null;
h.Fb = null;
h.fc = null;
h.jb = null;
h.Le = function() {
    return this.c
};
var dI = function(a, b) {
        a.Ch = b;
        a.yb && E(a.yb, b)
    },
    eI = function(a, b) {
        a.yd = b;
        a.fc && Wd(a.fc, b)
    };
cI.prototype.Sa = function() {
    return null != this.yd ? Cd(this.yd) : ""
};
cI.prototype.Yb = function() {
    this.j() || this.render();
    return this.fc
};
cI.prototype.rf = function() {
    this.j() || this.render();
    return cI.D.rf.call(this)
};
var fI = function(a, b) {
        a.ff = b;
        a.j() && (b = a.rf()) && np(b, a.ff)
    },
    gI = function(a, b) {
        var c = yc(a.c + "-title-draggable").split(" ");
        a.j() && (b ? Ho(v(a.Gb), c) : Io(v(a.Gb), c));
        b && !a.Qc ? (a.Qc = new EH(a.j(), a.Gb), Ho(v(a.Gb), c), G(a.Qc, "start", a.Bn, !1, a)) : !b && a.Qc && (a.Qc.Ia(), a.Qc = null)
    };
h = cI.prototype;
h.Ja = function() {
    cI.D.Ja.call(this);
    var a = this.j();
    v(a, "getElement() returns null");
    var b = this.a;
    this.Gb = b.b("DIV", this.c + "-title", this.yb = b.b("SPAN", {
        className: this.c + "-title-text",
        id: Kp(this)
    }, this.Ch), this.Fb = b.b("SPAN", this.c + "-title-close"));
    hg(a, this.Gb, this.fc = b.b("DIV", this.c + "-content"), this.jb = b.b("DIV", this.c + "-buttons"));
    wo(this.yb, "heading");
    wo(this.Fb, "button");
    Ag(this.Fb, !0);
    Co(this.Fb, "\u0cae\u0cc1\u0c9a\u0ccd\u0c9a\u0cc1");
    this.eg = this.yb.id;
    wo(a, "dialog");
    yo(a, "labelledby", this.eg ||
        "");
    this.yd && Wd(this.fc, this.yd);
    V(this.Fb, !0);
    this.b && (a = this.b, a.v = this.jb, a.render());
    V(this.jb, !!this.b);
    fI(this, this.ff)
};
h.Da = function(a) {
    cI.D.Da.call(this, a);
    a = this.j();
    v(a, "The DOM element for dialog cannot be null.");
    var b = this.c + "-content";
    this.fc = Pf(document, null, b, a)[0];
    this.fc || (this.fc = this.a.b("DIV", b), this.yd && Wd(this.fc, this.yd), a.appendChild(this.fc));
    b = this.c + "-title";
    var c = this.c + "-title-text",
        d = this.c + "-title-close";
    (this.Gb = Pf(document, null, b, a)[0]) ? (this.yb = Pf(document, null, c, this.Gb)[0], this.Fb = Pf(document, null, d, this.Gb)[0]) : (this.Gb = this.a.b("DIV", b), a.insertBefore(this.Gb, this.fc));
    this.yb ? (this.Ch =
        Eg(this.yb), this.yb.id || (this.yb.id = Kp(this))) : (this.yb = D("SPAN", {
        className: c,
        id: Kp(this)
    }), this.Gb.appendChild(this.yb));
    this.eg = this.yb.id;
    yo(a, "labelledby", this.eg || "");
    this.Fb || (this.Fb = this.a.b("SPAN", d), this.Gb.appendChild(this.Fb));
    V(this.Fb, !0);
    b = this.c + "-buttons";
    if (this.jb = Pf(document, null, b, a)[0]) {
        if (a = this.b = new $H(this.a), (b = this.jb) && 1 == b.nodeType) {
            a.v = b;
            b = Of("BUTTON", a.v);
            c = 0;
            for (var e, f; d = b[c]; c++)
                if (e = d.name || d.id, f = Eg(d) || d.value, e) {
                    var g = 0 == c;
                    a.set(e, f, g, "cancel" == d.name);
                    g && R(d,
                        "goog-buttonset-default")
                }
        }
    } else this.jb = this.a.b("DIV", b), a.appendChild(this.jb), this.b && (a = this.b, a.v = this.jb, a.render()), V(this.jb, !!this.b);
    fI(this, this.ff)
};
h.aa = function() {
    cI.D.aa.call(this);
    Y(this).listen(this.j(), "keydown", this.N).listen(this.j(), "keypress", this.N);
    Y(this).listen(this.jb, "click", this.V);
    gI(this, this.Eg);
    Y(this).listen(this.Fb, "click", this.$m);
    var a = this.j();
    v(a, "The DOM element for dialog cannot be null");
    wo(a, "dialog");
    "" !== this.yb.id && yo(a, "labelledby", this.yb.id);
    if (!this.Yi) {
        this.Yi = !1;
        if (this.ya) {
            a = this.a;
            var b = this.rf();
            a.zi(this.ob);
            a.zi(b)
        }
        this.isVisible() && XH(this, !1)
    }
};
h.ab = function() {
    this.isVisible() && this.setVisible(!1);
    gI(this, !1);
    cI.D.ab.call(this)
};
h.setVisible = function(a) {
    a != this.isVisible() && (this.ya || this.render(), cI.D.setVisible.call(this, a))
};
h.Kf = function() {
    cI.D.Kf.call(this);
    this.dispatchEvent("aftershow")
};
h.Jf = function() {
    cI.D.Jf.call(this);
    this.dispatchEvent("afterhide")
};
h.Bn = function() {
    var a = this.a.a,
        b = Vf(Yf(a) || window || window),
        c = Math.max(a.body.scrollWidth, b.width);
    a = Math.max(a.body.scrollHeight, b.height);
    var d = lp(this.j());
    "fixed" == Wo(this.j(), "position") ? this.Qc.g = new Qo(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)) : this.Qc.g = new Qo(0, 0, c - d.width, a - d.height)
};
h.$m = function() {
    hI(this)
};
var hI = function(a) {
    var b = a.b,
        c = b && b.b;
    c ? (b = b.get(c), a.dispatchEvent(new iI(c, b)) && a.setVisible(!1)) : a.setVisible(!1)
};
cI.prototype.T = function() {
    this.jb = this.Fb = null;
    cI.D.T.call(this)
};
var jI = function(a, b) {
    a.b = b;
    a.jb && (a.b ? (b = a.b, b.v = a.jb, b.render()) : Wd(a.jb, Md), V(a.jb, !!a.b))
};
cI.prototype.V = function(a) {
    a: {
        for (a = a.target; null != a && a != this.jb;) {
            if ("BUTTON" == a.tagName) break a;
            a = a.parentNode
        }
        a = null
    }
    if (a && !a.disabled) {
        a = a.name;
        var b = this.b.get(a);
        this.dispatchEvent(new iI(a, b)) && this.setVisible(!1)
    }
};
cI.prototype.N = function(a) {
    var b = !1,
        c = !1,
        d = this.b,
        e = a.target;
    if ("keydown" == a.type)
        if (this.li && 27 == a.keyCode) {
            var f = d && d.b;
            e = "SELECT" == e.tagName && !e.disabled;
            f && !e ? (c = !0, b = d.get(f), b = this.dispatchEvent(new iI(f, b))) : e || (b = !0)
        } else {
            if (9 == a.keyCode && a.shiftKey && e == this.j()) {
                this.wg = !0;
                try {
                    this.ic.focus()
                } catch (q) {}
                Fi(this.fj, 0, this)
            }
        }
    else if (13 == a.keyCode) {
        if ("BUTTON" == e.tagName && !e.disabled) f = e.name;
        else if (e == this.Fb) hI(this);
        else if (d) {
            var g = d.a,
                k;
            if (k = g) a: {
                k = Of("BUTTON", v(d.v));
                for (var l = 0, m; m = k[l]; l++)
                    if (m.name ==
                        g || m.id == g) {
                        k = m;
                        break a
                    } k = null
            }
            e = ("TEXTAREA" == e.tagName || "SELECT" == e.tagName || "A" == e.tagName) && !e.disabled;
            !k || k.disabled || e || (f = g)
        }
        f && d && (c = !0, b = this.dispatchEvent(new iI(f, String(d.get(f)))))
    } else e != this.Fb || 32 != a.keyCode && " " != a.key || hI(this);
    if (b || c) a.stopPropagation(), a.preventDefault();
    b && this.setVisible(!1)
};
var iI = function(a, b) {
    this.type = "dialogselect";
    this.key = a;
    this.caption = b
};
t(iI, F);
var $H = function(a) {
    KH.call(this);
    a || Mf();
    this.b = this.v = this.a = null
};
t($H, KH);
$H.prototype.set = function(a, b, c, d) {
    KH.prototype.set.call(this, a, b);
    c && (this.a = a);
    d && (this.b = a);
    return this
};
var ZH = function(a, b, c, d) {
    return a.set(b.key, b.caption, c, d)
};
$H.prototype.render = function() {
    if (this.v) {
        Wd(this.v, Md);
        var a = Mf(this.v);
        this.forEach(function(b, c) {
            b = a.b("BUTTON", {
                name: c
            }, b);
            c == this.a && (b.className = "goog-buttonset-default");
            this.v.appendChild(b)
        }, this)
    }
};
$H.prototype.j = function() {
    return this.v
};
var aI = {
        key: "ok",
        caption: "\u0cb8\u0cb0\u0cbf"
    },
    bI = {
        key: "cancel",
        caption: "\u0cb0\u0ca6\u0ccd\u0ca6\u0cc1"
    },
    kI = {
        key: "yes",
        caption: "\u0cb9\u0ccc\u0ca6\u0cc1"
    },
    lI = {
        key: "no",
        caption: "\u0c87\u0cb2\u0ccd\u0cb2"
    },
    mI = {
        key: "save",
        caption: "\u0c89\u0cb3\u0cbf\u0cb8\u0cc1"
    },
    nI = {
        key: "continue",
        caption: "\u0cae\u0cc1\u0c82\u0ca6\u0cc1\u0cb5\u0cb0\u0cbf\u0cb8\u0cbf"
    };
"undefined" != typeof document && (ZH(new $H, aI, !0, !0), ZH(ZH(new $H, aI, !0), bI, !1, !0), ZH(ZH(new $H, kI, !0), lI, !1, !0), ZH(ZH(ZH(new $H, kI), lI, !0), bI, !1, !0), ZH(ZH(ZH(new $H, nI), mI), bI, !0, !0));
var oI = Km.M(),
    pI = null,
    qI = function(a, b, c, d, e) {
        var f = {};
        f.id = b;
        f.sl = c;
        f.tl = d;
        f.query = e.substring(0, 64);
        f.len = e.length;
        f.client = "webapp";
        oI.log(a, f)
    },
    rI = function(a, b) {
        var c = "";
        switch (DATA.CampaignTrackerId) {
            case "0":
                c = "https://goo.gl/ELUFVd";
                break;
            case "1a":
                c = "https://goo.gl/cHnrfS";
                break;
            case "1b":
                c = "https://goo.gl/7apRL6";
                break;
            case "1c":
                c = "https://goo.gl/ozXBPg";
                break;
            case "1f":
                c = "https://goo.gl/R0JqsC";
                break;
            case "1g":
                switch (b) {
                    case 0:
                        c = "http://goo.gl/iosgoogleapp/translate2a";
                        break;
                    case 1:
                        c = "http://goo.gl/iosgoogleapp/translate2b";
                        break;
                    case 2:
                        c = "http://goo.gl/iosgoogleapp/translate2c"
                }
                break;
            case "1h":
                switch (b) {
                    case 0:
                        c = "http://goo.gl/iosgoogleapp/translate2d";
                        break;
                    case 1:
                        c = "http://goo.gl/iosgoogleapp/translate2e";
                        break;
                    case 2:
                        c = "http://goo.gl/iosgoogleapp/translate2f";
                        break;
                    case 3:
                        c = "http://goo.gl/iosgoogleapp/translate2g"
                }
                break;
            default:
                c = "https://goo.gl/F17Wul"
        }
        a ? $d(window.location, c + "?url=google-deeplink://search%3Fq%3D" + ee(ee(a)) + "&waypoint_id=gt-" + DATA.CampaignTrackerId) : $d(window.location, c + "?url=google-deeplink://open-url?url=http://www.google.com&waypoint_id=gt-" +
            DATA.CampaignTrackerId);
        Pm(oI, "webapp", "gsa", "open", {
            id: DATA.CampaignTrackerId
        });
        Eh("gsa", "gsa:open", "", 1)
    },
    sI = function(a) {
        a = "https://www.google.com/search?q=" + ee(a) + "&source=gt-" + DATA.CampaignTrackerId;
        $d(Yf().location, a)
    },
    uI = function(a) {
        var b = cg("DIV");
        b.id = "bg-msk";
        document.body.appendChild(b);
        Fi(function() {
            b.style.opacity = 1
        }, 0);
        pI = G(document.body, "touchmove", function(c) {
            c.preventDefault()
        });
        G(b, "click", function() {
            tI();
            a()
        })
    },
    tI = function() {
        var a = Nf("bg-msk");
        a && (mg(a), null != pI && (rh(pI), pI = null))
    },
    wI = function(a, b, c, d, e) {
        if (DATA.SignedIn) c();
        else {
            c = new cI("gt-md", !0);
            dI(c, DATA.Messages.SAVED_INTERSTITIAL_TITLE);
            eI(c, Fd(DATA.Messages.SAVED_INTERSTITIAL_CONTENT));
            c.Eg = !1;
            gI(c, !1);
            var f = new $H;
            f.set("not_now", DATA.Messages.NOT_NOW);
            f.set("sign_in", DATA.Messages.SIGN_IN);
            jI(c, f);
            fI(c, .7);
            c.setVisible(!0);
            c.listen("dialogselect", p(vI, null, a, b, d, e));
            R(Of("BODY")[0], "gt-md-on")
        }
    },
    vI = function(a, b, c, d, e) {
        "sign_in" == e.key ? Pu(d) : (b.log("nosi", a), b = K.M(), L(b, M(b, pm[a])), c(), T(Of("BODY")[0], "gt-md-on"))
    },
    yI = function(a) {
        return xI(a, DATA.SourceLanguageCodeNameList)
    },
    zI = function(a) {
        return xI(a, DATA.TargetLanguageCodeNameList)
    },
    xI = function(a, b) {
        return (b = Object.values(b).find(function(c) {
            return c.Code === a
        })) ? b.Name : ""
    },
    AI = function(a) {
        return !!a && Gh(a, 18) && 1 === (new gm(a.a[18])).Sc() && 0 < H(new gm(a.a[18]), 0)
    },
    CI = function(a) {
        if (!AI(a)) return [];
        a = Array.from(Ml(new gm(a.a[18]), 0, em));
        a.sort(function(b, c) {
            b = BI(b.Rc());
            c = BI(c.Rc());
            return b.localeCompare(c, DATA.DisplayLanguage)
        });
        return a
    },
    BI = function(a) {
        switch (a) {
            case 2:
                return DATA.Messages.GRAMMATICAL_GENDER_FEMININE_WITH_PARENTHESES;
            case 1:
                return DATA.Messages.GRAMMATICAL_GENDER_MASCULINE_WITH_PARENTHESES;
            default:
                throw Error("Unsupported gender " + a);
        }
    };
var DI = function(a) {
    var b = Xn("string" === typeof a.pe, "buttonText", a.pe, "string"),
        c = Xn("string" === typeof a.yg, "classname", a.yg, "string");
    a = Xn("string" === typeof a.identifier, "identifier", a.identifier, "string");
    return N("<div class='tlid-app-download-button-container " + Q(a) + " app-download-button-container " + Q(c) + "'><div class='tlid-app-download-button app-download-button header-button' role='button' tabindex='-1'><div class='text'>" + P(b) + "</div></div><div class='app-download-popup'><div class='popup-triangle'></div><div class='popup-container'><div class='text'>\u626b\u63cf\u4e8c\u7ef4\u7801\u4e0b\u8f7d</div><div class='download-image'></div></div></div></div>")
};
var FI = function(a) {
    var b = Xn("string" === typeof a.Ba, "sourceLanguage", a.Ba, "string"),
        c = Xn("string" === typeof a.Rb, "sourcePhrase", a.Rb, "string"),
        d = Xn("string" === typeof a.Ma, "targetLanguage", a.Ma, "string"),
        e = Xn("string" === typeof a.Sb, "targetPhrase", a.Sb, "string"),
        f = Xn("boolean" === typeof a.Mc || 1 === a.Mc || 0 === a.Mc, "showStar", a.Mc, "boolean");
    a = Xn("string" === typeof a.oj, "starLabel", a.oj, "string");
    return N("<div class='tlid-history-entry history-entry' role=\"option\"><div class='language-pair' role=\"button\" tabindex=\"0\"><div class='language-pair-languages'>" +
        P(b) + " <span class='language-pair-arrow'></span> " + P(d) + "</div></div>" + (f ? "<button class='tlid-star-history-entry star-button button-icon' aria-label='" + Q(a) + "' data-tooltip='" + Q(a) + "'></button>" : "") + "<div class='tlid-browse-entry browse-entry' role=\"button\" tabindex=\"0\"><div class='starbutton-placeholder'></div>" + EI({
            Rb: c,
            Sb: e
        }) + "</div><div class='tlid-select-entry select-entry' role=\"button\" tabindex=\"0\"><div class='star-placeholder'></div>" + EI({
            Rb: c,
            Sb: e
        }) + "</div></div>")
};
FI.a = "trans.mobile.components.history.entry.template.main";
var EI = function(a) {
    var b = Xn("string" === typeof a.Rb, "sourcePhrase", a.Rb, "string");
    a = Xn("string" === typeof a.Sb, "targetPhrase", a.Sb, "string");
    return N("<div class='phrase'><div class='tl-input'><bdi>" + P(b) + "</bdi></div><div class='tl-output'><bdi>" + P(a) + "</bdi></div></div>")
};
var GI = function(a, b, c) {
    Lg.call(this);
    this.Zb = null != c ? p(a, c) : a;
    this.c = b;
    this.b = p(this.Xk, this);
    this.a = []
};
t(GI, Lg);
h = GI.prototype;
h.vf = !1;
h.Pd = null;
h.ri = function(a) {
    this.a = arguments;
    this.Pd ? this.vf = !0 : HI(this)
};
h.stop = function() {
    this.Pd && (Gi(this.Pd), this.Pd = null, this.vf = !1, this.a = [])
};
h.T = function() {
    GI.D.T.call(this);
    this.stop()
};
h.Xk = function() {
    this.Pd = null;
    this.vf && (this.vf = !1, HI(this))
};
var HI = function(a) {
    a.Pd = Fi(a.b, a.c);
    a.Zb.apply(null, a.a)
};
var JI = function(a, b) {
    J.call(this);
    this.a = a;
    this.v = b;
    this.b = B("tlid-star-history-entry", this.v);
    this.c = C("tlid-browse-entry", this.v);
    this.g = C("tlid-select-entry", this.v);
    this.h = new GI(this.Ol, 500, this);
    II(this)
};
ka(JI, J);
var II = function(a) {
    a.b && G(a.b, "click", function() {
        a.h.ri()
    }, !1, a);
    Dh(a.c, a.Hm.bind(a));
    Dh(a.g, a.Im.bind(a))
};
h = JI.prototype;
h.Ol = function() {
    this.dispatchEvent("f")
};
h.Hm = function() {
    this.dispatchEvent("d")
};
h.Im = function() {
    this.dispatchEvent("e")
};
h.j = function() {
    return this.v
};
h.nh = function(a) {
    U(this.v, "starred", a)
};
var LI = function(a, b) {
    J.call(this);
    this.F = K.M();
    this.g = Km.M();
    this.v = a;
    this.a = [];
    this.o = b;
    this.c = null;
    this.C = KI(this, C("tlid-history-delete-all-button", this.v), this.L, !1);
    this.C.g("\u0c87\u0ca4\u0cbf\u0cb9\u0cbe\u0cb8 \u0ca4\u0cc6\u0cb0\u0cb5\u0cc1\u0c97\u0cca\u0cb3\u0cbf\u0cb8\u0cbf");
    KI(this, C("tlid-history-close-button", this.v), this.G);
    this.m = C("tlid-history-entry-list", this.v);
    this.w = !1;
    this.h = [];
    this.b = null;
    this.O = new bG(DATA.Messages.NUM_TRANSLATIONS);
    this.K = C("tlid-history-num-entries", this.v)
};
ka(LI, J);
var KI = function(a, b, c, d) {
        d = void 0 === d ? !0 : d;
        var e = new us(null, new tt);
        e.ba(b);
        d && (Zs(b), bt(b, 2));
        c && G(e, "action", c, !1, a);
        return e
    },
    OI = function(a, b) {
        for (var c = 0; c < b.length; c++) MI(a, b[c]);
        0 < b.length && U(a.v, "empty", !1);
        T(a.v, "loading");
        NI(a, a.a.length)
    },
    MI = function(a, b) {
        b = WF(b);
        for (var c = a.a.length - 1; 0 <= c; c--) {
            var d = a.a[c];
            TF(d.a, b) && (a.a.splice(c, 1), mg(d.j()), sh(d))
        }
        c = No(FI, {
            Ba: yI(QF(b)),
            Rb: b.a,
            Ma: zI(b.ma()),
            Sb: b.Ya(),
            Mc: !DATA.InChina,
            oj: "\u0ca8\u0c95\u0ccd\u0cb7\u0ca4\u0ccd\u0cb0\u0cbf\u0ca4 \u0c85\u0ca8\u0cc1\u0cb5\u0cbe\u0ca6"
        });
        lg(a.m,
            c, 0);
        b = new JI(b, c);
        a.a.unshift(b);
        PI(a, b);
        a.w ? QI(a, b) : a.h.push(b)
    },
    PI = function(a, b) {
        G(b, "d", function() {
            var c = b.a;
            a.dispatchEvent({
                type: "history_entry_selected",
                text: c.a,
                gb: c.Pa(),
                hb: c.ma()
            });
            a.c && U(a.c.v, "browsed", !1);
            U(b.v, "browsed", !0);
            a.c = b;
            RI(a, b)
        }, !1);
        G(b, "e", function() {
            var c = b.a;
            a.dispatchEvent({
                type: "history_entry_selected",
                text: c.a,
                gb: c.Pa(),
                hb: c.ma()
            });
            a.G();
            RI(a, b)
        }, !1);
        G(b, "f", function() {
            var c = b.a;
            if (DATA.SignedIn) {
                var d = !Go(b.v, "starred");
                wG(a.o, c, d ? 0 : 1) && (b.nh(d), c = a.F, L(c, Hm(c, 64, a.a.indexOf(b),
                    d)), a.g.log("th=sc", {}))
            } else {
                d = Go(b.v, "starred") ? "unst" : "st";
                var e = new dr;
                er(e, "history");
                hr(e, QF(c), c.ma(), c.a);
                wI(d, a.g, Ga, Ga, e.toString())
            }
        }, !1)
    },
    SI = function(a) {
        a.c && (U(a.c.v, "browsed", !1), a.c = null)
    };
LI.prototype.G = function() {
    this.dispatchEvent("close_requested");
    SI(this)
};
LI.prototype.L = function() {
    if (0 !== this.a.length) {
        ig(this.m);
        for (var a = 0; a < this.a.length; a++) sh(this.a[a]);
        this.a = [];
        this.dispatchEvent("clear_history_clicked");
        U(this.v, "empty", !0);
        NI(this, this.a.length);
        a = this.F;
        L(a, M(a, 63));
        this.g.log("th=ch", {})
    }
};
var TI = function(a, b, c, d) {
        a.b = new PF(d, {}, b, c)
    },
    UI = function(a) {
        a.w = !0;
        for (var b = 0; b < a.h.length; b++) QI(a, a.h[b])
    },
    QI = function(a, b) {
        a.b && QF(a.b) === QF(b.a) && a.b.ma() === b.a.ma() && a.b.a === b.a.a ? (a.b = null, wG(a.o, b.a, 0)) : zG(a.o, b.a, b.nh.bind(b))
    },
    NI = function(a, b) {
        b = eG(a.O, {
            NUM_TRANSLATIONS: b
        });
        E(a.K, b)
    },
    RI = function(a, b) {
        var c = a.F,
            d = Go(b.v, "starred");
        L(c, Hm(c, 61, a.a.indexOf(b), d));
        a.g.log("th=es", {})
    };
var VI = function(a) {
    a = a.Qa;
    return N("<div class='tlid-history-container history-container loading empty'><div class='history-top-header'><div class='history-top-bar'><div class='tlid-history-close-button close-button button-icon' aria-label=\"" + (a.CLOSE_HISTORY ? Q(a.CLOSE_HISTORY) : Q(a.CLOSE)) + "\"></div><div class='title'>" + P(a.HISTORY_SECTION_TITLE) + "</div><div class='history-features'><div class='tlid-history-delete-all-button delete-all-button'></div></div></div><div class='tlid-history-info-bar info-bar'><div class='tlid-history-num-entries num-entries'></div></div></div><div class='history-body'><div class='tlid-history-entry-list entry-list' role=\"listbox\" tabindex=\"0\"></div></div><div class='empty-placeholder'><div class='placeholder-image'></div><div class='placeholder-text-holder'><div class='placeholder-title'>" +
        P(a.HISTORY_INFO_HEADER) + "</div><div class='placeholder-body'>" + P(a.HISTORY_INFO_TEXT) + "</div></div></div><div class='history-loader'><div class='mspin-googblue-medium'><div><div></div></div></div></div></div>")
};
VI.a = "trans.mobile.components.history.template.main";
var WI = function(a) {
    var b = Xn("string" === typeof a.Ba, "sourceLanguage", a.Ba, "string");
    a = Xn("string" === typeof a.Ma, "targetLanguage", a.Ma, "string");
    return N("<div class='tlid-phrasebook-language-chip language-chip' role=\"button\" tabindex=\"0\"><div class='language-chip-languages'>" + P(b) + " <span class='language-chip-arrow'></span> " + P(a) + "</div><button class='tlid-phrasebook-language-chip-clear-button clear-button button-icon'></button></div>")
};
WI.a = "trans.mobile.components.phrasebook.languagechip.template.main";
var YI = function(a, b, c) {
    b = c || b;
    c = Xn("string" === typeof a.Ba, "sourceLanguage", a.Ba, "string");
    var d = Xn("string" === typeof a.Rb, "sourcePhrase", a.Rb, "string"),
        e = Xn("string" === typeof a.Ma, "targetLanguage", a.Ma, "string"),
        f = Xn("string" === typeof a.Sb, "targetPhrase", a.Sb, "string");
    a = a.Qa;
    return N("<div class='tlid-phrasebook-entry phrasebook-entry' role=\"option\">" + P(WI({
            Ba: c,
            Ma: e
        }, b)) + "<button class='tlid-delete-phrasebook-entry trashcan-button button-icon' aria-label='" + Q(a.DELETE_THIS_PHRASE) + "'></button><div class='tlid-browse-entry browse-entry' role=\"button\" tabindex=\"0\"><div class='trashcan-placeholder'></div><div class='phrase'>" +
        XI({
            Rb: d,
            Sb: f,
            Oe: !0,
            Qa: a
        }) + "</div></div><div class='tlid-select-entry select-entry' role=\"button\" tabindex=\"0\"><div class='trashcan-placeholder'></div>" + XI({
            Rb: d,
            Sb: f
        }) + "</div></div>")
};
YI.a = "trans.mobile.components.phrasebook.entry.template.main";
var XI = function(a) {
    var b = Xn("string" === typeof a.Rb, "sourcePhrase", a.Rb, "string"),
        c = Xn("string" === typeof a.Sb, "targetPhrase", a.Sb, "string"),
        d = Xn(null == a.Oe || "boolean" === typeof a.Oe || 1 === a.Oe || 0 === a.Oe, "includeTts", a.Oe, "boolean|null|undefined");
    a = a.Qa;
    return N("<div class='phrase'><div class='tl-input'><bdi>" + P(b) + "</bdi>" + (d && In(a) ? "<button class='tlid-phrasebook-entry-source-tts tts-button button-icon' aria-label='" + Q(a.LISTEN) + "' data-tooltip='" + Q(a.LISTEN) + "'></button>" : "") + "</div><div class='tl-output'><bdi>" +
        P(c) + "</bdi>" + (d && In(a) ? "<button class='tlid-phrasebook-entry-target-tts tts-button button-icon' aria-label='" + Q(a.LISTEN) + "' data-tooltip='" + Q(a.LISTEN) + "'></button>" : "") + "</div></div>")
};
var $I = function(a, b, c) {
    J.call(this);
    var d = this;
    this.v = a;
    jc(DATA.DisplayLanguage) && R(this.v, "rtl-display-language");
    this.a = b;
    this.b = c;
    this.c = C("tlid-phrasebook-language-chip-clear-button", this.v);
    G(this.c, "click", this.fl, !1, this);
    G(this.v, "click", function() {
        return ZI(d)
    }, !1);
    G(this.v, "keypress", this.g, !1, this)
};
ka($I, J);
h = $I.prototype;
h.j = function() {
    return this.v
};
h.Pa = function() {
    return this.a
};
h.ma = function() {
    return this.b
};
h.cd = function(a) {
    U(this.v, "selected", a)
};
h.fl = function(a) {
    a.stopPropagation();
    this.dispatchEvent("language_pair_deselected")
};
var ZI = function(a) {
    a.dispatchEvent("language_pair_selected")
};
$I.prototype.g = function(a) {
    switch (a.keyCode) {
        case 13:
        case 32:
            ZI(this)
    }
};
var cJ = function(a, b) {
    J.call(this);
    this.F = K.M();
    this.c = Km.M();
    this.a = a;
    this.v = b;
    this.g = C("tlid-delete-phrasebook-entry", this.v);
    this.O = new $I(C("tlid-phrasebook-language-chip", this.v), QF(this.a), this.a.ma());
    this.b = C("tlid-browse-entry", this.v);
    this.o = C("tlid-select-entry", this.v);
    this.G = C("tlid-phrasebook-entry-source-tts", this.v);
    this.L = C("tlid-phrasebook-entry-target-tts", this.v);
    this.C = aJ(this, this.G, "&client=webapp&prev=pbsrc", 5);
    this.C.update(this.a.a, QF(this.a), void 0, yI(QF(this.a)));
    this.K =
        aJ(this, this.L, "&client=webapp&prev=pbtgt", 6);
    this.K.update(this.a.b, this.a.ma(), void 0, zI(this.a.ma()));
    bJ(this)
};
ka(cJ, J);
var bJ = function(a) {
        G(a.v, "focusin", function() {
            R(a.v, "focus-within")
        }, !1);
        G(a.v, "focusout", function(b) {
            sg(a.v, b.relatedTarget) || T(a.v, "focus-within")
        }, !1);
        G(a.g, "click", a.h, !1, a);
        G(a.O, "language_pair_selected", function() {
            a.dispatchEvent("language_pair_selected")
        }, !1);
        G(a.b, "click", a.m, !1, a);
        G(a.b, "keypress", function(b) {
            13 != b.keyCode && 32 != b.keyCode || a.m.bind(a)(b)
        }, !1);
        G(a.o, "click", a.w, !1, a);
        G(a.o, "keypress", function(b) {
            13 != b.keyCode && 32 != b.keyCode || a.w.bind(a)(b)
        }, !1);
        G(a.C, "userInteractionWhileDisabled",
            function() {
                a.dispatchEvent({
                    type: "interaction_with_disabled_voice_output",
                    Nb: yI(QF(a.a))
                })
            }, !1);
        G(a.K, "userInteractionWhileDisabled", function() {
            a.dispatchEvent({
                type: "interaction_with_disabled_voice_output",
                Nb: zI(a.a.ma())
            })
        }, !1)
    },
    aJ = function(a, b, c, d) {
        var e = new ot(DATA.Messages.LISTEN);
        e.ba(b);
        c = new Ru(e, c, d, !1, !0, DATA.Messages.LISTEN, DATA.Messages.VOICE_OUTPUT_UNAVAILABLE);
        bt(b, 2);
        Ng(a, c);
        return c
    };
cJ.prototype.h = function() {
    var a = this.F;
    L(a, M(a, 316));
    this.c.log("api=ed", {});
    this.dispatchEvent("delete_button_clicked");
    qh(this.g, "click", this.h, !1, this)
};
cJ.prototype.m = function(a) {
    a.target != this.G && a.target != this.L && (this.c.log("api=es", {}), a = this.F, L(a, M(a, 315)), this.dispatchEvent("entry_browsed"))
};
cJ.prototype.w = function() {
    this.c.log("api=es", {});
    var a = this.F;
    L(a, M(a, 315));
    this.dispatchEvent("entry_selected")
};
cJ.prototype.j = function() {
    return this.v
};
var dJ = function(a, b) {
    J.call(this);
    this.v = a;
    this.na = b;
    this.a = [];
    this.h = [];
    this.O = {};
    this.N = "0";
    this.m = new Map;
    this.b = null;
    this.w = this.G = this.L = this.X = !1;
    this.C = "";
    this.g = this.c = null;
    this.V = this.R = this.W = this.o = -1;
    this.K = null
};
ka(dJ, J);
var hJ = function(a, b) {
        w(b, function(c) {
            var d = new PF(c.cg, c.c, c.Ba, c.Ma);
            null != c.a && (d.c = c.a);
            null != c.b && (d.g = c.b);
            a.a.unshift(d);
            eJ(a, QF(d), d.ma())
        }, a);
        fJ(a, 0);
        0 === a.a.length ? a.dispatchEvent("list_empty") : a.dispatchEvent("list_no_longer_empty");
        a.X = !0;
        null != a.K && (gJ(a, a.K), a.K = null)
    },
    iJ = function(a, b) {
        switch (b) {
            case "0":
                a.a.sort(function(c, d) {
                    return d.g - c.g
                });
                a.h.sort(function(c, d) {
                    return d.g - c.g
                });
                break;
            case "2":
                a.a.sort(function(c, d) {
                    return c.a.localeCompare(d.a)
                });
                a.h.sort(function(c, d) {
                    return c.a.localeCompare(d.a)
                });
                break;
            default:
                return
        }
        a.N = b;
        fJ(a, 0)
    },
    jJ = function(a, b) {
        a.G = !0;
        a.C = b;
        a.h = [];
        for (var c = ba(a.a), d = c.next(); !d.done; d = c.next()) d = d.value, UF(d, b) && a.h.push(d);
        fJ(a, 0)
    },
    kJ = function(a, b, c) {
        a.w = !0;
        a.c = b;
        a.g = c;
        a.h = [];
        for (var d = ba(a.a), e = d.next(); !e.done; e = d.next()) e = e.value, b === QF(e) && c === e.m && a.h.push(e);
        fJ(a, 0)
    },
    lJ = function(a) {
        a.G = !1;
        a.C = "";
        fJ(a, 0)
    },
    mJ = function(a) {
        return a.w || a.G ? a.h : a.a
    },
    fJ = function(a, b) {
        if (!(0 > b || b > nJ(a))) {
            var c = 0 === mJ(a).length ? 0 : 10 * b,
                d = oJ(a, b),
                e = mJ(a).length;
            var f = mJ(a),
                g = 0 === mJ(a).length ?
                0 : 10 * b,
                k = oJ(a, b);
            if (0 !== f.length && g > f.length - 1) b = !1;
            else {
                for (ig(a.v); g < k; g++) {
                    var l = pJ(a, f[g]);
                    a.v.appendChild(l.j())
                }
                a.o = b;
                b = !0
            }
            b && (a.W === c && a.R === d && a.V === e || 0 !== e && c > e - 1 || (a.W = c, a.R = d, a.V = e, a.dispatchEvent({
                type: "num_entries_and_indices_updated",
                Mn: c + 1,
                Lk: d,
                Pm: e
            })), b = d = !1, 0 !== c && (d = !0), e > c + 10 && (b = !0), a.dispatchEvent({
                type: "page_update",
                Xl: b,
                Yl: d
            }))
        }
    },
    nJ = function(a) {
        var b = 0;
        for (a = mJ(a).length; 0 < a;) b++, a -= 10;
        return b
    },
    oJ = function(a, b) {
        a = mJ(a).length;
        if (0 === a) return 0;
        b = 10 * (b + 1);
        b > a && (b = a);
        return b
    },
    pJ = function(a, b) {
        var c = qJ(b),
            d = a.O[c];
        if (null != d) return d;
        d = No(YI, {
            Ba: yI(QF(b)),
            Rb: b.a,
            Ma: zI(b.ma()),
            Sb: b.b,
            Qa: DATA.Messages
        });
        b = new cJ(b, d);
        rJ(a, b);
        d = b;
        return a.O[c] = d
    },
    sJ = function(a, b) {
        var c = !0;
        a.G && !UF(b, a.C) && (c = !1);
        a.w && a.c && a.g && (a.c !== QF(b) || a.g !== b.m) && (c = !1);
        return c
    },
    rJ = function(a, b) {
        G(b, "entry_browsed", function() {
            if (a.b !== b) {
                var c = b.a;
                a.dispatchEvent({
                    type: "entry_browsed",
                    text: c.a,
                    gb: c.Pa(),
                    hb: c.ma()
                });
                tJ(a);
                U(b.v, "browsed", !0);
                a.b = b
            }
        }, !1);
        G(b, "delete_button_clicked", function() {
            wG(a.na,
                b.a, 1);
            a.dispatchEvent("delete_entry_requested")
        }, !1);
        G(b, "entry_selected", function() {
            var c = b.a;
            a.dispatchEvent({
                type: "entry_selected",
                text: c.a,
                gb: c.Pa(),
                hb: c.ma()
            })
        }, !1);
        G(b, "language_pair_selected", function() {
            a.dispatchEvent({
                type: "language_pair_selected",
                gb: QF(b.a),
                hb: b.a.ma()
            })
        }, !1);
        G(b, "interaction_with_disabled_voice_output", function(c) {
            a.dispatchEvent({
                type: "interaction_with_disabled_voice_output",
                Nb: c.Nb
            })
        }, !1)
    },
    tJ = function(a) {
        a.b && (U(a.b.v, "browsed", !1), a.b = null)
    },
    gJ = function(a, b) {
        if (!a.X) a.K =
            b;
        else if (null == a.b || !TF(a.b.a, b))
            for (var c = a.b, d = a.a, e = 0; e < d.length; e++) {
                var f = d[e];
                if (TF(f, b)) {
                    b = pJ(a, f);
                    tJ(a);
                    U(b.v, "browsed", !0);
                    a.b = b;
                    null != c && Ig(document) === c.b && b.b.focus();
                    break
                }
            }
    },
    uJ = function(a) {
        a.match(/[",\t\n]/) && (a = '"' + a.replace(/"/g, '""') + '"');
        return a
    },
    eJ = function(a, b, c) {
        var d = b + "|" + c;
        a.m.has(d) ? (b = a.m.get(d), a.m.set(d, b + 1)) : (a.m.set(d, 1), a.dispatchEvent({
            type: "language_pair_added",
            gb: b,
            hb: c
        }))
    };

function qJ(a) {
    return QF(a) + "|" + a.ma() + "|" + a.a + "|" + a.b
};
var vJ = function(a) {
    X.call(this, a)
};
t(vJ, X);
vJ.prototype.Ja = function() {
    this.v = this.a.b("FORM", {
        method: "POST",
        style: "display:none"
    })
};
var wJ = function(a, b, c) {
    var d, e = [];
    for (d in c) {
        var f = c[d];
        Ma(f) ? w(f, p(function(g) {
            e.push(Ld("input", {
                type: "hidden",
                name: d,
                value: String(g)
            }))
        }, a)) : e.push(Ld("input", {
            type: "hidden",
            name: d,
            value: String(f)
        }))
    }
    Wd(b, Od(e))
};
var xJ = function(a, b, c) {
    Lg.call(this);
    this.Zb = null != c ? p(a, c) : a;
    this.h = b;
    this.g = p(this.m, this);
    this.b = this.a = null;
    this.c = []
};
t(xJ, Lg);
xJ.prototype.o = function(a) {
    this.c = arguments;
    this.a ? this.b = Va() + this.h : this.a = Fi(this.g, this.h)
};
xJ.prototype.stop = function() {
    this.a && (Gi(this.a), this.a = null);
    this.b = null;
    this.c = []
};
xJ.prototype.T = function() {
    this.stop();
    xJ.D.T.call(this)
};
xJ.prototype.m = function() {
    this.b ? (this.a = Fi(this.g, this.b - Va()), this.b = null) : (this.a = null, this.Zb.apply(null, this.c))
};
var yJ = function(a, b) {
        X.call(this, b);
        this.b = a || ""
    },
    zJ;
t(yJ, X);
yJ.prototype.g = null;
var AJ = function() {
    null == zJ && (zJ = "placeholder" in cg("INPUT"));
    return zJ
};
h = yJ.prototype;
h.Ne = !1;
h.Ja = function() {
    this.v = this.a.b("INPUT", {
        type: "text"
    })
};
h.Da = function(a) {
    yJ.D.Da.call(this, a);
    this.b || (this.b = a.getAttribute("label") || "");
    Ig(Lf(a)) == a && (this.Ne = !0, a = this.j(), v(a), T(a, "label-input-label"));
    AJ() && (this.j().placeholder = this.b);
    a = this.j();
    v(a, "The label input element cannot be null.");
    yo(a, "label", this.b)
};
h.aa = function() {
    yJ.D.aa.call(this);
    var a = new Bp(this);
    a.listen(this.j(), "focus", this.Hi);
    a.listen(this.j(), "blur", this.bl);
    if (AJ()) this.c = a;
    else {
        Ce && a.listen(this.j(), ["keypress", "keydown", "keyup"], this.yl);
        var b = Lf(this.j());
        a.listen(Yf(b), "load", this.Wl);
        this.c = a;
        BJ(this)
    }
    CJ(this);
    this.j().b = this
};
h.ab = function() {
    yJ.D.ab.call(this);
    this.c && (this.c.Ia(), this.c = null);
    this.j().b = null
};
var BJ = function(a) {
    !a.m && a.c && a.j().form && (a.c.listen(a.j().form, "submit", a.Bl), a.m = !0)
};
h = yJ.prototype;
h.T = function() {
    yJ.D.T.call(this);
    this.c && (this.c.Ia(), this.c = null)
};
h.Hi = function() {
    this.Ne = !0;
    var a = this.j();
    v(a);
    T(a, "label-input-label");
    if (!AJ() && !DJ(this) && !this.w) {
        var b = this;
        a = function() {
            b.j() && (b.j().value = "")
        };
        y ? Fi(a, 10) : a()
    }
};
h.bl = function() {
    AJ() || (this.c.Ga(this.j(), "click", this.Hi), this.g = null);
    this.Ne = !1;
    CJ(this)
};
h.yl = function(a) {
    27 == a.keyCode && ("keydown" == a.type ? this.g = this.j().value : "keypress" == a.type ? this.j().value = this.g : "keyup" == a.type && (this.g = null), a.preventDefault())
};
h.Bl = function() {
    DJ(this) || (this.j().value = "", Fi(this.$k, 10, this))
};
h.$k = function() {
    DJ(this) || (this.j().value = this.b)
};
h.Wl = function() {
    CJ(this)
};
var DJ = function(a) {
        return !!a.j() && "" != a.j().value && a.j().value != a.b
    },
    EJ = function(a) {
        a.j().value = "";
        null != a.g && (a.g = "")
    };
yJ.prototype.reset = function() {
    DJ(this) && (EJ(this), CJ(this))
};
yJ.prototype.Y = function() {
    return null != this.g ? this.g : DJ(this) ? this.j().value : ""
};
var CJ = function(a) {
    var b = a.j();
    v(b, "The label input element cannot be null.");
    AJ() ? a.j().placeholder != a.b && (a.j().placeholder = a.b) : BJ(a);
    yo(b, "label", a.b);
    DJ(a) ? (b = a.j(), v(b), T(b, "label-input-label")) : (a.w || a.Ne || (b = a.j(), v(b), R(b, "label-input-label")), AJ() || Fi(a.h, 10, a))
};
yJ.prototype.oa = function(a) {
    this.j().disabled = !a;
    var b = this.j();
    v(b);
    U(b, "label-input-label-disabled", !a)
};
yJ.prototype.isEnabled = function() {
    return !this.j().disabled
};
yJ.prototype.h = function() {
    !this.j() || DJ(this) || this.Ne || (this.j().value = this.b)
};
var FJ = function() {};
t(FJ, ox);
Ha(FJ);
FJ.prototype.wa = function() {
    return "goog-toolbar-menu-button"
};
var PJ = function(a, b) {
    J.call(this);
    var c = this;
    this.F = K.M();
    this.h = Km.M();
    this.v = a;
    U(this.v, "mobile", lr());
    this.a = new dJ(C("tlid-phrasebook-entry-list", this.v), b);
    GJ(this);
    this.xa = C("tlid-phrasebook-header-num-phrases", this.v);
    this.ra = C("tlid-phrasebook-body-num-phrases", this.v);
    this.Ca = new bG(DATA.Messages.NUM_PHRASES_PAGINATED);
    this.L = HJ(this);
    G(this.L, "change", this.N, !1, this);
    IJ(this, C("tlid-phrasebook-export-to-sheets", this.v), this.o);
    this.ia = JJ(this);
    this.R = KJ(this);
    this.K = IJ(this, C("tlid-phrasebook-search-button",
        this.v), this.na);
    LJ(this, !1);
    this.C = new xJ(this.X, 500, this);
    this.b = new yJ(DATA.Messages.SEARCH_PHRASES);
    this.b.ba(C("tlid-phrasebook-search-box", this.v));
    G(this.b.j(), "keydown", function(d) {
        switch (d.keyCode) {
            case 27:
                c.C.stop();
                EJ(c.b);
                MJ(c);
                lJ(c.a);
                break;
            case 9:
                break;
            default:
                c.C.o()
        }
    }, !1, this);
    IJ(this, C("tlid-phrasebook-search-clear-button", this.v), this.V);
    IJ(this, C("tlid-phrasebook-close-button", this.v), this.Na);
    this.w = B("tlid-phrasebook-header-next-page", this.v) || null;
    null != this.w && G(this.w, "click",
        function() {
            var d = c.F;
            L(d, M(d, 336));
            NJ(c, "np");
            d = c.a;
            var e = d.o + 1;
            e > nJ(d) || fJ(d, e)
        }, !1);
    this.G = B("tlid-phrasebook-header-prev-page", this.v) || null;
    null != this.G && G(this.G, "click", function() {
        var d = c.F;
        L(d, M(d, 337));
        NJ(c, "pp");
        d = c.a;
        var e = d.o - 1;
        0 > e || fJ(d, e)
    }, !1);
    this.Z = C("tlid-phrasebook-header-language-pair-container", this.v);
    this.g = [];
    this.O = C("tlid-phrasebook-body-language-pair-container", this.v);
    this.c = [];
    this.m = !1;
    a = b.c && !b.C || !b.m ? null : b.g.concat(b.a);
    null !== a && OJ(this, a)
};
ka(PJ, J);
var HJ = function(a) {
        var b = C("tlid-phrasebook-sort", a.v),
            c = [DATA.Messages.SORT_BY_DATE, DATA.Messages.SORT_ALPHABETICALLY];
        Zs(b);
        bt(b, 2);
        xc(ne("sort-button-tooltip")) || b.setAttribute("data-tooltip-class", "sort-button-tooltip");
        b = new dy(b, c, 10, ["0", "2"], void 0, DATA.Messages.SORT, FJ.M(), void 0, !0);
        Ix(b, new ux(b.Yb(), 13));
        Jx(b, new Po(-16, -24, 0, 0));
        c = Hx(b);
        c.render(C("tlid-phrasebook-sort-menu", a.v));
        G(c, "show", function() {
            var d = a.F;
            L(d, M(d, 319));
            NJ(a, "so")
        }, !1);
        return b
    },
    IJ = function(a, b, c) {
        var d = void 0 ===
            d ? !0 : d;
        var e = new us(null, new tt);
        e.ba(b);
        d && (Zs(b), bt(b, 2));
        c && G(e, "action", c, !1, a);
        return e
    },
    JJ = function(a) {
        var b = C("tlid-phrasebook-more-button", a.v),
            c = new Ex;
        c.ba(b);
        Zs(b);
        bt(b, 2);
        c.Je(QJ(a, DATA.Messages.DELETE_ALL, a.W, "delete-all-menuitem"));
        c.Je(QJ(a, DATA.Messages.EXPORT_TO_SHEETS, a.o, "export-menuitem"));
        Ix(c, new ux(b, 13));
        c.ra = new Po(-20, 0, 0, 0);
        Hx(c).render(C("tlid-phrasebook-more-menu", a.v));
        return c
    },
    QJ = function(a, b, c, d) {
        b = new hx(b);
        is(b, d);
        G(b, "action", c, !1, a);
        return b
    },
    KJ = function(a) {
        var b =
            new cI("phrasebook-delete-all-dialog", !0);
        dI(b, DATA.Messages.DELETE_ALL_DIALOG_TITLE);
        eI(b, Fd(DATA.Messages.DELETE_ALL_DIALOG_CONTENT));
        b.Eg = !1;
        gI(b, !1);
        b.li = !0;
        var c = new $H;
        c.set("cancel", DATA.Messages.CANCEL, !1, !0);
        c.set("delete", DATA.Messages.DELETE);
        jI(b, c);
        G(b, "dialogselect", function(d) {
            if ("delete" !== d.key) d = a.F, L(d, M(d, 326)), NJ(a, "dn");
            else {
                d = a.a;
                if (0 === d.a.length) d = !1;
                else {
                    d.L = !0;
                    for (var e = 0; e < d.a.length; e++) wG(d.na, d.a[e], 1);
                    d = !0
                }
                d && R(a.v, "loading");
                d = a.F;
                L(d, M(d, 325));
                NJ(a, "dy")
            }
        }, !1);
        return b
    },
    GJ = function(a) {
        G(a.a, "delete_all_complete", function() {
            T(a.v, "loading")
        }, !1);
        G(a.a, "entry_browsed", function(b) {
            a.dispatchEvent({
                type: "phrasebook_entry_selected",
                text: b.text,
                gb: b.gb,
                hb: b.hb
            })
        }, !1);
        G(a.a, "delete_entry_requested", function() {
            a.dispatchEvent("delete_entry_requested")
        }, !1);
        G(a.a, "entry_selected", function(b) {
            a.dispatchEvent({
                type: "phrasebook_entry_selected",
                text: b.text,
                gb: b.gb,
                hb: b.hb
            });
            a.dispatchEvent("close_requested")
        }, !1);
        G(a.a, "page_update", function(b) {
            var c = b.Yl;
            U(a.v, "has-next-page",
                b.Xl);
            U(a.v, "has-prev-page", c)
        }, !1);
        G(a.a, "language_pair_added", function(b) {
            if (null == b) a.h.log("jse=lpa", {});
            else {
                var c = b.gb;
                b = b.hb;
                RJ(a, c, b, a.Z, a.g);
                RJ(a, c, b, a.O, a.c)
            }
        }, !1);
        G(a.a, "language_pair_removed", function(b) {
            if (null == b) a.h.log("jse=lpr", {});
            else {
                var c = b.gb;
                b = b.hb;
                SJ(c, b, a.g);
                SJ(c, b, a.c)
            }
        }, !1);
        G(a.a, "language_pair_selected", function(b) {
            null == b ? a.h.log("jse=lps", {}) : (TJ(a, b.gb, b.hb), b = a.F, L(b, M(b, 322)), NJ(a, "fs"))
        }, !1);
        G(a.a, "list_empty", function() {
            U(a.v, "empty", !0)
        }, !1);
        G(a.a, "list_no_longer_empty",
            function() {
                U(a.v, "empty", !1)
            }, !1);
        G(a.a, "num_entries_and_indices_updated", function(b) {
            var c = DATA.DisplayLanguage;
            b = eG(a.Ca, {
                NUM_PHRASES: b.Pm,
                START_NUM: b.Mn.toLocaleString(c),
                END_NUM: b.Lk.toLocaleString(c)
            });
            E(a.xa, b);
            E(a.ra, b)
        }, !1);
        G(a.a, "last_displayed_entry_deleted", function() {
            UJ(a)
        }, !1);
        G(a.a, "interaction_with_disabled_voice_output", function(b) {
            a.dispatchEvent({
                type: "interaction_with_disabled_voice_output",
                Nb: b.Nb
            })
        }, !1)
    },
    OJ = function(a, b) {
        a.m || (hJ(a.a, b), a.m = !0, T(a.v, "loading"))
    },
    UJ = function(a) {
        VJ(a);
        EJ(a.b);
        MJ(a);
        lJ(a.a)
    };
PJ.prototype.N = function() {
    var a = this.L.Y();
    switch (a) {
        case "0":
            var b = this.F;
            L(b, M(b, 320));
            NJ(this, "s1");
            break;
        case "2":
            b = this.F;
            L(b, M(b, 321));
            NJ(this, "s2");
            break;
        default:
            return
    }
    iJ(this.a, a)
};
var LJ = function(a, b) {
    U(a.v, "search-open", b)
};
PJ.prototype.na = function() {
    var a = this.F;
    L(a, M(a, 318));
    NJ(this, "os");
    WJ(this)
};
var WJ = function(a) {
        LJ(a, !0);
        EJ(a.b);
        a.b.j().focus();
        VJ(a);
        lJ(a.a);
        R(a.v, "empty-search-query")
    },
    MJ = function(a) {
        LJ(a, !1);
        T(a.v, "empty-search-query")
    };
PJ.prototype.X = function() {
    this.b.Y() ? (T(this.v, "empty-search-query"), jJ(this.a, this.b.Y())) : WJ(this)
};
PJ.prototype.V = function() {
    this.b.Y() ? WJ(this) : (MJ(this), lJ(this.a))
};
PJ.prototype.Na = function() {
    var a = this.F;
    L(a, M(a, 317));
    NJ(this, "cb");
    this.dispatchEvent("close_requested");
    UJ(this)
};
PJ.prototype.o = function() {
    var a = {
            authuser: Gj() || "0",
            target: "_blank"
        },
        b = this.a;
    var c = [];
    for (var d = b.a, e = d.length - 1; 0 <= e; --e) {
        var f = [],
            g = d[e];
        sJ(b, g) && (f.push(yI(QF(g))), f.push(zI(g.ma())), f.push(uJ(g.a)), f.push(uJ(g.b)), c.push(f.join(",")))
    }
    c = c.join("\n");
    b = this.a;
    d = DATA.Messages.SAVED_TRANSLATIONS_SPREADSHEET_TITLE;
    b.w && null != b.c && null != b.g && (d = d + " - " + yI(b.c) + " - " + zI(b.g));
    b = a;
    b = void 0 === b ? {} : b;
    a = b.target;
    e = b.trixPath || (b.useCorp ? "https://docs.google.com/a/google.com/spreadsheets/" : void 0);
    delete b.target;
    delete b.useCorp;
    delete b.trixPath;
    Object.assign(b, {
        content: c,
        title: d
    });
    c = b.authuser;
    d = Ij(void 0 === e ? "https://docs.google.com/spreadsheets/" : e, "import");
    d = Ij(d, "inline");
    c && (d = Dj(d, "authuser", c));
    c = d;
    d = new vJ;
    e = d.j();
    e || (d.render(), e = d.j());
    e.action = c || "";
    e.target = a || "";
    wJ(d, e, b);
    e.submit()
};
var RJ = function(a, b, c, d, e) {
        var f = XJ(b, c);
        b = new $I(f, b, c);
        gg(d, f);
        e.push(b);
        G(b, "language_pair_selected", function(g) {
            g = g.target;
            TJ(a, g.Pa(), g.ma());
            g = a.F;
            L(g, M(g, 322));
            NJ(a, "fs")
        }, !1);
        G(b, "language_pair_deselected", function() {
            VJ(a);
            var g = a.F;
            L(g, M(g, 323));
            NJ(a, "fr")
        }, !1)
    },
    SJ = function(a, b, c) {
        for (var d = c.length - 1; 0 <= d; d--) {
            var e = c[d];
            a === e.a && b === e.b && (mg(e.j()), c.splice(d, 1), sh(e))
        }
    },
    TJ = function(a, b, c) {
        R(a.v, "language-pair-selected");
        for (var d = 0; d < a.g.length; d++) {
            var e = a.g[d];
            e.cd(b === e.a && c === e.b)
        }
        for (d =
            0; d < a.c.length; d++) e = a.c[d], e.cd(b === e.a && c === e.b);
        kJ(a.a, b, c);
        MJ(a)
    },
    VJ = function(a) {
        T(a.v, "language-pair-selected");
        for (var b = 0; b < a.g.length; b++) a.g[b].cd(!1);
        for (b = 0; b < a.c.length; b++) a.c[b].cd(!1);
        a = a.a;
        a.w = !1;
        a.c = null;
        a.g = null;
        fJ(a, 0)
    };
PJ.prototype.W = function() {
    this.R.setVisible(!0);
    this.ia.Wa(!1);
    var a = this.F;
    L(a, M(a, 324));
    NJ(this, "da")
};
var NJ = function(a, b) {
    a.h.log("api=" + b, {})
};

function XJ(a, b) {
    return No(WI, {
        Ba: yI(a),
        Ma: zI(b)
    })
};
var YJ = function(a) {
    var b = Xn("string" === typeof a.Ra, "displayLanguage", a.Ra, "string");
    a = a.Qa;
    var c = N,
        d = "<div class='tlid-phrasebook-container phrasebook-container loading'><div class='phrasebook-top-header'><div class='phrasebook-top-bar'><div class='tlid-phrasebook-close-button close-button button-icon' aria-label=\"" + Q(a.CLOSE_SAVED_TRANSLATIONS) + "\"></div><div class='title'>" + P(a.SAVED_SECTION_TITLE) + "</div><div class='tlid-phrasebook-search-button search-button search-image-black button-icon' title=\"" +
        Q(a.SEARCH_PHRASES) + "\"></div><div class='tlid-phrasebook-search-bar search-bar'><div class='search-image-black button-icon'></div><input class='tlid-phrasebook-search-box search-box'><div class='tlid-phrasebook-search-clear-button clear-button clear-image-black button-icon' title=\"" + Q(a.CLEAR_TEXT) + "\"></div></div><div class='phrasebook-features'><div class='tlid-phrasebook-sort-menu sort-menu'></div><div class='tlid-phrasebook-more-menu more-menu'></div><div class='tlid-phrasebook-sort sort-button button-icon' aria-label='" +
        Q(a.SORT) + "' title='" + Q(a.SORT) + "'></div><div class='export-button-container'><div class='tlid-phrasebook-export-to-sheets export-button button-icon' title='" + Q(a.EXPORT_TO_SHEETS) + "'></div></div><div class='tlid-phrasebook-more-button more-button button-icon' aria-label='" + Q(a.MORE) + "' title='" + Q(a.MORE) + "'></div></div></div><div class='nav-bar'><div class='tlid-phrasebook-header-num-phrases num-phrases'></div><div class='nav-button-container'><button class='tlid-phrasebook-header-prev-page prev-button page-nav-button'></button><button class='tlid-phrasebook-header-next-page next-button page-nav-button'></button></div></div><div class='selected-chip-bar'><div class='tlid-phrasebook-header-language-pair-container language-pair-container'></div></div></div><div class='phrasebook-body'><div class='tlid-phrasebook-body-language-pair-container language-pair-container'><div class='title'>" +
        P(a.LANGUAGE_PAIRS) + "</div></div><div class='tlid-phrasebook-body-num-phrases num-phrases'></div>";
    var e = N('<div class=\'tlid-phrasebook-entry-list entry-list\' role="listbox" tabindex="0"></div>');
    return c(d + P(e) + "</div><div class='empty-placeholder'><div class='placeholder-image'></div><div class='placeholder-text-holder'><div class='placeholder-title'>" + P(a.PHRASEBOOK_INFO_HEADER) + "</div><div class='placeholder-body'>" + P(a.PHRASEBOOK_INFO_TEXT) + "</div></div><div class='placeholder-link'><a target='_blank' href='https://support.google.com/translate?p=phrasebook_web_help&hl=" +
        Qn(b) + "'>" + P(a.LEARN_MORE) + "</a></div></div><div class='phrasebook-loader'><div class='mspin-googblue-medium'><div><div></div></div></div></div></div>")
};
YJ.a = "trans.mobile.components.phrasebook.template.main";
var ZJ = function() {
        var a = Nf("backend-stats-decoder");
        this.b = null != a ? a : null;
        a = Nf("backend-stats-decoder1");
        this.o = null != a ? a : null;
        a = Nf("backend-stats-decoder2");
        this.g = null != a ? a : null;
        a = Nf("backend-stats-rapid-response");
        this.m = null != a ? a : null;
        a = Nf("backend-stats-stt-total");
        this.w = null != a ? a : null;
        a = Nf("backend-stats-community");
        this.a = null != a ? a : null;
        a = Nf("backend-stats-dictionary");
        this.c = null != a ? a : null;
        a = Nf("backend-stats-other");
        this.h = null != a ? a : null;
        a = Nf("backend-models-used");
        this.L = null != a ? a : null;
        a = Nf("backend-models-checksum");
        this.G = null != a ? a : null;
        a = Nf("backend-models-launch-doc");
        this.C = null != a ? a : null
    },
    $J = function(a) {
        a.w && a.a && a.c && a.b && a.o && a.g && a.m && a.h && a.L && a.G && a.C && (E(a.b, "0"), E(a.o, "0"), E(a.g, "0"), E(a.m, "0"), E(a.w, "0"), E(a.a, "0"), E(a.c, "0"), E(a.h, "0"), E(a.L, ""), E(a.G, ""), E(a.C, ""))
    },
    aK = function(a, b, c) {
        var d = cg("A"),
            e = dg(" ");
        d.appendChild(dg(c));
        Xd(d, b);
        a.appendChild(d);
        a.appendChild(e)
    };
var bK = function(a, b) {
    J.call(this);
    this.F = K.M();
    this.a = a;
    this.g = b;
    this.b = C("tlid-file-input", this.a);
    this.o = C("tlid-select-file-button", this.a);
    this.R = C("tlid-sl-input", this.a);
    this.V = C("tlid-tl-input", this.a);
    this.m = C("tlid-selected-file-label", this.a);
    this.w = C("tlid-selected-file-size", this.a);
    this.K = C("tlid-cancel-selected-file-button", this.a);
    this.h = C("tlid-translate-doc-button", this.a);
    this.c = this.h.form;
    this.O = new Iu;
    G(this.o, "click", this.G, !1, this);
    G(this.h, "click", this.L, !1, this);
    G(this.b,
        "change", this.C, !1, this);
    G(this.K, "click", this.N, !1, this);
    T(this.a, "loading")
};
ka(bK, J);
bK.prototype.L = function() {
    T(this.a, "has-file");
    R(this.a, "translating-file");
    var a = cK(this),
        b = dK(this.b.value),
        c = this.F,
        d = eK(b),
        e = M(c, 301),
        f = new Ok;
    d = A(f, 1, d);
    d = A(d, 2, a); of (e, 76, d);
    L(c, e);
    fK("success", a, b);
    this.c.enctype = this.c.encoding = "multipart/form-data";
    this.R.value = this.g.a;
    this.V.value = this.g.b;
    this.c.submit()
};
bK.prototype.G = function() {
    var a = this.F;
    L(a, M(a, 297));
    gK("bc")
};
bK.prototype.C = function() {
    var a = this.b.value;
    if ("" !== a) {
        var b = a.replace("C:\\fakepath\\", "");
        a = dK(b);
        if (0 === a.length) var c = !1;
        else switch (a.toLowerCase()) {
            case "doc":
            case "docx":
            case "odf":
            case "pdf":
            case "ppt":
            case "pptx":
            case "ps":
            case "rtf":
            case "txt":
            case "xls":
            case "xlsx":
                c = !0;
                break;
            default:
                c = !1
        }
        if (c) {
            if (void 0 !== window.FileReader) {
                c = cK(this);
                if (c > DATA.FileSizeLimit) {
                    this.dispatchEvent({
                        type: "file_too_big",
                        Ok: DATA.FileSizeLimit
                    });
                    this.b.value = "";
                    b = this.F;
                    var d = eK(a),
                        e = M(b, 148);
                    var f = new Qk;
                    f =
                        A(f, 1, 161); of (e, 63, f);
                    f = new Ok;
                    d = A(f, 1, d);
                    d = A(d, 2, c); of (e, 76, d);
                    L(b, e);
                    fK("ftbe", c, a);
                    return
                }
                a = this.w;
                c = cK(this);
                e = DATA.Messages.FILE_SIZE_BYTES;
                1 <= c / 1024 && (c /= 1024, e = DATA.Messages.FILE_SIZE_KILOBYTES);
                1 <= c / 1024 && (c /= 1024, e = DATA.Messages.FILE_SIZE_MEGABYTES);
                c = this.O.a(e, c.toFixed(0));
                E(a, c)
            }
            E(this.m, b);
            R(this.a, "has-file");
            T(this.a, "translating-file");
            a = this.F;
            L(a, M(a, 308));
            gK("fs")
        } else this.dispatchEvent("unsupported_filetype"), this.b.value = "", qm(this.F, 160), fK("ufte", 0, a)
    }
};
bK.prototype.N = function() {
    var a = this.F;
    L(a, M(a, 298));
    gK("c");
    this.b.value = "";
    T(this.a, "has-file");
    T(this.a, "translating-file")
};
var dK = function(a) {
        a = a.split(".");
        return 1 === a.length ? "" : a[a.length - 1].toLowerCase()
    },
    eK = function(a) {
        switch (a.toLowerCase()) {
            case "doc":
                return 1;
            case "docx":
                return 2;
            case "odf":
                return 3;
            case "pdf":
                return 4;
            case "ppt":
                return 5;
            case "pptx":
                return 6;
            case "ps":
                return 7;
            case "rtf":
                return 8;
            case "txt":
                return 9;
            case "xls":
                return 10;
            case "xlsx":
                return 11;
            default:
                return 0
        }
    },
    cK = function(a) {
        return 0 === a.b.files.length ? 0 : a.b.files[0].size
    },
    fK = function(a, b, c) {
        Pm(oI, "webapp", "dt", a, {
            dtfs: b,
            dtft: c
        })
    },
    gK = function(a) {
        Pm(oI,
            "webapp", "dti", a, {})
    };
var hK = function(a, b) {
    J.call(this);
    this.F = K.M();
    this.v = a;
    this.o = b;
    this.a = null;
    this.g = !1;
    this.b = null;
    this.c = []
};
ka(hK, J);
var iK = function(a, b, c, d) {
    a.a ? TI(a.a, b, c, d) : a.b = new PF(d, {}, b, c)
};
hK.prototype.m = function() {
    this.dispatchEvent("close_requested")
};
hK.prototype.h = function() {
    this.dispatchEvent("history_cleared")
};
var jK = function(a) {
    if (null == a.a) {
        var b = No(VI, {
            Qa: DATA.Messages
        });
        C("tlid-translation-history-container", a.v).appendChild(b);
        a.a = new LI(b, a.o);
        G(a.a, "close_requested", a.m, !1, a);
        G(a.a, "clear_history_clicked", a.h, !1, a);
        G(a.a, "history_entry_selected", function(c) {
            a.dispatchEvent({
                type: "history_entry_selected",
                gb: c.gb,
                hb: c.hb,
                text: c.text
            })
        }, !1);
        OI(a.a, a.c);
        a.c = [];
        null != a.b && TI(a.a, a.b.Pa(), a.b.ma(), a.b.a);
        a.g && UI(a.a)
    }
};
var kK = function(a) {
    var b = DATA.InChina,
        c = DATA.Messages;
    this.a = a;
    this.c = C("tlid-dismiss-button", this.a);
    this.b = C("tlid-acknowledge-button-overlay", this.a);
    this.o = c;
    b || (a = C("tlid-history-notification-body", this.a), b = fD((new Iu).a(this.o.HISTORY_REMOVAL_NOTIFICATION_BODY, "https://support.google.com/accounts/answer/7028918", "https://support.google.com/translate/answer/6142480")), Wd(a, b));
    Dh(this.c, this.h.bind(this));
    Dh(this.b, this.g.bind(this))
};
kK.prototype.h = function() {
    R(this.c, "pressed");
    (new wF(this.a, 300)).play()
};
kK.prototype.g = function() {
    R(this.b, "pressed");
    (new wF(this.a, 300)).play()
};
var mK = function(a, b) {
        this.F = K.M();
        this.c = a;
        this.a = C("tlid-transliteration-content", this.c);
        this.h = C("tlid-show-more-link", this.c);
        this.g = C("tlid-show-less-link", this.c);
        this.b = b;
        this.o = !1;
        lK(this)
    },
    oK = function(a, b) {
        if (void 0 === b) b = "";
        else {
            var c = [];
            if (b.sentences)
                for (var d = 0, e; e = b.sentences[d]; d++) 1 === a.b ? e["src-translit"] && c.push(e["src-translit"]) : 2 === a.b && e.translit && c.push(e.translit);
            b = c.join("")
        }
        nK(a, b)
    },
    nK = function(a, b) {
        pK(a);
        E(a.a, b);
        U(a.c, "rtl", mc(b));
        Fi(function() {
            return qK(a)
        }, 0)
    },
    qK = function(a) {
        pK(a);
        var b = a.a.offsetHeight,
            c = parseInt(Vo(a.a, "lineHeight"), 10);
        3 < Math.ceil(b / c) ? a.o ? rK(a) : sK(a) : (U(a.a, "full", !0), U(a.a, "truncated", !1), V(a.h, !1), V(a.g, !1));
        U(a.a, "intermediate", !1)
    },
    rK = function(a) {
        U(a.a, "full", !0);
        U(a.a, "truncated", !1);
        V(a.h, !1);
        V(a.g, !0)
    },
    sK = function(a) {
        U(a.a, "full", !1);
        U(a.a, "truncated", !0);
        V(a.h, !0);
        V(a.g, !1)
    },
    pK = function(a) {
        Io(a.a, ["truncated", "full"]);
        R(a.a, "intermediate")
    };
mK.prototype.m = function() {
    var a = this;
    Fi(function() {
        return qK(a)
    }, 0)
};
var lK = function(a) {
    var b = 0,
        c = "";
    1 === a.b ? (b = 1, c = "src") : 2 === a.b && (b = 2, c = "tgt");
    G(a.h, "click", function() {
        this.o = !0;
        rK(this);
        Fm(this.F, 290, b, this.a.textContent.length);
        Pm(oI, "webapp", "showmore", "click", {
            l: c
        })
    }, !1, a);
    G(a.g, "click", function() {
        this.o = !1;
        sK(this);
        Fm(this.F, 291, b, this.a.textContent.length);
        Pm(oI, "webapp", "showless", "click", {
            l: c
        })
    }, !1, a);
    G(window, "resize", a.m, !1, a)
};
var tK = function(a) {
    X.call(this);
    this.m = a;
    this.b = new yJ;
    this.g = new jt("");
    this.c = new jt("");
    this.h = null
};
t(tK, X);
tK.prototype.init = function() {
    this.c.ba(B("clear", this.j()));
    this.c.wd(DATA.Messages.CLEAR_TEXT);
    this.c.setVisible(!1);
    this.g.ba(B("url-go-button", this.j()));
    this.g.wd(DATA.Messages.TRANSLATE);
    this.g.oa(!1);
    this.b.ba(B("url-orig", this.j()));
    var a = this.b,
        b = DATA.Messages.URL_INPUT_PLACEHOLDER,
        c = a.j();
    AJ() ? (c && (c.placeholder = b), a.b = b) : DJ(a) || (c && (c.value = ""), a.b = b, a.h());
    c && yo(c, "label", a.b);
    this.h = B("url-err-msg", this.j());
    E(this.h, DATA.Messages.ENTER_VALID_URL);
    V(this.h, !1);
    G(this.b.j(), "input", this.w,
        !1, this);
    G(this.c, "action", this.C, !1, this);
    G(this.g, "action", this.K, !1, this)
};
tK.prototype.C = function() {
    EJ(this.b);
    this.b.j().focus();
    this.g.oa(!1);
    this.c.setVisible(!1);
    V(this.h, !1)
};
tK.prototype.w = function() {
    var a = yc(this.b.Y());
    this.g.oa(!!a);
    this.c.setVisible(!!this.b.Y());
    a = a && !Mu(a);
    V(this.h, a)
};
tK.prototype.K = function() {
    var a = yc(this.b.Y());
    if (Mu(a)) {
        var b = this.m.a,
            c = this.m.b;
        var d = n.location.href;
        var e = d.indexOf("#");
        d = 0 > e ? d : d.substr(0, e);
        d = d.replace("/m/translate", "/translate");
        d = Cj(d, "sl", b ? b : "auto", "tl", c, "u", escape(a));
        be(d, n, dc("webtrans"))
    }
};
var zK = function(a) {
    var b = a.ck,
        c = a.jk,
        d = a.pk,
        e = a.qk,
        f = a.xk,
        g = a.yk,
        k = a.Bk,
        l = a.Ck,
        m = a.Ra,
        q = a.Dk,
        r = a.Fk,
        u = a.Gk,
        z = a.Ik,
        O = a.Jk,
        W = a.bm,
        Ja = a.fm,
        S = a.Qa,
        Ia = a.Em,
        Hd = a.Gm,
        Xj = a.ln,
        Wc = a.nn,
        bi = a.on,
        Ae = a.pn,
        oM = a.xn,
        pM = a.Jn,
        qM = a.Xn,
        rM = a.Eo,
        sM = N,
        Vs;
    a.Ak ? Vs = N("<div class='tlid-survey survey-container hidden'><div class='tlid-before-survey'><div class='tlid-dismiss-survey dismiss-button'></div><div class='title'>" + P(S.HAPPINESS_SURVEY_TITLE) + "</div><div class='tlid-survey-contents survey-contents'></div><div class='goog-logo-container'><div class='goog-logo'></div></div></div><div class='tlid-after-survey' style='display: none'><div class='title'>" +
        P(S.HAPPINESS_SURVEY_THANKS) + "</div><div class='after-message'><div>" + P(S.HAPPINESS_SURVEY_AFTER) + "</div><div class='more-feedback-link'><a href='javascript:void(0);' class='tlid-more-feedback'>" + P(S.HAPPINESS_SURVEY_MORE_FEEDBACK) + "</a></div></div></div></div>") : Vs = "";
    a = Vs;
    var Pk;
    l ? Pk = N('<div class="tlid-notification-container notification-container"><div class="notification-header"><div class="tlid-dismiss-button dismiss-button button" aria-label="' + Q(S.HISTORY_REMOVAL_NOTIFICATION_CLOSE_BUTTON) +
        '" role="button" tabindex=\'0\'></div><div class="history-icon"></div><div class="tlid-notification-title title">' + P(Ja ? S.HISTORY_REMOVAL_NOTIFICATION_CHINA_TITLE : S.HISTORY_REMOVAL_NOTIFICATION_TITLE) + '</div></div><div class="tlid-history-notification-body notification-body" kind="html">' + P(Ja ? S.HISTORY_REMOVAL_NOTIFICATION_CHINA_BODY : "") + "</div><div class=\"notification-footer\"><div class=\"acknowledge-button button\"><div class=\"tlid-acknowledge-button-overlay acknowledge-button-overlay\" role='button' tabindex='0'><div class='text'>" +
        P(S.HISTORY_REMOVAL_NOTIFICATION_ACK_BUTTON) + "</div></div></div></div></div>") : Pk = "";
    l = a + Pk + "<div class='frame'>";
    Ja = N;
    Pk = "<div class='page tlid-homepage homepage translate-text'>" + N("<div class='input-button-container'><div class='tlid-input-button-container focus-wrapper' role='tablist' tabindex='0'>" + uK({
        identifier: "tlid-input-button-text",
        Qi: "text-icon",
        label: S.INPUT_METHOD_TEXT
    }) + uK({
        identifier: "tlid-input-button-docs",
        Qi: "documents-icon",
        label: S.INPUT_METHOD_DOCUMENTS
    }) + "</div></div>") + (u ? N("<span class='tlid-brain-logos-container'><span class='tlid-no-brain-logo no-brain-logo brain-container'></span><span class='tlid-brain-logo brain-logo brain-container'></span></span>") :
        "");
    var Ws;
    k ? Ws = N('<div class="promo-notification-wrapper"><div class=\'' + Q("tlid-magnet-promo") + " promo-notification'>" + P("Google Translate is hiring!") + " <span class='tlid-promo-notification-link'><a href='" + Q(Un("http://go/joinTranslate")) + "' target='_blank'>" + P("go/joinTranslate") + "</a></span></div></div>") : Ws = "";
    f = Pk + Ws + (f ? N("<div class='app-download-bar'><div class='tlid-app-download-bar focus-wrapper' tabindex=\"0\"><div class=\"prompt-text\">\u70b9\u51fb\u56fe\u6807\u4e0b\u8f7d App</div>" +
        P(DI({
            pe: "Android",
            yg: "android",
            identifier: "tlid-android-download"
        })) + P(DI({
            pe: "iOS",
            yg: "ios",
            identifier: "tlid-ios-download"
        })) + "</div></div>") : "") + "<div class='homepage-content-wrap'><div class='tlid-source-target main-header'><div class='source-target-row'>";
    k = N;
    d = '<div class="tlid-input input"><div class="tlid-language-bar ls-wrap"><div class="sl-wrap"><div class="sl-sugg"></div><div class="sugg-fade"></div><div class="sl-more tlid-open-source-language-list" aria-label="' + Q(S.MORE) + '" role="button" tabindex="0"></div></div>' +
        vK({
            className: "sl",
            identifier: "source",
            Si: pM,
            selected: d
        }) + '<div class="swap-wrap"><div class="swap jfk-button-narrow jfk-button-standard" aria-label="' + Q(S.TOOLTIP_SWAP_LANGUAGES) + '" data-tooltip="' + Q(S.TOOLTIP_SWAP_LANGUAGES) + '"><div class="jfk-button-img"></div></div></div><div class="tl-wrap"><div class="tl-sugg"></div><div class="sugg-fade"></div><div class="tl-more tlid-open-target-language-list" aria-label="' + Q(S.MORE) + '" role="button" tabindex="0"></div></div>' + vK({
            className: "tl",
            identifier: "target",
            Si: qM,
            selected: e
        }) + '</div><div class="source-wrap">';
    Wc = N('<div class="input-full-height-wrapper tlid-input-full-height-wrapper"><div class="source-input"><div id="input-wrap" class="tlid-input-area input-area' + (Wc ? "" : " less-padding") + '"><textarea id="source" class="orig tlid-source-text-input" rows="1" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off"></textarea><div class="text-dummy"></div><div id=gt-src-is style="display:none" class="gt-is-mobile gt-is"><div id=gt-src-is-list class=gt-is-ctr></div></div></div><div class="source-header"><div class="clear-wrap"><div class="clear jfk-button-flat tlid-clear-source-text" aria-label="' +
        Q(S.CLEAR_TEXT) + '" data-tooltip="' + Q(S.CLEAR_TEXT) + '"><div class="jfk-button-img"></div></div></div>' + (Wc ? '<div class="go-wrap"><div class="go-button" aria-label="' + Q(S.TRANSLATE) + '" data-tooltip="' + Q(S.TRANSLATE) + '"><div class="go jfk-button-action"><div class="jfk-button-img"></div></div></div></div>' : "") + "</div>" + wK({
            containerId: "tlid-source-transliteration-container",
            Qa: S,
            qj: "source-transliteration-container"
        }) + '<div id="spelling-correction" class="tlid-spelling-correction spelling-correction"></div><div class="source-footer-wrap source-or-target-footer"><div class="source-input-tools" id="gt-input-tool"></div><div class="character-count tlid-character-count"><div class="cc-ctr"></div><div class="cc-msg"></div></div><div class="source-footer"><div class="speech-wrap source-or-target-footer-button left-positioned"><span class="speech-border"></span></div>' +
        xK({
            jf: ["src-tts", "left-positioned"],
            Qa: S
        }) + "</div></div></div></div>");
    Wc = k(d + Wc + "</div>" + (O ? N('<div class="url-input-wrap" style="display:none"><input id="url-input" class="url-orig" rows="1" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off"><div class="url-clear-wrap"><div class="clear jfk-button-flat"><div class="jfk-button-img"></div></div></div><div class="url-go-wrap"><div class="url-go-button"><div class="go jfk-button-action"><div class="jfk-button-img"></div></div></div></div><div class="url-err-msg"></div></div>') :
            "") + N('<div id="gt-ovfl" style="display: none;" class="snck ovfl"><div id="gt-ovfl-ctr" class="ovfl-ctr"><span id="gt-ovfl-msg" class="snck-msg" role="alert" aria-live="alert"></span><span id="gt-ovfl-xlt" class="ovfl-xlt" role="button">' + P(S.TRANSLATE_MORE) + "</span></div></div>") + N('<div id="gt-ntfcn" style="display: none;" class="snck ntfcn"><div id="gt-ntfcn-ctr" class="ntfcn-ctr"><span id="gt-ntfcn-msg" class="snck-msg" role="alert" aria-live="alert"></span></div></div>') + N('<div id="gt-cmty" style="display: none;" class="snck cmty"><div id="gt-cmty-ctr" class="cmty-ctr"><span id="gt-cmty-msg" class="snck-msg" role="alert" aria-live="alert"></span><span id="gt-cmty-btn" class="cmty-btn" role="button"></span></div></div>') +
        "</div>");
    Wc = f + Wc;
    m = N('<div class="tlid-results-container results-container">' + (u ? '<div class="tlid-prod-translation prod-translation translation"></div>' : "") + (z ? '<div class="error-placeholder placeholder"><span class="tlid-result-error"></span><span class="tlid-result-container-error-button translation-error-button">' + P(S.TRY_AGAIN) + "</span></div>" : '<span class="tlid-result-error error-placeholder placeholder"></span>') + '<span class="empty-placeholder placeholder">' + P(S.TRANSLATION) + '</span><span class="translating-placeholder placeholder">' +
        P(S.TRANS_IN_PROGRESS) + '</span><div class="gendered-translations-header">' + P(S.GENDER_SPECIFIC_TRANSLATIONS_LABEL) + ' <a class="gendered-translations-learn-more" href="https://support.google.com/translate?p=gendered_translations&hl=' + Qn(m) + '" target="_blank">' + P(S.LEARN_MORE) + "</a></div></div>");
    m = Wc + m + "</div><div class='tlid-select-file-page-container'></div></div>";
    z = N("<div class='tlid-result-view cllist'>" + (z ? "<div class='tlid-translation-error translation-error-box' style='display: none'><span class=\"tlid-translation-error-message translation-error\"></span><span class=\"tlid-result-view-error-button translation-error-button\">" +
        P(S.TRY_AGAIN) + "</span></div>" : "<div class='tlid-translation-error tlid-translation-error-message translation-error' style='display: none'></div>") + "<div class='cp-promo-wrapper'></div><div class='gt-lc gt-lc-mobile' style='display: none'></div></div>");
    z = m + z + "<div class='feedback-link'><a href='javascript:void(0);' class='tlid-send-feedback-link'>" + P(S.SEND_FEEDBACK) + "</a></div></div>";
    m = N;
    c = '<div class="gp-footer">' + N('<div class="ft-icon-row"><div class="ft-icon-ctr"><a class="ft-link" href="javascript:void(0);" onclick="_e(event, \'' +
        Q(eo(W)) + "')\">" + yK({
            Rf: "ft-icon-img-hst",
            caption: S.HISTORY_SECTION_TITLE
        }) + "</a></div>" + (q ? '<div class="ft-icon-ctr"><a class="ft-link" href="javascript:void(0);" onclick="_e(event, \'' + Q(eo(oM)) + "')\">" + yK({
            Rf: "ft-icon-img-svd",
            caption: S.SAVED_SECTION_TITLE
        }) + "</a></div>" : "") + (g ? '<div class="ft-icon-ctr tlid-community-button">' + (r ? '<a class="ft-link" href="javascript:void(0);" onclick="_e(event, \'' + Q(eo(c)) + "')\">" : '<a class="ft-link" href="/community?source=mfooter">') + yK({
            Rf: "ft-icon-img-cmn",
            caption: S.FOOTER_COMMUNITY
        }) + "</a></div>" : "") + (O ? '<div class="ft-icon-ctr"><a class="ft-link" href="javascript:void(0);" onclick="_e(event, \'' + Q(eo(rM)) + "')\">" + yK({
            Rf: "ft-icon-img-web",
            caption: S.FOOTER_WEBSITES
        }) + "</a></div>" : "") + "</div>");
    var Xs;
    bi ? Xs = N('<div class="ad-panel gsa-promo"><div><span class="gsa-icon-animated"></span></div><div class="ad-panel-title">' + P(S.SEARCH_HANDS_FREE) + '</div><div class="ad-panel-subtitle">' + P(S.GSA_PURE_AD_TEXT) + '</div><div class="ad-panel-buttons"><span class="tlid-dismiss-promo dismiss-promo">' +
        P(Ia) + '</span><span class="tlid-accept-promo accept-promo">' + P(Hd) + "</span></div></div>") : Xs = "";
    bi = c + Xs;
    var Ys;
    Xj ? Ys = N('<div class="ad-panel at-promo"><div><span class="translate-icon"></span></div><div class="ad-panel-title">' + P(b) + '</div><div class="ad-panel-buttons"><span class="tlid-dismiss-promo dismiss-promo">' + P(Ia) + '</span><span class="tlid-accept-promo accept-promo">' + P(Hd) + "</span></div></div>") : Ys = "";
    b = m(bi + Ys + "</div>");
    b = Ja(z + b + "</div>");
    b = l + b + N("<div class='page tlid-history-page history-page' tabindex='0' aria-label='" +
        Q(S.HISTORY_SECTION_TITLE) + "'><div class='outer-wrap'><div class=\"tlid-translation-history-container\"></div></div></div>");
    r = N(r ? "<div class='page tlid-instant-page instant-page' tabindex='0' aria-label='" + Q(S.COMMUNITY_INSTANT_TITLE) + "'><div class='outer-wrap'><div class=\"tlid-community-instant-container\"></div></div></div>" : "");
    Ae = b + r + (Ae ? "<div class='page tlid-phrasebook-page phrasebook-page' tabindex='0' aria-label='" + Q(S.SAVED_SECTION_TITLE) + "'><div class='tlid-phrasebook-outer-wrap outer-wrap'></div></div>" :
        "");
    S = N("<div class='page tlid-language-picker-page language-picker-page'><div class='language-picker-wrapper'>" + N('<div class="tlid-language-list-toolbar language-list-toolbar"><div class="tlid-language-list-back-button language-list-back-button" aria-label="' + Q(S.CLOSE) + '"><div class="backbutton-image language-picker-toolbar-image"></div><div class="clear-image-black language-picker-toolbar-image"></div></div><div class="tlid-language-list-search-button language-list-search-button"><div class="tlid-language-list-label language-list-label"></div><div class="searchbutton-image language-picker-toolbar-image"></div></div></div>') +
        "<div class='outer-wrap'></div></div></div>");
    S = Ae + S;
    Ae = N("<div class='toast-container'><div class='toast " + Q("tlid-toast") + "' style='display: none'><div class='tlid-toast-message message'></div><div class='tlid-toast-action toast-action'><a target='_blank' class='tlid-toast-action-link action-link'><span class='tlid-toast-action-text'></span></a></div></div></div>");
    return sM(S + Ae + "</div>")
};
zK.a = "trans.mobile.widget.main";
var uK = function(a) {
        var b = a.Qi,
            c = a.label;
        return N("<div class='tlid-input-button input-button header-button " + Q(a.identifier) + " " + Q(b) + "' role='tab' tabindex=\"-1\"><div class='text'>" + P(c) + "</div></div>")
    },
    AK = function(a) {
        var b = a.Ra,
            c = a.Qa;
        return N("<div class='select-file-page tlid-file-selector loading'><form method='post' action='" + Q(Un(a.Pk)) + "'><input type='hidden' name='hl' value='" + Q(b) + "' class='tlid-hl-input'><input type='hidden' name='ie' value='UTF-8' class='tlid-ie-input'><input type='hidden' name='js' value='y' class='tlid-js-input'><input type='hidden' name='prev' value='_t' class='tlid-prev-input'><input type='hidden' name='sl' class='tlid-sl-input'><input type='hidden' name='tl' class='tlid-tl-input'><div class='tlid-select-file-section select-file-section'><div class='choose-document-prompt'>" +
            P(c.CHOOSE_A_DOCUMENT) + "</div><div class='upload-filetypes-prompt'>" + P(c.UPLOAD_FILETYPES) + "</div><input type='file' name='file' id='tlid-file-input' class='file-input tlid-file-input'><label for='tlid-file-input' class='tlid-select-file-button button'>" + P(c.BROWSE_YOUR_COMPUTER) + "</label></div><div class='tlid-file-selected-section file-selected-section'><div class='file-holder'><div class='file-holder-icon'></div><div class='file-info'><div class='tlid-selected-file-label file-label'></div><div class='tlid-selected-file-size file-size'>&nbsp;</div></div><div class='selected-and-cancel'><div class='tlid-cancel-selected-file-button cancel-file'></div></div></div><div class='button-container'><input type='submit' class='tlid-translate-doc-button button' value='" +
            Q(c.TRANSLATE) + "'></div></div><div class='loading-or-translating-file-section'><div class='mspin-googblue-medium'><div><div></div></div></div><div class='translating-file-caption'>" + P(c.TRANS_IN_PROGRESS) + "</div></div></form></div>")
    };
AK.a = "trans.mobile.widget.selectFilePage";
var yK = function(a) {
        var b = a.Rf;
        a = a.caption;
        return N('<div class="footer-icon-container ' + Q(b) + '"><div class="ft-icon-img-ctr"><div class="ft-icon-oval" id="' + Q(b) + '"></div><div class="ft-icon-notification"></div></div><div class="ft-icon-txt">' + P(a) + "</div></div>")
    },
    wK = function(a) {
        var b = a.Qa,
            c = a.qj;
        return N("<div class='" + Q(a.containerId) + " " + Q(c) + " transliteration-container'><div class='tlid-transliteration-content transliteration-content'></div><div class='tlid-show-more-link truncate-link' style='display:none'>" +
            P(b.SHOW_MORE) + "</div><div class='tlid-show-less-link truncate-link' style='display:none'>" + P(b.SHOW_LESS) + "</div></div>")
    },
    xK = function(a) {
        var b = a.Qa,
            c = "<div class='";
        a = a.jf;
        for (var d = a.length, e = 0; e < d; e++) c += Q(a[e]) + " ";
        c += "ttsbutton jfk-button-flat source-or-target-footer-button' aria-label='" + Q(b.LISTEN) + "' data-tooltip='" + Q(b.LISTEN) + "'><div class='jfk-button-img'></div></div>";
        return N(c)
    },
    vK = function(a) {
        var b = a.className,
            c = a.identifier,
            d = a.Si;
        a = a.selected;
        b = '<div class="' + Q(b) + '-selector lang_list"><div class="lang-btn"><a class="ls-select new-ls-select ' +
            Q(b) + "-button tlid-open-small-" + Q(c) + '-language-list"';
        c = "";
        for (var e = d.length, f = 0; f < e; f++) {
            var g = d[f];
            c += Hn(g.Code, a) ? "" + g.Name : ""
        }
        b += ' aria-label="' + Q(c) + '" tabindex="0">' + P(c) + "</a></div></div>";
        return N(b)
    },
    BK = function(a) {
        var b = a.Qa;
        a = a.Gn;
        return N('<div class="tlid-gender-promo gender-promo"><div class="gender-promo-graphic"></div><div class="gender-promo-content"><div class="gender-promo-pre-title">' + P(b.NEW_FEATURE) + '</div><div class="gender-promo-title">' + P(b.GENDER_SPECIFIC_TRANSLATIONS_PROMO_TITLE) +
            '</div><span class="gender-promo-message gender-promo-message-short-phrase">' + P(b.GENDER_SPECIFIC_TRANSLATIONS_PROMO_TEXT) + '</span><span class="gender-promo-message gender-promo-message-single-word">' + P(b.GENDER_SPECIFIC_TRANSLATIONS_PROMO_TEXT_SINGLE_WORD) + "</span>" + (a ? '<a class="gender-promo-learn-more" target="_blank" href="https://www.blog.google/products/translate/reducing-gender-bias-google-translate/">' + P(b.LEARN_MORE) + "</a>" : "") + "</div><div class='tlid-gender-promo-dismiss-button gender-promo-dismiss-button'></div></div>")
    };
BK.a = "trans.mobile.widget.genderPromo";
var CK = function(a) {
    var b = a.Gg,
        c = a.Fg,
        d = a.Dm,
        e = a.Fm,
        f = a.Qa,
        g = N,
        k;
    a.Mc ? k = N('<div class="starbutton jfk-button-flat" aria-label="' + Q(e) + '" data-tooltip="' + Q(e) + '"><div class="jfk-button-img"></div></div>') : k = "";
    return g('<div class=\'tlid-result result-dict-wrapper\'><div class="result tlid-copy-target"><div class="result-header">' + k + '</div><div class="text-wrap tlid-copy-target"><div class="result-shield-container tlid-copy-target" tabindex="0"><span class="tlid-translation translation"></span><span class="tlid-translation-gender-indicator translation-gender-indicator"></span><span class="tlid-trans-verified-button trans-verified-button" style="display:none" role="button"></span></div></div>' + wK({
            containerId: "tlid-result-transliteration-container",
            Qa: f,
            qj: "result-transliteration-container"
        }) + '<div class="result-footer source-or-target-footer tlid-copy-target"><div class="tlid-share-translation-button share-translation-button jfk-button-flat source-or-target-footer-button right-positioned" aria-label=\'' + Q(f.SHARE_TRANSLATION) + "' data-tooltip=\"" + Q(f.SHARE_TRANSLATION) + '"><div class="jfk-button-img"></div></div><div class="tlid-suggest-edit-button suggest-edit-button jfk-button-flat source-or-target-footer-button right-positioned" aria-label=\'' +
        Q(f.SUGGEST_AN_EDIT) + "' data-tooltip=\"" + Q(f.SUGGEST_AN_EDIT) + '"><div class="jfk-button-img"></div></div><div class="more-wrapper"><div class="morebutton jfk-button-flat source-or-target-footer-button tlid-result-footer-more-button right-positioned" data-tooltip="' + Q(f.MORE) + '"><div class="jfk-button-img"></div></div><div class="moremenu"></div></div>' + (c ? '<div class="tlid-copy-translation-button copybutton jfk-button-flat source-or-target-footer-button right-positioned" aria-label=\'' + Q(d) + "' data-tooltip=\"" +
            Q(d) + '"><div class="jfk-button-img"></div></div>' : "") + xK({
            jf: ["res-tts", "ttsbutton-res", "left-positioned"],
            Qa: f
        }) + (b ? '<div class="result-search"><div class="result-search-icon"></div></div>' : "") + '</div></div><div class="gt-edit" style="display:none"><div class="gt-clear" tabindex="0"><div class="jfk-button-img"></div></div><textarea class="contribute-target"></textarea></div></div>')
};
CK.a = "trans.mobile.widget.result";
var DK = function(a) {
    var b = a.wn;
    return N("<span class='tlid-translation-page-link translation-page-link'><a href='" + Q(Un(a.vn)) + "' target='_blank'>" + P(b) + "<span class='open-translated-page-icon'></span></a></span>")
};
DK.a = "trans.mobile.widget.resultHyperlink";
var wB = function(a) {
    var b = a.qe,
        c = a.vm;
    a = a.wm;
    return N('<div class="language-list-search-box"><div class="back-image-black language-picker-toolbar-image"></div><div class="clear-image-black language-picker-toolbar-image"></div><div class="language_list_search_box_container"><input id="' + Q(c) + '-search-box" type="text" oninput="_e(event, \'' + Q(eo(b)) + "', '" + Q(eo(c)) + '\')" placeholder="' + Q(a) + '"></div></div>')
};
wB.a = "trans.mobile.widget.languageListSearchBox";
var nB = function(a) {
    var b = a.id,
        c = a.qe,
        d = a.name;
    a = a.code;
    return N('<div class="language_list_item_wrapper language_list_item_wrapper-' + Q(a) + " " + (Hn(a, "auto") ? " detect_language " : "") + '" onclick="_e(event, \'' + Q(eo(c)) + "', '" + Q(eo(b)) + '\')" role="button" tabindex="0"><div class="language_list_item_icon ' + Q(b) + "_checkmark\"></div><div class='" + Q(Hn(a, "auto") ? "language_list_item" : "language_list_item language_list_item_language_name") + "'>" + P(d) + "</div>" + (Hn(a, "auto") ? '<div class="detect_language_row_icon"></div>' :
        "") + "</div>")
};
nB.a = "trans.mobile.widget.languageListItem";
var KB = function(a) {
    return N('<div class="language_list_section"><div class="language_list_section_header">' + P(a.text) + "</div></div>")
};
KB.a = "trans.mobile.widget.languageListSection";
var EK = function(a) {
    var b = a.uo,
        c = a.Qa,
        d = a.Hk,
        e = a.Kk,
        f = a.Co;
    a = a.dm;
    return N('<div class="share-module"><div class="tlid-share-panel share-panel" aria-hidden="true" tabindex="0"><div class="share-panel-wrap"><h3>' + P(c.SHARE_MODULE_TITLE) + "</h3>" + (In(e) && In(f) ? '<div id="not_installed"><span class="warning-icon"></span><span class="warning-msg">' + P(f) + "</span></div>" : "") + "<ul>" + (d ? '<li><a href="sms:' + (a ? "&body=" + Q(b) : "?body=" + Qn(b)) + '" class="sms"><span class="share-link-icon"></span><span> ' + P(c.SHARE_MODULE_SMS) +
        " </span></a></li>" : "") + '<li><a href="mailto:?body=' + Qn(b) + '" target="_top" class="email"><span class="share-link-icon"></span><span> ' + P(c.SHARE_MODULE_EMAIL) + " </span></a></li>" + (In(e) && In(f) ? '<li><a href="whatsapp://send?text=' + Qn(b) + '" class="whatsapp"><span class="share-link-icon"></span><span> WhatsApp </span></a></li>' : "") + '<li><a href="https://twitter.com/intent/tweet?text=' + Qn(b) + '" target="_blank" class="twitter"><span class="share-link-icon"></span><span> Twitter </span></a></li></ul></div></div></div>')
};
EK.a = "trans.mobile.widget.shareModule";
var FK = function(a) {
    var b = a.Tn,
        c = a.Zn,
        d = a.Un,
        e = a.pe,
        f = a.An;
    return N('<div class="gsa-interstitial"><div class="clear-wrap"><div class="clear jfk-button-flat" aria-label="' + Q(a.Qa.CLEAR_TEXT) + '"><div class="jfk-button-img"></div></div></div><div><span class="gsa-icon"></span></div><div class="gsa-int-text">' + P(b) + (c ? "<b>" + P(c) + "</b>" : "") + P(d) + '</div><div class="gsa-int-button">' + P(e) + '</div><div class="gsa-int-second-choice">' + P(f) + "</div></div>")
};
FK.a = "trans.mobile.widget.iGSAInterstitial";
var GK = function(a) {
    var b = a.message;
    return N("<span class='survey-option survey-option-" + Q(a.an) + "'><span class='survey-option-text'>" + P(b) + "</span></span>")
};
GK.a = "trans.mobile.widget.surveyOption";
var HK = function(a) {
    return N("<span class='ink-container " + Q(a.ik) + "'></span>")
};
HK.a = "trans.mobile.widget.inkContainer";
var IK = function() {
    var a = DATA.Messages.CLOSE_SEARCH,
        b = DATA.Messages.CLEAR_TEXT,
        c = DATA.Messages.RECENT_LANGUAGES,
        d = DATA.Messages.ALL_LANGUAGES,
        e = DATA.Messages.CHECKED_LANGUAGE;
    this.o = DATA.Messages.SEARCH_LANGUAGES;
    this.b = a;
    this.a = b;
    this.h = c;
    this.c = d;
    this.g = e
};
var PK = function(a, b, c, d, e, f) {
    var g = this;
    J.call(this);
    this.c = e;
    this.V = f;
    this.v = a;
    this.fb = b;
    this.R = C("tlid-open-small-source-language-list", this.v);
    this.wb = C("tlid-open-small-target-language-list", this.v);
    a = new IK;
    this.b = new EF("sl_list", a);
    this.g = new EF("tl_list", a);
    this.b.C = this.R;
    this.b.K(Nb(DATA.SourceLanguageCodeNameList));
    this.g.C = this.wb;
    this.g.K(Nb(DATA.TargetLanguageCodeNameList));
    this.a = new Mv("", !0);
    this.a.ba(B("orig", this.v));
    Ur(this.a, "orig-ios", Le);
    mr() || (this.a.j().placeholder = DATA.Messages.ENTER_TEXT);
    this.Nc = new jt("");
    a = C("swap", this.v);
    this.Nc.ba(a);
    mr() && this.Nc.wd(Fe ? DATA.Messages.TOOLTIP_SWAP_LANGUAGES_SHORTCUT_MAC : DATA.Messages.TOOLTIP_SWAP_LANGUAGES_SHORTCUT_NOTMAC);
    HA(this.V, {
        Nc: this.Nc
    });
    bt(a, 1);
    JK(this);
    this.Ca = gb(B("source-header", this.v));
    KK(this, c);
    this.C = null;
    c = B("go-button", this.v);
    null != c && (this.C = new jt(""), this.C.ba(c), bt(c, 2), G(this.C.j(), "mousedown", function() {
        g.dispatchEvent("translateButtonClicked")
    }, !1));
    this.K = new jt("");
    c = C("clear", this.v);
    this.K.ba(c);
    this.K.setVisible(!1);
    bt(c, 2);
    this.L = new jt("", void 0, 4);
    this.L.Oa(16, !0);
    this.L.Oa(1, !0);
    c = C("src-tts", this.v);
    this.L.ba(c);
    bt(c, 2);
    this.o = new Ru(this.L, "&client=webapp&prev=input", 1, !0, !0, DATA.Messages.LISTEN, DATA.Messages.VOICE_OUTPUT_UNAVAILABLE);
    this.F = K.M();
    this.xb = new eH;
    this.W = new gH;
    this.W.ba(B("gt-is-mobile", this.v));
    this.W.setVisible(!1);
    this.G = null;
    mr() && (this.G = new hz(B("source-input-tools", this.v), B("orig", this.v), B("source-input-tools", this.v), DATA.DisplayLanguage, DATA.InChina), G(this.G, "change", function() {
            LK(g)
        },
        !1));
    this.O = new oD(this.xb, this.W, {
        gm: this.a,
        En: null,
        hm: this.G,
        ea: this.c,
        On: new dH,
        vo: new CE("webapp"),
        client: "webapp",
        Ra: DATA.DisplayLanguage,
        In: !DATA.DisableOtf,
        zm: 4,
        qo: !0,
        ek: !1,
        Qk: "",
        lm: !1,
        im: !1,
        gr: DATA.Messages.QUICK_TRANSLATION,
        Ln: DATA.Messages.DID_YOU_MEAN,
        Rq: DATA.Messages.LANGUAGE_CORRECTION,
        lk: new ow
    });
    this.na = new mK(gb(B("tlid-source-transliteration-container", this.v)), 1);
    this.nb = Km.M();
    this.w = !1;
    this.Z = "";
    this.h = new RG(this.a, this.V, DATA.TopLevelDomain.substr(DATA.TopLevelDomain.lastIndexOf(".") +
        1), DATA.DisplayLanguage, !0, DATA.Messages.VOICE_INPUT_UNAVAILABLE, DATA.Messages.VOICE_INPUT_UNAVAILABLE_GENERIC, !0, DATA.Messages.CHOOSE_LANGUAGE_TO_ENABLE_VOICE_INPUT);
    this.m = gb(B("speech-wrap", this.v));
    MK(this);
    DATA.UrlTranslation && (this.X = new tK(this.c), c = B("url-input-wrap", this.v), this.X.ba(c), this.X.init());
    NK(this);
    OK(this)
};
t(PK, J);
var JK = function(a) {
        var b = new CA(gb(B("sl-sugg", a.v)), p(yI, a), 3, !0, !0, !0),
            c = new CA(gb(B("tl-sugg", a.v)), p(zI, a), 3, !1, !1, !0);
        HA(a.V, {
            mj: b,
            vj: c
        });
        bw(a.c);
        void 0 !== DATA.RecentLanguages && void 0 !== DATA.RecentLanguages.recent_sl && $v(a.c);
        void 0 !== DATA.RecentLanguages && void 0 !== DATA.RecentLanguages.recent_tl && aw(a.c);
        Uv(a.c);
        Vv(a.c);
        a = b.a;
        c = c.a;
        for (b = 0; b < a.length; b++) G(a[b].j(), "click", function(d) {
            QK(d)
        }, !1);
        for (a = 0; a < c.length; a++) G(c[a].j(), "click", function(d) {
            QK(d)
        }, !1)
    },
    QK = function(a) {
        var b = a.target;
        b.blur();
        var c = B("ink-container", b);
        c || (c = No(HK, {
            ik: "language-selector-ripple"
        }), b.insertBefore(c, b.firstChild));
        T(c, "ink-ripple-animation");
        if (!c.offsetHeight && !c.offsetWidth) {
            var d = Math.max(b.offsetHeight, b.offsetWidth);
            c.style.height = d + "px";
            c.style.width = d + "px"
        }
        b = b.getBoundingClientRect();
        d = a.clientX - (b.left + document.body.scrollLeft) - c.offsetWidth / 2;
        c.style.top = a.clientY - (b.top + document.body.scrollTop) - c.offsetHeight / 2 + "px";
        c.style.left = d + "px";
        R(c, "ink-ripple-animation")
    },
    MK = function(a) {
        if (yw && "webkitSpeechRecognition" in
            window) {
            a.h.init(a.m);
            var b = D("span", ["speech-border", "speech-background"]);
            lg(a.m, b, 1);
            RK(a)
        } else V(a.m, !1)
    },
    NK = function(a) {
        G(a.a, "change", function(b) {
            OK(a, b.changeType)
        }, !1, a);
        G(a.a.j(), "focus", a.N, !1, a);
        G(a.a.j(), "blur", a.N, !1, a);
        G(a.a.j(), "focus", p(a.Na, a, !1), !1, a);
        G(a.a.j(), "blur", p(a.Na, a, !0), !1, a);
        G(a.a.j(), "focus", a.F.c, !1, a.F);
        G(window, "resize", a.ia, !1, a);
        G(a.c, "srcEmphasizeUpdated", a.xa, !1, a);
        G(a.c, "tgtEmphasizeUpdated", a.$a, !1, a);
        G(a.c, "srcLanguageUpdated", a.Ta, !1, a);
        G(a.c, "detectSrcUpdated",
            a.ra, !1, a);
        G(a.K, "action", a.Ob, !1, a);
        a.h && (G(a.h, "start", a.Ml, !1, a), G(a.h, "speechStart", a.oo, !1, a), G(a.h, "end", a.Ll, !1, a), G(a.h, "userInteractionWhileDisabled", a.Vl, !1, a), G(a.o, "userInteractionWhileDisabled", a.po, !1, a));
        G(C("tlid-input-full-height-wrapper", a.v), "click", function(b) {
            var c = a.na;
            [c.c, c.a, c.h, c.g].includes(b.target) || Ig(document) === a.a.j() || LK(a)
        }, !1)
    },
    SK = {
        "small-font": 2
    };
PK.prototype.j = function() {
    return this.v
};
var TK = function(a) {
    var b = a.c.a;
    a.o.update(a.a.Y(), b, void 0, yI(b))
};
PK.prototype.N = function(a) {
    a = a ? "focus" == a.type : Ig(document) === this.a.j();
    var b = !!this.a.Y();
    this.K.setVisible(a || b);
    null != this.C && this.C.setVisible(a)
};
var LK = function(a) {
        a.a.j().focus()
    },
    UK = function(a) {
        var b = cp(a.Ca).a,
            c = Ro(mp(a.a.j())).bottom,
            d = $o(document).a;
        d > b - 10 && c > d || Fi(p(window.scrollTo, window, 0, b - 8), 100, a)
    },
    RK = function(a) {
        if (a.h) {
            var b = a.c.a;
            a = a.h;
            var c = yI(b);
            if (null != a.a) {
                a.Hb && a.a.stop();
                var d = a.V.get(b);
                a.a.lang = null != d ? d : "";
                null != d ? (a.G = d, a.b.oa(!0), V(a.h, !0)) : (v(null != a.m || null != a.L, "Cannot disable button without providing a tooltip explanation"), "auto" === b && null != a.C ? (b = a.b, b.b = a.C, b.oa(!1)) : null != a.m ? (b = a.b, c = a.Z.a(a.m, c), b.b = c, b.oa(!1)) :
                    (b = a.b, b.b = a.L, b.oa(!1)), a.na || V(a.h, !1))
            }
        }
    };
h = PK.prototype;
h.Ml = function() {
    this.w = !0;
    VK(this)
};
h.oo = function() {
    R(this.m, "speech-data")
};
h.Ll = function() {
    this.w = !1;
    T(this.m, "speech-data");
    VK(this);
    OK(this)
};
h.Vl = function() {
    this.dispatchEvent("userInteractionWithDisabledVoiceInput")
};
h.po = function() {
    this.dispatchEvent("userInteractionWithDisabledVoiceOutput")
};
var VK = function(a) {
    var b = "";
    a.w ? a.Z = Ov(a.a) : b = Ov(a.a) || a.Z;
    a.a.b(b);
    a.a.j().disabled = a.w;
    b = a.a;
    b.Cd = a.w ? MSG_SPEAK_NOW : DATA.Messages.ENTER_TEXT;
    b.j() && Iv(b);
    a.a.j().blur()
};
PK.prototype.Na = function(a) {
    for (var b = Qf("show-panel"), c = 0; c < b.length; c++) Fi(Ua(V, b[c], a), 100, this)
};
PK.prototype.Ob = function() {
    var a = this.F;
    L(a, M(a, 23));
    "" === this.a.Y() ? this.a.j().blur() : (this.a.b(""), LK(this));
    this.h && (this.h.c = "");
    this.o && this.o.stop();
    Sm(this.nb, "clearbtn", 1, "accumulate");
    this.dispatchEvent("inputCleared")
};
var OK = function(a, b) {
        a.ia();
        a.N();
        TK(a);
        "paste" === b && a.dispatchEvent("inputPasted")
    },
    WK = function(a) {
        var b = a.c.a;
        "auto" == b && (b = a.c.c);
        b && (b = jc(b) ? "rtl" : "ltr", To(a.a.j(), "direction", b), a = B("gt-hl-layer", a.v), null != a && To(a, "direction", b))
    };
PK.prototype.Ta = function() {
    var a = this.c.a;
    "auto" != a && KK(this, a);
    WK(this);
    RK(this);
    this.o.update(this.a.Y(), a, void 0, yI(a));
    null != this.G && kz(this.G, a)
};
PK.prototype.xa = function(a) {
    this.b.L = a.data
};
PK.prototype.$a = function(a) {
    this.g.L = a.data
};
PK.prototype.ra = function() {
    WK(this)
};
var KK = function(a, b) {
    var c = yI(b);
    a.b.V(c, b)
};
PK.prototype.update = function(a, b, c) {
    var d = this.na;
    if (void 0 === b) var e = "";
    else {
        e = [];
        if (b.bb(0))
            for (var f = 0; f < b.hc(); f++) {
                var g = b.bb(f);
                1 === d.b ? I(g, 3) && e.push(I(g, 3)) : 2 === d.b && I(g, 2) && e.push(I(g, 2))
            }
        e = e.join("")
    }
    nK(d, e);
    U(this.v, "has-transliteration", 0 !== this.na.a.textContent.length);
    d = I(Jq(b), 1);
    e = I(b, 2);
    this.o.update(c ? d : a, e, void 0, yI(e));
    "auto" == this.c.a && ((a = I(b, 2)) && "auto" != a ? (a = yI(a), a = source_language_detected.replace(/%\d\$s/g, a), E(this.R, a)) : E(this.R, yI("auto")))
};
PK.prototype.ia = function() {
    var a = this.a;
    a.lh = 0;
    Hv(a);
    a = B("text-dummy", this.v);
    var b = B("text-dummy", this.v);
    this.a.Y().endsWith("\n") ? E(b, this.a.Y() + "\n") : E(b, this.a.Y());
    Fg(a) ? (b = yp(a), a = (a.scrollHeight - b.top - b.bottom) / 32) : a = 1;
    U(this.fb, "small-font", a > SK["small-font"]);
    Hv(this.a)
};
var XK = function(a) {
    J.call(this);
    this.v = a;
    this.a = null;
    this.o = this.h = "";
    this.g = this.c = !1
};
ka(XK, J);
XK.prototype.w = function(a) {
    null != a && null != a.reset && (this.c = a.reset, this.h = a.sourceLanguageCode || "", this.o = a.targetLanguageCode || "");
    this.dispatchEvent("close_requested")
};
XK.prototype.m = function(a) {
    null != a && a.available && !this.g && (this.dispatchEvent("tasks_available"), this.g = !0)
};
XK.prototype.b = function() {
    return !0
};
var YK = function(a, b, c, d, e, f) {
    var g = Yu();
    sF.call(this, a, c, d, e, g);
    this.O = f;
    this.w = b
};
ka(YK, sF);
YK.prototype.m = function() {
    this.h.style.left = Math.round(this.coords[0]) + "px";
    this.h.style.bottom = Math.round(this.coords[1]) + "px"
};
YK.prototype.g = function() {
    (new vF(this.w, this.O)).play()
};
var ZK = function() {
    X.call(this);
    this.h = null
};
ka(ZK, X);
ZK.prototype.b = function() {
    return ""
};
ZK.prototype.setVisible = function(a, b) {
    var c = this,
        d = this.j();
    if (op(d) != a) {
        var e = B(this.b(), this.j());
        a ? (To(d, {
            opacity: 1
        }), To(e, {
            opacity: 0
        }), V(d, !0), (new YK(d, e, $K, aL, 225, 100)).play(), b && (this.h = window.setTimeout(function() {
            return c.setVisible(!1)
        }, b))) : ((new wF(d, 195)).play(), this.h && (window.clearTimeout(this.h), this.h = null))
    }
};
var $K = [0, -48],
    aL = [0, 0];
var bL = function() {
    ZK.call(this)
};
ka(bL, ZK);
bL.prototype.b = function() {
    return "ntfcn-ctr"
};
bL.prototype.Wc = function(a) {
    if (!a || "DIV" != a.tagName) return !1;
    a = B("ntfcn-ctr", a);
    return a && "DIV" == a.tagName ? (a = B("snck-msg", a)) && "SPAN" == a.tagName ? !0 : !1 : !1
};
bL.prototype.aa = function() {};
var cL = function() {};
ka(cL, Sr);
cL.prototype.Yc = function(a) {
    return a && "SPAN" == a.tagName ? !0 : !1
};
var dL = function(a, b, c, d) {
    ZK.call(this);
    this.m = a;
    this.c = b;
    this.R = c;
    this.N = d;
    this.W = new iv("######");
    this.V = new bG(DATA.Messages.CHARACTER_LIMIT);
    this.X = new bG(DATA.Messages.TRANSLATE_NEXT);
    this.g = "";
    this.w = null;
    this.C = new Km;
    this.C.c = "webapp";
    this.F = K.M()
};
ka(dL, ZK);
dL.prototype.b = function() {
    return "ovfl-ctr"
};
dL.prototype.Wc = function(a) {
    return a && "DIV" == a.tagName ? (a = B(this.b(), a)) && B("snck-msg", a) && B("ovfl-xlt", a) ? !0 : !1 : !1
};
dL.prototype.aa = function() {
    var a = B("ovfl-xlt", this.j());
    this.w = new us(null, new cL);
    this.w.ba(a);
    G(this.w, "action", this.K, !1, this)
};
dL.prototype.K = function() {
    var a = this.c.c;
    "" == a && (a = this.c.a);
    var b = this.g.length,
        c = Math.max(b - this.N, 0);
    um(this.F, b, c);
    Pm(this.C, "webapp", "xm", "1", {
        sl: this.c.a,
        tl: this.c.b,
        dl: a,
        hl: this.R,
        ql: b,
        ol: c
    });
    this.m.a.b(this.g);
    UK(this.m);
    var d = this.m.a,
        e = d.j();
    Fi(function() {
        e.focus();
        var f = d.Y().length;
        if (ew(e)) e.selectionStart = f, e.selectionEnd = f;
        else if (fw()) {
            f = iw(e, f);
            var g = e.createTextRange();
            g.collapse(!0);
            g.move("character", f);
            g.select()
        }
    }, 0)
};
var hL = function(a) {
        var b = DATA.DisplayLanguage;
        this.g = Km.M();
        this.F = K.M();
        this.b = a;
        this.h = eL[1];
        this.a = fL[1];
        this.o = C("tlid-promo-notification-link", this.b);
        this.c = b;
        gL(this)
    },
    iL = function(a, b) {
        b ? (wm(a.F, a.a), a.g.log("bbarshow", {
            hl: a.c,
            type: a.h
        })) : U(a.b, "hidden", !0)
    },
    gL = function(a) {
        G(a.o, "click", function() {
            iL(this, !1);
            xm(this.F, this.a);
            this.g.log("bbarlm", {
                hl: this.c,
                type: this.h
            })
        }, !1, a)
    },
    fL = {
        1: 20
    },
    eL = {
        1: "hiring"
    };
var jL = function(a, b) {
    this.a = a;
    this.F = b;
    a: {
        b = DATA.Messages.LEARN_MORE_ABOUT_THIS;
        var c = "",
            d = "";28 > a.length && (c = DATA.Messages.LEARN_MORE_ABOUT.indexOf("%1$s"), -1 != c && (b = DATA.Messages.LEARN_MORE_ABOUT.slice(0, c), d = DATA.Messages.LEARN_MORE_ABOUT.slice(c + 4, DATA.Messages.LEARN_MORE_ABOUT.length)), c = a);a = No(FK, {
            Tn: b,
            Zn: c,
            Un: d,
            pe: DATA.Messages.TRY_IT.toUpperCase(),
            An: DATA.Messages.SEARCH_IN_BROWSER,
            Qa: DATA.Messages
        });
        break a;
        throw Error("Missing render function for GSA interstitial type gsaIntGsaWeb");
    }
    this.v =
        a;
    a: {
        break a;
        throw Error("Missing Promotion for GSA interstitial type gsaIntGsaWeb");
    }
};
jL.prototype.show = function() {
    document.body.appendChild(this.v);
    kL("show");
    wm(this.F, 21);
    uI(p(this.h, this));
    var a = this.g;
    var b = this.c;
    G(B("gsa-int-button", this.v), "click", a, !1, this);
    G(B("gsa-int-second-choice", this.v), "click", b, !1, this);
    G(B("clear", this.v), "click", this.b, !1, this)
};
var lL = function(a, b) {
    mg(a.v);
    a.v = null;
    kL(b)
};
jL.prototype.h = function() {
    lL(this, "dismissbg")
};
jL.prototype.g = function() {
    xm(this.F, 21);
    tI();
    lL(this, "accept");
    Om(oI, "/translate/uc?ua=dismiss&uav=searchgsa");
    rI(this.a, 2)
};
jL.prototype.c = function() {
    xm(this.F, 22);
    tI();
    lL(this, "webapp");
    Om(oI, "/translate/uc?ua=dismiss&uav=gsaint");
    sI(this.a)
};
jL.prototype.b = function() {
    var a = this.F;
    L(a, vm(a, 74, 21));
    tI();
    lL(this, "dismiss")
};
var kL = function(a) {
    Pm(oI, "webapp", "gsaIntGsaWeb", a, void 0);
    Eh("gsa", "gsaIntGsaWeb:" + a, "", 1)
};
var nL = function(a) {
        this.a = a;
        this.b = (new Date).getTime();
        mL(this, 1)
    },
    mL = function(a, b) {
        Fi(function() {
            (new Date).getTime() - this.b > 500 * b + 200 ? this.a(!0) : 8 > b ? mL(this, b + 1) : this.a(!1)
        }, 500, a)
    };
var oL = function(a, b, c, d, e, f, g, k, l) {
    J.call(this);
    var m = this;
    this.qa = a;
    this.v = b;
    this.o = c;
    this.a = new PF(d, e, f, g);
    this.$a = k;
    this.b = null;
    this.wb = new GI(this.ia, 500, this);
    a = B("starbutton", this.j());
    null != a && (this.b = new rt, this.b.ba(a), bt(a, 2), G(this.b, "action", function() {
        m.wb.ri()
    }, !1, this), st(this.b, l || !1));
    this.c = K.M()
};
ka(oL, J);
oL.prototype.j = function() {
    return this.v
};
oL.prototype.Ce = function() {
    return this.a.ma()
};
var pL = function(a) {
    if (a.v.parentElement && a.v.parentElement.childNodes)
        for (var b = a.v.parentElement.childNodes, c = 0; c < b.length; c++)
            if (b[c] == a.v) return c;
    return -1
};
oL.prototype.Ya = function() {
    return this.a.Ya()
};
oL.prototype.ia = function() {
    if (!DATA.InChina) {
        var a = null != this.b && this.b.b ? "unst" : "st",
            b = new cn,
            c = {};
        b.g((c.op = "star", c.sl = this.a.Pa(), c.tl = this.Ce(), c.text = this.a.a, c.page = this.o, c));
        wI(a, oI, this.fb.bind(this), Ga, b.toString())
    }
};
oL.prototype.fb = function() {
    if (null != this.b) {
        var a = !(null != this.b && this.b.b);
        if (wG(this.$a, this.a, a ? 0 : 1))
            if (st(this.b, a), qI(a ? "star" : "unstar", this.qa, QF(this.a), this.a.ma(), this.a.a), "home" == this.o) {
                var b = this.c;
                a = M(b, a ? 67 : 180);
                var c = b.a.a;
                if (null != c) {
                    var d = new Tk;
                    c = A(d, 1, c || []); of (a, 83, c)
                }
                L(b, a)
            } else "history" == this.o ? (b = this.c, L(b, Hm(b, 64, pL(this), a))) : "saved" == this.o && (oI.log("sli=us", {}), b = this.c, L(b, Jm(b, 46)))
    }
};
var uL = function(a, b, c, d, e, f) {
    oL.call(this, "main", qL(f), "home", "", {}, "", "", b);
    var g = this;
    a.appendChild(this.j());
    this.V = rL();
    this.L = new jt("", void 0, 4);
    this.L.Oa(16, !0);
    a = C("res-tts", this.j());
    this.L.ba(a);
    bt(a, 2);
    this.K = new Ru(this.L, "&client=webapp", 2, !0, !0, DATA.Messages.LISTEN, DATA.Messages.VOICE_OUTPUT_UNAVAILABLE);
    G(this.K, "userInteractionWhileDisabled", this.Ta, !1, this);
    this.na = c;
    this.ra = d;
    this.O = null;
    DATA.InChina || (this.O = C("tlid-trans-verified-button", this.j()), Dh(this.O, function() {
        g.dispatchEvent("verifiedTranslationButtonClicked")
    }));
    this.G = this.w = null;
    sL(this);
    this.xa = e;
    this.N = new mK(gb(B("tlid-result-transliteration-container", this.j())), 2);
    this.C = new Cv("");
    this.C.ba(B("contribute-target", this.j()));
    this.h = null;
    this.Na = new CE("webapp");
    this.g = this.m = null;
    this.R = this.X = !1;
    this.nb = C("tlid-translation-gender-indicator", this.j());
    this.Z = new dA(tL(this), "trans", 14, "webapp", void 0, void 0, this.W.bind(this));
    new iH(tL(this), Array.from(Qf("tlid-copy-target", this.j())))
};
ka(uL, oL);
uL.prototype.T = function() {
    this.Z.Ia();
    mg(this.j());
    oL.prototype.T.call(this)
};
uL.prototype.Ca = function() {
    var a = this.a.Pa(),
        b = this.a.ma(),
        c = this.a.a.length,
        d = DATA.DisplayLanguage,
        e = tL(this);
    bA(e);
    e = pz(window).toString();
    e = cA(e);
    var f = "";
    try {
        document.execCommand("copy") ? (f = "success", zw && this.g ? nm(K.M(), this.g.Rc()) : nm(K.M()), this.dispatchEvent("translationCopied")) : (f = "failure", qm(K.M(), 157))
    } catch (g) {
        f = "error", qm(K.M(), 158)
    } finally {
        mg(e), Pm(oI, "webapp", "copy", f, {
            sl: a,
            tl: b,
            hl: d,
            ql: c
        })
    }
};
uL.prototype.Ta = function() {
    this.dispatchEvent("userInteractionWithDisabledVoiceOutput")
};
var vL = function(a, b, c) {
        Pm(oI, "webapp", a, b, c);
        Eh("gsa", a + ":" + b, "", 1)
    },
    sL = function(a) {
        wL(a);
        xL(a, "copybutton", a.Ca);
        xL(a, "tlid-share-translation-button", a.Ii);
        xL(a, "tlid-suggest-edit-button", a.Ki);
        if (a.V) {
            var b = B("result-search", a.j());
            G(b, "click", function() {
                var c = a.c;
                var d = M(c, 224);
                d = A(d, 52, "");
                L(c, d);
                vL("search" + DATA.CampaignTrackerId, "click", {
                    sl: a.a.Pa(),
                    tl: a.a.ma(),
                    hl: DATA.DisplayLanguage,
                    ql: a.a.a.length
                });
                c = a.Ya();
                switch (DATA.ActionAfterSearch) {
                    case 0:
                        (new jL(c, a.c)).show();
                        break;
                    case 2:
                        sI(c);
                        break;
                    case 3:
                        rI(c, 3);
                        break;
                    default:
                        throw Error("Invalid value for DATA.ActionAfterSearch");
                }
            }, !1, a)
        }
    },
    wL = function(a) {
        var b = C("moremenu", a.j());
        a.G = new mx;
        a.G.ba(b);
        b = C("morebutton", a.j());
        a.w = new Ex(null, a.G);
        a.w.ba(b);
        ks(a.w, DATA.Messages.MORE);
        Jx(a.w, new Po(-8, 8, 0, 8));
        G(b, "click", function() {
            var c = this.c;
            L(c, M(c, 265));
            vL("more", "click");
            this.w.Wa(!0)
        }, !1, a);
        bt(b, 2);
        b = new hx(DATA.Messages.SUGGEST_AN_EDIT);
        b.Ja();
        G(b, "action", a.Ki, !1, a);
        R(b.j(), "tlid-suggest-edit-menu-item");
        a.G.ib(b, !0);
        b = new hx(DATA.Messages.SHARE_TRANSLATION);
        b.Ja();
        G(b, "action", a.Ii, !1, a);
        R(b.j(), "tlid-share-translation-menu-item");
        a.G.ib(b, !0)
    },
    xL = function(a, b, c) {
        b = B(b, a.j());
        if (b) {
            var d = new jt("");
            d.ba(b);
            G(d, "action", c, !1, a);
            bt(b, 2)
        }
    },
    yL = function(a) {
        var b = new us("Clear text", new ut("clear-button"));
        b.ba(B("gt-clear", a.j()));
        b.setVisible(!1);
        var c = cg("DIV");
        V(c, !1);
        kg(c, a.C.j());
        var d = new BE(DATA.Messages.SUBMIT_TRANSLATION_SUGGESTION, DATA.Messages.CANCEL_EDITS, DATA.Messages.EDIT_TRANSLATION_DISCLAIMER, a.ra, !0);
        d.ba(c);
        c = tL(a);
        b = new zE(a.C, B("gt-edit",
            a.j()), B("result", a.j()), a.j(), a.N.a, b);
        var e = void 0,
            f = void 0,
            g = !1,
            k = !0;
        mr() && (e = DATA.LowConfidenceThreshold, f = DATA.MaxRoundTripResults, g = !0, k = !1, oE = DATA.Messages.IMPROVE_TRANSLATION);
        a.h = new NE(void 0, g, void 0, e, f, d, b, void 0, k);
        a.h.ba(c);
        d = a.h;
        d.N.c = "webapp";
        d.xa = "webapp";
        DATA.EnablePhraseHighlighting && (d = a.h, c = a.xa, d.ia = c, d.b.C = c);
        G(a.h, "action", a.al, !1, a)
    },
    zL = function(a) {
        var b = a.m ? a.m.zb() : void 0;
        WE(a.h, b, a.a.Pa(), a.a.ma(), DATA.DisplayLanguage) || (b = Fd(a.Ya()), Wd(tL(a), b))
    };
uL.prototype.update = function(a, b, c, d, e, f) {
    var g = this;
    this.a.a = a;
    RF(this.a, b);
    this.a.o = c;
    "auto" === c.toLowerCase() && (this.a.h = b.src);
    this.a.m = d;
    this.m = e || null;
    this.g = zw && f ? f : null;
    AL(this, d, this.m);
    f = B("result-shield-container", this.j());
    var k = jc(d);
    U(f, "result-rtl", k);
    tL(this).lang = d;
    this.C && To(this.C.j(), "direction", k ? "rtl" : "ltr");
    this.h || yL(this);
    Mu(a) ? (f = new Wm(n.location.href.split("#")[0]), Zm(f, "translate"), mn(f, "sl", [c ? c : "auto"]), mn(f, "tl", [d]), mn(f, "u", [a]), tL(this).appendChild(Mo(DK, {
            vn: f,
            wn: a
        }))) :
        zw && this.g ? (BL(this, BI(this.g.Rc())), E(tL(this), this.Ya())) : (E(tL(this), this.Ya()), this.m && this.h && zL(this));
    oK(this.N, b);
    (a = B("copybutton", this.j())) && V(a, !0);
    (a = B("starbutton", this.j())) && V(a, !0);
    (a = B("result-search", this.j())) && V(a, !0);
    this.V && (Bm(this.c), vL("search" + DATA.CampaignTrackerId, "show"), this.X && !this.R && Fi(function() {
        return CL(g)
    }, 0));
    this.O && null != e && (V(this.O, Qu(e)), Qu(e) && oI.log("community-promo", "show-webapp-served-community"))
};
var CL = function(a) {
    a.R = !0;
    Om(Km.M(), "/translate/uc?ua=dismiss&uav=stooltip");
    var b = D("DIV");
    E(b, DATA.Messages.SEARCH_THIS_TRANSLATION);
    To(b, "white-space", "nowrap");
    var c = B("result-search-icon", a.j()),
        d = new HG;
    d.c.c = c;
    MG(d);
    LG(d, b);
    IG(d, 0, 0, -20);
    d.c.Tf = !0;
    JG(d, !0);
    d.h = !0;
    d.render();
    R(d.j(), "trans-bubble");
    d.setVisible(!0);
    Pm(oI, "webapp", "searchtooltip", "show");
    Eh("gsa", "searchtooltip:show", "", 1);
    G(B("jfk-bubble-closebtn", d.j()), "click", function() {
        Pm(oI, "webapp", "searchtooltip", "dismiss");
        Eh("gsa",
            "searchtooltip:dismiss", "", 1)
    }, !1, a);
    window.onresize = function() {
        d.isDisposed() || MG(d)
    }
};
uL.prototype.Ya = function() {
    return zw && this.g ? this.g.tb() : oL.prototype.Ya.call(this)
};
var tL = function(a) {
    return C("tlid-translation", a.j())
};
uL.prototype.W = function() {
    return this.g ? this.g.Rc() : void 0
};
var BL = function(a, b) {
        E(a.nb, b)
    },
    DL = function(a, b, c) {
        if (!(xd() && te() && ue(9))) var d = setTimeout(function() {
                c(!0);
                new nL(function(f) {
                    f && c(!1)
                })
            }, 200),
            e = G(document, b, function() {
                clearTimeout(d);
                rh(e)
            }, !1, a)
    };
h = uL.prototype;
h.Ii = function() {
    var a = this;
    B("share-module", this.j()) && mg(B("share-module", this.j()));
    var b = Ee && (!Ie || Ie && 0 <= Lc(Es, 8)),
        c = EL(),
        d;
    DATA.Messages.SHARE_MODULE_TITLE && c && (d = DATA.Messages.SHARE_APP_NOT_INSTALLED.replace("%1$s", "WhatsApp"));
    b = No(EK, {
        uo: this.Ya(),
        Qa: DATA.Messages,
        Co: d,
        Hk: b,
        Kk: Ee,
        dm: Ie || Je
    });
    lg(B("result-footer", this.j()), b, 0);
    Gr(this.na, this.a.Pa(), this.a.ma(), this.a.a, !1, "share");
    b = B("tlid-share-panel", this.j());
    R(b, "show-share-panel");
    uI(p(this.Ni, this));
    Tf(b, {
        "aria-hidden": !1
    });
    b.focus();
    G(b, "keydown", function(e) {
        27 === e.keyCode && (tI(), a.Ni())
    }, !1);
    Pm(oI, "webapp", "share", "share", {
        sl: this.a.Pa(),
        tl: this.a.ma(),
        hl: DATA.DisplayLanguage,
        ql: this.a.a.length
    });
    Cm("share");
    b = B("share-panel-wrap", this.j());
    b = Pf(document, "a", "", b);
    w(b, function(e) {
        G(e, "click", p(this.il, this, e), !1, this)
    }, this)
};
h.Ni = function() {
    var a = B("tlid-share-panel", this.j());
    T(a, "show-share-panel");
    Tf(a, {
        "aria-hidden": !0
    });
    EL() && (a = Nf("not_installed")) && op(a) && V(a, !1);
    Gr(this.na, this.a.Pa(), this.a.ma(), this.a.a, !1)
};
h.il = function(a) {
    a = a.className.split(" ")[0];
    Pm(oI, "webapp", "share", a, {
        sl: this.a.Pa(),
        tl: this.a.ma(),
        hl: DATA.DisplayLanguage,
        ql: this.a.a.length
    });
    Cm(a);
    var b = EL();
    if (b) {
        var c = Nf("not_installed");
        c && op(c) && "whatsapp" !== a ? V(c, !1) : "whatsapp" === a && DL(this, b, function(d) {
            d ? (d = c.style, d.position = "relative", y && !Te("8") ? (d.zoom = "1", d.display = "inline") : d.display = "inline-block") : V(c, !1)
        })
    }
};
h.Ki = function() {
    Pm(oI, "webapp", "editclk", "1", {
        sl: this.a.Pa(),
        tl: this.a.ma()
    });
    var a = this.c;
    L(a, M(a, 26));
    $E(this.h)
};
h.al = function(a) {
    var b = XE(a.target);
    a = a.target.Ce();
    b != this.Ya() && V(B("trans-verified-button", this.j()), !1);
    SF(this.a, b);
    FE(this.Na, b, a, function(c) {
        nK(this.N, c)
    }.bind(this));
    this.K.update(b, a);
    this.dispatchEvent("resultTextEdited")
};
var EL = function() {
        var a = {
                hidden: "visibilitychange",
                webkitHidden: "webkitvisibilitychange",
                mozHidden: "mozvisibilitychange",
                msHidden: "msvisibilitychange"
            },
            b;
        for (b in a)
            if (b in document) {
                var c = a[b];
                break
            } return c
    },
    AL = function(a, b, c) {
        a.K.update(a.Ya(), b, c, FL(b), a.W())
    },
    FL = function(a) {
        for (var b = "", c = Nb(DATA.TargetLanguageCodeNameList), d = 0; d < c.length; d++) c[d].Code === a && (b = c[d].Name);
        return b
    };

function rL() {
    var a = te() && ue(9);
    return DATA.EnableSearchIcon && a
}

function qL(a) {
    a = void 0 === a ? {} : a;
    var b = void 0 === a.Fg ? mr() || af && Gk(43) || te() && ue(10) : a.Fg,
        c = void 0 === a.Gg ? rL() : a.Gg;
    return No(CK, {
        Qa: DATA.Messages,
        Dm: "\u0c85\u0ca8\u0cc1\u0cb5\u0cbe\u0ca6 \u0ca8\u0c95\u0cb2\u0cbf\u0cb8\u0cc1",
        Fm: "\u0ca8\u0c95\u0ccd\u0cb7\u0ca4\u0ccd\u0cb0\u0cbf\u0ca4 \u0c85\u0ca8\u0cc1\u0cb5\u0cbe\u0ca6",
        Fg: b,
        Gg: c,
        Mc: void 0 === a.Mc ? !DATA.InChina : a.Mc
    })
};
var GL = function(a) {
    var b = this;
    this.v = a;
    this.a = !1;
    this.b = C("tlid-gender-promo-dismiss-button", this.v);
    G(this.b, "click", function() {
        b.a = !0;
        b.setVisible(!1);
        Om(Km.M(), "/translate/uc?ua=dismiss&uav=genderpromo");
        var c = K.M(),
            d = M(c, 341);
        L(c, d)
    })
};
GL.prototype.setVisible = function(a, b) {
    b = void 0 === b ? !1 : b;
    a && !this.a ? (U(this.v, "gender-promo-is-single-word", b), U(this.v, "gender-promo-visible", !0), a = K.M(), b = M(a, 340), L(a, b)) : U(this.v, "gender-promo-visible", !1)
};
var IL = function(a, b, c, d, e, f) {
    J.call(this);
    this.w = 0;
    this.v = a;
    this.b = b;
    this.N = c;
    this.O = d;
    this.R = e;
    this.K = C("tlid-result-error", this.b);
    this.h = C("tlid-translation-error", this.v);
    this.L = C("tlid-translation-error-message", this.v);
    this.C = B("tlid-result-view-error-button", this.v) || null;
    this.G = B("tlid-result-container-error-button", this.b) || null;
    this.g = C("gt-lc", this.v);
    this.m = new mw(DATA.Messages.COMMUNITY_CARD_LEARN_MORE, "", DATA.Messages.THANKS_FOR_CONTRIBUTING, DATA.Messages.CONTRIBUTION_BENEFIT, DATA.InChina ?
        "" : "/community?source=webapp-user-edit", "webapp-user-edit", 15);
    this.m.ba(C("cp-promo-wrapper", this.v));
    this.o = f ? new GL(f) : null;
    this.c = null;
    this.a = [];
    this.F = K.M();
    HL(this)
};
ka(IL, J);
IL.prototype.T = function() {
    JL(this);
    this.v = null;
    J.prototype.T.call(this)
};
var HL = function(a) {
        null != a.G && Dh(gb(a.G), function() {
            a.dispatchEvent("g")
        });
        null != a.C && Dh(gb(a.C), function() {
            a.dispatchEvent("g")
        })
    },
    KL = function(a) {
        if (!a.a[0]) throw Error("getTranslationData called without calling hasTranslationData first");
        return a.a[0].a
    };
IL.prototype.j = function() {
    return this.v
};
var LL = function(a) {
    return zw && AI(a.c) ? CI(a.c).map(function(b) {
        return b.tb()
    }).join("\n") : a.a[0] ? KL(a).Ya() : ""
};
IL.prototype.update = function(a, b, c, d, e) {
    var f = this;
    JL(this);
    this.c = e || null;
    tI();
    V(this.h, !1);
    ML(this, 2);
    T(this.b, "result-error");
    zw && AI(this.c) && Cw(I(this.c, 2), d) ? (NL(this, !0, !("tr" === I(this.c, 2) && "en" === d)), e = CI(this.c), Gm(this.F, e), this.a = e.map(function(g, k) {
        k = OL(f, {
            Mc: 0 === k
        });
        k.update(a, b, c, d, f.c, g);
        return k
    })) : (NL(this, !1), e = OL(this), e.update(a, b, c, d, this.c), this.a = [e]);
    PL(this, !1);
    V(this.g, !0)
};
var OL = function(a, b) {
        b = new uL(a.b, a.N, a.O, a.m, a.R, b);
        b.Ed(a);
        return b
    },
    ML = function(a, b) {
        a.w = b;
        switch (b) {
            case 1:
                T(a.b, "result-error");
                R(a.b, "translating");
                a = ba(a.a);
                for (b = a.next(); !b.done; b = a.next()) {
                    b = b.value;
                    b.L.oa(!1);
                    var c = Fg(tL(b));
                    0 != c.length && E(tL(b), c + "...")
                }
                break;
            case 2:
                T(a.b, "translating")
        }
    };
IL.prototype.getState = function() {
    return this.w
};
var JL = function(a) {
        for (var b = ba(a.a), c = b.next(); !c.done; c = b.next()) c = c.value, c.K.stop(), c.Ia();
        a.a = [];
        a.c = null
    },
    QL = function(a, b, c) {
        if (a.a[0] && TF(KL(a), b)) {
            for (var d = ba(a.a), e = d.next(); !e.done; e = d.next()) e = e.value, null != e.b && st(e.b, c);
            b = b.c;
            null != b && (KL(a).c = b)
        }
    },
    RL = function(a) {
        a = ba(a.a);
        for (var b = a.next(); !b.done; b = a.next()) b.value.X = !0
    },
    PL = function(a, b) {
        U(a.b, "empty", b);
        U(a.v, "empty", b)
    },
    NL = function(a, b, c) {
        U(a.b, "gendered-translations", b);
        a.o && a.o.setVisible(b, c)
    };
var TL = function(a, b, c) {
        var d = DATA.DisplayLanguage,
            e = DATA.Messages,
            f = this;
        this.a = a;
        this.C = C("tlid-survey-contents", this.a);
        this.L = C("tlid-dismiss-survey", this.a);
        this.o = C("tlid-before-survey", this.a);
        this.h = C("tlid-after-survey", this.a);
        this.m = C("tlid-more-feedback", this.a);
        this.O = SL(this, e);
        w(this.O, function(g) {
            return f.C.appendChild(g)
        });
        this.K = d;
        this.c = c;
        this.Fa = b;
        this.F = K.M();
        this.g = Km.M();
        G(this.L, "click", p(this.b, this, 0), !1, this);
        G(this.m, "click", this.w, !1, this)
    },
    SL = function(a, b) {
        b = [
            [b.HAPPINESS_SURVEY_OPTION1,
                0
            ],
            [b.HAPPINESS_SURVEY_OPTION2, 1],
            [b.HAPPINESS_SURVEY_OPTION3, 2],
            [b.HAPPINESS_SURVEY_OPTION4, 3],
            [b.HAPPINESS_SURVEY_OPTION5, 4]
        ];
        for (var c = [], d = 0; d < b.length; d++) {
            var e = b[d],
                f = e[1];
            e = No(GK, {
                message: e[0],
                an: f
            });
            c.push(e);
            G(e, "click", p(a.G, a, f), !1, a)
        }
        return c
    };
TL.prototype.G = function(a) {
    var b = this.F,
        c = M(b, 262);
    var d = new ml;
    d = A(d, 1, a + 1); of (c, 72, d);
    L(b, c);
    UL(this, "select" + a);
    V(this.o, !1);
    V(this.h, !0);
    this.b(1E4)
};
TL.prototype.w = function() {
    this.b(0);
    this.Fa.call()
};
var UL = function(a, b) {
    var c = {},
        d = a.c.a,
        e = a.c.c;
    "auto" === d && "" !== e && (d = e);
    c.sl = d;
    c.tl = a.c.b;
    c.hl = a.K;
    c.e = b;
    a.g.log("survey", c)
};
TL.prototype.show = function() {
    T(this.a, "hidden");
    var a = this.F;
    L(a, M(a, 261));
    UL(this, "show")
};
TL.prototype.b = function(a) {
    var b = this;
    Om(this.g, "/translate/uc?ua=dismiss&uav=survey");
    Fi(function() {
        (new wF(b.a, 300)).play()
    }, null != a ? a : 0, this)
};
var WL = function(a) {
    J.call(this);
    this.F = K.M();
    this.v = a;
    this.h = C("tlid-toast-message", this.v);
    this.c = C("tlid-toast-action", this.v);
    a = Rf("A", "tlid-toast-action-link", this.c);
    this.b = gb(a);
    this.o = C("tlid-toast-action-text", this.c);
    this.g = new zs(this.m, 5E3, this);
    this.a = null;
    VL(this)
};
ka(WL, J);
var YL = function(a, b) {
        R(a.v, "with-message");
        T(a.v, "with-action");
        E(a.h, b);
        XL(a)
    },
    XL = function(a) {
        a.g.mb() || ((new xF(a.v, 218)).play(), a = a.g, a.mb() || a.start(void 0))
    };
WL.prototype.m = function() {
    (new wF(this.v, 218)).play()
};
var VL = function(a) {
    G(a.b, "click", p(function() {
        null != a.a && a.dispatchEvent(a.a)
    }, a), !1, a)
};
var ZL = function() {};
ka(ZL, Sr);
ZL.prototype.Yc = function(a) {
    return a && "SPAN" == a.tagName ? !0 : !1
};
var $L = function(a) {
    ZK.call(this);
    this.g = a;
    this.m = new Km;
    this.m.c = "webapp";
    this.c = null
};
ka($L, ZK);
$L.prototype.b = function() {
    return "cmty-ctr"
};
$L.prototype.Wc = function(a) {
    if (!a || "DIV" != a.tagName) return !1;
    a = B("cmty-ctr", a);
    if (!a || "DIV" != a.tagName) return !1;
    var b = B("snck-msg", a);
    return b && "SPAN" == b.tagName ? (a = B("cmty-btn", a)) && "SPAN" == a.tagName ? !0 : !1 : !1
};
$L.prototype.aa = function() {
    B("snck-msg", this.j()).textContent = MSG_VERIFIED_BY_COMMUNITY;
    var a = B("cmty-btn", this.j());
    a.textContent = MSG_JOIN;
    this.c = new us(null, new ZL);
    this.c.ba(a);
    G(this.c, "action", this.w, !1, this)
};
$L.prototype.w = function() {
    this.m.log("community-promo", "click-" + this.g);
    this.setVisible(!1);
    be("/community?source=" + this.g)
};
Zi("wireless.events.ListenerCoalescer");
var aM = function(a) {
    Hl(this, a, 2)
};
t(aM, Gl);
var bM = {
    language: {
        H: 0,
        J: !1
    },
    state: {
        H: 1,
        J: !1
    }
};
aM.prototype.za = function() {
    return bM
};
aM.prototype.Ea = function() {
    return Gh(this, 1)
};
aM.prototype.getState = function() {
    return Jl(this, 1)
};
var cM = function(a) {
    Hl(this, a, 4)
};
t(cM, Gl);
var dM = {
    language: {
        H: 0,
        J: !1
    },
    state: {
        H: 1,
        J: !1
    },
    tool_id: {
        H: 2,
        J: !1
    },
    element_id: {
        H: 3,
        J: !1
    }
};
cM.prototype.za = function() {
    return dM
};
cM.prototype.Ea = function() {
    return Gh(this, 1)
};
cM.prototype.getState = function() {
    return Jl(this, 1)
};
var eM = function(a) {
    Hl(this, a, 19)
};
t(eM, Gl);
var fM = {
    vkeyboard: {
        H: 0,
        va: function(a) {
            return Ol(aM, a)
        },
        sa: function(a) {
            return Nl(new aM(a))
        },
        J: !0
    },
    source_romanization: {
        H: 1,
        va: function(a) {
            return Ol(aM, a)
        },
        sa: function(a) {
            return Nl(new aM(a))
        },
        J: !0
    },
    result_romanization: {
        H: 2,
        va: function(a) {
            return Ol(aM, a)
        },
        sa: function(a) {
            return Nl(new aM(a))
        },
        J: !0
    },
    input_t13n: {
        H: 3,
        va: function(a) {
            return Ol(aM, a)
        },
        sa: function(a) {
            return Nl(new aM(a))
        },
        J: !0
    },
    default_source_romanization: {
        H: 4,
        J: !1
    },
    default_result_romanization: {
        H: 5,
        J: !1
    },
    dismiss_chrome_promotion: {
        H: 6,
        J: !1
    },
    source_example: {
        H: 7,
        J: !1
    },
    result_example: {
        H: 8,
        J: !1
    },
    input_tool: {
        H: 9,
        va: function(a) {
            return Ol(cM, a)
        },
        sa: function(a) {
            return Nl(new cM(a))
        },
        J: !0
    },
    dismiss_phrasebook_promo: {
        H: 10,
        J: !1
    },
    dismiss_survey: {
        H: 11,
        J: !1
    },
    dismiss_gsa_pure_ad: {
        H: 12,
        J: !1
    },
    dismiss_search_tooltip: {
        H: 13,
        J: !1
    },
    dismiss_gsa_interstitial: {
        H: 14,
        J: !1
    },
    dismiss_gsa_prompt: {
        H: 15,
        J: !1
    },
    search_direct_gsa: {
        H: 16,
        J: !1
    },
    dismiss_android_translate: {
        H: 17,
        J: !1
    },
    dismiss_android_translate5: {
        H: 18,
        J: !1
    }
};
eM.prototype.za = function() {
    return fM
};
var gM = function(a) {
    Hl(this, a, 2)
};
t(gM, Gl);
var hM = {
    source_language: {
        H: 0,
        J: !1
    },
    target_language: {
        H: 1,
        J: !1
    }
};
gM.prototype.za = function() {
    return hM
};
gM.prototype.Ce = function() {
    return I(this, 1)
};
var iM = function(a) {
    Hl(this, a, 6)
};
t(iM, Gl);
var jM = {
    recent_sl: {
        H: 0,
        J: !0
    },
    recent_tl: {
        H: 1,
        J: !0
    },
    recent_lp: {
        H: 2,
        va: function(a) {
            return Ol(gM, a)
        },
        sa: function(a) {
            return Nl(new gM(a))
        },
        J: !0
    },
    sel_auto: {
        H: 3,
        J: !1
    },
    default_sl: {
        H: 4,
        J: !1
    },
    default_tl: {
        H: 5,
        J: !1
    }
};
iM.prototype.za = function() {
    return jM
};
var kM = function(a) {
    Hl(this, a, 3)
};
t(kM, Gl);
var lM = {
    recent_lang: {
        H: 0,
        va: function(a) {
            return Ol(iM, a)
        },
        sa: function(a) {
            return Nl(new iM(a))
        },
        J: !1
    },
    eotf: {
        H: 1,
        J: !1
    },
    stickiness_data: {
        H: 2,
        va: function(a) {
            return Ol(eM, a)
        },
        sa: function(a) {
            return Nl(new eM(a))
        },
        J: !1
    }
};
kM.prototype.za = function() {
    return lM
};
var mM = function(a, b, c) {
    a.timeOfStartCall = (new Date).getTime();
    var d = c || n,
        e = d.document,
        f = a.nonce || Da(d);
    f && !a.nonce && (a.nonce = f);
    if ("help" == a.flow) {
        var g = Fa("document.location.href", d);
        !a.helpCenterContext && g && (a.helpCenterContext = g.substring(0, 1200));
        g = !0;
        if (b && JSON && JSON.stringify) {
            var k = JSON.stringify(b);
            (g = 1200 >= k.length) && (a.psdJson = k)
        }
        g || (b = {
            invalidPsd: !0
        })
    }
    b = [a, b, c];
    d.GOOGLE_FEEDBACK_START_ARGUMENTS = b;
    c = a.serverUri || "//www.google.com/tools/feedback";
    if (g = d.GOOGLE_FEEDBACK_START) g.apply(d, b);
    else {
        d = c + "/load.js?";
        for (var l in a) b = a[l], null == b || Oa(b) || (d += encodeURIComponent(l) + "=" + encodeURIComponent(b) + "&");
        a = Jg(Mf(e), "SCRIPT");
        f && a.setAttribute("nonce", f);
        Zd(a, vw(d));
        e.body.appendChild(a)
    }
};
Aa("userfeedback.api.startFeedback", mM);
var nM = TA("showhistory"),
    tM = TA("showinstant"),
    uM = TA("showsaved"),
    vM = TA("showfeedback"),
    wM = TA("showlanguagepicker"),
    xM = TA("urltranslation"),
    LM = function(a, b) {
        var c = yM,
            d = zM,
            e = AM,
            f = BM,
            g = this;
        this.K = zl();
        this.F = K.M();
        this.F.config(Gj() || "0", EXPERIMENT_IDS);
        this.K.c = c;
        this.K.g = d;
        this.Ca = "closed";
        this.w = Km.M();
        this.wb = new sG(this.dk.bind(this), this.Qj.bind(this), this.Io.bind(this), this.w);
        this.fb = a;
        this.b = b;
        this.b.c = this;
        this.Tj = e;
        this.Vj = f;
        this.hd = new CE("webapp");
        this.na = new Iu(DATA.TriggeredExperimentIds);
        this.ea = new Rv(p(this.Kj, this), !0);
        Bw();
        this.L = new EA(this.ea);
        a = CM() ? "\u5373\u523b\u4e0b\u8f7dGoogle\u7ffb\u8bd1 app\uff01" : .5 > Math.random() ? DATA.Messages.TRANSLATE_PURE_AD_TEXT_SPEAK : DATA.Messages.TRANSLATE_PURE_AD_TEXT_READ;
        this.Lj = az.M();
        DM(this);
        this.v = No(zK, {
            ck: a,
            jk: tM,
            pk: c,
            qk: d,
            xk: DATA.InChina && "zh-CN" === DATA.DisplayLanguage,
            yk: !DATA.InChina,
            Ak: DATA.DisplayHappinessSurvey,
            Bk: DATA.EnableHiringPromo,
            Ck: DATA.EnableHistoryRemovalNotification,
            Ra: DATA.DisplayLanguage,
            Dk: !DATA.InChina,
            Fk: DATA.EnableCommunityInstant &&
                DATA.SignedIn,
            Gk: DATA.CompareProdTrans,
            Ik: mr(),
            Jk: DATA.UrlTranslation,
            bm: nM,
            fm: DATA.InChina,
            Qa: DATA.Messages,
            Em: DATA.Messages.NO_THANKS.toUpperCase(),
            Gm: DATA.Messages.TRY_THE_APP.toUpperCase(),
            ln: CM() || EM(),
            nn: !mr(),
            on: FM(),
            pn: DATA.SignedIn,
            xn: uM,
            Jn: Nb(DATA.SourceLanguageCodeNameList),
            Xn: Nb(DATA.TargetLanguageCodeNameList),
            Eo: xM
        });
        a = jc(DATA.DisplayLanguage);
        U(document.body, "rtl-display-lang", a);
        this.g = C("tlid-homepage", this.v);
        R(document.body, "displaying-homepage");
        this.O = new hK(C("tlid-history-page",
            this.v), this.wb);
        this.Fa = DATA.EnableCommunityInstant && DATA.SignedIn ? new XK(C("tlid-instant-page", this.v)) : null;
        this.yc = this.c = null;
        this.ge = C("tlid-language-picker-page", this.v);
        this.je = C("tlid-source-target", this.v);
        this.a = new PK(C("tlid-input", this.g), this.je, c, d, this.ea, this.L);
        this.Oj = new cE(this.a.a.j());
        this.Ph = new bL;
        this.Ph.ba(B("ntfcn", this.a.j()));
        this.kd = new $L("webapp-served-community");
        this.kd.ba(B("cmty", this.a.j()));
        a = this.xb = null;
        DATA.EnableGenderedTranslationsPromo && (a = No(BK, {
            Gn: "en" ===
                DATA.DisplayLanguage,
            Qa: DATA.Messages
        }));
        this.h = new IL(C("tlid-result-view", this.v), C("tlid-results-container", this.je), this.wb, this.b, this.Oj, a);
        this.nb = this.fd = null;
        if (this.ra = B("tlid-input-button-container", this.g)) this.fd = C("tlid-input-button-text", this.ra), this.nb = C("tlid-input-button-docs", this.ra);
        (b = B("tlid-app-download-bar", this.g)) && new yH(b);
        this.he = null;
        DATA.CompareProdTrans && (this.he = C("tlid-prod-translation", this.g));
        this.Z = null;
        DATA.CompareProdTrans && (this.Z = new zH(C("tlid-brain-logos-container",
            this.g)));
        this.W = null;
        this.G = new $u(DATA.DisplayLanguage, this.hd, this, !0);
        this.ld = new Tq(DATA.DisplayLanguage, [DATA.Messages.COMMON_TRANSLATION, DATA.Messages.UNCOMMON_TRANSLATION, DATA.Messages.RARE_TRANSLATION, MSG_N_MORE_TRANSLATIONS_LABEL], !0, !1, !0, DATA.Messages.TRANSLATION_FREQUENCY, DATA.Messages.TRANSLATION_FREQUENCY_HELP_TEXT);
        this.Hd = new qw(DATA.DisplayLanguage, !0, !0, !0);
        this.md = new ww(DATA.DisplayLanguage, !0, !0);
        this.Bo = new yF(DATA.DisplayLanguage, !0, !0);
        this.Mj = new hH(DATA.DisplayLanguage,
            !0, !0);
        this.Ob = [];
        b = {
            Nc: this.a.Nc,
            wj: this.a.a,
            Ya: function() {
                return LL(g.h)
            }
        };
        e = B("outer-wrap", this.ge);
        e.appendChild(this.a.b.j());
        e.appendChild(this.a.g.j());
        this.$b = B("tlid-language-list-toolbar", this.ge);
        this.hn = B("tlid-language-list-back-button", this.$b);
        this.Mh = new jt;
        this.Mh.ba(this.hn);
        this.Oh = B("tlid-language-list-label", this.$b);
        this.xa = new jt;
        this.xa.ba(B("tlid-language-list-search-button", this.$b));
        this.xa.wd(DATA.Messages.SEARCH_LANGUAGES);
        FA(this.a.b, function() {
            g.R({})
        }, this);
        FA(this.a.g,
            function() {
                g.R({})
            }, this);
        e = this.a.b;
        f = this.a.g;
        Wb(b, {
            lj: e,
            uj: f,
            ij: this.xa,
            kj: e.G,
            tj: f.G
        });
        HA(this.L, b);
        this.ea.g(c);
        this.ea.h(d);
        c = B("ovfl", this.a.j());
        this.Wh = new dL(this.a, this.ea, DATA.DisplayLanguage, DATA.MaxSingleQueryLength);
        this.Wh.ba(c);
        this.$a = null;
        if (c = B("tlid-character-count", this.g)) this.$a = new vv(DATA.MaxSingleQueryLength, "normal", "overflow"), this.$a.ba(c), this.$a.init();
        this.Uj = new jw(this.a.a, this.ea, this.Wh, null != this.$a ? this.$a : void 0);
        this.Uj.init();
        c = B("tlid-spelling-correction",
            this.a.j());
        this.V = new WG(this, DATA.Messages.LANGUAGE_CORRECTION, DATA.Messages.DID_YOU_MEAN, DATA.Messages.SPELLING_AUTO_CORRECTION, DATA.Messages.SPELLING_REVERT_CORRECTION, p(this.a.b.V, this.a.b));
        this.V.ba(c);
        this.G.ba(B("gt-lc", this.h.j()));
        a && this.G.b.j().appendChild(a);
        this.G.b.ib(this.ld, !0);
        this.G.c.ib(this.Hd, !0);
        this.G.c.ib(this.md, !0);
        this.G.c.ib(this.Mj, !0);
        this.G.c.ib(this.Bo, !0);
        this.zo = new RD(this.a.a, !DATA.DisableOtf, p(this.X, this, !0), p(this.hd.m, this.hd));
        this.Do = new Bp(this);
        this.Do.listen(Mf().a,
            "scroll", this.Pj);
        this.Ye = Xf(document).a;
        this.ie = {};
        this.C || (this.C = new hB(this, "Controller"), jB(this.C, nM, this.Nk), jB(this.C, uM, this.Zl), jB(this.C, tM, this.Uk), jB(this.C, vM, this.Ta), jB(this.C, wM, this.R), jB(this.C, xM, this.Jj), iB.a.push(this.C));
        this.gn = te() && ue(9);
        CM() ? GM(this, "http://www.gstatic.cn/translate/dl/android.html", 11) : DATA.InChina || (FM() ? HM(this, "gsa-promo", "gsaAd", "gsaad", 12, Ua(Eh, "gsa", "gsaAd:show", "", 1), Ua(Eh, "gsa", "gsaAd:dismiss", "", 1), p(this.Zj, this)) : EM() ? GM(this, "https://play.google.com/store/apps/details?id=com.google.android.apps.translate&referrer=utm_source%3DMobileWebBanner%26utm_content%3DPureAd%26utm_campaign%3DTranslateAndroid&pcampaignid=Translate_022016",
            9) : DATA.EnableHiringPromo && iL(new hL(C("tlid-magnet-promo", this.v)), !0));
        c = B("tlid-survey", this.v);
        this.Uh = null;
        c && (this.Uh = new TL(c, p(this.Ta, this), this.ea), Fi(function() {
            this.Uh.show()
        }, 6E4, this));
        c = B("tlid-notification-container", this.v);
        DATA.EnableHistoryRemovalNotification && c && new kK(c);
        this.m = null;
        c = C("tlid-send-feedback-link", this.v);
        G(c, "click", this.Ta, !1, this);
        this.jd = this.ke = 0;
        this.nd = this.Ze = this.o = "";
        void 0 !== DATA.RecentLanguages && void 0 !== DATA.RecentLanguages.recent_sl && (GB(this.a.b,
            DATA.RecentLanguages.recent_sl), GB(this.a.g, DATA.RecentLanguages.recent_tl));
        this.Na = "";
        this.N = new WL(C("tlid-toast", this.v));
        IM(this);
        JM(this);
        KM(this)
    },
    JM = function(a) {
        a.fd && Dh(a.fd, function() {
            var c = Er(a.b);
            gr(c, a.ea.a, a.ea.b);
            a.b.a(c.toString(), !0);
            MM(a)
        });
        a.nb && Dh(a.nb, function() {
            var c = Er(a.b),
                d = a.ea.a,
                e = a.ea.b;
            fr(c);
            c.a.set("op", "docs");
            null != d && c.a.set("sl", d);
            null != e && c.a.set("tl", e);
            a.b.a(c.toString(), !0);
            NM(a)
        });
        a.ra && G(a.ra, "keydown", function(c) {
            Ch(c, [a.fd, a.nb])
        }, !1);
        G(a.$b, "touchmove",
            OM);
        G(a.Mh, "action", function() {
            a.R({})
        }, !1, a);
        G(a.xa, "action", a.yn, !1, a);
        G(a.xa.j(), "keydown", a.Ek, !1, a);
        G(a.a, "translateButtonClicked", a.Rj, !1, a);
        G(a.O, "history_entry_selected", function(c) {
            Br(a, c.gb, c.hb, c.text)
        }, !1);
        G(a.O, "close_requested", a.La, !1, a);
        G(a.O, "history_cleared", a.Vj, !1, a);
        a.Fa && (G(a.Fa, "close_requested", a.Wj, !1, a), G(a.Fa, "tasks_available", a.Qm, !1, a), G(a.Fa, "sign_in_requested", a.Sj, !1, a));
        G(a.a.a, "clear", a.Sh, !1, a);
        G(document, "click", a.ak, !0, a);
        var b = Nf("trans-onebar-feedback");
        b && (G(b,
            "click", a.Ta, !1, a), G(b, "keypress", function(c) {
            13 == c.keyCode && this.Ta()
        }, !1, a));
        G(a.ea, "srcSuggestionUpdated", a.Ho, !1, a);
        G(a.ea, "languageSelected", a.Ij, !1, a);
        G(a.ea, "tgtLanguageUpdated", a.om, !1, a);
        G(a.b, "c", function(c) {
            PM(a, c.Eh)
        }, !1);
        a.L.h && (G(a.L.h, "clickSelected", a.em, !1, a), G(a.L.h, "click", a.ia, !1, a));
        a.L.m && (G(a.L.m, "clickSelected", a.pm, !1, a), G(a.L.m, "click", a.ia, !1, a), G(a.a.Nc, "action", a.ia, !1, a));
        Dh(C("tlid-open-source-language-list", a.g), a.Kh.bind(a));
        Dh(C("tlid-open-target-language-list", a.g),
            a.Lh.bind(a));
        Dh(C("tlid-open-small-source-language-list", a.g), a.Kh.bind(a));
        Dh(C("tlid-open-small-target-language-list", a.g), a.Lh.bind(a));
        DATA.CompareProdTrans && G(a.a, "inputCleared", function() {
            E(this.he, "")
        }, !1, a);
        G(a.h, "verifiedTranslationButtonClicked", function() {
            a.kd.setVisible(!0, 8E3);
            a.w.log("community-promo", "open-webapp-served-community")
        });
        G(a.h, "g", function() {
            a.X(!1)
        }, !1);
        G(a.h, "resultTextEdited", function() {
            QM(a)
        }, !1);
        G(a.h, "translationCopied", function() {
                YL(this.N, "\u0c85\u0ca8\u0cc1\u0cb5\u0cbe\u0ca6\u0cb5\u0ca8\u0ccd\u0ca8\u0cc1 \u0ca8\u0c95\u0cb2\u0cbf\u0cb8\u0cb2\u0cbe\u0c97\u0cbf\u0ca6\u0cc6")
            },
            !1, a);
        G(a.a, "userInteractionWithDisabledVoiceInput", function() {
            if ("auto" === this.ea.a) YL(this.N, DATA.Messages.CHOOSE_LANGUAGE_TO_ENABLE_VOICE_INPUT);
            else {
                var c = yI(this.ea.a);
                YL(this.N, this.na.a(DATA.Messages.VOICE_INPUT_UNAVAILABLE, c))
            }
        }, !1, a);
        G(a.a, "userInteractionWithDisabledVoiceOutput", function() {
            var c = yI(this.ea.a);
            YL(this.N, this.na.a(DATA.Messages.VOICE_OUTPUT_UNAVAILABLE, c))
        }, !1, a);
        G(a.h, "userInteractionWithDisabledVoiceOutput", function() {
            var c = zI(this.ea.b);
            YL(this.N, this.na.a(DATA.Messages.VOICE_OUTPUT_UNAVAILABLE,
                c))
        }, !1, a);
        G(a.N, "unsupported_filetype_learn_more_clicked", function() {
            var c = a.F,
                d = M(c, 309);
            var e = new dl;
            e = A(e, 1, 1); of (d, 79, e);
            L(c, d);
            Pm(a.w, "webapp", "lm", "dtft", {});
            be("https://support.google.com/translate/answer/2534559?hl=" + DATA.DisplayLanguage)
        }, !1);
        b = new BG([a.a.a.j()], [C("tlid-results-container", a.je)]);
        G(b, "select", a.G.Gl, !1, a.G);
        G(window, "beforeunload", function(c) {
            RM(a, c.type);
            a.m && SM(a, a.m.a, a.m.w, a.m.Pa(), a.m.ma())
        }, !1);
        G(a.a, "inputPasted", function() {
            TM(a, Ov(a.a.a)) ? a.ke++ : a.jd++
        }, !1);
        G(a.G,
            "translationRefreshed",
            function() {
                window.scrollTo(0, 0)
            }, !1, a);
        new AA(a.L)
    },
    MM = function(a) {
        var b = a.F;
        L(b, M(b, 295));
        Pm(a.w, "webapp", "ib", "t", {});
        R(a.g, "translate-text");
        T(a.g, "translate-docs")
    },
    NM = function(a) {
        var b = a.F;
        L(b, M(b, 296));
        Pm(a.w, "webapp", "ib", "d", {});
        null == a.xb && UM(a);
        T(a.g, "translate-text");
        R(a.g, "translate-docs")
    };
LM.prototype.Ek = function(a) {
    var b = this.a.b.isVisible() ? this.a.b : this.a.g.isVisible() ? this.a.g : void 0;
    if (b) switch (a.keyCode) {
        case 27:
            b.close();
            a.preventDefault();
            break;
        case 40:
            b.a[0].j().focus();
            a.preventDefault();
            break;
        default:
            b.X && b.X(a)
    }
};
LM.prototype.ak = function(a) {
    var b = gb(a.target);
    b.classList.contains("tlid-trans-verified-button") || sg(this.kd.j(), b) || this.kd.setVisible(!1);
    sg(this.ge, b) || sg(C("tlid-language-bar"), b) || this.ia(a)
};
var PM = function(a, b) {
        var c = new dr(b);
        "history" === c.b ? VM() || WM(a) : "instant" === c.b ? XM() || YM(a) : "saved" === c.b ? ZM() || $M(a) : (v("home" === c.b, "Invalid view token in the URL fragment"), Go(document.body, "displaying-homepage") || a.La());
        if (jr(c, "star")) "history" === c.b ? (a.Na = "", iK(a.O, c.Pa(), c.ma(), ir(c, "text"))) : (v("home" === c.b, "Invalid view token in the URL fragment for STAR operation"), a.ea.g(c.Pa()), a.ea.h(c.ma()), a.a.a.g(ir(c, "text")), a.X(!1), pD(a.a.O), a.Th = !0);
        else if (jr(c, "docs")) {
            Go(a.g, "translate-docs") ||
                NM(a);
            c = Nb(DATA.SourceLanguageCodeNameList).map(function(e) {
                return e.Code
            });
            var d = Nb(DATA.TargetLanguageCodeNameList).map(function(e) {
                return e.Code
            });
            Dr(a.b, b, c, d)
        } else jr(c, "translate") && (Go(a.g, "translate-text") || MM(a), c = Nb(DATA.SourceLanguageCodeNameList).map(function(e) {
            return e.Code
        }), d = Nb(DATA.TargetLanguageCodeNameList).map(function(e) {
            return e.Code
        }), Cr(a.b, b, c, d), Ov(a.a.a) && TK(a.a))
    },
    CM = function() {
        return He && DATA.InChina && "zh-CN" === DATA.DisplayLanguage && DATA.EnableChinaAndroidPromo
    };
LM.prototype.Kh = function(a) {
    this.R(a, "sl")
};
LM.prototype.Lh = function(a) {
    this.R(a, "tl")
};
LM.prototype.em = function(a) {
    this.R(a, "sl")
};
LM.prototype.pm = function(a) {
    this.R(a, "tl")
};
var FM = function() {
        return !DATA.InChina && DATA.EnableGSAPureAd && te() && ue(9) && xd()
    },
    EM = function() {
        return !DATA.InChina && He && "en" == DATA.DisplayLanguage && !!DATA.Messages.TRANSLATE_PURE_AD_TEXT_SPEAK && !!DATA.Messages.TRANSLATE_PURE_AD_TEXT_READ
    };
LM.prototype.Kj = function(a) {
    a: {
        var b = this.a.O.a;
        if ("ltr" == a) var c = "left";
        else if ("rtl" == a) c = "right";
        else break a;To(b.j(), "direction", a);To(b.j(), "text-align", c)
    }
};
var OM = function(a) {
    a.preventDefault()
};
LM.prototype.Ij = function() {
    var a = this.ea.a,
        b = this.ea.b;
    this.K.c = a;
    this.K.g = b;
    var c = this.fb;
    uH(c, c.a, a);
    c = this.fb;
    uH(c, c.b, b);
    this.X(!1, "ls");
    mr() && LK(this.a);
    this.Z && CH(this.Z, a, b)
};
LM.prototype.om = function() {
    for (var a = this.ea.b, b = ba(this.h.a), c = b.next(); !c.done; c = b.next()) AL(c.value, a)
};
LM.prototype.j = function() {
    return this.v
};
var ZM = function() {
        return Go(document.body, "displaying-saved-page")
    },
    XM = function() {
        return Go(document.body, "displaying-instant-page")
    },
    VM = function() {
        return Go(document.body, "displaying-history-page")
    };
LM.prototype.La = function() {
    tI();
    var a = B("tlid-share-panel", this.v);
    a && T(a, "show-share-panel");
    T(document.body, "with-lang-list");
    T(document.body, "with-sl-list");
    T(document.body, "with-tl-list");
    if (!Go(document.body, "displaying-homepage")) {
        a = ZM();
        this.Ca = "closed";
        R(document.body, "displaying-homepage");
        T(document.body, "displaying-history-page");
        T(document.body, "displaying-saved-page");
        T(document.body, "displaying-instant-page");
        var b = Er(this.b);
        er(b, "home");
        this.b.a(b.toString(), !0);
        b = this.F;
        L(b, M(b, 216));
        qI("show", "homepage", "", "", "");
        a && (a = this.F, L(a, M(a, 41)))
    }
};
LM.prototype.Nk = function() {
    if (VM()) {
        var a = this.O;
        a.a && SI(a.a);
        this.La()
    } else a = Er(this.b), this.Na = a.toString(), er(a, "history"), this.b.a(a.toString(), !0), WM(this)
};
var WM = function(a) {
    a.Ca = "history";
    T(document.body, "displaying-homepage");
    R(document.body, "displaying-history-page");
    T(document.body, "displaying-saved-page");
    T(document.body, "displaying-instant-page");
    jK(a.O);
    qI("show", "history", "", "", "");
    a = a.F;
    L(a, M(a, 60))
};
LM.prototype.Uk = function() {
    if (this.Fa)
        if (XM()) {
            aN(this);
            this.La();
            Eh("community", "instant:return", "", 1);
            var a = this.F;
            L(a, M(a, 371))
        } else a = Er(this.b), this.Na = a.toString(), er(a, "instant"), this.b.a(a.toString(), !0), YM(this)
};
LM.prototype.Qm = function() {
    if (DATA.EnableCommunityInstantNotifications) {
        var a = C("tlid-community-button", this.v);
        R(a, "available")
    }
};
var aN = function(a) {
    DATA.EnableCommunityInstantNotifications && (a = C("tlid-community-button", a.v), T(a, "available"))
};
LM.prototype.Wj = function() {
    Eh("community", "instant:hide", "", 1);
    var a = this.F;
    L(a, M(a, 370));
    aN(this);
    this.La()
};
var YM = function(a) {
    if (a.Fa && null != window.gapi && null != window.gapi.iframes) {
        a.Ca = "instant";
        T(document.body, "displaying-homepage");
        T(document.body, "displaying-history-page");
        T(document.body, "displaying-saved-page");
        R(document.body, "displaying-instant-page");
        var b = a.Fa;
        null != b.a && b.c && (b.c = !1, b.a.send("restartInstant", {
            source: b.h,
            target: b.o
        }, void 0, b.b));
        qI("show", "instant", "", "", "");
        Eh("community", "instant:view", "", 1);
        a = a.F;
        L(a, M(a, 361))
    }
};
LM.prototype.R = function(a, b) {
    var c = this;
    if (Go(document.body, "with-lang-list")) this.ia(a);
    else {
        if (null == b) throw Error("No language picker class to show provided");
        ZM() && this.c && (UJ(this.c), this.La());
        "sl" === b ? (E(this.Oh, DATA.Messages.TRANSLATE_FROM), this.a.b.setVisible(!0), this.a.g.setVisible(!1), EB(this.a.b), R(document.body, "with-sl-list")) : "tl" === b && (E(this.Oh, DATA.Messages.TRANSLATE_TO), this.a.b.setVisible(!1), this.a.g.setVisible(!0), EB(this.a.g), R(document.body, "with-tl-list"));
        R(document.body,
            "with-lang-list");
        Fi(function() {
            mr() && ("sl" === b ? JB(c.a.b) : "tl" === b && JB(c.a.g))
        }, 0);
        n.scrollTo(0, 0);
        a = B("language-list-unfiltered-langs-" + b + "_list");
        null != a && (a.scrollTop = 0)
    }
};
LM.prototype.ia = function(a) {
    "click" == a.type && a.defaultPrevented || !Go(document.body, "with-lang-list") || (this.a.b.setVisible(!1), this.a.g.setVisible(!1), this.La(), mr() && LK(this.a))
};
LM.prototype.yn = function() {
    this.a.b.isVisible() && IB(this.a.b);
    this.a.g.isVisible() && IB(this.a.g)
};
LM.prototype.Zl = function() {
    if (ZM() && null != this.c) UJ(this.c), this.La();
    else {
        var a = Er(this.b);
        this.Na = a.toString();
        er(a, "saved");
        this.b.a(a.toString(), !0);
        $M(this)
    }
};
var $M = function(a) {
    DATA.InChina || wI("lnk", a.w, a.Jo.bind(a), a.b.a.bind(a.b, a.Na, !0), Er(a.b).toString())
};
LM.prototype.Jo = function() {
    qI("show", "starred", "", "", "");
    var a = this.F;
    L(a, M(a, 40));
    this.Ca = "saved";
    T(document.body, "displaying-homepage");
    T(document.body, "displaying-history-page");
    R(document.body, "displaying-saved-page");
    T(document.body, "displaying-instant-page");
    this.c || bN(this)
};
var bN = function(a) {
    var b = C("tlid-phrasebook-outer-wrap", a.v),
        c = No(YJ, {
            Ra: DATA.DisplayLanguage,
            Qa: DATA.Messages
        });
    b.appendChild(c);
    a.c = new PJ(c, a.wb);
    G(a.c, "close_requested", function() {
        UJ(a.c);
        a.La()
    }, !1);
    G(a.c, "phrasebook_entry_selected", function(d) {
        Go(a.g, "translate-text") || MM(a);
        Br(a, d.gb, d.hb, d.text)
    }, !1);
    G(a.c, "interaction_with_disabled_voice_output", function(d) {
        YL(a.N, a.na.a(DATA.Messages.VOICE_OUTPUT_UNAVAILABLE, d.Nb))
    }, !1, a);
    a.yc && gJ(a.c.a, a.yc)
};
LM.prototype.Ta = function() {
    var a = {
            productId: "101820",
            locale: DATA.DisplayLanguage,
            version: DATA.VersionLabel
        },
        b = {};
    0 < EXPERIMENT_IDS.length && (b.EXP = EXPERIMENT_IDS.join(","));
    b.SOURCE_LANGUAGE = this.ea.a;
    b.TARGET_LANGUAGE = this.ea.b;
    b.PANEL_STATE = this.Ca;
    window.JS_ERR_COUNT && (b.JS_ERR_COUNT = window.JS_ERR_COUNT, b.JS_ERR_ARR = window.JS_ERR_ARR);
    this.g.scrollIntoView(!0);
    mM(a, b);
    qI("show", "feedback", "", "", "")
};
var UM = function(a) {
    var b = No(AK, {
        Ra: DATA.DisplayLanguage,
        Pk: DATA.FileTranslationPath,
        Qa: DATA.Messages
    });
    C("tlid-select-file-page-container", a.g).appendChild(b);
    a.xb = new bK(b, a.ea);
    G(a.xb, "file_too_big", function(c) {
        YL(a.N, a.na.a(DATA.Messages.FILE_TOO_BIG_PARAMETERIZED, (c.Ok / 1024 / 1024).toFixed()))
    }, !1);
    G(a.xb, "unsupported_filetype", function() {
        var c = a.N,
            d = DATA.Messages.CANT_READ_FILE,
            e = DATA.Messages.LEARN_MORE;
        R(c.v, "with-action");
        T(c.v, "with-message");
        E(c.h, d);
        E(c.o, e);
        c.b.removeAttribute("href");
        c.a =
            "unsupported_filetype_learn_more_clicked";
        XL(c)
    }, !1)
};
LM.prototype.Jj = function() {
    var a = this.a;
    if (DATA.UrlTranslation) {
        var b = B("source-wrap", a.v);
        V(b, !1);
        V(a.X.j(), !0)
    }
};
var cN = function(a) {
    var b = [];
    if (zw && AI(a)) b = [{
        trans: CI(a).map(function(g) {
            return g.tb()
        }).join("\n"),
        orig: I(a.bb(0), 1),
        translit: "",
        src_translit: I(a.bb(0), 3)
    }];
    else
        for (var c = 0; c < a.hc(); c++) {
            var d = {
                trans: a.bb(c).Tc(),
                orig: I(a.bb(c), 1),
                translit: I(a.bb(c), 2),
                src_translit: I(a.bb(c), 3)
            };
            b[c] = d
        }
    d = [];
    for (c = 0; c < H(a, 1); c++) {
        for (var e = [], f = 0; f < H(Fh(a, c), 1); f++) e[f] = mq(Fh(a, c), f);
        e = {
            pos: I(Fh(a, c), 0),
            terms: e
        };
        d[c] = e
    }
    return {
        sentences: b,
        src: I(a, 2),
        dict: d
    }
};
LM.prototype.Lm = function(a, b, c, d, e) {
    this.V.setVisible(!1);
    this.ie = {};
    var f = cN(e);
    if (this.m) {
        var g = this.m.w,
            k = this.m.Pa(),
            l = this.m.ma(),
            m = this.m.a;
        k === b && l === c && vc(d, m) || SM(this, m, g, k, l);
        k === b && l === c && vc(m, d) || (this.m = new PF(d, f, b, c))
    } else this.m = new PF(d, f, b, c);
    a || (SM(this, d, f, b, c), this.m = new PF(d, f, b, c));
    Gh(e, 7) && (a = I(Jq(e), 1), g = Jl(Jq(e), 5), this.V.show({
        ji: I(Jq(e), 0),
        ue: a,
        gi: g,
        dj: Ov(this.a.a),
        ve: Array.from(Kl(Jq(e), 2).slice().values()),
        nj: this.ea.a,
        result: e
    }), this.V.K = !0);
    "auto" == this.ea.a && Wv(this.ea,
        I(e, 2));
    a = this.ea;
    Yv(a.a, a.o);
    Yv(a.b, a.m);
    new tq(e.a[8]);
    a = [];
    for (g = 0; g < H(new tq(e.a[8]), 0); ++g) k = new tq(e.a[8]), k = Ih(k, 0, g), a.push(k);
    Sv(this.ea, a);
    a = this.ea;
    g = "auto" == a.a ? "" : a.a;
    k = dw(a.o, g);
    k.push(a.a);
    a.W = Gb(k);
    k = k.concat(dw(a.L.a, g));
    a.ia.update(k);
    a = this.ea;
    g = dw(a.m, a.b);
    g.push(a.b);
    a.X.update(g);
    R(document.body, "show-result");
    this.a.update(d, e, this.V.b);
    Ou(e);
    this.h.update(d, f, b, c, e);
    y && LK(this.a);
    b = KL(this.h);
    this.Th ? (this.Th = !1, wG(this.wb, b, 0)) : QM(this);
    !this.W && B("tlid-debug-information",
        document.body) && (this.W = new ZJ);
    if (this.W && (b = this.W, $J(b), b.w && b.a && b.c && b.b && b.o && b.g && b.m && b.h && b.L && b.G && b.C)) {
        f = [];
        a = Nf("backend-models-used");
        g = Nf("backend-models-checksum");
        k = Nf("backend-models-launch-doc");
        if (e.bb(0))
            for (l = 0; l < e.hc(); l++) {
                m = e.bb(l);
                Gh(m, 0) && m.Tc() && f.push(m.qf());
                if (0 < H(m, 5)) {
                    for (var q = 0; q < H(m, 5); q++) aK(a, "https://cnsviewer.corp.google.com" + Ih(m, 5, q), Ih(m, 5, q));
                    a.appendChild(cg("br"))
                }
                if (0 < H(m, 8)) {
                    for (q = 0; q < H(m, 8); q++) {
                        var r = new Zl((new am(Ll(m, 8, q))).a[0]);
                        aK(g, "http://go/bleu-eval-dashboard?fb=Checksum:in:" +
                            I(r, 0), I(r, 0));
                        "" != I(r, 1) && "TODO" != I(r, 1) ? aK(k, "https://g3doc.corp.google.com/nlp/nmt/models/g3doc/" + I(r, 1), I(r, 1)) : aK(k, "http://go/no-launch-doc-doc", "Temp_Doc")
                    }
                    g.appendChild(cg("br"));
                    k.appendChild(cg("br"))
                }
            }
        for (r = q = m = l = k = g = a = 0; r < f.length; r++) 0 === f[r] ? a++ : 3 === f[r] ? g++ : 4 === f[r] ? k++ : 1 === f[r] ? l++ : 2 === f[r] ? m++ : 10 === f[r] && q++;
        f = a + g;
        r = l + m;
        E(b.o, a.toString());
        E(b.g, g.toString());
        E(b.m, k.toString());
        E(b.b, f.toString());
        E(b.a, l.toString());
        E(b.c, m.toString());
        E(b.w, r.toString());
        E(b.h, q.toString())
    }
    b =
        this.G;
    f = I(e, 2);
    b.g.reset();
    b.g.push(d, f, c, e);
    this.Ye = Xf(document).a;
    d = ba(this.Ob);
    for (b = d.next(); !b.done; b = d.next()) b.value.Ia();
    this.Ob = [];
    this.Ob.push(new dA(this.a.a.j(), "orig", 13, "webapp"));
    dN(this, this.ld);
    dN(this, this.Hd);
    dN(this, this.md);
    (d = B("show-panel", this.v)) && T(d, "show-panel");
    JA(this.L, !1);
    this.Z && CH(this.Z, I(e, 2), c)
};
var QM = function(a) {
        var b = KL(a.h);
        zG(a.wb, b, function(c) {
            QL(a.h, b, c);
            null != a.c ? c ? gJ(a.c.a, b) : tJ(a.c.a) : c && (a.yc = b)
        })
    },
    SM = function(a, b, c, d, e) {
        var f = a.O;
        if (null == f.a) {
            var g = new PF(b, c, d, e);
            f.c.push(g)
        } else f.a && (g = new PF(b, c, d, e), f = f.a, MI(f, g), U(f.v, "empty", !1), NI(f, f.a.length));
        a.Tj(b, c, d, e)
    };
LM.prototype.Am = function(a) {
    var b = this.h;
    a = 413 == a ? MSG_REQUEST_TOO_BIG : MSG_TRANSLATION_ERROR;
    R(b.b, "empty");
    R(b.b, "result-error");
    T(b.b, "translating");
    E(b.K, a);
    E(b.L, a);
    V(b.h, !0);
    V(b.g, !1)
};
var Br = function(a, b, c, d, e) {
    null != e && Al(a.K, e);
    a.a.a.b(d);
    if (b) {
        var f = void 0;
        "tws_lsugg" == e && (f = 3);
        a.ea.g(b, f);
        a.K.c = b;
        f = a.fb;
        uH(f, f.a, b)
    }
    c && ("auto" !== c && a.ea.h(c), c = a.ea.b, a.K.g = c, b = a.fb, uH(b, b.b, c));
    c = a.a.O;
    b = a.ea.a;
    f = a.ea.b;
    c.h = yD(d);
    c.b = b;
    c.c = f;
    pD(c);
    e && Sm(a.w, "source", e);
    a.X(!1, e)
};
LM.prototype.dk = function(a) {
    null != this.c && OJ(this.c, a);
    a = this.O;
    null == a.a ? a.g = !0 : a.a && UI(a.a)
};
LM.prototype.Qj = function(a, b) {
    QL(this.h, a, b);
    var c = this.O;
    if (null != c.a && c.a) {
        c = c.a;
        for (var d = 0; d < c.a.length; d++) {
            var e = c.a[d];
            TF(e.a, a) && e.nh(b)
        }
    }
    if (null != this.c)
        if (b) b = this.c.a, c = WF(a), b.a.push(c), sJ(b, c) && b.h.push(c), iJ(b, b.N), eJ(b, QF(c), c.ma()), 1 === b.a.length && b.dispatchEvent("list_no_longer_empty"), this.h.a[0] && TF(KL(this.h), a) && gJ(this.c.a, a);
        else {
            b = this.c.a;
            d = !1;
            for (c = b.a.length - 1; 0 <= c; c--)
                if (e = b.a[c], TF(e, a)) {
                    d = qJ(e);
                    e = b.O[d];
                    b.b === e && (b.b = null);
                    sh(e);
                    delete b.O[d];
                    b.a.splice(c, 1);
                    d = !0;
                    e = b;
                    var f = QF(a),
                        g = a.ma(),
                        k = f + "|" + g,
                        l = e.m.get(k);
                    l && (1 === l ? (e.m.delete(k), e.dispatchEvent({
                        type: "language_pair_removed",
                        gb: f,
                        hb: g
                    })) : e.m.set(k, l - 1))
                } d && (b.L || (b.w && null != b.c && null != b.g ? kJ(b, b.c, b.g) : b.G ? jJ(b, b.C) : (a = b.o, 0 < b.o && b.o + 1 > nJ(b) && (a = b.o - 1), fJ(b, a))), 0 === mJ(b).length && b.dispatchEvent("last_displayed_entry_deleted"), 0 === b.a.length && (b.dispatchEvent("list_empty"), b.L && (b.b = null, fJ(b, 0), b.dispatchEvent("delete_all_complete"), b.L = !1)))
        }
    else b && (this.yc = a)
};
LM.prototype.Rj = function() {
    var a = this;
    Fi(function() {
        return eN(a)
    }, 0)
};
var eN = function(a) {
        var b = Ov(a.a.a),
            c = a.ea.a,
            d = a.ea.b;
        if (Mu(b)) {
            var e = new Wm(n.location.href.split("#")[0]);
            Zm(e, "translate");
            mn(e, "sl", [c ? c : "auto"]);
            mn(e, "tl", [d]);
            mn(e, "u", [b]);
            be(e.toString())
        } else Sm(a.w, "source", "btn"), Al(a.K, "btn"), a.X(!1), Fi(function() {
            pD(a.a.O)
        }, 0), n.scrollTo(0, 0), DATA.EnableSearchTooltip && a.gn && RL(a.h)
    },
    KM = function(a) {
        var b = a.ea.a,
            c = a.ea.b;
        T(document.body, "show-result");
        a.V.show({
            ue: ""
        });
        a.G.update("", b, c, new Hq);
        Sv(a.ea, null);
        a.a.update("", new Hq, !1);
        b = a.h;
        NL(b, !1);
        PL(b,
            !0);
        JL(b);
        a.W && $J(a.W)
    };
LM.prototype.Sh = function() {
    null != this.c && tJ(this.c.a);
    KM(this)
};
LM.prototype.X = function(a, b) {
    this.zo.reset(a);
    var c = Ov(this.a.a),
        d = xc(ne(c));
    this.K.G = c.substring(0, 64);
    this.K.a = null;
    var e = this.ea.a,
        f = this.ea.b;
    !mr() && a || "bh" === b || d && "ls" !== b || Gr(this.b, e, f, c, a);
    if (d) this.Sh();
    else if (QA(this.L), d = new cn(Vm(this.w)), d.g(new cn(Nu(this.na))), d.add("kc", Pv(this.a.a)), JA(this.L, !0), ML(this.h, 1), Em(this.F), b = "tws_revert" !== b, bv(this.hd, e, f, DATA.DisplayLanguage, c, p(this.Lm, this, a, e, f, c), b, void 0, d, p(this.Am, this)), a = !1, TM(this, c) ? (RM(this), a = !0) : c.length >= this.o.length &&
        (a = !0), a && (this.o = c, this.Ze = e, this.nd = f), DATA.CompareProdTrans) {
        a = an(d);
        a.add("internal", 1);
        a.add("expflags", "NMT__enable_nmt_level:0");
        d = new CE("webapp", "https://translate.google.com");
        var g = this.he;
        bv(d, e, f, DATA.DisplayLanguage, c, function(k) {
            ig(g);
            V(g, !!k);
            if (k) {
                for (var l = [], m = 0; m < k.hc(); m++) l.push(k.bb(m).Tc());
                E(g, l.join(""))
            }
        }, !0, void 0, a)
    }
};
LM.prototype.Ho = function(a) {
    if (a && a.data && 0 < a.data.length) {
        a = a.data[0];
        var b = yI(a);
        if (b) {
            this.K.o = a;
            var c = this.fb;
            uH(c, c.a, a);
            this.V.show({
                ue: b,
                Bh: a,
                dj: Ov(this.a.a),
                nj: this.ea.a
            })
        }
    }
};
var HM = function(a, b, c, d, e, f, g, k) {
    var l = C(b, a.v);
    b = C("tlid-dismiss-promo", l);
    var m = C("tlid-accept-promo", l);
    d = "/translate/uc?ua=dismiss&uav=" + d;
    n.setTimeout(function() {
        R(l, "show-panel")
    }, 400);
    Pm(oI, "webapp", c, "show");
    wm(a.F, e);
    f();
    G(b, "click", p(a.Yj, a, l, d, c, e, g), !1, a);
    G(m, "click", p(a.Xj, a, l, d, c, e, k), !1, a)
};
LM.prototype.Xj = function(a, b, c, d, e) {
    xm(this.F, d);
    T(a, "show-panel");
    Om(this.w, b);
    Pm(oI, "webapp", c, "accept");
    e()
};
LM.prototype.Yj = function(a, b, c, d, e) {
    var f = this.F;
    L(f, vm(f, 74, d));
    T(a, "show-panel");
    Om(this.w, b);
    Pm(oI, "webapp", c, "dismiss");
    e()
};
LM.prototype.Rn = function(a) {
    $d(n.location, a)
};
var GM = function(a, b, c) {
    HM(a, "at-promo", "atPromo", "at", c, Ga, Ga, p(a.Rn, a, b))
};
LM.prototype.Zj = function() {
    Eh("gsa", "gsaAd:accept", "", 1);
    rI(void 0, 0)
};
LM.prototype.Pj = function() {
    fN(this, this.ld);
    fN(this, this.Hd);
    fN(this, this.md);
    return !1
};
var fN = function(a, b) {
        var c = b.j();
        if (null != c) {
            var d = cp(c).a;
            c = d + lp(c).height;
            c > n.innerHeight + a.Ye && (gN(a, d, !0, b), gN(a, c, !1, b))
        }
    },
    gN = function(a, b, c, d) {
        var e = c ? "top" : "bot",
            f = d.Jb(),
            g = f + "_" + e,
            k = Xf(document).a;
        b > k && b < k + n.innerHeight && !a.ie[g] && (a.ie[g] = !0, a.w.log("card_scroll", {
            card: f,
            position: e
        }), a = a.F, b = d.Md(), e = d.eb(), L(a, im(a, c ? 213 : 214, b, e, d.qc, 0)))
    },
    dN = function(a, b) {
        var c = b.j();
        c && a.Ob.push(new dA(c, b.Jb(), b.Md(), "webapp"))
    };
LM.prototype.Io = function(a) {
    var b = Nf("gt-ntfcn-msg");
    b && (b.textContent = a, this.Ph.setVisible(!0, 2E3))
};
LM.prototype.Sj = function() {
    Pu(Er(this.b).toString())
};
var IM = function(a) {
        var b = window.gapi;
        b && (b.load("iframes", function() {
            if (this.Fa && null != window.gapi && null != window.gapi.iframes) {
                var c = this.Fa;
                if (null != window.gapi && null != window.gapi.iframes && null == c.a && null != c.v) {
                    var d = B("tlid-community-instant-container", c.v);
                    if (null != d) {
                        var e = window.gapi.iframes,
                            f = new Wm;
                        f.b = "" === DATA.CommunityInstantHostname ? window.location.hostname : DATA.CommunityInstantHostname;
                        var g = DATA.InstantPrefetchSourceLanguage || "",
                            k = DATA.InstantPrefetchTargetLanguage || "";
                        Zm(f, "/instant/select_pair");
                        f.a.set("source", g);
                        f.a.set("target", k);
                        f.a.set("hl", DATA.DisplayLanguage);
                        f.a.set("origin", window.location.protocol + "//" + window.location.hostname);
                        f.a.set("parent", window.location.protocol + "//" + window.location.hostname);
                        c.a = e.getContext().openChild({
                            url: f.toString(),
                            where: d,
                            messageHandlers: {
                                closeInstant: c.w.bind(c),
                                notifyTasksAvailable: c.m.bind(c)
                            },
                            messageHandlersFilter: c.b
                        });
                        "" != g && "" != k && c.a.send("restartInstant", {
                            source: g,
                            target: k
                        }, void 0, c.b)
                    }
                }
                Eh("community", "instant:loaded", "", 1);
                c = this.F;
                L(c,
                    M(c, 372))
            }
            "instant" === Er(this.b).b && !XM() && YM(this)
        }.bind(a)), b.load("client", function() {
            var c = b.client,
                d = b.config;
            d.update("googleapis.config/auth/useFirstPartyAuth", !0);
            d.update("googleapis.config/auth/useFirstPartyAuthV2", !0);
            d.update("client/xd4", !0);
            c.setApiKey("AIzaSyA8PX4bTrtr1-DtDsGJSbTXQkfWbWkCjTM")
        }))
    },
    RM = function(a, b) {
        if ("" !== a.o) {
            var c = a.F,
                d = a.o,
                e = a.nd,
                f = a.jd,
                g = M(c, 246);
            e = A(g, 1, e);
            e = A(e, 74, d.length);
            d = A(e, 52, d.substring(0, 64));
            e = new Rk;
            f = A(e, 1, f); of (d, 70, f);
            L(c, d);
            64 < a.o.length && (a.o =
                a.o.substr(0, 64));
            c = {
                sl: a.Ze,
                tl: a.nd,
                ql: a.o.length,
                q: a.o,
                pc: a.jd
            };
            b && (c[b] = 1);
            a.jd = a.ke;
            a.ke = 0;
            a.w.log("fq", c);
            a.o = ""
        }
    },
    TM = function(a, b) {
        return "" !== a.o && b[0] !== a.o[0] && b[b.length - 1] !== a.o[a.o.length - 1]
    },
    DM = function(a) {
        if (DATA.FeatureStickiness) {
            var b = JSON.parse(DATA.FeatureStickiness);
            null == b && (b = []);
            b = new kM(b);
            if (Gh(b, 2)) {
                a = a.Lj;
                b = new eM(b.a[2]);
                a.a = {};
                a.a["gt-input-tool"] = new $y;
                for (var c, d = 0; d < H(b, 3); ++d)
                    if (c = new aM(Ll(b, 3, d)), 0 == !!c.getState())
                        for (var e in a.a) a.a[e].update(I(c, 0), !1, "");
                a.c = {};
                for (d = 0; d < H(b, 1); ++d) c = new aM(Ll(b, 1, d)), a.c[I(c, 0)] = !!c.getState();
                a.b = {};
                for (d = 0; d < H(b, 2); ++d) c = new aM(Ll(b, 2, d)), a.b[I(c, 0)] = !!c.getState();
                for (d = 0; d < H(b, 9); ++d) e = new cM(Ll(b, 9, d)), (Gh(e, 3) ? dz(a, I(e, 3), !0) : dz(a, "gt-input-tool", !0)).update(I(e, 0), e.getState(), I(e, 2))
            }
        }
    };
var hN = {},
    iN = null,
    jN = function(a, b, c) {
        if (a = hN[c]) "history" == a.o ? (b = a.c, L(b, Hm(b, 61, pL(a), null != a.b && a.b.b))) : "saved" == a.o && (oI.log("sli=sl", {}), b = a.c, L(b, Jm(b, 48))), a.dispatchEvent({
            type: "translate_requested",
            gb: a.a.Pa(),
            hb: a.a.ma(),
            text: a.a.a
        }), qI("populate", c, a.a.Pa(), a.a.ma(), a.a.a)
    },
    kN = TA("translate");
var xy = null,
    lN = null,
    yM = DATA.MaybeDefaultSourceLanguageCode || "auto",
    zM = DATA.MaybeDefaultTargetLanguageCode,
    nN = function() {
        var a = new mi(function(c) {
                NF(function() {
                    c()
                })
            }),
            b = new mi(function(c) {
                Dy(function(d, e) {
                    d ? (xy = e, mN(c)) : c()
                })
            });
        si([b, a])
    },
    mN = function(a) {
        By(xy.a, null, null, null, 100, function(b, c) {
            if (b) {
                b = [];
                for (var d = c.length - 1; 0 <= d; d--) {
                    var e = c[d],
                        f = e.sl,
                        g = e.tl,
                        k = e.src;
                    e = e.trg;
                    0 == d && (yM = f, zM = g);
                    b.push({
                        sl: f,
                        tl: g,
                        orig: k,
                        result: e
                    })
                }
                c = lN.O;
                d = [];
                for (f = 0; f < b.length; f++) g = b[f], d.push(new PF(g.orig, g.result,
                    g.sl, g.tl));
                c.a ? OI(c.a, d) : c.c = d
            }
            a()
        })
    },
    AM = function(a, b, c, d) {
        xy && zy(c, d, a, b)
    },
    BM = function() {
        xy && yy(xy.a, void 0, void 0, void 0, void 0)
    };
Aa("init", function() {
    var a = new tH;
    uH(a, a.c, DATA.DisplayLanguage);
    uH(a, a.a, yM);
    uH(a, a.b, zM);
    var b = cg("INPUT");
    b.id = "history-input";
    V(b, !1);
    var c = cg("IFRAME");
    c.id = "history-frame";
    c.src = "about:blank";
    V(c, !1);
    document.body.appendChild(b);
    document.body.appendChild(c);
    b = new Ar(!0, b, c);
    lN = new LM(a, b);
    document.body.appendChild(lN.j());
    iN || (iN = new hB(null, "TranslationItem"), jB(iN, kN, jN), iB.a.push(iN));
    uB || (uB = new hB(null, "LanguageListItem"), jB(uB, oB, tB), jB(uB, vB, BB), iB.a.push(uB));
    window.location.hash.substr(1) &&
        PM(lN, window.location.hash.substr(1));
    b.b.oa(!0);
    nN();
    DATA.UserInputQuery && Br(lN, yM, zM, DATA.UserInputQuery)
});
if (window.jstiming) {
    window.jstiming.oe = {};
    window.jstiming.sh = 1;
    var oN = function(a, b, c) {
            var d = a.t[b],
                e = a.t.start;
            if (d && (e || c)) return d = a.t[b][0], void 0 != c ? e = c : e = e[0], Math.round(d - e)
        },
        pN = function(a, b, c) {
            var d = "";
            window.jstiming.srt && (d += "&srt=" + window.jstiming.srt, delete window.jstiming.srt);
            window.jstiming.pt && (d += "&tbsrt=" + window.jstiming.pt, delete window.jstiming.pt);
            try {
                window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" +
                    window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
            } catch (r) {}
            var e = window.chrome;
            if (e && (e = e.loadTimes)) {
                e().wasFetchedViaSpdy && (d += "&p=s");
                if (e().wasNpnNegotiated) {
                    d += "&npn=1";
                    var f = e().npnNegotiatedProtocol;
                    f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
                }
                e().wasAlternateProtocolAvailable && (d += "&apa=1")
            }
            var g = a.t,
                k = g.start;
            e = [];
            f = [];
            for (var l in g)
                if ("start" != l && 0 != l.indexOf("_")) {
                    var m = g[l][1];
                    m ? g[m] && f.push(l + "." + oN(a, l, g[m][0])) : k && e.push(l + "." +
                        oN(a, l))
                } delete g.start;
            if (b)
                for (var q in b) d += "&" + q + "=" + b[q];
            (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
            return [b, "?v=3", "&s=" + (window.jstiming.sn || "translate_mobileweb") + "&action=", a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
        },
        qN = function(a, b, c) {
            a = pN(a, b, c);
            if (!a) return "";
            b = new Image;
            var d = window.jstiming.sh++;
            window.jstiming.oe[d] = b;
            b.onload = b.onerror = function() {
                window.jstiming && delete window.jstiming.oe[d]
            };
            b.src = a;
            b = null;
            return a
        };
    window.jstiming.report = function(a, b, c) {
        var d = document.visibilityState,
            e = "visibilitychange";
        d || (d = document.webkitVisibilityState, e = "webkitvisibilitychange");
        if ("prerender" == d) {
            var f = !1,
                g = function() {
                    if (!f) {
                        b ? b.prerender = "1" : b = {
                            prerender: "1"
                        };
                        if ("prerender" == (document.visibilityState || document.webkitVisibilityState)) var k = !1;
                        else qN(a, b, c), k = !0;
                        k && (f = !0, document.removeEventListener(e, g, !1))
                    }
                };
            document.addEventListener(e, g, !1);
            return ""
        }
        return qN(a, b, c)
    }
};