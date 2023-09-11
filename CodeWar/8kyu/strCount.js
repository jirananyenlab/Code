 /*   ("Hello", "o")  ==>  1 o มี 1 ตัว return 1
       ("Hello", "l")  ==>  2 l มี 2 ตัว return 2
       ("", "z")       ==>  0 */
function strCount(str, letter){  
   return   str.split(letter).length-1 //-1 คือ -ตัว letter
    }
 function strCount(str, letter){  
    let count = 0;
     for (let i = 0; i < str.length; i++) {
    if (str[i] == letter)
      count++;
     } 
  return count
   }
   const strCount = (str, letter) => --str.split(letter).length; // -- คือ - ไปก่อน

function strCount(str, letter){  
    return str.split('').filter(c => c == letter).length;
}
    console.log(strCount('hello','o'));