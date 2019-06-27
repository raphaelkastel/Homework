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
        getIntrestRate: function getIntrestRate() {
            return intrestRate;
        },

        getNumOfYears: function getNumOfYears() {
            return numOfYears;
        },

        setIntrestRate: function setIntrestRate(num) {
            intrestRate = num;
        },

        setNumOfYears: function setNumOfYears(num) {
            numOfYears = num;
        },

        checkDebt: function checkDebt(num) {
            if (debt > 10000) {
                return "The don sends his regards.";
            }
            if (debt > 1000) {
                return "The mafia wants to know your location.";
            }
            return "Im sure you will pay promptly.";
        },

        futureLoanSharkDues: function futureLoanSharkDues(num) {
            debt = num;
            for (let i = 0; i < numOfYears; i++) {

                debt = debt * intrestRate;
            }

            return Math.round(debt);
        },

    };
}());

console.log(DOW.getDay(3));
console.log(DOW.getDayIndex('Sunday'));
const Mydebt = ICM;
Mydebt.setIntrestRate(1.25);
Mydebt.setNumOfYears(10);
console.log("In", Mydebt.getNumOfYears(), "years you will owe", Mydebt.futureLoanSharkDues(150), "Turkish lira to the mob.");
console.log(Mydebt.checkDebt());

