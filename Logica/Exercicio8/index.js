let soma = 0
let media, numeros

for(let i = 0; i < 5; i++) {
    numeros = Number(prompt("Digite um número:"));
    soma = soma + numeros;
}

media = soma / 5;

alert(`A média dos números digitados é: ${media}`);
