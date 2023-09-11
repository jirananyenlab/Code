function smaller(nums) {
    return nums.map((n, i) => {return nums.slice(i).filter(v => v < n).length});
}

function smaller(nums) {
    let count;
    let base;
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
      base = nums[i];
      count = 0;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < base) count++;
      }
      arr.push(count);
    }
    return arr;
}