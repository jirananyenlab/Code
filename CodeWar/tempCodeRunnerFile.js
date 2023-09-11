function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
console.log(validatePIN('1234'));
console.log(validatePIN('12345'));
console.log(validatePIN('a234'));
console.log(validatePIN('123456'));
console.log(validatePIN('234a12'));