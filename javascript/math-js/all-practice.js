let one = 10;
let two = 20;
let three = 11;

let maxNumber  = Math.max(one,two,three);
let minNumber  = Math.max(one,two,three);
console.log(maxNumber);

let newArray = [10,20,30,40,50,60,70,8,0];
let max = Math.max.apply(null,newArray);
console.log(max);