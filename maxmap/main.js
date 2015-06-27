var imageWidth = parseInt($('#leftImg').css('width'));
var imageHeight = parseInt($('#leftImg').css('height'));

var screenWidth = parseInt($(window).width());
var screenHeight = parseInt($(window).height());

var maxWidth = imageWidth - screenWidth;
var maxHeight = imageHeight - screenHeight;

if (window.DeviceOrientationEvent) {
	window.addEventListener('deviceorientation', function (eventData) {
		var angle, beta;
		if (event.webkitCompassHeading) {
			angle = eventData.webkitCompassHeading;
		} else {
			angle = eventData.alpha;
			beta = eventData.beta;

		}
		if (angle) {
			var percent = angle / 360;
			var position = imageWidth * percent;
			$('#leftImg').css('left', '-' + position + 'px');
			$('#rightImg').css('left', '-' + position + 'px');
		}
		if (beta) {
			var percent = beta / 360;
			var position = imageHeight * percent;
			$('#leftImg').css('top', '-' + position + 'px');
			$('#rightImg').css('top', '-' + position + 'px');
		}
	});
}
