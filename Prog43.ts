// Generic Class & interface
interface PersonalInfo<T,U>{
    age: U;
    printFullname(): void;
}

class Person implements PersonalInfo<string,number>{
    fname:string;
    lname:string;
    age:number;
    constructor(fname:string, lname:string, age:number){
        this.fname = fname
        this.lname = lname  
        this.age = age      
    }    
    printFullname(): void {
        console.log(`${this.fname}, ${this.lname}, ${this.age}`)
    }
}

let obj:Person = new Person('Madhav', 'Mohan', 23)
obj.printFullname()