(function () {
    'use strict';

    class Vehicle {
        constructor(color) {
            this.color = color;
        }

        go(speed) {
            this.speed = speed;
            console.log(`Now going at speed ${this.speed}`);
        }

        print() {
            console.log(this.color, this.speed);
        }
    }

    class Plane extends Vehicle {
        constructor(color) {
            super(color);
        }

        go(speed) {
            this.speed = speed;
            console.log(`Now flying at speed ${this.speed}`);
        }
    }

    const e = new Vehicle('blue');
    const e2 = new Plane('green');
    e.go(50);
    e2.go(700)
    e.print();
    e2.print();
}());