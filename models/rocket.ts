class Rocket{
    code:string;
    thrusters:Thruster[]=new Array();
    totalSpeed!: number;
    //aqui la velocidad total? y crear funcion que sume las potencias?

    constructor(code:string){
        this.code=code;
    }
    
    
    addThruster(thruster:Thruster):void{
        this.thrusters.push(thruster);
    }

    accelerate(i):void{
        this.thrusters[i].power+=10
        console.log(this.thrusters[i].power);
    }

    slowing(i):void{
        this.thrusters[i].power-=10
        console.log(this.thrusters[i].power);
    }

}