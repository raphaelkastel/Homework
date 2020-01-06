// You know it's getting cold when a politician's hands are in his own pockets.
window.myApp = window.myApp || {};
window.myApp.Utils = (function (Utils) {
    'use strict';

    Utils.stringCaseInsensitiveEquals = function stringCaseInsensitiveEquals(string1, string2) {
        if (string1.toUpperCase() === string2.toUpperCase()) {
            return true;
        }
        return false;
    };

    return Utils;
}(window.myApp.Utils || {}));
