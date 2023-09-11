
  //rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
   // ลบตัวหน้า แล้ว ใส่ตัวหลัง ไปเรื่อยๆ

function rotate(str){
    let b = []
  str = str.split('')
  for (let i in str) {
     str.push(str[0])    // Hello + H => elloH  i = 0
    str.shift()
    b.push(str.join(''))
  }
   return b
    }
  
    function rotate(str){
      return str.split('').map(t => str = str.slice(1)+ str.slice(0,1))     // str =  Hello -> ello + H = elloH
    }                                                                      //  str = elloH-  > lloH + e = lloHe
    console.log(rotate("Hello"))
  
    function rotate(str){
      return str.split('').map((_,i) => str.slice(++i)+str.slice(0,i))  //1. Hello -> ello + H  , i=1  => elloH
    }                                                                   //2. Hello -> llo + He  , i=2  => lloHe
    console.log(rotate("Hello"))                                        //2. Hello ->  lo + Hel , i=3  => loHel
  

    function rotate(str){
   return str.split('').map(t => console.log(str))  //Hello  str.slice(1) -> 'ello' 
                                                    //Hello
                                                     //Hello
                                                     //Hello
                                                     //Hello
    }         
    console.log(rotate("Hello"))     
    
    function rotate(str){ 
       //str.split('')  // ['H' , 'e' ,..., 'o']
      return str.split('') //Hello
  } 
  console.log(rotate("Hello")) 

  function rotate(str){ 
    str.slice(1)  // ello
   return str //Hello
}                                                        
    console.log(rotate("Hello"))   

    function rotate(str){
      return str.split('').forEach((_,i) => console.log( _  +" : " +i ) ) 
    }  
    console.log(rotate("Hello"))               
    console.log(Array.from({ length: 5 }, (_, index) => _ )) // [ undefined, undefined, undefined, undefined, undefined ]
    console.log(Array.from({ length: 5 }, (_, index) => index+1 )) //[ 1, 2, 3, 4, 5 ]