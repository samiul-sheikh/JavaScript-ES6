// Truthy => '0', " ", [], {}
// Falsy => 0, "", undefined, null, NaN, false


// all numbers "0" are by default true without 0
/*
const age = 0;
if (age) {
    console.log("condition true");
}
else {
    console.log("condition false")
}
*/


// any string name/name.length/" " by default true if empty string false 
// const name = 'samiul';
// if undefined anything by default false
// let name;
let name = 0;
// console.log(name);

if (name || name == 0) {
    console.log("condition true");
}
else {
    console.log("condition false")
}