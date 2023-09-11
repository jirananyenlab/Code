function count(arr,n){
    return arr.filter(x=>x==n).length;
  }
  var a=[1,1,1,2,2,3,4,4];
  console.log(count(a,1))   //output: 3
  console.log(count(a,2))   //output: 2
  