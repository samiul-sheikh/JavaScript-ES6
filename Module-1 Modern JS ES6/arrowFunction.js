/*function doubleIt(num) {
    return num * 2;
}
const result = doubleIt(5);
console.log(result);
*/

// 2nd way
/*
function expression = function deceleration
const doubleIt = function myFunction(num) {
    return num * 2;
}
const result = doubleIt(5);
console.log(result);
*/

// single parameter
const doubleIt = num => num * 2;
const result = doubleIt(50);
console.log(result);

// double parameter
const add = (x, y) => x + y;
const addition = add(50, 70);
console.log(addition);

// no parameter
const giveMe = () => 10;
const result2 = giveMe();
console.log(result2);

// if more than one statement in arrowfunction return manually
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const value = sum * diff;
    return value;
}
const result3 = doMath(7, 5);
console.log(result3);