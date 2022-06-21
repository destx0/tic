function computerPlay() {
  let randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    default:
      return "scissor";
  }
}
let computerSelection = computerPlay();
let playerSelection = prompt("enter your move");
console.log(computerSelection);

function game(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Match Draw!!";
  }if
  
}

console.log(game(playerSelection, computerSelection));
