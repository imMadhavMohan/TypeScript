// Array follow all the properties & methods of Js

let Bikes: string[] = ['Hero','Tvs','Bmw']
console.log(Bikes)

let num: number[] = [1,2,3,4];
console.log(num)

let doubleIt = num.map(e => e* 2);
console.log(doubleIt);

function getSum(accumulator,currVal){
    return accumulator+currVal
}

let sum = num.reduce(getSum,12)
console.log(sum)

// Remove Duplicate from arr and well get arr in return
let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

function removeDup(store, currVal){
    if(store.indexOf(currVal)===-1)
        store.push(currVal)
    return store
}
let uniqueAgeGroup = ageGroup.reduce(removeDup, []);

console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]

// Store Mixed type Val
let mixGrade: (string|number)[] = ['Mohan',12,'BOB',14]
console.log(mixGrade)