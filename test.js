/* global VT */
window.ValTech = window.ValTech || {};
(function (VT, undefined) {
    'use strict';
    VT.toggles = (function () {
        var // elements involved in toggle
            sidebar = $('aside'),
            sbToggle = $('#sbToggle'),
            main = $('.content'),

            sWidth = $('body').width(),
            sbHeight = sidebar.height(),

            // for this simple example, init will just be adding listeners
            init = function () {
                sbToggle.on('click', toggleSidebar);
            },

            // toggle the sidebar's visibility
            toggleSidebar = function (e) {
                e.preventDefault();
                // behaviour differs on smaller devices
                if (sWidth < 600) {
                    if (sidebar.is(':visible')) {
                        sidebar.animate({height: 0}, 800, function () {
                            sidebar.hide();
                        });
                    } else {
                        sidebar.show().animate({height: sbHeight + 'px'}, 800);
                    }
                } else {
                    if (sidebar.is(':visible')) {
                        sidebar.animate({right: '-30%'}, 800, function () {
                            sidebar.hide();
                        });
                        main.animate({width: '100%'}, 800);
                    } else {
                        sidebar.show().animate({right: 0}, 800);
                        main.animate({width: '70%'}, 800);
                    }
                }
            };

        // kick everything off
        init();
    }());
}(ValTech));
