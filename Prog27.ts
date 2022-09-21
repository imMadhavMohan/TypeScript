// Set used to store unique values
let vowel = new Set([7,8,9])
vowel.add(1)
vowel.add(2)
vowel.add(3)
vowel.add(4)
vowel.add(5).add(6)
console.log(vowel)

console.log(vowel.size)
vowel.delete(2)

console.log(vowel)

console.log(vowel.has(2))
console.log(vowel.has(3))

console.log(vowel.delete(4))
console.log(vowel)

vowel.clear()






