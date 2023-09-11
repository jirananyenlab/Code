const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
for (let x of f) {
   console.log(x);
  }

  const x = [...'Hello World']
  console.log(x)// [//   'H', 'e', 'l', 'l',//   'o', ' ', 'W', 'o',//   'r', 'l', 'd'// ]
  //destructuring array result [index, element] from entries()
  for (const [index, value] of x.entries()) {  
    console.log('index ' + index +' value '+value)
    }