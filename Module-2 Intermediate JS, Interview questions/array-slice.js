const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const parts = numbers.slice(2, 5);

// console.log(parts);
// console.log(numbers);

// const removed = numbers.splice(2, 3);
// console.log(removed);
// console.log(numbers);

// inject element
// const add = numbers.splice(2, 3, 55, 66);
// console.log(add);
// console.log(numbers);

// join elements
const removed = numbers.splice(2, 3, 50, 100);
const together = numbers.join(",");
console.log(together);