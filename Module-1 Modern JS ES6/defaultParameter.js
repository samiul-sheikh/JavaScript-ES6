// default parameter
function add(num1, num2 = 15) {
    return num1 + num2;
}
const total = add(15, 2);
console.log(total);


function createUser(name, age = 18) {
    const user = {};
    user.name = name;
    user.age = age;
    return user;
}
const userDetails = createUser('sakib');
console.log(userDetails);


function add(num1, num2) {
    if (num2 == undefined) {
        num2 = 0;
    }
    return num1 + num2;
}
const total = add(15);
console.log(total);


// another way
function add(num1, num2) {
    num2 = num2 || 2;
    return num1 + num2;
}
const total = add(15);
console.log(total);