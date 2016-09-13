jQuery(document).ready(function($) {
    $('#block-webform-client-block-89 .form-item').each(function() {
        formLabelText = $(this).find('label').hide().text();
        $(this).find('input').attr('placeholder', formLabelText);
    });
    // remove btn class 
    $('#block-webform-client-block-89 .form-submit').removeClass('btn');
    $('#block-block-72 .mobit_subject__item').click(function() {
        var slide_index = $(this).index();
        // if ($('#block-md-slider-1 .md-bullet').length <= slide_index) {
        $('#block-md-slider-1 .md-bullets .md-bullet').eq(slide_index).click().addClass('test');
        $('#block-block-72 .mobit_subject__item').removeClass('mobit_subject__item--active');
        $(this).addClass('mobit_subject__item--active');
        // }
        return false;
    });

    $('#block-superhero-dropdown-superhero-dropdown-block-2 .menu a').click(function() {
        var linkHash = $(this).prop("hash");
        console.log(linkHash);
        scrollToMenu(linkHash);
        return false;
    });
    var pageMap  = new Object();
    for (var i = 0; i < $('#block-superhero-dropdown-superhero-dropdown-block-2 .menu li').length; i++) {
    	thislinkHash = $(this).find(a).prop('hash');

    }


});

function scrollToMenu(dest) {
	var stickyHeaderHeight = 0;
	if($('#section-header.fixed'))
		stickyHeaderHeight = $('#section-header.fixed').height();	

    $('html, body').animate({
        scrollTop: $(dest).offset().top - stickyHeaderHeight,
    }, 700);
}

