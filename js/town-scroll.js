var lastScrollTop = 700;

$(window).scroll(function() {
    var st = $(this).scrollTop();
    if(st > lastScrollTop) {
        $('.img__town').css('background-position', '+=10px');
    } else {
        $('.img__town').css('background-position', '+=-10px');
    }
    lastScrollTop = st;
});
