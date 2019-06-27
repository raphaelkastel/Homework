// What is the similarity between a wife and a hand grenade? when you pull the ring off your house is gone.
window.myApp = window.myApp || {};
window.myApp.Utils = (function (Utils) {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday'];

    Utils.getDayName = function (index) {
        return days[index - 1];
    };

    Utils.getDayNumber = function (name) {
        for (let i = 0; i < days.length; i++) {
            if (days[i] === name) {
                return i + 1;
            }
        }

        return 'No such day';
    };
    return Utils;
}(window.myApp.Utils || {}));
