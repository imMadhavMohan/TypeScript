// Object declaration
var Person = {
    name: 'Madhav', age: 23, city: 'Agra'
};
console.log(Person);
function printData(person) {
    console.log(person.name, person.age, person.city);
}
printData(Person);
// arr of Object
var student = [{ name: 'MohanRam', age: 23 }, { name: 'Mohan', age: 23 }, { name: 'Madhav', age: 22 }, { name: 'Raman', age: 22 }, { name: 'Ramam', age: 26 }, { name: 'Hari', age: 26 }];
console.log(student[1].name, student[1].age);
console.log(student[1]['age']);
console.log(student[1].age);
var groupBy = function (student, prop) {
    student.reduce(function (store, currVal) {
        var key = currVal[prop];
        if (!store[key])
            store[key] = []; // no entry present 'age' => []
        store[key].push(currVal);
        return store;
    }, {});
};
console.log(groupBy(student, 'age'));
