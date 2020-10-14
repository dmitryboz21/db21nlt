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
});