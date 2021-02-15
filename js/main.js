
// jQuery script
(function($) {
	// Navigation script
	$(window).scroll(function() {
		let scroll = $(window).scrollTop();
		let box = $(".header-text").height();
		let header = $("header").height();

		if(scroll >= box - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
		}
	});

	// Menu dropdown toggle
	if ($(".menu-trigger").length) {
		$(".menu-trigger").on("click", function() {
			$(this).toggleClass("active");
			$(".header-area .nav").slideToggle(200);
		});
	}
})(window.jQuery);