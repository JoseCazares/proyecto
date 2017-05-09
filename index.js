$(document).ready(function () {

	var height = $(window).height();
	resize();

	function resize() {
		$(".body").css({"margin-top": height - 80 + "px"});
	}

	$(document).scroll(function(){
		var scrollTop = $(this).scrollTop();
		var pixels = scrollTop / 70;

		if (scrollTop < height) {
			$(".main-container").css({
				"-webkit-filter": "blur(" + pixels + "px)",
				"-moz-filter": "blur(" + pixels + "px)",
				"-o-filter": "blur(" + pixels + "px)",
				"-ms-filter": "blur(" + pixels + "px)",
			});
		}
	});
});