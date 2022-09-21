var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Super keyword
var Person = /** @class */ (function () {
    function Person(fname, Address, age) {
        this.Address = Address;
        this.fname = fname;
        this.age = age;
    }
    Person.prototype.display = function () {
        console.log(this.Address, this.age, this.fname);
    };
    return Person;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(motto) {
        var _this = _super.call(this, 'Madhav', 'Agra', 23) || this;
        _this.motto = motto;
        return _this;
    }
    Child.prototype.display = function () {
        console.log("My motto is :".concat(this.motto, " & my address: ").concat(this.Address));
    };
    return Child;
}(Person));
var Madhav = new Person('Madhav', 'Agra', 23);
Madhav.display();
var kid = new Child('never give up!');
kid.display();
