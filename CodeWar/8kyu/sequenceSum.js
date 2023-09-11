/* 2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
If begin value is greater than the end, your function should return 0.

*/
const sequenceSum = (begin, end, step) => {
    let sum = 0
  if (begin>end){
   sum = 0
  } else if (begin===step){
    let n = 0 
    n = Math.round(((end - begin)/step)+1)
    sum =  Math.round((n/2)*(begin + end))
  }else if (begin===end===step) {
    sum = begin 
  } else {
      while (begin <= end) {
        sum += begin;
        begin += step;
      }
  }
    return sum
}
function sequenceSum(begin, end, step) {
    
  for(var i=begin;i<=end;i+=step)
  {
    sum += i;
  }
  return sum;
}