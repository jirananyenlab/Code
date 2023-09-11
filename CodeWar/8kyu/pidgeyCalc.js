 /*
     Test.assertEquals(pidgeyCalc(1, 12), 500, 'Expected 500');
    Test.assertEquals(pidgeyCalc(13, 144), 6500, 'Expected 6500');  144/12 -> 12*500 = 600  ได้ 1 candy -> 12 แคนดี้ เหลือ 1ตัว + 12 แคนดี้ ได้อีก 500 -> 6500
    Test.assertEquals(pidgeyCalc(10, 63), 3000, 'Expected 3000');
    Test.assertEquals(pidgeyCalc(1, 63), 500, 'Expected 500');
    Test.assertEquals(pidgeyCalc(63, 1), 2500, 'Expected 2500');
    Test.assertEquals(pidgeyCalc(0, 0), 0, 'Expected 0'); */
    function pidgeyCalc ( pidgeys, candy ) {
    let exp = 0
    while( pidgeys > 0){
      if(candy >= 12){
        candy -= 11;
        pidgeys -=1
        exp+= 500
      }
      else{
        pidgeys --
        candy ++
      }
    }
    return exp
   
  }
  