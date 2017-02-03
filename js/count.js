$(document).ready(function(){
    var show = true;
    var countbox1 = $("#counts1");
    $(window).on("scroll load resize", function(){

        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена

        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top1 = countbox1.offset().top;
             // Расстояние от блока со счетчиками до верха всего документа

        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа

        var e_height1 = countbox1.outerHeight();
        // Полная высота блока со счетчиками

        if(w_top + 650 >= e_top1 || w_height + w_top == d_height || e_height1 + e_top1 < w_height){
            $(".spincrement1").spincrement({
                from: 0,
                to: 3.4,
                decimalPoint: ",",
                decimalPlaces: 1,
                duration: 2500
            });

            $(".spincrement2").spincrement({
                from: 0,
                to: 35,
                duration: 2500
            });

            $(".spincrement3").spincrement({
                from: 0,
                to: 88,
                duration: 2500
            });

            show = false
        }
    });
});

$(document).ready(function(){
    var show = true;
    var countbox2 = $("#counts2");
    $(window).on("scroll load resize", function(){

        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница

        var e_top2 = countbox2.offset().top;     // Расстояние от блока со счетчиками до верха всего документа

        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа


        var e_height2 = countbox2.outerHeight();
        // Полная высота блока со счетчиками

        if(w_top + 650 >= e_top2 || w_height + w_top == d_height || e_height2 + e_top2 < w_height){
            $(".spincrement4").spincrement({
                from: 0,
                to: 3.7,
                decimalPoint: ",",
                decimalPlaces: 1,
                duration: 2500
            });

            $(".spincrement5").spincrement({
                from: 0,
                to: 3.2,
                decimalPoint: ",",
                decimalPlaces: 1,
                duration: 2500
            });

            $(".spincrement6").spincrement({
                from: 0,
                to: 2,
                duration: 2500
            });

            show = false;
        }
    });
});
