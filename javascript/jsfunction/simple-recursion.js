function sum(i){
    if (i == 1){
        return 1;
    }
    return i + sum(i-1);
}

// console.log(sum(6));

// Factorial Recursion 

function factorial (i){
    if (i == 1){
        return 1
    }
    return i * factorial(i-1);
}

console.log(factorial(6));

