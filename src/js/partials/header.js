
$(document).ready(function () {
/*	$('.sh-burger').click(function () {
		$(this).toggleClass('sh-burger--active');
		$('.sh-menu-wrap').toggleClass('sh-menu-wrap--open');
	});
*/


	$('.lang-switcher__current').click(function(){
		$(this).parent().toggleClass('lang-switcher--opened');
	});
});