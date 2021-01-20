const rockButton = document.getElementById("rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", function(){
    let playerSelection = "rock";
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
});

paperButton.addEventListener("click", function() {
    let playerSelection = "paper";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener("click", function() {
    let playerSelection = "scissors";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

function computerPlay() {
    // Uses Math.random() to generate a number between 0-2
    let choice = Math.floor(Math.random() * 3);
    // Reassigns string value depending on which number
    switch(choice) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break; 
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    // Very verbose win checking that I am not a fan of
    // Makes selection case-insensitive with .toLowerCase()
    if (playerSelection == "rock" &&
    computerSelection == "rock") {
        console.log("tie");
        return "tie";
    } else if (playerSelection == "rock" &&
    computerSelection == "scissors") {
        console.log("win");
        return "win";
    } else if (playerSelection == "rock" &&
    computerSelection == "paper") {
        console.log("lose");
        return "lose";
    }

    if (playerSelection == "paper" &&
    computerSelection == "rock") {
        return "win";
    } else if (playerSelection == "paper" &&
    computerSelection == "paper") {
        return "tie";
    } else if (playerSelection == "paper" &&
    computerSelection == "scissors") {
        return "lose";
    }

    if(playerSelection == "scissors" &&
    computerSelection == "rock") {
        return "lose";
    } else if (playerSelection == "scissors" &&
    computerSelection == "paper") {
        return "win";
    } else if (playerSelection == "scissors" &&
    computerSelection == "scissors") {
        return "tie";
    }
}

// Lets user decide to play again or not
function playAgain() {
    if (prompt("Would you like to play again? (Yes/No)").toLowerCase() == "yes") {
        game();
    } else {
        alert("Thank you for playing! Have a good day.")
    }
}

// // Main game loop
// function game() {
//     // Variables to keep track of win/loss and round number
//     let round = 0;
//     let playerWin = 0;
//     let computerWin = 0;
//     let tieRound = 0;
//     console.log("Starting new game!");
//     // While loop that executes until round 5
//     // while (round <= 4) {
//     //     var playerSelection = prompt("Rock, paper, or scissors?");
//     //     var computerSelection = computerPlay();
//     //     console.log("Computer chose: " + computerSelection);
//     //     let result = playRound(playerSelection, computerSelection);
//     //     // Only advances round if there is not a tie
//     //     if (result == "win") {
//     //         playerWin++;
//     //         console.log("Player: " + playerWin);
//     //         round++;
//     //     } else if (result == "lose") {
//     //         computerWin++;
//     //         console.log("Computer: " + computerWin);
//     //         round++;
//     //     } else if (result =="tie") {
//     //         tieRound++;
//     //         console.log("Tie: " + tieRound);
//     //     }
//     // }
//     if (playerWin > computerWin){
//         console.log("You won!")
//     } else if (computerWin > playerWin) {
//         console.log("You lost. :(")
//     }
//     // playAgain();
// }

// game();