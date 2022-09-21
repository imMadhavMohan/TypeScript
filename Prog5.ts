// null && Undefined && any Data type

let fage: number = null
let fname: string = null

let fcity: string = undefined
let fpin: number = undefined

// 'any' defined the super type all data type where we can pass any value

function add(x:any, y:any){
    return x+y
}

console.log(add('A','B'))
console.log(add(1,'B'))
console.log(add(5,5))