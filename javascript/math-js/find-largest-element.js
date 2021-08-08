function largestElement (numbers){
    let largest = numbers[0];
    for (let i = 0; i< numbers.length; i++){
        const elements = numbers[i];
        if(elements > largest){
            largest = elements;
        }
    }
    return largest;
}

let ages = [10,12,14,15,16,18,20,71];
let newold = largestElement(ages);
console.log(newold);