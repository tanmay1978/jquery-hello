/**
 * This is a simple JQuery plugin to print hello inside the element.
 */

(function ( $ ) {
 
    $.fn.hello = function( options ) {
 
        // Default options
        var settings = $.extend({
            name: 'Tanmay Navghare',
            color: 'orange'
        }, options );
 
        // Apply options
        return this.append('Hello ' + settings.name + '!').css({ color: settings.color });
 
    };
 
}( jQuery ));