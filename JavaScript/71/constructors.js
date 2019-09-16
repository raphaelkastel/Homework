(function () {
    'use strict';

    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`Now going at speed ${this.speed}`);
    };
    Vehicle.prototype.print = function () {
        console.log(this.color, this.speed);
    };

    function Plane(color) {
        this.color = color;
        this.go = function (speed) {
            this.speed = speed;
            console.log(`Now flying at speed ${this.speed}`);
        };
    }
    
    Plane.prototype = Object.create(Vehicle.prototype);
    const car = new Vehicle("Blue");
    car.go(20);
    car.print();
    const Boing47 = new Plane("White");
    Boing47.go(700);
    Boing47.print();

}());