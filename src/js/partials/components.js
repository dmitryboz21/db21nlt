jQuery(function ($) {


	$('.js-mslider-projects').slickFilterable({
		filterName: 'mslider-projects-filter',
		filter: function (category, slider, settings) {
			return $(this).hasClass(category);
		},
		slick: {
			rows: 1,
			dots: true,
			arrows: false,
			slidesToShow: 3,
			// slidesPerRow: 3,
			slidesToScroll: 3,
			responsive: [
				{
				  breakpoint: 1000,
				  settings: {
					rows: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth:true
				  }
				}/*,
				{
				  breakpoint: 480,
				  settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				  }
				}*/
			  ]
		}
	});

	$('.js-mslider-blog').slickFilterable({
		filterName: 'mslider-blog-filter',
		filter: function (category, slider, settings) {
			return $(this).hasClass(category);
		},
		slick: {
			rows: 2,
			dots: true,
			arrows: false,
			slidesPerRow: 2,
			slidesToScroll: 1,
			responsive: [
				{
				  breakpoint: 1000,
				  settings: {
					rows: 2,
					slidesPerRow: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth:true
				  }
				}/*,
				{
				  breakpoint: 480,
				  settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				  }
				}*/
			  ]
		}
	});



	$('.js-about-me-slider').slick({
			rows: 0,
			dots: true,
			arrows: true,
			slidesToScroll: 1,
			slidesToShow: 1,
			prevArrow: '<div class="about-me-arrow about-me-arrow__prev"><svg width="47" height="30" viewBox="0 0 47 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47 15H3M3 15L16.2 2M3 15L16.2 28" stroke="#F6A30B" stroke-width="3"/></svg></div>',
			nextArrow: '<div class="about-me-arrow about-me-arrow__next"><svg width="47" height="30" viewBox="0 0 47 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 15H44M44 15L30.8 2M44 15L30.8 28" stroke="#F6A30B" stroke-width="3"/></svg></div>'

		}
	);



});

(function ($) {
	$.fn.slickFilterable = function (options) {

		/**
		 * A plugin to create a slick we can filter.
		 *
		 * If you are not using Rows you can use slickFilter
		 * (check documentation) otherwise we can provide a valid filter.
		 *
		 * options {
		 *      slideSelector    string     jQuery selector to get slides. Imetiate children by default.
		 *      filterName       string     We will search for data-{filterName} clickable elements.
		 *      slick            object     The slick settings. Check Slick doc.
		 *      beforeFilter     function   A fuction called before filter slider. Receives the trigger element
		 *                                  as this and 3 params: category (string), slider and slides (jQuery objects).
		 *      filter           mix        A valid parameter to jQuery filter() function. If it's a functio we will wrap
		 *                                  it and it receives the trigger element as this and 3 params: category (string),
		 *                                  slider (jQuery object) and a copy of settings (extended).
		 * }
		 */
		var settings = $.extend({
			slideSelector: '> *',
			filterName: 'filter-slick',
			slick: {},
			beforeFilter: function () {},
			filter: function (element, category, slider, settings) {
				return true;
			},
		}, options);

		return this.each(function () {
			var slider = $(this),
				slides = slider.find(settings.slideSelector),
				slickObj;

			/**
			 * Create Slick
			 *
			 * TIP: you should you 'slidesPerRow' instead 'slidesToShow' in grid mode (with rows)
			 * to avoid slick break layout when there are less slides than on "page".
			 */
			slickObj = slider.slick(settings.slick);

			// Handle Filter Click
			$('[data-' + settings.filterName + ']').on('click', function (event) {
				event.preventDefault();

				var wrap = $(this).closest('.main-slider-wrap');
				wrap.height(wrap.height());
				var mobWrap=$(this).closest('.mslider-filters-mob-wrap');
				var mobCurrent=mobWrap.find('.mslider-filter-mob-current');
				if(mobCurrent.length>0){
					mobWrap.removeClass('mslider-filters-mob-wrap--open');
					mobCurrent.html($(this).html());
				}
			/*	wrap.block({
					css: {
						backgroundColor: '#ffffff',
						color: '#fff'
					},
					message: '',
					overlayCSS: {
						backgroundColor: '#ffffff',
						opacity: 1,
						cursor: 'default'
					},
				});*/

				var tempthis=this;
				//setTimeout(function () {

					$(tempthis).addClass('mslider-filter--active').siblings('.mslider-filter--active').removeClass('mslider-filter--active');
					var category = $(tempthis).data(settings.filterName),
						newSlides = $.extend(true, {}, slides),
						newSlickOptions;

					if (!category) return;

					// Before Filter Slides
					if (typeof settings.beforeFilter == 'function') {
						settings.beforeFilter.call(this, category, slider, slides);
					}

					// Destroy and empty
					slider.slick('unslick');

					// Recreate All Slides
					if (category === 'all') {
						slider.find(settings.slideSelector).remove();
						slider.append(newSlides);
						slider.slick(settings.slick);

						/*setTimeout(function () {
							wrap.unblock();
						}, 200);*/
						return;
					}

					/**
					 * Filter Slides
					 *
					 * If settings.filter is a function we pass the category, slider and a copy of settings
					 * expecting a true or false return to pass it to jQuery.filter();
					 *
					 * If not, we just pass it directly.
					 */
					if (typeof settings.filter !== 'function') {
						newSlides = newSlides.filter(settings.filter);
					} else {
						newSlides = newSlides.filter(function () {
							return settings.filter.call(this, category, slider, $.extend(true, {}, settings));
						});
					}

					slider.find(settings.slideSelector).remove();
					slider.append(newSlides);
					slider.slick(settings.slick);
					/*setTimeout(function () {
						wrap.unblock();
					}, 200);*/
				//}, 200);
			});
		});
	};
}(jQuery));