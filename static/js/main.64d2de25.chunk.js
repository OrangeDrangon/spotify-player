(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),s=n.n(c),o=(n(15),n(1)),u=n.n(o),i=n(2),l=n(3),p=n(6),f=n.n(p),d=function(e){var t=e.setSelected;return a.a.createElement("header",null,a.a.createElement("button",{onClick:function(){return t(O.featured)}},"Featured"),a.a.createElement("button",{onClick:function(){return t(O.personal)}},"Personal"))},m=n(7),b=n.n(m),v=n(8),h=n.n(v),w=function(e){var t=e.href,n=e.load,c=Object(r.useState)(null),s=Object(l.a)(c,2),o=s[0],p=s[1],f=Object(r.useCallback)(Object(i.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),[t,n]);return Object(r.useEffect)(function(){var e=!1;return Object(i.a)(u.a.mark(function t(){var n,r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:(n=t.sent)&&(n.status||(r=n,e||p(r)));case 4:case"end":return t.stop()}},t)}))(),function(){e=!0}},[f]),a.a.createElement("div",{className:h.a.cover,style:o?{backgroundImage:"url(".concat(o.images[0].url,")")}:{},onClick:function(){return console.log(o)}})},k=function(e){var t=e.getSimple,n=e.getFull,c=Object(r.useState)(null),s=Object(l.a)(c,2),o=s[0],p=s[1];return Object(r.useEffect)(function(){var e=!1;return Object(i.a)(u.a.mark(function n(){var r,a;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:(r=n.sent)&&(r.status||(a=r,e||p(a)));case 4:case"end":return n.stop()}},n)}))(),function(){e=!0}},[t]),a.a.createElement("div",{className:b.a.container},(o?o.items:[]).map(function(e){return a.a.createElement(w,{key:e.id,href:e.href,load:n})}))};function j(e,t){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(u.a.mark(function e(t,n){var r,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=14;break}return e.prev=1,e.next=4,fetch(t,{method:"GET",headers:[["Authorization","Bearer ".concat(n)]]});case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",(r.status,a));case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:return e.abrupt("return",null);case 15:case"end":return e.stop()}},e,null,[[1,11]])}))).apply(this,arguments)}var O={featured:0,personal:1},_=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(O.featured),o=Object(l.a)(s,2),p=o[0],m=o[1];Object(r.useEffect)(function(){var e=!1,t=null;if(!n){var r=f.a.parse(window.location.hash);if(r.access_token){var a=r;e||(c(a.access_token),t=setTimeout(function(){return c(null)},1e3*Number(a.expires_in))),window.location.hash=""}else window.location.assign(function(e){var t=e.client_id,n=e.redirect_uri,r=e.response_type,a=e.scopes,c=e.show_dialog,s=e.state;return"https://accounts.spotify.com/authorize?client_id=".concat(t,"&redirect_uri=").concat(encodeURIComponent(n),"&scope=").concat(a?a.join(" "):"","&response_type=").concat(r,"&state=").concat(s||"","&show_dialog=").concat(c||"false")}({client_id:"7ff4c2742b1d4e91b297c2ef6bf8d041",redirect_uri:"https://player.kmr.pw",response_type:"token",scopes:["streaming","user-read-birthdate","user-read-email","user-read-private","playlist-read-private"]}))}return function(){e=!0,t&&clearTimeout(t)}},[n]);var b=Object(r.useCallback)(Object(i.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("https://api.spotify.com/v1/browse/featured-playlists",n);case 2:return t=e.sent,e.abrupt("return",t?t.status?t:t.playlists:null);case 4:case"end":return e.stop()}},e)})),[n]),v=Object(r.useCallback)(function(){var e=Object(i.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[n]),h=Object(r.useCallback)(Object(i.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("https://api.spotify.com/v1/me/playlists",n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),[n]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(d,{setSelected:m}),a.a.createElement("div",{style:p===O.featured?{}:{display:"none"}},a.a.createElement(k,{getSimple:b,getFull:v})),a.a.createElement("div",{style:p===O.personal?{}:{display:"none"}},a.a.createElement(k,{getSimple:h,getFull:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){e.exports={container:"PlaylistList_container__2Wtta"}},8:function(e,t,n){e.exports={cover:"Playlist_cover__3U_7L"}},9:function(e,t,n){e.exports=n(28)}},[[9,1,2]]]);
//# sourceMappingURL=main.64d2de25.chunk.js.map