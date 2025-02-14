let score1 = 0;
let score2 = 0;


function rollDice(player) {
    let randomNumber = Math.floor(Math.random() * 6) + 1; // Número entre 1 e 6
    let randomImageSource = 'images/dice' + randomNumber + '.png'; // Caminho da imagem

    let image = document.querySelectorAll('.dice img')[player - 1];
    image.setAttribute('src', randomImageSource);

    // Comparação 
    if (player === 1) {
        score1 = randomNumber;
    } else {
        score2 = randomNumber;
    }

    // Verifica o vencedor
    if (score1 !== 0 && score2 !== 0) {
        checkWinner();
    }
}

// Verificando quem venceu
function checkWinner() {
    let resultText = document.querySelector('h1');

    if (score1 > score2) {
        resultText.textContent = 'Jogador 1 Ganhou! 🎉';
    } else if (score2 > score1) {
        resultText.textContent = 'Jogador 2 Ganhou! 🎉';
    } else {
        resultText.textContent = 'Empate! 🔄';
    }

    // Reset para nova rodada
    score1 = 0;
    score2 = 0;
}

// Capturando eventos dos botões do jogador 1 
document.getElementById('idJogador1').addEventListener('click', function () {
    rollDice(1);
});

// Capturando eventos dos botões do jogador 1 
document.getElementById('idJogador2').addEventListener('click', function () {
    rollDice(2);
});


