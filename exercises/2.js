const consecutiveSum = (number) => {

    let sum = (number * (number + 1)) / 2;
 
    return sum;
}

let value = 6;

const result = consecutiveSum(value);

console.log("El resultado de la suma es: " + result);