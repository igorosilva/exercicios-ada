let nota = parseInt(prompt("Digite uma nota entre 0 e 10:"));

do {
    if(nota < 0 || nota > 10) {
        nota = parseInt(prompt("Valor inválido!\nDigite uma nota entre 0 e 10:"));
    }
} while(nota < 0 || nota > 10);

alert(`Nota válida!\nVocê digitou a nota ${nota}`);