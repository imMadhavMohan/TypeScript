// Typescript supports only single & multilevel inheritance
// Multilevel
class Car{
    name: string;
    color: string;
    constructor(name:string, model:string){
        this.name = name
        this.color = name
    }
}

class Bmw extends Car{
    model: string;
    color: string;
    constructor(model, name, color){
        super(name,color)
        this.model = model
        this.color = color
    }
    display():void{
        console.log(this.model,this.name,this.color)
    }
}

class BmwSeries extends Bmw{
    isUpdated: boolean;
    constructor(bool, model, name, color){
        super(model, name, color)
        this.isUpdated = bool
    }
    display():void{
        console.log(this.model,this.name,this.color,this.isUpdated)
    }
}

const mycar:BmwSeries = new BmwSeries(true,'v-50','Bmw-s','orange')
mycar.display()