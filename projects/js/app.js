
(function($) {
	"use strict";

	// Vars
	var $body = $('body')


	function malat_navigation() {

		var class_open = 'site-header-open';

		$body.on( 'click', '#navigation-toggle', function(e) {
			e.preventDefault();
			if( !$(this).hasClass('open') ){
				$(this).addClass('open');
				$body.addClass(class_open);
			} else {
				$(this).removeClass('open');
				$body.removeClass(class_open);
			}
		});

	}



	function malat_slider() {
		var $slider = $('.slider');

		if($slider.length > 0){

			if( !$slider.hasClass('slick-initialized') ){
				$slider.slick({
					slidesToShow: 1,
					infinite: true,
					nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
					prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>'
				});
			}

			if( 1199 >= getWindowWidth() && $slider.hasClass('slick-initialized') && $slider.hasClass('slick-destroy-xl') ){
				$slider.slick('unslick');
			}

			if( 991 >= getWindowWidth() && $slider.hasClass('slick-initialized') && $slider.hasClass('slick-destroy-lg') ){
				$slider.slick('unslick');
			}

			if( 767 >= getWindowWidth() && $slider.hasClass('slick-initialized') && $slider.hasClass('slick-destroy-md') ){
				$slider.slick('unslick');
			}

			if( 575 >= getWindowWidth() && $slider.hasClass('slick-initialized') && $slider.hasClass('slick-destroy-sm') ){
				$slider.slick('unslick');
			}

		}
	}

	function malat_plugins() {

        $('[data-toggle="tooltip"]').tooltip();

        $('[data-toggle="popover"]').popover();

		if( $('#typed').length > 0 ){
			var typed = new Typed('#typed', {
				stringsElement: '#typed-strings',
				typeSpeed: 40,
				backDelay: 3000,
				loop: true,
			});
		}
	}

	$(document).ready(function() {
		malat_navigation();
		malat_slider();
		malat_plugins();
	});

	$(window).on('resize', function() {
		malat_slider();
	});

})(jQuery);