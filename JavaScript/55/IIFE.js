const DOW = (function () {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday'];

    return {

        getDay: function getDay(index) {
            return days[index - 1];
        },

        getDayIndex: function (name) {
            for (let i = 0; i < days.length; i++) {
                if (days[i] === name) {
                    return i + 1;
                }
            }

            return 'No such day';
        }
    };
}());

const ICM = (function () {
    'use strict';
    //Time to get very deeply in debt!

    let intrestRate = 0;
    let numOfYears = 0;
    let debt = 0;

    return {
        setIntrestRate: function setIntrestRate(num) {
            intrestRate = num;
        },

        setNumOfYears: function setNumOfYears(num) {
            numOfYears = num;
        },

        futureLoanSharkDues: function futureLoanSharkDues(num) {
            debt = num;
            for (let i = 0; i < numOfYears; i++) {

                debt = debt * intrestRate;
            }
            return debt;
        },

    };
}());

console.log(DOW.getDay(3));
console.log(DOW.getDayIndex('Sunday'));
const Mydebt = ICM;
Mydebt.setIntrestRate(1.25);
Mydebt.setNumOfYears(10);
console.log(Mydebt.futureLoanSharkDues(100));