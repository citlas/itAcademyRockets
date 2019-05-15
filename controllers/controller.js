"use strict";
function createRockets(rocket1, rocket2, thrusterRocket1, thrusterRocket2) {
    var displayRocketsContainer = document.querySelector('.displayRockets');
    displayRocketsContainer.textContent = "";
    var rocketsToCreate = [rocket1, rocket2];
    var thrustersToCreate = [thrusterRocket1, thrusterRocket2];
    var myRockets = [];
    for (var i = 0; i < rocketsToCreate.length; ++i) {
        myRockets[i] = new Rocket(rocketsToCreate[i]);
        myRockets[i].addThruster(thrustersToCreate[i]);
        var rocket = document.createElement('p');
        displayRocketsContainer.appendChild(rocket).textContent = "Rocket " + myRockets[i].code + " has " + myRockets[i].thrusters + " thrusters";
    }
}
