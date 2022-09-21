// Function type definition-
// while declaring a type for function we define both part parameter & return type
let add: (x:number, y:number)=>number
add = function(x:number, y:number){
    return x+y
}
console.log(add(4,5))

let mul: (x:number, y:number)=>number = function(x:number, y:number){
    return x*y
}
console.log(mul(4,5))

let getName: (x:string, y:string)=>void = function(x:string, y:string){
    console.log(x.concat(y))
}
getName('madhav ', 'mohan')

// type Inference in functions
// sub takes by inference : (x: number, y:number) => number 
let sub = function(x:number, y:number):number{
    return x-y 
}
console.log(sub(9,5))


