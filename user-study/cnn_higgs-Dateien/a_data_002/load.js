(function(){function s(){}function A(a,b){return 0==ha.call(a).indexOf("[object "+b)}function y(a){return a&&"/"==a.charAt(a.length-1)?a.substr(0,a.length-1):a}function G(a,b){var c,e,d,f;c=1;e=a;b&&(e=e.replace(ia,function(a,b,e,d){e&&c++;f=k;return d||""}));if(f){d=b.split("/");if(c>d)throw Error("attempt to access module beyond root of package: "+a);d.splice(d.length-c,c);return d.concat(e||[]).join("/")}return e}function S(a){var b=a.indexOf("!");return{M:a.substr(b+1),i:0<=b&&a.substr(0,b)}}
function M(){}function w(a,b){M.prototype=a||N;var c=new M;M.prototype=N;for(var e in b)c[e]=b[e];return c}function x(){function a(a,b,d){e.push([a,b,d])}function b(a,b){for(var d,c=0;d=e[c++];)(d=d[a])&&d(b)}var c,e,d;c=this;e=[];d=function(f,c){a=f?function(a){a&&a(c)}:function(a,b){b&&b(c)};d=s;b(f?0:1,c);b=s;e=m};this.t=function(b,d,e){a(b,d,e)};this.f=function(a){c.s=a;d(k,a)};this.d=function(a){c.ga=a;d(o,a)};this.p=function(a){b(2,a)}}function u(a,b,c,e){a instanceof x?a.t(b,c,e):b(a)}function B(a,
b,c){var e;return function(){0<=--a&&b&&(e=b.apply(m,arguments));0==a&&c&&c(e);return e}}function C(){function a(b,d,c,g){var i;i=h.g(n,m,[].concat(b));this.then=b=function(a,b){u(i,function(b){a&&a.apply(m,b)},function(a){if(b)b(a);else throw a;});return this};this.next=function(b,d,e){return new a(b,d,e,i)};d&&b(d,c);u(g,function(){h.h(i)})}var b=[].slice.call(arguments),c;A(b[0],"Object")&&(c=b.shift(),n=h.b(c,n),h.v(c));return new a(b[0],b[1],b[2])}function T(a){var b=a.id;if(b==m)if(D!==m)D=
{C:"Multiple anonymous defines in url"};else if(!(b=h.$()))D=a;if(b!=m){var c=j[b];b in j||(c=h.j(b,n).b,c=j[b]=h.z(c,b));if(!(c instanceof x))throw Error("duplicate define: "+b);c.fa=o;h.A(c,a)}}function ja(a){try{return eval(a)}catch(b){}}function U(){var a;a=r[ka]("link");a.rel="stylesheet";a.type="text/css";return a}function la(a,b,c){V.push({url:a,P:b,S:function(){c(Error(W))}});a=X.shift();!a&&Y.length<ma&&(a=r.createElement("style"),Y.push(a),H.appendChild(a));a&&O(a)}function O(a){var b;(b=
V.shift())?(a.onload=function(){b.P();O(a)},a.onerror=function(){b.S();O(a)},a.styleSheet.addImport(b.url)):(a.onload=a.onerror=z,X.push(a))}function Z(a,b,c){if(!E.load){var e,d,f;if(!a.href||r.readyState&&"complete"!=r.readyState)e=o;else{e=o;try{if(d=a.sheet)f=d.cssRules,e=null===f,!e&&"length"in f&&(d.insertRule("-curl-css-test {}",0),d.deleteRule(0),e=k)}catch(g){e=/security|denied/i.test(g.message)}}e?c():a.onload==z||!a.onload||aa(function(){Z(a,b,c)},b)}}function na(a,b,c,e){function d(){if(f.onload!=
z&&f.onload){f.onload=f.onerror=z;var a=function(){!r.readyState||"complete"==r.readyState?b():aa(a,10)};a()}}var f;f=U();f.onload=function(){E.load=E.load||k;d()};Z(f,e,d);f.onerror=function(){E.error=E.error||k;f.onload!=z&&f.onload&&(f.onload=f.onerror=z,c(Error(W)))};f.href=a;H.appendChild(f)}function z(){}var k=!0,o=!1,t=this.window||global,n,I,P,J=t.document,Q=J&&(J.head||J.getElementsByTagName("head")[0]),oa=Q&&Q.getElementsByTagName("base")[0]||null,ba={},ca={},K={},pa="addEventListener"in
t?{}:{loaded:1,complete:1},N={},ha=N.toString,m,j={},L=o,D,qa=/\?/,da=/^\/|^[^:]+:\/\//,ia=/(\.)(\.?)(?:$|\/([^\.\/]+.*)?)/g,ra=/\/\*[\s\S]*?\*\/|(?:[^\\])\/\/.*?[\n\r]/g,sa=/require\s*\(\s*["']([^"']+)["']\s*\)|(?:[^\\]?)(["'])/g,R,h;h={O:function(a,b){return h.m(G(a,b))},m:function(a,b){return b.c&&a in b.c&&b.c[a].ba||a},n:function(a,b){a&&b.K&&0>a.indexOf("/")&&(a=y(b.K)+"/"+a);return a},g:function(a,b,c,e){function d(b){return h.m(G(b,g.id),a)}function f(b,c,f){var l,ea;l=c&&function(a){c.apply(m,
a)};if(A(b,"String")){b=d(b);f=j[b];ea=f instanceof x&&f.a;if(!(b in j))throw Error("Module not resolved: "+b);if(l)throw Error("require(id, callback) not allowed");return ea||f}u(h.h(h.g(a,g.id,b,e)),l,f)}var g;g=new x;g.id=b||"";g.aa=e;g.B=c;g.b=a;g.q=f;f.toUrl=function(b){return h.j(d(b),a).url};g.O=d;return g},z:function(a,b,c){var e,d,f;e=h.g(a,b,m,c);d=e.f;f=B(1,function(a){e.l=a;try{return h.T(e)}catch(b){e.d(b)}});e.f=function(a){u(c||L,function(){d(j[e.id]=f(a))})};e.D=function(a){u(c||L,
function(){e.a&&(f(a),e.p(ca))})};return e},Q:function(a,b,c,e){return h.g(a,c,m,e)},Z:function(a){return a.q},F:function(a){return a.a||(a.a={})},Y:function(a){var b=a.o;b||(b=a.o={id:a.id,uri:h.G(a),exports:h.F(a),config:function(){return a.b}},b.a=b.exports);return b},G:function(a){return a.url||(a.url=h.w(a.q.toUrl(a.id)),a.b)},b:function(a){var b,c,e,d,f,g;b=!a;a&&(h.b=h.J);a||(a={});e=a.apiName||"curl";d=a.apiContext||t;f=a.defineName||"define";g=a.defineContext||t;c=a.overwriteApi;!b&&I&&(t.curl=
I,I=o);if(!b&&!c&&d[e]&&d[e]!=C)throw Error(e+" already exists");d[e]=C;if(!b||!t.define){if(!b&&!c&&f in g&&g[f]!=P)throw Error(f+" already exists");g[f]=P=function(){var a=h.X(arguments);T(a)};P.amd={plugins:k,jQuery:k,curl:"0.7.0"}}return h.J(a)},J:function(a,b){function c(a,b){var e,c,g,v,i;for(i in a){g=a[i];g.name=g.id||g.name||i;v=d;c=S(y(g.name||i));e=c.M;if(c=h.n(c.i,d))(v=f[c])||(v=f[c]=w(d),v.c=w(d.c),v.e=[]),delete a[i];if(b){c=g;var F=void 0;c.path=y(c.path||c.location||"");F=y(c.main)||
"main";"."!=F.charAt(0)&&(F="./"+F);c.ba=G(F,c.name+"/");c.b=c.config;c.b&&(c.b=w(d,c.b))}else c={path:y(g)};c.N=e.split("/").length;e?(v.c[e]=c,v.e.push(e)):v.u=h.L(g,d)}}function e(a){var b=a.c;a.da=RegExp("^("+a.e.sort(function(a,c){return b[c].N-b[a].N}).join("|").replace(/\/|\./g,"\\$&")+")(?=\\/|$)");delete a.e}var d,f,g;b||(b={});d=w(b,a);d.u=d.baseUrl||"";d.K=d.pluginPath||"curl/plugin";d.R=RegExp(d.dontAddFileExt||qa);d.c=w(b.c);f=a.plugins||{};d.plugins=w(b.plugins);for(g in f)d.plugins[h.n(g,
d)]=f[g];f=d.plugins;d.e=[];c(a.paths,o);c(a.packages,k);for(g in f){f[g]=w(d,f[g]);var i=f[g].e;i&&(f[g].e=i.concat(d.e),e(f[g]))}e(d);return d},v:function(a){var b;(b=a&&a.preloads)&&0<b.length&&u(L,function(){L=h.h(h.g(n,m,b,k))})},j:function(a,b){var c,e,d,f;c=b.c;d=da.test(a)?a:a.replace(b.da,function(a){e=c[a]||{};f=e.b;return e.path||""});return{b:f||n,url:h.L(d,b)}},L:function(a,b){var c=b.u;return c&&!da.test(a)?y(c)+"/"+a:a},w:function(a,b){return a+((b||n).R.test(a)?"":".js")},H:function(a,
b,c){var e=J.createElement("script");e.onload=e.onreadystatechange=function(c){c=c||t.event;if("load"==c.type||pa[e.readyState])delete K[a.id],e.onload=e.onreadystatechange=e.onerror="",b()};e.onerror=function(){c(Error("Syntax or http error: "+a.url))};e.type=a.I||"text/javascript";e.charset="utf-8";e.async=!a.ca;e.src=a.url;K[a.id]=e;Q.insertBefore(e,oa);return e},U:function(a){var b=[],c;("string"==typeof a?a:a.toSource?a.toSource():a.toString()).replace(ra,"").replace(sa,function(a,d,f){f?c=c==
f?m:c:c||b.push(d);return""});return b},X:function(a){var b,c,e,d,f,g;f=a.length;e=a[f-1];d=A(e,"Function")?e.length:-1;2==f?A(a[0],"Array")?c=a[0]:b=a[0]:3==f&&(b=a[0],c=a[1]);!c&&0<d&&(g=k,c=["require","exports","module"].slice(0,d).concat(h.U(e)));return{id:b,l:c||[],r:0<=d?e:function(){return e},k:g}},T:function(a){var b;b=a.r.apply(a.k?a.a:m,a.l);b===m&&a.a&&(b=a.o?a.a=a.o.a:a.a);return b},A:function(a,b){a.r=b.r;a.k=b.k;a.B=b.l;h.h(a)},h:function(a){function b(a,b,c){g[b]=a;c&&q(a,b)}function c(b,
c){var e,d,f,g;e=B(1,function(a){d(a);l(a,c)});d=B(1,function(a){q(a,c)});f=h.V(b,a);(g=f instanceof x&&f.a)&&d(g);u(f,e,a.d,a.a&&function(a){f.a&&(a==ba?d(f.a):a==ca&&e(f.a))})}function e(){a.f(g)}var d,f,g,i,p,q,l;g=[];f=a.B;i=f.length;0==f.length&&e();q=B(i,b,function(){a.D&&a.D(g)});l=B(i,b,e);for(d=0;d<i;d++)p=f[d],p in R?(l(R[p](a),d,k),a.a&&a.p(ba)):p?c(p,d):l(m,d,k);return a},W:function(a){h.G(a);h.H(a,function(){var b=D;D=m;a.fa!==o&&(!b||b.C?a.d(Error(b&&b.C||"define() missing or duplicated: "+
a.url)):h.A(a,b))},a.d);return a},V:function(a,b){var c,e,d,f,g,i,p,q,l,k;c=b.O;e=b.aa;l=b.b||n;d=S(a);i=d.M;f=d.i?h.m(h.n(G(d.i,b.id),l),l):c(i);p=h.j(f,l);if(d.i)g=f;else if(g=p.b.moduleLoader)i=f,f=g,p=h.j(g,l);d=j[f];f in j||(d=j[f]=h.z(p.b,f,e),d.url=h.w(p.url,d.b),h.W(d));f==g&&(q=new x,k=l.plugins[g]||l,u(d,function(a){var b,d,f;f=a.dynamic;i="normalize"in a?a.normalize(i,c,k)||"":c(i);d=g+"!"+i;b=j[d];if(!(d in j)){b=h.Q(k,d,i,e);f||(j[d]=b);var p=function(a){b.f(a);f||(j[d]=a)};p.resolve=
p;p.reject=p.error=b.d;a.load(i,b.q,p,k)}q!=b&&u(b,q.f,q.d,q.p)},q.d));return q||d},$:function(){var a;if(!A(t.opera,"Opera"))for(var b in K)if("interactive"==K[b].readyState){a=b;break}return a}};R={require:h.Z,exports:h.F,module:h.Y};C.version="0.7.0";n=t.curl;"function"==typeof n?(I=n,n=o):t.curl=m;n=h.b(n);h.v(n);j.curl=C;j["curl/_privileged"]={core:h,cache:j,config:function(){return n},_define:T,_curl:C,Promise:x};var fa=this.document;define("curl/plugin/js",["curl/_privileged"],function(a){function b(b,
c,d){function e(){g||(f<new Date?d():setTimeout(e,10))}var f,g,h;f=(new Date).valueOf()+(b.ea||3E5);d&&b.a&&setTimeout(e,10);h=a.core.H(b,function(){g=k;b.a&&(b.s=ja(b.a));!b.a||b.s?c(h):d()},function(a){g=k;d(a)})}function c(a,e){b(a,function(){var b=d.shift();h=0<d.length;b&&c.apply(null,b);e.f(a.s||k)},function(a){e.d(a)})}var e={},d=[],f=fa&&fa.createElement("script").async==k,g,h;g=a.Promise;return{dynamic:k,load:function(a,q,l,m){function n(a){(l.error||function(a){throw a;})(a)}var j,r,t,s,
o;j=0<a.indexOf("!order");r=a.indexOf("!exports=");t=0<r&&a.substr(r+9);s="prefetch"in m?m.prefetch:k;a=j||0<r?a.substr(0,a.indexOf("!")):a;o=q.toUrl(a.lastIndexOf(".")<=a.lastIndexOf("/")?a+".js":a);o in e?e[o]instanceof g?e[o].t(l,n):l(e[o]):(a={name:a,url:o,ca:j,a:t,ea:m.timeout},e[o]=q=new g,q.t(function(a){e[o]=a;l(a)},n),j&&!f&&h?(d.push([a,q]),s&&(a.I="text/cache",b(a,function(a){a&&a.parentNode.removeChild(a)},function(){}),a.I="")):(h=h||j,c(a,q)))}}});var ka="createElement",aa=this.setTimeout,
r=this.document,H,ta=r&&r.createStyleSheet&&!(10<=r.documentMode),Y=[],X=[],V=[],ma=12,ga,W="HTTP or network error.",E={};r&&(H=r.head||r.getElementsByTagName("head")[0],ga=ta?la:na);define("curl/plugin/css",{normalize:function(a,b){var c,e;if(!a)return a;c=a.split(",");e=[];for(var d=0,f=c.length;d<f;d++)e.push(b(c[d]));return e.join(",")},load:function(a,b,c,e){function d(){0==--k&&c()}function f(a){(c.d||function(a){throw a;})(a)}var g,h,k,j;g=(a||"").split(",");h=e.cssWatchPeriod||50;e=e.cssNoWait;
k=g.length;for(j=0;j<g.length;j++){var a=g[j],l,a=b.toUrl(a.lastIndexOf(".")<=a.lastIndexOf("/")?a+".css":a);e?(l=U(),l.href=a,H.appendChild(l),d()):ga(a,d,f,h)}},"plugin-builder":"./builder/css",pluginBuilder:"./builder/css"})}).call(this);var jsonData;(function(){var s=document.getElementById("disqus-jsonData");jsonData=s.textContent||s.innerHTML})();
window.onload=function(){curl({baseUrl:window.location.protocol=="https:"?"https://securecdn.disqus.com/1362711551":"http://mediacdn.disqus.com/1362711551"});var s=[];s.push("js!build/next/lib.js!order");s.push("js!build/next/lounge/client.js!order");curl(s).then(function(){var s=JSON.parse(window.jsonData);s.code===15?($("div#postCompatContainer").hide(),$("div#notFound").show()):(new DISQUS.next.views.Lounge({jsonData:s}),DISQUS.next.intelligence.init(DISQUS.next.views.Lounge.getInstance()))})};