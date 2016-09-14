jQuery(document).ready(function($) {

    // anchor scroll to block
    $('.mobit_subject__item').eq(0).addClass('mobit_subject__item--active');    
    $('#block-block-72 .mobit_subject__wrap').click(function() {
        var slide_index = $(this).index();
        
        if ((slide_index+1) <= $('#block-md-slider-1 .md-bullet').length) {
	        $('#block-md-slider-1 .md-bullets .md-bullet').eq(slide_index).click();
	        $('#block-md-slider-8 .md-bullets .md-bullet').eq(slide_index).click();
	        $('#block-block-72 .mobit_subject__item').removeClass('mobit_subject__item--active');
	        $('#block-block-72 .mobit_subject__wrap').eq(slide_index).find('.mobit_subject__item').addClass('mobit_subject__item--active');
        }
        return false;
    });

    $('#block-superhero-dropdown-superhero-dropdown-block-2 .menu a').click(function() {
        var linkHash = $(this).prop("hash");
        console.log(linkHash);
        scrollToMenu(linkHash);
        return false;
    });
    var pageMap = new Object();
    for (var i = 0; i < $('#block-superhero-dropdown-superhero-dropdown-block-2 .menu li').length; i++) {
        thislinkHash = $(this).find('a').prop('hash');

    }


});

function scrollToMenu(dest) {
    var stickyHeaderHeight = 0;
    if ($('#section-header.fixed'))
        stickyHeaderHeight = $('#section-header.fixed').height();

    $('html, body').animate({
        scrollTop: $(dest).offset().top - stickyHeaderHeight,
    }, 700);
}

Drupal.behaviors.mobit = {
    attach: function(context, settings) {

        $(context).find('.webform-client-form').once(function() {
            $('.webform-client-form .form-item').each(function() {
                formLabelText = $(this).find('label').hide().text();
                $(this).find('input').attr('placeholder', formLabelText);
            });
            // remove btn class 
            $('.webform-client-form .form-submit').removeClass('btn');

        });
    }
}
