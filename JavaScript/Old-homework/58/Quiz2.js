window.app = window.app || {};
window.app = (function (app) {
    'use strict';
    let count = 0;

    app.increment = function () {
        count = count + 1;
    };

        app.getCount = function () {
            return count;
        };
    return app;

}(window.app || {}));




