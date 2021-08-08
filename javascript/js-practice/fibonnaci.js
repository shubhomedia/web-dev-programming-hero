function fibonacciSeries(num){
    const fibo = [0,1];
    for (let i = 2; i <= num; i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}

const fiboseries = fibonacciSeries(13);
console.log(fiboseries);