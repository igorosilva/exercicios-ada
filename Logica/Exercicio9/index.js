function isPrime(number) {
    for(let i=2; i < number; i++) {
        if(number % i === 0) {
            return console.log(`O número ${number} não é primo!`);
        }
    }

    return console.log(`O número ${number} é primo!`);
};

let numero = parseInt(prompt("Digite um número:"));

isPrime(numero);