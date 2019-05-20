"use strict";
var Rocket = /** @class */ (function () {
    //aqui la velocidad total? y crear funcion que sume las potencias?
    function Rocket(code) {
        this.thrusters = new Array();
        this.totalMaxSpeed = 0;
        this.totalSpeed = 0;
        this.code = code;
    }
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    Rocket.prototype.accelerate = function (i) {
        //if(this.totalSpeed<this.totalMaxSpeed){
        this.thrusters[i].power += 10;
        this.totalSpeed += 10;
        //}
        //console.log(this.thrusters[i].power);
    };
    Rocket.prototype.slowing = function (i) {
        //if(this.totalSpeed>=10){
        this.thrusters[i].power -= 10;
        this.totalSpeed -= 10;
        //}
        //console.log(this.thrusters[i].power);
    };
    Rocket.prototype.calculalteTotalSpeed = function () {
        console.log(this.thrusters.length);
    };
    return Rocket;
}());
