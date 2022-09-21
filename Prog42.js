// Generics in TS
// help us to increase code reusability as we can use that component(class,interface,fun(), var, obj, etc)
// with any kind of data types rather than single data type.
// to achieve this we use <T> braces with T = types 
function sayHello(msg) {
    return msg;
}
console.log(sayHello('Hi Madhav!'));
console.log(sayHello(23));
function printItem(items) {
    return new Array().concat(items);
}
console.log(printItem([12, 14, 16, 18, 20]));
console.log(printItem(['App', 'Nap', 'Slap', 'Dap']));
function fullName(name, age) {
    console.log(name, age, typeof (name), typeof (age));
}
fullName('Madhav Mohan', 23);
var myInfo = {
    id: 1,
    fname: 'Madhav',
    lname: 'Mohan',
    age: 23,
    pin: 1234
};
console.log(myInfo);
// Generic function
function printName(name, age) {
    console.log("".concat(name, " & ").concat(age));
}
function friendInfo(name, city) {
    console.log("".concat(name, " & ").concat(city));
}
var maddyName = printName;
maddyName('Madhav_Mohan', 23);
console.log(maddyName);
var mukuInfo = friendInfo;
mukuInfo('Mukund Mohan', 'Agra');
console.log(mukuInfo);
