$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        draggable: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    var userScroll = 0;
    $(window).scroll(function(){
        var scrollMax = $(this).scrollTop()
        if (scrollMax-userScroll>50) {
            var navbar = $('.navbar').css('height');
        }
    });
});