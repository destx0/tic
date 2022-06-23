let num = prompt("no of rounds");


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

function game(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Match Draw!!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "player wins!";
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    return "computer wins!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "computer wins!";
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    return "player wins";
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    return "computer wins!";
  } else {
    return "Player wins!";
  }
}
function round() {
  let computerSelection = computerPlay();
  let playerSelection = prompt("enter your move");
  console.log("player - " + playerSelection);
  console.log("computer - " + computerSelection);
  return game(playerSelection, computerSelection);
}
// document.getElementById("result").innerHTML = game(playerSelection, computerSelection);
// console.log(game(playerSelection, computerSelection));

for (var i = 0; i < num; i++) {
  console.log(round());
  console.log("=".repeat(10));
}
