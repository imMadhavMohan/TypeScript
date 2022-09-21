// Type Inference
// Some time Ts infer the value
// not always we need to pass explicit type annotation 

function add(x:number, y:number){
    return x+y
}

// let res: string = add(6,9) ; // CTE

let ans: number = add(9,6)

let arr = ['Mohan',23,'Up']
console.log(typeof arr) // Object
