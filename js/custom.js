$(function(){
    $('.slide').slick({
        arrows:true,
        autoplay: true,
        vertical:true,
        autoplaySpeed: 4000,
        dots: false,
        nextArrow:'.bottomarrow',
        prevArrow: false
        
    });
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    
    
    
    
    
    
    
    
});