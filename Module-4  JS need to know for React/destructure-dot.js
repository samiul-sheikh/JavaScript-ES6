// array destructuring
// basic way
const numbers = [50, 100];
const x = numbers[0];
const y = numbers[1];
console.log(x, y);

// 2nd way
const [a, b] = [20, 40];
console.log(a, b);

// 3rd way
const ages = [30, 40, 50, 60];
const [m, n] = ages;
console.log(m, n);

// return an array
function boxing(num1) {
    return [num1, num1 + 10];
}
const box = boxing(25);
console.log(box);

// another way
function boxed(num1) {
    return [num1, num1 + 10];
}
const [box1, box2] = boxed(10);
console.log(box1, box2);



// object destructuring
const person = { name: 'Onik', age: 24 }
console.log(person.name, person.age);
console.log(person.name, person.age);

// another way(1st one is variable & value is same name object value)
const { name, age } = { id: 30491, name: 'Sami', age: 26, position: 'developer' };
console.log(name, age);
console.log(name, age);

// 2nd way
const user = { id: 30491, name: 'Sami', age: 26, position: 'developer' };
const { position } = user;
console.log(position);

// create object shortcut
const p = 35;
const q = 45;
const obj1 = { p: p, q: q };
const obj2 = { p, q }
console.log(obj1);
console.log(obj2);



// using three dots(create new array taking previous array values)
members = [2, 5, 6, 7, 8, 9];
const newMembers = [...members, 12];
console.log(newMembers);

// add values in an array
members.push(14);
console.log(members);

// destructuring using in array/object/three dot