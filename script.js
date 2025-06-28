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

function getHumanChoice() {
    let playerInput;
    // Keep asking until a valid choice is made
    while (true) {
        playerInput = prompt("Enter Rock, Paper, or Scissors:");

        // If user cancels, exit the game gracefully
        if (playerInput === null) {
            alert("Game cancelled. Goodbye!");
            return null;
        }

        const normalizedInput = playerInput.toLowerCase();

        // Check if the input is one of the valid options
        if (['rock', 'paper', 'scissors'].includes(normalizedInput)) {
            return normalizedInput; // Valid input found, return it
        } else {
            alert("That's not a valid choice. Please try again with Rock, Paper, or Scissors.");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(`You picked: ${humanChoice}`);
    console.log(`The computer picked: ${computerChoice}`);

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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const totalRounds = 5;

    console.log("--- Welcome to Rock, Paper, Scissors! Best of 5 Rounds ---");
    console.log("Let's see who comes out on top!");

    for (let i = 0; i < totalRounds; i++) {
        console.log(`\n--- Round ${i + 1} of ${totalRounds} ---`);

        const humanSelection = getHumanChoice();
        // If getHumanChoice returned null (user cancelled), stop the game
        if (humanSelection === null) {
            return;
        }
        const computerSelection = getComputerChoice();

        const roundResult = playRound(humanSelection, computerSelection);

        if (roundResult === 'human') {
            humanScore++;
            console.log("You won this round! Nice!");
        } else if (roundResult === 'computer') {
            computerScore++;
            console.log("Darn! Computer took this round.");
        } else {
            console.log("It's a tie this round! Nobody wins, nobody loses.");
        }

        console.log(`Current Score: You: ${humanScore} | Computer: ${computerScore}`);
    }

    // --- Game Over ---
    console.log("\n--- GAME OVER! Final Results ---");
    if (humanScore > computerScore) {
        console.log(`🎉 Congratulations! You won the game ${humanScore} to ${computerScore}!`);
    } else if (computerScore > humanScore) {
        console.log(`Better luck next time! The computer won ${computerScore} to ${humanScore}.`);
    } else {
        console.log(`It's a draw! You both scored ${humanScore}.`);
    }
}

// Start the game!
playGame();