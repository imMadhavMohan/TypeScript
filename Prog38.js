"use strict";
// namespace : provides us a region where we can define the interface, var, fun(), {class, obj of same type} etc
// help us to avoid naming collison, also called internal module
// 'namespace' keyword to declare namespace, and export to declare members(class, fun, interface, obj)
exports.__esModule = true;
exports.mySpace = void 0;
// we'll export this namspace some Otherfile named: Prog39.ts
var mySpace;
(function (mySpace) {
    function getFullname(name) {
        return name;
    }
    mySpace.getFullname = getFullname;
    var city = 'Agra'; // dont use export in var
    function getCity() {
        return city;
    }
    mySpace.getCity = getCity;
    function getAge(age) {
        return age;
    }
    mySpace.getAge = getAge;
})(mySpace = exports.mySpace || (exports.mySpace = {}));
var expSpace = {
    fname: 'Mukund',
    lname: ' Mohan',
    age: 23,
    street: 'Radhav Vihar'
};
var fullName = mySpace.getFullname(expSpace.fname.concat(expSpace.lname));
console.log(fullName, expSpace.age, expSpace.street);
