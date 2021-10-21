jQuery(function ($) {
    'use strict';
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 120) {
            $('.navbar-area').addClass("is-sticky");
        } else {
            $('.navbar-area').removeClass("is-sticky");
        }
    });
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });
    $(".others-option-for-responsive .dot-menu").on("click", function () {
        $(".others-option-for-responsive .container .container").toggleClass("active");
    });
    $(function () {
        docSlider.init({
            pager: false,
            scrollReset: false,
            beforeChange: function (index, page, toIndex, toPage, type) {
                if ($('#' + toPage.id).is(":hidden")) {
                    if (toIndex > index) {
                        docSlider.nextPage();
                    } else {
                        docSlider.prevPage();
                    }
                }
            }
        });

        if (location.hash) {
            setTimeout(function () {
                window.scrollTo(0, 0);
                target = location.hash.split('#');
                smoothScrollTo($('#' + target[1]));
            }, 1);
        }

        function smoothScrollTo(target) {
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                docSlider.jumpPage(target[0].id)
            }
        }

        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                smoothScrollTo($(this.hash));
                return false;
            }
        });

        $('.default-btn').on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({
                top: relY,
                left: relX
            })
        }).on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({
                top: relY,
                left: relX
            })
        });
    });

    $('.odometer').appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        $('.tab ul.tabs li a').on('click', function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            g.preventDefault();
        });
    })(jQuery);

    $(function () {
        $('.accordion').find('.accordion-title').on('click', function () {
            $(this).toggleClass('active');
            $(this).next().slideToggle('fast');
            $('.accordion-content').not($(this).next()).slideUp('fast');
            $('.accordion-title').not($(this)).removeClass('active');
        });
    });
    jQuery(window).on('load', function () {
        $('.preloader').fadeOut();
    });
}(jQuery));