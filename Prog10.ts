// function Annotation
// 1. Arrow fun
const getFullName = (fname: string, lname: string): string =>
  fname + " " + lname;
console.log(getFullName("Mohan", "Madhav"));

// 2. Ordinary fun
function getProduct(x: number, y: number): number {
  return x * y;
}
console.log(getProduct(4, 5));

// 3. Destructuring of Object in fun arg
const logPerson = (person: { name: string; age: number; state: string }) =>
  console.log(person.name, person.age, person.state);
let person: {
  name: string,
  age: number,
  state: string,
};
person = {
  name: "Mohan",
  age: 23,
  state: "Up",
};
logPerson(person);
  
// 4. fun Annotation
function CounterX(cnt:number):number{
    return ++cnt
}
// same as above
function CounterY(cnt:number){
    return ++cnt
}
console.log(CounterX(4))
console.log(CounterY(4))
