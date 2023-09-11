let m = {id:1 , title:'pen'}
for (const key in m) {
  console.log(key);
}
for (const i in m) {
    console.log(m[i]);
  }

  let a = [1,2,3]
  let b =[122, 55, 0]
  console.log(a=[...a ,...b]);