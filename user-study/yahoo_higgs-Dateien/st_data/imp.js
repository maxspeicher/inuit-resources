document.write('<!-- Copyright 2008 DoubleClick, a division of Google Inc. All rights reserved. -->\n<!-- Code auto-generated on Sun Feb 24 10:12:40 EST 2013 -->\n<script src=\"http://s0.2mdn.net/879366/flashwrite_1_2.js\"><\/script>');document.write('\n');

function DCFlash(id,pVM){
var swf = "http://s0.2mdn.net/4021545/de_yahoo300x250_food.swf";
var gif = "http://s0.2mdn.net/4021545/de_300.jpg";
var minV = 9;
var FWH = ' width="300" height="250" ';
var url = escape("http://ad.doubleclick.net/click%3Bh%3Dv8/3d9f/f/186/%2a/j%3B268976587%3B1-0%3B0%3B94677867%3B4307-300/250%3B53008905/52952195/2%3B%3B%7Esscs%3D%3fhttp://ads.bluelithium.com/clk?3,eJytkN1ugzAMhZ-GO0AhYQWEdhHE6NaVrl0zdeRmYoGGfzoIYvD0C1vVJ9gny7KPbB.JBnLZ2TEBg2fbRgwZn8A1UGI6tmWYKFGB68oe2CsLmBZUT.Gbj0NG9yMeUV56eGH36h.xFY4Zxk9.9d5e8trH7Sj1X55nmuL.YfV-uPosfvI-920svl8ejwR4tyl.V9MihJRsii3hiK4fREiCKsyNPDxFYEuCIpqDkhIMIrIp6eG2ea-qmRAXBWEFBjKadOz1Kc7aVmdtLYVLNvU5y3vRa1nOucxDI7Qmjbtq0ppWaIYlX2ZBeKdnoq4U5H1MlVCQH8OygEPhDHPVZZzHLeu-RFInP1r7dYc=,http%3a%2f%2fwww.athensattica.gr/");
var fscUrl = url;
var fscUrlClickTagFound = false;
var wmode = "opaque";
var bg = "";
var dcallowscriptaccess = "never";

var openWindow = "false";
var winW = 0;
var winH = 0;
var winL = 0;
var winT = 0;

var moviePath=swf.substring(0,swf.lastIndexOf("/"));
var sm=new Array();


var defaultCtVal = escape("http://ad.doubleclick.net/click%3Bh%3Dv8/3d9f/f/186/%2a/j%3B268976587%3B1-0%3B0%3B94677867%3B4307-300/250%3B53008905/52952195/2%3B%3B%7Esscs%3D%3fhttp://ads.bluelithium.com/clk?3,eJytkN1ugzAMhZ-GO0AhYQWEdhHE6NaVrl0zdeRmYoGGfzoIYvD0C1vVJ9gny7KPbB.JBnLZ2TEBg2fbRgwZn8A1UGI6tmWYKFGB68oe2CsLmBZUT.Gbj0NG9yMeUV56eGH36h.xFY4Zxk9.9d5e8trH7Sj1X55nmuL.YfV-uPosfvI-920svl8ejwR4tyl.V9MihJRsii3hiK4fREiCKsyNPDxFYEuCIpqDkhIMIrIp6eG2ea-qmRAXBWEFBjKadOz1Kc7aVmdtLYVLNvU5y3vRa1nOucxDI7Qmjbtq0ppWaIYlX2ZBeKdnoq4U5H1MlVCQH8OygEPhDHPVZZzHLeu-RFInP1r7dYc=,http%3a%2f%2fwww.athensattica.gr/");
var ctp=new Array();
var ctv=new Array();
ctp[0] = "clickTag";
ctv[0] = "";


var fv='"moviePath='+moviePath+'/'+'&moviepath='+moviePath+'/';
for(i=1;i<sm.length;i++){if(sm[i]!=""){fv+="&submovie"+i+"="+escape(sm[i]);}}
for(var ctIndex = 0; ctIndex < ctp.length; ctIndex++) {
  var ctParam = ctp[ctIndex];
  var ctVal = ctv[ctIndex];
  if(ctVal != null && typeof(ctVal) == 'string') {
    if(ctVal == "") {
      ctVal = defaultCtVal;
    }
    else {
      ctVal = escape("http://ad.doubleclick.net/click%3Bh%3Dv8/3d9f/f/186/%2a/j%3B268976587%3B1-0%3B0%3B94677867%3B4307-300/250%3B53008905/52952195/2%3B%3B%7Esscs%3D%3fhttp://ads.bluelithium.com/clk?3,eJytkN1ugzAMhZ-GO0AhYQWEdhHE6NaVrl0zdeRmYoGGfzoIYvD0C1vVJ9gny7KPbB.JBnLZ2TEBg2fbRgwZn8A1UGI6tmWYKFGB68oe2CsLmBZUT.Gbj0NG9yMeUV56eGH36h.xFY4Zxk9.9d5e8trH7Sj1X55nmuL.YfV-uPosfvI-920svl8ejwR4tyl.V9MihJRsii3hiK4fREiCKsyNPDxFYEuCIpqDkhIMIrIp6eG2ea-qmRAXBWEFBjKadOz1Kc7aVmdtLYVLNvU5y3vRa1nOucxDI7Qmjbtq0ppWaIYlX2ZBeKdnoq4U5H1MlVCQH8OygEPhDHPVZZzHLeu-RFInP1r7dYc=," + ctVal);
    }
    if(ctParam.toLowerCase() == "clicktag") {
      fscUrl = ctVal;
      fscUrlClickTagFound = true;
    }
    else if(!fscUrlClickTagFound) {
      fscUrl = ctVal;
    }
    fv += "&" + ctParam + "=" + ctVal;
  }
}
fv+='"';
var bgo=(bg=="")?"":'<param name="bgcolor" value="#'+bg+'">';
var bge=(bg=="")?"":' bgcolor="#'+bg+'"';
function FSWin(){if((openWindow=="false")&&(id=="DCF0"))alert('openWindow is wrong.');
var dcw = 800;
var dch = 600;
// IE
if(!window.innerWidth)
{
  // strict mode
  if(!(document.documentElement.clientWidth == 0))
  {
    dcw = document.documentElement.clientWidth;
    dch = document.documentElement.clientHeight;
  }
  // quirks mode
  else if(document.body)
  {
    dcw = document.body.clientWidth;
    dch = document.body.clientHeight;
  }
}
// w3c
else
{
  dcw = window.innerWidth;
  dch = window.innerHeight;
}
if(openWindow=="center"){winL=Math.floor((dcw-winW)/2);winT=Math.floor((dch-winH)/2);}window.open(unescape(fscUrl),id,"width="+winW+",height="+winH+",top="+winT+",left="+winL+",status=no,toolbar=no,menubar=no,location=no");}this.FSWin = FSWin;
ua=navigator.userAgent;
if(minV<=pVM&&(openWindow=="false"||(ua.indexOf("Mac")<0&&ua.indexOf("Opera")<0))){
	var adcode='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+id+'"'+FWH+'>'+
		'<param name="movie" value="'+swf+'"><param name="flashvars" value='+fv+'><param name="quality" value="high"><param name="wmode" value="'+wmode+'"><param name="base" value="'+swf.substring(0,swf.lastIndexOf("/"))+'"><PARAM NAME="AllowScriptAccess" VALUE="'+dcallowscriptaccess+'">'+bgo+
		'<embed src="'+swf+'" flashvars='+fv+bge+FWH+' type="application/x-shockwave-flash" quality="high" swliveconnect="true" wmode="'+wmode+'" name="'+id+'" base="'+swf.substring(0,swf.lastIndexOf("/"))+'" AllowScriptAccess="'+dcallowscriptaccess+'"></embed></object>';
  if(('j'!="j")&&(typeof dclkFlashWrite!="undefined")){dclkFlashWrite(adcode);}else{document.write(adcode);}
}else{
	document.write('<a target="_blank" href="'+unescape(url)+'"><img src="'+gif+'"'+FWH+'border="0" alt="Advertisement" galleryimg="no"></a>');
}}
function getFlashVersion(){
// code derived from SWFObject (http://code.google.com/p/swfobject/)
 var vfv = "0,0,0";
 try {
 try {
   var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
     try {axo.AllowScriptAccess = "always"; }catch(e) {return "6";}
 }catch(e) {}
 vfv = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");}
 catch(e) {
   try {if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){vfv= navigator.plugins["Shockwave Flash"].description;}}
   catch(e) {}
 }
 return vfv.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1].split(',').shift();
}
var DCid=(isNaN("268976587"))?"DCF2":"DCF268976587";
var pVM=getFlashVersion();
eval("function "+DCid+"_DoFSCommand(c,a){if(c=='openWindow')o"+DCid+".FSWin();}o"+DCid+"=new DCFlash('"+DCid+"',pVM);");
//-->

document.write('\n<noscript><a target=\"_blank\" href=\"http://ad.doubleclick.net/click%3Bh%3Dv8/3d9f/f/186/%2a/j%3B268976587%3B1-0%3B0%3B94677867%3B4307-300/250%3B53008905/52952195/2%3B%3B%7Esscs%3D%3fhttp://ads.bluelithium.com/clk?3,eJytkN1ugzAMhZ-GO0AhYQWEdhHE6NaVrl0zdeRmYoGGfzoIYvD0C1vVJ9gny7KPbB.JBnLZ2TEBg2fbRgwZn8A1UGI6tmWYKFGB68oe2CsLmBZUT.Gbj0NG9yMeUV56eGH36h.xFY4Zxk9.9d5e8trH7Sj1X55nmuL.YfV-uPosfvI-920svl8ejwR4tyl.V9MihJRsii3hiK4fREiCKsyNPDxFYEuCIpqDkhIMIrIp6eG2ea-qmRAXBWEFBjKadOz1Kc7aVmdtLYVLNvU5y3vRa1nOucxDI7Qmjbtq0ppWaIYlX2ZBeKdnoq4U5H1MlVCQH8OygEPhDHPVZZzHLeu-RFInP1r7dYc=,http%3a%2f%2fwww.athensattica.gr/\"><img src=\"http://s0.2mdn.net/4021545/de_300.jpg\" width=\"300\" height=\"250\" border=\"0\" alt=\"Advertisement\" galleryimg=\"no\"></a></noscript>');
