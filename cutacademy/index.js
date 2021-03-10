
$(function(){

    //nav
    $('.toggle-btn').on('click', function() {
        $('#header').toggleClass('open');
    });

    $('#mask').on('click', function() {
        $('#header').removeClass('open');
    });

    $('nav li a').on('click', function() {
        $('#header').removeClass('open');
    });


    //slick
    $('.slick1').slick({ 
        autoplay: true, 
        dots: true,
    });
     


    //scrool
    ScrollReveal().reveal('section', { 
        duration: '800', 
        viewFactor: '0.1',
        distance: '200px',
        reset: false  
      });

});