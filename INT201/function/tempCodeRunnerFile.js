function concat(str1, str2) {  return str1 + str2}
const doIt = function () { 
     return concat //!== return concat('1', '2')
    }
const x = doIt()
console.log(typeof x) //function
console.log(x('1', 'first')) //1first