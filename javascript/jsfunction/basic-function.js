
// Function Body 
function myFunction (){
    console.log("This is Function")
}

// Function Call 
myFunction();

// New Function with Parameter 
function priceCounter(amount){
    console.log(amount);
}
priceCounter(100);

// New Function with Parameter 
function priceCounter2(amount){
    console.log("You Paid",amount);
    var price = 10;
    var amoutprice = amount / price;
    console.log(amoutprice);
}
priceCounter2(100);