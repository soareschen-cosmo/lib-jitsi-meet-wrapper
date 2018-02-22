import jQuery from 'jquery'

(global => {
    // jQuery
    if (typeof global.$ === 'undefined') {
        jQuery(global);
        global.$ = jQuery;
    }
})(global || window || this);
