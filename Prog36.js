var Maddy = {}; // assigned a empty obj of type <Men> interface
Maddy.pin = '28005';
Maddy.lname = 'Mohan';
Maddy.fname = 'Madhav';
Maddy.age = 23;
Maddy.city = 'Agra';
console.log(Maddy);
var userName = ['Maddy', 'Sam', 'Rok', 'Joe'];
for (var i = 0; i < 4; i++)
    console.log(userName[i]);
userName.forEach(function (val, i, arr) { return console.log(arr[i]); });
