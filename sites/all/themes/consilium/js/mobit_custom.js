jQuery(document).ready(function($) {

    $(document).on("scroll", onScroll);

    //paginator=====================
    $('.mobit_subject__wrap').eq(0).find('.mobit_subject__item').addClass('mobit_subject__item--active');
    for (var i = 0; i < $('#block-md-slider-1 .md-bullets .md-bullet').length; i++) {
        $('.mobit_subject__wrap').eq(i).find('.mobit_subject__item').addClass('mobit_subject__item--attached');
    }
    $('#block-block-72 .mobit_subject__wrap').click(function() {
        var slide_index = $(this).index();

        if ((slide_index + 1) <= $('#block-md-slider-1 .md-bullet').length) {
            $('#block-md-slider-1 .md-bullets .md-bullet').eq(slide_index).click();
            $('#block-md-slider-8 .md-bullets .md-bullet').eq(slide_index).click();
            $('#block-block-72 .mobit_subject__item').removeClass('mobit_subject__item--active');
            $('#block-block-72 .mobit_subject__wrap').eq(slide_index).find('.mobit_subject__item').addClass('mobit_subject__item--active');
        }
        return false;
    });

    // anchor scroll to block================
    $('#block-superhero-dropdown-superhero-dropdown-block-2 .menu a').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('#block-superhero-dropdown-superhero-dropdown-block-2 .menu li').each(function() {
            $(this).find('a').removeClass('active-hash');
        })
        $(this).addClass('active-hash');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - stickyHeaderHeight()
        }, 500, 'swing', function() {
            // window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    //block step by step apearance==================

    if ($(this).width() > 600 && $('.ctrl_proccess__step--4-mobile').css('display') == 'none') {

        $step1 = $('.ctrl_proccess__step--1');
        $step2 = $('.ctrl_proccess__step--2');
        $step3 = $('.ctrl_proccess__step--3'); //actually it's 4th step, but in layout order
        $step4 = $('.ctrl_proccess__step--4');
        $arrowRight = $('.ctrl_proccess__step--arrow-right');
        $arrowLeft = $('.ctrl_proccess__step--arrow-left');
        $arrowUp = $('.ctrl_proccess__step--arrow-up');
        $arrowDown = $('.ctrl_proccess__step--arrow-down');
        $step1.css('opacity', 0);
        $step2.css('opacity', 0);
        $step3.css('opacity', 0);
        $step4.css('opacity', 0);
        $arrowRight.css('opacity', 0);
        $arrowLeft.css('opacity', 0);
        $arrowUpBgStyle = $arrowUp.css('background');
        $arrowUp.css('background', 'none');
        $arrowDownBgStyle = $arrowDown.css('background');
        $arrowDown.css('background', 'none');

        $(window).scroll(function() {

            if ($(this).scrollTop() >= ($step1.offset().top - $(window).height() / 2)) {
                $step1.fadeTo('slow', 1);
            }
            if ($(this).scrollTop() >= ($arrowRight.offset().top - $(window).height() / 2 + 100)) {
                $arrowRight.fadeTo('slow', 1);
                $step2.fadeTo('slow', 1);
            }

            if ($(this).scrollTop() >= ($step3.offset().top - $(window).height() / 2)) {
                $arrowDown.css('background', $arrowDownBgStyle);
                $step4.fadeTo('slow', 1);
            }
            if ($(this).scrollTop() >= ($step4.offset().top - $(window).height() / 2 + 100)) {
                $arrowLeft.fadeTo('slow', 1);
                $step3.fadeTo('slow', 1);
                $arrowUp.css('background', $arrowUpBgStyle);
            }

        });

    }

    //block step by step apearance=====END=============

    if ($('#block-views-view-middle-slider-block').length > 0) {
        var middle_slider_1 = $('#block-views-view-middle-slider-block .middle-slider').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            auto: true,
            pause: 7000,
            nextText: '&#xf061;',
            prevText: '&#xf060;',
            autoHover: true,
            pager: true,
            controls: false,
            adaptiveHeight: true,
            mode: 'horizontal',
        });
        $(window).resize(function() {
            middle_slider_1.reloadSlider({
                minSlides: 1,
                maxSlides: 1,
                auto: true,
                pause: 7000,
                nextText: '&#xf061;',
                prevText: '&#xf060;',
                autoHover: true,
                pager: true,
                controls: false,
                adaptiveHeight: true,
                mode: 'horizontal',
            });
        });
    }

    if ($('#block-views-view-middle-slider-block-1').length > 0) {
        var middle_slider_2 = $('#block-views-view-middle-slider-block-1 .middle-slider').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            auto: true,
            pause: 8000,
            nextText: '&#xf061;',
            prevText: '&#xf060;',
            autoHover: true,
            pager: true,
            controls: false,
            adaptiveHeight: true,
            mode: 'horizontal',
        });
        $(window).resize(function() {
              middle_slider_2.reloadSlider({
                minSlides: 1,
                maxSlides: 1,
                auto: true,
                pause: 8000,
                nextText: '&#xf061;',
                prevText: '&#xf060;',
                autoHover: true,
                pager: true,
                controls: false,
                adaptiveHeight: true,
                mode: 'horizontal',
            });

        });

    }

});

function onScroll(event) {
    // var scrollPos = $(document).scrollTop();
    // if ($('#block-superhero-dropdown-superhero-dropdown-block-2').length > 0) {
    //     $('#block-superhero-dropdown-superhero-dropdown-block-2 .menu li').each(function() {
    //         var currLink = $(this).find('a');
    //         var refElement = $(currLink.prop('hash'));
    //         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
    //             $('#block-superhero-dropdown-superhero-dropdown-block-2 .menu li a').removeClass("active-hash");
    //             currLink.addClass("active-hash");
    //         } else {
    //             currLink.removeClass("active-hash");
    //         }
    //     });
    // }

}

function scrollToMenu(dest) {
    $('html, body').animate({
        scrollTop: $(dest).offset().top - stickyHeaderHeight(),
    }, 700);
}

function stickyHeaderHeight() {
    height = 0;
    if ($('#section-header.fixed'))
        height = $('#section-header.fixed').height();
    return height;
}


Drupal.behaviors.mobit = {
    attach: function(context, settings) {

        $(context).find('.webform-client-form').once(function() {
            $('.webform-client-form .form-item.webform-component-textfield:not(.webform-component--wf-solution-object-count):not(.webform-component--wf-solution-auditor-count):not(.webform-component--wf-solution-manager-count):not(.webform-component--wf-solution-analytic-count), .webform-client-form .form-item.webform-component-email').each(function() {
                formLabelText = $(this).find('label').hide().text();
                $(this).find('input').attr('placeholder', formLabelText.replace(/\*/g, ' '));
            });
            // remove btn class
            $('.webform-client-form .form-submit').removeClass('btn button-primary btn-primary');

        });
    }
}
