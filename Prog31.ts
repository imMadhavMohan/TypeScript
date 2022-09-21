// Super keyword
class Person{
    fname: string;
    protected Address: string;
    age: number;
    constructor(fname:string, Address:string, age:number){
        this.Address = Address
        this.fname = fname
        this.age = age    
    }
    display():void{
        console.log(this.Address, this.age, this.fname)
    }
}

class Child extends Person{
    motto:string;
    constructor(motto:string){
       super('Madhav', 'Agra', 23) 
       this.motto = motto
    }
    display(): void { // Protected : ${this.Address}
        console.log(`My motto is :${this.motto} & my address: ${this.Address}`)
    }
}

const Madhav:Person = new Person('Madhav', 'Agra', 23)
Madhav.display()

const kid: Child = new Child('never give up!')
kid.display()