// Static Typescript class
var Circle = /** @class */ (function () {
    function Circle(radii) {
        this.radii = radii;
    }
    Circle.Pi = 3.14;
    return Circle;
}());
var myCircle = new Circle(4);
var myArea = Circle.Pi * Math.pow(myCircle.radii, 2);
console.log(myArea);
