console.log("Good Luck!");

let getComputerChoice = Math.floor(Math.random() * 30);
let choice = "";
//console.log(getComputerChoice);

//convert number to R,P,or S
if (getComputerChoice <= 10) {
    choice = ("Rock")
} else if (getComputerChoice <= 20 && getComputerChoice >= 11) {
    choice = ("Paper")
} else if (getComputerChoice >= 21) {
    choice = ("Scissors")
}
//console.log(choice);

//Play the game once
