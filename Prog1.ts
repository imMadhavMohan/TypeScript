// Hello World
function Greet(person){
    return 'Hello '+ person
}

let message: string = 'Hello, TypeScript!';

let heading = document.createElement('h1');
heading.textContent = message;

document.body.appendChild(heading);

console.log(Greet('Mukund'))
console.log(message)