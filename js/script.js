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
	$("#chained").scrollable({circular: true}).autoscroll({ autoplay: true, interval: 8000 }).navigator()
	$("#productscrollable").scrollable({circular: true, speed: 200}).navigator()
	scrollapi = $("#productscrollable").data("scrollable");
	deeplink = window.location.search.substring(1)
	if (deeplink) {
		scrollapi.seekTo(deeplink);
	}
	
//Sidebar Scroll///////////

	
});

function scrollseek(index) {
	scrollapi.seekTo(index);
}


