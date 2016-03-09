$(document).ready(function() {

    $("#about").click(function (){
        $('html, body').animate({
          scrollTop: $("#aboutMe").offset().top
      }, 1000);
    });

    $("#projectSec").click(function (){
        $('html, body').animate({
          scrollTop: $("#projectSection").offset().top
      }, 1000);
    });

    $("#journey").click(function (){
        $('html, body').animate({
          scrollTop: $("#project2").offset().top
      }, 1000);
    });

    $("#contact").click(function (){
        $('html, body').animate({
          scrollTop: $("#contactMe").offset().top
      }, 1000);
    });

    $('.darken').hover(
    function(){
       $(this).find('.message').fadeIn(500); 
    },
    function(){
       $(this).find('.message').fadeOut(500); 
    });

});