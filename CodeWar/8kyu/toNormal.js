  // toNormal(0.5) => "30"
  function toNormal(time){
    return Math.floor(time)+":"+String(Math.round((time*60)%60)).padStart(2,'0');
  }