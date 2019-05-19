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
     

    //  for (var key in myRockets) {
    //     myRockets[key].totalSpeed =0
    //     for(var i=0;i<myRockets[key].thrusters.length;i++) {
    //         myRockets[key].totalSpeed += myRockets[key].thrusters[i].power
    //     }
    //      console.log(myRockets[key].code + ' speed is ' + myRockets[key].totalSpeed);
    //  }
     
//      for (let e= 0; e<myRockets.length;e++) {
//          let tempSpeed = 0
//          myRockets[e].totalSpeed = 0
//         for(var i=0;i<myRockets[e].thrusters.length;i++) {
//             tempSpeed+= myRockets[e].thrusters[i].power

//             myRockets[e].totalSpeed += tempSpeed
//         }

//         if(!showInfo){
//             console.log(myRockets[e].code + ' current speed is ' + myRockets[e].totalSpeed);
//             let additionalInfo = document.createElement('p'); 
//    document.querySelector('.displayRockets')!.appendChild(additionalInfo).textContent = myRockets[e].code + ' current speed is ' + myRockets[e].totalSpeed
   
//         }
        
//      }
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
    //calculateCurrentSpeed(myRockets,'hideInfo')
    console.log(myRockets);

    
    
    if(typeof indexToSlow == 'number'){

        //cambiar esto para que quede como el de abajo
        for (let e = 0; e < myRockets[indexToSlow].thrusters.length; e++) {
            let tempSpeed = 0
            if (myRockets[indexToSlow].thrusters[e].power<myRockets[indexToSlow].thrusters[e].maxPower){
                myRockets[indexToSlow].accelerate(e) 
                //tempSpeed+= myRockets[indexToSlow].thrusters[e].power
                //myRockets[e].totalSpeed += tempSpeed

            } else {
                console.log(myRockets[indexToSlow].code + ' ha llegado a la maxima potencia en su propulsor ' + myRockets[indexToSlow].thrusters[e])
            }
        }
    } else {


        for (var key in myRockets) {
            myRockets[key].totalSpeed =0
            for(var i=0;i<myRockets[key].thrusters.length;i++) {
                if (myRockets[key].thrusters[i].power<myRockets[key].thrusters[i].maxPower){
                    myRockets[key].accelerate(i)
                    
                } else {
                    console.log(myRockets[key].code + ' ha llegado a la maxima potencia en su propulsor ' + myRockets[key].thrusters[i] )
                }
                myRockets[key].totalSpeed += myRockets[key].thrusters[i].power
            }
             console.log(myRockets[key].code + ' speed is ' + myRockets[key].totalSpeed);
         }


        // for (let i = 0; i < myRockets.length; i++) {
        //     let tempSpeed = 0
        //     for (let e = 0; e < myRockets[i].thrusters.length; e++) {
        //         if (myRockets[i].thrusters[e].power<myRockets[i].thrusters[e].maxPower){
        //      myRockets[i].accelerate(e) 
        //      tempSpeed+= myRockets[i].thrusters[e].power
        //      myRockets[i].totalSpeed += tempSpeed
        //      } else {
        //      console.log(myRockets[i].code + ' ha llegado a la maxima potencia en su propulsor ' + myRockets[i].thrusters[e] )
        //  }
        //     }
            
        // }
    }
}

function slowingRocket(myRockets:any,indexToSlow?:number){
    if(typeof indexToSlow == 'number'){
        //console.log('slowing once ' + myRockets[indexToSlow].code);
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

function showCurentSpeedRocket(myRockets:any){
   //mostrar velocidad actual de cohetes (cero)     
 
   calculateCurrentSpeed(myRockets)
   calculateMaxSpeed(myRockets)
   addRocketActionInfo('accelerating',3,myRockets)
   accelerateRocket(myRockets)
   accelerateRocket(myRockets)
   accelerateRocket(myRockets)
   calculateCurrentSpeed(myRockets)
   addRocketActionInfo('slowing',5,myRockets,0)
   /*slowingRocket(myRockets,0)
   slowingRocket(myRockets,0)
   slowingRocket(myRockets,0)
   slowingRocket(myRockets,0)
   slowingRocket(myRockets,0)
   addRocketActionInfo('accelerating',7,myRockets,1)
   accelerateRocket(myRockets,1)
   accelerateRocket(myRockets,1)
   accelerateRocket(myRockets,1)
   accelerateRocket(myRockets,1)
   accelerateRocket(myRockets,1)
   accelerateRocket(myRockets,1)
   accelerateRocket(myRockets,1)
   calculateCurrentSpeed(myRockets)*/
   

   
    
   //acelerar 3 veces

   //mostrar velocidad actual

   //frenar 5 veces con el primero, acelerar 7 con el segundo

   //mostrar velocidad actual

   //acelerar 15 veces con los dos cohetes

   //mostrar velocidad actual


    // if (myRockets[i].thrusters[e].power<myRockets[i].thrusters[e].maxPower){
    //     myRockets[i].accelerate(e) 
    //     } else {
    //     alert('has llegado a la maxima potencia')
    // }
    //console.log(myRockets[i].thrusters[e].power);
            
}