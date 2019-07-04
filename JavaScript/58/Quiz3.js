window.app = window.app || {};
window.app = (function (app) {
    'use strict';
    let numOfCount = 0;

    app.newCount = function createCount() {
        let count = 0;
        numOfCount += 1;

        return {
            increment: function () {
                count = count + 1;
            },

            getCount: function () {
                return count;
            },
            getNumOfCount: function () {
                return numOfCount;
            }
        };
    };
    return app;
}(window.app || {}));

