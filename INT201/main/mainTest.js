let a = ['hello']
let value = a[0]
a[1] = 3.5
let i = 2
a[i] = 3
a[i+1] = 'word'
console.log(a); //['hello', 3.5, 3, 'word' ]
a[a[i]] = a[0]
console.log(a); //[ 'hello', 3.5, 3, 'hello' ]