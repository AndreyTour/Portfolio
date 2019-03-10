$(document).ready(function() {




    $('.popup').magnificPopup({ type: "image" });
    $('.popup_c').magnificPopup();



    $.stellar({
        responsive: true,
        horizontalOffset: 60
    });

    $('.carousel').slick({
        autoplay: true,
        arrows: true,
        responsive: [{
            breakpoint: 480,
            settings: {
                arrows: false,


            }
        }]
    });






    function wResize() {
        $("header").css("min-height", $(window).height());
    };
    wResize();
    $(window).resize(function() {
        wResize()

    });

    $(".top_phone .wrapper  .tab").click(function() {
        $(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");


    $(".tabs_header .wrapper  .tab").click(function() {
        $(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".contacts_top .tab").click(function() {
        $(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".bottom_phone .wrapper  .tab").click(function() {
        $(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");










    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("form").submit(function(e) {
        var ttp = $(this)
        e.preventDefault;
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            alert("Спасибо за заявку!");
            setTimeout(function() {
                var magnificPopup = $.magnificPopup.instance;
                magnificPopup.close();
                this.trigger("reset");
            }, 1000);
        });
        return false;
    });

});

$(window).load(function() {

    $(".top_header").animated("fadeInDown", "fadeOut");
    $(".tabs_header .wrapper").animated("bounce", "fadeOut");
    $(".profi_item").animated("fadeInRight", "fadeOut");
    $(".s_profi form").animated("zoomIn", "fadeOut");
    $(".s_back h3").animated("fadeInUp", "fadeOut");
    $(".footer").animated("fadeInUp", "fadeOut")


})