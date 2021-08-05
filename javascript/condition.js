var price = 100;
// var cash = 80;
var cash = 120;

if (price > cash){
    console.log("Price is higher then cash");
} else {
    console.log("Price is lower then cash");
} 

// if (condition1) {
//     //  block of code to be executed if condition1 is true
//   } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
//   }

var savings = 100;
var gotJobs = false;
var hasFlat = true;
var status = true;

// if (savings > 100 && gotJobs == false || hasFlat == true && status == true){
//     console.log("Yahoo");
// } else if (savings == 100 && gotJobs == false) {
//     console.log("True");
// }else {
//     console.log("Nothings Just Chill");
// }

if (savings > 110){
    if(gotJobs == false) {
        console.log("This is False Block");
    }
}else {
    console.log("This is Ture Block");
}

var arr = [3, 7, 10];
console.log(6 >= 6);