$(function(){
	$('.owl-carousel').owlCarousel({
		items:1,
		autoplayHoverPause: true,
		autoplay: false,
		mouseDrag: false,
		touchDrag: false,
		loop: false
	});
	$('.fa-bars').on('click', function(){
		$('nav').addClass('menu-toggled');
	});
	$('.fa-times').on('click', function(){
		$('nav').removeClass('menu-toggled');
	});
	$('.post-img').each(function(){
		var url = $(this).find('img').attr('src');

		$(this).css('background-image', 'url('+url+')')
	})
	$('.bg-s').each(function(){
		var url = $(this).find('img').attr('src');

		$(this).css('background-image', 'url('+url+')')
	})
})