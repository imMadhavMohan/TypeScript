// Functional Overloading
// Multiple declaration of fun with same name but overall 1 single implementation
function add(a:string, b:string):string;

function add(a:number, b:number):number;

function add(a:string, b:number):string|number;

function add(a:any, b:any):any{
    return a+b
}

console.log(add('Madhav ','Mohan'))
console.log(add('Madhav ', 9))
console.log(add(9,9))

