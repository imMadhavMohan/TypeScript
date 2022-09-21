var myName;
myName = function (fname, lname) {
    return fname.concat(lname).toUpperCase();
};
console.log(myName('Madhav', ' Mohan'));
var Madhav = function (fname, lname, age, city) {
    return "".concat(fname, " ").concat(lname, " ").concat(age, " ").concat(city);
};
console.log(Madhav('Madhav', 'Mohan', 23, 'Agra'));
