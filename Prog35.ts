// interface & function
interface getfullName{
    (fname:string,lname:string):string // Parameter & return type
}

let myName: getfullName;
myName = function(fname:string, lname:string){
    return fname.concat(lname).toUpperCase()
}
console.log(myName('Madhav',' Mohan'))

interface Person{
    (fname: string,
    lname: string,
    age: number,
    city: string):string
}

let Madhav:Person = function(fname:string, lname:string, age:number, city:string){
        return `${fname} ${lname} ${age} ${city}`     
}

console.log(Madhav('Madhav','Mohan',23,'Agra'))

