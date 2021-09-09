// Variable 
const userName = "shubhobd";
let salary = 20000;

// Condition 
if (salary < 30000){
    console.log("Salary Less then 30000");
}
else if (salary > 20000) {
    console.log("Salary greater then 20000");
}
else {
    console.log("Salary between 20000 and 30000");
}

// Array 
let number = [10,20,30,40,50,60];
let numberCount = number.length;
console.log(numberCount);
number.pop();
number.push(100);
number[4]=111;
console.log(numberCount);
console.log(number);
for( const numbers of number){
    console.log(numbers);
}