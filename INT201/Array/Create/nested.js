//nested with object
const m = [
    { productId: 1, name: 'pen', price: 200 },
    { productId: 2, name: 'notebook', price: 100 },
    { productId: 3, name: 'pencil', price: 10 }
  ]
  
  console.log(m.length) //3
  console.log(m[0]) // { productId: 1, name: 'pen', price: 200 }
  console.log(m[m.length - 1]) //{ productId: 3, name: 'pencil', price: 10 }
  
  const n = { productId: [1001, 1002, 1003], productPrice: [100, 10, 15] } //object
  console.log(n.productId) //[1001, 1002, 1003]
  console.log(n.productPrice) //[100, 10, 15]
 