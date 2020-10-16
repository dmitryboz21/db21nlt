$(document).ready(function () {

	const myModal = new HystModal({
		linkAttributeName: 'data-hystmodal',
		catchFocus: false,
		waitTransitions: true,
		closeOnEsc: true

		/*,
		beforeOpen: function (modal) {
			console.log('Message before opening the modal');
			console.log(modal); //modal window object
		},
		afterClose: function (modal) {
			console.log('Message after modal has closed');
			console.log(modal); //modal window object
		},*/
	});

	$('.js-modal-send-btn').click(function () {
		$(this).closest('.modal-book').find('.modal-book-completed').addClass('modal-book-completed--show');
	});
	$('.js-menu-open-mob').click(function () {
		$('.sh-menu-wrap').addClass('sh-menu-wrap--mob-show');
		setTimeout(function () {
			$(window).scrollTop(0);

		}, 200);
	});
	$('.js-close-mob-menu').click(function () {
		$(window).scrollTop(0);
		$('.sh-menu-wrap').removeClass('sh-menu-wrap--mob-show');
	});



	$('.js-mslider-filter-mob-current').click(function () {
		var mobWrap = $(this).closest('.mslider-filters-mob-wrap');
		if (mobWrap.length > 0) {
			if (mobWrap.hasClass('mslider-filters-mob-wrap--open')) {
				mobWrap.removeClass('mslider-filters-mob-wrap--open');
			} else {
				mobWrap.addClass('mslider-filters-mob-wrap--open');
			}
		}
	});




	// функция проверки полной видимости элемента

	var aboutMeBgShow=false;
	var aboutMeBg;
	function checkPosition() {
		// координаты дива
		var div_position = aboutMeBg.offset();
		// отступ сверху
		var div_top = div_position.top;

		// высота
		var div_height = aboutMeBg.height();

		// проскроллено сверху
		var top_scroll = $(document).scrollTop();
		// высота видимой страницы
		var screen_height = $(window).height();

	// координата y нижней видимой точки страницы
		var bottomHorizont=top_scroll+screen_height;

		var visibleHeight=bottomHorizont-div_top;


		var blckpercent=visibleHeight/div_height*100;


		//console.log(blckpercent);
		if (blckpercent>50) {
			// если виден
			aboutMeBgShow=true;
			aboutMeBg.addClass('about-me-bg__2--show');
		}
	}


	jQuery(function () {
		aboutMeBg=$('.about-me-bg__2');

		if(aboutMeBg.length>0){

			$(document).scroll(function () {
				// при скролле страницы делаем проверку
				if(!aboutMeBgShow){
					checkPosition();
				}
			});

			// после загрузки страницы сразу проверяем
				if(!aboutMeBgShow){
					checkPosition();
				}

			// проверка при масштабировании и изменении размера страницы
			$(window).resize(function () {
				if(!aboutMeBgShow){
					checkPosition();
				}
			});
		}

	});

});