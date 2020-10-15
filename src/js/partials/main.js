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
	$('.js-menu-open-mob').click(function(){
		$('.sh-menu-wrap').addClass('sh-menu-wrap--mob-show');
		setTimeout(function(){
			$(window).scrollTop(0);

		}, 200);
	});
	$('.js-close-mob-menu').click(function(){
		$(window).scrollTop(0);
		$('.sh-menu-wrap').removeClass('sh-menu-wrap--mob-show');
	});



	$('.js-mslider-filter-mob-current').click(function(){
		var mobWrap=$(this).closest('.mslider-filters-mob-wrap');
		if(mobWrap.length>0){
			mobWrap.addClass('mslider-filters-mob-wrap--open');
		}
	});

});