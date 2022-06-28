// referance owl carousel slide
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  $('.owl-carousel').owlCarousel({
loop:true,
margin:10,
nav:true,
responsive:{
    0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:5
    }
}
});

// back to top effect

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
    $('.navbar').addClass('scrolled')
  } else {
    btn.removeClass('show');
    $('.navbar').removeClass('scrolled')
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


