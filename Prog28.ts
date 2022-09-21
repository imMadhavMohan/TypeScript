// map , forEach, reduce, filter
let arr: string[] = ['mohan', 'rohan', 'ram', 'raman']

/*1. ForEach doesn't return any arr rather modifies the original arr directly */
// array.forEach(function(currentValue, index(opt), arr(opt)), thisValue(opt))

function upperCase(item, index, arr): void {
    arr[index] = item.toUpperCase()
}

arr.forEach(upperCase)
console.log(arr)

let sum: number = 0
function sumNum(item) {
    sum += item
}
let nums: number[] = [1, 2, 3, 4, 5]
nums.forEach(sumNum)
console.log(sum)
sum = 0
nums.forEach(e => sum += e)
console.log(sum)

/*2.map() returns modified arr*/
// array.map(function(currentValue, index(opt), arr(opt)), thisValue(opt))
nums = nums.map((e, i, arr) => arr[i] = 2 * e)
console.log(nums)

nums = nums.map(e => e * 3)
console.log(nums)

const persons = [
    { fname: "Malcom", lname: "Reynolds" },
    { fname: "Kaylee", lname: "Frye" },
    { fname: "Jayne", lname: "Cobb" }
];

persons.map(getFullName);

function getFullName(item) {
    return [item.fname, item.lname].join(" ");
}
console.log(persons)

/*3. filter- it filters out some selected element & returns arr but dont modify original arr*/
let ages: number[] = [10, 18, 21, 35, 26, 15, 16]
let adults = ages.filter(e => e >= 18)
console.log(adults)

/*4. 4.a) every() - doesnt modify array, return boolean true or flase'
array.every(function(currentValue, index(opt), arr(opt)), thisValue(opt))
The every() method executes a function for each array element.
The every() method returns true if the function returns true for all elements.*/
let isAllAdult = ages.every(e => e >= 18) // not all valuse are of Adult age
console.log(isAllAdult)

/*   4.b) some() - if some values of container passes the check */
let isMinor: boolean = ages.some(e => e < 18)
console.log(isMinor)

/*5. find()-  returns 1st occurene of element in the arr that passes
array.find(function(currentValue, index(opt), arr(opt)), thisValue(opt))*/
let find = ages.find(e => e > 30)
console.log(find)

/* 6. Reduce()- it doesn't modifies the arr and keep only those values that psses*/
// returns a single value
// array.reduce(function(total,currentValue, currentindex(opt), arr(opt)), thisValue(opt))
let myNum = [1, 2, 4, 3, 6, 1, 4, 2, 8, 12, 32, 6, 3]
// Remove duplicate store in arr & return
let uniq = myNum.reduce(function (store: number[], currVal: number): number[] {
    if (store.indexOf(currVal) === -1)  // if index not find
        store.push(currVal)
    return store
}, []) // store is an arr
console.log(uniq)

// subtract from 'salary' 3rd var
let salary: number = 21850
let expense: number[] = [12000, 300, 400, 1200]
let residual = expense.reduce((total, currVal) => total - currVal, salary) // passing total == salary
console.log(residual)

// subtract from 'first element' of arr 
residual = expense.reduce((total, currVal) => total - currVal)
console.log(residual)

// store object & return
let info = [{ fname: 'Madhav', age: 23 },
{ fname: 'Mukund', age: 20 },
{ fname: 'Mohan', age: 23 },
{ fname: 'Raman', age: 20 },
{ fname: 'Ram', age: 21 }]

let details = grouByage(info, 'age')

function grouByage(arr, prop) {
    return arr.reduce(function (store, val) { // store is storing final result
        let key = val[prop]
        if (!store[key])
            store[key] = []
        store[key].push(val)
        return store // return store
    }, {})
}

/* store = {
    k1: [],
    k2: [],
    k3: []
} */

console.log(details)

