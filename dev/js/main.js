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

$(window).scroll(function(){
	var distanse_menu = $('body').offset().top;
	if ($(window).scrollTop() > distanse_menu){
		$('header').css('background','rgba(34, 34, 34, 0.9)');
	}
	else {
		$('header').css('background','transparent');		
	}
});

$(document).ready(function(){
	$('.title-1').addClass('show');
});

$(window).scroll(function(){
	var distanse_menu = $('.title-1').offset().top;
	if ($(window).scrollTop() > distanse_menu){
		$('h2').addClass('show');
		$('.slide-2__dec').addClass('show');
		$('.col-md-4').addClass('show');
	}
});

$(window).scroll(function(){
	var distanse_menu = $('.title-1').offset().bottom;
	if ($(window).scrollTop() > distanse_menu){
		$('.col-md-4').addClass('show');
	}
});

$(window).scroll(function(){
	var distanse_menu = $('.animate-slide-3').offset().top;
	if ($(window).scrollTop() > distanse_menu){
		$('.slide-3__descr').addClass('show');
	}
});


