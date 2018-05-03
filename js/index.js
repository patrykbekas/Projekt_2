$('.headering__menu-toggle').click(function() {
  
  $('.headering__navigation').toggleClass('headering__navigation--open', 500);
  $(this).toggleClass('open');
  
})

$(document).ready(function() {
	
	// Slider 
	$('.slider__slides').slick({
		dots:true,
		autoplay: true,
		autoplaySpeed: 3000
	});
	
});



