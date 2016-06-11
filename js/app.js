(function($) {
    $(document).ready(function() {
        var bodyEle = $('body');
        initScrollspy(bodyEle);
    });

    function initScrollspy(bodyEle) {
        var navEle = $('nav');

        bodyEle.scrollspy({
            offset: navEle.height(),
            target: '#navbar'
        });
    }
})($);
