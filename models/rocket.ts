class Rocket{
    code:string;
    thrusters:Thruster[]=new Array();
    //aqui la velocidad total? y crear funcion que sume las potencias?

    constructor(code:string){
        this.code=code;
    }
    
    
    addThruster(thruster:Thruster):void{
        this.thrusters.push(thruster);
    }
}