$(document).ready(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() >= $('.nav-icons').offset().top) {
            $('#hidden-nav').fadeIn(1000);  
            $('.navbar').removeClass('hidden');  
        }
    });

    setRandomClass();

    setInterval(function() {
        setRandomClass();
    }, 1000);

    function setRandomClass() {
        var skillList = $(".skill-list li a");
        randomSkill = Math.floor(Math.random() * 16); 
        skillList.removeClass("selectList");
        skillList.eq(randomSkill).addClass("selectList"); 
    }

    $(window).scroll(function() {
        if($(window).scrollTop() >= $('#parall').offset().top + $('#parall').outerHeight() - window.innerHeight) {
            $('#past').delay(250).animate({'opacity': '1'}, 700);
            $('#present').delay(725).animate({'opacity': '1'}, 700);
            $('#future').delay(1200).animate({'opacity': '1'}, 700);    
        }
    });

    $('#mobile-nav .navigation a').click(function() {       
        $('.btn-navbar').click(); 
        $('.navbar-toggle').click();
    });

    $("#about-me").click(function(){
        $('html, body').animate({
          scrollTop: $("#aboutMe").offset().top
        }, 1000);
    });

    $("#skill-section").click(function(){
        $('html, body').animate({
          scrollTop: $("#skillSection").offset().top
        }, 1000);
    });

    $("#about-me-hidden").click(function(){
        $('html, body').animate({
          scrollTop: $("#aboutMe").offset().top
        }, 1000);
    });

    $("#skill-section-hidden").click(function(){
        $('html, body').animate({
          scrollTop: $("#skillSection").offset().top
        }, 1000);
    });

    $("#about-me-mobile").click(function(){
        $('html, body').animate({
          scrollTop: $("#aboutMe").offset().top
        }, 1000);
    });

    $("#skill-section-mobile").click(function(){
        $('html, body').animate({
          scrollTop: $("#skillSection").offset().top
        }, 1000);
    });
  
});