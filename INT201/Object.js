//optional chaining ?.
let ava
console.log(ava?.[0])

//with object
let B1 = { id: 1}
console.log(B1?.id)
console.log(B1['id'])

let c1 
console.log(c1?.id)

//let x=1
//x===1? let y=1: let y =0 //  let y =0 Statement
// y = 0 นิพจน์
let y = x===1? 1: 0 //  console.log statement


//optional chaning ใช้กับตัวแปลที่มีความเสี่ยง
let m 
console.log(m?.[0]);
console.log(m?.m+1);

let result
result ?? 0
console.log(result);
console.log(result ?? 0);
result = 7 / 2 
console.log(result);

//nullish coalescing
let n = m ?? 0 // m !== null || m !== undefinde ? m : 0
console.log(n);

let yy = [] //array initialization with empty array
let zz ={} //object initialization with empty object

//round .5 ขึ้น 
//ceil ปัดขึ้นหมด
//floor ปัดลงหมด

const rand = Math.random()*10 +1 //Math.random() 0 - 0.9999...
console.log( Math.round(rand) );


function Ranran(max,min) { // 25 - 100
  return Math.round(Math.random()*(max-min+1)+ min) 
}
console.log(Ranran(100,25));

let str1 = 'ant'
let str2 = 'Ant'
let str3 = 'ANT'
let str4 = 'ant'
console.log(str1 === str2) //false 
'a' === 'A',console.log(str1 !== str3) //true 
'a' ==='A',console.log(str2 === str3) //false 
'A' === 'A', 'n' ==='N'
console.log(str1 === str4) //true 
'a' === 'a', 'n'==='n', 't' === 't'
console.log(str1 < str2) //false 
'a'< 'A' //97<65
console.log(str3 < str1) //true 
'A'< 'a' // 65<97
console.log('----')
console.log(str1.includes('nt')) //true
console.log(str1.includes('Nt')) //false
console.log(str1.toLowerCase().includes('Nt'.toLowerCase())) //true
console.log(str1.toUpperCase().includes('Nt'.toUpperCase())) //true
console.log(str1.includes('ant'))

//compareObject
let x = [1,3,true,'unknow' ]
let x2 = [1,3,true,'unknow' ]
let p = x // give memory Address from x to p
console.log(x===x2); //false
console.log(x===p); //true

p[0]='A'
x[0]='B'
console.log(x); //[ 'B', 3, true, 'unknow' ]
console.log(p); //[ 'B', 3, true, 'unknow' ]

let ob1 = {id:1 , title:'pen'}
let ob3 = {id:1 , title:'pen'}
let ob2 = ob1
console.log(ob1); //{ id: 1, title: 'pen' }
console.log(ob2); //{ id: 1, title: 'pen' }
ob2.id = 888
console.log(ob1); //{ id: 888, title: 'pen' }
console.log(ob2);//{ id: 888, title: 'pen' }

console.log(true || "some string"); //true
console.log(false || "some string");//some string
console.log(null || "null is a falsey value");//null is a falsey value

var _array = _array || [];
_array.push('someItem');
console.log(_array);

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { yesterday,today,tomorrow} = HIGH_TEMPERATURES