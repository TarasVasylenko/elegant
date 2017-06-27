$('.nav').on('click', 'a', function(even){
	even.preventDefault();
	var link = $(this).attr('href');
	var distanse = $(link).offset().top;
	$('html, body').animate({
		scrollTop: distanse
	}, 700);
});

$('.icon-angle-down').click(function(){
	var link = $(this).attr('href');
	var distanse = $(link).offset().top;
	$('html, body').animate({
		scrollTop: distanse
	}, 700);
});

$('.footer-logo').click(function(){
	var link = $(this).attr('href');
	var distanse = $(link).offset().top;
	$('html, body').animate({
		scrollTop: distanse
	}, 700);
});

$(document).ready(function(){
	$('.title-1').addClass('show');
});



$(window).scroll(function(){
	var distanse_menu = $('body').offset().top;
	if ($(window).scrollTop() > distanse_menu){
		$('header').css('background','rgba(34, 34, 34, 0.9)');
	}
	else {
		$('header').css('background','transparent');		
	}
});



$(window).scroll(function(){
	var distanse_menu = $('.title-1').offset().top;
	if ($(window).scrollTop() > distanse_menu){
		$('.slide-2__title').addClass('show');
		$('.slide-2__dec').addClass('show');
		$('.col-md-4').addClass('show');
	}
});

$(window).scroll(function(){
	var titleAnimate = $('.title-1').offset().bottom;
	if ($(window).scrollTop() > titleAnimate){
		$('.col-md-4').addClass('show');
	}
});

$(window).scroll(function(){
	var slide3_animate = $('.animate-slide-3').offset().top;
	if ($(window).scrollTop() > slide3_animate){
		$('.slide-3__descr').addClass('show');
		$('.slide-3__img').addClass('show');
	}
});

$(window).scroll(function(){
	var slide4_animate = $('.slide-3').offset().top;
	if ($(window).scrollTop() > slide4_animate){
		$('.slide-4__title').addClass('show');
		$('.slide-4__dec').addClass('show');
	}
});


$(window).scroll(function(){
	var slide5_animate = $('.col-480').offset().top;
	if ($(window).scrollTop() > slide5_animate){
		$('.slide-5__title').addClass('show');
		$('.slide-5__dec').addClass('show');
	}
});

