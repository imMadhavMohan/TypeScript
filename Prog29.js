// map() data structure in ts
var myMap = new Map();
// map.set(key,val)
myMap.set(1, 'Madhav');
myMap.set(2, 'Mukund');
myMap.set('RollNo', 1);
myMap.set('Class', '7-A');
console.log(myMap);
// map.get(key)
console.log(myMap.get('Class'));
console.log(myMap.get('RollNo'));
console.log(myMap.get(1));
// map.has(key)
console.log(myMap.has(1));
console.log(myMap.has(3));
console.log(myMap.has('RollNo'));
// map.delete(key)
myMap["delete"]('RollNo');
console.log(myMap);
// mao.size
console.log(myMap.size);
// map.clear
myMap.clear();
myMap.set('A', 1);
myMap.set('B', 2);
myMap.set('C', 3);
myMap.set('D', 4);
myMap.set('E', 5);
// forEach()
var sum = 0;
myMap.forEach(function (val, index, myMap) {
    sum += myMap[index]; // good do whatever you want
});
console.log(sum);
// map()
// myMap.map(function(val,index,myMap){
//        myMap[index].
// })
