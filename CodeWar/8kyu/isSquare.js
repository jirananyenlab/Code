
var isSquare = function(n){
    return n >= 0 && Number.isInteger(Math.sqrt(n)) ? true : false
    
    /*  ผิดเพราะ บันทัดแรก
    n >= 0 ? true : false  
    
    การใช้ n >= 0 ? true : false เป็นการใช้เงื่อนไขทางตรรกศาสตร์ (ternary operator) 
    เพื่อตรวจสอบว่าค่าของตัวแปร n มีค่าไม่ต่ำกว่า 0 หรือไม่ ถ้าเงื่อนไขเป็นจริง เงื่อนไขจะคืนค่า true
     และถ้าเงื่อนไขเป็นเท็จ เงื่อนไขจะคืนค่า false
    
    if(n===true && Number.isInteger(Math.sqrt(n))){
     return true
    } else{ 
      return false 
    } 
    
    */
    }