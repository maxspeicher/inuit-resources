_vrtrack=function(){};
(function(){
var j=null;var l=new Date;function m(a){for(var b in _vrq)if(_vrq[b][0]==a)return _vrq[b][1]}var n={o:50,h:function(a,b){if(document.getElementsByTagName&&setTimeout){var c,d=document.getElementsByTagName(a);d&&d.length&&0<d.length?(clearTimeout(c),b()):c=setTimeout(function(){n.h(a,b)},n.o)}}};
function p(a,b,c){c=c||"";var d,e,g,k,f,h=document.getElementsByTagName("head");if(h){d=0;for(g=h.length;d<g;d++)if(f=h[d].getElementsByTagName(a)){e=0;for(k=f.length;e<k;e++)if(f[e].getAttribute(b)&&(!c||c==f[e].getAttribute(b).toLowerCase()))return f[e]}}return j}function q(a){if(-1<a.indexOf("http://"))return a;var b=document.createElement("div");b.innerHTML='<a href="'+a.split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")+'">x</a>';return b.firstChild.href}
function r(){var a=p("meta","property","vr:canonical");return a&&a.content?q(a.content):(a=p("link","rel","canonical"))&&a.href?q(a.href):(a=p("meta","property","og:url"))&&a.content?q(a.content):document.location.href}function s(){var a={"co.uk":1,"co.il":1,"co.in":1,"co.ke":1,"co.ug":1,"com.my":1},b=document.location.hostname.split("."),c=j;2<=b.length&&(c=b.slice(-2).join("."),a[c]&&(c=b.slice(-3).join(".")));return c}
function t(a){var b=a+"=",c=document.cookie.split(";");for(a=0;a<c.length;a++){for(var d=c[a];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(b))return d.substring(b.length,d.length)}return j}function u(a,b,c,d){if(c){var e=new Date;e.setTime(e.getTime()+6E4*c);c="; expires="+e.toGMTString()}else c="";document.cookie=a+"="+b+c+"; path=/; domain=."+d}
function v(a,b){if(b){var c=document.getElementById(b);if(c){c.parentNode.removeChild(c);try{for(var d in c)delete c[d]}catch(e){}}}c=document.createElement("script");d=document.getElementsByTagName("script")[0];c.async=!0;c.src=a;c.id=b;d.parentNode.insertBefore(c,d)}function w(a){if(!a)return a;var b,c=[];for(b=0;b<a.length;b++)128>a.charCodeAt(b)?c.push(a.charAt(b)):c.push(encodeURIComponent(a.charAt(b)));return encodeURIComponent(c.join(""))}
function x(a){var b=a.l,b=b+("?idsite="+a.k),b=b+("&url="+a.url),b=b+("&seen_url="+a.d),b=b+("&refurl="+a.c),b=b+("&t="+a.title),b=b+("&c="+a.cookie),b=b+("&r="+a.timestamp),b=b+("&ypos="+a.n),b=b+(a.debug?"&debug="+a.debug:""),b=b+(a.a?"&cv_id="+a.a:""),b=b+(a.e?"&content_type="+a.e:"");a.f&&(b+="&mx="+a.f,b+="&my="+a.i,b+="&sw="+a.m);b+=a.j?"&no_cookies=true":"";b+=a.b?"&man=true":"";return b+"&v=04"}var y=m("id"),z=m("automate"),A=!m("no_cookies"),B;
if(!(B=t("__vrf"))){var C="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),D,E,H;D=(new Date).getTime().toString();for(H=0;32>H;H++)E=Math.floor(62*Math.random()),D+=C[E];B=D}var I=B,J=s(),K=j;
function L(a){a=a||{};y=a.p||y;"boolean"==typeof a.g&&(z=a.g);A&&u("__vrf",I,30,J);var b=a.q||r(),c=w(a.c);!c&&A&&(c=unescape(t("__vru")));var d=encodeURIComponent(document.title),e=a.a;if(!K){var g=p("meta","http-equiv","content-type");g?((K=g.content.split("charset=")[1])&&(K=K.split(";")[0]),K||(K=g.content.split(";")[1],K||(K=g.content))):(g=p("meta","charset",j))&&(K=g.getAttribute("charset"))}var g=t("__vrl")||w(a.d)||w(b),k=t("__vry");k||(k=-1);var f=t("__vrm"),h,F,G;f&&(f=f.split("_"),h=f[0],
F=f[1],G=f[2]);var f=(new Date).getTime(),M=new Date-l,T=x({l:"http://t.visualrevenue.com/",url:w(b),d:g,c:c,k:y,title:d,cookie:I,debug:"loadTime."+M,timestamp:f,n:k,a:e,e:K,f:h,i:F,m:G,j:!A,b:a.b});(new Image(1,1)).src=T;!0==z&&v(x({l:"http://p.visualrevenue.com/",url:w(b),d:g,c:c,k:y,title:d,cookie:I,debug:"loadTime."+M,timestamp:f,n:k,a:e,e:K,f:h,i:F,m:G,j:!A,b:a.b}),"vr-script-001");A&&u("__vru",escape(b),30,J)}
function N(a){a=a||{};L({c:a.refurl?a.refurl:document.location.href,a:a.conversion_id,q:a.track_url,p:a.track_id,g:!!a.automate,b:!0})}function O(a,b){function c(a){a=a||event;b.apply(document,[a,a.target||a.srcElement])}document.addEventListener?document.addEventListener(a,c,!1):document.attachEvent&&document.attachEvent("on"+a,c)}for(var P in _vrq)"track"==_vrq[P][0]&&(_vrq[P][1]=N);_vrtrack=N;n.h("body",function(){L({c:document.referrer,d:document.location.href})});
if(!m("no_cookies")){var Q=j,R=document.getElementsByTagName("a");O("mousedown",function(a,b){var c,d=b;c=4;for(var e=j;d&&c--;){if(d&&d.tagName&&"a"===d.tagName.toLowerCase()){e=d;break}d=d.parentNode}c=e;d=s();if(c){a:{if(c&&R!=j){var e=-1,g,k;g=0;for(k=R.length;g<k;g++)if(R[g].href===c.href&&(e+=1),R[g]===c)break a}e=-1}u("__vrl",w(c.href),0.4,d);u("__vry",e,0.4,d);Q=b}else u("__vrl",-1,0.001,d),u("__vry",-1,0.001,d);var f,h;if(a.pageX||a.pageY)f=a.pageX,h=a.pageY;else if(a.clientX||a.clientY)f=
a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,h=a.clientY+document.body.scrollTop+document.documentElement.scrollTop;f&&(c=document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth,u("__vrm",f+"_"+h+"_"+c,0.4,d))});O("mouseup",function(a,b){Q&&b!==Q&&(u("__vrl",-1,0.001,J),u("__vry",-1,0.001,J),u("__vrm",-1,0.001,J));Q=j})}
if(window.location&&window.location.hash&&20<window.location.hash.length){var S=window.location.href.split("#")[1]||"",S=S.split("/");1<S.length&&"vr-report-overlay"===S[0]&&v((S[4]?decodeURIComponent(S[4]):"https://platform.visualrevenue.com")+"/private/overlay.js",!1);1<S.length&&"vr-headline-preview"===S[0]&&v("https://platform.visualrevenue.com/private/headline_preview.js",!1)};
})();