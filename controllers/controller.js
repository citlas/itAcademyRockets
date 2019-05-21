"use strict";
/**
 * no pasar parametros !!!!
separar funciones
testear antes de crear objeto
ocultar lo que no se necesita
 */
var myRockets = [];
function createRocket1() {
    var rocket1;
    rocket1 = ['32WESSDS', [10, 30, 80]];
    var myRocket1;
    var startPower = 0;
    myRocket1 = new Rocket('32WESSDS');
    for (var i = 0; i < rocket1[1].length; i++) {
        myRocket1.addThruster(new Thruster(rocket1[1][i], startPower));
    }
    myRockets.push(myRocket1);
    calculateMaxSpeed(myRocket1);
    showRocket(myRocket1, 1, rocket1);
}
function createRocket2() {
    var rocket2;
    rocket2 = ['LDSFJA32', [30, 40, 50, 50, 30, 10]];
    var myRocket2;
    var startPower = 0;
    myRocket2 = new Rocket('LDSFJA32');
    for (var i = 0; i < rocket2[1].length; i++) {
        myRocket2.addThruster(new Thruster(rocket2[1][i], startPower));
    }
    myRockets.push(myRocket2);
    calculateMaxSpeed(myRocket2);
    showRocket(myRocket2, 2, rocket2);
}
function showRocket(myRocket, rocketnumber, whichRocket) {
    var displayThisRocket = '.rocketCreated' + rocketnumber;
    var hideThisButton = '#createRocket' + rocketnumber;
    var hideButton = document.querySelector(hideThisButton);
    hideButton.classList.add("d-none");
    var showActionButtons = document.querySelector('.rocketActions');
    showActionButtons.classList.remove("d-none");
    var displayRocketContainer = document.querySelector(displayThisRocket);
    displayRocketContainer.textContent = "";
    //let rocket = document.createElement('p'); 
    //rocket.classList.add("text-secondary");
    displayRocketContainer.textContent = "Rocket " + myRocket.code + " has " + myRocket.thrusters.length + " thrusters with max power " + whichRocket[1];
    //showCurentSpeedRocket(myRockets)
}
function calculateCurrentSpeed(myRocket, showInfo) {
    //calculating current speed
    //console.log(myRockets);
    //for (var key in myRockets) {
    console.log(myRocket);
    var currentSpeedClass = '';
    if (myRocket.code == "32WESSDS") {
        currentSpeedClass = '.currentSpeed1';
    }
    else if (myRocket.code == "LDSFJA32") {
        currentSpeedClass = '.currentSpeed2';
    }
    var additionalInfo = document.querySelector(currentSpeedClass);
    additionalInfo.textContent = myRocket.code + ' current speed is ' + myRocket.totalSpeed;
    //}
}
function calculateMaxSpeed(myRocket) {
    for (var i = 0; i < myRocket.thrusters.length; i++) {
        myRocket.totalMaxSpeed += myRocket.thrusters[i].maxPower;
    }
    console.log(myRocket.code + ' total max speed is ' + myRocket.totalMaxSpeed);
}
function accelerateRocket1() {
    console.log(myRockets);
    for (var i = 0; i < myRockets[0].thrusters.length; i++) {
        if (myRockets[0].thrusters[i].power < myRockets[0].thrusters[i].maxPower) {
            myRockets[0].accelerate(i);
        }
        else {
            console.log(myRockets[0].code + ' ha llegado a la maxima potencia en su propulsor ' + myRockets[0].thrusters[i]);
        }
    }
    console.log(myRockets[0].code + ' speed is ' + myRockets[0].totalSpeed);
    if (myRockets[0].totalMaxSpeed == myRockets[0].totalSpeed) {
        alert("ya has llegado al limite de pontencia del rocket " + myRockets[0].code);
    }
    calculateCurrentSpeed(myRockets[0]);
}
function accelerateRocket2() {
    for (var i = 0; i < myRockets[1].thrusters.length; i++) {
        if (myRockets[1].thrusters[i].power < myRockets[1].thrusters[i].maxPower) {
            myRockets[1].accelerate(i);
        }
        else {
            console.log(myRockets[1].code + ' ha llegado a la maxima potencia en su propulsor ' + myRockets[1].thrusters[i]);
        }
    }
    console.log(myRockets[1].code + ' speed is ' + myRockets[1].totalSpeed);
    if (myRockets[1].totalMaxSpeed == myRockets[1].totalSpeed) {
        alert("ya has llegado al limite de pontencia del rocket " + myRockets[1].code);
    }
    calculateCurrentSpeed(myRockets[1]);
}
function brakeRocket1() {
    for (var i = 0; i < myRockets[0].thrusters.length; i++) {
        if (myRockets[0].thrusters[i].power >= 10) {
            myRockets[0].slowing(i);
        }
        else {
            console.log(myRockets[0].code + ' ha frenado completmente su propulsor ' + myRockets[0].thrusters[i]);
        }
    }
    if (myRockets[0].totalSpeed == 0) {
        alert("ya has llegado al limite de pontencia del rocket " + myRockets[0].code);
    }
    calculateCurrentSpeed(myRockets[0]);
}
function brakeRocket2() {
    for (var i = 0; i < myRockets[1].thrusters.length; i++) {
        if (myRockets[1].thrusters[i].power >= 10) {
            myRockets[1].slowing(i);
        }
        else {
            console.log(myRockets[1].code + ' ha frenado completmente su propulsor ' + myRockets[1].thrusters[i]);
        }
    }
    if (myRockets[1].totalSpeed == 0) {
        alert("ya has llegado al limite de pontencia del rocket " + myRockets[1].code);
    }
    calculateCurrentSpeed(myRockets[1]);
}
function addRocketActionInfo(action, times, myRockets, indexToSlow) {
    if (typeof indexToSlow == 'number') {
        var additionalInfo = document.createElement('p');
        document.querySelector('.displayRockets').appendChild(additionalInfo).textContent = myRockets[indexToSlow].code + ' is ' + action + ' ' + times + ' times';
    }
    else {
        for (var i = 0; i < myRockets.length; i++) {
            var additionalInfo = document.createElement('p');
            document.querySelector('.displayRockets').appendChild(additionalInfo).textContent = myRockets[i].code + ' is ' + action + ' ' + times + ' times';
        }
    }
}
function repeatFunction(functionToRepeat, times, myRockets) {
    for (var i = 0; i < times; i++) {
        functionToRepeat();
    }
    if (myRockets) {
        calculateCurrentSpeed(myRockets);
    }
}
function printRocket1() {
    document.querySelector('.rocket1icon').classList.remove("d-none");
    document.querySelector('.rocket1icon').classList.add("initialRocket");
    setTimeout(function () {
        document.querySelector('.rocket1icon').classList.add("moveRocket");
    }, 1000);
}
function printRocket2() {
    document.querySelector('.rocket2icon').classList.remove("d-none");
    document.querySelector('.rocket2icon').classList.add("initialRocket");
    setTimeout(function () {
        document.querySelector('.rocket2icon').classList.add("moveRocket");
    }, 1000);
}
function printAllRockets() {
    document.querySelector('.rocket1icon').classList.remove("moveRocket");
    printRocket1();
    document.querySelector('.rocket2icon').classList.remove("moveRocket");
    printRocket2();
}
/*function showCurentSpeedRocket(myRockets:any){
       
 
   calculateCurrentSpeed(myRockets)
   calculateMaxSpeed(myRockets)
   
   addRocketActionInfo('accelerating',3,myRockets)
   repeatFunction(function(){accelerateRocket(myRockets)},3,myRockets)



   addRocketActionInfo('slowing',5,myRockets,0)
   repeatFunction(function(){slowingRocket(myRockets,0)},5)

   addRocketActionInfo('accelerating',7,myRockets,1)
   repeatFunction(function(){accelerateRocket(myRockets,1)},7,myRockets)
    

    addRocketActionInfo('accelerating',15,myRockets,0)
    addRocketActionInfo('accelerating',15,myRockets,1)
    repeatFunction(function(){accelerateRocket(myRockets)},15,myRockets)
    
 
}*/ 
