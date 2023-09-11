  //[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
  function grow(x){
   return x.reduce((x,y) => x*y)
}
console.log(grow([1, 2, 3, 4]));
