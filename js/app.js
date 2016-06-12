(function($) {
    $(document).ready(function() {
        var bodyEle = $('body');
        initScrollspy(bodyEle);
    });

    function initScrollspy(bodyEle) {
        bodyEle.scrollspy({
            target: '#navbar'
        });
    }
})($);
