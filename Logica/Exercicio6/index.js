let nome = prompt("Digite o seu nome:");
let senha = prompt("Digite a sua senha:");

while(nome == senha) {
    alert("Sua senha não pode ser igual ao seu nome!");

    nome = prompt("Digite o seu nome:");
    senha = prompt("Digite a sua senha:");
}

alert("Conta criada com sucesso!");