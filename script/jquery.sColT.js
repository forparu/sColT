/*
基于jQuery的导航停留插件
*/


(function(){


	$.fn.sColT = function( elm ){

		$(this).addClass('sColT');

		var sColT = $('.sColT');
		var menuHeight = sColT.outerHeight();
		var offHeight = sColT.offset().top;
		var fixedflag = false;

		//menu固定方法
		var fixedMenu = function(flag){

			var scolTop = $(window).scrollTop();
			if (scolTop >= offHeight) {
				if (fixedflag) {
					return;
				} else{
					sColT.css({ 'position': 'fixed', 'top':0,'left':0 }).addClass('fixed');
					$('body').css('padding-top', menuHeight );
					fixedflag = true;
				};
			};
			if (scolTop < offHeight) {
				if (fixedflag) {
					sColT.css( 'position', 'relative').removeClass('fixed');
					$('body').css('padding-top', '0' );
					fixedflag = false;
				} else{
					return;
				};
			};
		};

		$(window).scroll(function(){
			fixedMenu();
		})
	}
})(jQuery);
