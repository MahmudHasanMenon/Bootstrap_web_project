function check(dt) {
	if(dt.id == "date" && dt.value)
		dt.type = "date";
	else if(dt.id == "time" && dt.value)
		dt.type = "time";
	else
		dt.type = "text";
}

$(document).ready(function() {
	//$('[data-toggle="tooltip"]').tooltip();

	// Carousel.
	$("#mycarousel").carousel( { interval: 500 } );
	//$("#carousel-play").click(function() { $("#mycarousel").carousel('cycle'); });
	//$("#carousel-pause").click(function() { $("#mycarousel").carousel('pause'); });
	$("#carousel-button").click(function() {
		if($("#carousel-button").children("span").hasClass('fa-pause')) {
			$("#mycarousel").carousel('pause');
			$("#carousel-button").children("span").removeClass('fa-pause');
			$("#carousel-button").children("span").addClass('fa-play');
		}
		else if($("#carousel-button").children("span").hasClass('fa-play')) {
			$("#mycarousel").carousel('cycle');
			$("#carousel-button").children("span").removeClass('fa-play');
			$("#carousel-button").children("span").addClass('fa-pause');
		}
	});

	// Modal.
	$("#login-button").click(function() 	{ $("#login-modal").modal('toggle'); });
	$("#reserve-button").click(function() 	{ $("#reserve-modal").modal('toggle'); });

});

