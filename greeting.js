function greeting(someone) {
  someone === undefined || someone === null ? someone = 'guest' : someone
  return `hello, ${someone}`
}
module.exports = greeting
