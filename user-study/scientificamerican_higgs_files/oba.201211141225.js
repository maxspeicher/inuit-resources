var wbo_userLang=(navigator.language)?navigator.language:navigator.userLanguage;function wbo_getObaLogoFile(c){var b={"de-at":"AUSTRIA","fr-be":"BELGIUM_FR","nl-be":"BELGIUM_NL",bg:"BULGARIA",cs:"CZECH",da:"DENMARK",fi:"FINLAND",fr:"FRANCE",de:"GERMANY",el:"GREEK",hu:"HUNGARY",ga:"IRELAND",it:"ITALY",nl:"NETHERLANDS",no:"NORWAY",pl:"POLAND",ro:"ROMANIA",sk:"SLOVAKIA",es:"SPAIN",sv:"SWEDEN","de-ch":"SWITZERLAND_DE","fr-ch":"SWITZERLAND_FR","it-ch":"SWITZERLAND_IT",en:"UK","default":"DEFAULT"},a;if(b.hasOwnProperty(wbo_userLang)){a="OBA_"+b[wbo_userLang]+".png"}else{a="OBA_"+b["default"]+".png"}return c+a}function wbo_getObaLandingLanguage(a){var c={"de-at":"at","fr-be":"be-fr","nl-be":"be-nl",bg:"bg",cs:"cs",da:"da",fi:"fi",fr:"fr",de:"de",el:"gr",hu:"hu",ga:"ie",it:"it",nl:"nl",no:"nor",pl:"pl",ro:"ro",sk:"sk",es:"es",sv:"se","de-ch":"ch-de","fr-ch":"ch-fr","it-ch":"ch-it",en:"uk",hr:"hr",is:"is",lt:"lt",lv:"lv",pt:"pt",sl:"sl","default":"uk"},b;if(c.hasOwnProperty(wbo_userLang)){b="/"+c[wbo_userLang]+"/"}else{b="/"+c["default"]+"/"}return a+b}function wbo_obaShowLogo(a){document.getElementById("wbo_obaLogoSmall_"+a).style.visibility="hidden";document.getElementById("wbo_obaLogoLarge_"+a).style.visibility="visible"}function wbo_obaHideLogo(a){document.getElementById("wbo_obaLogoLarge_"+a).style.visibility="hidden";document.getElementById("wbo_obaLogoSmall_"+a).style.visibility="visible"}function wboSetDivLogoLarge(a,c,b){c.style.width=a.width;c.style.top=-(b+15)+"px"}function wboSetDivLogoSmall(a,c,b){c.style.top=-(b)+"px"}function wbo_writeObaLogo(h,g,j){var b=document.getElementById("wbo_root_"+g),m=document.getElementById("wbo_banner_"+g),d=document.getElementById("wbo_root_"+g+"_inner"),e=document.createElement("div"),i=new Image(),l=document.createElement("div"),n=new Image(),f=wbo_getObaLandingLanguage(h),a="http://cstatic.weborama.fr/adperf/adserver/iab/",c,k;if(!m){m=b}k=parseInt(m.style.zIndex,10);c=isNaN(k)?2147483642:k+1;e.id="wbo_obaLogoSmall_"+g;e.onmouseover=function(){wbo_obaShowLogo(g)};e.onclick=function(){window.open(f)};e.style.position="relative";e.style.width="19px";e.style.height="15px";e.style.visibility="visible";e.style.zIndex=c;i.border="0";i.alt="AdChoices";i.onload=function(){wboSetDivLogoSmall(this,e,j)};i.src=a+"OBA_TRANS.png";d.appendChild(e);e.appendChild(i);l.id="wbo_obaLogoLarge_"+g;l.onmouseout=function(){wbo_obaHideLogo(g)};l.onclick=function(){window.open(f)};l.style.position="relative";l.style.height="15px";l.style.visibility="hidden";l.style.zIndex=c;n.border="0";n.alt="AdChoices";n.onload=function(){wboSetDivLogoLarge(this,l,j)};n.src=wbo_getObaLogoFile(a);d.appendChild(l);l.appendChild(n)}if(window.wbo_params&&window.wbo_params.oba_setting==="1"&&window.wbo_params.format!=="Video"){wbo_writeObaLogo(window.wbo_params.oba_url,window.wbo_params.id,window.wbo_params.h)};