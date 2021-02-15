const students = [
    { id: 21, name: 'Samiul' },
    { id: 31, name: 'Mafruha' },
    { id: 41, name: 'Pollob' },
    { id: 51, name: 'Qonali' }
]

const names = students.map(s => s.name);
console.log(names);
const ids = students.map(s => s.id);
console.log(ids);
const bigger = students.filter(s => s.id > 30);
console.log(bigger);
const bigger1 = students.find(s => s.id > 30);
console.log(bigger1);