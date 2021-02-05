const ages = [12, 14, 16, 18];
const ages2 = [13, 15, 17];
const ages3 = [22, 24, 26, 28];
// const allAges = ages.concat(ages2).concat([5]).concat(ages3);
// console.log(allAges);

// using spread operator concatenate multiple array
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);

// for array find out the maximum value
const richMan = [500, 600, 850, 1000];
const maximumValue = Math.max(...richMan);
console.log(maximumValue);