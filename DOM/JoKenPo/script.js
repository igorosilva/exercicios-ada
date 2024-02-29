const choices = ["Pedra", "Papel", "Tesoura"];

const scoreContainer = document.getElementById('pontuacao-container');
const choicesContainer = document.getElementById('escolha-container');
const resultContainer = document.getElementById('resultado-container');
const rockButton = document.getElementById('button-pedra');
const paperButton = document.getElementById('button-papel');
const scissorButton = document.getElementById('button-tesoura');

let score = 0;

rockButton.addEventListener('click', () => {
    displayGameChoices(choices[0], computerChoice());
});

paperButton.addEventListener('click', () => {
    displayGameChoices(choices[1], computerChoice());
});

scissorButton.addEventListener('click', () => {
    displayGameChoices(choices[2], computerChoice());
});

function computerChoice() {
    let choice = Math.floor(Math.random() * 3);

    return choices[choice];
}

function displayGameChoices(personChoice, computerChoice) {
    while (scoreContainer.firstChild) {
        scoreContainer.removeChild(scoreContainer.firstChild);
    }

    while (choicesContainer.firstChild) {
        choicesContainer.removeChild(choicesContainer.firstChild);
    }

    while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
    }

    let computerResult = document.createElement('p');
    computerResult.setAttribute('id', 'escolha-computador');
    computerResult.textContent = "O computador escolheu: " + computerChoice;

    let personResult = document.createElement('p');
    personResult.setAttribute('id', 'escolha-pessoa');
    personResult.textContent = "Você escolheu: " + personChoice;

    choicesContainer.appendChild(computerResult);
    choicesContainer.appendChild(personResult);

    gameResult(personChoice, computerChoice);
}

function gameResult(personChoice, computerChoice) {
    let result = document.createElement('p');
    let scoreResult = document.createElement('p');
    scoreResult.setAttribute('id', 'pontuacao');

    if (personChoice === computerChoice) {
        result.setAttribute('id', 'empate');
        result.textContent = "Empate";
    } else if ((personChoice === "Pedra" && computerChoice === "Tesoura") ||
        (personChoice === "Papel" && computerChoice === "Pedra") ||
        (personChoice === "Tesoura" && computerChoice === "Papel")) {
        result.setAttribute('id', 'vitoria');
        result.textContent = "Você venceu!";
        score++;
    } else {
        result.setAttribute('id', 'derrota');
        result.textContent = "Você perdeu!";
        score--;
    }

    scoreResult.textContent = score;

    scoreContainer.appendChild(scoreResult);
    resultContainer.appendChild(result);
}