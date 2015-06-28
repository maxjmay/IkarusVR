var imageWidth = parseInt($('.room').css('width'));
var imageHeight = parseInt($('.room').css('height'));

var screenWidth = parseInt($(window).width());
var screenHeight = parseInt($(window).height());

var maxWidth = imageWidth - screenWidth;
var maxHeight = imageHeight - screenHeight;

var currentAngle = 0;

if (window.DeviceOrientationEvent) {
	window.addEventListener('deviceorientation', function (eventData) {
		var angle, beta;
		if (event.webkitCompassHeading) {
			angle = eventData.webkitCompassHeading;
		} else {
			currentAngle = eventData.alpha;
			angle = eventData.alpha;
			beta = eventData.beta;
		}
		console.log(angle);
		if (angle < 70 && angle > 60) {
			setTimeout(function () {
				if (angle < 70 && angle > 60) {
					location.href = 'http://www.darrengilbert.rocks/ikaros/index.html';
				}
			}, 3000);
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
