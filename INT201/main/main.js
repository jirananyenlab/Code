//Synchronous
function greeting(someone) {
    return `hello, ${someone}`
}
let myName= 'jiranan yenlab'
myName=10 //weakly and dinamic data type 
console.log('starting...')
//Asynchronous
setTimeout(() => {
    console.log('more complex task finish...')
}, 10000); // 10000 = 5 s
console.log(greeting(myName))
setTimeout(() => {
    console.log('simple complex task finish...')
}, 1000); // 5000 = 1 s
console.log('goodbye...')


let msg = "I'm a students"

let a = null
console.log(a)

let total
console.log(total)
if (total === undefinde) {
    console.log('varible does not have initial value')
}
if (total === null) {
    console.log('varible has null value')
}
//backtick
console.log(`'2'== 2 ${'2'==2}`)
console.log(`'2'=== 2 ${'2'===2}`)

//object sample
//const ตั้งไปแล้วเปลี่ยนค่าไม่ได้
const obj= {id: 1001 , name: 'pan' , price: 100}
const obj2= {'A' : 'a' , 'B' : 2}
//obj = obj2 cant change
console.log(obj)
obj.name = 'Lodchong'  //mutable เปลี่ยนให้เลย
console.log(obj.name)
console.log(obj2.A)
console.log(obj2.B)
console.log('A')

const e = 1000
e =5
console.log(e) //Error bc. it const not change value


let a5=1n
console.log(typeof a5)

let c =`A${10/2+1}`
console.log(typeof c)

//implicit type conversion
 if ("1") console.log( "is true")
 else console.log( "is false")

 if (0) console.log( "is Zero : true")
 else console.log( "is not Zero : false")

 if (2) console.log( "is Zero : true")
 else console.log( "is not Zero : false")

 if ('') console.log( " true")
 else console.log( " false")

 //objet type is mutable เปลี่ยนรูปได้
 const nums = [1,3,5]
 nums[nums.length-1] = 11
console.log( nums ) //[ 1, 3, 11 ]

nums[nums.length] = 11
console.log( nums ) //[ 1, 3, 11 ,11 ]

 console.log(typeof nums)
 console.log( nums.map(a => a*2))
 console.log(nums) // [1,3,5]
 console.log(nums = nums.map(a => a*2))
 console.log(nums) // [ 2, 6, 10 ]
 
 const obj = { id: 1 ,price : 100}
 console.log(typeof obj)

// const banan error ถ้า ตั้งเป็น const แล้ว ไม่ได้กำหนดค่า


//scope
let a1=1
const b=2
var c1=3
{
    let d=4
    const e=5
    var f=6

    console.log('{ }')
    console.log(a1)
    console.log(b)
    console.log(c1)

}
function doIt() {
    let h=7
    const i=8
    var j=9

    console.log('doIt()')
    console.log(a1)
    console.log(b)
    console.log(c1)
   // console.log(d) d is not defined block scope not allow
   // console.log(e) e is not defined block scope not allow
}
doIt()

console.log('global')
console.log(a1)
console.log(b)
console.log(c1)
console.log(f)
 // console.log(d) d is not defined block scope not allow
// console.log(e) e is not defined block scope not allow
//console.log(j)  j is not defined function scope variable do not allow out sild block 
console.log(f,c1)

console.log(b2)

let xx = 1 
{
    xx =2 
}
console.log(xx)

let xxx = 1 
{
  let  xxx =2 
  console.log("1 : " + xxx)
}
console.log("2 : " +xxx)


const xxx1 = 1 
{
  let  xxx1 =2 
  console.log("1 : " + xxx1)
}
console.log("2 : " +xxx1)

let n1= '2'
console.log(typeof n)
console.log(typeof Number(n) )



