    function countGrade(scores){
    let result = {S: 0, A: 0, B: 0, C: 0, D: 0, X: 0};
    scores.forEach(score => result[rulesGrade(score)] += 1); //จะใช้ .map ก็ได้
    return result;
      
    }
    
    function rulesGrade(score){
    
      if (score === 100) return "S";
      else if (score < 100 && score >= 90) return "A";
      else if (score < 90 && score >= 80) return "B";
      else if (score < 80 && score >= 60) return "C";
      else if (score < 60 && score >= 0) return"D";
      else return "X";
       
    }
    
    //Or

    function countGrade(scores){
        return {
            'S': scores.filter(x => x == 100).length,
            'A': scores.filter(function(x){return (x < 100 && x >= 90)}).length,
            'B': scores.filter(function(x){return (x < 90 && x >= 80)}).length,
            'C': scores.filter(function(x){return (x < 80 && x >= 60)}).length,
            'D': scores.filter(x => x < 60 && x >= 0).length,
            'X': scores.filter(function(x){return x == -1}).length
        }
        }


 function countGrade(scores){
  var r = Object();
   for (var [g, f] of [['S', x => x>=100],
                       ['A', x => x>=90 && x<100],
                       ['B', x => x>=80 && x<90],
                       ['C', x => x>=60 && x<80],
                       ['D', x => x>=0  && x<60],
                       ['X', x => x<0]]){
   r[g]=scores.filter(f).length;
     }
    return r;
}

function countGrade(scores){
  const grader = {
    S: s => s === 100,
    A: s => s < 100 && s >= 90,
    B: s => s < 90 && s >= 80,
    C: s => s < 80 && s >= 60,
    D: s => s < 60 && s >= 0,
    X: s => s === -1
  };
  
  let results = {};
  
  Object.entries(grader).forEach(entry => results[entry[0]] = scores.filter(entry[1]).length);
  
  return results;
}

