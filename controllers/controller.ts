
let myRockets:any=[]

/************************** CREATE *********************************** */
function createRocket(rocketToCreate:any,rocketNumber:number){
    let myRocket:any
    const startPower = 0
    myRocket = new Rocket(rocketToCreate[0]);
    

    for (let i = 0; i < rocketToCreate[1].length; i++) {
        myRocket.addThruster(new Thruster(rocketToCreate[1][i],startPower))
    }
    myRockets.push(myRocket)
    calculateMaxSpeed(myRocket)
    
    showRocket(myRocket,rocketNumber,rocketToCreate); 
}

function createRocket1() {   
    let rocket1:any
    rocket1=['32WESSDS',[10,30,80]]
    createRocket(rocket1,1)
}

function createRocket2() {   
    let rocket2:any
    rocket2=['LDSFJA32',[30,40,50,50,30,10]]
    createRocket(rocket2,2)
}

/************************** SHOW *********************************** */


function showRocket(myRocket:any,rocketnumber:number,whichRocket:any){
    let displayThisRocket = '.rocketCreated'+rocketnumber
    let hideThisButton = '#createRocket'+rocketnumber
    let hideButton:any = document.querySelector(hideThisButton)! 
    hideButton.classList.add("d-none");
    
    //show action buttons
    let showActionButtons:any = document.querySelector('.rocketActions')! 
    showActionButtons.classList.remove("d-none");

    console.log(rocketnumber);

    if(rocketnumber==1){
        var listToRemove = document.querySelectorAll(".rocket1Action");
        listToRemove.forEach(function(element) {
        element.classList.remove("d-none");
});
        // document.querySelectorAll('.rocket1Action')!.classList.remove("d-none");
    } else if (rocketnumber==2){
        var listToRemove = document.querySelectorAll(".rocket2Action");
        listToRemove.forEach(function(element) {
        element.classList.remove("d-none");
});

        // document.querySelector('.rocket2Action')!.classList.remove("d-none");
    }

    let displayRocketContainer:any = document.querySelector(displayThisRocket)! 
    displayRocketContainer.textContent = "";
    displayRocketContainer!.textContent = `Rocket ${myRocket.code} has ${myRocket.thrusters.length} thrusters with max power ${whichRocket[1]}`    
}


function calculateCurrentSpeed(myRockets:any,index:number){
    let theIndex = 1+index
    let currentSpeedClass = '.currentSpeed'+theIndex
    let additionalInfo = document.querySelector(currentSpeedClass) 
    additionalInfo!.textContent = myRockets[index].code + ' current speed is ' + myRockets[index].totalSpeed
}


function calculateMaxSpeed(myRocket:any){
    for(var i=0;i<myRocket.thrusters.length;i++) {
        myRocket.totalMaxSpeed += myRocket.thrusters[i].maxPower
    }
}

/************************** ACCELERATE *********************************** */

function accelerateRocket(myRocket:any){
    for(var i=0;i<myRocket.thrusters.length;i++) {
        if (myRocket.thrusters[i].power<myRocket.thrusters[i].maxPower){
            myRocket.accelerate(i)
        } else {
            console.log(myRocket.code + ' ha llegado a la maxima potencia en su propulsor ' + myRocket.thrusters[i] )
        }
    }
    if(myRocket.totalMaxSpeed==myRocket.totalSpeed){
        alert(`ya has llegado al limite de pontencia del rocket ${myRocket.code}`)
    }
}


function accelerateRocket1(){
    accelerateRocket(myRockets[0])
    calculateCurrentSpeed(myRockets,0)
}

function accelerateRocket2(){
    accelerateRocket(myRockets[1])
    calculateCurrentSpeed(myRockets,1)
}

/************************** BRAKE *********************************** */

function brakeRocket(myRocket:any){ 
    for (let i = 0; i < myRocket.thrusters.length; i++) {
        if (myRocket.thrusters[i].power>=10){
            myRocket.slowing(i) 
        } else {
            console.log(myRocket.code + ' ha frenado completmente su propulsor ' + myRocket.thrusters[i])
        }
    }
    if(myRocket.totalSpeed==0){
        alert(`ya has llegado al limite de pontencia del rocket ${myRockets.code}`)
    }
}


function brakeRocket1(){ 
    brakeRocket(myRockets[0])
    calculateCurrentSpeed(myRockets,0)
}

function brakeRocket2(){ 
    brakeRocket(myRockets[1])
    calculateCurrentSpeed(myRockets,1)
}

/************************** PRINT *********************************** */

function printRocket(rocketNumber:number){
    let iconId = `.rocket${rocketNumber}icon` 
    document.querySelector(iconId)!.classList.remove("d-none");
    document.querySelector(iconId)!.classList.add("initialRocket");
    setTimeout(function () {
        document.querySelector(iconId)!.classList.add("moveRocket");
    }, 500);
}

function printRocket1(){
    printRocket(1)
}

function printRocket2(){
    printRocket(2)
}

function printAllRockets() {
    for (let index = 1; index < myRockets.length+1; index++) {
        let iconId = `.rocket${index}icon` 
        document.querySelector(iconId)!.classList.remove("moveRocket");
        printRocket(index);   
    }
}