function powerOf4(n) {
    return Number.isInteger(n) && Number.isInteger(Math.log(n)/Math.log(4));  //Math.log(n) log n ฐาน e
    /*
    powerOf4(1024) // returns true
    powerOf4(44) // returns false
    */
  }
  
function divisors(integer) {
    var result = []
    for (let i = 2; i < integer; i++) {
     if(integer % i == 0 )result.push(i)
    }
   return  result.length == 0 ?  `${integer} is prime`  : result

   /*
    divisors(12); // should return [2,3,4,6]
    divisors(25); // should return [5]
    divisors(13); // should return "13 is prime"
    */
  };

function killer(suspectInfo, dead) {
    return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
/*
{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}

 return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill' 

*/
}
function waterbombs(fire, w) {
    return fire.split("Y").reduce((a, b) => a + Math.ceil(b.length / w), 0) // 0 คือ ค่าเริ่มต้น  b คือค่าปัจจุบัน a คือค่าเริ่มต้น
   
     let hydro = 0
     fire.split('Y').map(function(x){ hydro += Math.ceil(x.length / w)}) 
       return hydro 
   
   /*
   "xxYxx" and w = 3 (ความกว้างของน้ำ)     -->  2 waterbombs needed
   "xxYxx" and w = 1      -->  4
   "xxxxYxYx" and w = 5   -->  3
   "xxxxxYxYx" and w = 2  -->  5
   
   */
   
       
   /*
   xxxxxYxYx" and w = 2  -->  5
    ครั้งที่ 1 จะได้เป็น 0 + Math.ceil(b.length / w) -> 0+(5/2 = 2.5) = 2.5 ผ่าน Math.ceil ได้ 3
    ครั้งที่ 2 จะได้ a ค่าเริ่มต้เป็น 3 + (1/2 = 0.5 ) ผ่าน Math.ceil ได้ 4
    ครั้งที่ 3 จะได้ a ค่าเริ่มต้เป็น 4 + (1/2 = 0.5 ) ผ่าน Math.ceil ได้ 5
   
    "xxxxYxYx" and w = 5   -->  3
    ครั้งที่ 1 จะได้เป็น 0 + Math.ceil(b.length / w) -> 0+(4/5 = 0.8) ผ่าน Math.ceil ได้ 1
    ครั้งที่ 2 จะได้ a ค่าเริ่มต้เป็น 1 + (1/5 = 0.2 ) ผ่าน Math.ceil ได้ 2
    ครั้งที่ 3 จะได้ a ค่าเริ่มต้เป็น 2 + (1/5 = 0.2 ) ผ่าน Math.ceil ได้ 3
   
    https://borntodev.com/2022/05/06/reduce-%E0%B9%83%E0%B8%99-javascript/
     Math.ceil JavaScript คือ คำสั่ง หรือฟังก์ชันสำหรับปัดทศนิยมขึ้นให้เป็นเลขจำนวนเต็ม Math.ceil(10.1) -> 11 Math.ceil(-99.99) -> -99
      return fire.split('Y').map(x => (w-x)).length      w-x -> ลบกันไม่ได้ ผลลัพท์ที่ได้ออกมาจะเป็น ("xxxxYxYx", 4) -> 3 เพราะ 'xxxx' , 'x' , 'x'
   */
   
   }

   function transposeTwoStrings(arr){
    var result = [];
    var len = Math.max(arr[0].length, arr[1].length);
    
    for (var i = 0; i < len; i++) {
      var column = (arr[0][i] || " ") + " " + (arr[1][i] || " ");
      result.push(column);
    }
    
    return result.join("\n");

    /*
    e.g. transposeTwoStrings(['Hello','World']);
    should return
    H W  
    e o  
    l r  
    l l  
    o d
     */
  }

  function processArray(arr, callback) {
    return arr.map(callback);
    /*
    Write the processArray function, which takes an array and a callback function as parameters. 
    The callback function can be, for example, a mathematical function that will be applied on each element of this array. 
    Optionally, also write tests similar to the examples below.
    */
}

function lineupStudents(students){
  return students.reverse()
}

function isPrime(number) {
  number = 100
  let result = []
for (let i = 2; i <= number; i++) {
  for (let j = 2; j <= number; j++) {
if (i%j == 0) {
result.push(i)
    }
  }
}
return result.filter((number, arr) => arr.indexOf(number) === arr.lastIndexOf(number))  

indexOf() // ระบุตำแหน่ง 0 1 2 3 ... ในวงเล็บ ตัวแรกที่เจอ
lastIndexOf() // ระบุตำแหน่ง 0 1 2 3 ... ในวงเล็บ ตัวสุดท้ายที่เจอ

/* ถ้าค่า indexOf() เท่ากับค่า lastIndexOf() แสดงว่าตัวเลขนั้นมีจำนวนตัวเดียวในอาร์เรย์ เพราะค่า indexOf() จะแสดงค่า index แรกที่พบของตัวเลข 
และค่า lastIndexOf() จะแสดงค่า index ล่าสุดที่พบของตัวเลข เมื่อค่าเหล่านี้เท่ากันแสดงว่าตัวเลขนั้นมีจำนวนตัวเดียวในอาร์เรย์ */
 
}


function lineupStudents(students) {
  var list = students.trim().split(" ");
  
  return list = list.sort((a,b) => {
    return b.length - a.length ||
           b.localeCompare(a);
  });
  
const lineupStudents = students => students.split(' ').sort((a,b) => b.length - a.length || b.localeCompare(a));  
/*
b.length - a.length: การนำความยาวของชื่อ b ลบด้วยความยาวของชื่อ a จะให้ผลลัพธ์เป็นจำนวนเต็ม (integer) ซึ่งกล่าวคือถ้าความยาวของ b มากกว่า a จะได้ค่าบวก

array.sort(compareFunction)
points.sort(function(a, b){return a-b}); น้อย ไป มาก
points.sort(function(a, b){return b-a}); มากไปน้อย
*/
}
function scoreTest(str, right, omit, wrong){
  var grades = [right, omit, -wrong];
  return str.reduce(function(sum, score) {
  	return sum + grades[score];
  }, 0);
}
function scoreTest(str, right, omit, wrong){
  return str.reduce((total,score) => total + (score === 0 ? right : score === 1 ? omit : -wrong),0)
}
function scoreTest(str, right, omit, wrong){
return (str.filter(n => n===0).length * right) + (str.filter(n => n===1).length * omit) - (str.filter(n => n === 2).length * wrong)
}
console.log(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2))  -->  3  //because: 4*3 + 3*-1 - 3*2 = 3

function DNAStrand(dna){
let a = {'A':'T' , 'C':'G' , 'G':'C' , 'T':'A'}
return dna.split('').map( function name(v) { return a[v]}).join('')
}
console.log(DNAStrand("ATTGC"))





function explode(x){
  const haveST = (n) => typeof n === 'string';
  const make1 = (n) => {
    var b = 0
   if (typeof x[0] === 'number' && typeof x[1] === 'number') {
    b=x[0] +  x[1] ;
   } else if (typeof x[0] === 'string' && typeof x[1] === 'number'){
    b=x[1] ;
   }
   else if (typeof x[0] === 'number' &&  typeof x[1] === 'string'){
    b=x[0] ;
   }
    let a = []
    for (let i = 1; i <= b; i++) {
      a.push(x)
     }  
     return a
    } 
    
return x.every(haveST) ? 'Void!' : x.some(haveST) ?  make1(x) : make1(x)
}

function explode(x){
  const haveST = (n) => typeof n === 'string';
 let [a,b] =x
    
return x.every(haveST) ? 'Void!' : x.some(haveST) ? ( typeof a === "number" ? Array(a).fill(x): Array(b).fill(x))   : Array(a+b).fill(x)
}
console.log(explode([2,'a']))
console.log(explode(['b','a']))
console.log(explode([9,3]))
console.log(explode(['vb',3]))



function twoArePositive1(a, b, c) {
  let x = [a, b, c] 
  const notNeg = (n) => n>0
  return x.filter((n)=> notNeg(n)).length === 2 // ?  true : false

  return [...arguments].filter(i => i > 0).length === 2;
}
console.log(twoArePositive1(2, 4, -3))
console.log(twoArePositive1(-4, 6, 8))
console.log(twoArePositive1(4, -6, 9))
console.log(twoArePositive1(4, 6, 0))
console.log(twoArePositive1(-4, 6, 0))
console.log(twoArePositive1(4, 6, 10))
console.log(twoArePositive1(-14, -3, -4))


function lastManStanding(n){
let a = []
for (let i = 1; i <= n; i++) {
  a.push(i)
}  

for (let i = 1; i <= n; i++) {
   for (let i = 1; i <= n; i++) {
   a.splice(i-1 , 1)
      for (let j = 1; i <= n; i++) {
          a.splice((j-1) , 1)
   }
  }  
return a
}    
}
console.log(lastManStanding(10))

function match(candidate, job) {;
  if(!candidate.minSalary || !job.maxSalary) throw TypeError("Error")
return candidate.minSalary * .9 <= job.maxSalary
}
console.log( match(candidate ={ minSalary: 120000 } , job = { maxSalary: 130000 }))


var nato = (function() {
  var letters =  {
    "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
    "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
    "G": "Golf",   "H": "Hotel",   "I": "India",
    "J": "Juliett","K": "Kilo",    "L": "Lima",
    "M": "Mike",   "N": "November","O": "Oscar",
    "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
    "S": "Sierra", "T": "Tango",   "U": "Uniform",
    "V": "Victor", "W": "Whiskey", "X": "X-ray",
    "Y": "Yankee", "Z": "Zulu"
  }
  
  return function(word) {
    let a = ''
    for (const i of word) {
      a = a +letters[i.toUpperCase()] +" "
     
    }
    return   a.trim()
    //return word.toUpperCase().split('').map( function(l){ return letters[l] }).join(" ")
  }
})()

console.log(nato("hi"))

function getMinMax(arr){
   let a = [Math.min(...arr),Math.max(...arr)]
 return a
}
console.log(getMinMax([1]));
console.log(getMinMax([1,2]));
console.log(getMinMax([2,1]));

function getCount(str) {
   return (str.match(/[a,e,i,o,u]/g)||[]).length // ถ้า str.match มีค่าเป็น null ให้เป็น []
   
}
console.log(getCount("my pyx"));
console.log(getCount("abracadabra" ));

function reverseMessage(str) {
return  str.toLowerCase().split('').reverse().join('').split(' ').map(a=> a.slice(0,1).toUpperCase() + a.slice(1)).join(' ')
}

function reverseMessage(str) {
  return str.toLowerCase().split('').reverse().join('')
            .replace(/(^|\s+)./g, c => c.toUpperCase()); // \s+ จะเขียนเป๋น สเปซบาร์  เลยก็ได้ /(^| )
}
console.log(reverseMessage('This is an example of a Reversed Message!'))
console.log(reverseMessage('AaaaA'));

function repSet(n) {
return Array.from({length : n} ,(_, i) => repSet(i));
}


function repSet(n) {
  let result = []
for (let i = 0; i < n; i++) {
  result.push([...result])
}
return result
}
console.log(repSet(0));
console.log(repSet(1));
console.log(repSet(2));
console.log(repSet(3));

function squareDigits(num){
  return Number(num.toString().split('').map(x=>x**2).join(''));
}
console.log(squareDigits(121));

function sumTwoSmallestNumbers(numbers) {  
  let [a,b] = numbers.sort((a,b)=>a-b)
  return a+b
}
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));


function validatePIN (pin) {
return /\d{4}/.test(pin) && pin.length === 4 || /\d{6}/.test(pin) && pin.length === 6
}
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
console.log(validatePIN('1234'));
console.log(validatePIN('12345'));
console.log(validatePIN('a234'));
console.log(validatePIN('123456'));
console.log(validatePIN('234a12'));