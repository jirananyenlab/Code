//declaration
function dosumeting(msg) {
    return msg
}
console.log(dosumeting('hello')); //hello
console.log(typeof dosumeting); //function

const multipleTwo = (n,i=2) => n*i
console.log(multipleTwo(2));

const reverse =(a) => [...a].reverse().join('')
console.log(reverse('hello'));

//function expression
const splitString = function(a) {return a.split('')} 
console.log(splitString('home'));

const toLower = function low(a) {return a.toLowerCase()} 
console.log(toLower('HOME'));

//higher order function
function dosumeting2(msg , op) {
    return op(msg) 
}
console.log(dosumeting2('HELLO WORD!!',toLower));  //ถ้าจะส่ง function เป็น paramiter ห้ามใส่ ()

function doIt() {
    return reverse // !=  return op(msg) 
}
let x1 = doIt() 
console.log(x1('HELLO WORD!!')); //!!DROW OLLEH


function concat(str1, str2) {  return str1 + str2}
const doIt = function () { 
     return concat //!== return concat('1', '2')
    }
const x = doIt()
console.log(typeof x) //function
console.log(x('1', 'first')) //1first