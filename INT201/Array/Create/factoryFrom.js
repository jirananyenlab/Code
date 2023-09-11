let x = [1,3,5]
let y = [5,7,8]

function puls(x,y) {
    let b = x.map((x,i) => x+y[i++])
 return  b
}
console.log(puls(x,y));

const b = Array.from({length: x.length + y.length } )//,x.map((x,i)=>x + y[i++] )
console.log(b);

const z = Array.from(x)//compared with spread operatorconst
 a = [...x, ...y]
 console.log(a)
 console.log(z);

const a1 = Array.from({length: 5 } ,(_,x)=>++x)
console.log(a1);

function repSet(n) {
    return Array(n).fill([]);
    }
  console.log(repSet(1));
  console.log(repSet(2));
  console.log(repSet(3));
