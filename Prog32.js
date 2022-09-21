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
// Typescript supports only single & multilevel inheritance
// Multilevel
var Car = /** @class */ (function () {
    function Car(name, model) {
        this.name = name;
        this.color = name;
    }
    return Car;
}());
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw(model, name, color) {
        var _this = _super.call(this, name, color) || this;
        _this.model = model;
        _this.color = color;
        return _this;
    }
    Bmw.prototype.display = function () {
        console.log(this.model, this.name, this.color);
    };
    return Bmw;
}(Car));
var BmwSeries = /** @class */ (function (_super) {
    __extends(BmwSeries, _super);
    function BmwSeries(bool, model, name, color) {
        var _this = _super.call(this, model, name, color) || this;
        _this.isUpdated = bool;
        return _this;
    }
    BmwSeries.prototype.display = function () {
        console.log(this.model, this.name, this.color, this.isUpdated);
    };
    return BmwSeries;
}(Bmw));
var mycar = new BmwSeries(true, 'v-50', 'Bmw-s', 'orange');
mycar.display();
