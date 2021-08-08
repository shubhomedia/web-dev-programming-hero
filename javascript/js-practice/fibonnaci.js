function fibonacciSeries(num){
    if (typeof num!= 'number'){
        return 'Please Give a Number';
    }
    if (num < 2){
        return 'Please enter a postive number greater than 1'
    }
    const fibo = [0,1];
    for (let i = 2; i <= num; i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}

const fiboseries = fibonacciSeries(10);
console.log(fiboseries);