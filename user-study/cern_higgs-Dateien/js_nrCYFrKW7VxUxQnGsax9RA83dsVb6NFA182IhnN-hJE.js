/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){
	
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){
		return;
	}
	
    var doc = w.document;

    if( !doc.querySelector ){ return; }

    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
		x, y, z, aig;

    if( !meta ){ return; }

    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true;
    }

    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false;
    }
	
    function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
				
		// If portrait orientation and in one of the danger zones
        if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){
				disableZoom();
			}        	
        }
		else if( !enabled ){
			restoreZoom();
        }
    }
	
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );

})( this );;
/*
 * jQuery WidowFix Plugin
 * http://matthewlein.com/widowfix/
 * Copyright (c) 2010 Matthew Lein
 * Version: 1.3.2 (7/23/2011)
 * Dual licensed under the MIT and GPL licenses
 * Requires: jQuery v1.4 or later
 */

(function(a){jQuery.fn.widowFix=function(d){var c={letterLimit:null,prevLimit:null,linkFix:false,dashes:false};var b=a.extend(c,d);if(this.length){return this.each(function(){var i=a(this);var n;if(b.linkFix){var h=i.find("a:last");h.wrap("<var>");var e=a("var").html();n=h.contents()[0];h.contents().unwrap()}var f=a(this).html().split(" "),m=f.pop();if(f.length<=1){return}function k(){if(m===""){m=f.pop();k()}}k();if(b.dashes){var j=["-","–","—"];a.each(j,function(o,p){if(m.indexOf(p)>0){m='<span style="white-space:nowrap;">'+m+"</span>";return false}})}var l=f[f.length-1];if(b.linkFix){if(b.letterLimit!==null&&n.length>=b.letterLimit){i.find("var").each(function(){a(this).contents().replaceWith(e);a(this).contents().unwrap()});return}else{if(b.prevLimit!==null&&l.length>=b.prevLimit){i.find("var").each(function(){a(this).contents().replaceWith(e);a(this).contents().unwrap()});return}}}else{if(b.letterLimit!==null&&m.length>=b.letterLimit){return}else{if(b.prevLimit!==null&&l.length>=b.prevLimit){return}}}var g=f.join(" ")+"&nbsp;"+m;i.html(g);if(b.linkFix){i.find("var").each(function(){a(this).contents().replaceWith(e);a(this).contents().unwrap()})}})}}})(jQuery);;
// CERN Global Javascript

var cern = { // CERN namespace

	lang : (window.location.href.match('cern.ch/fr')) ? 'fr' : 'en',
	
	init : function () { $(function () {
		
		cern.proto = window.location.href.split('://')[0];
		
		// global initial functions
//		cern.fontload();
		
		// responsive images
		cern.respimgs();
		
		// public theme subnav toggle
		$('#header .region .block-menu-block h2').click(function (e) {
			
			cern.togglesubnav(this);			
			cern.prevent(e);
		
		});
		
	}); }, // end cern.init() 
	
	togglesubnav : function(t) {
	
		$(t).closest('.block-menu-block').addClass('open-subnav');
		
		$(t).unbind('click').click(function (e) {
		
			$(this).click(function (e) {
				
				cern.togglesubnav(this);			
				cern.prevent(e);
			
			}).closest('.block-menu-block').removeClass('open-subnav');
			
			cern.prevent(e);
			
		});
	
	},
	
	tips : function () {
	
	},
	
	fontload : function () {
		
		var fonts;
		
		switch (cern.proto) {
		
			case 'https' :
//				fonts = "<link href='https://framework.web.cern.ch/framework/2.0/fonts/PTSansWeb/PTSansWeb.css' rel='stylesheet' type='text/css'>";
				fonts = "<link href='https://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700' rel='stylesheet' type='text/css' />";
				break;
			
			default:
//				fonts = "<link href='http://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700' rel='stylesheet' type='text/css' />";
				break;
		
		}
		
		$('head style, head link').first().before(fonts);
	
	},
	
	respimgs : function () {
		
		var width = window.innerWidth,
		sizes = [320, 640, 1024, 1440]; // list of possible sizes from cds
		
		$('[src$=-320.gif]').each(function () {
		
			var i = 0,
				clone = $(this).clone(),
				src = $(this).attr('src'),
				newsrc,
				link = src.replace('/files/', '/id/');
				
				link = link.replace(/\-320\.[a-zA-Z]+$/, '');
			
			while ( width > sizes[i] ) {
				
				newsrc = src.replace('-320', '-' + sizes[i]);				
				i++;
				
			}
			
			$(this).replaceWith(
				
				$('<div/>').addClass('img-wrap').append(
				
					$(clone).attr({ src: newsrc })
				
				).append(
				
					$('<a/>').addClass('img-link').attr({ href: link, title: 'View this image on CDS' }).html('Image info')
				
				)
			);
		
		});
	
	},
	
	prevent : function (e) {
	
		if (e.preventDefault) e.preventDefault();
		else event.returnValue = false;
	
	},
	
	close : function (t) {
		
		$(t).remove();
		
		/*$(t).animate({ opacity: 0 }, 300, function () {
		
			$(this).remove();
			
		});*/
	
	}

},

// gotta fix these variables... no globals
$ = jQuery;

cern.init();;
// Put additional custom Javascript for this theme here


;
