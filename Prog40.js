// Date Object 
// 1. create new Object
var date = new Date();
console.log(date);
var date1 = new Date('2022-09-21');
console.log(date1);
// new Date ( year, month, date, [ hour, minute, second, millisecond ])
var date2 = new Date(2022, 09, 21, 16, 30, 20, 10);
console.log(date2);
// There are many inbuilt methods we're touching only few
var date3 = new Date(2017, 09, 23, 18, 35, 20, 28);
date3.setDate(09);
date3.setFullYear(1999);
date3.setMonth(09);
date3.setHours(16);
date3.setMinutes(20);
date3.setSeconds(43);
date.setMilliseconds(32);
date3.setTime(26);
console.log(date3);
