//[1, 2, 2] it should return 9 because 
function squareSum(numbers){
  return numbers.reduce((a,b)=> (a)+(b**2) ,0)
 } 
    console.log(squareSum([0, 3, 4, 5]) )
    console.log(squareSum([]) )
    console.log(squareSum([1,2]) )