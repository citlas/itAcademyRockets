"use strict";
var Rocket = /** @class */ (function () {
    //aqui la velocidad total? y crear funcion que sume las potencias?
    function Rocket(code) {
        this.thrusters = new Array();
        this.code = code;
    }
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    Rocket.prototype.accelerate = function (i) {
        this.thrusters[i].power += 10;
        console.log(this.thrusters[i].power);
    };
    Rocket.prototype.slowing = function (i) {
        this.thrusters[i].power -= 10;
        console.log(this.thrusters[i].power);
    };
    return Rocket;
}());
