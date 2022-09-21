// Optional Parameter
function mul(a, b, c) {
    if (typeof c !== 'undefined')
        return a * b * c;
    return a * b;
}
console.log(mul(4, 5));
console.log(mul(4, 5, 2));
