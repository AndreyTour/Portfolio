$(document).ready(function() {




    $('.go_to').click(function() { // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
});

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

$(window).load(function() {

    $(".hamburger").animated("fadeInLeft", "fadeOut");
    $(".helloo__header").animated("fadeInLeft", "fadeOut");
    $(".hello__header__two").animated("fadeInLeft", "fadeOut");
    $("#anchor__one").animated("fadeInUp", "fadeOut");
    $(".go__greet").animated("fadeInUp", "fadeOut");
    $(".photo").animated("fadeInLeft", "fadeOut");
    $(".about__me").animated("fadeInLeft", "fadeOut");
    $(".social__me").animated("fadeInLeft", "fadeOut");
    $(".qualitiels").animated("fadeInLeft", "fadeOut");
    $(".knoweledge__info").animated("fadeInUp", "fadeOut");
    $(".main__knoweledge__pg").animated("fadeInLeft", "fadeOut");
    $(".knoweledge__main").animated("fadeInLeft", "fadeOut");
    $(".knoweledge__dz").animated("fadeInLeft", "fadeOut");
    $(".knoweledge__en").animated("fadeInLeft", "fadeOut");
    $(".portfolio__title").animated("fadeInUp", "fadeOut");
    $(".colorgrey").animated("fadeInUp", "fadeOut");
    $(".contact-title").animated("fadeInUp", "fadeOut");
    $(".location").animated("fadeInLeft", "fadeOut");
    $(".tel").animated("fadeInLeft", "fadeOut");
    $(".email").animated("fadeInLeft", "fadeOut");
    $(".contact-title").animated("fadeInUp", "fadeOut")

})