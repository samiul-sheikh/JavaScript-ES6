const numbers = [2, 4, 6, 8, 10];
const friends = ['nadim', 'ekra', 'nayeem'];
// array of objects
const products = [
    { id: 1, name: 'laptop', price: 500 },
    { id: 2, name: 'tablet', price: 100 },
    { id: 3, name: 'phone', price: 70 },
    { id: 4, name: 'watch', price: 50 }
];

// map (when we need to work individual property)
const names = products.map(product => product.name);
console.log(names);

// if multiple line arrow function return does not automatically
const prices = products.map(pr => {
    return pr.price;
});
console.log(prices);


// forEach (just console log not return or array)
products.forEach(product => console.log(product.name));


// filter
const cheaper = products.filter(pd => pd.price < 100);
console.log(cheaper);

// remove an item using filter
const remaining = products.filter(pd => pd.id != 3);
console.log(remaining);


// find (check it present here or not)
const hasWatch = products.find(pd => pd.name === 'watch');
console.log(hasWatch);


// learn: reduce, includes, push, pop, length, indexOf