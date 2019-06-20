'use strict';

const letters = ['a', 'b', 'c', 'd'];
const mixed = ['a', 'B', 'c', 'D'];
const letters2 = ['A', 'B', 'C', 'D'];
console.log(myevery(letters2, UpperCase));
console.log(myevery(letters, LowerCase));
console.log(myevery(mixed, LowerCase));
console.log(letters.every(LowerCase));
console.log(letters2.every(UpperCase));
console.log(mixed.every(UpperCase));
console.log(some(mixed, LowerCase));
console.log(some(letters2, LowerCase));
console.log(mixed.some(LowerCase));
console.log(letters2.some(LowerCase));
ifOnly(letters, LowerCase, discrimination);
mixed.filter(LowerCase).forEach(discrimination);

function discrimination() {

    console.log("discriminated");
}

function ifOnly(array, test, action) {

    for (let i = 0; i < array.length; i++) {
        if (test(array[i])) {
            action(array[i]);
        }
    }
}

function some(array, action) {

    for (let i = 0; i < array.length; i++) {
        if (action(array[i])) {
            return true;
        }
    }

    return false;
}

function myevery(array, action) {

    for (let i = 0; i < array.length; i++) {
        if (!action(array[i])) {
            return false;
        }
    }

    return true;
}

function LowerCase(letter) {
    if (letter !== letter.toUpperCase()) {
        return true;
    }

    return false;
}

function UpperCase(letter) {
    if (letter === letter.toUpperCase()) {
        return true;
    }

    return false;
}
