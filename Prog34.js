// Interface in Ts is similar as java 
// 1. cant be instantiated
// 2. one interface can inherit other one
// 3. A class has to implement the interface
// 4. in TScript interfaces are used for typechecking
// without interface code looks comple
function getData(person) {
    return "".concat(person.fname, " ").concat(person.lname, " & age: ").concat(person.age);
}
var info = { fname: 'Madhav', lname: 'Mohan', age: 23 };
console.log(getData(info));
function getInfo(person) {
    return "".concat(person.fname, " ").concat(person.lname, " ").concat(person.age, " ").concat(person.sex);
}
var maddy = {
    fname: 'Madhav',
    lname: 'MohanJi',
    age: 23,
    sex: 'M' // Optional to pass
};
console.log(getInfo(maddy));
function getStud(stud) {
    return "".concat(stud.fname, " ").concat(stud["class"], " ").concat(stud.marks, " ").concat(stud.age, " ").concat(stud.Pin);
}
var Madhav = {
    fname: 'MaohanJi',
    age: 23,
    marks: 83,
    "class": '12-A',
    Pin: '12-09-123-32'
};
console.log(getStud(Madhav));
