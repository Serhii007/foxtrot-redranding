$(document).ready(function() {
	$(".has-anchor").click(function(e) {

		e.preventDefault();
		var dest = $(this).attr('href');
		var headerHeight = $(".header").outerHeight(true);
		var buffer = $(".header-buffer").outerHeight(true);

		if (window.innerWidth > 768) {
			var distance = $(dest).offset().top;

			$('html,body').animate({
				scrollTop: distance - headerHeight
			}, 'slow');
		}
		 else {
			var distance = $(dest).offset().top;

			$('html,body').animate({
				scrollTop: distance - buffer
			}, 300);
		}
	});
});