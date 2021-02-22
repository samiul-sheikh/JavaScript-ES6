// variable: let, const
let money = 20;
money = 12;

const name = 'Sobhani';
let isConfident = true;


// declare object
const person = {
    name: 'mafruha',
    age: 25,
    city: 'Rangpur'
}


// making string for dynamic values using template string
const statement = `this person ${name} with age ${person.age}`
console.log(statement);


// condition
if (money > 20 && age >= 25) {

}
else {

}


// array (multiple things)
const numbers = [10, 20, 30, 40];
const friends = ['urmi', 'tumpa', 'nisa'];
const products = [{ name: 'laptop' price: 500 }, { name: 'mobile', price: 100 }];


// loop: for, while
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
}


// function: regular, arrow
// regular
function add(num1, num2) {
    return num1 + num2;
}
const result = add(20, 30);

// arrow
const fiveTimes = num => num * 5;
const sub = (num1, num2) => num1 - num2;
// multiple line arrow function
const doMath = (x, y) => {
    const sum = x + y;
    return sum * 2;
}