const checkIsPrime = (number) => {

    let isPrime = true;
    if (number < 2) {
        isPrime = false;
    }

    //APLICANDO ALGORITMO LA CRIBA DE ERATÓSTENES
    for (let i = 2; i * i <= number; i++) {
        if ( number % i === 0 ){
            isPrime = false; 
            break;
        }
    }
    return isPrime;
}

let value = 6

const result = checkIsPrime(value);

if(result){
    console.log("El número: " + value + " es PRIMO")
}else{
    console.log("El número: " + value + " NO es PRIMO")
}