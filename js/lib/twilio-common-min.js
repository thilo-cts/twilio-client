/*! twilio-common.js 0.1.5

The following license applies to all parts of this software except as
documented below.

    Copyright (c) 2015, Twilio, inc.
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are
    met:

      1. Redistributions of source code must retain the above copyright
         notice, this list of conditions and the following disclaimer.

      2. Redistributions in binary form must reproduce the above copyright
         notice, this list of conditions and the following disclaimer in
         the documentation and/or other materials provided with the
         distribution.

      3. Neither the name of Twilio nor the names of its contributors may
         be used to endorse or promote products derived from this software
         without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
    "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
    LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
    A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
    HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
    SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
    LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

This software includes buffer under the following license.

    The MIT License (MIT)

    Copyright (c) Feross Aboukhadijeh, and other contributors.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

This software includes code under the following license.

    Copyright Joyent, Inc. and other Node contributors.

    Permission is hereby granted, free of charge, to any person obtaining a
    copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to permit
    persons to whom the Software is furnished to do so, subject to the
    following conditions:

    The above copyright notice and this permission notice shall be included
    in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    USE OR OTHER DEALINGS IN THE SOFTWARE.

This software includes es6-promise under the following license:

    Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

 */
! function(t) {
    var e = function() {
        var t = 2,
            e = function r(t, e, n) {
                function i(s, u) { if (!e[s]) { if (!t[s]) { var a = "function" == typeof require && require; if (!u && a) return a(s, !0); if (o) return o(s, !0); var f = new Error("Cannot find module '" + s + "'"); throw f.code = "MODULE_NOT_FOUND", f } var c = e[s] = { exports: {} };
                        t[s][0].call(c.exports, function(e) { var r = t[s][1][e]; return i(r ? r : e) }, c, c.exports, r, t, e, n) } return e[s].exports } for (var o = "function" == typeof require && require, s = 0; s < n.length; s++) i(n[s]); return i }({
                1: [function(t, e, r) {
                    (function(r, n) { "use strict";

                        function i(t) { if (!(this instanceof i)) return new i(t);
                            l.call(this); var e = null,
                                r = null,
                                n = !1,
                                o = null,
                                s = t,
                                u = null,
                                a = null,
                                f = null;
                            Object.defineProperties(this, { _expires: { get: function() { return e }, set: function(t) { e = t } }, _identity: { get: function() { return r }, set: function(t) { r = t } }, _isExpired: { get: function() { return n }, set: function(t) { n = t } }, _pendingUpdate: { get: function() { return o }, set: function(t) { o = t } }, _token: { get: function() { return s }, set: function(t) { s = t } }, _tokenExpiredTimer: { get: function() { return u }, set: function(t) { u = t } }, _tokenUpdatedTimer: { get: function() { return a }, set: function(t) { a = t } }, _tokenPayload: { get: function() { return f }, set: function(t) { f = t } }, expires: { enumerable: !0, get: function() { return e } }, identity: { enumerable: !0, get: function() { return r } }, isExpired: { enumerable: !0, get: function() { return n } }, token: { enumerable: !0, get: function() { return s } } }); var c = this.updateToken(t);
                            c["catch"](function(t) { this._pendingUpdate === c && this.emit("error", t) }.bind(this)) }

                        function o(t) { var e = t.split("."); if (3 !== e.length) throw new Error("Token is invalid or malformed"); var r = e[1],
                                n = s(r),
                                i = JSON.parse(n); return i }

                        function s(t) { var e = t.length % 4; if (e > 0) { var r = 4 - e;
                                t += new Array(r + 1).join("=") } return t = t.replace(/-/g, "+").replace(/_/g, "/"), u(t) }

                        function u(t) { return new n(t, "base64").toString() }

                        function a(t) { var e = null; return !t.grants && t.scope ? e = f(t.scope) : t.grants instanceof Array ? e = c(t.grants) : "object" == typeof t.grants && (e = h(t.grants)), e }

                        function f(t) { var e = decodeURIComponent(t).match(/identity=(.*?)(&|$)/i); return e && decodeURIComponent(e[1]) }

                        function c(t) { for (var e = null, r = 0; r < t.length; r++) { var n = t[r]; if (n && "string" == typeof n.res) { var i = n.res.match(/^sip:(.*)@/); if (i) { e = decodeURIComponent(i[1]); break } } } return e }

                        function h(t) { return t.identity || null } var l = t("events").EventEmitter,
                            p = t("util").inherits,
                            d = r.Promise || t("es6-promise").Promise;
                        p(i, l), i.prototype.updateToken = function(t) { var e = this,
                                r = new d(function(r) { var n = o(t);
                                    e._identity = a(n), clearTimeout(e._tokenUpdatedTimer), e._tokenUpdatedTimer = setTimeout(function() { e._tokenUpdatedTimer = null, e.emit("tokenUpdated", e) }), e._expires = new Date(1e3 * n.exp), e._isExpired = Date.now() >= e.expires, clearTimeout(e._tokenExpiredTimer), e._tokenExpiredTimer = setTimeout(function() { e._isExpired = !0, e._tokenExpiredTimer = null, e.emit("tokenExpired", e) }, e.expires - Date.now()), e._token = t, e._tokenPayload = n, r(e) }); return this._pendingUpdate = r, r }, e.exports = i }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer) }, { buffer: 3, "es6-promise": 12, events: 7, util: 11 }],
                2: [function(t, e, r) { "use strict";
                    e.exports.AccessManager = t("./accessmanager") }, { "./accessmanager": 1 }],
                3: [function(t, e, r) {
                    (function(e) { "use strict";

                        function n() {
                            function t() {} try { var e = new Uint8Array(1); return e.foo = function() { return 42 }, e.constructor = t, 42 === e.foo() && e.constructor === t && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength } catch (r) { return !1 } }

                        function i() { return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

                        function o(t) { return this instanceof o ? (o.TYPED_ARRAY_SUPPORT || (this.length = 0, this.parent = void 0), "number" == typeof t ? s(this, t) : "string" == typeof t ? u(this, t, arguments.length > 1 ? arguments[1] : "utf8") : a(this, t)) : arguments.length > 1 ? new o(t, arguments[1]) : new o(t) }

                        function s(t, e) { if (t = g(t, 0 > e ? 0 : 0 | y(e)), !o.TYPED_ARRAY_SUPPORT)
                                for (var r = 0; e > r; r++) t[r] = 0; return t }

                        function u(t, e, r) { "string" == typeof r && "" !== r || (r = "utf8"); var n = 0 | w(e, r); return t = g(t, n), t.write(e, r), t }

                        function a(t, e) { if (o.isBuffer(e)) return f(t, e); if (K(e)) return c(t, e); if (null == e) throw new TypeError("must start with number, buffer, array or string"); if ("undefined" != typeof ArrayBuffer) { if (e.buffer instanceof ArrayBuffer) return h(t, e); if (e instanceof ArrayBuffer) return l(t, e) } return e.length ? p(t, e) : d(t, e) }

                        function f(t, e) { var r = 0 | y(e.length); return t = g(t, r), e.copy(t, 0, 0, r), t }

                        function c(t, e) { var r = 0 | y(e.length);
                            t = g(t, r); for (var n = 0; r > n; n += 1) t[n] = 255 & e[n]; return t }

                        function h(t, e) { var r = 0 | y(e.length);
                            t = g(t, r); for (var n = 0; r > n; n += 1) t[n] = 255 & e[n]; return t }

                        function l(t, e) { return o.TYPED_ARRAY_SUPPORT ? (e.byteLength, t = o._augment(new Uint8Array(e))) : t = h(t, new Uint8Array(e)), t }

                        function p(t, e) { var r = 0 | y(e.length);
                            t = g(t, r); for (var n = 0; r > n; n += 1) t[n] = 255 & e[n]; return t }

                        function d(t, e) { var r, n = 0; "Buffer" === e.type && K(e.data) && (r = e.data, n = 0 | y(r.length)), t = g(t, n); for (var i = 0; n > i; i += 1) t[i] = 255 & r[i]; return t }

                        function g(t, e) { o.TYPED_ARRAY_SUPPORT ? (t = o._augment(new Uint8Array(e)), t.__proto__ = o.prototype) : (t.length = e, t._isBuffer = !0); var r = 0 !== e && e <= o.poolSize >>> 1; return r && (t.parent = W), t }

                        function y(t) { if (t >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes"); return 0 | t }

                        function v(t, e) { if (!(this instanceof v)) return new v(t, e); var r = new o(t, e); return delete r.parent, r }

                        function w(t, e) { "string" != typeof t && (t = "" + t); var r = t.length; if (0 === r) return 0; for (var n = !1;;) switch (e) {
                                case "ascii":
                                case "binary":
                                case "raw":
                                case "raws":
                                    return r;
                                case "utf8":
                                case "utf-8":
                                    return J(t).length;
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return 2 * r;
                                case "hex":
                                    return r >>> 1;
                                case "base64":
                                    return H(t).length;
                                default:
                                    if (n) return J(t).length;
                                    e = ("" + e).toLowerCase(), n = !0 } }

                        function _(t, e, r) { var n = !1; if (e = 0 | e, r = void 0 === r || r === 1 / 0 ? this.length : 0 | r, t || (t = "utf8"), 0 > e && (e = 0), r > this.length && (r = this.length), e >= r) return ""; for (;;) switch (t) {
                                case "hex":
                                    return P(this, e, r);
                                case "utf8":
                                case "utf-8":
                                    return R(this, e, r);
                                case "ascii":
                                    return L(this, e, r);
                                case "binary":
                                    return S(this, e, r);
                                case "base64":
                                    return T(this, e, r);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return x(this, e, r);
                                default:
                                    if (n) throw new TypeError("Unknown encoding: " + t);
                                    t = (t + "").toLowerCase(), n = !0 } }

                        function E(t, e, r, n) { r = Number(r) || 0; var i = t.length - r;
                            n ? (n = Number(n), n > i && (n = i)) : n = i; var o = e.length; if (o % 2 !== 0) throw new Error("Invalid hex string");
                            n > o / 2 && (n = o / 2); for (var s = 0; n > s; s++) { var u = parseInt(e.substr(2 * s, 2), 16); if (isNaN(u)) throw new Error("Invalid hex string");
                                t[r + s] = u } return s }

                        function m(t, e, r, n) { return G(J(e, t.length - r), t, r, n) }

                        function b(t, e, r, n) { return G(q(e), t, r, n) }

                        function A(t, e, r, n) { return b(t, e, r, n) }

                        function U(t, e, r, n) { return G(H(e), t, r, n) }

                        function I(t, e, r, n) { return G($(e, t.length - r), t, r, n) }

                        function T(t, e, r) { return 0 === e && r === t.length ? Z.fromByteArray(t) : Z.fromByteArray(t.slice(e, r)) }

                        function R(t, e, r) { r = Math.min(t.length, r); for (var n = [], i = e; r > i;) { var o = t[i],
                                    s = null,
                                    u = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1; if (r >= i + u) { var a, f, c, h; switch (u) {
                                        case 1:
                                            128 > o && (s = o); break;
                                        case 2:
                                            a = t[i + 1], 128 === (192 & a) && (h = (31 & o) << 6 | 63 & a, h > 127 && (s = h)); break;
                                        case 3:
                                            a = t[i + 1], f = t[i + 2], 128 === (192 & a) && 128 === (192 & f) && (h = (15 & o) << 12 | (63 & a) << 6 | 63 & f, h > 2047 && (55296 > h || h > 57343) && (s = h)); break;
                                        case 4:
                                            a = t[i + 1], f = t[i + 2], c = t[i + 3], 128 === (192 & a) && 128 === (192 & f) && 128 === (192 & c) && (h = (15 & o) << 18 | (63 & a) << 12 | (63 & f) << 6 | 63 & c, h > 65535 && 1114112 > h && (s = h)) } }
                                null === s ? (s = 65533, u = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), n.push(s), i += u } return B(n) }

                        function B(t) { var e = t.length; if (Q >= e) return String.fromCharCode.apply(String, t); for (var r = "", n = 0; e > n;) r += String.fromCharCode.apply(String, t.slice(n, n += Q)); return r }

                        function L(t, e, r) { var n = "";
                            r = Math.min(t.length, r); for (var i = e; r > i; i++) n += String.fromCharCode(127 & t[i]); return n }

                        function S(t, e, r) { var n = "";
                            r = Math.min(t.length, r); for (var i = e; r > i; i++) n += String.fromCharCode(t[i]); return n }

                        function P(t, e, r) { var n = t.length;
                            (!e || 0 > e) && (e = 0), (!r || 0 > r || r > n) && (r = n); for (var i = "", o = e; r > o; o++) i += F(t[o]); return i }

                        function x(t, e, r) { for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]); return i }

                        function O(t, e, r) { if (t % 1 !== 0 || 0 > t) throw new RangeError("offset is not uint"); if (t + e > r) throw new RangeError("Trying to access beyond buffer length") }

                        function D(t, e, r, n, i, s) { if (!o.isBuffer(t)) throw new TypeError("buffer must be a Buffer instance"); if (e > i || s > e) throw new RangeError("value is out of bounds"); if (r + n > t.length) throw new RangeError("index out of range") }

                        function Y(t, e, r, n) { 0 > e && (e = 65535 + e + 1); for (var i = 0, o = Math.min(t.length - r, 2); o > i; i++) t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i) }

                        function M(t, e, r, n) { 0 > e && (e = 4294967295 + e + 1); for (var i = 0, o = Math.min(t.length - r, 4); o > i; i++) t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255 }

                        function C(t, e, r, n, i, o) { if (e > i || o > e) throw new RangeError("value is out of bounds"); if (r + n > t.length) throw new RangeError("index out of range"); if (0 > r) throw new RangeError("index out of range") }

                        function j(t, e, r, n, i) { return i || C(t, e, r, 4, 3.4028234663852886e38, -3.4028234663852886e38), X.write(t, e, r, n, 23, 4), r + 4 }

                        function k(t, e, r, n, i) { return i || C(t, e, r, 8, 1.7976931348623157e308, -1.7976931348623157e308), X.write(t, e, r, n, 52, 8), r + 8 }

                        function N(t) { if (t = z(t).replace(tt, ""), t.length < 2) return ""; for (; t.length % 4 !== 0;) t += "="; return t }

                        function z(t) { return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "") }

                        function F(t) { return 16 > t ? "0" + t.toString(16) : t.toString(16) }

                        function J(t, e) { e = e || 1 / 0; for (var r, n = t.length, i = null, o = [], s = 0; n > s; s++) { if (r = t.charCodeAt(s), r > 55295 && 57344 > r) { if (!i) { if (r > 56319) {
                                            (e -= 3) > -1 && o.push(239, 191, 189); continue } if (s + 1 === n) {
                                            (e -= 3) > -1 && o.push(239, 191, 189); continue }
                                        i = r; continue } if (56320 > r) {
                                        (e -= 3) > -1 && o.push(239, 191, 189), i = r; continue }
                                    r = (i - 55296 << 10 | r - 56320) + 65536 } else i && (e -= 3) > -1 && o.push(239, 191, 189); if (i = null, 128 > r) { if ((e -= 1) < 0) break;
                                    o.push(r) } else if (2048 > r) { if ((e -= 2) < 0) break;
                                    o.push(r >> 6 | 192, 63 & r | 128) } else if (65536 > r) { if ((e -= 3) < 0) break;
                                    o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128) } else { if (!(1114112 > r)) throw new Error("Invalid code point"); if ((e -= 4) < 0) break;
                                    o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128) } } return o }

                        function q(t) { for (var e = [], r = 0; r < t.length; r++) e.push(255 & t.charCodeAt(r)); return e }

                        function $(t, e) { for (var r, n, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); s++) r = t.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n); return o }

                        function H(t) { return Z.toByteArray(N(t)) }

                        function G(t, e, r, n) { for (var i = 0; n > i && !(i + r >= e.length || i >= t.length); i++) e[i + r] = t[i]; return i } var Z = t("base64-js"),
                            X = t("ieee754"),
                            K = t("isarray");
                        r.Buffer = o, r.SlowBuffer = v, r.INSPECT_MAX_BYTES = 50, o.poolSize = 8192; var W = {};
                        o.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : n(), o.TYPED_ARRAY_SUPPORT ? (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array) : (o.prototype.length = void 0, o.prototype.parent = void 0), o.isBuffer = function(t) { return !(null == t || !t._isBuffer) }, o.compare = function(t, e) { if (!o.isBuffer(t) || !o.isBuffer(e)) throw new TypeError("Arguments must be Buffers"); if (t === e) return 0; for (var r = t.length, n = e.length, i = 0, s = Math.min(r, n); s > i && t[i] === e[i];) ++i; return i !== s && (r = t[i], n = e[i]), n > r ? -1 : r > n ? 1 : 0 }, o.isEncoding = function(t) { switch (String(t).toLowerCase()) {
                                case "hex":
                                case "utf8":
                                case "utf-8":
                                case "ascii":
                                case "binary":
                                case "base64":
                                case "raw":
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return !0;
                                default:
                                    return !1 } }, o.concat = function(t, e) { if (!K(t)) throw new TypeError("list argument must be an Array of Buffers."); if (0 === t.length) return new o(0); var r; if (void 0 === e)
                                for (e = 0, r = 0; r < t.length; r++) e += t[r].length; var n = new o(e),
                                i = 0; for (r = 0; r < t.length; r++) { var s = t[r];
                                s.copy(n, i), i += s.length } return n }, o.byteLength = w, o.prototype.toString = function() { var t = 0 | this.length; return 0 === t ? "" : 0 === arguments.length ? R(this, 0, t) : _.apply(this, arguments) }, o.prototype.equals = function(t) { if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); return this === t ? !0 : 0 === o.compare(this, t) }, o.prototype.inspect = function() { var t = "",
                                e = r.INSPECT_MAX_BYTES; return this.length > 0 && (t = this.toString("hex", 0, e).match(/.{2}/g).join(" "), this.length > e && (t += " ... ")), "<Buffer " + t + ">" }, o.prototype.compare = function(t) { if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); return this === t ? 0 : o.compare(this, t) }, o.prototype.indexOf = function(t, e) {
                            function r(t, e, r) { for (var n = -1, i = 0; r + i < t.length; i++)
                                    if (t[r + i] === e[-1 === n ? 0 : i - n]) { if (-1 === n && (n = i), i - n + 1 === e.length) return r + n } else n = -1;
                                return -1 } if (e > 2147483647 ? e = 2147483647 : -2147483648 > e && (e = -2147483648), e >>= 0, 0 === this.length) return -1; if (e >= this.length) return -1; if (0 > e && (e = Math.max(this.length + e, 0)), "string" == typeof t) return 0 === t.length ? -1 : String.prototype.indexOf.call(this, t, e); if (o.isBuffer(t)) return r(this, t, e); if ("number" == typeof t) return o.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, t, e) : r(this, [t], e); throw new TypeError("val must be string, number or Buffer") }, o.prototype.get = function(t) { return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(t) }, o.prototype.set = function(t, e) { return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(t, e) }, o.prototype.write = function(t, e, r, n) { if (void 0 === e) n = "utf8", r = this.length, e = 0;
                            else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
                            else if (isFinite(e)) e = 0 | e, isFinite(r) ? (r = 0 | r, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                            else { var i = n;
                                n = e, e = 0 | r, r = i } var o = this.length - e; if ((void 0 === r || r > o) && (r = o), t.length > 0 && (0 > r || 0 > e) || e > this.length) throw new RangeError("attempt to write outside buffer bounds");
                            n || (n = "utf8"); for (var s = !1;;) switch (n) {
                                case "hex":
                                    return E(this, t, e, r);
                                case "utf8":
                                case "utf-8":
                                    return m(this, t, e, r);
                                case "ascii":
                                    return b(this, t, e, r);
                                case "binary":
                                    return A(this, t, e, r);
                                case "base64":
                                    return U(this, t, e, r);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return I(this, t, e, r);
                                default:
                                    if (s) throw new TypeError("Unknown encoding: " + n);
                                    n = ("" + n).toLowerCase(), s = !0 } }, o.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } }; var Q = 4096;
                        o.prototype.slice = function(t, e) { var r = this.length;
                            t = ~~t, e = void 0 === e ? r : ~~e, 0 > t ? (t += r, 0 > t && (t = 0)) : t > r && (t = r), 0 > e ? (e += r, 0 > e && (e = 0)) : e > r && (e = r), t > e && (e = t); var n; if (o.TYPED_ARRAY_SUPPORT) n = o._augment(this.subarray(t, e));
                            else { var i = e - t;
                                n = new o(i, void 0); for (var s = 0; i > s; s++) n[s] = this[s + t] } return n.length && (n.parent = this.parent || this), n }, o.prototype.readUIntLE = function(t, e, r) { t = 0 | t, e = 0 | e, r || O(t, e, this.length); for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i; return n }, o.prototype.readUIntBE = function(t, e, r) { t = 0 | t, e = 0 | e, r || O(t, e, this.length); for (var n = this[t + --e], i = 1; e > 0 && (i *= 256);) n += this[t + --e] * i; return n }, o.prototype.readUInt8 = function(t, e) { return e || O(t, 1, this.length), this[t] }, o.prototype.readUInt16LE = function(t, e) { return e || O(t, 2, this.length), this[t] | this[t + 1] << 8 }, o.prototype.readUInt16BE = function(t, e) { return e || O(t, 2, this.length), this[t] << 8 | this[t + 1] }, o.prototype.readUInt32LE = function(t, e) { return e || O(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3] }, o.prototype.readUInt32BE = function(t, e) { return e || O(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]) }, o.prototype.readIntLE = function(t, e, r) { t = 0 | t, e = 0 | e, r || O(t, e, this.length); for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i; return i *= 128, n >= i && (n -= Math.pow(2, 8 * e)), n }, o.prototype.readIntBE = function(t, e, r) { t = 0 | t, e = 0 | e, r || O(t, e, this.length); for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i; return i *= 128, o >= i && (o -= Math.pow(2, 8 * e)), o }, o.prototype.readInt8 = function(t, e) { return e || O(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t] }, o.prototype.readInt16LE = function(t, e) { e || O(t, 2, this.length); var r = this[t] | this[t + 1] << 8; return 32768 & r ? 4294901760 | r : r }, o.prototype.readInt16BE = function(t, e) { e || O(t, 2, this.length); var r = this[t + 1] | this[t] << 8; return 32768 & r ? 4294901760 | r : r }, o.prototype.readInt32LE = function(t, e) { return e || O(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24 }, o.prototype.readInt32BE = function(t, e) { return e || O(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3] }, o.prototype.readFloatLE = function(t, e) { return e || O(t, 4, this.length), X.read(this, t, !0, 23, 4) }, o.prototype.readFloatBE = function(t, e) { return e || O(t, 4, this.length), X.read(this, t, !1, 23, 4) }, o.prototype.readDoubleLE = function(t, e) { return e || O(t, 8, this.length), X.read(this, t, !0, 52, 8) }, o.prototype.readDoubleBE = function(t, e) { return e || O(t, 8, this.length), X.read(this, t, !1, 52, 8) }, o.prototype.writeUIntLE = function(t, e, r, n) { t = +t, e = 0 | e, r = 0 | r, n || D(this, t, e, r, Math.pow(2, 8 * r), 0); var i = 1,
                                o = 0; for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255; return e + r }, o.prototype.writeUIntBE = function(t, e, r, n) { t = +t, e = 0 | e, r = 0 | r, n || D(this, t, e, r, Math.pow(2, 8 * r), 0); var i = r - 1,
                                o = 1; for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255; return e + r }, o.prototype.writeUInt8 = function(t, e, r) { return t = +t, e = 0 | e, r || D(this, t, e, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1 }, o.prototype.writeUInt16LE = function(t, e, r) { return t = +t, e = 0 | e, r || D(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : Y(this, t, e, !0), e + 2 }, o.prototype.writeUInt16BE = function(t, e, r) { return t = +t, e = 0 | e, r || D(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : Y(this, t, e, !1), e + 2 }, o.prototype.writeUInt32LE = function(t, e, r) { return t = +t, e = 0 | e, r || D(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : M(this, t, e, !0), e + 4 }, o.prototype.writeUInt32BE = function(t, e, r) { return t = +t, e = 0 | e, r || D(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : M(this, t, e, !1), e + 4 }, o.prototype.writeIntLE = function(t, e, r, n) { if (t = +t, e = 0 | e, !n) { var i = Math.pow(2, 8 * r - 1);
                                D(this, t, e, r, i - 1, -i) } var o = 0,
                                s = 1,
                                u = 0 > t ? 1 : 0; for (this[e] = 255 & t; ++o < r && (s *= 256);) this[e + o] = (t / s >> 0) - u & 255; return e + r }, o.prototype.writeIntBE = function(t, e, r, n) { if (t = +t, e = 0 | e, !n) { var i = Math.pow(2, 8 * r - 1);
                                D(this, t, e, r, i - 1, -i) } var o = r - 1,
                                s = 1,
                                u = 0 > t ? 1 : 0; for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) this[e + o] = (t / s >> 0) - u & 255; return e + r }, o.prototype.writeInt8 = function(t, e, r) { return t = +t, e = 0 | e, r || D(this, t, e, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 0 > t && (t = 255 + t + 1), this[e] = 255 & t, e + 1 }, o.prototype.writeInt16LE = function(t, e, r) { return t = +t, e = 0 | e, r || D(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : Y(this, t, e, !0), e + 2 }, o.prototype.writeInt16BE = function(t, e, r) { return t = +t, e = 0 | e, r || D(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : Y(this, t, e, !1), e + 2 }, o.prototype.writeInt32LE = function(t, e, r) { return t = +t, e = 0 | e, r || D(this, t, e, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : M(this, t, e, !0), e + 4 }, o.prototype.writeInt32BE = function(t, e, r) { return t = +t, e = 0 | e, r || D(this, t, e, 4, 2147483647, -2147483648), 0 > t && (t = 4294967295 + t + 1), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : M(this, t, e, !1), e + 4 }, o.prototype.writeFloatLE = function(t, e, r) { return j(this, t, e, !0, r) }, o.prototype.writeFloatBE = function(t, e, r) { return j(this, t, e, !1, r) }, o.prototype.writeDoubleLE = function(t, e, r) { return k(this, t, e, !0, r) }, o.prototype.writeDoubleBE = function(t, e, r) { return k(this, t, e, !1, r) }, o.prototype.copy = function(t, e, r, n) { if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && r > n && (n = r), n === r) return 0; if (0 === t.length || 0 === this.length) return 0; if (0 > e) throw new RangeError("targetStart out of bounds"); if (0 > r || r >= this.length) throw new RangeError("sourceStart out of bounds"); if (0 > n) throw new RangeError("sourceEnd out of bounds");
                            n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r); var i, s = n - r; if (this === t && e > r && n > e)
                                for (i = s - 1; i >= 0; i--) t[i + e] = this[i + r];
                            else if (1e3 > s || !o.TYPED_ARRAY_SUPPORT)
                                for (i = 0; s > i; i++) t[i + e] = this[i + r];
                            else t._set(this.subarray(r, r + s), e); return s }, o.prototype.fill = function(t, e, r) { if (t || (t = 0), e || (e = 0), r || (r = this.length), e > r) throw new RangeError("end < start"); if (r !== e && 0 !== this.length) { if (0 > e || e >= this.length) throw new RangeError("start out of bounds"); if (0 > r || r > this.length) throw new RangeError("end out of bounds"); var n; if ("number" == typeof t)
                                    for (n = e; r > n; n++) this[n] = t;
                                else { var i = J(t.toString()),
                                        o = i.length; for (n = e; r > n; n++) this[n] = i[n % o] } return this } }, o.prototype.toArrayBuffer = function() { if ("undefined" != typeof Uint8Array) { if (o.TYPED_ARRAY_SUPPORT) return new o(this).buffer; for (var t = new Uint8Array(this.length), e = 0, r = t.length; r > e; e += 1) t[e] = this[e]; return t.buffer } throw new TypeError("Buffer.toArrayBuffer not supported in this browser") }; var V = o.prototype;
                        o._augment = function(t) { return t.constructor = o, t._isBuffer = !0, t._set = t.set, t.get = V.get, t.set = V.set, t.write = V.write, t.toString = V.toString, t.toLocaleString = V.toString, t.toJSON = V.toJSON, t.equals = V.equals, t.compare = V.compare, t.indexOf = V.indexOf, t.copy = V.copy, t.slice = V.slice, t.readUIntLE = V.readUIntLE, t.readUIntBE = V.readUIntBE, t.readUInt8 = V.readUInt8, t.readUInt16LE = V.readUInt16LE, t.readUInt16BE = V.readUInt16BE, t.readUInt32LE = V.readUInt32LE, t.readUInt32BE = V.readUInt32BE, t.readIntLE = V.readIntLE, t.readIntBE = V.readIntBE, t.readInt8 = V.readInt8, t.readInt16LE = V.readInt16LE, t.readInt16BE = V.readInt16BE, t.readInt32LE = V.readInt32LE, t.readInt32BE = V.readInt32BE, t.readFloatLE = V.readFloatLE, t.readFloatBE = V.readFloatBE, t.readDoubleLE = V.readDoubleLE, t.readDoubleBE = V.readDoubleBE, t.writeUInt8 = V.writeUInt8, t.writeUIntLE = V.writeUIntLE, t.writeUIntBE = V.writeUIntBE, t.writeUInt16LE = V.writeUInt16LE, t.writeUInt16BE = V.writeUInt16BE, t.writeUInt32LE = V.writeUInt32LE, t.writeUInt32BE = V.writeUInt32BE, t.writeIntLE = V.writeIntLE, t.writeIntBE = V.writeIntBE, t.writeInt8 = V.writeInt8, t.writeInt16LE = V.writeInt16LE, t.writeInt16BE = V.writeInt16BE, t.writeInt32LE = V.writeInt32LE, t.writeInt32BE = V.writeInt32BE, t.writeFloatLE = V.writeFloatLE, t.writeFloatBE = V.writeFloatBE, t.writeDoubleLE = V.writeDoubleLE, t.writeDoubleBE = V.writeDoubleBE, t.fill = V.fill, t.inspect = V.inspect, t.toArrayBuffer = V.toArrayBuffer, t }; var tt = /[^+\/0-9A-Za-z-_]/g }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { "base64-js": 4, ieee754: 5, isarray: 6 }],
                4: [function(t, e, r) { var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";! function(t) { "use strict";

                        function e(t) { var e = t.charCodeAt(0); return e === s || e === h ? 62 : e === u || e === l ? 63 : a > e ? -1 : a + 10 > e ? e - a + 26 + 26 : c + 26 > e ? e - c : f + 26 > e ? e - f + 26 : void 0 }

                        function r(t) {
                            function r(t) { f[h++] = t } var n, i, s, u, a, f; if (t.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var c = t.length;
                            a = "=" === t.charAt(c - 2) ? 2 : "=" === t.charAt(c - 1) ? 1 : 0, f = new o(3 * t.length / 4 - a), s = a > 0 ? t.length - 4 : t.length; var h = 0; for (n = 0, i = 0; s > n; n += 4, i += 3) u = e(t.charAt(n)) << 18 | e(t.charAt(n + 1)) << 12 | e(t.charAt(n + 2)) << 6 | e(t.charAt(n + 3)), r((16711680 & u) >> 16), r((65280 & u) >> 8), r(255 & u); return 2 === a ? (u = e(t.charAt(n)) << 2 | e(t.charAt(n + 1)) >> 4, r(255 & u)) : 1 === a && (u = e(t.charAt(n)) << 10 | e(t.charAt(n + 1)) << 4 | e(t.charAt(n + 2)) >> 2, r(u >> 8 & 255), r(255 & u)), f }

                        function i(t) {
                            function e(t) { return n.charAt(t) }

                            function r(t) { return e(t >> 18 & 63) + e(t >> 12 & 63) + e(t >> 6 & 63) + e(63 & t) } var i, o, s, u = t.length % 3,
                                a = ""; for (i = 0, s = t.length - u; s > i; i += 3) o = (t[i] << 16) + (t[i + 1] << 8) + t[i + 2], a += r(o); switch (u) {
                                case 1:
                                    o = t[t.length - 1], a += e(o >> 2), a += e(o << 4 & 63), a += "=="; break;
                                case 2:
                                    o = (t[t.length - 2] << 8) + t[t.length - 1], a += e(o >> 10), a += e(o >> 4 & 63), a += e(o << 2 & 63), a += "=" } return a } var o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                            s = "+".charCodeAt(0),
                            u = "/".charCodeAt(0),
                            a = "0".charCodeAt(0),
                            f = "a".charCodeAt(0),
                            c = "A".charCodeAt(0),
                            h = "-".charCodeAt(0),
                            l = "_".charCodeAt(0);
                        t.toByteArray = r, t.fromByteArray = i }("undefined" == typeof r ? this.base64js = {} : r) }, {}],
                5: [function(t, e, r) { r.read = function(t, e, r, n, i) { var o, s, u = 8 * i - n - 1,
                            a = (1 << u) - 1,
                            f = a >> 1,
                            c = -7,
                            h = r ? i - 1 : 0,
                            l = r ? -1 : 1,
                            p = t[e + h]; for (h += l, o = p & (1 << -c) - 1, p >>= -c, c += u; c > 0; o = 256 * o + t[e + h], h += l, c -= 8); for (s = o & (1 << -c) - 1, o >>= -c, c += n; c > 0; s = 256 * s + t[e + h], h += l, c -= 8); if (0 === o) o = 1 - f;
                        else { if (o === a) return s ? NaN : (p ? -1 : 1) * (1 / 0);
                            s += Math.pow(2, n), o -= f } return (p ? -1 : 1) * s * Math.pow(2, o - n) }, r.write = function(t, e, r, n, i, o) { var s, u, a, f = 8 * o - i - 1,
                            c = (1 << f) - 1,
                            h = c >> 1,
                            l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                            p = n ? 0 : o - 1,
                            d = n ? 1 : -1,
                            g = 0 > e || 0 === e && 0 > 1 / e ? 1 : 0; for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, s = c) : (s = Math.floor(Math.log(e) / Math.LN2), e * (a = Math.pow(2, -s)) < 1 && (s--, a *= 2), e += s + h >= 1 ? l / a : l * Math.pow(2, 1 - h), e * a >= 2 && (s++, a /= 2), s + h >= c ? (u = 0, s = c) : s + h >= 1 ? (u = (e * a - 1) * Math.pow(2, i), s += h) : (u = e * Math.pow(2, h - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + p] = 255 & u, p += d, u /= 256, i -= 8); for (s = s << i | u, f += i; f > 0; t[r + p] = 255 & s, p += d, s /= 256, f -= 8);
                        t[r + p - d] |= 128 * g } }, {}],
                6: [function(t, e, r) { var n = {}.toString;
                    e.exports = Array.isArray || function(t) { return "[object Array]" == n.call(t) } }, {}],
                7: [function(t, e, r) {
                    function n() { this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0 }

                    function i(t) { return "function" == typeof t }

                    function o(t) { return "number" == typeof t }

                    function s(t) { return "object" == typeof t && null !== t }

                    function u(t) { return void 0 === t }
                    e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(t) { if (!o(t) || 0 > t || isNaN(t)) throw TypeError("n must be a positive number"); return this._maxListeners = t, this }, n.prototype.emit = function(t) { var e, r, n, o, a, f; if (this._events || (this._events = {}), "error" === t && (!this._events.error || s(this._events.error) && !this._events.error.length)) { if (e = arguments[1], e instanceof Error) throw e; throw TypeError('Uncaught, unspecified "error" event.') } if (r = this._events[t], u(r)) return !1; if (i(r)) switch (arguments.length) {
                            case 1:
                                r.call(this); break;
                            case 2:
                                r.call(this, arguments[1]); break;
                            case 3:
                                r.call(this, arguments[1], arguments[2]); break;
                            default:
                                o = Array.prototype.slice.call(arguments, 1), r.apply(this, o) } else if (s(r))
                            for (o = Array.prototype.slice.call(arguments, 1), f = r.slice(), n = f.length, a = 0; n > a; a++) f[a].apply(this, o);
                        return !0 }, n.prototype.addListener = function(t, e) { var r; if (!i(e)) throw TypeError("listener must be a function"); return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, i(e.listener) ? e.listener : e), this._events[t] ? s(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, s(this._events[t]) && !this._events[t].warned && (r = u(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, r && r > 0 && this._events[t].length > r && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace())), this }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(t, e) {
                        function r() { this.removeListener(t, r), n || (n = !0, e.apply(this, arguments)) } if (!i(e)) throw TypeError("listener must be a function"); var n = !1; return r.listener = e, this.on(t, r), this }, n.prototype.removeListener = function(t, e) { var r, n, o, u; if (!i(e)) throw TypeError("listener must be a function"); if (!this._events || !this._events[t]) return this; if (r = this._events[t], o = r.length, n = -1, r === e || i(r.listener) && r.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);
                        else if (s(r)) { for (u = o; u-- > 0;)
                                if (r[u] === e || r[u].listener && r[u].listener === e) { n = u; break }
                            if (0 > n) return this;
                            1 === r.length ? (r.length = 0, delete this._events[t]) : r.splice(n, 1), this._events.removeListener && this.emit("removeListener", t, e) } return this }, n.prototype.removeAllListeners = function(t) { var e, r; if (!this._events) return this; if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this; if (0 === arguments.length) { for (e in this._events) "removeListener" !== e && this.removeAllListeners(e); return this.removeAllListeners("removeListener"), this._events = {}, this } if (r = this._events[t], i(r)) this.removeListener(t, r);
                        else if (r)
                            for (; r.length;) this.removeListener(t, r[r.length - 1]); return delete this._events[t], this }, n.prototype.listeners = function(t) { var e; return e = this._events && this._events[t] ? i(this._events[t]) ? [this._events[t]] : this._events[t].slice() : [] }, n.prototype.listenerCount = function(t) { if (this._events) { var e = this._events[t]; if (i(e)) return 1; if (e) return e.length } return 0 }, n.listenerCount = function(t, e) { return t.listenerCount(e) } }, {}],
                8: [function(t, e, r) { "function" == typeof Object.create ? e.exports = function(t, e) { t.super_ = e, t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }) } : e.exports = function(t, e) { t.super_ = e; var r = function() {};
                        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t } }, {}],
                9: [function(t, e, r) {
                    function n() { c = !1, u.length ? f = u.concat(f) : h = -1, f.length && i() }

                    function i() { if (!c) { var t = setTimeout(n);
                            c = !0; for (var e = f.length; e;) { for (u = f, f = []; ++h < e;) u && u[h].run();
                                h = -1, e = f.length }
                            u = null, c = !1, clearTimeout(t) } }

                    function o(t, e) { this.fun = t, this.array = e }

                    function s() {} var u, a = e.exports = {},
                        f = [],
                        c = !1,
                        h = -1;
                    a.nextTick = function(t) { var e = new Array(arguments.length - 1); if (arguments.length > 1)
                            for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                        f.push(new o(t, e)), 1 !== f.length || c || setTimeout(i, 0) }, o.prototype.run = function() { this.fun.apply(null, this.array) }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = s, a.addListener = s, a.once = s, a.off = s, a.removeListener = s, a.removeAllListeners = s, a.emit = s, a.binding = function(t) { throw new Error("process.binding is not supported") }, a.cwd = function() { return "/" }, a.chdir = function(t) { throw new Error("process.chdir is not supported") }, a.umask = function() { return 0 } }, {}],
                10: [function(t, e, r) { e.exports = function(t) { return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8 } }, {}],
                11: [function(t, e, r) {
                    (function(e, n) {
                        function i(t, e) { var n = { seen: [], stylize: s }; return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), g(e) ? n.showHidden = e : e && r._extend(n, e), m(n.showHidden) && (n.showHidden = !1), m(n.depth) && (n.depth = 2), m(n.colors) && (n.colors = !1), m(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = o), a(n, t, n.depth) }

                        function o(t, e) { var r = i.styles[e]; return r ? "[" + i.colors[r][0] + "m" + t + "[" + i.colors[r][1] + "m" : t }

                        function s(t, e) { return t }

                        function u(t) { var e = {}; return t.forEach(function(t, r) { e[t] = !0 }), e }

                        function a(t, e, n) { if (t.customInspect && e && T(e.inspect) && e.inspect !== r.inspect && (!e.constructor || e.constructor.prototype !== e)) { var i = e.inspect(n, t); return _(i) || (i = a(t, i, n)), i } var o = f(t, e); if (o) return o; var s = Object.keys(e),
                                g = u(s); if (t.showHidden && (s = Object.getOwnPropertyNames(e)), I(e) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return c(e); if (0 === s.length) { if (T(e)) { var y = e.name ? ": " + e.name : ""; return t.stylize("[Function" + y + "]", "special") } if (b(e)) return t.stylize(RegExp.prototype.toString.call(e), "regexp"); if (U(e)) return t.stylize(Date.prototype.toString.call(e), "date"); if (I(e)) return c(e) } var v = "",
                                w = !1,
                                E = ["{", "}"]; if (d(e) && (w = !0, E = ["[", "]"]), T(e)) { var m = e.name ? ": " + e.name : "";
                                v = " [Function" + m + "]" } if (b(e) && (v = " " + RegExp.prototype.toString.call(e)), U(e) && (v = " " + Date.prototype.toUTCString.call(e)), I(e) && (v = " " + c(e)), 0 === s.length && (!w || 0 == e.length)) return E[0] + v + E[1]; if (0 > n) return b(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special");
                            t.seen.push(e); var A; return A = w ? h(t, e, n, g, s) : s.map(function(r) { return l(t, e, n, g, r, w) }), t.seen.pop(), p(A, v, E) }

                        function f(t, e) { if (m(e)) return t.stylize("undefined", "undefined"); if (_(e)) { var r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'"; return t.stylize(r, "string") } return w(e) ? t.stylize("" + e, "number") : g(e) ? t.stylize("" + e, "boolean") : y(e) ? t.stylize("null", "null") : void 0 }

                        function c(t) { return "[" + Error.prototype.toString.call(t) + "]" }

                        function h(t, e, r, n, i) { for (var o = [], s = 0, u = e.length; u > s; ++s) P(e, String(s)) ? o.push(l(t, e, r, n, String(s), !0)) : o.push(""); return i.forEach(function(i) { i.match(/^\d+$/) || o.push(l(t, e, r, n, i, !0)) }), o }

                        function l(t, e, r, n, i, o) {
                            var s, u, f;
                            if (f = Object.getOwnPropertyDescriptor(e, i) || { value: e[i] }, f.get ? u = f.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : f.set && (u = t.stylize("[Setter]", "special")), P(n, i) || (s = "[" + i + "]"), u || (t.seen.indexOf(f.value) < 0 ? (u = y(r) ? a(t, f.value, null) : a(t, f.value, r - 1), u.indexOf("\n") > -1 && (u = o ? u.split("\n").map(function(t) { return "  " + t }).join("\n").substr(2) : "\n" + u.split("\n").map(function(t) {
                                    return "   " + t;
                                }).join("\n"))) : u = t.stylize("[Circular]", "special")), m(s)) { if (o && i.match(/^\d+$/)) return u;
                                s = JSON.stringify("" + i), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = t.stylize(s, "string")) }
                            return s + ": " + u
                        }

                        function p(t, e, r) { var n = 0,
                                i = t.reduce(function(t, e) { return n++, e.indexOf("\n") >= 0 && n++, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1 }, 0); return i > 60 ? r[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + r[1] : r[0] + e + " " + t.join(", ") + " " + r[1] }

                        function d(t) { return Array.isArray(t) }

                        function g(t) { return "boolean" == typeof t }

                        function y(t) { return null === t }

                        function v(t) { return null == t }

                        function w(t) { return "number" == typeof t }

                        function _(t) { return "string" == typeof t }

                        function E(t) { return "symbol" == typeof t }

                        function m(t) { return void 0 === t }

                        function b(t) { return A(t) && "[object RegExp]" === B(t) }

                        function A(t) { return "object" == typeof t && null !== t }

                        function U(t) { return A(t) && "[object Date]" === B(t) }

                        function I(t) { return A(t) && ("[object Error]" === B(t) || t instanceof Error) }

                        function T(t) { return "function" == typeof t }

                        function R(t) { return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || "undefined" == typeof t }

                        function B(t) { return Object.prototype.toString.call(t) }

                        function L(t) { return 10 > t ? "0" + t.toString(10) : t.toString(10) }

                        function S() { var t = new Date,
                                e = [L(t.getHours()), L(t.getMinutes()), L(t.getSeconds())].join(":"); return [t.getDate(), Y[t.getMonth()], e].join(" ") }

                        function P(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }
                        var x = /%[sdj%]/g;
                        r.format = function(t) { if (!_(t)) { for (var e = [], r = 0; r < arguments.length; r++) e.push(i(arguments[r])); return e.join(" ") } for (var r = 1, n = arguments, o = n.length, s = String(t).replace(x, function(t) { if ("%%" === t) return "%"; if (r >= o) return t; switch (t) {
                                        case "%s":
                                            return String(n[r++]);
                                        case "%d":
                                            return Number(n[r++]);
                                        case "%j":
                                            try { return JSON.stringify(n[r++]) } catch (e) { return "[Circular]" }
                                        default:
                                            return t } }), u = n[r]; o > r; u = n[++r]) s += y(u) || !A(u) ? " " + u : " " + i(u); return s }, r.deprecate = function(t, i) {
                            function o() { if (!s) { if (e.throwDeprecation) throw new Error(i);
                                    e.traceDeprecation ? console.trace(i) : console.error(i), s = !0 } return t.apply(this, arguments) } if (m(n.process)) return function() { return r.deprecate(t, i).apply(this, arguments) }; if (e.noDeprecation === !0) return t; var s = !1; return o };
                        var O, D = {};
                        r.debuglog = function(t) { if (m(O) && (O = e.env.NODE_DEBUG || ""), t = t.toUpperCase(), !D[t])
                                if (new RegExp("\\b" + t + "\\b", "i").test(O)) { var n = e.pid;
                                    D[t] = function() { var e = r.format.apply(r, arguments);
                                        console.error("%s %d: %s", t, n, e) } } else D[t] = function() {};
                            return D[t] }, r.inspect = i, i.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, i.styles = { special: "cyan", number: "yellow", "boolean": "yellow", undefined: "grey", "null": "bold", string: "green", date: "magenta", regexp: "red" }, r.isArray = d, r.isBoolean = g, r.isNull = y, r.isNullOrUndefined = v, r.isNumber = w, r.isString = _, r.isSymbol = E, r.isUndefined = m, r.isRegExp = b, r.isObject = A, r.isDate = U, r.isError = I, r.isFunction = T, r.isPrimitive = R, r.isBuffer = t("./support/isBuffer");
                        var Y = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        r.log = function() { console.log("%s - %s", S(), r.format.apply(r, arguments)) }, r.inherits = t("inherits"), r._extend = function(t, e) { if (!e || !A(e)) return t; for (var r = Object.keys(e), n = r.length; n--;) t[r[n]] = e[r[n]]; return t }
                    }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, { "./support/isBuffer": 10, _process: 9, inherits: 8 }],
                12: [function(t, e, r) {
                    (function(r, n) {
                        (function() { "use strict";

                            function i(t) { return "function" == typeof t || "object" == typeof t && null !== t }

                            function o(t) { return "function" == typeof t }

                            function s(t) { $ = t }

                            function u(t) { X = t }

                            function a() { return function() { r.nextTick(p) } }

                            function f() { return function() { q(p) } }

                            function c() { var t = 0,
                                    e = new Q(p),
                                    r = document.createTextNode(""); return e.observe(r, { characterData: !0 }),
                                    function() { r.data = t = ++t % 2 } }

                            function h() { var t = new MessageChannel; return t.port1.onmessage = p,
                                    function() { t.port2.postMessage(0) } }

                            function l() { return function() { setTimeout(p, 1) } }

                            function p() { for (var t = 0; Z > t; t += 2) { var e = et[t],
                                        r = et[t + 1];
                                    e(r), et[t] = void 0, et[t + 1] = void 0 }
                                Z = 0 }

                            function d() { try { var e = t,
                                        r = e("vertx"); return q = r.runOnLoop || r.runOnContext, f() } catch (n) { return l() } }

                            function g(t, e) { var r = this,
                                    n = r._state; if (n === ot && !t || n === st && !e) return this; var i = new this.constructor(v),
                                    o = r._result; if (n) { var s = arguments[n - 1];
                                    X(function() { O(n, i, s, o) }) } else L(r, i, t, e); return i }

                            function y(t) { var e = this; if (t && "object" == typeof t && t.constructor === e) return t; var r = new e(v); return I(r, t), r }

                            function v() {}

                            function w() { return new TypeError("You cannot resolve a promise with itself") }

                            function _() { return new TypeError("A promises callback cannot return that same promise.") }

                            function E(t) { try { return t.then } catch (e) { return ut.error = e, ut } }

                            function m(t, e, r, n) { try { t.call(e, r, n) } catch (i) { return i } }

                            function b(t, e, r) { X(function(t) { var n = !1,
                                        i = m(r, e, function(r) { n || (n = !0, e !== r ? I(t, r) : R(t, r)) }, function(e) { n || (n = !0, B(t, e)) }, "Settle: " + (t._label || " unknown promise"));!n && i && (n = !0, B(t, i)) }, t) }

                            function A(t, e) { e._state === ot ? R(t, e._result) : e._state === st ? B(t, e._result) : L(e, void 0, function(e) { I(t, e) }, function(e) { B(t, e) }) }

                            function U(t, e, r) { e.constructor === t.constructor && r === rt && constructor.resolve === nt ? A(t, e) : r === ut ? B(t, ut.error) : void 0 === r ? R(t, e) : o(r) ? b(t, e, r) : R(t, e) }

                            function I(t, e) { t === e ? B(t, w()) : i(e) ? U(t, e, E(e)) : R(t, e) }

                            function T(t) { t._onerror && t._onerror(t._result), S(t) }

                            function R(t, e) { t._state === it && (t._result = e, t._state = ot, 0 !== t._subscribers.length && X(S, t)) }

                            function B(t, e) { t._state === it && (t._state = st, t._result = e, X(T, t)) }

                            function L(t, e, r, n) { var i = t._subscribers,
                                    o = i.length;
                                t._onerror = null, i[o] = e, i[o + ot] = r, i[o + st] = n, 0 === o && t._state && X(S, t) }

                            function S(t) { var e = t._subscribers,
                                    r = t._state; if (0 !== e.length) { for (var n, i, o = t._result, s = 0; s < e.length; s += 3) n = e[s], i = e[s + r], n ? O(r, n, i, o) : i(o);
                                    t._subscribers.length = 0 } }

                            function P() { this.error = null }

                            function x(t, e) { try { return t(e) } catch (r) { return at.error = r, at } }

                            function O(t, e, r, n) { var i, s, u, a, f = o(r); if (f) { if (i = x(r, n), i === at ? (a = !0, s = i.error, i = null) : u = !0, e === i) return void B(e, _()) } else i = n, u = !0;
                                e._state !== it || (f && u ? I(e, i) : a ? B(e, s) : t === ot ? R(e, i) : t === st && B(e, i)) }

                            function D(t, e) { try { e(function(e) { I(t, e) }, function(e) { B(t, e) }) } catch (r) { B(t, r) } }

                            function Y(t) { return new dt(this, t).promise }

                            function M(t) {
                                function e(t) { I(i, t) }

                                function r(t) { B(i, t) } var n = this,
                                    i = new n(v); if (!G(t)) return B(i, new TypeError("You must pass an array to race.")), i; for (var o = t.length, s = 0; i._state === it && o > s; s++) L(n.resolve(t[s]), void 0, e, r); return i }

                            function C(t) { var e = this,
                                    r = new e(v); return B(r, t), r }

                            function j() { throw new TypeError("You must pass a resolver function as the first argument to the promise constructor") }

                            function k() { throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.") }

                            function N(t) { this._id = lt++, this._state = void 0, this._result = void 0, this._subscribers = [], v !== t && ("function" != typeof t && j(), this instanceof N ? D(this, t) : k()) }

                            function z(t, e) { this._instanceConstructor = t, this.promise = new t(v), Array.isArray(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? R(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && R(this.promise, this._result))) : B(this.promise, this._validationError()) }

                            function F() { var t; if ("undefined" != typeof n) t = n;
                                else if ("undefined" != typeof self) t = self;
                                else try { t = Function("return this")() } catch (e) { throw new Error("polyfill failed because global object is unavailable in this environment") }
                                var r = t.Promise;
                                r && "[object Promise]" === Object.prototype.toString.call(r.resolve()) && !r.cast || (t.Promise = pt) } var J;
                            J = Array.isArray ? Array.isArray : function(t) { return "[object Array]" === Object.prototype.toString.call(t) }; var q, $, H, G = J,
                                Z = 0,
                                X = function(t, e) { et[Z] = t, et[Z + 1] = e, Z += 2, 2 === Z && ($ ? $(p) : H()) },
                                K = "undefined" != typeof window ? window : void 0,
                                W = K || {},
                                Q = W.MutationObserver || W.WebKitMutationObserver,
                                V = "undefined" != typeof r && "[object process]" === {}.toString.call(r),
                                tt = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                                et = new Array(1e3);
                            H = V ? a() : Q ? c() : tt ? h() : void 0 === K && "function" == typeof t ? d() : l(); var rt = g,
                                nt = y,
                                it = void 0,
                                ot = 1,
                                st = 2,
                                ut = new P,
                                at = new P,
                                ft = Y,
                                ct = M,
                                ht = C,
                                lt = 0,
                                pt = N;
                            N.all = ft, N.race = ct, N.resolve = nt, N.reject = ht, N._setScheduler = s, N._setAsap = u, N._asap = X, N.prototype = { constructor: N, then: rt, "catch": function(t) { return this.then(null, t) } }; var dt = z;
                            z.prototype._validationError = function() { return new Error("Array Methods must be provided an Array") }, z.prototype._enumerate = function() { for (var t = this.length, e = this._input, r = 0; this._state === it && t > r; r++) this._eachEntry(e[r], r) }, z.prototype._eachEntry = function(t, e) { var r = this._instanceConstructor,
                                    n = r.resolve; if (n === nt) { var i = E(t); if (i === rt && t._state !== it) this._settledAt(t._state, e, t._result);
                                    else if ("function" != typeof i) this._remaining--, this._result[e] = t;
                                    else if (r === pt) { var o = new r(v);
                                        U(o, t, i), this._willSettleAt(o, e) } else this._willSettleAt(new r(function(e) { e(t) }), e) } else this._willSettleAt(n(t), e) }, z.prototype._settledAt = function(t, e, r) { var n = this.promise;
                                n._state === it && (this._remaining--, t === st ? B(n, r) : this._result[e] = r), 0 === this._remaining && R(n, this._result) }, z.prototype._willSettleAt = function(t, e) { var r = this;
                                L(t, void 0, function(t) { r._settledAt(ot, e, t) }, function(t) { r._settledAt(st, e, t) }) }; var gt = F,
                                yt = { Promise: pt, polyfill: gt }; "function" == typeof define && define.amd ? define(function() { return yt }) : "undefined" != typeof e && e.exports ? e.exports = yt : "undefined" != typeof this && (this.ES6Promise = yt), gt() }).call(this) }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { _process: 9 }]
            }, {}, [2]);
        return e(t)
    }();
    if ("function" == typeof define && define.amd) define([], function() { return e });
    else { var r = t.Twilio = t.Twilio || {}; for (var n in e) r[n] = e[n] }
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : this);