// Access modifier
// 1. public : by default all are public
class Person{
    Age:number ;
    public Pin: number;
    constructor(age:number, pin:number){
        this.Age = age
        this.Pin = pin
    }
}

const Madhav:Person = new Person(23,282005)
console.log(Madhav)

// 2. private 
class Person2{
    private Pin:number;
    fname: string;
    constructor(pin:number, name:string){
        this.Pin = pin
        this.fname = name
    }
    display():void{
        console.log(`Private Pin is: ${this.Pin} & Public Full name: ${this.fname}`)
    }
}

const Mukund:Person2 = new Person2(1234, 'Mohan_Mukund')
console.log(Mukund)
console.log(Mukund.display())
// console.log(Mukund.Pin) error

// 3. Protected: can be accessed by child
