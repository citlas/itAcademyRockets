function createRockets(rocket1:string, rocket2:string, thrusterRocket1:number, thrusterRocket2:number) {    
    
    let displayRocketsContainer:any = document.querySelector('.displayRockets')! 
    displayRocketsContainer.textContent = "";
    let rocketsToCreate:any = [rocket1,rocket2]
    let thrustersToCreate:any = [thrusterRocket1,thrusterRocket2]
    let myRockets = []
    for (let i = 0; i < rocketsToCreate.length; ++i) {
        myRockets[i] = new Rocket(rocketsToCreate[i]);
        myRockets[i].addThruster(thrustersToCreate[i]);
     
        let rocket = document.createElement('p'); 
        displayRocketsContainer!.appendChild(rocket).textContent = `Rocket ${myRockets[i].code} has ${myRockets[i].thrusters} thrusters`
    }
}