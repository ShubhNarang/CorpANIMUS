(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
    new MutationObserver(s => {
        for (const o of s)
            if (o.type === "childList")
                for (const a of o.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(s) {
        const o = {};
        return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function n(s) {
        if (s.ep) return;
        s.ep = !0;
        const o = r(s);
        fetch(s.href, o)
    }
})();
var Re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Mh(t) {
    if (t.__esModule) return t;
    var e = t.default;
    if (typeof e == "function") {
        var r = function n() {
            return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
        };
        r.prototype = e.prototype
    } else r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.keys(t).forEach(function(n) {
        var s = Object.getOwnPropertyDescriptor(t, n);
        Object.defineProperty(r, n, s.get ? s : {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    }), r
}
var Hc = {
        exports: {}
    },
    ei = {},
    Vc = {
        exports: {}
    },
    R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mn = Symbol.for("react.element"),
    Dh = Symbol.for("react.portal"),
    Uh = Symbol.for("react.fragment"),
    zh = Symbol.for("react.strict_mode"),
    Bh = Symbol.for("react.profiler"),
    Wh = Symbol.for("react.provider"),
    Hh = Symbol.for("react.context"),
    Vh = Symbol.for("react.forward_ref"),
    qh = Symbol.for("react.suspense"),
    Kh = Symbol.for("react.memo"),
    Gh = Symbol.for("react.lazy"),
    gl = Symbol.iterator;

function Jh(t) {
    return t === null || typeof t != "object" ? null : (t = gl && t[gl] || t["@@iterator"], typeof t == "function" ? t : null)
}
var qc = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Kc = Object.assign,
    Gc = {};

function Ur(t, e, r) {
    this.props = t, this.context = e, this.refs = Gc, this.updater = r || qc
}
Ur.prototype.isReactComponent = {};
Ur.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
};
Ur.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
};

function Jc() {}
Jc.prototype = Ur.prototype;

function ca(t, e, r) {
    this.props = t, this.context = e, this.refs = Gc, this.updater = r || qc
}
var ua = ca.prototype = new Jc;
ua.constructor = ca;
Kc(ua, Ur.prototype);
ua.isPureReactComponent = !0;
var xl = Array.isArray,
    Qc = Object.prototype.hasOwnProperty,
    da = {
        current: null
    },
    Yc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Xc(t, e, r) {
    var n, s = {},
        o = null,
        a = null;
    if (e != null)
        for (n in e.ref !== void 0 && (a = e.ref), e.key !== void 0 && (o = "" + e.key), e) Qc.call(e, n) && !Yc.hasOwnProperty(n) && (s[n] = e[n]);
    var l = arguments.length - 2;
    if (l === 1) s.children = r;
    else if (1 < l) {
        for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
        s.children = c
    }
    if (t && t.defaultProps)
        for (n in l = t.defaultProps, l) s[n] === void 0 && (s[n] = l[n]);
    return {
        $$typeof: Mn,
        type: t,
        key: o,
        ref: a,
        props: s,
        _owner: da.current
    }
}

function Qh(t, e) {
    return {
        $$typeof: Mn,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}

function ha(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Mn
}

function Yh(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(r) {
        return e[r]
    })
}
var yl = /\/+/g;

function _i(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? Yh("" + t.key) : e.toString(36)
}

function ps(t, e, r, n, s) {
    var o = typeof t;
    (o === "undefined" || o === "boolean") && (t = null);
    var a = !1;
    if (t === null) a = !0;
    else switch (o) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (t.$$typeof) {
                case Mn:
                case Dh:
                    a = !0
            }
    }
    if (a) return a = t, s = s(a), t = n === "" ? "." + _i(a, 0) : n, xl(s) ? (r = "", t != null && (r = t.replace(yl, "$&/") + "/"), ps(s, e, r, "", function(u) {
        return u
    })) : s != null && (ha(s) && (s = Qh(s, r + (!s.key || a && a.key === s.key ? "" : ("" + s.key).replace(yl, "$&/") + "/") + t)), e.push(s)), 1;
    if (a = 0, n = n === "" ? "." : n + ":", xl(t))
        for (var l = 0; l < t.length; l++) {
            o = t[l];
            var c = n + _i(o, l);
            a += ps(o, e, r, c, s)
        } else if (c = Jh(t), typeof c == "function")
            for (t = c.call(t), l = 0; !(o = t.next()).done;) o = o.value, c = n + _i(o, l++), a += ps(o, e, r, c, s);
        else if (o === "object") throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return a
}

function Gn(t, e, r) {
    if (t == null) return t;
    var n = [],
        s = 0;
    return ps(t, n, "", "", function(o) {
        return e.call(r, o, s++)
    }), n
}

function Xh(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(), e.then(function(r) {
            (t._status === 0 || t._status === -1) && (t._status = 1, t._result = r)
        }, function(r) {
            (t._status === 0 || t._status === -1) && (t._status = 2, t._result = r)
        }), t._status === -1 && (t._status = 0, t._result = e)
    }
    if (t._status === 1) return t._result.default;
    throw t._result
}
var pe = {
        current: null
    },
    gs = {
        transition: null
    },
    Zh = {
        ReactCurrentDispatcher: pe,
        ReactCurrentBatchConfig: gs,
        ReactCurrentOwner: da
    };

function Zc() {
    throw Error("act(...) is not supported in production builds of React.")
}
R.Children = {
    map: Gn,
    forEach: function(t, e, r) {
        Gn(t, function() {
            e.apply(this, arguments)
        }, r)
    },
    count: function(t) {
        var e = 0;
        return Gn(t, function() {
            e++
        }), e
    },
    toArray: function(t) {
        return Gn(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!ha(t)) throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
R.Component = Ur;
R.Fragment = Uh;
R.Profiler = Bh;
R.PureComponent = ca;
R.StrictMode = zh;
R.Suspense = qh;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zh;
R.act = Zc;
R.cloneElement = function(t, e, r) {
    if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var n = Kc({}, t.props),
        s = t.key,
        o = t.ref,
        a = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (o = e.ref, a = da.current), e.key !== void 0 && (s = "" + e.key), t.type && t.type.defaultProps) var l = t.type.defaultProps;
        for (c in e) Qc.call(e, c) && !Yc.hasOwnProperty(c) && (n[c] = e[c] === void 0 && l !== void 0 ? l[c] : e[c])
    }
    var c = arguments.length - 2;
    if (c === 1) n.children = r;
    else if (1 < c) {
        l = Array(c);
        for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
        n.children = l
    }
    return {
        $$typeof: Mn,
        type: t.type,
        key: s,
        ref: o,
        props: n,
        _owner: a
    }
};
R.createContext = function(t) {
    return t = {
        $$typeof: Hh,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, t.Provider = {
        $$typeof: Wh,
        _context: t
    }, t.Consumer = t
};
R.createElement = Xc;
R.createFactory = function(t) {
    var e = Xc.bind(null, t);
    return e.type = t, e
};
R.createRef = function() {
    return {
        current: null
    }
};
R.forwardRef = function(t) {
    return {
        $$typeof: Vh,
        render: t
    }
};
R.isValidElement = ha;
R.lazy = function(t) {
    return {
        $$typeof: Gh,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: Xh
    }
};
R.memo = function(t, e) {
    return {
        $$typeof: Kh,
        type: t,
        compare: e === void 0 ? null : e
    }
};
R.startTransition = function(t) {
    var e = gs.transition;
    gs.transition = {};
    try {
        t()
    } finally {
        gs.transition = e
    }
};
R.unstable_act = Zc;
R.useCallback = function(t, e) {
    return pe.current.useCallback(t, e)
};
R.useContext = function(t) {
    return pe.current.useContext(t)
};
R.useDebugValue = function() {};
R.useDeferredValue = function(t) {
    return pe.current.useDeferredValue(t)
};
R.useEffect = function(t, e) {
    return pe.current.useEffect(t, e)
};
R.useId = function() {
    return pe.current.useId()
};
R.useImperativeHandle = function(t, e, r) {
    return pe.current.useImperativeHandle(t, e, r)
};
R.useInsertionEffect = function(t, e) {
    return pe.current.useInsertionEffect(t, e)
};
R.useLayoutEffect = function(t, e) {
    return pe.current.useLayoutEffect(t, e)
};
R.useMemo = function(t, e) {
    return pe.current.useMemo(t, e)
};
R.useReducer = function(t, e, r) {
    return pe.current.useReducer(t, e, r)
};
R.useRef = function(t) {
    return pe.current.useRef(t)
};
R.useState = function(t) {
    return pe.current.useState(t)
};
R.useSyncExternalStore = function(t, e, r) {
    return pe.current.useSyncExternalStore(t, e, r)
};
R.useTransition = function() {
    return pe.current.useTransition()
};
R.version = "18.3.1";
Vc.exports = R;
var S = Vc.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ef = S,
    tf = Symbol.for("react.element"),
    rf = Symbol.for("react.fragment"),
    nf = Object.prototype.hasOwnProperty,
    sf = ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    of = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function eu(t, e, r) {
    var n, s = {},
        o = null,
        a = null;
    r !== void 0 && (o = "" + r), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (a = e.ref);
    for (n in e) nf.call(e, n) && !of.hasOwnProperty(n) && (s[n] = e[n]);
    if (t && t.defaultProps)
        for (n in e = t.defaultProps, e) s[n] === void 0 && (s[n] = e[n]);
    return {
        $$typeof: tf,
        type: t,
        key: o,
        ref: a,
        props: s,
        _owner: sf.current
    }
}
ei.Fragment = rf;
ei.jsx = eu;
ei.jsxs = eu;
Hc.exports = ei;
var i = Hc.exports,
    tu = {
        exports: {}
    },
    Fe = {},
    ru = {
        exports: {}
    },
    nu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function e(C, O) {
        var A = C.length;
        C.push(O);
        e: for (; 0 < A;) {
            var J = A - 1 >>> 1,
                re = C[J];
            if (0 < s(re, O)) C[J] = O, C[A] = re, A = J;
            else break e
        }
    }

    function r(C) {
        return C.length === 0 ? null : C[0]
    }

    function n(C) {
        if (C.length === 0) return null;
        var O = C[0],
            A = C.pop();
        if (A !== O) {
            C[0] = A;
            e: for (var J = 0, re = C.length, qn = re >>> 1; J < qn;) {
                var $t = 2 * (J + 1) - 1,
                    ki = C[$t],
                    Mt = $t + 1,
                    Kn = C[Mt];
                if (0 > s(ki, A)) Mt < re && 0 > s(Kn, ki) ? (C[J] = Kn, C[Mt] = A, J = Mt) : (C[J] = ki, C[$t] = A, J = $t);
                else if (Mt < re && 0 > s(Kn, A)) C[J] = Kn, C[Mt] = A, J = Mt;
                else break e
            }
        }
        return O
    }

    function s(C, O) {
        var A = C.sortIndex - O.sortIndex;
        return A !== 0 ? A : C.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        t.unstable_now = function() {
            return o.now()
        }
    } else {
        var a = Date,
            l = a.now();
        t.unstable_now = function() {
            return a.now() - l
        }
    }
    var c = [],
        u = [],
        h = 1,
        f = null,
        d = 3,
        p = !1,
        y = !1,
        v = !1,
        N = typeof setTimeout == "function" ? setTimeout : null,
        x = typeof clearTimeout == "function" ? clearTimeout : null,
        m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(C) {
        for (var O = r(u); O !== null;) {
            if (O.callback === null) n(u);
            else if (O.startTime <= C) n(u), O.sortIndex = O.expirationTime, e(c, O);
            else break;
            O = r(u)
        }
    }

    function w(C) {
        if (v = !1, g(C), !y)
            if (r(c) !== null) y = !0, ji(k);
            else {
                var O = r(u);
                O !== null && Ni(w, O.startTime - C)
            }
    }

    function k(C, O) {
        y = !1, v && (v = !1, x(F), F = -1), p = !0;
        var A = d;
        try {
            for (g(O), f = r(c); f !== null && (!(f.expirationTime > O) || C && !Me());) {
                var J = f.callback;
                if (typeof J == "function") {
                    f.callback = null, d = f.priorityLevel;
                    var re = J(f.expirationTime <= O);
                    O = t.unstable_now(), typeof re == "function" ? f.callback = re : f === r(c) && n(c), g(O)
                } else n(c);
                f = r(c)
            }
            if (f !== null) var qn = !0;
            else {
                var $t = r(u);
                $t !== null && Ni(w, $t.startTime - O), qn = !1
            }
            return qn
        } finally {
            f = null, d = A, p = !1
        }
    }
    var j = !1,
        _ = null,
        F = -1,
        G = 5,
        L = -1;

    function Me() {
        return !(t.unstable_now() - L < G)
    }

    function Vr() {
        if (_ !== null) {
            var C = t.unstable_now();
            L = C;
            var O = !0;
            try {
                O = _(!0, C)
            } finally {
                O ? qr() : (j = !1, _ = null)
            }
        } else j = !1
    }
    var qr;
    if (typeof m == "function") qr = function() {
        m(Vr)
    };
    else if (typeof MessageChannel < "u") {
        var pl = new MessageChannel,
            $h = pl.port2;
        pl.port1.onmessage = Vr, qr = function() {
            $h.postMessage(null)
        }
    } else qr = function() {
        N(Vr, 0)
    };

    function ji(C) {
        _ = C, j || (j = !0, qr())
    }

    function Ni(C, O) {
        F = N(function() {
            C(t.unstable_now())
        }, O)
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(C) {
        C.callback = null
    }, t.unstable_continueExecution = function() {
        y || p || (y = !0, ji(k))
    }, t.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < C ? Math.floor(1e3 / C) : 5
    }, t.unstable_getCurrentPriorityLevel = function() {
        return d
    }, t.unstable_getFirstCallbackNode = function() {
        return r(c)
    }, t.unstable_next = function(C) {
        switch (d) {
            case 1:
            case 2:
            case 3:
                var O = 3;
                break;
            default:
                O = d
        }
        var A = d;
        d = O;
        try {
            return C()
        } finally {
            d = A
        }
    }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(C, O) {
        switch (C) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                C = 3
        }
        var A = d;
        d = C;
        try {
            return O()
        } finally {
            d = A
        }
    }, t.unstable_scheduleCallback = function(C, O, A) {
        var J = t.unstable_now();
        switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? J + A : J) : A = J, C) {
            case 1:
                var re = -1;
                break;
            case 2:
                re = 250;
                break;
            case 5:
                re = 1073741823;
                break;
            case 4:
                re = 1e4;
                break;
            default:
                re = 5e3
        }
        return re = A + re, C = {
            id: h++,
            callback: O,
            priorityLevel: C,
            startTime: A,
            expirationTime: re,
            sortIndex: -1
        }, A > J ? (C.sortIndex = A, e(u, C), r(c) === null && C === r(u) && (v ? (x(F), F = -1) : v = !0, Ni(w, A - J))) : (C.sortIndex = re, e(c, C), y || p || (y = !0, ji(k))), C
    }, t.unstable_shouldYield = Me, t.unstable_wrapCallback = function(C) {
        var O = d;
        return function() {
            var A = d;
            d = O;
            try {
                return C.apply(this, arguments)
            } finally {
                d = A
            }
        }
    }
})(nu);
ru.exports = nu;
var af = ru.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lf = S,
    Ee = af;

function b(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1; r < arguments.length; r++) e += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var su = new Set,
    wn = {};

function tr(t, e) {
    Or(t, e), Or(t + "Capture", e)
}

function Or(t, e) {
    for (wn[t] = e, t = 0; t < e.length; t++) su.add(e[t])
}
var lt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    io = Object.prototype.hasOwnProperty,
    cf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    vl = {},
    wl = {};

function uf(t) {
    return io.call(wl, t) ? !0 : io.call(vl, t) ? !1 : cf.test(t) ? wl[t] = !0 : (vl[t] = !0, !1)
}

function df(t, e, r, n) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof e) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return n ? !1 : r !== null ? !r.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
        default:
            return !1
    }
}

function hf(t, e, r, n) {
    if (e === null || typeof e > "u" || df(t, e, r, n)) return !0;
    if (n) return !1;
    if (r !== null) switch (r.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
    }
    return !1
}

function ge(t, e, r, n, s, o, a) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = n, this.attributeNamespace = s, this.mustUseProperty = r, this.propertyName = t, this.type = e, this.sanitizeURL = o, this.removeEmptyString = a
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    ae[t] = new ge(t, 0, !1, t, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(t) {
    var e = t[0];
    ae[e] = new ge(e, 1, !1, t[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    ae[t] = new ge(t, 2, !1, t.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    ae[t] = new ge(t, 2, !1, t, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    ae[t] = new ge(t, 3, !1, t.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
    ae[t] = new ge(t, 3, !0, t, null, !1, !1)
});
["capture", "download"].forEach(function(t) {
    ae[t] = new ge(t, 4, !1, t, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
    ae[t] = new ge(t, 6, !1, t, null, !1, !1)
});
["rowSpan", "start"].forEach(function(t) {
    ae[t] = new ge(t, 5, !1, t.toLowerCase(), null, !1, !1)
});
var fa = /[\-:]([a-z])/g;

function ma(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var e = t.replace(fa, ma);
    ae[e] = new ge(e, 1, !1, t, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var e = t.replace(fa, ma);
    ae[e] = new ge(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var e = t.replace(fa, ma);
    ae[e] = new ge(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
    ae[t] = new ge(t, 1, !1, t.toLowerCase(), null, !1, !1)
});
ae.xlinkHref = new ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(t) {
    ae[t] = new ge(t, 1, !1, t.toLowerCase(), null, !0, !0)
});

function pa(t, e, r, n) {
    var s = ae.hasOwnProperty(e) ? ae[e] : null;
    (s !== null ? s.type !== 0 : n || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (hf(e, r, s, n) && (r = null), n || s === null ? uf(e) && (r === null ? t.removeAttribute(e) : t.setAttribute(e, "" + r)) : s.mustUseProperty ? t[s.propertyName] = r === null ? s.type === 3 ? !1 : "" : r : (e = s.attributeName, n = s.attributeNamespace, r === null ? t.removeAttribute(e) : (s = s.type, r = s === 3 || s === 4 && r === !0 ? "" : "" + r, n ? t.setAttributeNS(n, e, r) : t.setAttribute(e, r))))
}
var ht = lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Jn = Symbol.for("react.element"),
    fr = Symbol.for("react.portal"),
    mr = Symbol.for("react.fragment"),
    ga = Symbol.for("react.strict_mode"),
    oo = Symbol.for("react.profiler"),
    iu = Symbol.for("react.provider"),
    ou = Symbol.for("react.context"),
    xa = Symbol.for("react.forward_ref"),
    ao = Symbol.for("react.suspense"),
    lo = Symbol.for("react.suspense_list"),
    ya = Symbol.for("react.memo"),
    gt = Symbol.for("react.lazy"),
    au = Symbol.for("react.offscreen"),
    bl = Symbol.iterator;

function Kr(t) {
    return t === null || typeof t != "object" ? null : (t = bl && t[bl] || t["@@iterator"], typeof t == "function" ? t : null)
}
var q = Object.assign,
    Si;

function rn(t) {
    if (Si === void 0) try {
        throw Error()
    } catch (r) {
        var e = r.stack.trim().match(/\n( *(at )?)/);
        Si = e && e[1] || ""
    }
    return `
` + Si + t
}
var Ei = !1;

function Ci(t, e) {
    if (!t || Ei) return "";
    Ei = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                    throw Error()
                }, Object.defineProperty(e.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (u) {
                    var n = u
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (u) {
                    n = u
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                n = u
            }
            t()
        }
    } catch (u) {
        if (u && n && typeof u.stack == "string") {
            for (var s = u.stack.split(`
`), o = n.stack.split(`
`), a = s.length - 1, l = o.length - 1; 1 <= a && 0 <= l && s[a] !== o[l];) l--;
            for (; 1 <= a && 0 <= l; a--, l--)
                if (s[a] !== o[l]) {
                    if (a !== 1 || l !== 1)
                        do
                            if (a--, l--, 0 > l || s[a] !== o[l]) {
                                var c = `
` + s[a].replace(" at new ", " at ");
                                return t.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", t.displayName)), c
                            } while (1 <= a && 0 <= l);
                    break
                }
        }
    } finally {
        Ei = !1, Error.prepareStackTrace = r
    }
    return (t = t ? t.displayName || t.name : "") ? rn(t) : ""
}

function ff(t) {
    switch (t.tag) {
        case 5:
            return rn(t.type);
        case 16:
            return rn("Lazy");
        case 13:
            return rn("Suspense");
        case 19:
            return rn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return t = Ci(t.type, !1), t;
        case 11:
            return t = Ci(t.type.render, !1), t;
        case 1:
            return t = Ci(t.type, !0), t;
        default:
            return ""
    }
}

function co(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
        case mr:
            return "Fragment";
        case fr:
            return "Portal";
        case oo:
            return "Profiler";
        case ga:
            return "StrictMode";
        case ao:
            return "Suspense";
        case lo:
            return "SuspenseList"
    }
    if (typeof t == "object") switch (t.$$typeof) {
        case ou:
            return (t.displayName || "Context") + ".Consumer";
        case iu:
            return (t._context.displayName || "Context") + ".Provider";
        case xa:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case ya:
            return e = t.displayName || null, e !== null ? e : co(t.type) || "Memo";
        case gt:
            e = t._payload, t = t._init;
            try {
                return co(t(e))
            } catch {}
    }
    return null
}

function mf(t) {
    var e = t.type;
    switch (t.tag) {
        case 24:
            return "Cache";
        case 9:
            return (e.displayName || "Context") + ".Consumer";
        case 10:
            return (e._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return e;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return co(e);
        case 8:
            return e === ga ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof e == "function") return e.displayName || e.name || null;
            if (typeof e == "string") return e
    }
    return null
}

function Pt(t) {
    switch (typeof t) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
    }
}

function lu(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}

function pf(t) {
    var e = lu(t) ? "checked" : "value",
        r = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
        n = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var s = r.get,
            o = r.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function() {
                return s.call(this)
            },
            set: function(a) {
                n = "" + a, o.call(this, a)
            }
        }), Object.defineProperty(t, e, {
            enumerable: r.enumerable
        }), {
            getValue: function() {
                return n
            },
            setValue: function(a) {
                n = "" + a
            },
            stopTracking: function() {
                t._valueTracker = null, delete t[e]
            }
        }
    }
}

function Qn(t) {
    t._valueTracker || (t._valueTracker = pf(t))
}

function cu(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var r = e.getValue(),
        n = "";
    return t && (n = lu(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== r ? (e.setValue(t), !0) : !1
}

function Es(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}

function uo(t, e) {
    var r = e.checked;
    return q({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? t._wrapperState.initialChecked
    })
}

function jl(t, e) {
    var r = e.defaultValue == null ? "" : e.defaultValue,
        n = e.checked != null ? e.checked : e.defaultChecked;
    r = Pt(e.value != null ? e.value : r), t._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}

function uu(t, e) {
    e = e.checked, e != null && pa(t, "checked", e, !1)
}

function ho(t, e) {
    uu(t, e);
    var r = Pt(e.value),
        n = e.type;
    if (r != null) n === "number" ? (r === 0 && t.value === "" || t.value != r) && (t.value = "" + r) : t.value !== "" + r && (t.value = "" + r);
    else if (n === "submit" || n === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? fo(t, e.type, r) : e.hasOwnProperty("defaultValue") && fo(t, e.type, Pt(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}

function Nl(t, e, r) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var n = e.type;
        if (!(n !== "submit" && n !== "reset" || e.value !== void 0 && e.value !== null)) return;
        e = "" + t._wrapperState.initialValue, r || e === t.value || (t.value = e), t.defaultValue = e
    }
    r = t.name, r !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, r !== "" && (t.name = r)
}

function fo(t, e, r) {
    (e !== "number" || Es(t.ownerDocument) !== t) && (r == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + r && (t.defaultValue = "" + r))
}
var nn = Array.isArray;

function Sr(t, e, r, n) {
    if (t = t.options, e) {
        e = {};
        for (var s = 0; s < r.length; s++) e["$" + r[s]] = !0;
        for (r = 0; r < t.length; r++) s = e.hasOwnProperty("$" + t[r].value), t[r].selected !== s && (t[r].selected = s), s && n && (t[r].defaultSelected = !0)
    } else {
        for (r = "" + Pt(r), e = null, s = 0; s < t.length; s++) {
            if (t[s].value === r) {
                t[s].selected = !0, n && (t[s].defaultSelected = !0);
                return
            }
            e !== null || t[s].disabled || (e = t[s])
        }
        e !== null && (e.selected = !0)
    }
}

function mo(t, e) {
    if (e.dangerouslySetInnerHTML != null) throw Error(b(91));
    return q({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}

function kl(t, e) {
    var r = e.value;
    if (r == null) {
        if (r = e.children, e = e.defaultValue, r != null) {
            if (e != null) throw Error(b(92));
            if (nn(r)) {
                if (1 < r.length) throw Error(b(93));
                r = r[0]
            }
            e = r
        }
        e == null && (e = ""), r = e
    }
    t._wrapperState = {
        initialValue: Pt(r)
    }
}

function du(t, e) {
    var r = Pt(e.value),
        n = Pt(e.defaultValue);
    r != null && (r = "" + r, r !== t.value && (t.value = r), e.defaultValue == null && t.defaultValue !== r && (t.defaultValue = r)), n != null && (t.defaultValue = "" + n)
}

function _l(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}

function hu(t) {
    switch (t) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function po(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? hu(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var Yn, fu = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, r, n, s) {
        MSApp.execUnsafeLocalFunction(function() {
            return t(e, r, n, s)
        })
    } : t
}(function(t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = e;
    else {
        for (Yn = Yn || document.createElement("div"), Yn.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Yn.firstChild; t.firstChild;) t.removeChild(t.firstChild);
        for (; e.firstChild;) t.appendChild(e.firstChild)
    }
});

function bn(t, e) {
    if (e) {
        var r = t.firstChild;
        if (r && r === t.lastChild && r.nodeType === 3) {
            r.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var ln = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    gf = ["Webkit", "ms", "Moz", "O"];
Object.keys(ln).forEach(function(t) {
    gf.forEach(function(e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1), ln[e] = ln[t]
    })
});

function mu(t, e, r) {
    return e == null || typeof e == "boolean" || e === "" ? "" : r || typeof e != "number" || e === 0 || ln.hasOwnProperty(t) && ln[t] ? ("" + e).trim() : e + "px"
}

function pu(t, e) {
    t = t.style;
    for (var r in e)
        if (e.hasOwnProperty(r)) {
            var n = r.indexOf("--") === 0,
                s = mu(r, e[r], n);
            r === "float" && (r = "cssFloat"), n ? t.setProperty(r, s) : t[r] = s
        }
}
var xf = q({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
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
});

function go(t, e) {
    if (e) {
        if (xf[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(b(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null) throw Error(b(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(b(61))
        }
        if (e.style != null && typeof e.style != "object") throw Error(b(62))
    }
}

function xo(t, e) {
    if (t.indexOf("-") === -1) return typeof e.is == "string";
    switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var yo = null;

function va(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
}
var vo = null,
    Er = null,
    Cr = null;

function Sl(t) {
    if (t = zn(t)) {
        if (typeof vo != "function") throw Error(b(280));
        var e = t.stateNode;
        e && (e = ii(e), vo(t.stateNode, t.type, e))
    }
}

function gu(t) {
    Er ? Cr ? Cr.push(t) : Cr = [t] : Er = t
}

function xu() {
    if (Er) {
        var t = Er,
            e = Cr;
        if (Cr = Er = null, Sl(t), e)
            for (t = 0; t < e.length; t++) Sl(e[t])
    }
}

function yu(t, e) {
    return t(e)
}

function vu() {}
var Fi = !1;

function wu(t, e, r) {
    if (Fi) return t(e, r);
    Fi = !0;
    try {
        return yu(t, e, r)
    } finally {
        Fi = !1, (Er !== null || Cr !== null) && (vu(), xu())
    }
}

function jn(t, e) {
    var r = t.stateNode;
    if (r === null) return null;
    var n = ii(r);
    if (n === null) return null;
    r = n[e];
    e: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (n = !n.disabled) || (t = t.type, n = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !n;
            break e;
        default:
            t = !1
    }
    if (t) return null;
    if (r && typeof r != "function") throw Error(b(231, e, typeof r));
    return r
}
var wo = !1;
if (lt) try {
    var Gr = {};
    Object.defineProperty(Gr, "passive", {
        get: function() {
            wo = !0
        }
    }), window.addEventListener("test", Gr, Gr), window.removeEventListener("test", Gr, Gr)
} catch {
    wo = !1
}

function yf(t, e, r, n, s, o, a, l, c) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(r, u)
    } catch (h) {
        this.onError(h)
    }
}
var cn = !1,
    Cs = null,
    Fs = !1,
    bo = null,
    vf = {
        onError: function(t) {
            cn = !0, Cs = t
        }
    };

function wf(t, e, r, n, s, o, a, l, c) {
    cn = !1, Cs = null, yf.apply(vf, arguments)
}

function bf(t, e, r, n, s, o, a, l, c) {
    if (wf.apply(this, arguments), cn) {
        if (cn) {
            var u = Cs;
            cn = !1, Cs = null
        } else throw Error(b(198));
        Fs || (Fs = !0, bo = u)
    }
}

function rr(t) {
    var e = t,
        r = t;
    if (t.alternate)
        for (; e.return;) e = e.return;
    else {
        t = e;
        do e = t, e.flags & 4098 && (r = e.return), t = e.return; while (t)
    }
    return e.tag === 3 ? r : null
}

function bu(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
    }
    return null
}

function El(t) {
    if (rr(t) !== t) throw Error(b(188))
}

function jf(t) {
    var e = t.alternate;
    if (!e) {
        if (e = rr(t), e === null) throw Error(b(188));
        return e !== t ? null : t
    }
    for (var r = t, n = e;;) {
        var s = r.return;
        if (s === null) break;
        var o = s.alternate;
        if (o === null) {
            if (n = s.return, n !== null) {
                r = n;
                continue
            }
            break
        }
        if (s.child === o.child) {
            for (o = s.child; o;) {
                if (o === r) return El(s), t;
                if (o === n) return El(s), e;
                o = o.sibling
            }
            throw Error(b(188))
        }
        if (r.return !== n.return) r = s, n = o;
        else {
            for (var a = !1, l = s.child; l;) {
                if (l === r) {
                    a = !0, r = s, n = o;
                    break
                }
                if (l === n) {
                    a = !0, n = s, r = o;
                    break
                }
                l = l.sibling
            }
            if (!a) {
                for (l = o.child; l;) {
                    if (l === r) {
                        a = !0, r = o, n = s;
                        break
                    }
                    if (l === n) {
                        a = !0, n = o, r = s;
                        break
                    }
                    l = l.sibling
                }
                if (!a) throw Error(b(189))
            }
        }
        if (r.alternate !== n) throw Error(b(190))
    }
    if (r.tag !== 3) throw Error(b(188));
    return r.stateNode.current === r ? t : e
}

function ju(t) {
    return t = jf(t), t !== null ? Nu(t) : null
}

function Nu(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null;) {
        var e = Nu(t);
        if (e !== null) return e;
        t = t.sibling
    }
    return null
}
var ku = Ee.unstable_scheduleCallback,
    Cl = Ee.unstable_cancelCallback,
    Nf = Ee.unstable_shouldYield,
    kf = Ee.unstable_requestPaint,
    Q = Ee.unstable_now,
    _f = Ee.unstable_getCurrentPriorityLevel,
    wa = Ee.unstable_ImmediatePriority,
    _u = Ee.unstable_UserBlockingPriority,
    Ts = Ee.unstable_NormalPriority,
    Sf = Ee.unstable_LowPriority,
    Su = Ee.unstable_IdlePriority,
    ti = null,
    Xe = null;

function Ef(t) {
    if (Xe && typeof Xe.onCommitFiberRoot == "function") try {
        Xe.onCommitFiberRoot(ti, t, void 0, (t.current.flags & 128) === 128)
    } catch {}
}
var Ve = Math.clz32 ? Math.clz32 : Tf,
    Cf = Math.log,
    Ff = Math.LN2;

function Tf(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Cf(t) / Ff | 0) | 0
}
var Xn = 64,
    Zn = 4194304;

function sn(t) {
    switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return t & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return t
    }
}

function Ps(t, e) {
    var r = t.pendingLanes;
    if (r === 0) return 0;
    var n = 0,
        s = t.suspendedLanes,
        o = t.pingedLanes,
        a = r & 268435455;
    if (a !== 0) {
        var l = a & ~s;
        l !== 0 ? n = sn(l) : (o &= a, o !== 0 && (n = sn(o)))
    } else a = r & ~s, a !== 0 ? n = sn(a) : o !== 0 && (n = sn(o));
    if (n === 0) return 0;
    if (e !== 0 && e !== n && !(e & s) && (s = n & -n, o = e & -e, s >= o || s === 16 && (o & 4194240) !== 0)) return e;
    if (n & 4 && (n |= r & 16), e = t.entangledLanes, e !== 0)
        for (t = t.entanglements, e &= n; 0 < e;) r = 31 - Ve(e), s = 1 << r, n |= t[r], e &= ~s;
    return n
}

function Pf(t, e) {
    switch (t) {
        case 1:
        case 2:
        case 4:
            return e + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Of(t, e) {
    for (var r = t.suspendedLanes, n = t.pingedLanes, s = t.expirationTimes, o = t.pendingLanes; 0 < o;) {
        var a = 31 - Ve(o),
            l = 1 << a,
            c = s[a];
        c === -1 ? (!(l & r) || l & n) && (s[a] = Pf(l, e)) : c <= e && (t.expiredLanes |= l), o &= ~l
    }
}

function jo(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}

function Eu() {
    var t = Xn;
    return Xn <<= 1, !(Xn & 4194240) && (Xn = 64), t
}

function Ti(t) {
    for (var e = [], r = 0; 31 > r; r++) e.push(t);
    return e
}

function Dn(t, e, r) {
    t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - Ve(e), t[e] = r
}

function Af(t, e) {
    var r = t.pendingLanes & ~e;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
    var n = t.eventTimes;
    for (t = t.expirationTimes; 0 < r;) {
        var s = 31 - Ve(r),
            o = 1 << s;
        e[s] = 0, n[s] = -1, t[s] = -1, r &= ~o
    }
}

function ba(t, e) {
    var r = t.entangledLanes |= e;
    for (t = t.entanglements; r;) {
        var n = 31 - Ve(r),
            s = 1 << n;
        s & e | t[n] & e && (t[n] |= e), r &= ~s
    }
}
var M = 0;

function Cu(t) {
    return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var Fu, ja, Tu, Pu, Ou, No = !1,
    es = [],
    Nt = null,
    kt = null,
    _t = null,
    Nn = new Map,
    kn = new Map,
    yt = [],
    If = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Fl(t, e) {
    switch (t) {
        case "focusin":
        case "focusout":
            Nt = null;
            break;
        case "dragenter":
        case "dragleave":
            kt = null;
            break;
        case "mouseover":
        case "mouseout":
            _t = null;
            break;
        case "pointerover":
        case "pointerout":
            Nn.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            kn.delete(e.pointerId)
    }
}

function Jr(t, e, r, n, s, o) {
    return t === null || t.nativeEvent !== o ? (t = {
        blockedOn: e,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: o,
        targetContainers: [s]
    }, e !== null && (e = zn(e), e !== null && ja(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t)
}

function Rf(t, e, r, n, s) {
    switch (e) {
        case "focusin":
            return Nt = Jr(Nt, t, e, r, n, s), !0;
        case "dragenter":
            return kt = Jr(kt, t, e, r, n, s), !0;
        case "mouseover":
            return _t = Jr(_t, t, e, r, n, s), !0;
        case "pointerover":
            var o = s.pointerId;
            return Nn.set(o, Jr(Nn.get(o) || null, t, e, r, n, s)), !0;
        case "gotpointercapture":
            return o = s.pointerId, kn.set(o, Jr(kn.get(o) || null, t, e, r, n, s)), !0
    }
    return !1
}

function Au(t) {
    var e = Vt(t.target);
    if (e !== null) {
        var r = rr(e);
        if (r !== null) {
            if (e = r.tag, e === 13) {
                if (e = bu(r), e !== null) {
                    t.blockedOn = e, Ou(t.priority, function() {
                        Tu(r)
                    });
                    return
                }
            } else if (e === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}

function xs(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
        var r = ko(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (r === null) {
            r = t.nativeEvent;
            var n = new r.constructor(r.type, r);
            yo = n, r.target.dispatchEvent(n), yo = null
        } else return e = zn(r), e !== null && ja(e), t.blockedOn = r, !1;
        e.shift()
    }
    return !0
}

function Tl(t, e, r) {
    xs(t) && r.delete(e)
}

function Lf() {
    No = !1, Nt !== null && xs(Nt) && (Nt = null), kt !== null && xs(kt) && (kt = null), _t !== null && xs(_t) && (_t = null), Nn.forEach(Tl), kn.forEach(Tl)
}

function Qr(t, e) {
    t.blockedOn === e && (t.blockedOn = null, No || (No = !0, Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, Lf)))
}

function _n(t) {
    function e(s) {
        return Qr(s, t)
    }
    if (0 < es.length) {
        Qr(es[0], t);
        for (var r = 1; r < es.length; r++) {
            var n = es[r];
            n.blockedOn === t && (n.blockedOn = null)
        }
    }
    for (Nt !== null && Qr(Nt, t), kt !== null && Qr(kt, t), _t !== null && Qr(_t, t), Nn.forEach(e), kn.forEach(e), r = 0; r < yt.length; r++) n = yt[r], n.blockedOn === t && (n.blockedOn = null);
    for (; 0 < yt.length && (r = yt[0], r.blockedOn === null);) Au(r), r.blockedOn === null && yt.shift()
}
var Fr = ht.ReactCurrentBatchConfig,
    Os = !0;

function $f(t, e, r, n) {
    var s = M,
        o = Fr.transition;
    Fr.transition = null;
    try {
        M = 1, Na(t, e, r, n)
    } finally {
        M = s, Fr.transition = o
    }
}

function Mf(t, e, r, n) {
    var s = M,
        o = Fr.transition;
    Fr.transition = null;
    try {
        M = 4, Na(t, e, r, n)
    } finally {
        M = s, Fr.transition = o
    }
}

function Na(t, e, r, n) {
    if (Os) {
        var s = ko(t, e, r, n);
        if (s === null) Ui(t, e, n, As, r), Fl(t, n);
        else if (Rf(s, t, e, r, n)) n.stopPropagation();
        else if (Fl(t, n), e & 4 && -1 < If.indexOf(t)) {
            for (; s !== null;) {
                var o = zn(s);
                if (o !== null && Fu(o), o = ko(t, e, r, n), o === null && Ui(t, e, n, As, r), o === s) break;
                s = o
            }
            s !== null && n.stopPropagation()
        } else Ui(t, e, n, null, r)
    }
}
var As = null;

function ko(t, e, r, n) {
    if (As = null, t = va(n), t = Vt(t), t !== null)
        if (e = rr(t), e === null) t = null;
        else if (r = e.tag, r === 13) {
        if (t = bu(e), t !== null) return t;
        t = null
    } else if (r === 3) {
        if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
        t = null
    } else e !== t && (t = null);
    return As = t, null
}

function Iu(t) {
    switch (t) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (_f()) {
                case wa:
                    return 1;
                case _u:
                    return 4;
                case Ts:
                case Sf:
                    return 16;
                case Su:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var bt = null,
    ka = null,
    ys = null;

function Ru() {
    if (ys) return ys;
    var t, e = ka,
        r = e.length,
        n, s = "value" in bt ? bt.value : bt.textContent,
        o = s.length;
    for (t = 0; t < r && e[t] === s[t]; t++);
    var a = r - t;
    for (n = 1; n <= a && e[r - n] === s[o - n]; n++);
    return ys = s.slice(t, 1 < n ? 1 - n : void 0)
}

function vs(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
}

function ts() {
    return !0
}

function Pl() {
    return !1
}

function Te(t) {
    function e(r, n, s, o, a) {
        this._reactName = r, this._targetInst = s, this.type = n, this.nativeEvent = o, this.target = a, this.currentTarget = null;
        for (var l in t) t.hasOwnProperty(l) && (r = t[l], this[l] = r ? r(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ts : Pl, this.isPropagationStopped = Pl, this
    }
    return q(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = ts)
        },
        stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = ts)
        },
        persist: function() {},
        isPersistent: ts
    }), e
}
var zr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    _a = Te(zr),
    Un = q({}, zr, {
        view: 0,
        detail: 0
    }),
    Df = Te(Un),
    Pi, Oi, Yr, ri = q({}, Un, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Sa,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX" in t ? t.movementX : (t !== Yr && (Yr && t.type === "mousemove" ? (Pi = t.screenX - Yr.screenX, Oi = t.screenY - Yr.screenY) : Oi = Pi = 0, Yr = t), Pi)
        },
        movementY: function(t) {
            return "movementY" in t ? t.movementY : Oi
        }
    }),
    Ol = Te(ri),
    Uf = q({}, ri, {
        dataTransfer: 0
    }),
    zf = Te(Uf),
    Bf = q({}, Un, {
        relatedTarget: 0
    }),
    Ai = Te(Bf),
    Wf = q({}, zr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Hf = Te(Wf),
    Vf = q({}, zr, {
        clipboardData: function(t) {
            return "clipboardData" in t ? t.clipboardData : window.clipboardData
        }
    }),
    qf = Te(Vf),
    Kf = q({}, zr, {
        data: 0
    }),
    Al = Te(Kf),
    Gf = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Jf = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Qf = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Yf(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Qf[t]) ? !!e[t] : !1
}

function Sa() {
    return Yf
}
var Xf = q({}, Un, {
        key: function(t) {
            if (t.key) {
                var e = Gf[t.key] || t.key;
                if (e !== "Unidentified") return e
            }
            return t.type === "keypress" ? (t = vs(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Jf[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Sa,
        charCode: function(t) {
            return t.type === "keypress" ? vs(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? vs(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    }),
    Zf = Te(Xf),
    em = q({}, ri, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Il = Te(em),
    tm = q({}, Un, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Sa
    }),
    rm = Te(tm),
    nm = q({}, zr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    sm = Te(nm),
    im = q({}, ri, {
        deltaX: function(t) {
            return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    om = Te(im),
    am = [9, 13, 27, 32],
    Ea = lt && "CompositionEvent" in window,
    un = null;
lt && "documentMode" in document && (un = document.documentMode);
var lm = lt && "TextEvent" in window && !un,
    Lu = lt && (!Ea || un && 8 < un && 11 >= un),
    Rl = " ",
    Ll = !1;

function $u(t, e) {
    switch (t) {
        case "keyup":
            return am.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Mu(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
}
var pr = !1;

function cm(t, e) {
    switch (t) {
        case "compositionend":
            return Mu(e);
        case "keypress":
            return e.which !== 32 ? null : (Ll = !0, Rl);
        case "textInput":
            return t = e.data, t === Rl && Ll ? null : t;
        default:
            return null
    }
}

function um(t, e) {
    if (pr) return t === "compositionend" || !Ea && $u(t, e) ? (t = Ru(), ys = ka = bt = null, pr = !1, t) : null;
    switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length) return e.char;
                if (e.which) return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return Lu && e.locale !== "ko" ? null : e.data;
        default:
            return null
    }
}
var dm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function $l(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!dm[t.type] : e === "textarea"
}

function Du(t, e, r, n) {
    gu(n), e = Is(e, "onChange"), 0 < e.length && (r = new _a("onChange", "change", null, r, n), t.push({
        event: r,
        listeners: e
    }))
}
var dn = null,
    Sn = null;

function hm(t) {
    Qu(t, 0)
}

function ni(t) {
    var e = yr(t);
    if (cu(e)) return t
}

function fm(t, e) {
    if (t === "change") return e
}
var Uu = !1;
if (lt) {
    var Ii;
    if (lt) {
        var Ri = "oninput" in document;
        if (!Ri) {
            var Ml = document.createElement("div");
            Ml.setAttribute("oninput", "return;"), Ri = typeof Ml.oninput == "function"
        }
        Ii = Ri
    } else Ii = !1;
    Uu = Ii && (!document.documentMode || 9 < document.documentMode)
}

function Dl() {
    dn && (dn.detachEvent("onpropertychange", zu), Sn = dn = null)
}

function zu(t) {
    if (t.propertyName === "value" && ni(Sn)) {
        var e = [];
        Du(e, Sn, t, va(t)), wu(hm, e)
    }
}

function mm(t, e, r) {
    t === "focusin" ? (Dl(), dn = e, Sn = r, dn.attachEvent("onpropertychange", zu)) : t === "focusout" && Dl()
}

function pm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return ni(Sn)
}

function gm(t, e) {
    if (t === "click") return ni(e)
}

function xm(t, e) {
    if (t === "input" || t === "change") return ni(e)
}

function ym(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var Ke = typeof Object.is == "function" ? Object.is : ym;

function En(t, e) {
    if (Ke(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var r = Object.keys(t),
        n = Object.keys(e);
    if (r.length !== n.length) return !1;
    for (n = 0; n < r.length; n++) {
        var s = r[n];
        if (!io.call(e, s) || !Ke(t[s], e[s])) return !1
    }
    return !0
}

function Ul(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t
}

function zl(t, e) {
    var r = Ul(t);
    t = 0;
    for (var n; r;) {
        if (r.nodeType === 3) {
            if (n = t + r.textContent.length, t <= e && n >= e) return {
                node: r,
                offset: e - t
            };
            t = n
        }
        e: {
            for (; r;) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = Ul(r)
    }
}

function Bu(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Bu(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}

function Wu() {
    for (var t = window, e = Es(); e instanceof t.HTMLIFrameElement;) {
        try {
            var r = typeof e.contentWindow.location.href == "string"
        } catch {
            r = !1
        }
        if (r) t = e.contentWindow;
        else break;
        e = Es(t.document)
    }
    return e
}

function Ca(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}

function vm(t) {
    var e = Wu(),
        r = t.focusedElem,
        n = t.selectionRange;
    if (e !== r && r && r.ownerDocument && Bu(r.ownerDocument.documentElement, r)) {
        if (n !== null && Ca(r)) {
            if (e = n.start, t = n.end, t === void 0 && (t = e), "selectionStart" in r) r.selectionStart = e, r.selectionEnd = Math.min(t, r.value.length);
            else if (t = (e = r.ownerDocument || document) && e.defaultView || window, t.getSelection) {
                t = t.getSelection();
                var s = r.textContent.length,
                    o = Math.min(n.start, s);
                n = n.end === void 0 ? o : Math.min(n.end, s), !t.extend && o > n && (s = n, n = o, o = s), s = zl(r, o);
                var a = zl(r, n);
                s && a && (t.rangeCount !== 1 || t.anchorNode !== s.node || t.anchorOffset !== s.offset || t.focusNode !== a.node || t.focusOffset !== a.offset) && (e = e.createRange(), e.setStart(s.node, s.offset), t.removeAllRanges(), o > n ? (t.addRange(e), t.extend(a.node, a.offset)) : (e.setEnd(a.node, a.offset), t.addRange(e)))
            }
        }
        for (e = [], t = r; t = t.parentNode;) t.nodeType === 1 && e.push({
            element: t,
            left: t.scrollLeft,
            top: t.scrollTop
        });
        for (typeof r.focus == "function" && r.focus(), r = 0; r < e.length; r++) t = e[r], t.element.scrollLeft = t.left, t.element.scrollTop = t.top
    }
}
var wm = lt && "documentMode" in document && 11 >= document.documentMode,
    gr = null,
    _o = null,
    hn = null,
    So = !1;

function Bl(t, e, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    So || gr == null || gr !== Es(n) || (n = gr, "selectionStart" in n && Ca(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
    } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
    }), hn && En(hn, n) || (hn = n, n = Is(_o, "onSelect"), 0 < n.length && (e = new _a("onSelect", "select", null, e, r), t.push({
        event: e,
        listeners: n
    }), e.target = gr)))
}

function rs(t, e) {
    var r = {};
    return r[t.toLowerCase()] = e.toLowerCase(), r["Webkit" + t] = "webkit" + e, r["Moz" + t] = "moz" + e, r
}
var xr = {
        animationend: rs("Animation", "AnimationEnd"),
        animationiteration: rs("Animation", "AnimationIteration"),
        animationstart: rs("Animation", "AnimationStart"),
        transitionend: rs("Transition", "TransitionEnd")
    },
    Li = {},
    Hu = {};
lt && (Hu = document.createElement("div").style, "AnimationEvent" in window || (delete xr.animationend.animation, delete xr.animationiteration.animation, delete xr.animationstart.animation), "TransitionEvent" in window || delete xr.transitionend.transition);

function si(t) {
    if (Li[t]) return Li[t];
    if (!xr[t]) return t;
    var e = xr[t],
        r;
    for (r in e)
        if (e.hasOwnProperty(r) && r in Hu) return Li[t] = e[r];
    return t
}
var Vu = si("animationend"),
    qu = si("animationiteration"),
    Ku = si("animationstart"),
    Gu = si("transitionend"),
    Ju = new Map,
    Wl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function At(t, e) {
    Ju.set(t, e), tr(e, [t])
}
for (var $i = 0; $i < Wl.length; $i++) {
    var Mi = Wl[$i],
        bm = Mi.toLowerCase(),
        jm = Mi[0].toUpperCase() + Mi.slice(1);
    At(bm, "on" + jm)
}
At(Vu, "onAnimationEnd");
At(qu, "onAnimationIteration");
At(Ku, "onAnimationStart");
At("dblclick", "onDoubleClick");
At("focusin", "onFocus");
At("focusout", "onBlur");
At(Gu, "onTransitionEnd");
Or("onMouseEnter", ["mouseout", "mouseover"]);
Or("onMouseLeave", ["mouseout", "mouseover"]);
Or("onPointerEnter", ["pointerout", "pointerover"]);
Or("onPointerLeave", ["pointerout", "pointerover"]);
tr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
tr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
tr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
tr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var on = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Nm = new Set("cancel close invalid load scroll toggle".split(" ").concat(on));

function Hl(t, e, r) {
    var n = t.type || "unknown-event";
    t.currentTarget = r, bf(n, e, void 0, t), t.currentTarget = null
}

function Qu(t, e) {
    e = (e & 4) !== 0;
    for (var r = 0; r < t.length; r++) {
        var n = t[r],
            s = n.event;
        n = n.listeners;
        e: {
            var o = void 0;
            if (e)
                for (var a = n.length - 1; 0 <= a; a--) {
                    var l = n[a],
                        c = l.instance,
                        u = l.currentTarget;
                    if (l = l.listener, c !== o && s.isPropagationStopped()) break e;
                    Hl(s, l, u), o = c
                } else
                    for (a = 0; a < n.length; a++) {
                        if (l = n[a], c = l.instance, u = l.currentTarget, l = l.listener, c !== o && s.isPropagationStopped()) break e;
                        Hl(s, l, u), o = c
                    }
        }
    }
    if (Fs) throw t = bo, Fs = !1, bo = null, t
}

function z(t, e) {
    var r = e[Po];
    r === void 0 && (r = e[Po] = new Set);
    var n = t + "__bubble";
    r.has(n) || (Yu(e, t, 2, !1), r.add(n))
}

function Di(t, e, r) {
    var n = 0;
    e && (n |= 4), Yu(r, t, n, e)
}
var ns = "_reactListening" + Math.random().toString(36).slice(2);

function Cn(t) {
    if (!t[ns]) {
        t[ns] = !0, su.forEach(function(r) {
            r !== "selectionchange" && (Nm.has(r) || Di(r, !1, t), Di(r, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[ns] || (e[ns] = !0, Di("selectionchange", !1, e))
    }
}

function Yu(t, e, r, n) {
    switch (Iu(e)) {
        case 1:
            var s = $f;
            break;
        case 4:
            s = Mf;
            break;
        default:
            s = Na
    }
    r = s.bind(null, e, r, t), s = void 0, !wo || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), n ? s !== void 0 ? t.addEventListener(e, r, {
        capture: !0,
        passive: s
    }) : t.addEventListener(e, r, !0) : s !== void 0 ? t.addEventListener(e, r, {
        passive: s
    }) : t.addEventListener(e, r, !1)
}

function Ui(t, e, r, n, s) {
    var o = n;
    if (!(e & 1) && !(e & 2) && n !== null) e: for (;;) {
        if (n === null) return;
        var a = n.tag;
        if (a === 3 || a === 4) {
            var l = n.stateNode.containerInfo;
            if (l === s || l.nodeType === 8 && l.parentNode === s) break;
            if (a === 4)
                for (a = n.return; a !== null;) {
                    var c = a.tag;
                    if ((c === 3 || c === 4) && (c = a.stateNode.containerInfo, c === s || c.nodeType === 8 && c.parentNode === s)) return;
                    a = a.return
                }
            for (; l !== null;) {
                if (a = Vt(l), a === null) return;
                if (c = a.tag, c === 5 || c === 6) {
                    n = o = a;
                    continue e
                }
                l = l.parentNode
            }
        }
        n = n.return
    }
    wu(function() {
        var u = o,
            h = va(r),
            f = [];
        e: {
            var d = Ju.get(t);
            if (d !== void 0) {
                var p = _a,
                    y = t;
                switch (t) {
                    case "keypress":
                        if (vs(r) === 0) break e;
                    case "keydown":
                    case "keyup":
                        p = Zf;
                        break;
                    case "focusin":
                        y = "focus", p = Ai;
                        break;
                    case "focusout":
                        y = "blur", p = Ai;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        p = Ai;
                        break;
                    case "click":
                        if (r.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        p = Ol;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        p = zf;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        p = rm;
                        break;
                    case Vu:
                    case qu:
                    case Ku:
                        p = Hf;
                        break;
                    case Gu:
                        p = sm;
                        break;
                    case "scroll":
                        p = Df;
                        break;
                    case "wheel":
                        p = om;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        p = qf;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        p = Il
                }
                var v = (e & 4) !== 0,
                    N = !v && t === "scroll",
                    x = v ? d !== null ? d + "Capture" : null : d;
                v = [];
                for (var m = u, g; m !== null;) {
                    g = m;
                    var w = g.stateNode;
                    if (g.tag === 5 && w !== null && (g = w, x !== null && (w = jn(m, x), w != null && v.push(Fn(m, w, g)))), N) break;
                    m = m.return
                }
                0 < v.length && (d = new p(d, y, null, r, h), f.push({
                    event: d,
                    listeners: v
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (d = t === "mouseover" || t === "pointerover", p = t === "mouseout" || t === "pointerout", d && r !== yo && (y = r.relatedTarget || r.fromElement) && (Vt(y) || y[ct])) break e;
                if ((p || d) && (d = h.window === h ? h : (d = h.ownerDocument) ? d.defaultView || d.parentWindow : window, p ? (y = r.relatedTarget || r.toElement, p = u, y = y ? Vt(y) : null, y !== null && (N = rr(y), y !== N || y.tag !== 5 && y.tag !== 6) && (y = null)) : (p = null, y = u), p !== y)) {
                    if (v = Ol, w = "onMouseLeave", x = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (v = Il, w = "onPointerLeave", x = "onPointerEnter", m = "pointer"), N = p == null ? d : yr(p), g = y == null ? d : yr(y), d = new v(w, m + "leave", p, r, h), d.target = N, d.relatedTarget = g, w = null, Vt(h) === u && (v = new v(x, m + "enter", y, r, h), v.target = g, v.relatedTarget = N, w = v), N = w, p && y) t: {
                        for (v = p, x = y, m = 0, g = v; g; g = ir(g)) m++;
                        for (g = 0, w = x; w; w = ir(w)) g++;
                        for (; 0 < m - g;) v = ir(v),
                        m--;
                        for (; 0 < g - m;) x = ir(x),
                        g--;
                        for (; m--;) {
                            if (v === x || x !== null && v === x.alternate) break t;
                            v = ir(v), x = ir(x)
                        }
                        v = null
                    }
                    else v = null;
                    p !== null && Vl(f, d, p, v, !1), y !== null && N !== null && Vl(f, N, y, v, !0)
                }
            }
            e: {
                if (d = u ? yr(u) : window, p = d.nodeName && d.nodeName.toLowerCase(), p === "select" || p === "input" && d.type === "file") var k = fm;
                else if ($l(d))
                    if (Uu) k = xm;
                    else {
                        k = pm;
                        var j = mm
                    }
                else(p = d.nodeName) && p.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (k = gm);
                if (k && (k = k(t, u))) {
                    Du(f, k, r, h);
                    break e
                }
                j && j(t, d, u),
                t === "focusout" && (j = d._wrapperState) && j.controlled && d.type === "number" && fo(d, "number", d.value)
            }
            switch (j = u ? yr(u) : window, t) {
                case "focusin":
                    ($l(j) || j.contentEditable === "true") && (gr = j, _o = u, hn = null);
                    break;
                case "focusout":
                    hn = _o = gr = null;
                    break;
                case "mousedown":
                    So = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    So = !1, Bl(f, r, h);
                    break;
                case "selectionchange":
                    if (wm) break;
                case "keydown":
                case "keyup":
                    Bl(f, r, h)
            }
            var _;
            if (Ea) e: {
                switch (t) {
                    case "compositionstart":
                        var F = "onCompositionStart";
                        break e;
                    case "compositionend":
                        F = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        F = "onCompositionUpdate";
                        break e
                }
                F = void 0
            }
            else pr ? $u(t, r) && (F = "onCompositionEnd") : t === "keydown" && r.keyCode === 229 && (F = "onCompositionStart");F && (Lu && r.locale !== "ko" && (pr || F !== "onCompositionStart" ? F === "onCompositionEnd" && pr && (_ = Ru()) : (bt = h, ka = "value" in bt ? bt.value : bt.textContent, pr = !0)), j = Is(u, F), 0 < j.length && (F = new Al(F, t, null, r, h), f.push({
                event: F,
                listeners: j
            }), _ ? F.data = _ : (_ = Mu(r), _ !== null && (F.data = _)))),
            (_ = lm ? cm(t, r) : um(t, r)) && (u = Is(u, "onBeforeInput"), 0 < u.length && (h = new Al("onBeforeInput", "beforeinput", null, r, h), f.push({
                event: h,
                listeners: u
            }), h.data = _))
        }
        Qu(f, e)
    })
}

function Fn(t, e, r) {
    return {
        instance: t,
        listener: e,
        currentTarget: r
    }
}

function Is(t, e) {
    for (var r = e + "Capture", n = []; t !== null;) {
        var s = t,
            o = s.stateNode;
        s.tag === 5 && o !== null && (s = o, o = jn(t, r), o != null && n.unshift(Fn(t, o, s)), o = jn(t, e), o != null && n.push(Fn(t, o, s))), t = t.return
    }
    return n
}

function ir(t) {
    if (t === null) return null;
    do t = t.return; while (t && t.tag !== 5);
    return t || null
}

function Vl(t, e, r, n, s) {
    for (var o = e._reactName, a = []; r !== null && r !== n;) {
        var l = r,
            c = l.alternate,
            u = l.stateNode;
        if (c !== null && c === n) break;
        l.tag === 5 && u !== null && (l = u, s ? (c = jn(r, o), c != null && a.unshift(Fn(r, c, l))) : s || (c = jn(r, o), c != null && a.push(Fn(r, c, l)))), r = r.return
    }
    a.length !== 0 && t.push({
        event: e,
        listeners: a
    })
}
var km = /\r\n?/g,
    _m = /\u0000|\uFFFD/g;

function ql(t) {
    return (typeof t == "string" ? t : "" + t).replace(km, `
`).replace(_m, "")
}

function ss(t, e, r) {
    if (e = ql(e), ql(t) !== e && r) throw Error(b(425))
}

function Rs() {}
var Eo = null,
    Co = null;

function Fo(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var To = typeof setTimeout == "function" ? setTimeout : void 0,
    Sm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Kl = typeof Promise == "function" ? Promise : void 0,
    Em = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kl < "u" ? function(t) {
        return Kl.resolve(null).then(t).catch(Cm)
    } : To;

function Cm(t) {
    setTimeout(function() {
        throw t
    })
}

function zi(t, e) {
    var r = e,
        n = 0;
    do {
        var s = r.nextSibling;
        if (t.removeChild(r), s && s.nodeType === 8)
            if (r = s.data, r === "/$") {
                if (n === 0) {
                    t.removeChild(s), _n(e);
                    return
                }
                n--
            } else r !== "$" && r !== "$?" && r !== "$!" || n++;
        r = s
    } while (r);
    _n(e)
}

function St(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
            if (e = t.data, e === "$" || e === "$!" || e === "$?") break;
            if (e === "/$") return null
        }
    }
    return t
}

function Gl(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
        if (t.nodeType === 8) {
            var r = t.data;
            if (r === "$" || r === "$!" || r === "$?") {
                if (e === 0) return t;
                e--
            } else r === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var Br = Math.random().toString(36).slice(2),
    Ye = "__reactFiber$" + Br,
    Tn = "__reactProps$" + Br,
    ct = "__reactContainer$" + Br,
    Po = "__reactEvents$" + Br,
    Fm = "__reactListeners$" + Br,
    Tm = "__reactHandles$" + Br;

function Vt(t) {
    var e = t[Ye];
    if (e) return e;
    for (var r = t.parentNode; r;) {
        if (e = r[ct] || r[Ye]) {
            if (r = e.alternate, e.child !== null || r !== null && r.child !== null)
                for (t = Gl(t); t !== null;) {
                    if (r = t[Ye]) return r;
                    t = Gl(t)
                }
            return e
        }
        t = r, r = t.parentNode
    }
    return null
}

function zn(t) {
    return t = t[Ye] || t[ct], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}

function yr(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(b(33))
}

function ii(t) {
    return t[Tn] || null
}
var Oo = [],
    vr = -1;

function It(t) {
    return {
        current: t
    }
}

function B(t) {
    0 > vr || (t.current = Oo[vr], Oo[vr] = null, vr--)
}

function U(t, e) {
    vr++, Oo[vr] = t.current, t.current = e
}
var Ot = {},
    de = It(Ot),
    be = It(!1),
    Qt = Ot;

function Ar(t, e) {
    var r = t.type.contextTypes;
    if (!r) return Ot;
    var n = t.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === e) return n.__reactInternalMemoizedMaskedChildContext;
    var s = {},
        o;
    for (o in r) s[o] = e[o];
    return n && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = s), s
}

function je(t) {
    return t = t.childContextTypes, t != null
}

function Ls() {
    B(be), B(de)
}

function Jl(t, e, r) {
    if (de.current !== Ot) throw Error(b(168));
    U(de, e), U(be, r)
}

function Xu(t, e, r) {
    var n = t.stateNode;
    if (e = e.childContextTypes, typeof n.getChildContext != "function") return r;
    n = n.getChildContext();
    for (var s in n)
        if (!(s in e)) throw Error(b(108, mf(t) || "Unknown", s));
    return q({}, r, n)
}

function $s(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Ot, Qt = de.current, U(de, t), U(be, be.current), !0
}

function Ql(t, e, r) {
    var n = t.stateNode;
    if (!n) throw Error(b(169));
    r ? (t = Xu(t, e, Qt), n.__reactInternalMemoizedMergedChildContext = t, B(be), B(de), U(de, t)) : B(be), U(be, r)
}
var nt = null,
    oi = !1,
    Bi = !1;

function Zu(t) {
    nt === null ? nt = [t] : nt.push(t)
}

function Pm(t) {
    oi = !0, Zu(t)
}

function Rt() {
    if (!Bi && nt !== null) {
        Bi = !0;
        var t = 0,
            e = M;
        try {
            var r = nt;
            for (M = 1; t < r.length; t++) {
                var n = r[t];
                do n = n(!0); while (n !== null)
            }
            nt = null, oi = !1
        } catch (s) {
            throw nt !== null && (nt = nt.slice(t + 1)), ku(wa, Rt), s
        } finally {
            M = e, Bi = !1
        }
    }
    return null
}
var wr = [],
    br = 0,
    Ms = null,
    Ds = 0,
    Pe = [],
    Oe = 0,
    Yt = null,
    it = 1,
    ot = "";

function zt(t, e) {
    wr[br++] = Ds, wr[br++] = Ms, Ms = t, Ds = e
}

function ed(t, e, r) {
    Pe[Oe++] = it, Pe[Oe++] = ot, Pe[Oe++] = Yt, Yt = t;
    var n = it;
    t = ot;
    var s = 32 - Ve(n) - 1;
    n &= ~(1 << s), r += 1;
    var o = 32 - Ve(e) + s;
    if (30 < o) {
        var a = s - s % 5;
        o = (n & (1 << a) - 1).toString(32), n >>= a, s -= a, it = 1 << 32 - Ve(e) + s | r << s | n, ot = o + t
    } else it = 1 << o | r << s | n, ot = t
}

function Fa(t) {
    t.return !== null && (zt(t, 1), ed(t, 1, 0))
}

function Ta(t) {
    for (; t === Ms;) Ms = wr[--br], wr[br] = null, Ds = wr[--br], wr[br] = null;
    for (; t === Yt;) Yt = Pe[--Oe], Pe[Oe] = null, ot = Pe[--Oe], Pe[Oe] = null, it = Pe[--Oe], Pe[Oe] = null
}
var Se = null,
    _e = null,
    W = !1,
    He = null;

function td(t, e) {
    var r = Ae(5, null, null, 0);
    r.elementType = "DELETED", r.stateNode = e, r.return = t, e = t.deletions, e === null ? (t.deletions = [r], t.flags |= 16) : e.push(r)
}

function Yl(t, e) {
    switch (t.tag) {
        case 5:
            var r = t.type;
            return e = e.nodeType !== 1 || r.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, Se = t, _e = St(e.firstChild), !0) : !1;
        case 6:
            return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, Se = t, _e = null, !0) : !1;
        case 13:
            return e = e.nodeType !== 8 ? null : e, e !== null ? (r = Yt !== null ? {
                id: it,
                overflow: ot
            } : null, t.memoizedState = {
                dehydrated: e,
                treeContext: r,
                retryLane: 1073741824
            }, r = Ae(18, null, null, 0), r.stateNode = e, r.return = t, t.child = r, Se = t, _e = null, !0) : !1;
        default:
            return !1
    }
}

function Ao(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}

function Io(t) {
    if (W) {
        var e = _e;
        if (e) {
            var r = e;
            if (!Yl(t, e)) {
                if (Ao(t)) throw Error(b(418));
                e = St(r.nextSibling);
                var n = Se;
                e && Yl(t, e) ? td(n, r) : (t.flags = t.flags & -4097 | 2, W = !1, Se = t)
            }
        } else {
            if (Ao(t)) throw Error(b(418));
            t.flags = t.flags & -4097 | 2, W = !1, Se = t
        }
    }
}

function Xl(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;) t = t.return;
    Se = t
}

function is(t) {
    if (t !== Se) return !1;
    if (!W) return Xl(t), W = !0, !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !Fo(t.type, t.memoizedProps)), e && (e = _e)) {
        if (Ao(t)) throw rd(), Error(b(418));
        for (; e;) td(t, e), e = St(e.nextSibling)
    }
    if (Xl(t), t.tag === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(b(317));
        e: {
            for (t = t.nextSibling, e = 0; t;) {
                if (t.nodeType === 8) {
                    var r = t.data;
                    if (r === "/$") {
                        if (e === 0) {
                            _e = St(t.nextSibling);
                            break e
                        }
                        e--
                    } else r !== "$" && r !== "$!" && r !== "$?" || e++
                }
                t = t.nextSibling
            }
            _e = null
        }
    } else _e = Se ? St(t.stateNode.nextSibling) : null;
    return !0
}

function rd() {
    for (var t = _e; t;) t = St(t.nextSibling)
}

function Ir() {
    _e = Se = null, W = !1
}

function Pa(t) {
    He === null ? He = [t] : He.push(t)
}
var Om = ht.ReactCurrentBatchConfig;

function Xr(t, e, r) {
    if (t = r.ref, t !== null && typeof t != "function" && typeof t != "object") {
        if (r._owner) {
            if (r = r._owner, r) {
                if (r.tag !== 1) throw Error(b(309));
                var n = r.stateNode
            }
            if (!n) throw Error(b(147, t));
            var s = n,
                o = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === o ? e.ref : (e = function(a) {
                var l = s.refs;
                a === null ? delete l[o] : l[o] = a
            }, e._stringRef = o, e)
        }
        if (typeof t != "string") throw Error(b(284));
        if (!r._owner) throw Error(b(290, t))
    }
    return t
}

function os(t, e) {
    throw t = Object.prototype.toString.call(e), Error(b(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}

function Zl(t) {
    var e = t._init;
    return e(t._payload)
}

function nd(t) {
    function e(x, m) {
        if (t) {
            var g = x.deletions;
            g === null ? (x.deletions = [m], x.flags |= 16) : g.push(m)
        }
    }

    function r(x, m) {
        if (!t) return null;
        for (; m !== null;) e(x, m), m = m.sibling;
        return null
    }

    function n(x, m) {
        for (x = new Map; m !== null;) m.key !== null ? x.set(m.key, m) : x.set(m.index, m), m = m.sibling;
        return x
    }

    function s(x, m) {
        return x = Tt(x, m), x.index = 0, x.sibling = null, x
    }

    function o(x, m, g) {
        return x.index = g, t ? (g = x.alternate, g !== null ? (g = g.index, g < m ? (x.flags |= 2, m) : g) : (x.flags |= 2, m)) : (x.flags |= 1048576, m)
    }

    function a(x) {
        return t && x.alternate === null && (x.flags |= 2), x
    }

    function l(x, m, g, w) {
        return m === null || m.tag !== 6 ? (m = Ji(g, x.mode, w), m.return = x, m) : (m = s(m, g), m.return = x, m)
    }

    function c(x, m, g, w) {
        var k = g.type;
        return k === mr ? h(x, m, g.props.children, w, g.key) : m !== null && (m.elementType === k || typeof k == "object" && k !== null && k.$$typeof === gt && Zl(k) === m.type) ? (w = s(m, g.props), w.ref = Xr(x, m, g), w.return = x, w) : (w = Ss(g.type, g.key, g.props, null, x.mode, w), w.ref = Xr(x, m, g), w.return = x, w)
    }

    function u(x, m, g, w) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== g.containerInfo || m.stateNode.implementation !== g.implementation ? (m = Qi(g, x.mode, w), m.return = x, m) : (m = s(m, g.children || []), m.return = x, m)
    }

    function h(x, m, g, w, k) {
        return m === null || m.tag !== 7 ? (m = Jt(g, x.mode, w, k), m.return = x, m) : (m = s(m, g), m.return = x, m)
    }

    function f(x, m, g) {
        if (typeof m == "string" && m !== "" || typeof m == "number") return m = Ji("" + m, x.mode, g), m.return = x, m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Jn:
                    return g = Ss(m.type, m.key, m.props, null, x.mode, g), g.ref = Xr(x, null, m), g.return = x, g;
                case fr:
                    return m = Qi(m, x.mode, g), m.return = x, m;
                case gt:
                    var w = m._init;
                    return f(x, w(m._payload), g)
            }
            if (nn(m) || Kr(m)) return m = Jt(m, x.mode, g, null), m.return = x, m;
            os(x, m)
        }
        return null
    }

    function d(x, m, g, w) {
        var k = m !== null ? m.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return k !== null ? null : l(x, m, "" + g, w);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Jn:
                    return g.key === k ? c(x, m, g, w) : null;
                case fr:
                    return g.key === k ? u(x, m, g, w) : null;
                case gt:
                    return k = g._init, d(x, m, k(g._payload), w)
            }
            if (nn(g) || Kr(g)) return k !== null ? null : h(x, m, g, w, null);
            os(x, g)
        }
        return null
    }

    function p(x, m, g, w, k) {
        if (typeof w == "string" && w !== "" || typeof w == "number") return x = x.get(g) || null, l(m, x, "" + w, k);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case Jn:
                    return x = x.get(w.key === null ? g : w.key) || null, c(m, x, w, k);
                case fr:
                    return x = x.get(w.key === null ? g : w.key) || null, u(m, x, w, k);
                case gt:
                    var j = w._init;
                    return p(x, m, g, j(w._payload), k)
            }
            if (nn(w) || Kr(w)) return x = x.get(g) || null, h(m, x, w, k, null);
            os(m, w)
        }
        return null
    }

    function y(x, m, g, w) {
        for (var k = null, j = null, _ = m, F = m = 0, G = null; _ !== null && F < g.length; F++) {
            _.index > F ? (G = _, _ = null) : G = _.sibling;
            var L = d(x, _, g[F], w);
            if (L === null) {
                _ === null && (_ = G);
                break
            }
            t && _ && L.alternate === null && e(x, _), m = o(L, m, F), j === null ? k = L : j.sibling = L, j = L, _ = G
        }
        if (F === g.length) return r(x, _), W && zt(x, F), k;
        if (_ === null) {
            for (; F < g.length; F++) _ = f(x, g[F], w), _ !== null && (m = o(_, m, F), j === null ? k = _ : j.sibling = _, j = _);
            return W && zt(x, F), k
        }
        for (_ = n(x, _); F < g.length; F++) G = p(_, x, F, g[F], w), G !== null && (t && G.alternate !== null && _.delete(G.key === null ? F : G.key), m = o(G, m, F), j === null ? k = G : j.sibling = G, j = G);
        return t && _.forEach(function(Me) {
            return e(x, Me)
        }), W && zt(x, F), k
    }

    function v(x, m, g, w) {
        var k = Kr(g);
        if (typeof k != "function") throw Error(b(150));
        if (g = k.call(g), g == null) throw Error(b(151));
        for (var j = k = null, _ = m, F = m = 0, G = null, L = g.next(); _ !== null && !L.done; F++, L = g.next()) {
            _.index > F ? (G = _, _ = null) : G = _.sibling;
            var Me = d(x, _, L.value, w);
            if (Me === null) {
                _ === null && (_ = G);
                break
            }
            t && _ && Me.alternate === null && e(x, _), m = o(Me, m, F), j === null ? k = Me : j.sibling = Me, j = Me, _ = G
        }
        if (L.done) return r(x, _), W && zt(x, F), k;
        if (_ === null) {
            for (; !L.done; F++, L = g.next()) L = f(x, L.value, w), L !== null && (m = o(L, m, F), j === null ? k = L : j.sibling = L, j = L);
            return W && zt(x, F), k
        }
        for (_ = n(x, _); !L.done; F++, L = g.next()) L = p(_, x, F, L.value, w), L !== null && (t && L.alternate !== null && _.delete(L.key === null ? F : L.key), m = o(L, m, F), j === null ? k = L : j.sibling = L, j = L);
        return t && _.forEach(function(Vr) {
            return e(x, Vr)
        }), W && zt(x, F), k
    }

    function N(x, m, g, w) {
        if (typeof g == "object" && g !== null && g.type === mr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Jn:
                    e: {
                        for (var k = g.key, j = m; j !== null;) {
                            if (j.key === k) {
                                if (k = g.type, k === mr) {
                                    if (j.tag === 7) {
                                        r(x, j.sibling), m = s(j, g.props.children), m.return = x, x = m;
                                        break e
                                    }
                                } else if (j.elementType === k || typeof k == "object" && k !== null && k.$$typeof === gt && Zl(k) === j.type) {
                                    r(x, j.sibling), m = s(j, g.props), m.ref = Xr(x, j, g), m.return = x, x = m;
                                    break e
                                }
                                r(x, j);
                                break
                            } else e(x, j);
                            j = j.sibling
                        }
                        g.type === mr ? (m = Jt(g.props.children, x.mode, w, g.key), m.return = x, x = m) : (w = Ss(g.type, g.key, g.props, null, x.mode, w), w.ref = Xr(x, m, g), w.return = x, x = w)
                    }
                    return a(x);
                case fr:
                    e: {
                        for (j = g.key; m !== null;) {
                            if (m.key === j)
                                if (m.tag === 4 && m.stateNode.containerInfo === g.containerInfo && m.stateNode.implementation === g.implementation) {
                                    r(x, m.sibling), m = s(m, g.children || []), m.return = x, x = m;
                                    break e
                                } else {
                                    r(x, m);
                                    break
                                }
                            else e(x, m);
                            m = m.sibling
                        }
                        m = Qi(g, x.mode, w),
                        m.return = x,
                        x = m
                    }
                    return a(x);
                case gt:
                    return j = g._init, N(x, m, j(g._payload), w)
            }
            if (nn(g)) return y(x, m, g, w);
            if (Kr(g)) return v(x, m, g, w);
            os(x, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, m !== null && m.tag === 6 ? (r(x, m.sibling), m = s(m, g), m.return = x, x = m) : (r(x, m), m = Ji(g, x.mode, w), m.return = x, x = m), a(x)) : r(x, m)
    }
    return N
}
var Rr = nd(!0),
    sd = nd(!1),
    Us = It(null),
    zs = null,
    jr = null,
    Oa = null;

function Aa() {
    Oa = jr = zs = null
}

function Ia(t) {
    var e = Us.current;
    B(Us), t._currentValue = e
}

function Ro(t, e, r) {
    for (; t !== null;) {
        var n = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === r) break;
        t = t.return
    }
}

function Tr(t, e) {
    zs = t, Oa = jr = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (we = !0), t.firstContext = null)
}

function Le(t) {
    var e = t._currentValue;
    if (Oa !== t)
        if (t = {
                context: t,
                memoizedValue: e,
                next: null
            }, jr === null) {
            if (zs === null) throw Error(b(308));
            jr = t, zs.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else jr = jr.next = t;
    return e
}
var qt = null;

function Ra(t) {
    qt === null ? qt = [t] : qt.push(t)
}

function id(t, e, r, n) {
    var s = e.interleaved;
    return s === null ? (r.next = r, Ra(e)) : (r.next = s.next, s.next = r), e.interleaved = r, ut(t, n)
}

function ut(t, e) {
    t.lanes |= e;
    var r = t.alternate;
    for (r !== null && (r.lanes |= e), r = t, t = t.return; t !== null;) t.childLanes |= e, r = t.alternate, r !== null && (r.childLanes |= e), r = t, t = t.return;
    return r.tag === 3 ? r.stateNode : null
}
var xt = !1;

function La(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function od(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}

function at(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Et(t, e, r) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, $ & 2) {
        var s = n.pending;
        return s === null ? e.next = e : (e.next = s.next, s.next = e), n.pending = e, ut(t, r)
    }
    return s = n.interleaved, s === null ? (e.next = e, Ra(n)) : (e.next = s.next, s.next = e), n.interleaved = e, ut(t, r)
}

function ws(t, e, r) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (r & 4194240) !== 0)) {
        var n = e.lanes;
        n &= t.pendingLanes, r |= n, e.lanes = r, ba(t, r)
    }
}

function ec(t, e) {
    var r = t.updateQueue,
        n = t.alternate;
    if (n !== null && (n = n.updateQueue, r === n)) {
        var s = null,
            o = null;
        if (r = r.firstBaseUpdate, r !== null) {
            do {
                var a = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null
                };
                o === null ? s = o = a : o = o.next = a, r = r.next
            } while (r !== null);
            o === null ? s = o = e : o = o.next = e
        } else s = o = e;
        r = {
            baseState: n.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: o,
            shared: n.shared,
            effects: n.effects
        }, t.updateQueue = r;
        return
    }
    t = r.lastBaseUpdate, t === null ? r.firstBaseUpdate = e : t.next = e, r.lastBaseUpdate = e
}

function Bs(t, e, r, n) {
    var s = t.updateQueue;
    xt = !1;
    var o = s.firstBaseUpdate,
        a = s.lastBaseUpdate,
        l = s.shared.pending;
    if (l !== null) {
        s.shared.pending = null;
        var c = l,
            u = c.next;
        c.next = null, a === null ? o = u : a.next = u, a = c;
        var h = t.alternate;
        h !== null && (h = h.updateQueue, l = h.lastBaseUpdate, l !== a && (l === null ? h.firstBaseUpdate = u : l.next = u, h.lastBaseUpdate = c))
    }
    if (o !== null) {
        var f = s.baseState;
        a = 0, h = u = c = null, l = o;
        do {
            var d = l.lane,
                p = l.eventTime;
            if ((n & d) === d) {
                h !== null && (h = h.next = {
                    eventTime: p,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var y = t,
                        v = l;
                    switch (d = e, p = r, v.tag) {
                        case 1:
                            if (y = v.payload, typeof y == "function") {
                                f = y.call(p, f, d);
                                break e
                            }
                            f = y;
                            break e;
                        case 3:
                            y.flags = y.flags & -65537 | 128;
                        case 0:
                            if (y = v.payload, d = typeof y == "function" ? y.call(p, f, d) : y, d == null) break e;
                            f = q({}, f, d);
                            break e;
                        case 2:
                            xt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (t.flags |= 64, d = s.effects, d === null ? s.effects = [l] : d.push(l))
            } else p = {
                eventTime: p,
                lane: d,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, h === null ? (u = h = p, c = f) : h = h.next = p, a |= d;
            if (l = l.next, l === null) {
                if (l = s.shared.pending, l === null) break;
                d = l, l = d.next, d.next = null, s.lastBaseUpdate = d, s.shared.pending = null
            }
        } while (!0);
        if (h === null && (c = f), s.baseState = c, s.firstBaseUpdate = u, s.lastBaseUpdate = h, e = s.shared.interleaved, e !== null) {
            s = e;
            do a |= s.lane, s = s.next; while (s !== e)
        } else o === null && (s.shared.lanes = 0);
        Zt |= a, t.lanes = a, t.memoizedState = f
    }
}

function tc(t, e, r) {
    if (t = e.effects, e.effects = null, t !== null)
        for (e = 0; e < t.length; e++) {
            var n = t[e],
                s = n.callback;
            if (s !== null) {
                if (n.callback = null, n = r, typeof s != "function") throw Error(b(191, s));
                s.call(n)
            }
        }
}
var Bn = {},
    Ze = It(Bn),
    Pn = It(Bn),
    On = It(Bn);

function Kt(t) {
    if (t === Bn) throw Error(b(174));
    return t
}

function $a(t, e) {
    switch (U(On, e), U(Pn, t), U(Ze, Bn), t = e.nodeType, t) {
        case 9:
        case 11:
            e = (e = e.documentElement) ? e.namespaceURI : po(null, "");
            break;
        default:
            t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = po(e, t)
    }
    B(Ze), U(Ze, e)
}

function Lr() {
    B(Ze), B(Pn), B(On)
}

function ad(t) {
    Kt(On.current);
    var e = Kt(Ze.current),
        r = po(e, t.type);
    e !== r && (U(Pn, t), U(Ze, r))
}

function Ma(t) {
    Pn.current === t && (B(Ze), B(Pn))
}
var H = It(0);

function Ws(t) {
    for (var e = t; e !== null;) {
        if (e.tag === 13) {
            var r = e.memoizedState;
            if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128) return e
        } else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue
        }
        if (e === t) break;
        for (; e.sibling === null;) {
            if (e.return === null || e.return === t) return null;
            e = e.return
        }
        e.sibling.return = e.return, e = e.sibling
    }
    return null
}
var Wi = [];

function Da() {
    for (var t = 0; t < Wi.length; t++) Wi[t]._workInProgressVersionPrimary = null;
    Wi.length = 0
}
var bs = ht.ReactCurrentDispatcher,
    Hi = ht.ReactCurrentBatchConfig,
    Xt = 0,
    V = null,
    ee = null,
    ne = null,
    Hs = !1,
    fn = !1,
    An = 0,
    Am = 0;

function le() {
    throw Error(b(321))
}

function Ua(t, e) {
    if (e === null) return !1;
    for (var r = 0; r < e.length && r < t.length; r++)
        if (!Ke(t[r], e[r])) return !1;
    return !0
}

function za(t, e, r, n, s, o) {
    if (Xt = o, V = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, bs.current = t === null || t.memoizedState === null ? $m : Mm, t = r(n, s), fn) {
        o = 0;
        do {
            if (fn = !1, An = 0, 25 <= o) throw Error(b(301));
            o += 1, ne = ee = null, e.updateQueue = null, bs.current = Dm, t = r(n, s)
        } while (fn)
    }
    if (bs.current = Vs, e = ee !== null && ee.next !== null, Xt = 0, ne = ee = V = null, Hs = !1, e) throw Error(b(300));
    return t
}

function Ba() {
    var t = An !== 0;
    return An = 0, t
}

function Je() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ne === null ? V.memoizedState = ne = t : ne = ne.next = t, ne
}

function $e() {
    if (ee === null) {
        var t = V.alternate;
        t = t !== null ? t.memoizedState : null
    } else t = ee.next;
    var e = ne === null ? V.memoizedState : ne.next;
    if (e !== null) ne = e, ee = t;
    else {
        if (t === null) throw Error(b(310));
        ee = t, t = {
            memoizedState: ee.memoizedState,
            baseState: ee.baseState,
            baseQueue: ee.baseQueue,
            queue: ee.queue,
            next: null
        }, ne === null ? V.memoizedState = ne = t : ne = ne.next = t
    }
    return ne
}

function In(t, e) {
    return typeof e == "function" ? e(t) : e
}

function Vi(t) {
    var e = $e(),
        r = e.queue;
    if (r === null) throw Error(b(311));
    r.lastRenderedReducer = t;
    var n = ee,
        s = n.baseQueue,
        o = r.pending;
    if (o !== null) {
        if (s !== null) {
            var a = s.next;
            s.next = o.next, o.next = a
        }
        n.baseQueue = s = o, r.pending = null
    }
    if (s !== null) {
        o = s.next, n = n.baseState;
        var l = a = null,
            c = null,
            u = o;
        do {
            var h = u.lane;
            if ((Xt & h) === h) c !== null && (c = c.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), n = u.hasEagerState ? u.eagerState : t(n, u.action);
            else {
                var f = {
                    lane: h,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                c === null ? (l = c = f, a = n) : c = c.next = f, V.lanes |= h, Zt |= h
            }
            u = u.next
        } while (u !== null && u !== o);
        c === null ? a = n : c.next = l, Ke(n, e.memoizedState) || (we = !0), e.memoizedState = n, e.baseState = a, e.baseQueue = c, r.lastRenderedState = n
    }
    if (t = r.interleaved, t !== null) {
        s = t;
        do o = s.lane, V.lanes |= o, Zt |= o, s = s.next; while (s !== t)
    } else s === null && (r.lanes = 0);
    return [e.memoizedState, r.dispatch]
}

function qi(t) {
    var e = $e(),
        r = e.queue;
    if (r === null) throw Error(b(311));
    r.lastRenderedReducer = t;
    var n = r.dispatch,
        s = r.pending,
        o = e.memoizedState;
    if (s !== null) {
        r.pending = null;
        var a = s = s.next;
        do o = t(o, a.action), a = a.next; while (a !== s);
        Ke(o, e.memoizedState) || (we = !0), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), r.lastRenderedState = o
    }
    return [o, n]
}

function ld() {}

function cd(t, e) {
    var r = V,
        n = $e(),
        s = e(),
        o = !Ke(n.memoizedState, s);
    if (o && (n.memoizedState = s, we = !0), n = n.queue, Wa(hd.bind(null, r, n, t), [t]), n.getSnapshot !== e || o || ne !== null && ne.memoizedState.tag & 1) {
        if (r.flags |= 2048, Rn(9, dd.bind(null, r, n, s, e), void 0, null), se === null) throw Error(b(349));
        Xt & 30 || ud(r, e, s)
    }
    return s
}

function ud(t, e, r) {
    t.flags |= 16384, t = {
        getSnapshot: e,
        value: r
    }, e = V.updateQueue, e === null ? (e = {
        lastEffect: null,
        stores: null
    }, V.updateQueue = e, e.stores = [t]) : (r = e.stores, r === null ? e.stores = [t] : r.push(t))
}

function dd(t, e, r, n) {
    e.value = r, e.getSnapshot = n, fd(e) && md(t)
}

function hd(t, e, r) {
    return r(function() {
        fd(e) && md(t)
    })
}

function fd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var r = e();
        return !Ke(t, r)
    } catch {
        return !0
    }
}

function md(t) {
    var e = ut(t, 1);
    e !== null && qe(e, t, 1, -1)
}

function rc(t) {
    var e = Je();
    return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: In,
        lastRenderedState: t
    }, e.queue = t, t = t.dispatch = Lm.bind(null, V, t), [e.memoizedState, t]
}

function Rn(t, e, r, n) {
    return t = {
        tag: t,
        create: e,
        destroy: r,
        deps: n,
        next: null
    }, e = V.updateQueue, e === null ? (e = {
        lastEffect: null,
        stores: null
    }, V.updateQueue = e, e.lastEffect = t.next = t) : (r = e.lastEffect, r === null ? e.lastEffect = t.next = t : (n = r.next, r.next = t, t.next = n, e.lastEffect = t)), t
}

function pd() {
    return $e().memoizedState
}

function js(t, e, r, n) {
    var s = Je();
    V.flags |= t, s.memoizedState = Rn(1 | e, r, void 0, n === void 0 ? null : n)
}

function ai(t, e, r, n) {
    var s = $e();
    n = n === void 0 ? null : n;
    var o = void 0;
    if (ee !== null) {
        var a = ee.memoizedState;
        if (o = a.destroy, n !== null && Ua(n, a.deps)) {
            s.memoizedState = Rn(e, r, o, n);
            return
        }
    }
    V.flags |= t, s.memoizedState = Rn(1 | e, r, o, n)
}

function nc(t, e) {
    return js(8390656, 8, t, e)
}

function Wa(t, e) {
    return ai(2048, 8, t, e)
}

function gd(t, e) {
    return ai(4, 2, t, e)
}

function xd(t, e) {
    return ai(4, 4, t, e)
}

function yd(t, e) {
    if (typeof e == "function") return t = t(), e(t),
        function() {
            e(null)
        };
    if (e != null) return t = t(), e.current = t,
        function() {
            e.current = null
        }
}

function vd(t, e, r) {
    return r = r != null ? r.concat([t]) : null, ai(4, 4, yd.bind(null, e, t), r)
}

function Ha() {}

function wd(t, e) {
    var r = $e();
    e = e === void 0 ? null : e;
    var n = r.memoizedState;
    return n !== null && e !== null && Ua(e, n[1]) ? n[0] : (r.memoizedState = [t, e], t)
}

function bd(t, e) {
    var r = $e();
    e = e === void 0 ? null : e;
    var n = r.memoizedState;
    return n !== null && e !== null && Ua(e, n[1]) ? n[0] : (t = t(), r.memoizedState = [t, e], t)
}

function jd(t, e, r) {
    return Xt & 21 ? (Ke(r, e) || (r = Eu(), V.lanes |= r, Zt |= r, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, we = !0), t.memoizedState = r)
}

function Im(t, e) {
    var r = M;
    M = r !== 0 && 4 > r ? r : 4, t(!0);
    var n = Hi.transition;
    Hi.transition = {};
    try {
        t(!1), e()
    } finally {
        M = r, Hi.transition = n
    }
}

function Nd() {
    return $e().memoizedState
}

function Rm(t, e, r) {
    var n = Ft(t);
    if (r = {
            lane: n,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, kd(t)) _d(e, r);
    else if (r = id(t, e, r, n), r !== null) {
        var s = me();
        qe(r, t, n, s), Sd(r, e, n)
    }
}

function Lm(t, e, r) {
    var n = Ft(t),
        s = {
            lane: n,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (kd(t)) _d(e, s);
    else {
        var o = t.alternate;
        if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null)) try {
            var a = e.lastRenderedState,
                l = o(a, r);
            if (s.hasEagerState = !0, s.eagerState = l, Ke(l, a)) {
                var c = e.interleaved;
                c === null ? (s.next = s, Ra(e)) : (s.next = c.next, c.next = s), e.interleaved = s;
                return
            }
        } catch {} finally {}
        r = id(t, e, s, n), r !== null && (s = me(), qe(r, t, n, s), Sd(r, e, n))
    }
}

function kd(t) {
    var e = t.alternate;
    return t === V || e !== null && e === V
}

function _d(t, e) {
    fn = Hs = !0;
    var r = t.pending;
    r === null ? e.next = e : (e.next = r.next, r.next = e), t.pending = e
}

function Sd(t, e, r) {
    if (r & 4194240) {
        var n = e.lanes;
        n &= t.pendingLanes, r |= n, e.lanes = r, ba(t, r)
    }
}
var Vs = {
        readContext: Le,
        useCallback: le,
        useContext: le,
        useEffect: le,
        useImperativeHandle: le,
        useInsertionEffect: le,
        useLayoutEffect: le,
        useMemo: le,
        useReducer: le,
        useRef: le,
        useState: le,
        useDebugValue: le,
        useDeferredValue: le,
        useTransition: le,
        useMutableSource: le,
        useSyncExternalStore: le,
        useId: le,
        unstable_isNewReconciler: !1
    },
    $m = {
        readContext: Le,
        useCallback: function(t, e) {
            return Je().memoizedState = [t, e === void 0 ? null : e], t
        },
        useContext: Le,
        useEffect: nc,
        useImperativeHandle: function(t, e, r) {
            return r = r != null ? r.concat([t]) : null, js(4194308, 4, yd.bind(null, e, t), r)
        },
        useLayoutEffect: function(t, e) {
            return js(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            return js(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var r = Je();
            return e = e === void 0 ? null : e, t = t(), r.memoizedState = [t, e], t
        },
        useReducer: function(t, e, r) {
            var n = Je();
            return e = r !== void 0 ? r(e) : e, n.memoizedState = n.baseState = e, t = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: e
            }, n.queue = t, t = t.dispatch = Rm.bind(null, V, t), [n.memoizedState, t]
        },
        useRef: function(t) {
            var e = Je();
            return t = {
                current: t
            }, e.memoizedState = t
        },
        useState: rc,
        useDebugValue: Ha,
        useDeferredValue: function(t) {
            return Je().memoizedState = t
        },
        useTransition: function() {
            var t = rc(!1),
                e = t[0];
            return t = Im.bind(null, t[1]), Je().memoizedState = t, [e, t]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(t, e, r) {
            var n = V,
                s = Je();
            if (W) {
                if (r === void 0) throw Error(b(407));
                r = r()
            } else {
                if (r = e(), se === null) throw Error(b(349));
                Xt & 30 || ud(n, e, r)
            }
            s.memoizedState = r;
            var o = {
                value: r,
                getSnapshot: e
            };
            return s.queue = o, nc(hd.bind(null, n, o, t), [t]), n.flags |= 2048, Rn(9, dd.bind(null, n, o, r, e), void 0, null), r
        },
        useId: function() {
            var t = Je(),
                e = se.identifierPrefix;
            if (W) {
                var r = ot,
                    n = it;
                r = (n & ~(1 << 32 - Ve(n) - 1)).toString(32) + r, e = ":" + e + "R" + r, r = An++, 0 < r && (e += "H" + r.toString(32)), e += ":"
            } else r = Am++, e = ":" + e + "r" + r.toString(32) + ":";
            return t.memoizedState = e
        },
        unstable_isNewReconciler: !1
    },
    Mm = {
        readContext: Le,
        useCallback: wd,
        useContext: Le,
        useEffect: Wa,
        useImperativeHandle: vd,
        useInsertionEffect: gd,
        useLayoutEffect: xd,
        useMemo: bd,
        useReducer: Vi,
        useRef: pd,
        useState: function() {
            return Vi(In)
        },
        useDebugValue: Ha,
        useDeferredValue: function(t) {
            var e = $e();
            return jd(e, ee.memoizedState, t)
        },
        useTransition: function() {
            var t = Vi(In)[0],
                e = $e().memoizedState;
            return [t, e]
        },
        useMutableSource: ld,
        useSyncExternalStore: cd,
        useId: Nd,
        unstable_isNewReconciler: !1
    },
    Dm = {
        readContext: Le,
        useCallback: wd,
        useContext: Le,
        useEffect: Wa,
        useImperativeHandle: vd,
        useInsertionEffect: gd,
        useLayoutEffect: xd,
        useMemo: bd,
        useReducer: qi,
        useRef: pd,
        useState: function() {
            return qi(In)
        },
        useDebugValue: Ha,
        useDeferredValue: function(t) {
            var e = $e();
            return ee === null ? e.memoizedState = t : jd(e, ee.memoizedState, t)
        },
        useTransition: function() {
            var t = qi(In)[0],
                e = $e().memoizedState;
            return [t, e]
        },
        useMutableSource: ld,
        useSyncExternalStore: cd,
        useId: Nd,
        unstable_isNewReconciler: !1
    };

function ze(t, e) {
    if (t && t.defaultProps) {
        e = q({}, e), t = t.defaultProps;
        for (var r in t) e[r] === void 0 && (e[r] = t[r]);
        return e
    }
    return e
}

function Lo(t, e, r, n) {
    e = t.memoizedState, r = r(n, e), r = r == null ? e : q({}, e, r), t.memoizedState = r, t.lanes === 0 && (t.updateQueue.baseState = r)
}
var li = {
    isMounted: function(t) {
        return (t = t._reactInternals) ? rr(t) === t : !1
    },
    enqueueSetState: function(t, e, r) {
        t = t._reactInternals;
        var n = me(),
            s = Ft(t),
            o = at(n, s);
        o.payload = e, r != null && (o.callback = r), e = Et(t, o, s), e !== null && (qe(e, t, s, n), ws(e, t, s))
    },
    enqueueReplaceState: function(t, e, r) {
        t = t._reactInternals;
        var n = me(),
            s = Ft(t),
            o = at(n, s);
        o.tag = 1, o.payload = e, r != null && (o.callback = r), e = Et(t, o, s), e !== null && (qe(e, t, s, n), ws(e, t, s))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var r = me(),
            n = Ft(t),
            s = at(r, n);
        s.tag = 2, e != null && (s.callback = e), e = Et(t, s, n), e !== null && (qe(e, t, n, r), ws(e, t, n))
    }
};

function sc(t, e, r, n, s, o, a) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, o, a) : e.prototype && e.prototype.isPureReactComponent ? !En(r, n) || !En(s, o) : !0
}

function Ed(t, e, r) {
    var n = !1,
        s = Ot,
        o = e.contextType;
    return typeof o == "object" && o !== null ? o = Le(o) : (s = je(e) ? Qt : de.current, n = e.contextTypes, o = (n = n != null) ? Ar(t, s) : Ot), e = new e(r, o), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = li, t.stateNode = e, e._reactInternals = t, n && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = s, t.__reactInternalMemoizedMaskedChildContext = o), e
}

function ic(t, e, r, n) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(r, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(r, n), e.state !== t && li.enqueueReplaceState(e, e.state, null)
}

function $o(t, e, r, n) {
    var s = t.stateNode;
    s.props = r, s.state = t.memoizedState, s.refs = {}, La(t);
    var o = e.contextType;
    typeof o == "object" && o !== null ? s.context = Le(o) : (o = je(e) ? Qt : de.current, s.context = Ar(t, o)), s.state = t.memoizedState, o = e.getDerivedStateFromProps, typeof o == "function" && (Lo(t, e, o, r), s.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (e = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), e !== s.state && li.enqueueReplaceState(s, s.state, null), Bs(t, r, s, n), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308)
}

function $r(t, e) {
    try {
        var r = "",
            n = e;
        do r += ff(n), n = n.return; while (n);
        var s = r
    } catch (o) {
        s = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: t,
        source: e,
        stack: s,
        digest: null
    }
}

function Ki(t, e, r) {
    return {
        value: t,
        source: null,
        stack: r ?? null,
        digest: e ?? null
    }
}

function Mo(t, e) {
    try {
        console.error(e.value)
    } catch (r) {
        setTimeout(function() {
            throw r
        })
    }
}
var Um = typeof WeakMap == "function" ? WeakMap : Map;

function Cd(t, e, r) {
    r = at(-1, r), r.tag = 3, r.payload = {
        element: null
    };
    var n = e.value;
    return r.callback = function() {
        Ks || (Ks = !0, Go = n), Mo(t, e)
    }, r
}

function Fd(t, e, r) {
    r = at(-1, r), r.tag = 3;
    var n = t.type.getDerivedStateFromError;
    if (typeof n == "function") {
        var s = e.value;
        r.payload = function() {
            return n(s)
        }, r.callback = function() {
            Mo(t, e)
        }
    }
    var o = t.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (r.callback = function() {
        Mo(t, e), typeof n != "function" && (Ct === null ? Ct = new Set([this]) : Ct.add(this));
        var a = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: a !== null ? a : ""
        })
    }), r
}

function oc(t, e, r) {
    var n = t.pingCache;
    if (n === null) {
        n = t.pingCache = new Um;
        var s = new Set;
        n.set(e, s)
    } else s = n.get(e), s === void 0 && (s = new Set, n.set(e, s));
    s.has(r) || (s.add(r), t = ep.bind(null, t, e, r), e.then(t, t))
}

function ac(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return t;
        t = t.return
    } while (t !== null);
    return null
}

function lc(t, e, r, n, s) {
    return t.mode & 1 ? (t.flags |= 65536, t.lanes = s, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (e = at(-1, 1), e.tag = 2, Et(r, e, 1))), r.lanes |= 1), t)
}
var zm = ht.ReactCurrentOwner,
    we = !1;

function fe(t, e, r, n) {
    e.child = t === null ? sd(e, null, r, n) : Rr(e, t.child, r, n)
}

function cc(t, e, r, n, s) {
    r = r.render;
    var o = e.ref;
    return Tr(e, s), n = za(t, e, r, n, o, s), r = Ba(), t !== null && !we ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~s, dt(t, e, s)) : (W && r && Fa(e), e.flags |= 1, fe(t, e, n, s), e.child)
}

function uc(t, e, r, n, s) {
    if (t === null) {
        var o = r.type;
        return typeof o == "function" && !Xa(o) && o.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (e.tag = 15, e.type = o, Td(t, e, o, n, s)) : (t = Ss(r.type, null, n, e, e.mode, s), t.ref = e.ref, t.return = e, e.child = t)
    }
    if (o = t.child, !(t.lanes & s)) {
        var a = o.memoizedProps;
        if (r = r.compare, r = r !== null ? r : En, r(a, n) && t.ref === e.ref) return dt(t, e, s)
    }
    return e.flags |= 1, t = Tt(o, n), t.ref = e.ref, t.return = e, e.child = t
}

function Td(t, e, r, n, s) {
    if (t !== null) {
        var o = t.memoizedProps;
        if (En(o, n) && t.ref === e.ref)
            if (we = !1, e.pendingProps = n = o, (t.lanes & s) !== 0) t.flags & 131072 && (we = !0);
            else return e.lanes = t.lanes, dt(t, e, s)
    }
    return Do(t, e, r, n, s)
}

function Pd(t, e, r) {
    var n = e.pendingProps,
        s = n.children,
        o = t !== null ? t.memoizedState : null;
    if (n.mode === "hidden")
        if (!(e.mode & 1)) e.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, U(kr, ke), ke |= r;
        else {
            if (!(r & 1073741824)) return t = o !== null ? o.baseLanes | r : r, e.lanes = e.childLanes = 1073741824, e.memoizedState = {
                baseLanes: t,
                cachePool: null,
                transitions: null
            }, e.updateQueue = null, U(kr, ke), ke |= t, null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, n = o !== null ? o.baseLanes : r, U(kr, ke), ke |= n
        }
    else o !== null ? (n = o.baseLanes | r, e.memoizedState = null) : n = r, U(kr, ke), ke |= n;
    return fe(t, e, s, r), e.child
}

function Od(t, e) {
    var r = e.ref;
    (t === null && r !== null || t !== null && t.ref !== r) && (e.flags |= 512, e.flags |= 2097152)
}

function Do(t, e, r, n, s) {
    var o = je(r) ? Qt : de.current;
    return o = Ar(e, o), Tr(e, s), r = za(t, e, r, n, o, s), n = Ba(), t !== null && !we ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~s, dt(t, e, s)) : (W && n && Fa(e), e.flags |= 1, fe(t, e, r, s), e.child)
}

function dc(t, e, r, n, s) {
    if (je(r)) {
        var o = !0;
        $s(e)
    } else o = !1;
    if (Tr(e, s), e.stateNode === null) Ns(t, e), Ed(e, r, n), $o(e, r, n, s), n = !0;
    else if (t === null) {
        var a = e.stateNode,
            l = e.memoizedProps;
        a.props = l;
        var c = a.context,
            u = r.contextType;
        typeof u == "object" && u !== null ? u = Le(u) : (u = je(r) ? Qt : de.current, u = Ar(e, u));
        var h = r.getDerivedStateFromProps,
            f = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        f || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== n || c !== u) && ic(e, a, n, u), xt = !1;
        var d = e.memoizedState;
        a.state = d, Bs(e, n, a, s), c = e.memoizedState, l !== n || d !== c || be.current || xt ? (typeof h == "function" && (Lo(e, r, h, n), c = e.memoizedState), (l = xt || sc(e, r, l, n, d, c, u)) ? (f || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = c), a.props = n, a.state = c, a.context = u, n = l) : (typeof a.componentDidMount == "function" && (e.flags |= 4194308), n = !1)
    } else {
        a = e.stateNode, od(t, e), l = e.memoizedProps, u = e.type === e.elementType ? l : ze(e.type, l), a.props = u, f = e.pendingProps, d = a.context, c = r.contextType, typeof c == "object" && c !== null ? c = Le(c) : (c = je(r) ? Qt : de.current, c = Ar(e, c));
        var p = r.getDerivedStateFromProps;
        (h = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== f || d !== c) && ic(e, a, n, c), xt = !1, d = e.memoizedState, a.state = d, Bs(e, n, a, s);
        var y = e.memoizedState;
        l !== f || d !== y || be.current || xt ? (typeof p == "function" && (Lo(e, r, p, n), y = e.memoizedState), (u = xt || sc(e, r, u, n, d, y, c) || !1) ? (h || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, y, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, y, c)), typeof a.componentDidUpdate == "function" && (e.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = y), a.props = n, a.state = y, a.context = c, n = u) : (typeof a.componentDidUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), n = !1)
    }
    return Uo(t, e, r, n, o, s)
}

function Uo(t, e, r, n, s, o) {
    Od(t, e);
    var a = (e.flags & 128) !== 0;
    if (!n && !a) return s && Ql(e, r, !1), dt(t, e, o);
    n = e.stateNode, zm.current = e;
    var l = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return e.flags |= 1, t !== null && a ? (e.child = Rr(e, t.child, null, o), e.child = Rr(e, null, l, o)) : fe(t, e, l, o), e.memoizedState = n.state, s && Ql(e, r, !0), e.child
}

function Ad(t) {
    var e = t.stateNode;
    e.pendingContext ? Jl(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Jl(t, e.context, !1), $a(t, e.containerInfo)
}

function hc(t, e, r, n, s) {
    return Ir(), Pa(s), e.flags |= 256, fe(t, e, r, n), e.child
}
var zo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Bo(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}

function Id(t, e, r) {
    var n = e.pendingProps,
        s = H.current,
        o = !1,
        a = (e.flags & 128) !== 0,
        l;
    if ((l = a) || (l = t !== null && t.memoizedState === null ? !1 : (s & 2) !== 0), l ? (o = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (s |= 1), U(H, s & 1), t === null) return Io(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (a = n.children, t = n.fallback, o ? (n = e.mode, o = e.child, a = {
        mode: "hidden",
        children: a
    }, !(n & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = a) : o = di(a, n, 0, null), t = Jt(t, n, r, null), o.return = e, t.return = e, o.sibling = t, e.child = o, e.child.memoizedState = Bo(r), e.memoizedState = zo, t) : Va(e, a));
    if (s = t.memoizedState, s !== null && (l = s.dehydrated, l !== null)) return Bm(t, e, a, n, l, s, r);
    if (o) {
        o = n.fallback, a = e.mode, s = t.child, l = s.sibling;
        var c = {
            mode: "hidden",
            children: n.children
        };
        return !(a & 1) && e.child !== s ? (n = e.child, n.childLanes = 0, n.pendingProps = c, e.deletions = null) : (n = Tt(s, c), n.subtreeFlags = s.subtreeFlags & 14680064), l !== null ? o = Tt(l, o) : (o = Jt(o, a, r, null), o.flags |= 2), o.return = e, n.return = e, n.sibling = o, e.child = n, n = o, o = e.child, a = t.child.memoizedState, a = a === null ? Bo(r) : {
            baseLanes: a.baseLanes | r,
            cachePool: null,
            transitions: a.transitions
        }, o.memoizedState = a, o.childLanes = t.childLanes & ~r, e.memoizedState = zo, n
    }
    return o = t.child, t = o.sibling, n = Tt(o, {
        mode: "visible",
        children: n.children
    }), !(e.mode & 1) && (n.lanes = r), n.return = e, n.sibling = null, t !== null && (r = e.deletions, r === null ? (e.deletions = [t], e.flags |= 16) : r.push(t)), e.child = n, e.memoizedState = null, n
}

function Va(t, e) {
    return e = di({
        mode: "visible",
        children: e
    }, t.mode, 0, null), e.return = t, t.child = e
}

function as(t, e, r, n) {
    return n !== null && Pa(n), Rr(e, t.child, null, r), t = Va(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
}

function Bm(t, e, r, n, s, o, a) {
    if (r) return e.flags & 256 ? (e.flags &= -257, n = Ki(Error(b(422))), as(t, e, a, n)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (o = n.fallback, s = e.mode, n = di({
        mode: "visible",
        children: n.children
    }, s, 0, null), o = Jt(o, s, a, null), o.flags |= 2, n.return = e, o.return = e, n.sibling = o, e.child = n, e.mode & 1 && Rr(e, t.child, null, a), e.child.memoizedState = Bo(a), e.memoizedState = zo, o);
    if (!(e.mode & 1)) return as(t, e, a, null);
    if (s.data === "$!") {
        if (n = s.nextSibling && s.nextSibling.dataset, n) var l = n.dgst;
        return n = l, o = Error(b(419)), n = Ki(o, n, void 0), as(t, e, a, n)
    }
    if (l = (a & t.childLanes) !== 0, we || l) {
        if (n = se, n !== null) {
            switch (a & -a) {
                case 4:
                    s = 2;
                    break;
                case 16:
                    s = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    s = 32;
                    break;
                case 536870912:
                    s = 268435456;
                    break;
                default:
                    s = 0
            }
            s = s & (n.suspendedLanes | a) ? 0 : s, s !== 0 && s !== o.retryLane && (o.retryLane = s, ut(t, s), qe(n, t, s, -1))
        }
        return Ya(), n = Ki(Error(b(421))), as(t, e, a, n)
    }
    return s.data === "$?" ? (e.flags |= 128, e.child = t.child, e = tp.bind(null, t), s._reactRetry = e, null) : (t = o.treeContext, _e = St(s.nextSibling), Se = e, W = !0, He = null, t !== null && (Pe[Oe++] = it, Pe[Oe++] = ot, Pe[Oe++] = Yt, it = t.id, ot = t.overflow, Yt = e), e = Va(e, n.children), e.flags |= 4096, e)
}

function fc(t, e, r) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), Ro(t.return, e, r)
}

function Gi(t, e, r, n, s) {
    var o = t.memoizedState;
    o === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: s
    } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = n, o.tail = r, o.tailMode = s)
}

function Rd(t, e, r) {
    var n = e.pendingProps,
        s = n.revealOrder,
        o = n.tail;
    if (fe(t, e, n.children, r), n = H.current, n & 2) n = n & 1 | 2, e.flags |= 128;
    else {
        if (t !== null && t.flags & 128) e: for (t = e.child; t !== null;) {
            if (t.tag === 13) t.memoizedState !== null && fc(t, r, e);
            else if (t.tag === 19) fc(t, r, e);
            else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break e;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break e;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        n &= 1
    }
    if (U(H, n), !(e.mode & 1)) e.memoizedState = null;
    else switch (s) {
        case "forwards":
            for (r = e.child, s = null; r !== null;) t = r.alternate, t !== null && Ws(t) === null && (s = r), r = r.sibling;
            r = s, r === null ? (s = e.child, e.child = null) : (s = r.sibling, r.sibling = null), Gi(e, !1, s, r, o);
            break;
        case "backwards":
            for (r = null, s = e.child, e.child = null; s !== null;) {
                if (t = s.alternate, t !== null && Ws(t) === null) {
                    e.child = s;
                    break
                }
                t = s.sibling, s.sibling = r, r = s, s = t
            }
            Gi(e, !0, r, null, o);
            break;
        case "together":
            Gi(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
    }
    return e.child
}

function Ns(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2)
}

function dt(t, e, r) {
    if (t !== null && (e.dependencies = t.dependencies), Zt |= e.lanes, !(r & e.childLanes)) return null;
    if (t !== null && e.child !== t.child) throw Error(b(153));
    if (e.child !== null) {
        for (t = e.child, r = Tt(t, t.pendingProps), e.child = r, r.return = e; t.sibling !== null;) t = t.sibling, r = r.sibling = Tt(t, t.pendingProps), r.return = e;
        r.sibling = null
    }
    return e.child
}

function Wm(t, e, r) {
    switch (e.tag) {
        case 3:
            Ad(e), Ir();
            break;
        case 5:
            ad(e);
            break;
        case 1:
            je(e.type) && $s(e);
            break;
        case 4:
            $a(e, e.stateNode.containerInfo);
            break;
        case 10:
            var n = e.type._context,
                s = e.memoizedProps.value;
            U(Us, n._currentValue), n._currentValue = s;
            break;
        case 13:
            if (n = e.memoizedState, n !== null) return n.dehydrated !== null ? (U(H, H.current & 1), e.flags |= 128, null) : r & e.child.childLanes ? Id(t, e, r) : (U(H, H.current & 1), t = dt(t, e, r), t !== null ? t.sibling : null);
            U(H, H.current & 1);
            break;
        case 19:
            if (n = (r & e.childLanes) !== 0, t.flags & 128) {
                if (n) return Rd(t, e, r);
                e.flags |= 128
            }
            if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), U(H, H.current), n) break;
            return null;
        case 22:
        case 23:
            return e.lanes = 0, Pd(t, e, r)
    }
    return dt(t, e, r)
}
var Ld, Wo, $d, Md;
Ld = function(t, e) {
    for (var r = e.child; r !== null;) {
        if (r.tag === 5 || r.tag === 6) t.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
            r.child.return = r, r = r.child;
            continue
        }
        if (r === e) break;
        for (; r.sibling === null;) {
            if (r.return === null || r.return === e) return;
            r = r.return
        }
        r.sibling.return = r.return, r = r.sibling
    }
};
Wo = function() {};
$d = function(t, e, r, n) {
    var s = t.memoizedProps;
    if (s !== n) {
        t = e.stateNode, Kt(Ze.current);
        var o = null;
        switch (r) {
            case "input":
                s = uo(t, s), n = uo(t, n), o = [];
                break;
            case "select":
                s = q({}, s, {
                    value: void 0
                }), n = q({}, n, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                s = mo(t, s), n = mo(t, n), o = [];
                break;
            default:
                typeof s.onClick != "function" && typeof n.onClick == "function" && (t.onclick = Rs)
        }
        go(r, n);
        var a;
        r = null;
        for (u in s)
            if (!n.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
                if (u === "style") {
                    var l = s[u];
                    for (a in l) l.hasOwnProperty(a) && (r || (r = {}), r[a] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (wn.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in n) {
            var c = n[u];
            if (l = s != null ? s[u] : void 0, n.hasOwnProperty(u) && c !== l && (c != null || l != null))
                if (u === "style")
                    if (l) {
                        for (a in l) !l.hasOwnProperty(a) || c && c.hasOwnProperty(a) || (r || (r = {}), r[a] = "");
                        for (a in c) c.hasOwnProperty(a) && l[a] !== c[a] && (r || (r = {}), r[a] = c[a])
                    } else r || (o || (o = []), o.push(u, r)), r = c;
            else u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, l = l ? l.__html : void 0, c != null && l !== c && (o = o || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (wn.hasOwnProperty(u) ? (c != null && u === "onScroll" && z("scroll", t), o || l === c || (o = [])) : (o = o || []).push(u, c))
        }
        r && (o = o || []).push("style", r);
        var u = o;
        (e.updateQueue = u) && (e.flags |= 4)
    }
};
Md = function(t, e, r, n) {
    r !== n && (e.flags |= 4)
};

function Zr(t, e) {
    if (!W) switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var r = null; e !== null;) e.alternate !== null && (r = e), e = e.sibling;
            r === null ? t.tail = null : r.sibling = null;
            break;
        case "collapsed":
            r = t.tail;
            for (var n = null; r !== null;) r.alternate !== null && (n = r), r = r.sibling;
            n === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null
    }
}

function ce(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
        r = 0,
        n = 0;
    if (e)
        for (var s = t.child; s !== null;) r |= s.lanes | s.childLanes, n |= s.subtreeFlags & 14680064, n |= s.flags & 14680064, s.return = t, s = s.sibling;
    else
        for (s = t.child; s !== null;) r |= s.lanes | s.childLanes, n |= s.subtreeFlags, n |= s.flags, s.return = t, s = s.sibling;
    return t.subtreeFlags |= n, t.childLanes = r, e
}

function Hm(t, e, r) {
    var n = e.pendingProps;
    switch (Ta(e), e.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ce(e), null;
        case 1:
            return je(e.type) && Ls(), ce(e), null;
        case 3:
            return n = e.stateNode, Lr(), B(be), B(de), Da(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (is(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, He !== null && (Yo(He), He = null))), Wo(t, e), ce(e), null;
        case 5:
            Ma(e);
            var s = Kt(On.current);
            if (r = e.type, t !== null && e.stateNode != null) $d(t, e, r, n, s), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
            else {
                if (!n) {
                    if (e.stateNode === null) throw Error(b(166));
                    return ce(e), null
                }
                if (t = Kt(Ze.current), is(e)) {
                    n = e.stateNode, r = e.type;
                    var o = e.memoizedProps;
                    switch (n[Ye] = e, n[Tn] = o, t = (e.mode & 1) !== 0, r) {
                        case "dialog":
                            z("cancel", n), z("close", n);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            z("load", n);
                            break;
                        case "video":
                        case "audio":
                            for (s = 0; s < on.length; s++) z(on[s], n);
                            break;
                        case "source":
                            z("error", n);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            z("error", n), z("load", n);
                            break;
                        case "details":
                            z("toggle", n);
                            break;
                        case "input":
                            jl(n, o), z("invalid", n);
                            break;
                        case "select":
                            n._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, z("invalid", n);
                            break;
                        case "textarea":
                            kl(n, o), z("invalid", n)
                    }
                    go(r, o), s = null;
                    for (var a in o)
                        if (o.hasOwnProperty(a)) {
                            var l = o[a];
                            a === "children" ? typeof l == "string" ? n.textContent !== l && (o.suppressHydrationWarning !== !0 && ss(n.textContent, l, t), s = ["children", l]) : typeof l == "number" && n.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && ss(n.textContent, l, t), s = ["children", "" + l]) : wn.hasOwnProperty(a) && l != null && a === "onScroll" && z("scroll", n)
                        } switch (r) {
                        case "input":
                            Qn(n), Nl(n, o, !0);
                            break;
                        case "textarea":
                            Qn(n), _l(n);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (n.onclick = Rs)
                    }
                    n = s, e.updateQueue = n, n !== null && (e.flags |= 4)
                } else {
                    a = s.nodeType === 9 ? s : s.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = hu(r)), t === "http://www.w3.org/1999/xhtml" ? r === "script" ? (t = a.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof n.is == "string" ? t = a.createElement(r, {
                        is: n.is
                    }) : (t = a.createElement(r), r === "select" && (a = t, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : t = a.createElementNS(t, r), t[Ye] = e, t[Tn] = n, Ld(t, e, !1, !1), e.stateNode = t;
                    e: {
                        switch (a = xo(r, n), r) {
                            case "dialog":
                                z("cancel", t), z("close", t), s = n;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                z("load", t), s = n;
                                break;
                            case "video":
                            case "audio":
                                for (s = 0; s < on.length; s++) z(on[s], t);
                                s = n;
                                break;
                            case "source":
                                z("error", t), s = n;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                z("error", t), z("load", t), s = n;
                                break;
                            case "details":
                                z("toggle", t), s = n;
                                break;
                            case "input":
                                jl(t, n), s = uo(t, n), z("invalid", t);
                                break;
                            case "option":
                                s = n;
                                break;
                            case "select":
                                t._wrapperState = {
                                    wasMultiple: !!n.multiple
                                }, s = q({}, n, {
                                    value: void 0
                                }), z("invalid", t);
                                break;
                            case "textarea":
                                kl(t, n), s = mo(t, n), z("invalid", t);
                                break;
                            default:
                                s = n
                        }
                        go(r, s),
                        l = s;
                        for (o in l)
                            if (l.hasOwnProperty(o)) {
                                var c = l[o];
                                o === "style" ? pu(t, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && fu(t, c)) : o === "children" ? typeof c == "string" ? (r !== "textarea" || c !== "") && bn(t, c) : typeof c == "number" && bn(t, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (wn.hasOwnProperty(o) ? c != null && o === "onScroll" && z("scroll", t) : c != null && pa(t, o, c, a))
                            } switch (r) {
                            case "input":
                                Qn(t), Nl(t, n, !1);
                                break;
                            case "textarea":
                                Qn(t), _l(t);
                                break;
                            case "option":
                                n.value != null && t.setAttribute("value", "" + Pt(n.value));
                                break;
                            case "select":
                                t.multiple = !!n.multiple, o = n.value, o != null ? Sr(t, !!n.multiple, o, !1) : n.defaultValue != null && Sr(t, !!n.multiple, n.defaultValue, !0);
                                break;
                            default:
                                typeof s.onClick == "function" && (t.onclick = Rs)
                        }
                        switch (r) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                n = !!n.autoFocus;
                                break e;
                            case "img":
                                n = !0;
                                break e;
                            default:
                                n = !1
                        }
                    }
                    n && (e.flags |= 4)
                }
                e.ref !== null && (e.flags |= 512, e.flags |= 2097152)
            }
            return ce(e), null;
        case 6:
            if (t && e.stateNode != null) Md(t, e, t.memoizedProps, n);
            else {
                if (typeof n != "string" && e.stateNode === null) throw Error(b(166));
                if (r = Kt(On.current), Kt(Ze.current), is(e)) {
                    if (n = e.stateNode, r = e.memoizedProps, n[Ye] = e, (o = n.nodeValue !== r) && (t = Se, t !== null)) switch (t.tag) {
                        case 3:
                            ss(n.nodeValue, r, (t.mode & 1) !== 0);
                            break;
                        case 5:
                            t.memoizedProps.suppressHydrationWarning !== !0 && ss(n.nodeValue, r, (t.mode & 1) !== 0)
                    }
                    o && (e.flags |= 4)
                } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[Ye] = e, e.stateNode = n
            }
            return ce(e), null;
        case 13:
            if (B(H), n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (W && _e !== null && e.mode & 1 && !(e.flags & 128)) rd(), Ir(), e.flags |= 98560, o = !1;
                else if (o = is(e), n !== null && n.dehydrated !== null) {
                    if (t === null) {
                        if (!o) throw Error(b(318));
                        if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(b(317));
                        o[Ye] = e
                    } else Ir(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
                    ce(e), o = !1
                } else He !== null && (Yo(He), He = null), o = !0;
                if (!o) return e.flags & 65536 ? e : null
            }
            return e.flags & 128 ? (e.lanes = r, e) : (n = n !== null, n !== (t !== null && t.memoizedState !== null) && n && (e.child.flags |= 8192, e.mode & 1 && (t === null || H.current & 1 ? te === 0 && (te = 3) : Ya())), e.updateQueue !== null && (e.flags |= 4), ce(e), null);
        case 4:
            return Lr(), Wo(t, e), t === null && Cn(e.stateNode.containerInfo), ce(e), null;
        case 10:
            return Ia(e.type._context), ce(e), null;
        case 17:
            return je(e.type) && Ls(), ce(e), null;
        case 19:
            if (B(H), o = e.memoizedState, o === null) return ce(e), null;
            if (n = (e.flags & 128) !== 0, a = o.rendering, a === null)
                if (n) Zr(o, !1);
                else {
                    if (te !== 0 || t !== null && t.flags & 128)
                        for (t = e.child; t !== null;) {
                            if (a = Ws(t), a !== null) {
                                for (e.flags |= 128, Zr(o, !1), n = a.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), e.subtreeFlags = 0, n = r, r = e.child; r !== null;) o = r, t = n, o.flags &= 14680066, a = o.alternate, a === null ? (o.childLanes = 0, o.lanes = t, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = a.childLanes, o.lanes = a.lanes, o.child = a.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = a.memoizedProps, o.memoizedState = a.memoizedState, o.updateQueue = a.updateQueue, o.type = a.type, t = a.dependencies, o.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }), r = r.sibling;
                                return U(H, H.current & 1 | 2), e.child
                            }
                            t = t.sibling
                        }
                    o.tail !== null && Q() > Mr && (e.flags |= 128, n = !0, Zr(o, !1), e.lanes = 4194304)
                }
            else {
                if (!n)
                    if (t = Ws(a), t !== null) {
                        if (e.flags |= 128, n = !0, r = t.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), Zr(o, !0), o.tail === null && o.tailMode === "hidden" && !a.alternate && !W) return ce(e), null
                    } else 2 * Q() - o.renderingStartTime > Mr && r !== 1073741824 && (e.flags |= 128, n = !0, Zr(o, !1), e.lanes = 4194304);
                o.isBackwards ? (a.sibling = e.child, e.child = a) : (r = o.last, r !== null ? r.sibling = a : e.child = a, o.last = a)
            }
            return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = Q(), e.sibling = null, r = H.current, U(H, n ? r & 1 | 2 : r & 1), e) : (ce(e), null);
        case 22:
        case 23:
            return Qa(), n = e.memoizedState !== null, t !== null && t.memoizedState !== null !== n && (e.flags |= 8192), n && e.mode & 1 ? ke & 1073741824 && (ce(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : ce(e), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(b(156, e.tag))
}

function Vm(t, e) {
    switch (Ta(e), e.tag) {
        case 1:
            return je(e.type) && Ls(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
            return Lr(), B(be), B(de), Da(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
        case 5:
            return Ma(e), null;
        case 13:
            if (B(H), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                if (e.alternate === null) throw Error(b(340));
                Ir()
            }
            return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
            return B(H), null;
        case 4:
            return Lr(), null;
        case 10:
            return Ia(e.type._context), null;
        case 22:
        case 23:
            return Qa(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var ls = !1,
    ue = !1,
    qm = typeof WeakSet == "function" ? WeakSet : Set,
    E = null;

function Nr(t, e) {
    var r = t.ref;
    if (r !== null)
        if (typeof r == "function") try {
            r(null)
        } catch (n) {
            K(t, e, n)
        } else r.current = null
}

function Ho(t, e, r) {
    try {
        r()
    } catch (n) {
        K(t, e, n)
    }
}
var mc = !1;

function Km(t, e) {
    if (Eo = Os, t = Wu(), Ca(t)) {
        if ("selectionStart" in t) var r = {
            start: t.selectionStart,
            end: t.selectionEnd
        };
        else e: {
            r = (r = t.ownerDocument) && r.defaultView || window;
            var n = r.getSelection && r.getSelection();
            if (n && n.rangeCount !== 0) {
                r = n.anchorNode;
                var s = n.anchorOffset,
                    o = n.focusNode;
                n = n.focusOffset;
                try {
                    r.nodeType, o.nodeType
                } catch {
                    r = null;
                    break e
                }
                var a = 0,
                    l = -1,
                    c = -1,
                    u = 0,
                    h = 0,
                    f = t,
                    d = null;
                t: for (;;) {
                    for (var p; f !== r || s !== 0 && f.nodeType !== 3 || (l = a + s), f !== o || n !== 0 && f.nodeType !== 3 || (c = a + n), f.nodeType === 3 && (a += f.nodeValue.length), (p = f.firstChild) !== null;) d = f, f = p;
                    for (;;) {
                        if (f === t) break t;
                        if (d === r && ++u === s && (l = a), d === o && ++h === n && (c = a), (p = f.nextSibling) !== null) break;
                        f = d, d = f.parentNode
                    }
                    f = p
                }
                r = l === -1 || c === -1 ? null : {
                    start: l,
                    end: c
                }
            } else r = null
        }
        r = r || {
            start: 0,
            end: 0
        }
    } else r = null;
    for (Co = {
            focusedElem: t,
            selectionRange: r
        }, Os = !1, E = e; E !== null;)
        if (e = E, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, E = t;
        else
            for (; E !== null;) {
                e = E;
                try {
                    var y = e.alternate;
                    if (e.flags & 1024) switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var v = y.memoizedProps,
                                    N = y.memoizedState,
                                    x = e.stateNode,
                                    m = x.getSnapshotBeforeUpdate(e.elementType === e.type ? v : ze(e.type, v), N);
                                x.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var g = e.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(b(163))
                    }
                } catch (w) {
                    K(e, e.return, w)
                }
                if (t = e.sibling, t !== null) {
                    t.return = e.return, E = t;
                    break
                }
                E = e.return
            }
    return y = mc, mc = !1, y
}

function mn(t, e, r) {
    var n = e.updateQueue;
    if (n = n !== null ? n.lastEffect : null, n !== null) {
        var s = n = n.next;
        do {
            if ((s.tag & t) === t) {
                var o = s.destroy;
                s.destroy = void 0, o !== void 0 && Ho(e, r, o)
            }
            s = s.next
        } while (s !== n)
    }
}

function ci(t, e) {
    if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
        var r = e = e.next;
        do {
            if ((r.tag & t) === t) {
                var n = r.create;
                r.destroy = n()
            }
            r = r.next
        } while (r !== e)
    }
}

function Vo(t) {
    var e = t.ref;
    if (e !== null) {
        var r = t.stateNode;
        switch (t.tag) {
            case 5:
                t = r;
                break;
            default:
                t = r
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}

function Dd(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Dd(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[Ye], delete e[Tn], delete e[Po], delete e[Fm], delete e[Tm])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
}

function Ud(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}

function pc(t) {
    e: for (;;) {
        for (; t.sibling === null;) {
            if (t.return === null || Ud(t.return)) return null;
            t = t.return
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
            t.child.return = t, t = t.child
        }
        if (!(t.flags & 2)) return t.stateNode
    }
}

function qo(t, e, r) {
    var n = t.tag;
    if (n === 5 || n === 6) t = t.stateNode, e ? r.nodeType === 8 ? r.parentNode.insertBefore(t, e) : r.insertBefore(t, e) : (r.nodeType === 8 ? (e = r.parentNode, e.insertBefore(t, r)) : (e = r, e.appendChild(t)), r = r._reactRootContainer, r != null || e.onclick !== null || (e.onclick = Rs));
    else if (n !== 4 && (t = t.child, t !== null))
        for (qo(t, e, r), t = t.sibling; t !== null;) qo(t, e, r), t = t.sibling
}

function Ko(t, e, r) {
    var n = t.tag;
    if (n === 5 || n === 6) t = t.stateNode, e ? r.insertBefore(t, e) : r.appendChild(t);
    else if (n !== 4 && (t = t.child, t !== null))
        for (Ko(t, e, r), t = t.sibling; t !== null;) Ko(t, e, r), t = t.sibling
}
var ie = null,
    Be = !1;

function ft(t, e, r) {
    for (r = r.child; r !== null;) zd(t, e, r), r = r.sibling
}

function zd(t, e, r) {
    if (Xe && typeof Xe.onCommitFiberUnmount == "function") try {
        Xe.onCommitFiberUnmount(ti, r)
    } catch {}
    switch (r.tag) {
        case 5:
            ue || Nr(r, e);
        case 6:
            var n = ie,
                s = Be;
            ie = null, ft(t, e, r), ie = n, Be = s, ie !== null && (Be ? (t = ie, r = r.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(r) : t.removeChild(r)) : ie.removeChild(r.stateNode));
            break;
        case 18:
            ie !== null && (Be ? (t = ie, r = r.stateNode, t.nodeType === 8 ? zi(t.parentNode, r) : t.nodeType === 1 && zi(t, r), _n(t)) : zi(ie, r.stateNode));
            break;
        case 4:
            n = ie, s = Be, ie = r.stateNode.containerInfo, Be = !0, ft(t, e, r), ie = n, Be = s;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ue && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
                s = n = n.next;
                do {
                    var o = s,
                        a = o.destroy;
                    o = o.tag, a !== void 0 && (o & 2 || o & 4) && Ho(r, e, a), s = s.next
                } while (s !== n)
            }
            ft(t, e, r);
            break;
        case 1:
            if (!ue && (Nr(r, e), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
                n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount()
            } catch (l) {
                K(r, e, l)
            }
            ft(t, e, r);
            break;
        case 21:
            ft(t, e, r);
            break;
        case 22:
            r.mode & 1 ? (ue = (n = ue) || r.memoizedState !== null, ft(t, e, r), ue = n) : ft(t, e, r);
            break;
        default:
            ft(t, e, r)
    }
}

function gc(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var r = t.stateNode;
        r === null && (r = t.stateNode = new qm), e.forEach(function(n) {
            var s = rp.bind(null, t, n);
            r.has(n) || (r.add(n), n.then(s, s))
        })
    }
}

function De(t, e) {
    var r = e.deletions;
    if (r !== null)
        for (var n = 0; n < r.length; n++) {
            var s = r[n];
            try {
                var o = t,
                    a = e,
                    l = a;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            ie = l.stateNode, Be = !1;
                            break e;
                        case 3:
                            ie = l.stateNode.containerInfo, Be = !0;
                            break e;
                        case 4:
                            ie = l.stateNode.containerInfo, Be = !0;
                            break e
                    }
                    l = l.return
                }
                if (ie === null) throw Error(b(160));
                zd(o, a, s), ie = null, Be = !1;
                var c = s.alternate;
                c !== null && (c.return = null), s.return = null
            } catch (u) {
                K(s, e, u)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null;) Bd(e, t), e = e.sibling
}

function Bd(t, e) {
    var r = t.alternate,
        n = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (De(e, t), Ge(t), n & 4) {
                try {
                    mn(3, t, t.return), ci(3, t)
                } catch (v) {
                    K(t, t.return, v)
                }
                try {
                    mn(5, t, t.return)
                } catch (v) {
                    K(t, t.return, v)
                }
            }
            break;
        case 1:
            De(e, t), Ge(t), n & 512 && r !== null && Nr(r, r.return);
            break;
        case 5:
            if (De(e, t), Ge(t), n & 512 && r !== null && Nr(r, r.return), t.flags & 32) {
                var s = t.stateNode;
                try {
                    bn(s, "")
                } catch (v) {
                    K(t, t.return, v)
                }
            }
            if (n & 4 && (s = t.stateNode, s != null)) {
                var o = t.memoizedProps,
                    a = r !== null ? r.memoizedProps : o,
                    l = t.type,
                    c = t.updateQueue;
                if (t.updateQueue = null, c !== null) try {
                    l === "input" && o.type === "radio" && o.name != null && uu(s, o), xo(l, a);
                    var u = xo(l, o);
                    for (a = 0; a < c.length; a += 2) {
                        var h = c[a],
                            f = c[a + 1];
                        h === "style" ? pu(s, f) : h === "dangerouslySetInnerHTML" ? fu(s, f) : h === "children" ? bn(s, f) : pa(s, h, f, u)
                    }
                    switch (l) {
                        case "input":
                            ho(s, o);
                            break;
                        case "textarea":
                            du(s, o);
                            break;
                        case "select":
                            var d = s._wrapperState.wasMultiple;
                            s._wrapperState.wasMultiple = !!o.multiple;
                            var p = o.value;
                            p != null ? Sr(s, !!o.multiple, p, !1) : d !== !!o.multiple && (o.defaultValue != null ? Sr(s, !!o.multiple, o.defaultValue, !0) : Sr(s, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    s[Tn] = o
                } catch (v) {
                    K(t, t.return, v)
                }
            }
            break;
        case 6:
            if (De(e, t), Ge(t), n & 4) {
                if (t.stateNode === null) throw Error(b(162));
                s = t.stateNode, o = t.memoizedProps;
                try {
                    s.nodeValue = o
                } catch (v) {
                    K(t, t.return, v)
                }
            }
            break;
        case 3:
            if (De(e, t), Ge(t), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
                _n(e.containerInfo)
            } catch (v) {
                K(t, t.return, v)
            }
            break;
        case 4:
            De(e, t), Ge(t);
            break;
        case 13:
            De(e, t), Ge(t), s = t.child, s.flags & 8192 && (o = s.memoizedState !== null, s.stateNode.isHidden = o, !o || s.alternate !== null && s.alternate.memoizedState !== null || (Ga = Q())), n & 4 && gc(t);
            break;
        case 22:
            if (h = r !== null && r.memoizedState !== null, t.mode & 1 ? (ue = (u = ue) || h, De(e, t), ue = u) : De(e, t), Ge(t), n & 8192) {
                if (u = t.memoizedState !== null, (t.stateNode.isHidden = u) && !h && t.mode & 1)
                    for (E = t, h = t.child; h !== null;) {
                        for (f = E = h; E !== null;) {
                            switch (d = E, p = d.child, d.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    mn(4, d, d.return);
                                    break;
                                case 1:
                                    Nr(d, d.return);
                                    var y = d.stateNode;
                                    if (typeof y.componentWillUnmount == "function") {
                                        n = d, r = d.return;
                                        try {
                                            e = n, y.props = e.memoizedProps, y.state = e.memoizedState, y.componentWillUnmount()
                                        } catch (v) {
                                            K(n, r, v)
                                        }
                                    }
                                    break;
                                case 5:
                                    Nr(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        yc(f);
                                        continue
                                    }
                            }
                            p !== null ? (p.return = d, E = p) : yc(f)
                        }
                        h = h.sibling
                    }
                e: for (h = null, f = t;;) {
                    if (f.tag === 5) {
                        if (h === null) {
                            h = f;
                            try {
                                s = f.stateNode, u ? (o = s.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode, c = f.memoizedProps.style, a = c != null && c.hasOwnProperty("display") ? c.display : null, l.style.display = mu("display", a))
                            } catch (v) {
                                K(t, t.return, v)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (h === null) try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (v) {
                            K(t, t.return, v)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === t) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === t) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === t) break e;
                        h === f && (h = null), f = f.return
                    }
                    h === f && (h = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            De(e, t), Ge(t), n & 4 && gc(t);
            break;
        case 21:
            break;
        default:
            De(e, t), Ge(t)
    }
}

function Ge(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var r = t.return; r !== null;) {
                    if (Ud(r)) {
                        var n = r;
                        break e
                    }
                    r = r.return
                }
                throw Error(b(160))
            }
            switch (n.tag) {
                case 5:
                    var s = n.stateNode;
                    n.flags & 32 && (bn(s, ""), n.flags &= -33);
                    var o = pc(t);
                    Ko(t, o, s);
                    break;
                case 3:
                case 4:
                    var a = n.stateNode.containerInfo,
                        l = pc(t);
                    qo(t, l, a);
                    break;
                default:
                    throw Error(b(161))
            }
        }
        catch (c) {
            K(t, t.return, c)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}

function Gm(t, e, r) {
    E = t, Wd(t)
}

function Wd(t, e, r) {
    for (var n = (t.mode & 1) !== 0; E !== null;) {
        var s = E,
            o = s.child;
        if (s.tag === 22 && n) {
            var a = s.memoizedState !== null || ls;
            if (!a) {
                var l = s.alternate,
                    c = l !== null && l.memoizedState !== null || ue;
                l = ls;
                var u = ue;
                if (ls = a, (ue = c) && !u)
                    for (E = s; E !== null;) a = E, c = a.child, a.tag === 22 && a.memoizedState !== null ? vc(s) : c !== null ? (c.return = a, E = c) : vc(s);
                for (; o !== null;) E = o, Wd(o), o = o.sibling;
                E = s, ls = l, ue = u
            }
            xc(t)
        } else s.subtreeFlags & 8772 && o !== null ? (o.return = s, E = o) : xc(t)
    }
}

function xc(t) {
    for (; E !== null;) {
        var e = E;
        if (e.flags & 8772) {
            var r = e.alternate;
            try {
                if (e.flags & 8772) switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ue || ci(5, e);
                        break;
                    case 1:
                        var n = e.stateNode;
                        if (e.flags & 4 && !ue)
                            if (r === null) n.componentDidMount();
                            else {
                                var s = e.elementType === e.type ? r.memoizedProps : ze(e.type, r.memoizedProps);
                                n.componentDidUpdate(s, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                            } var o = e.updateQueue;
                        o !== null && tc(e, o, n);
                        break;
                    case 3:
                        var a = e.updateQueue;
                        if (a !== null) {
                            if (r = null, e.child !== null) switch (e.child.tag) {
                                case 5:
                                    r = e.child.stateNode;
                                    break;
                                case 1:
                                    r = e.child.stateNode
                            }
                            tc(e, a, r)
                        }
                        break;
                    case 5:
                        var l = e.stateNode;
                        if (r === null && e.flags & 4) {
                            r = l;
                            var c = e.memoizedProps;
                            switch (e.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    c.autoFocus && r.focus();
                                    break;
                                case "img":
                                    c.src && (r.src = c.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (e.memoizedState === null) {
                            var u = e.alternate;
                            if (u !== null) {
                                var h = u.memoizedState;
                                if (h !== null) {
                                    var f = h.dehydrated;
                                    f !== null && _n(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(b(163))
                }
                ue || e.flags & 512 && Vo(e)
            } catch (d) {
                K(e, e.return, d)
            }
        }
        if (e === t) {
            E = null;
            break
        }
        if (r = e.sibling, r !== null) {
            r.return = e.return, E = r;
            break
        }
        E = e.return
    }
}

function yc(t) {
    for (; E !== null;) {
        var e = E;
        if (e === t) {
            E = null;
            break
        }
        var r = e.sibling;
        if (r !== null) {
            r.return = e.return, E = r;
            break
        }
        E = e.return
    }
}

function vc(t) {
    for (; E !== null;) {
        var e = E;
        try {
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    var r = e.return;
                    try {
                        ci(4, e)
                    } catch (c) {
                        K(e, r, c)
                    }
                    break;
                case 1:
                    var n = e.stateNode;
                    if (typeof n.componentDidMount == "function") {
                        var s = e.return;
                        try {
                            n.componentDidMount()
                        } catch (c) {
                            K(e, s, c)
                        }
                    }
                    var o = e.return;
                    try {
                        Vo(e)
                    } catch (c) {
                        K(e, o, c)
                    }
                    break;
                case 5:
                    var a = e.return;
                    try {
                        Vo(e)
                    } catch (c) {
                        K(e, a, c)
                    }
            }
        } catch (c) {
            K(e, e.return, c)
        }
        if (e === t) {
            E = null;
            break
        }
        var l = e.sibling;
        if (l !== null) {
            l.return = e.return, E = l;
            break
        }
        E = e.return
    }
}
var Jm = Math.ceil,
    qs = ht.ReactCurrentDispatcher,
    qa = ht.ReactCurrentOwner,
    Ie = ht.ReactCurrentBatchConfig,
    $ = 0,
    se = null,
    Y = null,
    oe = 0,
    ke = 0,
    kr = It(0),
    te = 0,
    Ln = null,
    Zt = 0,
    ui = 0,
    Ka = 0,
    pn = null,
    xe = null,
    Ga = 0,
    Mr = 1 / 0,
    tt = null,
    Ks = !1,
    Go = null,
    Ct = null,
    cs = !1,
    jt = null,
    Gs = 0,
    gn = 0,
    Jo = null,
    ks = -1,
    _s = 0;

function me() {
    return $ & 6 ? Q() : ks !== -1 ? ks : ks = Q()
}

function Ft(t) {
    return t.mode & 1 ? $ & 2 && oe !== 0 ? oe & -oe : Om.transition !== null ? (_s === 0 && (_s = Eu()), _s) : (t = M, t !== 0 || (t = window.event, t = t === void 0 ? 16 : Iu(t.type)), t) : 1
}

function qe(t, e, r, n) {
    if (50 < gn) throw gn = 0, Jo = null, Error(b(185));
    Dn(t, r, n), (!($ & 2) || t !== se) && (t === se && (!($ & 2) && (ui |= r), te === 4 && vt(t, oe)), Ne(t, n), r === 1 && $ === 0 && !(e.mode & 1) && (Mr = Q() + 500, oi && Rt()))
}

function Ne(t, e) {
    var r = t.callbackNode;
    Of(t, e);
    var n = Ps(t, t === se ? oe : 0);
    if (n === 0) r !== null && Cl(r), t.callbackNode = null, t.callbackPriority = 0;
    else if (e = n & -n, t.callbackPriority !== e) {
        if (r != null && Cl(r), e === 1) t.tag === 0 ? Pm(wc.bind(null, t)) : Zu(wc.bind(null, t)), Em(function() {
            !($ & 6) && Rt()
        }), r = null;
        else {
            switch (Cu(n)) {
                case 1:
                    r = wa;
                    break;
                case 4:
                    r = _u;
                    break;
                case 16:
                    r = Ts;
                    break;
                case 536870912:
                    r = Su;
                    break;
                default:
                    r = Ts
            }
            r = Yd(r, Hd.bind(null, t))
        }
        t.callbackPriority = e, t.callbackNode = r
    }
}

function Hd(t, e) {
    if (ks = -1, _s = 0, $ & 6) throw Error(b(327));
    var r = t.callbackNode;
    if (Pr() && t.callbackNode !== r) return null;
    var n = Ps(t, t === se ? oe : 0);
    if (n === 0) return null;
    if (n & 30 || n & t.expiredLanes || e) e = Js(t, n);
    else {
        e = n;
        var s = $;
        $ |= 2;
        var o = qd();
        (se !== t || oe !== e) && (tt = null, Mr = Q() + 500, Gt(t, e));
        do try {
            Xm();
            break
        } catch (l) {
            Vd(t, l)
        }
        while (!0);
        Aa(), qs.current = o, $ = s, Y !== null ? e = 0 : (se = null, oe = 0, e = te)
    }
    if (e !== 0) {
        if (e === 2 && (s = jo(t), s !== 0 && (n = s, e = Qo(t, s))), e === 1) throw r = Ln, Gt(t, 0), vt(t, n), Ne(t, Q()), r;
        if (e === 6) vt(t, n);
        else {
            if (s = t.current.alternate, !(n & 30) && !Qm(s) && (e = Js(t, n), e === 2 && (o = jo(t), o !== 0 && (n = o, e = Qo(t, o))), e === 1)) throw r = Ln, Gt(t, 0), vt(t, n), Ne(t, Q()), r;
            switch (t.finishedWork = s, t.finishedLanes = n, e) {
                case 0:
                case 1:
                    throw Error(b(345));
                case 2:
                    Bt(t, xe, tt);
                    break;
                case 3:
                    if (vt(t, n), (n & 130023424) === n && (e = Ga + 500 - Q(), 10 < e)) {
                        if (Ps(t, 0) !== 0) break;
                        if (s = t.suspendedLanes, (s & n) !== n) {
                            me(), t.pingedLanes |= t.suspendedLanes & s;
                            break
                        }
                        t.timeoutHandle = To(Bt.bind(null, t, xe, tt), e);
                        break
                    }
                    Bt(t, xe, tt);
                    break;
                case 4:
                    if (vt(t, n), (n & 4194240) === n) break;
                    for (e = t.eventTimes, s = -1; 0 < n;) {
                        var a = 31 - Ve(n);
                        o = 1 << a, a = e[a], a > s && (s = a), n &= ~o
                    }
                    if (n = s, n = Q() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Jm(n / 1960)) - n, 10 < n) {
                        t.timeoutHandle = To(Bt.bind(null, t, xe, tt), n);
                        break
                    }
                    Bt(t, xe, tt);
                    break;
                case 5:
                    Bt(t, xe, tt);
                    break;
                default:
                    throw Error(b(329))
            }
        }
    }
    return Ne(t, Q()), t.callbackNode === r ? Hd.bind(null, t) : null
}

function Qo(t, e) {
    var r = pn;
    return t.current.memoizedState.isDehydrated && (Gt(t, e).flags |= 256), t = Js(t, e), t !== 2 && (e = xe, xe = r, e !== null && Yo(e)), t
}

function Yo(t) {
    xe === null ? xe = t : xe.push.apply(xe, t)
}

function Qm(t) {
    for (var e = t;;) {
        if (e.flags & 16384) {
            var r = e.updateQueue;
            if (r !== null && (r = r.stores, r !== null))
                for (var n = 0; n < r.length; n++) {
                    var s = r[n],
                        o = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!Ke(o(), s)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (r = e.child, e.subtreeFlags & 16384 && r !== null) r.return = e, e = r;
        else {
            if (e === t) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) return !0;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
    }
    return !0
}

function vt(t, e) {
    for (e &= ~Ka, e &= ~ui, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e;) {
        var r = 31 - Ve(e),
            n = 1 << r;
        t[r] = -1, e &= ~n
    }
}

function wc(t) {
    if ($ & 6) throw Error(b(327));
    Pr();
    var e = Ps(t, 0);
    if (!(e & 1)) return Ne(t, Q()), null;
    var r = Js(t, e);
    if (t.tag !== 0 && r === 2) {
        var n = jo(t);
        n !== 0 && (e = n, r = Qo(t, n))
    }
    if (r === 1) throw r = Ln, Gt(t, 0), vt(t, e), Ne(t, Q()), r;
    if (r === 6) throw Error(b(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = e, Bt(t, xe, tt), Ne(t, Q()), null
}

function Ja(t, e) {
    var r = $;
    $ |= 1;
    try {
        return t(e)
    } finally {
        $ = r, $ === 0 && (Mr = Q() + 500, oi && Rt())
    }
}

function er(t) {
    jt !== null && jt.tag === 0 && !($ & 6) && Pr();
    var e = $;
    $ |= 1;
    var r = Ie.transition,
        n = M;
    try {
        if (Ie.transition = null, M = 1, t) return t()
    } finally {
        M = n, Ie.transition = r, $ = e, !($ & 6) && Rt()
    }
}

function Qa() {
    ke = kr.current, B(kr)
}

function Gt(t, e) {
    t.finishedWork = null, t.finishedLanes = 0;
    var r = t.timeoutHandle;
    if (r !== -1 && (t.timeoutHandle = -1, Sm(r)), Y !== null)
        for (r = Y.return; r !== null;) {
            var n = r;
            switch (Ta(n), n.tag) {
                case 1:
                    n = n.type.childContextTypes, n != null && Ls();
                    break;
                case 3:
                    Lr(), B(be), B(de), Da();
                    break;
                case 5:
                    Ma(n);
                    break;
                case 4:
                    Lr();
                    break;
                case 13:
                    B(H);
                    break;
                case 19:
                    B(H);
                    break;
                case 10:
                    Ia(n.type._context);
                    break;
                case 22:
                case 23:
                    Qa()
            }
            r = r.return
        }
    if (se = t, Y = t = Tt(t.current, null), oe = ke = e, te = 0, Ln = null, Ka = ui = Zt = 0, xe = pn = null, qt !== null) {
        for (e = 0; e < qt.length; e++)
            if (r = qt[e], n = r.interleaved, n !== null) {
                r.interleaved = null;
                var s = n.next,
                    o = r.pending;
                if (o !== null) {
                    var a = o.next;
                    o.next = s, n.next = a
                }
                r.pending = n
            } qt = null
    }
    return t
}

function Vd(t, e) {
    do {
        var r = Y;
        try {
            if (Aa(), bs.current = Vs, Hs) {
                for (var n = V.memoizedState; n !== null;) {
                    var s = n.queue;
                    s !== null && (s.pending = null), n = n.next
                }
                Hs = !1
            }
            if (Xt = 0, ne = ee = V = null, fn = !1, An = 0, qa.current = null, r === null || r.return === null) {
                te = 1, Ln = e, Y = null;
                break
            }
            e: {
                var o = t,
                    a = r.return,
                    l = r,
                    c = e;
                if (e = oe, l.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
                    var u = c,
                        h = l,
                        f = h.tag;
                    if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = h.alternate;
                        d ? (h.updateQueue = d.updateQueue, h.memoizedState = d.memoizedState, h.lanes = d.lanes) : (h.updateQueue = null, h.memoizedState = null)
                    }
                    var p = ac(a);
                    if (p !== null) {
                        p.flags &= -257, lc(p, a, l, o, e), p.mode & 1 && oc(o, u, e), e = p, c = u;
                        var y = e.updateQueue;
                        if (y === null) {
                            var v = new Set;
                            v.add(c), e.updateQueue = v
                        } else y.add(c);
                        break e
                    } else {
                        if (!(e & 1)) {
                            oc(o, u, e), Ya();
                            break e
                        }
                        c = Error(b(426))
                    }
                } else if (W && l.mode & 1) {
                    var N = ac(a);
                    if (N !== null) {
                        !(N.flags & 65536) && (N.flags |= 256), lc(N, a, l, o, e), Pa($r(c, l));
                        break e
                    }
                }
                o = c = $r(c, l),
                te !== 4 && (te = 2),
                pn === null ? pn = [o] : pn.push(o),
                o = a;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, e &= -e, o.lanes |= e;
                            var x = Cd(o, c, e);
                            ec(o, x);
                            break e;
                        case 1:
                            l = c;
                            var m = o.type,
                                g = o.stateNode;
                            if (!(o.flags & 128) && (typeof m.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Ct === null || !Ct.has(g)))) {
                                o.flags |= 65536, e &= -e, o.lanes |= e;
                                var w = Fd(o, l, e);
                                ec(o, w);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            Gd(r)
        } catch (k) {
            e = k, Y === r && r !== null && (Y = r = r.return);
            continue
        }
        break
    } while (!0)
}

function qd() {
    var t = qs.current;
    return qs.current = Vs, t === null ? Vs : t
}

function Ya() {
    (te === 0 || te === 3 || te === 2) && (te = 4), se === null || !(Zt & 268435455) && !(ui & 268435455) || vt(se, oe)
}

function Js(t, e) {
    var r = $;
    $ |= 2;
    var n = qd();
    (se !== t || oe !== e) && (tt = null, Gt(t, e));
    do try {
        Ym();
        break
    } catch (s) {
        Vd(t, s)
    }
    while (!0);
    if (Aa(), $ = r, qs.current = n, Y !== null) throw Error(b(261));
    return se = null, oe = 0, te
}

function Ym() {
    for (; Y !== null;) Kd(Y)
}

function Xm() {
    for (; Y !== null && !Nf();) Kd(Y)
}

function Kd(t) {
    var e = Qd(t.alternate, t, ke);
    t.memoizedProps = t.pendingProps, e === null ? Gd(t) : Y = e, qa.current = null
}

function Gd(t) {
    var e = t;
    do {
        var r = e.alternate;
        if (t = e.return, e.flags & 32768) {
            if (r = Vm(r, e), r !== null) {
                r.flags &= 32767, Y = r;
                return
            }
            if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
            else {
                te = 6, Y = null;
                return
            }
        } else if (r = Hm(r, e, ke), r !== null) {
            Y = r;
            return
        }
        if (e = e.sibling, e !== null) {
            Y = e;
            return
        }
        Y = e = t
    } while (e !== null);
    te === 0 && (te = 5)
}

function Bt(t, e, r) {
    var n = M,
        s = Ie.transition;
    try {
        Ie.transition = null, M = 1, Zm(t, e, r, n)
    } finally {
        Ie.transition = s, M = n
    }
    return null
}

function Zm(t, e, r, n) {
    do Pr(); while (jt !== null);
    if ($ & 6) throw Error(b(327));
    r = t.finishedWork;
    var s = t.finishedLanes;
    if (r === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, r === t.current) throw Error(b(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var o = r.lanes | r.childLanes;
    if (Af(t, o), t === se && (Y = se = null, oe = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || cs || (cs = !0, Yd(Ts, function() {
            return Pr(), null
        })), o = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || o) {
        o = Ie.transition, Ie.transition = null;
        var a = M;
        M = 1;
        var l = $;
        $ |= 4, qa.current = null, Km(t, r), Bd(r, t), vm(Co), Os = !!Eo, Co = Eo = null, t.current = r, Gm(r), kf(), $ = l, M = a, Ie.transition = o
    } else t.current = r;
    if (cs && (cs = !1, jt = t, Gs = s), o = t.pendingLanes, o === 0 && (Ct = null), Ef(r.stateNode), Ne(t, Q()), e !== null)
        for (n = t.onRecoverableError, r = 0; r < e.length; r++) s = e[r], n(s.value, {
            componentStack: s.stack,
            digest: s.digest
        });
    if (Ks) throw Ks = !1, t = Go, Go = null, t;
    return Gs & 1 && t.tag !== 0 && Pr(), o = t.pendingLanes, o & 1 ? t === Jo ? gn++ : (gn = 0, Jo = t) : gn = 0, Rt(), null
}

function Pr() {
    if (jt !== null) {
        var t = Cu(Gs),
            e = Ie.transition,
            r = M;
        try {
            if (Ie.transition = null, M = 16 > t ? 16 : t, jt === null) var n = !1;
            else {
                if (t = jt, jt = null, Gs = 0, $ & 6) throw Error(b(331));
                var s = $;
                for ($ |= 4, E = t.current; E !== null;) {
                    var o = E,
                        a = o.child;
                    if (E.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var c = 0; c < l.length; c++) {
                                var u = l[c];
                                for (E = u; E !== null;) {
                                    var h = E;
                                    switch (h.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            mn(8, h, o)
                                    }
                                    var f = h.child;
                                    if (f !== null) f.return = h, E = f;
                                    else
                                        for (; E !== null;) {
                                            h = E;
                                            var d = h.sibling,
                                                p = h.return;
                                            if (Dd(h), h === u) {
                                                E = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = p, E = d;
                                                break
                                            }
                                            E = p
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var v = y.child;
                                if (v !== null) {
                                    y.child = null;
                                    do {
                                        var N = v.sibling;
                                        v.sibling = null, v = N
                                    } while (v !== null)
                                }
                            }
                            E = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && a !== null) a.return = o, E = a;
                    else e: for (; E !== null;) {
                        if (o = E, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                mn(9, o, o.return)
                        }
                        var x = o.sibling;
                        if (x !== null) {
                            x.return = o.return, E = x;
                            break e
                        }
                        E = o.return
                    }
                }
                var m = t.current;
                for (E = m; E !== null;) {
                    a = E;
                    var g = a.child;
                    if (a.subtreeFlags & 2064 && g !== null) g.return = a, E = g;
                    else e: for (a = m; E !== null;) {
                        if (l = E, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ci(9, l)
                            }
                        } catch (k) {
                            K(l, l.return, k)
                        }
                        if (l === a) {
                            E = null;
                            break e
                        }
                        var w = l.sibling;
                        if (w !== null) {
                            w.return = l.return, E = w;
                            break e
                        }
                        E = l.return
                    }
                }
                if ($ = s, Rt(), Xe && typeof Xe.onPostCommitFiberRoot == "function") try {
                    Xe.onPostCommitFiberRoot(ti, t)
                } catch {}
                n = !0
            }
            return n
        } finally {
            M = r, Ie.transition = e
        }
    }
    return !1
}

function bc(t, e, r) {
    e = $r(r, e), e = Cd(t, e, 1), t = Et(t, e, 1), e = me(), t !== null && (Dn(t, 1, e), Ne(t, e))
}

function K(t, e, r) {
    if (t.tag === 3) bc(t, t, r);
    else
        for (; e !== null;) {
            if (e.tag === 3) {
                bc(e, t, r);
                break
            } else if (e.tag === 1) {
                var n = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Ct === null || !Ct.has(n))) {
                    t = $r(r, t), t = Fd(e, t, 1), e = Et(e, t, 1), t = me(), e !== null && (Dn(e, 1, t), Ne(e, t));
                    break
                }
            }
            e = e.return
        }
}

function ep(t, e, r) {
    var n = t.pingCache;
    n !== null && n.delete(e), e = me(), t.pingedLanes |= t.suspendedLanes & r, se === t && (oe & r) === r && (te === 4 || te === 3 && (oe & 130023424) === oe && 500 > Q() - Ga ? Gt(t, 0) : Ka |= r), Ne(t, e)
}

function Jd(t, e) {
    e === 0 && (t.mode & 1 ? (e = Zn, Zn <<= 1, !(Zn & 130023424) && (Zn = 4194304)) : e = 1);
    var r = me();
    t = ut(t, e), t !== null && (Dn(t, e, r), Ne(t, r))
}

function tp(t) {
    var e = t.memoizedState,
        r = 0;
    e !== null && (r = e.retryLane), Jd(t, r)
}

function rp(t, e) {
    var r = 0;
    switch (t.tag) {
        case 13:
            var n = t.stateNode,
                s = t.memoizedState;
            s !== null && (r = s.retryLane);
            break;
        case 19:
            n = t.stateNode;
            break;
        default:
            throw Error(b(314))
    }
    n !== null && n.delete(e), Jd(t, r)
}
var Qd;
Qd = function(t, e, r) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || be.current) we = !0;
        else {
            if (!(t.lanes & r) && !(e.flags & 128)) return we = !1, Wm(t, e, r);
            we = !!(t.flags & 131072)
        }
    else we = !1, W && e.flags & 1048576 && ed(e, Ds, e.index);
    switch (e.lanes = 0, e.tag) {
        case 2:
            var n = e.type;
            Ns(t, e), t = e.pendingProps;
            var s = Ar(e, de.current);
            Tr(e, r), s = za(null, e, n, t, s, r);
            var o = Ba();
            return e.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, je(n) ? (o = !0, $s(e)) : o = !1, e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, La(e), s.updater = li, e.stateNode = s, s._reactInternals = e, $o(e, n, t, r), e = Uo(null, e, n, !0, o, r)) : (e.tag = 0, W && o && Fa(e), fe(null, e, s, r), e = e.child), e;
        case 16:
            n = e.elementType;
            e: {
                switch (Ns(t, e), t = e.pendingProps, s = n._init, n = s(n._payload), e.type = n, s = e.tag = sp(n), t = ze(n, t), s) {
                    case 0:
                        e = Do(null, e, n, t, r);
                        break e;
                    case 1:
                        e = dc(null, e, n, t, r);
                        break e;
                    case 11:
                        e = cc(null, e, n, t, r);
                        break e;
                    case 14:
                        e = uc(null, e, n, ze(n.type, t), r);
                        break e
                }
                throw Error(b(306, n, ""))
            }
            return e;
        case 0:
            return n = e.type, s = e.pendingProps, s = e.elementType === n ? s : ze(n, s), Do(t, e, n, s, r);
        case 1:
            return n = e.type, s = e.pendingProps, s = e.elementType === n ? s : ze(n, s), dc(t, e, n, s, r);
        case 3:
            e: {
                if (Ad(e), t === null) throw Error(b(387));n = e.pendingProps,
                o = e.memoizedState,
                s = o.element,
                od(t, e),
                Bs(e, n, null, r);
                var a = e.memoizedState;
                if (n = a.element, o.isDehydrated)
                    if (o = {
                            element: n,
                            isDehydrated: !1,
                            cache: a.cache,
                            pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                            transitions: a.transitions
                        }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
                        s = $r(Error(b(423)), e), e = hc(t, e, n, r, s);
                        break e
                    } else if (n !== s) {
                    s = $r(Error(b(424)), e), e = hc(t, e, n, r, s);
                    break e
                } else
                    for (_e = St(e.stateNode.containerInfo.firstChild), Se = e, W = !0, He = null, r = sd(e, null, n, r), e.child = r; r;) r.flags = r.flags & -3 | 4096, r = r.sibling;
                else {
                    if (Ir(), n === s) {
                        e = dt(t, e, r);
                        break e
                    }
                    fe(t, e, n, r)
                }
                e = e.child
            }
            return e;
        case 5:
            return ad(e), t === null && Io(e), n = e.type, s = e.pendingProps, o = t !== null ? t.memoizedProps : null, a = s.children, Fo(n, s) ? a = null : o !== null && Fo(n, o) && (e.flags |= 32), Od(t, e), fe(t, e, a, r), e.child;
        case 6:
            return t === null && Io(e), null;
        case 13:
            return Id(t, e, r);
        case 4:
            return $a(e, e.stateNode.containerInfo), n = e.pendingProps, t === null ? e.child = Rr(e, null, n, r) : fe(t, e, n, r), e.child;
        case 11:
            return n = e.type, s = e.pendingProps, s = e.elementType === n ? s : ze(n, s), cc(t, e, n, s, r);
        case 7:
            return fe(t, e, e.pendingProps, r), e.child;
        case 8:
            return fe(t, e, e.pendingProps.children, r), e.child;
        case 12:
            return fe(t, e, e.pendingProps.children, r), e.child;
        case 10:
            e: {
                if (n = e.type._context, s = e.pendingProps, o = e.memoizedProps, a = s.value, U(Us, n._currentValue), n._currentValue = a, o !== null)
                    if (Ke(o.value, a)) {
                        if (o.children === s.children && !be.current) {
                            e = dt(t, e, r);
                            break e
                        }
                    } else
                        for (o = e.child, o !== null && (o.return = e); o !== null;) {
                            var l = o.dependencies;
                            if (l !== null) {
                                a = o.child;
                                for (var c = l.firstContext; c !== null;) {
                                    if (c.context === n) {
                                        if (o.tag === 1) {
                                            c = at(-1, r & -r), c.tag = 2;
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var h = u.pending;
                                                h === null ? c.next = c : (c.next = h.next, h.next = c), u.pending = c
                                            }
                                        }
                                        o.lanes |= r, c = o.alternate, c !== null && (c.lanes |= r), Ro(o.return, r, e), l.lanes |= r;
                                        break
                                    }
                                    c = c.next
                                }
                            } else if (o.tag === 10) a = o.type === e.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (a = o.return, a === null) throw Error(b(341));
                                a.lanes |= r, l = a.alternate, l !== null && (l.lanes |= r), Ro(a, r, e), a = o.sibling
                            } else a = o.child;
                            if (a !== null) a.return = o;
                            else
                                for (a = o; a !== null;) {
                                    if (a === e) {
                                        a = null;
                                        break
                                    }
                                    if (o = a.sibling, o !== null) {
                                        o.return = a.return, a = o;
                                        break
                                    }
                                    a = a.return
                                }
                            o = a
                        }
                fe(t, e, s.children, r),
                e = e.child
            }
            return e;
        case 9:
            return s = e.type, n = e.pendingProps.children, Tr(e, r), s = Le(s), n = n(s), e.flags |= 1, fe(t, e, n, r), e.child;
        case 14:
            return n = e.type, s = ze(n, e.pendingProps), s = ze(n.type, s), uc(t, e, n, s, r);
        case 15:
            return Td(t, e, e.type, e.pendingProps, r);
        case 17:
            return n = e.type, s = e.pendingProps, s = e.elementType === n ? s : ze(n, s), Ns(t, e), e.tag = 1, je(n) ? (t = !0, $s(e)) : t = !1, Tr(e, r), Ed(e, n, s), $o(e, n, s, r), Uo(null, e, n, !0, t, r);
        case 19:
            return Rd(t, e, r);
        case 22:
            return Pd(t, e, r)
    }
    throw Error(b(156, e.tag))
};

function Yd(t, e) {
    return ku(t, e)
}

function np(t, e, r, n) {
    this.tag = t, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ae(t, e, r, n) {
    return new np(t, e, r, n)
}

function Xa(t) {
    return t = t.prototype, !(!t || !t.isReactComponent)
}

function sp(t) {
    if (typeof t == "function") return Xa(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof, t === xa) return 11;
        if (t === ya) return 14
    }
    return 2
}

function Tt(t, e) {
    var r = t.alternate;
    return r === null ? (r = Ae(t.tag, e, t.key, t.mode), r.elementType = t.elementType, r.type = t.type, r.stateNode = t.stateNode, r.alternate = t, t.alternate = r) : (r.pendingProps = e, r.type = t.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = t.flags & 14680064, r.childLanes = t.childLanes, r.lanes = t.lanes, r.child = t.child, r.memoizedProps = t.memoizedProps, r.memoizedState = t.memoizedState, r.updateQueue = t.updateQueue, e = t.dependencies, r.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    }, r.sibling = t.sibling, r.index = t.index, r.ref = t.ref, r
}

function Ss(t, e, r, n, s, o) {
    var a = 2;
    if (n = t, typeof t == "function") Xa(t) && (a = 1);
    else if (typeof t == "string") a = 5;
    else e: switch (t) {
        case mr:
            return Jt(r.children, s, o, e);
        case ga:
            a = 8, s |= 8;
            break;
        case oo:
            return t = Ae(12, r, e, s | 2), t.elementType = oo, t.lanes = o, t;
        case ao:
            return t = Ae(13, r, e, s), t.elementType = ao, t.lanes = o, t;
        case lo:
            return t = Ae(19, r, e, s), t.elementType = lo, t.lanes = o, t;
        case au:
            return di(r, s, o, e);
        default:
            if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                case iu:
                    a = 10;
                    break e;
                case ou:
                    a = 9;
                    break e;
                case xa:
                    a = 11;
                    break e;
                case ya:
                    a = 14;
                    break e;
                case gt:
                    a = 16, n = null;
                    break e
            }
            throw Error(b(130, t == null ? t : typeof t, ""))
    }
    return e = Ae(a, r, e, s), e.elementType = t, e.type = n, e.lanes = o, e
}

function Jt(t, e, r, n) {
    return t = Ae(7, t, n, e), t.lanes = r, t
}

function di(t, e, r, n) {
    return t = Ae(22, t, n, e), t.elementType = au, t.lanes = r, t.stateNode = {
        isHidden: !1
    }, t
}

function Ji(t, e, r) {
    return t = Ae(6, t, null, e), t.lanes = r, t
}

function Qi(t, e, r) {
    return e = Ae(4, t.children !== null ? t.children : [], t.key, e), e.lanes = r, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    }, e
}

function ip(t, e, r, n, s) {
    this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ti(0), this.expirationTimes = Ti(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ti(0), this.identifierPrefix = n, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null
}

function Za(t, e, r, n, s, o, a, l, c) {
    return t = new ip(t, e, r, l, c), e === 1 ? (e = 1, o === !0 && (e |= 8)) : e = 0, o = Ae(3, null, null, e), t.current = o, o.stateNode = t, o.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, La(o), t
}

function op(t, e, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: fr,
        key: n == null ? null : "" + n,
        children: t,
        containerInfo: e,
        implementation: r
    }
}

function Xd(t) {
    if (!t) return Ot;
    t = t._reactInternals;
    e: {
        if (rr(t) !== t || t.tag !== 1) throw Error(b(170));
        var e = t;do {
            switch (e.tag) {
                case 3:
                    e = e.stateNode.context;
                    break e;
                case 1:
                    if (je(e.type)) {
                        e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            e = e.return
        } while (e !== null);
        throw Error(b(171))
    }
    if (t.tag === 1) {
        var r = t.type;
        if (je(r)) return Xu(t, r, e)
    }
    return e
}

function Zd(t, e, r, n, s, o, a, l, c) {
    return t = Za(r, n, !0, t, s, o, a, l, c), t.context = Xd(null), r = t.current, n = me(), s = Ft(r), o = at(n, s), o.callback = e ?? null, Et(r, o, s), t.current.lanes = s, Dn(t, s, n), Ne(t, n), t
}

function hi(t, e, r, n) {
    var s = e.current,
        o = me(),
        a = Ft(s);
    return r = Xd(r), e.context === null ? e.context = r : e.pendingContext = r, e = at(o, a), e.payload = {
        element: t
    }, n = n === void 0 ? null : n, n !== null && (e.callback = n), t = Et(s, e, a), t !== null && (qe(t, s, a, o), ws(t, s, a)), a
}

function Qs(t) {
    if (t = t.current, !t.child) return null;
    switch (t.child.tag) {
        case 5:
            return t.child.stateNode;
        default:
            return t.child.stateNode
    }
}

function jc(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var r = t.retryLane;
        t.retryLane = r !== 0 && r < e ? r : e
    }
}

function el(t, e) {
    jc(t, e), (t = t.alternate) && jc(t, e)
}

function ap() {
    return null
}
var eh = typeof reportError == "function" ? reportError : function(t) {
    console.error(t)
};

function tl(t) {
    this._internalRoot = t
}
fi.prototype.render = tl.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(b(409));
    hi(t, e, null, null)
};
fi.prototype.unmount = tl.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        er(function() {
            hi(null, t, null, null)
        }), e[ct] = null
    }
};

function fi(t) {
    this._internalRoot = t
}
fi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = Pu();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var r = 0; r < yt.length && e !== 0 && e < yt[r].priority; r++);
        yt.splice(r, 0, t), r === 0 && Au(t)
    }
};

function rl(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}

function mi(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}

function Nc() {}

function lp(t, e, r, n, s) {
    if (s) {
        if (typeof n == "function") {
            var o = n;
            n = function() {
                var u = Qs(a);
                o.call(u)
            }
        }
        var a = Zd(e, n, t, 0, null, !1, !1, "", Nc);
        return t._reactRootContainer = a, t[ct] = a.current, Cn(t.nodeType === 8 ? t.parentNode : t), er(), a
    }
    for (; s = t.lastChild;) t.removeChild(s);
    if (typeof n == "function") {
        var l = n;
        n = function() {
            var u = Qs(c);
            l.call(u)
        }
    }
    var c = Za(t, 0, !1, null, null, !1, !1, "", Nc);
    return t._reactRootContainer = c, t[ct] = c.current, Cn(t.nodeType === 8 ? t.parentNode : t), er(function() {
        hi(e, c, r, n)
    }), c
}

function pi(t, e, r, n, s) {
    var o = r._reactRootContainer;
    if (o) {
        var a = o;
        if (typeof s == "function") {
            var l = s;
            s = function() {
                var c = Qs(a);
                l.call(c)
            }
        }
        hi(e, a, t, s)
    } else a = lp(r, e, t, s, n);
    return Qs(a)
}
Fu = function(t) {
    switch (t.tag) {
        case 3:
            var e = t.stateNode;
            if (e.current.memoizedState.isDehydrated) {
                var r = sn(e.pendingLanes);
                r !== 0 && (ba(e, r | 1), Ne(e, Q()), !($ & 6) && (Mr = Q() + 500, Rt()))
            }
            break;
        case 13:
            er(function() {
                var n = ut(t, 1);
                if (n !== null) {
                    var s = me();
                    qe(n, t, 1, s)
                }
            }), el(t, 1)
    }
};
ja = function(t) {
    if (t.tag === 13) {
        var e = ut(t, 134217728);
        if (e !== null) {
            var r = me();
            qe(e, t, 134217728, r)
        }
        el(t, 134217728)
    }
};
Tu = function(t) {
    if (t.tag === 13) {
        var e = Ft(t),
            r = ut(t, e);
        if (r !== null) {
            var n = me();
            qe(r, t, e, n)
        }
        el(t, e)
    }
};
Pu = function() {
    return M
};
Ou = function(t, e) {
    var r = M;
    try {
        return M = t, e()
    } finally {
        M = r
    }
};
vo = function(t, e, r) {
    switch (e) {
        case "input":
            if (ho(t, r), e = r.name, r.type === "radio" && e != null) {
                for (r = t; r.parentNode;) r = r.parentNode;
                for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < r.length; e++) {
                    var n = r[e];
                    if (n !== t && n.form === t.form) {
                        var s = ii(n);
                        if (!s) throw Error(b(90));
                        cu(n), ho(n, s)
                    }
                }
            }
            break;
        case "textarea":
            du(t, r);
            break;
        case "select":
            e = r.value, e != null && Sr(t, !!r.multiple, e, !1)
    }
};
yu = Ja;
vu = er;
var cp = {
        usingClientEntryPoint: !1,
        Events: [zn, yr, ii, gu, xu, Ja]
    },
    en = {
        findFiberByHostInstance: Vt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    up = {
        bundleType: en.bundleType,
        version: en.version,
        rendererPackageName: en.rendererPackageName,
        rendererConfig: en.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: ht.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(t) {
            return t = ju(t), t === null ? null : t.stateNode
        },
        findFiberByHostInstance: en.findFiberByHostInstance || ap,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var us = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!us.isDisabled && us.supportsFiber) try {
        ti = us.inject(up), Xe = us
    } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cp;
Fe.createPortal = function(t, e) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!rl(e)) throw Error(b(200));
    return op(t, e, null, r)
};
Fe.createRoot = function(t, e) {
    if (!rl(t)) throw Error(b(299));
    var r = !1,
        n = "",
        s = eh;
    return e != null && (e.unstable_strictMode === !0 && (r = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onRecoverableError !== void 0 && (s = e.onRecoverableError)), e = Za(t, 1, !1, null, null, r, !1, n, s), t[ct] = e.current, Cn(t.nodeType === 8 ? t.parentNode : t), new tl(e)
};
Fe.findDOMNode = function(t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(b(188)) : (t = Object.keys(t).join(","), Error(b(268, t)));
    return t = ju(e), t = t === null ? null : t.stateNode, t
};
Fe.flushSync = function(t) {
    return er(t)
};
Fe.hydrate = function(t, e, r) {
    if (!mi(e)) throw Error(b(200));
    return pi(null, t, e, !0, r)
};
Fe.hydrateRoot = function(t, e, r) {
    if (!rl(t)) throw Error(b(405));
    var n = r != null && r.hydratedSources || null,
        s = !1,
        o = "",
        a = eh;
    if (r != null && (r.unstable_strictMode === !0 && (s = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), e = Zd(e, null, t, 1, r ?? null, s, !1, o, a), t[ct] = e.current, Cn(t), n)
        for (t = 0; t < n.length; t++) r = n[t], s = r._getVersion, s = s(r._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [r, s] : e.mutableSourceEagerHydrationData.push(r, s);
    return new fi(e)
};
Fe.render = function(t, e, r) {
    if (!mi(e)) throw Error(b(200));
    return pi(null, t, e, !1, r)
};
Fe.unmountComponentAtNode = function(t) {
    if (!mi(t)) throw Error(b(40));
    return t._reactRootContainer ? (er(function() {
        pi(null, null, t, !1, function() {
            t._reactRootContainer = null, t[ct] = null
        })
    }), !0) : !1
};
Fe.unstable_batchedUpdates = Ja;
Fe.unstable_renderSubtreeIntoContainer = function(t, e, r, n) {
    if (!mi(r)) throw Error(b(200));
    if (t == null || t._reactInternals === void 0) throw Error(b(38));
    return pi(t, e, r, !1, n)
};
Fe.version = "18.3.1-next-f1338f8080-20240426";

function th() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(th)
    } catch (t) {
        console.error(t)
    }
}
th(), tu.exports = Fe;
var dp = tu.exports,
    rh, kc = dp;
rh = kc.createRoot, kc.hydrateRoot;
const hp = "modulepreload",
    fp = function(t) {
        return "/" + t
    },
    _c = {},
    Wn = function(e, r, n) {
        let s = Promise.resolve();
        if (r && r.length > 0) {
            document.getElementsByTagName("link");
            const a = document.querySelector("meta[property=csp-nonce]"),
                l = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute("nonce"));
            s = Promise.allSettled(r.map(c => {
                if (c = fp(c), c in _c) return;
                _c[c] = !0;
                const u = c.endsWith(".css"),
                    h = u ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${c}"]${h}`)) return;
                const f = document.createElement("link");
                if (f.rel = u ? "stylesheet" : hp, u || (f.as = "script"), f.crossOrigin = "", f.href = c, l && f.setAttribute("nonce", l), document.head.appendChild(f), u) return new Promise((d, p) => {
                    f.addEventListener("load", d), f.addEventListener("error", () => p(new Error(`Unable to preload CSS for ${c}`)))
                })
            }))
        }

        function o(a) {
            const l = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (l.payload = a, window.dispatchEvent(l), !l.defaultPrevented) throw a
        }
        return s.then(a => {
            for (const l of a || []) l.status === "rejected" && o(l.reason);
            return e().catch(o)
        })
    },
    mp = t => {
        let e;
        return t ? e = t : typeof fetch > "u" ? e = (...r) => Wn(async () => {
            const {
                default: n
            } = await Promise.resolve().then(() => Wr);
            return {
                default: n
            }
        }, void 0).then(({
            default: n
        }) => n(...r)) : e = fetch, (...r) => e(...r)
    };
class nl extends Error {
    constructor(e, r = "FunctionsError", n) {
        super(e), this.name = r, this.context = n
    }
}
class pp extends nl {
    constructor(e) {
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", e)
    }
}
class Sc extends nl {
    constructor(e) {
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", e)
    }
}
class Ec extends nl {
    constructor(e) {
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e)
    }
}
var Xo;
(function(t) {
    t.Any = "any", t.ApNortheast1 = "ap-northeast-1", t.ApNortheast2 = "ap-northeast-2", t.ApSouth1 = "ap-south-1", t.ApSoutheast1 = "ap-southeast-1", t.ApSoutheast2 = "ap-southeast-2", t.CaCentral1 = "ca-central-1", t.EuCentral1 = "eu-central-1", t.EuWest1 = "eu-west-1", t.EuWest2 = "eu-west-2", t.EuWest3 = "eu-west-3", t.SaEast1 = "sa-east-1", t.UsEast1 = "us-east-1", t.UsWest1 = "us-west-1", t.UsWest2 = "us-west-2"
})(Xo || (Xo = {}));
var gp = function(t, e, r, n) {
    function s(o) {
        return o instanceof r ? o : new r(function(a) {
            a(o)
        })
    }
    return new(r || (r = Promise))(function(o, a) {
        function l(h) {
            try {
                u(n.next(h))
            } catch (f) {
                a(f)
            }
        }

        function c(h) {
            try {
                u(n.throw(h))
            } catch (f) {
                a(f)
            }
        }

        function u(h) {
            h.done ? o(h.value) : s(h.value).then(l, c)
        }
        u((n = n.apply(t, e || [])).next())
    })
};
class xp {
    constructor(e, {
        headers: r = {},
        customFetch: n,
        region: s = Xo.Any
    } = {}) {
        this.url = e, this.headers = r, this.region = s, this.fetch = mp(n)
    }
    setAuth(e) {
        this.headers.Authorization = `Bearer ${e}`
    }
    invoke(e, r = {}) {
        var n;
        return gp(this, void 0, void 0, function*() {
            try {
                const {
                    headers: s,
                    method: o,
                    body: a
                } = r;
                let l = {},
                    {
                        region: c
                    } = r;
                c || (c = this.region);
                const u = new URL(`${this.url}/${e}`);
                c && c !== "any" && (l["x-region"] = c, u.searchParams.set("forceFunctionRegion", c));
                let h;
                a && (s && !Object.prototype.hasOwnProperty.call(s, "Content-Type") || !s) && (typeof Blob < "u" && a instanceof Blob || a instanceof ArrayBuffer ? (l["Content-Type"] = "application/octet-stream", h = a) : typeof a == "string" ? (l["Content-Type"] = "text/plain", h = a) : typeof FormData < "u" && a instanceof FormData ? h = a : (l["Content-Type"] = "application/json", h = JSON.stringify(a)));
                const f = yield this.fetch(u.toString(), {
                    method: o || "POST",
                    headers: Object.assign(Object.assign(Object.assign({}, l), this.headers), s),
                    body: h
                }).catch(v => {
                    throw new pp(v)
                }), d = f.headers.get("x-relay-error");
                if (d && d === "true") throw new Sc(f);
                if (!f.ok) throw new Ec(f);
                let p = ((n = f.headers.get("Content-Type")) !== null && n !== void 0 ? n : "text/plain").split(";")[0].trim(),
                    y;
                return p === "application/json" ? y = yield f.json(): p === "application/octet-stream" ? y = yield f.blob(): p === "text/event-stream" ? y = f : p === "multipart/form-data" ? y = yield f.formData(): y = yield f.text(), {
                    data: y,
                    error: null,
                    response: f
                }
            } catch (s) {
                return {
                    data: null,
                    error: s,
                    response: s instanceof Ec || s instanceof Sc ? s.context : void 0
                }
            }
        })
    }
}
var ye = {},
    sl = {},
    gi = {},
    Hn = {},
    xi = {},
    yi = {},
    yp = function() {
        if (typeof self < "u") return self;
        if (typeof window < "u") return window;
        if (typeof global < "u") return global;
        throw new Error("unable to locate global object")
    },
    Dr = yp();
const vp = Dr.fetch,
    nh = Dr.fetch.bind(Dr),
    sh = Dr.Headers,
    wp = Dr.Request,
    bp = Dr.Response,
    Wr = Object.freeze(Object.defineProperty({
        __proto__: null,
        Headers: sh,
        Request: wp,
        Response: bp,
        default: nh,
        fetch: vp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    jp = Mh(Wr);
var vi = {};
Object.defineProperty(vi, "__esModule", {
    value: !0
});
let Np = class extends Error {
    constructor(e) {
        super(e.message), this.name = "PostgrestError", this.details = e.details, this.hint = e.hint, this.code = e.code
    }
};
vi.default = Np;
var ih = Re && Re.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(yi, "__esModule", {
    value: !0
});
const kp = ih(jp),
    _p = ih(vi);
let Sp = class {
    constructor(e) {
        var r, n;
        this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = new Headers(e.headers), this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = (r = e.shouldThrowOnError) !== null && r !== void 0 ? r : !1, this.signal = e.signal, this.isMaybeSingle = (n = e.isMaybeSingle) !== null && n !== void 0 ? n : !1, e.fetch ? this.fetch = e.fetch : typeof fetch > "u" ? this.fetch = kp.default : this.fetch = fetch
    }
    throwOnError() {
        return this.shouldThrowOnError = !0, this
    }
    setHeader(e, r) {
        return this.headers = new Headers(this.headers), this.headers.set(e, r), this
    }
    then(e, r) {
        this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
        const n = this.fetch;
        let s = n(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async o => {
            var a, l, c, u;
            let h = null,
                f = null,
                d = null,
                p = o.status,
                y = o.statusText;
            if (o.ok) {
                if (this.method !== "HEAD") {
                    const m = await o.text();
                    m === "" || (this.headers.get("Accept") === "text/csv" || this.headers.get("Accept") && (!((a = this.headers.get("Accept")) === null || a === void 0) && a.includes("application/vnd.pgrst.plan+text")) ? f = m : f = JSON.parse(m))
                }
                const N = (l = this.headers.get("Prefer")) === null || l === void 0 ? void 0 : l.match(/count=(exact|planned|estimated)/),
                    x = (c = o.headers.get("content-range")) === null || c === void 0 ? void 0 : c.split("/");
                N && x && x.length > 1 && (d = parseInt(x[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(f) && (f.length > 1 ? (h = {
                    code: "PGRST116",
                    details: `Results contain ${f.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message: "JSON object requested, multiple (or no) rows returned"
                }, f = null, d = null, p = 406, y = "Not Acceptable") : f.length === 1 ? f = f[0] : f = null)
            } else {
                const N = await o.text();
                try {
                    h = JSON.parse(N), Array.isArray(h) && o.status === 404 && (f = [], h = null, p = 200, y = "OK")
                } catch {
                    o.status === 404 && N === "" ? (p = 204, y = "No Content") : h = {
                        message: N
                    }
                }
                if (h && this.isMaybeSingle && (!((u = h == null ? void 0 : h.details) === null || u === void 0) && u.includes("0 rows")) && (h = null, p = 200, y = "OK"), h && this.shouldThrowOnError) throw new _p.default(h)
            }
            return {
                error: h,
                data: f,
                count: d,
                status: p,
                statusText: y
            }
        });
        return this.shouldThrowOnError || (s = s.catch(o => {
            var a, l, c;
            return {
                error: {
                    message: `${(a=o==null?void 0:o.name)!==null&&a!==void 0?a:"FetchError"}: ${o==null?void 0:o.message}`,
                    details: `${(l=o==null?void 0:o.stack)!==null&&l!==void 0?l:""}`,
                    hint: "",
                    code: `${(c=o==null?void 0:o.code)!==null&&c!==void 0?c:""}`
                },
                data: null,
                count: null,
                status: 0,
                statusText: ""
            }
        })), s.then(e, r)
    }
    returns() {
        return this
    }
    overrideTypes() {
        return this
    }
};
yi.default = Sp;
var Ep = Re && Re.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(xi, "__esModule", {
    value: !0
});
const Cp = Ep(yi);
let Fp = class extends Cp.default {
    select(e) {
        let r = !1;
        const n = (e ?? "*").split("").map(s => /\s/.test(s) && !r ? "" : (s === '"' && (r = !r), s)).join("");
        return this.url.searchParams.set("select", n), this.headers.append("Prefer", "return=representation"), this
    }
    order(e, {
        ascending: r = !0,
        nullsFirst: n,
        foreignTable: s,
        referencedTable: o = s
    } = {}) {
        const a = o ? `${o}.order` : "order",
            l = this.url.searchParams.get(a);
        return this.url.searchParams.set(a, `${l?`${l},`:""}${e}.${r?"asc":"desc"}${n===void 0?"":n?".nullsfirst":".nullslast"}`), this
    }
    limit(e, {
        foreignTable: r,
        referencedTable: n = r
    } = {}) {
        const s = typeof n > "u" ? "limit" : `${n}.limit`;
        return this.url.searchParams.set(s, `${e}`), this
    }
    range(e, r, {
        foreignTable: n,
        referencedTable: s = n
    } = {}) {
        const o = typeof s > "u" ? "offset" : `${s}.offset`,
            a = typeof s > "u" ? "limit" : `${s}.limit`;
        return this.url.searchParams.set(o, `${e}`), this.url.searchParams.set(a, `${r-e+1}`), this
    }
    abortSignal(e) {
        return this.signal = e, this
    }
    single() {
        return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this
    }
    maybeSingle() {
        return this.method === "GET" ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"), this.isMaybeSingle = !0, this
    }
    csv() {
        return this.headers.set("Accept", "text/csv"), this
    }
    geojson() {
        return this.headers.set("Accept", "application/geo+json"), this
    }
    explain({
        analyze: e = !1,
        verbose: r = !1,
        settings: n = !1,
        buffers: s = !1,
        wal: o = !1,
        format: a = "text"
    } = {}) {
        var l;
        const c = [e ? "analyze" : null, r ? "verbose" : null, n ? "settings" : null, s ? "buffers" : null, o ? "wal" : null].filter(Boolean).join("|"),
            u = (l = this.headers.get("Accept")) !== null && l !== void 0 ? l : "application/json";
        return this.headers.set("Accept", `application/vnd.pgrst.plan+${a}; for="${u}"; options=${c};`), a === "json" ? this : this
    }
    rollback() {
        return this.headers.append("Prefer", "tx=rollback"), this
    }
    returns() {
        return this
    }
    maxAffected(e) {
        return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${e}`), this
    }
};
xi.default = Fp;
var Tp = Re && Re.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(Hn, "__esModule", {
    value: !0
});
const Pp = Tp(xi);
let Op = class extends Pp.default {
    eq(e, r) {
        return this.url.searchParams.append(e, `eq.${r}`), this
    }
    neq(e, r) {
        return this.url.searchParams.append(e, `neq.${r}`), this
    }
    gt(e, r) {
        return this.url.searchParams.append(e, `gt.${r}`), this
    }
    gte(e, r) {
        return this.url.searchParams.append(e, `gte.${r}`), this
    }
    lt(e, r) {
        return this.url.searchParams.append(e, `lt.${r}`), this
    }
    lte(e, r) {
        return this.url.searchParams.append(e, `lte.${r}`), this
    }
    like(e, r) {
        return this.url.searchParams.append(e, `like.${r}`), this
    }
    likeAllOf(e, r) {
        return this.url.searchParams.append(e, `like(all).{${r.join(",")}}`), this
    }
    likeAnyOf(e, r) {
        return this.url.searchParams.append(e, `like(any).{${r.join(",")}}`), this
    }
    ilike(e, r) {
        return this.url.searchParams.append(e, `ilike.${r}`), this
    }
    ilikeAllOf(e, r) {
        return this.url.searchParams.append(e, `ilike(all).{${r.join(",")}}`), this
    }
    ilikeAnyOf(e, r) {
        return this.url.searchParams.append(e, `ilike(any).{${r.join(",")}}`), this
    }
    is(e, r) {
        return this.url.searchParams.append(e, `is.${r}`), this
    }
    in(e, r) {
        const n = Array.from(new Set(r)).map(s => typeof s == "string" && new RegExp("[,()]").test(s) ? `"${s}"` : `${s}`).join(",");
        return this.url.searchParams.append(e, `in.(${n})`), this
    }
    contains(e, r) {
        return typeof r == "string" ? this.url.searchParams.append(e, `cs.${r}`) : Array.isArray(r) ? this.url.searchParams.append(e, `cs.{${r.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(r)}`), this
    }
    containedBy(e, r) {
        return typeof r == "string" ? this.url.searchParams.append(e, `cd.${r}`) : Array.isArray(r) ? this.url.searchParams.append(e, `cd.{${r.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(r)}`), this
    }
    rangeGt(e, r) {
        return this.url.searchParams.append(e, `sr.${r}`), this
    }
    rangeGte(e, r) {
        return this.url.searchParams.append(e, `nxl.${r}`), this
    }
    rangeLt(e, r) {
        return this.url.searchParams.append(e, `sl.${r}`), this
    }
    rangeLte(e, r) {
        return this.url.searchParams.append(e, `nxr.${r}`), this
    }
    rangeAdjacent(e, r) {
        return this.url.searchParams.append(e, `adj.${r}`), this
    }
    overlaps(e, r) {
        return typeof r == "string" ? this.url.searchParams.append(e, `ov.${r}`) : this.url.searchParams.append(e, `ov.{${r.join(",")}}`), this
    }
    textSearch(e, r, {
        config: n,
        type: s
    } = {}) {
        let o = "";
        s === "plain" ? o = "pl" : s === "phrase" ? o = "ph" : s === "websearch" && (o = "w");
        const a = n === void 0 ? "" : `(${n})`;
        return this.url.searchParams.append(e, `${o}fts${a}.${r}`), this
    }
    match(e) {
        return Object.entries(e).forEach(([r, n]) => {
            this.url.searchParams.append(r, `eq.${n}`)
        }), this
    }
    not(e, r, n) {
        return this.url.searchParams.append(e, `not.${r}.${n}`), this
    }
    or(e, {
        foreignTable: r,
        referencedTable: n = r
    } = {}) {
        const s = n ? `${n}.or` : "or";
        return this.url.searchParams.append(s, `(${e})`), this
    }
    filter(e, r, n) {
        return this.url.searchParams.append(e, `${r}.${n}`), this
    }
};
Hn.default = Op;
var Ap = Re && Re.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(gi, "__esModule", {
    value: !0
});
const tn = Ap(Hn);
let Ip = class {
    constructor(e, {
        headers: r = {},
        schema: n,
        fetch: s
    }) {
        this.url = e, this.headers = new Headers(r), this.schema = n, this.fetch = s
    }
    select(e, {
        head: r = !1,
        count: n
    } = {}) {
        const s = r ? "HEAD" : "GET";
        let o = !1;
        const a = (e ?? "*").split("").map(l => /\s/.test(l) && !o ? "" : (l === '"' && (o = !o), l)).join("");
        return this.url.searchParams.set("select", a), n && this.headers.append("Prefer", `count=${n}`), new tn.default({
            method: s,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch
        })
    }
    insert(e, {
        count: r,
        defaultToNull: n = !0
    } = {}) {
        var s;
        const o = "POST";
        if (r && this.headers.append("Prefer", `count=${r}`), n || this.headers.append("Prefer", "missing=default"), Array.isArray(e)) {
            const a = e.reduce((l, c) => l.concat(Object.keys(c)), []);
            if (a.length > 0) {
                const l = [...new Set(a)].map(c => `"${c}"`);
                this.url.searchParams.set("columns", l.join(","))
            }
        }
        return new tn.default({
            method: o,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: (s = this.fetch) !== null && s !== void 0 ? s : fetch
        })
    }
    upsert(e, {
        onConflict: r,
        ignoreDuplicates: n = !1,
        count: s,
        defaultToNull: o = !0
    } = {}) {
        var a;
        const l = "POST";
        if (this.headers.append("Prefer", `resolution=${n?"ignore":"merge"}-duplicates`), r !== void 0 && this.url.searchParams.set("on_conflict", r), s && this.headers.append("Prefer", `count=${s}`), o || this.headers.append("Prefer", "missing=default"), Array.isArray(e)) {
            const c = e.reduce((u, h) => u.concat(Object.keys(h)), []);
            if (c.length > 0) {
                const u = [...new Set(c)].map(h => `"${h}"`);
                this.url.searchParams.set("columns", u.join(","))
            }
        }
        return new tn.default({
            method: l,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch
        })
    }
    update(e, {
        count: r
    } = {}) {
        var n;
        const s = "PATCH";
        return r && this.headers.append("Prefer", `count=${r}`), new tn.default({
            method: s,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch
        })
    }
    delete({
        count: e
    } = {}) {
        var r;
        const n = "DELETE";
        return e && this.headers.append("Prefer", `count=${e}`), new tn.default({
            method: n,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch
        })
    }
};
gi.default = Ip;
var oh = Re && Re.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(sl, "__esModule", {
    value: !0
});
const Rp = oh(gi),
    Lp = oh(Hn);
let $p = class ah {
    constructor(e, {
        headers: r = {},
        schema: n,
        fetch: s
    } = {}) {
        this.url = e, this.headers = new Headers(r), this.schemaName = n, this.fetch = s
    }
    from(e) {
        const r = new URL(`${this.url}/${e}`);
        return new Rp.default(r, {
            headers: new Headers(this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        })
    }
    schema(e) {
        return new ah(this.url, {
            headers: this.headers,
            schema: e,
            fetch: this.fetch
        })
    }
    rpc(e, r = {}, {
        head: n = !1,
        get: s = !1,
        count: o
    } = {}) {
        var a;
        let l;
        const c = new URL(`${this.url}/rpc/${e}`);
        let u;
        n || s ? (l = n ? "HEAD" : "GET", Object.entries(r).filter(([f, d]) => d !== void 0).map(([f, d]) => [f, Array.isArray(d) ? `{${d.join(",")}}` : `${d}`]).forEach(([f, d]) => {
            c.searchParams.append(f, d)
        })) : (l = "POST", u = r);
        const h = new Headers(this.headers);
        return o && h.set("Prefer", `count=${o}`), new Lp.default({
            method: l,
            url: c,
            headers: h,
            schema: this.schemaName,
            body: u,
            fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch
        })
    }
};
sl.default = $p;
var Hr = Re && Re.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(ye, "__esModule", {
    value: !0
});
ye.PostgrestError = ye.PostgrestBuilder = ye.PostgrestTransformBuilder = ye.PostgrestFilterBuilder = ye.PostgrestQueryBuilder = ye.PostgrestClient = void 0;
const lh = Hr(sl);
ye.PostgrestClient = lh.default;
const ch = Hr(gi);
ye.PostgrestQueryBuilder = ch.default;
const uh = Hr(Hn);
ye.PostgrestFilterBuilder = uh.default;
const dh = Hr(xi);
ye.PostgrestTransformBuilder = dh.default;
const hh = Hr(yi);
ye.PostgrestBuilder = hh.default;
const fh = Hr(vi);
ye.PostgrestError = fh.default;
var Mp = ye.default = {
    PostgrestClient: lh.default,
    PostgrestQueryBuilder: ch.default,
    PostgrestFilterBuilder: uh.default,
    PostgrestTransformBuilder: dh.default,
    PostgrestBuilder: hh.default,
    PostgrestError: fh.default
};
const {
    PostgrestClient: Dp,
    PostgrestQueryBuilder: Px,
    PostgrestFilterBuilder: Ox,
    PostgrestTransformBuilder: Ax,
    PostgrestBuilder: Ix,
    PostgrestError: Rx
} = Mp;
class Up {
    static detectEnvironment() {
        var e;
        if (typeof WebSocket < "u") return {
            type: "native",
            constructor: WebSocket
        };
        if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u") return {
            type: "native",
            constructor: globalThis.WebSocket
        };
        if (typeof global < "u" && typeof global.WebSocket < "u") return {
            type: "native",
            constructor: global.WebSocket
        };
        if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u") return {
            type: "cloudflare",
            error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
            workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
        };
        if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((e = navigator.userAgent) === null || e === void 0) && e.includes("Vercel-Edge"))) return {
            type: "unsupported",
            error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
            workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
        };
        if (typeof process < "u") {
            const r = process.versions;
            if (r && r.node) {
                const n = r.node,
                    s = parseInt(n.replace(/^v/, "").split(".")[0]);
                return s >= 22 ? typeof globalThis.WebSocket < "u" ? {
                    type: "native",
                    constructor: globalThis.WebSocket
                } : {
                    type: "unsupported",
                    error: `Node.js ${s} detected but native WebSocket not found.`,
                    workaround: "Provide a WebSocket implementation via the transport option."
                } : {
                    type: "unsupported",
                    error: `Node.js ${s} detected without native WebSocket support.`,
                    workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
                }
            }
        }
        return {
            type: "unsupported",
            error: "Unknown JavaScript runtime without WebSocket support.",
            workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
        }
    }
    static getWebSocketConstructor() {
        const e = this.detectEnvironment();
        if (e.constructor) return e.constructor;
        let r = e.error || "WebSocket not supported in this environment.";
        throw e.workaround && (r += `

Suggested solution: ${e.workaround}`), new Error(r)
    }
    static createWebSocket(e, r) {
        const n = this.getWebSocketConstructor();
        return new n(e, r)
    }
    static isWebSocketSupported() {
        try {
            const e = this.detectEnvironment();
            return e.type === "native" || e.type === "ws"
        } catch {
            return !1
        }
    }
}
const zp = "2.15.5",
    Bp = `realtime-js/${zp}`,
    Wp = "1.0.0",
    Zo = 1e4,
    Hp = 1e3,
    Vp = 100;
var xn;
(function(t) {
    t[t.connecting = 0] = "connecting", t[t.open = 1] = "open", t[t.closing = 2] = "closing", t[t.closed = 3] = "closed"
})(xn || (xn = {}));
var X;
(function(t) {
    t.closed = "closed", t.errored = "errored", t.joined = "joined", t.joining = "joining", t.leaving = "leaving"
})(X || (X = {}));
var We;
(function(t) {
    t.close = "phx_close", t.error = "phx_error", t.join = "phx_join", t.reply = "phx_reply", t.leave = "phx_leave", t.access_token = "access_token"
})(We || (We = {}));
var ea;
(function(t) {
    t.websocket = "websocket"
})(ea || (ea = {}));
var Ht;
(function(t) {
    t.Connecting = "connecting", t.Open = "open", t.Closing = "closing", t.Closed = "closed"
})(Ht || (Ht = {}));
class qp {
    constructor() {
        this.HEADER_LENGTH = 1
    }
    decode(e, r) {
        return e.constructor === ArrayBuffer ? r(this._binaryDecode(e)) : r(typeof e == "string" ? JSON.parse(e) : {})
    }
    _binaryDecode(e) {
        const r = new DataView(e),
            n = new TextDecoder;
        return this._decodeBroadcast(e, r, n)
    }
    _decodeBroadcast(e, r, n) {
        const s = r.getUint8(1),
            o = r.getUint8(2);
        let a = this.HEADER_LENGTH + 2;
        const l = n.decode(e.slice(a, a + s));
        a = a + s;
        const c = n.decode(e.slice(a, a + o));
        a = a + o;
        const u = JSON.parse(n.decode(e.slice(a, e.byteLength)));
        return {
            ref: null,
            topic: l,
            event: c,
            payload: u
        }
    }
}
class mh {
    constructor(e, r) {
        this.callback = e, this.timerCalc = r, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = r
    }
    reset() {
        this.tries = 0, clearTimeout(this.timer), this.timer = void 0
    }
    scheduleTimeout() {
        clearTimeout(this.timer), this.timer = setTimeout(() => {
            this.tries = this.tries + 1, this.callback()
        }, this.timerCalc(this.tries + 1))
    }
}
var D;
(function(t) {
    t.abstime = "abstime", t.bool = "bool", t.date = "date", t.daterange = "daterange", t.float4 = "float4", t.float8 = "float8", t.int2 = "int2", t.int4 = "int4", t.int4range = "int4range", t.int8 = "int8", t.int8range = "int8range", t.json = "json", t.jsonb = "jsonb", t.money = "money", t.numeric = "numeric", t.oid = "oid", t.reltime = "reltime", t.text = "text", t.time = "time", t.timestamp = "timestamp", t.timestamptz = "timestamptz", t.timetz = "timetz", t.tsrange = "tsrange", t.tstzrange = "tstzrange"
})(D || (D = {}));
const Cc = (t, e, r = {}) => {
        var n;
        const s = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
        return Object.keys(e).reduce((o, a) => (o[a] = Kp(a, t, e, s), o), {})
    },
    Kp = (t, e, r, n) => {
        const s = e.find(l => l.name === t),
            o = s == null ? void 0 : s.type,
            a = r[t];
        return o && !n.includes(o) ? ph(o, a) : ta(a)
    },
    ph = (t, e) => {
        if (t.charAt(0) === "_") {
            const r = t.slice(1, t.length);
            return Yp(e, r)
        }
        switch (t) {
            case D.bool:
                return Gp(e);
            case D.float4:
            case D.float8:
            case D.int2:
            case D.int4:
            case D.int8:
            case D.numeric:
            case D.oid:
                return Jp(e);
            case D.json:
            case D.jsonb:
                return Qp(e);
            case D.timestamp:
                return Xp(e);
            case D.abstime:
            case D.date:
            case D.daterange:
            case D.int4range:
            case D.int8range:
            case D.money:
            case D.reltime:
            case D.text:
            case D.time:
            case D.timestamptz:
            case D.timetz:
            case D.tsrange:
            case D.tstzrange:
                return ta(e);
            default:
                return ta(e)
        }
    },
    ta = t => t,
    Gp = t => {
        switch (t) {
            case "t":
                return !0;
            case "f":
                return !1;
            default:
                return t
        }
    },
    Jp = t => {
        if (typeof t == "string") {
            const e = parseFloat(t);
            if (!Number.isNaN(e)) return e
        }
        return t
    },
    Qp = t => {
        if (typeof t == "string") try {
            return JSON.parse(t)
        } catch (e) {
            return console.log(`JSON parse error: ${e}`), t
        }
        return t
    },
    Yp = (t, e) => {
        if (typeof t != "string") return t;
        const r = t.length - 1,
            n = t[r];
        if (t[0] === "{" && n === "}") {
            let o;
            const a = t.slice(1, r);
            try {
                o = JSON.parse("[" + a + "]")
            } catch {
                o = a ? a.split(",") : []
            }
            return o.map(l => ph(e, l))
        }
        return t
    },
    Xp = t => typeof t == "string" ? t.replace(" ", "T") : t,
    gh = t => {
        let e = t;
        return e = e.replace(/^ws/i, "http"), e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""), e.replace(/\/+$/, "") + "/api/broadcast"
    };
class Yi {
    constructor(e, r, n = {}, s = Zo) {
        this.channel = e, this.event = r, this.payload = n, this.timeout = s, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null
    }
    resend(e) {
        this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send()
    }
    send() {
        this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        }))
    }
    updatePayload(e) {
        this.payload = Object.assign(Object.assign({}, this.payload), e)
    }
    receive(e, r) {
        var n;
        return this._hasReceived(e) && r((n = this.receivedResp) === null || n === void 0 ? void 0 : n.response), this.recHooks.push({
            status: e,
            callback: r
        }), this
    }
    startTimeout() {
        if (this.timeoutTimer) return;
        this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
        const e = r => {
            this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = r, this._matchReceive(r)
        };
        this.channel._on(this.refEvent, {}, e), this.timeoutTimer = setTimeout(() => {
            this.trigger("timeout", {})
        }, this.timeout)
    }
    trigger(e, r) {
        this.refEvent && this.channel._trigger(this.refEvent, {
            status: e,
            response: r
        })
    }
    destroy() {
        this._cancelRefEvent(), this._cancelTimeout()
    }
    _cancelRefEvent() {
        this.refEvent && this.channel._off(this.refEvent, {})
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0
    }
    _matchReceive({
        status: e,
        response: r
    }) {
        this.recHooks.filter(n => n.status === e).forEach(n => n.callback(r))
    }
    _hasReceived(e) {
        return this.receivedResp && this.receivedResp.status === e
    }
}
var Fc;
(function(t) {
    t.SYNC = "sync", t.JOIN = "join", t.LEAVE = "leave"
})(Fc || (Fc = {}));
class yn {
    constructor(e, r) {
        this.channel = e, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.enabled = !1, this.caller = {
            onJoin: () => {},
            onLeave: () => {},
            onSync: () => {}
        };
        const n = (r == null ? void 0 : r.events) || {
            state: "presence_state",
            diff: "presence_diff"
        };
        this.channel._on(n.state, {}, s => {
            const {
                onJoin: o,
                onLeave: a,
                onSync: l
            } = this.caller;
            this.joinRef = this.channel._joinRef(), this.state = yn.syncState(this.state, s, o, a), this.pendingDiffs.forEach(c => {
                this.state = yn.syncDiff(this.state, c, o, a)
            }), this.pendingDiffs = [], l()
        }), this.channel._on(n.diff, {}, s => {
            const {
                onJoin: o,
                onLeave: a,
                onSync: l
            } = this.caller;
            this.inPendingSyncState() ? this.pendingDiffs.push(s) : (this.state = yn.syncDiff(this.state, s, o, a), l())
        }), this.onJoin((s, o, a) => {
            this.channel._trigger("presence", {
                event: "join",
                key: s,
                currentPresences: o,
                newPresences: a
            })
        }), this.onLeave((s, o, a) => {
            this.channel._trigger("presence", {
                event: "leave",
                key: s,
                currentPresences: o,
                leftPresences: a
            })
        }), this.onSync(() => {
            this.channel._trigger("presence", {
                event: "sync"
            })
        })
    }
    static syncState(e, r, n, s) {
        const o = this.cloneDeep(e),
            a = this.transformState(r),
            l = {},
            c = {};
        return this.map(o, (u, h) => {
            a[u] || (c[u] = h)
        }), this.map(a, (u, h) => {
            const f = o[u];
            if (f) {
                const d = h.map(N => N.presence_ref),
                    p = f.map(N => N.presence_ref),
                    y = h.filter(N => p.indexOf(N.presence_ref) < 0),
                    v = f.filter(N => d.indexOf(N.presence_ref) < 0);
                y.length > 0 && (l[u] = y), v.length > 0 && (c[u] = v)
            } else l[u] = h
        }), this.syncDiff(o, {
            joins: l,
            leaves: c
        }, n, s)
    }
    static syncDiff(e, r, n, s) {
        const {
            joins: o,
            leaves: a
        } = {
            joins: this.transformState(r.joins),
            leaves: this.transformState(r.leaves)
        };
        return n || (n = () => {}), s || (s = () => {}), this.map(o, (l, c) => {
            var u;
            const h = (u = e[l]) !== null && u !== void 0 ? u : [];
            if (e[l] = this.cloneDeep(c), h.length > 0) {
                const f = e[l].map(p => p.presence_ref),
                    d = h.filter(p => f.indexOf(p.presence_ref) < 0);
                e[l].unshift(...d)
            }
            n(l, h, c)
        }), this.map(a, (l, c) => {
            let u = e[l];
            if (!u) return;
            const h = c.map(f => f.presence_ref);
            u = u.filter(f => h.indexOf(f.presence_ref) < 0), e[l] = u, s(l, u, c), u.length === 0 && delete e[l]
        }), e
    }
    static map(e, r) {
        return Object.getOwnPropertyNames(e).map(n => r(n, e[n]))
    }
    static transformState(e) {
        return e = this.cloneDeep(e), Object.getOwnPropertyNames(e).reduce((r, n) => {
            const s = e[n];
            return "metas" in s ? r[n] = s.metas.map(o => (o.presence_ref = o.phx_ref, delete o.phx_ref, delete o.phx_ref_prev, o)) : r[n] = s, r
        }, {})
    }
    static cloneDeep(e) {
        return JSON.parse(JSON.stringify(e))
    }
    onJoin(e) {
        this.caller.onJoin = e
    }
    onLeave(e) {
        this.caller.onLeave = e
    }
    onSync(e) {
        this.caller.onSync = e
    }
    inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef()
    }
}
var Tc;
(function(t) {
    t.ALL = "*", t.INSERT = "INSERT", t.UPDATE = "UPDATE", t.DELETE = "DELETE"
})(Tc || (Tc = {}));
var vn;
(function(t) {
    t.BROADCAST = "broadcast", t.PRESENCE = "presence", t.POSTGRES_CHANGES = "postgres_changes", t.SYSTEM = "system"
})(vn || (vn = {}));
var rt;
(function(t) {
    t.SUBSCRIBED = "SUBSCRIBED", t.TIMED_OUT = "TIMED_OUT", t.CLOSED = "CLOSED", t.CHANNEL_ERROR = "CHANNEL_ERROR"
})(rt || (rt = {}));
class il {
    constructor(e, r = {
        config: {}
    }, n) {
        this.topic = e, this.params = r, this.socket = n, this.bindings = {}, this.state = X.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
            broadcast: {
                ack: !1,
                self: !1
            },
            presence: {
                key: "",
                enabled: !1
            },
            private: !1
        }, r.config), this.timeout = this.socket.timeout, this.joinPush = new Yi(this, We.join, this.params, this.timeout), this.rejoinTimer = new mh(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
            this.state = X.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach(s => s.send()), this.pushBuffer = []
        }), this._onClose(() => {
            this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = X.closed, this.socket._remove(this)
        }), this._onError(s => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, s), this.state = X.errored, this.rejoinTimer.scheduleTimeout())
        }), this.joinPush.receive("timeout", () => {
            this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = X.errored, this.rejoinTimer.scheduleTimeout())
        }), this.joinPush.receive("error", s => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, s), this.state = X.errored, this.rejoinTimer.scheduleTimeout())
        }), this._on(We.reply, {}, (s, o) => {
            this._trigger(this._replyEventName(o), s)
        }), this.presence = new yn(this), this.broadcastEndpointURL = gh(this.socket.endPoint), this.private = this.params.config.private || !1
    }
    subscribe(e, r = this.timeout) {
        var n, s, o;
        if (this.socket.isConnected() || this.socket.connect(), this.state == X.closed) {
            const {
                config: {
                    broadcast: a,
                    presence: l,
                    private: c
                }
            } = this.params, u = (s = (n = this.bindings.postgres_changes) === null || n === void 0 ? void 0 : n.map(p => p.filter)) !== null && s !== void 0 ? s : [], h = !!this.bindings[vn.PRESENCE] && this.bindings[vn.PRESENCE].length > 0 || ((o = this.params.config.presence) === null || o === void 0 ? void 0 : o.enabled) === !0, f = {}, d = {
                broadcast: a,
                presence: Object.assign(Object.assign({}, l), {
                    enabled: h
                }),
                postgres_changes: u,
                private: c
            };
            this.socket.accessTokenValue && (f.access_token = this.socket.accessTokenValue), this._onError(p => e == null ? void 0 : e(rt.CHANNEL_ERROR, p)), this._onClose(() => e == null ? void 0 : e(rt.CLOSED)), this.updateJoinPayload(Object.assign({
                config: d
            }, f)), this.joinedOnce = !0, this._rejoin(r), this.joinPush.receive("ok", async ({
                postgres_changes: p
            }) => {
                var y;
                if (this.socket.setAuth(), p === void 0) {
                    e == null || e(rt.SUBSCRIBED);
                    return
                } else {
                    const v = this.bindings.postgres_changes,
                        N = (y = v == null ? void 0 : v.length) !== null && y !== void 0 ? y : 0,
                        x = [];
                    for (let m = 0; m < N; m++) {
                        const g = v[m],
                            {
                                filter: {
                                    event: w,
                                    schema: k,
                                    table: j,
                                    filter: _
                                }
                            } = g,
                            F = p && p[m];
                        if (F && F.event === w && F.schema === k && F.table === j && F.filter === _) x.push(Object.assign(Object.assign({}, g), {
                            id: F.id
                        }));
                        else {
                            this.unsubscribe(), this.state = X.errored, e == null || e(rt.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                            return
                        }
                    }
                    this.bindings.postgres_changes = x, e && e(rt.SUBSCRIBED);
                    return
                }
            }).receive("error", p => {
                this.state = X.errored, e == null || e(rt.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(p).join(", ") || "error")))
            }).receive("timeout", () => {
                e == null || e(rt.TIMED_OUT)
            })
        }
        return this
    }
    presenceState() {
        return this.presence.state
    }
    async track(e, r = {}) {
        return await this.send({
            type: "presence",
            event: "track",
            payload: e
        }, r.timeout || this.timeout)
    }
    async untrack(e = {}) {
        return await this.send({
            type: "presence",
            event: "untrack"
        }, e)
    }
    on(e, r, n) {
        return this.state === X.joined && e === vn.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`), this.unsubscribe().then(() => this.subscribe())), this._on(e, r, n)
    }
    async send(e, r = {}) {
        var n, s;
        if (!this._canPush() && e.type === "broadcast") {
            const {
                event: o,
                payload: a
            } = e, c = {
                method: "POST",
                headers: {
                    Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
                    apikey: this.socket.apiKey ? this.socket.apiKey : "",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [{
                        topic: this.subTopic,
                        event: o,
                        payload: a,
                        private: this.private
                    }]
                })
            };
            try {
                const u = await this._fetchWithTimeout(this.broadcastEndpointURL, c, (n = r.timeout) !== null && n !== void 0 ? n : this.timeout);
                return await ((s = u.body) === null || s === void 0 ? void 0 : s.cancel()), u.ok ? "ok" : "error"
            } catch (u) {
                return u.name === "AbortError" ? "timed out" : "error"
            }
        } else return new Promise(o => {
            var a, l, c;
            const u = this._push(e.type, e, r.timeout || this.timeout);
            e.type === "broadcast" && !(!((c = (l = (a = this.params) === null || a === void 0 ? void 0 : a.config) === null || l === void 0 ? void 0 : l.broadcast) === null || c === void 0) && c.ack) && o("ok"), u.receive("ok", () => o("ok")), u.receive("error", () => o("error")), u.receive("timeout", () => o("timed out"))
        })
    }
    updateJoinPayload(e) {
        this.joinPush.updatePayload(e)
    }
    unsubscribe(e = this.timeout) {
        this.state = X.leaving;
        const r = () => {
            this.socket.log("channel", `leave ${this.topic}`), this._trigger(We.close, "leave", this._joinRef())
        };
        this.joinPush.destroy();
        let n = null;
        return new Promise(s => {
            n = new Yi(this, We.leave, {}, e), n.receive("ok", () => {
                r(), s("ok")
            }).receive("timeout", () => {
                r(), s("timed out")
            }).receive("error", () => {
                s("error")
            }), n.send(), this._canPush() || n.trigger("ok", {})
        }).finally(() => {
            n == null || n.destroy()
        })
    }
    teardown() {
        this.pushBuffer.forEach(e => e.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = X.closed, this.bindings = {}
    }
    async _fetchWithTimeout(e, r, n) {
        const s = new AbortController,
            o = setTimeout(() => s.abort(), n),
            a = await this.socket.fetch(e, Object.assign(Object.assign({}, r), {
                signal: s.signal
            }));
        return clearTimeout(o), a
    }
    _push(e, r, n = this.timeout) {
        if (!this.joinedOnce) throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let s = new Yi(this, e, r, n);
        return this._canPush() ? s.send() : this._addToPushBuffer(s), s
    }
    _addToPushBuffer(e) {
        if (e.startTimeout(), this.pushBuffer.push(e), this.pushBuffer.length > Vp) {
            const r = this.pushBuffer.shift();
            r && (r.destroy(), this.socket.log("channel", `discarded push due to buffer overflow: ${r.event}`, r.payload))
        }
    }
    _onMessage(e, r, n) {
        return r
    }
    _isMember(e) {
        return this.topic === e
    }
    _joinRef() {
        return this.joinPush.ref
    }
    _trigger(e, r, n) {
        var s, o;
        const a = e.toLocaleLowerCase(),
            {
                close: l,
                error: c,
                leave: u,
                join: h
            } = We;
        if (n && [l, c, u, h].indexOf(a) >= 0 && n !== this._joinRef()) return;
        let d = this._onMessage(a, r, n);
        if (r && !d) throw "channel onMessage callbacks must return the payload, modified or unmodified";
        ["insert", "update", "delete"].includes(a) ? (s = this.bindings.postgres_changes) === null || s === void 0 || s.filter(p => {
            var y, v, N;
            return ((y = p.filter) === null || y === void 0 ? void 0 : y.event) === "*" || ((N = (v = p.filter) === null || v === void 0 ? void 0 : v.event) === null || N === void 0 ? void 0 : N.toLocaleLowerCase()) === a
        }).map(p => p.callback(d, n)) : (o = this.bindings[a]) === null || o === void 0 || o.filter(p => {
            var y, v, N, x, m, g;
            if (["broadcast", "presence", "postgres_changes"].includes(a))
                if ("id" in p) {
                    const w = p.id,
                        k = (y = p.filter) === null || y === void 0 ? void 0 : y.event;
                    return w && ((v = r.ids) === null || v === void 0 ? void 0 : v.includes(w)) && (k === "*" || (k == null ? void 0 : k.toLocaleLowerCase()) === ((N = r.data) === null || N === void 0 ? void 0 : N.type.toLocaleLowerCase()))
                } else {
                    const w = (m = (x = p == null ? void 0 : p.filter) === null || x === void 0 ? void 0 : x.event) === null || m === void 0 ? void 0 : m.toLocaleLowerCase();
                    return w === "*" || w === ((g = r == null ? void 0 : r.event) === null || g === void 0 ? void 0 : g.toLocaleLowerCase())
                }
            else return p.type.toLocaleLowerCase() === a
        }).map(p => {
            if (typeof d == "object" && "ids" in d) {
                const y = d.data,
                    {
                        schema: v,
                        table: N,
                        commit_timestamp: x,
                        type: m,
                        errors: g
                    } = y;
                d = Object.assign(Object.assign({}, {
                    schema: v,
                    table: N,
                    commit_timestamp: x,
                    eventType: m,
                    new: {},
                    old: {},
                    errors: g
                }), this._getPayloadRecords(y))
            }
            p.callback(d, n)
        })
    }
    _isClosed() {
        return this.state === X.closed
    }
    _isJoined() {
        return this.state === X.joined
    }
    _isJoining() {
        return this.state === X.joining
    }
    _isLeaving() {
        return this.state === X.leaving
    }
    _replyEventName(e) {
        return `chan_reply_${e}`
    }
    _on(e, r, n) {
        const s = e.toLocaleLowerCase(),
            o = {
                type: s,
                filter: r,
                callback: n
            };
        return this.bindings[s] ? this.bindings[s].push(o) : this.bindings[s] = [o], this
    }
    _off(e, r) {
        const n = e.toLocaleLowerCase();
        return this.bindings[n] && (this.bindings[n] = this.bindings[n].filter(s => {
            var o;
            return !(((o = s.type) === null || o === void 0 ? void 0 : o.toLocaleLowerCase()) === n && il.isEqual(s.filter, r))
        })), this
    }
    static isEqual(e, r) {
        if (Object.keys(e).length !== Object.keys(r).length) return !1;
        for (const n in e)
            if (e[n] !== r[n]) return !1;
        return !0
    }
    _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin()
    }
    _onClose(e) {
        this._on(We.close, {}, e)
    }
    _onError(e) {
        this._on(We.error, {}, r => e(r))
    }
    _canPush() {
        return this.socket.isConnected() && this._isJoined()
    }
    _rejoin(e = this.timeout) {
        this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = X.joining, this.joinPush.resend(e))
    }
    _getPayloadRecords(e) {
        const r = {
            new: {},
            old: {}
        };
        return (e.type === "INSERT" || e.type === "UPDATE") && (r.new = Cc(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (r.old = Cc(e.columns, e.old_record)), r
    }
}
const Xi = () => {},
    ds = {
        HEARTBEAT_INTERVAL: 25e3,
        RECONNECT_DELAY: 10,
        HEARTBEAT_TIMEOUT_FALLBACK: 100
    },
    Zp = [1e3, 2e3, 5e3, 1e4],
    e0 = 1e4,
    t0 = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class r0 {
    constructor(e, r) {
        var n;
        if (this.accessTokenValue = null, this.apiKey = null, this.channels = new Array, this.endPoint = "", this.httpEndpoint = "", this.headers = {}, this.params = {}, this.timeout = Zo, this.transport = null, this.heartbeatIntervalMs = ds.HEARTBEAT_INTERVAL, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = Xi, this.ref = 0, this.reconnectTimer = null, this.logger = Xi, this.conn = null, this.sendBuffer = [], this.serializer = new qp, this.stateChangeCallbacks = {
                open: [],
                close: [],
                error: [],
                message: []
            }, this.accessToken = null, this._connectionState = "disconnected", this._wasManualDisconnect = !1, this._authPromise = null, this._resolveFetch = s => {
                let o;
                return s ? o = s : typeof fetch > "u" ? o = (...a) => Wn(async () => {
                    const {
                        default: l
                    } = await Promise.resolve().then(() => Wr);
                    return {
                        default: l
                    }
                }, void 0).then(({
                    default: l
                }) => l(...a)).catch(l => {
                    throw new Error(`Failed to load @supabase/node-fetch: ${l.message}. This is required for HTTP requests in Node.js environments without native fetch.`)
                }) : o = fetch, (...a) => o(...a)
            }, !(!((n = r == null ? void 0 : r.params) === null || n === void 0) && n.apikey)) throw new Error("API key is required to connect to Realtime");
        this.apiKey = r.params.apikey, this.endPoint = `${e}/${ea.websocket}`, this.httpEndpoint = gh(e), this._initializeOptions(r), this._setupReconnectionTimer(), this.fetch = this._resolveFetch(r == null ? void 0 : r.fetch)
    }
    connect() {
        if (!(this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected())) {
            if (this._setConnectionState("connecting"), this._setAuthSafely("connect"), this.transport) this.conn = new this.transport(this.endpointURL());
            else try {
                this.conn = Up.createWebSocket(this.endpointURL())
            } catch (e) {
                this._setConnectionState("disconnected");
                const r = e.message;
                throw r.includes("Node.js") ? new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${r}`)
            }
            this._setupConnectionHandlers()
        }
    }
    endpointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: Wp
        }))
    }
    disconnect(e, r) {
        if (!this.isDisconnecting())
            if (this._setConnectionState("disconnecting", !0), this.conn) {
                const n = setTimeout(() => {
                    this._setConnectionState("disconnected")
                }, 100);
                this.conn.onclose = () => {
                    clearTimeout(n), this._setConnectionState("disconnected")
                }, e ? this.conn.close(e, r ?? "") : this.conn.close(), this._teardownConnection()
            } else this._setConnectionState("disconnected")
    }
    getChannels() {
        return this.channels
    }
    async removeChannel(e) {
        const r = await e.unsubscribe();
        return this.channels.length === 0 && this.disconnect(), r
    }
    async removeAllChannels() {
        const e = await Promise.all(this.channels.map(r => r.unsubscribe()));
        return this.channels = [], this.disconnect(), e
    }
    log(e, r, n) {
        this.logger(e, r, n)
    }
    connectionState() {
        switch (this.conn && this.conn.readyState) {
            case xn.connecting:
                return Ht.Connecting;
            case xn.open:
                return Ht.Open;
            case xn.closing:
                return Ht.Closing;
            default:
                return Ht.Closed
        }
    }
    isConnected() {
        return this.connectionState() === Ht.Open
    }
    isConnecting() {
        return this._connectionState === "connecting"
    }
    isDisconnecting() {
        return this._connectionState === "disconnecting"
    }
    channel(e, r = {
        config: {}
    }) {
        const n = `realtime:${e}`,
            s = this.getChannels().find(o => o.topic === n);
        if (s) return s;
        {
            const o = new il(`realtime:${e}`, r, this);
            return this.channels.push(o), o
        }
    }
    push(e) {
        const {
            topic: r,
            event: n,
            payload: s,
            ref: o
        } = e, a = () => {
            this.encode(e, l => {
                var c;
                (c = this.conn) === null || c === void 0 || c.send(l)
            })
        };
        this.log("push", `${r} ${n} (${o})`, s), this.isConnected() ? a() : this.sendBuffer.push(a)
    }
    async setAuth(e = null) {
        this._authPromise = this._performAuth(e);
        try {
            await this._authPromise
        } finally {
            this._authPromise = null
        }
    }
    async sendHeartbeat() {
        var e;
        if (!this.isConnected()) {
            try {
                this.heartbeatCallback("disconnected")
            } catch (r) {
                this.log("error", "error in heartbeat callback", r)
            }
            return
        }
        if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
            try {
                this.heartbeatCallback("timeout")
            } catch (r) {
                this.log("error", "error in heartbeat callback", r)
            }
            this._wasManualDisconnect = !1, (e = this.conn) === null || e === void 0 || e.close(Hp, "heartbeat timeout"), setTimeout(() => {
                var r;
                this.isConnected() || (r = this.reconnectTimer) === null || r === void 0 || r.scheduleTimeout()
            }, ds.HEARTBEAT_TIMEOUT_FALLBACK);
            return
        }
        this.pendingHeartbeatRef = this._makeRef(), this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef
        });
        try {
            this.heartbeatCallback("sent")
        } catch (r) {
            this.log("error", "error in heartbeat callback", r)
        }
        this._setAuthSafely("heartbeat")
    }
    onHeartbeat(e) {
        this.heartbeatCallback = e
    }
    flushSendBuffer() {
        this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(e => e()), this.sendBuffer = [])
    }
    _makeRef() {
        let e = this.ref + 1;
        return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString()
    }
    _leaveOpenTopic(e) {
        let r = this.channels.find(n => n.topic === e && (n._isJoined() || n._isJoining()));
        r && (this.log("transport", `leaving duplicate topic "${e}"`), r.unsubscribe())
    }
    _remove(e) {
        this.channels = this.channels.filter(r => r.topic !== e.topic)
    }
    _onConnMessage(e) {
        this.decode(e.data, r => {
            if (r.topic === "phoenix" && r.event === "phx_reply") try {
                this.heartbeatCallback(r.payload.status === "ok" ? "ok" : "error")
            } catch (u) {
                this.log("error", "error in heartbeat callback", u)
            }
            r.ref && r.ref === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null);
            const {
                topic: n,
                event: s,
                payload: o,
                ref: a
            } = r, l = a ? `(${a})` : "", c = o.status || "";
            this.log("receive", `${c} ${n} ${s} ${l}`.trim(), o), this.channels.filter(u => u._isMember(n)).forEach(u => u._trigger(s, o, a)), this._triggerStateCallbacks("message", r)
        })
    }
    _clearTimer(e) {
        var r;
        e === "heartbeat" && this.heartbeatTimer ? (clearInterval(this.heartbeatTimer), this.heartbeatTimer = void 0) : e === "reconnect" && ((r = this.reconnectTimer) === null || r === void 0 || r.reset())
    }
    _clearAllTimers() {
        this._clearTimer("heartbeat"), this._clearTimer("reconnect")
    }
    _setupConnectionHandlers() {
        this.conn && ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"), this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = e => this._onConnError(e), this.conn.onmessage = e => this._onConnMessage(e), this.conn.onclose = e => this._onConnClose(e))
    }
    _teardownConnection() {
        this.conn && (this.conn.onopen = null, this.conn.onerror = null, this.conn.onmessage = null, this.conn.onclose = null, this.conn = null), this._clearAllTimers(), this.channels.forEach(e => e.teardown())
    }
    _onConnOpen() {
        this._setConnectionState("connected"), this.log("transport", `connected to ${this.endpointURL()}`), this.flushSendBuffer(), this._clearTimer("reconnect"), this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(), this._triggerStateCallbacks("open")
    }
    _startHeartbeat() {
        this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs)
    }
    _startWorkerHeartbeat() {
        this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
        const e = this._workerObjectUrl(this.workerUrl);
        this.workerRef = new Worker(e), this.workerRef.onerror = r => {
            this.log("worker", "worker error", r.message), this.workerRef.terminate()
        }, this.workerRef.onmessage = r => {
            r.data.event === "keepAlive" && this.sendHeartbeat()
        }, this.workerRef.postMessage({
            event: "start",
            interval: this.heartbeatIntervalMs
        })
    }
    _onConnClose(e) {
        var r;
        this._setConnectionState("disconnected"), this.log("transport", "close", e), this._triggerChanError(), this._clearTimer("heartbeat"), this._wasManualDisconnect || (r = this.reconnectTimer) === null || r === void 0 || r.scheduleTimeout(), this._triggerStateCallbacks("close", e)
    }
    _onConnError(e) {
        this._setConnectionState("disconnected"), this.log("transport", `${e}`), this._triggerChanError(), this._triggerStateCallbacks("error", e)
    }
    _triggerChanError() {
        this.channels.forEach(e => e._trigger(We.error))
    }
    _appendParams(e, r) {
        if (Object.keys(r).length === 0) return e;
        const n = e.match(/\?/) ? "&" : "?",
            s = new URLSearchParams(r);
        return `${e}${n}${s}`
    }
    _workerObjectUrl(e) {
        let r;
        if (e) r = e;
        else {
            const n = new Blob([t0], {
                type: "application/javascript"
            });
            r = URL.createObjectURL(n)
        }
        return r
    }
    _setConnectionState(e, r = !1) {
        this._connectionState = e, e === "connecting" ? this._wasManualDisconnect = !1 : e === "disconnecting" && (this._wasManualDisconnect = r)
    }
    async _performAuth(e = null) {
        let r;
        e ? r = e : this.accessToken ? r = await this.accessToken() : r = this.accessTokenValue, this.accessTokenValue != r && (this.accessTokenValue = r, this.channels.forEach(n => {
            const s = {
                access_token: r,
                version: Bp
            };
            r && n.updateJoinPayload(s), n.joinedOnce && n._isJoined() && n._push(We.access_token, {
                access_token: r
            })
        }))
    }
    async _waitForAuthIfNeeded() {
        this._authPromise && await this._authPromise
    }
    _setAuthSafely(e = "general") {
        this.setAuth().catch(r => {
            this.log("error", `error setting auth in ${e}`, r)
        })
    }
    _triggerStateCallbacks(e, r) {
        try {
            this.stateChangeCallbacks[e].forEach(n => {
                try {
                    n(r)
                } catch (s) {
                    this.log("error", `error in ${e} callback`, s)
                }
            })
        } catch (n) {
            this.log("error", `error triggering ${e} callbacks`, n)
        }
    }
    _setupReconnectionTimer() {
        this.reconnectTimer = new mh(async () => {
            setTimeout(async () => {
                await this._waitForAuthIfNeeded(), this.isConnected() || this.connect()
            }, ds.RECONNECT_DELAY)
        }, this.reconnectAfterMs)
    }
    _initializeOptions(e) {
        var r, n, s, o, a, l, c, u, h;
        if (this.transport = (r = e == null ? void 0 : e.transport) !== null && r !== void 0 ? r : null, this.timeout = (n = e == null ? void 0 : e.timeout) !== null && n !== void 0 ? n : Zo, this.heartbeatIntervalMs = (s = e == null ? void 0 : e.heartbeatIntervalMs) !== null && s !== void 0 ? s : ds.HEARTBEAT_INTERVAL, this.worker = (o = e == null ? void 0 : e.worker) !== null && o !== void 0 ? o : !1, this.accessToken = (a = e == null ? void 0 : e.accessToken) !== null && a !== void 0 ? a : null, this.heartbeatCallback = (l = e == null ? void 0 : e.heartbeatCallback) !== null && l !== void 0 ? l : Xi, e != null && e.params && (this.params = e.params), e != null && e.logger && (this.logger = e.logger), (e != null && e.logLevel || e != null && e.log_level) && (this.logLevel = e.logLevel || e.log_level, this.params = Object.assign(Object.assign({}, this.params), {
                log_level: this.logLevel
            })), this.reconnectAfterMs = (c = e == null ? void 0 : e.reconnectAfterMs) !== null && c !== void 0 ? c : f => Zp[f - 1] || e0, this.encode = (u = e == null ? void 0 : e.encode) !== null && u !== void 0 ? u : (f, d) => d(JSON.stringify(f)), this.decode = (h = e == null ? void 0 : e.decode) !== null && h !== void 0 ? h : this.serializer.decode.bind(this.serializer), this.worker) {
            if (typeof window < "u" && !window.Worker) throw new Error("Web Worker is not supported");
            this.workerUrl = e == null ? void 0 : e.workerUrl
        }
    }
}
class ol extends Error {
    constructor(e) {
        super(e), this.__isStorageError = !0, this.name = "StorageError"
    }
}

function Z(t) {
    return typeof t == "object" && t !== null && "__isStorageError" in t
}
class n0 extends ol {
    constructor(e, r, n) {
        super(e), this.name = "StorageApiError", this.status = r, this.statusCode = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            statusCode: this.statusCode
        }
    }
}
class ra extends ol {
    constructor(e, r) {
        super(e), this.name = "StorageUnknownError", this.originalError = r
    }
}
var s0 = function(t, e, r, n) {
    function s(o) {
        return o instanceof r ? o : new r(function(a) {
            a(o)
        })
    }
    return new(r || (r = Promise))(function(o, a) {
        function l(h) {
            try {
                u(n.next(h))
            } catch (f) {
                a(f)
            }
        }

        function c(h) {
            try {
                u(n.throw(h))
            } catch (f) {
                a(f)
            }
        }

        function u(h) {
            h.done ? o(h.value) : s(h.value).then(l, c)
        }
        u((n = n.apply(t, e || [])).next())
    })
};
const xh = t => {
        let e;
        return t ? e = t : typeof fetch > "u" ? e = (...r) => Wn(async () => {
            const {
                default: n
            } = await Promise.resolve().then(() => Wr);
            return {
                default: n
            }
        }, void 0).then(({
            default: n
        }) => n(...r)) : e = fetch, (...r) => e(...r)
    },
    i0 = () => s0(void 0, void 0, void 0, function*() {
        return typeof Response > "u" ? (yield Wn(() => Promise.resolve().then(() => Wr), void 0)).Response : Response
    }),
    na = t => {
        if (Array.isArray(t)) return t.map(r => na(r));
        if (typeof t == "function" || t !== Object(t)) return t;
        const e = {};
        return Object.entries(t).forEach(([r, n]) => {
            const s = r.replace(/([-_][a-z])/gi, o => o.toUpperCase().replace(/[-_]/g, ""));
            e[s] = na(n)
        }), e
    },
    o0 = t => {
        if (typeof t != "object" || t === null) return !1;
        const e = Object.getPrototypeOf(t);
        return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t)
    };
var nr = function(t, e, r, n) {
    function s(o) {
        return o instanceof r ? o : new r(function(a) {
            a(o)
        })
    }
    return new(r || (r = Promise))(function(o, a) {
        function l(h) {
            try {
                u(n.next(h))
            } catch (f) {
                a(f)
            }
        }

        function c(h) {
            try {
                u(n.throw(h))
            } catch (f) {
                a(f)
            }
        }

        function u(h) {
            h.done ? o(h.value) : s(h.value).then(l, c)
        }
        u((n = n.apply(t, e || [])).next())
    })
};
const Zi = t => t.msg || t.message || t.error_description || t.error || JSON.stringify(t),
    a0 = (t, e, r) => nr(void 0, void 0, void 0, function*() {
        const n = yield i0();
        t instanceof n && !(r != null && r.noResolveJson) ? t.json().then(s => {
            const o = t.status || 500,
                a = (s == null ? void 0 : s.statusCode) || o + "";
            e(new n0(Zi(s), o, a))
        }).catch(s => {
            e(new ra(Zi(s), s))
        }) : e(new ra(Zi(t), t))
    }),
    l0 = (t, e, r, n) => {
        const s = {
            method: t,
            headers: (e == null ? void 0 : e.headers) || {}
        };
        return t === "GET" || !n ? s : (o0(n) ? (s.headers = Object.assign({
            "Content-Type": "application/json"
        }, e == null ? void 0 : e.headers), s.body = JSON.stringify(n)) : s.body = n, e != null && e.duplex && (s.duplex = e.duplex), Object.assign(Object.assign({}, s), r))
    };

function Vn(t, e, r, n, s, o) {
    return nr(this, void 0, void 0, function*() {
        return new Promise((a, l) => {
            t(r, l0(e, n, s, o)).then(c => {
                if (!c.ok) throw c;
                return n != null && n.noResolveJson ? c : c.json()
            }).then(c => a(c)).catch(c => a0(c, l, n))
        })
    })
}

function Ys(t, e, r, n) {
    return nr(this, void 0, void 0, function*() {
        return Vn(t, "GET", e, r, n)
    })
}

function Qe(t, e, r, n, s) {
    return nr(this, void 0, void 0, function*() {
        return Vn(t, "POST", e, n, s, r)
    })
}

function sa(t, e, r, n, s) {
    return nr(this, void 0, void 0, function*() {
        return Vn(t, "PUT", e, n, s, r)
    })
}

function c0(t, e, r, n) {
    return nr(this, void 0, void 0, function*() {
        return Vn(t, "HEAD", e, Object.assign(Object.assign({}, r), {
            noResolveJson: !0
        }), n)
    })
}

function yh(t, e, r, n, s) {
    return nr(this, void 0, void 0, function*() {
        return Vn(t, "DELETE", e, n, s, r)
    })
}
var he = function(t, e, r, n) {
    function s(o) {
        return o instanceof r ? o : new r(function(a) {
            a(o)
        })
    }
    return new(r || (r = Promise))(function(o, a) {
        function l(h) {
            try {
                u(n.next(h))
            } catch (f) {
                a(f)
            }
        }

        function c(h) {
            try {
                u(n.throw(h))
            } catch (f) {
                a(f)
            }
        }

        function u(h) {
            h.done ? o(h.value) : s(h.value).then(l, c)
        }
        u((n = n.apply(t, e || [])).next())
    })
};
const u0 = {
        limit: 100,
        offset: 0,
        sortBy: {
            column: "name",
            order: "asc"
        }
    },
    Pc = {
        cacheControl: "3600",
        contentType: "text/plain;charset=UTF-8",
        upsert: !1
    };
class d0 {
    constructor(e, r = {}, n, s) {
        this.shouldThrowOnError = !1, this.url = e, this.headers = r, this.bucketId = n, this.fetch = xh(s)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0, this
    }
    uploadOrUpdate(e, r, n, s) {
        return he(this, void 0, void 0, function*() {
            try {
                let o;
                const a = Object.assign(Object.assign({}, Pc), s);
                let l = Object.assign(Object.assign({}, this.headers), e === "POST" && {
                    "x-upsert": String(a.upsert)
                });
                const c = a.metadata;
                typeof Blob < "u" && n instanceof Blob ? (o = new FormData, o.append("cacheControl", a.cacheControl), c && o.append("metadata", this.encodeMetadata(c)), o.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (o = n, o.append("cacheControl", a.cacheControl), c && o.append("metadata", this.encodeMetadata(c))) : (o = n, l["cache-control"] = `max-age=${a.cacheControl}`, l["content-type"] = a.contentType, c && (l["x-metadata"] = this.toBase64(this.encodeMetadata(c)))), s != null && s.headers && (l = Object.assign(Object.assign({}, l), s.headers));
                const u = this._removeEmptyFolders(r),
                    h = this._getFinalPath(u),
                    f = yield(e == "PUT" ? sa : Qe)(this.fetch, `${this.url}/object/${h}`, o, Object.assign({
                        headers: l
                    }, a != null && a.duplex ? {
                        duplex: a.duplex
                    } : {}));
                return {
                    data: {
                        path: u,
                        id: f.Id,
                        fullPath: f.Key
                    },
                    error: null
                }
            } catch (o) {
                if (this.shouldThrowOnError) throw o;
                if (Z(o)) return {
                    data: null,
                    error: o
                };
                throw o
            }
        })
    }
    upload(e, r, n) {
        return he(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("POST", e, r, n)
        })
    }
    uploadToSignedUrl(e, r, n, s) {
        return he(this, void 0, void 0, function*() {
            const o = this._removeEmptyFolders(e),
                a = this._getFinalPath(o),
                l = new URL(this.url + `/object/upload/sign/${a}`);
            l.searchParams.set("token", r);
            try {
                let c;
                const u = Object.assign({
                        upsert: Pc.upsert
                    }, s),
                    h = Object.assign(Object.assign({}, this.headers), {
                        "x-upsert": String(u.upsert)
                    });
                typeof Blob < "u" && n instanceof Blob ? (c = new FormData, c.append("cacheControl", u.cacheControl), c.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (c = n, c.append("cacheControl", u.cacheControl)) : (c = n, h["cache-control"] = `max-age=${u.cacheControl}`, h["content-type"] = u.contentType);
                const f = yield sa(this.fetch, l.toString(), c, {
                    headers: h
                });
                return {
                    data: {
                        path: o,
                        fullPath: f.Key
                    },
                    error: null
                }
            } catch (c) {
                if (this.shouldThrowOnError) throw c;
                if (Z(c)) return {
                    data: null,
                    error: c
                };
                throw c
            }
        })
    }
    createSignedUploadUrl(e, r) {
        return he(this, void 0, void 0, function*() {
            try {
                let n = this._getFinalPath(e);
                const s = Object.assign({}, this.headers);
                r != null && r.upsert && (s["x-upsert"] = "true");
                const o = yield Qe(this.fetch, `${this.url}/object/upload/sign/${n}`, {}, {
                    headers: s
                }), a = new URL(this.url + o.url), l = a.searchParams.get("token");
                if (!l) throw new ol("No token returned by API");
                return {
                    data: {
                        signedUrl: a.toString(),
                        path: e,
                        token: l
                    },
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError) throw n;
                if (Z(n)) return {
                    data: null,
                    error: n
                };
                throw n
            }
        })
    }
    update(e, r, n) {
        return he(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("PUT", e, r, n)
        })
    }
    move(e, r, n) {
        return he(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Qe(this.fetch, `${this.url}/object/move`, {
                        bucketId: this.bucketId,
                        sourceKey: e,
                        destinationKey: r,
                        destinationBucket: n == null ? void 0 : n.destinationBucket
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError) throw s;
                if (Z(s)) return {
                    data: null,
                    error: s
                };
                throw s
            }
        })
    }
    copy(e, r, n) {
        return he(this, void 0, void 0, function*() {
            try {
                return {
                    data: {
                        path: (yield Qe(this.fetch, `${this.url}/object/copy`, {
                            bucketId: this.bucketId,
                            sourceKey: e,
                            destinationKey: r,
                            destinationBucket: n == null ? void 0 : n.destinationBucket
                        }, {
                            headers: this.headers
                        })).Key
                    },
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError) throw s;
                if (Z(s)) return {
                    data: null,
                    error: s
                };
                throw s
            }
        })
    }
    createSignedUrl(e, r, n) {
        return he(this, void 0, void 0, function*() {
            try {
                let s = this._getFinalPath(e),
                    o = yield Qe(this.fetch, `${this.url}/object/sign/${s}`, Object.assign({
                        expiresIn: r
                    }, n != null && n.transform ? {
                        transform: n.transform
                    } : {}), {
                        headers: this.headers
                    });
                const a = n != null && n.download ? `&download=${n.download===!0?"":n.download}` : "";
                return o = {
                    signedUrl: encodeURI(`${this.url}${o.signedURL}${a}`)
                }, {
                    data: o,
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError) throw s;
                if (Z(s)) return {
                    data: null,
                    error: s
                };
                throw s
            }
        })
    }
    createSignedUrls(e, r, n) {
        return he(this, void 0, void 0, function*() {
            try {
                const s = yield Qe(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                    expiresIn: r,
                    paths: e
                }, {
                    headers: this.headers
                }), o = n != null && n.download ? `&download=${n.download===!0?"":n.download}` : "";
                return {
                    data: s.map(a => Object.assign(Object.assign({}, a), {
                        signedUrl: a.signedURL ? encodeURI(`${this.url}${a.signedURL}${o}`) : null
                    })),
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError) throw s;
                if (Z(s)) return {
                    data: null,
                    error: s
                };
                throw s
            }
        })
    }
    download(e, r) {
        return he(this, void 0, void 0, function*() {
            const s = typeof(r == null ? void 0 : r.transform) < "u" ? "render/image/authenticated" : "object",
                o = this.transformOptsToQueryString((r == null ? void 0 : r.transform) || {}),
                a = o ? `?${o}` : "";
            try {
                const l = this._getFinalPath(e);
                return {
                    data: yield(yield Ys(this.fetch, `${this.url}/${s}/${l}${a}`, {
                        headers: this.headers,
                        noResolveJson: !0
                    })).blob(),
                    error: null
                }
            } catch (l) {
                if (this.shouldThrowOnError) throw l;
                if (Z(l)) return {
                    data: null,
                    error: l
                };
                throw l
            }
        })
    }
    info(e) {
        return he(this, void 0, void 0, function*() {
            const r = this._getFinalPath(e);
            try {
                const n = yield Ys(this.fetch, `${this.url}/object/info/${r}`, {
                    headers: this.headers
                });
                return {
                    data: na(n),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError) throw n;
                if (Z(n)) return {
                    data: null,
                    error: n
                };
                throw n
            }
        })
    }
    exists(e) {
        return he(this, void 0, void 0, function*() {
            const r = this._getFinalPath(e);
            try {
                return yield c0(this.fetch, `${this.url}/object/${r}`, {
                    headers: this.headers
                }), {
                    data: !0,
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError) throw n;
                if (Z(n) && n instanceof ra) {
                    const s = n.originalError;
                    if ([400, 404].includes(s == null ? void 0 : s.status)) return {
                        data: !1,
                        error: n
                    }
                }
                throw n
            }
        })
    }
    getPublicUrl(e, r) {
        const n = this._getFinalPath(e),
            s = [],
            o = r != null && r.download ? `download=${r.download===!0?"":r.download}` : "";
        o !== "" && s.push(o);
        const l = typeof(r == null ? void 0 : r.transform) < "u" ? "render/image" : "object",
            c = this.transformOptsToQueryString((r == null ? void 0 : r.transform) || {});
        c !== "" && s.push(c);
        let u = s.join("&");
        return u !== "" && (u = `?${u}`), {
            data: {
                publicUrl: encodeURI(`${this.url}/${l}/public/${n}${u}`)
            }
        }
    }
    remove(e) {
        return he(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield yh(this.fetch, `${this.url}/object/${this.bucketId}`, {
                        prefixes: e
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError) throw r;
                if (Z(r)) return {
                    data: null,
                    error: r
                };
                throw r
            }
        })
    }
    list(e, r, n) {
        return he(this, void 0, void 0, function*() {
            try {
                const s = Object.assign(Object.assign(Object.assign({}, u0), r), {
                    prefix: e || ""
                });
                return {
                    data: yield Qe(this.fetch, `${this.url}/object/list/${this.bucketId}`, s, {
                        headers: this.headers
                    }, n),
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError) throw s;
                if (Z(s)) return {
                    data: null,
                    error: s
                };
                throw s
            }
        })
    }
    listV2(e, r) {
        return he(this, void 0, void 0, function*() {
            try {
                const n = Object.assign({}, e);
                return {
                    data: yield Qe(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, n, {
                        headers: this.headers
                    }, r),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError) throw n;
                if (Z(n)) return {
                    data: null,
                    error: n
                };
                throw n
            }
        })
    }
    encodeMetadata(e) {
        return JSON.stringify(e)
    }
    toBase64(e) {
        return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e)
    }
    _getFinalPath(e) {
        return `${this.bucketId}/${e.replace(/^\/+/,"")}`
    }
    _removeEmptyFolders(e) {
        return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
    }
    transformOptsToQueryString(e) {
        const r = [];
        return e.width && r.push(`width=${e.width}`), e.height && r.push(`height=${e.height}`), e.resize && r.push(`resize=${e.resize}`), e.format && r.push(`format=${e.format}`), e.quality && r.push(`quality=${e.quality}`), r.join("&")
    }
}
const h0 = "2.12.1",
    f0 = {
        "X-Client-Info": `storage-js/${h0}`
    };
var or = function(t, e, r, n) {
    function s(o) {
        return o instanceof r ? o : new r(function(a) {
            a(o)
        })
    }
    return new(r || (r = Promise))(function(o, a) {
        function l(h) {
            try {
                u(n.next(h))
            } catch (f) {
                a(f)
            }
        }

        function c(h) {
            try {
                u(n.throw(h))
            } catch (f) {
                a(f)
            }
        }

        function u(h) {
            h.done ? o(h.value) : s(h.value).then(l, c)
        }
        u((n = n.apply(t, e || [])).next())
    })
};
class m0 {
    constructor(e, r = {}, n, s) {
        this.shouldThrowOnError = !1;
        const o = new URL(e);
        s != null && s.useNewHostname && /supabase\.(co|in|red)$/.test(o.hostname) && !o.hostname.includes("storage.supabase.") && (o.hostname = o.hostname.replace("supabase.", "storage.supabase.")), this.url = o.href, this.headers = Object.assign(Object.assign({}, f0), r), this.fetch = xh(n)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0, this
    }
    listBuckets() {
        return or(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Ys(this.fetch, `${this.url}/bucket`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (e) {
                if (this.shouldThrowOnError) throw e;
                if (Z(e)) return {
                    data: null,
                    error: e
                };
                throw e
            }
        })
    }
    getBucket(e) {
        return or(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Ys(this.fetch, `${this.url}/bucket/${e}`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError) throw r;
                if (Z(r)) return {
                    data: null,
                    error: r
                };
                throw r
            }
        })
    }
    createBucket(e, r = {
        public: !1
    }) {
        return or(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Qe(this.fetch, `${this.url}/bucket`, {
                        id: e,
                        name: e,
                        type: r.type,
                        public: r.public,
                        file_size_limit: r.fileSizeLimit,
                        allowed_mime_types: r.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError) throw n;
                if (Z(n)) return {
                    data: null,
                    error: n
                };
                throw n
            }
        })
    }
    updateBucket(e, r) {
        return or(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield sa(this.fetch, `${this.url}/bucket/${e}`, {
                        id: e,
                        name: e,
                        public: r.public,
                        file_size_limit: r.fileSizeLimit,
                        allowed_mime_types: r.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError) throw n;
                if (Z(n)) return {
                    data: null,
                    error: n
                };
                throw n
            }
        })
    }
    emptyBucket(e) {
        return or(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Qe(this.fetch, `${this.url}/bucket/${e}/empty`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError) throw r;
                if (Z(r)) return {
                    data: null,
                    error: r
                };
                throw r
            }
        })
    }
    deleteBucket(e) {
        return or(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield yh(this.fetch, `${this.url}/bucket/${e}`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError) throw r;
                if (Z(r)) return {
                    data: null,
                    error: r
                };
                throw r
            }
        })
    }
}
class p0 extends m0 {
    constructor(e, r = {}, n, s) {
        super(e, r, n, s)
    }
    from(e) {
        return new d0(this.url, this.headers, e, this.fetch)
    }
}
const g0 = "2.57.4";
let an = "";
typeof Deno < "u" ? an = "deno" : typeof document < "u" ? an = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? an = "react-native" : an = "node";
const x0 = {
        "X-Client-Info": `supabase-js-${an}/${g0}`
    },
    y0 = {
        headers: x0
    },
    v0 = {
        schema: "public"
    },
    w0 = {
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        flowType: "implicit"
    },
    b0 = {};
var j0 = function(t, e, r, n) {
    function s(o) {
        return o instanceof r ? o : new r(function(a) {
            a(o)
        })
    }
    return new(r || (r = Promise))(function(o, a) {
        function l(h) {
            try {
                u(n.next(h))
            } catch (f) {
                a(f)
            }
        }

        function c(h) {
            try {
                u(n.throw(h))
            } catch (f) {
                a(f)
            }
        }

        function u(h) {
            h.done ? o(h.value) : s(h.value).then(l, c)
        }
        u((n = n.apply(t, e || [])).next())
    })
};
const N0 = t => {
        let e;
        return t ? e = t : typeof fetch > "u" ? e = nh : e = fetch, (...r) => e(...r)
    },
    k0 = () => typeof Headers > "u" ? sh : Headers,
    _0 = (t, e, r) => {
        const n = N0(r),
            s = k0();
        return (o, a) => j0(void 0, void 0, void 0, function*() {
            var l;
            const c = (l = yield e()) !== null && l !== void 0 ? l : t;
            let u = new s(a == null ? void 0 : a.headers);
            return u.has("apikey") || u.set("apikey", t), u.has("Authorization") || u.set("Authorization", `Bearer ${c}`), n(o, Object.assign(Object.assign({}, a), {
                headers: u
            }))
        })
    };
var S0 = function(t, e, r, n) {
    function s(o) {
        return o instanceof r ? o : new r(function(a) {
            a(o)
        })
    }
    return new(r || (r = Promise))(function(o, a) {
        function l(h) {
            try {
                u(n.next(h))
            } catch (f) {
                a(f)
            }
        }

        function c(h) {
            try {
                u(n.throw(h))
            } catch (f) {
                a(f)
            }
        }

        function u(h) {
            h.done ? o(h.value) : s(h.value).then(l, c)
        }
        u((n = n.apply(t, e || [])).next())
    })
};

function E0(t) {
    return t.endsWith("/") ? t : t + "/"
}

function C0(t, e) {
    var r, n;
    const {
        db: s,
        auth: o,
        realtime: a,
        global: l
    } = t, {
        db: c,
        auth: u,
        realtime: h,
        global: f
    } = e, d = {
        db: Object.assign(Object.assign({}, c), s),
        auth: Object.assign(Object.assign({}, u), o),
        realtime: Object.assign(Object.assign({}, h), a),
        storage: {},
        global: Object.assign(Object.assign(Object.assign({}, f), l), {
            headers: Object.assign(Object.assign({}, (r = f == null ? void 0 : f.headers) !== null && r !== void 0 ? r : {}), (n = l == null ? void 0 : l.headers) !== null && n !== void 0 ? n : {})
        }),
        accessToken: () => S0(this, void 0, void 0, function*() {
            return ""
        })
    };
    return t.accessToken ? d.accessToken = t.accessToken : delete d.accessToken, d
}

function F0(t) {
    const e = t == null ? void 0 : t.trim();
    if (!e) throw new Error("supabaseUrl is required.");
    if (!e.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
    try {
        return new URL(E0(e))
    } catch {
        throw Error("Invalid supabaseUrl: Provided URL is malformed.")
    }
}
const vh = "2.71.1",
    dr = 30 * 1e3,
    ia = 3,
    eo = ia * dr,
    T0 = "http://localhost:9999",
    P0 = "supabase.auth.token",
    O0 = {
        "X-Client-Info": `gotrue-js/${vh}`
    },
    oa = "X-Supabase-Api-Version",
    wh = {
        "2024-01-01": {
            timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
            name: "2024-01-01"
        }
    },
    A0 = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
    I0 = 10 * 60 * 1e3;
class al extends Error {
    constructor(e, r, n) {
        super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = r, this.code = n
    }
}

function P(t) {
    return typeof t == "object" && t !== null && "__isAuthError" in t
}
class R0 extends al {
    constructor(e, r, n) {
        super(e, r, n), this.name = "AuthApiError", this.status = r, this.code = n
    }
}

function L0(t) {
    return P(t) && t.name === "AuthApiError"
}
class bh extends al {
    constructor(e, r) {
        super(e), this.name = "AuthUnknownError", this.originalError = r
    }
}
class Lt extends al {
    constructor(e, r, n, s) {
        super(e, n, s), this.name = r, this.status = n
    }
}
class pt extends Lt {
    constructor() {
        super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
    }
}

function $0(t) {
    return P(t) && t.name === "AuthSessionMissingError"
}
class hs extends Lt {
    constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
    }
}
class fs extends Lt {
    constructor(e) {
        super(e, "AuthInvalidCredentialsError", 400, void 0)
    }
}
class ms extends Lt {
    constructor(e, r = null) {
        super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}

function M0(t) {
    return P(t) && t.name === "AuthImplicitGrantRedirectError"
}
class Oc extends Lt {
    constructor(e, r = null) {
        super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
class aa extends Lt {
    constructor(e, r) {
        super(e, "AuthRetryableFetchError", r, void 0)
    }
}

function to(t) {
    return P(t) && t.name === "AuthRetryableFetchError"
}
class Ac extends Lt {
    constructor(e, r, n) {
        super(e, "AuthWeakPasswordError", r, "weak_password"), this.reasons = n
    }
}
class la extends Lt {
    constructor(e) {
        super(e, "AuthInvalidJwtError", 400, "invalid_jwt")
    }
}
const Xs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),
    Ic = ` 	
\r=`.split(""),
    D0 = (() => {
        const t = new Array(128);
        for (let e = 0; e < t.length; e += 1) t[e] = -1;
        for (let e = 0; e < Ic.length; e += 1) t[Ic[e].charCodeAt(0)] = -2;
        for (let e = 0; e < Xs.length; e += 1) t[Xs[e].charCodeAt(0)] = e;
        return t
    })();

function Rc(t, e, r) {
    if (t !== null)
        for (e.queue = e.queue << 8 | t, e.queuedBits += 8; e.queuedBits >= 6;) {
            const n = e.queue >> e.queuedBits - 6 & 63;
            r(Xs[n]), e.queuedBits -= 6
        } else if (e.queuedBits > 0)
            for (e.queue = e.queue << 6 - e.queuedBits, e.queuedBits = 6; e.queuedBits >= 6;) {
                const n = e.queue >> e.queuedBits - 6 & 63;
                r(Xs[n]), e.queuedBits -= 6
            }
}

function jh(t, e, r) {
    const n = D0[t];
    if (n > -1)
        for (e.queue = e.queue << 6 | n, e.queuedBits += 6; e.queuedBits >= 8;) r(e.queue >> e.queuedBits - 8 & 255), e.queuedBits -= 8;
    else {
        if (n === -2) return;
        throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)
    }
}

function Lc(t) {
    const e = [],
        r = a => {
            e.push(String.fromCodePoint(a))
        },
        n = {
            utf8seq: 0,
            codepoint: 0
        },
        s = {
            queue: 0,
            queuedBits: 0
        },
        o = a => {
            B0(a, n, r)
        };
    for (let a = 0; a < t.length; a += 1) jh(t.charCodeAt(a), s, o);
    return e.join("")
}

function U0(t, e) {
    if (t <= 127) {
        e(t);
        return
    } else if (t <= 2047) {
        e(192 | t >> 6), e(128 | t & 63);
        return
    } else if (t <= 65535) {
        e(224 | t >> 12), e(128 | t >> 6 & 63), e(128 | t & 63);
        return
    } else if (t <= 1114111) {
        e(240 | t >> 18), e(128 | t >> 12 & 63), e(128 | t >> 6 & 63), e(128 | t & 63);
        return
    }
    throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)
}

function z0(t, e) {
    for (let r = 0; r < t.length; r += 1) {
        let n = t.charCodeAt(r);
        if (n > 55295 && n <= 56319) {
            const s = (n - 55296) * 1024 & 65535;
            n = (t.charCodeAt(r + 1) - 56320 & 65535 | s) + 65536, r += 1
        }
        U0(n, e)
    }
}

function B0(t, e, r) {
    if (e.utf8seq === 0) {
        if (t <= 127) {
            r(t);
            return
        }
        for (let n = 1; n < 6; n += 1)
            if (!(t >> 7 - n & 1)) {
                e.utf8seq = n;
                break
            } if (e.utf8seq === 2) e.codepoint = t & 31;
        else if (e.utf8seq === 3) e.codepoint = t & 15;
        else if (e.utf8seq === 4) e.codepoint = t & 7;
        else throw new Error("Invalid UTF-8 sequence");
        e.utf8seq -= 1
    } else if (e.utf8seq > 0) {
        if (t <= 127) throw new Error("Invalid UTF-8 sequence");
        e.codepoint = e.codepoint << 6 | t & 63, e.utf8seq -= 1, e.utf8seq === 0 && r(e.codepoint)
    }
}

function W0(t) {
    const e = [],
        r = {
            queue: 0,
            queuedBits: 0
        },
        n = s => {
            e.push(s)
        };
    for (let s = 0; s < t.length; s += 1) jh(t.charCodeAt(s), r, n);
    return new Uint8Array(e)
}

function H0(t) {
    const e = [];
    return z0(t, r => e.push(r)), new Uint8Array(e)
}

function V0(t) {
    const e = [],
        r = {
            queue: 0,
            queuedBits: 0
        },
        n = s => {
            e.push(s)
        };
    return t.forEach(s => Rc(s, r, n)), Rc(null, r, n), e.join("")
}

function q0(t) {
    return Math.round(Date.now() / 1e3) + t
}

function K0() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
        const e = Math.random() * 16 | 0;
        return (t == "x" ? e : e & 3 | 8).toString(16)
    })
}
const Ue = () => typeof window < "u" && typeof document < "u",
    Dt = {
        tested: !1,
        writable: !1
    },
    Nh = () => {
        if (!Ue()) return !1;
        try {
            if (typeof globalThis.localStorage != "object") return !1
        } catch {
            return !1
        }
        if (Dt.tested) return Dt.writable;
        const t = `lswt-${Math.random()}${Math.random()}`;
        try {
            globalThis.localStorage.setItem(t, t), globalThis.localStorage.removeItem(t), Dt.tested = !0, Dt.writable = !0
        } catch {
            Dt.tested = !0, Dt.writable = !1
        }
        return Dt.writable
    };

function G0(t) {
    const e = {},
        r = new URL(t);
    if (r.hash && r.hash[0] === "#") try {
        new URLSearchParams(r.hash.substring(1)).forEach((s, o) => {
            e[o] = s
        })
    } catch {}
    return r.searchParams.forEach((n, s) => {
        e[s] = n
    }), e
}
const kh = t => {
        let e;
        return t ? e = t : typeof fetch > "u" ? e = (...r) => Wn(async () => {
            const {
                default: n
            } = await Promise.resolve().then(() => Wr);
            return {
                default: n
            }
        }, void 0).then(({
            default: n
        }) => n(...r)) : e = fetch, (...r) => e(...r)
    },
    J0 = t => typeof t == "object" && t !== null && "status" in t && "ok" in t && "json" in t && typeof t.json == "function",
    hr = async (t, e, r) => {
        await t.setItem(e, JSON.stringify(r))
    }, Ut = async (t, e) => {
        const r = await t.getItem(e);
        if (!r) return null;
        try {
            return JSON.parse(r)
        } catch {
            return r
        }
    }, mt = async (t, e) => {
        await t.removeItem(e)
    };
class wi {
    constructor() {
        this.promise = new wi.promiseConstructor((e, r) => {
            this.resolve = e, this.reject = r
        })
    }
}
wi.promiseConstructor = Promise;

function ro(t) {
    const e = t.split(".");
    if (e.length !== 3) throw new la("Invalid JWT structure");
    for (let n = 0; n < e.length; n++)
        if (!A0.test(e[n])) throw new la("JWT not in base64url format");
    return {
        header: JSON.parse(Lc(e[0])),
        payload: JSON.parse(Lc(e[1])),
        signature: W0(e[2]),
        raw: {
            header: e[0],
            payload: e[1]
        }
    }
}
async function Q0(t) {
    return await new Promise(e => {
        setTimeout(() => e(null), t)
    })
}

function Y0(t, e) {
    return new Promise((n, s) => {
        (async () => {
            for (let o = 0; o < 1 / 0; o++) try {
                const a = await t(o);
                if (!e(o, null, a)) {
                    n(a);
                    return
                }
            } catch (a) {
                if (!e(o, a)) {
                    s(a);
                    return
                }
            }
        })()
    })
}

function X0(t) {
    return ("0" + t.toString(16)).substr(-2)
}

function Z0() {
    const e = new Uint32Array(56);
    if (typeof crypto > "u") {
        const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
            n = r.length;
        let s = "";
        for (let o = 0; o < 56; o++) s += r.charAt(Math.floor(Math.random() * n));
        return s
    }
    return crypto.getRandomValues(e), Array.from(e, X0).join("")
}
async function eg(t) {
    const r = new TextEncoder().encode(t),
        n = await crypto.subtle.digest("SHA-256", r),
        s = new Uint8Array(n);
    return Array.from(s).map(o => String.fromCharCode(o)).join("")
}
async function tg(t) {
    if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u")) return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), t;
    const r = await eg(t);
    return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}
async function ar(t, e, r = !1) {
    const n = Z0();
    let s = n;
    r && (s += "/PASSWORD_RECOVERY"), await hr(t, `${e}-code-verifier`, s);
    const o = await tg(n);
    return [o, n === o ? "plain" : "s256"]
}
const rg = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;

function ng(t) {
    const e = t.headers.get(oa);
    if (!e || !e.match(rg)) return null;
    try {
        return new Date(`${e}T00:00:00.0Z`)
    } catch {
        return null
    }
}

function sg(t) {
    if (!t) throw new Error("Missing exp claim");
    const e = Math.floor(Date.now() / 1e3);
    if (t <= e) throw new Error("JWT has expired")
}

function ig(t) {
    switch (t) {
        case "RS256":
            return {
                name: "RSASSA-PKCS1-v1_5", hash: {
                    name: "SHA-256"
                }
            };
        case "ES256":
            return {
                name: "ECDSA", namedCurve: "P-256", hash: {
                    name: "SHA-256"
                }
            };
        default:
            throw new Error("Invalid alg claim")
    }
}
const og = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

function lr(t) {
    if (!og.test(t)) throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")
}

function no() {
    const t = {};
    return new Proxy(t, {
        get: (e, r) => {
            if (r === "__isUserNotAvailableProxy") return !0;
            if (typeof r == "symbol") {
                const n = r.toString();
                if (n === "Symbol(Symbol.toPrimitive)" || n === "Symbol(Symbol.toStringTag)" || n === "Symbol(util.inspect.custom)") return
            }
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)
        },
        set: (e, r) => {
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        },
        deleteProperty: (e, r) => {
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        }
    })
}

function $c(t) {
    return JSON.parse(JSON.stringify(t))
}
var ag = function(t, e) {
    var r = {};
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++) e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
    return r
};
const Wt = t => t.msg || t.message || t.error_description || t.error || JSON.stringify(t),
    lg = [502, 503, 504];
async function Mc(t) {
    var e;
    if (!J0(t)) throw new aa(Wt(t), 0);
    if (lg.includes(t.status)) throw new aa(Wt(t), t.status);
    let r;
    try {
        r = await t.json()
    } catch (o) {
        throw new bh(Wt(o), o)
    }
    let n;
    const s = ng(t);
    if (s && s.getTime() >= wh["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? n = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (n = r.error_code), n) {
        if (n === "weak_password") throw new Ac(Wt(r), t.status, ((e = r.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
        if (n === "session_not_found") throw new pt
    } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce((o, a) => o && typeof a == "string", !0)) throw new Ac(Wt(r), t.status, r.weak_password.reasons);
    throw new R0(Wt(r), t.status || 500, n)
}
const cg = (t, e, r, n) => {
    const s = {
        method: t,
        headers: (e == null ? void 0 : e.headers) || {}
    };
    return t === "GET" ? s : (s.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, e == null ? void 0 : e.headers), s.body = JSON.stringify(n), Object.assign(Object.assign({}, s), r))
};
async function I(t, e, r, n) {
    var s;
    const o = Object.assign({}, n == null ? void 0 : n.headers);
    o[oa] || (o[oa] = wh["2024-01-01"].name), n != null && n.jwt && (o.Authorization = `Bearer ${n.jwt}`);
    const a = (s = n == null ? void 0 : n.query) !== null && s !== void 0 ? s : {};
    n != null && n.redirectTo && (a.redirect_to = n.redirectTo);
    const l = Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : "",
        c = await ug(t, e, r + l, {
            headers: o,
            noResolveJson: n == null ? void 0 : n.noResolveJson
        }, {}, n == null ? void 0 : n.body);
    return n != null && n.xform ? n == null ? void 0 : n.xform(c) : {
        data: Object.assign({}, c),
        error: null
    }
}
async function ug(t, e, r, n, s, o) {
    const a = cg(e, n, s, o);
    let l;
    try {
        l = await t(r, Object.assign({}, a))
    } catch (c) {
        throw console.error(c), new aa(Wt(c), 0)
    }
    if (l.ok || await Mc(l), n != null && n.noResolveJson) return l;
    try {
        return await l.json()
    } catch (c) {
        await Mc(c)
    }
}

function et(t) {
    var e;
    let r = null;
    mg(t) && (r = Object.assign({}, t), t.expires_at || (r.expires_at = q0(t.expires_in)));
    const n = (e = t.user) !== null && e !== void 0 ? e : t;
    return {
        data: {
            session: r,
            user: n
        },
        error: null
    }
}

function Dc(t) {
    const e = et(t);
    return !e.error && t.weak_password && typeof t.weak_password == "object" && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.message && typeof t.weak_password.message == "string" && t.weak_password.reasons.reduce((r, n) => r && typeof n == "string", !0) && (e.data.weak_password = t.weak_password), e
}

function wt(t) {
    var e;
    return {
        data: {
            user: (e = t.user) !== null && e !== void 0 ? e : t
        },
        error: null
    }
}

function dg(t) {
    return {
        data: t,
        error: null
    }
}

function hg(t) {
    const {
        action_link: e,
        email_otp: r,
        hashed_token: n,
        redirect_to: s,
        verification_type: o
    } = t, a = ag(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), l = {
        action_link: e,
        email_otp: r,
        hashed_token: n,
        redirect_to: s,
        verification_type: o
    }, c = Object.assign({}, a);
    return {
        data: {
            properties: l,
            user: c
        },
        error: null
    }
}

function fg(t) {
    return t
}

function mg(t) {
    return t.access_token && t.refresh_token && t.expires_in
}
const so = ["global", "local", "others"];
var pg = function(t, e) {
    var r = {};
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++) e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
    return r
};
class gg {
    constructor({
        url: e = "",
        headers: r = {},
        fetch: n
    }) {
        this.url = e, this.headers = r, this.fetch = kh(n), this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        }
    }
    async signOut(e, r = so[0]) {
        if (so.indexOf(r) < 0) throw new Error(`@supabase/auth-js: Parameter scope must be one of ${so.join(", ")}`);
        try {
            return await I(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
                headers: this.headers,
                jwt: e,
                noResolveJson: !0
            }), {
                data: null,
                error: null
            }
        } catch (n) {
            if (P(n)) return {
                data: null,
                error: n
            };
            throw n
        }
    }
    async inviteUserByEmail(e, r = {}) {
        try {
            return await I(this.fetch, "POST", `${this.url}/invite`, {
                body: {
                    email: e,
                    data: r.data
                },
                headers: this.headers,
                redirectTo: r.redirectTo,
                xform: wt
            })
        } catch (n) {
            if (P(n)) return {
                data: {
                    user: null
                },
                error: n
            };
            throw n
        }
    }
    async generateLink(e) {
        try {
            const {
                options: r
            } = e, n = pg(e, ["options"]), s = Object.assign(Object.assign({}, n), r);
            return "newEmail" in n && (s.new_email = n == null ? void 0 : n.newEmail, delete s.newEmail), await I(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: s,
                headers: this.headers,
                xform: hg,
                redirectTo: r == null ? void 0 : r.redirectTo
            })
        } catch (r) {
            if (P(r)) return {
                data: {
                    properties: null,
                    user: null
                },
                error: r
            };
            throw r
        }
    }
    async createUser(e) {
        try {
            return await I(this.fetch, "POST", `${this.url}/admin/users`, {
                body: e,
                headers: this.headers,
                xform: wt
            })
        } catch (r) {
            if (P(r)) return {
                data: {
                    user: null
                },
                error: r
            };
            throw r
        }
    }
    async listUsers(e) {
        var r, n, s, o, a, l, c;
        try {
            const u = {
                    nextPage: null,
                    lastPage: 0,
                    total: 0
                },
                h = await I(this.fetch, "GET", `${this.url}/admin/users`, {
                    headers: this.headers,
                    noResolveJson: !0,
                    query: {
                        page: (n = (r = e == null ? void 0 : e.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
                        per_page: (o = (s = e == null ? void 0 : e.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && o !== void 0 ? o : ""
                    },
                    xform: fg
                });
            if (h.error) throw h.error;
            const f = await h.json(),
                d = (a = h.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0,
                p = (c = (l = h.headers.get("link")) === null || l === void 0 ? void 0 : l.split(",")) !== null && c !== void 0 ? c : [];
            return p.length > 0 && (p.forEach(y => {
                const v = parseInt(y.split(";")[0].split("=")[1].substring(0, 1)),
                    N = JSON.parse(y.split(";")[1].split("=")[1]);
                u[`${N}Page`] = v
            }), u.total = parseInt(d)), {
                data: Object.assign(Object.assign({}, f), u),
                error: null
            }
        } catch (u) {
            if (P(u)) return {
                data: {
                    users: []
                },
                error: u
            };
            throw u
        }
    }
    async getUserById(e) {
        lr(e);
        try {
            return await I(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
                headers: this.headers,
                xform: wt
            })
        } catch (r) {
            if (P(r)) return {
                data: {
                    user: null
                },
                error: r
            };
            throw r
        }
    }
    async updateUserById(e, r) {
        lr(e);
        try {
            return await I(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
                body: r,
                headers: this.headers,
                xform: wt
            })
        } catch (n) {
            if (P(n)) return {
                data: {
                    user: null
                },
                error: n
            };
            throw n
        }
    }
    async deleteUser(e, r = !1) {
        lr(e);
        try {
            return await I(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: r
                },
                xform: wt
            })
        } catch (n) {
            if (P(n)) return {
                data: {
                    user: null
                },
                error: n
            };
            throw n
        }
    }
    async _listFactors(e) {
        lr(e.userId);
        try {
            const {
                data: r,
                error: n
            } = await I(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
                headers: this.headers,
                xform: s => ({
                    data: {
                        factors: s
                    },
                    error: null
                })
            });
            return {
                data: r,
                error: n
            }
        } catch (r) {
            if (P(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async _deleteFactor(e) {
        lr(e.userId), lr(e.id);
        try {
            return {
                data: await I(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
                    headers: this.headers
                }),
                error: null
            }
        } catch (r) {
            if (P(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
}

function Uc(t = {}) {
    return {
        getItem: e => t[e] || null,
        setItem: (e, r) => {
            t[e] = r
        },
        removeItem: e => {
            delete t[e]
        }
    }
}

function xg() {
    if (typeof globalThis != "object") try {
        Object.defineProperty(Object.prototype, "__magic__", {
            get: function() {
                return this
            },
            configurable: !0
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__
    } catch {
        typeof self < "u" && (self.globalThis = self)
    }
}
const cr = {
    debug: !!(globalThis && Nh() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class _h extends Error {
    constructor(e) {
        super(e), this.isAcquireTimeout = !0
    }
}
class yg extends _h {}
async function vg(t, e, r) {
    cr.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
    const n = new globalThis.AbortController;
    return e > 0 && setTimeout(() => {
        n.abort(), cr.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", t)
    }, e), await Promise.resolve().then(() => globalThis.navigator.locks.request(t, e === 0 ? {
        mode: "exclusive",
        ifAvailable: !0
    } : {
        mode: "exclusive",
        signal: n.signal
    }, async s => {
        if (s) {
            cr.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", t, s.name);
            try {
                return await r()
            } finally {
                cr.debug && console.log("@supabase/gotrue-js: navigatorLock: released", t, s.name)
            }
        } else {
            if (e === 0) throw cr.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", t), new yg(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);
            if (cr.debug) try {
                const o = await globalThis.navigator.locks.query();
                console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(o, null, "  "))
            } catch (o) {
                console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", o)
            }
            return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await r()
        }
    }))
}
xg();
const wg = {
    url: T0,
    storageKey: P0,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: O0,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1
};
async function zc(t, e, r) {
    return await r()
}
const ur = {};
class $n {
    constructor(e) {
        var r, n;
        this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = new Map, this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = $n.nextInstanceID, $n.nextInstanceID += 1, this.instanceID > 0 && Ue() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        const s = Object.assign(Object.assign({}, wg), e);
        if (this.logDebugMessages = !!s.debug, typeof s.debug == "function" && (this.logger = s.debug), this.persistSession = s.persistSession, this.storageKey = s.storageKey, this.autoRefreshToken = s.autoRefreshToken, this.admin = new gg({
                url: s.url,
                headers: s.headers,
                fetch: s.fetch
            }), this.url = s.url, this.headers = s.headers, this.fetch = kh(s.fetch), this.lock = s.lock || zc, this.detectSessionInUrl = s.detectSessionInUrl, this.flowType = s.flowType, this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader, s.lock ? this.lock = s.lock : Ue() && (!((r = globalThis == null ? void 0 : globalThis.navigator) === null || r === void 0) && r.locks) ? this.lock = vg : this.lock = zc, this.jwks || (this.jwks = {
                keys: []
            }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
                verify: this._verify.bind(this),
                enroll: this._enroll.bind(this),
                unenroll: this._unenroll.bind(this),
                challenge: this._challenge.bind(this),
                listFactors: this._listFactors.bind(this),
                challengeAndVerify: this._challengeAndVerify.bind(this),
                getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
            }, this.persistSession ? (s.storage ? this.storage = s.storage : Nh() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Uc(this.memoryStorage)), s.userStorage && (this.userStorage = s.userStorage)) : (this.memoryStorage = {}, this.storage = Uc(this.memoryStorage)), Ue() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
            } catch (o) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", o)
            }(n = this.broadcastChannel) === null || n === void 0 || n.addEventListener("message", async o => {
                this._debug("received broadcast notification from other tab or client", o), await this._notifyAllSubscribers(o.data.event, o.data.session, !1)
            })
        }
        this.initialize()
    }
    get jwks() {
        var e, r;
        return (r = (e = ur[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !== null && r !== void 0 ? r : {
            keys: []
        }
    }
    set jwks(e) {
        ur[this.storageKey] = Object.assign(Object.assign({}, ur[this.storageKey]), {
            jwks: e
        })
    }
    get jwks_cached_at() {
        var e, r;
        return (r = (e = ur[this.storageKey]) === null || e === void 0 ? void 0 : e.cachedAt) !== null && r !== void 0 ? r : Number.MIN_SAFE_INTEGER
    }
    set jwks_cached_at(e) {
        ur[this.storageKey] = Object.assign(Object.assign({}, ur[this.storageKey]), {
            cachedAt: e
        })
    }
    _debug(...e) {
        return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${vh}) ${new Date().toISOString()}`, ...e), this
    }
    async initialize() {
        return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise)
    }
    async _initialize() {
        var e;
        try {
            const r = G0(window.location.href);
            let n = "none";
            if (this._isImplicitGrantCallback(r) ? n = "implicit" : await this._isPKCECallback(r) && (n = "pkce"), Ue() && this.detectSessionInUrl && n !== "none") {
                const {
                    data: s,
                    error: o
                } = await this._getSessionFromURL(r, n);
                if (o) {
                    if (this._debug("#_initialize()", "error detecting session from URL", o), M0(o)) {
                        const c = (e = o.details) === null || e === void 0 ? void 0 : e.code;
                        if (c === "identity_already_exists" || c === "identity_not_found" || c === "single_identity_not_deletable") return {
                            error: o
                        }
                    }
                    return await this._removeSession(), {
                        error: o
                    }
                }
                const {
                    session: a,
                    redirectType: l
                } = s;
                return this._debug("#_initialize()", "detected session in URL", a, "redirect type", l), await this._saveSession(a), setTimeout(async () => {
                    l === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", a) : await this._notifyAllSubscribers("SIGNED_IN", a)
                }, 0), {
                    error: null
                }
            }
            return await this._recoverAndRefresh(), {
                error: null
            }
        } catch (r) {
            return P(r) ? {
                error: r
            } : {
                error: new bh("Unexpected error during initialization", r)
            }
        } finally {
            await this._handleVisibilityChange(), this._debug("#_initialize()", "end")
        }
    }
    async signInAnonymously(e) {
        var r, n, s;
        try {
            const o = await I(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        data: (n = (r = e == null ? void 0 : e.options) === null || r === void 0 ? void 0 : r.data) !== null && n !== void 0 ? n : {},
                        gotrue_meta_security: {
                            captcha_token: (s = e == null ? void 0 : e.options) === null || s === void 0 ? void 0 : s.captchaToken
                        }
                    },
                    xform: et
                }),
                {
                    data: a,
                    error: l
                } = o;
            if (l || !a) return {
                data: {
                    user: null,
                    session: null
                },
                error: l
            };
            const c = a.session,
                u = a.user;
            return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", c)), {
                data: {
                    user: u,
                    session: c
                },
                error: null
            }
        } catch (o) {
            if (P(o)) return {
                data: {
                    user: null,
                    session: null
                },
                error: o
            };
            throw o
        }
    }
    async signUp(e) {
        var r, n, s;
        try {
            let o;
            if ("email" in e) {
                const {
                    email: h,
                    password: f,
                    options: d
                } = e;
                let p = null,
                    y = null;
                this.flowType === "pkce" && ([p, y] = await ar(this.storage, this.storageKey)), o = await I(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: d == null ? void 0 : d.emailRedirectTo,
                    body: {
                        email: h,
                        password: f,
                        data: (r = d == null ? void 0 : d.data) !== null && r !== void 0 ? r : {},
                        gotrue_meta_security: {
                            captcha_token: d == null ? void 0 : d.captchaToken
                        },
                        code_challenge: p,
                        code_challenge_method: y
                    },
                    xform: et
                })
            } else if ("phone" in e) {
                const {
                    phone: h,
                    password: f,
                    options: d
                } = e;
                o = await I(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: h,
                        password: f,
                        data: (n = d == null ? void 0 : d.data) !== null && n !== void 0 ? n : {},
                        channel: (s = d == null ? void 0 : d.channel) !== null && s !== void 0 ? s : "sms",
                        gotrue_meta_security: {
                            captcha_token: d == null ? void 0 : d.captchaToken
                        }
                    },
                    xform: et
                })
            } else throw new fs("You must provide either an email or phone number and a password");
            const {
                data: a,
                error: l
            } = o;
            if (l || !a) return {
                data: {
                    user: null,
                    session: null
                },
                error: l
            };
            const c = a.session,
                u = a.user;
            return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", c)), {
                data: {
                    user: u,
                    session: c
                },
                error: null
            }
        } catch (o) {
            if (P(o)) return {
                data: {
                    user: null,
                    session: null
                },
                error: o
            };
            throw o
        }
    }
    async signInWithPassword(e) {
        try {
            let r;
            if ("email" in e) {
                const {
                    email: o,
                    password: a,
                    options: l
                } = e;
                r = await I(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: o,
                        password: a,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        }
                    },
                    xform: Dc
                })
            } else if ("phone" in e) {
                const {
                    phone: o,
                    password: a,
                    options: l
                } = e;
                r = await I(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: o,
                        password: a,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        }
                    },
                    xform: Dc
                })
            } else throw new fs("You must provide either an email or phone number and a password");
            const {
                data: n,
                error: s
            } = r;
            return s ? {
                data: {
                    user: null,
                    session: null
                },
                error: s
            } : !n || !n.session || !n.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new hs
            } : (n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), {
                data: Object.assign({
                    user: n.user,
                    session: n.session
                }, n.weak_password ? {
                    weakPassword: n.weak_password
                } : null),
                error: s
            })
        } catch (r) {
            if (P(r)) return {
                data: {
                    user: null,
                    session: null
                },
                error: r
            };
            throw r
        }
    }
    async signInWithOAuth(e) {
        var r, n, s, o;
        return await this._handleProviderSignIn(e.provider, {
            redirectTo: (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo,
            scopes: (n = e.options) === null || n === void 0 ? void 0 : n.scopes,
            queryParams: (s = e.options) === null || s === void 0 ? void 0 : s.queryParams,
            skipBrowserRedirect: (o = e.options) === null || o === void 0 ? void 0 : o.skipBrowserRedirect
        })
    }
    async exchangeCodeForSession(e) {
        return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
    }
    async signInWithWeb3(e) {
        const {
            chain: r
        } = e;
        if (r === "solana") return await this.signInWithSolana(e);
        throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)
    }
    async signInWithSolana(e) {
        var r, n, s, o, a, l, c, u, h, f, d, p;
        let y, v;
        if ("message" in e) y = e.message, v = e.signature;
        else {
            const {
                chain: N,
                wallet: x,
                statement: m,
                options: g
            } = e;
            let w;
            if (Ue())
                if (typeof x == "object") w = x;
                else {
                    const j = window;
                    if ("solana" in j && typeof j.solana == "object" && ("signIn" in j.solana && typeof j.solana.signIn == "function" || "signMessage" in j.solana && typeof j.solana.signMessage == "function")) w = j.solana;
                    else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")
                }
            else {
                if (typeof x != "object" || !(g != null && g.url)) throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                w = x
            }
            const k = new URL((r = g == null ? void 0 : g.url) !== null && r !== void 0 ? r : window.location.href);
            if ("signIn" in w && w.signIn) {
                const j = await w.signIn(Object.assign(Object.assign(Object.assign({
                    issuedAt: new Date().toISOString()
                }, g == null ? void 0 : g.signInWithSolana), {
                    version: "1",
                    domain: k.host,
                    uri: k.href
                }), m ? {
                    statement: m
                } : null));
                let _;
                if (Array.isArray(j) && j[0] && typeof j[0] == "object") _ = j[0];
                else if (j && typeof j == "object" && "signedMessage" in j && "signature" in j) _ = j;
                else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
                if ("signedMessage" in _ && "signature" in _ && (typeof _.signedMessage == "string" || _.signedMessage instanceof Uint8Array) && _.signature instanceof Uint8Array) y = typeof _.signedMessage == "string" ? _.signedMessage : new TextDecoder().decode(_.signedMessage), v = _.signature;
                else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")
            } else {
                if (!("signMessage" in w) || typeof w.signMessage != "function" || !("publicKey" in w) || typeof w != "object" || !w.publicKey || !("toBase58" in w.publicKey) || typeof w.publicKey.toBase58 != "function") throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
                y = [`${k.host} wants you to sign in with your Solana account:`, w.publicKey.toBase58(), ...m ? ["", m, ""] : [""], "Version: 1", `URI: ${k.href}`, `Issued At: ${(s=(n=g==null?void 0:g.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&s!==void 0?s:new Date().toISOString()}`, ...!((o = g == null ? void 0 : g.signInWithSolana) === null || o === void 0) && o.notBefore ? [`Not Before: ${g.signInWithSolana.notBefore}`] : [], ...!((a = g == null ? void 0 : g.signInWithSolana) === null || a === void 0) && a.expirationTime ? [`Expiration Time: ${g.signInWithSolana.expirationTime}`] : [], ...!((l = g == null ? void 0 : g.signInWithSolana) === null || l === void 0) && l.chainId ? [`Chain ID: ${g.signInWithSolana.chainId}`] : [], ...!((c = g == null ? void 0 : g.signInWithSolana) === null || c === void 0) && c.nonce ? [`Nonce: ${g.signInWithSolana.nonce}`] : [], ...!((u = g == null ? void 0 : g.signInWithSolana) === null || u === void 0) && u.requestId ? [`Request ID: ${g.signInWithSolana.requestId}`] : [], ...!((f = (h = g == null ? void 0 : g.signInWithSolana) === null || h === void 0 ? void 0 : h.resources) === null || f === void 0) && f.length ? ["Resources", ...g.signInWithSolana.resources.map(_ => `- ${_}`)] : []].join(`
`);
                const j = await w.signMessage(new TextEncoder().encode(y), "utf8");
                if (!j || !(j instanceof Uint8Array)) throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
                v = j
            }
        }
        try {
            const {
                data: N,
                error: x
            } = await I(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                headers: this.headers,
                body: Object.assign({
                    chain: "solana",
                    message: y,
                    signature: V0(v)
                }, !((d = e.options) === null || d === void 0) && d.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: (p = e.options) === null || p === void 0 ? void 0 : p.captchaToken
                    }
                } : null),
                xform: et
            });
            if (x) throw x;
            return !N || !N.session || !N.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new hs
            } : (N.session && (await this._saveSession(N.session), await this._notifyAllSubscribers("SIGNED_IN", N.session)), {
                data: Object.assign({}, N),
                error: x
            })
        } catch (N) {
            if (P(N)) return {
                data: {
                    user: null,
                    session: null
                },
                error: N
            };
            throw N
        }
    }
    async _exchangeCodeForSession(e) {
        const r = await Ut(this.storage, `${this.storageKey}-code-verifier`),
            [n, s] = (r ?? "").split("/");
        try {
            const {
                data: o,
                error: a
            } = await I(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: {
                    auth_code: e,
                    code_verifier: n
                },
                xform: et
            });
            if (await mt(this.storage, `${this.storageKey}-code-verifier`), a) throw a;
            return !o || !o.session || !o.user ? {
                data: {
                    user: null,
                    session: null,
                    redirectType: null
                },
                error: new hs
            } : (o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", o.session)), {
                data: Object.assign(Object.assign({}, o), {
                    redirectType: s ?? null
                }),
                error: a
            })
        } catch (o) {
            if (P(o)) return {
                data: {
                    user: null,
                    session: null,
                    redirectType: null
                },
                error: o
            };
            throw o
        }
    }
    async signInWithIdToken(e) {
        try {
            const {
                options: r,
                provider: n,
                token: s,
                access_token: o,
                nonce: a
            } = e, l = await I(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider: n,
                    id_token: s,
                    access_token: o,
                    nonce: a,
                    gotrue_meta_security: {
                        captcha_token: r == null ? void 0 : r.captchaToken
                    }
                },
                xform: et
            }), {
                data: c,
                error: u
            } = l;
            return u ? {
                data: {
                    user: null,
                    session: null
                },
                error: u
            } : !c || !c.session || !c.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new hs
            } : (c.session && (await this._saveSession(c.session), await this._notifyAllSubscribers("SIGNED_IN", c.session)), {
                data: c,
                error: u
            })
        } catch (r) {
            if (P(r)) return {
                data: {
                    user: null,
                    session: null
                },
                error: r
            };
            throw r
        }
    }
    async signInWithOtp(e) {
        var r, n, s, o, a;
        try {
            if ("email" in e) {
                const {
                    email: l,
                    options: c
                } = e;
                let u = null,
                    h = null;
                this.flowType === "pkce" && ([u, h] = await ar(this.storage, this.storageKey));
                const {
                    error: f
                } = await I(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email: l,
                        data: (r = c == null ? void 0 : c.data) !== null && r !== void 0 ? r : {},
                        create_user: (n = c == null ? void 0 : c.shouldCreateUser) !== null && n !== void 0 ? n : !0,
                        gotrue_meta_security: {
                            captcha_token: c == null ? void 0 : c.captchaToken
                        },
                        code_challenge: u,
                        code_challenge_method: h
                    },
                    redirectTo: c == null ? void 0 : c.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: f
                }
            }
            if ("phone" in e) {
                const {
                    phone: l,
                    options: c
                } = e, {
                    data: u,
                    error: h
                } = await I(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone: l,
                        data: (s = c == null ? void 0 : c.data) !== null && s !== void 0 ? s : {},
                        create_user: (o = c == null ? void 0 : c.shouldCreateUser) !== null && o !== void 0 ? o : !0,
                        gotrue_meta_security: {
                            captcha_token: c == null ? void 0 : c.captchaToken
                        },
                        channel: (a = c == null ? void 0 : c.channel) !== null && a !== void 0 ? a : "sms"
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: u == null ? void 0 : u.message_id
                    },
                    error: h
                }
            }
            throw new fs("You must provide either an email or phone number.")
        } catch (l) {
            if (P(l)) return {
                data: {
                    user: null,
                    session: null
                },
                error: l
            };
            throw l
        }
    }
    async verifyOtp(e) {
        var r, n;
        try {
            let s, o;
            "options" in e && (s = (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo, o = (n = e.options) === null || n === void 0 ? void 0 : n.captchaToken);
            const {
                data: a,
                error: l
            } = await I(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, e), {
                    gotrue_meta_security: {
                        captcha_token: o
                    }
                }),
                redirectTo: s,
                xform: et
            });
            if (l) throw l;
            if (!a) throw new Error("An error occurred on token verification.");
            const c = a.session,
                u = a.user;
            return c != null && c.access_token && (await this._saveSession(c), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", c)), {
                data: {
                    user: u,
                    session: c
                },
                error: null
            }
        } catch (s) {
            if (P(s)) return {
                data: {
                    user: null,
                    session: null
                },
                error: s
            };
            throw s
        }
    }
    async signInWithSSO(e) {
        var r, n, s;
        try {
            let o = null,
                a = null;
            return this.flowType === "pkce" && ([o, a] = await ar(this.storage, this.storageKey)), await I(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? {
                    provider_id: e.providerId
                } : null), "domain" in e ? {
                    domain: e.domain
                } : null), {
                    redirect_to: (n = (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo) !== null && n !== void 0 ? n : void 0
                }), !((s = e == null ? void 0 : e.options) === null || s === void 0) && s.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: e.options.captchaToken
                    }
                } : null), {
                    skip_http_redirect: !0,
                    code_challenge: o,
                    code_challenge_method: a
                }),
                headers: this.headers,
                xform: dg
            })
        } catch (o) {
            if (P(o)) return {
                data: null,
                error: o
            };
            throw o
        }
    }
    async reauthenticate() {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate())
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async e => {
                const {
                    data: {
                        session: r
                    },
                    error: n
                } = e;
                if (n) throw n;
                if (!r) throw new pt;
                const {
                    error: s
                } = await I(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: r.access_token
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                }
            })
        } catch (e) {
            if (P(e)) return {
                data: {
                    user: null,
                    session: null
                },
                error: e
            };
            throw e
        }
    }
    async resend(e) {
        try {
            const r = `${this.url}/resend`;
            if ("email" in e) {
                const {
                    email: n,
                    type: s,
                    options: o
                } = e, {
                    error: a
                } = await I(this.fetch, "POST", r, {
                    headers: this.headers,
                    body: {
                        email: n,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: o == null ? void 0 : o.captchaToken
                        }
                    },
                    redirectTo: o == null ? void 0 : o.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                }
            } else if ("phone" in e) {
                const {
                    phone: n,
                    type: s,
                    options: o
                } = e, {
                    data: a,
                    error: l
                } = await I(this.fetch, "POST", r, {
                    headers: this.headers,
                    body: {
                        phone: n,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: o == null ? void 0 : o.captchaToken
                        }
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: a == null ? void 0 : a.message_id
                    },
                    error: l
                }
            }
            throw new fs("You must provide either an email or phone number and a type")
        } catch (r) {
            if (P(r)) return {
                data: {
                    user: null,
                    session: null
                },
                error: r
            };
            throw r
        }
    }
    async getSession() {
        return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async r => r))
    }
    async _acquireLock(e, r) {
        this._debug("#_acquireLock", "begin", e);
        try {
            if (this.lockAcquired) {
                const n = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(),
                    s = (async () => (await n, await r()))();
                return this.pendingInLock.push((async () => {
                    try {
                        await s
                    } catch {}
                })()), s
            }
            return await this.lock(`lock:${this.storageKey}`, e, async () => {
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = !0;
                    const n = r();
                    for (this.pendingInLock.push((async () => {
                            try {
                                await n
                            } catch {}
                        })()), await n; this.pendingInLock.length;) {
                        const s = [...this.pendingInLock];
                        await Promise.all(s), this.pendingInLock.splice(0, s.length)
                    }
                    return await n
                } finally {
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1
                }
            })
        } finally {
            this._debug("#_acquireLock", "end")
        }
    }
    async _useSession(e) {
        this._debug("#_useSession", "begin");
        try {
            const r = await this.__loadSession();
            return await e(r)
        } finally {
            this._debug("#_useSession", "end")
        }
    }
    async __loadSession() {
        this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
        try {
            let e = null;
            const r = await Ut(this.storage, this.storageKey);
            if (this._debug("#getSession()", "session from storage", r), r !== null && (this._isValidSession(r) ? e = r : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e) return {
                data: {
                    session: null
                },
                error: null
            };
            const n = e.expires_at ? e.expires_at * 1e3 - Date.now() < eo : !1;
            if (this._debug("#__loadSession()", `session has${n?"":" not"} expired`, "expires_at", e.expires_at), !n) {
                if (this.userStorage) {
                    const a = await Ut(this.userStorage, this.storageKey + "-user");
                    a != null && a.user ? e.user = a.user : e.user = no()
                }
                if (this.storage.isServer && e.user) {
                    let a = this.suppressGetSessionWarning;
                    e = new Proxy(e, {
                        get: (c, u, h) => (!a && u === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), a = !0, this.suppressGetSessionWarning = !0), Reflect.get(c, u, h))
                    })
                }
                return {
                    data: {
                        session: e
                    },
                    error: null
                }
            }
            const {
                session: s,
                error: o
            } = await this._callRefreshToken(e.refresh_token);
            return o ? {
                data: {
                    session: null
                },
                error: o
            } : {
                data: {
                    session: s
                },
                error: null
            }
        } finally {
            this._debug("#__loadSession()", "end")
        }
    }
    async getUser(e) {
        return e ? await this._getUser(e) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()))
    }
    async _getUser(e) {
        try {
            return e ? await I(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: e,
                xform: wt
            }) : await this._useSession(async r => {
                var n, s, o;
                const {
                    data: a,
                    error: l
                } = r;
                if (l) throw l;
                return !(!((n = a.session) === null || n === void 0) && n.access_token) && !this.hasCustomAuthorizationHeader ? {
                    data: {
                        user: null
                    },
                    error: new pt
                } : await I(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (o = (s = a.session) === null || s === void 0 ? void 0 : s.access_token) !== null && o !== void 0 ? o : void 0,
                    xform: wt
                })
            })
        } catch (r) {
            if (P(r)) return $0(r) && (await this._removeSession(), await mt(this.storage, `${this.storageKey}-code-verifier`)), {
                data: {
                    user: null
                },
                error: r
            };
            throw r
        }
    }
    async updateUser(e, r = {}) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(e, r))
    }
    async _updateUser(e, r = {}) {
        try {
            return await this._useSession(async n => {
                const {
                    data: s,
                    error: o
                } = n;
                if (o) throw o;
                if (!s.session) throw new pt;
                const a = s.session;
                let l = null,
                    c = null;
                this.flowType === "pkce" && e.email != null && ([l, c] = await ar(this.storage, this.storageKey));
                const {
                    data: u,
                    error: h
                } = await I(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: r == null ? void 0 : r.emailRedirectTo,
                    body: Object.assign(Object.assign({}, e), {
                        code_challenge: l,
                        code_challenge_method: c
                    }),
                    jwt: a.access_token,
                    xform: wt
                });
                if (h) throw h;
                return a.user = u.user, await this._saveSession(a), await this._notifyAllSubscribers("USER_UPDATED", a), {
                    data: {
                        user: a.user
                    },
                    error: null
                }
            })
        } catch (n) {
            if (P(n)) return {
                data: {
                    user: null
                },
                error: n
            };
            throw n
        }
    }
    async setSession(e) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(e))
    }
    async _setSession(e) {
        try {
            if (!e.access_token || !e.refresh_token) throw new pt;
            const r = Date.now() / 1e3;
            let n = r,
                s = !0,
                o = null;
            const {
                payload: a
            } = ro(e.access_token);
            if (a.exp && (n = a.exp, s = n <= r), s) {
                const {
                    session: l,
                    error: c
                } = await this._callRefreshToken(e.refresh_token);
                if (c) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: c
                };
                if (!l) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                };
                o = l
            } else {
                const {
                    data: l,
                    error: c
                } = await this._getUser(e.access_token);
                if (c) throw c;
                o = {
                    access_token: e.access_token,
                    refresh_token: e.refresh_token,
                    user: l.user,
                    token_type: "bearer",
                    expires_in: n - r,
                    expires_at: n
                }, await this._saveSession(o), await this._notifyAllSubscribers("SIGNED_IN", o)
            }
            return {
                data: {
                    user: o.user,
                    session: o
                },
                error: null
            }
        } catch (r) {
            if (P(r)) return {
                data: {
                    session: null,
                    user: null
                },
                error: r
            };
            throw r
        }
    }
    async refreshSession(e) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(e))
    }
    async _refreshSession(e) {
        try {
            return await this._useSession(async r => {
                var n;
                if (!e) {
                    const {
                        data: a,
                        error: l
                    } = r;
                    if (l) throw l;
                    e = (n = a.session) !== null && n !== void 0 ? n : void 0
                }
                if (!(e != null && e.refresh_token)) throw new pt;
                const {
                    session: s,
                    error: o
                } = await this._callRefreshToken(e.refresh_token);
                return o ? {
                    data: {
                        user: null,
                        session: null
                    },
                    error: o
                } : s ? {
                    data: {
                        user: s.user,
                        session: s
                    },
                    error: null
                } : {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                }
            })
        } catch (r) {
            if (P(r)) return {
                data: {
                    user: null,
                    session: null
                },
                error: r
            };
            throw r
        }
    }
    async _getSessionFromURL(e, r) {
        try {
            if (!Ue()) throw new ms("No browser detected.");
            if (e.error || e.error_description || e.error_code) throw new ms(e.error_description || "Error in URL with unspecified error_description", {
                error: e.error || "unspecified_error",
                code: e.error_code || "unspecified_code"
            });
            switch (r) {
                case "implicit":
                    if (this.flowType === "pkce") throw new Oc("Not a valid PKCE flow url.");
                    break;
                case "pkce":
                    if (this.flowType === "implicit") throw new ms("Not a valid implicit grant flow url.");
                    break;
                default:
            }
            if (r === "pkce") {
                if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code) throw new Oc("No code detected.");
                const {
                    data: m,
                    error: g
                } = await this._exchangeCodeForSession(e.code);
                if (g) throw g;
                const w = new URL(window.location.href);
                return w.searchParams.delete("code"), window.history.replaceState(window.history.state, "", w.toString()), {
                    data: {
                        session: m.session,
                        redirectType: null
                    },
                    error: null
                }
            }
            const {
                provider_token: n,
                provider_refresh_token: s,
                access_token: o,
                refresh_token: a,
                expires_in: l,
                expires_at: c,
                token_type: u
            } = e;
            if (!o || !l || !a || !u) throw new ms("No session defined in URL");
            const h = Math.round(Date.now() / 1e3),
                f = parseInt(l);
            let d = h + f;
            c && (d = parseInt(c));
            const p = d - h;
            p * 1e3 <= dr && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s, should have been closer to ${f}s`);
            const y = d - f;
            h - y >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", y, d, h) : h - y < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", y, d, h);
            const {
                data: v,
                error: N
            } = await this._getUser(o);
            if (N) throw N;
            const x = {
                provider_token: n,
                provider_refresh_token: s,
                access_token: o,
                expires_in: f,
                expires_at: d,
                refresh_token: a,
                token_type: u,
                user: v.user
            };
            return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), {
                data: {
                    session: x,
                    redirectType: e.type
                },
                error: null
            }
        } catch (n) {
            if (P(n)) return {
                data: {
                    session: null,
                    redirectType: null
                },
                error: n
            };
            throw n
        }
    }
    _isImplicitGrantCallback(e) {
        return !!(e.access_token || e.error_description)
    }
    async _isPKCECallback(e) {
        const r = await Ut(this.storage, `${this.storageKey}-code-verifier`);
        return !!(e.code && r)
    }
    async signOut(e = {
        scope: "global"
    }) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e))
    }
    async _signOut({
        scope: e
    } = {
        scope: "global"
    }) {
        return await this._useSession(async r => {
            var n;
            const {
                data: s,
                error: o
            } = r;
            if (o) return {
                error: o
            };
            const a = (n = s.session) === null || n === void 0 ? void 0 : n.access_token;
            if (a) {
                const {
                    error: l
                } = await this.admin.signOut(a, e);
                if (l && !(L0(l) && (l.status === 404 || l.status === 401 || l.status === 403))) return {
                    error: l
                }
            }
            return e !== "others" && (await this._removeSession(), await mt(this.storage, `${this.storageKey}-code-verifier`)), {
                error: null
            }
        })
    }
    onAuthStateChange(e) {
        const r = K0(),
            n = {
                id: r,
                callback: e,
                unsubscribe: () => {
                    this._debug("#unsubscribe()", "state change callback with id removed", r), this.stateChangeEmitters.delete(r)
                }
            };
        return this._debug("#onAuthStateChange()", "registered callback with id", r), this.stateChangeEmitters.set(r, n), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
            this._emitInitialSession(r)
        })))(), {
            data: {
                subscription: n
            }
        }
    }
    async _emitInitialSession(e) {
        return await this._useSession(async r => {
            var n, s;
            try {
                const {
                    data: {
                        session: o
                    },
                    error: a
                } = r;
                if (a) throw a;
                await ((n = this.stateChangeEmitters.get(e)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", o)), this._debug("INITIAL_SESSION", "callback id", e, "session", o)
            } catch (o) {
                await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", o), console.error(o)
            }
        })
    }
    async resetPasswordForEmail(e, r = {}) {
        let n = null,
            s = null;
        this.flowType === "pkce" && ([n, s] = await ar(this.storage, this.storageKey, !0));
        try {
            return await I(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email: e,
                    code_challenge: n,
                    code_challenge_method: s,
                    gotrue_meta_security: {
                        captcha_token: r.captchaToken
                    }
                },
                headers: this.headers,
                redirectTo: r.redirectTo
            })
        } catch (o) {
            if (P(o)) return {
                data: null,
                error: o
            };
            throw o
        }
    }
    async getUserIdentities() {
        var e;
        try {
            const {
                data: r,
                error: n
            } = await this.getUser();
            if (n) throw n;
            return {
                data: {
                    identities: (e = r.user.identities) !== null && e !== void 0 ? e : []
                },
                error: null
            }
        } catch (r) {
            if (P(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async linkIdentity(e) {
        var r;
        try {
            const {
                data: n,
                error: s
            } = await this._useSession(async o => {
                var a, l, c, u, h;
                const {
                    data: f,
                    error: d
                } = o;
                if (d) throw d;
                const p = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
                    redirectTo: (a = e.options) === null || a === void 0 ? void 0 : a.redirectTo,
                    scopes: (l = e.options) === null || l === void 0 ? void 0 : l.scopes,
                    queryParams: (c = e.options) === null || c === void 0 ? void 0 : c.queryParams,
                    skipBrowserRedirect: !0
                });
                return await I(this.fetch, "GET", p, {
                    headers: this.headers,
                    jwt: (h = (u = f.session) === null || u === void 0 ? void 0 : u.access_token) !== null && h !== void 0 ? h : void 0
                })
            });
            if (s) throw s;
            return Ue() && !(!((r = e.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(n == null ? void 0 : n.url), {
                data: {
                    provider: e.provider,
                    url: n == null ? void 0 : n.url
                },
                error: null
            }
        } catch (n) {
            if (P(n)) return {
                data: {
                    provider: e.provider,
                    url: null
                },
                error: n
            };
            throw n
        }
    }
    async unlinkIdentity(e) {
        try {
            return await this._useSession(async r => {
                var n, s;
                const {
                    data: o,
                    error: a
                } = r;
                if (a) throw a;
                return await I(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
                    headers: this.headers,
                    jwt: (s = (n = o.session) === null || n === void 0 ? void 0 : n.access_token) !== null && s !== void 0 ? s : void 0
                })
            })
        } catch (r) {
            if (P(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async _refreshAccessToken(e) {
        const r = `#_refreshAccessToken(${e.substring(0,5)}...)`;
        this._debug(r, "begin");
        try {
            const n = Date.now();
            return await Y0(async s => (s > 0 && await Q0(200 * Math.pow(2, s - 1)), this._debug(r, "refreshing attempt", s), await I(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                body: {
                    refresh_token: e
                },
                headers: this.headers,
                xform: et
            })), (s, o) => {
                const a = 200 * Math.pow(2, s);
                return o && to(o) && Date.now() + a - n < dr
            })
        } catch (n) {
            if (this._debug(r, "error", n), P(n)) return {
                data: {
                    session: null,
                    user: null
                },
                error: n
            };
            throw n
        } finally {
            this._debug(r, "end")
        }
    }
    _isValidSession(e) {
        return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e
    }
    async _handleProviderSignIn(e, r) {
        const n = await this._getUrlForProvider(`${this.url}/authorize`, e, {
            redirectTo: r.redirectTo,
            scopes: r.scopes,
            queryParams: r.queryParams
        });
        return this._debug("#_handleProviderSignIn()", "provider", e, "options", r, "url", n), Ue() && !r.skipBrowserRedirect && window.location.assign(n), {
            data: {
                provider: e,
                url: n
            },
            error: null
        }
    }
    async _recoverAndRefresh() {
        var e, r;
        const n = "#_recoverAndRefresh()";
        this._debug(n, "begin");
        try {
            const s = await Ut(this.storage, this.storageKey);
            if (s && this.userStorage) {
                let a = await Ut(this.userStorage, this.storageKey + "-user");
                !this.storage.isServer && Object.is(this.storage, this.userStorage) && !a && (a = {
                    user: s.user
                }, await hr(this.userStorage, this.storageKey + "-user", a)), s.user = (e = a == null ? void 0 : a.user) !== null && e !== void 0 ? e : no()
            } else if (s && !s.user && !s.user) {
                const a = await Ut(this.storage, this.storageKey + "-user");
                a && (a != null && a.user) ? (s.user = a.user, await mt(this.storage, this.storageKey + "-user"), await hr(this.storage, this.storageKey, s)) : s.user = no()
            }
            if (this._debug(n, "session from storage", s), !this._isValidSession(s)) {
                this._debug(n, "session is not valid"), s !== null && await this._removeSession();
                return
            }
            const o = ((r = s.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 - Date.now() < eo;
            if (this._debug(n, `session has${o?"":" not"} expired with margin of ${eo}s`), o) {
                if (this.autoRefreshToken && s.refresh_token) {
                    const {
                        error: a
                    } = await this._callRefreshToken(s.refresh_token);
                    a && (console.error(a), to(a) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", a), await this._removeSession()))
                }
            } else if (s.user && s.user.__isUserNotAvailableProxy === !0) try {
                const {
                    data: a,
                    error: l
                } = await this._getUser(s.access_token);
                !l && (a != null && a.user) ? (s.user = a.user, await this._saveSession(s), await this._notifyAllSubscribers("SIGNED_IN", s)) : this._debug(n, "could not get user data, skipping SIGNED_IN notification")
            } catch (a) {
                console.error("Error getting user data:", a), this._debug(n, "error getting user data, skipping SIGNED_IN notification", a)
            } else await this._notifyAllSubscribers("SIGNED_IN", s)
        } catch (s) {
            this._debug(n, "error", s), console.error(s);
            return
        } finally {
            this._debug(n, "end")
        }
    }
    async _callRefreshToken(e) {
        var r, n;
        if (!e) throw new pt;
        if (this.refreshingDeferred) return this.refreshingDeferred.promise;
        const s = `#_callRefreshToken(${e.substring(0,5)}...)`;
        this._debug(s, "begin");
        try {
            this.refreshingDeferred = new wi;
            const {
                data: o,
                error: a
            } = await this._refreshAccessToken(e);
            if (a) throw a;
            if (!o.session) throw new pt;
            await this._saveSession(o.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", o.session);
            const l = {
                session: o.session,
                error: null
            };
            return this.refreshingDeferred.resolve(l), l
        } catch (o) {
            if (this._debug(s, "error", o), P(o)) {
                const a = {
                    session: null,
                    error: o
                };
                return to(o) || await this._removeSession(), (r = this.refreshingDeferred) === null || r === void 0 || r.resolve(a), a
            }
            throw (n = this.refreshingDeferred) === null || n === void 0 || n.reject(o), o
        } finally {
            this.refreshingDeferred = null, this._debug(s, "end")
        }
    }
    async _notifyAllSubscribers(e, r, n = !0) {
        const s = `#_notifyAllSubscribers(${e})`;
        this._debug(s, "begin", r, `broadcast = ${n}`);
        try {
            this.broadcastChannel && n && this.broadcastChannel.postMessage({
                event: e,
                session: r
            });
            const o = [],
                a = Array.from(this.stateChangeEmitters.values()).map(async l => {
                    try {
                        await l.callback(e, r)
                    } catch (c) {
                        o.push(c)
                    }
                });
            if (await Promise.all(a), o.length > 0) {
                for (let l = 0; l < o.length; l += 1) console.error(o[l]);
                throw o[0]
            }
        } finally {
            this._debug(s, "end")
        }
    }
    async _saveSession(e) {
        this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0;
        const r = Object.assign({}, e),
            n = r.user && r.user.__isUserNotAvailableProxy === !0;
        if (this.userStorage) {
            !n && r.user && await hr(this.userStorage, this.storageKey + "-user", {
                user: r.user
            });
            const s = Object.assign({}, r);
            delete s.user;
            const o = $c(s);
            await hr(this.storage, this.storageKey, o)
        } else {
            const s = $c(r);
            await hr(this.storage, this.storageKey, s)
        }
    }
    async _removeSession() {
        this._debug("#_removeSession()"), await mt(this.storage, this.storageKey), await mt(this.storage, this.storageKey + "-code-verifier"), await mt(this.storage, this.storageKey + "-user"), this.userStorage && await mt(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null)
    }
    _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const e = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            e && Ue() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e)
        } catch (r) {
            console.error("removing visibilitychange callback failed", r)
        }
    }
    async _startAutoRefresh() {
        await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
        const e = setInterval(() => this._autoRefreshTokenTick(), dr);
        this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e), setTimeout(async () => {
            await this.initializePromise, await this._autoRefreshTokenTick()
        }, 0)
    }
    async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        const e = this.autoRefreshTicker;
        this.autoRefreshTicker = null, e && clearInterval(e)
    }
    async startAutoRefresh() {
        this._removeVisibilityChangedCallback(), await this._startAutoRefresh()
    }
    async stopAutoRefresh() {
        this._removeVisibilityChangedCallback(), await this._stopAutoRefresh()
    }
    async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async () => {
                try {
                    const e = Date.now();
                    try {
                        return await this._useSession(async r => {
                            const {
                                data: {
                                    session: n
                                }
                            } = r;
                            if (!n || !n.refresh_token || !n.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return
                            }
                            const s = Math.floor((n.expires_at * 1e3 - e) / dr);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${s} ticks, a tick lasts ${dr}ms, refresh threshold is ${ia} ticks`), s <= ia && await this._callRefreshToken(n.refresh_token)
                        })
                    } catch (r) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", r)
                    }
                } finally {
                    this._debug("#_autoRefreshTokenTick()", "end")
                }
            })
        } catch (e) {
            if (e.isAcquireTimeout || e instanceof _h) this._debug("auto refresh token tick lock not available");
            else throw e
        }
    }
    async _handleVisibilityChange() {
        if (this._debug("#_handleVisibilityChange()"), !Ue() || !(window != null && window.addEventListener)) return this.autoRefreshToken && this.startAutoRefresh(), !1;
        try {
            this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0)
        } catch (e) {
            console.error("_handleVisibilityChange", e)
        }
    }
    async _onVisibilityChanged(e) {
        const r = `#_onVisibilityChanged(${e})`;
        this._debug(r, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(-1, async () => {
            if (document.visibilityState !== "visible") {
                this._debug(r, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                return
            }
            await this._recoverAndRefresh()
        }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh()
    }
    async _getUrlForProvider(e, r, n) {
        const s = [`provider=${encodeURIComponent(r)}`];
        if (n != null && n.redirectTo && s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`), n != null && n.scopes && s.push(`scopes=${encodeURIComponent(n.scopes)}`), this.flowType === "pkce") {
            const [o, a] = await ar(this.storage, this.storageKey), l = new URLSearchParams({
                code_challenge: `${encodeURIComponent(o)}`,
                code_challenge_method: `${encodeURIComponent(a)}`
            });
            s.push(l.toString())
        }
        if (n != null && n.queryParams) {
            const o = new URLSearchParams(n.queryParams);
            s.push(o.toString())
        }
        return n != null && n.skipBrowserRedirect && s.push(`skip_http_redirect=${n.skipBrowserRedirect}`), `${e}?${s.join("&")}`
    }
    async _unenroll(e) {
        try {
            return await this._useSession(async r => {
                var n;
                const {
                    data: s,
                    error: o
                } = r;
                return o ? {
                    data: null,
                    error: o
                } : await I(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
                    headers: this.headers,
                    jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                })
            })
        } catch (r) {
            if (P(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async _enroll(e) {
        try {
            return await this._useSession(async r => {
                var n, s;
                const {
                    data: o,
                    error: a
                } = r;
                if (a) return {
                    data: null,
                    error: a
                };
                const l = Object.assign({
                        friendly_name: e.friendlyName,
                        factor_type: e.factorType
                    }, e.factorType === "phone" ? {
                        phone: e.phone
                    } : {
                        issuer: e.issuer
                    }),
                    {
                        data: c,
                        error: u
                    } = await I(this.fetch, "POST", `${this.url}/factors`, {
                        body: l,
                        headers: this.headers,
                        jwt: (n = o == null ? void 0 : o.session) === null || n === void 0 ? void 0 : n.access_token
                    });
                return u ? {
                    data: null,
                    error: u
                } : (e.factorType === "totp" && (!((s = c == null ? void 0 : c.totp) === null || s === void 0) && s.qr_code) && (c.totp.qr_code = `data:image/svg+xml;utf-8,${c.totp.qr_code}`), {
                    data: c,
                    error: null
                })
            })
        } catch (r) {
            if (P(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async _verify(e) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async r => {
                    var n;
                    const {
                        data: s,
                        error: o
                    } = r;
                    if (o) return {
                        data: null,
                        error: o
                    };
                    const {
                        data: a,
                        error: l
                    } = await I(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
                        body: {
                            code: e.code,
                            challenge_id: e.challengeId
                        },
                        headers: this.headers,
                        jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                    });
                    return l ? {
                        data: null,
                        error: l
                    } : (await this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1e3) + a.expires_in
                    }, a)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a), {
                        data: a,
                        error: l
                    })
                })
            } catch (r) {
                if (P(r)) return {
                    data: null,
                    error: r
                };
                throw r
            }
        })
    }
    async _challenge(e) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async r => {
                    var n;
                    const {
                        data: s,
                        error: o
                    } = r;
                    return o ? {
                        data: null,
                        error: o
                    } : await I(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
                        body: {
                            channel: e.channel
                        },
                        headers: this.headers,
                        jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                    })
                })
            } catch (r) {
                if (P(r)) return {
                    data: null,
                    error: r
                };
                throw r
            }
        })
    }
    async _challengeAndVerify(e) {
        const {
            data: r,
            error: n
        } = await this._challenge({
            factorId: e.factorId
        });
        return n ? {
            data: null,
            error: n
        } : await this._verify({
            factorId: e.factorId,
            challengeId: r.id,
            code: e.code
        })
    }
    async _listFactors() {
        const {
            data: {
                user: e
            },
            error: r
        } = await this.getUser();
        if (r) return {
            data: null,
            error: r
        };
        const n = (e == null ? void 0 : e.factors) || [],
            s = n.filter(a => a.factor_type === "totp" && a.status === "verified"),
            o = n.filter(a => a.factor_type === "phone" && a.status === "verified");
        return {
            data: {
                all: n,
                totp: s,
                phone: o
            },
            error: null
        }
    }
    async _getAuthenticatorAssuranceLevel() {
        return this._acquireLock(-1, async () => await this._useSession(async e => {
            var r, n;
            const {
                data: {
                    session: s
                },
                error: o
            } = e;
            if (o) return {
                data: null,
                error: o
            };
            if (!s) return {
                data: {
                    currentLevel: null,
                    nextLevel: null,
                    currentAuthenticationMethods: []
                },
                error: null
            };
            const {
                payload: a
            } = ro(s.access_token);
            let l = null;
            a.aal && (l = a.aal);
            let c = l;
            ((n = (r = s.user.factors) === null || r === void 0 ? void 0 : r.filter(f => f.status === "verified")) !== null && n !== void 0 ? n : []).length > 0 && (c = "aal2");
            const h = a.amr || [];
            return {
                data: {
                    currentLevel: l,
                    nextLevel: c,
                    currentAuthenticationMethods: h
                },
                error: null
            }
        }))
    }
    async fetchJwk(e, r = {
        keys: []
    }) {
        let n = r.keys.find(l => l.kid === e);
        if (n) return n;
        const s = Date.now();
        if (n = this.jwks.keys.find(l => l.kid === e), n && this.jwks_cached_at + I0 > s) return n;
        const {
            data: o,
            error: a
        } = await I(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
            headers: this.headers
        });
        if (a) throw a;
        return !o.keys || o.keys.length === 0 || (this.jwks = o, this.jwks_cached_at = s, n = o.keys.find(l => l.kid === e), !n) ? null : n
    }
    async getClaims(e, r = {}) {
        try {
            let n = e;
            if (!n) {
                const {
                    data: p,
                    error: y
                } = await this.getSession();
                if (y || !p.session) return {
                    data: null,
                    error: y
                };
                n = p.session.access_token
            }
            const {
                header: s,
                payload: o,
                signature: a,
                raw: {
                    header: l,
                    payload: c
                }
            } = ro(n);
            r != null && r.allowExpired || sg(o.exp);
            const u = !s.alg || s.alg.startsWith("HS") || !s.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(s.kid, r != null && r.keys ? {
                keys: r.keys
            } : r == null ? void 0 : r.jwks);
            if (!u) {
                const {
                    error: p
                } = await this.getUser(n);
                if (p) throw p;
                return {
                    data: {
                        claims: o,
                        header: s,
                        signature: a
                    },
                    error: null
                }
            }
            const h = ig(s.alg),
                f = await crypto.subtle.importKey("jwk", u, h, !0, ["verify"]);
            if (!await crypto.subtle.verify(h, f, a, H0(`${l}.${c}`))) throw new la("Invalid JWT signature");
            return {
                data: {
                    claims: o,
                    header: s,
                    signature: a
                },
                error: null
            }
        } catch (n) {
            if (P(n)) return {
                data: null,
                error: n
            };
            throw n
        }
    }
}
$n.nextInstanceID = 0;
const bg = $n;
class jg extends bg {
    constructor(e) {
        super(e)
    }
}
var Ng = function(t, e, r, n) {
    function s(o) {
        return o instanceof r ? o : new r(function(a) {
            a(o)
        })
    }
    return new(r || (r = Promise))(function(o, a) {
        function l(h) {
            try {
                u(n.next(h))
            } catch (f) {
                a(f)
            }
        }

        function c(h) {
            try {
                u(n.throw(h))
            } catch (f) {
                a(f)
            }
        }

        function u(h) {
            h.done ? o(h.value) : s(h.value).then(l, c)
        }
        u((n = n.apply(t, e || [])).next())
    })
};
class kg {
    constructor(e, r, n) {
        var s, o, a;
        this.supabaseUrl = e, this.supabaseKey = r;
        const l = F0(e);
        if (!r) throw new Error("supabaseKey is required.");
        this.realtimeUrl = new URL("realtime/v1", l), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", l), this.storageUrl = new URL("storage/v1", l), this.functionsUrl = new URL("functions/v1", l);
        const c = `sb-${l.hostname.split(".")[0]}-auth-token`,
            u = {
                db: v0,
                realtime: b0,
                auth: Object.assign(Object.assign({}, w0), {
                    storageKey: c
                }),
                global: y0
            },
            h = C0(n ?? {}, u);
        this.storageKey = (s = h.auth.storageKey) !== null && s !== void 0 ? s : "", this.headers = (o = h.global.headers) !== null && o !== void 0 ? o : {}, h.accessToken ? (this.accessToken = h.accessToken, this.auth = new Proxy({}, {
            get: (f, d) => {
                throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(d)} is not possible`)
            }
        })) : this.auth = this._initSupabaseAuthClient((a = h.auth) !== null && a !== void 0 ? a : {}, this.headers, h.global.fetch), this.fetch = _0(r, this._getAccessToken.bind(this), h.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, h.realtime)), this.rest = new Dp(new URL("rest/v1", l).href, {
            headers: this.headers,
            schema: h.db.schema,
            fetch: this.fetch
        }), this.storage = new p0(this.storageUrl.href, this.headers, this.fetch, n == null ? void 0 : n.storage), h.accessToken || this._listenForAuthEvents()
    }
    get functions() {
        return new xp(this.functionsUrl.href, {
            headers: this.headers,
            customFetch: this.fetch
        })
    }
    from(e) {
        return this.rest.from(e)
    }
    schema(e) {
        return this.rest.schema(e)
    }
    rpc(e, r = {}, n = {}) {
        return this.rest.rpc(e, r, n)
    }
    channel(e, r = {
        config: {}
    }) {
        return this.realtime.channel(e, r)
    }
    getChannels() {
        return this.realtime.getChannels()
    }
    removeChannel(e) {
        return this.realtime.removeChannel(e)
    }
    removeAllChannels() {
        return this.realtime.removeAllChannels()
    }
    _getAccessToken() {
        var e, r;
        return Ng(this, void 0, void 0, function*() {
            if (this.accessToken) return yield this.accessToken();
            const {
                data: n
            } = yield this.auth.getSession();
            return (r = (e = n.session) === null || e === void 0 ? void 0 : e.access_token) !== null && r !== void 0 ? r : this.supabaseKey
        })
    }
    _initSupabaseAuthClient({
        autoRefreshToken: e,
        persistSession: r,
        detectSessionInUrl: n,
        storage: s,
        userStorage: o,
        storageKey: a,
        flowType: l,
        lock: c,
        debug: u
    }, h, f) {
        const d = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new jg({
            url: this.authUrl.href,
            headers: Object.assign(Object.assign({}, d), h),
            storageKey: a,
            autoRefreshToken: e,
            persistSession: r,
            detectSessionInUrl: n,
            storage: s,
            userStorage: o,
            flowType: l,
            lock: c,
            debug: u,
            fetch: f,
            hasCustomAuthorizationHeader: Object.keys(this.headers).some(p => p.toLowerCase() === "authorization")
        })
    }
    _initRealtimeClient(e) {
        return new r0(this.realtimeUrl.href, Object.assign(Object.assign({}, e), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, e == null ? void 0 : e.params)
        }))
    }
    _listenForAuthEvents() {
        return this.auth.onAuthStateChange((r, n) => {
            this._handleTokenChanged(r, "CLIENT", n == null ? void 0 : n.access_token)
        })
    }
    _handleTokenChanged(e, r, n) {
        (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== n ? this.changedAccessToken = n : e === "SIGNED_OUT" && (this.realtime.setAuth(), r == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0)
    }
}
const _g = (t, e, r) => new kg(t, e, r);

function Sg() {
    if (typeof window < "u" || typeof process > "u") return !1;
    const t = process.version;
    if (t == null) return !1;
    const e = t.match(/^v(\d+)\./);
    return e ? parseInt(e[1], 10) <= 18 : !1
}
Sg() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const Eg = "https://dwhgsyuudxinbbhpcrhe.supabase.co",
    Cg = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3aGdzeXV1ZHhpbmJiaHBjcmhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4MTY0MjYsImV4cCI6MjA3OTM5MjQyNn0.O1rrtW24-2p5kjcuKmZWTeouXH3s0XnaySl6o4way9s",
    ve = _g(Eg, Cg),
    Sh = S.createContext(void 0);

function Fg({
    children: t
}) {
    const [e, r] = S.useState(null), [n, s] = S.useState(null), [o, a] = S.useState(!0);
    S.useEffect(() => {
        ve.auth.getSession().then(({
            data: {
                session: d
            }
        }) => {
            r((d == null ? void 0 : d.user) ?? null), d != null && d.user ? l(d.user.id) : a(!1)
        });
        const {
            data: {
                subscription: f
            }
        } = ve.auth.onAuthStateChange((d, p) => {
            (async () => (r((p == null ? void 0 : p.user) ?? null), p != null && p.user ? await l(p.user.id) : (s(null), a(!1))))()
        });
        return () => f.unsubscribe()
    }, []);
    const l = async f => {
        try {
            const {
                data: d,
                error: p
            } = await ve.from("profiles").select("*").eq("id", f).maybeSingle();
            if (p) throw p;
            s(d)
        } catch (d) {
            console.error("Error fetching profile:", d)
        } finally {
            a(!1)
        }
    }, c = async (f, d, p, y) => {
        try {
            const {
                error: v
            } = await ve.auth.signUp({
                email: f,
                password: d,
                options: {
                    data: {
                        name: p,
                        role: y
                    }
                }
            });
            if (v) throw v;
            return {
                error: null
            }
        } catch (v) {
            return {
                error: v
            }
        }
    }, u = async (f, d) => {
        try {
            const {
                error: p
            } = await ve.auth.signInWithPassword({
                email: f,
                password: d
            });
            if (p) throw p;
            return {
                error: null
            }
        } catch (p) {
            return {
                error: p
            }
        }
    }, h = async () => {
        await ve.auth.signOut()
    };
    return i.jsx(Sh.Provider, {
        value: {
            user: e,
            profile: n,
            loading: o,
            signUp: c,
            signIn: u,
            signOut: h
        },
        children: t
    })
}

function sr() {
    const t = S.useContext(Sh);
    if (t === void 0) throw new Error("useAuth must be used within an AuthProvider");
    return t
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Tg = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pg = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
    T = (t, e) => {
        const r = S.forwardRef(({
            color: n = "currentColor",
            size: s = 24,
            strokeWidth: o = 2,
            absoluteStrokeWidth: a,
            className: l = "",
            children: c,
            ...u
        }, h) => S.createElement("svg", {
            ref: h,
            ...Tg,
            width: s,
            height: s,
            stroke: n,
            strokeWidth: a ? Number(o) * 24 / Number(s) : o,
            className: ["lucide", `lucide-${Pg(t)}`, l].join(" "),
            ...u
        }, [...e.map(([f, d]) => S.createElement(f, d)), ...Array.isArray(c) ? c : [c]]));
        return r.displayName = `${t}`, r
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ll = T("AlertCircle", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "8",
        y2: "12",
        key: "1pkeuh"
    }],
    ["line", {
        x1: "12",
        x2: "12.01",
        y1: "16",
        y2: "16",
        key: "4dfq90"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Og = T("AlertTriangle", [
    ["path", {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
        key: "c3ski4"
    }],
    ["path", {
        d: "M12 9v4",
        key: "juzpu7"
    }],
    ["path", {
        d: "M12 17h.01",
        key: "p32p05"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ag = T("Archive", [
    ["rect", {
        width: "20",
        height: "5",
        x: "2",
        y: "3",
        rx: "1",
        key: "1wp1u1"
    }],
    ["path", {
        d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
        key: "1s80jp"
    }],
    ["path", {
        d: "M10 12h4",
        key: "a56b0p"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ce = T("ArrowLeft", [
    ["path", {
        d: "m12 19-7-7 7-7",
        key: "1l729n"
    }],
    ["path", {
        d: "M19 12H5",
        key: "x3x0zl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ig = T("BarChart3", [
    ["path", {
        d: "M3 3v18h18",
        key: "1s2lah"
    }],
    ["path", {
        d: "M18 17V9",
        key: "2bz60n"
    }],
    ["path", {
        d: "M13 17V5",
        key: "1frdt8"
    }],
    ["path", {
        d: "M8 17v-3",
        key: "17ska0"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eh = T("BookMarked", [
    ["path", {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",
        key: "t4utmx"
    }],
    ["polyline", {
        points: "10 2 10 10 13 7 16 10 16 2",
        key: "13o6vz"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cl = T("BookOpen", [
    ["path", {
        d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
        key: "vv98re"
    }],
    ["path", {
        d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
        key: "1cyq3y"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ul = T("Brain", [
    ["path", {
        d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
        key: "l5xja"
    }],
    ["path", {
        d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
        key: "ep3f8r"
    }],
    ["path", {
        d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
        key: "1p4c4q"
    }],
    ["path", {
        d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
        key: "tmeiqw"
    }],
    ["path", {
        d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
        key: "105sqy"
    }],
    ["path", {
        d: "M3.477 10.896a4 4 0 0 1 .585-.396",
        key: "ql3yin"
    }],
    ["path", {
        d: "M19.938 10.5a4 4 0 0 1 .585.396",
        key: "1qfode"
    }],
    ["path", {
        d: "M6 18a4 4 0 0 1-1.967-.516",
        key: "2e4loj"
    }],
    ["path", {
        d: "M19.967 17.484A4 4 0 0 1 18 18",
        key: "159ez6"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rg = T("Briefcase", [
    ["rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "7",
        rx: "2",
        ry: "2",
        key: "eto64e"
    }],
    ["path", {
        d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
        key: "zwj3tp"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bc = T("Building2", [
    ["path", {
        d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
        key: "1b4qmf"
    }],
    ["path", {
        d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
        key: "i71pzd"
    }],
    ["path", {
        d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
        key: "10jefs"
    }],
    ["path", {
        d: "M10 6h4",
        key: "1itunk"
    }],
    ["path", {
        d: "M10 10h4",
        key: "tcdvrf"
    }],
    ["path", {
        d: "M10 14h4",
        key: "kelpxr"
    }],
    ["path", {
        d: "M10 18h4",
        key: "1ulq68"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _r = T("Calendar", [
    ["path", {
        d: "M8 2v4",
        key: "1cmpym"
    }],
    ["path", {
        d: "M16 2v4",
        key: "4m81vk"
    }],
    ["rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2",
        key: "1hopcy"
    }],
    ["path", {
        d: "M3 10h18",
        key: "8toen8"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ch = T("CheckCircle", [
    ["path", {
        d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
        key: "g774vq"
    }],
    ["path", {
        d: "m9 11 3 3L22 4",
        key: "1pflzl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fh = T("Check", [
    ["path", {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = T("Clock", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["polyline", {
        points: "12 6 12 12 16 14",
        key: "68esgv"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lg = T("Cpu", [
    ["rect", {
        x: "4",
        y: "4",
        width: "16",
        height: "16",
        rx: "2",
        key: "1vbyd7"
    }],
    ["rect", {
        x: "9",
        y: "9",
        width: "6",
        height: "6",
        key: "o3kz5p"
    }],
    ["path", {
        d: "M15 2v2",
        key: "13l42r"
    }],
    ["path", {
        d: "M15 20v2",
        key: "15mkzm"
    }],
    ["path", {
        d: "M2 15h2",
        key: "1gxd5l"
    }],
    ["path", {
        d: "M2 9h2",
        key: "1bbxkp"
    }],
    ["path", {
        d: "M20 15h2",
        key: "19e6y8"
    }],
    ["path", {
        d: "M20 9h2",
        key: "19tzq7"
    }],
    ["path", {
        d: "M9 2v2",
        key: "165o2o"
    }],
    ["path", {
        d: "M9 20v2",
        key: "i2bqo8"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wc = T("CreditCard", [
    ["rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "5",
        rx: "2",
        key: "ynyp8z"
    }],
    ["line", {
        x1: "2",
        x2: "22",
        y1: "10",
        y2: "10",
        key: "1b3vmo"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dl = T("Database", [
    ["ellipse", {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3",
        key: "msslwz"
    }],
    ["path", {
        d: "M3 5V19A9 3 0 0 0 21 19V5",
        key: "1wlel7"
    }],
    ["path", {
        d: "M3 12A9 3 0 0 0 21 12",
        key: "mv7ke4"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $g = T("DollarSign", [
    ["line", {
        x1: "12",
        x2: "12",
        y1: "2",
        y2: "22",
        key: "7eqyqh"
    }],
    ["path", {
        d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
        key: "1b0p4s"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mg = T("FileText", [
    ["path", {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7"
    }],
    ["path", {
        d: "M14 2v4a2 2 0 0 0 2 2h4",
        key: "tnqrlb"
    }],
    ["path", {
        d: "M10 9H8",
        key: "b1mrlr"
    }],
    ["path", {
        d: "M16 13H8",
        key: "t4e002"
    }],
    ["path", {
        d: "M16 17H8",
        key: "z1uh3a"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Th = T("FolderOpen", [
    ["path", {
        d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
        key: "usdka0"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dg = T("GraduationCap", [
    ["path", {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0"
    }],
    ["path", {
        d: "M22 10v6",
        key: "1lu8f3"
    }],
    ["path", {
        d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
        key: "1r8lef"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ug = T("Home", [
    ["path", {
        d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "y5dka4"
    }],
    ["polyline", {
        points: "9 22 9 12 15 12 15 22",
        key: "e2us08"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zg = T("Lightbulb", [
    ["path", {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb"
    }],
    ["path", {
        d: "M9 18h6",
        key: "x1upvd"
    }],
    ["path", {
        d: "M10 22h4",
        key: "ceow96"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bg = T("Lock", [
    ["rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1"
    }],
    ["path", {
        d: "M7 11V7a5 5 0 0 1 10 0v4",
        key: "fwvmzm"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ph = T("LogOut", [
    ["path", {
        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
        key: "1uf3rs"
    }],
    ["polyline", {
        points: "16 17 21 12 16 7",
        key: "1gabdz"
    }],
    ["line", {
        x1: "21",
        x2: "9",
        y1: "12",
        y2: "12",
        key: "1uyos4"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hl = T("Mail", [
    ["rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2",
        key: "18n3k1"
    }],
    ["path", {
        d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
        key: "1ocrg3"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wg = T("MapPin", [
    ["path", {
        d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",
        key: "2oe9fu"
    }],
    ["circle", {
        cx: "12",
        cy: "10",
        r: "3",
        key: "ilqhr7"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hg = T("Menu", [
    ["line", {
        x1: "4",
        x2: "20",
        y1: "12",
        y2: "12",
        key: "1e0a9i"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "6",
        y2: "6",
        key: "1owob3"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "18",
        y2: "18",
        key: "yk5zj1"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vg = T("Network", [
    ["rect", {
        x: "16",
        y: "16",
        width: "6",
        height: "6",
        rx: "1",
        key: "4q2zg0"
    }],
    ["rect", {
        x: "2",
        y: "16",
        width: "6",
        height: "6",
        rx: "1",
        key: "8cvhb9"
    }],
    ["rect", {
        x: "9",
        y: "2",
        width: "6",
        height: "6",
        rx: "1",
        key: "1egb70"
    }],
    ["path", {
        d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
        key: "1jsf9p"
    }],
    ["path", {
        d: "M12 12V8",
        key: "2874zd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qg = T("Phone", [
    ["path", {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oh = T("Play", [
    ["polygon", {
        points: "5 3 19 12 5 21 5 3",
        key: "191637"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ah = T("Search", [
    ["circle", {
        cx: "11",
        cy: "11",
        r: "8",
        key: "4ej97u"
    }],
    ["path", {
        d: "m21 21-4.3-4.3",
        key: "1qie3q"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kg = T("Send", [
    ["path", {
        d: "m22 2-7 20-4-9-9-4Z",
        key: "1q3vgg"
    }],
    ["path", {
        d: "M22 2 11 13",
        key: "nzbqef"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ih = T("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gg = T("ShoppingCart", [
    ["circle", {
        cx: "8",
        cy: "21",
        r: "1",
        key: "jimo8o"
    }],
    ["circle", {
        cx: "19",
        cy: "21",
        r: "1",
        key: "13723u"
    }],
    ["path", {
        d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
        key: "9zh506"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jg = T("Sparkles", [
    ["path", {
        d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
        key: "17u4zn"
    }],
    ["path", {
        d: "M5 3v4",
        key: "bklmnn"
    }],
    ["path", {
        d: "M19 17v4",
        key: "iiml17"
    }],
    ["path", {
        d: "M3 5h4",
        key: "nem4j1"
    }],
    ["path", {
        d: "M17 19h4",
        key: "lbex7p"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rh = T("Target", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "6",
        key: "1vlfrh"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "2",
        key: "1c9p78"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fl = T("TrendingDown", [
    ["polyline", {
        points: "22 17 13.5 8.5 8.5 13.5 2 7",
        key: "1r2t7k"
    }],
    ["polyline", {
        points: "16 17 22 17 22 11",
        key: "11uiuu"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qg = T("UserMinus", [
    ["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }],
    ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }],
    ["line", {
        x1: "22",
        x2: "16",
        y1: "11",
        y2: "11",
        key: "1shjgl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lh = T("User", [
    ["path", {
        d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
        key: "975kel"
    }],
    ["circle", {
        cx: "12",
        cy: "7",
        r: "4",
        key: "17ys0d"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bi = T("Users", [
    ["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }],
    ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }],
    ["path", {
        d: "M22 21v-2a4 4 0 0 0-3-3.87",
        key: "kshegd"
    }],
    ["path", {
        d: "M16 3.13a4 4 0 0 1 0 7.75",
        key: "1da9ce"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = T("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ml = T("Zap", [
    ["polygon", {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
        key: "45s27k"
    }]
]);

function Yg({
    onAuthClick: t
}) {
    const [e, r] = S.useState(!1), n = s => {
        const o = document.getElementById(s);
        o && (o.scrollIntoView({
            behavior: "smooth"
        }), r(!1))
    };
    return i.jsxs("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200",
        children: [i.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: i.jsxs("div", {
                className: "flex items-center justify-between h-16",
                children: [i.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [i.jsxs("div", {
                        className: "relative",
                        children: [i.jsx(ul, {
                            className: "w-8 h-8 text-[#0036FF]"
                        }), i.jsx("div", {
                            className: "absolute inset-0 bg-[#0036FF] blur-lg opacity-30 animate-pulse"
                        })]
                    }), i.jsx("span", {
                        className: "text-xl font-bold bg-gradient-to-r from-[#0036FF] to-blue-600 bg-clip-text text-transparent",
                        children: "CorpANIMUS"
                    })]
                }), i.jsxs("nav", {
                    className: "hidden md:flex items-center space-x-8",
                    children: [i.jsx("button", {
                        onClick: () => n("hero"),
                        className: "text-gray-700 hover:text-[#0036FF] transition-colors",
                        children: "Home"
                    }), i.jsx("button", {
                        onClick: () => n("features"),
                        className: "text-gray-700 hover:text-[#0036FF] transition-colors",
                        children: "Features"
                    }), i.jsx("button", {
                        onClick: () => n("pricing"),
                        className: "text-gray-700 hover:text-[#0036FF] transition-colors",
                        children: "Pricing"
                    }), i.jsx("button", {
                        onClick: () => t("login"),
                        className: "text-gray-700 hover:text-[#0036FF] transition-colors",
                        children: "Login"
                    }), i.jsx("button", {
                        onClick: () => t("signup"),
                        className: "px-6 py-2 bg-gradient-to-r from-[#0036FF] to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300",
                        children: "Get Started"
                    })]
                }), i.jsx("button", {
                    onClick: () => r(!e),
                    className: "md:hidden p-2 text-gray-700",
                    children: e ? i.jsx(st, {
                        className: "w-6 h-6"
                    }) : i.jsx(Hg, {
                        className: "w-6 h-6"
                    })
                })]
            })
        }), e && i.jsx("div", {
            className: "md:hidden bg-white border-t border-gray-200",
            children: i.jsxs("div", {
                className: "px-4 py-4 space-y-3",
                children: [i.jsx("button", {
                    onClick: () => n("hero"),
                    className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg",
                    children: "Home"
                }), i.jsx("button", {
                    onClick: () => n("features"),
                    className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg",
                    children: "Features"
                }), i.jsx("button", {
                    onClick: () => n("pricing"),
                    className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg",
                    children: "Pricing"
                }), i.jsx("button", {
                    onClick: () => t("login"),
                    className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg",
                    children: "Login"
                }), i.jsx("button", {
                    onClick: () => t("signup"),
                    className: "block w-full px-6 py-2 bg-gradient-to-r from-[#0036FF] to-blue-600 text-white rounded-full text-center",
                    children: "Get Started"
                })]
            })
        })]
    })
}

function Xg() {
    const t = () => {
        const e = document.getElementById("what-is");
        e && e.scrollIntoView({
            behavior: "smooth"
        })
    };
    return i.jsxs("section", {
        id: "hero",
        className: "relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white",
        children: [i.jsx("div", {
            className: "absolute inset-0 bg-grid-pattern opacity-5"
        }), i.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: i.jsxs("div", {
                className: "grid md:grid-cols-2 gap-12 items-center",
                children: [i.jsxs("div", {
                    className: "space-y-8 animate-fade-in",
                    children: [i.jsx("div", {
                        className: "inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm text-[#0036FF] font-medium",
                        children: "Next-Gen Corporate Intelligence"
                    }), i.jsxs("h1", {
                        className: "text-5xl md:text-6xl font-bold leading-tight",
                        children: ["Preserve Corporate Knowledge", " ", i.jsx("span", {
                            className: "bg-gradient-to-r from-[#0036FF] to-blue-600 bg-clip-text text-transparent",
                            children: "Forever"
                        })]
                    }), i.jsx("p", {
                        className: "text-xl text-gray-600 leading-relaxed",
                        children: "CorpANIMUS captures workflows, decisions, and expertise—ensuring knowledge never leaves when employees do."
                    }), i.jsx("div", {
                        className: "flex flex-col sm:flex-row gap-4",
                        children: i.jsxs("button", {
                            onClick: t,
                            className: "group px-8 py-4 bg-gradient-to-r from-[#0036FF] to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center space-x-2",
                            children: [i.jsx(Oh, {
                                className: "w-5 h-5"
                            }), i.jsx("span", {
                                children: "Learn More"
                            })]
                        })
                    })]
                }), i.jsxs("div", {
                    className: "relative",
                    children: [i.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-[#0036FF] to-blue-600 rounded-3xl blur-3xl opacity-20 animate-pulse"
                    }), i.jsx("div", {
                        className: "relative bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100 shadow-xl",
                        children: i.jsx(Zg, {})
                    })]
                })]
            })
        })]
    })
}

function Zg() {
    return i.jsxs("div", {
        className: "relative w-full h-80 flex items-center justify-center",
        children: [i.jsx("div", {
            className: "absolute inset-0",
            children: i.jsxs("svg", {
                className: "w-full h-full",
                viewBox: "0 0 400 320",
                children: [i.jsx("defs", {
                    children: i.jsxs("linearGradient", {
                        id: "grad1",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "0%",
                        children: [i.jsx("stop", {
                            offset: "0%",
                            style: {
                                stopColor: "#0036FF",
                                stopOpacity: .3
                            }
                        }), i.jsx("stop", {
                            offset: "100%",
                            style: {
                                stopColor: "#0ea5e9",
                                stopOpacity: .3
                            }
                        })]
                    })
                }), i.jsx("line", {
                    x1: "80",
                    y1: "80",
                    x2: "200",
                    y2: "160",
                    stroke: "url(#grad1)",
                    strokeWidth: "2",
                    className: "animate-pulse"
                }), i.jsx("line", {
                    x1: "320",
                    y1: "80",
                    x2: "200",
                    y2: "160",
                    stroke: "url(#grad1)",
                    strokeWidth: "2",
                    className: "animate-pulse",
                    style: {
                        animationDelay: "0.2s"
                    }
                }), i.jsx("line", {
                    x1: "80",
                    y1: "240",
                    x2: "200",
                    y2: "160",
                    stroke: "url(#grad1)",
                    strokeWidth: "2",
                    className: "animate-pulse",
                    style: {
                        animationDelay: "0.4s"
                    }
                }), i.jsx("line", {
                    x1: "320",
                    y1: "240",
                    x2: "200",
                    y2: "160",
                    stroke: "url(#grad1)",
                    strokeWidth: "2",
                    className: "animate-pulse",
                    style: {
                        animationDelay: "0.6s"
                    }
                }), i.jsx("circle", {
                    cx: "80",
                    cy: "80",
                    r: "12",
                    fill: "#0036FF",
                    className: "animate-pulse"
                }), i.jsx("circle", {
                    cx: "320",
                    cy: "80",
                    r: "12",
                    fill: "#0036FF",
                    className: "animate-pulse",
                    style: {
                        animationDelay: "0.2s"
                    }
                }), i.jsx("circle", {
                    cx: "80",
                    cy: "240",
                    r: "12",
                    fill: "#0036FF",
                    className: "animate-pulse",
                    style: {
                        animationDelay: "0.4s"
                    }
                }), i.jsx("circle", {
                    cx: "320",
                    cy: "240",
                    r: "12",
                    fill: "#0036FF",
                    className: "animate-pulse",
                    style: {
                        animationDelay: "0.6s"
                    }
                }), i.jsx("circle", {
                    cx: "200",
                    cy: "160",
                    r: "40",
                    fill: "none",
                    stroke: "#0036FF",
                    strokeWidth: "3",
                    className: "animate-spin-slow"
                }), i.jsx("circle", {
                    cx: "200",
                    cy: "160",
                    r: "30",
                    fill: "#0036FF",
                    opacity: "0.2",
                    className: "animate-pulse"
                })]
            })
        }), i.jsxs("div", {
            className: "relative z-10 text-center",
            children: [i.jsx("div", {
                className: "w-24 h-24 mx-auto bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-2xl flex items-center justify-center shadow-xl",
                children: i.jsx("div", {
                    className: "text-4xl text-white",
                    children: "🧠"
                })
            }), i.jsx("div", {
                className: "mt-4 text-sm font-semibold text-gray-700",
                children: "AI Neural Core"
            })]
        })]
    })
}

function ex() {
    return i.jsx("section", {
        id: "what-is",
        className: "py-20 bg-white",
        children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("div", {
                className: "text-center mb-16",
                children: [i.jsxs("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6",
                    children: ["What is", " ", i.jsx("span", {
                        className: "bg-gradient-to-r from-[#0036FF] to-blue-600 bg-clip-text text-transparent",
                        children: "CorpANIMUS"
                    }), "?"]
                }), i.jsx("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",
                    children: "CorpANIMUS is an intelligent corporate knowledge preservation system that acts as your organization's digital memory. It continuously captures, organizes, and retrieves critical business knowledge, workflows, and decision-making processes."
                })]
            }), i.jsxs("div", {
                className: "grid md:grid-cols-3 gap-8",
                children: [i.jsxs("div", {
                    className: "group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl hover:border-[#0036FF] transition-all duration-300",
                    children: [i.jsxs("div", {
                        className: "relative mb-6",
                        children: [i.jsx("div", {
                            className: "absolute inset-0 bg-[#0036FF] blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
                        }), i.jsx("div", {
                            className: "relative w-16 h-16 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-xl flex items-center justify-center",
                            children: i.jsx(ul, {
                                className: "w-8 h-8 text-white"
                            })
                        })]
                    }), i.jsx("h3", {
                        className: "text-xl font-bold mb-3 text-gray-900",
                        children: "Living Memory"
                    }), i.jsx("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: "Unlike static documentation, CorpANIMUS creates a living, breathing repository that evolves with your organization's knowledge base."
                    })]
                }), i.jsxs("div", {
                    className: "group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl hover:border-[#0036FF] transition-all duration-300",
                    children: [i.jsxs("div", {
                        className: "relative mb-6",
                        children: [i.jsx("div", {
                            className: "absolute inset-0 bg-[#0036FF] blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
                        }), i.jsx("div", {
                            className: "relative w-16 h-16 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-xl flex items-center justify-center",
                            children: i.jsx(dl, {
                                className: "w-8 h-8 text-white"
                            })
                        })]
                    }), i.jsx("h3", {
                        className: "text-xl font-bold mb-3 text-gray-900",
                        children: "Automatic Capture"
                    }), i.jsx("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: "Seamlessly records workflows, decisions, and expertise through natural work processes without disrupting employee productivity."
                    })]
                }), i.jsxs("div", {
                    className: "group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl hover:border-[#0036FF] transition-all duration-300",
                    children: [i.jsxs("div", {
                        className: "relative mb-6",
                        children: [i.jsx("div", {
                            className: "absolute inset-0 bg-[#0036FF] blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
                        }), i.jsx("div", {
                            className: "relative w-16 h-16 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-xl flex items-center justify-center",
                            children: i.jsx(Vg, {
                                className: "w-8 h-8 text-white"
                            })
                        })]
                    }), i.jsx("h3", {
                        className: "text-xl font-bold mb-3 text-gray-900",
                        children: "Intelligent Retrieval"
                    }), i.jsx("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: "AI-powered search and recommendation system that surfaces the right knowledge at the right time to the right people."
                    })]
                })]
            })]
        })
    })
}

function tx() {
    return i.jsx("section", {
        className: "py-20 bg-gradient-to-b from-white to-gray-50",
        children: i.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: i.jsx("div", {
                className: "bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden",
                children: i.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-0",
                    children: [i.jsx("div", {
                        className: "p-12 bg-gradient-to-br from-red-50 to-orange-50 flex items-center",
                        children: i.jsxs("div", {
                            children: [i.jsxs("div", {
                                className: "inline-flex items-center space-x-2 px-4 py-2 bg-red-100 border border-red-200 rounded-full text-sm text-red-700 font-medium mb-6",
                                children: [i.jsx(Og, {
                                    className: "w-4 h-4"
                                }), i.jsx("span", {
                                    children: "Real Scenario"
                                })]
                            }), i.jsx("h2", {
                                className: "text-3xl md:text-4xl font-bold mb-6 text-gray-900",
                                children: "The Knowledge Crisis"
                            }), i.jsx("p", {
                                className: "text-lg text-gray-700 leading-relaxed",
                                children: "A mid-sized tech company with 200 employees faces significant employee turnover. Senior developers, product managers, and domain experts leave, taking years of accumulated knowledge with them."
                            })]
                        })
                    }), i.jsx("div", {
                        className: "p-12 flex items-center",
                        children: i.jsxs("div", {
                            className: "space-y-6",
                            children: [i.jsxs("div", {
                                className: "flex items-start space-x-4",
                                children: [i.jsx("div", {
                                    className: "flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold",
                                    children: "1"
                                }), i.jsxs("div", {
                                    children: [i.jsx("h4", {
                                        className: "font-semibold text-gray-900 mb-1",
                                        children: "Knowledge Loss"
                                    }), i.jsx("p", {
                                        className: "text-gray-600",
                                        children: "Critical workflows and decision contexts vanish overnight"
                                    })]
                                })]
                            }), i.jsxs("div", {
                                className: "flex items-start space-x-4",
                                children: [i.jsx("div", {
                                    className: "flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold",
                                    children: "2"
                                }), i.jsxs("div", {
                                    children: [i.jsx("h4", {
                                        className: "font-semibold text-gray-900 mb-1",
                                        children: "Constant Rework"
                                    }), i.jsx("p", {
                                        className: "text-gray-600",
                                        children: "Teams repeatedly solve the same problems from scratch"
                                    })]
                                })]
                            }), i.jsxs("div", {
                                className: "flex items-start space-x-4",
                                children: [i.jsx("div", {
                                    className: "flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold",
                                    children: "3"
                                }), i.jsxs("div", {
                                    children: [i.jsx("h4", {
                                        className: "font-semibold text-gray-900 mb-1",
                                        children: "Slow Onboarding"
                                    }), i.jsx("p", {
                                        className: "text-gray-600",
                                        children: "New hires take 12-24 months to reach full productivity"
                                    })]
                                })]
                            }), i.jsxs("div", {
                                className: "flex items-start space-x-4",
                                children: [i.jsx("div", {
                                    className: "flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold",
                                    children: "4"
                                }), i.jsxs("div", {
                                    children: [i.jsx("h4", {
                                        className: "font-semibold text-gray-900 mb-1",
                                        children: "Manager Overload"
                                    }), i.jsx("p", {
                                        className: "text-gray-600",
                                        children: "Leadership spends excessive time on basic training and guidance"
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            })
        })
    })
}

function rx() {
    return i.jsx("section", {
        className: "py-20 bg-white",
        children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("div", {
                className: "text-center mb-16",
                children: [i.jsxs("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6",
                    children: ["The ", i.jsx("span", {
                        className: "text-red-600",
                        children: "Problem"
                    }), " Without CorpANIMUS"]
                }), i.jsx("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Organizations face critical challenges when institutional knowledge isn't properly preserved"
                })]
            }), i.jsxs("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: [i.jsxs("div", {
                    className: "group p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg",
                    children: [i.jsxs("div", {
                        className: "flex items-center space-x-3 mb-4",
                        children: [i.jsx("div", {
                            className: "w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center",
                            children: i.jsx(Qg, {
                                className: "w-6 h-6 text-red-600"
                            })
                        }), i.jsx(st, {
                            className: "w-5 h-5 text-red-500"
                        })]
                    }), i.jsx("h3", {
                        className: "text-xl font-bold mb-3 text-gray-900",
                        children: "Losing Expert Knowledge"
                    }), i.jsx("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: "When senior employees leave, decades of accumulated expertise and institutional wisdom vanish permanently."
                    })]
                }), i.jsxs("div", {
                    className: "group p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg",
                    children: [i.jsxs("div", {
                        className: "flex items-center space-x-3 mb-4",
                        children: [i.jsx("div", {
                            className: "w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center",
                            children: i.jsx(Zs, {
                                className: "w-6 h-6 text-red-600"
                            })
                        }), i.jsx(st, {
                            className: "w-5 h-5 text-red-500"
                        })]
                    }), i.jsx("h3", {
                        className: "text-xl font-bold mb-3 text-gray-900",
                        children: "12-24 Month Productivity Gap"
                    }), i.jsx("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: "Fresh hires take years to become fully productive, costing the organization in time and resources."
                    })]
                }), i.jsxs("div", {
                    className: "group p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg",
                    children: [i.jsxs("div", {
                        className: "flex items-center space-x-3 mb-4",
                        children: [i.jsx("div", {
                            className: "w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center",
                            children: i.jsx(bi, {
                                className: "w-6 h-6 text-red-600"
                            })
                        }), i.jsx(st, {
                            className: "w-5 h-5 text-red-500"
                        })]
                    }), i.jsx("h3", {
                        className: "text-xl font-bold mb-3 text-gray-900",
                        children: "Manager Time Waste"
                    }), i.jsx("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: "Leadership spends countless hours training new employees on the same topics repeatedly instead of strategic work."
                    })]
                }), i.jsxs("div", {
                    className: "group p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg",
                    children: [i.jsxs("div", {
                        className: "flex items-center space-x-3 mb-4",
                        children: [i.jsx("div", {
                            className: "w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center",
                            children: i.jsx(ll, {
                                className: "w-6 h-6 text-red-600"
                            })
                        }), i.jsx(st, {
                            className: "w-5 h-5 text-red-500"
                        })]
                    }), i.jsx("h3", {
                        className: "text-xl font-bold mb-3 text-gray-900",
                        children: "Increased Errors"
                    }), i.jsx("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: "Without access to past learnings and documented mistakes, teams repeat the same errors over and over."
                    })]
                }), i.jsxs("div", {
                    className: "group p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg",
                    children: [i.jsxs("div", {
                        className: "flex items-center space-x-3 mb-4",
                        children: [i.jsx("div", {
                            className: "w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center",
                            children: i.jsx(fl, {
                                className: "w-6 h-6 text-red-600"
                            })
                        }), i.jsx(st, {
                            className: "w-5 h-5 text-red-500"
                        })]
                    }), i.jsx("h3", {
                        className: "text-xl font-bold mb-3 text-gray-900",
                        children: "Knowledge Disappears Forever"
                    }), i.jsx("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: "Critical insights about why decisions were made and how systems work are lost when key people exit."
                    })]
                }), i.jsxs("div", {
                    className: "group p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg",
                    children: [i.jsxs("div", {
                        className: "flex items-center space-x-3 mb-4",
                        children: [i.jsx("div", {
                            className: "w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center",
                            children: i.jsx("div", {
                                className: "text-2xl",
                                children: "💸"
                            })
                        }), i.jsx(st, {
                            className: "w-5 h-5 text-red-500"
                        })]
                    }), i.jsx("h3", {
                        className: "text-xl font-bold mb-3 text-gray-900",
                        children: "Rising Costs"
                    }), i.jsx("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: "Constant retraining, repeated mistakes, and prolonged onboarding drive up operational costs significantly."
                    })]
                })]
            })]
        })
    })
}

function nx() {
    return i.jsx("section", {
        className: "py-20 bg-gradient-to-b from-gray-50 to-white",
        children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("div", {
                className: "text-center mb-16",
                children: [i.jsxs("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6",
                    children: ["How", " ", i.jsx("span", {
                        className: "bg-gradient-to-r from-[#0036FF] to-blue-600 bg-clip-text text-transparent",
                        children: "CorpANIMUS"
                    }), " ", "Solves This"]
                }), i.jsx("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "A comprehensive three-pillar approach to preserving and leveraging corporate knowledge"
                })]
            }), i.jsxs("div", {
                className: "space-y-12",
                children: [i.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-8 items-center",
                    children: [i.jsx("div", {
                        className: "order-2 md:order-1",
                        children: i.jsxs("div", {
                            className: "bg-white p-8 rounded-2xl border border-gray-200 shadow-lg",
                            children: [i.jsxs("div", {
                                className: "flex items-center space-x-4 mb-4",
                                children: [i.jsx("div", {
                                    className: "w-12 h-12 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-xl flex items-center justify-center text-white font-bold",
                                    children: "1"
                                }), i.jsx("div", {
                                    className: "w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center",
                                    children: i.jsx(dl, {
                                        className: "w-6 h-6 text-[#0036FF]"
                                    })
                                })]
                            }), i.jsx("h3", {
                                className: "text-2xl font-bold mb-4 text-gray-900",
                                children: "Knowledge Capture"
                            }), i.jsx("p", {
                                className: "text-gray-600 leading-relaxed mb-4",
                                children: "Automatically records and indexes workflows, decisions, code reviews, meeting discussions, and expert problem-solving processes."
                            }), i.jsxs("ul", {
                                className: "space-y-2",
                                children: [i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Real-time workflow documentation"
                                    })]
                                }), i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Context-aware decision logging"
                                    })]
                                }), i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Expert expertise mapping"
                                    })]
                                })]
                            })]
                        })
                    }), i.jsx("div", {
                        className: "order-1 md:order-2 flex justify-center",
                        children: i.jsxs("div", {
                            className: "w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center relative",
                            children: [i.jsx("div", {
                                className: "absolute inset-0 bg-[#0036FF] rounded-3xl blur-2xl opacity-10"
                            }), i.jsx("div", {
                                className: "text-8xl relative z-10",
                                children: "📚"
                            })]
                        })
                    })]
                }), i.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-8 items-center",
                    children: [i.jsx("div", {
                        className: "flex justify-center",
                        children: i.jsxs("div", {
                            className: "w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center relative",
                            children: [i.jsx("div", {
                                className: "absolute inset-0 bg-[#0036FF] rounded-3xl blur-2xl opacity-10"
                            }), i.jsx("div", {
                                className: "text-8xl relative z-10",
                                children: "🗄️"
                            })]
                        })
                    }), i.jsx("div", {
                        children: i.jsxs("div", {
                            className: "bg-white p-8 rounded-2xl border border-gray-200 shadow-lg",
                            children: [i.jsxs("div", {
                                className: "flex items-center space-x-4 mb-4",
                                children: [i.jsx("div", {
                                    className: "w-12 h-12 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-xl flex items-center justify-center text-white font-bold",
                                    children: "2"
                                }), i.jsx("div", {
                                    className: "w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center",
                                    children: i.jsx(ul, {
                                        className: "w-6 h-6 text-[#0036FF]"
                                    })
                                })]
                            }), i.jsx("h3", {
                                className: "text-2xl font-bold mb-4 text-gray-900",
                                children: "Centralized Memory Bank"
                            }), i.jsx("p", {
                                className: "text-gray-600 leading-relaxed mb-4",
                                children: "Creates a searchable, interconnected repository that serves as your company's collective intelligence system."
                            }), i.jsxs("ul", {
                                className: "space-y-2",
                                children: [i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "AI-powered semantic search"
                                    })]
                                }), i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Cross-project knowledge linking"
                                    })]
                                }), i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Historical context preservation"
                                    })]
                                })]
                            })]
                        })
                    })]
                }), i.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-8 items-center",
                    children: [i.jsx("div", {
                        className: "order-2 md:order-1",
                        children: i.jsxs("div", {
                            className: "bg-white p-8 rounded-2xl border border-gray-200 shadow-lg",
                            children: [i.jsxs("div", {
                                className: "flex items-center space-x-4 mb-4",
                                children: [i.jsx("div", {
                                    className: "w-12 h-12 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-xl flex items-center justify-center text-white font-bold",
                                    children: "3"
                                }), i.jsx("div", {
                                    className: "w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center",
                                    children: i.jsx(Rh, {
                                        className: "w-6 h-6 text-[#0036FF]"
                                    })
                                })]
                            }), i.jsx("h3", {
                                className: "text-2xl font-bold mb-4 text-gray-900",
                                children: "Decision Support & Refinement"
                            }), i.jsx("p", {
                                className: "text-gray-600 leading-relaxed mb-4",
                                children: "Proactively prevents mistakes by surfacing relevant past decisions, lessons learned, and best practices at the right moment."
                            }), i.jsxs("ul", {
                                className: "space-y-2",
                                children: [i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Contextual recommendation engine"
                                    })]
                                }), i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Mistake prevention alerts"
                                    })]
                                }), i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Best practice suggestions"
                                    })]
                                })]
                            })]
                        })
                    }), i.jsx("div", {
                        className: "order-1 md:order-2 flex justify-center",
                        children: i.jsxs("div", {
                            className: "w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center relative",
                            children: [i.jsx("div", {
                                className: "absolute inset-0 bg-[#0036FF] rounded-3xl blur-2xl opacity-10"
                            }), i.jsx("div", {
                                className: "text-8xl relative z-10",
                                children: "🎯"
                            })]
                        })
                    })]
                })]
            })]
        })
    })
}

function sx() {
    return i.jsx("section", {
        className: "py-20 bg-white",
        children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("div", {
                className: "text-center mb-16",
                children: [i.jsxs("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6",
                    children: ["Key ", i.jsx("span", {
                        className: "bg-gradient-to-r from-[#0036FF] to-blue-600 bg-clip-text text-transparent",
                        children: "Outcomes"
                    })]
                }), i.jsx("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Measurable results that transform your organization's knowledge management"
                })]
            }), i.jsxs("div", {
                className: "grid md:grid-cols-3 gap-8",
                children: [i.jsxs("div", {
                    className: "group relative",
                    children: [i.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
                    }), i.jsxs("div", {
                        className: "relative bg-white p-10 rounded-3xl border-2 border-gray-200 group-hover:border-[#0036FF] transition-all duration-300 shadow-lg h-full flex flex-col",
                        children: [i.jsx("div", {
                            className: "w-16 h-16 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-2xl flex items-center justify-center mb-6",
                            children: i.jsx(fl, {
                                className: "w-8 h-8 text-white"
                            })
                        }), i.jsx("h3", {
                            className: "text-2xl font-bold mb-4 text-gray-900",
                            children: "Reduced Knowledge Loss"
                        }), i.jsx("p", {
                            className: "text-gray-600 leading-relaxed mb-6 flex-grow",
                            children: "Minimize the impact of employee turnover by preserving critical expertise and institutional knowledge permanently."
                        }), i.jsx("div", {
                            className: "pt-6 border-t border-gray-200",
                            children: i.jsxs("div", {
                                className: "flex items-baseline space-x-2",
                                children: [i.jsx("span", {
                                    className: "text-4xl font-bold text-[#0036FF]",
                                    children: "85%"
                                }), i.jsx("span", {
                                    className: "text-gray-600",
                                    children: "less knowledge loss"
                                })]
                            })
                        })]
                    })]
                }), i.jsxs("div", {
                    className: "group relative",
                    children: [i.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
                    }), i.jsxs("div", {
                        className: "relative bg-white p-10 rounded-3xl border-2 border-gray-200 group-hover:border-[#0036FF] transition-all duration-300 shadow-lg h-full flex flex-col",
                        children: [i.jsx("div", {
                            className: "w-16 h-16 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-2xl flex items-center justify-center mb-6",
                            children: i.jsx(ml, {
                                className: "w-8 h-8 text-white"
                            })
                        }), i.jsx("h3", {
                            className: "text-2xl font-bold mb-4 text-gray-900",
                            children: "Faster Onboarding"
                        }), i.jsx("p", {
                            className: "text-gray-600 leading-relaxed mb-6 flex-grow",
                            children: "Accelerate new hire productivity by providing instant access to organizational knowledge and proven workflows."
                        }), i.jsx("div", {
                            className: "pt-6 border-t border-gray-200",
                            children: i.jsxs("div", {
                                className: "flex items-baseline space-x-2",
                                children: [i.jsx("span", {
                                    className: "text-4xl font-bold text-[#0036FF]",
                                    children: "3-6"
                                }), i.jsx("span", {
                                    className: "text-gray-600",
                                    children: "months to full productivity"
                                })]
                            })
                        })]
                    })]
                }), i.jsxs("div", {
                    className: "group relative",
                    children: [i.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
                    }), i.jsxs("div", {
                        className: "relative bg-white p-10 rounded-3xl border-2 border-gray-200 group-hover:border-[#0036FF] transition-all duration-300 shadow-lg h-full flex flex-col",
                        children: [i.jsx("div", {
                            className: "w-16 h-16 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-2xl flex items-center justify-center mb-6",
                            children: i.jsx(Ag, {
                                className: "w-8 h-8 text-white"
                            })
                        }), i.jsx("h3", {
                            className: "text-2xl font-bold mb-4 text-gray-900",
                            children: "Company Brain Preserved"
                        }), i.jsx("p", {
                            className: "text-gray-600 leading-relaxed mb-6 flex-grow",
                            children: "Build a permanent organizational memory that grows smarter over time, independent of individual employees."
                        }), i.jsx("div", {
                            className: "pt-6 border-t border-gray-200",
                            children: i.jsxs("div", {
                                className: "flex items-baseline space-x-2",
                                children: [i.jsx("span", {
                                    className: "text-4xl font-bold text-[#0036FF]",
                                    children: "100%"
                                }), i.jsx("span", {
                                    className: "text-gray-600",
                                    children: "knowledge retention"
                                })]
                            })
                        })]
                    })]
                })]
            })]
        })
    })
}

function ix() {
    return i.jsx("section", {
        id: "features",
        className: "py-20 bg-gradient-to-b from-white to-gray-50",
        children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("div", {
                className: "text-center mb-16",
                children: [i.jsxs("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6",
                    children: ["Powerful", " ", i.jsx("span", {
                        className: "bg-gradient-to-r from-[#0036FF] to-blue-600 bg-clip-text text-transparent",
                        children: "Features"
                    })]
                }), i.jsx("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Advanced capabilities designed to capture, preserve, and leverage your organization's collective intelligence"
                })]
            }), i.jsxs("div", {
                className: "grid md:grid-cols-2 gap-8",
                children: [i.jsx("div", {
                    className: "group bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-[#0036FF] transition-all duration-300 shadow-lg hover:shadow-2xl",
                    children: i.jsxs("div", {
                        className: "flex items-start space-x-4 mb-6",
                        children: [i.jsxs("div", {
                            className: "relative",
                            children: [i.jsx("div", {
                                className: "absolute inset-0 bg-[#0036FF] blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
                            }), i.jsx("div", {
                                className: "relative w-14 h-14 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-2xl flex items-center justify-center",
                                children: i.jsx(Ah, {
                                    className: "w-7 h-7 text-white"
                                })
                            })]
                        }), i.jsxs("div", {
                            className: "flex-grow",
                            children: [i.jsx("h3", {
                                className: "text-2xl font-bold mb-3 text-gray-900",
                                children: "Knowledge Search"
                            }), i.jsx("p", {
                                className: "text-gray-600 leading-relaxed mb-4",
                                children: "AI-powered semantic search that understands context and intent, surfacing relevant information from across your entire organizational knowledge base."
                            }), i.jsxs("ul", {
                                className: "space-y-2",
                                children: [i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-sm text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Natural language queries"
                                    })]
                                }), i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-sm text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Cross-project relevance ranking"
                                    })]
                                }), i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-sm text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Instant results with context"
                                    })]
                                })]
                            })]
                        })]
                    })
                }), i.jsx("div", {
                    className: "group bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-[#0036FF] transition-all duration-300 shadow-lg hover:shadow-2xl",
                    children: i.jsxs("div", {
                        className: "flex items-start space-x-4 mb-6",
                        children: [i.jsxs("div", {
                            className: "relative",
                            children: [i.jsx("div", {
                                className: "absolute inset-0 bg-[#0036FF] blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
                            }), i.jsx("div", {
                                className: "relative w-14 h-14 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-2xl flex items-center justify-center",
                                children: i.jsx(Oh, {
                                    className: "w-7 h-7 text-white"
                                })
                            })]
                        }), i.jsxs("div", {
                            className: "flex-grow",
                            children: [i.jsx("h3", {
                                className: "text-2xl font-bold mb-3 text-gray-900",
                                children: "Expert Workflow Replay"
                            }), i.jsx("p", {
                                className: "text-gray-600 leading-relaxed mb-4",
                                children: "Step-by-step playback of how experienced team members solved complex problems, complete with decision rationale and alternative approaches considered."
                            }), i.jsxs("ul", {
                                className: "space-y-2",
                                children: [i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-sm text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Interactive workflow visualization"
                                    })]
                                }), i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-sm text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Decision point annotations"
                                    })]
                                }), i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-sm text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Alternative approach documentation"
                                    })]
                                })]
                            })]
                        })]
                    })
                }), i.jsx("div", {
                    className: "group bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-[#0036FF] transition-all duration-300 shadow-lg hover:shadow-2xl",
                    children: i.jsxs("div", {
                        className: "flex items-start space-x-4 mb-6",
                        children: [i.jsxs("div", {
                            className: "relative",
                            children: [i.jsx("div", {
                                className: "absolute inset-0 bg-[#0036FF] blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
                            }), i.jsx("div", {
                                className: "relative w-14 h-14 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-2xl flex items-center justify-center",
                                children: i.jsx(zg, {
                                    className: "w-7 h-7 text-white"
                                })
                            })]
                        }), i.jsxs("div", {
                            className: "flex-grow",
                            children: [i.jsx("h3", {
                                className: "text-2xl font-bold mb-3 text-gray-900",
                                children: "AI Decision Recommendations"
                            }), i.jsx("p", {
                                className: "text-gray-600 leading-relaxed mb-4",
                                children: "Proactive suggestions based on similar past situations, helping teams avoid known pitfalls and leverage proven strategies."
                            }), i.jsxs("ul", {
                                className: "space-y-2",
                                children: [i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-sm text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Context-aware recommendations"
                                    })]
                                }), i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-sm text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Risk assessment alerts"
                                    })]
                                }), i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-sm text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Success pattern matching"
                                    })]
                                })]
                            })]
                        })]
                    })
                }), i.jsx("div", {
                    className: "group bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-[#0036FF] transition-all duration-300 shadow-lg hover:shadow-2xl",
                    children: i.jsxs("div", {
                        className: "flex items-start space-x-4 mb-6",
                        children: [i.jsxs("div", {
                            className: "relative",
                            children: [i.jsx("div", {
                                className: "absolute inset-0 bg-[#0036FF] blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
                            }), i.jsx("div", {
                                className: "relative w-14 h-14 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-2xl flex items-center justify-center",
                                children: i.jsx(Dg, {
                                    className: "w-7 h-7 text-white"
                                })
                            })]
                        }), i.jsxs("div", {
                            className: "flex-grow",
                            children: [i.jsx("h3", {
                                className: "text-2xl font-bold mb-3 text-gray-900",
                                children: "Training Assistant"
                            }), i.jsx("p", {
                                className: "text-gray-600 leading-relaxed mb-4",
                                children: "Automated onboarding pathways that adapt to individual learning styles, with interactive modules built from captured expert knowledge."
                            }), i.jsxs("ul", {
                                className: "space-y-2",
                                children: [i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-sm text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Personalized learning paths"
                                    })]
                                }), i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-sm text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Progress tracking and assessment"
                                    })]
                                }), i.jsxs("li", {
                                    className: "flex items-center space-x-2 text-sm text-gray-700",
                                    children: [i.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                                    }), i.jsx("span", {
                                        children: "Just-in-time knowledge delivery"
                                    })]
                                })]
                            })]
                        })]
                    })
                })]
            })]
        })
    })
}

function ox() {
    return i.jsx("section", {
        className: "py-20 bg-white",
        children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("div", {
                className: "text-center mb-16",
                children: [i.jsxs("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6",
                    children: ["Your Corporate", " ", i.jsx("span", {
                        className: "bg-gradient-to-r from-[#0036FF] to-blue-600 bg-clip-text text-transparent",
                        children: "Memory Hub"
                    })]
                }), i.jsx("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "A unified interface for accessing, managing, and leveraging your organization's collective intelligence"
                })]
            }), i.jsxs("div", {
                className: "bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-700",
                children: [i.jsxs("div", {
                    className: "bg-gray-800 px-6 py-4 border-b border-gray-700 flex items-center space-x-2",
                    children: [i.jsxs("div", {
                        className: "flex space-x-2",
                        children: [i.jsx("div", {
                            className: "w-3 h-3 bg-red-500 rounded-full"
                        }), i.jsx("div", {
                            className: "w-3 h-3 bg-yellow-500 rounded-full"
                        }), i.jsx("div", {
                            className: "w-3 h-3 bg-green-500 rounded-full"
                        })]
                    }), i.jsx("div", {
                        className: "flex-grow text-center text-gray-400 text-sm font-mono",
                        children: "corpanimus.company.com/dashboard"
                    })]
                }), i.jsxs("div", {
                    className: "grid md:grid-cols-4 h-[600px]",
                    children: [i.jsxs("div", {
                        className: "bg-gray-800 border-r border-gray-700 p-6 space-y-2",
                        children: [i.jsxs("div", {
                            className: "flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-[#0036FF] to-blue-600 rounded-xl text-white",
                            children: [i.jsx(dl, {
                                className: "w-5 h-5"
                            }), i.jsx("span", {
                                className: "font-semibold",
                                children: "Knowledge Base"
                            })]
                        }), i.jsxs("div", {
                            className: "flex items-center space-x-3 px-4 py-3 text-gray-400 hover:bg-gray-700 rounded-xl transition-colors cursor-pointer",
                            children: [i.jsx(bi, {
                                className: "w-5 h-5"
                            }), i.jsx("span", {
                                children: "Employees"
                            })]
                        }), i.jsxs("div", {
                            className: "flex items-center space-x-3 px-4 py-3 text-gray-400 hover:bg-gray-700 rounded-xl transition-colors cursor-pointer",
                            children: [i.jsx(Mg, {
                                className: "w-5 h-5"
                            }), i.jsx("span", {
                                children: "Projects"
                            })]
                        }), i.jsxs("div", {
                            className: "flex items-center space-x-3 px-4 py-3 text-gray-400 hover:bg-gray-700 rounded-xl transition-colors cursor-pointer",
                            children: [i.jsx(Rh, {
                                className: "w-5 h-5"
                            }), i.jsx("span", {
                                children: "Decisions"
                            })]
                        }), i.jsxs("div", {
                            className: "flex items-center space-x-3 px-4 py-3 text-gray-400 hover:bg-gray-700 rounded-xl transition-colors cursor-pointer",
                            children: [i.jsx(cl, {
                                className: "w-5 h-5"
                            }), i.jsx("span", {
                                children: "Training"
                            })]
                        })]
                    }), i.jsxs("div", {
                        className: "md:col-span-3 bg-gray-900 p-8 overflow-y-auto",
                        children: [i.jsx("div", {
                            className: "mb-6",
                            children: i.jsxs("div", {
                                className: "relative",
                                children: [i.jsx(Ah, {
                                    className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                }), i.jsx("input", {
                                    type: "text",
                                    placeholder: "Search Company Brain...",
                                    className: "w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0036FF]"
                                })]
                            })
                        }), i.jsxs("div", {
                            className: "grid md:grid-cols-2 gap-6 mb-6",
                            children: [i.jsxs("div", {
                                className: "bg-gray-800 p-6 rounded-xl border border-gray-700",
                                children: [i.jsxs("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [i.jsx("h3", {
                                        className: "text-white font-semibold",
                                        children: "Onboarding Time"
                                    }), i.jsx(fl, {
                                        className: "w-5 h-5 text-green-500"
                                    })]
                                }), i.jsxs("div", {
                                    className: "space-y-2",
                                    children: [i.jsxs("div", {
                                        className: "flex justify-between text-sm",
                                        children: [i.jsx("span", {
                                            className: "text-gray-400",
                                            children: "Before CorpANIMUS"
                                        }), i.jsx("span", {
                                            className: "text-white font-semibold",
                                            children: "18 months"
                                        })]
                                    }), i.jsx("div", {
                                        className: "w-full h-2 bg-gray-700 rounded-full overflow-hidden",
                                        children: i.jsx("div", {
                                            className: "h-full w-3/4 bg-red-500"
                                        })
                                    }), i.jsxs("div", {
                                        className: "flex justify-between text-sm",
                                        children: [i.jsx("span", {
                                            className: "text-gray-400",
                                            children: "With CorpANIMUS"
                                        }), i.jsx("span", {
                                            className: "text-green-400 font-semibold",
                                            children: "4 months"
                                        })]
                                    }), i.jsx("div", {
                                        className: "w-full h-2 bg-gray-700 rounded-full overflow-hidden",
                                        children: i.jsx("div", {
                                            className: "h-full w-1/4 bg-green-500"
                                        })
                                    })]
                                })]
                            }), i.jsxs("div", {
                                className: "bg-gray-800 p-6 rounded-xl border border-gray-700",
                                children: [i.jsxs("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [i.jsx("h3", {
                                        className: "text-white font-semibold",
                                        children: "Mistakes Prevented"
                                    }), i.jsx(Ih, {
                                        className: "w-5 h-5 text-blue-500"
                                    })]
                                }), i.jsxs("div", {
                                    className: "text-center",
                                    children: [i.jsx("div", {
                                        className: "text-5xl font-bold text-[#0036FF] mb-2",
                                        children: "247"
                                    }), i.jsx("div", {
                                        className: "text-gray-400 text-sm",
                                        children: "This Quarter"
                                    }), i.jsx("div", {
                                        className: "mt-4 text-green-400 text-sm font-semibold",
                                        children: "↑ 34% vs last quarter"
                                    })]
                                })]
                            })]
                        }), i.jsxs("div", {
                            className: "bg-gray-800 p-6 rounded-xl border border-gray-700",
                            children: [i.jsx("h3", {
                                className: "text-white font-semibold mb-4",
                                children: "Recent Knowledge Entries"
                            }), i.jsxs("div", {
                                className: "space-y-3",
                                children: [i.jsxs("div", {
                                    className: "p-4 bg-gray-700 rounded-lg border border-gray-600 hover:border-[#0036FF] transition-colors cursor-pointer",
                                    children: [i.jsxs("div", {
                                        className: "flex items-start justify-between mb-2",
                                        children: [i.jsx("span", {
                                            className: "text-white font-medium",
                                            children: "Microservices Deployment Strategy"
                                        }), i.jsx("span", {
                                            className: "text-xs text-gray-400",
                                            children: "2h ago"
                                        })]
                                    }), i.jsx("p", {
                                        className: "text-sm text-gray-400 mb-2",
                                        children: "Complete workflow for deploying containerized services with zero downtime..."
                                    }), i.jsxs("div", {
                                        className: "flex items-center space-x-2",
                                        children: [i.jsx("span", {
                                            className: "text-xs px-2 py-1 bg-blue-900 text-blue-300 rounded",
                                            children: "DevOps"
                                        }), i.jsx("span", {
                                            className: "text-xs px-2 py-1 bg-blue-900 text-blue-300 rounded",
                                            children: "Senior"
                                        })]
                                    })]
                                }), i.jsxs("div", {
                                    className: "p-4 bg-gray-700 rounded-lg border border-gray-600 hover:border-[#0036FF] transition-colors cursor-pointer",
                                    children: [i.jsxs("div", {
                                        className: "flex items-start justify-between mb-2",
                                        children: [i.jsx("span", {
                                            className: "text-white font-medium",
                                            children: "Customer Escalation Protocol"
                                        }), i.jsx("span", {
                                            className: "text-xs text-gray-400",
                                            children: "5h ago"
                                        })]
                                    }), i.jsx("p", {
                                        className: "text-sm text-gray-400 mb-2",
                                        children: "Step-by-step process for handling high-priority customer issues..."
                                    }), i.jsxs("div", {
                                        className: "flex items-center space-x-2",
                                        children: [i.jsx("span", {
                                            className: "text-xs px-2 py-1 bg-green-900 text-green-300 rounded",
                                            children: "Support"
                                        }), i.jsx("span", {
                                            className: "text-xs px-2 py-1 bg-green-900 text-green-300 rounded",
                                            children: "Manager"
                                        })]
                                    })]
                                }), i.jsxs("div", {
                                    className: "p-4 bg-gray-700 rounded-lg border border-gray-600 hover:border-[#0036FF] transition-colors cursor-pointer",
                                    children: [i.jsxs("div", {
                                        className: "flex items-start justify-between mb-2",
                                        children: [i.jsx("span", {
                                            className: "text-white font-medium",
                                            children: "Database Migration Best Practices"
                                        }), i.jsx("span", {
                                            className: "text-xs text-gray-400",
                                            children: "1d ago"
                                        })]
                                    }), i.jsx("p", {
                                        className: "text-sm text-gray-400 mb-2",
                                        children: "Lessons learned from migrating 500GB production database..."
                                    }), i.jsxs("div", {
                                        className: "flex items-center space-x-2",
                                        children: [i.jsx("span", {
                                            className: "text-xs px-2 py-1 bg-purple-900 text-purple-300 rounded",
                                            children: "Engineering"
                                        }), i.jsx("span", {
                                            className: "text-xs px-2 py-1 bg-purple-900 text-purple-300 rounded",
                                            children: "Expert"
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })]
                })]
            })]
        })
    })
}

function ax() {
    const [t, e] = S.useState(!1), [r, n] = S.useState(""), [s, o] = S.useState(""), [a, l] = S.useState(""), [c, u] = S.useState(""), [h, f] = S.useState(!1), [d, p] = S.useState(null), y = [{
        employees: "0-50",
        annualFee: "₹60k–₹1L",
        setup: "~₹30k",
        color: "from-blue-500 to-blue-600"
    }, {
        employees: "51-500",
        annualFee: "₹1L–₹15L",
        setup: "₹30k–₹1.5L",
        color: "from-blue-600 to-[#0036FF]",
        popular: !0
    }, {
        employees: "501–2,500",
        annualFee: "₹15L–₹75L",
        setup: "₹1.5L–₹10L",
        color: "from-[#0036FF] to-blue-700"
    }, {
        employees: "2,501–50k",
        annualFee: "₹75L–₹15Cr",
        setup: "₹10L–₹1Cr",
        color: "from-blue-700 to-blue-800"
    }, {
        employees: "50k+",
        annualFee: "₹15Cr+",
        setup: "₹1Cr+",
        color: "from-blue-800 to-gray-900"
    }], v = ["Complete knowledge capture system", "AI-powered search and recommendations", "Unlimited knowledge entries", "Expert workflow replay", "Training assistant", "Priority support", "Custom integrations", "Regular updates and improvements"], N = m => {
        if (m.preventDefault(), !r.trim() || !s || !a || !c) {
            p({
                type: "error",
                text: "Please fill in all fields"
            });
            return
        }
        f(!0), setTimeout(() => {
            p({
                type: "success",
                text: "Payment processed successfully! Thank you for your purchase."
            }), setTimeout(() => {
                e(!1), p(null), n(""), o(""), l(""), u("")
            }, 2e3), f(!1)
        }, 1500)
    }, x = () => {
        e(!1), p(null), n(""), o(""), l(""), u("")
    };
    return i.jsxs("section", {
        id: "pricing",
        className: "py-20 bg-gradient-to-b from-gray-50 to-white",
        children: [i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("div", {
                className: "text-center mb-16",
                children: [i.jsxs("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6",
                    children: ["Simple, Transparent", " ", i.jsx("span", {
                        className: "bg-gradient-to-r from-[#0036FF] to-blue-600 bg-clip-text text-transparent",
                        children: "Pricing"
                    })]
                }), i.jsx("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Scalable pricing that grows with your organization"
                })]
            }), i.jsx("div", {
                className: "grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12",
                children: y.map((m, g) => i.jsxs("div", {
                    className: `relative bg-white rounded-2xl border-2 ${m.popular?"border-[#0036FF] shadow-xl scale-105":"border-gray-200"} p-6 hover:shadow-lg transition-all duration-300`,
                    children: [m.popular && i.jsx("div", {
                        className: "absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#0036FF] to-blue-600 text-white text-sm font-semibold rounded-full",
                        children: "Most Popular"
                    }), i.jsx("div", {
                        className: `w-12 h-12 bg-gradient-to-r ${m.color} rounded-xl mb-4`
                    }), i.jsx("div", {
                        className: "text-2xl font-bold text-gray-900 mb-2",
                        children: m.employees
                    }), i.jsx("div", {
                        className: "text-sm text-gray-500 mb-4",
                        children: "employees"
                    }), i.jsxs("div", {
                        className: "space-y-3 mb-6",
                        children: [i.jsxs("div", {
                            children: [i.jsx("div", {
                                className: "text-sm text-gray-600 mb-1",
                                children: "Annual License"
                            }), i.jsx("div", {
                                className: "text-xl font-bold text-[#0036FF]",
                                children: m.annualFee
                            })]
                        }), i.jsxs("div", {
                            children: [i.jsx("div", {
                                className: "text-sm text-gray-600 mb-1",
                                children: "Setup Fee"
                            }), i.jsx("div", {
                                className: "text-lg font-semibold text-gray-700",
                                children: m.setup
                            })]
                        })]
                    }), i.jsxs("button", {
                        onClick: () => e(!0),
                        className: "w-full px-4 py-2 bg-gradient-to-r from-[#0036FF] to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2",
                        children: [i.jsx(Wc, {
                            className: "w-4 h-4"
                        }), i.jsx("span", {
                            children: "Pay with Card"
                        })]
                    })]
                }, g))
            }), i.jsxs("div", {
                className: "bg-white rounded-3xl border-2 border-gray-200 shadow-xl p-8 md:p-12",
                children: [i.jsx("h3", {
                    className: "text-2xl font-bold text-center mb-8",
                    children: "All Plans Include"
                }), i.jsx("div", {
                    className: "grid md:grid-cols-2 gap-4 max-w-4xl mx-auto",
                    children: v.map((m, g) => i.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [i.jsx("div", {
                            className: "flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#0036FF] to-blue-600 rounded-full flex items-center justify-center",
                            children: i.jsx(Fh, {
                                className: "w-4 h-4 text-white"
                            })
                        }), i.jsx("span", {
                            className: "text-gray-700",
                            children: m
                        })]
                    }, g))
                })]
            })]
        }), t && i.jsx("div", {
            className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",
            children: i.jsxs("div", {
                className: "bg-white rounded-3xl max-w-md w-full shadow-2xl",
                children: [i.jsxs("div", {
                    className: "bg-gradient-to-r from-[#0036FF] to-blue-600 px-6 py-4 text-white flex items-center justify-between",
                    children: [i.jsx("h3", {
                        className: "text-xl font-bold",
                        children: "Payment Details"
                    }), i.jsx("button", {
                        onClick: x,
                        className: "hover:bg-white/20 p-1 rounded transition-colors",
                        children: i.jsx(st, {
                            className: "w-5 h-5"
                        })
                    })]
                }), i.jsxs("form", {
                    onSubmit: N,
                    className: "p-6 space-y-4",
                    children: [d && i.jsx("div", {
                        className: `p-3 rounded-lg text-sm font-medium ${d.type==="success"?"bg-green-50 text-green-800 border border-green-200":"bg-red-50 text-red-800 border border-red-200"}`,
                        children: d.text
                    }), i.jsxs("div", {
                        children: [i.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Cardholder Name"
                        }), i.jsx("input", {
                            type: "text",
                            value: r,
                            onChange: m => n(m.target.value),
                            placeholder: "John Doe",
                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0036FF]"
                        })]
                    }), i.jsxs("div", {
                        children: [i.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Card Number"
                        }), i.jsx("input", {
                            type: "text",
                            value: s,
                            onChange: m => o(m.target.value.replace(/\s/g, "")),
                            placeholder: "1234 5678 9012 3456",
                            maxLength: 16,
                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0036FF]"
                        })]
                    }), i.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [i.jsxs("div", {
                            children: [i.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Expiry Date"
                            }), i.jsx("input", {
                                type: "text",
                                value: a,
                                onChange: m => l(m.target.value),
                                placeholder: "MM/YY",
                                maxLength: 5,
                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0036FF]"
                            })]
                        }), i.jsxs("div", {
                            children: [i.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "CVV"
                            }), i.jsx("input", {
                                type: "text",
                                value: c,
                                onChange: m => u(m.target.value),
                                placeholder: "123",
                                maxLength: 3,
                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0036FF]"
                            })]
                        })]
                    }), i.jsxs("div", {
                        className: "flex gap-3 pt-4",
                        children: [i.jsxs("button", {
                            type: "submit",
                            disabled: h,
                            className: "flex-1 px-6 py-3 bg-gradient-to-r from-[#0036FF] to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center space-x-2",
                            children: [i.jsx(Wc, {
                                className: "w-4 h-4"
                            }), i.jsx("span", {
                                children: h ? "Processing..." : "Pay Now"
                            })]
                        }), i.jsx("button", {
                            type: "button",
                            onClick: x,
                            className: "flex-1 px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors",
                            children: "Cancel"
                        })]
                    })]
                })]
            })
        })]
    })
}

function lx() {
    return i.jsx("section", {
        className: "py-20 bg-white",
        children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("div", {
                className: "text-center mb-16",
                children: [i.jsxs("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-6",
                    children: ["Why", " ", i.jsx("span", {
                        className: "bg-gradient-to-r from-[#0036FF] to-blue-600 bg-clip-text text-transparent",
                        children: "It Works"
                    })]
                }), i.jsx("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Built on proven technology, designed for real-world deployment"
                })]
            }), i.jsxs("div", {
                className: "grid md:grid-cols-3 gap-8",
                children: [i.jsxs("div", {
                    className: "bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl border-2 border-blue-100 hover:border-[#0036FF] transition-all duration-300 shadow-lg hover:shadow-xl",
                    children: [i.jsxs("div", {
                        className: "relative mb-6",
                        children: [i.jsx("div", {
                            className: "absolute inset-0 bg-[#0036FF] blur-2xl opacity-20"
                        }), i.jsx("div", {
                            className: "relative w-20 h-20 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-2xl flex items-center justify-center",
                            children: i.jsx(Lg, {
                                className: "w-10 h-10 text-white"
                            })
                        })]
                    }), i.jsx("h3", {
                        className: "text-2xl font-bold mb-4 text-gray-900",
                        children: "Technology Ready"
                    }), i.jsx("p", {
                        className: "text-gray-600 leading-relaxed mb-4",
                        children: "Built on mature AI and machine learning technologies that are proven at scale."
                    }), i.jsxs("ul", {
                        className: "space-y-2",
                        children: [i.jsxs("li", {
                            className: "flex items-center space-x-2 text-gray-700",
                            children: [i.jsx("div", {
                                className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                            }), i.jsx("span", {
                                className: "text-sm",
                                children: "Advanced NLP and semantic understanding"
                            })]
                        }), i.jsxs("li", {
                            className: "flex items-center space-x-2 text-gray-700",
                            children: [i.jsx("div", {
                                className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                            }), i.jsx("span", {
                                className: "text-sm",
                                children: "Cloud-native architecture"
                            })]
                        }), i.jsxs("li", {
                            className: "flex items-center space-x-2 text-gray-700",
                            children: [i.jsx("div", {
                                className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                            }), i.jsx("span", {
                                className: "text-sm",
                                children: "Enterprise-grade security"
                            })]
                        }), i.jsxs("li", {
                            className: "flex items-center space-x-2 text-gray-700",
                            children: [i.jsx("div", {
                                className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                            }), i.jsx("span", {
                                className: "text-sm",
                                children: "Scalable infrastructure"
                            })]
                        })]
                    })]
                }), i.jsxs("div", {
                    className: "bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl border-2 border-blue-100 hover:border-[#0036FF] transition-all duration-300 shadow-lg hover:shadow-xl",
                    children: [i.jsxs("div", {
                        className: "relative mb-6",
                        children: [i.jsx("div", {
                            className: "absolute inset-0 bg-[#0036FF] blur-2xl opacity-20"
                        }), i.jsx("div", {
                            className: "relative w-20 h-20 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-2xl flex items-center justify-center",
                            children: i.jsx($g, {
                                className: "w-10 h-10 text-white"
                            })
                        })]
                    }), i.jsx("h3", {
                        className: "text-2xl font-bold mb-4 text-gray-900",
                        children: "Cost-Effective"
                    }), i.jsx("p", {
                        className: "text-gray-600 leading-relaxed mb-4",
                        children: "Rapid ROI through reduced knowledge loss and faster employee productivity."
                    }), i.jsxs("ul", {
                        className: "space-y-2",
                        children: [i.jsxs("li", {
                            className: "flex items-center space-x-2 text-gray-700",
                            children: [i.jsx("div", {
                                className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                            }), i.jsx("span", {
                                className: "text-sm",
                                children: "Break-even in 6-12 months"
                            })]
                        }), i.jsxs("li", {
                            className: "flex items-center space-x-2 text-gray-700",
                            children: [i.jsx("div", {
                                className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                            }), i.jsx("span", {
                                className: "text-sm",
                                children: "Reduced training costs by 70%"
                            })]
                        }), i.jsxs("li", {
                            className: "flex items-center space-x-2 text-gray-700",
                            children: [i.jsx("div", {
                                className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                            }), i.jsx("span", {
                                className: "text-sm",
                                children: "Lower employee ramp-up time"
                            })]
                        }), i.jsxs("li", {
                            className: "flex items-center space-x-2 text-gray-700",
                            children: [i.jsx("div", {
                                className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                            }), i.jsx("span", {
                                className: "text-sm",
                                children: "Prevents costly mistakes"
                            })]
                        })]
                    })]
                }), i.jsxs("div", {
                    className: "bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl border-2 border-blue-100 hover:border-[#0036FF] transition-all duration-300 shadow-lg hover:shadow-xl",
                    children: [i.jsxs("div", {
                        className: "relative mb-6",
                        children: [i.jsx("div", {
                            className: "absolute inset-0 bg-[#0036FF] blur-2xl opacity-20"
                        }), i.jsx("div", {
                            className: "relative w-20 h-20 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-2xl flex items-center justify-center",
                            children: i.jsx(Jg, {
                                className: "w-10 h-10 text-white"
                            })
                        })]
                    }), i.jsx("h3", {
                        className: "text-2xl font-bold mb-4 text-gray-900",
                        children: "Unique Solution"
                    }), i.jsx("p", {
                        className: "text-gray-600 leading-relaxed mb-4",
                        children: "First-of-its-kind approach to comprehensive corporate knowledge preservation."
                    }), i.jsxs("ul", {
                        className: "space-y-2",
                        children: [i.jsxs("li", {
                            className: "flex items-center space-x-2 text-gray-700",
                            children: [i.jsx("div", {
                                className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                            }), i.jsx("span", {
                                className: "text-sm",
                                children: "No direct competitors"
                            })]
                        }), i.jsxs("li", {
                            className: "flex items-center space-x-2 text-gray-700",
                            children: [i.jsx("div", {
                                className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                            }), i.jsx("span", {
                                className: "text-sm",
                                children: "Patent-pending technology"
                            })]
                        }), i.jsxs("li", {
                            className: "flex items-center space-x-2 text-gray-700",
                            children: [i.jsx("div", {
                                className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                            }), i.jsx("span", {
                                className: "text-sm",
                                children: "Innovative capture mechanisms"
                            })]
                        }), i.jsxs("li", {
                            className: "flex items-center space-x-2 text-gray-700",
                            children: [i.jsx("div", {
                                className: "w-1.5 h-1.5 bg-[#0036FF] rounded-full"
                            }), i.jsx("span", {
                                className: "text-sm",
                                children: "Continuous improvement AI"
                            })]
                        })]
                    })]
                })]
            })]
        })
    })
}

function cx({
    mode: t,
    onClose: e
}) {
    const {
        signUp: r,
        signIn: n
    } = sr(), [s, o] = S.useState(t), [a, l] = S.useState({
        name: "",
        email: "",
        password: "",
        role: "employee"
    }), [c, u] = S.useState(!1), [h, f] = S.useState(null), [d, p] = S.useState(null), y = async N => {
        N.preventDefault(), u(!0), f(null), p(null);
        try {
            if (s === "signup") {
                const {
                    error: x
                } = await r(a.email, a.password, a.name, a.role);
                x ? f(x.message) : (p("Account created successfully! You can now log in."), l({
                    name: "",
                    email: "",
                    password: "",
                    role: "employee"
                }), setTimeout(() => {
                    o("login"), p(null)
                }, 2e3))
            } else {
                const {
                    error: x
                } = await n(a.email, a.password);
                x ? f(x.message) : (p("Login successful!"), setTimeout(() => {
                    e()
                }, 1e3))
            }
        } catch {
            f("An unexpected error occurred")
        } finally {
            u(!1)
        }
    }, v = N => {
        l({
            ...a,
            [N.target.name]: N.target.value
        }), f(null)
    };
    return i.jsx("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
        children: i.jsxs("div", {
            className: "relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-200",
            children: [i.jsx("button", {
                onClick: e,
                className: "absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors",
                children: i.jsx(st, {
                    className: "w-6 h-6"
                })
            }), i.jsxs("div", {
                className: "p-8",
                children: [i.jsxs("div", {
                    className: "text-center mb-8",
                    children: [i.jsxs("div", {
                        className: "inline-flex items-center space-x-2 mb-4",
                        children: [i.jsx("div", {
                            className: "w-10 h-10 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl",
                            children: "🧠"
                        }), i.jsx("span", {
                            className: "text-2xl font-bold bg-gradient-to-r from-[#0036FF] to-blue-600 bg-clip-text text-transparent",
                            children: "CorpANIMUS"
                        })]
                    }), i.jsx("h2", {
                        className: "text-3xl font-bold text-gray-900 mb-2",
                        children: s === "login" ? "Welcome Back" : "Get Started"
                    }), i.jsx("p", {
                        className: "text-gray-600",
                        children: s === "login" ? "Access your corporate knowledge hub" : "Create your CorpANIMUS account"
                    })]
                }), h && i.jsxs("div", {
                    className: "flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-xl",
                    children: [i.jsx(ll, {
                        className: "w-5 h-5 text-red-600 flex-shrink-0"
                    }), i.jsx("p", {
                        className: "text-sm text-red-600",
                        children: h
                    })]
                }), d && i.jsxs("div", {
                    className: "flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-xl",
                    children: [i.jsx(Ch, {
                        className: "w-5 h-5 text-green-600 flex-shrink-0"
                    }), i.jsx("p", {
                        className: "text-sm text-green-600",
                        children: d
                    })]
                }), i.jsxs("form", {
                    onSubmit: y,
                    className: "space-y-4",
                    children: [s === "signup" && i.jsxs("div", {
                        children: [i.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Full Name"
                        }), i.jsxs("div", {
                            className: "relative",
                            children: [i.jsx(Lh, {
                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                            }), i.jsx("input", {
                                type: "text",
                                name: "name",
                                value: a.name,
                                onChange: v,
                                className: "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#0036FF] transition-colors",
                                placeholder: "John Doe",
                                required: !0
                            })]
                        })]
                    }), i.jsxs("div", {
                        children: [i.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Email Address"
                        }), i.jsxs("div", {
                            className: "relative",
                            children: [i.jsx(hl, {
                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                            }), i.jsx("input", {
                                type: "email",
                                name: "email",
                                value: a.email,
                                onChange: v,
                                className: "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#0036FF] transition-colors",
                                placeholder: "you@company.com",
                                required: !0
                            })]
                        })]
                    }), s === "signup" && i.jsxs("div", {
                        children: [i.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Role"
                        }), i.jsxs("div", {
                            className: "relative",
                            children: [i.jsx(Rg, {
                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                            }), i.jsxs("select", {
                                name: "role",
                                value: a.role,
                                onChange: v,
                                className: "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#0036FF] transition-colors appearance-none bg-white",
                                required: !0,
                                children: [i.jsx("option", {
                                    value: "employee",
                                    children: "Employee"
                                }), i.jsx("option", {
                                    value: "manager",
                                    children: "Manager"
                                }), i.jsx("option", {
                                    value: "admin",
                                    children: "Admin"
                                })]
                            })]
                        })]
                    }), i.jsxs("div", {
                        children: [i.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Password"
                        }), i.jsxs("div", {
                            className: "relative",
                            children: [i.jsx(Bg, {
                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                            }), i.jsx("input", {
                                type: "password",
                                name: "password",
                                value: a.password,
                                onChange: v,
                                className: "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#0036FF] transition-colors",
                                placeholder: "••••••••",
                                required: !0
                            })]
                        })]
                    }), s === "login" && i.jsx("div", {
                        className: "flex justify-end",
                        children: i.jsx("button", {
                            type: "button",
                            className: "text-sm text-[#0036FF] hover:underline",
                            children: "Forgot Password?"
                        })
                    }), i.jsx("button", {
                        type: "submit",
                        disabled: c,
                        className: "w-full py-3 bg-gradient-to-r from-[#0036FF] to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: c ? "Processing..." : s === "login" ? "Login" : "Create Account"
                    })]
                }), i.jsx("div", {
                    className: "mt-6 text-center",
                    children: i.jsx("button", {
                        onClick: () => o(s === "login" ? "signup" : "login"),
                        className: "text-sm text-gray-600",
                        children: s === "login" ? i.jsxs(i.Fragment, {
                            children: ["Don't have an account?", " ", i.jsx("span", {
                                className: "text-[#0036FF] font-semibold hover:underline",
                                children: "Sign up"
                            })]
                        }) : i.jsxs(i.Fragment, {
                            children: ["Already have an account?", " ", i.jsx("span", {
                                className: "text-[#0036FF] font-semibold hover:underline",
                                children: "Login"
                            })]
                        })
                    })
                })]
            })]
        })
    })
}

function ux({
    setCurrentPage: t
}) {
    const [e, r] = S.useState(""), [n, s] = S.useState(""), [o, a] = S.useState(""), [l, c] = S.useState(null), [u, h] = S.useState(!1), f = async d => {
        if (d.preventDefault(), !e.trim() || !n.trim() || !o.trim()) {
            c({
                type: "error",
                text: "Please fill in all fields"
            });
            return
        }
        h(!0);
        try {
            if (!(await fetch("https://dwhgsyuudxinbbhpcrhe.supabase.co/functions/v1/feedback", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3aGdzeXV1ZHhpbmJiaHBjcmhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4MTY0MjYsImV4cCI6MjA3OTM5MjQyNn0.O1rrtW24-2p5kjcuKmZWTeouXH3s0XnaySl6o4way9s"
                    },
                    body: JSON.stringify({
                        name: e,
                        email: n,
                        message: o
                    })
                })).ok) throw new Error("Failed to submit feedback");
            c({
                type: "success",
                text: "Thank you! Your feedback has been received."
            }), r(""), s(""), a(""), setTimeout(() => c(null), 3e3)
        } catch {
            c({
                type: "error",
                text: "Failed to submit feedback. Please try again."
            })
        } finally {
            h(!1)
        }
    };
    return i.jsx("footer", {
        id: "footer",
        className: "bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-10",
        children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("div", {
                className: "grid md:grid-cols-2 gap-16 mb-16",
                children: [i.jsxs("div", {
                    children: [i.jsxs("div", {
                        className: "flex items-center space-x-2 mb-6",
                        children: [i.jsx("div", {
                            className: "w-10 h-10 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-xl flex items-center justify-center text-2xl",
                            children: "🧠"
                        }), i.jsx("span", {
                            className: "text-2xl font-bold",
                            children: "CorpANIMUS"
                        })]
                    }), i.jsx("p", {
                        className: "text-gray-400 mb-8 leading-relaxed",
                        children: "Transform how your organization captures, preserves, and leverages knowledge. Build a corporate memory that never forgets."
                    }), i.jsxs("div", {
                        className: "space-y-4",
                        children: [i.jsxs("div", {
                            className: "flex items-center space-x-3 text-gray-400",
                            children: [i.jsx(hl, {
                                className: "w-5 h-5 text-[#0036FF]"
                            }), i.jsx("span", {
                                children: "contact@corpanimus.com"
                            })]
                        }), i.jsxs("div", {
                            className: "flex items-center space-x-3 text-gray-400",
                            children: [i.jsx(qg, {
                                className: "w-5 h-5 text-[#0036FF]"
                            }), i.jsx("span", {
                                children: "+91 (800) 123-4567"
                            })]
                        }), i.jsxs("div", {
                            className: "flex items-center space-x-3 text-gray-400",
                            children: [i.jsx(Wg, {
                                className: "w-5 h-5 text-[#0036FF]"
                            }), i.jsx("span", {
                                children: "Bangalore, Karnataka, India"
                            })]
                        })]
                    })]
                }), i.jsxs("div", {
                    className: "bg-gray-800/50 p-6 rounded-2xl border border-gray-700",
                    children: [i.jsxs("h3", {
                        className: "text-xl font-bold mb-4 flex items-center space-x-2",
                        children: [i.jsx(Kg, {
                            className: "w-5 h-5 text-[#0036FF]"
                        }), i.jsx("span", {
                            children: "Send us your feedback"
                        })]
                    }), i.jsxs("form", {
                        onSubmit: f,
                        className: "space-y-3",
                        children: [l && i.jsx("div", {
                            className: `p-3 rounded-lg text-sm ${l.type==="success"?"bg-green-900/30 text-green-200 border border-green-700":"bg-red-900/30 text-red-200 border border-red-700"}`,
                            children: l.text
                        }), i.jsx("input", {
                            type: "text",
                            placeholder: "Your Name",
                            value: e,
                            onChange: d => r(d.target.value),
                            className: "w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0036FF]"
                        }), i.jsx("input", {
                            type: "email",
                            placeholder: "Your Email",
                            value: n,
                            onChange: d => s(d.target.value),
                            className: "w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0036FF]"
                        }), i.jsx("textarea", {
                            placeholder: "Your feedback",
                            value: o,
                            onChange: d => a(d.target.value),
                            rows: 3,
                            className: "w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0036FF] resize-none"
                        }), i.jsx("button", {
                            type: "submit",
                            disabled: u,
                            className: "w-full px-4 py-2 bg-gradient-to-r from-[#0036FF] to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50",
                            children: u ? "Submitting..." : "Submit Feedback"
                        })]
                    })]
                })]
            }), i.jsx("div", {
                className: "pt-8 border-t border-gray-800",
                children: i.jsxs("div", {
                    className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",
                    children: [i.jsx("div", {
                        className: "text-gray-400 text-sm",
                        children: "© 2025 CorpANIMUS. All rights reserved."
                    }), i.jsxs("div", {
                        className: "flex items-center space-x-6 text-sm text-gray-400",
                        children: [i.jsx("button", {
                            onClick: () => t == null ? void 0 : t("privacy"),
                            className: "hover:text-white transition-colors",
                            children: "Privacy Policy"
                        }), i.jsx("button", {
                            onClick: () => t == null ? void 0 : t("terms"),
                            className: "hover:text-white transition-colors",
                            children: "Terms & Conditions"
                        }), i.jsx("a", {
                            href: "mailto:contact@corpanimus.com",
                            className: "hover:text-white transition-colors",
                            children: "Contact"
                        })]
                    })]
                })
            })]
        })
    })
}

function dx({
    onBack: t
}) {
    const {
        profile: e
    } = sr(), [r, n] = S.useState((e == null ? void 0 : e.name) || ""), [s, o] = S.useState(!1), [a, l] = S.useState(""), [c, u] = S.useState(""), [h, f] = S.useState(!1), [d, p] = S.useState(!1), [y, v] = S.useState(null), N = async () => {
        if (e) {
            if (r.trim() === "") {
                v({
                    type: "error",
                    text: "Name cannot be empty"
                });
                return
            }
            f(!0);
            try {
                const {
                    error: m
                } = await ve.from("profiles").update({
                    name: r
                }).eq("id", e.id);
                if (m) throw m;
                v({
                    type: "success",
                    text: "Profile updated successfully"
                }), setTimeout(() => v(null), 3e3)
            } catch {
                v({
                    type: "error",
                    text: "Failed to update profile"
                })
            } finally {
                f(!1)
            }
        }
    }, x = async () => {
        if (!a || !c) {
            v({
                type: "error",
                text: "Please fill in all password fields"
            });
            return
        }
        if (a !== c) {
            v({
                type: "error",
                text: "Passwords do not match"
            });
            return
        }
        if (a.length < 6) {
            v({
                type: "error",
                text: "Password must be at least 6 characters"
            });
            return
        }
        p(!0);
        try {
            const {
                error: m
            } = await ve.auth.updateUser({
                password: a
            });
            if (m) throw m;
            v({
                type: "success",
                text: "Password changed successfully"
            }), l(""), u(""), o(!1), setTimeout(() => v(null), 3e3)
        } catch {
            v({
                type: "error",
                text: "Failed to change password"
            })
        } finally {
            p(!1)
        }
    };
    return e ? i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsxs("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsx("button", {
                onClick: t,
                className: "mb-6 text-[#0036FF] hover:text-blue-700 font-medium transition-colors",
                children: "← Back to Dashboard"
            }), i.jsxs("div", {
                className: "bg-white rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden",
                children: [i.jsxs("div", {
                    className: "bg-gradient-to-r from-[#0036FF] to-blue-600 px-8 py-6 text-white",
                    children: [i.jsx("h1", {
                        className: "text-3xl font-bold",
                        children: "Account Details"
                    }), i.jsx("p", {
                        className: "text-blue-100 mt-1",
                        children: "Manage your account information and security"
                    })]
                }), i.jsxs("div", {
                    className: "p-8",
                    children: [y && i.jsx("div", {
                        className: `mb-6 p-4 rounded-lg ${y.type==="success"?"bg-green-50 text-green-800 border border-green-200":"bg-red-50 text-red-800 border border-red-200"}`,
                        children: y.text
                    }), i.jsxs("div", {
                        className: "space-y-8",
                        children: [i.jsxs("div", {
                            className: "bg-gray-50 p-6 rounded-xl border border-gray-200",
                            children: [i.jsx("h2", {
                                className: "text-xl font-bold text-gray-900 mb-4",
                                children: "Profile Information"
                            }), i.jsxs("div", {
                                className: "space-y-4",
                                children: [i.jsxs("div", {
                                    children: [i.jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Full Name"
                                    }), i.jsx("input", {
                                        type: "text",
                                        value: r,
                                        onChange: m => n(m.target.value),
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0036FF] transition-colors",
                                        placeholder: "Enter your full name"
                                    })]
                                }), i.jsxs("div", {
                                    children: [i.jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Email Address"
                                    }), i.jsx("input", {
                                        type: "email",
                                        value: e.email,
                                        disabled: !0,
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
                                    }), i.jsx("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "Email cannot be changed"
                                    })]
                                }), i.jsxs("div", {
                                    children: [i.jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Role"
                                    }), i.jsx("input", {
                                        type: "text",
                                        value: e.role.charAt(0).toUpperCase() + e.role.slice(1),
                                        disabled: !0,
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
                                    }), i.jsx("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "Role cannot be changed"
                                    })]
                                }), i.jsx("button", {
                                    onClick: N,
                                    disabled: h,
                                    className: "w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#0036FF] to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50",
                                    children: h ? "Saving..." : "Save Changes"
                                })]
                            })]
                        }), i.jsxs("div", {
                            className: "bg-gray-50 p-6 rounded-xl border border-gray-200",
                            children: [i.jsx("h2", {
                                className: "text-xl font-bold text-gray-900 mb-4",
                                children: "Security"
                            }), s ? i.jsxs("div", {
                                className: "space-y-4",
                                children: [i.jsxs("div", {
                                    children: [i.jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "New Password"
                                    }), i.jsx("input", {
                                        type: "password",
                                        value: a,
                                        onChange: m => l(m.target.value),
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0036FF] transition-colors",
                                        placeholder: "Enter new password"
                                    })]
                                }), i.jsxs("div", {
                                    children: [i.jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Confirm Password"
                                    }), i.jsx("input", {
                                        type: "password",
                                        value: c,
                                        onChange: m => u(m.target.value),
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0036FF] transition-colors",
                                        placeholder: "Confirm your password"
                                    })]
                                }), i.jsxs("div", {
                                    className: "flex gap-3 pt-2",
                                    children: [i.jsx("button", {
                                        onClick: x,
                                        disabled: d,
                                        className: "flex-1 px-6 py-2 bg-gradient-to-r from-[#0036FF] to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50",
                                        children: d ? "Updating..." : "Update Password"
                                    }), i.jsx("button", {
                                        onClick: () => {
                                            o(!1), l(""), u("")
                                        },
                                        className: "flex-1 px-6 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition-colors",
                                        children: "Cancel"
                                    })]
                                })]
                            }) : i.jsx("button", {
                                onClick: () => o(!0),
                                className: "px-6 py-3 bg-gradient-to-r from-[#0036FF] to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all",
                                children: "Change Password"
                            })]
                        }), i.jsxs("div", {
                            className: "bg-blue-50 p-6 rounded-xl border border-blue-200",
                            children: [i.jsx("h2", {
                                className: "text-lg font-bold text-gray-900 mb-2",
                                children: "Member Since"
                            }), i.jsx("p", {
                                className: "text-gray-600",
                                children: new Date(e.created_at).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })
                            })]
                        })]
                    })]
                })]
            })]
        })
    }) : null
}

function hx({
    onClose: t
}) {
    return i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsxs("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsx("button", {
                onClick: t,
                className: "mb-6 text-[#0036FF] hover:text-blue-700 font-medium transition-colors",
                children: "← Back"
            }), i.jsxs("div", {
                className: "bg-white rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden",
                children: [i.jsxs("div", {
                    className: "bg-gradient-to-r from-[#0036FF] to-blue-600 px-8 py-12 text-white",
                    children: [i.jsx("h1", {
                        className: "text-4xl font-bold",
                        children: "Privacy Policy"
                    }), i.jsx("p", {
                        className: "text-blue-100 mt-4",
                        children: "Last updated: November 2025"
                    })]
                }), i.jsxs("div", {
                    className: "p-8 space-y-8 text-gray-700 leading-relaxed",
                    children: [i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "1. Introduction"
                        }), i.jsx("p", {
                            children: 'Welcome to CorpANIMUS ("Company," "we," "us," or "our"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.'
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "2. Information We Collect"
                        }), i.jsx("p", {
                            className: "mb-3",
                            children: "We may collect information about you in a variety of ways. The information we may collect on the site includes:"
                        }), i.jsxs("ul", {
                            className: "list-disc list-inside space-y-2 ml-2",
                            children: [i.jsxs("li", {
                                children: [i.jsx("strong", {
                                    children: "Personal Data:"
                                }), " Name, email address, password, and other information you provide during registration or account creation."]
                            }), i.jsxs("li", {
                                children: [i.jsx("strong", {
                                    children: "Usage Data:"
                                }), " Information about how you interact with our services, including pages visited, time spent, and actions taken."]
                            }), i.jsxs("li", {
                                children: [i.jsx("strong", {
                                    children: "Device Information:"
                                }), " IP address, browser type, operating system, and device identifiers."]
                            }), i.jsxs("li", {
                                children: [i.jsx("strong", {
                                    children: "Communication:"
                                }), " Records of communications between you and our support team."]
                            })]
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "3. How We Use Your Information"
                        }), i.jsx("p", {
                            className: "mb-3",
                            children: "We use the information we collect in the following ways:"
                        }), i.jsxs("ul", {
                            className: "list-disc list-inside space-y-2 ml-2",
                            children: [i.jsx("li", {
                                children: "To create and maintain your account"
                            }), i.jsx("li", {
                                children: "To provide and improve our services"
                            }), i.jsx("li", {
                                children: "To respond to your inquiries and provide customer support"
                            }), i.jsx("li", {
                                children: "To send promotional communications (with your consent)"
                            }), i.jsx("li", {
                                children: "To analyze trends and improve user experience"
                            }), i.jsx("li", {
                                children: "To comply with legal obligations"
                            })]
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "4. Data Protection and Security"
                        }), i.jsx("p", {
                            children: "We implement administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security."
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "5. Data Sharing and Disclosure"
                        }), i.jsx("p", {
                            className: "mb-3",
                            children: "We may share your information with:"
                        }), i.jsxs("ul", {
                            className: "list-disc list-inside space-y-2 ml-2",
                            children: [i.jsx("li", {
                                children: "Service providers who assist us in operating our website and conducting our business"
                            }), i.jsx("li", {
                                children: "Legal authorities when required by law"
                            }), i.jsx("li", {
                                children: "Business partners with your consent"
                            })]
                        }), i.jsx("p", {
                            className: "mt-3",
                            children: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as described in this Privacy Policy."
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "6. Your Rights and Choices"
                        }), i.jsx("p", {
                            className: "mb-3",
                            children: "Depending on your location, you may have certain rights regarding your personal information:"
                        }), i.jsxs("ul", {
                            className: "list-disc list-inside space-y-2 ml-2",
                            children: [i.jsx("li", {
                                children: "Right to access your personal data"
                            }), i.jsx("li", {
                                children: "Right to correct inaccurate data"
                            }), i.jsx("li", {
                                children: "Right to delete your data (subject to legal obligations)"
                            }), i.jsx("li", {
                                children: "Right to opt-out of marketing communications"
                            }), i.jsx("li", {
                                children: "Right to data portability"
                            })]
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "7. Cookies and Tracking Technologies"
                        }), i.jsx("p", {
                            children: "Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. Please note that disabling cookies may affect the functionality of our website."
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "8. Children's Privacy"
                        }), i.jsx("p", {
                            children: "Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete such information and terminate the child's account."
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "9. Changes to This Privacy Policy"
                        }), i.jsx("p", {
                            children: 'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, and other factors. We will notify you of any material changes by posting the updated Privacy Policy on our website and updating the "Last updated" date.'
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "10. Contact Us"
                        }), i.jsx("p", {
                            children: "If you have questions about this Privacy Policy or our privacy practices, please contact us at:"
                        }), i.jsxs("div", {
                            className: "mt-3 text-sm",
                            children: [i.jsx("p", {
                                className: "font-semibold",
                                children: "CorpANIMUS"
                            }), i.jsx("p", {
                                children: "Email: privacy@corpanimus.com"
                            }), i.jsx("p", {
                                children: "Address: Bangalore, Karnataka, India"
                            })]
                        })]
                    })]
                })]
            })]
        })
    })
}

function fx({
    onClose: t
}) {
    return i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsxs("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsx("button", {
                onClick: t,
                className: "mb-6 text-[#0036FF] hover:text-blue-700 font-medium transition-colors",
                children: "← Back"
            }), i.jsxs("div", {
                className: "bg-white rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden",
                children: [i.jsxs("div", {
                    className: "bg-gradient-to-r from-[#0036FF] to-blue-600 px-8 py-12 text-white",
                    children: [i.jsx("h1", {
                        className: "text-4xl font-bold",
                        children: "Terms and Conditions"
                    }), i.jsx("p", {
                        className: "text-blue-100 mt-4",
                        children: "Last updated: November 2025"
                    })]
                }), i.jsxs("div", {
                    className: "p-8 space-y-8 text-gray-700 leading-relaxed",
                    children: [i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "1. Agreement to Terms"
                        }), i.jsx("p", {
                            children: 'By accessing and using CorpANIMUS ("Company," "we," "us," "our," or "Service"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our Service.'
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "2. Intellectual Property Rights"
                        }), i.jsx("p", {
                            className: "mb-3",
                            children: "Unless otherwise stated, CorpANIMUS and its suppliers own the intellectual property rights for all material on the Service. All intellectual property rights are reserved. You may access the Service for your personal, non-commercial use, subject to restrictions in these Terms and Conditions."
                        }), i.jsx("p", {
                            children: "You may not:"
                        }), i.jsxs("ul", {
                            className: "list-disc list-inside space-y-2 ml-2 mt-2",
                            children: [i.jsx("li", {
                                children: "Republish material from the Service without proper attribution"
                            }), i.jsx("li", {
                                children: "Sell, rent, or sub-license material from the Service"
                            }), i.jsx("li", {
                                children: "Reproduce, duplicate, or copy material from the Service for commercial purposes"
                            }), i.jsx("li", {
                                children: "Redistribute content from the Service unless the content is clearly marked for redistribution"
                            })]
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "3. User Responsibilities"
                        }), i.jsx("p", {
                            className: "mb-3",
                            children: "As a user of CorpANIMUS, you agree to:"
                        }), i.jsxs("ul", {
                            className: "list-disc list-inside space-y-2 ml-2",
                            children: [i.jsx("li", {
                                children: "Maintain the confidentiality of your account password"
                            }), i.jsx("li", {
                                children: "Accept responsibility for all activities that occur under your account"
                            }), i.jsx("li", {
                                children: "Provide accurate and complete information during registration"
                            }), i.jsx("li", {
                                children: "Comply with all applicable laws and regulations"
                            }), i.jsx("li", {
                                children: "Not engage in harassment, threatening, defamatory, or obscene conduct"
                            })]
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "4. Content You Provide"
                        }), i.jsx("p", {
                            children: "You retain all rights to any content you submit, post, or display on CorpANIMUS. By submitting content, you grant CorpANIMUS a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content. You warrant that you have the right to submit the content and that it does not violate any third-party rights."
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "5. Disclaimer of Warranties"
                        }), i.jsx("p", {
                            children: 'The Service is provided on an "AS IS" and "AS AVAILABLE" basis. CorpANIMUS makes no warranties, expressed or implied, regarding the Service. We disclaim all warranties including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.'
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "6. Limitation of Liability"
                        }), i.jsx("p", {
                            children: "In no event shall CorpANIMUS, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, arising out of or in connection with your use of the Service."
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "7. Indemnification"
                        }), i.jsx("p", {
                            children: "You agree to indemnify and hold harmless CorpANIMUS and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your violation of these Terms and Conditions or your violation of any third-party rights."
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "8. Termination"
                        }), i.jsx("p", {
                            children: "CorpANIMUS may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including if you breach the Terms and Conditions. Upon termination, your right to use the Service will immediately cease."
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "9. Modifications to Terms"
                        }), i.jsx("p", {
                            children: "CorpANIMUS may modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the Service constitutes acceptance of the modified Terms and Conditions."
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "10. Governing Law"
                        }), i.jsx("p", {
                            children: "These Terms and Conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
                        })]
                    }), i.jsxs("section", {
                        children: [i.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "11. Contact Information"
                        }), i.jsx("p", {
                            children: "If you have any questions about these Terms and Conditions, please contact us at:"
                        }), i.jsxs("div", {
                            className: "mt-3 text-sm",
                            children: [i.jsx("p", {
                                className: "font-semibold",
                                children: "CorpANIMUS"
                            }), i.jsx("p", {
                                children: "Email: legal@corpanimus.com"
                            }), i.jsx("p", {
                                children: "Address: Bangalore, Karnataka, India"
                            })]
                        })]
                    })]
                })]
            })]
        })
    })
}

function mx({
    currentPage: t,
    setCurrentPage: e
}) {
    const {
        user: r,
        profile: n,
        signOut: s
    } = sr();
    return !r || !n ? null : t === "account" ? i.jsx(dx, {
        onBack: () => e("dashboard")
    }) : t === "privacy" ? i.jsx(hx, {
        onClose: () => e("dashboard")
    }) : t === "terms" ? i.jsx(fx, {
        onClose: () => e("dashboard")
    }) : i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: i.jsxs("div", {
                className: "bg-white rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden",
                children: [i.jsx("div", {
                    className: "bg-gradient-to-r from-[#0036FF] to-blue-600 px-8 py-6 text-white",
                    children: i.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [i.jsxs("div", {
                            className: "flex items-center space-x-4",
                            children: [i.jsx("div", {
                                className: "w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center",
                                children: i.jsx(Lh, {
                                    className: "w-8 h-8"
                                })
                            }), i.jsxs("div", {
                                children: [i.jsxs("h1", {
                                    className: "text-3xl font-bold",
                                    children: ["Welcome, ", n.name]
                                }), i.jsx("p", {
                                    className: "text-blue-100",
                                    children: n.email
                                })]
                            })]
                        }), i.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [i.jsxs("button", {
                                onClick: () => e("home"),
                                className: "flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-colors",
                                children: [i.jsx(Ug, {
                                    className: "w-5 h-5"
                                }), i.jsx("span", {
                                    children: "Home"
                                })]
                            }), i.jsxs("button", {
                                onClick: s,
                                className: "flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-colors",
                                children: [i.jsx(Ph, {
                                    className: "w-5 h-5"
                                }), i.jsx("span", {
                                    children: "Sign Out"
                                })]
                            })]
                        })]
                    })
                }), i.jsxs("div", {
                    className: "p-8",
                    children: [i.jsxs("div", {
                        className: "grid md:grid-cols-3 gap-6 mb-8",
                        children: [i.jsxs("div", {
                            className: "bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100",
                            children: [i.jsx("h3", {
                                className: "text-sm font-medium text-gray-600 mb-2",
                                children: "Account Status"
                            }), i.jsx("p", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "Active"
                            })]
                        }), i.jsxs("div", {
                            className: "bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100",
                            children: [i.jsx("h3", {
                                className: "text-sm font-medium text-gray-600 mb-2",
                                children: "Role"
                            }), i.jsx("p", {
                                className: "text-2xl font-bold text-gray-900 capitalize",
                                children: n.role
                            })]
                        }), i.jsxs("div", {
                            className: "bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100",
                            children: [i.jsx("h3", {
                                className: "text-sm font-medium text-gray-600 mb-2",
                                children: "Member Since"
                            }), i.jsx("p", {
                                className: "text-2xl font-bold text-gray-900",
                                children: new Date(n.created_at).toLocaleDateString()
                            })]
                        })]
                    }), i.jsxs("div", {
                        className: "bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200",
                        children: [i.jsxs("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [i.jsx("h2", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "Profile Information"
                            }), i.jsx("button", {
                                onClick: () => e("account"),
                                className: "px-6 py-2 bg-gradient-to-r from-[#0036FF] to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all",
                                children: "Edit Account"
                            })]
                        }), i.jsxs("div", {
                            className: "space-y-4",
                            children: [i.jsxs("div", {
                                children: [i.jsx("label", {
                                    className: "text-sm font-medium text-gray-600",
                                    children: "Full Name"
                                }), i.jsx("p", {
                                    className: "text-lg text-gray-900",
                                    children: n.name
                                })]
                            }), i.jsxs("div", {
                                children: [i.jsx("label", {
                                    className: "text-sm font-medium text-gray-600",
                                    children: "Email Address"
                                }), i.jsx("p", {
                                    className: "text-lg text-gray-900",
                                    children: n.email
                                })]
                            }), i.jsxs("div", {
                                children: [i.jsx("label", {
                                    className: "text-sm font-medium text-gray-600",
                                    children: "Role"
                                }), i.jsx("p", {
                                    className: "text-lg text-gray-900 capitalize",
                                    children: n.role
                                })]
                            }), i.jsxs("div", {
                                children: [i.jsx("label", {
                                    className: "text-sm font-medium text-gray-600",
                                    children: "User ID"
                                }), i.jsx("p", {
                                    className: "text-sm text-gray-600 font-mono",
                                    children: n.id
                                })]
                            })]
                        })]
                    })]
                })]
            })
        })
    })
}

function px({
    onNavigate: t
}) {
    const {
        user: e,
        profile: r,
        signOut: n
    } = sr();
    if (!e || !r) return null;
    const s = [{
        icon: cl,
        title: "Knowledge Base",
        description: "Access articles and documentation",
        color: "from-blue-500 to-blue-600",
        page: "knowledge-base"
    }, {
        icon: bi,
        title: "Employees",
        description: "Team directory and profiles",
        color: "from-emerald-500 to-emerald-600",
        page: "employees"
    }, {
        icon: Th,
        title: "Projects",
        description: "View and manage projects",
        color: "from-purple-500 to-purple-600",
        page: "projects"
    }, {
        icon: ml,
        title: "Decisions",
        description: "Important business decisions",
        color: "from-orange-500 to-orange-600",
        page: "decisions"
    }, {
        icon: Eh,
        title: "Training",
        description: "Learning materials and courses",
        color: "from-cyan-500 to-cyan-600",
        page: "training"
    }, {
        icon: Gg,
        title: "Pricing",
        description: "View pricing plans",
        color: "from-rose-500 to-rose-600",
        page: "pricing"
    }];
    return i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
        children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: [i.jsxs("div", {
                className: "flex items-center justify-between mb-12",
                children: [i.jsxs("div", {
                    children: [i.jsxs("h1", {
                        className: "text-4xl font-bold text-gray-900 mb-2",
                        children: ["Welcome back, ", r.name]
                    }), i.jsx("p", {
                        className: "text-lg text-gray-600",
                        children: r.email
                    })]
                }), i.jsxs("button", {
                    onClick: () => n(),
                    className: "flex items-center space-x-2 px-6 py-3 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl transition-colors font-medium",
                    children: [i.jsx(Ph, {
                        className: "w-5 h-5"
                    }), i.jsx("span", {
                        children: "Sign Out"
                    })]
                })]
            }), i.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: s.map(o => {
                    const a = o.icon;
                    return i.jsxs("button", {
                        onClick: () => t(o.page),
                        className: "group relative p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl text-left overflow-hidden",
                        children: [i.jsx("div", {
                            className: `absolute inset-0 bg-gradient-to-br ${o.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`
                        }), i.jsxs("div", {
                            className: "relative z-10",
                            children: [i.jsx("div", {
                                className: `inline-flex p-3 rounded-xl bg-gradient-to-br ${o.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`,
                                children: i.jsx(a, {
                                    className: "w-6 h-6"
                                })
                            }), i.jsx("h3", {
                                className: "text-xl font-bold text-gray-900 mb-2",
                                children: o.title
                            }), i.jsx("p", {
                                className: "text-gray-600",
                                children: o.description
                            })]
                        }), i.jsx("div", {
                            className: `absolute bottom-0 left-0 h-1 bg-gradient-to-r ${o.color} w-0 group-hover:w-full transition-all duration-300`
                        })]
                    }, o.page)
                })
            })]
        })
    })
}

function gx({
    onBack: t
}) {
    const [e, r] = S.useState([]), [n, s] = S.useState(null), [o, a] = S.useState(!0), [l, c] = S.useState("all");
    S.useEffect(() => {
        u()
    }, []);
    const u = async () => {
        try {
            a(!0);
            const {
                data: d,
                error: p
            } = await ve.from("knowledge_base_articles").select("*").order("created_at", {
                ascending: !1
            });
            if (p) throw p;
            r(d || [])
        } catch (d) {
            console.error("Error fetching articles:", d)
        } finally {
            a(!1)
        }
    }, h = ["all", ...Array.from(new Set(e.map(d => d.category)))], f = l === "all" ? e : e.filter(d => d.category === l);
    return n ? i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsxs("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("button", {
                onClick: () => s(null),
                className: "flex items-center space-x-2 text-[#0036FF] hover:text-blue-700 mb-8 font-semibold",
                children: [i.jsx(Ce, {
                    className: "w-5 h-5"
                }), i.jsx("span", {
                    children: "Back to Articles"
                })]
            }), i.jsxs("div", {
                className: "bg-white rounded-3xl shadow-xl border-2 border-gray-200 p-8 md:p-12",
                children: [i.jsxs("div", {
                    className: "mb-6",
                    children: [i.jsx("span", {
                        className: "inline-block px-4 py-2 bg-blue-100 text-[#0036FF] rounded-full text-sm font-semibold mb-4",
                        children: n.category
                    }), i.jsx("h1", {
                        className: "text-4xl font-bold text-gray-900 mb-4",
                        children: n.title
                    }), i.jsx("p", {
                        className: "text-gray-600",
                        children: new Date(n.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })
                    })]
                }), i.jsx("div", {
                    className: "border-t-2 border-gray-100 pt-8 prose prose-lg max-w-none",
                    children: i.jsx("p", {
                        className: "text-lg text-gray-700 whitespace-pre-wrap",
                        children: n.content
                    })
                })]
            })]
        })
    }) : i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("button", {
                onClick: t,
                className: "flex items-center space-x-2 text-[#0036FF] hover:text-blue-700 mb-8 font-semibold",
                children: [i.jsx(Ce, {
                    className: "w-5 h-5"
                }), i.jsx("span", {
                    children: "Back Home"
                })]
            }), i.jsxs("div", {
                className: "mb-12",
                children: [i.jsx("h1", {
                    className: "text-4xl font-bold text-gray-900 mb-4",
                    children: "Knowledge Base"
                }), i.jsx("p", {
                    className: "text-lg text-gray-600",
                    children: "Explore articles and documentation to expand your knowledge"
                })]
            }), i.jsx("div", {
                className: "mb-8",
                children: i.jsx("div", {
                    className: "flex flex-wrap gap-3",
                    children: h.map(d => i.jsx("button", {
                        onClick: () => c(d),
                        className: `px-6 py-2 rounded-full font-semibold transition-all ${l===d?"bg-[#0036FF] text-white":"bg-white border-2 border-gray-200 text-gray-700 hover:border-[#0036FF]"}`,
                        children: d.charAt(0).toUpperCase() + d.slice(1)
                    }, d))
                })
            }), o ? i.jsxs("div", {
                className: "text-center py-12",
                children: [i.jsx("div", {
                    className: "inline-block",
                    children: i.jsx("div", {
                        className: "w-12 h-12 border-4 border-[#0036FF] border-t-transparent rounded-full animate-spin"
                    })
                }), i.jsx("p", {
                    className: "text-gray-600 mt-4",
                    children: "Loading articles..."
                })]
            }) : f.length > 0 ? i.jsx("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: f.map(d => i.jsxs("button", {
                    onClick: () => s(d),
                    className: "group bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-[#0036FF] hover:shadow-xl transition-all text-left",
                    children: [i.jsx("div", {
                        className: "mb-4",
                        children: i.jsx("span", {
                            className: "inline-block px-3 py-1 bg-blue-100 text-[#0036FF] rounded-full text-xs font-semibold",
                            children: d.category
                        })
                    }), i.jsx("h3", {
                        className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0036FF] transition-colors",
                        children: d.title
                    }), i.jsx("p", {
                        className: "text-gray-600 mb-4",
                        children: d.description
                    }), i.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [i.jsx("span", {
                            className: "text-sm text-gray-500",
                            children: new Date(d.created_at).toLocaleDateString()
                        }), i.jsx("span", {
                            className: "text-[#0036FF] font-semibold group-hover:translate-x-1 transition-transform",
                            children: "Read more →"
                        })]
                    })]
                }, d.id))
            }) : i.jsx("div", {
                className: "text-center py-12",
                children: i.jsx("p", {
                    className: "text-gray-600 text-lg",
                    children: "No articles found in this category"
                })
            })]
        })
    })
}

function xx({
    onBack: t
}) {
    const [e, r] = S.useState([]), [n, s] = S.useState(null), [o, a] = S.useState(!0), [l, c] = S.useState("all");
    S.useEffect(() => {
        u()
    }, []);
    const u = async () => {
        try {
            a(!0);
            const {
                data: d,
                error: p
            } = await ve.from("employees").select("*").order("name", {
                ascending: !0
            });
            if (p) throw p;
            r(d || [])
        } catch (d) {
            console.error("Error fetching employees:", d)
        } finally {
            a(!1)
        }
    }, h = ["all", ...Array.from(new Set(e.map(d => d.department)))], f = l === "all" ? e : e.filter(d => d.department === l);
    return n ? i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsxs("div", {
            className: "max-w-2xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("button", {
                onClick: () => s(null),
                className: "flex items-center space-x-2 text-[#0036FF] hover:text-blue-700 mb-8 font-semibold",
                children: [i.jsx(Ce, {
                    className: "w-5 h-5"
                }), i.jsx("span", {
                    children: "Back to Team"
                })]
            }), i.jsxs("div", {
                className: "bg-white rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden",
                children: [i.jsx("div", {
                    className: "bg-gradient-to-r from-[#0036FF] to-blue-600 h-32"
                }), i.jsxs("div", {
                    className: "px-8 pb-8",
                    children: [i.jsxs("div", {
                        className: "flex items-end space-x-6 mb-8 -mt-16",
                        children: [i.jsx("div", {
                            className: "w-32 h-32 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-2xl border-4 border-white flex items-center justify-center",
                            children: i.jsx("span", {
                                className: "text-5xl font-bold text-white",
                                children: n.name.charAt(0)
                            })
                        }), i.jsxs("div", {
                            children: [i.jsx("h1", {
                                className: "text-3xl font-bold text-gray-900",
                                children: n.name
                            }), i.jsx("p", {
                                className: "text-[#0036FF] font-semibold",
                                children: n.role
                            })]
                        })]
                    }), i.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
                        children: [i.jsxs("div", {
                            className: "flex items-center space-x-4 p-4 bg-gray-50 rounded-xl",
                            children: [i.jsx(hl, {
                                className: "w-5 h-5 text-[#0036FF]"
                            }), i.jsxs("div", {
                                children: [i.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Email"
                                }), i.jsx("p", {
                                    className: "text-gray-900 font-semibold",
                                    children: n.email
                                })]
                            })]
                        }), i.jsxs("div", {
                            className: "flex items-center space-x-4 p-4 bg-gray-50 rounded-xl",
                            children: [i.jsx(Bc, {
                                className: "w-5 h-5 text-[#0036FF]"
                            }), i.jsxs("div", {
                                children: [i.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Department"
                                }), i.jsx("p", {
                                    className: "text-gray-900 font-semibold",
                                    children: n.department
                                })]
                            })]
                        })]
                    }), n.bio && i.jsxs("div", {
                        className: "bg-blue-50 rounded-xl p-6 border-2 border-blue-100",
                        children: [i.jsx("h3", {
                            className: "font-bold text-gray-900 mb-3",
                            children: "Bio"
                        }), i.jsx("p", {
                            className: "text-gray-700",
                            children: n.bio
                        })]
                    })]
                })]
            })]
        })
    }) : i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("button", {
                onClick: t,
                className: "flex items-center space-x-2 text-[#0036FF] hover:text-blue-700 mb-8 font-semibold",
                children: [i.jsx(Ce, {
                    className: "w-5 h-5"
                }), i.jsx("span", {
                    children: "Back Home"
                })]
            }), i.jsxs("div", {
                className: "mb-12",
                children: [i.jsx("h1", {
                    className: "text-4xl font-bold text-gray-900 mb-4",
                    children: "Team Directory"
                }), i.jsx("p", {
                    className: "text-lg text-gray-600",
                    children: "Meet our talented team members"
                })]
            }), i.jsx("div", {
                className: "mb-8",
                children: i.jsx("div", {
                    className: "flex flex-wrap gap-3",
                    children: h.map(d => i.jsx("button", {
                        onClick: () => c(d),
                        className: `px-6 py-2 rounded-full font-semibold transition-all ${l===d?"bg-[#0036FF] text-white":"bg-white border-2 border-gray-200 text-gray-700 hover:border-[#0036FF]"}`,
                        children: d.charAt(0).toUpperCase() + d.slice(1)
                    }, d))
                })
            }), o ? i.jsxs("div", {
                className: "text-center py-12",
                children: [i.jsx("div", {
                    className: "inline-block",
                    children: i.jsx("div", {
                        className: "w-12 h-12 border-4 border-[#0036FF] border-t-transparent rounded-full animate-spin"
                    })
                }), i.jsx("p", {
                    className: "text-gray-600 mt-4",
                    children: "Loading team members..."
                })]
            }) : f.length > 0 ? i.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: f.map(d => i.jsxs("button", {
                    onClick: () => s(d),
                    className: "group bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-[#0036FF] hover:shadow-xl transition-all text-left",
                    children: [i.jsx("div", {
                        className: "w-16 h-16 bg-gradient-to-br from-[#0036FF] to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
                        children: i.jsx("span", {
                            className: "text-2xl font-bold text-white",
                            children: d.name.charAt(0)
                        })
                    }), i.jsx("h3", {
                        className: "text-xl font-bold text-gray-900 mb-1 group-hover:text-[#0036FF] transition-colors",
                        children: d.name
                    }), i.jsx("p", {
                        className: "text-[#0036FF] font-semibold text-sm mb-3",
                        children: d.role
                    }), i.jsxs("div", {
                        className: "flex items-center space-x-2 text-gray-600 text-sm mb-4",
                        children: [i.jsx(Bc, {
                            className: "w-4 h-4"
                        }), i.jsx("span", {
                            children: d.department
                        })]
                    }), i.jsx("p", {
                        className: "text-gray-600 text-sm line-clamp-2",
                        children: d.bio || "No bio available"
                    })]
                }, d.id))
            }) : i.jsx("div", {
                className: "text-center py-12",
                children: i.jsx("p", {
                    className: "text-gray-600 text-lg",
                    children: "No employees found in this department"
                })
            })]
        })
    })
}

function yx({
    onBack: t
}) {
    const [e, r] = S.useState([]), [n, s] = S.useState(null), [o, a] = S.useState(!0), [l, c] = S.useState("all");
    S.useEffect(() => {
        u()
    }, []);
    const u = async () => {
        try {
            a(!0);
            const {
                data: p,
                error: y
            } = await ve.from("projects").select("*").order("created_at", {
                ascending: !1
            });
            if (y) throw y;
            r(p || [])
        } catch (p) {
            console.error("Error fetching projects:", p)
        } finally {
            a(!1)
        }
    }, h = ["all", "planning", "active", "completed", "on-hold"], f = l === "all" ? e : e.filter(p => p.status === l), d = p => {
        switch (p) {
            case "planning":
                return "bg-yellow-100 text-yellow-800";
            case "active":
                return "bg-green-100 text-green-800";
            case "completed":
                return "bg-blue-100 text-blue-800";
            case "on-hold":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800"
        }
    };
    return n ? i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsxs("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("button", {
                onClick: () => s(null),
                className: "flex items-center space-x-2 text-[#0036FF] hover:text-blue-700 mb-8 font-semibold",
                children: [i.jsx(Ce, {
                    className: "w-5 h-5"
                }), i.jsx("span", {
                    children: "Back to Projects"
                })]
            }), i.jsxs("div", {
                className: "bg-white rounded-3xl shadow-xl border-2 border-gray-200 p-8 md:p-12",
                children: [i.jsxs("div", {
                    className: "flex items-center justify-between mb-8",
                    children: [i.jsx("h1", {
                        className: "text-4xl font-bold text-gray-900",
                        children: n.name
                    }), i.jsx("span", {
                        className: `px-4 py-2 rounded-full font-semibold text-sm ${d(n.status)}`,
                        children: n.status.charAt(0).toUpperCase() + n.status.slice(1)
                    })]
                }), i.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-6 mb-8 pb-8 border-b-2 border-gray-100",
                    children: [n.start_date && i.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [i.jsx(_r, {
                            className: "w-5 h-5 text-[#0036FF]"
                        }), i.jsxs("div", {
                            children: [i.jsx("p", {
                                className: "text-sm text-gray-600",
                                children: "Start Date"
                            }), i.jsx("p", {
                                className: "text-lg font-semibold text-gray-900",
                                children: new Date(n.start_date).toLocaleDateString()
                            })]
                        })]
                    }), n.end_date && i.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [i.jsx(_r, {
                            className: "w-5 h-5 text-[#0036FF]"
                        }), i.jsxs("div", {
                            children: [i.jsx("p", {
                                className: "text-sm text-gray-600",
                                children: "End Date"
                            }), i.jsx("p", {
                                className: "text-lg font-semibold text-gray-900",
                                children: new Date(n.end_date).toLocaleDateString()
                            })]
                        })]
                    })]
                }), i.jsxs("div", {
                    className: "bg-blue-50 rounded-xl p-6 border-2 border-blue-100",
                    children: [i.jsx("h3", {
                        className: "font-bold text-gray-900 mb-3",
                        children: "Description"
                    }), i.jsx("p", {
                        className: "text-gray-700 whitespace-pre-wrap",
                        children: n.description
                    })]
                })]
            })]
        })
    }) : i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("button", {
                onClick: t,
                className: "flex items-center space-x-2 text-[#0036FF] hover:text-blue-700 mb-8 font-semibold",
                children: [i.jsx(Ce, {
                    className: "w-5 h-5"
                }), i.jsx("span", {
                    children: "Back Home"
                })]
            }), i.jsxs("div", {
                className: "mb-12",
                children: [i.jsx("h1", {
                    className: "text-4xl font-bold text-gray-900 mb-4",
                    children: "Projects"
                }), i.jsx("p", {
                    className: "text-lg text-gray-600",
                    children: "View and manage our ongoing and completed projects"
                })]
            }), i.jsx("div", {
                className: "mb-8",
                children: i.jsx("div", {
                    className: "flex flex-wrap gap-3",
                    children: h.map(p => i.jsx("button", {
                        onClick: () => c(p),
                        className: `px-6 py-2 rounded-full font-semibold transition-all ${l===p?"bg-[#0036FF] text-white":"bg-white border-2 border-gray-200 text-gray-700 hover:border-[#0036FF]"}`,
                        children: p.charAt(0).toUpperCase() + p.slice(1)
                    }, p))
                })
            }), o ? i.jsxs("div", {
                className: "text-center py-12",
                children: [i.jsx("div", {
                    className: "inline-block",
                    children: i.jsx("div", {
                        className: "w-12 h-12 border-4 border-[#0036FF] border-t-transparent rounded-full animate-spin"
                    })
                }), i.jsx("p", {
                    className: "text-gray-600 mt-4",
                    children: "Loading projects..."
                })]
            }) : f.length > 0 ? i.jsx("div", {
                className: "space-y-4",
                children: f.map(p => i.jsxs("button", {
                    onClick: () => s(p),
                    className: "w-full group bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-[#0036FF] hover:shadow-xl transition-all text-left",
                    children: [i.jsxs("div", {
                        className: "flex items-start justify-between mb-4",
                        children: [i.jsx("h3", {
                            className: "text-xl font-bold text-gray-900 group-hover:text-[#0036FF] transition-colors flex-1",
                            children: p.name
                        }), i.jsx("span", {
                            className: `px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap ml-4 ${d(p.status)}`,
                            children: p.status.charAt(0).toUpperCase() + p.status.slice(1)
                        })]
                    }), i.jsx("p", {
                        className: "text-gray-600 mb-4 line-clamp-2",
                        children: p.description
                    }), i.jsxs("div", {
                        className: "flex items-center space-x-6 text-sm text-gray-600",
                        children: [p.start_date && i.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [i.jsx(_r, {
                                className: "w-4 h-4"
                            }), i.jsx("span", {
                                children: new Date(p.start_date).toLocaleDateString()
                            })]
                        }), p.end_date && i.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [i.jsx(_r, {
                                className: "w-4 h-4"
                            }), i.jsx("span", {
                                children: new Date(p.end_date).toLocaleDateString()
                            })]
                        })]
                    })]
                }, p.id))
            }) : i.jsx("div", {
                className: "text-center py-12",
                children: i.jsx("p", {
                    className: "text-gray-600 text-lg",
                    children: "No projects found in this status"
                })
            })]
        })
    })
}

function vx({
    onBack: t
}) {
    const [e, r] = S.useState([]), [n, s] = S.useState(null), [o, a] = S.useState(!0), [l, c] = S.useState("all");
    S.useEffect(() => {
        u()
    }, []);
    const u = async () => {
        try {
            a(!0);
            const {
                data: p,
                error: y
            } = await ve.from("decisions").select("*").order("decision_date", {
                ascending: !1
            });
            if (y) throw y;
            r(p || [])
        } catch (p) {
            console.error("Error fetching decisions:", p)
        } finally {
            a(!1)
        }
    }, h = ["all", "active", "archived", "superseded"], f = l === "all" ? e : e.filter(p => p.status === l), d = p => {
        switch (p) {
            case "active":
                return "bg-green-100 text-green-800";
            case "archived":
                return "bg-gray-100 text-gray-800";
            case "superseded":
                return "bg-orange-100 text-orange-800";
            default:
                return "bg-gray-100 text-gray-800"
        }
    };
    return n ? i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsxs("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("button", {
                onClick: () => s(null),
                className: "flex items-center space-x-2 text-[#0036FF] hover:text-blue-700 mb-8 font-semibold",
                children: [i.jsx(Ce, {
                    className: "w-5 h-5"
                }), i.jsx("span", {
                    children: "Back to Decisions"
                })]
            }), i.jsxs("div", {
                className: "bg-white rounded-3xl shadow-xl border-2 border-gray-200 p-8 md:p-12",
                children: [i.jsxs("div", {
                    className: "flex items-center justify-between mb-8",
                    children: [i.jsx("h1", {
                        className: "text-4xl font-bold text-gray-900",
                        children: n.title
                    }), i.jsx("span", {
                        className: `px-4 py-2 rounded-full font-semibold text-sm ${d(n.status)}`,
                        children: n.status.charAt(0).toUpperCase() + n.status.slice(1)
                    })]
                }), i.jsxs("div", {
                    className: "flex items-center space-x-4 mb-8 pb-8 border-b-2 border-gray-100",
                    children: [i.jsx(_r, {
                        className: "w-5 h-5 text-[#0036FF]"
                    }), i.jsxs("div", {
                        children: [i.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: "Decision Date"
                        }), i.jsx("p", {
                            className: "text-lg font-semibold text-gray-900",
                            children: new Date(n.decision_date).toLocaleDateString()
                        })]
                    })]
                }), i.jsxs("div", {
                    className: "bg-blue-50 rounded-xl p-6 border-2 border-blue-100",
                    children: [i.jsx("h3", {
                        className: "font-bold text-gray-900 mb-3",
                        children: "Description"
                    }), i.jsx("p", {
                        className: "text-gray-700 whitespace-pre-wrap",
                        children: n.description
                    })]
                })]
            })]
        })
    }) : i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("button", {
                onClick: t,
                className: "flex items-center space-x-2 text-[#0036FF] hover:text-blue-700 mb-8 font-semibold",
                children: [i.jsx(Ce, {
                    className: "w-5 h-5"
                }), i.jsx("span", {
                    children: "Back Home"
                })]
            }), i.jsxs("div", {
                className: "mb-12",
                children: [i.jsx("h1", {
                    className: "text-4xl font-bold text-gray-900 mb-4",
                    children: "Business Decisions"
                }), i.jsx("p", {
                    className: "text-lg text-gray-600",
                    children: "Important decisions and their outcomes"
                })]
            }), i.jsx("div", {
                className: "mb-8",
                children: i.jsx("div", {
                    className: "flex flex-wrap gap-3",
                    children: h.map(p => i.jsx("button", {
                        onClick: () => c(p),
                        className: `px-6 py-2 rounded-full font-semibold transition-all ${l===p?"bg-[#0036FF] text-white":"bg-white border-2 border-gray-200 text-gray-700 hover:border-[#0036FF]"}`,
                        children: p.charAt(0).toUpperCase() + p.slice(1)
                    }, p))
                })
            }), o ? i.jsxs("div", {
                className: "text-center py-12",
                children: [i.jsx("div", {
                    className: "inline-block",
                    children: i.jsx("div", {
                        className: "w-12 h-12 border-4 border-[#0036FF] border-t-transparent rounded-full animate-spin"
                    })
                }), i.jsx("p", {
                    className: "text-gray-600 mt-4",
                    children: "Loading decisions..."
                })]
            }) : f.length > 0 ? i.jsx("div", {
                className: "space-y-4",
                children: f.map(p => i.jsxs("button", {
                    onClick: () => s(p),
                    className: "w-full group bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-[#0036FF] hover:shadow-xl transition-all text-left",
                    children: [i.jsxs("div", {
                        className: "flex items-start justify-between mb-4",
                        children: [i.jsx("h3", {
                            className: "text-xl font-bold text-gray-900 group-hover:text-[#0036FF] transition-colors flex-1",
                            children: p.title
                        }), i.jsx("span", {
                            className: `px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap ml-4 ${d(p.status)}`,
                            children: p.status.charAt(0).toUpperCase() + p.status.slice(1)
                        })]
                    }), i.jsx("p", {
                        className: "text-gray-600 mb-4 line-clamp-2",
                        children: p.description
                    }), i.jsxs("div", {
                        className: "flex items-center space-x-2 text-sm text-gray-600",
                        children: [i.jsx(_r, {
                            className: "w-4 h-4"
                        }), i.jsx("span", {
                            children: new Date(p.decision_date).toLocaleDateString()
                        })]
                    })]
                }, p.id))
            }) : i.jsx("div", {
                className: "text-center py-12",
                children: i.jsx("p", {
                    className: "text-gray-600 text-lg",
                    children: "No decisions found"
                })
            })]
        })
    })
}

function wx({
    onBack: t
}) {
    const [e, r] = S.useState([]), [n, s] = S.useState(null), [o, a] = S.useState(!0), [l, c] = S.useState("all");
    S.useEffect(() => {
        u()
    }, []);
    const u = async () => {
        try {
            a(!0);
            const {
                data: d,
                error: p
            } = await ve.from("training_materials").select("*").order("created_at", {
                ascending: !1
            });
            if (p) throw p;
            r(d || [])
        } catch (d) {
            console.error("Error fetching training materials:", d)
        } finally {
            a(!1)
        }
    }, h = ["all", ...Array.from(new Set(e.map(d => d.category)))], f = l === "all" ? e : e.filter(d => d.category === l);
    return n ? i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsxs("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("button", {
                onClick: () => s(null),
                className: "flex items-center space-x-2 text-[#0036FF] hover:text-blue-700 mb-8 font-semibold",
                children: [i.jsx(Ce, {
                    className: "w-5 h-5"
                }), i.jsx("span", {
                    children: "Back to Training"
                })]
            }), i.jsxs("div", {
                className: "bg-white rounded-3xl shadow-xl border-2 border-gray-200 p-8 md:p-12",
                children: [i.jsxs("div", {
                    className: "mb-6",
                    children: [i.jsx("span", {
                        className: "inline-block px-4 py-2 bg-blue-100 text-[#0036FF] rounded-full text-sm font-semibold mb-4",
                        children: n.category
                    }), i.jsx("h1", {
                        className: "text-4xl font-bold text-gray-900 mb-4",
                        children: n.title
                    }), i.jsx("div", {
                        className: "flex items-center space-x-4 text-gray-600",
                        children: i.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [i.jsx(Zs, {
                                className: "w-5 h-5"
                            }), i.jsxs("span", {
                                children: [n.duration_minutes, " minutes"]
                            })]
                        })
                    })]
                }), i.jsx("div", {
                    className: "border-t-2 border-gray-100 pt-8 mb-8",
                    children: i.jsx("p", {
                        className: "text-lg text-gray-700 mb-4",
                        children: n.description
                    })
                }), i.jsxs("div", {
                    className: "bg-blue-50 rounded-xl p-6 border-2 border-blue-100",
                    children: [i.jsx("h3", {
                        className: "font-bold text-gray-900 mb-3",
                        children: "Course Content"
                    }), i.jsx("p", {
                        className: "text-gray-700 whitespace-pre-wrap",
                        children: n.content
                    })]
                })]
            })]
        })
    }) : i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("button", {
                onClick: t,
                className: "flex items-center space-x-2 text-[#0036FF] hover:text-blue-700 mb-8 font-semibold",
                children: [i.jsx(Ce, {
                    className: "w-5 h-5"
                }), i.jsx("span", {
                    children: "Back Home"
                })]
            }), i.jsxs("div", {
                className: "mb-12",
                children: [i.jsx("h1", {
                    className: "text-4xl font-bold text-gray-900 mb-4",
                    children: "Training & Learning"
                }), i.jsx("p", {
                    className: "text-lg text-gray-600",
                    children: "Develop your skills with our training materials"
                })]
            }), i.jsx("div", {
                className: "mb-8",
                children: i.jsx("div", {
                    className: "flex flex-wrap gap-3",
                    children: h.map(d => i.jsx("button", {
                        onClick: () => c(d),
                        className: `px-6 py-2 rounded-full font-semibold transition-all ${l===d?"bg-[#0036FF] text-white":"bg-white border-2 border-gray-200 text-gray-700 hover:border-[#0036FF]"}`,
                        children: d.charAt(0).toUpperCase() + d.slice(1)
                    }, d))
                })
            }), o ? i.jsxs("div", {
                className: "text-center py-12",
                children: [i.jsx("div", {
                    className: "inline-block",
                    children: i.jsx("div", {
                        className: "w-12 h-12 border-4 border-[#0036FF] border-t-transparent rounded-full animate-spin"
                    })
                }), i.jsx("p", {
                    className: "text-gray-600 mt-4",
                    children: "Loading training materials..."
                })]
            }) : f.length > 0 ? i.jsx("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: f.map(d => i.jsxs("button", {
                    onClick: () => s(d),
                    className: "group bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-[#0036FF] hover:shadow-xl transition-all text-left",
                    children: [i.jsxs("div", {
                        className: "mb-4 flex items-center justify-between",
                        children: [i.jsx("span", {
                            className: "inline-block px-3 py-1 bg-blue-100 text-[#0036FF] rounded-full text-xs font-semibold",
                            children: d.category
                        }), i.jsxs("div", {
                            className: "flex items-center space-x-1 text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded-full",
                            children: [i.jsx(Zs, {
                                className: "w-4 h-4"
                            }), i.jsxs("span", {
                                children: [d.duration_minutes, "min"]
                            })]
                        })]
                    }), i.jsx("h3", {
                        className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0036FF] transition-colors",
                        children: d.title
                    }), i.jsx("p", {
                        className: "text-gray-600 mb-4",
                        children: d.description
                    }), i.jsxs("div", {
                        className: "flex items-center space-x-2 text-[#0036FF] font-semibold group-hover:translate-x-1 transition-transform",
                        children: [i.jsx("span", {
                            children: "Start learning"
                        }), i.jsx("span", {
                            children: "→"
                        })]
                    })]
                }, d.id))
            }) : i.jsx("div", {
                className: "text-center py-12",
                children: i.jsx("p", {
                    className: "text-gray-600 text-lg",
                    children: "No training materials found in this category"
                })
            })]
        })
    })
}

function bx({
    onBack: t,
    onSelectPlan: e
}) {
    const {
        user: r
    } = sr(), n = [{
        name: "Starter",
        price: 29,
        description: "Perfect for individuals and small teams",
        features: ["Up to 5 team members", "Basic knowledge base access", "2 GB storage", "Email support", "Monthly reports", "Basic analytics"],
        cta: "Get Started",
        highlighted: !1
    }, {
        name: "Professional",
        price: 99,
        description: "For growing teams and businesses",
        features: ["Up to 25 team members", "Full knowledge base", "50 GB storage", "Priority email & chat support", "Weekly reports", "Advanced analytics", "Custom integrations", "API access"],
        cta: "Get Started",
        highlighted: !0
    }, {
        name: "Enterprise",
        price: 299,
        description: "For large organizations",
        features: ["Unlimited team members", "Complete feature set", "Unlimited storage", "24/7 dedicated support", "Daily reports", "Custom analytics", "White-label options", "Advanced security"],
        cta: "Contact Sales",
        highlighted: !1
    }];
    return i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [r && i.jsxs("button", {
                onClick: t,
                className: "flex items-center space-x-2 text-[#0036FF] hover:text-blue-700 mb-8 font-semibold",
                children: [i.jsx(Ce, {
                    className: "w-5 h-5"
                }), i.jsx("span", {
                    children: "Back Home"
                })]
            }), i.jsxs("div", {
                className: "text-center mb-16",
                children: [i.jsx("h1", {
                    className: "text-5xl font-bold text-gray-900 mb-4",
                    children: "Simple, Transparent Pricing"
                }), i.jsx("p", {
                    className: "text-xl text-gray-600 max-w-2xl mx-auto",
                    children: "Choose the perfect plan for your team. Always flexible, always fair."
                })]
            }), i.jsx("div", {
                className: "grid md:grid-cols-3 gap-8 mb-12",
                children: n.map((s, o) => i.jsxs("div", {
                    className: `rounded-3xl border-2 overflow-hidden transition-all ${s.highlighted?"border-[#0036FF] bg-white shadow-2xl relative md:scale-105 z-10":"border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg"}`,
                    children: [s.highlighted && i.jsx("div", {
                        className: "bg-gradient-to-r from-[#0036FF] to-blue-600 text-white py-2 text-center font-bold",
                        children: "Most Popular"
                    }), i.jsxs("div", {
                        className: "p-8",
                        children: [i.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-2",
                            children: s.name
                        }), i.jsx("p", {
                            className: "text-gray-600 text-sm mb-6",
                            children: s.description
                        }), i.jsxs("div", {
                            className: "mb-8",
                            children: [i.jsxs("span", {
                                className: "text-5xl font-bold text-gray-900",
                                children: ["$", s.price]
                            }), i.jsx("span", {
                                className: "text-gray-600 ml-2",
                                children: "/month"
                            })]
                        }), i.jsx("button", {
                            onClick: () => e == null ? void 0 : e(s.name, s.price),
                            className: `w-full py-3 px-6 rounded-xl font-bold transition-all mb-8 ${s.highlighted?"bg-gradient-to-r from-[#0036FF] to-blue-600 text-white hover:shadow-lg":"border-2 border-[#0036FF] text-[#0036FF] hover:bg-blue-50"}`,
                            children: s.cta
                        }), i.jsx("div", {
                            className: "space-y-4",
                            children: s.features.map((a, l) => i.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [i.jsx(Fh, {
                                    className: "w-5 h-5 text-green-500 flex-shrink-0"
                                }), i.jsx("span", {
                                    className: "text-gray-700",
                                    children: a
                                })]
                            }, l))
                        })]
                    })]
                }, o))
            }), i.jsxs("div", {
                className: "bg-gradient-to-r from-[#0036FF] to-blue-600 rounded-3xl p-12 text-center text-white",
                children: [i.jsx("h2", {
                    className: "text-3xl font-bold mb-4",
                    children: "Need a custom plan?"
                }), i.jsx("p", {
                    className: "text-blue-100 mb-6",
                    children: "Contact our sales team for enterprise solutions tailored to your needs"
                }), i.jsx("button", {
                    className: "px-8 py-3 bg-white text-[#0036FF] font-bold rounded-xl hover:shadow-lg transition-all",
                    children: "Contact Sales"
                })]
            })]
        })
    })
}

function jx({
    onBack: t
}) {
    const e = [{
        icon: cl,
        title: "Knowledge Base",
        description: "Comprehensive documentation and articles for quick reference. Search, filter, and organize information efficiently.",
        benefits: ["Full-text search", "Categorized articles", "Version control", "Collaborative editing"]
    }, {
        icon: bi,
        title: "Team Directory",
        description: "Central hub for team information. Manage employee profiles, departments, and organizational structure.",
        benefits: ["Employee profiles", "Department organization", "Contact information", "Team hierarchy"]
    }, {
        icon: Th,
        title: "Project Management",
        description: "Track projects from planning to completion. Monitor progress, deadlines, and team assignments.",
        benefits: ["Status tracking", "Timeline management", "Team assignments", "Milestone tracking"]
    }, {
        icon: ml,
        title: "Decision Logging",
        description: "Record and track important business decisions. Maintain a complete audit trail of organizational choices.",
        benefits: ["Decision history", "Status tracking", "Archive system", "Impact analysis"]
    }, {
        icon: Eh,
        title: "Training Materials",
        description: "Deliver comprehensive training content. Track completion and measure learning outcomes.",
        benefits: ["Course modules", "Duration tracking", "Category management", "Progress monitoring"]
    }, {
        icon: Ih,
        title: "Security & Privacy",
        description: "Enterprise-grade security with role-based access control. Your data is protected and encrypted.",
        benefits: ["Role-based access", "Data encryption", "Compliance ready", "Regular backups"]
    }, {
        icon: Ig,
        title: "Analytics & Reporting",
        description: "Gain insights with comprehensive analytics. Generate custom reports for better decision-making.",
        benefits: ["Usage analytics", "Custom reports", "Data visualization", "Export options"]
    }, {
        icon: Zs,
        title: "Real-time Collaboration",
        description: "Work together seamlessly. Real-time updates and notifications keep everyone in sync.",
        benefits: ["Live updates", "Notifications", "Change tracking", "Comments & mentions"]
    }];
    return i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [i.jsxs("button", {
                onClick: t,
                className: "flex items-center space-x-2 text-[#0036FF] hover:text-blue-700 mb-8 font-semibold",
                children: [i.jsx(Ce, {
                    className: "w-5 h-5"
                }), i.jsx("span", {
                    children: "Back Home"
                })]
            }), i.jsxs("div", {
                className: "text-center mb-16",
                children: [i.jsx("h1", {
                    className: "text-5xl font-bold text-gray-900 mb-4",
                    children: "Powerful Features"
                }), i.jsx("p", {
                    className: "text-xl text-gray-600 max-w-2xl mx-auto",
                    children: "Everything you need to manage, collaborate, and grow your organization"
                })]
            }), i.jsx("div", {
                className: "grid md:grid-cols-2 gap-8 mb-12",
                children: e.map((r, n) => {
                    const s = r.icon;
                    return i.jsxs("div", {
                        className: "bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-[#0036FF] hover:shadow-xl transition-all",
                        children: [i.jsx("div", {
                            className: "inline-flex p-3 rounded-xl bg-gradient-to-br from-[#0036FF] to-blue-600 text-white mb-6",
                            children: i.jsx(s, {
                                className: "w-6 h-6"
                            })
                        }), i.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-3",
                            children: r.title
                        }), i.jsx("p", {
                            className: "text-gray-600 mb-6",
                            children: r.description
                        }), i.jsx("div", {
                            className: "space-y-3",
                            children: r.benefits.map((o, a) => i.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [i.jsx("div", {
                                    className: "w-2 h-2 bg-[#0036FF] rounded-full"
                                }), i.jsx("span", {
                                    className: "text-gray-700",
                                    children: o
                                })]
                            }, a))
                        })]
                    }, n)
                })
            }), i.jsxs("div", {
                className: "bg-gradient-to-r from-[#0036FF] to-blue-600 rounded-3xl p-12 text-center text-white",
                children: [i.jsx("h2", {
                    className: "text-3xl font-bold mb-4",
                    children: "Ready to get started?"
                }), i.jsx("p", {
                    className: "text-blue-100 mb-8 text-lg",
                    children: "Join thousands of teams using our platform"
                }), i.jsx("button", {
                    className: "px-8 py-3 bg-white text-[#0036FF] font-bold rounded-xl hover:shadow-lg transition-all",
                    children: "Start Free Trial"
                })]
            })]
        })
    })
}

function Nx({
    planName: t,
    amount: e,
    onBack: r
}) {
    const {
        user: n,
        profile: s
    } = sr(), [o, a] = S.useState(!1), [l, c] = S.useState(""), [u, h] = S.useState(!1), [f, d] = S.useState(""), [p, y] = S.useState(""), [v, N] = S.useState(""), x = async m => {
        if (m.preventDefault(), !(!n || !s)) {
            a(!0), c("");
            try {
                const g = `${Date.now()}-${Math.random().toString(36).substr(2,9)}`,
                    {
                        error: w
                    } = await ve.from("payments").insert({
                        user_id: n.id,
                        stripe_payment_id: g,
                        amount: e * 100,
                        currency: "usd",
                        status: "completed",
                        receipt_email: s.email
                    });
                if (w) throw w;
                try {
                    await fetch("https://dwhgsyuudxinbbhpcrhe.supabase.co/functions/v1/send-receipt", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3aGdzeXV1ZHhpbmJiaHBjcmhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4MTY0MjYsImV4cCI6MjA3OTM5MjQyNn0.O1rrtW24-2p5kjcuKmZWTeouXH3s0XnaySl6o4way9s"
                        },
                        body: JSON.stringify({
                            email: s.email,
                            name: s.name,
                            planName: t,
                            amount: e,
                            paymentId: g,
                            date: new Date().toLocaleDateString()
                        })
                    })
                } catch {
                    console.log("Email sent (or in demo mode)")
                }
                h(!0)
            } catch (g) {
                c(g instanceof Error ? g.message : "Payment failed")
            } finally {
                a(!1)
            }
        }
    };
    return u ? i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsx("div", {
            className: "max-w-md mx-auto px-4",
            children: i.jsxs("div", {
                className: "bg-white rounded-3xl shadow-xl border-2 border-gray-200 p-8 text-center",
                children: [i.jsx("div", {
                    className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",
                    children: i.jsx(Ch, {
                        className: "w-8 h-8 text-green-600"
                    })
                }), i.jsx("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-4",
                    children: "Payment Successful!"
                }), i.jsxs("p", {
                    className: "text-gray-600 mb-6",
                    children: ["Thank you for your subscription. A receipt has been sent to ", s == null ? void 0 : s.email]
                }), i.jsxs("div", {
                    className: "bg-blue-50 rounded-xl p-6 border-2 border-blue-100 mb-8 text-left",
                    children: [i.jsxs("div", {
                        className: "mb-4",
                        children: [i.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: "Plan"
                        }), i.jsx("p", {
                            className: "text-lg font-bold text-gray-900",
                            children: t
                        })]
                    }), i.jsxs("div", {
                        children: [i.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: "Amount Paid"
                        }), i.jsxs("p", {
                            className: "text-lg font-bold text-gray-900",
                            children: ["$", e, "/month"]
                        })]
                    })]
                }), i.jsx("button", {
                    onClick: r,
                    className: "w-full px-6 py-3 bg-gradient-to-r from-[#0036FF] to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transition-all",
                    children: "Back to Home"
                })]
            })
        })
    }) : i.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12",
        children: i.jsxs("div", {
            className: "max-w-md mx-auto px-4",
            children: [i.jsxs("button", {
                onClick: r,
                className: "flex items-center space-x-2 text-[#0036FF] hover:text-blue-700 mb-8 font-semibold",
                children: [i.jsx(Ce, {
                    className: "w-5 h-5"
                }), i.jsx("span", {
                    children: "Back"
                })]
            }), i.jsxs("div", {
                className: "bg-white rounded-3xl shadow-xl border-2 border-gray-200 p-8",
                children: [i.jsx("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-2",
                    children: "Complete Payment"
                }), i.jsxs("p", {
                    className: "text-gray-600 mb-8",
                    children: ["Subscribe to ", t]
                }), l && i.jsxs("div", {
                    className: "mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start space-x-3",
                    children: [i.jsx(ll, {
                        className: "w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                    }), i.jsx("span", {
                        className: "text-red-700",
                        children: l
                    })]
                }), i.jsxs("form", {
                    onSubmit: x,
                    className: "space-y-6",
                    children: [i.jsxs("div", {
                        children: [i.jsx("label", {
                            className: "block text-sm font-semibold text-gray-900 mb-2",
                            children: "Card Number"
                        }), i.jsx("input", {
                            type: "text",
                            placeholder: "4242 4242 4242 4242",
                            value: f,
                            onChange: m => d(m.target.value.replace(/\s/g, "")),
                            required: !0,
                            className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0036FF] focus:outline-none"
                        })]
                    }), i.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [i.jsxs("div", {
                            children: [i.jsx("label", {
                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                children: "Expiry"
                            }), i.jsx("input", {
                                type: "text",
                                placeholder: "MM/YY",
                                value: p,
                                onChange: m => y(m.target.value),
                                required: !0,
                                className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0036FF] focus:outline-none"
                            })]
                        }), i.jsxs("div", {
                            children: [i.jsx("label", {
                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                children: "CVC"
                            }), i.jsx("input", {
                                type: "text",
                                placeholder: "123",
                                value: v,
                                onChange: m => N(m.target.value.slice(0, 3)),
                                required: !0,
                                className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0036FF] focus:outline-none"
                            })]
                        })]
                    }), i.jsxs("div", {
                        className: "bg-blue-50 rounded-xl p-4 border-2 border-blue-100",
                        children: [i.jsxs("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [i.jsx("span", {
                                className: "text-gray-600",
                                children: "Subtotal"
                            }), i.jsxs("span", {
                                className: "font-semibold text-gray-900",
                                children: ["$", e]
                            })]
                        }), i.jsxs("div", {
                            className: "border-t-2 border-blue-200 pt-2 flex items-center justify-between",
                            children: [i.jsx("span", {
                                className: "font-bold text-gray-900",
                                children: "Total"
                            }), i.jsxs("span", {
                                className: "text-xl font-bold text-[#0036FF]",
                                children: ["$", e]
                            })]
                        })]
                    }), i.jsx("button", {
                        type: "submit",
                        disabled: o,
                        className: "w-full py-3 bg-gradient-to-r from-[#0036FF] to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-50",
                        children: o ? "Processing..." : "Pay Now"
                    })]
                }), i.jsx("p", {
                    className: "text-xs text-gray-500 text-center mt-6",
                    children: "For demo purposes, use card 4242 4242 4242 4242"
                })]
            })]
        })
    })
}

function kx() {
    const {
        user: t,
        loading: e
    } = sr(), [r, n] = S.useState(!1), [s, o] = S.useState("login"), [a, l] = S.useState("home"), [c, u] = S.useState(null), h = d => {
        o(d), n(!0)
    }, f = () => {
        n(!1)
    };
    return e ? i.jsx("div", {
        className: "min-h-screen bg-white flex items-center justify-center",
        children: i.jsxs("div", {
            className: "text-center",
            children: [i.jsx("div", {
                className: "w-16 h-16 border-4 border-[#0036FF] border-t-transparent rounded-full animate-spin mx-auto mb-4"
            }), i.jsx("p", {
                className: "text-gray-600",
                children: "Loading..."
            })]
        })
    }) : t ? a === "home" ? i.jsx(px, {
        onNavigate: l
    }) : a === "knowledge-base" ? i.jsx(gx, {
        onBack: () => l("home")
    }) : a === "employees" ? i.jsx(xx, {
        onBack: () => l("home")
    }) : a === "projects" ? i.jsx(yx, {
        onBack: () => l("home")
    }) : a === "decisions" ? i.jsx(vx, {
        onBack: () => l("home")
    }) : a === "training" ? i.jsx(wx, {
        onBack: () => l("home")
    }) : a === "pricing" ? i.jsx(bx, {
        onBack: () => l("home"),
        onSelectPlan: (d, p) => {
            u({
                name: d,
                amount: p
            }), l("payment")
        }
    }) : a === "features" ? i.jsx(jx, {
        onBack: () => l("home")
    }) : a === "payment" && c ? i.jsx(Nx, {
        planName: c.name,
        amount: c.amount,
        onBack: () => l("home")
    }) : i.jsx(mx, {
        currentPage: a,
        setCurrentPage: l
    }) : i.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [i.jsx(Yg, {
            onAuthClick: h
        }), i.jsx(Xg, {}), i.jsx(ex, {}), i.jsx(tx, {}), i.jsx(rx, {}), i.jsx(nx, {}), i.jsx(sx, {}), i.jsx(ix, {}), i.jsx(ox, {}), i.jsx(ax, {}), i.jsx(lx, {}), i.jsx(ux, {
            setCurrentPage: l
        }), r && i.jsx(cx, {
            mode: s,
            onClose: f
        })]
    })
}

function _x() {
    return i.jsx(Fg, {
        children: i.jsx(kx, {})
    })
}
rh(document.getElementById("root")).render(i.jsx(S.StrictMode, {
    children: i.jsx(_x, {})
}));