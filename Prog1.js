function Greet(person) {
    return 'Hello ' + person;
}
var message = 'Hello, TypeScript!';
var heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);
console.log(Greet('Mukund'));
console.log(message);
