$(function() {
	var link = $('.m-menu-link');
	var close = $('.menu-close');
	var menu = $('.m-menu');
	link.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('m-menu_active');
	});
	close.on('click', function(event) {
		
		menu.toggleClass('m-menu_active');
		$('.menu-link').click(function(){ $('.m-menu').removeClass('.m-menu') });
	});



});




