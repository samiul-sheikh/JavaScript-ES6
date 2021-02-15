// const number = [3, 4, 5, 6, 7, 9];
// const output = [];

// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);


// using map
// const numbers = [3, 4, 5, 6, 7, 9];
// function square(element) {
//     return element * element;
// }
// // when pass function in map take three parameter
// numbers.map(function (element, index, array) {
//     console.log(element, index, array);
// })


// written function in various way
// function square(element) {
//     return element * element;
// }
// const square = element => element * element;
// const square = x => x * x;


// show output in an array
// const numbers = [3, 4, 5, 6, 7, 9];
// const result = numbers.map(function (element) {
//     return element * element;
// })
// console.log(result);


// using map in short way (return all elements in an array)
// const numbers = [3, 4, 5, 6, 7, 9];
// const result = numbers.map(x => x * x);
// console.log(result);


// using filter (return only the matching element)
// const numbers = [3, 4, 5, 6, 7, 9];
// const bigger = numbers.filter(x => x > 5);
// console.log(bigger);


// using find (return only the first matching element)
const numbers = [3, 4, 5, 6, 7, 9];
const isThere = numbers.find(x => x > 5);
console.log(isThere);