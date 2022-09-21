var PersonalData = /** @class */ (function () {
    function PersonalData(fname, lname, age) {
        this.age = age;
        this.lname = lname;
        this.fname = fname;
    }
    PersonalData.prototype.fullName = function () {
        return "".concat(this.fname, " ").concat(this.lname);
    };
    PersonalData.prototype.getAge = function () {
        return this.age;
    };
    return PersonalData;
}());
var Raghav = new PersonalData('Raghav', 'Mishra', 23);
var fullName = Raghav.fullName();
var Age = Raghav.getAge();
console.log(fullName, Age);
