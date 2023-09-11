var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  }

  function moveZeros(arr) {
    return   [...arr.filter(a=> a!==0),...arr.filter(a=> a===0)]
  }

  function zero(f) {return f ? f(0):0}
  function one(f) {return f ? f(1):1}
  function two(f) {return f ? f(2):2}
  function three(f) {return f ? f(3):3}
  function four(f) {return f ? f(4):4}
  function five(f) {return f ? f(5):5}
  function six(f) {return f ? f(6):6}
  function seven(f) {return f ? f(7):7}
  function eight(f) {return f ? f(8):8}
  function nine(f) {return f ? f(9):9}
  
  function plus(a) {return b=>b+a}
  function minus(a) {return b=>b-a}
  function times(a)  {return b=>b*a}
  function dividedBy(a) {return Math.round(b=>b/a)}

  console.log(zero(plus(six())));

  let puls = (a) => b => a+b

  console.log([5,6,7,8].map((a,i) =>`index ${i} is ${a*5}` ));