// Any & Never Type
// 1. Any- no need to explicit type the data type
var res;
res = 10.123;
console.log(res.toFixed()); // remove fraction part
var marks;
marks = 85.43;
// console.log(marks.toFixed()) Cte
// 2. Never
// When we don't want to pass anything then we use this 'never' & when we want to return the Error then we use 'never'
function raiseError(msg) {
    throw new Error(msg);
}
console.log(raiseError('Errored Request'));
