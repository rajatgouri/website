(function($) {
    'use strict';
        
    $(window).on('load', function() {
        $('#page-loader').fadeOut('slow', function() {
            $(this).remove();
        });
    });
    
     
})(jQuery); 
    