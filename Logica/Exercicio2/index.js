let numMin = parseInt(prompt("Digite o valor do primeiro número:"));
let numMax = parseInt(prompt("Digite o valor do segundo número:"));

let soma = 0;

while(numMin <= numMax) {
    if(numMin % 2 == 0) {
        soma += numMin;
    }

    numMin++;
}

alert("A soma total foi de: " + soma);