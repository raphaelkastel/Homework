window.app = window.app || {};
window.app = (function (app) {
    'use strict';

   

        app.newCount = function createCount() {
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

