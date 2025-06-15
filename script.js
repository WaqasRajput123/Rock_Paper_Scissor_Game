// Selecting elements
const userScoreElement = document.querySelector(".user-score .Score p");
const computerScoreElement = document.querySelector(".computer-score .Score p");
const resultContainer = document.querySelector(".Game-result");
const resultText = document.querySelector(".Game-result p");

const choices = {
    rock: document.querySelector(".rock-image"),
    paper: document.querySelector(".paper-image"),
    scissors: document.querySelector(".scissor-image")
};

let userScore = 0;
let computerScore = 0;

// Generate computer choice randomly
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

// Determine winner
function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "draw";

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        return "user";
    }

    return "computer";
}

// Update UI based on result
function showResult(winner, userChoice, computerChoice) {
    if (winner === "user") {
        userScore++;
        userScoreElement.textContent = userScore;
        resultText.textContent = "You Won!";
        resultContainer.style.backgroundColor = "green";
    } else if (winner === "computer") {
        computerScore++;
        computerScoreElement.textContent = computerScore;
        resultText.textContent = "You Lose!";
        resultContainer.style.backgroundColor = "red";
    } else {
        resultText.textContent = "It's a Draw!";
        resultContainer.style.backgroundColor = "black";
    }
}

// Main game logic
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);
    showResult(winner, userChoice, computerChoice);
}

// Event listeners for user clicks
choices.rock.addEventListener("click", () => playGame("rock"));
choices.paper.addEventListener("click", () => playGame("paper"));
choices.scissors.addEventListener("click", () => playGame("scissors"));
