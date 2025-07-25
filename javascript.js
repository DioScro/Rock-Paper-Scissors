function getComputerChoice() {
    let a = (Math.floor (Math.random() * 3));

    if (a === 0) {
        console.log ("Rock");
    } else if (a === 1) {
        console.log ("Paper");
    } else {
        console.log ("Scissors");
    }
    
}
  (getComputerChoice())



