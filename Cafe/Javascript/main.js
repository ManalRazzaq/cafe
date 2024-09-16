
(function ($) {
    // Preloader Active Code
    $(window).on('load', function () {
       $('#preloader').fadeIn('slow', function () {
           $(this).remove();
       });
   });
   
    // Back to top button
    $(window).scroll(function () {
       if ($(this).scrollTop() > 300) {
           $('.back-to-top').fadeIn('slow');
       } else {
           $('.back-to-top').fadeOut('slow');
       }
       });
       $('.back-to-top').click(function () {
           $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
           return false;
       });
   
   })(jQuery);
         

 
$(window).scroll(function () {
    if ($(window).width() < 992) {
        if ($(this).scrollTop() > 45) {
            $('.fixed-top').addClass('bg-dark shadow');
        } else {
            $('.fixed-top').removeClass('bg-dark shadow');
        }
    } else {
        if ($(this).scrollTop() > 45) {
            $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
        } else {
            $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
        }
    }
});

// Ensure navbar is transparent when resizing the window
$(window).resize(function () {
    if ($(window).width() < 992) {
        $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
    } else {
        if ($(window).scrollTop() > 45) {
            $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
        } else {
            $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
        }
    }
});




$(document).ready(function() {
    $(window).trigger('scroll');
});

   // Initiate the wowjs
   new WOW().init();

   $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
});






    
////OWLLLL CAROUSELLLL


$(document).ready(function () {
$('#projects-slider').owlCarousel({
    loop: true,
    nav: false,
    items: 2,
    dots: false,
    smartSpeed: 2000,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2,
            margin: 8,
        }
    }
});



   // Testimonial carousel
   $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:2
        },
        1200:{
            items:2
        }
    }
});

  // :: 1.0 Welcome Post Slider Active Code
  $(".welcome-post-sliders").owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    margin: 10,
    nav: true,
    navText: ['', ''],
    responsive: {
        320: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});











$("#instagram-higlight").ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });

});



});





