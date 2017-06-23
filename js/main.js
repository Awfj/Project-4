$(document).ready(function() {
  
	//HIDDEN MENU
	$('.menu').click(function(i) {
		i.stopPropagation();
		$('#main_nav').toggleClass('active_menu');
	});
	$(document).click(function() {
		$('#main_nav').removeClass('active_menu');
	});

  //STICKY NAV
  $(window).scroll(sticky_nav());
  sticky_nav();
  function sticky_nav() {
    var headerOffset = $('header').offset().top;
    var featuresOffset = $('#features').offset().top;
    var scrollPos = $(window).scrollTop();
    $('header').wrap('<div class="nav-placeholder"></div>');
    $(".nav-placeholder").height($('header').outerHeight());
    if (scrollPos >= headerOffset) {
      $('header').addClass('fixed');  
    } else {
      $('header').removeClass('fixed');
    }
  }
});

//SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}