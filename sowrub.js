
function clock(){
  var time = new Date();
      Gonta = time.getHours();
      min =time.getMinutes();
      sec = time.getSeconds();
      dinrat = 'AM';


      if (dinrat < 12) {
        dinrat = "pm";
      }

      if (Gonta > 12) {
        Gonta = Gonta-12;
      }

      if ( Gonta == 0) {
        Gonta = "0";
      }

      if (min < 10) {
        min = "0"+ min;
      }
      if (sec < 10) {
        sec = "0" + sec;
      }
      



document.getElementById('gori').innerHTML= Gonta + " : " + min + " : " + sec + " " + dinrat;
}

setInterval(clock,1000);











(function ($) {
	"use strict"
	
   $('.meno-bar').on ('click',function(){
        $('.right-bars').animate({'right': 0})
       })

        $('.mobile-icon').on ('click',function(){
        $('.right-bars').animate({'right': -200})
       })

        $('.right-bars ul li').on('click',function(){
          $(this).children('ul').slideToggle();
          $(this).find('i.fa-angle-down').addClass('fa-angle-up').removeClass('fa-angle-down');

        })

        $('.meno ul li').on ('click',function(){
        $('.window-meno').animate({'right':400})
       })

        

$('.section-1').ripples();


var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();





}) (jQuery);