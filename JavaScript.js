
function getComputerChoice() {  /* pulls a random computer choice from 3 options*/ 
    let compChoices = ["Rock", "Paper", "Scissors"];
    let compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
    return compChoice.toUpperCase();
}

function getPlayerChoice() {    /*gets a player choice that is guaranteed to be ROCK, PAPER or SCISSORS*/
    let playerChoices;
    playerChoices = prompt("Please choose either: 'Rock', 'Paper' or 'Scissors: ");
    playerChoices = playerChoices.toUpperCase();

    while ((playerChoices !== "ROCK") && (playerChoices !== "PAPER") && (playerChoices !== "SCISSORS")) {
        playerChoices = prompt("Invalid selection. Please choose either: 'Rock', 'Paper' or 'Scissors: ");
        playerChoices = playerChoices.toUpperCase();
    }
    return playerChoices;
}

function roundRPS(computerChoice, playerChoice) {
    const outcomeWin = `You win! ${playerChoice} beats ${computerChoice}!`
    const outcomeLose = `You lose! ${computerChoice} beats ${playerChoice}...`
    const outcomeDraw = `Draw!`

    if (playerChoice === "ROCK") {
        if (computerChoice === "PAPER") {
            console.log(outcomeLose);
            return "lose";
        } else if (computerChoice === "SCISSORS") {
            console.log(outcomeWin);
            return "win";
        } else {
            console.log(outcomeDraw);
            return "draw";
        }
    }

    if (playerChoice === "SCISSORS") {
        if (computerChoice === "ROCK") {
            console.log(outcomeLose);
            return "lose";
        } else if (computerChoice === "PAPER") {
            console.log(outcomeWin);
            return "win";
        } else {
            console.log(outcomeDraw);
            return "draw";
        }
    }

    if (playerChoice === "PAPER") {
        if (computerChoice === "SCISSORS") {
            console.log(outcomeLose);
            return "lose";
        } else if (computerChoice === "ROCK") {
            console.log(outcomeWin);
            return "win";
        } else {
            console.log(outcomeDraw);
            return "draw";
        }
    }
}


// plays a game that is first to 5

function gameRPS() {
    let computerCount = 0;
    let playerCount = 0; 

    while ((playerCount < 5) && (computerCount < 5)) {
        let result;
        console.log(`Player: ${playerCount} Opponent: ${computerCount}`)
        result = roundRPS(getComputerChoice(), getPlayerChoice());
        if (result === "win") {
            playerCount++;
        } else if (result === "lose") {
            computerCount++;
        } else {
            continue;
        }
    }

    (playerCount > computerCount) ?
    console.log(`You won! Final score: ${playerCount} - ${computerCount}`) :
    console.log(`You lose! Final score: ${playerCount} - ${computerCount}`);

    
}

gameRPS()
