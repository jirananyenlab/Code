function sum (numbers) {
    return numbers.reduce((a,b) => a+b,0);
};
console.log(sum([-1,1,20,5.2]))