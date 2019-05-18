class Rocket{
    code:string;
    thrusters:Thruster[]=new Array();
    totalMaxSpeed: number=0;
    totalSpeed: number=0;
    //aqui la velocidad total? y crear funcion que sume las potencias?

    constructor(code:string){
        this.code=code;
    }
    
    
    addThruster(thruster:Thruster):void{
        this.thrusters.push(thruster);
    }

    accelerate(i):void{
        //if(this.totalSpeed<this.totalMaxSpeed){
            this.thrusters[i].power+=10
        //}
        
        //console.log(this.thrusters[i].power);
    }

    slowing(i):void{
        //if(this.totalSpeed>=10){
            this.thrusters[i].power-=10
        //}
        //console.log(this.thrusters[i].power);
    }

    calculalteTotalSpeed():void{
       console.log(this.thrusters.length);
        
    }

}