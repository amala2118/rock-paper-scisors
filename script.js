let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

const playerChoiceDisplay = document.querySelector("#player-choice");
const computerChoiceDisplay = document.querySelector("#computer-choice");
const resultDisplay = document.querySelector("#result");

const buttons = document.querySelectorAll(".buttons button");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        return "You win this round!";
    }

    computerScore++;
    return "Computer wins this round!";
}

function updateScore() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function playGame(event) {
    const playerChoice = event.currentTarget.id;
    const computerChoice = getComputerChoice();

    const result = playRound(playerChoice, computerChoice);

    playerChoiceDisplay.textContent = "Your choice: " + playerChoice;
    computerChoiceDisplay.textContent = "Computer choice: " + computerChoice;
    resultDisplay.textContent = result;

    updateScore();

    if (playerScore === 5 || computerScore === 5) {
        resultDisplay.textContent =
            playerScore === 5 ? "Congratulations! You won the game!" :
            "Computer won the game! Try again!";

        buttons.forEach(button => button.disabled = true);
    }
}

buttons.forEach(button => {
    button.addEventListener("click", playGame);
});

document.querySelector("#restart").addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;

    updateScore();

    playerChoiceDisplay.textContent = "Your choice: ";
    computerChoiceDisplay.textContent = "Computer choice: ";
    resultDisplay.textContent = "Let's play!";

    buttons.forEach(button => button.disabled = false);
});