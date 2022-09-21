var Person = /** @class */ (function () {
    function Person(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    Person.prototype.printFullname = function () {
        console.log("".concat(this.fname, ", ").concat(this.lname, ", ").concat(this.age));
    };
    return Person;
}());
var obj = new Person('Madhav', 'Mohan', 23);
obj.printFullname();
