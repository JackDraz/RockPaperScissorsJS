function getComputerChoice() {  /* pulls a random computer choice from 3 options*/ 
    let compChoices = ["Rock", "Paper", "Scissors"];
    let compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
    return compChoice.toUpperCase();
}

function checkWinner() {
    //checks for winner and presents message if one is found
    if (playerCount === 5 || computerCount === 5) {
        if (playerCount > computerCount) {
            finalScore.style.color = "green";
            finalScore.textContent = `You win!! Final score is You: ${playerCount} - Computer ${computerCount}`;
        } else {
            finalScore.style.color = "red";
            finalScore.textContent = `You lose... Final score is You: ${playerCount} - Computer ${computerCount}`;
        }

        playerCount = 0; 
        computerCount = 0;
        runningScore.textContent = `Player: ${playerCount} Opponent: ${computerCount}`;
    }
    console.log("test");
}

function roundRPS(computerChoice, playerChoice) {
    // Updated to take in click events as opposed to text
    const outcomeWin = `You win! ${playerChoice} beats ${computerChoice}!`;
    const outcomeLose = `You lose! ${computerChoice} beats ${playerChoice}...`;
    const outcomeDraw = `Draw! Both players picked ${playerChoice}`;

    //resets final score text
    finalScore.textContent = "";

    //round mechanics
    if (playerChoice === computerChoice) {
        roundOutcome.textContent = outcomeDraw;
        return;
    }

    if (playerChoice === "ROCK") {
        if (computerChoice === "PAPER") {
            roundOutcome.textContent = outcomeLose;
            computerCount++;
        } else {
            roundOutcome.textContent = outcomeWin;
            playerCount++;
        }
    }

    if (playerChoice === "SCISSORS") {
        if (computerChoice === "ROCK") {
            roundOutcome.textContent = outcomeLose;
            computerCount++;
        } else {
            roundOutcome.textContent = outcomeWin;
            playerCount++;
        }
    }

    if (playerChoice === "PAPER") {
        if (computerChoice === "SCISSORS") {
            roundOutcome.textContent = outcomeLose;
            computerCount++;
        } else {
            roundOutcome.textContent = outcomeWin;
            playerCount++;
        }
    }

    runningScore.textContent = `Player: ${playerCount} Opponent: ${computerCount}`;
}

// adding DOM/Listeners
function playerChoiceClick(e) {
    roundRPS(getComputerChoice(), e.srcElement.classList.value);
    checkWinner();
}

function gameRPS() {
    // game structure/info targeting
    const container = document.querySelector(".game-info");
    container.appendChild(runningScore);
    roundOutcome.textContent = "Choose your move...!"
    container.appendChild(roundOutcome);
    container.appendChild(finalScore);
    
    // creates array of nodes from HTML classes, using names as playerChoice variable
    const choices = document.querySelectorAll("button");
    choices.forEach(choice => choice.addEventListener("click", playerChoiceClick));
}

//game set up + method
let roundOutcome = document.createElement('p');
let runningScore = document.createElement('p');
const finalScore = document.createElement('p');
let computerCount = 0;
let playerCount = 0; 

gameRPS();