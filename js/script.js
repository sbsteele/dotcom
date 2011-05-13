/* Author: Owen Masback
*/

//highlights current page in side navigation,
$(function(){
	var path = location.pathname.substring(1);
	var filename = path.substring(path.search(/\w+\/\w+\./));
	if ( path && filename )
    	$('.rnav a[href$="' + filename + '"]').parent().attr('class', 'current');
});


$(document).ready(function() {
/*Tabs*/
	//When page loads...
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content

	//On Click Event
	$("ul.tabs li").click(function() {

		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});
/*Homepage Case Studies Scroll*/	
	$("#chained").scrollable({circular: true}).autoscroll({ autoplay: false, interval: 8000, autopause: true }).navigator({ navi:'div.navi' });
	
//Homepage Homeslide scroll (main content slider)
	$("#homeslide").scrollable({circular: true, speed: 500, easing: 'easeInOutExpo'}).autoscroll({ autoplay: false, interval: 4000, autopause: false }).navigator({ navi:'div.HSnavi' });

	var HSscrollapi = $("#homeslide").data("scrollable");
	$(".HSnavi").click(function() {
		HSscrollapi.stop();
	})
//	HSscrollapi.onBeforeSeek(function(){ $(".HSitem").fadeOut(300)}).onSeek(function(){ $(".HSitem").fadeIn(400); });
	
// Product scroll
	var scrollapi = $("#productscrollable").data("scrollable");
	var deeplink = window.location.search.substring(1)
	if (deeplink) {
		scrollapi.seekTo(deeplink);
	}

//Marketplace Form show/hide////

	$("#mpcontentbtn").click(function() {
//		$("#mpdistributionform").hide();
//		$("#mpcontentform").show();
		var mpcontentform = '<iframe height="1398" allowTransparency="true" frameborder="0" scrolling="no" style="width:100%;border:none"  src="https://rayvinc.wufoo.com/embed/r7p2s1/"><a href="https://rayvinc.wufoo.com/forms/r7p2s1/" title="Martketplace for Content Owners" rel="nofollow">Fill out my Wufoo form!</a></iframe>';
//		$("#homebottom").animate({
//		    height: ['1398px', 'swing'],
//		}, 400 );
		$("#homebottom").html(mpcontentform);
	})
	$("#mpdistributionbtn").click(function() {
//		$("#mpdistributionform").show();
//		$("#mpcontentform").hide();
/*		$("#homebottom").animate({
		    height: ['1389px', 'swing'],
		}, 400 );
  */  	var mpdistributionform = '<iframe height="1389" allowTransparency="true" frameborder="0" scrolling="no" style="width:100%;border:none"  src="https://rayvinc.wufoo.com/embed/s7p2m7/"><a href="https://rayvinc.wufoo.com/forms/s7p2m7/" title="Martketplace for Distributors" rel="nofollow">Fill out my Wufoo form!</a></iframe>';
		$("#homebottom").html(mpdistributionform);
	})

//Sidebar Scroll///////////

	
});

function scrollseek(index) {
	scrollapi.seekTo(index);
}


