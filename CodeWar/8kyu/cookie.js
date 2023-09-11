function cookie(x){
    let a = 'Who ate the last cookie? It was'
   if ( typeof x == 'string') {
    return a+ ' Zach!'
   } else if (typeof x == 'number' || typeof x == 'float ' ){
    return  a+ " Monica!"
  } else {
    return  a+ " the dog!"
   }
  
   
  }
  function cookie(x){
  var t = typeof x
   var who = (t=="string" ? 'Zach' : t=="number" ? 'Monica' : 'the dog')
   return `Who ate the last cookie? It was ${who}!`
  
  }
  function cookie(x){   
    return `Who ate the last cookie? It was ${({string: "Zach", number: "Monica"}[typeof x] || "the dog")}!`;
}
console.log(cookie(10))