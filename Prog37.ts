// interface in classes
interface Person {
    fname: string,
    lname: string,
    age: number,
    fullName():string,
    getAge(): number
} // All properties needs to be implement in class

class PersonalData implements Person{
    fname: string;
    lname: string;
    age: number;
    fullName(): string {
        return `${this.fname} ${this.lname}`
    }
    getAge(): number {
        return this.age
    }
    constructor(fname:string, lname:string, age:number){
        this.age = age
        this.lname = lname
        this.fname = fname   
    }    
}

let Raghav: PersonalData = new PersonalData('Raghav', 'Mishra', 23)

let fullName:string = Raghav.fullName()
let Age:number = Raghav.getAge()
console.log(fullName, Age)