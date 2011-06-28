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
	$("#homeslide").scrollable({circular: true, speed: 1000, easing: 'easeInOutExpo'}).autoscroll({ autoplay: true, interval: 8000, autopause: false }).navigator({ navi:'div.HSnavi' });

	var HSscrollapi = $("#homeslide").data("scrollable");
	$(".HSnavi").click(function() {
		HSscrollapi.stop();
	})
//	HSscrollapi.onBeforeSeek(function(){ $(".HSitem").fadeOut(300)}).onSeek(function(){ $(".HSitem").fadeIn(400); });
	
// Product scroll
	$("#productscrollable").scrollable({circular: true, speed: 200}).navigator() 
	scrollapi = $("#productscrollable").data("scrollable");
	deeplink = window.location.search.substring(1)
	if (deeplink) {
		scrollapi.seekTo(deeplink);
	}

//Marketplace Form show/hide////

	$("#mpcontentbtn").click(function() {
		var mpcontentform = '<iframe height="1398" allowTransparency="true" frameborder="0" scrolling="no" style="width:100%;border:none"  src="https://rayvinc.wufoo.com/embed/r7p2s1/"><a href="https://rayvinc.wufoo.com/forms/r7p2s1/" title="Martketplace for Content Owners" rel="nofollow">Fill out my Wufoo form!</a></iframe>';
		$("#homebottom").animate({ height: ['1398px', 'easeInOutExpo'] }, 600 );
		$("#homebottom").html(mpcontentform);
	})
	$("#mpdistributionbtn").click(function() {
    	var mpdistributionform = '<iframe height="1389" allowTransparency="true" frameborder="0" scrolling="no" style="width:100%;border:none"  src="https://rayvinc.wufoo.com/embed/s7p2m7/"><a href="https://rayvinc.wufoo.com/forms/s7p2m7/" title="Martketplace for Distributors" rel="nofollow">Fill out my Wufoo form!</a></iframe>';
		$("#homebottom").animate({ height: ['1389px', 'easeInOutExpo'] }, 600 );
		$("#homebottom").html(mpdistributionform);
	})

//Channel Scrollable 

//$(".channelscrollable").scrollable({circular: true, speed: 4000, easing: 'linear'}).autoscroll({ autoplay: true, interval: 4100, autopause: false });
$("#makeMeScrollable").smoothDivScroll({
	autoScroll: "onstart",
	autoScrollDirection: "endlessloopright",
	autoScrollStep: 1,
	autoScrollInterval: 10
}); 
$("#makeMeScrollable").smoothDivScroll("recalculateScrollableArea");
//Nav Dropdowns////////////
$('ul.sf-menu').superfish({ 
            delay:       0,                            // one second delay on mouseout 
           // animation:   {height:'show'},  // fade-in and slide-down animation 
            speed:       'fast',                          // faster animation speed 
            autoArrows:  true,                           // disable generation of arrow mark-up 
            dropShadows: false                            // disable drop shadows 
        });
//Sidebar Scroll///////////

//end documentready function	
});

function scrollseek(index) {
	scrollapi.seekTo(index);
}

/*$(function() {
 
	// if the function argument is given to overlay,
	// it is assumed to be the onBeforeLoad event listener
	$(".wufoopop[rel]").overlay({


		onBeforeLoad: function() {

			// grab wrapper element inside content
			var wrap = this.getOverlay().find(".contentWrap");

			// load the page specified in the trigger
			wrap.load(this.getTrigger().attr("href"));
		}

	});
});
*/
