a = [1+1 , 5+6 ,1]
console.log(a);

function repSet(n) {
    let result = []
  for (let i = 0; i < n; i++) {
   result.push([])
  }
  return result
  }
  console.log(repSet(3)); //[ [], [], [] ]

  function repSet2(n) {
    let result = []
  for (let i = 0; i < n; i++) {
    result = [result]
  }
  return result
  }
  console.log(repSet2(2)); //[ [ [] ] ]

  let x = []
   console.log([x]); //[ [] ]