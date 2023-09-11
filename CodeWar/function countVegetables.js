const countVegetables = str => {
    let tuples = [];
    let counts = str
      .match(/tofu|potato|cucumber|cabbage|turnip|pepper|onion|mushroom|celery|carrot/g)
      .reduce((res, word) => {
        res[word] = (res[word] || 0) + 1; //(res[word] || 0): หากค่าที่ได้จากขั้นตอนก่อนหน้าเป็น undefined (เนื่องจากคำนั้นยังไม่มีใน res) ก็จะใช้ค่า 0 แทนในการบวกเพื่อไม่ให้เกิดความผิดพลาดเมื่อเพิ่มค่าลงใน res[word]
        return res; }, {}); //ค่าเริ่มต้นคือ {}
    
    for (var word in counts)
      tuples.push([counts[word], word]);
    
    tuples = tuples.sort((a, b) => b[0] - a[0] || b[1].localeCompare(a[1]));
    
    return tuples;
  }
  console.log(countVegetables(['potato','tofu','cucumber','cabbage','turnip','pepper','onion','carrot','celery','mushroom','potato','tofu','cucumber','cabbage']));
  
  
  function countVegetables(s){
    const allowedVeggies = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"];
    const stringArray = s.split(' ');
  
    const countedVeggies = stringArray.reduce((acc, veg) => {
      const trimmedVeg = veg.trim();
      
      if(acc[trimmedVeg]) {
        acc[trimmedVeg]++;
      } else if(allowedVeggies.includes(trimmedVeg)){
        acc = {
          ...acc,
            [trimmedVeg]: 1
        };
      }
        return acc;
    }, {});
    
    if(Object.keys(countedVeggies).length) {
       return Object.keys(countedVeggies)
              .map((key) => [countedVeggies[key], key])
              .sort((a, b) => b[0] - a[0] || b[1].localeCompare(a[1]));
    } else {
      return [];
    }
  }
  
  function countVegetables(string){
    let vegetables = {
      "cabbage":0,
      "carrot":0, 
      "celery":0, 
      "cucumber":0, 
      "mushroom":0, 
      "onion":0, 
      "pepper":0, 
      "potato":0, 
      "tofu":0, 
      "turnip":0
    }
  
    let arrDeliveries = string.split(' ')
    let result=[]
    console.log(arrDeliveries);
  
    for (let i=0; i<arrDeliveries.length; i++) {
        if(vegetables[arrDeliveries[i]]!==undefined) {
            vegetables[arrDeliveries[i]]++
        }
    }
    
    for(let key in vegetables) {
        result.push([vegetables[key],key])
    }
  
    //remove the 0 item
    result = result.filter ( elem => { return elem[0]!==0  })
  
    //sort them form higher number to lower
    result = result.sort( (a, b) => { return b[0] - a[0] } )
  
    //sort them reverse-alphabetically in case of same number of an item
    result = result.sort( (a,b) => { 
        if (b[0] === a[0]) {
            if(a[1] < b[1]) { return 1; }
            if(a[1] > b[1]) { return -1; }
            return 0;
        }
  
    })
  
  
    return result
  
  }
  
  
  function countVegetables(string) {
    let arr = string.split(' ');
  
    let cabbage = 0;
    let carrot = 0;
    let celery = 0;
    let cucumber = 0;
    let mushroom = 0;
    let onion = 0;
    let pepper = 0;
    let potato = 0;
    let tofu = 0;
    let turnip = 0;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'cabbage') {
        cabbage += 1;
      } else if (arr[i] === 'carrot') {
        carrot += 1;
      } else if (arr[i] === 'celery') {
        celery += 1;
      } else if (arr[i] === 'cucumber') {
        cucumber += 1;
      } else if (arr[i] === 'mushroom') {
        mushroom += 1;
      } else if (arr[i] === 'onion') {
        onion += 1;
      } else if (arr[i] === 'pepper') {
        pepper += 1;
      } else if (arr[i] === 'potato') {
        potato += 1;
      } else if (arr[i] === 'tofu') {
        tofu += 1;
      } else if (arr[i] === 'turnip') {
        turnip += 1;
      } 
    }
    
    const fruitCounts = [ [cabbage, 'cabbage'], [carrot, 'carrot'], [celery, 'celery'], [cucumber, 'cucumber'], [mushroom, 'mushroom'], [onion, 'onion'], [pepper, 'pepper'], [potato, 'potato'], [tofu, 'tofu'], [turnip, 'turnip'] ];
    const notEmptyValues = fruitCounts.filter((ingridient) => ingridient[0] !== 0) // notEmptyValues จะเป็นอาร์เรย์ที่มีข้อมูลเป็นคู่อันดับของคีย์และค่าใน fruitCounts ที่มีค่าของจำนวนครั้งที่ไม่เท่ากับ 0 และถูกคัดเลือกมาเท่านั้น
    const sortAlphabeticallyReverse = notEmptyValues.sort((a,b) => a[1] - b[1]).reverse();
    
    return sortAlphabeticallyReverse.sort((a,b) => b[0] - a[0]);
  
  }
  
  function countVegetables(string){
    let vegetables = {
      cabbage: 0,
      carrot: 0,
      celery: 0,
      cucumber: 0,
      mushroom: 0,
      onion: 0,
      pepper: 0,
      potato: 0,
      tofu: 0,
      turnip: 0,
    };
    string = string.split(' ');
    
    for (let i = 0; i < string.length; i++) {
      vegetables[string[i]]++;
    }
    
    return Object.entries(vegetables)
                .filter(a => a[1] > 0)
                .map(a => a.reverse())
                .sort((a, b) => (a[0] != b[0]) ? b[0] - a[0] : a[1] < b[1]);
  
  }

