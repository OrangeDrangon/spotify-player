(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports={table:"Tracks_table__3gkoP",header:"Tracks_header__3z6Dc",title:"Tracks_title__2jBUG",content:"Tracks_content__2y2de"}},21:function(e,t,n){e.exports={header:"Header_header__2kr8J",button:"Header_button__w7eHc"}},22:function(e,t,n){e.exports={row:"Track_row__3MYMF",elm:"Track_elm__3maf8"}},29:function(e,t,n){e.exports={page:"App_page__14G2o",section:"App_section__1vvt6"}},3:function(e,t,n){e.exports={cover:"Playlist_cover__3U_7L",card:"Playlist_card__3OMCF",close:"Playlist_close__3n1DV",wrapper:"Playlist_wrapper__38PS6",header:"Playlist_header__3XXLq",title:"Playlist_title__3Fedx",description:"Playlist_description__2WzFR",createdBy:"Playlist_createdBy__3_wWb",author:"Playlist_author__27M0k",lineBreak:"Playlist_lineBreak__2IGvn",section:"Playlist_section__14O49",buttons:"Playlist_buttons__1n9jL",button:"Playlist_button__2MUdi"}},31:function(e,t,n){e.exports={container:"PlaylistList_container__2Wtta"}},32:function(e,t,n){e.exports=n.p+"static/media/close.84e833e5.svg"},33:function(e,t,n){e.exports={container:"Card_container__M67NJ"}},34:function(e,t,n){e.exports={backdrop:"Modal_backdrop__3VE3C"}},36:function(e,t,n){e.exports=n(63)},45:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),s=n(6),i=(n(45),n(15)),l=n(11),u=n(20),d=n.n(u),p=n(29),m=n.n(p),f=n(21),_=n.n(f),b=function(){return r.a.createElement("header",{className:_.a.header},r.a.createElement(i.b,{to:"/featured",className:_.a.button},"Featured"),r.a.createElement(i.b,{to:"/personal",className:_.a.button},"Personal"))},v=n(2),h=n.n(v),k=n(7);function w(e,t){return E.apply(this,arguments)}function E(){return(E=Object(k.a)(h.a.mark(function e(t,n){var a,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=14;break}return e.prev=1,e.next=4,fetch(t,{method:"GET",headers:[["Authorization","Bearer ".concat(n)]]});case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",(a.status,r));case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:return e.abrupt("return",null);case 15:case"end":return e.stop()}},e,null,[[1,11]])}))).apply(this,arguments)}var y=n(12),g=n(31),j=n.n(g),O=n(3),N=n.n(O),x=n(32),P=n.n(x),C=n(33),T=n.n(C),S=function(e){var t=e.children,n=e.containerClass;return r.a.createElement("div",{className:"".concat(T.a.container," ").concat(n||"")},t)},B=n(34),A=n.n(B),M=function(e){var t=e.children,n=e.open,a=e.onBackdropClick;return r.a.createElement("div",{className:A.a.backdrop,onClick:function(e){e.target===e.currentTarget&&a()},style:n?{}:{display:"none"}},t)},W=n(13),L=n.n(W),F=n(22),U=n.n(F),R=function(e){var t=e.track;return r.a.createElement("div",{className:U.a.row},r.a.createElement("div",{className:U.a.elm},t.name),r.a.createElement("div",{className:U.a.elm},t.artists[0].name))},z=function(e){var t=e.tracks;return r.a.createElement("div",{className:L.a.table},r.a.createElement("div",{className:L.a.header},r.a.createElement("div",{className:L.a.title},"Song"),r.a.createElement("div",{className:L.a.title},"Artist")),r.a.createElement("div",{className:L.a.content},t.items.map(function(e){return e.track?r.a.createElement(R,{key:e.track.id+Math.random(),track:e.track}):r.a.createElement("div",{key:Math.random()},"Loading...")})))},G=Object(s.b)(function(e){return{token:e.token}})(function(e){var t,n=e.href,c=e.token,o=Object(a.useState)(null),s=Object(y.a)(o,2),i=s[0],l=s[1],u=Object(a.useState)(!1),d=Object(y.a)(u,2),p=d[0],m=d[1],f=Object(a.useCallback)(Object(k.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(n,c);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),[n,c]);return Object(a.useEffect)(function(){var e=!1;return Object(k.a)(h.a.mark(function t(){var n,a;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:(n=t.sent)&&(n.status||(a=n,e||l(a)));case 4:case"end":return t.stop()}},t)}))(),function(){e=!0}},[f]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:N.a.cover,onClick:function(){return m(!0)},style:i?{backgroundImage:"url(".concat(i.images[0].url,")")}:{}}),p?r.a.createElement(M,{open:p,onBackdropClick:function(){return m(!1)}},r.a.createElement(S,{containerClass:N.a.card},r.a.createElement("img",{src:P.a,alt:"",className:N.a.close,onClick:function(){return m(!1)}}),i?r.a.createElement("div",{className:N.a.wrapper},r.a.createElement("header",{className:N.a.header},r.a.createElement("h1",{className:N.a.title},i.name),r.a.createElement("div",{className:N.a.createdBy},"Created by"," ",r.a.createElement("span",{className:N.a.author},i.owner.display_name)),r.a.createElement("div",{className:N.a.description},(t=i.description?i.description:"",(new DOMParser).parseFromString(t,"text/html").documentElement.textContent))),r.a.createElement("div",{className:N.a.lineBreak}),r.a.createElement("section",{className:N.a.section},r.a.createElement(z,{tracks:i.tracks})),r.a.createElement("section",{className:N.a.buttons},r.a.createElement("button",{className:N.a.button},"Abc"))):"Loading...")):"")}),I=function(e){var t=e.getSimple,n=Object(a.useState)(null),c=Object(y.a)(n,2),o=c[0],s=c[1];return Object(a.useEffect)(function(){var e=!1;return Object(k.a)(h.a.mark(function n(){var a,r;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:(a=n.sent)&&(a.status||(r=a,e||s(r)));case 4:case"end":return n.stop()}},n)}))(),function(){e=!0}},[t]),r.a.createElement("div",{className:j.a.container},(o?o.items:[]).map(function(e){return r.a.createElement(G,{key:e.id,href:e.href})}))},J=Object(s.b)(function(e){return{token:e.token}})(function(e){var t=e.token,n=Object(a.useCallback)(Object(k.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("https://api.spotify.com/v1/me/playlists",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),[t]);return r.a.createElement(I,{getSimple:n})}),D=Object(s.b)(function(e){return{token:e.token}})(function(e){var t=e.token,n=Object(a.useCallback)(Object(k.a)(h.a.mark(function e(){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("https://api.spotify.com/v1/browse/featured-playlists",t);case 2:return n=e.sent,e.abrupt("return",n?n.status?n:n.playlists:null);case 4:case"end":return e.stop()}},e)})),[t]);return r.a.createElement(I,{getSimple:n})}),H=Object(s.b)(null,function(e){return{setToken:function(t){return e({type:"setToken",payload:t})}}})(function(e){var t=e.setToken,n=Object(a.useState)(null),c=Object(y.a)(n,2),o=c[0],s=c[1];return Object(a.useEffect)(function(){var e=!1,n=null,a=d.a.parse(window.location.hash);if(a.access_token){var r=a;e||(t(r.access_token),n=setTimeout(function(){return t(null)},1e3*Number(r.expires_in))),r.state&&s(r.state)}return function(){e=!0,n&&clearTimeout(n)}},[t]),o?r.a.createElement(l.a,{to:o}):r.a.createElement("div",null,"Redirecting...")}),V=Object(s.b)(function(e){return{token:e.token}})(function(e){var t=e.token;return Object(a.useEffect)(function(){if(!t&&!d.a.parse(window.location.hash).access_token){var e={client_id:"7ff4c2742b1d4e91b297c2ef6bf8d041",redirect_uri:"https://player.kmr.pw/callback",response_type:"token",scopes:["streaming","user-read-birthdate","user-read-email","user-read-private","playlist-read-private"],state:window.location.pathname};window.location.assign(function(e){var t=e.client_id,n=e.redirect_uri,a=e.response_type,r=e.scopes,c=e.show_dialog,o=e.state;return"https://accounts.spotify.com/authorize?client_id=".concat(t,"&redirect_uri=").concat(encodeURIComponent(n),"&scope=").concat(r?r.join(" "):"","&response_type=").concat(a,"&state=").concat(o||"","&show_dialog=").concat(c||"false")}(e))}},[t]),r.a.createElement(i.a,null,r.a.createElement(b,null),r.a.createElement("div",{className:m.a.page},r.a.createElement(l.b,{exact:!0,path:"/",render:function(){return r.a.createElement(l.a,{to:"/featured"})}}),r.a.createElement(l.b,{path:"/personal",component:J}),r.a.createElement(l.b,{path:"/featured",component:D}),r.a.createElement(l.b,{path:"/callback",component:H})))}),X=n(19),q=n(35),Y={token:null},$=Object(X.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;return"setToken"===t.type?Object(q.a)({},e,{token:t.payload}):e}),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(s.a,{store:$},r.a.createElement(V,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");K?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Q(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Q(t,e)})}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.31f85b52.chunk.js.map