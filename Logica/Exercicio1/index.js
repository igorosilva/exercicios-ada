// Primeira forma
console.log("Com dois vetores:")
const nomes = ["Pedro", "João", "Giovana", "Marcos"];
const numerosTelefone = ["11914238593", "11948827362", "119482735732", "1192837422", "11928847262"]

for(let i = 0; i < nomes.length; i++) {
    console.log(`Nome: ${nomes[i]} | Contato: ${numerosTelefone[i]}`);
}

// Segunda forma
console.log("Com matriz:")
const contatos = [
    ["Cassio", "11111111111"],
    ["Yuri Alberto", "22222222"],
    ["Fagner", "333333333"],
    ["Raniele", "444444444"],
    ["Félix Torres", "5555555555"]
]

for(let i = 0; i < contatos.length; i++) {
    console.log(`Nome: ${contatos[i][0]} \nNúmero de telefone: ${contatos[i][1]}`)
}

// Com objeto. Forma ideal(professor)
console.log("Com objeto:")
const contato = {
    nome: "Igor",
    idade: '21',
    numeroTelefone: '(11)99999-9999',
    endereco: "Rua rua, cidade cidade, 000"
}

const objContatos = [
    {nome: "Ronaldo", idade: "44", numeroTelefone: '(11)91111-1111', endereco: "Rua"},
    {nome: "Paolo Guerrero", idade: "44", numeroTelefone: '(11)91111-1111', endereco: "Rua"},
    {nome: "Emerson Sheik", idade: "44", numeroTelefone: '(11)91111-1111', endereco: "Rua"},
    {nome: "Danilo", idade: "44", numeroTelefone: '(11)91111-1111', endereco: "Rua"},
    contato,
    {nome: "Chicão", idade: "44", numeroTelefone: '(11)91111-1111', endereco: "Rua"},
    {nome: "Igor", idade: "44", numeroTelefone: '(11)91111-1111', endereco: "Rua"}
]

for(let i = 0; i < objContatos.length; i++) {
    console.log(`Nome: ${objContatos[i].nome} \nNúmero Telefone: ${objContatos[i].numeroTelefone}`)
}

let contatoIgor = objContatos.filter(objContatos => objContatos.nome == 'Igor');

console.log("Filter: ", contatoIgor)

contatoIgor = objContatos.find(objContatos => objContatos.nome == 'Igor');

console.log("Find: ", contatoIgor)