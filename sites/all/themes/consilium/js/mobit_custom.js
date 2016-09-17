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
    $('#block-superhero-dropdown-superhero-dropdown-block-2 .menu a').removeClass('active');
    $('#block-superhero-dropdown-superhero-dropdown-block-2 .menu a').click(function() {
        var linkHash = $(this).prop("hash");
        $('#block-superhero-dropdown-superhero-dropdown-block-2 .menu a').removeClass('active-hash');
        $(this).addClass('active-hash');
        console.log(linkHash);
        scrollToMenu(linkHash);
        return false;
    });
    //block waypoints
    var blockWayPointMap = new Object();
    var mainMenuItemList = $('#block-superhero-dropdown-superhero-dropdown-block-2 .menu li');
    for (var i = 0; i < mainMenuItemList.length; i++) {
        thislinkHash = mainMenuItemList.eq(i).find('a').prop('hash');
        blockWayPointMap[i] = {
            'offsetTop': $(thislinkHash).offset().top - stickyHeaderHeight(),
            'offsetBottom': $(thislinkHash).outerHeight() + $(thislinkHash).offset().top - stickyHeaderHeight()
        }
    }


    // $(window).scroll(function() {
    //     var activeAnchor = false;
    //     for (var linkIndex in blockWayPointMap) {
    //         if ($(this).scrollTop() >= blockWayPointMap[linkIndex].offsetTop && $(this).scrollTop() < blockWayPointMap[linkIndex].offsetBottom) {
    //             mainMenuItemList.each(function() {
    //                 $(this).find('a').removeClass('active-hash');
    //             });
    //             mainMenuItemList.eq(linkIndex).find('a').addClass('active-hash');
    //             activeAnchor =  true;
    //             break;
    //         }
    //         console.log($(this).scrollTop()+' | '+blockWayPointMap[linkIndex].offsetTop+' | '+blockWayPointMap[linkIndex].offsetBottom);
    //     }
    //     if (!activeAnchor) {
    //         mainMenuItemList.each(function() {
    //             $(this).find('a').removeClass('active-hash');
    //         });
    //     }
    // });

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
        $arrowUp.css('background-position-y', '-9999px');
        $arrowDown.css('background-position-y', '-9999px');

        $(window).scroll(function() {

            if ($(this).scrollTop() >= ($step1.offset().top - $(window).height() / 2)) {
                $step1.fadeTo('slow', 1);
            }
            if ($(this).scrollTop() >= ($arrowRight.offset().top - $(window).height() / 2 + 100)) {
                $arrowRight.fadeTo('slow', 1);
                $step2.fadeTo('slow', 1);
            }

            if ($(this).scrollTop() >= ($step3.offset().top - $(window).height() / 2)) {
                $arrowDown.css('background-position-y', 'bottom');
                $step4.fadeTo('slow', 1);
            }
            if ($(this).scrollTop() >= ($step4.offset().top - $(window).height() / 2 + 100)) {
                $arrowLeft.fadeTo('slow', 1);
                $step3.fadeTo('slow', 1);
                $arrowUp.css('background-position-y', 'top');
            }

        });

    }

    //block step by step apearance=====END=============


});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#block-superhero-dropdown-superhero-dropdown-block-2 .menu li').each(function () {
        var currLink = $(this).find('a');
        var refElement = $(currLink.prop('hash'));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#block-superhero-dropdown-superhero-dropdown-block-2 .menu li a').removeClass("active-hash");
            currLink.addClass("active-hash");
        }
        else{
            currLink.removeClass("active-hash");
        }
    });
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
            $('.webform-client-form .form-item').each(function() {
                formLabelText = $(this).find('label').hide().text();
                $(this).find('input').attr('placeholder', formLabelText.replace(/\*/g, ' '));
            });
            // remove btn class
            $('.webform-client-form .form-submit').removeClass('btn');

        });
    }
}
