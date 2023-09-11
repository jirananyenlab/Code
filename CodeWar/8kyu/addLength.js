/*  "apple ban" --> ["apple 5", "ban 3"]
     "you will win" -->["you 3", "will 4", "win 3"] 
     
      let result = []
    return str.split(' ').map( (word,count) => result.push(`${str} ${count.length}`))
    1.สั่ง count.length จะได้ 5,3 กรณี "apple ban"  เพราะงั้นตรง str ควรเป็น count
    2.map รีเทินออกมาเป็น array อยู่แล้ว ไม่จำเป็นต้อง สร้าง  result
     */
    function addLength(str) { 
    return str.split(' ').map( (word) =>`${word} ${word.length}`)
     }
     console.log(addLength("apple ban"))