// Access modifier
// 1. public : by default all are public
var Person = /** @class */ (function () {
    function Person(age, pin) {
        this.Age = age;
        this.Pin = pin;
    }
    return Person;
}());
var Madhav = new Person(23, 282005);
console.log(Madhav);
// 2. private 
var Person2 = /** @class */ (function () {
    function Person2(pin, name) {
        this.Pin = pin;
        this.fname = name;
    }
    Person2.prototype.display = function () {
        console.log("Private Pin is: ".concat(this.Pin, " & Public Full name: ").concat(this.fname));
    };
    return Person2;
}());
var Mukund = new Person2(1234, 'Mohan_Mukund');
console.log(Mukund);
console.log(Mukund.display());
// console.log(Mukund.Pin) error
// 3. Protected: can be accessed by child
