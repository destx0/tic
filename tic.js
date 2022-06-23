let num = 5;
let playerSelection = "paper"
const computerh = document.getElementById('computer');
const result = document.getElementById('result');
const player =document.getElementById('player');

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
    return "computer wins!";
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    return "player wins!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "player wins";
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    return "computer wins!";
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    return "computer wins!";
  } else {
    return "Player wins!";
  }
}
function round() {
  let computerSelection = computerPlay();
  computerh.innerText = "computer- " + computerSelection
  // let playerSelection = prompt("enter your move");
  console.log("player - " + playerSelection);
  console.log("computer - " + computerSelection);
  return game(playerSelection, computerSelection);
}
// document.getElementById("result").innerHTML = game(playerSelection, computerSelection);
// console.log(game(playerSelection, computerSelection));

// for (var i = 0; i < num; i++) {
//   console.log(round());
//   console.log("=".repeat(10));
// }
// alert(round());
function sel(val){
  playerSelection = val
  player.innerText = "player- " + playerSelection
  result.innerText =  round();
}