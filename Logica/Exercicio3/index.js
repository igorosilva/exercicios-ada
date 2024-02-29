let primeiroNumero = parseInt(prompt("Digite o valor do primeiro número:"));
let segundoNumero = parseInt(prompt("Digite o valor do segundo número:"));

soma(primeiroNumero, segundoNumero);
subtracao(primeiroNumero, segundoNumero);
multiplicacao(primeiroNumero, segundoNumero);
divisao(primeiroNumero);
divisao(segundoNumero);

function soma(valor01, valor02) {
    let soma = valor01 + valor02;

    console.log(`O valor da soma entre ${valor01} e ${valor02} é: ${soma}`);
}

function subtracao(valor01, valor02) {
    let subtracao = valor01 - valor02;

    console.log(`O valor da subtração entre ${valor01} e ${valor02} é: ${subtracao}`);
}

function multiplicacao(valor01, valor02) {
    let multiplicacao = valor01 * valor02;

    console.log(`O valor da multiplicação entre ${valor01} e ${valor02} é: ${multiplicacao}`);
}

function divisao(valor) {
    let divisao = valor / 2;

    console.log(`O valor da divisão entre ${valor} por 2 é: ${divisao}`);
}
