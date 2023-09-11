let a = new Array() // empty
let b = new Array(10) // lenght 10
let c =new Array(2,33,1,'testing')

console.log(a);
console.log(b);
console.log(c);

console.log(b[0]); //undefinde
b[10] =1
console.log(b); //[ <10 empty items>, 1 ]

b[2] =3
console.log(b); //[ <2 empty items>, 3, <7 empty items>, 1 ]

c[4] = 'hello'
console.log(c); //[ 2, 33, 1, 'testing', 'hello' ]
console.log(c[0]); //2
console.log(c.length); //5