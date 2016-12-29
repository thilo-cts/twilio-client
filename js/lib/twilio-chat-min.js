/* twilio-chat.js 0.11.0
The following license applies to all parts of this software except as
documented below.

    Copyright (c) 2016, Twilio, inc.
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

This software includes javascript-state-machine under the following license.

    Copyright (c) 2012, 2013, 2014, 2015, Jake Gordon and contributors

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE

This software includes durational under the following license.

    Copyright (c) 2014 Micheil Smith

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

This software includes loglevel under the following license.

    Copyright (c) 2013 Tim Perry

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

This software includes q under the following license.

    Copyright 2009–2014 Kristopher Michael Kowal. All rights reserved.
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to
    deal in the Software without restriction, including without limitation the
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    sell copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.

This software includes platform.js under the following license.

    Copyright 2014 Benjamin Tan <https://d10.github.io/>
    Copyright 2011-2015 John-David Dalton <http://allyoucanleet.com/>

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
! function(e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else { var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t = t.Twilio || (t.Twilio = {}), t = t.Chat || (t.Chat = {}), t.Client = e() } }(function() {
    var e, t, n;
    return function e(t, n, r) {
        function i(s, a) { if (!n[s]) { if (!t[s]) { var u = "function" == typeof require && require; if (!a && u) return u(s, !0); if (o) return o(s, !0); var c = new Error("Cannot find module '" + s + "'"); throw c.code = "MODULE_NOT_FOUND", c } var l = n[s] = { exports: {} };
                t[s][0].call(l.exports, function(e) { var n = t[s][1][e]; return i(n ? n : e) }, l, l.exports, e, t, n, r) } return n[s].exports } for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) i(r[s]); return i }({
        1: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e) { try { return new Date(e) } catch (e) { return null } }

            function o(e) { switch (e) {
                    case "notParticipating":
                        return "known";
                    default:
                        return e } } var s = e("babel-runtime/core-js/object/freeze"),
                a = r(s),
                u = e("babel-runtime/core-js/get-iterator"),
                c = r(u),
                l = e("babel-runtime/core-js/promise"),
                f = r(l),
                p = e("babel-runtime/core-js/object/define-properties"),
                d = r(p),
                h = e("babel-runtime/core-js/map"),
                _ = r(h),
                b = e("babel-runtime/core-js/json/stringify"),
                m = r(b),
                v = e("babel-runtime/core-js/object/get-prototype-of"),
                y = r(v),
                g = e("babel-runtime/helpers/classCallCheck"),
                k = r(g),
                w = e("babel-runtime/helpers/createClass"),
                j = r(w),
                C = e("babel-runtime/helpers/possibleConstructorReturn"),
                x = r(C),
                E = e("babel-runtime/helpers/inherits"),
                S = r(E),
                T = e("events").EventEmitter,
                R = e("./data/members"),
                P = e("./member"),
                I = e("./data/messages"),
                O = e("./util/jsondiff"),
                A = e("./logger"),
                N = e("./util").UriBuilder,
                F = { attributes: "attributes", createdBy: "createdBy", dateCreated: "dateCreated", dateUpdated: "dateUpdated", friendlyName: "friendlyName", lastConsumedMessageIndex: "lastConsumedMessageIndex", name: "friendlyName", sid: "sid", status: "status", type: "type", uniqueName: "uniqueName" },
                M = function(e) {
                    function t(e, n, r) {
                        (0, k.default)(this, t); var o = (0, x.default)(this, (t.__proto__ || (0, y.default)(t)).call(this)),
                            s = n.attributes || {},
                            a = n.createdBy,
                            u = i(n.dateCreated),
                            c = i(n.dateUpdated),
                            l = n.name || n.friendlyName || null,
                            f = "undefined" != typeof n.lastConsumedMessageIndex ? n.lastConsumedMessageIndex : null,
                            p = "known",
                            h = n.type || t.type.PUBLIC,
                            b = n.uniqueName || null,
                            v = n.channel;
                        n.isPrivate && (h = t.type.PRIVATE); try {
                            (0, m.default)(s) } catch (e) { throw new Error("Attributes must be a valid JSON object.") } var g = new _.default,
                            w = new R(o, e.session, e.userInfos, g);
                        w.on("memberJoined", o.emit.bind(o, "memberJoined")), w.on("memberLeft", o.emit.bind(o, "memberLeft")), w.on("memberUpdated", o.emit.bind(o, "memberUpdated")), w.on("memberInfoUpdated", o.emit.bind(o, "memberInfoUpdated")); var j = [],
                            C = new I(o, e.session, j); return C.on("messageAdded", function(e) { return o._onMessageAdded(e) }), C.on("messageUpdated", o.emit.bind(o, "messageUpdated")), C.on("messageRemoved", o.emit.bind(o, "messageRemoved")), (0, d.default)(o, { _attributes: { get: function() { return s }, set: function(e) { return s = e } }, _createdBy: { get: function() { return a }, set: function(e) { return a = e } }, _dateCreated: { get: function() { return u }, set: function(e) { return u = e } }, _dateUpdated: { get: function() { return c }, set: function(e) { return c = e } }, _friendlyName: { get: function() { return l }, set: function(e) { return l = e } }, _lastConsumedMessageIndex: { get: function() { return f }, set: function(e) { return f = e } }, _type: { get: function() { return h }, set: function(e) { return h = e } }, _sid: { get: function() { return r }, set: function(e) { return r = e } }, _status: { get: function() { return p }, set: function(e) { return p = e } }, _uniqueName: { get: function() { return b }, set: function(e) { return b = e } }, _entityPromise: { value: null, writable: !0 }, _subscribePromise: { value: null, writable: !0 }, _membersEntity: { value: w }, _messagesEntity: { value: C }, _services: { value: e }, _session: { value: e.session }, _typingIndicator: { value: e.typingIndicator }, _consumptionHorizon: { value: e.consumptionHorizon }, _entityName: { value: v, writable: !0 }, _members: { value: g }, _messages: { value: j }, attributes: { enumerable: !0, get: function() { return s } }, createdBy: { enumerable: !0, get: function() { return a } }, dateCreated: { enumerable: !0, get: function() { return u } }, dateUpdated: { enumerable: !0, get: function() { return c } }, friendlyName: { enumerable: !0, get: function() { return l } }, isPrivate: { enumerable: !0, get: function() { return o._type === t.type.PRIVATE } }, lastConsumedMessageIndex: { enumerable: !0, get: function() { return f } }, sid: { enumerable: !0, get: function() { return r } }, status: { enumerable: !0, get: function() { return p } }, type: { enumerable: !0, get: function() { return h } }, uniqueName: { enumerable: !0, get: function() { return b } } }), o } return (0, S.default)(t, e), (0, j.default)(t, [{ key: "_subscribe", value: function() { var e = this; return this._entityPromise ? this._entityPromise : (this._entityPromise = this._session.datasync.document({ uniqueName: this._entityName, mode: "open" }).then(function(t) { return e._entity = t, t.on("updated", function(t) { return e._update(t) }), e._update(t.value), e._entity }).catch(function(t) { throw e._enityPromise = null, A.error("Failed to get channel object", t), t }), this._entityPromise) } }, { key: "_subscribeStreams", value: function() { var e = this; return this._subscribePromise = this._subscribePromise || this._subscribe().then(function(t) { var n = t.value.messages,
                                    r = t.value.roster; return f.default.all([e._messagesEntity.subscribe(n), e._membersEntity.subscribe(r)]) }).then(function() { return e._entity }).catch(function(t) { throw e._subscribePromise = null, A.error("Failed to subscribe on channel objects", e.sid, t), t }), this._subscribePromise } }, { key: "_fetch", value: function() { return this._session.datasync.document({ uniqueName: this._entityName, mode: "open" }).then(function(e) { return e.value }) } }, { key: "_unsubscribe", value: function() { var e = []; return this._entityPromise && e.push(this._entity.close()), e.push(this._membersEntity.unsubscribe()), e.push(this._messagesEntity.unsubscribe()), this._entityPromise = null, this._subscribePromise = null, f.default.all(e) } }, { key: "_setStatus", value: function(e) { this._status !== e && (this._status = e, e === t.status.JOINED ? this._subscribeStreams() : e === t.status.INVITED ? this._subscribe() : this._entityPromise && this._unsubscribe()) } }, { key: "_update", value: function(e) { t._preprocessUpdate(e, this._sid); var n = !1; for (var r in e) { var i = F[r];
                                i && (i === F.status ? this._status = o(e.status) : i === F.attributes ? O.isDeepEqual(this._attributes, e.attributes) || (this._attributes = e.attributes, n = !0) : e[r] instanceof Date ? this[i] && this[i].getTime() === e[r].getTime() || (this["_" + i] = e[r], n = !0) : this[i] !== e[r] && (this["_" + i] = e[r], n = !0)) }
                            e.status || e.uniqueName || this._uniqueName && (this._uniqueName = null, n = !0), n && this.emit("updated", this) } }, { key: "_onMessageAdded", value: function(e) { var t = !0,
                                n = !1,
                                r = void 0; try { for (var i, o = (0, c.default)(this._members.values()); !(t = (i = o.next()).done); t = !0) { var s = i.value; if (s.identity === e.author) { s._endTyping(); break } } } catch (e) { n = !0, r = e } finally { try {!t && o.return && o.return() } finally { if (n) throw r } }
                            this.emit("messageAdded", e) } }, { key: "add", value: function(e) { if (!e || "string" != typeof e) throw new Error("Channel.add requires an <String>identity parameter"); return this._membersEntity.add(e) } }, { key: "advanceLastConsumedMessageIndex", value: function(e) { var t = this; if (parseInt(e) !== e) throw new Error("Channel.advanceLastConsumedMessageIndex requires an integral <Number>index parameter"); return null !== this.lastConsumedMessageIndex && e <= this.lastConsumedMessageIndex ? f.default.resolve() : this._subscribeStreams().then(function() { t._consumptionHorizon.advanceLastConsumedMessageIndexForChannel(t.sid, e) }).then(function() { return t }) } }, { key: "decline", value: function() { var e = this; return this._session.addCommand("declineInvitation", { channelSid: this._sid }).then(function() { return e }) } }, { key: "delete", value: function() { var e = this; return this._session.addCommand("destroyChannel", { channelSid: this._sid }).then(function() { return e }) } }, { key: "getAttributes", value: function() { var e = this; return this._entityPromise ? this._subscribe().then(function() { return e.attributes }) : this._fetch().then(function(t) { return e._update(t), e.attributes }) } }, { key: "getMessages", value: function(e, t) { var n = this; return this._subscribeStreams().then(function() { return n._messagesEntity.getMessages(e, t) }) } }, { key: "getMembers", value: function() { var e = this; return this._subscribeStreams().then(function() { return e._membersEntity.getMembers() }) } }, { key: "getMembersCount", value: function() { var e = this; return this._session.getSessionLinks().then(function(t) { return new N(t.publicChannelsUrl).path(e.sid).build() }).then(function(t) { return e._services.network.get(t) }).then(function(e) { return e.body.members_count }) } }, { key: "getMessagesCount", value: function() { var e = this; return this._session.getSessionLinks().then(function(t) { return new N(t.publicChannelsUrl).path(e.sid).build() }).then(function(t) { return e._services.network.get(t) }).then(function(e) { return e.body.messages_count }) } }, { key: "getUnconsumedMessagesCount", value: function() { var e = this; return this._session.getSessionLinks().then(function(t) { return new N(t.myChannelsUrl).arg("ChannelSid", e.sid).build() }).then(function(t) { return e._services.network.get(t) }).then(function(e) { if (e.body.channels.length) return e.body.channels[0].unread_messages_count || 0; throw new Error("Channel not found") }) } }, { key: "invite", value: function(e) { if ("string" != typeof e || !e.length) throw new Error("Channel.invite requires an <String>identity parameter"); return this._membersEntity.invite(e) } }, { key: "join", value: function() { var e = this; return this._session.addCommand("joinChannel", { channelSid: this._sid }).then(function() { return e }) } }, { key: "leave", value: function() { var e = this; return this._status !== t.status.JOINED ? f.default.resolve(this) : this._session.addCommand("leaveChannel", { channelSid: this._sid }).then(function() { return e }) } }, { key: "removeMember", value: function(e) { if (!e || "string" != typeof e && !(e instanceof P)) throw new Error("Channel.removeMember requires a <String|Member>member parameter."); return this._membersEntity.remove("string" == typeof e ? e : e.identity) } }, { key: "sendMessage", value: function(e, t) { return this._messagesEntity.send(e, t).then(function(e) { return e.messageId }) } }, { key: "setAllMessagesConsumed", value: function() { var e = this; return this._subscribeStreams().then(function() { return e.getMessages(1) }).then(function(t) { t.items.length > 0 && e.advanceLastConsumedMessageIndex(t.items[0].index) }).then(function() { return e }) } }, { key: "setNoMessagesConsumed", value: function() { return this.updateLastConsumedMessageIndex(null) } }, { key: "typing", value: function() { return this._typingIndicator.send(this._sid) } }, { key: "updateAttributes", value: function(e) { var t = this; if ("undefined" == typeof e) throw new Error("Attributes is a required parameter for updateAttributes"); if (e.constructor !== Object) throw new Error("Attributes must be a valid JSON object."); return this._session.addCommand("editAttributes", { channelSid: this._sid, attributes: (0, m.default)(e) }).then(function() { return t }) } }, { key: "updateFriendlyName", value: function(e) { var t = this; return this._friendlyName === e ? f.default.resolve(this) : this._session.addCommand("editFriendlyName", { channelSid: this._sid, friendlyName: e }).then(function() { return t }) } }, { key: "updateLastConsumedMessageIndex", value: function(e) { var t = this; if (null !== e && parseInt(e) !== e) { var n = "Channel.updateLastConsumedMessageIndex requires an integral <Number>index parameter"; throw new Error(n) } return this._subscribeStreams().then(function() { t._consumptionHorizon.updateLastConsumedMessageIndexForChannel(t.sid, e) }).then(function() { return t }) } }, { key: "updateType", value: function(e) { if (e !== t.type.PRIVATE && e !== t.type.PUBLIC) throw new Error("Can't set unknown channel type " + e); if (this._type !== e) throw new Error("Changing of channel type isn't supported"); return f.default.resolve(this) } }, { key: "updateUniqueName", value: function(e) { var t = this; return this._uniqueName === e ? f.default.resolve(this) : this._session.addCommand("editUniqueName", { channelSid: this._sid, uniqueName: e }).then(function() { return t }) } }], [{ key: "_preprocessUpdate", value: function(e, t) { try { "string" == typeof e.attributes ? e.attributes = JSON.parse(e.attributes) : e.attributes && (0, m.default)(e.attributes) } catch (n) { A.warn("Retrieved malformed attributes from the server for channel: " + t), e.attributes = {} } try { e.dateCreated && (e.dateCreated = new Date(e.dateCreated)) } catch (n) { A.warn("Retrieved malformed attributes from the server for channel: " + t), delete e.dateCreated } try { e.dateUpdated && (e.dateUpdated = new Date(e.dateUpdated)) } catch (n) { A.warn("Retrieved malformed attributes from the server for channel: " + t), delete e.dateUpdated } } }]), t }(T);
            M.type = { PUBLIC: "public", PRIVATE: "private" }, M.status = { KNOWN: "known", INVITED: "invited", JOINED: "joined", FAILED: "failed" }, (0, a.default)(M.type), (0, a.default)(M.status), t.exports = M }, { "./data/members": 6, "./data/messages": 7, "./logger": 10, "./member": 11, "./util": 21, "./util/jsondiff": 22, "babel-runtime/core-js/get-iterator": 25, "babel-runtime/core-js/json/stringify": 27, "babel-runtime/core-js/map": 28, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/freeze": 33, "babel-runtime/core-js/object/get-prototype-of": 34, "babel-runtime/core-js/promise": 37, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, "babel-runtime/helpers/inherits": 44, "babel-runtime/helpers/possibleConstructorReturn": 45, events: 182 }],
        2: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e) { try { return JSON.parse(e) } catch (e) { p.warning("Failed to parse channel attributes", e) } return {} }

            function o(e) { try { return new Date(e) } catch (e) { return null } } var s = e("babel-runtime/core-js/object/define-properties"),
                a = r(s),
                u = e("babel-runtime/helpers/classCallCheck"),
                c = r(u),
                l = e("babel-runtime/helpers/createClass"),
                f = r(l),
                p = e("./logger"),
                d = function() {
                    function e(t, n) {
                        (0, c.default)(this, e), (0, a.default)(this, { _client: { value: t }, _descriptor: { value: n }, sid: { value: n.sid, enumerable: !0 }, uniqueName: { value: n.unique_name, enumerable: !0 }, friendlyName: { value: n.friendly_name, enumerable: !0 }, attributes: { value: i(n.attributes) }, createdBy: { value: n.created_by, enumerable: !0 }, dateCreated: { value: o(n.date_created), enumerable: !0 }, dateUpdated: { value: o(n.date_updated), enumerable: !0 }, messagesCount: { value: n.messages_count, enumerable: !0 }, membersCount: { value: n.members_count, enumerable: !0 }, type: { value: n.type, enumerable: !0 } }) } return (0, f.default)(e, [{ key: "getChannel", value: function() { return this._client.getChannelBySid(this.sid) } }]), e }();
            t.exports = d }, { "./logger": 10, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42 }],
        3: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } } var i = e("babel-runtime/core-js/object/freeze"),
                o = r(i),
                s = e("babel-runtime/core-js/promise"),
                a = r(s),
                u = e("babel-runtime/core-js/object/define-properties"),
                c = r(u),
                l = e("babel-runtime/core-js/object/get-prototype-of"),
                f = r(l),
                p = e("babel-runtime/helpers/classCallCheck"),
                d = r(p),
                h = e("babel-runtime/helpers/createClass"),
                _ = r(h),
                b = e("babel-runtime/helpers/possibleConstructorReturn"),
                m = r(b),
                v = e("babel-runtime/helpers/inherits"),
                y = r(v),
                g = e("events").EventEmitter,
                k = e("./logger"),
                w = e("twilio-notifications"),
                j = e("twilsock"),
                C = e("twilio-transport"),
                x = e("twilio-sync"),
                E = e("./configuration"),
                S = e("./session"),
                T = e("./data/channels"),
                R = e("./data/publicchannels"),
                P = e("./data/userinfos"),
                I = e("./services/typingindicator"),
                O = e("./services/consumptionhorizon"),
                A = e("./services/network"),
                N = e("./../package.json").version,
                F = function(e) {
                    function t(e, n) {
                        (0, d.default)(this, t); var r = (0, m.default)(this, (t.__proto__ || (0, f.default)(t)).call(this)); if (n = n || {}, n.logLevel = n.logLevel || "error", n.productId = "ip_messaging", !e) throw new Error("A valid Twilio token must be passed to Chat client");
                        k.setLevel(n.logLevel); var i = new E(e, n);
                        n.twilsockClient = n.twilsockClient || new j(e, n), n.transport = n.transport || new C(n.twilsockClient, n), n.notificationsClient = n.notificationsClient || new w(e, n), n.syncClient = n.syncClient || new x(e, n); var o = n.syncClient,
                            s = n.transport,
                            a = n.twilsockClient,
                            u = n.notificationsClient,
                            l = new S(o, s, i),
                            p = l.initialize(e),
                            h = new A(i, l, s),
                            _ = new P(l, o, null);
                        _.on("userInfoUpdated", r.emit.bind(r, "userInfoUpdated")); var b = new O(i, l),
                            v = new I(i, s, u, r.getChannelBySid.bind(r)),
                            y = new T({ session: l, userInfos: _, typingIndicator: v, consumptionHorizon: b, network: h, config: i }),
                            g = p.then(function() { return y.on("channelAdded", r.emit.bind(r, "channelAdded")), y.on("channelRemoved", r.emit.bind(r, "channelRemoved")), y.on("channelInvited", r.emit.bind(r, "channelInvited")), y.on("channelJoined", r.emit.bind(r, "channelJoined")), y.on("channelLeft", r.emit.bind(r, "channelLeft")), y.on("channelUpdated", r.emit.bind(r, "channelUpdated")), y.on("memberJoined", r.emit.bind(r, "memberJoined")), y.on("memberLeft", r.emit.bind(r, "memberLeft")), y.on("memberUpdated", r.emit.bind(r, "memberUpdated")), y.on("messageAdded", r.emit.bind(r, "messageAdded")), y.on("messageUpdated", r.emit.bind(r, "messageUpdated")), y.on("messageRemoved", r.emit.bind(r, "messageRemoved")), y.on("typingStarted", r.emit.bind(r, "typingStarted")), y.on("typingEnded", r.emit.bind(r, "typingEnded")), y.fetchChannels() }).then(function() { return y }); return u.on("transportReady", function(e) { if (e) r._connectionState = t.connectionState.CONNECTED, r._session.syncToken().catch(function(e) { k.error("Failed to sync session token", e) });
                            else switch (r._twilsock.state) {
                                case "rejected":
                                    r._connectionState = t.connectionState.DENIED; break;
                                default:
                                    r._connectionState = t.connectionState.CONNECTING }
                            r.emit("connectionStateChanged", r._connectionState) }), (0, c.default)(r, { _config: { value: i }, _channelsPromise: { value: g }, _channels: { value: y }, _transport: { value: h }, _datasync: { value: o }, _notifications: { value: u }, _session: { value: l }, _sessionPromise: { value: p }, _initializePromise: { value: null, writable: !0 }, _twilsock: { value: a }, _typingIndicator: { value: v }, _userInfos: { value: _ }, _publicChannels: { value: null, writable: !0 }, _connectionState: { value: t.connectionState.CONNECTING, writable: !0 }, userInfo: { enumerable: !0, get: function() { return r._userInfos.myUserInfo } }, connectionState: { enumerable: !0, get: function() { return r._connectionState } }, reachabilityEnabled: { enumerable: !0, get: function() { return r._session.reachabilityEnabled } } }), r._initializePromise = r._initialize(), r } return (0, y.default)(t, e), (0, _.default)(t, [{ key: "_initialize", value: function() { var e = this; return this._sessionPromise.then(function() { return e._notifications.subscribe("twilio.channel.new_message", "gcm"), e._notifications.subscribe("twilio.channel.added_to_channel", "gcm"), e._notifications.subscribe("twilio.channel.invited_to_channel", "gcm"), e._session.getSessionLinks().then(function(e) { return e.publicChannelsUrl }).then(function(t) { return e._publicChannels = new R(e._config, e, e._transport, t), e._publicChannels }) }).then(this._typingIndicator.initialize()) } }, { key: "_getSession", value: function() { return this._sessionPromise } }, { key: "initialize", value: function() { var e = this; return this._initializePromise.then(function() { return e }) } }, { key: "shutdown", value: function() { return this._twilsock.disconnect() } }, { key: "updateToken", value: function(e) { var t = this; return k.info("updateToken"), e === this._config.token ? a.default.resolve(this) : this._datasync.updateToken(e).then(function() { return t._notifications.updateToken(e) }).then(function() { return t._twilsock.updateToken(e) }).then(function() { return t._sessionPromise }).then(function() { return t._session.updateToken(e) }).then(function() { return t._config.updateToken(e) }).then(function() { return t }) } }, { key: "getChannelBySid", value: function(e) { var t = this; if (!e || "string" != typeof e) throw new Error("Client.getChannelBySid requires a <String>channelSid parameter"); return this._channels.getChannel(e).then(function(n) { return n || t._publicChannels.getChannelBySid(e) }).then(function(e) { return t._channels.pushChannel(e) }) } }, { key: "getChannelByUniqueName", value: function(e) { var t = this; if (!e || "string" != typeof e) throw new Error("Client.getChannelByUniqueName requires a <String>uniqueName parameter"); return this._publicChannels.getChannelByUniqueName(e).then(function(e) { return t._channels.pushChannel(e) }) } }, { key: "getUserChannels", value: function(e) { return this._channelsPromise.then(function(t) { return t.getChannels(e) }) } }, { key: "getPublicChannels", value: function() { return this._publicChannels.getChannels() } }, { key: "createChannel", value: function(e) { return e = e || {}, this._channelsPromise.then(function(t) { return t.addChannel(e) }) } }, { key: "setPushRegistrationId", value: function(e, t) { this._notification.setPushRegistrationId(e, t || "gcm") } }, { key: "putPushNotificationPayload", value: function(e) { var t = this,
                                n = e.additionalData; switch (n.type) {
                                case "twilio.channel.new_message":
                                    ! function() { var e = n.data.channel_id,
                                            r = n.data.message_id;
                                        t.getChannelBySid(e).then(function(e) { return e.getMessages(10, r) }) }() } } }]), t }(g);
            (0, c.default)(F, { version: { enumerable: !0, value: N } }), F.connectionState = { DISCONNECTED: "disconnected", CONNECTING: "connecting", CONNECTED: "connected", ERROR: "error", DENIED: "denied" }, (0, o.default)(F.connectionState), t.exports = F }, { "./../package.json": 230, "./configuration": 4, "./data/channels": 5, "./data/publicchannels": 8, "./data/userinfos": 9, "./logger": 10, "./services/consumptionhorizon": 14, "./services/network": 15, "./services/typingindicator": 16, "./session": 17, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/freeze": 33, "babel-runtime/core-js/object/get-prototype-of": 34, "babel-runtime/core-js/promise": 37, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, "babel-runtime/helpers/inherits": 44, "babel-runtime/helpers/possibleConstructorReturn": 45, events: 182, "twilio-notifications": 190, "twilio-sync": 201, "twilio-transport": 220, twilsock: 221 }],
        4: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } } var i = e("babel-runtime/core-js/object/define-properties"),
                o = r(i),
                s = e("babel-runtime/helpers/classCallCheck"),
                a = r(s),
                u = e("babel-runtime/helpers/createClass"),
                c = r(u),
                l = "https://aim.twilio.com",
                f = "/v1/typing",
                p = 5,
                d = "PT5S",
                h = function() {
                    function e(t, n) { var r = this;
                        (0, a.default)(this, e), n = n || {}; var i = n.Chat || n.IPMessaging || {},
                            s = i.apiUri || i.typingUri || l;
                        (0, o.default)(this, { _token: { value: t, writable: !0 }, token: { get: function() { return r._token }, enumerable: !0 }, baseUri: { value: s }, baseUrl: { value: s }, typingIndicatorUri: { enumerable: !0, value: s + f }, typingIndicatorTimeout: { enumerable: !0, value: 1e3 * p }, consumptionReportInterval: { enumerable: !0, value: d } }) } return (0, c.default)(e, [{ key: "updateToken", value: function(e) { this._token = e } }]), e }();
            t.exports = h }, { "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42 }],
        5: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } } var i = e("babel-runtime/core-js/promise"),
                o = r(i),
                s = e("babel-runtime/core-js/json/stringify"),
                a = r(s),
                u = e("babel-runtime/core-js/map"),
                c = r(u),
                l = e("babel-runtime/core-js/object/define-properties"),
                f = r(l),
                p = e("babel-runtime/core-js/object/get-prototype-of"),
                d = r(p),
                h = e("babel-runtime/helpers/classCallCheck"),
                _ = r(h),
                b = e("babel-runtime/helpers/createClass"),
                m = r(b),
                v = e("babel-runtime/helpers/possibleConstructorReturn"),
                y = r(v),
                g = e("babel-runtime/helpers/inherits"),
                k = r(g),
                w = e("events").EventEmitter,
                j = e("../channel"),
                C = e("../logger"),
                x = function(e) {
                    function t(e) {
                        (0, _.default)(this, t); var n = (0, y.default)(this, (t.__proto__ || (0, d.default)(t)).call(this)); return (0, f.default)(n, { _services: { value: e }, _userInfos: { value: e.userInfos }, _typingIndicator: { value: e.typingIndicator }, _session: { value: e.session }, channels: { enumerable: !0, value: new c.default } }), n } return (0, k.default)(t, e), (0, m.default)(t, [{ key: "_getMap", value: function() { var e = this; return this._session.getMyChannelsId().then(function(t) { return e._session.datasync.map({ uniqueName: t, mode: "open" }) }) } }, { key: "addChannel", value: function(e) { var t = this; return this._session.addCommand("createChannel", { friendlyName: e.friendlyName, uniqueName: e.uniqueName, type: e.isPrivate ? "private" : "public", attributes: (0, a.default)(e.attributes) }).then(function(e) { var n = t.channels.get(e.channelSid); if (n) return n._subscribe().then(function() { return n }); var r = new j(t._services, { channel: e.channel, channelSid: e.channelSid }, e.channelSid); return t.channels.set(r.sid, r), t._registerForEvents(r), r._subscribe().then(function() { return t.emit("channelAdded", r), r }) }) } }, { key: "fetchChannels", value: function() { var e = this;
                            this._session.getMyChannelsId().then(function(t) { return e._session.datasync.map({ uniqueName: t, mode: "open" }) }).then(function(t) { t.on("itemAdded", function(t) { e._upsertChannel(t.key, t.value) }), t.on("itemRemoved", function(t) { var n = e.channels.get(t);
                                    n && ("joined" !== n.status && "invited" !== n.status || (n._setStatus("known"), e.emit("channelLeft", n)), n.isPrivate && (e.channels.delete(t), e.emit("channelRemoved", n))) }), t.on("itemUpdated", function(t) { e._upsertChannel(t.key, t.value) }); var n = []; return t.forEach(function(t) { n.push(e._upsertChannel(t.key, t.value)) }).then(function() { return o.default.all(n) }) }).then(function() { C.debug("Channels list fetched") }).then(function() { return e }).catch(function(e) { throw C.error("Failed to get channels list", e), e }) } }, { key: "_wrapPaginator", value: function(e, t) { var n = this; return t(e.items).then(function(r) { return { items: r, hasNextPage: e.hasNextPage, hasPrevPage: e.hasPrevPage, nextPage: function() { return e.nextPage().then(function(e) { return n._wrapPaginator(e, t) }) }, prevPage: function() { return e.prevPage().then(function(e) { return n._wrapPaginator(e, t) }) } } }) } }, { key: "getChannels", value: function(e) { var t = this; return this._getMap().then(function(t) { return t.getItems(e) }).then(function(e) { return t._wrapPaginator(e, function(e) { return o.default.all(e.map(function(e) { return t._upsertChannel(e.key, e.value) })) }) }) } }, { key: "getChannel", value: function(e) { var t = this; return this._getMap().then(function(t) { return t.getItems({ key: e }) }).then(function(e) { return e.items.map(function(e) { return t._upsertChannel(e.key, e.value) }) }).then(function(e) { return 0 === e.length ? e[0] : null }) } }, { key: "pushChannel", value: function(e) { var t = e.sid,
                                n = { status: "known", type: e.type, friendlyName: e.friendlyName, dateUpdated: e.dateUpdated, dateCreated: e.dateCreated, uniqueName: e.uniqueName, createdBy: e.createdBy, attributes: e.attributes, channel: t },
                                r = this.channels.get(e.sid); return r || (r = new j(this._services, n, t), this.channels.set(t, r)), r } }, { key: "_upsertChannel", value: function(e, t) { var n = this,
                                r = this.channels.get(e); return r ? ("joined" === t.status && "joined" !== r.status ? (r._setStatus("joined"), "undefined" != typeof t.lastConsumedMessageIndex && (r._lastConsumedMessageIndex = t.lastConsumedMessageIndex), r._subscribe().then(function() { n.emit("channelJoined", r) })) : "invited" === t.status && "invited" !== r.status ? (r._setStatus("invited"), r._subscribe().then(function() { n.emit("channelInvited", r) })) : "known" !== t.status || "invited" !== r.status && "joined" !== r.status ? "notParticipating" === t.status && "private" === t.type ? r._subscribe() : r._update(t) : (r._setStatus("known"), r._update(t), r._subscribe().then(function() { n.emit("channelLeft", r) })), r._subscribe().then(function() { return r })) : (r = new j(this._services, t, e), this._registerForEvents(r), this.channels.set(e, r), r._subscribe().then(function() { return "joined" === t.status ? (r._setStatus("joined"), n.emit("channelJoined", r)) : "invited" === t.status && (r._setStatus("invited"), n.emit("channelInvited", r)), r.isPrivate && n.emit("channelAdded", r), r })) } }, { key: "_registerForEvents", value: function(e) { var t = this;
                            e.on("updated", function() { return t.emit("channelUpdated", e) }), e.on("memberJoined", this.emit.bind(this, "memberJoined")), e.on("memberLeft", this.emit.bind(this, "memberLeft")), e.on("memberUpdated", this.emit.bind(this, "memberUpdated")), e.on("messageAdded", this.emit.bind(this, "messageAdded")), e.on("messageUpdated", this.emit.bind(this, "messageUpdated")), e.on("messageRemoved", this.emit.bind(this, "messageRemoved")), e.on("typingStarted", this.emit.bind(this, "typingStarted")), e.on("typingEnded", this.emit.bind(this, "typingEnded")) } }]), t }(w);
            t.exports = x }, { "../channel": 1, "../logger": 10, "babel-runtime/core-js/json/stringify": 27, "babel-runtime/core-js/map": 28, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/get-prototype-of": 34, "babel-runtime/core-js/promise": 37, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, "babel-runtime/helpers/inherits": 44, "babel-runtime/helpers/possibleConstructorReturn": 45, events: 182 }],
        6: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } } var i = e("babel-runtime/core-js/promise"),
                o = r(i),
                s = e("babel-runtime/core-js/object/define-properties"),
                a = r(s),
                u = e("babel-runtime/core-js/object/get-prototype-of"),
                c = r(u),
                l = e("babel-runtime/helpers/classCallCheck"),
                f = r(l),
                p = e("babel-runtime/helpers/createClass"),
                d = r(p),
                h = e("babel-runtime/helpers/possibleConstructorReturn"),
                _ = r(h),
                b = e("babel-runtime/helpers/inherits"),
                m = r(b),
                v = e("events").EventEmitter,
                y = e("../logger").scope("Members"),
                g = e("../member"),
                k = function(e) {
                    function t(e, n, r, i) {
                        (0, f.default)(this, t); var o = (0, _.default)(this, (t.__proto__ || (0, c.default)(t)).call(this)); return (0, a.default)(o, { _datasync: { value: n.datasync }, _userInfos: { value: r }, _session: { value: n }, _rosterStreamPromise: { writable: !0, value: null }, channel: { enumerable: !0, value: e }, members: { enumerable: !0, value: i } }), o } return (0, m.default)(t, e), (0, d.default)(t, [{ key: "unsubscribe", value: function() { return this._rosterStreamPromise ? this._rosterStreamPromise.then(function(e) { return e.close() }) : o.default.resolve() } }, { key: "subscribe", value: function(e) { var t = this; return this._rosterStreamPromise = this._rosterStreamPromise || this._datasync.map({ uniqueName: e, mode: "open" }).then(function(e) { e.on("itemAdded", function(e) { t.upsertMember(e.key, e.value).then(function(e) { t.emit("memberJoined", e) }) }), e.on("itemRemoved", function(e) { if (t.members.has(e)) { var n = t.members.get(e);
                                        t.members.delete(e), t.emit("memberLeft", n) } }), e.on("itemUpdated", function(e) { t.upsertMember(e.key, e.value) }); var n = []; return e.forEach(function(e) { n.push(t.upsertMember(e.key, e.value)) }).then(function() { return o.default.all(n) }).then(function() { return e }) }).catch(function(e) { throw t._rosterStreamPromise = null, y.error("Failed to get roster object for channel", t.channel.sid, e), e }) } }, { key: "upsertMember", value: function(e, t) { var n = this,
                                r = this.members.get(e); return r ? (r._update(t), o.default.resolve(r)) : this._userInfos.getUserInfo(t.identity, t.userInfo).then(function(i) { return r = new g(n.channel, t, e, i), n.members.set(e, r), r.on("updated", function() { return n.emit("memberUpdated", r) }), r.on("userInfoUpdated", function() { return n.emit("memberInfoUpdated", r) }), r }) } }, { key: "getMembers", value: function() { var e = this; return this._rosterStreamPromise.then(function() { var t = []; return e.members.forEach(function(e) { return t.push(e) }), t }) } }, { key: "add", value: function(e) { return this._session.addCommand("addMember", { channelSid: this.channel.sid, username: e }) } }, { key: "invite", value: function(e) { return this._session.addCommand("inviteMember", { channelSid: this.channel.sid, username: e }) } }, { key: "remove", value: function(e) { return this._session.addCommand("removeMember", { channelSid: this.channel.sid, username: e }) } }]), t }(v);
            t.exports = k }, { "../logger": 10, "../member": 11, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/get-prototype-of": 34, "babel-runtime/core-js/promise": 37, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, "babel-runtime/helpers/inherits": 44, "babel-runtime/helpers/possibleConstructorReturn": 45, events: 182 }],
        7: [function(e, t, n) {
            "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e) { return "forward" === e.toLowerCase() }
            var o = e("babel-runtime/core-js/json/stringify"),
                s = r(o),
                a = e("babel-runtime/core-js/promise"),
                u = r(a),
                c = e("babel-runtime/core-js/map"),
                l = r(c),
                f = e("babel-runtime/core-js/object/define-properties"),
                p = r(f),
                d = e("babel-runtime/core-js/object/get-prototype-of"),
                h = r(d),
                _ = e("babel-runtime/helpers/classCallCheck"),
                b = r(_),
                m = e("babel-runtime/helpers/createClass"),
                v = r(m),
                y = e("babel-runtime/helpers/possibleConstructorReturn"),
                g = r(y),
                k = e("babel-runtime/helpers/inherits"),
                w = r(k),
                j = e("events").EventEmitter,
                C = e("loglevel"),
                x = e("../message"),
                E = function(e) {
                    function t(e, n, r) {
                        (0, b.default)(this, t);
                        var i = (0, g.default)(this, (t.__proto__ || (0, h.default)(t)).call(this));
                        return (0, p.default)(i, { _datasync: { value: n.datasync }, _eventStreamPromise: { value: null, writable: !0 }, _sortedMessages: { value: r }, _messagesByIndex: { value: new l.default }, _session: { value: n }, channel: { enumerable: !0, value: e } }), i
                    }
                    return (0, w.default)(t, e), (0, v.default)(t, [{ key: "subscribe", value: function(e) { var t = this; return this._eventStreamPromise = this._eventStreamPromise || this._datasync.list({ uniqueName: e, mode: "open" }).then(function(e) { return e.on("itemAdded", function(e) { var n = new x(t.channel, e.index, e.value); return t._messagesByIndex.has(n.index) ? void C.debug("Message arrived, but already known and ignored", t.channel.sid, n.index) : (t._sortedMessages.push(n), t._messagesByIndex.set(n.index, n), n.on("updated", function() { return t.emit("messageUpdated", n) }), void t.emit("messageAdded", n)) }), e.on("itemRemoved", function(e) { var n = t._removeMessageById(e);
                                    n && (t._messagesByIndex.delete(n.index), n.removeAllListeners("updated"), t.emit("messageRemoved", n)) }), e.on("itemUpdated", function(e) { var n = t._messagesByIndex.get(e.index);
                                    n && n._update(e.value) }), e }).catch(function(e) { throw t._eventStreamPromise = null, C.error("Failed to get messages object for channel", t.channel.sid, e), e }) } }, { key: "unsubscribe", value: function() { return this._eventStreamPromise ? this._eventStreamPromise.then(function(e) { return e.close() }) : u.default.resolve() } }, { key: "_removeMessageById", value: function(e) { for (var t = void 0, n = 0; n < this._sortedMessages.length; n++) { var r = this._sortedMessages[n]; if (r.index === e) { t = this._sortedMessages.splice(n, 1)[0]; break } } return t } }, { key: "send", value: function(e, t) { if ("undefined" == typeof t) t = {};
                            else if (t.constructor !== Object) return u.default.reject(new Error("Attributes must be a valid JSON object")); return this._session.addCommand("sendMessage", { channelSid: this.channel.sid, text: e, attributes: (0, s.default)(t) }) } }, { key: "getMessages", value: function(e, t, n) { return t = "undefined" != typeof t ? t : "end", n = n || "backwards", this._getMessages(e, t, n) } }, { key: "_wrapPaginator", value: function(e, t) { var n = this; return t(e.items).then(function(r) { return { items: r.sort(function(e, t) { return e.index - t.index }), hasPrevPage: e.hasNextPage, hasNextPage: e.hasPrevPage, prevPage: function() { return e.nextPage().then(function(e) { return n._wrapPaginator(e, t) }) }, nextPage: function() { return e.prevPage().then(function(e) { return n._wrapPaginator(e, t) }) } } }) } }, { key: "_upsertMessage", value: function(e, t) { var n = this,
                                r = this._messagesByIndex.get(e); if (r) return r; var i = new x(this.channel, e, t); return this._messagesByIndex.set(i.index, i), i.on("updated", function() { return n.emit("messageUpdated", i) }), i } }, { key: "_getMessages", value: function(e, t, n) { var r = this;
                            t = "undefined" != typeof t ? t : "end", e = e || 30; var o = "backwards" === n ? "desc" : "asc"; return "end" !== t && e++, this.subscribe().then(function(n) { return n.getItems({ from: "end" !== t ? t : void 0, pageSize: e, order: o }) }).then(function(e) { return "end" !== t && (i(n) ? e.items.shift() : e.items.pop()), e }).then(function(e) { return r._wrapPaginator(e, function(e) { return u.default.all(e.map(function(e) { return r._upsertMessage(e.index, e.value) })) }) }) } }]), t
                }(j);
            t.exports = E
        }, { "../message": 12, "babel-runtime/core-js/json/stringify": 27, "babel-runtime/core-js/map": 28, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/get-prototype-of": 34, "babel-runtime/core-js/promise": 37, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, "babel-runtime/helpers/inherits": 44, "babel-runtime/helpers/possibleConstructorReturn": 45, events: 182, loglevel: 184 }],
        8: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } } var i = e("babel-runtime/core-js/object/define-properties"),
                o = r(i),
                s = e("babel-runtime/helpers/classCallCheck"),
                a = r(s),
                u = e("babel-runtime/helpers/createClass"),
                c = r(u),
                l = e("../util").UriBuilder,
                f = e("../restpaginator"),
                p = e("../channeldescriptor"),
                d = function() {
                    function e(t, n, r, i) {
                        (0, a.default)(this, e), (0, o.default)(this, { _config: { value: t }, _client: { value: n }, _transport: { value: r }, _url: { value: i } }) } return (0, c.default)(e, [{ key: "getChannels", value: function(e) { var t = this;
                            e = e || {}; var n = new l(this._url).arg("PageToken", e.pageToken).build(); return this._transport.get(n).then(function(e) { return e.body }).then(function(e) { return new f(e.channels.map(function(e) { return new p(t._client, e) }), function(e) { return t.getChannels({ pageToken: e }) }, e.meta.prev_token, e.meta.next_token) }) } }, { key: "getChannelBySid", value: function(e) { var t = this,
                                n = new l(this._url).path(e).build(); return this._transport.get(n).then(function(e) { return e.body }).then(function(e) { return new p(t._client, e) }) } }, { key: "getChannelByUniqueName", value: function(e) { var t = this,
                                n = new l(this._url).path(encodeURIComponent(e)).build(); return this._transport.get(n).then(function(e) { return e.body }).then(function(e) { return new p(t._client, e) }) } }]), e }();
            t.exports = d }, { "../channeldescriptor": 2, "../restpaginator": 13, "../util": 21, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42 }],
        9: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } } var i = e("babel-runtime/core-js/map"),
                o = r(i),
                s = e("babel-runtime/core-js/object/define-properties"),
                a = r(s),
                u = e("babel-runtime/core-js/object/get-prototype-of"),
                c = r(u),
                l = e("babel-runtime/helpers/classCallCheck"),
                f = r(l),
                p = e("babel-runtime/helpers/createClass"),
                d = r(p),
                h = e("babel-runtime/helpers/possibleConstructorReturn"),
                _ = r(h),
                b = e("babel-runtime/helpers/inherits"),
                m = r(b),
                v = e("events").EventEmitter,
                y = e("../userinfo"),
                g = function(e) {
                    function t(e, n) {
                        (0, f.default)(this, t); var r = (0, _.default)(this, (t.__proto__ || (0, c.default)(t)).call(this)),
                            i = new y(null, null, n, e); return i.on("updated", function() { return r.emit("userInfoUpdated", i) }), (0, a.default)(r, { _session: { value: e }, _datasync: { value: n }, _infos: { value: new o.default }, _identity: { value: null, writable: !0 }, myUserInfo: { enumerable: !0, get: function() { return i } } }), r._session.getUserInfosData().then(function(e) { return r._identity = e.identity, i._identity = e.identity, i._entityName = e.userInfo, r._infos.set(e.identity, i), i._ensureFetched() }), r } return (0, m.default)(t, e), (0, d.default)(t, [{ key: "getMyUserInfo", value: function() { var e = this; return this._session.getUserInfosData().then(function(t) { return e.getUserInfo(t.identity, t.userInfo) }) } }, { key: "getUserInfo", value: function(e, t) { var n = this,
                                r = this._infos.get(e); return r || (r = new y(e, t || null, this._datasync, this._session), this._infos.set(e, r), r.on("updated", function() { return n.emit("userInfoUpdated", r) })), r._ensureFetched() } }]), t }(v);
            t.exports = g }, { "../userinfo": 19, "babel-runtime/core-js/map": 28, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/get-prototype-of": 34, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, "babel-runtime/helpers/inherits": 44, "babel-runtime/helpers/possibleConstructorReturn": 45, events: 182 }],
        10: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e, t) { return [e].concat((0, p.default)(t)) } var o = e("babel-runtime/core-js/object/define-properties"),
                s = r(o),
                a = e("babel-runtime/helpers/classCallCheck"),
                u = r(a),
                c = e("babel-runtime/helpers/createClass"),
                l = r(c),
                f = e("babel-runtime/core-js/array/from"),
                p = r(f),
                d = e("loglevel"),
                h = function() {
                    function e() {
                        (0, u.default)(this, e), (0, s.default)(this, { _prefix: { value: "", writable: !0 } }) } return (0, l.default)(e, [{ key: "setLevel", value: function(e) { d.setLevel(e) } }, { key: "trace", value: function() { d.trace.apply(null, i("Chat T:" + this._prefix, arguments)) } }, { key: "debug", value: function() { d.debug.apply(null, i("Chat D:" + this._prefix, arguments)) } }, { key: "info", value: function() { d.info.apply(null, i("Chat I:" + this._prefix, arguments)) } }, { key: "warn", value: function() { d.warn.apply(null, i("Chat W:" + this._prefix, arguments)) } }, { key: "error", value: function() { d.error.apply(null, i("Chat E:" + this._prefix, arguments)) } }], [{ key: "scope", value: function(t) { return this._prefix += " " + t, new e } }, { key: "setLevel", value: function(e) { d.setLevel(e) } }, { key: "trace", value: function() { d.trace.apply(null, i("Chat T:", arguments)) } }, { key: "debug", value: function() { d.debug.apply(null, i("Chat D:", arguments)) } }, { key: "info", value: function() { d.info.apply(null, i("Chat I:", arguments)) } }, { key: "warn", value: function() { d.warn.apply(null, i("Chat W:", arguments)) } }, { key: "error", value: function() { d.error.apply(null, i("Chat E:", arguments)) } }]), e }();
            t.exports = h }, { "babel-runtime/core-js/array/from": 24, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, loglevel: 184 }],
        11: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } } var i = e("babel-runtime/core-js/object/define-properties"),
                o = r(i),
                s = e("babel-runtime/core-js/object/get-prototype-of"),
                a = r(s),
                u = e("babel-runtime/helpers/classCallCheck"),
                c = r(u),
                l = e("babel-runtime/helpers/createClass"),
                f = r(l),
                p = e("babel-runtime/helpers/possibleConstructorReturn"),
                d = r(p),
                h = e("babel-runtime/helpers/inherits"),
                _ = r(h),
                b = e("events").EventEmitter,
                m = function(e) {
                    function t(e, n, r, i) {
                        (0, c.default)(this, t); var s = (0, d.default)(this, (t.__proto__ || (0, a.default)(t)).call(this)),
                            u = !1,
                            l = null,
                            f = n.identity,
                            p = n.roleSid || null,
                            h = "undefined" != typeof n.lastConsumedMessageIndex ? n.lastConsumedMessageIndex : null,
                            _ = n.lastConsumptionTimestamp ? new Date(n.lastConsumptionTimestamp) : null; if (!n.identity) throw new Error("Received invalid Member object from server: Missing identity."); return (0, o.default)(s, { _identity: { get: function() { return f }, set: function(e) { return f = e } }, _isTyping: { get: function() { return u }, set: function(e) { return u = e } }, _lastConsumedMessageIndex: { get: function() { return h }, set: function(e) { return h = e } }, _lastConsumptionTimestamp: { get: function() { return _ }, set: function(e) { return _ = e } }, _roleSid: { get: function() { return p }, set: function(e) { return p = e } }, _typingTimeout: { writable: !0, value: l }, channel: { enumerable: !0, value: e }, identity: { enumerable: !0, get: function() { return f } }, isTyping: { enumerable: !0, get: function() { return u } }, lastConsumedMessageIndex: { enumerable: !0, get: function() { return h } }, lastConsumptionTimestamp: { enumerable: !0, get: function() { return _ } }, roleSid: { enumerable: !0, get: function() { return p } }, sid: { enumerable: !0, value: r }, userInfo: { enumerable: !0, get: function() { return i } } }), i.on("updated", function() { return s.emit("userInfoUpdated", s) }), s } return (0, _.default)(t, e), (0, f.default)(t, [{ key: "_startTyping", value: function(e) { var t = this; return clearTimeout(this._typingTimeout), this._isTyping = !0, this.emit("typingStarted", this), this.channel.emit("typingStarted", this), this._typingTimeout = setTimeout(function() { return t._endTyping() }, e), this } }, { key: "_endTyping", value: function() { this._typingTimeout && (this._isTyping = !1, this.emit("typingEnded", this), this.channel.emit("typingEnded", this), clearInterval(this._typingTimeout), this._typingTimeout = null) } }, { key: "_update", value: function(e) { var t = !1; if (e.roleSid && this._roleSid !== e.roleSid && (this._roleSid = e.roleSid, t = !0), "undefined" != typeof e.lastConsumedMessageIndex && this._lastConsumedMessageIndex !== e.lastConsumedMessageIndex && (this._lastConsumedMessageIndex = e.lastConsumedMessageIndex, t = !0), e.lastConsumptionTimestamp) { var n = new Date(e.lastConsumptionTimestamp);
                                this._lastConsumptionTimestamp && this._lastConsumptionTimestamp.getTime() === n.getTime() || (this._lastConsumptionTimestamp = n, t = !0) }
                            t && this.emit("updated", this) } }, { key: "remove", value: function() { return this.channel.removeMember(this) } }]), t }(b);
            t.exports = m }, { "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/get-prototype-of": 34, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, "babel-runtime/helpers/inherits": 44, "babel-runtime/helpers/possibleConstructorReturn": 45, events: 182 }],
        12: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e, t) { try { return t ? JSON.parse(t) : {} } catch (t) { return w.warn("Got malformed attributes for the message", e), {} } } var o = e("babel-runtime/core-js/json/stringify"),
                s = r(o),
                a = e("babel-runtime/core-js/promise"),
                u = r(a),
                c = e("babel-runtime/core-js/object/define-properties"),
                l = r(c),
                f = e("babel-runtime/core-js/object/get-prototype-of"),
                p = r(f),
                d = e("babel-runtime/helpers/classCallCheck"),
                h = r(d),
                _ = e("babel-runtime/helpers/createClass"),
                b = r(_),
                m = e("babel-runtime/helpers/possibleConstructorReturn"),
                v = r(m),
                y = e("babel-runtime/helpers/inherits"),
                g = r(y),
                k = e("events").EventEmitter,
                w = e("./logger"),
                j = e("./util/jsondiff"),
                C = function(e) {
                    function t(e, n, r) {
                        (0, h.default)(this, t); var o = (0, v.default)(this, (t.__proto__ || (0, p.default)(t)).call(this)),
                            s = r.text,
                            a = r.dateUpdated ? new Date(r.dateUpdated) : null,
                            u = r.lastUpdatedBy ? r.lastUpdatedBy : null; return (0, l.default)(o, { _body: { get: function() { return s }, set: function(e) { return s = e } }, _dateUpdated: { get: function() { return a }, set: function(e) { return a = e } }, _lastUpdatedBy: { get: function() { return u }, set: function(e) { return u = e } }, _attributes: { value: i(r.sid, r.attributes), writable: !0 }, author: { enumerable: !0, value: r.author }, body: { enumerable: !0, get: function() { return s } }, channel: { enumerable: !0, value: e }, dateUpdated: { enumerable: !0, get: function() { return a } }, index: { enumerable: !0, value: parseInt(n) }, lastUpdatedBy: { enumerable: !0, get: function() { return u } }, sid: { enumerable: !0, value: r.sid }, timestamp: { enumerable: !0, value: new Date(r.timestamp) }, attributes: { enumerable: !0, get: function() { return o._attributes } } }), o } return (0, g.default)(t, e), (0, b.default)(t, [{ key: "_update", value: function(e) { var t = !1;!e.text && "string" != typeof e.text || e.text === this._body || (this._body = e.text, t = !0), e.lastUpdatedBy && e.lastUpdatedBy !== this._lastUpdatedBy && (this._lastUpdatedBy = e.lastUpdatedBy, t = !0), e.dateUpdated && new Date(e.dateUpdated).getTime() !== (this._dateUpdated && this._dateUpdated.getTime()) && (this._dateUpdated = new Date(e.dateUpdated), t = !0); var n = i(this.sid, e.attributes);
                            j.isDeepEqual(this._attributes, n) || (this._attributes = n, t = !0), t && this.emit("updated", this) } }, { key: "remove", value: function() { var e = this; return this.channel._session.addCommand("deleteMessage", { channelSid: this.channel.sid, messageIdx: this.index.toString() }).then(function() { return e }) } }, { key: "updateBody", value: function(e) { var t = this; if ("string" != typeof e) throw new Error("Body <String> is a required parameter for updateBody"); return this.channel._session.addCommand("editMessage", { channelSid: this.channel.sid, messageIdx: this.index.toString(), text: e }).then(function() { return t }) } }, { key: "updateAttributes", value: function(e) { var t = this; return "undefined" == typeof e ? u.default.reject(new Error("Attributes is a required parameter for updateAttributes")) : e.constructor !== Object ? u.default.reject(new Error("Attributes must be a valid JSON object")) : this.channel._session.addCommand("editMessageAttributes", { channelSid: this.channel.sid, messageIdx: this.index, attributes: (0, s.default)(e) }).then(function() { return t }) } }]), t }(k);
            t.exports = C }, { "./logger": 10, "./util/jsondiff": 22, "babel-runtime/core-js/json/stringify": 27, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/get-prototype-of": 34, "babel-runtime/core-js/promise": 37, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, "babel-runtime/helpers/inherits": 44, "babel-runtime/helpers/possibleConstructorReturn": 45, events: 182 }],
        13: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } } var i = e("babel-runtime/core-js/promise"),
                o = r(i),
                s = e("babel-runtime/core-js/object/define-properties"),
                a = r(s),
                u = e("babel-runtime/helpers/classCallCheck"),
                c = r(u),
                l = e("babel-runtime/helpers/createClass"),
                f = r(l),
                p = function() {
                    function e(t, n, r, i) {
                        (0, c.default)(this, e), (0, a.default)(this, { prevToken: { value: r }, nextToken: { value: i }, source: { value: n }, hasNextPage: { value: !!i, enumerable: !0 }, hasPrevPage: { value: !!r, enumerable: !0 }, items: { get: function() { return t }, enumerable: !0 } }) } return (0, f.default)(e, [{ key: "nextPage", value: function() { return this.hasNextPage ? this.source(this.nextToken) : o.default.reject(new Error("No next page")) } }, { key: "prevPage", value: function() { return this.hasPrevPage ? this.source(this.prevToken) : o.default.reject(new Error("No previous page")) } }]), e }();
            t.exports = p }, { "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/promise": 37, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42 }],
        14: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } } var i = e("babel-runtime/core-js/map"),
                o = r(i),
                s = e("babel-runtime/core-js/object/define-properties"),
                a = r(s),
                u = e("babel-runtime/helpers/classCallCheck"),
                c = r(u),
                l = e("babel-runtime/helpers/createClass"),
                f = r(l),
                p = function() {
                    function e(t, n) {
                        (0, c.default)(this, e), (0, a.default)(this, { _session: { value: n }, _consumptionHorizonReports: { value: new o.default }, _consumptionHorizonUpdateTimer: { value: null, writable: !0 } }) } return (0, f.default)(e, [{ key: "_getReportInterval", value: function() { return this._session.getConsumptionReportInterval().then(function(e) { return 1e3 * e.seconds }) } }, { key: "_delayedSendConsumptionHorizon", value: function(e) { var t = this;
                            null === this._consumptionHorizonUpdateTimer && (this._consumptionHorizonUpdateTimer = setTimeout(function() { var e = [];
                                t._consumptionHorizonReports.forEach(function(t) { return e.push(t) }), e.length > 0 && t._session.addCommand("consumptionReport", { report: e }), t._consumptionHorizonUpdateTimer = null, t._consumptionHorizonReports.clear() }, e)) } }, { key: "updateLastConsumedMessageIndexForChannel", value: function(e, t) { var n = this;
                            this._consumptionHorizonReports.set(e, { channelSid: e, messageIdx: t }), this._getReportInterval().then(function(e) { return n._delayedSendConsumptionHorizon(e) }) } }, { key: "advanceLastConsumedMessageIndexForChannel", value: function(e, t) { var n = this,
                                r = this._consumptionHorizonReports.get(e);
                            r && r.messageIdx >= t || (this._consumptionHorizonReports.set(e, { channelSid: e, messageIdx: t }), this._getReportInterval().then(function(e) { return n._delayedSendConsumptionHorizon(e) })) } }]), e }();
            t.exports = p }, { "babel-runtime/core-js/map": 28, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42 }],
        15: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } } var i = e("babel-runtime/core-js/promise"),
                o = r(i),
                s = e("babel-runtime/helpers/slicedToArray"),
                a = r(s),
                u = e("babel-runtime/core-js/get-iterator"),
                c = r(u),
                l = e("babel-runtime/core-js/map"),
                f = r(l),
                p = e("babel-runtime/core-js/object/define-properties"),
                d = r(p),
                h = e("babel-runtime/helpers/classCallCheck"),
                _ = r(h),
                b = e("babel-runtime/helpers/createClass"),
                m = r(b),
                v = function() {
                    function e(t, n, r) {
                        (0, _.default)(this, e), (0, d.default)(this, { _config: { value: t }, _transport: { value: r }, _session: { value: n }, _cacheLifetime: { value: 1e4, writable: !0 }, _cache: { value: new f.default }, _timer: { value: null, writable: !0 } }) } return (0, m.default)(e, [{ key: "_isExpired", value: function(e) { return Date.now() - e > this._cacheLifetime } }, { key: "_cleanupCache", value: function() { var e = !0,
                                t = !1,
                                n = void 0; try { for (var r, i = (0, c.default)(this._cache); !(e = (r = i.next()).done); e = !0) { var o = (0, a.default)(r.value, 2),
                                        s = o[0],
                                        u = o[1];
                                    this._isExpired(u.timestamp) && this._cache.delete(s) } } catch (e) { t = !0, n = e } finally { try {!e && i.return && i.return() } finally { if (t) throw n } }
                            0 === this._cache.size && clearTimeout(this._timer) } }, { key: "_pokeTimer", value: function() { var e = this;
                            this._timer = this._timer || setInterval(function() { return e._cleanupCache() }, 2 * this._cacheLifetime) } }, { key: "get", value: function(e) { var t = this,
                                n = this._cache.get(e); if (n && !this._isExpired(n.timestamp)) return o.default.resolve(n.response); var r = { "X-Twilio-Token": this._config.token }; return this._transport.get(e, r).then(function(n) { return t._cache.set(e, { response: n, timestamp: Date.now() }), t._pokeTimer(), n }) } }]), e }();
            t.exports = v }, { "babel-runtime/core-js/get-iterator": 25, "babel-runtime/core-js/map": 28, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/promise": 37, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, "babel-runtime/helpers/slicedToArray": 46 }],
        16: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } } var i = e("babel-runtime/core-js/promise"),
                o = r(i),
                s = e("babel-runtime/core-js/map"),
                a = r(s),
                u = e("babel-runtime/core-js/object/define-properties"),
                c = r(u),
                l = e("babel-runtime/helpers/classCallCheck"),
                f = r(l),
                p = e("babel-runtime/helpers/createClass"),
                d = r(p),
                h = e("../logger").scope("TypingIndicator"),
                _ = "twilio.ipmsg.typing_indicator",
                b = function() {
                    function e(t, n, r, i) { var o = this;
                        (0, f.default)(this, e), (0, c.default)(this, { _transport: { value: n }, _notifications: { value: r }, _config: { value: t }, _typingTimeout: { value: null, writable: !0 }, _sentUpdates: { value: new a.default }, _getChannel: { value: i }, token: { get: function() { return t.token } }, typingTimeout: { get: function() { return o._typingTimeout || t.typingIndicatorTimeout } } }) } return (0, d.default)(e, [{ key: "initialize", value: function() { var e = this;
                            this._notifications.subscribe(_, "twilsock"), this._notifications.on("message", function(t, n) { t === _ && e._handleRemoteTyping(n) }) } }, { key: "_handleRemoteTyping", value: function(e) { var t = this;
                            h.trace("Got new typing indicator ", e), this._getChannel(e.channel_sid).then(function(n) { n && n._members.forEach(function(n) { n.identity === e.identity && n._startTyping(t.typingTimeout) }) }).catch(function(e) { throw h.error(e), e }) } }, { key: "send", value: function(e) { var t = this._sentUpdates.get(e); return t && t > Date.now() - this.typingTimeout ? o.default.resolve() : (this._sentUpdates.set(e, Date.now()), this._send(e)) } }, { key: "_send", value: function(e) { var t = this;
                            h.trace("Sending typing indicator"); var n = this._config.typingIndicatorUri,
                                r = { "X-Twilio-Token": this.token, "Content-Type": "application/x-www-form-urlencoded" },
                                i = "ChannelSid=" + e;
                            this._transport.post(n, r, i).then(function(e) { e.body.hasOwnProperty("typing_timeout") && (t._typingTimeout = 1e3 * e.body.typing_timeout) }).catch(function(e) { throw h.error("Failed to send typing indicator: ", e), e }) } }]), e }();
            t.exports = b }, { "../logger": 10, "babel-runtime/core-js/map": 28, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/promise": 37, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42 }],
        17: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } } var i = e("babel-runtime/core-js/promise"),
                o = r(i),
                s = e("babel-runtime/core-js/map"),
                a = r(s),
                u = e("babel-runtime/core-js/object/define-properties"),
                c = r(u),
                l = e("babel-runtime/helpers/classCallCheck"),
                f = r(l),
                p = e("babel-runtime/helpers/createClass"),
                d = r(p),
                h = e("uuid"),
                _ = e("platform"),
                b = e("./logger").scope("Session"),
                m = e("./util/changetracker"),
                v = e("./sessionerror"),
                y = e("durational"),
                g = e("./../package.json").version,
                k = "com.twilio.rtd.ipmsg",
                w = function() {
                    function e(t, n, r) { var i = this;
                        (0, f.default)(this, e); var o = "undefined" != typeof navigator ? _.parse(navigator.userAgent) : _;
                        (0, c.default)(this, { _endpointPlatform: { value: ["js", g, o.os, o.name, o.version].join("|") }, _pendingCommands: { value: new a.default }, _sessionContextChangeTracker: { value: new m }, _sessionStreamPromise: { value: null, writable: !0 }, _config: { value: r }, _token: { value: null, writable: !0 }, _tokenSynced: { value: !0, writable: !0 }, identity: { enumerable: !0, get: function() { return i._sessionContextChangeTracker._data.identity } }, userInfo: { enumerable: !0, get: function() { return i._sessionContextChangeTracker._data.userInfo } }, reachabilityEnabled: { enumerable: !0, get: function() { return i._sessionContextChangeTracker._data.reachabilityEnabled } }, datasync: { enumerable: !0, value: t }, transport: { value: n } }) } return (0, d.default)(e, [{ key: "initialize", value: function(e) { var t = this;
                            this._token = e, this._tokenSynced = !1; var n = { type: "IpMsgSession", apiVersion: "3", endpointPlatform: this._endpointPlatform, token: e }; return this._sessionStreamPromise = this.datasync.list({ purpose: k, context: n }).then(function(e) { return b.info("Session created", e.sid), t._tokenSynced = !0, e.on("itemAdded", function(e) { return t._processCommandResponse(e) }), e.on("itemUpdated", function(e) { return t._processCommandResponse(e) }), e.on("contextUpdated", function(e) { b.info("Session context updated"), b.debug("new session context:", e), t._sessionContextChangeTracker.update(e) }), e }).catch(function(e) { throw b.error("Failed to create session", e), e }), this._sessionStreamPromise } }, { key: "addCommand", value: function(e, t) { return this._processCommand(e, t) } }, { key: "_processCommand", value: function(e, t) { var n = this,
                                r = { request: t }; return r.request.action = e, r.commandId = h.v4(), b.info("Adding command: ", e, r.commandId), b.debug("command arguments:", t), new o.default(function(e, t) { n._sessionStreamPromise.then(function(i) { return n._pendingCommands.set(r.commandId, { resolve: e, reject: t }), i.push(r) }).then(function() { return b.debug("Command accepted by server", r.commandId) }).catch(function(e) { n._pendingCommands.delete(r.commandId), b.error("Failed to add a command to the session", e), t(new Error("Can't add command: " + e.description)) }) }) } }, { key: "_processCommandResponse", value: function(e) { if (e.value.hasOwnProperty("response") && e.value.hasOwnProperty("commandId") && this._pendingCommands.has(e.value.commandId)) { var t = e.value,
                                    n = e.value.commandId; if (200 === t.response.status) { b.debug("Command succeeded: ", t); var r = this._pendingCommands.get(n).resolve;
                                    this._pendingCommands.delete(n), r(t.response) } else { b.error("Command failed: ", t); var i = this._pendingCommands.get(n).reject;
                                    this._pendingCommands.delete(n), i(new v(t.response.statusText, t.response.status)) } } } }, { key: "updateToken", value: function(e) { return this._token = e, this._tokenSynced = !1, this.syncToken() } }, { key: "syncToken", value: function() { var e = this; return this._tokenSynced ? o.default.resolve() : this._sessionStreamPromise.then(function(t) { return t.getContext().then(function(n) { return n.token = e._token, t.updateContext(n) }).then(function() { e._tokenSynced = !0 }) }).catch(function(e) { throw b.error("Couldn't update the token in session context", e), new Error(e) }) } }, { key: "onKeyUpdated", value: function(e, t) { this._sessionContextChangeTracker.addEventHandler("keyAdded", e, t), this._sessionContextChangeTracker.addEventHandler("keyUpdated", e, t) } }, { key: "getSessionLinks", value: function() { var e = this; return new o.default(function(t) { e._sessionStreamPromise.then(function(e) { return e.getContext() }).then(function(n) { n.hasOwnProperty("links") ? t(n.links) : e.onKeyUpdated("/links", function() { e._sessionStreamPromise.then(function(e) { return e.getContext() }).then(function(e) { return t(e.links) }) }) }) }).then(function(t) { return { publicChannelsUrl: e._config.baseUrl + t.publicChannelsUrl, myChannelsUrl: e._config.baseUrl + t.myChannelsUrl, typingUrl: e._config.baseUrl + t.typingUrl } }) } }, { key: "getChannelsId", value: function() { var e = this; return new o.default(function(t) { e._sessionStreamPromise.then(function(e) { return e.getContext() }).then(function(n) { n.hasOwnProperty("channelsUrl") ? t(n.channels) : e.onKeyUpdated("/channels", t) }) }) } }, { key: "getMyChannelsId", value: function() { var e = this; return new o.default(function(t) { e._sessionStreamPromise.then(function(e) { return e.getContext() }).then(function(n) { n.hasOwnProperty("myChannels") ? t(n.myChannels) : e.onKeyUpdated("/myChannels", t) }) }) } }, { key: "getUserInfosData", value: function() { var e = this; return new o.default(function(t) {
                                function n(e) { t({ userInfo: e.userInfo, identity: e.identity }) }
                                e._sessionStreamPromise.then(function(e) { return e.getContext() }).then(function(t) { t.hasOwnProperty("userInfo") ? n(t) : e.onKeyUpdated("/userInfo", function() { e._sessionStreamPromise.then(function(e) { return e.getContext() }).then(function(e) { return n(e) }) }) }) }) } }, { key: "getConsumptionReportInterval", value: function() { var e = this; return this._sessionStreamPromise.then(function(e) { return e.getContext() }).then(function(t) { return y.fromString(t.consumptionReportInterval || e._config.consumptionReportInterval) }) } }]), e }();
            t.exports = w }, { "./../package.json": 230, "./logger": 10, "./sessionerror": 18, "./util/changetracker": 20, "babel-runtime/core-js/map": 28, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/promise": 37, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, durational: 180, platform: 185, uuid: 229 }],
        18: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } } var i = e("babel-runtime/core-js/object/get-prototype-of"),
                o = r(i),
                s = e("babel-runtime/helpers/classCallCheck"),
                a = r(s),
                u = e("babel-runtime/helpers/possibleConstructorReturn"),
                c = r(u),
                l = e("babel-runtime/helpers/inherits"),
                f = r(l),
                p = function(e) {
                    function t(e, n) {
                        (0, a.default)(this, t); var r = (0, c.default)(this, (t.__proto__ || (0, o.default)(t)).call(this)); return r.name = r.constructor.name, r.message = e, r.code = n, Error.captureStackTrace ? Error.captureStackTrace(r, r.constructor) : r.stack = (new Error).stack, r } return (0, f.default)(t, e), t }(Error);
            t.exports = p }, { "babel-runtime/core-js/object/get-prototype-of": 34, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/inherits": 44, "babel-runtime/helpers/possibleConstructorReturn": 45 }],
        19: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } } var i = e("babel-runtime/core-js/json/stringify"),
                o = r(i),
                s = e("babel-runtime/core-js/promise"),
                a = r(s),
                u = e("babel-runtime/core-js/object/define-properties"),
                c = r(u),
                l = e("babel-runtime/core-js/object/get-prototype-of"),
                f = r(l),
                p = e("babel-runtime/helpers/classCallCheck"),
                d = r(p),
                h = e("babel-runtime/helpers/createClass"),
                _ = r(h),
                b = e("babel-runtime/helpers/possibleConstructorReturn"),
                m = r(b),
                v = e("babel-runtime/helpers/inherits"),
                y = r(v),
                g = e("events").EventEmitter,
                k = e("./logger").scope("UserInfo"),
                w = function(e) {
                    function t(e, n, r, i) {
                        (0, d.default)(this, t); var o = (0, m.default)(this, (t.__proto__ || (0, f.default)(t)).call(this)); return o.setMaxListeners(0), (0, c.default)(o, { _datasync: { value: r }, _session: { value: i }, _identity: { value: e, writable: !0 }, _entityName: { value: n, writable: !0 }, _attributes: { value: {}, writable: !0 }, _friendlyName: { value: null, writable: !0 }, _online: { value: null, writable: !0 }, _notifiable: { value: null, writable: !0 }, _promiseToFetch: { writable: !0 }, identity: { enumerable: !0, get: function() { return o._identity } }, attributes: { enumerable: !0, get: function() { return o._attributes } }, friendlyName: { enumerable: !0, get: function() { return o._friendlyName } }, online: { enumerable: !0, get: function() { return o._online } }, notifiable: { enumerable: !0, get: function() { return o._notifiable } } }), o } return (0, y.default)(t, e), (0, _.default)(t, [{ key: "_update", value: function(e, t) { switch (k.debug("UserInfo for", this._identity, "updated:", e, t), e) {
                                case "friendlyName":
                                    this._friendlyName = t.value; break;
                                case "attributes":
                                    try { this._attributes = JSON.parse(t.value) } catch (e) { this._attributes = {} } break;
                                case "reachability":
                                    this._online = t.online, this._notifiable = t.notifiable; break;
                                default:
                                    return }
                            this.emit("updated", e) } }, { key: "_updateReachabilityInfo", value: function(e, t) { var n = this; return this._session.reachabilityEnabled ? e.get("reachability").then(t).catch(function(e) { k.warn("Failed to get reachability info for ", n._identity, e) }) : a.default.resolve() } }, { key: "_fetch", value: function() { var e = this; if (!this._entityName) return a.default.resolve(this); var t = function(t) { return e._update(t.key, t.value) }; return this._promiseToFetch = this._datasync.map({ uniqueName: this._entityName, mode: "open" }).then(function(n) { return n.on("itemUpdated", t), a.default.all([n.get("friendlyName").then(t), n.get("attributes").then(t), e._updateReachabilityInfo(n, t)]) }).then(function() { return k.debug("Fetched for", e.identity), e }).catch(function(t) { throw e._promiseToFetch = null, t }), this._promiseToFetch } }, { key: "_ensureFetched", value: function() { return this._promiseToFetch || this._fetch() } }, { key: "updateAttributes", value: function(e) { var t = this; if (e.constructor !== Object) throw new Error("Attributes must be an object."); return this._session.addCommand("editUserAttributes", { username: this._identity, attributes: (0, o.default)(e) }).then(function() { return t }) } }, { key: "updateFriendlyName", value: function(e) { var t = this; return this._session.addCommand("editUserFriendlyName", { username: this._identity, friendlyName: e }).then(function() { return t }) } }]), t }(g);
            t.exports = w }, { "./logger": 10, "babel-runtime/core-js/json/stringify": 27, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/get-prototype-of": 34, "babel-runtime/core-js/promise": 37, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, "babel-runtime/helpers/inherits": 44, "babel-runtime/helpers/possibleConstructorReturn": 45, events: 182 }],
        20: [function(e, t, n) {
            "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e) {
                var t = this;
                (0, s.default)(this, { _pendingListeners: { value: {} }, _data: { value: e || {}, writable: !0 } }), a.call(this), ["keyAdded", "keyRemoved", "keyUpdated"].forEach(function(e) { t._pendingListeners[e] = {}, t.on(e, function(n, r) { var i = t._pendingListeners[e][n] || [];
                        i.forEach(function(e) { return e(r) }), t._pendingListeners[e][n] = [] }) })
            }
            var o = e("babel-runtime/core-js/object/define-properties"),
                s = r(o),
                a = e("events").EventEmitter,
                u = e("util").inherits,
                c = e("./jsondiff");
            u(i, a), i.prototype._traverse = function(e, t) { var n = this,
                    r = c.diff(e, t);
                r.forEach(function(e) { "add" === e.op ? n.emit("keyAdded", e.path, e.value) : "replace" === e.op ? n.emit("keyUpdated", e.path, e.value) : "remove" === e.op && n.emit("keyRemoved", e.path) }) }, i.prototype.update = function(e) { var t = this._data;
                this._data = e, this._traverse(t, e) }, i.prototype.addEventHandler = function(e, t, n) { var r = this._pendingListeners[e][t] || [];
                r.push(n), this._pendingListeners[e][t] = r }, t.exports = i
        }, { "./jsondiff": 22, "babel-runtime/core-js/object/define-properties": 31, events: 182, util: 227 }],
        21: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e) { return JSON.parse((0, _.default)(e)) }

            function o(e) { return new d.default(function(t) {
                    function n() {--r <= 0 && t(i) } var r = e.length,
                        i = 0;
                    0 === r && t(), e.forEach(function(e) { e.then(n).catch(function() { i++, n() }) }) }) }

            function s() { var e = [].slice.call(arguments),
                    t = e[0]; return e = e.slice(1), setTimeout(function() { t.emit.call(t, e) }), t }

            function a(e, t) { return t.split(".").reduce(function(e, t) { return e ? e[t] : null }, e) }

            function u(e, t) { e.splice(0, e.length), t.forEach(function(t) { e.push(t) }) }

            function c(e) {
                (0, f.default)(this, { base: { value: e.replace(/\/$/, "") }, paths: { value: [] }, args: { value: [] } }), this.arg = function(e, t) { return "undefined" != typeof t && this.args.push(e + "=" + t), this }, this.path = function(e) { return this.paths.push(e), this }, this.build = function() { var e = this.base; return this.paths.length && (e += "/" + this.paths.join("/")), this.args.length && (e += "?" + this.args.join("&")), e } } var l = e("babel-runtime/core-js/object/define-properties"),
                f = r(l),
                p = e("babel-runtime/core-js/promise"),
                d = r(p),
                h = e("babel-runtime/core-js/json/stringify"),
                _ = r(h);
            t.exports.deepClone = i, t.exports.emitNext = s, t.exports.getOrNull = a, t.exports.overwriteArray = u, t.exports.faultTolerantWait = o, t.exports.UriBuilder = c }, { "babel-runtime/core-js/json/stringify": 27, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/promise": 37 }],
        22: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i() {} var o = e("babel-runtime/helpers/typeof"),
                s = r(o);
            i.prototype.toString = Object.prototype.toString, i.prototype.hasOwnProperty = Object.prototype.hasOwnProperty, i.prototype.isArray = function(e) { return "[object Array]" === this.toString.call(e) }, i.prototype.isObject = function(e) { return "[object Object]" === this.toString.call(e) }, i.prototype.isString = function(e) { return "[object String]" === this.toString.call(e) }, i.prototype.isFunction = function(e) { return "[object Function]" === this.toString.call(e) }, i.prototype.has = function(e, t) { return hasOwnProperty.call(e, t) }, i.prototype.isEqual = function(e, t) { return this.eq(e, t, [], []) }, i.prototype.isContainer = function(e) { return this.isArray(e) || isObject(e) }, i.prototype.isSameContainer = function(e, t) { return this.isArray(e) && this.isArray(t) || this.isObject(e) && this.isObject(t) }, i.prototype.eq = function(e, t, n, r) { var i, o, a, u, c, l, f; if (e === t) return 0 !== e || 1 / e === 1 / t; if (null == e || null == t) return e === t; if (a = this.toString.call(e), a !== this.toString.call(t)) return !1; switch (a) {
                    case "[object String]":
                        return e === String(t);
                    case "[object Number]":
                        return e !== +e ? t !== +t : 0 === e ? 1 / e === 1 / t : e === +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +e === +t;
                    case "[object RegExp]":
                        return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.ignoreCase === t.ignoreCase } if ("object" !== ("undefined" == typeof e ? "undefined" : (0, s.default)(e)) || "object" !== ("undefined" == typeof t ? "undefined" : (0, s.default)(t))) return !1; if (c = n.length, function() { var t; for (t = []; c--;) t.push(n[c] === e); return t }()) return r[c] === t; if (n.push(e), r.push(t), f = 0, l = !0, "[object Array]" === a) { if (f = e.length, l = f === t.length)
                        for (; f-- && (l = this.eq(e[f], t[f], n, r));); } else { if (i = e.constructor, o = t.constructor, i !== o && !(this.isFunction(i) && i instanceof i && this.isFunction(o) && o instanceof o)) return !1; for (u in e)
                        if (this.has(e, u) && (f++, !(l = this.has(t, u) && this.eq(e[u], t[u], n, r)))) break;
                    if (l) { for (u in t)
                            if (this.has(t, u) && !f--) break;
                        l = !f } } return n.pop(), r.pop(), l }, i.prototype.getParent = function(e, t) { var n = t.replace(/\/[^\/]*$/, ""); return n || (n = "/"), e[n] }, i.prototype.flattenObject = function(e, t, n) { var r, i, o, s, a; if (null == t && (t = "/"), null == n && (n = {}), n[t] = { path: t, value: e }, "/" !== t && (t += "/"), this.isArray(e))
                    for (r = s = 0, a = e.length; s < a; r = ++s) o = e[r], this.flattenObject(o, t + r, n);
                else if (this.isObject(e))
                    for (i in e) o = e[i], this.flattenObject(o, t + i, n); return n }, i.prototype.diff = function(e, t) { var n, r, i, o, s, a, u, c, l, f, p, d, h, _, b; if (!this.isSameContainer(e, t)) throw new Error("Patches can only be derived from objects or arrays");
                d = this.flattenObject(e), h = this.flattenObject(t), n = {}, _ = {}, b = {}, f = {}; for (s in d)
                    if (i = d[s], o = h[s], this.getParent(h, s))
                        if (o) { if (this.isSameContainer(i.value, o.value)) continue;
                            this.isEqual(i.value, o.value) || (b[s] = o) } else _[s] = i;
                for (s in h) i = d[s], o = h[s], !i && this.isSameContainer(this.getParent(d, s), this.getParent(h, s)) && (n[s] = o); for (a in _) { i = _[a]; for (u in n)
                        if (o = n[u], this.isEqual(o.value, i.value)) { delete _[a], delete n[u], f[u] = a; break } }
                p = []; for (s in n) r = n[s], p.push({ op: "add", path: s, value: r.value }); for (s in _) p.push({ op: "remove", path: s }); for (s in b) r = b[s], p.push({ op: "replace", path: s, value: r.value }); for (l in f) c = f[l], p.push({ op: "move", from: c, path: l }); return p }, i.diff = function(e, t) { var n = new i; return n.diff(e, t) }, i.isDeepEqual = function(e, t) { return 0 === this.diff(e, t).length }, t.exports = i }, { "babel-runtime/helpers/typeof": 47 }],
        23: [function(e, t, n) { "use strict"; var r = e("./client");
            t.exports = r }, { "./client": 3 }],
        24: [function(e, t, n) { t.exports = { default: e("core-js/library/fn/array/from"), __esModule: !0 } }, { "core-js/library/fn/array/from": 60 }],
        25: [function(e, t, n) { t.exports = { default: e("core-js/library/fn/get-iterator"), __esModule: !0 } }, { "core-js/library/fn/get-iterator": 61 }],
        26: [function(e, t, n) { t.exports = { default: e("core-js/library/fn/is-iterable"), __esModule: !0 } }, { "core-js/library/fn/is-iterable": 62 }],
        27: [function(e, t, n) { t.exports = { default: e("core-js/library/fn/json/stringify"), __esModule: !0 } }, { "core-js/library/fn/json/stringify": 63 }],
        28: [function(e, t, n) { t.exports = { default: e("core-js/library/fn/map"), __esModule: !0 } }, { "core-js/library/fn/map": 64 }],
        29: [function(e, t, n) { t.exports = { default: e("core-js/library/fn/object/assign"), __esModule: !0 } }, { "core-js/library/fn/object/assign": 65 }],
        30: [function(e, t, n) { t.exports = { default: e("core-js/library/fn/object/create"), __esModule: !0 } }, { "core-js/library/fn/object/create": 66 }],
        31: [function(e, t, n) { t.exports = { default: e("core-js/library/fn/object/define-properties"), __esModule: !0 } }, { "core-js/library/fn/object/define-properties": 67 }],
        32: [function(e, t, n) { t.exports = { default: e("core-js/library/fn/object/define-property"), __esModule: !0 } }, { "core-js/library/fn/object/define-property": 68 }],
        33: [function(e, t, n) { t.exports = { default: e("core-js/library/fn/object/freeze"), __esModule: !0 } }, { "core-js/library/fn/object/freeze": 69 }],
        34: [function(e, t, n) { t.exports = { default: e("core-js/library/fn/object/get-prototype-of"), __esModule: !0 } }, { "core-js/library/fn/object/get-prototype-of": 70 }],
        35: [function(e, t, n) { t.exports = { default: e("core-js/library/fn/object/keys"), __esModule: !0 } }, { "core-js/library/fn/object/keys": 71 }],
        36: [function(e, t, n) { t.exports = { default: e("core-js/library/fn/object/set-prototype-of"), __esModule: !0 } }, { "core-js/library/fn/object/set-prototype-of": 72 }],
        37: [function(e, t, n) { t.exports = { default: e("core-js/library/fn/promise"), __esModule: !0 } }, { "core-js/library/fn/promise": 73 }],
        38: [function(e, t, n) { t.exports = { default: e("core-js/library/fn/set"), __esModule: !0 } }, { "core-js/library/fn/set": 74 }],
        39: [function(e, t, n) { t.exports = { default: e("core-js/library/fn/symbol"), __esModule: !0 } }, { "core-js/library/fn/symbol": 75 }],
        40: [function(e, t, n) { t.exports = { default: e("core-js/library/fn/symbol/iterator"), __esModule: !0 } }, { "core-js/library/fn/symbol/iterator": 76 }],
        41: [function(e, t, n) { "use strict";
            n.__esModule = !0, n.default = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } }, {}],
        42: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            n.__esModule = !0; var i = e("../core-js/object/define-property"),
                o = r(i);
            n.default = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o.default)(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }() }, { "../core-js/object/define-property": 32 }],
        43: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            n.__esModule = !0; var i = e("../core-js/object/assign"),
                o = r(i);
            n.default = o.default || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e } }, { "../core-js/object/assign": 29 }],
        44: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            n.__esModule = !0; var i = e("../core-js/object/set-prototype-of"),
                o = r(i),
                s = e("../core-js/object/create"),
                a = r(s),
                u = e("../helpers/typeof"),
                c = r(u);
            n.default = function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : (0, c.default)(t)));
                e.prototype = (0, a.default)(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t) } }, { "../core-js/object/create": 30, "../core-js/object/set-prototype-of": 36, "../helpers/typeof": 47 }],
        45: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            n.__esModule = !0; var i = e("../helpers/typeof"),
                o = r(i);
            n.default = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" !== ("undefined" == typeof t ? "undefined" : (0, o.default)(t)) && "function" != typeof t ? e : t } }, { "../helpers/typeof": 47 }],
        46: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            n.__esModule = !0; var i = e("../core-js/is-iterable"),
                o = r(i),
                s = e("../core-js/get-iterator"),
                a = r(s);
            n.default = function() {
                function e(e, t) { var n = [],
                        r = !0,
                        i = !1,
                        o = void 0; try { for (var s, u = (0, a.default)(e); !(r = (s = u.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (e) { i = !0, o = e } finally { try {!r && u.return && u.return() } finally { if (i) throw o } } return n } return function(t, n) { if (Array.isArray(t)) return t; if ((0, o.default)(Object(t))) return e(t, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }() }, { "../core-js/get-iterator": 25, "../core-js/is-iterable": 26 }],
        47: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            n.__esModule = !0; var i = e("../core-js/symbol/iterator"),
                o = r(i),
                s = e("../core-js/symbol"),
                a = r(s),
                u = "function" == typeof a.default && "symbol" == typeof o.default ? function(e) { return typeof e } : function(e) { return e && "function" == typeof a.default && e.constructor === a.default && e !== a.default.prototype ? "symbol" : typeof e };
            n.default = "function" == typeof a.default && "symbol" === u(o.default) ? function(e) { return "undefined" == typeof e ? "undefined" : u(e) } : function(e) { return e && "function" == typeof a.default && e.constructor === a.default && e !== a.default.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : u(e) } }, { "../core-js/symbol": 39, "../core-js/symbol/iterator": 40 }],
        48: [function(e, t, n) {
            //      Copyright (c) 2012 Mathieu Turcotte
            //      Licensed under the MIT license.
            var r = e("./lib/backoff"),
                i = e("./lib/strategy/exponential"),
                o = e("./lib/strategy/fibonacci"),
                s = e("./lib/function_call.js");
            t.exports.Backoff = r, t.exports.FunctionCall = s, t.exports.FibonacciStrategy = o, t.exports.ExponentialStrategy = i, t.exports.fibonacci = function(e) { return new r(new o(e)) }, t.exports.exponential = function(e) { return new r(new i(e)) }, t.exports.call = function(e, t, n) { var r = Array.prototype.slice.call(arguments); return e = r[0], t = r.slice(1, r.length - 1), n = r[r.length - 1], new s(e, t, n) }
        }, { "./lib/backoff": 49, "./lib/function_call.js": 50, "./lib/strategy/exponential": 51, "./lib/strategy/fibonacci": 52 }],
        49: [function(e, t, n) {
            function r(e) { i.EventEmitter.call(this), this.backoffStrategy_ = e, this.maxNumberOfRetry_ = -1, this.backoffNumber_ = 0, this.backoffDelay_ = 0, this.timeoutID_ = -1, this.handlers = { backoff: this.onBackoff_.bind(this) } }
            //      Copyright (c) 2012 Mathieu Turcotte
            //      Licensed under the MIT license.
            var i = e("events"),
                o = e("precond"),
                s = e("util");
            s.inherits(r, i.EventEmitter), r.prototype.failAfter = function(e) { o.checkArgument(e > 0, "Expected a maximum number of retry greater than 0 but got %s.", e), this.maxNumberOfRetry_ = e }, r.prototype.backoff = function(e) { o.checkState(this.timeoutID_ === -1, "Backoff in progress."), this.backoffNumber_ === this.maxNumberOfRetry_ ? (this.emit("fail", e), this.reset()) : (this.backoffDelay_ = this.backoffStrategy_.next(), this.timeoutID_ = setTimeout(this.handlers.backoff, this.backoffDelay_), this.emit("backoff", this.backoffNumber_, this.backoffDelay_, e)) }, r.prototype.onBackoff_ = function() { this.timeoutID_ = -1, this.emit("ready", this.backoffNumber_, this.backoffDelay_), this.backoffNumber_++ }, r.prototype.reset = function() { this.backoffNumber_ = 0, this.backoffStrategy_.reset(), clearTimeout(this.timeoutID_), this.timeoutID_ = -1 }, t.exports = r
        }, { events: 182, precond: 186, util: 227 }],
        50: [function(e, t, n) {
            function r(e, t, n) { i.EventEmitter.call(this), o.checkIsFunction(e, "Expected fn to be a function."), o.checkIsArray(t, "Expected args to be an array."), o.checkIsFunction(n, "Expected callback to be a function."), this.function_ = e, this.arguments_ = t, this.callback_ = n, this.lastResult_ = [], this.numRetries_ = 0, this.backoff_ = null, this.strategy_ = null, this.failAfter_ = -1, this.retryPredicate_ = r.DEFAULT_RETRY_PREDICATE_, this.state_ = r.State_.PENDING }
            //      Copyright (c) 2012 Mathieu Turcotte
            //      Licensed under the MIT license.
            var i = e("events"),
                o = e("precond"),
                s = e("util"),
                a = e("./backoff"),
                u = e("./strategy/fibonacci");
            s.inherits(r, i.EventEmitter), r.State_ = { PENDING: 0, RUNNING: 1, COMPLETED: 2, ABORTED: 3 }, r.DEFAULT_RETRY_PREDICATE_ = function(e) { return !0 }, r.prototype.isPending = function() { return this.state_ == r.State_.PENDING }, r.prototype.isRunning = function() { return this.state_ == r.State_.RUNNING }, r.prototype.isCompleted = function() { return this.state_ == r.State_.COMPLETED }, r.prototype.isAborted = function() { return this.state_ == r.State_.ABORTED }, r.prototype.setStrategy = function(e) { return o.checkState(this.isPending(), "FunctionCall in progress."), this.strategy_ = e, this }, r.prototype.retryIf = function(e) { return o.checkState(this.isPending(), "FunctionCall in progress."), this.retryPredicate_ = e, this }, r.prototype.getLastResult = function() { return this.lastResult_.concat() }, r.prototype.getNumRetries = function() { return this.numRetries_ }, r.prototype.failAfter = function(e) { return o.checkState(this.isPending(), "FunctionCall in progress."), this.failAfter_ = e, this }, r.prototype.abort = function() { this.isCompleted() || this.isAborted() || (this.isRunning() && this.backoff_.reset(), this.state_ = r.State_.ABORTED, this.lastResult_ = [new Error("Backoff aborted.")], this.emit("abort"), this.doCallback_()) }, r.prototype.start = function(e) { o.checkState(!this.isAborted(), "FunctionCall is aborted."), o.checkState(this.isPending(), "FunctionCall already started."); var t = this.strategy_ || new u;
                this.backoff_ = e ? e(t) : new a(t), this.backoff_.on("ready", this.doCall_.bind(this, !0)), this.backoff_.on("fail", this.doCallback_.bind(this)), this.backoff_.on("backoff", this.handleBackoff_.bind(this)), this.failAfter_ > 0 && this.backoff_.failAfter(this.failAfter_), this.state_ = r.State_.RUNNING, this.doCall_(!1) }, r.prototype.doCall_ = function(e) { e && this.numRetries_++; var t = ["call"].concat(this.arguments_);
                i.EventEmitter.prototype.emit.apply(this, t); var n = this.handleFunctionCallback_.bind(this);
                this.function_.apply(null, this.arguments_.concat(n)) }, r.prototype.doCallback_ = function() { this.callback_.apply(null, this.lastResult_) }, r.prototype.handleFunctionCallback_ = function() { if (!this.isAborted()) { var e = Array.prototype.slice.call(arguments);
                    this.lastResult_ = e, i.EventEmitter.prototype.emit.apply(this, ["callback"].concat(e)); var t = e[0];
                    t && this.retryPredicate_(t) ? this.backoff_.backoff(t) : (this.state_ = r.State_.COMPLETED, this.doCallback_()) } }, r.prototype.handleBackoff_ = function(e, t, n) { this.emit("backoff", e, t, n) }, t.exports = r
        }, { "./backoff": 49, "./strategy/fibonacci": 52, events: 182, precond: 186, util: 227 }],
        51: [function(e, t, n) {
            function r(e) { s.call(this, e), this.backoffDelay_ = 0, this.nextBackoffDelay_ = this.getInitialDelay(), this.factor_ = r.DEFAULT_FACTOR, e && void 0 !== e.factor && (o.checkArgument(e.factor > 1, "Exponential factor should be greater than 1 but got %s.", e.factor), this.factor_ = e.factor) }
            //      Copyright (c) 2012 Mathieu Turcotte
            //      Licensed under the MIT license.
            var i = e("util"),
                o = e("precond"),
                s = e("./strategy");
            i.inherits(r, s), r.DEFAULT_FACTOR = 2, r.prototype.next_ = function() { return this.backoffDelay_ = Math.min(this.nextBackoffDelay_, this.getMaxDelay()), this.nextBackoffDelay_ = this.backoffDelay_ * this.factor_, this.backoffDelay_ }, r.prototype.reset_ = function() { this.backoffDelay_ = 0, this.nextBackoffDelay_ = this.getInitialDelay() }, t.exports = r
        }, { "./strategy": 53, precond: 186, util: 227 }],
        52: [function(e, t, n) {
            function r(e) { o.call(this, e), this.backoffDelay_ = 0, this.nextBackoffDelay_ = this.getInitialDelay() }
            //      Copyright (c) 2012 Mathieu Turcotte
            //      Licensed under the MIT license.
            var i = e("util"),
                o = e("./strategy");
            i.inherits(r, o), r.prototype.next_ = function() { var e = Math.min(this.nextBackoffDelay_, this.getMaxDelay()); return this.nextBackoffDelay_ += this.backoffDelay_, this.backoffDelay_ = e, e }, r.prototype.reset_ = function() { this.nextBackoffDelay_ = this.getInitialDelay(), this.backoffDelay_ = 0 }, t.exports = r
        }, { "./strategy": 53, util: 227 }],
        53: [function(e, t, n) {
            function r(e) { return void 0 !== e && null !== e }

            function i(e) { if (e = e || {}, r(e.initialDelay) && e.initialDelay < 1) throw new Error("The initial timeout must be greater than 0."); if (r(e.maxDelay) && e.maxDelay < 1) throw new Error("The maximal timeout must be greater than 0."); if (this.initialDelay_ = e.initialDelay || 100, this.maxDelay_ = e.maxDelay || 1e4, this.maxDelay_ <= this.initialDelay_) throw new Error("The maximal backoff delay must be greater than the initial backoff delay."); if (r(e.randomisationFactor) && (e.randomisationFactor < 0 || e.randomisationFactor > 1)) throw new Error("The randomisation factor must be between 0 and 1.");
                this.randomisationFactor_ = e.randomisationFactor || 0 }
            //      Copyright (c) 2012 Mathieu Turcotte
            //      Licensed under the MIT license.
            e("events"), e("util");
            i.prototype.getMaxDelay = function() { return this.maxDelay_ }, i.prototype.getInitialDelay = function() { return this.initialDelay_ }, i.prototype.next = function() { var e = this.next_(),
                    t = 1 + Math.random() * this.randomisationFactor_,
                    n = Math.round(e * t); return n }, i.prototype.next_ = function() { throw new Error("BackoffStrategy.next_() unimplemented.") }, i.prototype.reset = function() { this.reset_() }, i.prototype.reset_ = function() { throw new Error("BackoffStrategy.reset_() unimplemented.") }, t.exports = i
        }, { events: 182, util: 227 }],
        54: [function(t, n, r) {
            (function(i, o) {
                /* @preserve
                 * The MIT License (MIT)
                 * 
                 * Copyright (c) 2013-2015 Petka Antonov
                 * 
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 * 
                 * The above copyright notice and this permission notice shall be included in
                 * all copies or substantial portions of the Software.
                 * 
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                 * THE SOFTWARE.
                 * 
                 */
                ! function(t) { if ("object" == typeof r && "undefined" != typeof n) n.exports = t();
                    else if ("function" == typeof e && e.amd) e([], t);
                    else { var i; "undefined" != typeof window ? i = window : "undefined" != typeof o ? i = o : "undefined" != typeof self && (i = self), i.Promise = t() } }(function() {
                    var e, n, r;
                    return function e(n, r, i) {
                        function o(a, u) { if (!r[a]) { if (!n[a]) { var c = "function" == typeof t && t; if (!u && c) return c(a, !0); if (s) return s(a, !0); var l = new Error("Cannot find module '" + a + "'"); throw l.code = "MODULE_NOT_FOUND", l } var f = r[a] = { exports: {} };
                                n[a][0].call(f.exports, function(e) { var t = n[a][1][e]; return o(t ? t : e) }, f, f.exports, e, n, r, i) } return r[a].exports } for (var s = "function" == typeof t && t, a = 0; a < i.length; a++) o(i[a]); return o }({
                        1: [function(e, t, n) { "use strict";
                            t.exports = function(e) {
                                function t(e) { var t = new n(e),
                                        r = t.promise(); return t.setHowMany(1), t.setUnwrap(), t.init(), r } var n = e._SomePromiseArray;
                                e.any = function(e) { return t(e) }, e.prototype.any = function() { return t(this) } } }, {}],
                        2: [function(e, t, n) { "use strict";

                            function r() { this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new l(16), this._normalQueue = new l(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0; var e = this;
                                this.drainQueues = function() { e._drainQueues() }, this._schedule = c }

                            function o(e, t, n) { this._lateQueue.push(e, t, n), this._queueTick() }

                            function s(e, t, n) { this._normalQueue.push(e, t, n), this._queueTick() }

                            function a(e) { this._normalQueue._pushOne(e), this._queueTick() } var u; try { throw new Error } catch (e) { u = e } var c = e("./schedule"),
                                l = e("./queue"),
                                f = e("./util");
                            r.prototype.setScheduler = function(e) { var t = this._schedule; return this._schedule = e, this._customScheduler = !0, t }, r.prototype.hasCustomScheduler = function() { return this._customScheduler }, r.prototype.enableTrampoline = function() { this._trampolineEnabled = !0 }, r.prototype.disableTrampolineIfNecessary = function() { f.hasDevTools && (this._trampolineEnabled = !1) }, r.prototype.haveItemsQueued = function() { return this._isTickUsed || this._haveDrainedQueues }, r.prototype.fatalError = function(e, t) { t ? (i.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) + "\n"), i.exit(2)) : this.throwLater(e) }, r.prototype.throwLater = function(e, t) { if (1 === arguments.length && (t = e, e = function() { throw t }), "undefined" != typeof setTimeout) setTimeout(function() { e(t) }, 0);
                                else try { this._schedule(function() { e(t) }) } catch (e) { throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n") } }, f.hasDevTools ? (r.prototype.invokeLater = function(e, t, n) { this._trampolineEnabled ? o.call(this, e, t, n) : this._schedule(function() { setTimeout(function() { e.call(t, n) }, 100) }) }, r.prototype.invoke = function(e, t, n) { this._trampolineEnabled ? s.call(this, e, t, n) : this._schedule(function() { e.call(t, n) }) }, r.prototype.settlePromises = function(e) { this._trampolineEnabled ? a.call(this, e) : this._schedule(function() { e._settlePromises() }) }) : (r.prototype.invokeLater = o, r.prototype.invoke = s, r.prototype.settlePromises = a), r.prototype.invokeFirst = function(e, t, n) { this._normalQueue.unshift(e, t, n), this._queueTick() }, r.prototype._drainQueue = function(e) { for (; e.length() > 0;) { var t = e.shift(); if ("function" == typeof t) { var n = e.shift(),
                                            r = e.shift();
                                        t.call(n, r) } else t._settlePromises() } }, r.prototype._drainQueues = function() { this._drainQueue(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, this._drainQueue(this._lateQueue) }, r.prototype._queueTick = function() { this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues)) }, r.prototype._reset = function() { this._isTickUsed = !1 }, t.exports = r, t.exports.firstLineError = u }, { "./queue": 26, "./schedule": 29, "./util": 36 }],
                        3: [function(e, t, n) { "use strict";
                            t.exports = function(e, t, n, r) { var i = !1,
                                    o = function(e, t) { this._reject(t) },
                                    s = function(e, t) { t.promiseRejectionQueued = !0, t.bindingPromise._then(o, o, null, this, e) },
                                    a = function(e, t) { 0 === (50397184 & this._bitField) && this._resolveCallback(t.target) },
                                    u = function(e, t) { t.promiseRejectionQueued || this._reject(e) };
                                e.prototype.bind = function(o) { i || (i = !0, e.prototype._propagateFrom = r.propagateFromFunction(), e.prototype._boundValue = r.boundValueFunction()); var c = n(o),
                                        l = new e(t);
                                    l._propagateFrom(this, 1); var f = this._target(); if (l._setBoundTo(c), c instanceof e) { var p = { promiseRejectionQueued: !1, promise: l, target: f, bindingPromise: c };
                                        f._then(t, s, void 0, l, p), c._then(a, u, void 0, l, p), l._setOnCancel(c) } else l._resolveCallback(f); return l }, e.prototype._setBoundTo = function(e) { void 0 !== e ? (this._bitField = 2097152 | this._bitField, this._boundTo = e) : this._bitField = this._bitField & -2097153 }, e.prototype._isBound = function() { return 2097152 === (2097152 & this._bitField) }, e.bind = function(t, n) { return e.resolve(n).bind(t) } } }, {}],
                        4: [function(e, t, n) { "use strict";

                            function r() { try { Promise === o && (Promise = i) } catch (e) {} return o } var i; "undefined" != typeof Promise && (i = Promise); var o = e("./promise")();
                            o.noConflict = r, t.exports = o }, { "./promise": 22 }],
                        5: [function(e, t, n) { "use strict"; var r = Object.create; if (r) { var i = r(null),
                                    o = r(null);
                                i[" size"] = o[" size"] = 0 }
                            t.exports = function(t) {
                                function n(e, n) { var r; if (null != e && (r = e[n]), "function" != typeof r) { var i = "Object " + a.classString(e) + " has no method '" + a.toString(n) + "'"; throw new t.TypeError(i) } return r }

                                function r(e) { var t = this.pop(),
                                        r = n(e, t); return r.apply(e, this) }

                                function i(e) { return e[this] }

                                function o(e) { var t = +this; return t < 0 && (t = Math.max(0, t + e.length)), e[t] } var s, a = e("./util"),
                                    u = a.canEvaluate;
                                a.isIdentifier;
                                t.prototype.call = function(e) { var t = [].slice.call(arguments, 1); return t.push(e), this._then(r, void 0, void 0, t, void 0) }, t.prototype.get = function(e) { var t, n = "number" == typeof e; if (n) t = o;
                                    else if (u) { var r = s(e);
                                        t = null !== r ? r : i } else t = i; return this._then(t, void 0, void 0, e, void 0) } } }, { "./util": 36 }],
                        6: [function(e, t, n) { "use strict";
                            t.exports = function(t, n, r, i) { var o = e("./util"),
                                    s = o.tryCatch,
                                    a = o.errorObj,
                                    u = t._async;
                                t.prototype.break = t.prototype.cancel = function() { if (!i.cancellation()) return this._warn("cancellation is disabled"); for (var e = this, t = e; e._isCancellable();) { if (!e._cancelBy(t)) { t._isFollowing() ? t._followee().cancel() : t._cancelBranched(); break } var n = e._cancellationParent; if (null == n || !n._isCancellable()) { e._isFollowing() ? e._followee().cancel() : e._cancelBranched(); break }
                                        e._isFollowing() && e._followee().cancel(), e._setWillBeCancelled(), t = e, e = n } }, t.prototype._branchHasCancelled = function() { this._branchesRemainingToCancel-- }, t.prototype._enoughBranchesHaveCancelled = function() { return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0 }, t.prototype._cancelBy = function(e) { return e === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), !0) : (this._branchHasCancelled(), !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), !0)) }, t.prototype._cancelBranched = function() { this._enoughBranchesHaveCancelled() && this._cancel() }, t.prototype._cancel = function() { this._isCancellable() && (this._setCancelled(), u.invoke(this._cancelPromises, this, void 0)) }, t.prototype._cancelPromises = function() { this._length() > 0 && this._settlePromises() }, t.prototype._unsetOnCancel = function() { this._onCancelField = void 0 }, t.prototype._isCancellable = function() { return this.isPending() && !this._isCancelled() }, t.prototype.isCancellable = function() { return this.isPending() && !this.isCancelled() }, t.prototype._doInvokeOnCancel = function(e, t) { if (o.isArray(e))
                                        for (var n = 0; n < e.length; ++n) this._doInvokeOnCancel(e[n], t);
                                    else if (void 0 !== e)
                                        if ("function" == typeof e) { if (!t) { var r = s(e).call(this._boundValue());
                                                r === a && (this._attachExtraTrace(r.e), u.throwLater(r.e)) } } else e._resultCancelled(this) }, t.prototype._invokeOnCancel = function() { var e = this._onCancel();
                                    this._unsetOnCancel(), u.invoke(this._doInvokeOnCancel, this, e) }, t.prototype._invokeInternalOnCancel = function() { this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel()) }, t.prototype._resultCancelled = function() { this.cancel() } } }, { "./util": 36 }],
                        7: [function(e, t, n) { "use strict";
                            t.exports = function(t) {
                                function n(e, n, a) { return function(u) { var c = a._boundValue();
                                        e: for (var l = 0; l < e.length; ++l) { var f = e[l]; if (f === Error || null != f && f.prototype instanceof Error) { if (u instanceof f) return o(n).call(c, u) } else if ("function" == typeof f) { var p = o(f).call(c, u); if (p === s) return p; if (p) return o(n).call(c, u) } else if (r.isObject(u)) { for (var d = i(f), h = 0; h < d.length; ++h) { var _ = d[h]; if (f[_] != u[_]) continue e } return o(n).call(c, u) } }
                                        return t } } var r = e("./util"),
                                    i = e("./es5").keys,
                                    o = r.tryCatch,
                                    s = r.errorObj; return n } }, { "./es5": 13, "./util": 36 }],
                        8: [function(e, t, n) { "use strict";
                            t.exports = function(e) {
                                function t() { this._trace = new t.CapturedTrace(r()) }

                                function n() { if (i) return new t }

                                function r() { var e = o.length - 1; if (e >= 0) return o[e] } var i = !1,
                                    o = []; return e.prototype._promiseCreated = function() {}, e.prototype._pushContext = function() {}, e.prototype._popContext = function() { return null }, e._peekContext = e.prototype._peekContext = function() {}, t.prototype._pushContext = function() { void 0 !== this._trace && (this._trace._promiseCreated = null, o.push(this._trace)) }, t.prototype._popContext = function() { if (void 0 !== this._trace) { var e = o.pop(),
                                            t = e._promiseCreated; return e._promiseCreated = null, t } return null }, t.CapturedTrace = null, t.create = n, t.deactivateLongStackTraces = function() {}, t.activateLongStackTraces = function() { var n = e.prototype._pushContext,
                                        o = e.prototype._popContext,
                                        s = e._peekContext,
                                        a = e.prototype._peekContext,
                                        u = e.prototype._promiseCreated;
                                    t.deactivateLongStackTraces = function() { e.prototype._pushContext = n, e.prototype._popContext = o, e._peekContext = s, e.prototype._peekContext = a, e.prototype._promiseCreated = u, i = !1 }, i = !0, e.prototype._pushContext = t.prototype._pushContext, e.prototype._popContext = t.prototype._popContext, e._peekContext = e.prototype._peekContext = r, e.prototype._promiseCreated = function() { var e = this._peekContext();
                                        e && null == e._promiseCreated && (e._promiseCreated = this) } }, t } }, {}],
                        9: [function(e, t, n) { "use strict";
                            t.exports = function(t, n) {
                                function r(e, t) { return { promise: t } }

                                function o() { return !1 }

                                function s(e, t, n) { var r = this; try { e(t, n, function(e) { if ("function" != typeof e) throw new TypeError("onCancel must be a function, got: " + L.toString(e));
                                            r._attachCancellationCallback(e) }) } catch (e) { return e } }

                                function a(e) { if (!this._isCancellable()) return this; var t = this._onCancel();
                                    void 0 !== t ? L.isArray(t) ? t.push(e) : this._setOnCancel([t, e]) : this._setOnCancel(e) }

                                function u() { return this._onCancelField }

                                function c(e) { this._onCancelField = e }

                                function l() { this._cancellationParent = void 0, this._onCancelField = void 0 }

                                function f(e, t) { if (0 !== (1 & t)) { this._cancellationParent = e; var n = e._branchesRemainingToCancel;
                                        void 0 === n && (n = 0), e._branchesRemainingToCancel = n + 1 }
                                    0 !== (2 & t) && e._isBound() && this._setBoundTo(e._boundTo) }

                                function p(e, t) { 0 !== (2 & t) && e._isBound() && this._setBoundTo(e._boundTo) }

                                function d() { var e = this._boundTo; return void 0 !== e && e instanceof t ? e.isFulfilled() ? e.value() : void 0 : e }

                                function h() { this._trace = new O(this._peekContext()) }

                                function _(e, t) { if (q(e)) { var n = this._trace; if (void 0 !== n && t && (n = n._parent), void 0 !== n) n.attachExtraTrace(e);
                                        else if (!e.__stackCleaned__) { var r = C(e);
                                            L.notEnumerableProp(e, "stack", r.message + "\n" + r.stack.join("\n")), L.notEnumerableProp(e, "__stackCleaned__", !0) } } }

                                function b(e, t, n, r, i) { if (void 0 === e && null !== t && X) { if (void 0 !== i && i._returnedNonUndefined()) return; if (0 === (65535 & r._bitField)) return;
                                        n && (n += " "); var o = "",
                                            s = ""; if (t._trace) { for (var a = t._trace.stack.split("\n"), u = w(a), c = u.length - 1; c >= 0; --c) { var l = u[c]; if (!z.test(l)) { var f = l.match(H);
                                                    f && (o = "at " + f[1] + ":" + f[2] + ":" + f[3] + " "); break } } if (u.length > 0)
                                                for (var p = u[0], c = 0; c < a.length; ++c)
                                                    if (a[c] === p) { c > 0 && (s = "\n" + a[c - 1]); break } } var d = "a promise was created in a " + n + "handler " + o + "but was not returned from it, see http://goo.gl/rRqMUw" + s;
                                        r._warn(d, !0, t) } }

                                function m(e, t) { var n = e + " is deprecated and will be removed in a future version."; return t && (n += " Use " + t + " instead."), v(n) }

                                function v(e, n, r) { if (se.warnings) { var i, o = new D(e); if (n) r._attachExtraTrace(o);
                                        else if (se.longStackTraces && (i = t._peekContext())) i.attachExtraTrace(o);
                                        else { var s = C(o);
                                            o.stack = s.message + "\n" + s.stack.join("\n") }
                                        te("warning", o) || x(o, "", !0) } }

                                function y(e, t) { for (var n = 0; n < t.length - 1; ++n) t[n].push("From previous event:"), t[n] = t[n].join("\n"); return n < t.length && (t[n] = t[n].join("\n")), e + "\n" + t.join("\n") }

                                function g(e) { for (var t = 0; t < e.length; ++t)(0 === e[t].length || t + 1 < e.length && e[t][0] === e[t + 1][0]) && (e.splice(t, 1), t--) }

                                function k(e) { for (var t = e[0], n = 1; n < e.length; ++n) { for (var r = e[n], i = t.length - 1, o = t[i], s = -1, a = r.length - 1; a >= 0; --a)
                                            if (r[a] === o) { s = a; break }
                                        for (var a = s; a >= 0; --a) { var u = r[a]; if (t[i] !== u) break;
                                            t.pop(), i-- }
                                        t = r } }

                                function w(e) { for (var t = [], n = 0; n < e.length; ++n) { var r = e[n],
                                            i = "    (No stack trace)" === r || V.test(r),
                                            o = i && re(r);
                                        i && !o && (G && " " !== r.charAt(0) && (r = "    " + r), t.push(r)) } return t }

                                function j(e) { for (var t = e.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < t.length; ++n) { var r = t[n]; if ("    (No stack trace)" === r || V.test(r)) break } return n > 0 && (t = t.slice(n)), t }

                                function C(e) { var t = e.stack,
                                        n = e.toString(); return t = "string" == typeof t && t.length > 0 ? j(e) : ["    (No stack trace)"], { message: n, stack: w(t) } }

                                function x(e, t, n) { if ("undefined" != typeof console) { var r; if (L.isObject(e)) { var i = e.stack;
                                            r = t + W(i, e) } else r = t + String(e); "function" == typeof F ? F(r, n) : "function" != typeof console.log && "object" != typeof console.log || console.log(r) } }

                                function E(e, t, n, r) { var i = !1; try { "function" == typeof t && (i = !0, "rejectionHandled" === e ? t(r) : t(n, r)) } catch (e) { U.throwLater(e) } "unhandledRejection" === e ? te(e, n, r) || i || x(n, "Unhandled rejection ") : te(e, r) }

                                function S(e) { var t; if ("function" == typeof e) t = "[function " + (e.name || "anonymous") + "]";
                                    else { t = e && "function" == typeof e.toString ? e.toString() : L.toString(e); var n = /\[object [a-zA-Z0-9$_]+\]/; if (n.test(t)) try { var r = JSON.stringify(e);
                                            t = r } catch (e) {}
                                        0 === t.length && (t = "(empty array)") } return "(<" + T(t) + ">, no stack trace)" }

                                function T(e) { var t = 41; return e.length < t ? e : e.substr(0, t - 3) + "..." }

                                function R() { return "function" == typeof oe }

                                function P(e) { var t = e.match(ie); if (t) return { fileName: t[1], line: parseInt(t[2], 10) } }

                                function I(e, t) { if (R()) { for (var n, r, i = e.stack.split("\n"), o = t.stack.split("\n"), s = -1, a = -1, u = 0; u < i.length; ++u) { var c = P(i[u]); if (c) { n = c.fileName, s = c.line; break } } for (var u = 0; u < o.length; ++u) { var c = P(o[u]); if (c) { r = c.fileName, a = c.line; break } }
                                        s < 0 || a < 0 || !n || !r || n !== r || s >= a || (re = function(e) { if (B.test(e)) return !0; var t = P(e); return !!(t && t.fileName === n && s <= t.line && t.line <= a) }) } }

                                function O(e) { this._parent = e, this._promisesCreated = 0; var t = this._length = 1 + (void 0 === e ? 0 : e._length);
                                    oe(this, O), t > 32 && this.uncycle() } var A, N, F, M = t._getDomain,
                                    U = t._async,
                                    D = e("./errors").Warning,
                                    L = e("./util"),
                                    q = L.canAttachTrace,
                                    B = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,
                                    z = /\((?:timers\.js):\d+:\d+\)/,
                                    H = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,
                                    V = null,
                                    W = null,
                                    G = !1,
                                    $ = !(0 == L.env("BLUEBIRD_DEBUG")),
                                    J = !(0 == L.env("BLUEBIRD_WARNINGS") || !$ && !L.env("BLUEBIRD_WARNINGS")),
                                    K = !(0 == L.env("BLUEBIRD_LONG_STACK_TRACES") || !$ && !L.env("BLUEBIRD_LONG_STACK_TRACES")),
                                    X = 0 != L.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (J || !!L.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
                                t.prototype.suppressUnhandledRejections = function() { var e = this._target();
                                    e._bitField = e._bitField & -1048577 | 524288 }, t.prototype._ensurePossibleRejectionHandled = function() { 0 === (524288 & this._bitField) && (this._setRejectionIsUnhandled(), U.invokeLater(this._notifyUnhandledRejection, this, void 0)) }, t.prototype._notifyUnhandledRejectionIsHandled = function() { E("rejectionHandled", A, void 0, this) }, t.prototype._setReturnedNonUndefined = function() { this._bitField = 268435456 | this._bitField }, t.prototype._returnedNonUndefined = function() { return 0 !== (268435456 & this._bitField) }, t.prototype._notifyUnhandledRejection = function() { if (this._isRejectionUnhandled()) { var e = this._settledValue();
                                        this._setUnhandledRejectionIsNotified(), E("unhandledRejection", N, e, this) } }, t.prototype._setUnhandledRejectionIsNotified = function() { this._bitField = 262144 | this._bitField }, t.prototype._unsetUnhandledRejectionIsNotified = function() { this._bitField = this._bitField & -262145 }, t.prototype._isUnhandledRejectionNotified = function() { return (262144 & this._bitField) > 0 }, t.prototype._setRejectionIsUnhandled = function() { this._bitField = 1048576 | this._bitField }, t.prototype._unsetRejectionIsUnhandled = function() { this._bitField = this._bitField & -1048577, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled()) }, t.prototype._isRejectionUnhandled = function() { return (1048576 & this._bitField) > 0 }, t.prototype._warn = function(e, t, n) { return v(e, t, n || this) }, t.onPossiblyUnhandledRejection = function(e) { var t = M();
                                    N = "function" == typeof e ? null === t ? e : L.domainBind(t, e) : void 0 }, t.onUnhandledRejectionHandled = function(e) { var t = M();
                                    A = "function" == typeof e ? null === t ? e : L.domainBind(t, e) : void 0 }; var Q = function() {};
                                t.longStackTraces = function() { if (U.haveItemsQueued() && !se.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n"); if (!se.longStackTraces && R()) { var e = t.prototype._captureStackTrace,
                                            r = t.prototype._attachExtraTrace;
                                        se.longStackTraces = !0, Q = function() { if (U.haveItemsQueued() && !se.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                                            t.prototype._captureStackTrace = e, t.prototype._attachExtraTrace = r, n.deactivateLongStackTraces(), U.enableTrampoline(), se.longStackTraces = !1 }, t.prototype._captureStackTrace = h, t.prototype._attachExtraTrace = _, n.activateLongStackTraces(), U.disableTrampolineIfNecessary() } }, t.hasLongStackTraces = function() { return se.longStackTraces && R() }; var Y = function() { try { if ("function" == typeof CustomEvent) { var e = new CustomEvent("CustomEvent"); return L.global.dispatchEvent(e),
                                                    function(e, t) { var n = new CustomEvent(e.toLowerCase(), { detail: t, cancelable: !0 }); return !L.global.dispatchEvent(n) } } if ("function" == typeof Event) { var e = new Event("CustomEvent"); return L.global.dispatchEvent(e),
                                                    function(e, t) { var n = new Event(e.toLowerCase(), { cancelable: !0 }); return n.detail = t, !L.global.dispatchEvent(n) } } var e = document.createEvent("CustomEvent"); return e.initCustomEvent("testingtheevent", !1, !0, {}), L.global.dispatchEvent(e),
                                                function(e, t) { var n = document.createEvent("CustomEvent"); return n.initCustomEvent(e.toLowerCase(), !1, !0, t), !L.global.dispatchEvent(n) } } catch (e) {} return function() { return !1 } }(),
                                    Z = function() { return L.isNode ? function() { return i.emit.apply(i, arguments) } : L.global ? function(e) { var t = "on" + e.toLowerCase(),
                                                n = L.global[t]; return !!n && (n.apply(L.global, [].slice.call(arguments, 1)), !0) } : function() { return !1 } }(),
                                    ee = { promiseCreated: r, promiseFulfilled: r, promiseRejected: r, promiseResolved: r, promiseCancelled: r, promiseChained: function(e, t, n) { return { promise: t, child: n } }, warning: function(e, t) { return { warning: t } }, unhandledRejection: function(e, t, n) { return { reason: t, promise: n } }, rejectionHandled: r },
                                    te = function(e) { var t = !1; try { t = Z.apply(null, arguments) } catch (e) { U.throwLater(e), t = !0 } var n = !1; try { n = Y(e, ee[e].apply(null, arguments)) } catch (e) { U.throwLater(e), n = !0 } return n || t };
                                t.config = function(e) { if (e = Object(e), "longStackTraces" in e && (e.longStackTraces ? t.longStackTraces() : !e.longStackTraces && t.hasLongStackTraces() && Q()), "warnings" in e) { var n = e.warnings;
                                        se.warnings = !!n, X = se.warnings, L.isObject(n) && "wForgottenReturn" in n && (X = !!n.wForgottenReturn) } if ("cancellation" in e && e.cancellation && !se.cancellation) { if (U.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");
                                        t.prototype._clearCancellationData = l, t.prototype._propagateFrom = f, t.prototype._onCancel = u, t.prototype._setOnCancel = c, t.prototype._attachCancellationCallback = a, t.prototype._execute = s, ne = f, se.cancellation = !0 } "monitoring" in e && (e.monitoring && !se.monitoring ? (se.monitoring = !0, t.prototype._fireEvent = te) : !e.monitoring && se.monitoring && (se.monitoring = !1, t.prototype._fireEvent = o)) }, t.prototype._fireEvent = o, t.prototype._execute = function(e, t, n) { try { e(t, n) } catch (e) { return e } }, t.prototype._onCancel = function() {}, t.prototype._setOnCancel = function(e) {}, t.prototype._attachCancellationCallback = function(e) {}, t.prototype._captureStackTrace = function() {}, t.prototype._attachExtraTrace = function() {}, t.prototype._clearCancellationData = function() {}, t.prototype._propagateFrom = function(e, t) {}; var ne = p,
                                    re = function() { return !1 },
                                    ie = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                                L.inherits(O, Error), n.CapturedTrace = O, O.prototype.uncycle = function() { var e = this._length; if (!(e < 2)) { for (var t = [], n = {}, r = 0, i = this; void 0 !== i; ++r) t.push(i), i = i._parent;
                                        e = this._length = r; for (var r = e - 1; r >= 0; --r) { var o = t[r].stack;
                                            void 0 === n[o] && (n[o] = r) } for (var r = 0; r < e; ++r) { var s = t[r].stack,
                                                a = n[s]; if (void 0 !== a && a !== r) { a > 0 && (t[a - 1]._parent = void 0, t[a - 1]._length = 1), t[r]._parent = void 0, t[r]._length = 1; var u = r > 0 ? t[r - 1] : this;
                                                a < e - 1 ? (u._parent = t[a + 1], u._parent.uncycle(), u._length = u._parent._length + 1) : (u._parent = void 0, u._length = 1); for (var c = u._length + 1, l = r - 2; l >= 0; --l) t[l]._length = c, c++; return } } } }, O.prototype.attachExtraTrace = function(e) { if (!e.__stackCleaned__) { this.uncycle(); for (var t = C(e), n = t.message, r = [t.stack], i = this; void 0 !== i;) r.push(w(i.stack.split("\n"))), i = i._parent;
                                        k(r), g(r), L.notEnumerableProp(e, "stack", y(n, r)), L.notEnumerableProp(e, "__stackCleaned__", !0) } }; var oe = function() { var e = /^\s*at\s*/,
                                        t = function(e, t) { return "string" == typeof e ? e : void 0 !== t.name && void 0 !== t.message ? t.toString() : S(t) }; if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) { Error.stackTraceLimit += 6, V = e, W = t; var n = Error.captureStackTrace; return re = function(e) { return B.test(e) },
                                            function(e, t) { Error.stackTraceLimit += 6, n(e, t), Error.stackTraceLimit -= 6 } } var r = new Error; if ("string" == typeof r.stack && r.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return V = /@/, W = t, G = !0,
                                        function(e) { e.stack = (new Error).stack }; var i; try { throw new Error } catch (e) { i = "stack" in e } return "stack" in r || !i || "number" != typeof Error.stackTraceLimit ? (W = function(e, t) { return "string" == typeof e ? e : "object" != typeof t && "function" != typeof t || void 0 === t.name || void 0 === t.message ? S(t) : t.toString() }, null) : (V = e, W = t, function(e) { Error.stackTraceLimit += 6; try { throw new Error } catch (t) { e.stack = t.stack }
                                        Error.stackTraceLimit -= 6 }) }([]); "undefined" != typeof console && "undefined" != typeof console.warn && (F = function(e) { console.warn(e) }, L.isNode && i.stderr.isTTY ? F = function(e, t) { var n = t ? "\x1b[33m" : "\x1b[31m";
                                    console.warn(n + e + "\x1b[0m\n") } : L.isNode || "string" != typeof(new Error).stack || (F = function(e, t) { console.warn("%c" + e, t ? "color: darkorange" : "color: red") })); var se = { warnings: J, longStackTraces: !1, cancellation: !1, monitoring: !1 }; return K && t.longStackTraces(), { longStackTraces: function() { return se.longStackTraces }, warnings: function() { return se.warnings }, cancellation: function() { return se.cancellation }, monitoring: function() { return se.monitoring }, propagateFromFunction: function() { return ne }, boundValueFunction: function() { return d }, checkForgottenReturns: b, setBounds: I, warn: v, deprecated: m, CapturedTrace: O, fireDomEvent: Y, fireGlobalEvent: Z } } }, { "./errors": 12, "./util": 36 }],
                        10: [function(e, t, n) { "use strict";
                            t.exports = function(e) {
                                function t() { return this.value }

                                function n() { throw this.reason }
                                e.prototype.return = e.prototype.thenReturn = function(n) { return n instanceof e && n.suppressUnhandledRejections(), this._then(t, void 0, void 0, { value: n }, void 0) }, e.prototype.throw = e.prototype.thenThrow = function(e) { return this._then(n, void 0, void 0, { reason: e }, void 0) }, e.prototype.catchThrow = function(e) { if (arguments.length <= 1) return this._then(void 0, n, void 0, { reason: e }, void 0); var t = arguments[1],
                                        r = function() { throw t }; return this.caught(e, r) }, e.prototype.catchReturn = function(n) { if (arguments.length <= 1) return n instanceof e && n.suppressUnhandledRejections(), this._then(void 0, t, void 0, { value: n }, void 0); var r = arguments[1];
                                    r instanceof e && r.suppressUnhandledRejections(); var i = function() { return r }; return this.caught(n, i) } } }, {}],
                        11: [function(e, t, n) { "use strict";
                            t.exports = function(e, t) {
                                function n() { return o(this) }

                                function r(e, n) { return i(e, n, t, t) } var i = e.reduce,
                                    o = e.all;
                                e.prototype.each = function(e) { return i(this, e, t, 0)._then(n, void 0, void 0, this, void 0) }, e.prototype.mapSeries = function(e) { return i(this, e, t, t) }, e.each = function(e, r) { return i(e, r, t, 0)._then(n, void 0, void 0, e, void 0) }, e.mapSeries = r } }, {}],
                        12: [function(e, t, n) { "use strict";

                            function r(e, t) {
                                function n(r) { return this instanceof n ? (f(this, "message", "string" == typeof r ? r : t), f(this, "name", e), void(Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this))) : new n(r) } return l(n, Error), n }

                            function i(e) { return this instanceof i ? (f(this, "name", "OperationalError"), f(this, "message", e), this.cause = e, this.isOperational = !0, void(e instanceof Error ? (f(this, "message", e.message), f(this, "stack", e.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor))) : new i(e) } var o, s, a = e("./es5"),
                                u = a.freeze,
                                c = e("./util"),
                                l = c.inherits,
                                f = c.notEnumerableProp,
                                p = r("Warning", "warning"),
                                d = r("CancellationError", "cancellation error"),
                                h = r("TimeoutError", "timeout error"),
                                _ = r("AggregateError", "aggregate error"); try { o = TypeError, s = RangeError } catch (e) { o = r("TypeError", "type error"), s = r("RangeError", "range error") } for (var b = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), m = 0; m < b.length; ++m) "function" == typeof Array.prototype[b[m]] && (_.prototype[b[m]] = Array.prototype[b[m]]);
                            a.defineProperty(_.prototype, "length", { value: 0, configurable: !1, writable: !0, enumerable: !0 }), _.prototype.isOperational = !0; var v = 0;
                            _.prototype.toString = function() { var e = Array(4 * v + 1).join(" "),
                                    t = "\n" + e + "AggregateError of:\n";
                                v++, e = Array(4 * v + 1).join(" "); for (var n = 0; n < this.length; ++n) { for (var r = this[n] === this ? "[Circular AggregateError]" : this[n] + "", i = r.split("\n"), o = 0; o < i.length; ++o) i[o] = e + i[o];
                                    r = i.join("\n"), t += r + "\n" } return v--, t }, l(i, Error); var y = Error.__BluebirdErrorTypes__;
                            y || (y = u({ CancellationError: d, TimeoutError: h, OperationalError: i, RejectionError: i, AggregateError: _ }), a.defineProperty(Error, "__BluebirdErrorTypes__", { value: y, writable: !1, enumerable: !1, configurable: !1 })), t.exports = { Error: Error, TypeError: o, RangeError: s, CancellationError: y.CancellationError, OperationalError: y.OperationalError, TimeoutError: y.TimeoutError, AggregateError: y.AggregateError, Warning: p } }, { "./es5": 13, "./util": 36 }],
                        13: [function(e, t, n) { var r = function() { "use strict"; return void 0 === this }(); if (r) t.exports = { freeze: Object.freeze, defineProperty: Object.defineProperty, getDescriptor: Object.getOwnPropertyDescriptor, keys: Object.keys, names: Object.getOwnPropertyNames, getPrototypeOf: Object.getPrototypeOf, isArray: Array.isArray, isES5: r, propertyIsWritable: function(e, t) { var n = Object.getOwnPropertyDescriptor(e, t); return !(n && !n.writable && !n.set) } };
                            else { var i = {}.hasOwnProperty,
                                    o = {}.toString,
                                    s = {}.constructor.prototype,
                                    a = function(e) { var t = []; for (var n in e) i.call(e, n) && t.push(n); return t },
                                    u = function(e, t) { return { value: e[t] } },
                                    c = function(e, t, n) { return e[t] = n.value, e },
                                    l = function(e) { return e },
                                    f = function(e) { try { return Object(e).constructor.prototype } catch (e) { return s } },
                                    p = function(e) { try { return "[object Array]" === o.call(e) } catch (e) { return !1 } };
                                t.exports = { isArray: p, keys: a, names: a, defineProperty: c, getDescriptor: u, freeze: l, getPrototypeOf: f, isES5: r, propertyIsWritable: function() { return !0 } } } }, {}],
                        14: [function(e, t, n) { "use strict";
                            t.exports = function(e, t) { var n = e.map;
                                e.prototype.filter = function(e, r) { return n(this, e, r, t) }, e.filter = function(e, r, i) { return n(e, r, i, t) } } }, {}],
                        15: [function(e, t, n) { "use strict";
                            t.exports = function(t, n) {
                                function r(e, t, n) { this.promise = e, this.type = t, this.handler = n, this.called = !1, this.cancelPromise = null }

                                function i(e) { this.finallyHandler = e }

                                function o(e, t) { return null != e.cancelPromise && (arguments.length > 1 ? e.cancelPromise._reject(t) : e.cancelPromise._cancel(), e.cancelPromise = null, !0) }

                                function s() { return u.call(this, this.promise._target()._settledValue()) }

                                function a(e) { if (!o(this, e)) return f.e = e, f }

                                function u(e) { var r = this.promise,
                                        u = this.handler; if (!this.called) { this.called = !0; var c = this.isFinallyHandler() ? u.call(r._boundValue()) : u.call(r._boundValue(), e); if (void 0 !== c) { r._setReturnedNonUndefined(); var p = n(c, r); if (p instanceof t) { if (null != this.cancelPromise) { if (p._isCancelled()) { var d = new l("late cancellation observer"); return r._attachExtraTrace(d), f.e = d, f }
                                                    p.isPending() && p._attachCancellationCallback(new i(this)) } return p._then(s, a, void 0, this, void 0) } } } return r.isRejected() ? (o(this), f.e = e, f) : (o(this), e) } var c = e("./util"),
                                    l = t.CancellationError,
                                    f = c.errorObj; return r.prototype.isFinallyHandler = function() { return 0 === this.type }, i.prototype._resultCancelled = function() { o(this.finallyHandler) }, t.prototype._passThrough = function(e, t, n, i) { return "function" != typeof e ? this.then() : this._then(n, i, void 0, new r(this, t, e), void 0) }, t.prototype.lastly = t.prototype.finally = function(e) { return this._passThrough(e, 0, u, u) }, t.prototype.tap = function(e) { return this._passThrough(e, 1, u) }, r } }, { "./util": 36 }],
                        16: [function(e, t, n) {
                            "use strict";
                            t.exports = function(t, n, r, i, o, s) {
                                function a(e, n, r) { for (var o = 0; o < n.length; ++o) { r._pushContext(); var s = d(n[o])(e); if (r._popContext(), s === p) { r._pushContext(); var a = t.reject(p.e); return r._popContext(), a } var u = i(s, r); if (u instanceof t) return u } return null }

                                function u(e, n, i, o) { if (s.cancellation()) { var a = new t(r),
                                            u = this._finallyPromise = new t(r);
                                        this._promise = a.lastly(function() { return u }), a._captureStackTrace(), a._setOnCancel(this) } else { var c = this._promise = new t(r);
                                        c._captureStackTrace() }
                                    this._stack = o, this._generatorFunction = e, this._receiver = n, this._generator = void 0, this._yieldHandlers = "function" == typeof i ? [i].concat(h) : h, this._yieldedPromise = null, this._cancellationPhase = !1 }
                                var c = e("./errors"),
                                    l = c.TypeError,
                                    f = e("./util"),
                                    p = f.errorObj,
                                    d = f.tryCatch,
                                    h = [];
                                f.inherits(u, o), u.prototype._isResolved = function() { return null === this._promise }, u.prototype._cleanup = function() { this._promise = this._generator = null, s.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(), this._finallyPromise = null) }, u.prototype._promiseCancelled = function() { if (!this._isResolved()) { var e, n = "undefined" != typeof this._generator.return; if (n) this._promise._pushContext(), e = d(this._generator.return).call(this._generator, void 0), this._promise._popContext();
                                        else { var r = new t.CancellationError("generator .return() sentinel");
                                            t.coroutine.returnSentinel = r, this._promise._attachExtraTrace(r), this._promise._pushContext(), e = d(this._generator.throw).call(this._generator, r), this._promise._popContext() }
                                        this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(e) } }, u.prototype._promiseFulfilled = function(e) { this._yieldedPromise = null, this._promise._pushContext(); var t = d(this._generator.next).call(this._generator, e);
                                    this._promise._popContext(), this._continue(t) }, u.prototype._promiseRejected = function(e) { this._yieldedPromise = null, this._promise._attachExtraTrace(e), this._promise._pushContext(); var t = d(this._generator.throw).call(this._generator, e);
                                    this._promise._popContext(), this._continue(t) }, u.prototype._resultCancelled = function() { if (this._yieldedPromise instanceof t) { var e = this._yieldedPromise;
                                        this._yieldedPromise = null, e.cancel() } }, u.prototype.promise = function() { return this._promise }, u.prototype._run = function() { this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._promiseFulfilled(void 0) }, u.prototype._continue = function(e) { var n = this._promise; if (e === p) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._rejectCallback(e.e, !1); var r = e.value; if (e.done === !0) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._resolveCallback(r); var o = i(r, this._promise); if (!(o instanceof t) && (o = a(o, this._yieldHandlers, this._promise), null === o)) return void this._promiseRejected(new l("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", r) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
                                    o = o._target(); var s = o._bitField;
                                    0 === (50397184 & s) ? (this._yieldedPromise = o, o._proxy(this, null)) : 0 !== (33554432 & s) ? t._async.invoke(this._promiseFulfilled, this, o._value()) : 0 !== (16777216 & s) ? t._async.invoke(this._promiseRejected, this, o._reason()) : this._promiseCancelled() }, t.coroutine = function(e, t) { if ("function" != typeof e) throw new l("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n"); var n = Object(t).yieldHandler,
                                        r = u,
                                        i = (new Error).stack; return function() { var t = e.apply(this, arguments),
                                            o = new r((void 0), (void 0), n, i),
                                            s = o.promise(); return o._generator = t, o._promiseFulfilled(void 0), s } }, t.coroutine.addYieldHandler = function(e) { if ("function" != typeof e) throw new l("expecting a function but got " + f.classString(e));
                                    h.push(e) }, t.spawn = function(e) {
                                    if (s.deprecated("Promise.spawn()", "Promise.coroutine()"), "function" != typeof e) return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                                    var r = new u(e, this),
                                        i = r.promise();
                                    return r._run(t.spawn), i
                                }
                            }
                        }, { "./errors": 12, "./util": 36 }],
                        17: [function(e, t, n) { "use strict";
                            t.exports = function(t, n, r, i, o, s) { var a = e("./util");
                                a.canEvaluate, a.tryCatch, a.errorObj;
                                t.join = function() { var e, t = arguments.length - 1; if (t > 0 && "function" == typeof arguments[t]) { e = arguments[t]; var r } var i = [].slice.call(arguments);
                                    e && i.pop(); var r = new n(i).promise(); return void 0 !== e ? r.spread(e) : r } } }, { "./util": 36 }],
                        18: [function(e, t, n) { "use strict";
                            t.exports = function(t, n, r, i, o, s) {
                                function a(e, t, n, r) { this.constructor$(e), this._promise._captureStackTrace(); var i = c();
                                    this._callback = null === i ? t : l.domainBind(i, t), this._preservedValues = r === o ? new Array(this.length()) : null, this._limit = n, this._inFlight = 0, this._queue = [], d.invoke(this._asyncInit, this, void 0) }

                                function u(e, n, i, o) { if ("function" != typeof n) return r("expecting a function but got " + l.classString(n)); var s = 0; if (void 0 !== i) { if ("object" != typeof i || null === i) return t.reject(new TypeError("options argument must be an object but it is " + l.classString(i))); if ("number" != typeof i.concurrency) return t.reject(new TypeError("'concurrency' must be a number but it is " + l.classString(i.concurrency)));
                                        s = i.concurrency } return s = "number" == typeof s && isFinite(s) && s >= 1 ? s : 0, new a(e, n, s, o).promise() } var c = t._getDomain,
                                    l = e("./util"),
                                    f = l.tryCatch,
                                    p = l.errorObj,
                                    d = t._async;
                                l.inherits(a, n), a.prototype._asyncInit = function() { this._init$(void 0, -2) }, a.prototype._init = function() {}, a.prototype._promiseFulfilled = function(e, n) { var r = this._values,
                                        o = this.length(),
                                        a = this._preservedValues,
                                        u = this._limit; if (n < 0) { if (n = n * -1 - 1, r[n] = e, u >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return !0 } else { if (u >= 1 && this._inFlight >= u) return r[n] = e, this._queue.push(n), !1;
                                        null !== a && (a[n] = e); var c = this._promise,
                                            l = this._callback,
                                            d = c._boundValue();
                                        c._pushContext(); var h = f(l).call(d, e, n, o),
                                            _ = c._popContext(); if (s.checkForgottenReturns(h, _, null !== a ? "Promise.filter" : "Promise.map", c), h === p) return this._reject(h.e), !0; var b = i(h, this._promise); if (b instanceof t) { b = b._target(); var m = b._bitField; if (0 === (50397184 & m)) return u >= 1 && this._inFlight++, r[n] = b, b._proxy(this, (n + 1) * -1), !1; if (0 === (33554432 & m)) return 0 !== (16777216 & m) ? (this._reject(b._reason()), !0) : (this._cancel(), !0);
                                            h = b._value() }
                                        r[n] = h } var v = ++this._totalResolved; return v >= o && (null !== a ? this._filter(r, a) : this._resolve(r), !0) }, a.prototype._drainQueue = function() { for (var e = this._queue, t = this._limit, n = this._values; e.length > 0 && this._inFlight < t;) { if (this._isResolved()) return; var r = e.pop();
                                        this._promiseFulfilled(n[r], r) } }, a.prototype._filter = function(e, t) { for (var n = t.length, r = new Array(n), i = 0, o = 0; o < n; ++o) e[o] && (r[i++] = t[o]);
                                    r.length = i, this._resolve(r) }, a.prototype.preservedValues = function() { return this._preservedValues }, t.prototype.map = function(e, t) { return u(this, e, t, null) }, t.map = function(e, t, n, r) { return u(e, t, n, r) } } }, { "./util": 36 }],
                        19: [function(e, t, n) { "use strict";
                            t.exports = function(t, n, r, i, o) { var s = e("./util"),
                                    a = s.tryCatch;
                                t.method = function(e) { if ("function" != typeof e) throw new t.TypeError("expecting a function but got " + s.classString(e)); return function() { var r = new t(n);
                                        r._captureStackTrace(), r._pushContext(); var i = a(e).apply(this, arguments),
                                            s = r._popContext(); return o.checkForgottenReturns(i, s, "Promise.method", r), r._resolveFromSyncValue(i), r } }, t.attempt = t.try = function(e) { if ("function" != typeof e) return i("expecting a function but got " + s.classString(e)); var r = new t(n);
                                    r._captureStackTrace(), r._pushContext(); var u; if (arguments.length > 1) { o.deprecated("calling Promise.try with more than 1 argument"); var c = arguments[1],
                                            l = arguments[2];
                                        u = s.isArray(c) ? a(e).apply(l, c) : a(e).call(l, c) } else u = a(e)(); var f = r._popContext(); return o.checkForgottenReturns(u, f, "Promise.try", r), r._resolveFromSyncValue(u), r }, t.prototype._resolveFromSyncValue = function(e) { e === s.errorObj ? this._rejectCallback(e.e, !1) : this._resolveCallback(e, !0) } } }, { "./util": 36 }],
                        20: [function(e, t, n) { "use strict";

                            function r(e) { return e instanceof Error && l.getPrototypeOf(e) === Error.prototype }

                            function i(e) { var t; if (r(e)) { t = new c(e), t.name = e.name, t.message = e.message, t.stack = e.stack; for (var n = l.keys(e), i = 0; i < n.length; ++i) { var o = n[i];
                                        f.test(o) || (t[o] = e[o]) } return t } return s.markAsOriginatingFromRejection(e), e }

                            function o(e, t) { return function(n, r) { if (null !== e) { if (n) { var o = i(a(n));
                                            e._attachExtraTrace(o), e._reject(o) } else if (t) { var s = [].slice.call(arguments, 1);
                                            e._fulfill(s) } else e._fulfill(r);
                                        e = null } } } var s = e("./util"),
                                a = s.maybeWrapAsError,
                                u = e("./errors"),
                                c = u.OperationalError,
                                l = e("./es5"),
                                f = /^(?:name|message|stack|cause)$/;
                            t.exports = o }, { "./errors": 12, "./es5": 13, "./util": 36 }],
                        21: [function(e, t, n) { "use strict";
                            t.exports = function(t) {
                                function n(e, t) { var n = this; if (!o.isArray(e)) return r.call(n, e, t); var i = a(t).apply(n._boundValue(), [null].concat(e));
                                    i === u && s.throwLater(i.e) }

                                function r(e, t) { var n = this,
                                        r = n._boundValue(),
                                        i = void 0 === e ? a(t).call(r, null) : a(t).call(r, null, e);
                                    i === u && s.throwLater(i.e) }

                                function i(e, t) { var n = this; if (!e) { var r = new Error(e + "");
                                        r.cause = e, e = r } var i = a(t).call(n._boundValue(), e);
                                    i === u && s.throwLater(i.e) } var o = e("./util"),
                                    s = t._async,
                                    a = o.tryCatch,
                                    u = o.errorObj;
                                t.prototype.asCallback = t.prototype.nodeify = function(e, t) { if ("function" == typeof e) { var o = r;
                                        void 0 !== t && Object(t).spread && (o = n), this._then(o, i, void 0, this, e) } return this } } }, { "./util": 36 }],
                        22: [function(e, t, n) { "use strict";
                            t.exports = function() {
                                function n() {}

                                function r(e, t) { if ("function" != typeof t) throw new y("expecting a function but got " + h.classString(t)); if (e.constructor !== o) throw new y("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n") }

                                function o(e) { this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, e !== k && (r(this, e), this._resolveFromExecutor(e)), this._promiseCreated(), this._fireEvent("promiseCreated", this) }

                                function s(e) { this.promise._resolveCallback(e) }

                                function a(e) { this.promise._rejectCallback(e, !1) }

                                function u(e) { var t = new o(k);
                                    t._fulfillmentHandler0 = e, t._rejectionHandler0 = e, t._promise0 = e, t._receiver0 = e } var c, l = function() { return new y("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n") },
                                    f = function() { return new o.PromiseInspection(this._target()) },
                                    p = function(e) { return o.reject(new y(e)) },
                                    d = {},
                                    h = e("./util");
                                c = h.isNode ? function() { var e = i.domain; return void 0 === e && (e = null), e } : function() { return null }, h.notEnumerableProp(o, "_getDomain", c); var _ = e("./es5"),
                                    b = e("./async"),
                                    m = new b;
                                _.defineProperty(o, "_async", { value: m }); var v = e("./errors"),
                                    y = o.TypeError = v.TypeError;
                                o.RangeError = v.RangeError; var g = o.CancellationError = v.CancellationError;
                                o.TimeoutError = v.TimeoutError, o.OperationalError = v.OperationalError, o.RejectionError = v.OperationalError, o.AggregateError = v.AggregateError; var k = function() {},
                                    w = {},
                                    j = {},
                                    C = e("./thenables")(o, k),
                                    x = e("./promise_array")(o, k, C, p, n),
                                    E = e("./context")(o),
                                    S = E.create,
                                    T = e("./debuggability")(o, E),
                                    R = (T.CapturedTrace, e("./finally")(o, C)),
                                    P = e("./catch_filter")(j),
                                    I = e("./nodeback"),
                                    O = h.errorObj,
                                    A = h.tryCatch; return o.prototype.toString = function() { return "[object Promise]" }, o.prototype.caught = o.prototype.catch = function(e) { var t = arguments.length; if (t > 1) { var n, r = new Array(t - 1),
                                            i = 0; for (n = 0; n < t - 1; ++n) { var o = arguments[n]; if (!h.isObject(o)) return p("expecting an object but got A catch statement predicate " + h.classString(o));
                                            r[i++] = o } return r.length = i, e = arguments[n], this.then(void 0, P(r, e, this)) } return this.then(void 0, e) }, o.prototype.reflect = function() { return this._then(f, f, void 0, this, void 0) }, o.prototype.then = function(e, t) { if (T.warnings() && arguments.length > 0 && "function" != typeof e && "function" != typeof t) { var n = ".then() only accepts functions but was passed: " + h.classString(e);
                                        arguments.length > 1 && (n += ", " + h.classString(t)), this._warn(n) } return this._then(e, t, void 0, void 0, void 0) }, o.prototype.done = function(e, t) { var n = this._then(e, t, void 0, void 0, void 0);
                                    n._setIsFinal() }, o.prototype.spread = function(e) { return "function" != typeof e ? p("expecting a function but got " + h.classString(e)) : this.all()._then(e, void 0, void 0, w, void 0) }, o.prototype.toJSON = function() { var e = { isFulfilled: !1, isRejected: !1, fulfillmentValue: void 0, rejectionReason: void 0 }; return this.isFulfilled() ? (e.fulfillmentValue = this.value(), e.isFulfilled = !0) : this.isRejected() && (e.rejectionReason = this.reason(), e.isRejected = !0), e }, o.prototype.all = function() { return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), new x(this).promise() }, o.prototype.error = function(e) { return this.caught(h.originatesFromRejection, e) }, o.getNewLibraryCopy = t.exports, o.is = function(e) { return e instanceof o }, o.fromNode = o.fromCallback = function(e) { var t = new o(k);
                                    t._captureStackTrace(); var n = arguments.length > 1 && !!Object(arguments[1]).multiArgs,
                                        r = A(e)(I(t, n)); return r === O && t._rejectCallback(r.e, !0), t._isFateSealed() || t._setAsyncGuaranteed(), t }, o.all = function(e) { return new x(e).promise() }, o.cast = function(e) { var t = C(e); return t instanceof o || (t = new o(k), t._captureStackTrace(), t._setFulfilled(), t._rejectionHandler0 = e), t }, o.resolve = o.fulfilled = o.cast, o.reject = o.rejected = function(e) { var t = new o(k); return t._captureStackTrace(), t._rejectCallback(e, !0), t }, o.setScheduler = function(e) { if ("function" != typeof e) throw new y("expecting a function but got " + h.classString(e)); return m.setScheduler(e) }, o.prototype._then = function(e, t, n, r, i) { var s = void 0 !== i,
                                        a = s ? i : new o(k),
                                        u = this._target(),
                                        l = u._bitField;
                                    s || (a._propagateFrom(this, 3), a._captureStackTrace(), void 0 === r && 0 !== (2097152 & this._bitField) && (r = 0 !== (50397184 & l) ? this._boundValue() : u === this ? void 0 : this._boundTo), this._fireEvent("promiseChained", this, a)); var f = c(); if (0 !== (50397184 & l)) { var p, d, _ = u._settlePromiseCtx;
                                        0 !== (33554432 & l) ? (d = u._rejectionHandler0, p = e) : 0 !== (16777216 & l) ? (d = u._fulfillmentHandler0, p = t, u._unsetRejectionIsUnhandled()) : (_ = u._settlePromiseLateCancellationObserver, d = new g("late cancellation observer"), u._attachExtraTrace(d), p = t), m.invoke(_, u, { handler: null === f ? p : "function" == typeof p && h.domainBind(f, p), promise: a, receiver: r, value: d }) } else u._addCallbacks(e, t, a, r, f); return a }, o.prototype._length = function() { return 65535 & this._bitField }, o.prototype._isFateSealed = function() { return 0 !== (117506048 & this._bitField) }, o.prototype._isFollowing = function() { return 67108864 === (67108864 & this._bitField) }, o.prototype._setLength = function(e) { this._bitField = this._bitField & -65536 | 65535 & e }, o.prototype._setFulfilled = function() { this._bitField = 33554432 | this._bitField, this._fireEvent("promiseFulfilled", this) }, o.prototype._setRejected = function() { this._bitField = 16777216 | this._bitField, this._fireEvent("promiseRejected", this) }, o.prototype._setFollowing = function() { this._bitField = 67108864 | this._bitField, this._fireEvent("promiseResolved", this) }, o.prototype._setIsFinal = function() { this._bitField = 4194304 | this._bitField }, o.prototype._isFinal = function() { return (4194304 & this._bitField) > 0 }, o.prototype._unsetCancelled = function() { this._bitField = this._bitField & -65537 }, o.prototype._setCancelled = function() { this._bitField = 65536 | this._bitField, this._fireEvent("promiseCancelled", this) }, o.prototype._setWillBeCancelled = function() { this._bitField = 8388608 | this._bitField }, o.prototype._setAsyncGuaranteed = function() { m.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField) }, o.prototype._receiverAt = function(e) { var t = 0 === e ? this._receiver0 : this[4 * e - 4 + 3]; if (t !== d) return void 0 === t && this._isBound() ? this._boundValue() : t }, o.prototype._promiseAt = function(e) { return this[4 * e - 4 + 2] }, o.prototype._fulfillmentHandlerAt = function(e) { return this[4 * e - 4 + 0] }, o.prototype._rejectionHandlerAt = function(e) { return this[4 * e - 4 + 1] }, o.prototype._boundValue = function() {}, o.prototype._migrateCallback0 = function(e) { var t = (e._bitField, e._fulfillmentHandler0),
                                        n = e._rejectionHandler0,
                                        r = e._promise0,
                                        i = e._receiverAt(0);
                                    void 0 === i && (i = d), this._addCallbacks(t, n, r, i, null) }, o.prototype._migrateCallbackAt = function(e, t) { var n = e._fulfillmentHandlerAt(t),
                                        r = e._rejectionHandlerAt(t),
                                        i = e._promiseAt(t),
                                        o = e._receiverAt(t);
                                    void 0 === o && (o = d), this._addCallbacks(n, r, i, o, null) }, o.prototype._addCallbacks = function(e, t, n, r, i) { var o = this._length(); if (o >= 65531 && (o = 0, this._setLength(0)), 0 === o) this._promise0 = n, this._receiver0 = r, "function" == typeof e && (this._fulfillmentHandler0 = null === i ? e : h.domainBind(i, e)), "function" == typeof t && (this._rejectionHandler0 = null === i ? t : h.domainBind(i, t));
                                    else { var s = 4 * o - 4;
                                        this[s + 2] = n, this[s + 3] = r, "function" == typeof e && (this[s + 0] = null === i ? e : h.domainBind(i, e)), "function" == typeof t && (this[s + 1] = null === i ? t : h.domainBind(i, t)) } return this._setLength(o + 1), o }, o.prototype._proxy = function(e, t) { this._addCallbacks(void 0, void 0, t, e, null) }, o.prototype._resolveCallback = function(e, t) { if (0 === (117506048 & this._bitField)) { if (e === this) return this._rejectCallback(l(), !1); var n = C(e, this); if (!(n instanceof o)) return this._fulfill(e);
                                        t && this._propagateFrom(n, 2); var r = n._target(); if (r === this) return void this._reject(l()); var i = r._bitField; if (0 === (50397184 & i)) { var s = this._length();
                                            s > 0 && r._migrateCallback0(this); for (var a = 1; a < s; ++a) r._migrateCallbackAt(this, a);
                                            this._setFollowing(), this._setLength(0), this._setFollowee(r) } else if (0 !== (33554432 & i)) this._fulfill(r._value());
                                        else if (0 !== (16777216 & i)) this._reject(r._reason());
                                        else { var u = new g("late cancellation observer");
                                            r._attachExtraTrace(u), this._reject(u) } } }, o.prototype._rejectCallback = function(e, t, n) { var r = h.ensureErrorObject(e),
                                        i = r === e; if (!i && !n && T.warnings()) { var o = "a promise was rejected with a non-error: " + h.classString(e);
                                        this._warn(o, !0) }
                                    this._attachExtraTrace(r, !!t && i), this._reject(e) }, o.prototype._resolveFromExecutor = function(e) { var t = this;
                                    this._captureStackTrace(), this._pushContext(); var n = !0,
                                        r = this._execute(e, function(e) { t._resolveCallback(e) }, function(e) { t._rejectCallback(e, n) });
                                    n = !1, this._popContext(), void 0 !== r && t._rejectCallback(r, !0) }, o.prototype._settlePromiseFromHandler = function(e, t, n, r) { var i = r._bitField; if (0 === (65536 & i)) { r._pushContext(); var o;
                                        t === w ? n && "number" == typeof n.length ? o = A(e).apply(this._boundValue(), n) : (o = O, o.e = new y("cannot .spread() a non-array: " + h.classString(n))) : o = A(e).call(t, n); var s = r._popContext();
                                        i = r._bitField, 0 === (65536 & i) && (o === j ? r._reject(n) : o === O ? r._rejectCallback(o.e, !1) : (T.checkForgottenReturns(o, s, "", r, this), r._resolveCallback(o))) } }, o.prototype._target = function() { for (var e = this; e._isFollowing();) e = e._followee(); return e }, o.prototype._followee = function() { return this._rejectionHandler0 }, o.prototype._setFollowee = function(e) { this._rejectionHandler0 = e }, o.prototype._settlePromise = function(e, t, r, i) { var s = e instanceof o,
                                        a = this._bitField,
                                        u = 0 !== (134217728 & a);
                                    0 !== (65536 & a) ? (s && e._invokeInternalOnCancel(), r instanceof R && r.isFinallyHandler() ? (r.cancelPromise = e, A(t).call(r, i) === O && e._reject(O.e)) : t === f ? e._fulfill(f.call(r)) : r instanceof n ? r._promiseCancelled(e) : s || e instanceof x ? e._cancel() : r.cancel()) : "function" == typeof t ? s ? (u && e._setAsyncGuaranteed(), this._settlePromiseFromHandler(t, r, i, e)) : t.call(r, i, e) : r instanceof n ? r._isResolved() || (0 !== (33554432 & a) ? r._promiseFulfilled(i, e) : r._promiseRejected(i, e)) : s && (u && e._setAsyncGuaranteed(), 0 !== (33554432 & a) ? e._fulfill(i) : e._reject(i)) }, o.prototype._settlePromiseLateCancellationObserver = function(e) { var t = e.handler,
                                        n = e.promise,
                                        r = e.receiver,
                                        i = e.value; "function" == typeof t ? n instanceof o ? this._settlePromiseFromHandler(t, r, i, n) : t.call(r, i, n) : n instanceof o && n._reject(i) }, o.prototype._settlePromiseCtx = function(e) { this._settlePromise(e.promise, e.handler, e.receiver, e.value) }, o.prototype._settlePromise0 = function(e, t, n) { var r = this._promise0,
                                        i = this._receiverAt(0);
                                    this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(r, e, i, t) }, o.prototype._clearCallbackDataAtIndex = function(e) { var t = 4 * e - 4;
                                    this[t + 2] = this[t + 3] = this[t + 0] = this[t + 1] = void 0 }, o.prototype._fulfill = function(e) { var t = this._bitField; if (!((117506048 & t) >>> 16)) { if (e === this) { var n = l(); return this._attachExtraTrace(n), this._reject(n) }
                                        this._setFulfilled(), this._rejectionHandler0 = e, (65535 & t) > 0 && (0 !== (134217728 & t) ? this._settlePromises() : m.settlePromises(this)) } }, o.prototype._reject = function(e) { var t = this._bitField; if (!((117506048 & t) >>> 16)) return this._setRejected(), this._fulfillmentHandler0 = e, this._isFinal() ? m.fatalError(e, h.isNode) : void((65535 & t) > 0 ? m.settlePromises(this) : this._ensurePossibleRejectionHandled()) }, o.prototype._fulfillPromises = function(e, t) { for (var n = 1; n < e; n++) { var r = this._fulfillmentHandlerAt(n),
                                            i = this._promiseAt(n),
                                            o = this._receiverAt(n);
                                        this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, t) } }, o.prototype._rejectPromises = function(e, t) { for (var n = 1; n < e; n++) { var r = this._rejectionHandlerAt(n),
                                            i = this._promiseAt(n),
                                            o = this._receiverAt(n);
                                        this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, t) } }, o.prototype._settlePromises = function() { var e = this._bitField,
                                        t = 65535 & e; if (t > 0) { if (0 !== (16842752 & e)) { var n = this._fulfillmentHandler0;
                                            this._settlePromise0(this._rejectionHandler0, n, e), this._rejectPromises(t, n) } else { var r = this._rejectionHandler0;
                                            this._settlePromise0(this._fulfillmentHandler0, r, e), this._fulfillPromises(t, r) }
                                        this._setLength(0) }
                                    this._clearCancellationData() }, o.prototype._settledValue = function() { var e = this._bitField; return 0 !== (33554432 & e) ? this._rejectionHandler0 : 0 !== (16777216 & e) ? this._fulfillmentHandler0 : void 0 }, o.defer = o.pending = function() { T.deprecated("Promise.defer", "new Promise"); var e = new o(k); return { promise: e, resolve: s, reject: a } }, h.notEnumerableProp(o, "_makeSelfResolutionError", l), e("./method")(o, k, C, p, T), e("./bind")(o, k, C, T), e("./cancel")(o, x, p, T), e("./direct_resolve")(o), e("./synchronous_inspection")(o), e("./join")(o, x, C, k, m, c), o.Promise = o, o.version = "3.4.6", e("./map.js")(o, x, p, C, k, T), e("./call_get.js")(o), e("./using.js")(o, p, C, S, k, T), e("./timers.js")(o, k, T), e("./generators.js")(o, p, k, C, n, T), e("./nodeify.js")(o), e("./promisify.js")(o, k), e("./props.js")(o, x, C, p), e("./race.js")(o, k, C, p), e("./reduce.js")(o, x, p, C, k, T), e("./settle.js")(o, x, T), e("./some.js")(o, x, p), e("./filter.js")(o, k), e("./each.js")(o, k), e("./any.js")(o), h.toFastProperties(o), h.toFastProperties(o.prototype), u({ a: 1 }), u({ b: 2 }), u({ c: 3 }), u(1), u(function() {}), u(void 0), u(!1), u(new o(k)), T.setBounds(b.firstLineError, h.lastLineError), o } }, { "./any.js": 1, "./async": 2, "./bind": 3, "./call_get.js": 5, "./cancel": 6, "./catch_filter": 7, "./context": 8, "./debuggability": 9, "./direct_resolve": 10, "./each.js": 11, "./errors": 12, "./es5": 13, "./filter.js": 14, "./finally": 15, "./generators.js": 16, "./join": 17, "./map.js": 18, "./method": 19, "./nodeback": 20, "./nodeify.js": 21, "./promise_array": 23, "./promisify.js": 24, "./props.js": 25, "./race.js": 27, "./reduce.js": 28, "./settle.js": 30, "./some.js": 31, "./synchronous_inspection": 32, "./thenables": 33, "./timers.js": 34, "./using.js": 35, "./util": 36 }],
                        23: [function(e, t, n) { "use strict";
                            t.exports = function(t, n, r, i, o) {
                                function s(e) { switch (e) {
                                        case -2:
                                            return [];
                                        case -3:
                                            return {} } }

                                function a(e) { var r = this._promise = new t(n);
                                    e instanceof t && r._propagateFrom(e, 3), r._setOnCancel(this), this._values = e, this._length = 0, this._totalResolved = 0, this._init(void 0, -2) } var u = e("./util");
                                u.isArray; return u.inherits(a, o), a.prototype.length = function() { return this._length }, a.prototype.promise = function() { return this._promise }, a.prototype._init = function e(n, o) { var a = r(this._values, this._promise); if (a instanceof t) { a = a._target(); var c = a._bitField; if (this._values = a, 0 === (50397184 & c)) return this._promise._setAsyncGuaranteed(), a._then(e, this._reject, void 0, this, o); if (0 === (33554432 & c)) return 0 !== (16777216 & c) ? this._reject(a._reason()) : this._cancel();
                                        a = a._value() } if (a = u.asArray(a), null === a) { var l = i("expecting an array or an iterable object but got " + u.classString(a)).reason(); return void this._promise._rejectCallback(l, !1) } return 0 === a.length ? void(o === -5 ? this._resolveEmptyArray() : this._resolve(s(o))) : void this._iterate(a) }, a.prototype._iterate = function(e) { var n = this.getActualLength(e.length);
                                    this._length = n, this._values = this.shouldCopyValues() ? new Array(n) : this._values; for (var i = this._promise, o = !1, s = null, a = 0; a < n; ++a) { var u = r(e[a], i);
                                        u instanceof t ? (u = u._target(), s = u._bitField) : s = null, o ? null !== s && u.suppressUnhandledRejections() : null !== s ? 0 === (50397184 & s) ? (u._proxy(this, a), this._values[a] = u) : o = 0 !== (33554432 & s) ? this._promiseFulfilled(u._value(), a) : 0 !== (16777216 & s) ? this._promiseRejected(u._reason(), a) : this._promiseCancelled(a) : o = this._promiseFulfilled(u, a) }
                                    o || i._setAsyncGuaranteed() }, a.prototype._isResolved = function() { return null === this._values }, a.prototype._resolve = function(e) { this._values = null, this._promise._fulfill(e) }, a.prototype._cancel = function() {!this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel()) }, a.prototype._reject = function(e) { this._values = null, this._promise._rejectCallback(e, !1) }, a.prototype._promiseFulfilled = function(e, t) { this._values[t] = e; var n = ++this._totalResolved; return n >= this._length && (this._resolve(this._values), !0) }, a.prototype._promiseCancelled = function() { return this._cancel(), !0 }, a.prototype._promiseRejected = function(e) { return this._totalResolved++, this._reject(e), !0 }, a.prototype._resultCancelled = function() { if (!this._isResolved()) { var e = this._values; if (this._cancel(), e instanceof t) e.cancel();
                                        else
                                            for (var n = 0; n < e.length; ++n) e[n] instanceof t && e[n].cancel() } }, a.prototype.shouldCopyValues = function() { return !0 }, a.prototype.getActualLength = function(e) { return e }, a } }, { "./util": 36 }],
                        24: [function(e, t, n) { "use strict";
                            t.exports = function(t, n) {
                                function r(e) { return !w.test(e) }

                                function i(e) { try { return e.__isPromisified__ === !0 } catch (e) { return !1 } }

                                function o(e, t, n) { var r = d.getDataPropertyOrDefault(e, t + n, g); return !!r && i(r) }

                                function s(e, t, n) { for (var r = 0; r < e.length; r += 2) { var i = e[r]; if (n.test(i))
                                            for (var o = i.replace(n, ""), s = 0; s < e.length; s += 2)
                                                if (e[s] === o) throw new v("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", t)) } }

                                function a(e, t, n, r) { for (var a = d.inheritedDataKeys(e), u = [], c = 0; c < a.length; ++c) { var l = a[c],
                                            f = e[l],
                                            p = r === j || j(l, f, e); "function" != typeof f || i(f) || o(e, l, t) || !r(l, f, e, p) || u.push(l, f) } return s(u, t, n), u }

                                function u(e, r, i, o, s, a) {
                                    function u() { var i = r;
                                        r === p && (i = this); var o = new t(n);
                                        o._captureStackTrace(); var s = "string" == typeof l && this !== c ? this[l] : e,
                                            u = h(o, a); try { s.apply(i, _(arguments, u)) } catch (e) { o._rejectCallback(b(e), !0, !0) } return o._isFateSealed() || o._setAsyncGuaranteed(), o } var c = function() { return this }(),
                                        l = e; return "string" == typeof l && (e = o), d.notEnumerableProp(u, "__isPromisified__", !0), u }

                                function c(e, t, n, r, i) { for (var o = new RegExp(C(t) + "$"), s = a(e, t, o, n), u = 0, c = s.length; u < c; u += 2) { var l = s[u],
                                            f = s[u + 1],
                                            h = l + t; if (r === x) e[h] = x(l, p, l, f, t, i);
                                        else { var _ = r(f, function() { return x(l, p, l, f, t, i) });
                                            d.notEnumerableProp(_, "__isPromisified__", !0), e[h] = _ } } return d.toFastProperties(e), e }

                                function l(e, t, n) { return x(e, t, void 0, e, null, n) } var f, p = {},
                                    d = e("./util"),
                                    h = e("./nodeback"),
                                    _ = d.withAppended,
                                    b = d.maybeWrapAsError,
                                    m = d.canEvaluate,
                                    v = e("./errors").TypeError,
                                    y = "Async",
                                    g = { __isPromisified__: !0 },
                                    k = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"],
                                    w = new RegExp("^(?:" + k.join("|") + ")$"),
                                    j = function(e) { return d.isIdentifier(e) && "_" !== e.charAt(0) && "constructor" !== e },
                                    C = function(e) { return e.replace(/([$])/, "\\$") },
                                    x = m ? f : u;
                                t.promisify = function(e, t) { if ("function" != typeof e) throw new v("expecting a function but got " + d.classString(e)); if (i(e)) return e;
                                    t = Object(t); var n = void 0 === t.context ? p : t.context,
                                        o = !!t.multiArgs,
                                        s = l(e, n, o); return d.copyDescriptors(e, s, r), s }, t.promisifyAll = function(e, t) { if ("function" != typeof e && "object" != typeof e) throw new v("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
                                    t = Object(t); var n = !!t.multiArgs,
                                        r = t.suffix; "string" != typeof r && (r = y); var i = t.filter; "function" != typeof i && (i = j); var o = t.promisifier; if ("function" != typeof o && (o = x), !d.isIdentifier(r)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n"); for (var s = d.inheritedDataKeys(e), a = 0; a < s.length; ++a) { var u = e[s[a]]; "constructor" !== s[a] && d.isClass(u) && (c(u.prototype, r, i, o, n), c(u, r, i, o, n)) } return c(e, r, i, o, n) } } }, { "./errors": 12, "./nodeback": 20, "./util": 36 }],
                        25: [function(e, t, n) { "use strict";
                            t.exports = function(t, n, r, i) {
                                function o(e) { var t, n = !1; if (void 0 !== a && e instanceof a) t = f(e), n = !0;
                                    else { var r = l.keys(e),
                                            i = r.length;
                                        t = new Array(2 * i); for (var o = 0; o < i; ++o) { var s = r[o];
                                            t[o] = e[s], t[o + i] = s } }
                                    this.constructor$(t), this._isMap = n, this._init$(void 0, -3) }

                                function s(e) { var n, s = r(e); return c(s) ? (n = s instanceof t ? s._then(t.props, void 0, void 0, void 0, void 0) : new o(s).promise(), s instanceof t && n._propagateFrom(s, 2), n) : i("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n") } var a, u = e("./util"),
                                    c = u.isObject,
                                    l = e("./es5"); "function" == typeof Map && (a = Map); var f = function() {
                                        function e(e, r) { this[t] = e, this[t + n] = r, t++ } var t = 0,
                                            n = 0; return function(r) { n = r.size, t = 0; var i = new Array(2 * r.size); return r.forEach(e, i), i } }(),
                                    p = function(e) { for (var t = new a, n = e.length / 2 | 0, r = 0; r < n; ++r) { var i = e[n + r],
                                                o = e[r];
                                            t.set(i, o) } return t };
                                u.inherits(o, n), o.prototype._init = function() {}, o.prototype._promiseFulfilled = function(e, t) { this._values[t] = e; var n = ++this._totalResolved; if (n >= this._length) { var r; if (this._isMap) r = p(this._values);
                                        else { r = {}; for (var i = this.length(), o = 0, s = this.length(); o < s; ++o) r[this._values[o + i]] = this._values[o] } return this._resolve(r), !0 } return !1 }, o.prototype.shouldCopyValues = function() { return !1 }, o.prototype.getActualLength = function(e) { return e >> 1 }, t.prototype.props = function() { return s(this) }, t.props = function(e) { return s(e) } } }, { "./es5": 13, "./util": 36 }],
                        26: [function(e, t, n) { "use strict";

                            function r(e, t, n, r, i) { for (var o = 0; o < i; ++o) n[o + r] = e[o + t], e[o + t] = void 0 }

                            function i(e) { this._capacity = e, this._length = 0, this._front = 0 }
                            i.prototype._willBeOverCapacity = function(e) { return this._capacity < e }, i.prototype._pushOne = function(e) { var t = this.length();
                                this._checkCapacity(t + 1); var n = this._front + t & this._capacity - 1;
                                this[n] = e, this._length = t + 1 }, i.prototype._unshiftOne = function(e) { var t = this._capacity;
                                this._checkCapacity(this.length() + 1); var n = this._front,
                                    r = (n - 1 & t - 1 ^ t) - t;
                                this[r] = e, this._front = r, this._length = this.length() + 1 }, i.prototype.unshift = function(e, t, n) { this._unshiftOne(n), this._unshiftOne(t), this._unshiftOne(e) }, i.prototype.push = function(e, t, n) { var r = this.length() + 3; if (this._willBeOverCapacity(r)) return this._pushOne(e), this._pushOne(t), void this._pushOne(n); var i = this._front + r - 3;
                                this._checkCapacity(r); var o = this._capacity - 1;
                                this[i + 0 & o] = e, this[i + 1 & o] = t, this[i + 2 & o] = n, this._length = r }, i.prototype.shift = function() { var e = this._front,
                                    t = this[e]; return this[e] = void 0, this._front = e + 1 & this._capacity - 1, this._length--, t }, i.prototype.length = function() { return this._length }, i.prototype._checkCapacity = function(e) { this._capacity < e && this._resizeTo(this._capacity << 1) }, i.prototype._resizeTo = function(e) { var t = this._capacity;
                                this._capacity = e; var n = this._front,
                                    i = this._length,
                                    o = n + i & t - 1;
                                r(this, 0, this, t, o) }, t.exports = i }, {}],
                        27: [function(e, t, n) { "use strict";
                            t.exports = function(t, n, r, i) {
                                function o(e, o) { var u = r(e); if (u instanceof t) return a(u); if (e = s.asArray(e), null === e) return i("expecting an array or an iterable object but got " + s.classString(e)); var c = new t(n);
                                    void 0 !== o && c._propagateFrom(o, 3); for (var l = c._fulfill, f = c._reject, p = 0, d = e.length; p < d; ++p) { var h = e[p];
                                        (void 0 !== h || p in e) && t.cast(h)._then(l, f, void 0, c, null) } return c } var s = e("./util"),
                                    a = function(e) { return e.then(function(t) { return o(t, e) }) };
                                t.race = function(e) { return o(e, void 0) }, t.prototype.race = function() { return o(this, void 0) } } }, { "./util": 36 }],
                        28: [function(e, t, n) { "use strict";
                            t.exports = function(t, n, r, i, o, s) {
                                function a(e, n, r, i) { this.constructor$(e); var s = p();
                                    this._fn = null === s ? n : d.domainBind(s, n), void 0 !== r && (r = t.resolve(r), r._attachCancellationCallback(this)), this._initialValue = r, this._currentCancellable = null, i === o ? this._eachValues = Array(this._length) : 0 === i ? this._eachValues = null : this._eachValues = void 0, this._promise._captureStackTrace(), this._init$(void 0, -5) }

                                function u(e, t) { this.isFulfilled() ? t._resolve(e) : t._reject(e) }

                                function c(e, t, n, i) { if ("function" != typeof t) return r("expecting a function but got " + d.classString(t)); var o = new a(e, t, n, i); return o.promise() }

                                function l(e) { this.accum = e, this.array._gotAccum(e); var n = i(this.value, this.array._promise); return n instanceof t ? (this.array._currentCancellable = n, n._then(f, void 0, void 0, this, void 0)) : f.call(this, n) }

                                function f(e) { var n = this.array,
                                        r = n._promise,
                                        i = h(n._fn);
                                    r._pushContext(); var o;
                                    o = void 0 !== n._eachValues ? i.call(r._boundValue(), e, this.index, this.length) : i.call(r._boundValue(), this.accum, e, this.index, this.length), o instanceof t && (n._currentCancellable = o); var a = r._popContext(); return s.checkForgottenReturns(o, a, void 0 !== n._eachValues ? "Promise.each" : "Promise.reduce", r), o } var p = t._getDomain,
                                    d = e("./util"),
                                    h = d.tryCatch;
                                d.inherits(a, n), a.prototype._gotAccum = function(e) { void 0 !== this._eachValues && null !== this._eachValues && e !== o && this._eachValues.push(e) }, a.prototype._eachComplete = function(e) { return null !== this._eachValues && this._eachValues.push(e), this._eachValues }, a.prototype._init = function() {}, a.prototype._resolveEmptyArray = function() { this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue) }, a.prototype.shouldCopyValues = function() { return !1 }, a.prototype._resolve = function(e) { this._promise._resolveCallback(e), this._values = null }, a.prototype._resultCancelled = function(e) { return e === this._initialValue ? this._cancel() : void(this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof t && this._currentCancellable.cancel(), this._initialValue instanceof t && this._initialValue.cancel())) }, a.prototype._iterate = function(e) { this._values = e; var n, r, i = e.length; if (void 0 !== this._initialValue ? (n = this._initialValue, r = 0) : (n = t.resolve(e[0]), r = 1), this._currentCancellable = n, !n.isRejected())
                                        for (; r < i; ++r) { var o = { accum: null, value: e[r], index: r, length: i, array: this };
                                            n = n._then(l, void 0, void 0, o, void 0) }
                                    void 0 !== this._eachValues && (n = n._then(this._eachComplete, void 0, void 0, this, void 0)), n._then(u, u, void 0, n, this) }, t.prototype.reduce = function(e, t) { return c(this, e, t, null) }, t.reduce = function(e, t, n, r) { return c(e, t, n, r) } } }, { "./util": 36 }],
                        29: [function(e, t, n) { "use strict"; var r, s = e("./util"),
                                a = function() { throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n") },
                                u = s.getNativePromise(); if (s.isNode && "undefined" == typeof MutationObserver) { var c = o.setImmediate,
                                    l = i.nextTick;
                                r = s.isRecentNode ? function(e) { c.call(o, e) } : function(e) { l.call(i, e) } } else if ("function" == typeof u && "function" == typeof u.resolve) { var f = u.resolve();
                                r = function(e) { f.then(e) } } else r = "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && (window.navigator.standalone || window.cordova) ? "undefined" != typeof setImmediate ? function(e) { setImmediate(e) } : "undefined" != typeof setTimeout ? function(e) { setTimeout(e, 0) } : a : function() { var e = document.createElement("div"),
                                    t = { attributes: !0 },
                                    n = !1,
                                    r = document.createElement("div"),
                                    i = new MutationObserver(function() { e.classList.toggle("foo"), n = !1 });
                                i.observe(r, t); var o = function() { n || (n = !0, r.classList.toggle("foo")) }; return function(n) { var r = new MutationObserver(function() { r.disconnect(), n() });
                                    r.observe(e, t), o() } }();
                            t.exports = r }, { "./util": 36 }],
                        30: [function(e, t, n) { "use strict";
                            t.exports = function(t, n, r) {
                                function i(e) { this.constructor$(e) } var o = t.PromiseInspection,
                                    s = e("./util");
                                s.inherits(i, n), i.prototype._promiseResolved = function(e, t) { this._values[e] = t; var n = ++this._totalResolved; return n >= this._length && (this._resolve(this._values), !0) }, i.prototype._promiseFulfilled = function(e, t) { var n = new o; return n._bitField = 33554432, n._settledValueField = e, this._promiseResolved(t, n) }, i.prototype._promiseRejected = function(e, t) { var n = new o; return n._bitField = 16777216, n._settledValueField = e, this._promiseResolved(t, n) }, t.settle = function(e) { return r.deprecated(".settle()", ".reflect()"), new i(e).promise() }, t.prototype.settle = function() { return t.settle(this) } } }, { "./util": 36 }],
                        31: [function(e, t, n) {
                            "use strict";
                            t.exports = function(t, n, r) {
                                function i(e) { this.constructor$(e), this._howMany = 0, this._unwrap = !1, this._initialized = !1 }

                                function o(e, t) { if ((0 | t) !== t || t < 0) return r("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n"); var n = new i(e),
                                        o = n.promise(); return n.setHowMany(t), n.init(), o }
                                var s = e("./util"),
                                    a = e("./errors").RangeError,
                                    u = e("./errors").AggregateError,
                                    c = s.isArray,
                                    l = {};
                                s.inherits(i, n), i.prototype._init = function() { if (this._initialized) { if (0 === this._howMany) return void this._resolve([]);
                                        this._init$(void 0, -5); var e = c(this._values);!this._isResolved() && e && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length())) } }, i.prototype.init = function() { this._initialized = !0, this._init() }, i.prototype.setUnwrap = function() { this._unwrap = !0 }, i.prototype.howMany = function() { return this._howMany }, i.prototype.setHowMany = function(e) { this._howMany = e }, i.prototype._promiseFulfilled = function(e) { return this._addFulfilled(e), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), !0) }, i.prototype._promiseRejected = function(e) { return this._addRejected(e), this._checkOutcome() }, i.prototype._promiseCancelled = function() { return this._values instanceof t || null == this._values ? this._cancel() : (this._addRejected(l), this._checkOutcome()) }, i.prototype._checkOutcome = function() { if (this.howMany() > this._canPossiblyFulfill()) { for (var e = new u, t = this.length(); t < this._values.length; ++t) this._values[t] !== l && e.push(this._values[t]); return e.length > 0 ? this._reject(e) : this._cancel(), !0 } return !1 }, i.prototype._fulfilled = function() { return this._totalResolved }, i.prototype._rejected = function() { return this._values.length - this.length() }, i.prototype._addRejected = function(e) { this._values.push(e) }, i.prototype._addFulfilled = function(e) { this._values[this._totalResolved++] = e }, i.prototype._canPossiblyFulfill = function() { return this.length() - this._rejected() }, i.prototype._getRangeError = function(e) { var t = "Input array must contain at least " + this._howMany + " items but contains only " + e + " items"; return new a(t) }, i.prototype._resolveEmptyArray = function() { this._reject(this._getRangeError(0)) }, t.some = function(e, t) { return o(e, t) }, t.prototype.some = function(e) { return o(this, e) }, t._SomePromiseArray = i
                            }
                        }, { "./errors": 12, "./util": 36 }],
                        32: [function(e, t, n) { "use strict";
                            t.exports = function(e) {
                                function t(e) { void 0 !== e ? (e = e._target(), this._bitField = e._bitField, this._settledValueField = e._isFateSealed() ? e._settledValue() : void 0) : (this._bitField = 0, this._settledValueField = void 0) }
                                t.prototype._settledValue = function() { return this._settledValueField }; var n = t.prototype.value = function() { if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n"); return this._settledValue() },
                                    r = t.prototype.error = t.prototype.reason = function() { if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n"); return this._settledValue() },
                                    i = t.prototype.isFulfilled = function() { return 0 !== (33554432 & this._bitField) },
                                    o = t.prototype.isRejected = function() { return 0 !== (16777216 & this._bitField) },
                                    s = t.prototype.isPending = function() { return 0 === (50397184 & this._bitField) },
                                    a = t.prototype.isResolved = function() { return 0 !== (50331648 & this._bitField) };
                                t.prototype.isCancelled = function() { return 0 !== (8454144 & this._bitField) }, e.prototype.__isCancelled = function() { return 65536 === (65536 & this._bitField) }, e.prototype._isCancelled = function() { return this._target().__isCancelled() }, e.prototype.isCancelled = function() { return 0 !== (8454144 & this._target()._bitField) }, e.prototype.isPending = function() { return s.call(this._target()) }, e.prototype.isRejected = function() { return o.call(this._target()) }, e.prototype.isFulfilled = function() { return i.call(this._target()) }, e.prototype.isResolved = function() { return a.call(this._target()) }, e.prototype.value = function() { return n.call(this._target()) }, e.prototype.reason = function() { var e = this._target(); return e._unsetRejectionIsUnhandled(), r.call(e) }, e.prototype._value = function() { return this._settledValue() }, e.prototype._reason = function() { return this._unsetRejectionIsUnhandled(), this._settledValue() }, e.PromiseInspection = t } }, {}],
                        33: [function(e, t, n) { "use strict";
                            t.exports = function(t, n) {
                                function r(e, r) { if (l(e)) { if (e instanceof t) return e; var i = o(e); if (i === c) { r && r._pushContext(); var u = t.reject(i.e); return r && r._popContext(), u } if ("function" == typeof i) { if (s(e)) { var u = new t(n); return e._then(u._fulfill, u._reject, void 0, u, null), u } return a(e, i, r) } } return e }

                                function i(e) { return e.then }

                                function o(e) { try { return i(e) } catch (e) { return c.e = e, c } }

                                function s(e) { try { return f.call(e, "_promise0") } catch (e) { return !1 } }

                                function a(e, r, i) {
                                    function o(e) { a && (a._resolveCallback(e), a = null) }

                                    function s(e) { a && (a._rejectCallback(e, f, !0), a = null) } var a = new t(n),
                                        l = a;
                                    i && i._pushContext(), a._captureStackTrace(), i && i._popContext(); var f = !0,
                                        p = u.tryCatch(r).call(e, o, s); return f = !1, a && p === c && (a._rejectCallback(p.e, !0, !0), a = null), l } var u = e("./util"),
                                    c = u.errorObj,
                                    l = u.isObject,
                                    f = {}.hasOwnProperty; return r } }, { "./util": 36 }],
                        34: [function(e, t, n) { "use strict";
                            t.exports = function(t, n, r) {
                                function i(e) { this.handle = e }

                                function o(e) { return clearTimeout(this.handle), e }

                                function s(e) { throw clearTimeout(this.handle), e } var a = e("./util"),
                                    u = t.TimeoutError;
                                i.prototype._resultCancelled = function() { clearTimeout(this.handle) }; var c = function(e) { return l(+this).thenReturn(e) },
                                    l = t.delay = function(e, o) { var s, a; return void 0 !== o ? (s = t.resolve(o)._then(c, null, null, e, void 0), r.cancellation() && o instanceof t && s._setOnCancel(o)) : (s = new t(n), a = setTimeout(function() { s._fulfill() }, +e), r.cancellation() && s._setOnCancel(new i(a)), s._captureStackTrace()), s._setAsyncGuaranteed(), s };
                                t.prototype.delay = function(e) { return l(e, this) }; var f = function(e, t, n) { var r;
                                    r = "string" != typeof t ? t instanceof Error ? t : new u("operation timed out") : new u(t), a.markAsOriginatingFromRejection(r), e._attachExtraTrace(r), e._reject(r), null != n && n.cancel() };
                                t.prototype.timeout = function(e, t) { e = +e; var n, a, u = new i(setTimeout(function() { n.isPending() && f(n, t, a) }, e)); return r.cancellation() ? (a = this.then(), n = a._then(o, s, void 0, u, void 0), n._setOnCancel(u)) : n = this._then(o, s, void 0, u, void 0), n } } }, { "./util": 36 }],
                        35: [function(e, t, n) { "use strict";
                            t.exports = function(t, n, r, i, o, s) {
                                function a(e) { setTimeout(function() { throw e }, 0) }

                                function u(e) { var t = r(e); return t !== e && "function" == typeof e._isDisposable && "function" == typeof e._getDisposer && e._isDisposable() && t._setDisposable(e._getDisposer()), t }

                                function c(e, n) {
                                    function i() { if (s >= c) return l._fulfill(); var o = u(e[s++]); if (o instanceof t && o._isDisposable()) { try { o = r(o._getDisposer().tryDispose(n), e.promise) } catch (e) { return a(e) } if (o instanceof t) return o._then(i, a, null, null, null) }
                                        i() } var s = 0,
                                        c = e.length,
                                        l = new t(o); return i(), l }

                                function l(e, t, n) { this._data = e, this._promise = t, this._context = n }

                                function f(e, t, n) { this.constructor$(e, t, n) }

                                function p(e) { return l.isDisposer(e) ? (this.resources[this.index]._setDisposable(e), e.promise()) : e }

                                function d(e) { this.length = e, this.promise = null, this[e - 1] = null } var h = e("./util"),
                                    _ = e("./errors").TypeError,
                                    b = e("./util").inherits,
                                    m = h.errorObj,
                                    v = h.tryCatch,
                                    y = {};
                                l.prototype.data = function() { return this._data }, l.prototype.promise = function() { return this._promise }, l.prototype.resource = function() { return this.promise().isFulfilled() ? this.promise().value() : y }, l.prototype.tryDispose = function(e) { var t = this.resource(),
                                        n = this._context;
                                    void 0 !== n && n._pushContext(); var r = t !== y ? this.doDispose(t, e) : null; return void 0 !== n && n._popContext(), this._promise._unsetDisposable(), this._data = null, r }, l.isDisposer = function(e) { return null != e && "function" == typeof e.resource && "function" == typeof e.tryDispose }, b(f, l), f.prototype.doDispose = function(e, t) { var n = this.data(); return n.call(e, e, t) }, d.prototype._resultCancelled = function() { for (var e = this.length, n = 0; n < e; ++n) { var r = this[n];
                                        r instanceof t && r.cancel() } }, t.using = function() { var e = arguments.length; if (e < 2) return n("you must pass at least 2 arguments to Promise.using"); var i = arguments[e - 1]; if ("function" != typeof i) return n("expecting a function but got " + h.classString(i)); var o, a = !0;
                                    2 === e && Array.isArray(arguments[0]) ? (o = arguments[0], e = o.length, a = !1) : (o = arguments, e--); for (var u = new d(e), f = 0; f < e; ++f) { var _ = o[f]; if (l.isDisposer(_)) { var b = _;
                                            _ = _.promise(), _._setDisposable(b) } else { var y = r(_);
                                            y instanceof t && (_ = y._then(p, null, null, { resources: u, index: f }, void 0)) }
                                        u[f] = _ } for (var g = new Array(u.length), f = 0; f < g.length; ++f) g[f] = t.resolve(u[f]).reflect(); var k = t.all(g).then(function(e) { for (var t = 0; t < e.length; ++t) { var n = e[t]; if (n.isRejected()) return m.e = n.error(), m; if (!n.isFulfilled()) return void k.cancel();
                                                e[t] = n.value() }
                                            w._pushContext(), i = v(i); var r = a ? i.apply(void 0, e) : i(e),
                                                o = w._popContext(); return s.checkForgottenReturns(r, o, "Promise.using", w), r }),
                                        w = k.lastly(function() { var e = new t.PromiseInspection(k); return c(u, e) }); return u.promise = w, w._setOnCancel(u), w }, t.prototype._setDisposable = function(e) { this._bitField = 131072 | this._bitField, this._disposer = e }, t.prototype._isDisposable = function() { return (131072 & this._bitField) > 0 }, t.prototype._getDisposer = function() { return this._disposer }, t.prototype._unsetDisposable = function() { this._bitField = this._bitField & -131073, this._disposer = void 0 }, t.prototype.disposer = function(e) { if ("function" == typeof e) return new f(e, this, i()); throw new _ } } }, { "./errors": 12, "./util": 36 }],
                        36: [function(e, t, n) { "use strict";

                            function r() { try { var e = I; return I = null, e.apply(this, arguments) } catch (e) { return P.e = e, P } }

                            function s(e) { return I = e, r }

                            function a(e) { return null == e || e === !0 || e === !1 || "string" == typeof e || "number" == typeof e }

                            function u(e) { return "function" == typeof e || "object" == typeof e && null !== e }

                            function c(e) { return a(e) ? new Error(v(e)) : e }

                            function l(e, t) { var n, r = e.length,
                                    i = new Array(r + 1); for (n = 0; n < r; ++n) i[n] = e[n]; return i[n] = t, i }

                            function f(e, t, n) { if (!T.isES5) return {}.hasOwnProperty.call(e, t) ? e[t] : void 0; var r = Object.getOwnPropertyDescriptor(e, t); return null != r ? null == r.get && null == r.set ? r.value : n : void 0 }

                            function p(e, t, n) { if (a(e)) return e; var r = { value: n, configurable: !0, enumerable: !1, writable: !0 }; return T.defineProperty(e, t, r), e }

                            function d(e) { throw e }

                            function h(e) { try { if ("function" == typeof e) { var t = T.names(e.prototype),
                                            n = T.isES5 && t.length > 1,
                                            r = t.length > 0 && !(1 === t.length && "constructor" === t[0]),
                                            i = F.test(e + "") && T.names(e).length > 0; if (n || r || i) return !0 } return !1 } catch (e) { return !1 } }

                            function _(e) {
                                function t() {}
                                t.prototype = e; for (var n = 8; n--;) new t; return e }

                            function b(e) { return M.test(e) }

                            function m(e, t, n) { for (var r = new Array(e), i = 0; i < e; ++i) r[i] = t + i + n; return r }

                            function v(e) { try { return e + "" } catch (e) { return "[no string representation]" } }

                            function y(e) { return null !== e && "object" == typeof e && "string" == typeof e.message && "string" == typeof e.name }

                            function g(e) { try { p(e, "isOperational", !0) } catch (e) {} }

                            function k(e) { return null != e && (e instanceof Error.__BluebirdErrorTypes__.OperationalError || e.isOperational === !0) }

                            function w(e) { return y(e) && T.propertyIsWritable(e, "stack") }

                            function j(e) { return {}.toString.call(e) }

                            function C(e, t, n) { for (var r = T.names(e), i = 0; i < r.length; ++i) { var o = r[i]; if (n(o)) try { T.defineProperty(t, o, T.getDescriptor(e, o)) } catch (e) {} } }

                            function x(e, t) { return q ? i.env[e] : t }

                            function E() { if ("function" == typeof Promise) try { var e = new Promise(function() {}); if ("[object Promise]" === {}.toString.call(e)) return Promise } catch (e) {} }

                            function S(e, t) { return e.bind(t) } var T = e("./es5"),
                                R = "undefined" == typeof navigator,
                                P = { e: {} },
                                I, O = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof o ? o : void 0 !== this ? this : null,
                                A = function(e, t) {
                                    function n() { this.constructor = e, this.constructor$ = t; for (var n in t.prototype) r.call(t.prototype, n) && "$" !== n.charAt(n.length - 1) && (this[n + "$"] = t.prototype[n]) } var r = {}.hasOwnProperty; return n.prototype = t.prototype, e.prototype = new n, e.prototype },
                                N = function() { var e = [Array.prototype, Object.prototype, Function.prototype],
                                        t = function(t) { for (var n = 0; n < e.length; ++n)
                                                if (e[n] === t) return !0;
                                            return !1 }; if (T.isES5) { var n = Object.getOwnPropertyNames; return function(e) { for (var r = [], i = Object.create(null); null != e && !t(e);) { var o; try { o = n(e) } catch (e) { return r } for (var s = 0; s < o.length; ++s) { var a = o[s]; if (!i[a]) { i[a] = !0; var u = Object.getOwnPropertyDescriptor(e, a);
                                                        null != u && null == u.get && null == u.set && r.push(a) } }
                                                e = T.getPrototypeOf(e) } return r } } var r = {}.hasOwnProperty; return function(n) { if (t(n)) return []; var i = [];
                                        e: for (var o in n)
                                            if (r.call(n, o)) i.push(o);
                                            else { for (var s = 0; s < e.length; ++s)
                                                    if (r.call(e[s], o)) continue e;
                                                i.push(o) } return i } }(),
                                F = /this\s*\.\s*\S+\s*=/,
                                M = /^[a-z$_][a-z$_0-9]*$/i,
                                U = function() { return "stack" in new Error ? function(e) { return w(e) ? e : new Error(v(e)) } : function(e) { if (w(e)) return e; try { throw new Error(v(e)) } catch (e) { return e } } }(),
                                D = function(e) { return T.isArray(e) ? e : null }; if ("undefined" != typeof Symbol && Symbol.iterator) { var L = "function" == typeof Array.from ? function(e) { return Array.from(e) } : function(e) { for (var t, n = [], r = e[Symbol.iterator](); !(t = r.next()).done;) n.push(t.value); return n };
                                D = function(e) { return T.isArray(e) ? e : null != e && "function" == typeof e[Symbol.iterator] ? L(e) : null } } var q = "undefined" != typeof i && "[object process]" === j(i).toLowerCase(),
                                B = { isClass: h, isIdentifier: b, inheritedDataKeys: N, getDataPropertyOrDefault: f, thrower: d, isArray: T.isArray, asArray: D, notEnumerableProp: p, isPrimitive: a, isObject: u, isError: y, canEvaluate: R, errorObj: P, tryCatch: s, inherits: A, withAppended: l, maybeWrapAsError: c, toFastProperties: _, filledRange: m, toString: v, canAttachTrace: w, ensureErrorObject: U, originatesFromRejection: k, markAsOriginatingFromRejection: g, classString: j, copyDescriptors: C, hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes, isNode: q, env: x, global: O, getNativePromise: E, domainBind: S };
                            B.isRecentNode = B.isNode && function() { var e = i.versions.node.split(".").map(Number); return 0 === e[0] && e[1] > 10 || e[0] > 0 }(), B.isNode && B.toFastProperties(i); try { throw new Error } catch (e) { B.lastLineError = e }
                            t.exports = B }, { "./es5": 13 }]
                    }, {}, [4])(4)
                }), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise)
            }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { _process: 189 }],
        55: [function(e, t, n) {
            (function() { var n, r, i, o = function(e, t) { return function() { return e.apply(t, arguments) } },
                    s = [].slice;
                i = 10, r = 5, n = function() {
                    function t(e, n, r, i, s) { this.maxNb = null != e ? e : 0, this.minTime = null != n ? n : 0, this.highWater = null != r ? r : -1, this.strategy = null != i ? i : t.prototype.strategy.LEAK, this.rejectOnDrop = null != s && s, this.schedulePriority = o(this.schedulePriority, this), this.submitPriority = o(this.submitPriority, this), this.submit = o(this.submit, this), this._nextRequest = Date.now(), this._nbRunning = 0, this._queues = this._makeQueues(), this._running = {}, this._nextIndex = 0, this._unblockTime = 0, this.penalty = 15 * this.minTime || 5e3, this.interrupt = !1, this.reservoir = null, this.limiter = null, this.events = {} } var n; return t.strategy = t.prototype.strategy = { LEAK: 1, OVERFLOW: 2, OVERFLOW_PRIORITY: 4, BLOCK: 3 }, t.Cluster = t.prototype.Cluster = e("./Cluster"), t.DLList = t.prototype.DLList = e("./DLList"), t.Promise = t.prototype.Promise = function() { try { return e("bluebird") } catch (e) { return n = e, "undefined" != typeof Promise && null !== Promise ? Promise : function() { throw new Error("Bottleneck: install 'bluebird' or use Node 0.12 or higher for Promise support") } } }(), t.prototype._trigger = function(e, t) { return this.rejectOnDrop && "dropped" === e && t[0].cb.apply({}, [new Error("This job has been dropped by Bottleneck")]), setTimeout(function(n) { return function() { var r; return null != (r = n.events[e]) ? r.forEach(function(e) { return e.apply({}, t) }) : void 0 } }(this), 0) }, t.prototype._makeQueues = function() { var e, n, r, o; for (o = [], e = n = 1, r = i; 1 <= r ? n <= r : n >= r; e = 1 <= r ? ++n : --n) o.push(new t.prototype.DLList); return o }, t.prototype.chain = function(e) { return this.limiter = e, this }, t.prototype.isBlocked = function() { return this._unblockTime >= Date.now() }, t.prototype._sanitizePriority = function(e) { var t; return t = ~~e !== e ? r : e, t < 0 ? 0 : t > i - 1 ? i - 1 : t }, t.prototype._find = function(e, t) { var n, r, i, o; for (n = r = 0, i = e.length; r < i; n = ++r)
                            if (o = e[n], t(o)) return o;
                        return [] }, t.prototype.nbQueued = function(e) { return null != e ? this._queues[this._sanitizePriority(e)].length : this._queues.reduce(function(e, t) { return e + t.length }, 0) }, t.prototype.nbRunning = function() { return this._nbRunning }, t.prototype._getFirst = function(e) { return this._find(e, function(e) { return e.length > 0 }) }, t.prototype._conditionsCheck = function() { return (this.nbRunning() < this.maxNb || this.maxNb <= 0) && (null == this.reservoir || this.reservoir > 0) }, t.prototype.check = function() { return this._conditionsCheck() && this._nextRequest - Date.now() <= 0 }, t.prototype._tryToRun = function() { var e, t, n, r, i; return !!(this._conditionsCheck() && (r = this.nbQueued()) > 0) && (this._nbRunning++, null != this.reservoir && this.reservoir--, i = Math.max(this._nextRequest - Date.now(), 0), this._nextRequest = Date.now() + i + this.minTime, n = this._getFirst(this._queues).shift(), 1 === r && this._trigger("empty", []), e = !1, t = this._nextIndex++, this._running[t] = { timeout: setTimeout(function(r) { return function() { var i; return i = function() { var i; if (!e && (e = !0, delete r._running[t], r._nbRunning--, r._tryToRun(), 0 === r.nbRunning() && 0 === r.nbQueued() && r._trigger("idle", []), !r.interrupt)) return null != (i = n.cb) ? i.apply({}, Array.prototype.slice.call(arguments, 0)) : void 0 }, null != r.limiter ? r.limiter.submit.apply(r.limiter, Array.prototype.concat(n.task, n.args, i)) : n.task.apply({}, n.args.concat(i)) } }(this), i), job: n }, !0) }, t.prototype.submit = function() { var e; return e = 1 <= arguments.length ? s.call(arguments, 0) : [], this.submitPriority.apply({}, Array.prototype.concat(r, e)) }, t.prototype.submitPriority = function() { var e, n, r, i, o, a, u, c; return o = arguments[0], c = arguments[1], e = 4 <= arguments.length ? s.call(arguments, 2, r = arguments.length - 1) : (r = 2, []), n = arguments[r++], i = { task: c, args: e, cb: n }, o = this._sanitizePriority(o), a = this.highWater >= 0 && this.nbQueued() === this.highWater && !this.check(), this.strategy === t.prototype.strategy.BLOCK && (a || this.isBlocked()) ? (this._unblockTime = Date.now() + this.penalty, this._nextRequest = this._unblockTime + this.minTime, this._queues = this._makeQueues(), this._trigger("dropped", [i]), !0) : a && (u = this.strategy === t.prototype.strategy.LEAK ? this._getFirst(this._queues.slice(o).reverse()).shift() : this.strategy === t.prototype.strategy.OVERFLOW_PRIORITY ? this._getFirst(this._queues.slice(o + 1).reverse()).shift() : this.strategy === t.prototype.strategy.OVERFLOW ? i : void 0, null != u && this._trigger("dropped", [u]), null == u || this.strategy === t.prototype.strategy.OVERFLOW) ? a : (this._queues[o].push(i), this._tryToRun(), a) }, t.prototype.schedule = function() { var e; return e = 1 <= arguments.length ? s.call(arguments, 0) : [], this.schedulePriority.apply({}, Array.prototype.concat(r, e)) }, t.prototype.schedulePriority = function() { var e, n, r, i; return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? s.call(arguments, 2) : [], i = function(t) { return r.apply({}, e).then(function() { var e; return e = 1 <= arguments.length ? s.call(arguments, 0) : [], t.apply({}, Array.prototype.concat(null, e)) }).catch(function() { var e; return e = 1 <= arguments.length ? s.call(arguments, 0) : [], t.apply({}, e) }) }, new t.prototype.Promise(function(e) { return function(t, r) { return e.submitPriority.apply({}, Array.prototype.concat(n, i, function() { var e; return e = 1 <= arguments.length ? s.call(arguments, 0) : [], (null != e[0] ? r : (e.shift(), t)).apply({}, e) })) } }(this)) }, t.prototype.changeSettings = function(e, t, n, r, i) { for (this.maxNb = null != e ? e : this.maxNb, this.minTime = null != t ? t : this.minTime, this.highWater = null != n ? n : this.highWater, this.strategy = null != r ? r : this.strategy, this.rejectOnDrop = null != i ? i : this.rejectOnDrop; this._tryToRun();); return this }, t.prototype.changePenalty = function(e) { return this.penalty = null != e ? e : this.penalty, this }, t.prototype.changeReservoir = function(e) { for (this.reservoir = e; this._tryToRun();); return this }, t.prototype.incrementReservoir = function(e) { return null == e && (e = 0), this.changeReservoir(this.reservoir + e), this }, t.prototype.on = function(e, t) { return null != this.events[e] ? this.events[e].push(t) : this.events[e] = [t], this }, t.prototype.removeAllListeners = function(e) { return null == e && (e = null), null != e ? delete this.events[e] : this.events = {}, this }, t.prototype.stopAll = function(e) { var t, n, r, i, o, a, u; for (this.interrupt = null != e ? e : this.interrupt, i = Object.keys(this._running), t = 0, a = i.length; t < a; t++) r = i[t], clearTimeout(this._running[r].timeout); if (this._tryToRun = function() {}, this.check = function() { return !1 }, this.submit = this.submitPriority = function() { var e, t, n; return e = 2 <= arguments.length ? s.call(arguments, 0, n = arguments.length - 1) : (n = 0, []), (t = arguments[n++])(new Error("This limiter is stopped")) }, this.schedule = this.schedulePriority = function() { return Promise.reject(new Error("This limiter is stopped")) }, this.interrupt)
                            for (o = 0, u = i.length; o < u; o++) r = i[o], this._trigger("dropped", [this._running[r].job]); for (; n = this._getFirst(this._queues).shift();) this._trigger("dropped", [n]); return this._trigger("empty", []), 0 === this.nbRunning() && this._trigger("idle", []), this }, t }(), t.exports = n }).call(this) }, { "./Cluster": 56, "./DLList": 57, bluebird: 54 }],
        56: [function(e, t, n) {
            (function() { var n, r = {}.hasOwnProperty;
                n = function() {
                    function t(t, n, r, i, o) { this.maxNb = t, this.minTime = n, this.highWater = r, this.strategy = i, this.rejectOnDrop = o, this.limiters = {}, this.Bottleneck = e("./Bottleneck"), this.startAutoCleanup() } return t.prototype.key = function(e) { var t; return null == e && (e = ""), null != (t = this.limiters[e]) ? t : this.limiters[e] = new this.Bottleneck(this.maxNb, this.minTime, this.highWater, this.strategy, this.rejectOnDrop) }, t.prototype.deleteKey = function(e) { return null == e && (e = ""), delete this.limiters[e] }, t.prototype.all = function(e) { var t, n, i, o;
                        n = this.limiters, i = []; for (t in n) r.call(n, t) && (o = n[t], i.push(e(o))); return i }, t.prototype.keys = function() { return Object.keys(this.limiters) }, t.prototype.startAutoCleanup = function() { var e; return this.stopAutoCleanup(), "function" == typeof(e = this.interval = setInterval(function(e) { return function() { var t, n, r, i, o;
                                i = Date.now(), n = e.limiters, r = []; for (t in n) o = n[t], o._nextRequest + 3e5 < i ? r.push(e.deleteKey(t)) : r.push(void 0); return r } }(this), 3e4)).unref ? e.unref() : void 0 }, t.prototype.stopAutoCleanup = function() { return clearInterval(this.interval) }, t }(), t.exports = n }).call(this) }, { "./Bottleneck": 55 }],
        57: [function(e, t, n) {
            (function() { var e;
                e = function() {
                    function e() { this._first = null, this._last = null, this.length = 0 } return e.prototype.push = function(e) { var t;
                        this.length++, t = { value: e, next: null }, null != this._last ? (this._last.next = t, this._last = t) : this._first = this._last = t }, e.prototype.shift = function() { var e, t; if (null != this._first) return this.length--, t = this._first.value, this._first = null != (e = this._first.next) ? e : this._last = null, t }, e.prototype.getArray = function() { var e, t, n; for (e = this._first, n = []; null != e;) n.push((t = e, e = e.next, t.value)); return n }, e }(), t.exports = e }).call(this) }, {}],
        58: [function(e, t, n) {
            (function(n) {
                (function() { t.exports = e("./Bottleneck"), null != n.window && (n.window.Bottleneck = t.exports) }).call(this) }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { "./Bottleneck": 55 }],
        59: [function(e, t, n) {}, {}],
        60: [function(e, t, n) { e("../../modules/es6.string.iterator"), e("../../modules/es6.array.from"), t.exports = e("../../modules/_core").Array.from }, { "../../modules/_core": 91, "../../modules/es6.array.from": 159, "../../modules/es6.string.iterator": 173 }],
        61: [function(e, t, n) { e("../modules/web.dom.iterable"), e("../modules/es6.string.iterator"), t.exports = e("../modules/core.get-iterator") }, { "../modules/core.get-iterator": 157, "../modules/es6.string.iterator": 173, "../modules/web.dom.iterable": 179 }],
        62: [function(e, t, n) { e("../modules/web.dom.iterable"), e("../modules/es6.string.iterator"), t.exports = e("../modules/core.is-iterable") }, { "../modules/core.is-iterable": 158, "../modules/es6.string.iterator": 173, "../modules/web.dom.iterable": 179 }],
        63: [function(e, t, n) { var r = e("../../modules/_core"),
                i = r.JSON || (r.JSON = { stringify: JSON.stringify });
            t.exports = function(e) { return i.stringify.apply(i, arguments) } }, { "../../modules/_core": 91 }],
        64: [function(e, t, n) { e("../modules/es6.object.to-string"), e("../modules/es6.string.iterator"), e("../modules/web.dom.iterable"), e("../modules/es6.map"), e("../modules/es7.map.to-json"), t.exports = e("../modules/_core").Map }, { "../modules/_core": 91, "../modules/es6.map": 161, "../modules/es6.object.to-string": 170, "../modules/es6.string.iterator": 173, "../modules/es7.map.to-json": 175, "../modules/web.dom.iterable": 179 }],
        65: [function(e, t, n) { e("../../modules/es6.object.assign"), t.exports = e("../../modules/_core").Object.assign }, { "../../modules/_core": 91, "../../modules/es6.object.assign": 162 }],
        66: [function(e, t, n) { e("../../modules/es6.object.create"); var r = e("../../modules/_core").Object;
            t.exports = function(e, t) { return r.create(e, t) } }, { "../../modules/_core": 91, "../../modules/es6.object.create": 163 }],
        67: [function(e, t, n) { e("../../modules/es6.object.define-properties"); var r = e("../../modules/_core").Object;
            t.exports = function(e, t) { return r.defineProperties(e, t) } }, { "../../modules/_core": 91, "../../modules/es6.object.define-properties": 164 }],
        68: [function(e, t, n) { e("../../modules/es6.object.define-property"); var r = e("../../modules/_core").Object;
            t.exports = function(e, t, n) { return r.defineProperty(e, t, n) } }, { "../../modules/_core": 91, "../../modules/es6.object.define-property": 165 }],
        69: [function(e, t, n) { e("../../modules/es6.object.freeze"), t.exports = e("../../modules/_core").Object.freeze }, { "../../modules/_core": 91, "../../modules/es6.object.freeze": 166 }],
        70: [function(e, t, n) { e("../../modules/es6.object.get-prototype-of"), t.exports = e("../../modules/_core").Object.getPrototypeOf }, { "../../modules/_core": 91, "../../modules/es6.object.get-prototype-of": 167 }],
        71: [function(e, t, n) { e("../../modules/es6.object.keys"), t.exports = e("../../modules/_core").Object.keys }, { "../../modules/_core": 91, "../../modules/es6.object.keys": 168 }],
        72: [function(e, t, n) { e("../../modules/es6.object.set-prototype-of"), t.exports = e("../../modules/_core").Object.setPrototypeOf }, { "../../modules/_core": 91, "../../modules/es6.object.set-prototype-of": 169 }],
        73: [function(e, t, n) { e("../modules/es6.object.to-string"), e("../modules/es6.string.iterator"), e("../modules/web.dom.iterable"), e("../modules/es6.promise"), t.exports = e("../modules/_core").Promise }, { "../modules/_core": 91, "../modules/es6.object.to-string": 170, "../modules/es6.promise": 171, "../modules/es6.string.iterator": 173, "../modules/web.dom.iterable": 179 }],
        74: [function(e, t, n) { e("../modules/es6.object.to-string"), e("../modules/es6.string.iterator"), e("../modules/web.dom.iterable"), e("../modules/es6.set"), e("../modules/es7.set.to-json"), t.exports = e("../modules/_core").Set }, { "../modules/_core": 91, "../modules/es6.object.to-string": 170, "../modules/es6.set": 172, "../modules/es6.string.iterator": 173, "../modules/es7.set.to-json": 176, "../modules/web.dom.iterable": 179 }],
        75: [function(e, t, n) { e("../../modules/es6.symbol"), e("../../modules/es6.object.to-string"), e("../../modules/es7.symbol.async-iterator"), e("../../modules/es7.symbol.observable"), t.exports = e("../../modules/_core").Symbol }, { "../../modules/_core": 91, "../../modules/es6.object.to-string": 170, "../../modules/es6.symbol": 174, "../../modules/es7.symbol.async-iterator": 177, "../../modules/es7.symbol.observable": 178 }],
        76: [function(e, t, n) { e("../../modules/es6.string.iterator"), e("../../modules/web.dom.iterable"), t.exports = e("../../modules/_wks-ext").f("iterator") }, { "../../modules/_wks-ext": 154, "../../modules/es6.string.iterator": 173, "../../modules/web.dom.iterable": 179 }],
        77: [function(e, t, n) { t.exports = function(e) { if ("function" != typeof e) throw TypeError(e + " is not a function!"); return e } }, {}],
        78: [function(e, t, n) { t.exports = function() {} }, {}],
        79: [function(e, t, n) { t.exports = function(e, t, n, r) { if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!"); return e } }, {}],
        80: [function(e, t, n) { var r = e("./_is-object");
            t.exports = function(e) { if (!r(e)) throw TypeError(e + " is not an object!"); return e } }, { "./_is-object": 111 }],
        81: [function(e, t, n) { var r = e("./_for-of");
            t.exports = function(e, t) { var n = []; return r(e, !1, n.push, n, t), n } }, { "./_for-of": 101 }],
        82: [function(e, t, n) { var r = e("./_to-iobject"),
                i = e("./_to-length"),
                o = e("./_to-index");
            t.exports = function(e) { return function(t, n, s) { var a, u = r(t),
                        c = i(u.length),
                        l = o(s, c); if (e && n != n) { for (; c > l;)
                            if (a = u[l++], a != a) return !0 } else
                        for (; c > l; l++)
                            if ((e || l in u) && u[l] === n) return e || l || 0; return !e && -1 } } }, { "./_to-index": 146, "./_to-iobject": 148, "./_to-length": 149 }],
        83: [function(e, t, n) { var r = e("./_ctx"),
                i = e("./_iobject"),
                o = e("./_to-object"),
                s = e("./_to-length"),
                a = e("./_array-species-create");
            t.exports = function(e, t) { var n = 1 == e,
                    u = 2 == e,
                    c = 3 == e,
                    l = 4 == e,
                    f = 6 == e,
                    p = 5 == e || f,
                    d = t || a; return function(t, a, h) { for (var _, b, m = o(t), v = i(m), y = r(a, h, 3), g = s(v.length), k = 0, w = n ? d(t, g) : u ? d(t, 0) : void 0; g > k; k++)
                        if ((p || k in v) && (_ = v[k], b = y(_, k, m), e))
                            if (n) w[k] = b;
                            else if (b) switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return _;
                        case 6:
                            return k;
                        case 2:
                            w.push(_) } else if (l) return !1;
                    return f ? -1 : c || l ? l : w } } }, { "./_array-species-create": 85, "./_ctx": 93, "./_iobject": 108, "./_to-length": 149, "./_to-object": 150 }],
        84: [function(e, t, n) { var r = e("./_is-object"),
                i = e("./_is-array"),
                o = e("./_wks")("species");
            t.exports = function(e) { var t; return i(e) && (t = e.constructor, "function" != typeof t || t !== Array && !i(t.prototype) || (t = void 0), r(t) && (t = t[o], null === t && (t = void 0))), void 0 === t ? Array : t } }, { "./_is-array": 110, "./_is-object": 111, "./_wks": 155 }],
        85: [function(e, t, n) { var r = e("./_array-species-constructor");
            t.exports = function(e, t) { return new(r(e))(t) } }, { "./_array-species-constructor": 84 }],
        86: [function(e, t, n) { var r = e("./_cof"),
                i = e("./_wks")("toStringTag"),
                o = "Arguments" == r(function() { return arguments }()),
                s = function(e, t) { try { return e[t] } catch (e) {} };
            t.exports = function(e) { var t, n, a; return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = s(t = Object(e), i)) ? n : o ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a } }, { "./_cof": 87, "./_wks": 155 }],
        87: [function(e, t, n) { var r = {}.toString;
            t.exports = function(e) { return r.call(e).slice(8, -1) } }, {}],
        88: [function(e, t, n) { "use strict"; var r = e("./_object-dp").f,
                i = e("./_object-create"),
                o = e("./_redefine-all"),
                s = e("./_ctx"),
                a = e("./_an-instance"),
                u = e("./_defined"),
                c = e("./_for-of"),
                l = e("./_iter-define"),
                f = e("./_iter-step"),
                p = e("./_set-species"),
                d = e("./_descriptors"),
                h = e("./_meta").fastKey,
                _ = d ? "_s" : "size",
                b = function(e, t) { var n, r = h(t); if ("F" !== r) return e._i[r]; for (n = e._f; n; n = n.n)
                        if (n.k == t) return n };
            t.exports = { getConstructor: function(e, t, n, l) { var f = e(function(e, r) { a(e, f, t, "_i"), e._i = i(null), e._f = void 0, e._l = void 0, e[_] = 0, void 0 != r && c(r, n, e[l], e) }); return o(f.prototype, { clear: function() { for (var e = this, t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
                            e._f = e._l = void 0, e[_] = 0 }, delete: function(e) { var t = this,
                                n = b(t, e); if (n) { var r = n.n,
                                    i = n.p;
                                delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), t._l == n && (t._l = i), t[_]-- } return !!n }, forEach: function(e) { a(this, f, "forEach"); for (var t, n = s(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.n : this._f;)
                                for (n(t.v, t.k, this); t && t.r;) t = t.p }, has: function(e) { return !!b(this, e) } }), d && r(f.prototype, "size", { get: function() { return u(this[_]) } }), f }, def: function(e, t, n) { var r, i, o = b(e, t); return o ? o.v = n : (e._l = o = { i: i = h(t, !0), k: t, v: n, p: r = e._l, n: void 0, r: !1 }, e._f || (e._f = o), r && (r.n = o), e[_]++, "F" !== i && (e._i[i] = o)), e }, getEntry: b, setStrong: function(e, t, n) { l(e, t, function(e, t) { this._t = e, this._k = t, this._l = void 0 }, function() { for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p; return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? f(0, n.k) : "values" == t ? f(0, n.v) : f(0, [n.k, n.v]) : (e._t = void 0, f(1)) }, n ? "entries" : "values", !n, !0), p(t) } } }, { "./_an-instance": 79, "./_ctx": 93, "./_defined": 94, "./_descriptors": 95, "./_for-of": 101, "./_iter-define": 114, "./_iter-step": 116, "./_meta": 120, "./_object-create": 123, "./_object-dp": 124, "./_redefine-all": 136, "./_set-species": 139 }],
        89: [function(e, t, n) { var r = e("./_classof"),
                i = e("./_array-from-iterable");
            t.exports = function(e) { return function() { if (r(this) != e) throw TypeError(e + "#toJSON isn't generic"); return i(this) } } }, { "./_array-from-iterable": 81, "./_classof": 86 }],
        90: [function(e, t, n) {
            "use strict";
            var r = e("./_global"),
                i = e("./_export"),
                o = e("./_meta"),
                s = e("./_fails"),
                a = e("./_hide"),
                u = e("./_redefine-all"),
                c = e("./_for-of"),
                l = e("./_an-instance"),
                f = e("./_is-object"),
                p = e("./_set-to-string-tag"),
                d = e("./_object-dp").f,
                h = e("./_array-methods")(0),
                _ = e("./_descriptors");
            t.exports = function(e, t, n, b, m, v) {
                var y = r[e],
                    g = y,
                    k = m ? "set" : "add",
                    w = g && g.prototype,
                    j = {};
                return _ && "function" == typeof g && (v || w.forEach && !s(function() {
                    (new g).entries().next() })) ? (g = t(function(t, n) { l(t, g, e, "_c"), t._c = new y, void 0 != n && c(n, m, t[k], t) }), h("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
                    var t = "add" == e || "set" == e;
                    e in w && (!v || "clear" != e) && a(g.prototype, e, function(n, r) { if (l(this, g, e), !t && v && !f(n)) return "get" == e && void 0; var i = this._c[e](0 === n ? 0 : n, r); return t ? this : i })
                }), "size" in w && d(g.prototype, "size", { get: function() { return this._c.size } })) : (g = b.getConstructor(t, e, m, k), u(g.prototype, n), o.NEED = !0), p(g, e), j[e] = g, i(i.G + i.W + i.F, j), v || b.setStrong(g, e, m), g
            }
        }, { "./_an-instance": 79, "./_array-methods": 83, "./_descriptors": 95, "./_export": 99, "./_fails": 100, "./_for-of": 101, "./_global": 102, "./_hide": 104, "./_is-object": 111, "./_meta": 120, "./_object-dp": 124, "./_redefine-all": 136, "./_set-to-string-tag": 140 }],
        91: [function(e, t, n) { var r = t.exports = { version: "2.4.0" }; "number" == typeof __e && (__e = r) }, {}],
        92: [function(e, t, n) { "use strict"; var r = e("./_object-dp"),
                i = e("./_property-desc");
            t.exports = function(e, t, n) { t in e ? r.f(e, t, i(0, n)) : e[t] = n } }, { "./_object-dp": 124, "./_property-desc": 135 }],
        93: [function(e, t, n) { var r = e("./_a-function");
            t.exports = function(e, t, n) { if (r(e), void 0 === t) return e; switch (n) {
                    case 1:
                        return function(n) { return e.call(t, n) };
                    case 2:
                        return function(n, r) { return e.call(t, n, r) };
                    case 3:
                        return function(n, r, i) { return e.call(t, n, r, i) } } return function() { return e.apply(t, arguments) } } }, { "./_a-function": 77 }],
        94: [function(e, t, n) { t.exports = function(e) { if (void 0 == e) throw TypeError("Can't call method on  " + e); return e } }, {}],
        95: [function(e, t, n) { t.exports = !e("./_fails")(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, { "./_fails": 100 }],
        96: [function(e, t, n) { var r = e("./_is-object"),
                i = e("./_global").document,
                o = r(i) && r(i.createElement);
            t.exports = function(e) { return o ? i.createElement(e) : {} } }, { "./_global": 102, "./_is-object": 111 }],
        97: [function(e, t, n) { t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, {}],
        98: [function(e, t, n) { var r = e("./_object-keys"),
                i = e("./_object-gops"),
                o = e("./_object-pie");
            t.exports = function(e) { var t = r(e),
                    n = i.f; if (n)
                    for (var s, a = n(e), u = o.f, c = 0; a.length > c;) u.call(e, s = a[c++]) && t.push(s); return t } }, { "./_object-gops": 129, "./_object-keys": 132, "./_object-pie": 133 }],
        99: [function(e, t, n) { var r = e("./_global"),
                i = e("./_core"),
                o = e("./_ctx"),
                s = e("./_hide"),
                a = "prototype",
                u = function(e, t, n) { var c, l, f, p = e & u.F,
                        d = e & u.G,
                        h = e & u.S,
                        _ = e & u.P,
                        b = e & u.B,
                        m = e & u.W,
                        v = d ? i : i[t] || (i[t] = {}),
                        y = v[a],
                        g = d ? r : h ? r[t] : (r[t] || {})[a];
                    d && (n = t); for (c in n) l = !p && g && void 0 !== g[c], l && c in v || (f = l ? g[c] : n[c], v[c] = d && "function" != typeof g[c] ? n[c] : b && l ? o(f, r) : m && g[c] == f ? function(e) { var t = function(t, n, r) { if (this instanceof e) { switch (arguments.length) {
                                    case 0:
                                        return new e;
                                    case 1:
                                        return new e(t);
                                    case 2:
                                        return new e(t, n) } return new e(t, n, r) } return e.apply(this, arguments) }; return t[a] = e[a], t }(f) : _ && "function" == typeof f ? o(Function.call, f) : f, _ && ((v.virtual || (v.virtual = {}))[c] = f, e & u.R && y && !y[c] && s(y, c, f))) };
            u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u }, { "./_core": 91, "./_ctx": 93, "./_global": 102, "./_hide": 104 }],
        100: [function(e, t, n) { t.exports = function(e) { try { return !!e() } catch (e) { return !0 } } }, {}],
        101: [function(e, t, n) { var r = e("./_ctx"),
                i = e("./_iter-call"),
                o = e("./_is-array-iter"),
                s = e("./_an-object"),
                a = e("./_to-length"),
                u = e("./core.get-iterator-method"),
                c = {},
                l = {},
                n = t.exports = function(e, t, n, f, p) { var d, h, _, b, m = p ? function() { return e } : u(e),
                        v = r(n, f, t ? 2 : 1),
                        y = 0; if ("function" != typeof m) throw TypeError(e + " is not iterable!"); if (o(m)) { for (d = a(e.length); d > y; y++)
                            if (b = t ? v(s(h = e[y])[0], h[1]) : v(e[y]), b === c || b === l) return b } else
                        for (_ = m.call(e); !(h = _.next()).done;)
                            if (b = i(_, v, h.value, t), b === c || b === l) return b };
            n.BREAK = c, n.RETURN = l }, { "./_an-object": 80, "./_ctx": 93, "./_is-array-iter": 109, "./_iter-call": 112, "./_to-length": 149, "./core.get-iterator-method": 156 }],
        102: [function(e, t, n) { var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = r) }, {}],
        103: [function(e, t, n) { var r = {}.hasOwnProperty;
            t.exports = function(e, t) { return r.call(e, t) } }, {}],
        104: [function(e, t, n) { var r = e("./_object-dp"),
                i = e("./_property-desc");
            t.exports = e("./_descriptors") ? function(e, t, n) { return r.f(e, t, i(1, n)) } : function(e, t, n) { return e[t] = n, e } }, { "./_descriptors": 95, "./_object-dp": 124, "./_property-desc": 135 }],
        105: [function(e, t, n) { t.exports = e("./_global").document && document.documentElement }, { "./_global": 102 }],
        106: [function(e, t, n) { t.exports = !e("./_descriptors") && !e("./_fails")(function() { return 7 != Object.defineProperty(e("./_dom-create")("div"), "a", { get: function() { return 7 } }).a }) }, { "./_descriptors": 95, "./_dom-create": 96, "./_fails": 100 }],
        107: [function(e, t, n) { t.exports = function(e, t, n) { var r = void 0 === n; switch (t.length) {
                    case 0:
                        return r ? e() : e.call(n);
                    case 1:
                        return r ? e(t[0]) : e.call(n, t[0]);
                    case 2:
                        return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                    case 3:
                        return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                    case 4:
                        return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]) } return e.apply(n, t) } }, {}],
        108: [function(e, t, n) { var r = e("./_cof");
            t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) { return "String" == r(e) ? e.split("") : Object(e) } }, { "./_cof": 87 }],
        109: [function(e, t, n) { var r = e("./_iterators"),
                i = e("./_wks")("iterator"),
                o = Array.prototype;
            t.exports = function(e) { return void 0 !== e && (r.Array === e || o[i] === e) } }, { "./_iterators": 117, "./_wks": 155 }],
        110: [function(e, t, n) { var r = e("./_cof");
            t.exports = Array.isArray || function(e) { return "Array" == r(e) } }, { "./_cof": 87 }],
        111: [function(e, t, n) { t.exports = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e } }, {}],
        112: [function(e, t, n) { var r = e("./_an-object");
            t.exports = function(e, t, n, i) { try { return i ? t(r(n)[0], n[1]) : t(n) } catch (t) { var o = e.return; throw void 0 !== o && r(o.call(e)), t } } }, { "./_an-object": 80 }],
        113: [function(e, t, n) { "use strict"; var r = e("./_object-create"),
                i = e("./_property-desc"),
                o = e("./_set-to-string-tag"),
                s = {};
            e("./_hide")(s, e("./_wks")("iterator"), function() { return this }), t.exports = function(e, t, n) { e.prototype = r(s, { next: i(1, n) }), o(e, t + " Iterator") } }, { "./_hide": 104, "./_object-create": 123, "./_property-desc": 135, "./_set-to-string-tag": 140, "./_wks": 155 }],
        114: [function(e, t, n) { "use strict"; var r = e("./_library"),
                i = e("./_export"),
                o = e("./_redefine"),
                s = e("./_hide"),
                a = e("./_has"),
                u = e("./_iterators"),
                c = e("./_iter-create"),
                l = e("./_set-to-string-tag"),
                f = e("./_object-gpo"),
                p = e("./_wks")("iterator"),
                d = !([].keys && "next" in [].keys()),
                h = "@@iterator",
                _ = "keys",
                b = "values",
                m = function() { return this };
            t.exports = function(e, t, n, v, y, g, k) { c(n, t, v); var w, j, C, x = function(e) { if (!d && e in R) return R[e]; switch (e) {
                            case _:
                                return function() { return new n(this, e) };
                            case b:
                                return function() { return new n(this, e) } } return function() { return new n(this, e) } },
                    E = t + " Iterator",
                    S = y == b,
                    T = !1,
                    R = e.prototype,
                    P = R[p] || R[h] || y && R[y],
                    I = P || x(y),
                    O = y ? S ? x("entries") : I : void 0,
                    A = "Array" == t ? R.entries || P : P; if (A && (C = f(A.call(new e)), C !== Object.prototype && (l(C, E, !0), r || a(C, p) || s(C, p, m))), S && P && P.name !== b && (T = !0, I = function() { return P.call(this) }), r && !k || !d && !T && R[p] || s(R, p, I), u[t] = I, u[E] = m, y)
                    if (w = { values: S ? I : x(b), keys: g ? I : x(_), entries: O }, k)
                        for (j in w) j in R || o(R, j, w[j]);
                    else i(i.P + i.F * (d || T), t, w);
                return w } }, { "./_export": 99, "./_has": 103, "./_hide": 104, "./_iter-create": 113, "./_iterators": 117, "./_library": 119, "./_object-gpo": 130, "./_redefine": 137, "./_set-to-string-tag": 140, "./_wks": 155 }],
        115: [function(e, t, n) { var r = e("./_wks")("iterator"),
                i = !1; try { var o = [7][r]();
                o.return = function() { i = !0 }, Array.from(o, function() { throw 2 }) } catch (e) {}
            t.exports = function(e, t) { if (!t && !i) return !1; var n = !1; try { var o = [7],
                        s = o[r]();
                    s.next = function() { return { done: n = !0 } }, o[r] = function() { return s }, e(o) } catch (e) {} return n } }, { "./_wks": 155 }],
        116: [function(e, t, n) { t.exports = function(e, t) { return { value: t, done: !!e } } }, {}],
        117: [function(e, t, n) { t.exports = {} }, {}],
        118: [function(e, t, n) { var r = e("./_object-keys"),
                i = e("./_to-iobject");
            t.exports = function(e, t) { for (var n, o = i(e), s = r(o), a = s.length, u = 0; a > u;)
                    if (o[n = s[u++]] === t) return n } }, { "./_object-keys": 132, "./_to-iobject": 148 }],
        119: [function(e, t, n) { t.exports = !0 }, {}],
        120: [function(e, t, n) { var r = e("./_uid")("meta"),
                i = e("./_is-object"),
                o = e("./_has"),
                s = e("./_object-dp").f,
                a = 0,
                u = Object.isExtensible || function() { return !0 },
                c = !e("./_fails")(function() { return u(Object.preventExtensions({})) }),
                l = function(e) { s(e, r, { value: { i: "O" + ++a, w: {} } }) },
                f = function(e, t) { if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e; if (!o(e, r)) { if (!u(e)) return "F"; if (!t) return "E";
                        l(e) } return e[r].i },
                p = function(e, t) { if (!o(e, r)) { if (!u(e)) return !0; if (!t) return !1;
                        l(e) } return e[r].w },
                d = function(e) { return c && h.NEED && u(e) && !o(e, r) && l(e), e },
                h = t.exports = { KEY: r, NEED: !1, fastKey: f, getWeak: p, onFreeze: d } }, { "./_fails": 100, "./_has": 103, "./_is-object": 111, "./_object-dp": 124, "./_uid": 152 }],
        121: [function(e, t, n) { var r = e("./_global"),
                i = e("./_task").set,
                o = r.MutationObserver || r.WebKitMutationObserver,
                s = r.process,
                a = r.Promise,
                u = "process" == e("./_cof")(s);
            t.exports = function() { var e, t, n, c = function() { var r, i; for (u && (r = s.domain) && r.exit(); e;) { i = e.fn, e = e.next; try { i() } catch (r) { throw e ? n() : t = void 0, r } }
                    t = void 0, r && r.enter() }; if (u) n = function() { s.nextTick(c) };
                else if (o) { var l = !0,
                        f = document.createTextNode("");
                    new o(c).observe(f, { characterData: !0 }), n = function() { f.data = l = !l } } else if (a && a.resolve) { var p = a.resolve();
                    n = function() { p.then(c) } } else n = function() { i.call(r, c) }; return function(r) { var i = { fn: r, next: void 0 };
                    t && (t.next = i), e || (e = i, n()), t = i } } }, { "./_cof": 87, "./_global": 102, "./_task": 145 }],
        122: [function(e, t, n) { "use strict"; var r = e("./_object-keys"),
                i = e("./_object-gops"),
                o = e("./_object-pie"),
                s = e("./_to-object"),
                a = e("./_iobject"),
                u = Object.assign;
            t.exports = !u || e("./_fails")(function() { var e = {},
                    t = {},
                    n = Symbol(),
                    r = "abcdefghijklmnopqrst"; return e[n] = 7, r.split("").forEach(function(e) { t[e] = e }), 7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r }) ? function(e, t) { for (var n = s(e), u = arguments.length, c = 1, l = i.f, f = o.f; u > c;)
                    for (var p, d = a(arguments[c++]), h = l ? r(d).concat(l(d)) : r(d), _ = h.length, b = 0; _ > b;) f.call(d, p = h[b++]) && (n[p] = d[p]); return n } : u }, { "./_fails": 100, "./_iobject": 108, "./_object-gops": 129, "./_object-keys": 132, "./_object-pie": 133, "./_to-object": 150 }],
        123: [function(e, t, n) { var r = e("./_an-object"),
                i = e("./_object-dps"),
                o = e("./_enum-bug-keys"),
                s = e("./_shared-key")("IE_PROTO"),
                a = function() {},
                u = "prototype",
                c = function() { var t, n = e("./_dom-create")("iframe"),
                        r = o.length,
                        i = "<",
                        s = ">"; for (n.style.display = "none", e("./_html").appendChild(n), n.src = "javascript:", t = n.contentWindow.document, t.open(), t.write(i + "script" + s + "document.F=Object" + i + "/script" + s), t.close(), c = t.F; r--;) delete c[u][o[r]]; return c() };
            t.exports = Object.create || function(e, t) { var n; return null !== e ? (a[u] = r(e), n = new a, a[u] = null, n[s] = e) : n = c(), void 0 === t ? n : i(n, t) } }, { "./_an-object": 80, "./_dom-create": 96, "./_enum-bug-keys": 97, "./_html": 105, "./_object-dps": 125, "./_shared-key": 141 }],
        124: [function(e, t, n) { var r = e("./_an-object"),
                i = e("./_ie8-dom-define"),
                o = e("./_to-primitive"),
                s = Object.defineProperty;
            n.f = e("./_descriptors") ? Object.defineProperty : function(e, t, n) { if (r(e), t = o(t, !0), r(n), i) try { return s(e, t, n) } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!"); return "value" in n && (e[t] = n.value), e } }, { "./_an-object": 80, "./_descriptors": 95, "./_ie8-dom-define": 106, "./_to-primitive": 151 }],
        125: [function(e, t, n) { var r = e("./_object-dp"),
                i = e("./_an-object"),
                o = e("./_object-keys");
            t.exports = e("./_descriptors") ? Object.defineProperties : function(e, t) { i(e); for (var n, s = o(t), a = s.length, u = 0; a > u;) r.f(e, n = s[u++], t[n]); return e } }, { "./_an-object": 80, "./_descriptors": 95, "./_object-dp": 124, "./_object-keys": 132 }],
        126: [function(e, t, n) { var r = e("./_object-pie"),
                i = e("./_property-desc"),
                o = e("./_to-iobject"),
                s = e("./_to-primitive"),
                a = e("./_has"),
                u = e("./_ie8-dom-define"),
                c = Object.getOwnPropertyDescriptor;
            n.f = e("./_descriptors") ? c : function(e, t) { if (e = o(e), t = s(t, !0), u) try { return c(e, t) } catch (e) {}
                if (a(e, t)) return i(!r.f.call(e, t), e[t]) } }, { "./_descriptors": 95, "./_has": 103, "./_ie8-dom-define": 106, "./_object-pie": 133, "./_property-desc": 135, "./_to-iobject": 148, "./_to-primitive": 151 }],
        127: [function(e, t, n) { var r = e("./_to-iobject"),
                i = e("./_object-gopn").f,
                o = {}.toString,
                s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                a = function(e) { try { return i(e) } catch (e) { return s.slice() } };
            t.exports.f = function(e) { return s && "[object Window]" == o.call(e) ? a(e) : i(r(e)) } }, { "./_object-gopn": 128, "./_to-iobject": 148 }],
        128: [function(e, t, n) { var r = e("./_object-keys-internal"),
                i = e("./_enum-bug-keys").concat("length", "prototype");
            n.f = Object.getOwnPropertyNames || function(e) { return r(e, i) } }, { "./_enum-bug-keys": 97, "./_object-keys-internal": 131 }],
        129: [function(e, t, n) { n.f = Object.getOwnPropertySymbols }, {}],
        130: [function(e, t, n) { var r = e("./_has"),
                i = e("./_to-object"),
                o = e("./_shared-key")("IE_PROTO"),
                s = Object.prototype;
            t.exports = Object.getPrototypeOf || function(e) { return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null } }, { "./_has": 103, "./_shared-key": 141, "./_to-object": 150 }],
        131: [function(e, t, n) { var r = e("./_has"),
                i = e("./_to-iobject"),
                o = e("./_array-includes")(!1),
                s = e("./_shared-key")("IE_PROTO");
            t.exports = function(e, t) { var n, a = i(e),
                    u = 0,
                    c = []; for (n in a) n != s && r(a, n) && c.push(n); for (; t.length > u;) r(a, n = t[u++]) && (~o(c, n) || c.push(n)); return c } }, { "./_array-includes": 82, "./_has": 103, "./_shared-key": 141, "./_to-iobject": 148 }],
        132: [function(e, t, n) { var r = e("./_object-keys-internal"),
                i = e("./_enum-bug-keys");
            t.exports = Object.keys || function(e) { return r(e, i) } }, { "./_enum-bug-keys": 97, "./_object-keys-internal": 131 }],
        133: [function(e, t, n) { n.f = {}.propertyIsEnumerable }, {}],
        134: [function(e, t, n) { var r = e("./_export"),
                i = e("./_core"),
                o = e("./_fails");
            t.exports = function(e, t) { var n = (i.Object || {})[e] || Object[e],
                    s = {};
                s[e] = t(n), r(r.S + r.F * o(function() { n(1) }), "Object", s) } }, { "./_core": 91, "./_export": 99, "./_fails": 100 }],
        135: [function(e, t, n) { t.exports = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } }, {}],
        136: [function(e, t, n) { var r = e("./_hide");
            t.exports = function(e, t, n) { for (var i in t) n && e[i] ? e[i] = t[i] : r(e, i, t[i]); return e } }, { "./_hide": 104 }],
        137: [function(e, t, n) { t.exports = e("./_hide") }, { "./_hide": 104 }],
        138: [function(e, t, n) { var r = e("./_is-object"),
                i = e("./_an-object"),
                o = function(e, t) { if (i(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!") };
            t.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, n, r) { try { r = e("./_ctx")(Function.call, e("./_object-gopd").f(Object.prototype, "__proto__").set, 2), r(t, []), n = !(t instanceof Array) } catch (e) { n = !0 } return function(e, t) { return o(e, t), n ? e.__proto__ = t : r(e, t), e } }({}, !1) : void 0), check: o } }, { "./_an-object": 80, "./_ctx": 93, "./_is-object": 111, "./_object-gopd": 126 }],
        139: [function(e, t, n) { "use strict"; var r = e("./_global"),
                i = e("./_core"),
                o = e("./_object-dp"),
                s = e("./_descriptors"),
                a = e("./_wks")("species");
            t.exports = function(e) { var t = "function" == typeof i[e] ? i[e] : r[e];
                s && t && !t[a] && o.f(t, a, { configurable: !0, get: function() { return this } }) } }, { "./_core": 91, "./_descriptors": 95, "./_global": 102, "./_object-dp": 124, "./_wks": 155 }],
        140: [function(e, t, n) { var r = e("./_object-dp").f,
                i = e("./_has"),
                o = e("./_wks")("toStringTag");
            t.exports = function(e, t, n) { e && !i(e = n ? e : e.prototype, o) && r(e, o, { configurable: !0, value: t }) } }, { "./_has": 103, "./_object-dp": 124, "./_wks": 155 }],
        141: [function(e, t, n) { var r = e("./_shared")("keys"),
                i = e("./_uid");
            t.exports = function(e) { return r[e] || (r[e] = i(e)) } }, { "./_shared": 142, "./_uid": 152 }],
        142: [function(e, t, n) { var r = e("./_global"),
                i = "__core-js_shared__",
                o = r[i] || (r[i] = {});
            t.exports = function(e) { return o[e] || (o[e] = {}) } }, { "./_global": 102 }],
        143: [function(e, t, n) { var r = e("./_an-object"),
                i = e("./_a-function"),
                o = e("./_wks")("species");
            t.exports = function(e, t) { var n, s = r(e).constructor; return void 0 === s || void 0 == (n = r(s)[o]) ? t : i(n) } }, { "./_a-function": 77, "./_an-object": 80, "./_wks": 155 }],
        144: [function(e, t, n) { var r = e("./_to-integer"),
                i = e("./_defined");
            t.exports = function(e) { return function(t, n) { var o, s, a = String(i(t)),
                        u = r(n),
                        c = a.length; return u < 0 || u >= c ? e ? "" : void 0 : (o = a.charCodeAt(u), o < 55296 || o > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? e ? a.charAt(u) : o : e ? a.slice(u, u + 2) : (o - 55296 << 10) + (s - 56320) + 65536) } } }, { "./_defined": 94, "./_to-integer": 147 }],
        145: [function(e, t, n) { var r, i, o, s = e("./_ctx"),
                a = e("./_invoke"),
                u = e("./_html"),
                c = e("./_dom-create"),
                l = e("./_global"),
                f = l.process,
                p = l.setImmediate,
                d = l.clearImmediate,
                h = l.MessageChannel,
                _ = 0,
                b = {},
                m = "onreadystatechange",
                v = function() { var e = +this; if (b.hasOwnProperty(e)) { var t = b[e];
                        delete b[e], t() } },
                y = function(e) { v.call(e.data) };
            p && d || (p = function(e) { for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]); return b[++_] = function() { a("function" == typeof e ? e : Function(e), t) }, r(_), _ }, d = function(e) { delete b[e] }, "process" == e("./_cof")(f) ? r = function(e) { f.nextTick(s(v, e, 1)) } : h ? (i = new h, o = i.port2, i.port1.onmessage = y, r = s(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(e) { l.postMessage(e + "", "*") }, l.addEventListener("message", y, !1)) : r = m in c("script") ? function(e) { u.appendChild(c("script"))[m] = function() { u.removeChild(this), v.call(e) } } : function(e) { setTimeout(s(v, e, 1), 0) }), t.exports = { set: p, clear: d } }, { "./_cof": 87, "./_ctx": 93, "./_dom-create": 96, "./_global": 102, "./_html": 105, "./_invoke": 107 }],
        146: [function(e, t, n) { var r = e("./_to-integer"),
                i = Math.max,
                o = Math.min;
            t.exports = function(e, t) { return e = r(e), e < 0 ? i(e + t, 0) : o(e, t) } }, { "./_to-integer": 147 }],
        147: [function(e, t, n) { var r = Math.ceil,
                i = Math.floor;
            t.exports = function(e) { return isNaN(e = +e) ? 0 : (e > 0 ? i : r)(e) } }, {}],
        148: [function(e, t, n) { var r = e("./_iobject"),
                i = e("./_defined");
            t.exports = function(e) { return r(i(e)) } }, { "./_defined": 94, "./_iobject": 108 }],
        149: [function(e, t, n) { var r = e("./_to-integer"),
                i = Math.min;
            t.exports = function(e) { return e > 0 ? i(r(e), 9007199254740991) : 0 } }, { "./_to-integer": 147 }],
        150: [function(e, t, n) { var r = e("./_defined");
            t.exports = function(e) { return Object(r(e)) } }, { "./_defined": 94 }],
        151: [function(e, t, n) { var r = e("./_is-object");
            t.exports = function(e, t) { if (!r(e)) return e; var n, i; if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i; if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i; if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i; throw TypeError("Can't convert object to primitive value") } }, { "./_is-object": 111 }],
        152: [function(e, t, n) { var r = 0,
                i = Math.random();
            t.exports = function(e) { return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + i).toString(36)) } }, {}],
        153: [function(e, t, n) { var r = e("./_global"),
                i = e("./_core"),
                o = e("./_library"),
                s = e("./_wks-ext"),
                a = e("./_object-dp").f;
            t.exports = function(e) { var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {}); "_" == e.charAt(0) || e in t || a(t, e, { value: s.f(e) }) } }, { "./_core": 91, "./_global": 102, "./_library": 119, "./_object-dp": 124, "./_wks-ext": 154 }],
        154: [function(e, t, n) { n.f = e("./_wks") }, { "./_wks": 155 }],
        155: [function(e, t, n) { var r = e("./_shared")("wks"),
                i = e("./_uid"),
                o = e("./_global").Symbol,
                s = "function" == typeof o,
                a = t.exports = function(e) { return r[e] || (r[e] = s && o[e] || (s ? o : i)("Symbol." + e)) };
            a.store = r }, { "./_global": 102, "./_shared": 142, "./_uid": 152 }],
        156: [function(e, t, n) { var r = e("./_classof"),
                i = e("./_wks")("iterator"),
                o = e("./_iterators");
            t.exports = e("./_core").getIteratorMethod = function(e) { if (void 0 != e) return e[i] || e["@@iterator"] || o[r(e)] } }, { "./_classof": 86, "./_core": 91, "./_iterators": 117, "./_wks": 155 }],
        157: [function(e, t, n) { var r = e("./_an-object"),
                i = e("./core.get-iterator-method");
            t.exports = e("./_core").getIterator = function(e) { var t = i(e); if ("function" != typeof t) throw TypeError(e + " is not iterable!"); return r(t.call(e)) } }, { "./_an-object": 80, "./_core": 91, "./core.get-iterator-method": 156 }],
        158: [function(e, t, n) { var r = e("./_classof"),
                i = e("./_wks")("iterator"),
                o = e("./_iterators");
            t.exports = e("./_core").isIterable = function(e) { var t = Object(e); return void 0 !== t[i] || "@@iterator" in t || o.hasOwnProperty(r(t)) } }, { "./_classof": 86, "./_core": 91, "./_iterators": 117, "./_wks": 155 }],
        159: [function(e, t, n) { "use strict"; var r = e("./_ctx"),
                i = e("./_export"),
                o = e("./_to-object"),
                s = e("./_iter-call"),
                a = e("./_is-array-iter"),
                u = e("./_to-length"),
                c = e("./_create-property"),
                l = e("./core.get-iterator-method");
            i(i.S + i.F * !e("./_iter-detect")(function(e) { Array.from(e) }), "Array", { from: function(e) { var t, n, i, f, p = o(e),
                        d = "function" == typeof this ? this : Array,
                        h = arguments.length,
                        _ = h > 1 ? arguments[1] : void 0,
                        b = void 0 !== _,
                        m = 0,
                        v = l(p); if (b && (_ = r(_, h > 2 ? arguments[2] : void 0, 2)), void 0 == v || d == Array && a(v))
                        for (t = u(p.length), n = new d(t); t > m; m++) c(n, m, b ? _(p[m], m) : p[m]);
                    else
                        for (f = v.call(p), n = new d; !(i = f.next()).done; m++) c(n, m, b ? s(f, _, [i.value, m], !0) : i.value); return n.length = m, n } }) }, { "./_create-property": 92, "./_ctx": 93, "./_export": 99, "./_is-array-iter": 109, "./_iter-call": 112, "./_iter-detect": 115, "./_to-length": 149, "./_to-object": 150, "./core.get-iterator-method": 156 }],
        160: [function(e, t, n) { "use strict"; var r = e("./_add-to-unscopables"),
                i = e("./_iter-step"),
                o = e("./_iterators"),
                s = e("./_to-iobject");
            t.exports = e("./_iter-define")(Array, "Array", function(e, t) { this._t = s(e), this._i = 0, this._k = t }, function() { var e = this._t,
                    t = this._k,
                    n = this._i++; return !e || n >= e.length ? (this._t = void 0, i(1)) : "keys" == t ? i(0, n) : "values" == t ? i(0, e[n]) : i(0, [n, e[n]]) }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries") }, { "./_add-to-unscopables": 78, "./_iter-define": 114, "./_iter-step": 116, "./_iterators": 117, "./_to-iobject": 148 }],
        161: [function(e, t, n) { "use strict"; var r = e("./_collection-strong");
            t.exports = e("./_collection")("Map", function(e) { return function() { return e(this, arguments.length > 0 ? arguments[0] : void 0) } }, { get: function(e) { var t = r.getEntry(this, e); return t && t.v }, set: function(e, t) { return r.def(this, 0 === e ? 0 : e, t) } }, r, !0) }, { "./_collection": 90, "./_collection-strong": 88 }],
        162: [function(e, t, n) { var r = e("./_export");
            r(r.S + r.F, "Object", { assign: e("./_object-assign") }) }, { "./_export": 99, "./_object-assign": 122 }],
        163: [function(e, t, n) { var r = e("./_export");
            r(r.S, "Object", { create: e("./_object-create") }) }, { "./_export": 99, "./_object-create": 123 }],
        164: [function(e, t, n) { var r = e("./_export");
            r(r.S + r.F * !e("./_descriptors"), "Object", { defineProperties: e("./_object-dps") }) }, { "./_descriptors": 95, "./_export": 99, "./_object-dps": 125 }],
        165: [function(e, t, n) { var r = e("./_export");
            r(r.S + r.F * !e("./_descriptors"), "Object", { defineProperty: e("./_object-dp").f }) }, { "./_descriptors": 95, "./_export": 99, "./_object-dp": 124 }],
        166: [function(e, t, n) { var r = e("./_is-object"),
                i = e("./_meta").onFreeze;
            e("./_object-sap")("freeze", function(e) { return function(t) { return e && r(t) ? e(i(t)) : t } }) }, { "./_is-object": 111, "./_meta": 120, "./_object-sap": 134 }],
        167: [function(e, t, n) { var r = e("./_to-object"),
                i = e("./_object-gpo");
            e("./_object-sap")("getPrototypeOf", function() { return function(e) { return i(r(e)) } }) }, { "./_object-gpo": 130, "./_object-sap": 134, "./_to-object": 150 }],
        168: [function(e, t, n) { var r = e("./_to-object"),
                i = e("./_object-keys");
            e("./_object-sap")("keys", function() { return function(e) { return i(r(e)) } }) }, { "./_object-keys": 132, "./_object-sap": 134, "./_to-object": 150 }],
        169: [function(e, t, n) { var r = e("./_export");
            r(r.S, "Object", { setPrototypeOf: e("./_set-proto").set }) }, { "./_export": 99, "./_set-proto": 138 }],
        170: [function(e, t, n) { arguments[4][59][0].apply(n, arguments) }, { dup: 59 }],
        171: [function(e, t, n) { "use strict"; var r, i, o, s = e("./_library"),
                a = e("./_global"),
                u = e("./_ctx"),
                c = e("./_classof"),
                l = e("./_export"),
                f = e("./_is-object"),
                p = e("./_a-function"),
                d = e("./_an-instance"),
                h = e("./_for-of"),
                _ = e("./_species-constructor"),
                b = e("./_task").set,
                m = e("./_microtask")(),
                v = "Promise",
                y = a.TypeError,
                g = a.process,
                k = a[v],
                g = a.process,
                w = "process" == c(g),
                j = function() {},
                C = !! function() { try { var t = k.resolve(1),
                            n = (t.constructor = {})[e("./_wks")("species")] = function(e) { e(j, j) }; return (w || "function" == typeof PromiseRejectionEvent) && t.then(j) instanceof n } catch (e) {} }(),
                x = function(e, t) { return e === t || e === k && t === o },
                E = function(e) { var t; return !(!f(e) || "function" != typeof(t = e.then)) && t },
                S = function(e) { return x(k, e) ? new T(e) : new i(e) },
                T = i = function(e) { var t, n;
                    this.promise = new e(function(e, r) { if (void 0 !== t || void 0 !== n) throw y("Bad Promise constructor");
                        t = e, n = r }), this.resolve = p(t), this.reject = p(n) },
                R = function(e) { try { e() } catch (e) { return { error: e } } },
                P = function(e, t) { if (!e._n) { e._n = !0; var n = e._c;
                        m(function() { for (var r = e._v, i = 1 == e._s, o = 0, s = function(t) { var n, o, s = i ? t.ok : t.fail,
                                        a = t.resolve,
                                        u = t.reject,
                                        c = t.domain; try { s ? (i || (2 == e._h && A(e), e._h = 1), s === !0 ? n = r : (c && c.enter(), n = s(r), c && c.exit()), n === t.promise ? u(y("Promise-chain cycle")) : (o = E(n)) ? o.call(n, a, u) : a(n)) : u(r) } catch (e) { u(e) } }; n.length > o;) s(n[o++]);
                            e._c = [], e._n = !1, t && !e._h && I(e) }) } },
                I = function(e) { b.call(a, function() { var t, n, r, i = e._v; if (O(e) && (t = R(function() { w ? g.emit("unhandledRejection", i, e) : (n = a.onunhandledrejection) ? n({ promise: e, reason: i }) : (r = a.console) && r.error && r.error("Unhandled promise rejection", i) }), e._h = w || O(e) ? 2 : 1), e._a = void 0, t) throw t.error }) },
                O = function(e) { if (1 == e._h) return !1; for (var t, n = e._a || e._c, r = 0; n.length > r;)
                        if (t = n[r++], t.fail || !O(t.promise)) return !1;
                    return !0 },
                A = function(e) { b.call(a, function() { var t;
                        w ? g.emit("rejectionHandled", e) : (t = a.onrejectionhandled) && t({ promise: e, reason: e._v }) }) },
                N = function(e) { var t = this;
                    t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), P(t, !0)) },
                F = function(e) { var t, n = this; if (!n._d) { n._d = !0, n = n._w || n; try { if (n === e) throw y("Promise can't be resolved itself");
                            (t = E(e)) ? m(function() { var r = { _w: n, _d: !1 }; try { t.call(e, u(F, r, 1), u(N, r, 1)) } catch (e) { N.call(r, e) } }): (n._v = e, n._s = 1, P(n, !1)) } catch (e) { N.call({ _w: n, _d: !1 }, e) } } };
            C || (k = function(e) { d(this, k, v, "_h"), p(e), r.call(this); try { e(u(F, this, 1), u(N, this, 1)) } catch (e) { N.call(this, e) } }, r = function(e) { this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1 }, r.prototype = e("./_redefine-all")(k.prototype, { then: function(e, t) { var n = S(_(this, k)); return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = w ? g.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && P(this, !1), n.promise }, catch: function(e) { return this.then(void 0, e) } }), T = function() { var e = new r;
                this.promise = e, this.resolve = u(F, e, 1), this.reject = u(N, e, 1) }), l(l.G + l.W + l.F * !C, { Promise: k }), e("./_set-to-string-tag")(k, v), e("./_set-species")(v), o = e("./_core")[v], l(l.S + l.F * !C, v, { reject: function(e) { var t = S(this),
                        n = t.reject; return n(e), t.promise } }), l(l.S + l.F * (s || !C), v, { resolve: function(e) { if (e instanceof k && x(e.constructor, this)) return e; var t = S(this),
                        n = t.resolve; return n(e), t.promise } }), l(l.S + l.F * !(C && e("./_iter-detect")(function(e) { k.all(e).catch(j) })), v, { all: function(e) { var t = this,
                        n = S(t),
                        r = n.resolve,
                        i = n.reject,
                        o = R(function() { var n = [],
                                o = 0,
                                s = 1;
                            h(e, !1, function(e) { var a = o++,
                                    u = !1;
                                n.push(void 0), s++, t.resolve(e).then(function(e) { u || (u = !0, n[a] = e, --s || r(n)) }, i) }), --s || r(n) }); return o && i(o.error), n.promise }, race: function(e) { var t = this,
                        n = S(t),
                        r = n.reject,
                        i = R(function() { h(e, !1, function(e) { t.resolve(e).then(n.resolve, r) }) }); return i && r(i.error), n.promise } }) }, { "./_a-function": 77, "./_an-instance": 79, "./_classof": 86, "./_core": 91, "./_ctx": 93, "./_export": 99, "./_for-of": 101, "./_global": 102, "./_is-object": 111, "./_iter-detect": 115, "./_library": 119, "./_microtask": 121, "./_redefine-all": 136, "./_set-species": 139, "./_set-to-string-tag": 140, "./_species-constructor": 143, "./_task": 145, "./_wks": 155 }],
        172: [function(e, t, n) { "use strict"; var r = e("./_collection-strong");
            t.exports = e("./_collection")("Set", function(e) { return function() { return e(this, arguments.length > 0 ? arguments[0] : void 0) } }, { add: function(e) { return r.def(this, e = 0 === e ? 0 : e, e) } }, r) }, { "./_collection": 90, "./_collection-strong": 88 }],
        173: [function(e, t, n) { "use strict"; var r = e("./_string-at")(!0);
            e("./_iter-define")(String, "String", function(e) { this._t = String(e), this._i = 0 }, function() { var e, t = this._t,
                    n = this._i; return n >= t.length ? { value: void 0, done: !0 } : (e = r(t, n), this._i += e.length, { value: e, done: !1 }) }) }, { "./_iter-define": 114, "./_string-at": 144 }],
        174: [function(e, t, n) { "use strict"; var r = e("./_global"),
                i = e("./_has"),
                o = e("./_descriptors"),
                s = e("./_export"),
                a = e("./_redefine"),
                u = e("./_meta").KEY,
                c = e("./_fails"),
                l = e("./_shared"),
                f = e("./_set-to-string-tag"),
                p = e("./_uid"),
                d = e("./_wks"),
                h = e("./_wks-ext"),
                _ = e("./_wks-define"),
                b = e("./_keyof"),
                m = e("./_enum-keys"),
                v = e("./_is-array"),
                y = e("./_an-object"),
                g = e("./_to-iobject"),
                k = e("./_to-primitive"),
                w = e("./_property-desc"),
                j = e("./_object-create"),
                C = e("./_object-gopn-ext"),
                x = e("./_object-gopd"),
                E = e("./_object-dp"),
                S = e("./_object-keys"),
                T = x.f,
                R = E.f,
                P = C.f,
                I = r.Symbol,
                O = r.JSON,
                A = O && O.stringify,
                N = "prototype",
                F = d("_hidden"),
                M = d("toPrimitive"),
                U = {}.propertyIsEnumerable,
                D = l("symbol-registry"),
                L = l("symbols"),
                q = l("op-symbols"),
                B = Object[N],
                z = "function" == typeof I,
                H = r.QObject,
                V = !H || !H[N] || !H[N].findChild,
                W = o && c(function() { return 7 != j(R({}, "a", { get: function() { return R(this, "a", { value: 7 }).a } })).a }) ? function(e, t, n) { var r = T(B, t);
                    r && delete B[t], R(e, t, n), r && e !== B && R(B, t, r) } : R,
                G = function(e) { var t = L[e] = j(I[N]); return t._k = e, t },
                $ = z && "symbol" == typeof I.iterator ? function(e) { return "symbol" == typeof e } : function(e) { return e instanceof I },
                J = function(e, t, n) { return e === B && J(q, t, n), y(e), t = k(t, !0), y(n), i(L, t) ? (n.enumerable ? (i(e, F) && e[F][t] && (e[F][t] = !1), n = j(n, { enumerable: w(0, !1) })) : (i(e, F) || R(e, F, w(1, {})), e[F][t] = !0), W(e, t, n)) : R(e, t, n) },
                K = function(e, t) { y(e); for (var n, r = m(t = g(t)), i = 0, o = r.length; o > i;) J(e, n = r[i++], t[n]); return e },
                X = function(e, t) { return void 0 === t ? j(e) : K(j(e), t) },
                Q = function(e) { var t = U.call(this, e = k(e, !0)); return !(this === B && i(L, e) && !i(q, e)) && (!(t || !i(this, e) || !i(L, e) || i(this, F) && this[F][e]) || t) },
                Y = function(e, t) { if (e = g(e), t = k(t, !0), e !== B || !i(L, t) || i(q, t)) { var n = T(e, t); return !n || !i(L, t) || i(e, F) && e[F][t] || (n.enumerable = !0), n } },
                Z = function(e) { for (var t, n = P(g(e)), r = [], o = 0; n.length > o;) i(L, t = n[o++]) || t == F || t == u || r.push(t); return r },
                ee = function(e) { for (var t, n = e === B, r = P(n ? q : g(e)), o = [], s = 0; r.length > s;) !i(L, t = r[s++]) || n && !i(B, t) || o.push(L[t]); return o };
            z || (I = function() { if (this instanceof I) throw TypeError("Symbol is not a constructor!"); var e = p(arguments.length > 0 ? arguments[0] : void 0),
                    t = function(n) { this === B && t.call(q, n), i(this, F) && i(this[F], e) && (this[F][e] = !1), W(this, e, w(1, n)) }; return o && V && W(B, e, { configurable: !0, set: t }), G(e) }, a(I[N], "toString", function() { return this._k }), x.f = Y, E.f = J, e("./_object-gopn").f = C.f = Z, e("./_object-pie").f = Q, e("./_object-gops").f = ee, o && !e("./_library") && a(B, "propertyIsEnumerable", Q, !0), h.f = function(e) { return G(d(e)) }), s(s.G + s.W + s.F * !z, { Symbol: I }); for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) d(te[ne++]); for (var te = S(d.store), ne = 0; te.length > ne;) _(te[ne++]);
            s(s.S + s.F * !z, "Symbol", { for: function(e) { return i(D, e += "") ? D[e] : D[e] = I(e) }, keyFor: function(e) { if ($(e)) return b(D, e); throw TypeError(e + " is not a symbol!") }, useSetter: function() { V = !0 }, useSimple: function() { V = !1 } }), s(s.S + s.F * !z, "Object", { create: X, defineProperty: J, defineProperties: K, getOwnPropertyDescriptor: Y, getOwnPropertyNames: Z, getOwnPropertySymbols: ee }), O && s(s.S + s.F * (!z || c(function() { var e = I(); return "[null]" != A([e]) || "{}" != A({ a: e }) || "{}" != A(Object(e)) })), "JSON", { stringify: function(e) { if (void 0 !== e && !$(e)) { for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]); return t = r[1], "function" == typeof t && (n = t), !n && v(t) || (t = function(e, t) { if (n && (t = n.call(this, e, t)), !$(t)) return t }), r[1] = t, A.apply(O, r) } } }), I[N][M] || e("./_hide")(I[N], M, I[N].valueOf), f(I, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0) }, { "./_an-object": 80, "./_descriptors": 95, "./_enum-keys": 98, "./_export": 99, "./_fails": 100, "./_global": 102, "./_has": 103, "./_hide": 104, "./_is-array": 110, "./_keyof": 118, "./_library": 119, "./_meta": 120, "./_object-create": 123, "./_object-dp": 124, "./_object-gopd": 126, "./_object-gopn": 128, "./_object-gopn-ext": 127, "./_object-gops": 129, "./_object-keys": 132, "./_object-pie": 133, "./_property-desc": 135, "./_redefine": 137, "./_set-to-string-tag": 140, "./_shared": 142, "./_to-iobject": 148, "./_to-primitive": 151, "./_uid": 152, "./_wks": 155, "./_wks-define": 153, "./_wks-ext": 154 }],
        175: [function(e, t, n) { var r = e("./_export");
            r(r.P + r.R, "Map", { toJSON: e("./_collection-to-json")("Map") }) }, { "./_collection-to-json": 89, "./_export": 99 }],
        176: [function(e, t, n) { var r = e("./_export");
            r(r.P + r.R, "Set", { toJSON: e("./_collection-to-json")("Set") }) }, { "./_collection-to-json": 89, "./_export": 99 }],
        177: [function(e, t, n) { e("./_wks-define")("asyncIterator") }, { "./_wks-define": 153 }],
        178: [function(e, t, n) { e("./_wks-define")("observable") }, { "./_wks-define": 153 }],
        179: [function(e, t, n) {
            e("./es6.array.iterator");
            for (var r = e("./_global"), i = e("./_hide"), o = e("./_iterators"), s = e("./_wks")("toStringTag"), a = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0; u < 5; u++) {
                var c = a[u],
                    l = r[c],
                    f = l && l.prototype;
                f && !f[s] && i(f, s, c), o[c] = o.Array
            }
        }, { "./_global": 102, "./_hide": 104, "./_iterators": 117, "./_wks": 155, "./es6.array.iterator": 160 }],
        180: [function(e, t, n) { t.exports = e("./lib") }, { "./lib": 181 }],
        181: [function(e, t, n) {
            function r(e) { return void 0 === e ? 0 : parseInt(e, 10) } var i = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
            n.fromSeconds = function(e) { if ("number" != typeof e) throw new TypeError("Argument `seconds` must be a number"); var t = e % 60,
                    n = (e - t) % 3600; return { hours: (e - t - n) / 3600, minutes: n / 60, seconds: t } }, n.fromString = function(e) { if ("string" != typeof e) throw new TypeError("Argument `string` must be a string"); var t = e.match(i); if (null === t || void 0 === t[1] && void 0 === t[2] && void 0 === t[3]) throw new Error('Could not parse "' + e + '" as a duration.'); return { hours: r(t[1]), minutes: r(t[2]), seconds: r(t[3]) } }, n.toString = function(e) { "number" == typeof e && (e = n.fromSeconds(e)); var t = "PT"; return e.hours > 0 && (t += e.hours + "H"), e.minutes > 0 && (t += e.minutes + "M"), e.seconds > 0 && (t += e.seconds + "S"), "PT" === t && (t += "0S"), t }, n.toSeconds = function(e) { var t = e; return "string" == typeof e && (t = n.fromString(e)), 3600 * t.hours + 60 * t.minutes + t.seconds } }, {}],
        182: [function(e, t, n) {
            // Copyright Joyent, Inc. and other Node contributors.
            //
            // Permission is hereby granted, free of charge, to any person obtaining a
            // copy of this software and associated documentation files (the
            // "Software"), to deal in the Software without restriction, including
            // without limitation the rights to use, copy, modify, merge, publish,
            // distribute, sublicense, and/or sell copies of the Software, and to permit
            // persons to whom the Software is furnished to do so, subject to the
            // following conditions:
            //
            // The above copyright notice and this permission notice shall be included
            // in all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
            // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
            // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            // USE OR OTHER DEALINGS IN THE SOFTWARE.
            function r() { this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0 }

            function i(e) { return "function" == typeof e }

            function o(e) { return "number" == typeof e }

            function s(e) { return "object" == typeof e && null !== e }

            function a(e) { return void 0 === e }
            t.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(e) { if (!o(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number"); return this._maxListeners = e, this }, r.prototype.emit = function(e) { var t, n, r, o, u, c; if (this._events || (this._events = {}), "error" === e && (!this._events.error || s(this._events.error) && !this._events.error.length)) { if (t = arguments[1], t instanceof Error) throw t; var l = new Error('Uncaught, unspecified "error" event. (' + t + ")"); throw l.context = t, l } if (n = this._events[e], a(n)) return !1; if (i(n)) switch (arguments.length) {
                    case 1:
                        n.call(this); break;
                    case 2:
                        n.call(this, arguments[1]); break;
                    case 3:
                        n.call(this, arguments[1], arguments[2]); break;
                    default:
                        o = Array.prototype.slice.call(arguments, 1), n.apply(this, o) } else if (s(n))
                    for (o = Array.prototype.slice.call(arguments, 1), c = n.slice(), r = c.length, u = 0; u < r; u++) c[u].apply(this, o);
                return !0 }, r.prototype.addListener = function(e, t) { var n; if (!i(t)) throw TypeError("listener must be a function"); return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? s(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, s(this._events[e]) && !this._events[e].warned && (n = a(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners, n && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace())), this }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e, t) {
                function n() { this.removeListener(e, n), r || (r = !0, t.apply(this, arguments)) } if (!i(t)) throw TypeError("listener must be a function"); var r = !1; return n.listener = t, this.on(e, n), this }, r.prototype.removeListener = function(e, t) { var n, r, o, a; if (!i(t)) throw TypeError("listener must be a function"); if (!this._events || !this._events[e]) return this; if (n = this._events[e], o = n.length, r = -1, n === t || i(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                else if (s(n)) { for (a = o; a-- > 0;)
                        if (n[a] === t || n[a].listener && n[a].listener === t) { r = a; break }
                    if (r < 0) return this;
                    1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t) } return this }, r.prototype.removeAllListeners = function(e) { var t, n; if (!this._events) return this; if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this; if (0 === arguments.length) { for (t in this._events) "removeListener" !== t && this.removeAllListeners(t); return this.removeAllListeners("removeListener"), this._events = {}, this } if (n = this._events[e], i(n)) this.removeListener(e, n);
                else if (n)
                    for (; n.length;) this.removeListener(e, n[n.length - 1]); return delete this._events[e], this }, r.prototype.listeners = function(e) { var t; return t = this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [] }, r.prototype.listenerCount = function(e) { if (this._events) { var t = this._events[e]; if (i(t)) return 1; if (t) return t.length } return 0 }, r.listenerCount = function(e, t) { return e.listenerCount(t) }
        }, {}],
        183: [function(t, n, r) {
            /*

              Javascript State Machine Library - https://github.com/jakesgordon/javascript-state-machine

              Copyright (c) 2012, 2013, 2014, 2015, Jake Gordon and contributors
              Released under the MIT license - https://github.com/jakesgordon/javascript-state-machine/blob/master/LICENSE

            */
            ! function() { var t = { VERSION: "2.4.0", Result: { SUCCEEDED: 1, NOTRANSITION: 2, CANCELLED: 3, PENDING: 4 }, Error: { INVALID_TRANSITION: 100, PENDING_TRANSITION: 200, INVALID_CALLBACK: 300 }, WILDCARD: "*", ASYNC: "async", create: function(e, n) { var r = "string" == typeof e.initial ? { state: e.initial } : e.initial,
                            i = e.terminal || e.final,
                            o = n || e.target || {},
                            s = e.events || [],
                            a = e.callbacks || {},
                            u = {},
                            c = {},
                            l = function(e) { var n = Array.isArray(e.from) ? e.from : e.from ? [e.from] : [t.WILDCARD];
                                u[e.name] = u[e.name] || {}; for (var r = 0; r < n.length; r++) c[n[r]] = c[n[r]] || [], c[n[r]].push(e.name), u[e.name][n[r]] = e.to || n[r];
                                e.to && (c[e.to] = c[e.to] || []) };
                        r && (r.event = r.event || "startup", l({ name: r.event, from: "none", to: r.state })); for (var f = 0; f < s.length; f++) l(s[f]); for (var p in u) u.hasOwnProperty(p) && (o[p] = t.buildEvent(p, u[p])); for (var p in a) a.hasOwnProperty(p) && (o[p] = a[p]); return o.current = "none", o.is = function(e) { return Array.isArray(e) ? e.indexOf(this.current) >= 0 : this.current === e }, o.can = function(e) { return !this.transition && void 0 !== u[e] && (u[e].hasOwnProperty(this.current) || u[e].hasOwnProperty(t.WILDCARD)) }, o.cannot = function(e) { return !this.can(e) }, o.transitions = function() { return (c[this.current] || []).concat(c[t.WILDCARD] || []) }, o.isFinished = function() { return this.is(i) }, o.error = e.error || function(e, t, n, r, i, o, s) { throw s || o }, o.states = function() { return Object.keys(c).sort() }, r && !r.defer && o[r.event](), o }, doCallback: function(e, n, r, i, o, s) { if (n) try { return n.apply(e, [r, i, o].concat(s)) } catch (n) { return e.error(r, i, o, s, t.Error.INVALID_CALLBACK, "an exception occurred in a caller-provided callback function", n) } }, beforeAnyEvent: function(e, n, r, i, o) { return t.doCallback(e, e.onbeforeevent, n, r, i, o) }, afterAnyEvent: function(e, n, r, i, o) { return t.doCallback(e, e.onafterevent || e.onevent, n, r, i, o) }, leaveAnyState: function(e, n, r, i, o) { return t.doCallback(e, e.onleavestate, n, r, i, o) }, enterAnyState: function(e, n, r, i, o) { return t.doCallback(e, e.onenterstate || e.onstate, n, r, i, o) }, changeState: function(e, n, r, i, o) { return t.doCallback(e, e.onchangestate, n, r, i, o) }, beforeThisEvent: function(e, n, r, i, o) { return t.doCallback(e, e["onbefore" + n], n, r, i, o) }, afterThisEvent: function(e, n, r, i, o) { return t.doCallback(e, e["onafter" + n] || e["on" + n], n, r, i, o) }, leaveThisState: function(e, n, r, i, o) { return t.doCallback(e, e["onleave" + r], n, r, i, o) }, enterThisState: function(e, n, r, i, o) { return t.doCallback(e, e["onenter" + i] || e["on" + i], n, r, i, o) }, beforeEvent: function(e, n, r, i, o) { if (!1 === t.beforeThisEvent(e, n, r, i, o) || !1 === t.beforeAnyEvent(e, n, r, i, o)) return !1 }, afterEvent: function(e, n, r, i, o) { t.afterThisEvent(e, n, r, i, o), t.afterAnyEvent(e, n, r, i, o) }, leaveState: function(e, n, r, i, o) { var s = t.leaveThisState(e, n, r, i, o),
                            a = t.leaveAnyState(e, n, r, i, o); return !1 !== s && !1 !== a && (t.ASYNC === s || t.ASYNC === a ? t.ASYNC : void 0) }, enterState: function(e, n, r, i, o) { t.enterThisState(e, n, r, i, o), t.enterAnyState(e, n, r, i, o) }, buildEvent: function(e, n) { return function() { var r = this.current,
                                i = n[r] || (n[t.WILDCARD] != t.WILDCARD ? n[t.WILDCARD] : r) || r,
                                o = Array.prototype.slice.call(arguments); if (this.transition) return this.error(e, r, i, o, t.Error.PENDING_TRANSITION, "event " + e + " inappropriate because previous transition did not complete"); if (this.cannot(e)) return this.error(e, r, i, o, t.Error.INVALID_TRANSITION, "event " + e + " inappropriate in current state " + this.current); if (!1 === t.beforeEvent(this, e, r, i, o)) return t.Result.CANCELLED; if (r === i) return t.afterEvent(this, e, r, i, o), t.Result.NOTRANSITION; var s = this;
                            this.transition = function() { return s.transition = null, s.current = i, t.enterState(s, e, r, i, o), t.changeState(s, e, r, i, o), t.afterEvent(s, e, r, i, o), t.Result.SUCCEEDED }, this.transition.cancel = function() { s.transition = null, t.afterEvent(s, e, r, i, o) }; var a = t.leaveState(this, e, r, i, o); return !1 === a ? (this.transition = null, t.Result.CANCELLED) : t.ASYNC === a ? t.Result.PENDING : this.transition ? this.transition() : void 0 } } }; "undefined" != typeof r ? ("undefined" != typeof n && n.exports && (r = n.exports = t), r.StateMachine = t) : "function" == typeof e && e.amd ? e(function(e) { return t }) : "undefined" != typeof window ? window.StateMachine = t : "undefined" != typeof self && (self.StateMachine = t) }()
        }, {}],
        184: [function(t, n, r) {
            /*
             * loglevel - https://github.com/pimterry/loglevel
             *
             * Copyright (c) 2013 Tim Perry
             * Licensed under the MIT license.
             */
            ! function(t, r) { "use strict"; "function" == typeof e && e.amd ? e(r) : "object" == typeof n && n.exports ? n.exports = r() : t.log = r() }(this, function() { "use strict";

                function e(e) { return typeof console !== a && (void 0 !== console[e] ? t(console, e) : void 0 !== console.log ? t(console, "log") : s) }

                function t(e, t) { var n = e[t]; if ("function" == typeof n.bind) return n.bind(e); try { return Function.prototype.bind.call(n, e) } catch (t) { return function() { return Function.prototype.apply.apply(n, [e, arguments]) } } }

                function n(e, t, n) { return function() { typeof console !== a && (r.call(this, t, n), this[e].apply(this, arguments)) } }

                function r(e, t) { for (var n = 0; n < u.length; n++) { var r = u[n];
                        this[r] = n < e ? s : this.methodFactory(r, e, t) } }

                function i(t, r, i) { return e(t) || n.apply(this, arguments) }

                function o(e, t, n) {
                    function o(e) { var t = (u[e] || "silent").toUpperCase(); try { return void(window.localStorage[f] = t) } catch (e) {} try { window.document.cookie = encodeURIComponent(f) + "=" + t + ";" } catch (e) {} }

                    function s() { var e; try { e = window.localStorage[f] } catch (e) {} if (typeof e === a) try { var t = window.document.cookie,
                                n = t.indexOf(encodeURIComponent(f) + "=");
                            n && (e = /^([^;]+)/.exec(t.slice(n))[1]) } catch (e) {}
                        return void 0 === l.levels[e] && (e = void 0), e } var c, l = this,
                        f = "loglevel";
                    e && (f += ":" + e), l.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }, l.methodFactory = n || i, l.getLevel = function() { return c }, l.setLevel = function(t, n) { if ("string" == typeof t && void 0 !== l.levels[t.toUpperCase()] && (t = l.levels[t.toUpperCase()]), !("number" == typeof t && t >= 0 && t <= l.levels.SILENT)) throw "log.setLevel() called with invalid level: " + t; if (c = t, n !== !1 && o(t), r.call(l, t, e), typeof console === a && t < l.levels.SILENT) return "No console available for logging" }, l.setDefaultLevel = function(e) { s() || l.setLevel(e, !1) }, l.enableAll = function(e) { l.setLevel(l.levels.TRACE, e) }, l.disableAll = function(e) { l.setLevel(l.levels.SILENT, e) }; var p = s();
                    null == p && (p = null == t ? "WARN" : t), l.setLevel(p, !1) } var s = function() {},
                    a = "undefined",
                    u = ["trace", "debug", "info", "warn", "error"],
                    c = new o,
                    l = {};
                c.getLogger = function(e) { if ("string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger."); var t = l[e]; return t || (t = l[e] = new o(e, c.getLevel(), c.methodFactory)), t }; var f = typeof window !== a ? window.log : void 0; return c.noConflict = function() { return typeof window !== a && window.log === c && (window.log = f), c }, c })
        }, {}],
        185: [function(t, n, r) {
            (function(t) {
                (function() { "use strict";

                    function i(e) { return e = String(e), e.charAt(0).toUpperCase() + e.slice(1) }

                    function o(e, t, n) { var r = { "10.0": "10", 6.4: "10 Technical Preview", 6.3: "8.1", 6.2: "8", 6.1: "Server 2008 R2 / 7", "6.0": "Server 2008 / Vista", 5.2: "Server 2003 / XP 64-bit", 5.1: "XP", 5.01: "2000 SP1", "5.0": "2000", "4.0": "NT", "4.90": "ME" }; return t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = "Windows " + r), e = String(e), t && n && (e = e.replace(RegExp(t, "i"), n)), e = a(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]) }

                    function s(e, t) { var n = -1,
                            r = e ? e.length : 0; if ("number" == typeof r && r > -1 && r <= k)
                            for (; ++n < r;) t(e[n], n, e);
                        else u(e, t) }

                    function a(e) { return e = d(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : i(e) }

                    function u(e, t) { for (var n in e) x.call(e, n) && t(e[n], n, e) }

                    function c(e) { return null == e ? i(e) : E.call(e).slice(8, -1) }

                    function l(e, t) { var n = null != e ? typeof e[t] : "number"; return !(/^(?:boolean|number|string|undefined)$/.test(n) || "object" == n && !e[t]) }

                    function f(e) { return String(e).replace(/([ -])(?!$)/g, "$1?") }

                    function p(e, t) { var n = null; return s(e, function(r, i) { n = t(n, r, i, e) }), n }

                    function d(e) { return String(e).replace(/^ +| +$/g, "") }

                    function h(e) {
                        function t(t) { return p(t, function(t, n) { return t || RegExp("\\b" + (n.pattern || f(n)) + "\\b", "i").exec(e) && (n.label || n) }) }

                        function n(t) { return p(t, function(t, n, r) { return t || (n[K] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(K)] || RegExp("\\b" + f(r) + "(?:\\b|\\w*\\d)", "i").exec(e)) && r }) }

                        function r(t) { return p(t, function(t, n) { return t || RegExp("\\b" + (n.pattern || f(n)) + "\\b", "i").exec(e) && (n.label || n) }) }

                        function i(t) { return p(t, function(t, n) { var r = n.pattern || f(n); return !t && (t = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) && (t = o(t, r, n.label || n)), t }) }

                        function s(t) { return p(t, function(t, n) { var r = n.pattern || f(n); return !t && (t = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(e) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) && ((t = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]), n = n.label || n, t = a(t[0].replace(RegExp(r, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))), t }) }

                        function _(t) { return p(t, function(t, n) { return t || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] || null }) }

                        function v() { return this.description || "" } var y = b,
                            g = e && "object" == typeof e && "String" != c(e);
                        g && (y = e, e = null); var k = y.navigator || {},
                            C = k.userAgent || "";
                        e || (e = C); var x, S, T = g || j == m,
                            R = g ? !!k.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(E.toString()),
                            P = "Object",
                            I = g ? P : "ScriptBridgingProxyObject",
                            O = g ? P : "Environment",
                            A = g && y.java ? "JavaPackage" : c(y.java),
                            N = g ? P : "RuntimeObject",
                            F = /\bJava/.test(A) && y.java,
                            M = F && c(y.environment) == O,
                            U = F ? "a" : "\u03b1",
                            D = F ? "b" : "\u03b2",
                            L = y.document || {},
                            q = y.operamini || y.opera,
                            B = w.test(B = g && q ? q["[[Class]]"] : c(q)) ? B : q = null,
                            z = e,
                            H = [],
                            V = null,
                            W = e == C,
                            G = W && q && "function" == typeof q.version && q.version(),
                            $ = t([{ label: "EdgeHTML", pattern: "Edge" }, "Trident", { label: "WebKit", pattern: "AppleWebKit" }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
                            J = r(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", { label: "Microsoft Edge", pattern: "Edge" }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", "SeaMonkey", { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Sleipnir", "SlimBrowser", { label: "SRWare Iron", pattern: "Iron" }, "Sunrise", "Swiftfox", "WebPositive", "Opera Mini", { label: "Opera Mini", pattern: "OPiOS" }, "Opera", { label: "Opera", pattern: "OPR" }, "Chrome", { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" }, { label: "Firefox", pattern: "(?:Firefox|Minefield)" }, { label: "Firefox for iOS", pattern: "FxiOS" }, { label: "IE", pattern: "IEMobile" }, { label: "IE", pattern: "MSIE" }, "Safari"]),
                            K = s([{ label: "BlackBerry", pattern: "BB10" }, "BlackBerry", { label: "Galaxy S", pattern: "GT-I9000" }, { label: "Galaxy S2", pattern: "GT-I9100" }, { label: "Galaxy S3", pattern: "GT-I9300" }, { label: "Galaxy S4", pattern: "GT-I9500" }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Nexus", "Nook", "PlayBook", "PlayStation 3", "PlayStation 4", "PlayStation Vita", "TouchPad", "Transformer", { label: "Wii U", pattern: "WiiU" }, "Wii", "Xbox One", { label: "Xbox 360", pattern: "Xbox" }, "Xoom"]),
                            X = n({ Apple: { iPad: 1, iPhone: 1, iPod: 1 }, Archos: {}, Amazon: { Kindle: 1, "Kindle Fire": 1 }, Asus: { Transformer: 1 }, "Barnes & Noble": { Nook: 1 }, BlackBerry: { PlayBook: 1 }, Google: { "Google TV": 1, Nexus: 1 }, HP: { TouchPad: 1 }, HTC: {}, LG: {}, Microsoft: { Xbox: 1, "Xbox One": 1 }, Motorola: { Xoom: 1 }, Nintendo: { "Wii U": 1, Wii: 1 }, Nokia: { Lumia: 1 }, Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 }, Sony: { "PlayStation 4": 1, "PlayStation 3": 1, "PlayStation Vita": 1 } }),
                            Q = i(["Windows Phone", "Android", "CentOS", { label: "Chrome OS", pattern: "CrOS" }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]); if ($ && ($ = [$]), X && !K && (K = s([X])), (x = /\bGoogle TV\b/.exec(K)) && (K = x[0]), /\bSimulator\b/i.test(e) && (K = (K ? K + " " : "") + "Simulator"), "Opera Mini" == J && /\bOPiOS\b/.test(e) && H.push("running in Turbo/Uncompressed mode"), "IE" == J && /\blike iPhone OS\b/.test(e) ? (x = h(e.replace(/like iPhone OS/, "")), X = x.manufacturer, K = x.product) : /^iP/.test(K) ? (J || (J = "Safari"), Q = "iOS" + ((x = / OS ([\d_]+)/i.exec(e)) ? " " + x[1].replace(/_/g, ".") : "")) : "Konqueror" != J || /buntu/i.test(Q) ? X && "Google" != X && (/Chrome/.test(J) && !/\bMobile Safari\b/i.test(e) || /\bVita\b/.test(K)) || /\bAndroid\b/.test(Q) && /^Chrome/.test(J) && /\bVersion\//i.test(e) ? (J = "Android Browser", Q = /\bAndroid\b/.test(Q) ? Q : "Android") : "Silk" == J ? (/\bMobi/i.test(e) || (Q = "Android", H.unshift("desktop mode")), /Accelerated *= *true/i.test(e) && H.unshift("accelerated")) : "PaleMoon" == J && (x = /\bFirefox\/([\d.]+)\b/.exec(e)) ? H.push("identifying as Firefox " + x[1]) : "Firefox" == J && (x = /\b(Mobile|Tablet|TV)\b/i.exec(e)) ? (Q || (Q = "Firefox OS"), K || (K = x[1])) : J && !(x = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(J)) || (J && !K && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(x + "/") + 8)) && (J = null), (x = K || X || Q) && (K || X || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(Q)) && (J = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(Q) ? Q : x) + " Browser")) : Q = "Kubuntu", G || (G = _(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))", "Version", f(J), "(?:Firefox|Minefield|NetFront)"])), (x = "iCab" == $ && parseFloat(G) > 3 && "WebKit" || /\bOpera\b/.test(J) && (/\bOPR\b/.test(e) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test($) && "WebKit" || !$ && /\bMSIE\b/i.test(e) && ("Mac OS" == Q ? "Tasman" : "Trident") || "WebKit" == $ && /\bPlayStation\b(?! Vita\b)/i.test(J) && "NetFront") && ($ = [x]), "IE" == J && (x = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? (J += " Mobile", Q = "Windows Phone " + (/\+$/.test(x) ? x : x + ".x"), H.unshift("desktop mode")) : /\bWPDesktop\b/i.test(e) ? (J = "IE Mobile", Q = "Windows Phone 8.x", H.unshift("desktop mode"), G || (G = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : "IE" != J && "Trident" == $ && (x = /\brv:([\d.]+)/.exec(e)) && (J && H.push("identifying as " + J + (G ? " " + G : "")), J = "IE", G = x[1]), W) { if (l(y, "global"))
                                if (F && (x = F.lang.System, z = x.getProperty("os.arch"), Q = Q || x.getProperty("os.name") + " " + x.getProperty("os.version")), T && l(y, "system") && (x = [y.system])[0]) { Q || (Q = x[0].os || null); try { x[1] = y.require("ringo/engine").version, G = x[1].join("."), J = "RingoJS" } catch (e) { x[0].global.system == y.system && (J = "Narwhal") } } else "object" == typeof y.process && !y.process.browser && (x = y.process) ? (J = "Node.js", z = x.arch, Q = x.platform, G = /[\d.]+/.exec(x.version)[0]) : M && (J = "Rhino");
                            else c(x = y.runtime) == I ? (J = "Adobe AIR", Q = x.flash.system.Capabilities.os) : c(x = y.phantom) == N ? (J = "PhantomJS", G = (x = x.version || null) && x.major + "." + x.minor + "." + x.patch) : "number" == typeof L.documentMode && (x = /\bTrident\/(\d+)/i.exec(e)) && (G = [G, L.documentMode], (x = +x[1] + 4) != G[1] && (H.push("IE " + G[1] + " mode"), $ && ($[1] = ""), G[1] = x), G = "IE" == J ? String(G[1].toFixed(1)) : G[0]);
                            Q = Q && a(Q) }
                        G && (x = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(G) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (W && k.appMinorVersion)) || /\bMinefield\b/i.test(e) && "a") && (V = /b/i.test(x) ? "beta" : "alpha", G = G.replace(RegExp(x + "\\+?$"), "") + ("beta" == V ? D : U) + (/\d+\+?/.exec(x) || "")), "Fennec" == J || "Firefox" == J && /\b(?:Android|Firefox OS)\b/.test(Q) ? J = "Firefox Mobile" : "Maxthon" == J && G ? G = G.replace(/\.[\d.]+/, ".x") : /\bXbox\b/i.test(K) ? (Q = null, "Xbox 360" == K && /\bIEMobile\b/.test(e) && H.unshift("mobile mode")) : !/^(?:Chrome|IE|Opera)$/.test(J) && (!J || K || /Browser|Mobi/.test(J)) || "Windows CE" != Q && !/Mobi/i.test(e) ? "IE" == J && W && null === y.external ? H.unshift("platform preview") : (/\bBlackBerry\b/.test(K) || /\bBB10\b/.test(e)) && (x = (RegExp(K.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || G) ? (x = [x, /BB10/.test(e)], Q = (x[1] ? (K = null, X = "BlackBerry") : "Device Software") + " " + x[0], G = null) : this != u && "Wii" != K && (W && q || /Opera/.test(J) && /\b(?:MSIE|Firefox)\b/i.test(e) || "Firefox" == J && /\bOS X (?:\d+\.){2,}/.test(Q) || "IE" == J && (Q && !/^Win/.test(Q) && G > 5.5 || /\bWindows XP\b/.test(Q) && G > 8 || 8 == G && !/\bTrident\b/.test(e))) && !w.test(x = h.call(u, e.replace(w, "") + ";")) && x.name && (x = "ing as " + x.name + ((x = x.version) ? " " + x : ""), w.test(J) ? (/\bIE\b/.test(x) && "Mac OS" == Q && (Q = null), x = "identify" + x) : (x = "mask" + x, J = B ? a(B.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(x) && (Q = null), W || (G = null)), $ = ["Presto"], H.push(x)) : J += " Mobile", (x = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && (x = [parseFloat(x.replace(/\.(\d)$/, ".0$1")), x], "Safari" == J && "+" == x[1].slice(-1) ? (J = "WebKit Nightly", V = "alpha", G = x[1].slice(0, -1)) : G != x[1] && G != (x[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1]) || (G = null), x[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1], 537.36 == x[0] && 537.36 == x[2] && parseFloat(x[1]) >= 28 && "WebKit" == $ && ($ = ["Blink"]), W && (R || x[1]) ? ($ && ($[1] = "like Chrome"), x = x[1] || (x = x[0], x < 530 ? 1 : x < 532 ? 2 : x < 532.05 ? 3 : x < 533 ? 4 : x < 534.03 ? 5 : x < 534.07 ? 6 : x < 534.1 ? 7 : x < 534.13 ? 8 : x < 534.16 ? 9 : x < 534.24 ? 10 : x < 534.3 ? 11 : x < 535.01 ? 12 : x < 535.02 ? "13+" : x < 535.07 ? 15 : x < 535.11 ? 16 : x < 535.19 ? 17 : x < 536.05 ? 18 : x < 536.1 ? 19 : x < 537.01 ? 20 : x < 537.11 ? "21+" : x < 537.13 ? 23 : x < 537.18 ? 24 : x < 537.24 ? 25 : x < 537.36 ? 26 : "Blink" != $ ? "27" : "28")) : ($ && ($[1] = "like Safari"), x = x[0], x = x < 400 ? 1 : x < 500 ? 2 : x < 526 ? 3 : x < 533 ? 4 : x < 534 ? "4+" : x < 535 ? 5 : x < 537 ? 6 : x < 538 ? 7 : x < 601 ? 8 : "8"), $ && ($[1] += " " + (x += "number" == typeof x ? ".x" : /[.+]/.test(x) ? "" : "+")), "Safari" == J && (!G || parseInt(G) > 45) && (G = x)), "Opera" == J && (x = /\bzbov|zvav$/.exec(Q)) ? (J += " ", H.unshift("desktop mode"), "zvav" == x ? (J += "Mini", G = null) : J += "Mobile", Q = Q.replace(RegExp(" *" + x + "$"), "")) : "Safari" == J && /\bChrome\b/.exec($ && $[1]) && (H.unshift("desktop mode"), J = "Chrome Mobile", G = null, /\bOS X\b/.test(Q) ? (X = "Apple", Q = "iOS 4.3+") : Q = null), G && 0 == G.indexOf(x = /[\d.]+$/.exec(Q)) && e.indexOf("/" + x + "-") > -1 && (Q = d(Q.replace(x, ""))), $ && !/\b(?:Avant|Nook)\b/.test(J) && (/Browser|Lunascape|Maxthon/.test(J) || "Safari" != J && /^iOS/.test(Q) && /\bSafari\b/.test($[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(J) && $[1]) && (x = $[$.length - 1]) && H.push(x), H.length && (H = ["(" + H.join("; ") + ")"]), X && K && K.indexOf(X) < 0 && H.push("on " + X), K && H.push((/^on /.test(H[H.length - 1]) ? "" : "on ") + K), Q && (x = / ([\d.+]+)$/.exec(Q), S = x && "/" == Q.charAt(Q.length - x[0].length - 1), Q = { architecture: 32, family: x && !S ? Q.replace(x[0], "") : Q, version: x ? x[1] : null, toString: function() { var e = this.version; return this.family + (e && !S ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "") } }), (x = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(z)) && !/\bi686\b/i.test(z) ? (Q && (Q.architecture = 64, Q.family = Q.family.replace(RegExp(" *" + x), "")), J && (/\bWOW64\b/i.test(e) || W && /\w(?:86|32)$/.test(k.cpuClass || k.platform) && !/\bWin64; x64\b/i.test(e)) && H.unshift("32-bit")) : Q && /^OS X/.test(Q.family) && "Chrome" == J && parseFloat(G) >= 39 && (Q.architecture = 64), e || (e = null); var Y = {}; return Y.description = e, Y.layout = $ && $[0], Y.manufacturer = X, Y.name = J, Y.prerelease = V, Y.product = K, Y.ua = e, Y.version = J && G, Y.os = Q || { architecture: null, family: null, version: null, toString: function() { return "null" } }, Y.parse = h, Y.toString = v, Y.version && H.unshift(G), Y.name && H.unshift(J), Q && J && (Q != String(Q).split(" ")[0] || Q != J.split(" ")[0] && !K) && H.push(K ? "(" + Q + ")" : "on " + Q), H.length && (Y.description = H.join(" ")), Y } var _ = { function: !0, object: !0 },
                        b = _[typeof window] && window || this,
                        m = b,
                        v = _[typeof r] && r,
                        y = _[typeof n] && n && !n.nodeType && n,
                        g = v && y && "object" == typeof t && t;!g || g.global !== g && g.window !== g && g.self !== g || (b = g); var k = Math.pow(2, 53) - 1,
                        w = /\bOpera/,
                        j = this,
                        C = Object.prototype,
                        x = C.hasOwnProperty,
                        E = C.toString,
                        S = h(); "function" == typeof e && "object" == typeof e.amd && e.amd ? (b.platform = S, e(function() { return S })) : v && y ? u(S, function(e, t) { v[t] = e }) : b.platform = S }).call(this) }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}],
        186: [function(e, t, n) {
            /*
             * Copyright (c) 2012 Mathieu Turcotte
             * Licensed under the MIT license.
             */
            t.exports = e("./lib/checks")
        }, { "./lib/checks": 187 }],
        187: [function(e, t, n) {
            function r(e, t, n, r) { n = n || ""; var i = u.format.apply(this, [n].concat(r)),
                    o = new e(i); throw Error.captureStackTrace(o, t), o }

            function i(e, t, n) { r(c.IllegalArgumentError, e, t, n) }

            function o(e, t, n) { r(c.IllegalStateError, e, t, n) }

            function s(e) { var t = typeof e; if ("object" == t) { if (!e) return "null"; if (e instanceof Array) return "array" } return t }

            function a(e) { return function(t, n) { var r = s(t); return r == e ? t : void i(arguments.callee, n || 'Expected "' + e + '" but got "' + r + '".', Array.prototype.slice.call(arguments, 2)) } }
            /*
             * Copyright (c) 2012 Mathieu Turcotte
             * Licensed under the MIT license.
             */
            var u = e("util"),
                c = t.exports = e("./errors");
            t.exports.checkArgument = function(e, t) { e || i(arguments.callee, t, Array.prototype.slice.call(arguments, 2)) }, t.exports.checkState = function(e, t) { e || o(arguments.callee, t, Array.prototype.slice.call(arguments, 2)) }, t.exports.checkIsDef = function(e, t) { return void 0 !== e ? e : void i(arguments.callee, t || "Expected value to be defined but was undefined.", Array.prototype.slice.call(arguments, 2)) }, t.exports.checkIsDefAndNotNull = function(e, t) { return null != e ? e : void i(arguments.callee, t || 'Expected value to be defined and not null but got "' + s(e) + '".', Array.prototype.slice.call(arguments, 2)) }, t.exports.checkIsString = a("string"), t.exports.checkIsArray = a("array"), t.exports.checkIsNumber = a("number"), t.exports.checkIsBoolean = a("boolean"), t.exports.checkIsFunction = a("function"), t.exports.checkIsObject = a("object")
        }, { "./errors": 188, util: 227 }],
        188: [function(e, t, n) {
            function r(e) { Error.call(this, e), this.message = e }

            function i(e) { Error.call(this, e), this.message = e }
            /*
             * Copyright (c) 2012 Mathieu Turcotte
             * Licensed under the MIT license.
             */
            var o = e("util");
            o.inherits(r, Error), r.prototype.name = "IllegalArgumentError", o.inherits(i, Error), i.prototype.name = "IllegalStateError", t.exports.IllegalStateError = i, t.exports.IllegalArgumentError = r
        }, { util: 227 }],
        189: [function(e, t, n) {
            function r() { throw new Error("setTimeout has not been defined") }

            function i() { throw new Error("clearTimeout has not been defined") }

            function o(e) { if (f === setTimeout) return setTimeout(e, 0); if ((f === r || !f) && setTimeout) return f = setTimeout, setTimeout(e, 0); try { return f(e, 0) } catch (t) { try { return f.call(null, e, 0) } catch (t) { return f.call(this, e, 0) } } }

            function s(e) { if (p === clearTimeout) return clearTimeout(e); if ((p === i || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e); try { return p(e) } catch (t) { try { return p.call(null, e) } catch (t) { return p.call(this, e) } } }

            function a() { b && h && (b = !1, h.length ? _ = h.concat(_) : m = -1, _.length && u()) }

            function u() { if (!b) { var e = o(a);
                    b = !0; for (var t = _.length; t;) { for (h = _, _ = []; ++m < t;) h && h[m].run();
                        m = -1, t = _.length }
                    h = null, b = !1, s(e) } }

            function c(e, t) { this.fun = e, this.array = t }

            function l() {} var f, p, d = t.exports = {};! function() { try { f = "function" == typeof setTimeout ? setTimeout : r } catch (e) { f = r } try { p = "function" == typeof clearTimeout ? clearTimeout : i } catch (e) { p = i } }(); var h, _ = [],
                b = !1,
                m = -1;
            d.nextTick = function(e) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                _.push(new c(e, t)), 1 !== _.length || b || o(u) }, c.prototype.run = function() { this.fun.apply(null, this.array) }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.binding = function(e) { throw new Error("process.binding is not supported") }, d.cwd = function() { return "/" }, d.chdir = function(e) { throw new Error("process.chdir is not supported") }, d.umask = function() { return 0 } }, {}],
        190: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e, t, n) { var r = new _(t, n, 1, _.strategy.LEAK); return function() { var t = Array.prototype.slice.call(arguments, 0); return t.unshift(e), r.schedule.apply(r, t) } }

            function o(e, t) { var n = this; if (!e) throw new Error("Token is required for Notifications client");
                p.call(this), t = t || {}, t.logLevel = t.logLevel || "error", h.setLevel(t.logLevel); var r = t.minTokenRefreshInterval || 1e4,
                    o = t.productId || "notifications";
                t.twilsockClient = t.twilsockClient || new v(e, t), t.transport = t.transport || new y(t.twilsockClient); var s = t.twilsockClient,
                    a = t.transport,
                    u = { overall: !1, transport: !1, registration: !1 },
                    c = new b(e, t);
                (0, f.default)(this, { _config: { value: c }, _registrar: { value: new m(o, a, s, c) }, _twilsock: { value: s }, _reliableTransportState: { value: u }, updateToken: { value: i(this._updateToken.bind(this), 1, r), enumerable: !0 }, connectionState: { get: function() { return "disconnected" === n._twilsock.state ? "disconnected" : "disconnecting" === n._twilsock.state ? "disconnecting" : "connected" === n._twilsock.state && n._reliableTransportState.registration ? "connected" : "rejected" === n._twilsock.state ? "denied" : "connecting" } } }), this._onTransportStateChange(this._twilsock.connected), this._registrar.on("transportReady", function(e) { n._onRegistrationStateChange(e ? "registered" : "") }), this._registrar.on("stateChanged", function(e) { n._onRegistrationStateChange(e) }), this._registrar.on("needReliableTransport", this._onNeedReliableTransport.bind(this)), this._twilsock.on("message", function(e, t) { return n._routeMessage(e, t) }), this._twilsock.on("connected", function(e) { n._onTransportStateChange(!0), n._registrar.setNotificationId("twilsock", e) }), this._twilsock.on("disconnected", function() { n._onTransportStateChange(!1) }) } var s = e("babel-runtime/core-js/object/freeze"),
                a = r(s),
                u = e("babel-runtime/core-js/promise"),
                c = r(u),
                l = e("babel-runtime/core-js/object/define-properties"),
                f = r(l),
                p = e("events").EventEmitter,
                d = e("util").inherits,
                h = e("loglevel"),
                _ = e("bottleneck"),
                b = e("./configuration"),
                m = e("./registrar"),
                v = e("twilsock"),
                y = e("twilio-transport");
            d(o, p), o.prototype._routeMessage = function(e, t) { h.trace("Message arrived: ", e, t), this.emit("message", e, t) }, o.prototype._onNeedReliableTransport = function(e) { e ? this._twilsock.connect() : this._twilsock.disconnect() }, o.prototype._onRegistrationStateChange = function(e) { this._reliableTransportState.registration = "registered" === e, this._updateTransportState() }, o.prototype._onTransportStateChange = function(e) { this._reliableTransportState.transport = e, this._updateTransportState() }, o.prototype._updateTransportState = function() { var e = this._reliableTransportState.transport && this._reliableTransportState.registration;
                this._reliableTransportState.overall !== e && (this._reliableTransportState.overall = e, h.info("NTFCN I: Transport ready " + e), this.emit("transportReady", e), this.emit("connectionStateChanged", this.connectionState)) }, o.prototype.subscribe = function(e, t) { return t = t || "twilsock", h.trace("Add subscriptions for message type: ", e, t), this._registrar.subscribe(e, t) }, o.prototype.unsubscribe = function(e, t) { return t = t || "twilsock", h.trace("Remove subscriptions for message type: ", e, t), this._registrar.unsubscribe(e, t) }, o.prototype.handlePushNotification = function(e) { h.warn("Push message passed, but no functionality implemented yet: " + e) }, o.prototype.setPushRegistrationId = function(e, t) { this._registrar.setNotificationId(t || "gcm", e) }, o.prototype._updateToken = function(e) { return h.info("NTFCN I: authTokenUpdated"), this._config.token !== e && (this._twilsock.updateToken(e), this._config.updateToken(e), this._registrar.updateToken()), c.default.resolve() }, (0, a.default)(o), t.exports = o }, { "./configuration": 191, "./registrar": 193, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/freeze": 33, "babel-runtime/core-js/promise": 37, bottleneck: 58, events: 182, loglevel: 184, "twilio-transport": 220, twilsock: 221, util: 227 }],
        191: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e, t) { var n = this;
                t = (t || {}).Notification || {}; var r = t.ersUri || a;
                (0, s.default)(this, { _registrarUri: { value: r + u }, _token: { value: e, writable: !0 }, registrarUri: { get: function() { return n._registrarUri } }, token: { get: function() { return n._token } } }) } var o = e("babel-runtime/core-js/object/define-properties"),
                s = r(o),
                a = "https://ers.twilio.com",
                u = "/v1/registrations";
            i.prototype.updateToken = function(e) { this._token = e }, t.exports = i }, { "babel-runtime/core-js/object/define-properties": 31 }],
        192: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e) { var t = []; return e.forEach(function(e) { return t.push(e) }), t }

            function o(e, t, n, r) { var i = this,
                    o = b.create({ initial: { state: "unregistered", event: "init", defer: !0 }, events: [{ name: "userUpdate", from: ["unregistered"], to: "registering" }, { name: "userUpdate", from: ["registered"], to: "unregistering" }, { name: "registered", from: ["registering", "retrying"], to: "registered" }, { name: "unregistered", from: ["unregistering"], to: "unregistered" }, { name: "retry", from: ["retrying"], to: "retrying" }, { name: "failure", from: ["registering"], to: "retrying" }, { name: "failure", from: ["retrying"], to: "retrying" }, { name: "failure", from: ["unregistering"], to: "unregistered" }], callbacks: { onregistering: function(e, t, n, r) { return i._register(r) }, onunregistering: function() { return i._unregister() }, onregistered: function() { return i._onRegistered() }, onunregistered: function() { return i._onUnregistered() }, onretrying: function(e, t, n, r) { return i._initRetry(r) }, onfailure: function(e, t, n, r) { "retrying" === t && i._initRetry(r) } } }),
                    s = m.exponential({ randomisationFactor: .2, initialDelay: 2e3, maxDelay: 12e4 });
                s.on("ready", function() { i._retry() }), (0, d.default)(this, { _transport: { value: t }, _context: { value: e }, _url: { value: n.registrarUri, writable: !1 }, _config: { value: n }, _fsm: { value: o }, _backoff: { value: s }, _channelType: { value: r }, _registrationId: { value: !1, writable: !0 }, _notificationId: { value: !1, writable: !0 }, _messageTypes: { value: new f.default, writable: !0 }, _pendingUpdate: { value: null, writable: !0 } }), h.call(this), o.init() } var s = e("babel-runtime/core-js/object/freeze"),
                a = r(s),
                u = e("babel-runtime/core-js/promise"),
                c = r(u),
                l = e("babel-runtime/core-js/set"),
                f = r(l),
                p = e("babel-runtime/core-js/object/define-properties"),
                d = r(p),
                h = e("events").EventEmitter,
                _ = e("util").inherits,
                b = e("javascript-state-machine"),
                m = e("backoff"),
                v = e("loglevel");
            _(o, h), o.prototype.setNotificationId = function(e) { this._notificationId !== e && (this._notificationId = e, this._updateRegistration()) }, o.prototype.updateToken = function() { return this._updateRegistration() }, o.prototype.has = function(e) { return this._messageTypes.has(e) }, o.prototype.subscribe = function(e) { return this._messageTypes.has(e) ? (v.debug("Message type already registered ", e), !1) : (this._messageTypes.add(e), this._updateRegistration(), !0) }, o.prototype.unsubscribe = function(e) { return !!this._messageTypes.has(e) && (this._messageTypes.delete(e), this._messageTypes.size > 0 ? this._updateRegistration() : this._removeRegistration(), !0) }, o.prototype._updateRegistration = function() { this._notificationId && this._update(this._notificationId, i(this._messageTypes)) }, o.prototype._removeRegistration = function() { this._notificationId && this._update(this._notificationId, i(this._messageTypes)) }, o.prototype._update = function(e, t) { var n = { notificationId: e, messageTypes: t };
                this._fsm.is("unregistered") ? n.notificationId && n.messageTypes.length > 0 && this._fsm.userUpdate(n) : this._fsm.is("registered") ? (this._fsm.userUpdate(n), this._setPendingUpdate(n)) : this._setPendingUpdate(n) }, o.prototype._setPendingUpdate = function(e) { this._pendingUpdate = e }, o.prototype._checkPendingUpdate = function() { if (this._pendingUpdate) { var e = this._pendingUpdate;
                    this._pendingUpdate = null, this._updateRegistration(e.notificationId, e.messageTypes) } }, o.prototype._initRetry = function(e) { this._pendingUpdate || this._setPendingUpdate(e), this._backoff.backoff() }, o.prototype._retry = function() { if (this._pendingUpdate) { var e = this._pendingUpdate;
                    this._pendingUpdate = null, this._register(e) } }, o.prototype._onRegistered = function() { this._backoff.reset(), this.emit("stateChanged", "registered"), this._checkPendingUpdate() }, o.prototype._onUnregistered = function() { this._backoff.reset(), this.emit("stateChanged", "unregistered"), this._checkPendingUpdate() }, o.prototype._register = function(e) { var t = this,
                    n = { endpoint_platform: this._context.platform, channel_type: this._channelType, version: "2", message_types: e.messageTypes, data: {}, ttl: "PT24H" }; "twilsock" === this._channelType ? n.data.url = e.notificationId : n.data.registration_id = e.notificationId; var r = this._url + "?productId=" + this._context.productId,
                    i = { "Content-Type": "application/json", "X-Twilio-Token": this._config.token }; return v.trace("NTFCN I: Creating registration for channel ", this._channelType), this._transport.post(r, i, n).then(function(n) { t._registrationId = n.body.id, t._registrationData = e, v.debug("NTFCN I: Registration created: ", n), t._fsm.registered() }).catch(function(n) { return v.error("NTFCN E: Registration failed: ", n), t._fsm.failure(e), n }) }, o.prototype._unregister = function() { var e = this; if (!this._registrationId) return c.default.resolve(); var t = this._url + "/" + this._registrationId + "?productId=" + this._context.productId,
                    n = { "Content-Type": "application/json", "X-Twilio-Token": this._config.token }; return v.trace("NTFCN I: removing registration for ", this._channelType), this._transport.delete(t, n).then(function() { v.debug("NTFCN I: registration removed for ", e._channelType), e._registrationId = !1, e._fsm.unregistered() }).catch(function(t) { return v.error("NTFCN E: failed to remove of registration ", e.channelType, t), e._fsm.failure(), t }) }, (0, a.default)(o), t.exports = o }, { "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/freeze": 33, "babel-runtime/core-js/promise": 37, "babel-runtime/core-js/set": 38, backoff: 48, events: 182, "javascript-state-machine": 183, loglevel: 184, util: 227 }],
        193: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e, t, n, r) { var i = this;
                (0, l.default)(this, { _conf: { value: r }, _connectors: { value: new u.default } }); var o = ("undefined" != typeof navigator ? navigator.userAgent : "web").substring(0, 128);
                this._connectors.set("twilsock", new h({ productId: e, platform: o }, n, r)), this._connectors.set("gcm", new d({ productId: e, platform: o }, t, r, "gcm")), this._connectors.set("apn", new d({ productId: e, platform: o }, t, r, "apn")), this._connectors.get("twilsock").on("transportReady", function(e) { return i.emit("transportReady", e) }), f.call(this) } var o = e("babel-runtime/core-js/object/freeze"),
                s = r(o),
                a = e("babel-runtime/core-js/map"),
                u = r(a),
                c = e("babel-runtime/core-js/object/define-properties"),
                l = r(c),
                f = e("events").EventEmitter,
                p = e("util").inherits,
                d = e("./registrar.connector"),
                h = e("./twilsock.connector");
            p(i, f), i.prototype.setNotificationId = function(e, t) { this._connector(e).setNotificationId(t) }, i.prototype.hasSubscription = function(e, t) { this._connector(t).has(e) }, i.prototype.subscribe = function(e, t) { this._connector(t).subscribe(e) }, i.prototype.unsubscribe = function(e, t) { this._connector(t).unsubscribe(e) }, i.prototype.updateToken = function() { this._connectors.forEach(function(e) { return e.updateToken() }) }, i.prototype._connector = function(e) { var t = this._connectors.get(e); if (!t) throw new Error("Unknown channel type: " + e); return t }, (0, s.default)(i), t.exports = i }, { "./registrar.connector": 192, "./twilsock.connector": 194, "babel-runtime/core-js/map": 28, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/freeze": 33, events: 182, util: 227 }],
        194: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e) { var t = []; return e.forEach(function(e) { return t.push(e) }), t }

            function o(e, t, n) { var r = this;
                e.id = h.v4(), (0, f.default)(this, { _twilsock: { value: t }, _messageTypes: { value: new c.default }, config: { value: n }, context: { value: e } }), t.on("stateChanged", function(e) { "connected" !== e && r.emit("transportReady", !1) }), t.on("registered", function(n) { e && n === e.id && "connected" === t.state && r.emit("transportReady", !0) }), p.call(this) } var s = e("babel-runtime/core-js/object/freeze"),
                a = r(s),
                u = e("babel-runtime/core-js/set"),
                c = r(u),
                l = e("babel-runtime/core-js/object/define-properties"),
                f = r(l),
                p = e("events").EventEmitter,
                d = e("util").inherits,
                h = e("uuid"),
                _ = e("loglevel"),
                b = 172800;
            d(o, p), o.prototype.setNotificationId = function() { return !1 }, o.prototype.updateToken = function() { this._twilsock.removeNotificationsContext(this.context.id), this.context.id = h.v4(), this._updateContext() }, o.prototype.has = function(e) { return this._messageTypes.has(e) }, o.prototype.subscribe = function(e) { return this._messageTypes.has(e) ? (_.trace("Message type already registered ", e), !1) : (this._messageTypes.add(e), this._updateContext(), !0) }, o.prototype.unsubscribe = function(e) { return !!this._messageTypes.has(e) && (this._messageTypes.delete(e), this._messageTypes.size > 0 ? this._updateContext() : this._twilsock.removeNotificationsContext(this.context.id), !0) }, o.prototype._updateContext = function() { var e = i(this._messageTypes),
                    t = { product_id: this.context.productId, notification_protocol_version: 4, endpoint_platform: this.context.platform, ttl: b, token: this.config.token, message_types: e };
                this.emit("transportReady", !1), this._twilsock.setNotificationsContext(this.context.id, t) }, (0, a.default)(o), t.exports = o }, { "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/freeze": 33, "babel-runtime/core-js/set": 38, events: 182, loglevel: 184, util: 227, uuid: 229 }],
        195: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(n, "__esModule", { value: !0 }); var i = e("babel-runtime/core-js/map"),
                o = r(i),
                s = e("babel-runtime/core-js/object/define-properties"),
                a = r(s),
                u = e("babel-runtime/helpers/classCallCheck"),
                c = r(u),
                l = e("babel-runtime/helpers/createClass"),
                f = r(l),
                p = function() {
                    function e() {
                        (0, c.default)(this, e), (0, a.default)(this, { _items: { value: new o.default } }) } return (0, f.default)(e, [{ key: "store", value: function(e, t) { return t } }, { key: "get", value: function(e) { return this._items.get(e) || null } }]), e }();
            n.default = p, t.exports = n.default }, { "babel-runtime/core-js/map": 28, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42 }],
        196: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e) { return e._subscribe(), e }

            function o(e, t, n, r) { return { unique_name: e, purpose: t, context: n, data: r } }

            function s(e) { return e ? "string" == typeof e ? { id: e } : { id: e.uniqueName || e.sid || e.id, purpose: e.purpose, data: e.data, context: e.context, mode: e.mode } : { id: null } }
            Object.defineProperty(n, "__esModule", { value: !0 }); var a = e("babel-runtime/core-js/object/freeze"),
                u = r(a),
                c = e("babel-runtime/core-js/promise"),
                l = r(c),
                f = e("babel-runtime/core-js/object/define-properties"),
                p = r(f),
                d = e("babel-runtime/core-js/object/get-prototype-of"),
                h = r(d),
                _ = e("babel-runtime/helpers/classCallCheck"),
                b = r(_),
                m = e("babel-runtime/helpers/createClass"),
                v = r(m),
                y = e("babel-runtime/helpers/possibleConstructorReturn"),
                g = r(y),
                k = e("babel-runtime/helpers/inherits"),
                w = r(k),
                j = e("events"),
                C = e("twilsock"),
                x = r(C),
                E = e("twilio-transport"),
                S = r(E),
                T = e("twilio-notifications"),
                R = r(T),
                P = e("./utils"),
                I = e("./logger"),
                O = r(I),
                A = e("./configuration"),
                N = r(A),
                F = e("./subscriptions"),
                M = r(F),
                U = e("./router"),
                D = r(U),
                L = e("./network"),
                q = r(L),
                B = e("./syncdocument"),
                z = r(B),
                H = e("./synclist"),
                V = r(H),
                W = e("./syncmap"),
                G = r(W),
                $ = e("./clientInfo"),
                J = r($),
                K = e("./entitiesCache"),
                X = r(K),
                Q = e("./syncerror"),
                Y = r(Q),
                Z = "data_sync",
                ee = e("../package.json").version,
                te = function(e) {
                    function t(e, n) {
                        (0, b.default)(this, t); var r = (0, g.default)(this, (t.__proto__ || (0, h.default)(t)).call(this)); if (n = n || {}, !e) throw new Error("Sync library needs a valid Twilio token to be passed");
                        n.hasOwnProperty("logLevel") && O.default.setLevel(n.logLevel), n.productId = n.productId || Z; var i = n.productId;
                        n.twilsockClient = n.twilsockClient || new x.default(e, n), n.transport = n.transport || new S.default(n.twilsockClient), n.notificationsClient = n.notificationsClient || new R.default(e, n); var o = n.transport,
                            s = n.notificationsClient,
                            a = new N.default(e, n),
                            u = new q.default(i, new J.default(ee), a, o),
                            c = new M.default(a, u),
                            l = new D.default({ config: a, subscriptions: c, notifications: s }); return (0, p.default)(r, { _config: { value: a }, _twilsock: { value: n.twilsockClient }, _notifications: { value: s }, _network: { value: u }, _router: { value: l }, _subscriptions: { value: c }, _entities: { value: new X.default }, _dependencies: { get: function() { return { config: r._config, datasync: r, network: r._network, router: r._router } } }, connectionState: { get: function() { return r._notifications.connectionState }, enumerable: !0 } }), s.on("connectionStateChanged", function() { r.emit("connectionStateChanged", r._notifications.connectionState) }), r } return (0, w.default)(t, e), (0, v.default)(t, [{ key: "_get", value: function(e, t) { if (!t) return l.default.resolve(null); var n = new P.UriBuilder(e).arg("Deep", !0).arg("Id", t).build(); return this._network.get(n).then(function(e) { return e.body }).then(function(e) { return e.documents || e.lists || e.maps || [] }).then(function(e) { return 0 === e.length ? null : e[0] }) } }, { key: "_createDocument", value: function(e, t, n) { var r = o(e, t, null, n); return this._network.post(this._config.documentsUri, r).then(function(e) { return e.body }) } }, { key: "_getDocument", value: function(e) { return this._get(this._config.documentsUri, e) } }, { key: "_createList", value: function(e, t, n) { var r = o(e, t, n); return this._network.post(this._config.listsUri, r).then(function(e) { return e.body }) } }, { key: "_getList", value: function(e) { return this._get(this._config.listsUri, e) } }, { key: "_createMap", value: function(e, t, n) { var r = o(e, t, n); return this._network.post(this._config.mapsUri, r).then(function(e) { return e.body }) } }, { key: "_getMap", value: function(e) { return this._get(this._config.mapsUri, e) } }, { key: "_getCached", value: function(e, t) { var n = this._entities.get(e, t); return n ? l.default.resolve(n._subscribe()) : null } }, { key: "_removeFromCache", value: function(e) { this._entities.remove(e) } }, { key: "document", value: function(e) { var t = this,
                                n = s(e),
                                r = n.id,
                                o = n.purpose,
                                a = n.data,
                                u = n.mode; return this._getCached(r, "document") || this._getDocument(r).then(function(e) { if (e) return e; if ("open" !== u) return t._createDocument(r, o, a); throw new Y.default("Not found", 404) }).then(function(e) { return new z.default(t._dependencies, e, function(e) { return t._removeFromCache(e) }) }).then(function(e) { return t._entities.store(e) }).then(i) } }, { key: "map", value: function(e) { var t = this,
                                n = s(e),
                                r = n.id,
                                o = n.purpose,
                                a = n.context,
                                u = n.mode; return this._getCached(r, "map") || this._getMap(r).then(function(e) { if (e) return e; if ("open" !== u) return t._createMap(r, o, a); throw new Y.default("Not found", 404) }).then(function(e) { return new G.default(t._dependencies, e, function(e) { return t._removeFromCache(e) }) }).then(function(e) { return t._entities.store(e) }).then(i) } }, { key: "list", value: function(e) { var t = this,
                                n = s(e),
                                r = n.id,
                                o = n.purpose,
                                a = n.context,
                                u = n.mode; return this._getCached(r, "list") || this._getList(r).then(function(e) { if (e) return e; if ("open" !== u) return t._createList(r, o, a); throw new Y.default("Not found", 404) }).then(function(e) { return new V.default(t._dependencies, e, function(e) { return t._removeFromCache(e) }) }).then(function(e) { return t._entities.store(e) }).then(i) } }, { key: "shutdown", value: function() { var e = this; return this._subscriptions.shutdown().then(function() { return e._twilsock.disconnect() }).then(function() {}) } }, { key: "updateToken", value: function(e) { return l.default.all([this._config.updateToken(e), this._notifications.updateToken(e), this._twilsock.updateToken(e)]).then(function() {}) } }]), t }(j.EventEmitter);
            (0, p.default)(te, { version: { enumerable: !0, value: ee } }), te.connectionState = { DISCONNECTED: "disconnected", CONNECTING: "connecting", CONNECTED: "connected", ERROR: "error", DENIED: "denied" }, (0, u.default)(te.connectionState), n.default = te, t.exports = n.default }, { "../package.json": 218, "./clientInfo": 197, "./configuration": 198, "./entitiesCache": 199, "./logger": 204, "./network": 206, "./router": 209, "./subscriptions": 210, "./syncdocument": 211, "./syncerror": 212, "./synclist": 213, "./syncmap": 214, "./utils": 215, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/freeze": 33, "babel-runtime/core-js/object/get-prototype-of": 34, "babel-runtime/core-js/promise": 37, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, "babel-runtime/helpers/inherits": 44, "babel-runtime/helpers/possibleConstructorReturn": 45, events: 182, "twilio-notifications": 190, "twilio-transport": 220, twilsock: 221 }],
        197: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e) { return { sdk: "js", sdkVer: e, os: s.default.os.family, osVer: s.default.os.version, pl: s.default.name, plVer: s.default.version } }
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = i; var o = e("platform"),
                s = r(o);
            t.exports = n.default }, { platform: 185 }],
        198: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(n, "__esModule", { value: !0 }); var i = e("babel-runtime/core-js/object/define-properties"),
                o = r(i),
                s = e("babel-runtime/helpers/classCallCheck"),
                a = r(s),
                u = e("babel-runtime/helpers/createClass"),
                c = r(u),
                l = "https://cds.twilio.com",
                f = "/v3/Subscriptions",
                p = "/v3/Maps",
                d = "/v3/Lists",
                h = "/v3/Documents",
                _ = function() {
                    function e(t, n) { var r = this;
                        (0, a.default)(this, e), n = (n || {}).DataSync || {}; var i = n.cdsUri || l,
                            s = { subscriptionsUri: i + f, documentsUri: i + h, listsUri: i + d, mapsUri: i + p };
                        (0, o.default)(this, { _token: { value: t, writable: !0 }, token: { enumerable: !0, get: function() { return r._token } }, subscriptionsUri: { enumerable: !0, get: function() { return s.subscriptionsUri } }, documentsUri: { enumerable: !0, get: function() { return s.documentsUri } }, listsUri: { enumerable: !0, get: function() { return s.listsUri } }, mapsUri: { enumerable: !0, get: function() { return s.mapsUri } } }) } return (0, c.default)(e, [{ key: "updateToken", value: function(e) { this._token = e } }]), e }();
            n.default = _, t.exports = n.default }, { "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42 }],
        199: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(n, "__esModule", { value: !0 }); var i = e("babel-runtime/core-js/map"),
                o = r(i),
                s = e("babel-runtime/core-js/object/define-properties"),
                a = r(s),
                u = e("babel-runtime/helpers/classCallCheck"),
                c = r(u),
                l = e("babel-runtime/helpers/createClass"),
                f = r(l),
                p = function() {
                    function e() {
                        (0, c.default)(this, e), (0, a.default)(this, { _names: { value: new o.default }, _entities: { value: new o.default } }) } return (0, f.default)(e, [{ key: "store", value: function(e) { var t = this._entities.get(e.sid); return t ? t : (this._entities.set(e.sid, e), e.uniqueName && this._names.set(e.type + "::" + e.uniqueName, e.sid), e) } }, { key: "get", value: function(e, t) { return this._entities.get(e) || this._getResolved(e, t) || null } }, { key: "remove", value: function(e) { var t = this._entities.get(e);
                            t && (this._entities.delete(e), t.uniqueName && this._names.delete(t.type + "::" + t.uniqueName)) } }, { key: "_getResolved", value: function(e, t) { var n = this._names.get(t + "::" + e); return n ? this._entities.get(n) : null } }]), e }();
            n.default = p, t.exports = n.default }, { "babel-runtime/core-js/map": 28, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42 }],
        200: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(n, "__esModule", { value: !0 }); var i = e("babel-runtime/core-js/object/define-properties"),
                o = r(i),
                s = e("babel-runtime/core-js/object/get-prototype-of"),
                a = r(s),
                u = e("babel-runtime/helpers/classCallCheck"),
                c = r(u),
                l = e("babel-runtime/helpers/createClass"),
                f = r(l),
                p = e("babel-runtime/helpers/possibleConstructorReturn"),
                d = r(p),
                h = e("babel-runtime/helpers/inherits"),
                _ = r(h),
                b = e("events"),
                m = r(b),
                v = function(e) {
                    function t(e) {
                        (0, c.default)(this, t); var n = (0, d.default)(this, (t.__proto__ || (0, a.default)(t)).call(this)); return (0, o.default)(n, { _deps: { value: e } }), n } return (0, _.default)(t, e), (0, f.default)(t, [{ key: "_subscribe", value: function() { return this._deps.router.subscribe(this.sid, this), this } }, { key: "_unsubscribe", value: function() { return this._deps.router.unsubscribe(this.sid, this), this } }, { key: "close", value: function() { this._unsubscribe() } }]), t }(m.default);
            n.default = v, t.exports = n.default }, { "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/get-prototype-of": 34, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, "babel-runtime/helpers/inherits": 44, "babel-runtime/helpers/possibleConstructorReturn": 45, events: 182 }],
        201: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(n, "__esModule", { value: !0 }); var i = e("./client"),
                o = r(i);
            n.default = o.default, t.exports = n.default }, { "./client": 196 }],
        202: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i() {}
            Object.defineProperty(n, "__esModule", { value: !0 }); var o = e("babel-runtime/helpers/typeof"),
                s = r(o);
            i.prototype.toString = Object.prototype.toString, i.prototype.hasOwnProperty = Object.prototype.hasOwnProperty, i.prototype.isArray = function(e) { return "[object Array]" === this.toString.call(e) }, i.prototype.isObject = function(e) { return "[object Object]" === this.toString.call(e) }, i.prototype.isString = function(e) { return "[object String]" === this.toString.call(e) }, i.prototype.isFunction = function(e) { return "[object Function]" === this.toString.call(e) }, i.prototype.has = function(e, t) { return hasOwnProperty.call(e, t) }, i.prototype.isEqual = function(e, t) { return this.eq(e, t, [], []) }, i.prototype.isContainer = function(e) { return this.isArray(e) || isObject(e) }, i.prototype.isSameContainer = function(e, t) { return this.isArray(e) && this.isArray(t) || this.isObject(e) && this.isObject(t) }, i.prototype.eq = function(e, t, n, r) { var i, o, a, u, c, l, f; if (e === t) return 0 !== e || 1 / e === 1 / t; if (null == e || null == t) return e === t; if (a = this.toString.call(e), a !== this.toString.call(t)) return !1; switch (a) {
                    case "[object String]":
                        return e === String(t);
                    case "[object Number]":
                        return e !== +e ? t !== +t : 0 === e ? 1 / e === 1 / t : e === +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +e === +t;
                    case "[object RegExp]":
                        return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.ignoreCase === t.ignoreCase } if ("object" !== ("undefined" == typeof e ? "undefined" : (0, s.default)(e)) || "object" !== ("undefined" == typeof t ? "undefined" : (0, s.default)(t))) return !1; if (c = n.length, function() { var t; for (t = []; c--;) t.push(n[c] === e); return t }()) return r[c] === t; if (n.push(e), r.push(t), f = 0, l = !0, "[object Array]" === a) { if (f = e.length, l = f === t.length)
                        for (; f-- && (l = this.eq(e[f], t[f], n, r));); } else { if (i = e.constructor, o = t.constructor, i !== o && !(this.isFunction(i) && i instanceof i && this.isFunction(o) && o instanceof o)) return !1; for (u in e)
                        if (this.has(e, u) && (f++, !(l = this.has(t, u) && this.eq(e[u], t[u], n, r)))) break;
                    if (l) { for (u in t)
                            if (this.has(t, u) && !f--) break;
                        l = !f } } return n.pop(), r.pop(), l }, i.prototype.getParent = function(e, t) { var n = t.replace(/\/[^\/]*$/, ""); return n || (n = "/"), e[n] }, i.prototype.flattenObject = function(e, t, n) { var r, i, o, s, a; if (null == t && (t = "/"), null == n && (n = {}), n[t] = { path: t, value: e }, "/" !== t && (t += "/"), this.isArray(e))
                    for (r = s = 0, a = e.length; s < a; r = ++s) o = e[r], this.flattenObject(o, t + r, n);
                else if (this.isObject(e))
                    for (i in e) o = e[i], this.flattenObject(o, t + i, n); return n }, i.prototype.diff = function(e, t) { var n, r, i, o, s, a, u, c, l, f, p, d, h, _, b; if (!this.isSameContainer(e, t)) throw new Error("Patches can only be derived from objects or arrays");
                d = this.flattenObject(e), h = this.flattenObject(t), n = {}, _ = {}, b = {}, f = {}; for (s in d)
                    if (i = d[s], o = h[s], this.getParent(h, s))
                        if (o) { if (this.isSameContainer(i.value, o.value)) continue;
                            this.isEqual(i.value, o.value) || (b[s] = o) } else _[s] = i;
                for (s in h) i = d[s], o = h[s], !i && this.isSameContainer(this.getParent(d, s), this.getParent(h, s)) && (n[s] = o); for (a in _) { i = _[a]; for (u in n)
                        if (o = n[u], this.isEqual(o.value, i.value)) { delete _[a], delete n[u], f[u] = a; break } }
                p = []; for (s in n) r = n[s], p.push({ op: "add", path: s, value: r.value }); for (s in _) p.push({ op: "remove", path: s }); for (s in b) r = b[s], p.push({ op: "replace", path: s, value: r.value }); for (l in f) c = f[l], p.push({ op: "move", from: c, path: l }); return p }, i.diff = function(e, t) { var n = new i; return n.diff(e, t) }, i.isDeepEqual = function(e, t) { return 0 === this.diff(e, t).length }, n.default = i, t.exports = n.default }, { "babel-runtime/helpers/typeof": 47 }],
        203: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(n, "__esModule", { value: !0 }); var i = e("babel-runtime/core-js/object/define-properties"),
                o = r(i),
                s = e("babel-runtime/helpers/classCallCheck"),
                a = r(s),
                u = e("babel-runtime/helpers/createClass"),
                c = r(u),
                l = function() {
                    function e(t) { var n = this;
                        (0, a.default)(this, e), (0, o.default)(this, { _data: { value: t }, _index: { value: t.index, writable: !1 }, _uri: { value: t.uri, writable: !1 }, _value: { value: t.value, writable: !0 }, _revision: { value: t.revision, writable: !0 }, _lastEventId: { value: t.eventId, writable: !0 }, index: { enumerable: !0, get: function() { return n._index } }, value: { enumerable: !0, get: function() { return n._value } } }) } return (0, c.default)(e, [{ key: "_update", value: function(e, t, n) { return this._lastEventId = e, this._revision = t, this._value = n, this } }]), e }();
            n.default = l, t.exports = n.default }, { "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42 }],
        204: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e, t) { return [e].concat((0, s.default)(t)) }
            Object.defineProperty(n, "__esModule", { value: !0 }); var o = e("babel-runtime/core-js/array/from"),
                s = r(o),
                a = e("loglevel"),
                u = r(a);
            n.default = { setLevel: function(e) { u.default.setLevel(e) }, trace: function() { u.default.trace.apply(null, i("Sync T:", arguments)) }, debug: function() { u.default.debug.apply(null, i("Sync D:", arguments)) }, info: function() { u.default.info.apply(null, i("Sync I:", arguments)) }, warn: function() { u.default.warn.apply(null, i("Sync W:", arguments)) }, error: function() { u.default.error.apply(null, i("Sync E:", arguments)) } }, t.exports = n.default }, { "babel-runtime/core-js/array/from": 24, loglevel: 184 }],
        205: [function(e, t, n) {
            "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(n, "__esModule", { value: !0 });
            var i = e("babel-runtime/core-js/object/define-properties"),
                o = r(i),
                s = e("babel-runtime/helpers/classCallCheck"),
                a = r(s),
                u = e("babel-runtime/helpers/createClass"),
                c = r(u),
                l = function() {
                    function e(t) {
                        var n = this;
                        (0, a.default)(this, e), (0, o.default)(this, {
                            _data: { value: t },
                            _key: { value: t.key, writable: !1 },
                            _uri: { value: t.uri, writable: !1 },
                            _value: { value: t.value, writable: !0 },
                            _revision: { value: t.revision, writable: !0 },
                            _lastEventId: {
                                value: t.eventId,
                                writable: !0
                            },
                            key: { enumerable: !0, get: function() { return n._key } },
                            value: { enumerable: !0, get: function() { return n._value } }
                        })
                    }
                    return (0, c.default)(e, [{ key: "_update", value: function(e, t, n) { return this._lastEventId = e, this._revision = t, this._value = n, this } }]), e
                }();
            n.default = l, t.exports = n.default
        }, { "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42 }],
        206: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(n, "__esModule", { value: !0 }); var i = e("babel-runtime/core-js/object/freeze"),
                o = r(i),
                s = e("babel-runtime/core-js/json/stringify"),
                a = r(s),
                u = e("babel-runtime/core-js/object/define-properties"),
                c = r(u),
                l = e("babel-runtime/helpers/classCallCheck"),
                f = r(l),
                p = e("babel-runtime/helpers/createClass"),
                d = r(p),
                h = e("uuid"),
                _ = r(h),
                b = e("./logger"),
                m = r(b),
                v = function() {
                    function e(t, n, r, i) { var o = this;
                        (0, f.default)(this, e), (0, c.default)(this, { _config: { value: r }, _transport: { value: i }, _headers: { get: function() { return { "Content-Type": "application/json", "Twilio-Sync-Client-Info": (0, a.default)(n), "Twilio-Request-Id": "RQ" + _.default.v4().replace(/-/g, ""), "X-Twilio-Product-Id": t, "X-Twilio-Token": o._config.token } } } }) } return (0, d.default)(e, [{ key: "get", value: function(e) { return m.default.debug("GET", e, "ID:", this._headers["Twilio-Request-Id"]), this._transport.get(e, this._headers) } }, { key: "post", value: function(e, t, n) { var r = this._headers; return "undefined" != typeof n && (r["If-Match"] = n), m.default.debug("POST", e, "ID:", this._headers["Twilio-Request-Id"]), this._transport.post(e, r, t) } }, { key: "put", value: function(e, t, n) { var r = this._headers; return "undefined" != typeof n && (r["If-Match"] = n), m.default.debug("PUT", e, "ID:", this._headers["Twilio-Request-Id"]), this._transport.put(e, r, t) } }, { key: "delete", value: function(e) { return m.default.debug("DELETE", e, "ID:", this._headers["Twilio-Request-Id"]), this._transport.delete(e, this._headers) } }]), e }();
            n.default = v, (0, o.default)(v), t.exports = n.default }, { "./logger": 204, "babel-runtime/core-js/json/stringify": 27, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/freeze": 33, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, uuid: 217 }],
        207: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(n, "__esModule", { value: !0 }); var i = e("babel-runtime/core-js/promise"),
                o = r(i),
                s = e("babel-runtime/core-js/object/define-properties"),
                a = r(s),
                u = e("babel-runtime/helpers/classCallCheck"),
                c = r(u),
                l = e("babel-runtime/helpers/createClass"),
                f = r(l),
                p = function() {
                    function e(t, n, r, i) {
                        (0, c.default)(this, e), (0, a.default)(this, { prevToken: { value: r }, nextToken: { value: i }, source: { value: n }, hasNextPage: { value: !!i, enumerable: !0 }, hasPrevPage: { value: !!r, enumerable: !0 }, items: { get: function() { return t }, enumerable: !0 } }) } return (0, f.default)(e, [{ key: "nextPage", value: function() { return this.hasNextPage ? this.source(this.nextToken) : o.default.reject(new Error("No next page")) } }, { key: "prevPage", value: function() { return this.hasPrevPage ? this.source(this.prevToken) : o.default.reject(new Error("No previous page")) } }]), e }();
            n.default = p, t.exports = n.default }, { "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/promise": 37, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42 }],
        208: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(n, "__esModule", { value: !0 }); var i = e("babel-runtime/core-js/object/freeze"),
                o = r(i),
                s = e("babel-runtime/core-js/promise"),
                a = r(s),
                u = e("babel-runtime/core-js/object/define-properties"),
                c = r(u),
                l = e("babel-runtime/helpers/classCallCheck"),
                f = r(l),
                p = e("babel-runtime/helpers/createClass"),
                d = r(p),
                h = function() {
                    function e() {
                        (0, f.default)(this, e), (0, c.default)(this, { _queue: { value: [] }, _isActive: { value: !1, writable: !0 } }) } return (0, d.default)(e, [{ key: "_wakeupQueue", value: function() { var e = this;!this._isActive && this._queue.length > 0 && (this._isActive = !0, setTimeout(function() { return e._executeTask(e._queue[0]) }, 0)) } }, { key: "_pickNext", value: function() { var e = this; return this._queue.shift(), 0 === this._queue.length ? void(this._isActive = !1) : void setTimeout(function() { return e._executeTask(e._queue[0]) }, 0) } }, { key: "_pickSame", value: function(e) { var t = this;
                            this._queue[0].arg = e, setTimeout(function() { return t._executeTask(t._queue[0]) }, 0) } }, { key: "_executeTask", value: function(e) { var t = this;
                            e.task(e.context, e.arg).then(function(n) { t._pickNext(), e.resolve(n) }).catch(function(n) { try { if (!e.handle) throw n;
                                    e.handle(n).then(function(e) { return e }).then(function(e) { return t._pickSame(e) }).catch(e.reject) } catch (t) { e.reject(n) } }) } }, { key: "add", value: function(e, t, n, r) { var i = this; return new a.default(function(o, s) { i._queue.push({ task: e, context: t, arg: n, handle: r, resolve: o, reject: s }), i._wakeupQueue() }) } }]), e }();
            n.default = h, (0, o.default)(h), t.exports = n.default }, { "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/freeze": 33, "babel-runtime/core-js/promise": 37, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42 }],
        209: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(n, "__esModule", { value: !0 }); var i = e("babel-runtime/core-js/object/define-properties"),
                o = r(i),
                s = e("babel-runtime/helpers/classCallCheck"),
                a = r(s),
                u = e("babel-runtime/helpers/createClass"),
                c = r(u),
                l = e("./logger"),
                f = r(l),
                p = e("./utils"),
                d = "com.twilio.rtd.cds.document",
                h = "com.twilio.rtd.cds.list",
                _ = "com.twilio.rtd.cds.map",
                b = function() {
                    function e(t) { var n = this;
                        (0, a.default)(this, e), (0, o.default)(this, { _config: { value: t.config }, _subscriptions: { value: t.subscriptions }, _notifications: { value: t.notifications } }), this._notifications.subscribe(d), this._notifications.subscribe(h), this._notifications.subscribe(_), this._notifications.on("message", this.onMessage.bind(this)), this._notifications.on("transportReady", function(e) { e && n.onConnected() }) } return (0, c.default)(e, [{ key: "onMessage", value: function(e, t) { f.default.trace("Notification type:", e, "content:", t); var n = void 0; switch (e) {
                                case d:
                                    n = t.event.document_sid; break;
                                case h:
                                    n = t.event.list_sid; break;
                                case _:
                                    n = t.event.map_sid; break;
                                default:
                                    f.default.warn("Unknown message type:", e, "ignoring") }
                            n && (t.event.type = t.event_type, this._subscriptions.getSubscribers(n).forEach(function(e) { e._update((0, p.deepClone)(t.event)) })) } }, { key: "subscribe", value: function(e, t) { return this._subscriptions.add(e, t).then(function(e) { e && t._softSync() }).then(function() { return t }) } }, { key: "unsubscribe", value: function(e, t) { return this._subscriptions.remove(e, t).then(function() { return t }) } }, { key: "onConnected", value: function() { this._subscriptions.forEach(function(e, t) { t._softSync() }) } }]), e }();
            n.default = b, t.exports = n.default }, { "./logger": 204, "./utils": 215, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42 }],
        210: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e, t) { var n = [],
                    r = !0,
                    i = !1,
                    o = void 0; try { for (var s, a = (0, w.default)(e); !(r = (s = a.next()).done); r = !0) { var u = (0, g.default)(s.value, 2),
                            c = u[0],
                            l = u[1];
                        t.has(c) || n.push({ sid: c, type: l.type }) } } catch (e) { i = !0, o = e } finally { try {!r && a.return && a.return() } finally { if (i) throw o } } return n }
            Object.defineProperty(n, "__esModule", { value: !0 }); var o = e("babel-runtime/core-js/set"),
                s = r(o),
                a = e("babel-runtime/core-js/promise"),
                u = r(a),
                c = e("babel-runtime/core-js/map"),
                l = r(c),
                f = e("babel-runtime/core-js/object/define-properties"),
                p = r(f),
                d = e("babel-runtime/helpers/extends"),
                h = r(d),
                _ = e("babel-runtime/helpers/classCallCheck"),
                b = r(_),
                m = e("babel-runtime/helpers/createClass"),
                v = r(m),
                y = e("babel-runtime/helpers/slicedToArray"),
                g = r(y),
                k = e("babel-runtime/core-js/get-iterator"),
                w = r(k),
                j = e("backoff"),
                C = r(j),
                x = e("./logger"),
                E = r(x),
                S = function() {
                    function e(t, n) {
                        function r() { var e = { randomisationFactor: .2, initialDelay: 50, maxDelay: 12e4 }; return C.default.exponential((0, h.default)(e, t.backoffConfig || {})) } var i = this;
                        (0, b.default)(this, e), (0, p.default)(this, { _config: { value: t }, _network: { value: n }, _backoff: { value: r() }, _types: { value: new l.default }, _subscriptions: { value: new l.default }, _persisted: { value: new l.default } }), this._backoff.on("ready", function() { var e = i._getAction(),
                                t = e.action,
                                n = e.list;
                            t ? i._request(t, n.map(function(e) { return { object_sid: e.sid, object_type: e.type } })).then(function() { i._backoff.reset(), i._backoff.backoff() }).catch(function(e) { E.default.error("Error while persisting subscriptions, retrying", t, e), i._backoff.backoff(e) }) : (i._backoff.reset(), E.default.info("Subscription list persisted")) }) } return (0, v.default)(e, [{ key: "_getAction", value: function() { var e = this,
                                t = i(this._subscriptions, this._persisted); if (t.length > 0) return { action: "establish", list: t }; var n = i(this._persisted, this._subscriptions).map(function(t) { return { sid: t.sid, type: e._types.get(t.sid) } }); return n.length > 0 ? { action: "cancel", list: n } : {} } }, { key: "_persist", value: function() { try { this._backoff.backoff() } catch (e) {} } }, { key: "_request", value: function(e, t) { var n = this;
                            E.default.debug("Modifying server subscriptions: ", e, t); var r = { event_protocol_version: 3, action: e, requests: t }; return this._network.post(this._config.subscriptionsUri, r).then(function(e) { e.body.results.forEach(function(e) { if (e.subscription) { n._persisted.set(e.object_sid, e.subscription); var t = n._subscriptions.get(e.object_sid);
                                        t && t.resolve(!0) } else n._persisted.delete(e.object_sid), n._types.delete(e.object_sid) }) }) } }, { key: "add", value: function(e, t) { var n = this,
                                r = this._subscriptions.has(e),
                                i = this._persisted.has(e); if (r && i) { var o = this._subscriptions.get(e); return o.subscribers.add(t), u.default.resolve(!1) } if (this._subscribed && !i) { var a = this._subscriptions.get(e); return a.promise } var c = { type: t.type, subscribers: new s.default([t]), promise: null, resolve: null, reject: null };
                            this._subscriptions.set(e, c); var l = new u.default(function(e, t) { c.resolve = e, c.reject = t, n._persist() }); return c.promise = l, l } }, { key: "remove", value: function(e, t) { if (!this._subscriptions.has(e)) return u.default.resolve(!0); var n = this._subscriptions.get(e); return n.subscribers.has(t) ? (n.subscribers.delete(t), n.subscribers.size > 0 ? u.default.resolve(!1) : (this._types.set(e, n.type), this._subscriptions.delete(e), this._persist(), u.default.resolve(!0))) : u.default.resolve(!1) } }, { key: "getSubscribers", value: function(e) { var t = this._subscriptions.get(e); return t && t.subscribers ? t.subscribers : new s.default } }, { key: "forEach", value: function(e) { this._subscriptions.forEach(function(t, n) { t.subscribers.forEach(function(t) { return e(n, t) }) }) } }, { key: "shutdown", value: function() { this._backoff.reset(), this._subscriptions.clear(); var e = [],
                                t = !0,
                                n = !1,
                                r = void 0; try { for (var i, o = (0, w.default)(this._persisted); !(t = (i = o.next()).done); t = !0) { var s = (0, g.default)(i.value, 2),
                                        a = s[0],
                                        c = s[1];
                                    e.push({ object_sid: a, type: c.type }) } } catch (e) { n = !0, r = e } finally { try {!t && o.return && o.return() } finally { if (n) throw r } } return e.length > 0 ? this._request("cancel", e).catch(function() {}) : u.default.resolve() } }]), e }();
            n.default = S, t.exports = n.default }, { "./logger": 204, "babel-runtime/core-js/get-iterator": 25, "babel-runtime/core-js/map": 28, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/promise": 37, "babel-runtime/core-js/set": 38, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, "babel-runtime/helpers/extends": 43, "babel-runtime/helpers/slicedToArray": 46, backoff: 48 }],
        211: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(n, "__esModule", { value: !0 }); var i = e("babel-runtime/helpers/extends"),
                o = r(i),
                s = e("babel-runtime/core-js/object/define-properties"),
                a = r(s),
                u = e("babel-runtime/core-js/object/get-prototype-of"),
                c = r(u),
                l = e("babel-runtime/helpers/classCallCheck"),
                f = r(l),
                p = e("babel-runtime/helpers/createClass"),
                d = r(p),
                h = e("babel-runtime/helpers/possibleConstructorReturn"),
                _ = r(h),
                b = e("babel-runtime/helpers/inherits"),
                m = r(b),
                v = e("./logger"),
                y = r(v),
                g = e("./entity"),
                k = r(g),
                w = e("./jsondiff"),
                j = r(w),
                C = e("./retryingqueue"),
                x = r(C),
                E = function(e) {
                    function t(e, n, r) {
                        (0, f.default)(this, t); var i = (0, _.default)(this, (t.__proto__ || (0, c.default)(t)).call(this, e)); return (0, a.default)(i, { _config: { value: e.config }, _datasync: { value: e.datasync }, _network: { value: e.network }, _router: { value: e.router }, _updateQueue: { value: new x.default }, _pendingListeners: { value: {} }, _onRemoveDocument: { value: r }, _descriptor: { value: n }, _sid: { value: n.sid }, _revision: { value: n.revision, writable: !0 }, _lastEventId: { value: n.last_event_id, writable: !0 }, _data: { value: n.data || {}, writable: !0 }, uri: { get: function() { return i._descriptor.url } }, sid: { enumerable: !0, get: function() { return i._sid } }, value: { enumerable: !0, get: function() { return i._data } }, uniqueName: { enumerable: !0, get: function() { return i._descriptor.unique_name || null } } }), i._initialize(), i } return (0, m.default)(t, e), (0, d.default)(t, [{ key: "_initialize", value: function() { var e = this;
                            ["keyAdded", "keyRemoved", "keyUpdated", "keyAddedRemotely", "keyRemovedRemotely", "keyUpdatedRemotely"].forEach(function(t) { e._pendingListeners[t] = {}, e.on(t, function(n, r) { var i = e._pendingListeners[t][n] || [];
                                    i.forEach(function(e) { e(r) }), e._pendingListeners[t][n] = [] }) }) } }, { key: "_update", value: function(e) { switch (e.type) {
                                case "document_updated":
                                    if (e.id > this._lastEventId) { var t = this._data;
                                        this._lastEventId = e.id, this._revision = e.document_revision, this._data = e.document_data, this._traverse(t, e.document_data, !1), this.emit("updated", e.document_data, !1), this.emit("updatedRemotely", e.document_data) } break;
                                case "document_removed":
                                    this.emit("removed", !1), this.emit("removedRemotely") } } }, { key: "_traverse", value: function(e, t, n) { var r = this,
                                i = j.default.diff(e, t);
                            i.forEach(function(e) { "add" === e.op ? (r.emit("keyAdded", e.path, e.value, n), n || r.emit("keyAddedRemotely", e.path, e.value)) : "replace" === e.op ? (r.emit("keyUpdated", e.path, e.value, n), n || r.emit("keyUpdatedRemotely", e.path, e.value)) : "remove" === e.op && (r.emit("keyRemoved", e.path, n), n || r.emit("keyRemovedRemotely", e.path)) }) } }, { key: "get", value: function(e) { return e ? this._value(e) : this._data } }, { key: "set", value: function(e, t) { return this._actualSet(e, t ? function() { throw new Error("Revision mismatch") } : null) } }, { key: "_actualSet", value: function(e, t) { var n = this,
                                r = void 0,
                                i = { data: e }; return t && (i.revision = this._revision, r = function(r) { if (412 === r.status) return n._softSync().then(function() { return { revision: n._revision, data: t(n._data, e) } }); throw r }), this._updateQueue.add(this._set.bind(this), this.uri, i, r).then(function(t) { return n._revision = t.revision, n._data = t.data, e }).then(function(e) { n.emit("updated", e, !0) }) } }, { key: "mutate", value: function(e) { return this._actualSet(e(this._data), e) } }, { key: "update", value: function(e) { return this.mutate(function(t) { return (0, o.default)(t, e), t }) } }, { key: "_set", value: function(e, t) { return this._network.post(this.uri, { data: t.data }, t.revision).then(function(e) { var n = e.body.revision; return { revision: n, data: t.data } }) } }, { key: "_softSync", value: function() { var e = this; return this._network.get(this.uri).then(function(t) { return e._update({ type: "document_updated", id: t.body.last_event_id, document_revision: t.body.revision, document_data: t.body.data }), e }) } }, { key: "_forceSync", value: function() { var e = this; return this._network.get(this.uri).then(function(t) { return e._revision = t.body.revision, e._data = t.body.data, e }).catch(function(e) { y.default.error("Failed to get entity:", e) }) } }, { key: "addEventHandler", value: function(e, t, n) { var r = this._pendingListeners[e][t] || [];
                            r.push(n), this._pendingListeners[e][t] = r } }, { key: "_value", value: function(e) { var t = this,
                                n = void 0; try {! function() { var r = e.replace(/^\/|\/$/gm, "").split("/"),
                                        i = t.data;
                                    r.forEach(function(e) { i = i[e] }), n = i }() } catch (e) { y.default.warn("Failed to get value:", e) } return n } }, { key: "removeDocument", value: function() { var e = this; return this._onRemoveDocument(this.sid), this._network.delete(this.uri).then(function() { e.emit("removed", !0) }) } }, { key: "type", get: function() { return "document" } }]), t }(k.default);
            n.default = E, t.exports = n.default }, { "./entity": 200, "./jsondiff": 202, "./logger": 204, "./retryingqueue": 208, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/get-prototype-of": 34, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, "babel-runtime/helpers/extends": 43, "babel-runtime/helpers/inherits": 44, "babel-runtime/helpers/possibleConstructorReturn": 45 }],
        212: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(n, "__esModule", { value: !0 }); var i = e("babel-runtime/core-js/object/define-properties"),
                o = r(i),
                s = e("babel-runtime/core-js/object/get-prototype-of"),
                a = r(s),
                u = e("babel-runtime/helpers/classCallCheck"),
                c = r(u),
                l = e("babel-runtime/helpers/possibleConstructorReturn"),
                f = r(l),
                p = e("babel-runtime/helpers/inherits"),
                d = r(p),
                h = function(e) {
                    function t(e, n) {
                        (0, c.default)(this, t); var r = (0, f.default)(this, (t.__proto__ || (0, a.default)(t)).call(this)); return (0, o.default)(r, { name: { value: r.constructor.name, enumerable: !0 }, message: { value: e, enumerable: !0 }, code: { value: n, enumerable: !0 } }), r } return (0, d.default)(t, e), t }(Error);
            n.default = h, t.exports = n.default }, { "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/get-prototype-of": 34, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/inherits": 44, "babel-runtime/helpers/possibleConstructorReturn": 45 }],
        213: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(n, "__esModule", { value: !0 }); var i = e("babel-runtime/core-js/promise"),
                o = r(i),
                s = e("babel-runtime/helpers/extends"),
                a = r(s),
                u = e("babel-runtime/core-js/map"),
                c = r(u),
                l = e("babel-runtime/core-js/object/define-properties"),
                f = r(l),
                p = e("babel-runtime/core-js/object/get-prototype-of"),
                d = r(p),
                h = e("babel-runtime/helpers/classCallCheck"),
                _ = r(h),
                b = e("babel-runtime/helpers/createClass"),
                m = r(b),
                v = e("babel-runtime/helpers/possibleConstructorReturn"),
                y = r(v),
                g = e("babel-runtime/helpers/inherits"),
                k = r(g),
                w = e("./utils"),
                j = e("./logger"),
                C = r(j),
                x = e("./entity"),
                E = r(x),
                S = e("./retryingqueue"),
                T = r(S),
                R = e("./listitem"),
                P = r(R),
                I = e("./paginator"),
                O = r(I),
                A = e("./cache"),
                N = r(A),
                F = function(e) {
                    function t(e, n, r) {
                        (0, _.default)(this, t); var i = (0, y.default)(this, (t.__proto__ || (0, d.default)(t)).call(this, e)); return (0, f.default)(i, { _config: { value: e.config, writable: !1 }, _deps: { value: e, writable: !1 }, _descriptor: { value: n }, _tombstones: { value: new c.default }, _updateQueue: { value: new T.default }, _cache: { value: new N.default }, _onRemoveList: { value: r }, _links: { get: function() { return i._descriptor.links } }, _context: { writable: !0 }, _revision: { value: n.revision, writable: !0 }, _lastEventId: { value: n.last_event_id, writable: !0 }, _items: { value: new c.default }, uri: { get: function() { return i._descriptor.url } }, sid: { enumerable: !0, get: function() { return i._descriptor.sid } }, uniqueName: { enumerable: !0, get: function() { return i._descriptor.unique_name || null } } }), i } return (0, k.default)(t, e), (0, m.default)(t, [{ key: "__set", value: function(e, t) { return this._deps.network.post(e, { data: t.data }, t.revision).then(function(e) { var n = e.body; return n.data = t.data, n }) } }, { key: "_set", value: function(e, t, n) { var r = this; if (!n) return this._deps.network.post(e._uri, { data: t }).then(function(n) { return e._update(n.body.last_event_id, n.body.revision, t) }); var i = function(i) { if (412 === i.status) return r._softSync().then(function() { return r.get(e.index) }).then(function(e) { return { revision: e._revision, data: n(e.value, t) } }); throw i }; return this._updateQueue.add(this.__set.bind(this), e._uri, { revision: e._revision, data: t }, i).then(function(t) { return e._update(t.last_event_id, t.revision, t.data) }) } }, { key: "push", value: function(e) { var t = this; return this._deps.network.post(this._links.items, { data: e }).then(function(n) { var r = new P.default({ index: Number(n.body.index), revision: n.body.revision, eventId: n.body.last_event_id, uri: n.body.url, value: e }); if (t._items.has(r.index)) { var i = t._items.get(r.index);
                                    i._lastEventId < r.last_event_id && i._update(r._lastEventId, r._revision, r.value), r = i } else t._items.set(r.index, r); return t.emit("itemAdded", r, !0), r }) } }, { key: "set", value: function(e, t, n) { return this._actualSet(e, t, n ? function() { throw new Error("Revision mismatch") } : null) } }, { key: "_actualSet", value: function(e, t, n) { var r = this; return this.get(e).then(function(e) { return r._set(e, t, n) }).then(function(e) { return r.emit("itemUpdated", e, !0), e }) } }, { key: "mutate", value: function(e, t) { var n = this; return this.get(e).then(function(r) { return n._actualSet(e, t(r.value), t) }) } }, { key: "update", value: function(e, t) { return this.mutate(e, function(e) { return (0, a.default)(e, t), e }) } }, { key: "remove", value: function(e) { var t = this; return this.get(e).then(function(e) { return t._deps.network.delete(e._uri) }).then(function() { t._items.delete(e), t.emit("itemRemoved", e, !0) }) } }, { key: "get", value: function(e) { var t = this,
                                n = this._cache.get(e); return n ? o.default.resolve(n) : this._queryItems({ index: e }).then(function(n) { if (n.items.length < 1) throw new Error("No item with index " + e + " found"); return t._cache.store(e, n.items[0]) }) } }, { key: "_queryEvents", value: function() { var e = this,
                                t = this._links.events + "?From=" + (this._lastEventId + 1) + "&PageSize=100"; return this._deps.network.get(t).then(function(t) { return t.body.events.forEach(function(t) { return e._update(t) }) }) } }, { key: "_queryItems", value: function(e) { var t = this;
                            e = e || {}; var n = new w.UriBuilder(this._links.items).arg("From", e.from).arg("PageSize", e.limit).arg("Index", e.index).arg("PageToken", e.pageToken).arg("Order", e.order).build(); return this._deps.network.get(n).then(function(e) { var n = e.body.items.map(function(e) { return new P.default({ index: Number(e.index), uri: e.url, revision: e.revision, eventId: e.last_event_id, value: e.data }) });
                                n.forEach(function(e, r) { var i = t._items.get(e.index);
                                    i ? n[r] = i : t._items.set(e.index, e) }); var r = e.body.meta; return new O.default(n, function(e) { return t._queryItems({ pageToken: e }) }, r.previous_token, r.next_token) }) } }, { key: "getItems", value: function(e) { return e = e || {}, e.limit = e.pageSize || e.limit || 50, e.order = e.order || "asc", this._queryItems(e) } }, { key: "getContext", value: function() { var e = this; return "undefined" != typeof this._context ? o.default.resolve(this._context) : this._deps.network.get(this._links.context).then(function(t) { return e._context = t.body.data, e._context }) } }, { key: "updateContext", value: function(e) { var t = this; return this._deps.network.post(this._links.context, { data: e }).then(function() { t._context = e, t.emit("contextUpdated", e, !0) }).catch(function(e) { throw C.default.error("Failed to update context", e), e }) } }, { key: "removeList", value: function() { var e = this; return this._onRemoveList(this.sid), this._deps.network.delete(this.uri).then(function() { e.emit("collectionRemoved", !0) }) } }, { key: "_softSync", value: function() { return this._queryEvents() } }, { key: "_shouldIgnoreEvent", value: function(e, t) { return (this._tombstones.get(e) || -1) >= t } }, { key: "_update", value: function(e) { var t = Number(e.item_index); switch (e.type) {
                                case "list_item_added":
                                    this._handleItemAdded(t, e.item_url, e.id, e.item_revision, e.item_data); break;
                                case "list_item_updated":
                                    this._handleItemUpdated(t, e.item_url, e.id, e.item_revision, e.item_data); break;
                                case "list_item_removed":
                                    this._handleItemRemoved(t, e.id); break;
                                case "list_context_updated":
                                    this._handleContextUpdate(e.context_data, e.id); break;
                                case "list_removed":
                                    this.emit("collectionRemoved", !1), this.emit("collectionRemovedRemotely") }
                            this._lastEventId < e.id && (this._revision = e.list_revision, this._lastEventId = e.id) } }, { key: "_handleItemAdded", value: function(e, t, n, r, i) { if (!this._items.has(e) && !this._shouldIgnoreEvent(e, n)) { var o = new P.default({ index: e, uri: t, eventId: n, revision: r, value: i });
                                this._items.set(e, o), this.emit("itemAdded", o, !1), this.emit("itemAddedRemotely", o) } } }, { key: "_handleItemUpdated", value: function(e, t, n, r, i) { var o = this._items.get(e);
                            o || this._shouldIgnoreEvent(e, n) ? o && n > o._lastEventId && (o._update(n, r, i), this.emit("itemUpdated", o, !1), this.emit("itemUpdatedRemotely", o)) : (o = new P.default({ index: e, uri: t, eventId: n, revision: r, value: i }), this._items.set(e, o), this.emit("itemUpdated", o, !1), this.emit("itemUpdatedRemotely", o)) } }, { key: "_handleItemRemoved", value: function(e, t) { this._items.has(e) && this._items.delete(e), this._tombstones.set(e, t), this.emit("itemRemoved", e, !1), this.emit("itemRemovedRemotely", e) } }, { key: "_handleContextUpdate", value: function(e, t) { this._lastEventId < t && (this._context = e, this.emit("contextUpdated", e, !1), this.emit("contextUpdatedRemotely", e)) } }, { key: "type", get: function() { return "list" } }]), t }(E.default);
            n.default = F, t.exports = n.default }, { "./cache": 195, "./entity": 200, "./listitem": 203, "./logger": 204, "./paginator": 207, "./retryingqueue": 208, "./utils": 215, "babel-runtime/core-js/map": 28, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/get-prototype-of": 34, "babel-runtime/core-js/promise": 37, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, "babel-runtime/helpers/extends": 43, "babel-runtime/helpers/inherits": 44, "babel-runtime/helpers/possibleConstructorReturn": 45 }],
        214: [function(e, t, n) {
            "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(n, "__esModule", { value: !0 });
            var i = e("babel-runtime/helpers/extends"),
                o = r(i),
                s = e("babel-runtime/core-js/promise"),
                a = r(s),
                u = e("babel-runtime/core-js/map"),
                c = r(u),
                l = e("babel-runtime/core-js/object/define-properties"),
                f = r(l),
                p = e("babel-runtime/core-js/object/get-prototype-of"),
                d = r(p),
                h = e("babel-runtime/helpers/classCallCheck"),
                _ = r(h),
                b = e("babel-runtime/helpers/createClass"),
                m = r(b),
                v = e("babel-runtime/helpers/possibleConstructorReturn"),
                y = r(v),
                g = e("babel-runtime/helpers/inherits"),
                k = r(g),
                w = e("./utils"),
                j = e("./logger"),
                C = r(j),
                x = e("./entity"),
                E = r(x),
                S = e("./retryingqueue"),
                T = r(S),
                R = e("./mapitem"),
                P = r(R),
                I = e("./paginator"),
                O = r(I),
                A = function(e) {
                    function t(e, n, r) {
                        (0, _.default)(this, t); var i = (0, y.default)(this, (t.__proto__ || (0, d.default)(t)).call(this, e)),
                            o = { ensured: !1 }; return (0, f.default)(i, { _descriptor: { value: n }, _cacheState: { value: o }, _tombstones: { value: new c.default }, _updateQueue: { value: new T.default }, _onRemoveMap: { value: r }, _links: { get: function() { return i._descriptor.links } }, _revision: { value: n.revision, writable: !0 }, _lastEventId: { value: n.last_event_id, writable: !0 }, _context: { writable: !0 }, _items: { value: new c.default }, uri: { get: function() { return i._descriptor.url } }, sid: { enumerable: !0, get: function() { return i._descriptor.sid } }, uniqueName: { enumerable: !0, get: function() { return i._descriptor.unique_name || null } } }), i }
                    return (0, k.default)(t, e), (0, m.default)(t, [{ key: "_get", value: function(e) { return this._query({ key: e }).then(function(t) { if (t.items.length < 1) throw new Error("No item with key " + e + " found"); return t.items[0] }) } }, { key: "__set", value: function(e, t) { return this._deps.network.post(e, { data: t.data }, t.revision).then(function(e) { return e = e.body, e.data = t.data, e }) } }, { key: "_set", value: function(e, t, n) { var r = this; if (!n) return this.__set(e, { data: t.data }); var i = function(e) { if (412 === e.status) return r._softSync().then(function() { return r.get(t.key) }).then(function(e) { return { revision: e._revision, data: n(e.value, t.data) } }); throw e }; return this._updateQueue.add(this.__set.bind(this), e, { revision: t.revision, data: t.data }, i).then(function(e) { return e }) } }, { key: "_tryAddOrUpdate", value: function(e, t, n) { var r = this; return new a.default(function(i, o) { r._deps.network.post(e, t).then(function(e) { e.body.data = t.data, e.body._isLocallyAdded = !0, i(e.body) }).catch(function(e) { if (409 !== e.status) return void o(e); var s = e.body.links.item;
                                    n ? r._deps.network.get(s).then(function(e) { return { key: e.key, revision: e.revision, data: n(e.value, t.data) } }).then(function(e) { return r._set(s, e, n) }).then(i).catch(o) : r._set(s, t, n).then(i).catch(o) }) }) } }, { key: "_queryEvents", value: function() { var e = this,
                                t = this._links.events + "?From=" + (this._lastEventId + 1) + "&PageSize=100"; return this._deps.network.get(t).then(function(t) { return t.body.events.forEach(function(t) { return e._update(t) }) }).catch(function(e) { throw C.default.error("Failed to fetch events:", e), e }) } }, { key: "getContext", value: function() { var e = this; return "undefined" != typeof this._context ? a.default.resolve(this._context) : this._deps.network.get(this._links.context).then(function(t) { return e._context = t.body.data, e._context }) } }, { key: "updateContext", value: function(e) { var t = this; return this._deps.network.post(this._links.context, { data: e }).then(function() { t._context = e, t.emit("contextUpdated", e, !0) }) } }, { key: "set", value: function(e, t, n) { return this._actualSet(e, t, n ? function() { throw new Error("Revision mismatch") } : null) } }, { key: "_actualSet", value: function(e, t, n) { var r = this,
                                i = this._items.get(e); if (i) { var o = { key: e, data: t }; return n && (o.revision = i._revision), this._set(i._uri, o, n).then(function(e) { return i._update(e.last_event_id, e.revision, e.data), r.emit("itemUpdated", i, !0), i }) } return this._tryAddOrUpdate(this._links.items, { key: e, data: t }, n).then(function(e) { return { _isLocallyAdded: e._isLocallyAdded, key: e.key, revision: e.revision, eventId: e.last_event_id, uri: e.url, value: e.data } }).then(function(t) { return i = r._items.get(e), i && t.eventId > i._lastEventId ? i._update(t.eventId, t.revision, t.value) : i || (i = new P.default(t), r._items.set(e, i), t._isLocallyAdded ? r.emit("itemAdded", i, !0) : r.emit("itemUpdated", i, !0)), i }) } }, { key: "get", value: function(e) { return this._items.has(e) ? a.default.resolve(this._items.get(e)) : this._query({ key: e }).then(function(t) { if (t.items.length < 1) throw new Error("No item with key " + e + " found"); return t.items[0] }) } }, { key: "mutate", value: function(e, t) { var n = this; return new a.default(function(t) { return n.get(e).then(function(e) { return t(e.value) }).catch(function() { return t({}) }) }).then(function(r) { return n._actualSet(e, t(r), t) }) } }, { key: "update", value: function(e, t) { return this.mutate(e, function(e) { return (0, o.default)(e, t), e }) } }, { key: "remove", value: function(e) { var t = this; if ("undefined" == typeof e) throw new Error("Key argument is invalid"); return this.get(e).then(function(e) { return t._deps.network.delete(e._uri) }).then(function() { t._items.delete(e), t.emit("itemRemoved", e, !0) }) } }, { key: "_query", value: function(e) { var t = this;
                            e = e || {}; var n = new w.UriBuilder(this._links.items).arg("From", e.from).arg("PageSize", e.limit).arg("Key", e.key).arg("PageToken", e.pageToken).arg("Order", e.order).build(); return this._deps.network.get(n).then(function(e) { var n = e.body.items.map(function(e) { return new P.default({ key: e.key, uri: e.url, revision: e.revision, eventId: e.last_event_id, value: e.data }) });
                                n.forEach(function(e, r) { var i = t._items.get(e.key);
                                    i ? n[r] = i : t._items.set(e.key, e) }); var r = e.body.meta; return new O.default(n, function(e) { return t._query({ pageToken: e }) }, r.previous_token, r.next_token) }) } }, { key: "getItems", value: function(e) { return e = e || {}, e.limit = e.pageSize || e.limit || 50, e.order = e.order || "asc", this._query(e) } }, { key: "_softSync", value: function() { return this._queryEvents() } }, { key: "forEach", value: function(e) { var t = this; return new a.default(function(n, r) { t._cacheState.ensured ? (t._items.forEach(e), n()) : ! function() { var i = { order: "asc", limit: 50 },
                                        o = function() { return t._query(i) },
                                        s = function() { t._cacheState.ensured = !0, n() };
                                    t._processPage(o, e, s).catch(r) }() }) } }, { key: "_processPage", value: function(e, t, n) { var r = this; return e().then(function(e) { e.items.forEach(function(e) { return t(e) }), e.hasNextPage ? setTimeout(function() { return r._processPage(e.nextPage.bind(e), t, n) }) : n() }) } }, { key: "_shouldIgnoreEvent", value: function(e, t) { return (this._tombstones.get(e) || -1) >= t } }, { key: "_update", value: function(e) { switch (e.type) {
                                case "map_item_added":
                                    this._handleItemAdded(e.item_key, e.item_url, e.id, e.item_revision, e.item_data); break;
                                case "map_item_updated":
                                    this._handleItemUpdated(e.item_key, e.item_url, e.id, e.item_revision, e.item_data); break;
                                case "map_item_removed":
                                    this._handleItemRemoved(e.item_key, e.id); break;
                                case "map_context_updated":
                                    this._handleContextUpdate(e.context_data, e.id); break;
                                case "map_removed":
                                    this.emit("collectionRemoved", !1), this.emit("collectionRemovedRemotely") }
                            this._lastEventId < e.id && (this._revision = e.map_revision, this._lastEventId = e.id) } }, { key: "_handleItemAdded", value: function(e, t, n, r, i) { if (!this._items.has(e) && !this._shouldIgnoreEvent(e, n)) { var o = new P.default({ key: e, uri: t, eventId: n, revision: r, value: i });
                                this._tombstones.delete(e), this._items.set(e, o), this.emit("itemAdded", o, !1), this.emit("itemAddedRemotely", o) } } }, {
                        key: "_handleItemUpdated",
                        value: function(e, t, n, r, i) {
                            var o = this._items.get(e);
                            o || this._shouldIgnoreEvent(e, n) ? o && n > o._lastEventId && (o._update(n, r, i), this.emit("itemUpdated", o, !1), this.emit("itemUpdatedRemotely", o)) : (o = new P.default({
                                key: e,
                                uri: t,
                                eventId: n,
                                revision: r,
                                value: i
                            }), this._items.set(e, o), this.emit("itemUpdated", o, !1), this.emit("itemUpdatedRemotely", o))
                        }
                    }, { key: "_handleItemRemoved", value: function(e, t) { this._items.has(e) && this._items.delete(e), this._tombstones.set(e, t), this.emit("itemRemoved", e, !1), this.emit("itemRemovedRemotely", e, !1) } }, { key: "_handleContextUpdate", value: function(e, t) { this._lastEventId < t && (this._context = e, this.emit("contextUpdated", e, !1), this.emit("contextUpdatedRemotely", e)) } }, { key: "removeMap", value: function() { var e = this; return this._onRemoveMap(this.sid), this._deps.network.delete(this.uri).then(function() { e.emit("collectionRemoved", !0) }) } }, { key: "type", get: function() { return "map" } }]), t
                }(E.default);
            n.default = A, t.exports = n.default
        }, { "./entity": 200, "./logger": 204, "./mapitem": 205, "./paginator": 207, "./retryingqueue": 208, "./utils": 215, "babel-runtime/core-js/map": 28, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/get-prototype-of": 34, "babel-runtime/core-js/promise": 37, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42, "babel-runtime/helpers/extends": 43, "babel-runtime/helpers/inherits": 44, "babel-runtime/helpers/possibleConstructorReturn": 45 }],
        215: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e) { return JSON.parse((0, p.default)(e)) }
            Object.defineProperty(n, "__esModule", { value: !0 }), n.UriBuilder = n.deepClone = void 0; var o = e("babel-runtime/core-js/object/define-properties"),
                s = r(o),
                a = e("babel-runtime/helpers/classCallCheck"),
                u = r(a),
                c = e("babel-runtime/helpers/createClass"),
                l = r(c),
                f = e("babel-runtime/core-js/json/stringify"),
                p = r(f),
                d = function() {
                    function e(t) {
                        (0, u.default)(this, e), (0, s.default)(this, { base: { value: t }, args: { value: [] } }) } return (0, l.default)(e, [{ key: "arg", value: function(e, t) { return "undefined" != typeof t && this.args.push(e + "=" + encodeURIComponent(t)), this } }, { key: "build", value: function() { return 0 === this.args.length ? this.base : this.base + "?" + this.args.join("&") } }]), e }();
            n.deepClone = i, n.UriBuilder = d }, { "babel-runtime/core-js/json/stringify": 27, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/helpers/classCallCheck": 41, "babel-runtime/helpers/createClass": 42 }],
        216: [function(e, t, n) {
            (function(e) { var n, r = e.crypto || e.msCrypto; if (r && r.getRandomValues) { var i = new Uint8Array(16);
                    n = function() { return r.getRandomValues(i), i } } if (!n) { var o = new Array(16);
                    n = function() { for (var e, t = 0; t < 16; t++) 0 === (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255; return o } }
                t.exports = n }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}],
        217: [function(e, t, n) {
            function r(e, t, n) { var r = t && n || 0,
                    i = 0; for (t = t || [], e.toLowerCase().replace(/[0-9a-f]{2}/g, function(e) { i < 16 && (t[r + i++] = c[e]) }); i < 16;) t[r + i++] = 0; return t }

            function i(e, t) { var n = t || 0,
                    r = u; return r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] }

            function o(e, t, n) { var r = t && n || 0,
                    o = t || [];
                e = e || {}; var s = void 0 !== e.clockseq ? e.clockseq : d,
                    a = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                    u = void 0 !== e.nsecs ? e.nsecs : _ + 1,
                    c = a - h + (u - _) / 1e4; if (c < 0 && void 0 === e.clockseq && (s = s + 1 & 16383), (c < 0 || a > h) && void 0 === e.nsecs && (u = 0), u >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                h = a, _ = u, d = s, a += 122192928e5; var l = (1e4 * (268435455 & a) + u) % 4294967296;
                o[r++] = l >>> 24 & 255, o[r++] = l >>> 16 & 255, o[r++] = l >>> 8 & 255, o[r++] = 255 & l; var f = a / 4294967296 * 1e4 & 268435455;
                o[r++] = f >>> 8 & 255, o[r++] = 255 & f, o[r++] = f >>> 24 & 15 | 16, o[r++] = f >>> 16 & 255, o[r++] = s >>> 8 | 128, o[r++] = 255 & s; for (var b = e.node || p, m = 0; m < 6; m++) o[r + m] = b[m]; return t ? t : i(o) }

            function s(e, t, n) { var r = t && n || 0; "string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null), e = e || {}; var o = e.random || (e.rng || a)(); if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t)
                    for (var s = 0; s < 16; s++) t[r + s] = o[s]; return t || i(o) } for (var a = e("./rng"), u = [], c = {}, l = 0; l < 256; l++) u[l] = (l + 256).toString(16).substr(1), c[u[l]] = l; var f = a(),
                p = [1 | f[0], f[1], f[2], f[3], f[4], f[5]],
                d = 16383 & (f[6] << 8 | f[7]),
                h = 0,
                _ = 0,
                b = s;
            b.v1 = o, b.v4 = s, b.parse = r, b.unparse = i, t.exports = b }, { "./rng": 216 }],
        218: [function(e, t, n) { t.exports = { _args: [
                    [{ raw: "twilio-sync@^0.3.0", scope: null, escapedName: "twilio-sync", name: "twilio-sync", rawSpec: "^0.3.0", spec: ">=0.3.0 <0.4.0", type: "range" }, "/Users/schertkov/workspace/twilio/rtd/js/ipmessaging-js-lib"]
                ], _from: "twilio-sync@>=0.3.0 <0.4.0", _id: "twilio-sync@0.3.1", _inCache: !0, _location: "/twilio-sync", _nodeVersion: "7.1.0", _npmOperationalInternal: { host: "packages-12-west.internal.npmjs.com", tmp: "tmp/twilio-sync-0.3.1.tgz_1479722716728_0.947151163360104" }, _npmUser: { name: "schertkov", email: "schertkov@twilio.com" }, _npmVersion: "3.10.9", _phantomChildren: {}, _requested: { raw: "twilio-sync@^0.3.0", scope: null, escapedName: "twilio-sync", name: "twilio-sync", rawSpec: "^0.3.0", spec: ">=0.3.0 <0.4.0", type: "range" }, _requiredBy: ["/"], _resolved: "https://registry.npmjs.org/twilio-sync/-/twilio-sync-0.3.1.tgz", _shasum: "014f4f32ec211d228a92cc6c1782d177efc66630", _shrinkwrap: null, _spec: "twilio-sync@^0.3.0", _where: "/Users/schertkov/workspace/twilio/rtd/js/ipmessaging-js-lib", author: { name: "Twilio" }, dependencies: { "babel-runtime": "^6.11.6", loglevel: "^1.4.1", platform: "^1.3.1", "twilio-notifications": "^0.2.0", "twilio-transport": "^0.0.8", twilsock: "^0.2.0", uuid: "^2.0.2" }, description: "Twilio Sync client library", devDependencies: { "babel-cli": "^6.14.0", "babel-eslint": "^7.0.0", "babel-plugin-add-module-exports": "^0.2.1", "babel-plugin-transform-object-assign": "^6.8.0", "babel-plugin-transform-runtime": "^6.15.0", "babel-preset-es2015": "^6.9.0", babelify: "^7.3.0", backoff: "^2.5.0", browserify: "^13.1.0", chai: "^3.5.0", "chai-as-promised": "^6.0.0", cheerio: "^0.22.0", del: "^2.2.1", "event-to-promise": "^0.7.0", gulp: "^3.9.1", "gulp-derequire": "^2.1.0", "gulp-eslint": "^3.0.1", "gulp-exit": "0.0.2", "gulp-insert": "^0.5.0", "gulp-istanbul": "^1.0.0", "gulp-mocha": "^3.0.1", "gulp-rename": "^1.2.2", "gulp-replace": "^0.5.4", "gulp-tap": "^0.1.3", "gulp-uglify": "^2.0.0", "gulp-util": "^3.0.7", "ink-docstrap": "^1.2.1", isparta: "^4.0.0", jsdoc: "^3.4.0", jsonwebtoken: "^7.1.6", "run-sequence": "^1.2.2", sinon: "^1.17.5", "sinon-as-promised": "^4.0.2", "sinon-chai": "^2.8.0", twilio: "^3.3.0-edge", underscore: "^1.8.3", "vinyl-buffer": "^1.0.0", "vinyl-source-stream": "^1.1.0" }, directories: { test: "test" }, dist: { shasum: "014f4f32ec211d228a92cc6c1782d177efc66630", tarball: "https://registry.npmjs.org/twilio-sync/-/twilio-sync-0.3.1.tgz" }, gitHead: "aa87715b8a4db25a60e22bc8626293f0c743acc5", license: "MIT", main: "lib/index.js", maintainers: [{ name: "schertkov", email: "schertkov@twilio.com" }, { name: "twilio-ci", email: "mroberts+twilio-ci@twilio.com" }], name: "twilio-sync", optionalDependencies: {}, readme: "ERROR: No README data found!", scripts: { prepublish: "node_modules/babel-cli/bin/babel.js src --out-dir lib", test: "gulp unit-test" }, version: "0.3.1" } }, {}],
        219: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e) { return e.split("\r\n").map(function(e) { return e.split(": ") }).filter(function(e) { return 2 === e.length && e[1].length > 0 }).reduce(function(e, t) { return e[t[0]] = t[1], e }, {}) }

            function o(e) { var t = e.getResponseHeader("Content-Type"); if (!t || 0 !== t.indexOf("application/json") || 0 === e.responseText.length) return e.responseText; try { return JSON.parse(e.responseText) } catch (t) { return e.responseText } }

            function s(e, t) { return new l.default(function(n, r) { var s = new f;
                    s.open(e, t.url, !0), s.onreadystatechange = function() { if (4 === s.readyState) { var e = i(s.getAllResponseHeaders()),
                                t = o(s);
                            200 <= s.status && s.status < 300 ? n({ status: s.status, headers: e, body: t }) : r({ status: s.status, description: s.statusText, headers: e, body: t }) } }; for (var a in t.headers) s.setRequestHeader(a, t.headers[a]), "Content-Type" === a && "application/json" === t.headers[a] && (t.body = (0, u.default)(t.body));
                    s.send(t.body) }) } var a = e("babel-runtime/core-js/json/stringify"),
                u = r(a),
                c = e("babel-runtime/core-js/promise"),
                l = r(c),
                f = "undefined" == typeof XMLHttpRequest ? e("xmlhttprequest").XMLHttpRequest : XMLHttpRequest,
                p = s;
            p.get = function(e) { return s("GET", e) }, p.post = function(e) { return s("POST", e) }, p.put = function(e) { return s("PUT", e) }, p.delete = function(e) { return s("DELETE", e) }, t.exports = p }, { "babel-runtime/core-js/json/stringify": 27, "babel-runtime/core-js/promise": 37, xmlhttprequest: 59 }],
        220: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e) { var t = e.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/); if (t) { var n = { protocol: t[1], host: t[2], hostname: t[3], port: t[4], pathname: t[5], search: t[6], hash: t[7] }; if (n.search.length > 0) { var r = n.search.substring(1);
                        n.params = r.split("&").map(function(e) { return e.split("=") }).reduce(function(e, t) { return e.hasOwnProperty(t[0]) ? Array.isArray(e[t[0]]) ? e[t[0]].push(t[1]) : e[t[0]] = [e[t[0]], t[1]] : e[t[0]] = t[1], e }, {}) } return n } throw new Error("Incorrect URI: " + e) }

            function o(e, t) { var n = i(t),
                    r = { method: e, host: n.host, path: n.pathname }; return n.params && (r.params = n.params), r }

            function s(e, t, n, r) { return { to: o(e, t), headers: n, body: r } }

            function a(e) { return { status: e.status, headers: e.header.http_headers, body: e.body } }

            function u(e, t, n) { return { url: e, headers: t, body: n } }

            function c(e) { try { e.body = JSON.parse(e.body) } catch (e) {} return e }

            function l(e) { for (var t = (0, y.default)(e.headers), n = t.length, r = {}; n--;) { var i = t[n];
                    r[i.toLowerCase()] = e.headers[i] } return e.headers = r, e }

            function f(e) { var t = this;
                (0, m.default)(this, { _activeGetRequests: { value: new _.default }, _twilsock: { value: e }, _http: { value: g }, _useTwilsock: { get: function() { return t._twilsock && t._twilsock.isConnected } } }), e && e.connect() } var p = e("babel-runtime/core-js/object/freeze"),
                d = r(p),
                h = e("babel-runtime/core-js/map"),
                _ = r(h),
                b = e("babel-runtime/core-js/object/define-properties"),
                m = r(b),
                v = e("babel-runtime/core-js/object/keys"),
                y = r(v),
                g = e("./httprequest");
            f.prototype.get = function(e, t) { var n = this; if (this._activeGetRequests.has(e)) return this._activeGetRequests.get(e); var r = this._get(e, t).then(function(t) { return n._activeGetRequests.delete(e), t }).catch(function(t) { throw n._activeGetRequests.delete(e), t }); return this._activeGetRequests.set(e, r), r }, f.prototype._get = function(e, t) { return (this._useTwilsock ? this._twilsock.send(s("GET", e, t)).then(a) : this._http.get(u(e, t)).then(c)).then(l) }, f.prototype.post = function(e, t, n) { return (this._useTwilsock ? this._twilsock.send(s("POST", e, t, n)).then(a) : this._http.post(u(e, t, n)).then(c)).then(l) }, f.prototype.put = function(e, t, n) { return (this._useTwilsock ? this._twilsock.send(s("PUT", e, t, n)).then(a) : this._http.put(u(e, t, n)).then(c)).then(l) }, f.prototype.delete = function(e, t) { return (this._useTwilsock ? this._twilsock.send(s("DELETE", e, t)).then(a) : this._http.delete(u(e, t)).then(c)).then(l) }, (0, d.default)(f), t.exports = f }, { "./httprequest": 219, "babel-runtime/core-js/map": 28, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/freeze": 33, "babel-runtime/core-js/object/keys": 35 }],
        221: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e, t) { var n = this,
                    r = new y(e, t),
                    i = new g(r),
                    o = new k(i);
                (0, h.default)(this, { _config: { value: r }, _socket: { value: i }, _packet: { value: o }, _registrations: { value: new p.default }, _registrationsInProgress: { value: new p.default }, isConnected: { get: function() { return n._socket.isConnected } }, connected: { get: function() { return n._socket.isConnected } }, state: { get: function() { return n._socket.state } } }), _.call(this), this._socket.on("message", function(e, t) { return setTimeout(function() { n.emit("message", e, t) }, 0) }), this._socket.on("connected", function() { return n._updateRegistrations() }), this._socket.on("connected", function(e) { return n.emit("connected", e) }), this._socket.on("disconnected", function() { return n.emit("disconnected") }), this._socket.on("stateChanged", function(e) { return n.emit("stateChanged", e) }) } var o = e("babel-runtime/core-js/object/freeze"),
                s = r(o),
                a = e("babel-runtime/core-js/set"),
                u = r(a),
                c = e("babel-runtime/core-js/promise"),
                l = r(c),
                f = e("babel-runtime/core-js/map"),
                p = r(f),
                d = e("babel-runtime/core-js/object/define-properties"),
                h = r(d),
                _ = e("events").EventEmitter,
                b = e("util").inherits,
                m = e("loglevel"),
                v = e("uuid"),
                y = e("./configuration"),
                g = e("./twilsock"),
                k = e("./packetinterface");
            b(i, _), i.prototype.send = function(e) { return this._packet.send(e.to, e.headers, e.body) }, i.prototype.updateToken = function(e) { var t = this; return m.info("Twilsock I: updateToken"), this._config.token === e ? l.default.resolve() : (this._config.updateToken(e), this._socket.disconnect().then(function() { return t._socket.connect() }), l.default.resolve()) }, i.prototype._updateRegistration = function(e, t) { var n = this;
                m.info("Twilsock: Update registration for context", e); var r = this._registrationsInProgress.get(e);
                r || (r = new u.default, this._registrationsInProgress.set(e, r)); var i = v.v4(); return r.add(i), this._packet.putNotificationContext(e, t).then(function() { m.info("Twilsock: registration attempt succeeded for context", t), r.delete(i), 0 === r.size && (n._registrationsInProgress.delete(e), n.emit("registered", e)) }).catch(function(o) { m.info("Twilsock: registration attempt failed for context", t), m.debug(o), r.delete(i), 0 === r.size && (n._registrationsInProgress.delete(e), n.emit("registrationFailed", e, o)) }) }, i.prototype._updateRegistrations = function() { var e = this;
                m.info("Twilsock: refreshing all registrations"), this._registrations.forEach(function(t, n) { e._updateRegistration(n, t) }) }, i.prototype.setNotificationsContext = function(e, t) { if (!e || !t) throw new Error("Invalid arguments provided");
                this._registrations.set(e, t), this._socket.isConnected && this._updateRegistration(e, t) }, i.prototype.removeNotificationsContext = function(e) { this._registrations.has(e) && (this._registrations.delete(e), this._socket.isConnected && this._packet.deleteNotificationContext(e)) }, i.prototype.connect = function() { return this._socket.connect() }, i.prototype.disconnect = function() { return this._socket.disconnect() }, (0, s.default)(i), t.exports = i }, { "./configuration": 222, "./packetinterface": 223, "./twilsock": 224, "babel-runtime/core-js/map": 28, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/freeze": 33, "babel-runtime/core-js/promise": 37, "babel-runtime/core-js/set": 38, events: 182, loglevel: 184, util: 227, uuid: 229 }],
        222: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e, t) { var n = this;
                t = t || {}; var r = t.Twilsock || {},
                    i = r.uri || t.wsServer || a;
                (0, s.default)(this, { _twilsockWsHost: { value: i + u }, _token: { value: e, writable: !0 }, twilsockUri: { get: function() { return n._twilsockWsHost } }, token: { get: function() { return n._token } } }) } var o = e("babel-runtime/core-js/object/define-properties"),
                s = r(o),
                a = "wss://tsock.twilio.com",
                u = "/v2/wsconnect";
            i.prototype.updateToken = function(e) { this._token = e }, t.exports = i }, { "babel-runtime/core-js/object/define-properties": 31 }],
        223: [function(e, t, n) { "use strict";

            function r(e) { return e && e.__esModule ? e : { default: e } }

            function i(e) {
                (0, p.default)(this, { _activeRequests: { value: new l.default }, _socket: { value: e } }), this._socket.on("reply", this._processReply.bind(this)) }

            function o(e) { return e >= 200 && e < 300 }

            function s(e) { return e && e.header && e.header.http_status } var a = e("babel-runtime/core-js/promise"),
                u = r(a),
                c = e("babel-runtime/core-js/map"),
                l = r(c),
                f = e("babel-runtime/core-js/object/define-properties"),
                p = r(f),
                d = e("loglevel"),
                h = 3e4;
            i.prototype._processReply = function(e) { var t = this._activeRequests.get(e.id);
                t && (clearTimeout(t.timeout), this._activeRequests.delete(e.id), setTimeout(function() { o(e.status.code) ? s(e) && !o(e.header.http_status.code) ? t.reject({ status: e.header.http_status.code, description: e.header.http_status.status, body: e.body }) : t.resolve(e) : t.reject(new Error("Transport failure: " + e.status.status)) }, 0)) }, i.prototype._storeRequest = function(e, t, n) { var r = { resolve: t, reject: n, timeout: setTimeout(function() { d.debug("Request", e, "is timed out"), n(new Error("Twilsock: request timeout: " + e)) }, h) };
                this._activeRequests.set(e, r) }, i.prototype.send = function(e, t, n) { var r = this; return new u.default(function(i, o) { var s = r._socket.sendUpstreamMessage(e, t, n);
                    d.trace("Twilsock: message sent: ", { id: s, address: e, headers: t, body: n }), r._storeRequest(s, i, o) }) }, i.prototype.putNotificationContext = function(e, t) { var n = this; return new u.default(function(r, i) { var o = { method: "put_notification_ctx", notification_ctx_id: e },
                        s = n._socket.send(o, t);
                    n._storeRequest(s, r, i) }) }, i.prototype.deleteNotificationContext = function(e) { var t = this; return new u.default(function(n, r) { var i = { method: "delete_notification_ctx", notification_ctx_id: e },
                        o = t._socket.send(i);
                    t._storeRequest(o, n, r) }) }, i.prototype.shutdown = function() { this._activeRequests.forEach(function(e) { clearTimeout(e.timeout), e.reject(new Error("Twilsock: request cancelled by user")) }), this._activeRequests.clear() }, t.exports = i }, { "babel-runtime/core-js/map": 28, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/promise": 37, loglevel: 184 }],
        224: [function(e, t, n) {
            (function(n) { "use strict";

                function r(e) { return e && e.__esModule ? e : { default: e } }

                function i(e) { var t = encodeURIComponent(e),
                        n = t.replace(/%([0-9A-F]{2})/g, function(e, t) { return String.fromCharCode("0x" + t) }); return n.length }

                function o(e) { var t = encodeURIComponent(e),
                        n = t.replace(/%([0-9A-F]{2})/g, function(e, t) { return String.fromCharCode("0x" + t) }),
                        r = new Uint8Array(n.length); return Array.prototype.forEach.call(n, function(e, t) { r[t] = e.charCodeAt(0) }), r }

                function s(e) { var t = Array.prototype.map.call(e, function(e) { return String.fromCharCode(e) }).join(""),
                        n = t.replace(/(.)/g, function(e, t) { var n = t.charCodeAt(0).toString(16).toUpperCase(); return n.length < 2 && (n = "0" + n), "%" + n }); return decodeURIComponent(n) }

                function a(e) { var t = this,
                        n = arguments;
                    k.call(this); var r = x.exponential({ randomisationFactor: .2, initialDelay: 2e3, maxDelay: 12e4 });
                    r.on("ready", function() { t._retry() }), (0, g.default)(this, { _config: { value: e }, _transportReady: { value: !1, writable: !0 }, _disconnectedPromiseResolve: { value: null, writable: !0 }, _backoff: { value: r }, _fsm: { value: null, writable: !0 }, _watchTimer: { value: null, writable: !0 }, _timestamp: { value: 0, writable: !0 }, _socket: { value: null, writable: !0 }, _activeToken: { value: null, writable: !0 }, activeToken: { enumerable: !0, get: function() { return t._activeToken } }, state: { enumberable: !0, get: function() { return t._getState() } }, isConnected: { enumberable: !0, get: function() { return t._isConnected() } } }), this._fsm = E.create({ initial: "disconnected", events: [{ name: "userConnect", from: ["error", "disconnected"], to: "connecting" }, { name: "userDisconnect", from: ["connecting", "connected", "retrying"], to: "disconnecting" }, { name: "userDisconnect", from: ["rejected"], to: "disconnected" }, { name: "userRetry", from: ["retrying"], to: "connecting" }, { name: "socketConnected", from: ["connecting"], to: "connected" }, { name: "socketClosed", from: ["connecting", "connected", "error"], to: "retrying" }, { name: "socketError", from: ["connected"], to: "retrying" }, { name: "socketClosed", from: ["disconnecting"], to: "disconnected" }, { name: "socketRejected", from: ["connecting", "connected"], to: "disconnecting" }, { name: "tokenRejected", from: ["connecting", "connected"], to: "rejected" }, { name: "evUnsupported", from: ["connecting"], to: "unsupported" }, { name: "evUnsupported", from: ["connected"], to: "error" }, { name: "protocolError", from: ["connecting", "connected"], to: "error" }], callbacks: { onconnecting: function() { t._startWatchdogTimer(), t._setupSocket(), t.emit("connecting") }, onretrying: function() { t._initRetry(), t.emit("connecting") }, onenterconnected: this._onConnected.bind(this), onuserDisconnect: function() { t._closeSocket() }, ondisconnected: function() { return t._finalizeSocket() }, onsocketRejected: function() { var e = Array.prototype.slice.call(n, 3, n.length);
                                t._onSocketRejected(e) }, onunsupported: function() { t._closeSocket(), t._finalizeSocket() }, onrejected: function() { t._closeSocket(), t._finalizeSocket() }, onerror: function() { t._closeSocket(), t._finalizeSocket() }, onenterstate: function() { t.emit("stateChanged", t.state) } }, error: function() { j.trace("Twilsock FSM: unexpected transition", arguments) } }) }

                function u(e) { for (var t = "", n = 0; n < e.length; ++n) { var r = String.fromCharCode(e[n]); if (t += r, "\r" === r) { n += 2; break } } var i = t.split(" "); return { size: n, protocol: i[0], version: i[1], headerSize: Number(i[2]) } }

                function c(e) { var t = s(e); try { return JSON.parse(t) } catch (e) { throw j.error("Twilsock E: Failed to parse input: ", t), e } }

                function l(e) { switch ("undefined" == typeof e ? "undefined" : (0, b.default)(e)) {
                        case "undefined":
                            return "";
                        case "object":
                            return (0, h.default)(e);
                        default:
                            return e } } var f = e("babel-runtime/core-js/promise"),
                    p = r(f),
                    d = e("babel-runtime/core-js/json/stringify"),
                    h = r(d),
                    _ = e("babel-runtime/helpers/typeof"),
                    b = r(_),
                    m = e("babel-runtime/core-js/object/freeze"),
                    v = r(m),
                    y = e("babel-runtime/core-js/object/define-properties"),
                    g = r(y),
                    k = e("events").EventEmitter,
                    w = e("util").inherits,
                    j = e("loglevel"),
                    C = e("uuid"),
                    x = e("backoff"),
                    E = e("javascript-state-machine"),
                    S = n.WebSocket || n.MozWebSocket || e("ws"),
                    T = 5e3,
                    R = 43e3;
                w(a, k), a.state = { DISCONNECTED: "disconnected", CONNECTING: "connecting", CONNECTED: "connected", DISCONNECTING: "disconnecting", ERROR: "error", REJECTED: "rejected" }, (0, v.default)(a.state), a.prototype._isConnected = function() { return this.state === a.state.CONNECTED && this._socket && 1 === this._socket.readyState }, a.prototype._getState = function() { if (!this._fsm) return a.state.DISCONNECTED; switch (this._fsm.current) {
                        case "connecting":
                        case "retrying":
                            return a.state.CONNECTING;
                        case "connected":
                            return a.state.CONNECTED;
                        case "rejected":
                            return a.state.REJECTED;
                        case "disconnecting":
                            return a.state.DISCONNECTING;
                        case "disconnected":
                        case "error":
                        default:
                            return a.state.DISCONNECTED } }, a.prototype._initRetry = function() { this._backoff.backoff() }, a.prototype._retry = function() { this._socket = null, this._activeToken = null, this._fsm.userRetry() }, a.prototype._onConnected = function() { this._backoff.reset(), this.emit("connected", this._wschannelUrl) }, a.prototype._finalizeSocket = function() { if (this._stopWatchdogTimer(), this._onDisconnected(), this._disconnectedPromiseResolve) { var e = this._disconnectedPromiseResolve;
                        this._disconnectedPromiseResolve = null, e() } }, a.prototype._onDisconnected = function() { this._backoff.reset(), this._wschannelUrl = null, this._socket = null, this._activeToken = null, this.emit("disconnected") }, a.prototype._setupSocket = function() { var e = this,
                        t = this._config.token,
                        n = this._config.twilsockUri + "?token=" + encodeURIComponent(t),
                        r = new S(n);
                    r.binaryType = "arraybuffer", r.onopen = function() { j.info("Twilsock I: Twilsock socket opened") }, r.onclose = function(t) { j.info("Twilsock I: socket closed", t), e._fsm.socketClosed() }, r.onerror = function(e) { j.error("Twilsock E: ", e) }, r.onmessage = function(t) { j.trace("Twilsock: ", t.data); var n = 2,
                            r = new Uint8Array(t.data),
                            i = u(r); if ("TWILSOCK" !== i.protocol || "V1.0" !== i.version) return j.error("Twilsock E: unsupported protocol: " + i.protocol + " ver " + i.version), void e._fsm.evUnsupported("Unsupported protocol"); var o = null; try { o = c(r.subarray(i.size, i.size + i.headerSize)) } catch (n) { return j.error("Twilsock: failed to parse message header", n, t), void e._fsm.protocolError() }
                        j.trace("Twilsock: message received: ", o); var a = null; if (o.payload_size > 0) { var l = n + i.size + i.headerSize,
                                f = o.payload_size; if (o.hasOwnProperty("payload_type") && 0 !== o.payload_type.indexOf("application/json")) 0 === o.payload_type.indexOf("text/plain") && (a = s(r.subarray(l, l + f)));
                            else try { a = c(r.subarray(l, l + f)) } catch (n) { return j.error("Twilsock: failed to parse message body", n, t), void e._fsm.protocolError() } }
                        e._updateActivityTimestamp(), "ready" === o.method ? (j.trace("Twilsock ready", a), e._wschannelUrl = a.wschannel_url, e._confirmReceiving(o), e._fsm.socketConnected()) : "notification" === o.method ? (e._confirmReceiving(o), e.emit("message", o.message_type, a)) : "reply" === o.method ? e.emit("reply", { id: o.id, status: o.status, header: o, body: a }) : "ping" === o.method ? e._confirmReceiving(o) : "close" === o.method && (j.trace("Twilsock connection close initated by server"), e._confirmReceiving(o), !a || 401 !== a.code && 410 !== a.code ? e._fsm.socketRejected(a) : e._fsm.tokenRejected(a)) }, this._activeToken = t, this._socket = r }, a.prototype._confirmReceiving = function(e) { var t = { method: "reply", id: e.id, payload_type: "application/json", status: { code: 200, status: "OK" } }; try { this._sendPacket(t) } catch (e) { j.debug("Twilsock: Failed to confirm packet receiving", e) } }, a.prototype._sendPacket = function(e, t) { var n = l(t);
                    e.payload_size = i(n); var r = (0, h.default)(e) + "\r\n",
                        s = "TWILSOCK V1.0 " + (i(r) - 2) + "\r\n",
                        a = o(s + r + n); try { this._socket.send(a.buffer) } catch (t) { throw j.info("Failed to send ", e, t), j.info(t.stack), t } }, a.prototype._cancelRetryAttempt = function() { this._backoff.reset() }, a.prototype._closeSocket = function() { this._cancelRetryAttempt(), this._socket && (this._socket.onopen = null, this._socket.onclose = null, this._socket.onerror = null, this._socket.onmessage = null, this._socket.close()), this._fsm.socketClosed() }, a.prototype.connect = function() { this._fsm.userConnect() }, a.prototype.disconnect = function() { var e = this; return this._fsm.is("disconnected") ? p.default.resolve() : new p.default(function(t) { e._disconnectedPromiseResolve = t, e._fsm.userDisconnect() }) }, a.prototype.sendUpstreamMessage = function(e, t, n) { var r = C.v4(),
                        i = { host: e.host, path: e.path, method: e.method };
                    e.hasOwnProperty("params") && (i.params = e.params); var o = { method: "message", id: r, http_header: i }; return t && (o.http_header.headers = t), t && t.hasOwnProperty("Content-Type") && (o.payload_type = t["Content-Type"]), this._sendPacket(o, n), r }, a.prototype.send = function(e, t) { return e.id = e.id || C.v4(), this._sendPacket(e, t), e.id }, a.prototype._onSocketRejected = function(e) { j.error("Twilsock connection closed by server", e), this._closeSocket() }, a.prototype._startWatchdogTimer = function() { var e = this;
                    this._timestamp = Date.now(), this._watchTimer = setInterval(function() { Date.now() - e._timestamp > R && e._socket && e._socket.close() }, T) }, a.prototype._stopWatchdogTimer = function() { clearInterval(this._watchTimer) }, a.prototype._updateActivityTimestamp = function() { this._timestamp = Date.now() }, (0, v.default)(a), t.exports = a }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { "babel-runtime/core-js/json/stringify": 27, "babel-runtime/core-js/object/define-properties": 31, "babel-runtime/core-js/object/freeze": 33, "babel-runtime/core-js/promise": 37, "babel-runtime/helpers/typeof": 47, backoff: 48, events: 182, "javascript-state-machine": 183, loglevel: 184, util: 227, uuid: 229, ws: 59 }],
        225: [function(e, t, n) { "function" == typeof Object.create ? t.exports = function(e, t) { e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }) } : t.exports = function(e, t) { e.super_ = t; var n = function() {};
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e } }, {}],
        226: [function(e, t, n) { t.exports = function(e) { return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8 } }, {}],
        227: [function(e, t, n) {
            (function(t, r) {
                function i(e, t) { var r = { seen: [], stylize: s }; return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), _(t) ? r.showHidden = t : t && n._extend(r, t), k(r.showHidden) && (r.showHidden = !1), k(r.depth) && (r.depth = 2), k(r.colors) && (r.colors = !1), k(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = o), u(r, e, r.depth) }

                function o(e, t) { var n = i.styles[t]; return n ? "\x1b[" + i.colors[n][0] + "m" + e + "\x1b[" + i.colors[n][1] + "m" : e }

                function s(e, t) { return e }

                function a(e) { var t = {}; return e.forEach(function(e, n) { t[e] = !0 }), t }

                function u(e, t, r) { if (e.customInspect && t && E(t.inspect) && t.inspect !== n.inspect && (!t.constructor || t.constructor.prototype !== t)) { var i = t.inspect(r, e); return y(i) || (i = u(e, i, r)), i } var o = c(e, t); if (o) return o; var s = Object.keys(t),
                        _ = a(s); if (e.showHidden && (s = Object.getOwnPropertyNames(t)), x(t) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return l(t); if (0 === s.length) { if (E(t)) { var b = t.name ? ": " + t.name : ""; return e.stylize("[Function" + b + "]", "special") } if (w(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp"); if (C(t)) return e.stylize(Date.prototype.toString.call(t), "date"); if (x(t)) return l(t) } var m = "",
                        v = !1,
                        g = ["{", "}"]; if (h(t) && (v = !0, g = ["[", "]"]), E(t)) { var k = t.name ? ": " + t.name : "";
                        m = " [Function" + k + "]" } if (w(t) && (m = " " + RegExp.prototype.toString.call(t)), C(t) && (m = " " + Date.prototype.toUTCString.call(t)), x(t) && (m = " " + l(t)), 0 === s.length && (!v || 0 == t.length)) return g[0] + m + g[1]; if (r < 0) return w(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special");
                    e.seen.push(t); var j; return j = v ? f(e, t, r, _, s) : s.map(function(n) { return p(e, t, r, _, n, v) }), e.seen.pop(), d(j, m, g) }

                function c(e, t) { if (k(t)) return e.stylize("undefined", "undefined"); if (y(t)) { var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'"; return e.stylize(n, "string") } return v(t) ? e.stylize("" + t, "number") : _(t) ? e.stylize("" + t, "boolean") : b(t) ? e.stylize("null", "null") : void 0 }

                function l(e) { return "[" + Error.prototype.toString.call(e) + "]" }

                function f(e, t, n, r, i) { for (var o = [], s = 0, a = t.length; s < a; ++s) I(t, String(s)) ? o.push(p(e, t, n, r, String(s), !0)) : o.push(""); return i.forEach(function(i) { i.match(/^\d+$/) || o.push(p(e, t, n, r, i, !0)) }), o }

                function p(e, t, n, r, i, o) { var s, a, c; if (c = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }, c.get ? a = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (a = e.stylize("[Setter]", "special")), I(r, i) || (s = "[" + i + "]"), a || (e.seen.indexOf(c.value) < 0 ? (a = b(n) ? u(e, c.value, null) : u(e, c.value, n - 1), a.indexOf("\n") > -1 && (a = o ? a.split("\n").map(function(e) { return "  " + e }).join("\n").substr(2) : "\n" + a.split("\n").map(function(e) { return "   " + e }).join("\n"))) : a = e.stylize("[Circular]", "special")), k(s)) { if (o && i.match(/^\d+$/)) return a;
                        s = JSON.stringify("" + i), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string")) } return s + ": " + a }

                function d(e, t, n) { var r = 0,
                        i = e.reduce(function(e, t) { return r++, t.indexOf("\n") >= 0 && r++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1 }, 0); return i > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1] }

                function h(e) { return Array.isArray(e) }

                function _(e) { return "boolean" == typeof e }

                function b(e) { return null === e }

                function m(e) { return null == e }

                function v(e) { return "number" == typeof e }

                function y(e) { return "string" == typeof e }

                function g(e) { return "symbol" == typeof e }

                function k(e) { return void 0 === e }

                function w(e) { return j(e) && "[object RegExp]" === T(e) }

                function j(e) { return "object" == typeof e && null !== e }

                function C(e) { return j(e) && "[object Date]" === T(e) }

                function x(e) { return j(e) && ("[object Error]" === T(e) || e instanceof Error) }

                function E(e) { return "function" == typeof e }

                function S(e) { return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e }

                function T(e) { return Object.prototype.toString.call(e) }

                function R(e) { return e < 10 ? "0" + e.toString(10) : e.toString(10) }

                function P() { var e = new Date,
                        t = [R(e.getHours()), R(e.getMinutes()), R(e.getSeconds())].join(":"); return [e.getDate(), F[e.getMonth()], t].join(" ") }

                function I(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }
                // Copyright Joyent, Inc. and other Node contributors.
                //
                // Permission is hereby granted, free of charge, to any person obtaining a
                // copy of this software and associated documentation files (the
                // "Software"), to deal in the Software without restriction, including
                // without limitation the rights to use, copy, modify, merge, publish,
                // distribute, sublicense, and/or sell copies of the Software, and to permit
                // persons to whom the Software is furnished to do so, subject to the
                // following conditions:
                //
                // The above copyright notice and this permission notice shall be included
                // in all copies or substantial portions of the Software.
                //
                // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
                // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
                // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
                // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
                // USE OR OTHER DEALINGS IN THE SOFTWARE.
                var O = /%[sdj%]/g;
                n.format = function(e) { if (!y(e)) { for (var t = [], n = 0; n < arguments.length; n++) t.push(i(arguments[n])); return t.join(" ") } for (var n = 1, r = arguments, o = r.length, s = String(e).replace(O, function(e) { if ("%%" === e) return "%"; if (n >= o) return e; switch (e) {
                                case "%s":
                                    return String(r[n++]);
                                case "%d":
                                    return Number(r[n++]);
                                case "%j":
                                    try { return JSON.stringify(r[n++]) } catch (e) { return "[Circular]" }
                                default:
                                    return e } }), a = r[n]; n < o; a = r[++n]) s += b(a) || !j(a) ? " " + a : " " + i(a); return s }, n.deprecate = function(e, i) {
                    function o() { if (!s) { if (t.throwDeprecation) throw new Error(i);
                            t.traceDeprecation ? console.trace(i) : console.error(i), s = !0 } return e.apply(this, arguments) } if (k(r.process)) return function() { return n.deprecate(e, i).apply(this, arguments) }; if (t.noDeprecation === !0) return e; var s = !1; return o };
                var A, N = {};
                n.debuglog = function(e) { if (k(A) && (A = t.env.NODE_DEBUG || ""), e = e.toUpperCase(), !N[e])
                        if (new RegExp("\\b" + e + "\\b", "i").test(A)) { var r = t.pid;
                            N[e] = function() { var t = n.format.apply(n, arguments);
                                console.error("%s %d: %s", e, r, t) } } else N[e] = function() {};
                    return N[e] }, n.inspect = i, i.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, i.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, n.isArray = h, n.isBoolean = _, n.isNull = b, n.isNullOrUndefined = m, n.isNumber = v, n.isString = y, n.isSymbol = g, n.isUndefined = k, n.isRegExp = w, n.isObject = j, n.isDate = C, n.isError = x, n.isFunction = E, n.isPrimitive = S, n.isBuffer = e("./support/isBuffer");
                var F = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                n.log = function() { console.log("%s - %s", P(), n.format.apply(n, arguments)) }, n.inherits = e("inherits"), n._extend = function(e, t) { if (!t || !j(t)) return e; for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]]; return e }
            }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "./support/isBuffer": 226, _process: 189, inherits: 225 }],
        228: [function(e, t, n) { arguments[4][216][0].apply(n, arguments) }, { dup: 216 }],
        229: [function(e, t, n) {
            function r(e, t) { var n = t || 0,
                    r = a; return r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] }

            function i(e, t, n) { var i = t && n || 0,
                    o = t || [];
                e = e || {}; var s = void 0 !== e.clockseq ? e.clockseq : p,
                    a = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                    u = void 0 !== e.nsecs ? e.nsecs : h + 1,
                    c = a - d + (u - h) / 1e4; if (c < 0 && void 0 === e.clockseq && (s = s + 1 & 16383), (c < 0 || a > d) && void 0 === e.nsecs && (u = 0), u >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                d = a, h = u, p = s, a += 122192928e5; var l = (1e4 * (268435455 & a) + u) % 4294967296;
                o[i++] = l >>> 24 & 255, o[i++] = l >>> 16 & 255, o[i++] = l >>> 8 & 255, o[i++] = 255 & l; var _ = a / 4294967296 * 1e4 & 268435455;
                o[i++] = _ >>> 8 & 255, o[i++] = 255 & _, o[i++] = _ >>> 24 & 15 | 16, o[i++] = _ >>> 16 & 255, o[i++] = s >>> 8 | 128, o[i++] = 255 & s; for (var b = e.node || f, m = 0; m < 6; ++m) o[i + m] = b[m]; return t ? t : r(o) }

            function o(e, t, n) { var i = t && n || 0; "string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null), e = e || {}; var o = e.random || (e.rng || s)(); if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t)
                    for (var a = 0; a < 16; ++a) t[i + a] = o[a]; return t || r(o) } for (var s = e("./lib/rng"), a = [], u = {}, c = 0; c < 256; ++c) a[c] = (c + 256).toString(16).substr(1), u[a[c]] = c; var l = s(),
                f = [1 | l[0], l[1], l[2], l[3], l[4], l[5]],
                p = 16383 & (l[6] << 8 | l[7]),
                d = 0,
                h = 0,
                _ = o;
            _.v1 = i, _.v4 = o, t.exports = _ }, { "./lib/rng": 228 }],
        230: [function(e, t, n) { t.exports = { name: "twilio-chat", version: "0.11.0", description: "A library for Twilio IP messaging", main: "lib/index.js", author: "Twilio", license: "MIT", dependencies: { "babel-runtime": "^6.18.0", backoff: "^2.5.0", durational: "^1.1.0", loglevel: "^1.4.1", platform: "^1.3.1", "twilio-notifications": "^0.2.0", "twilio-sync": "^0.3.0", "twilio-transport": "^0.0.8", twilsock: "^0.2.0", uuid: "^3.0.0" }, devDependencies: { async: "^2.1.2", "babel-eslint": "^7.0.0", "babel-plugin-transform-runtime": "^6.15.0", "babel-preset-es2015": "^6.16.0", "babel-runtime": "^6.11.6", babelify: "^7.3.0", browserify: "^13.1.0", chai: "^3.5.0", "chai-as-promised": "^6.0.0", cheerio: "^0.22.0", del: "^2.2.2", "event-to-promise": "^0.7.0", express: "^4.14.0", gulp: "^3.9.1", "gulp-derequire": "^2.1.0", "gulp-eslint": "^3.0.1", "gulp-exit": "0.0.2", "gulp-insert": "^0.5.0", "gulp-istanbul": "^1.1.1", "gulp-mocha": "^3.0.1", "gulp-rename": "^1.2.2", "gulp-replace": "^0.5.4", "gulp-tap": "^0.1.3", "gulp-uglify": "^2.0.0", "ink-docstrap": "^1.3.0", jsdoc: "^3.4.2", "mocha.parallel": "^0.13.0", proxyquire: "^1.7.10", "run-sequence": "^1.2.2", sinon: "^1.17.6", "sinon-as-promised": "^4.0.2", "sinon-chai": "^2.8.0", twilio: "^2.11.0", "vinyl-buffer": "^1.0.0", "vinyl-source-stream": "^1.1.0" }, engines: { node: ">=0.12" } } }, {}]
    }, {}, [23])(23)
});