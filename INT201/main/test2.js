let a = null
console.log(a?.[0]); //undefined
console.log(a?.id); //undefined

console.log(5/0); //Infinity
console.log(5/undefined);  //NaN
console.log(5/null); //Infinity

console.log(0/5); //0
console.log(undefined/5);  //NaN
console.log(null/5); //0

console.log(undefined*5);  //NaN
console.log(null*5); //0


console.log(undefined+5);  //NaN
console.log(null-5); //-5

console.log(null+65); //65


console.log(null?.length); //undefined
console.log(undefined?.length); //undefined