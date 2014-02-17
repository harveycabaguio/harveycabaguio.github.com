/* Stranded site script
 * Created with ♥ by Cassidy James <c@ssidyjam.es> for Peter Moorhead.
 */

$(document).ready(function(){
	$("#slides").onepage_scroll({
		sectionContainer: "section",
		updateURL: false,
		loop: false,
		animationTime: 750,
		responsiveFallback: false
	});
	
	/* Scroll Links */
	$("a.scroll-link#prev").click(function(){
		$("#slides").moveTo(1);
	});

	$("a.scroll-link#next").click(function(){
		$("#slides").moveDown();
	});
});
