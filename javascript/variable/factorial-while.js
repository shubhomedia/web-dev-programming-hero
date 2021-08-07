
function getFactorial (number){
    let factorial = 1;
    let i = 1;
    while(i <=number){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const myfactorial = getFactorial(7);
console.log(myfactorial);