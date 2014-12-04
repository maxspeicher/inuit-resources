/*
(c) Copyright Adrime BV - The Netherlands
All rights reserved

It is illegal to modify, disassemble, sell, copy or publish  this software 
or any part thereof. The use of this software is only permitted with the 
prior and express written permission of Adrime BV, the Netherlands.

for more information please contact: info@adrime.com
*/
/*jslint es5:true,unparam:true,stupid:true,eqeq:true,white:true,undef:true,browser:true,unparam:true,devel:true,windows:true,nomen:true,plusplus:true,bitwise:true,regexp:true,forin:true,newcap:true,evil:true,sloppy:true,sub:true,maxerr:500 */q1hr=true;screenad_version='9.4.0';q1eH=screenad.mediapath;q1f9='http://' +(q1kl()?'media':'scripts')+ '.adrcdn.com/scripts/';q1gm='http://evt.adrcntr.com/';q1ky='http://cntr.adrcntr.com/';q1hs=q1f9 + 'screenad_launch_' + screenad_version + '_scrambled.js';q1ht=q1f9 + 'screenad_core_' + screenad_version + '_scrambled.js';q1hu=q1eH+ 'screenad_setup_' + screenad_version + '_scrambled.js';q1hv=q1f9 + 'screenad_debug_' + screenad_version + '_scrambled.js';q1ly=q1f9 + 'screenad_adapter_' + screenad_version + '_scrambled.js';if(q1kl()){q1hs=q1kz(q1hs);q1ht=q1kz(q1ht);q1hu=q1kz(q1hu);q1hv=q1kz(q1hv);q1ly=q1kz(q1ly);q1eH=q1kz(q1eH);q1f9=q1kz(q1f9);q1gm=q1kz(q1gm);q1ky=q1kz(q1ky);}
function q1kl(){if(("javas").toString()+"cript:"==document.location.protocol){return "https:"==parent.document.location.protocol;}
return "https:"==document.location.protocol;}
function q1kz(q1bB){return q1bB.replace('http:','https:');}
function q1d(q11){if((typeof(q11)!=='undefined')&&(q11!=='')&&(q11!=='undefined')&&(q11!=='null')&&(q11!==null)&&(q11!==false)){return(true);}
return(false);}
function q1j4(el,prop){try{if(typeof(el[prop])!="undefined"){return true;}
}catch(e){}
return false;}
function q1hw(q1bu){var q1ev='',q11;switch(typeof q1bu){case 'string':q1ev='"'+q1bu+'"';break;case 'function':break;case 'object':if(typeof q1bu.length=='undefined'){q1ev='{';for(q11 in q1bu){if(q1ev!='{'){q1ev+=',';}
q1ev+='"'+q11+'"'+':'+q1hw(q1bu[q11]);}
q1ev+='}';
}else{
q1ev='[';for(q11 in q1bu){if(typeof q1bu[q11]!='function'){if(q1ev!='['){q1ev+=',';}
q1ev+=q1hw(q1bu[q11]);}
}
q1ev+=']';}
break;default:q1ev=q1bu.toString();}
return q1ev;}
function q16(){return Math.abs(Math.ceil(Math.random()*99999999999));}
function q1ep(){var q1hx=new Date();return(q1hx.getTime());}
if(!q1d(screenad.zindex)){screenad.zindex=((typeof screenad_zindex!='undefined')?screenad_zindex:214748360);}
if(!q1d(screenad.burst)){screenad.burst=((typeof screenad_burst!='undefined')?screenad_burst:'auto');}
if(!q1d(screenad.target)){screenad.target=((typeof screenad_target!='undefined')?screenad_target:'top');}
if(!q1d(screenad.bursttype)){screenad.bursttype=((typeof screenad_bursttype!='undefined')?screenad_bursttype:'none');}
if(!q1d(screenad.burstpath)){screenad.burstpath=((typeof screenad_burstpath!='undefined')?screenad_burstpath:'/adrime/adrime_burst_2.0.0.htm');}
if(!q1d(screenad.donottrack)){screenad.donottrack=false;}
if(!q1d(screenad.width)){screenad.width=1;}
if(!q1d(screenad.height)){screenad.height=1;}
if(!q1d(screenad.imptrackers)){screenad.imptrackers=[];}
if(!q1d(screenad.clicks)){screenad.clicks=[];}
if(!q1d(screenad.clicktrackers)){screenad.clicktrackers=[];}
if(!q1d(screenad.eventtrackers)){screenad.eventtrackers=[];}
if(!q1d(screenad.customid)){screenad.customid='';}
if(!q1d(screenad.vars)){screenad.vars='';}
if(!q1d(screenad.placement)){screenad.placement='default';}
if(!q1d(screenad.random)){screenad.random=q16();}
if(!q1d(screenad.stage)&&(typeof screenad_stage!='undefined')){screenad.stage=screenad_stage;}
if(!q1d(screenad.debug)&&screenad.debug!==false){screenad.debug=false;try{var q1cO=false;eval("try{q1cO=(document.domain==top.document.domain);}catch(e){q1cO=false;}");
if(q1cO&&top.location.href.indexOf('adrime_watcher')>=0){screenad.debug=true;}
}catch(q1bh){}
}
var q1lz={ "q1lA":false,"q1lB":"none","q1e":0};
try{q1lz.q1lA=(typeof(mraid)!=="undefined"||typeof(ormma)!=="undefined");}catch(q1bh){}
screenad.campaignfreq=screenad.flightfreq=0;var screenad_burst=screenad.burst;function q1hy(q1cj){var q1hz=document.domain,q1hA,q1hB,q1hC;while(q1hz.split(".").length>=2){try{q1hA=0;document.domain=q1hz;q1hB=q1cj+".document.domain";q1hC=eval("try{"+ q1hB + ";q1hA=1}catch(e){}");
if(q1hA){return true;}
}catch(q1bh){}
q1hz=q1hz.substr(q1hz.indexOf(".")+1,q1hz.length);}
return(false);}
function q1R(q1cj){var q1cO=false;eval("try{q1cO=(document.domain==" + q1cj + ".document.domain);}catch(e){q1cO=false;}");
if(!q1cO){eval("try{document.domain=" + q1cj + ".document.domain;q1cO=true;}catch(e){q1cO=q1hy(q1cj);}");
}
return q1cO;}
var q1hF;function q1hG(){var q1hH,q1hI,q1W=self.document.referrer,q1hJ;if(screenad.bursttype=='none'){return false;}
if(q1R('parent')){return false;}
q1W=self.document.referrer;if(q1W==''){try{q1W=self.parent.location.href;if(q1W==''){return false;}
}
catch(e){return false;}
}
if((q1W.length>=7)&&(q1W.substr(0,7)=="http://")){q1hH=q1W.substr(7);q1hI='http://';}else if((q1W.length>=8)&&(q1W.substr(0,8)=="https://")){
q1hH=q1W.substr(8);q1hI='https://';}
q1hJ=q1hH.indexOf("/");if(q1hJ>0){q1W=q1hI+q1hH.substr(0,q1hJ);}
switch(screenad.bursttype){case 'iframe':delete screenad.bursttype;q1hF=q1W+screenad.burstpath+'?screenad_obj='+escape(q1hw(screenad));break;default:return false;}
q19.write("<scr"+"ipt>var q1i3=false;function q1i4(){if(!q1i3){q1i3=true;location.replace(q1hF);}};setTimeout('q1i4()',"+750+");if(typeof(self.onload)=='function')q1hK=self.onload;self.onload=function(){if(typeof(q1hK)=='function')q1hK();q1i4();}</scr"+"ipt>");
return true;}
var q1hL=(typeof screenad_present=='undefined'||screenad_present.indexOf(screenad_version+':')<0)?true:false;if(q1hL){q18=self;q19=q18.document;q1hM=navigator.appVersion.toLowerCase();q1hN=navigator.userAgent.toLowerCase();q1G=(q1hM.indexOf('mac')>=0);q1C=(q1hN.indexOf('osx')>=0)||(q1hN.indexOf('os x')>=0);q1F=(q1hM.indexOf('win')>=0);q1jr=(q1hN.indexOf('linux')>=0&&q1hN.indexOf('android')==-1);q1E=(q1hN.indexOf('opera')>=0)? parseFloat(q1hN.slice(q1hN.indexOf('opera')+ 6)):0;q1D=((q1hN.indexOf('gecko')>=0)&&(!q1E))? parseFloat(q1hN.slice(q1hN.indexOf('rv:')+ 3)):0;q1H=(q1hN.indexOf('applewebkit')>=0)? parseFloat(q1hN.slice(q1hN.indexOf('applewebkit')+ 12)):0;q1I=((q1hN.indexOf('msie')>=0)&&(!q1E))?(q1hN.indexOf('trident/5.0')!==-1 ? 9:parseFloat(q1hN.slice(q1hN.indexOf('msie')+ 5))):0;q1ix=(q1H>0&&q1hN.indexOf('chrome')<0&&q1hN.indexOf('android')==-1);q1jw=(!q1ix&&(q1H>0&&q1hN.indexOf('chrome')!=-1));if(self.opera!==undefined&&self.opera!==false){q1E=self.opera.version();q1D=q1H=q1I=0;}
q1A=(q1F)? q1I:0;q1jq=(q1I>=7&&typeof(document.documentMode)!="undefined")? document.documentMode:false;q1ka=(typeof(window.ScriptEngineMajorVersion)=="function"&&window.ScriptEngineMajorVersion()==9);q1n0=(q1I&&(window.innerWidth==screen.width&&window.innerHeight==screen.height));q1js=(q1hN.indexOf('android')>=0 ? parseFloat(q1hN.slice(q1hN.indexOf('android')+ 8)):false);q1i5=(q1hN.indexOf('iphone')>=0);q1i6=(q1hN.indexOf('ipad')>=0);q1iN=(q1i5||q1i6);if(q1iN){try{q1iN=parseFloat(q1hN.match(/(ipad|iphone).*os\s([\d_]+)/)[2].replace(/_/g,'.'));}catch(q1bh){
q1iN=true;}
}
q1o5=!!((q1hN.indexOf('android')>=0&&q1hN.indexOf('mobile safari')==-1)||q1i6);q1B=!!((q1js&&q1hN.indexOf('mobile safari')!=-1)||(q1hN.indexOf('iphone')>=0)||(q1hN.indexOf('symbian')>=0)||(q1hN.indexOf('opera mini')>=0)||(q1hN.indexOf('windows ce')>=0)||(q1hN.indexOf('iemobile')>=0));if(q1H>=412){q1D=1.7;}else{
if(q1H>1){q1D=0.9;}
}
var q1z=0;var q1hO=0;var q1lr=false,q1z_tmp="";if(q1A){if(q1A>=6){try{q1hQ=new ActiveXObject('ShockwaveFlash.ShockwaveFlash');q1hQ.AllowScriptAccess='always';q1z_tmp=q1hQ.GetVariable("$version").replace(/[a-zA-Z]/g,"");q1z=parseInt(q1z_tmp,10);q1hO=parseInt(q1z_tmp.split(',')[2],10);}catch(q1bh){q1lr=true;}
}
if(q1A<6||q1lr===true){for(q11=4;q11<=13;q11++){eval('var q1hP' + q11 + '=false');}
var q1kA="on error resume next \n";for(q11=4;q11<=13;q11++){q1kA +='q1hP' + q11 + '=(IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.' + q11 + '")))\n';}
var q1kB=q19.createElement("script");q1kB.setAttribute("language","VBScript");q1kB.id="q1kC";q1kB.text=q1kA;try{q19.getElementsByTagName('html').item(0).appendChild(q1kB);}catch(q1bh){}
for(q11=4;q11<=13;q11++){if(eval('q1hP' + q11)==true){q1z=q11;}
}
q19.getElementsByTagName('html').item(0).removeChild(q1kB);}
}
else if(navigator.mimeTypes&&navigator.mimeTypes['application/x-shockwave-flash']){
if(navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin){q1hR=navigator.plugins['Shockwave Flash'].description;q1z=parseInt(q1hR.substring(q1hR.indexOf('.')- 2),10);q1hO=parseInt(q1hR.substring(q1hR.indexOf('r')+ 1),10);}
}
q1z=(q1I&&q1G)? 0:parseFloat(q1z + '.' + q1hO);q1z=(q1hN.toLowerCase().indexOf('firefox/3.0.')!=-1&&Math.floor(q1z)==8)? 0:q1z;q1z=(q1js)? 0:q1z;if(q1I>=7&&q1z==0){var q1j6;q19.write('<object id="ieflashdetect" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="1" height="1" style="position:absolute;left:0px;top:-100px;"><param allowScriptAccess="always" /></object>');try{for(q1j6 in q19.all.ieflashdetect){if(q1j6=='AllowFullScreen'){q1z=9;break;}else if(q1j4(q19.all.ieflashdetect,'Profile')){
q1z=8;break;}else if(q1j4(q19.all.ieflashdetect,'InlineData')){
q1z=7;break;}else if(q1j4(q19.all.ieflashdetect,'TotalFrames')){
q1z=6;break;}
}
}catch(e){}
try{q19.all.ieflashdetect.outerHTML='';}catch(e){}
}
var q1hS=[];}
function q1gO(q1dG){if(q1dG.indexOf('http')==0){var q11=q1hS.length;q1hS[q11]=new Image();q1hS[q11].src=q1dG;}
}
function q1lb(){var src_hostname=location.host;if(("javas").toString()+"cript:"==document.location.protocol&&!src_hostname){src_hostname=parent.location.host;}
return src_hostname;}
function q1o6(){var q1o7="unknown";if(q1F){q1o7="win";}else if(q1G||q1C){
q1o7="osx";}else if(q1js){
q1o7="android";}else if(q1iN){
q1o7="ios";}else if(q1jr){
q1o7="linux";}
return q1o7;}
function q1o8(){var q1o9="default";if(q1B){q1o9="mobile";}else if(q1o5){
q1o9="tablet";}
return q1o9;}
function q1o0(){return(q1jq!=false||q1D>=1.9||q1H>412||q1E>=9)?1:0;}
var q1gg={q1cw:screenad.id,q1eH:q1eH,q1f9:q1f9,q1gm:q1gm,q1gk:new Date(),q1f0:screenad.random,q1hT:q1d(screenad.debug),q1it:((screenad.vars=='')?screenad.vars:'&'+screenad.vars),q1gf:[ ['{scr:id}',screenad.id]
,['{scr:customid}',screenad.customid]
,['{scr:hostname}',escape(q1lb())]
,['{scr:random}',screenad.random]
,['{scr:flash}',q1z]
,['{scr:swidth}',screen.width]
,['{scr:sheight}',screen.height]
,['{scr:format}',screenad.width+'x'+screenad.height]
,['{scr:placement}',screenad.placement]
,['{scr:donottrack}',screenad.donottrack?1:0]
,['%%RANDOM%%',screenad.random] ,['%%SSRANDOM%%',screenad.random] ,['%%REALRAND%%',screenad.random] ,['\[timestamp\]',screenad.random] ,['\[TIMESTAMP\]',screenad.random] ,['\[RANDOM\]',screenad.random] ,['%n',screenad.random] ,['%RAND%',screenad.random] ,['_ADTIME_',screenad.random] ,['{random}',screenad.random] ],q1di:function(q1bB,q1hU){var q11;if(!q1d(q1hU)){q1hU=[];}
q1hU=q1hU.concat(this.q1gf,[ ['{scr:moment}',q1ep()-this.q1gk.getTime()]
,['{scr:cachebuster}',q16()]
,['\[CACHEBUSTER\]',q16()]]);if(q1d(q1bB)){for(q11=0;q11<q1hU.length;q11++){q1bd=q1bB.indexOf(q1hU[q11][0]);if(q1bd>=0){q1bB=q1bB.substr(0,q1bd)+escape(q1hU[q11][1])+q1bB.substr(q1bd+q1hU[q11][0].length);}
}
if(q1bB.indexOf('http://')!=0&&q1bB.indexOf('https://')!=0){q1bB=this.q1eH + q1bB;}
}
return(q1bB);},
q1iq:function(q1bB,q1hU){q1gO(this.q1di(q1bB,q1d(q1hU)?q1hU:[]));}
};
if(!q1hG()){var q11,q1hV=q1ky + '/i/?id={scr:id}&ci={scr:customid}&ho={scr:hostname}&pl={scr:placement}&fl={scr:flash}&sw={scr:swidth}&sh={scr:sheight}&rt={scr:returntype}&dnt={scr:donottrack}&rn={scr:random}&ca={scr:cachebuster}';
q1hV=q1gg.q1di(q1hV,[['{scr:returntype}',((q1hr)? 's':'p')]]);
if(q1hr){document.write('<scr' + 'ipt language="javascript" src="' + q1hV + '"></scr' + 'ipt>');}else{
q1gO(q1hV);}
for(q11=0;q11<screenad.imptrackers.length;q11++){q1gg.q1iq(screenad.imptrackers[q11]);}
if(q1hL){document.write('<scr' + 'ipt language="javascript" src="' + q1ht + '"></scr' + 'ipt>');if(q1lz.q1lA){document.write('<scr' + 'ipt language="javascript" src="' + q1ly + '"></scr' + 'ipt>');}
if(q1d(screenad.debug)){document.write('<scr' + 'ipt language="javascript" src="' + q1hv + '"></scr' + 'ipt>');}
}
if(typeof inDapMgrIf!='undefined'){q1hu+='?='+q16();}
document.write('<scr'+'ipt language="javascript" src="'+q1hu+'"></scr'+'ipt>');}
