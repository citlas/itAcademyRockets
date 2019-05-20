"use strict";
/**
 * no pasar parametros !!!!
separar funciones
testear antes de crear objeto
ocultar lo que no se necesita
 */
// function createRockets() {    
//     let rocket1:any, rocket2:any
//     rocket1=['32WESSDS',[10,30,80]]
//     rocket2=['LDSFJA32',[30,40,50,50,30,10]]
//     let rockets = [rocket1,rocket2]
//     let myRockets:any = []
//     const startPower = 0
//     for (let i = 0; i < rockets.length; ++i) {
//         myRockets[i] = new Rocket(rockets[i][0]);
//         for (let e = 0; e < rockets[i][1].length; e++) {
//             myRockets[i].addThruster(new Thruster(rockets[i][1][e],startPower))
//             console.log(myRockets[i].thrusters[e].power);
//              }
//     }
//     showRockets(myRockets, rockets);                  
// }
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
    var displayThisRocket = '.displayRocket' + rocketnumber;
    var hideThisButton = '#createRocket' + rocketnumber;
    var hideButton = document.querySelector(hideThisButton);
    hideButton.classList.add("d-none");
    var displayRocketContainer = document.querySelector(displayThisRocket);
    displayRocketContainer.textContent = "";
    var rocket = document.createElement('p');
    rocket.classList.add("text-secondary");
    displayRocketContainer.appendChild(rocket).textContent = "Rocket " + myRocket.code + " has " + myRocket.thrusters.length + " thrusters with max power " + whichRocket[1];
    //showCurentSpeedRocket(myRockets)
}
function calculateCurrentSpeed(myRockets, showInfo) {
    //calculating current speed
    console.log(myRockets);
    for (var key in myRockets) {
        var additionalInfo = document.createElement('p');
        document.querySelector('.displayRockets').appendChild(additionalInfo).textContent = myRockets[key].code + ' current speed is ' + myRockets[key].totalSpeed;
    }
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
}
function slowingRocket(myRockets, indexToSlow) {
    if (typeof indexToSlow == 'number') {
        for (var e = 0; e < myRockets[indexToSlow].thrusters.length; e++) {
            if (myRockets[indexToSlow].thrusters[e].power >= 10) {
                myRockets[indexToSlow].slowing(e);
            }
            else {
                console.log(myRockets[indexToSlow].code + ' ha frenado completmente su propulsor ' + myRockets[indexToSlow].thrusters[e]);
            }
        }
    }
    else {
        for (var i = 0; i < myRockets.length; i++) {
            for (var e = 0; e < myRockets[i].thrusters.length; e++) {
                if (myRockets[i].thrusters[e].power >= 10) {
                    myRockets[i].slowing(e);
                }
                else {
                    console.log(myRockets[i].code + ' ha frenado completmente su propulsor ' + myRockets[i].thrusters[e]);
                }
            }
        }
    }
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
