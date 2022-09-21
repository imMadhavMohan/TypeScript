// Function type definition-
// while declaring a type for function we define both part parameter & return type
var add;
add = function (x, y) {
    return x + y;
};
console.log(add(4, 5));
var mul = function (x, y) {
    return x * y;
};
console.log(mul(4, 5));
var getName = function (x, y) {
    console.log(x.concat(y));
};
getName('madhav ', 'mohan');
