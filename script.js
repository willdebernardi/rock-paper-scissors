function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break; 
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "rock") {
        return "tie";
    } else if (playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "scissors") {
        return "win";
    } else if (playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "paper") {
        return "lose";
    }

    if (playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock") {
        return "win";
    } else if (playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "paper") {
        return "tie";
    } else if (playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "scissors") {
        return "lose";
    }

    if(playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "rock") {
        return "lose";
    } else if (playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "paper") {
        return "win";
    } else if (playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "scissors") {
        return "tie";
    }
}

function playAgain() {
    if (prompt("Would you like to play again?").toLowerCase() == "yes") {
        game();
    } else {
        alert("Thank you for playing! Have a good day.")
    }
}

function game() {
    let round = 0;
    let playerWin = 0;
    let computerWin = 0;
    let tieRound = 0;
    console.log("Starting new game!");
    while (round <= 4) {
        var playerSelection = prompt("Rock, paper, or scissors?");
        var computerSelection = computerPlay();
        console.log("Computer chose: " + computerSelection);
        let result = playRound(playerSelection, computerSelection);
        if (result == "win") {
            playerWin++;
            console.log("Player: " + playerWin);
            round++;
        } else if (result == "lose") {
            computerWin++;
            console.log("Computer: " + computerWin);
            round++;
        } else if (result =="tie") {
            tieRound++;
            console.log("Tie: " + tieRound);
        }
    }
    if (playerWin > computerWin){
        console.log("You won!")
    } else if (computerWin > playerWin) {
        console.log("You lost. :(")
    }
    playAgain();
}

game();