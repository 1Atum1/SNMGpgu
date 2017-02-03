
$(document).ready(function () {
    var elementToFlip1 = $('.characters__img'),
        elementTop1 = elementToFlip1.offset().top,
        elementToFlip2 = $('.infocity__img'),
        elementTop2 = elementToFlip1.offset().top,
        elementToFlip3 = $('.contest__img'),
        elementTop3 = elementToFlip1.offset().top;

    $(window).scroll(function () {
        var screenTop = $(document).scrollTop();

        if (screenTop >= (elementTop1 - 700)) {
            elementToFlip1.removeClass('off');
        } else if (screenTop < (elementTop1 - 1200)) {
            elementToFlip1.addClass('off');
        }

        setTimeout(function () {
            if (screenTop >= (elementTop2 - 700)) {
                elementToFlip2.removeClass('off');
            } else if (screenTop < (elementTop2 - 1200)) {
                elementToFlip2.addClass('off');
            }
        }, 200);

        setTimeout(function () {
            if (screenTop >= (elementTop3 - 700)) {
                elementToFlip3.removeClass('off');
            } else if (screenTop < (elementTop3 - 1200)) {
                elementToFlip3.addClass('off');
            }
        }, 400);
    });
});






















