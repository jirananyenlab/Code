//spread expands ขยาย
const x = [5,7,8]
const y = [...x,11,13,...x] // index 3 = 11 
console.log(y);

const z = 'today is a good day'
const m = [...z]
console.log(m); // ['t', 'o', 'd', 'a', 'y', ' ', 'i', 's', ' ', 'a', ' ', 'g', 'o', 'o', 'd',' ', 'd', 'a', 'y']
for (const i of m) {
 console.log(i);   
}

const obj = {
    firstname: "Divit",
    lastname: "Patidar",
};
const obj2 = { ...obj }; //{ firstname: 'Divit', lastname: 'Patidar'}
console.log(obj2);

const a1 = [1,2,3]
const b1 = [...a1]
console.log(a1); //[ 1, 2, 3 ]

