//ATCG(input) -> TAGC(output)
let newText = "";
function DNAStrand(dna){  
for (let i = 0; i < dna.length; i++) {
let char = dna[i];

if (char === "A") {
  newText += "T";
} else if (char === "T") {
  newText += "A";
} else if (char === "C") {
  newText += "G";
} else if (char === "G") {
  newText += "C";
} else {
  newText += char;
}
}
return newText
}

function DNAStrand(dna){ 
    let pairs = {'A':'T','T':'A','C':'G','G':'C'}; // 'A':'T' กำหนดแบบนี้คืือ คู่แทนที่ 
    return dna.split('').map(function(v){ return pairs[v] }).join('');
  }