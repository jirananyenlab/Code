function countPosNegValue(posNegintegerArray) {
    let result = {'positive':0 , 'negative':0}
    if (posNegintegerArray?.length === undefined) {
        result = undefined
    } else if (posNegintegerArray.length === 0){
        result = {}
    }
    else { 
        for (const i of posNegintegerArray) {
        if (i>0) {
            result.positive ++
        }
       else if (i<0) result.negative++
         }
        }
   return result
}


function countPosNegValue(posNegintegerArray) {
 return  typeof posNegintegerArray?.length === 'number' ?
 (posNegintegerArray.length > 0 ? {positive : posNegintegerArray.filter(x=>x>0).length,negative : posNegintegerArray.filter(x=>x<0).length }: {} )  : undefined
}

console.log(countPosNegValue([0,1,-7,8,-4,0]));
console.log(countPosNegValue([1,999,8,-4]));
console.log(countPosNegValue([0,0,0,0]));
console.log(countPosNegValue([]));
console.log(countPosNegValue(null));
console.log(countPosNegValue(undefined));

