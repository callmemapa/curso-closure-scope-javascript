var hello = 'Hello';
var hello = 'Hello 1';
let world = 'Hello World';
const helloWorld = 'Hello World';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

// Malas prácticas
const helloWorld = () => {
    globalVar = 'im global';
}

helloWorld();
console.log(globalVar);