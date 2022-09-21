// spread operator(or rest parameter) is used for passing indefinite num of arg to a function
// A function has only one rest parameter.
// The rest parameter appears last in the parameter list.
// The type of the rest parameter is an array type.

type alphnum = number|string

function getTotal(str: string, ...nums: number[]): alphnum {
    let sum: number = 0
    nums.forEach(e => sum += e)
    return str+sum
}

console.log(getTotal('sum is: ' ,10,20,30))
console.log(getTotal('sum is: ' ,10,20,30,40,50))