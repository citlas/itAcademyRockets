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
            //myRockets[i].accelerate(e)
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
        rocket.classList.add("display-4", "text-secondary");

        
            displayRocketsContainer!.appendChild(rocket).textContent = `Rocket ${myRockets[i].code} has ${myRockets[i].thrusters.length} thrusters with max power ${rockets[i][1]}` 
        
       
    }
}