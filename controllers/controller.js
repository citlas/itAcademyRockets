"use strict";
/**
 * no pasar parametros !!!!
separar funciones
testear antes de crear objeto
ocultar lo que no se necesita
 */
function createRockets() {
    var rocket1, rocket2;
    rocket1 = ['32WESSDS', [10, 30, 80]];
    rocket2 = ['LDSFJA32', [30, 40, 50, 50, 30, 10]];
    var rockets = [rocket1, rocket2];
    var myRockets = [];
    var startPower = 0;
    for (var i = 0; i < rockets.length; ++i) {
        myRockets[i] = new Rocket(rockets[i][0]);
        for (var e = 0; e < rockets[i][1].length; e++) {
            myRockets[i].addThruster(new Thruster(rockets[i][1][e], 0));
        }
    }
    showRockets(myRockets, rockets);
}
function showRockets(myRockets, rockets) {
    var button = document.querySelector('#createButton');
    button.classList.add("d-none");
    var displayRocketsContainer = document.querySelector('.displayRockets');
    displayRocketsContainer.textContent = "";
    for (var i = 0; i < myRockets.length; ++i) {
        var rocket = document.createElement('p');
        rocket.classList.add("display-4", "text-secondary");
        displayRocketsContainer.appendChild(rocket).textContent = "Rocket " + myRockets[i].code + " has " + myRockets[i].thrusters.length + " thrusters with max power " + rockets[i][1];
    }
}
