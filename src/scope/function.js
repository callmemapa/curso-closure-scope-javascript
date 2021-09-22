const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
};

fruits();

// Error porque no está de forma global
console.log(fruit);

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    // let y = 2;
    console.log(x);
    console.log(y);
}

anotherFunction();