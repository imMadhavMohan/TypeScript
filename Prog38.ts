// namespace : provides us a region where we can define the interface, var, fun(), {class, obj of same type} etc
// help us to avoid naming collison, also called internal module
// 'namespace' keyword to declare namespace, and export to declare members(class, fun, interface, obj)
// namespace provide us a local scope for defining the method class var , thats why 
// we call it internal module also , but here we want to use it in other .ts file so we're exporting it.

// we'll export this namspace some Otherfile named: Prog39.ts
export namespace mySpace{
    export interface Person{
        fname: string;
        lname: string;
        age: number;
        street: string
    }
    export function getFullname(name:string){
        return name
    }
    const city:string = 'Agra'; // dont use export in var
    export function getCity(){
        return city
    }
    export function getAge(age:number):number{
        return age 
    }
}

let expSpace:mySpace.Person = {
    fname: 'Mukund',
    lname: ' Mohan',
    age: 23,
    street: 'Radhav Vihar'
}
let fullName:string = mySpace.getFullname(expSpace.fname.concat(expSpace.lname))
console.log(fullName, expSpace.age, expSpace.street)




