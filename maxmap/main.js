var imageWidth = $('#leftImg').css('width');
var imageHeight = $('#leftImg').css('height');

var screenWidth = $(window).width();
var screenHeight = $(window).height();

var maxWidth = imageWidth - screenWidth;
var maxHeight = imageHeight - screenHeight;

if (window.DeviceOrientationEvent) {
	window.addEventListener('deviceorientation', function (eventData) {
		var angle;
		if (event.webkitCompassHeading) {
			alpha = eventData.alpha;
			gamma = eventData.gamma;
		}
		if (angle) {		
			$('#leftImg').css('left', '-' + ((alpha / 360) * maxWidth) + 'px');
		}
		if (gamma) {
			$('#leftImg').css('bottom', '-' + (((gamma + 90) / 180) * maxHeight) + 'px');
		}
	});
}