(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(4),c=n.n(a),s=(n(13),n(1)),i=n.n(s),u=n(2),d=n(6),p=n(5),l=n.n(p),f=function(e){var t=e.client_id,n=e.redirect_uri,o=e.response_type,r=e.scopes,a=e.show_dialog,c=e.state;return"https://accounts.spotify.com/authorize?client_id=".concat(t,"&redirect_uri=").concat(encodeURIComponent(n),"&scope=").concat(r?r.join(" "):"","&response_type=").concat(o,"&state=").concat(c||"","&show_dialog=").concat(a||"false")},h=function(){var e=Object(o.useState)(null),t=Object(d.a)(e,2),n=t[0],a=t[1];Object(o.useEffect)(function(){var e=!1;return n||Object(u.a)(i.a.mark(function t(){var n,o,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(n=l.a.parse(window.location.hash)).access_token?(r=n,e||a(r.access_token),window.location.hash=""):(o={client_id:"7ff4c2742b1d4e91b297c2ef6bf8d041",redirect_uri:Object({NODE_ENV:"production",PUBLIC_URL:""}).REDIRECT_URI||"",response_type:"token",scopes:["streaming","user-read-birthdate","user-read-email","user-read-private"]},window.location.href=f(o));case 2:case"end":return t.stop()}},t)}))(),function(){e=!0}},[n]);Object(o.useCallback)(Object(u.a)(i.a.mark(function e(){var t,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.spotify.com/v1/browse/featured-playlists",{method:"GET",headers:[["Authorization","Bearer ".concat(n)]]});case 3:return t=e.sent,e.next=6,t.json();case 6:return o=e.sent,e.abrupt("return",o);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])})),[n]);return r.a.createElement("div",null,n)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){e.exports=n(26)}},[[7,1,2]]]);
//# sourceMappingURL=main.46af2b09.chunk.js.map