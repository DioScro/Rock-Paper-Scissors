function getComputerChoice() {
    let choice = (Math.floor (Math.random() * 3));

    if (choice === 0) {
        choice = ("Rock");
    } else if (choice === 1) {
        choice = ("Paper");
    } else {
        choice = ("Scissors");
    }
    return (choice);
}

function getHumanChoice() {
    let choice = (prompt("What is your choice?"));
    return (choice);
}

function playRound (humanChoice, computerChoice) {
    let humanChoiceFix = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    if (humanChoiceFix === "Rock") {
        if (computerChoice === "Paper") {
            console.log ("You lost! You chose Rock and your opponent chose Paper");
            computerScore = computerScore + 1;
        } else if (computerChoice === "Scissors") {
            console.log ("You won! You chose Rock and your opponent chose Scissors");
            humanScore = humanScore + 1;
        } else {
            console.log ("You tied! You and your opponent chose Rock");
        }
    } else if (humanChoiceFix === "Paper") {
        if (computerChoice === "Rock") {
            console.log ("You won! You chose Paper and your opponent chose Rock");
            humanScore = humanScore + 1;
        } else if (computerChoice === "Scissors") {
            console.log ("You lost! You chose Paper and your opponent chose Scissors");
            computerScore = computerScore + 1;
        } else {
            console.log ("You tied! You and your opponent chose Paper");
        }
    } else if (humanChoiceFix === "Scissors") {
        if (computerChoice === "Paper") {
            console.log ("You won! You chose Scissors and your opponent chose Paper");
            humanScore = humanScore + 1;
        } else if (computerChoice === "Rock") {
            console.log ("You lost! You chose Scissors and your opponent chose Rock");
            computerScore = computerScore + 1;
        } else {
            console.log ("You tied! You and your opponent chose Scissors");
        }
    } else {
        console.log ("Incorrect entry")
    }
    return humanScore, computerScore
}

let computerScore = 0
let humanScore = 0

function playGame () {
    playRound(getHumanChoice(), getComputerChoice())  
    playRound(getHumanChoice(), getComputerChoice()) 
    playRound(getHumanChoice(), getComputerChoice()) 
    playRound(getHumanChoice(), getComputerChoice()) 
    playRound(getHumanChoice(), getComputerChoice())   
    console.log ("Total Score: You - " + humanScore + " CPU - " + computerScore);
    if (humanScore > computerScore) {
        console.log ("You won :D");
    } else if (humanScore < computerScore) {
        console.log ("You lost D:");
    } else {
        console.log ("You tied :O");
    }
}

playGame()