let vetorNumeros = [];

for(let i = 0; i < 5; i++) {
    let valor = parseInt(prompt("Digite um número:"));

    vetorNumeros[i] = valor;
    
}

console.log(vetorNumeros)

let maior = Math.max(...vetorNumeros);

console.log(maior)