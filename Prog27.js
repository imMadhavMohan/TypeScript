// Set used to store unique values
var vowel = new Set([7, 8, 9]);
vowel.add(1);
vowel.add(2);
vowel.add(3);
vowel.add(4);
vowel.add(5).add(6);
console.log(vowel);
console.log(vowel.size);
vowel["delete"](2);
console.log(vowel);
console.log(vowel.has(2));
console.log(vowel.has(3));
console.log(vowel["delete"](4));
console.log(vowel);
// ForEach doesn't return 
vowel.forEach(function (e, i, arr) { return arr[i] = e * 2; });
console.log(vowel);
// map() returns modifies arr/set/map
function dble(e) {
    return e * 2;
}
var ans = vowel.map(dble);
console.log(ans);
vowel.clear();
