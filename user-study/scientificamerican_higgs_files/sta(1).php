var DL = DL || {};
DL.placement_site = '803434';
DL.placement_code = '482806';
(function(){
if(1!=4){
	(new Image).src="http://amch.questionmarket.com/adsc/d1007405/19/840000482806/decide.php?ord="+Math.floor((new Date()).getTime()/1000);
}
})();

//KTAG
var DL_ktagParm = new Array();
DL_ktagParm['DL_survey_num'] = 1007405;
DL_ktagParm['DL_site_id'] = 19;
DL_ktagParm['DL_site_num'] = 19;
DL_ktagParm['DL_creative_id'] = 840000482806;
if (typeof DL_UID_PARM != 'undefined' ) {
	DL_ktagParm["DL_uid"] = DL_UID_PARM;
}
DL_ktagParm['AD_placement_id'] = 803434;
DL_ktagParm['AD_creative_id'] = 482806; 
DL_ktagParm['DL_campaign_id'] = 1007405;
DL_ktagParm['DL_site_id'] = 19;
DL_ktagParm['DL_creative_id'] = 840000482806; 
DL_ktagParm['survey_num'] = 1007405;
DL_ktagParm['site_num'] = 19;
DL_ktagParm['aicode'] = 840000482806; 
DL_ktagParm['DL_uid'] = '';


var DL_imageUrls = new Array();
var DL_scriptUrls = new Array();
var DL_cbuster = Math.floor((new Date()).getTime());
DL_imageUrls[0]='http://www2.sesamestats.com/paneltracking.aspx?bannerid=KtagGeneric_Ktag_**DL_survey_num**_**DL_creative_id**_**DL_site_num**&CampaignId=KTagGeneric&cb=';
function DL_parmsToUrl() {
	var i, x, rplc;
	try {
		for (i=0; i<DL_imageUrls.length; i++) {
			for (x in DL_ktagParm) {
				rplc = "**"+x+"**";
				DL_imageUrls[i] = DL_imageUrls[i].replace(rplc, DL_ktagParm[x]);
			}
		}
	} catch(e) {}
	try {
		for (i=0; i<DL_scriptUrls.length; i++) {
			for (x in DL_ktagParm) {
				rplc = "**"+x+"**";
				DL_scriptUrls[i] = DL_scriptUrls[i].replace(rplc, DL_ktagParm[x]);
			}
		}
	} catch(e) {}
}
function DL_imagesScripts() {
	var i, DL_imgTag, DL_scriptTag, DL_nodeElem, DL_stag;
	try {
		for (i=0; i<DL_imageUrls.length; i++) {
			DL_imgTag=new Image(1,1);
			DL_imgTag.src=(DL_imageUrls[i].indexOf('alenty.com')==-1) ? DL_imageUrls[i]+DL_cbuster : DL_imageUrls[i];
		}
	} catch(e) {}
	try {
		for (i=0; i<DL_scriptUrls.length; i++) {
			DL_scriptTag = document.createElement('script');
			DL_scriptTag.async=true;
			DL_scriptTag.src=(DL_scriptUrls[i].indexOf('alenty.com')==-1) ? DL_scriptUrls[i]+DL_cbuster : DL_scriptUrls[i];
			DL_stag = document.getElementsByTagName('script');
			DL_nodeElem = DL_stag[DL_stag.length-1];
			DL_nodeElem.parentNode.insertBefore(DL_scriptTag, DL_nodeElem);
		}
	} catch(e) {}
}
DL_parmsToUrl();
DL_imagesScripts();

