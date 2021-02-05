const person = { name: 'Nayeem Sheikh', age: 26, job: 'developer', gfName: 'Sanchita', address: 'Rangpur', phone: '01755352166', friends: ['Samiul', 'Pollob', 'Hasan', 'Forhad'] };

// show individual property which we need
const { phone, gfName, address, salary } = person;
console.log(gfName, phone, address);
console.log(gfName, phone, salary, address);


// another way
// const gfName = person.gfName;
// const phone = person.phone;
// console.log(gfName, phone);
// console.log(gfName, phone);


const complexObject = {
    name: 'abcd',
    info: {
        address: 'Dhanmondi',
        leader: 'Tiger'
    }
}
const { leader } = complexObject.info;
console.log(leader);


// show individual property which we need from array
const friends = ['ayon', 'sakib', 'niloy', 'nirjhor'];
const [firstFriend, nextFriend, ...remainingFriend] = friends;
console.log(firstFriend, nextFriend);
console.log(remainingFriend);