// ******************* Задача №1 *******************

let algebra;
let geography;
let physics;
let average;
let averageRounded;     //красивое огругление до десятых

algebra = 5;
geography = 2;
physics = 4;

average = ( algebra + geography + physics ) / 3 ;
averageRounded = ( Math.round (average * 10) ) / 10;

console.log(averageRounded);


// ******************* Задача №2 *******************

let name = `Ruslan`;
let message = `Привет, мир! Меня зовут ${name}.`;

console.log(message);


// ******************* Задача №3 *******************

let x = 2;
let y = 22;
let z = 0;
let result;

result = x * y + 5 * z + x - 1;

console.log(result);