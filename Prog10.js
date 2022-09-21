// function Annotation
// 1. Arrow fun
var getFullName = function (fname, lname) {
    return fname + " " + lname;
};
console.log(getFullName("Mohan", "Madhav"));
// 2. Ordinary fun
function getProduct(x, y) {
    return x * y;
}
console.log(getProduct(4, 5));
// 3. Destructuring of Object in fun arg
var logPerson = function (person) {
    return console.log(person.name, person.age, person.state);
};
var person;
person = {
    name: "Mohan",
    age: 23,
    state: "Up"
};
logPerson(person);
// 4. fun Annotation
function CounterX(cnt) {
    return ++cnt;
}
// same as above
function CounterY(cnt) {
    return ++cnt;
}
console.log(CounterX(4));
console.log(CounterY(4));
