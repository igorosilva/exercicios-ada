let numerosDivisiveis = [];

function isPrime(number) {
    for(let i=2; i < number; i++) {
        if(number % i === 0) {
            for(let j=2; j < number; j++) {
                if(number % j === 0) {
                    numerosDivisiveis.push(j)
                }
            }
            
            console.log(`O número ${number} é divisível por: ${numerosDivisiveis}`)
            return console.log(`O número ${number} não é primo!`);
        }
    }

    return console.log(`O número ${number} é primo!`);
};

let numero = parseInt(prompt("Digite um número:"));

isPrime(numero);