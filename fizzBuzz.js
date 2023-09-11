    function fizzBuzz(max) {
     return Array.from({length : max} , (_,i) => ++i).map(a=> a%3 === 0 && a%5 === 0 ? a= "FizzBuzz" : a%5 === 0 ? "Buzz" : a%3 === 0 ? a= "Fizz" :a).join('')
}   
module.exports = fizzBuzz
