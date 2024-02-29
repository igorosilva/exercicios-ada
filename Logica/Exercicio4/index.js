function senha() {
    let senha = "123";
    let resposta;

    do{
        resposta = prompt("Adivinhe a senha:");

        if(resposta != senha) {
            console.log("Tente novamente!");
        } else {
            console.log("Você acertou!")
        }
    } while(resposta != senha)    
}

senha();

function armazenarArray(tamanhoArray) {
    let numerosPares = [];

    for(let i = 0; i < tamanhoArray; i++) {
        let valor = parseInt(prompt("Digite um número:"));

        if(valor % 2 == 0) {
            numerosPares.push(valor);
        }
    }

    console.log("O vetor dos valores pares digitado é: " + numerosPares);
}

let tamanhoArray = parseInt(prompt("Digite um tamanho para o array:"));

armazenarArray(tamanhoArray);