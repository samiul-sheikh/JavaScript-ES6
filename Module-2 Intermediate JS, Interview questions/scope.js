// can not call outside of scope
// function sum(first, second) {
//     let result = first + second;
//     console.log(result);
//     return result;
// }

// const output = sum(5, 10);
// console.log(output);


// if declared globally use outside of scope
let bonus = 15;
function sum(first, second) {
    let result = first + second + bonus;
    // console.log(bonus);
    if (result > 10) {
        const mood = "fresh";
        var modeOn = "happy";
        console.log(mood);
    }
    console.log(modeOn);
    return result;
}

const output = sum(5, 10);
console.log(bonus);
console.log(output);


// before initialization if you want to get result its undefined
console.log(day);
var day = "friday";
// let day = "friday";
// see whisting