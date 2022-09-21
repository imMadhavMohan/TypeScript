"use strict";
exports.__esModule = true;
var Prog38_1 = require("./Prog38");
var detail = {
    fname: 'Madhav',
    lname: 'Mohan',
    age: 23,
    street: 'Agra'
};
var city = Prog38_1.mySpace.getCity();
var age = Prog38_1.mySpace.getAge(detail.age);
var fullname = Prog38_1.mySpace.getFullname(detail.fname.concat(detail.lname));
console.log(city, age, fullname);
