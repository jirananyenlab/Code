 /* ตรวจสอบพาสเวิด
    There needs to be at least 1 uppercase letter.
    There needs to be at least 1 lowercase letter.
    There needs to be at least 1 number.
    The password needs to be at least 8 characters long.
   */
function password(str) {
    return str.length >= 8 &&
           /[a-z]/.test(str) &&
           /[A-Z]/.test(str) &&
           /\d/.test(str);   
  }