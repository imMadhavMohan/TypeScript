// spread operator(or rest parameter) is used for passing indefinite num of arg to a function
// A function has only one rest parameter.
// The rest parameter appears last in the parameter list.
// The type of the rest parameter is an array type.
function getTotal(str) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    var sum = 0;
    nums.forEach(function (e) { return sum += e; });
    return str + sum;
}
console.log(getTotal('sum is: ', 10, 20, 30));
console.log(getTotal('sum is: ', 10, 20, 30, 40, 50));
