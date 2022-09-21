// Union type means a Var- Can accept more than 1 type of values
function add(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b
    if (typeof a === 'string' && typeof b === 'string')
        return a.concat(b)
    // throw new Error('Type mismatch')
}

console.log(add(4,5))
console.log(add('Madhav',' Mohan'))
console.log(add('Madhav', 9)) // Undefined

// Use of Union
function addUs(a: number|string, b: number|string) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b
    if (typeof a === 'string' && typeof b === 'string')
        return a.concat(b)
    // throw new Error('Type mismatch')
}
console.log(addUs('Madhav',' Mukund'))
console.log(addUs(4,5))

// With var
let res: string|number ;
// res = true ; not allowed
// console.log(res)
res = 'RamanSharma'
console.log(res)

