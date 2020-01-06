//I dug up a worm for fishing. It's the end of the line for him.
(function () {
    'use strict';

    let bank = {
        accountId: 1,
        balance: 0,
    };

    let bank2 = {
        accountId: 2,
        balance: 0,
    };

    function transaction(value) {
        this.balance += value;
        console.log(this.accountId, this.balance);
    }

    transaction.call(bank, 100);
    transaction.call(bank2, 100);
    transaction.call(bank, -100);

}());