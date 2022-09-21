// Static Typescript class - can be accessed by class name
class Circle{
    static Pi:number = 3.14
    radii:number;
    constructor(radii:number){
        this.radii = radii
    }
}

const myCircle: Circle = new Circle(4)
let myArea = Circle.Pi*myCircle.radii**2
console.log(myArea)