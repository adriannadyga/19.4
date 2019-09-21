//zadanie 1
const hello = "Hello";
const world = "World";

const welcome = `${hello} ${world}`;
console.log(welcome);

//zadanie 2
const multiply = (x,y = 1) => x * y; 

multiply(2, 5);
multiply(6, 6);
multiply(5);

//zadanie 3
const average = (...arguments) => {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum+= arguments[i];
    }
    console.log(sum/arguments.length);
  }

average(1);
average(1, 3);
average(1, 3, 6, 6);

//zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

average(...grades);

//zadanie 5
const names = [1, 4, 'Iwona', false, 'Nowak']
const [first, second, firstname, fourth, lastname] = names;
console.log(firstname, lastname);