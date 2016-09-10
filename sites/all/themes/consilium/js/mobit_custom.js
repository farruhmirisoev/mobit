jQuery(document).ready(function($) {
    $('#block-webform-client-block-89 .form-item').each(function() {
        formLabelText = $(this).find('label').hide().text();
        $(this).find('input').attr('placeholder', formLabelText);
    });

    $('#block-webform-client-block-89 .form-submit').removeClass('btn');


});

