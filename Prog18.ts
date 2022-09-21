// Type aliases 

type num = number // num ~ number
type str = string // str ~ string
type alphanum = str|num // can store str or num

let age:num = 23
let fname:str = 'Madhav_Mohan'
console.log(fname,age)

// Aliases for Union type
let msg: alphanum = 'Hi madhav how\'re you!, prog is held @'+9+'Sept';
let input:alphanum = 1999
console.log(msg,input)
