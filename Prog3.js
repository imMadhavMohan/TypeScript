// String data type
var fname = 'Madhav';
var lname = ' Mohan';
var age = 23;
// Before Es6
console.log('My name is: ' + fname + lname + '& age is: ' + age);
// after Es6
console.log("My name is: ".concat(fname + lname, " & age is: ").concat(age));
