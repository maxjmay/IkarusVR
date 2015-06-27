var currentLeft = -702.5;
var currentTop = -225;

//$("#mapView").mousemove(function (event) {
//	var newX = event.pageX;
//	var newY = event.pageY;
//	
//	$("#leftImg").css('left', '-' + (newX / 2) + 'px');
//	$("#leftImg").css('top', '-' + (newY / 2) + 'px');
//	
//	$("#rightImg").css('left', '-' + (newX / 2) + 'px');
//	$("#rightImg").css('top', '-' + (newY / 2) + 'px');
//});

window.ondevicemotion = function (event) {

	//	if (event.accelerationIncludingGravity.x > 0) {
	//		if (currentLeft - 1 < -1405) {
	//			currentLeft = -1405;
	//		} else {
	//			currentLeft--;
	//		}
	//	}
	//
	//	if (event.accelerationIncludingGravity.x < 0) {
	//		if (currentLeft + 1 > 0) {
	//			currentLeft = 0;
	//		} else {
	//			currentLeft++;
	//		}
	//	}

	if (event.accelerationIncludingGravity.y > 0) {
		if (currentTop - 1 < -440) {
			currentTop = -440;
		} else {
			currentTop--;
		}
	}

	if (event.accelerationIncludingGravity.y < 0) {
		if (currentTop + 1 > 0) {
			currentTop = 0;
		} else {
			currentTop++;
		}
	}

	$("#leftImg").css('left', currentLeft + 'px');
	$("#leftImg").css('top', currentTop + 'px');

	$("#rightImg").css('left', currentLeft + 'px');
	$("#rightImg").css('top', currentTop + 'px');
}