function splitAndMerge(string, separator) {
    return string.split(' ').map(el => el.split('').join(separator)).join(' ');
  
    
  
  }

function splitAndMerge(string, separator) {
  var words = str.split(" ");
    var arr =[];
    var res = []
    for(i=0;i<words.length;i++){
     arr.push(words[i].split("").join(sp));
    }
    res = arr.join(" ");
    return res;
}
