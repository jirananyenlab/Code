  // toIndustrial("30") => 0.5 

  // Math.round JavaScript คือ คำสั่งปัดเศษทิศนิยมขึ้นจากตัวเลข(ตามหลักคนิต) และคืนค่าเป็นตัวเลขจำนวนเต็มบวก หรือจำนวนเต็มลบ ที่มีค่าใกล้เคียงที่สุดกับค่าตัวแปรเดิม

  function toIndustrial(time){
    if (typeof time == 'number') {
      return Math.round(time*100/60)/100;
    }
    else if (typeof time == 'string') {
      time = parseInt(time.split(":")[0])*60+parseInt(time.split(":")[1]);
      return Math.round(time*100/60)/100;
    }
  }