console.log("Good Luck!");

const getComputerChoice = Math.floor(Math.random() * 30);


let computerSelection = "";
let playerSelection = "rock";
//console.log(computerSelection);

//convert number to R,P,or S
//getComputerChoice()
if (getComputerChoice <= 10) {
    computerSelection = ("rock")
} else if (getComputerChoice <= 20 && getComputerChoice >= 11) {
    computerSelection = ("paper")
} else if (getComputerChoice >= 21) {
    computerSelection = ("scissors")
}
console.log(computerSelection);

//Play the game once
function playRound (playerSelection, computerSelection) {

}
