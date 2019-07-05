window.app = window.app || {};
window.app = (function (app) {
    'use strict';



    app.newCount = function createCount() { // SL - comment - function name here kind of useless...
        let count = 0;
        return {
            increment: function () {
                count = count + 1;
            },

            getCount: function () {
                return count;
            }
        };
    };
    return app;
}(window.app || {}));

