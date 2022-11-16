console.log("Good Luck!");

let getComputerChoice = Math.floor(Math.random() * 30);
let choice = "";
let computerSelection = "";
//console.log(getComputerChoice);

//convert number to R,P,or S
if (getComputerChoice <= 10) {
    computerSelection = ("rock")
} else if (getComputerChoice <= 20 && getComputerChoice >= 11) {
    computerSelection = ("paper")
} else if (getComputerChoice >= 21) {
    computerSelection = ("scissors")
}
console.log(computerSelection);

//Play the game once
