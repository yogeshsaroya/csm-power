$(document).ready(function(){
        $(".header__mobile-button").click(function(){
          $(this).toggleClass('open');
          $(".nav").fadeToggle("slow");
        });

        $('.logo-slider .owl-carousel').owlCarousel({
          loop:true,
          autoplay: true,
          autoplayTimeout: 5000,
          margin:20,
          nav:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:3
              }
          }
      });

        // var headHeight = $('header').outerHeight();
        // $('body').css('padding-top' , headHeight);
         
});