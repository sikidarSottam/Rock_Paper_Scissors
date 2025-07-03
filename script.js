function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.333) {
        return 'rock';
    } else if (randomNumber < 0.666) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'tie';
    }

    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'human';
    } else {
        return 'computer';
    }
}

let humanScore = 0;
let computerScore = 0;
let currentRound = 0;
const totalRounds = 5;

const roundText = document.getElementById('round');
const playerChoiceText = document.getElementById('player-choice');
const computerChoiceText = document.getElementById('computer-choice');
const roundResultText = document.getElementById('round-result');
const scoreText = document.getElementById('score');
const finalResultText = document.getElementById('final-result');

document.querySelectorAll('.choice-btn').forEach(button => {
    button.addEventListener('click', () => {
        if (currentRound >= totalRounds) return;

        const humanChoice = button.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        currentRound++;

        playerChoiceText.textContent = `You picked: ${humanChoice}`;
        computerChoiceText.textContent = `Computer picked: ${computerChoice}`;

        if (result === 'human') {
            humanScore++;
            roundResultText.textContent = "You won this round!";
        } else if (result === 'computer') {
            computerScore++;
            roundResultText.textContent = "Computer won this round!";
        } else {
            roundResultText.textContent = "It's a tie!";
        }

        roundText.textContent = `Round: ${currentRound} / ${totalRounds}`;
        scoreText.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;

        if (currentRound === totalRounds) {
            if (humanScore > computerScore) {
                finalResultText.textContent = `🎉 You won the game ${humanScore} to ${computerScore}!`;
            } else if (computerScore > humanScore) {
                finalResultText.textContent = `💻 Computer won the game ${computerScore} to ${humanScore}.`;
            } else {
                finalResultText.textContent = "🤝 It's a tie game!";
            }
        }
    });
});
