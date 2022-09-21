// Array follow all the properties & methods of Js
var Bikes = ['Hero', 'Tvs', 'Bmw'];
console.log(Bikes);
var num = [1, 2, 3, 4];
console.log(num);
var doubleIt = num.map(function (e) { return e * 2; });
console.log(doubleIt);
function getSum(accumulator, currVal) {
    return accumulator + currVal;
}
var sum = num.reduce(getSum, 12);
console.log(sum);
// Remove Duplicate from arr and well get arr in return
var ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
function removeDup(store, currVal) {
    if (store.indexOf(currVal) === -1)
        store.push(currVal);
    return store;
}
var uniqueAgeGroup = ageGroup.reduce(removeDup, []);
console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]
// Store Mixed type Val
var mixGrade = ['Mohan', 12, 'BOB', 14];
console.log(mixGrade);
