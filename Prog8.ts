// typeOperator in typeScript to work with Objects

// 1. in -
let Bike: string[] = ['Hero', 'Bmw', 'Mcz', 'Tvs', 'R15']

// here we're checking arr content rather arr(Obj)'s properties
console.log('Bajaj' in Bike)
console.log('Hero' in Bike)
console.log('length' in Bike) // length is property of arr
console.log(4 in Bike) // 4th index present in arr

console.log('\n')

let info = {name:'Mohan', age:23, city:'Agra', reg:'Braj'}
console.log('name' in info)
console.log('age' in info)
console.log('city' in info)
console.log('state' in info) // 'state' is't a prop of info Obj


// 2. delete 
delete info.reg
console.log(info)

// 3. Instance of
let arr: number[] = [1, 2, 3];
console.log( arr instanceof Array ); // true

console.log(info instanceof Object)


// 3. typeOf object
console.log(typeof arr)
console.log(typeof info)
console.log(typeof 'Mohan')
console.log(typeof 2)
console.log(typeof 0x12F)

