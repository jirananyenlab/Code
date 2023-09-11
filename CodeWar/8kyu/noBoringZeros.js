function noBoringZeros(n) {
    return  Number(n.toString().replace(/0*$/, "")) //p.replace('dog', 'monkey') dog จะถูกแทนที่โดย monkey  , /0$/ ลงท้ายด้วย 0 , *มีหรือไม่มีกี่ตัวก็ได้   /0*$/->ลงท้ายด้วย 0 จะมีเหลือไม่มีกี่ตัวก็ได้
}

function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
  n = n / 10
  }
 return n  
 }