(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports={table:"Tracks_table__3gkoP",header:"Tracks_header__3z6Dc",title:"Tracks_title__2jBUG",content:"Tracks_content__2y2de"}},19:function(e,t,a){e.exports={row:"Track_row__3MYMF",elm:"Track_elm__3maf8",artist:"Track_artist__2agRq"}},30:function(e,t,a){e.exports={page:"App_page__14G2o",section:"App_section__1vvt6"}},31:function(e,t,a){e.exports={header:"Header_header__2kr8J"}},33:function(e,t,a){e.exports={container:"PlaylistList_container__2Wtta"}},34:function(e,t,a){e.exports=a.p+"static/media/close.84e833e5.svg"},35:function(e,t,a){e.exports={container:"Card_container__M67NJ"}},36:function(e,t,a){e.exports={backdrop:"Modal_backdrop__3VE3C"}},37:function(e,t,a){e.exports=a(64)},46:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),s=a(3),i=(a(46),a(16)),l=a(12),u=a(23),d=a.n(u),p=a(30),m=a.n(p),f=a(31),b=a.n(f),v=function(){return r.a.createElement("header",{className:b.a.header},r.a.createElement(i.b,{to:"/featured",className:"styled-button"},"Featured"),r.a.createElement(i.b,{to:"/personal",className:"styled-button"},"Personal"))},k=a(2),_=a.n(k),h=a(4);function w(e,t){return E.apply(this,arguments)}function E(){return(E=Object(h.a)(_.a.mark(function e(t,a){var n,r;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=14;break}return e.prev=1,e.next=4,fetch(t,{method:"GET",headers:[["Authorization","Bearer ".concat(a)]]});case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",(n.status,r));case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:return e.abrupt("return",null);case 15:case"end":return e.stop()}},e,null,[[1,11]])}))).apply(this,arguments)}var y=a(11),g=a(33),j=a.n(g),x=a(7),O=a.n(x),N=a(34),C=a.n(N),P=a(35),T=a.n(P),S=function(e){var t=e.children,a=e.containerClass;return r.a.createElement("div",{className:"".concat(T.a.container," ").concat(a||"")},t)},B=a(36),W=a.n(B),A=function(e){var t=e.children,a=e.open,n=e.onBackdropClick;return r.a.createElement("div",{className:W.a.backdrop,onClick:function(e){e.target===e.currentTarget&&n()},style:a?{}:{display:"none"}},t)},M=a(17),F=a(14),L=a(13),R=a.n(L),U=a(19),z=a.n(U),G=function(e){var t=e.track;return r.a.createElement("div",{className:z.a.row},r.a.createElement("div",{className:z.a.elm},r.a.createElement("div",{className:z.a.artist},t.name)),r.a.createElement("div",{className:z.a.elm},t.artists[0].name))},I=Object(s.b)(function(e){return{token:e.token}})(function(e){var t=e.token,a=e.tracks,c=Object(n.useState)(a),o=Object(y.a)(c,2),s=o[0],i=o[1],l=Object(n.useState)(Object(F.a)({},s.href,s)),u=Object(y.a)(l,2),d=u[0],p=u[1],m=Object(n.useCallback)(Object(h.a)(_.a.mark(function e(){var a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.next){e.next=8;break}if(!d[s.next]){e.next=4;break}return i(d[s.next]),e.abrupt("return");case 4:return e.next=6,w(s.next,t);case 6:(a=e.sent).status||(a=a,p(Object(M.a)({},d,Object(F.a)({},a.href,a))),i(a));case 8:case"end":return e.stop()}},e)})),[s,t,d]),f=Object(n.useCallback)(Object(h.a)(_.a.mark(function e(){var a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.previous){e.next=8;break}if(!d[s.previous]){e.next=4;break}return i(d[s.previous]),e.abrupt("return");case 4:return e.next=6,w(s.previous,t);case 6:(a=e.sent).status||(a=a,p(Object(M.a)({},d,Object(F.a)({},a.href,a))),i(a));case 8:case"end":return e.stop()}},e)})),[s,t,d]);return r.a.createElement("div",{className:R.a.table},r.a.createElement("div",{className:R.a.header},r.a.createElement("div",{className:R.a.title},"Song"),r.a.createElement("div",{className:R.a.title},"Artist")),r.a.createElement("div",{className:R.a.content},s.items.map(function(e){return e.track?r.a.createElement(G,{key:e.track.id+Math.random(),track:e.track}):r.a.createElement("div",{key:Math.random()},"Loading...")})),s.next||s.previous?r.a.createElement("div",{className:R.a.buttons},s.previous?r.a.createElement("button",{className:"styled-button",onClick:f},"Previous"):r.a.createElement("button",{className:"styled-button",disabled:!0},"Previous"),s.next?r.a.createElement("button",{className:"styled-button",onClick:m},"Next"):r.a.createElement("button",{className:"styled-button",disabled:!0},"Next")):"")}),J=Object(s.b)(function(e){return{token:e.token}})(function(e){var t,a=e.href,c=e.token,o=Object(n.useState)(null),s=Object(y.a)(o,2),i=s[0],l=s[1],u=Object(n.useState)(!1),d=Object(y.a)(u,2),p=d[0],m=d[1],f=Object(n.useCallback)(Object(h.a)(_.a.mark(function e(){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(a,c);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),[a,c]);return Object(n.useEffect)(function(){var e=!1;return Object(h.a)(_.a.mark(function t(){var a,n;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:(a=t.sent)&&(a.status||(n=a,e||l(n)));case 4:case"end":return t.stop()}},t)}))(),function(){e=!0}},[f]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:O.a.cover,onClick:function(){return m(!0)},style:i?{backgroundImage:"url(".concat(i.images[0].url,")")}:{}}),p?r.a.createElement(A,{open:p,onBackdropClick:function(){return m(!1)}},r.a.createElement(S,{containerClass:O.a.card},r.a.createElement("img",{src:C.a,alt:"",className:O.a.close,onClick:function(){return m(!1)}}),i?r.a.createElement("div",{className:O.a.wrapper},r.a.createElement("header",{className:O.a.header},r.a.createElement("h1",{className:O.a.title},i.name),r.a.createElement("div",{className:O.a.createdBy},"Created by"," ",r.a.createElement("span",{className:O.a.author},i.owner.display_name)),r.a.createElement("div",{className:O.a.description},(t=i.description?i.description:"",(new DOMParser).parseFromString(t,"text/html").documentElement.textContent))),r.a.createElement("div",{className:O.a.lineBreak}),r.a.createElement("section",{className:O.a.section},r.a.createElement(I,{tracks:i.tracks}))):"Loading...")):"")}),D=function(e){var t=e.getSimple,a=Object(n.useState)(null),c=Object(y.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)(function(){var e=!1;return Object(h.a)(_.a.mark(function a(){var n,r;return _.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t();case 2:(n=a.sent)&&(n.status||(r=n,e||s(r)));case 4:case"end":return a.stop()}},a)}))(),function(){e=!0}},[t]),r.a.createElement("div",{className:j.a.container},(o?o.items:[]).map(function(e){return r.a.createElement(J,{key:e.id,href:e.href})}))},q=Object(s.b)(function(e){return{token:e.token}})(function(e){var t=e.token,a=Object(n.useCallback)(Object(h.a)(_.a.mark(function e(){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("https://api.spotify.com/v1/me/playlists",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),[t]);return r.a.createElement(D,{getSimple:a})}),V=Object(s.b)(function(e){return{token:e.token}})(function(e){var t=e.token,a=Object(n.useCallback)(Object(h.a)(_.a.mark(function e(){var a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("https://api.spotify.com/v1/browse/featured-playlists",t);case 2:return a=e.sent,e.abrupt("return",a?a.status?a:a.playlists:null);case 4:case"end":return e.stop()}},e)})),[t]);return r.a.createElement(D,{getSimple:a})}),X=Object(s.b)(null,function(e){return{setToken:function(t){return e({type:"setToken",payload:t})}}})(function(e){var t=e.setToken,a=Object(n.useState)(null),c=Object(y.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)(function(){var e=!1,a=null,n=d.a.parse(window.location.hash);if(n.access_token){var r=n;e||(t(r.access_token),a=setTimeout(function(){return t(null)},1e3*Number(r.expires_in))),r.state&&s(r.state)}return function(){e=!0,a&&clearTimeout(a)}},[t]),o?r.a.createElement(l.a,{to:o}):r.a.createElement("div",null,"Redirecting...")}),H=Object(s.b)(function(e){return{token:e.token}})(function(e){var t=e.token;return Object(n.useEffect)(function(){if(!t&&!d.a.parse(window.location.hash).access_token){var e={client_id:"7ff4c2742b1d4e91b297c2ef6bf8d041",redirect_uri:"https://player.kmr.pw/callback",response_type:"token",scopes:["streaming","user-read-birthdate","user-read-email","user-read-private","playlist-read-private"],state:window.location.pathname};window.location.assign(function(e){var t=e.client_id,a=e.redirect_uri,n=e.response_type,r=e.scopes,c=e.show_dialog,o=e.state;return"https://accounts.spotify.com/authorize?client_id=".concat(t,"&redirect_uri=").concat(encodeURIComponent(a),"&scope=").concat(r?r.join(" "):"","&response_type=").concat(n,"&state=").concat(o||"","&show_dialog=").concat(c||"false")}(e))}},[t]),r.a.createElement(i.a,null,r.a.createElement(v,null),r.a.createElement("div",{className:m.a.page},r.a.createElement(l.b,{exact:!0,path:"/",render:function(){return r.a.createElement(l.a,{to:"/featured"})}}),r.a.createElement(l.b,{path:"/personal",component:q}),r.a.createElement(l.b,{path:"/featured",component:V}),r.a.createElement(l.b,{path:"/callback",component:X})))}),Y=a(22),$={token:null},K=Object(Y.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;return"setToken"===t.type?Object(M.a)({},e,{token:t.payload}):e}),Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(s.a,{store:K},r.a.createElement(H,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");Q?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Z(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Z(t,e)})}}()},7:function(e,t,a){e.exports={cover:"Playlist_cover__3U_7L",card:"Playlist_card__3OMCF",close:"Playlist_close__3n1DV",wrapper:"Playlist_wrapper__38PS6",header:"Playlist_header__3XXLq",title:"Playlist_title__3Fedx",description:"Playlist_description__2WzFR",createdBy:"Playlist_createdBy__3_wWb",author:"Playlist_author__27M0k",lineBreak:"Playlist_lineBreak__2IGvn",section:"Playlist_section__14O49"}}},[[37,1,2]]]);
//# sourceMappingURL=main.5553f44c.chunk.js.map