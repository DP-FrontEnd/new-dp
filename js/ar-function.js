
$("#contact-msg").submit(function (event) {
	event.preventDefault();
	submitFomforMSG();
	$('#contact-msg').hide();
        $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', 'css/true-sign.css'));
        $(".msgSubmitcontact").removeClass("d-none");
});
$('.header__lists a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                    ;
                });
            }
        }
    });

var slider = new MasterSlider();
slider.setup('masterslider2', {
    width: 1400,
    height: 700,// slider standard width
    space: 0,
    fullwidth: true,
    fullheight: true,
    preload: 0,
    loop: false,
    autoplay: true,
    hideLayers: true,
    view: 'fade',
    endPause: true
});

var slider = new MasterSlider();
slider.setup('masterslider', {
    width: 760,
    height: 400,
    space: 0,
    loop: true,
    autoplay: true,
    view: 'prtialwave3'
});
slider.control('arrows');
slider.control('slideinfo', {insertTo: "#partial-view-1", autohide: false});
slider.control('circletimer', {color: "#FFFFFF", stroke: 9});

var slider = new MasterSlider();
slider.setup('masterslider1', {
    loop: true,
    width: 240,
    height: 240,
    speed: 20,
    view: 'wave',
    preload: 0,
    space: 0,
    autoplay: true
});
slider.control('arrows');
slider.control('slideinfo', {insertTo: '#staff-info'});

$(".menuicon").click(function () {
    $(".menuNav .header__lists").toggleClass("menuClick");
    $(this).toggleClass("showmenuicon");

});
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 600) {
        $('.menuNav').fadeIn(200);
    } else {
        $('.menuNav').fadeOut(100);
    }
});
$(function () {
    var $elems = $('#about, #services, #services1, #portifolio, #team, footer');
    var winheight = $(window).height();
    var fullheight = $(document).height();

    $(window).scroll(function () {
        animate_elems();
    });

    function animate_elems() {
        wintop = $(window).scrollTop();


        $elems.each(function () {
            $elm = $(this);

            if ($elm.hasClass('animate')) {
                return true;
            }

            topcoords = $elm.offset().top;

            if (wintop > (topcoords - (winheight * .75))) {

                $elm.addClass('animate');
            }
        });
    }
});
$(".popups__close").click(function () {
    $('.popups').hide();
});
$('.mobileapp_btn').click(function () {
    $(".popups").show();
    $("#lottie").show();
    $("#logoqoute").hide();
    $("#webqoute").hide();
    $("#mobileapp").show();
    setTimeout(function () {

        $.get('ar-mobileapp-quote.html')
            .success(function (data) {
                $('#mobileapp').html(data);

                $("#lottie").hide();
            });

    }, 3000);

});
$('.web_btn').click(function () {
    $(".popups").show();
    $("#lottie").show();
    $("#logoqoute").hide();
    $("#webqoute").show();
    $("#mobileapp").hide();
    setTimeout(function () {

        $.get('ar-webdesign-quote.html')
            .success(function (data) {
                $('#webqoute').html(data);

                $("#lottie").hide();
            });

    }, 3000);

});
$('.logo_btn').click(function () {
    $(".popups").show();
    $("#lottie").show();
    $("#logoqoute").show();
    $("#webqoute").hide();
    $("#mobileapp").hide();
    setTimeout(function () {

        $.get('ar-logo-quote.html')
            .success(function (data) {
                $('#logoqoute').html(data);

                $("#lottie").hide();
            });

    }, 3000);

});
