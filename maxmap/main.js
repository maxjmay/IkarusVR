var imageWidth = parseInt($('.room').css('width'));
var imageHeight = parseInt($('.room').css('height'));

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
			$('.room').css('left', '-' + position + 'px');
			$('.room').css('left', '-' + position + 'px');
		}
		if (beta) {
			var percent = beta / 360;
			var position = imageHeight * percent;
			$('.room').css('top', '-' + position + 'px');
			$('.room').css('top', '-' + position + 'px');
		}
	});
}
