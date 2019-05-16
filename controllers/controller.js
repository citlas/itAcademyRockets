"use strict";
/**
 * no pasar parametros !!!!
separar funciones
testear antes de crear objeto
ocultar lo que no se necesita
 */
function createRockets() {
    var rocket1, rocket2;
    rocket1 = ['32WESSDS', 3];
    rocket2 = ['LDSFJA32', 6];
    var rockets = [rocket1, rocket2];
    var myRockets = [];
    for (var i = 0; i < rockets.length; ++i) {
        myRockets[i] = new Rocket(rockets[i][0]);
        for (var e = 0; e < rockets[i][1]; e++) {
            myRockets[i].addThruster(0);
        }
    }
    showRockets(myRockets);
}
function showRockets(myRockets) {
    var button = document.querySelector('#createButton');
    button.classList.add("d-none");
    var displayRocketsContainer = document.querySelector('.displayRockets');
    displayRocketsContainer.textContent = "";
    for (var i = 0; i < myRockets.length; ++i) {
        var rocket = document.createElement('p');
        rocket.classList.add("display-4", "text-secondary");
        displayRocketsContainer.appendChild(rocket).textContent = "Rocket " + myRockets[i].code + " has " + myRockets[i].thrusters.length + " thrusters";
    }
}
