//rest operator -> compresses บีบอัด
const [k,o,...t] = [10,20,30,40,45,90,88] 
console.log(t); //[ 30, 40 ]
console.log(...t); //30 40
console.log(k); //10

//destructuring -> ใส่ก้ามปูในตัวแปร  บอกว่า ตัวแปรทางขวา จะเก็บค่า  จะเรียงลำดับ 
//สร้างตัวแปร เก็บ elememt ในอาเรย์
const nums =[ 1,2,3,4,5]
const [a,b,c] = nums
console.log(a); // a เก็บค่า 1
console.log(b); // b เก็บค่า 2
console.log(c);
console.log();

console.log('Before : nums[0] = 1');


const n = nums //[ 1, 2, 3, 4, 5 ]  give address of nums to n
const [x] = nums//1
const [...p] = nums //[ 1, 2, 3, 4, 5 ]
const [,pj] = nums// 2
console.log(n); 
console.log(x); 
console.log(p); 
console.log(pj); 

n[0] = 999
console.log(n); //[ 999, 2, 3, 4, 5 ]
console.log(nums); //[ 999, 2, 3, 4, 5 ]

console.log();
console.log('After : nums[0] = 999');

console.log(n); //[ 999, 2, 3, 4, 5 ]
const [x2] = nums//999
const [...p2] = nums //[ 999, 2, 3, 4, 5 ]
const [,pj2] = nums// 2
console.log(x2); 
console.log(p2); 
console.log(pj2); 


console.log('-------------');

const [ , , , y , , z] = [5,10,15,20,25,30,35,40]
console.log(y); //25 [ , , a] skip index 0 ,1
console.log(z); // 30  

const [ , , , y1 , , ...z1] = [5,10,15,20,25,30,35,40]
console.log(y1); //25
console.log(z1); // [30,35,40]  ... rest ต้องอยู่ท้ายสุด  จะเหมาเป็น array  เสมอ

const [ , , , y2 , , ...z2] = [5,10,15,20,25,30]
console.log(y2); //25
console.log(z2); // [30]  ... rest ต้องอยู่ท้ายสุด  จะเหมาเป็น array  เสมอ



function sum(...args) {
    console.log(args);
    var sum =
        args.reduce(function (a, b) {
            return a + b;
       }, 0) ;
    return sum;
}
console.log("sum of numbers is : " + sum(1, 2, 3, 4, 5));
console.log("sum of numbers is : "+ sum(1, 2, 3));