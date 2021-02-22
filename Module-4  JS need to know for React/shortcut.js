const money = 200;
let food;
if (money > 100) {
    food = 'burger';
}
else {
    food = 'ice cream';
}
console.log(food);

// ternary
// condition ? true value : false value
const moneyUs = 50;
let food2 = moneyUs > 100 ? 'burger' : 'ice cream';
console.log(food2);



// another example
const active = true;
let jsClass;
if (active === true) {
    jsClass = 'active';
}
else {
    jsClass = 'inactive';
}
console.log(jsClass);

// ternary
// const jsClass = active === true ? 'active' : 'inactive';
// too shortcut
const jsClass2 = active ? 'active' : 'inactive';
console.log(jsClass2);


// function call shortcut alternative
// active ? displayUser() : hideUser()

// active && displayUser()
// active || displayUser()

// using and if true execute next value and if false does not execute next value
const x = active && 5;
// using not if false execute next value and if true does not execute next value
const y = active || 10;

console.log(x);
console.log(y);



// string to number
// when add a + sign before string it shows number
const number = +'50';
console.log(number);

// number to string
const numText = 45 + '';
console.log(numText);



// default parameter 1st way
function add(num1, num2 = 10) {
    return num1 + num2;
}
const result = add(50);
console.log(result);

// default parameter 2nd way
function sub(num1, num2) {
    num2 = num2 || 5;
    return num1 + num2;
}
const result2 = sub(50);
console.log(result2);