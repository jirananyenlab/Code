const x = []

let z = [1,2,3]
//x=z Assignment to constant variable.
// x = [2,3,4] Assignment to constant variable.
console.log(x);

x[0] = 2
x[1] = 3
x[2] = 4
console.log(x);

console.log(typeof x);
x.length === 0
console.log(x.length===0)
console.log(x.join('')==='')
console.log(x[0]); //undefinde
console.log(x);

let y
console.log(y||[]); //[]
console.log(y?.[0]); //กรณีที่ไม่ประกาศว่าเป็น empty จะไม่ error และได่เป็น undefinde
console.log(y??[]); //[]


