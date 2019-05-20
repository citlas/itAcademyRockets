/**
 * no pasar parametros !!!!
separar funciones
testear antes de crear objeto
ocultar lo que no se necesita
 */

 
 
 

function createRockets() {    
    let rocket1:any, rocket2:any
    rocket1=['32WESSDS',[10,30,80]]
    rocket2=['LDSFJA32',[30,40,50,50,30,10]]
    let rockets = [rocket1,rocket2]
    let myRockets:any = []
    const startPower = 0

    

    for (let i = 0; i < rockets.length; ++i) {
        myRockets[i] = new Rocket(rockets[i][0]);

       

        for (let e = 0; e < rockets[i][1].length; e++) {
            myRockets[i].addThruster(new Thruster(rockets[i][1][e],startPower))
            console.log(myRockets[i].thrusters[e].power);

           
             }
    }
    showRockets(myRockets, rockets);                  
}
   



function showRockets(myRockets:any,rockets:any){
    let button:any = document.querySelector('#createButton')! 
    button.classList.add("d-none");
    let displayRocketsContainer:any = document.querySelector('.displayRockets')! 
    displayRocketsContainer.textContent = "";

    for (let i = 0; i < myRockets.length; ++i) {
        let rocket = document.createElement('p'); 
        rocket.classList.add("text-secondary");

        displayRocketsContainer!.appendChild(rocket).textContent = `Rocket ${myRockets[i].code} has ${myRockets[i].thrusters.length} thrusters with max power ${rockets[i][1]}`    
    }
    showCurentSpeedRocket(myRockets)
}

function calculateCurrentSpeed(myRockets:any, showInfo?:string){
     //calculating current speed
    
     console.log(myRockets);
     for (var key in myRockets) {
        let additionalInfo = document.createElement('p'); 
        document.querySelector('.displayRockets')!.appendChild(additionalInfo).textContent = myRockets[key].code + ' current speed is ' + myRockets[key].totalSpeed
     }
     

    
}

function calculateMaxSpeed(myRockets:any){
//calculating max speed
for (var key in myRockets) {
    //console.log(myRockets[key].thrusters.length + ' ' + myRockets[key].code);
    for(var i=0;i<myRockets[key].thrusters.length;i++) {
        myRockets[key].totalMaxSpeed += myRockets[key].thrusters[i].maxPower
    }
     console.log(myRockets[key].code + ' total max speed is ' + myRockets[key].totalMaxSpeed);
 }
}

function accelerateRocket(myRockets:any, indexToSlow?:number){
    console.log(myRockets);
    if(typeof indexToSlow == 'number'){
        for (let e = 0; e < myRockets[indexToSlow].thrusters.length; e++) {
            if (myRockets[indexToSlow].thrusters[e].power<myRockets[indexToSlow].thrusters[e].maxPower){
                myRockets[indexToSlow].accelerate(e) 

            } else {
                console.log(myRockets[indexToSlow].code + ' ha llegado a la maxima potencia en su propulsor ' + myRockets[indexToSlow].thrusters[e])
            }
        }
    } else {


        for (var key in myRockets) {
            for(var i=0;i<myRockets[key].thrusters.length;i++) {
                if (myRockets[key].thrusters[i].power<myRockets[key].thrusters[i].maxPower){
                    myRockets[key].accelerate(i)
                    
                } else {
                    console.log(myRockets[key].code + ' ha llegado a la maxima potencia en su propulsor ' + myRockets[key].thrusters[i] )
                }
               
            }
             console.log(myRockets[key].code + ' speed is ' + myRockets[key].totalSpeed);
         }


        
    }
}

function slowingRocket(myRockets:any,indexToSlow?:number){
    if(typeof indexToSlow == 'number'){
        
        for (let e = 0; e < myRockets[indexToSlow].thrusters.length; e++) {
            if (myRockets[indexToSlow].thrusters[e].power>=10){
         myRockets[indexToSlow].slowing(e) 
         } else {
         console.log(myRockets[indexToSlow].code + ' ha frenado completmente su propulsor ' + myRockets[indexToSlow].thrusters[e])
     }
        }
    } else {
        for (let i = 0; i < myRockets.length; i++) {
            for (let e = 0; e < myRockets[i].thrusters.length; e++) {
                if (myRockets[i].thrusters[e].power>=10){
             myRockets[i].slowing(e) 
             } else {
             console.log(myRockets[i].code + ' ha frenado completmente su propulsor ' + myRockets[i].thrusters[e])
         }
            }
            
        }
    }
    
}

function addRocketActionInfo(action:string,times:number,myRockets:any,indexToSlow?:number){
    if(typeof indexToSlow == 'number'){
        let additionalInfo = document.createElement('p'); 
        document.querySelector('.displayRockets')!.appendChild(additionalInfo).textContent = myRockets[indexToSlow].code + ' is ' +  action + ' ' + times + ' times'
    } else {
        for (let i = 0; i<myRockets.length; i++) {
            let additionalInfo = document.createElement('p'); 
            document.querySelector('.displayRockets')!.appendChild(additionalInfo).textContent = myRockets[i].code + ' is ' +  action + ' ' + times + ' times'
             
         }
    }
    

    
}

function repeatFunction(functionToRepeat:any,times:number,myRockets?:any) {
    for (let i = 0; i < times; i++) {
        functionToRepeat();
           
     }
     if(myRockets){
        calculateCurrentSpeed(myRockets);

     }
}

function showCurentSpeedRocket(myRockets:any){
       
 
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
    
 
}