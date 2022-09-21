// Interface in Ts is similar as java 
// 1. cant be instantiated
// 2. one interface can inherit other one
// 3. A class has to implement the interface
// 4. in TScript interfaces are used for typechecking

// without interface code looks comple
function getData(person:{ fname:string, lname:string,age:number }){
    return `${person.fname} ${person.lname} & age: ${person.age}`
}
let info = {fname:'Madhav',lname:'Mohan',age:23}
console.log(getData(info))

// with interface 
interface Person{
    fname: string,
    lname: string,
    age: number,
    sex?: string // Optional
}

function getInfo(person:Person){
    return `${person.fname} ${person.lname} ${person.age} ${person.sex}`
}

let maddy:Person = { // :Person is optional
    fname: 'Madhav',
    lname: 'MohanJi',
    age: 23    ,
    sex: 'M'  // Optional to pass
}

console.log(getInfo(maddy))


// readonly modifier cant modify again once defined
interface Student{
    fname: string,
    age: number,
    marks: number,
    class: string,
    readonly Pin: string
}
function getStud(stud:Student){
    return `${stud.fname} ${stud.class} ${stud.marks} ${stud.age} ${stud.Pin}`
}

let Madhav:Student = {
    fname : 'MaohanJi',
    age: 23,
    marks: 83,
    class: '12-A',
    Pin: '12-09-123-32'
}
console.log(getStud(Madhav))