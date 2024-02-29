import { Word } from './js/Word.js';

let life = 6;
let typedLetters = [];
let tip = document.getElementById('dicaContainer');
let guessedWords = document.getElementById('input-container');
let wrongLetters = document.getElementById('palavras-erradas');
let guessInput = document.getElementById('input-palpite');
let submitButton = document.querySelector('button#button-enviar');
let resetButton = document.getElementById('button-reiniciar');

let currentWord;
let currentTip;

pickRandomWord();

console.log(typedLetters)

submitButton.addEventListener('click', function () {
    verifyWord(guessInput.value.toLowerCase());
});
guessInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        verifyWord(guessInput.value.toLowerCase());
    }
});
resetButton.addEventListener('click', () => {
    resetInputs();
    pickRandomWord();
});

function pickRandomWord() {
    life = 6;
    typedLetters = [];
    const index = Math.floor(Math.random() * Word.length);

    currentWord = Word[index].name;
    currentTip = Word[index].tip;

    createInputs(currentWord)
}

function createInputs(word) {
    var remainingLife = document.createElement('p');
    remainingLife.setAttribute('id', 'tentativas');
    remainingLife.textContent = "Tentativas restantes: " + life;
    tip.appendChild(remainingLife);

    var tipText = document.createElement('p');
    tipText.setAttribute('id', 'dica');
    tipText.textContent = "Dica: " + currentTip;
    tip.appendChild(tipText);

    for (var i = 0; i < word.length; i++) {
        let inputLetter = document.createElement('input');

        inputLetter.setAttribute('type', 'text');
        inputLetter.classList.add('input-palavra');
        inputLetter.readOnly = true;

        guessedWords.appendChild(inputLetter);
    }

    guessInput.focus()
}

function verifyWord(letter) {
    if (!isLetterTyped(letter)) {
        if (currentWord.includes(letter)) {
            addLetter(letter);
            typedLetters.push(letter);
            checkWordGuessed();
        } else if (letter === " ") {
            alert("Você precisa digitar uma letra");
        } else {
            createWrongLetter(letter);
            typedLetters.push(letter);
            decreaseLife();
        }
    }
    guessInput.value = "";
    guessInput.focus();
}


function addLetter(letter) {
    if (!isLetterTyped(letter)) {
        var letterInputs = document.querySelectorAll('input.input-palavra');

        for (var i = 0; i < currentWord.length; i++) {
            if (letter === currentWord[i]) {
                letterInputs[i].value = letter;
            }
        }
    }
}

function createWrongLetter(letter) {
    if (!isLetterTyped(letter)) {
        let wrongLetter = document.createElement('p');
        wrongLetter.classList.add('palavra-errada');
        wrongLetter.textContent = letter;

        wrongLetters.appendChild(wrongLetter);
    }
}

function resetInputs() {
    while (tip.firstChild) {
        tip.removeChild(tip.firstChild);
    }

    while (guessedWords.firstChild) {
        guessedWords.removeChild(guessedWords.firstChild);
    }

    while (wrongLetters.firstChild) {
        wrongLetters.removeChild(wrongLetters.firstChild);
    }

    guessInput.value = "";
}

function isLetterTyped(letter) {
    if (typedLetters.includes(letter)) {
        alert("Essa letra já foi digitada");
        return true;
    } else {
        return false;
    }
}

function decreaseLife() {
    if (life > 0) {
        life--;

        var remainingLife = document.querySelector('p#tentativas');
        remainingLife.textContent = "Tentativas restantes: " + life;
    } else {
        alert(`Acabaram suas tentativas.\nA palavra correta era: ${currentWord}`);
        resetInputs();
        pickRandomWord();
    }
}

function checkWordGuessed() {
    var letterInputs = document.querySelectorAll('input.input-palavra');

    for (var i = 0; i < currentWord.length; i++) {
        if (letterInputs[i].value !== currentWord[i]) {
            return
        }
    }

    alert(`Parabéns!\n\nA palavra adivinhada foi: ${currentWord}`);
    resetInputs();
    pickRandomWord();
}