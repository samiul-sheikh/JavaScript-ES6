// JSON
const person = {
    name: 'sami',
    age: 26,
    district: 'Dhaka',
    position: 'developer',
    salary: 100000
}
// convert object into JSON
// console.log(JSON.stringify(person));

const data = JSON.stringify(person);
// convert JSON into object
const dataParsed = JSON.parse(data);
console.log(dataParsed.name);


// API fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));


// local storage
// localStorage.setItem('userId', 30491);
const userId = localStorage.getItem('userId');
console.log(userId);

// without converting it could not work
// localStorage.setItem('person', person);
// const storedPerson = localStorage.getItem('person');
// console.log(storedPerson);

localStorage.setItem('person', JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
console.log(storedPerson);
// for show data parse first
const parsedPerson = JSON.parse(storedPerson);
console.log(parsedPerson.age);

// show property
const keys = Object.keys(parsedPerson);
console.log(keys);

// show values
const values = Object.values(parsedPerson);
console.log(values);