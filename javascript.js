function getComputerChoice() {
    let choice = (Math.floor (Math.random() * 3));

    if (choice === 0) {
        console.log ("Rock");
    } else if (choice === 1) {
        console.log ("Paper");
    } else {
        console.log ("Scissors");
    }
    
}

function getHumanChoice() {
    let choice = (prompt("What is your choice?"))
    return choice
}

let humanScore = 0
let computerScore = 0

(getComputerChoice())
console.log (getHumanChoice())



