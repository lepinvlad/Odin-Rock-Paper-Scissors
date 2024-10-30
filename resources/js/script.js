const mainDiv = document.querySelector(".box_screen");

// SCORE LOGIC
let userPoints = 0;
let computerPoints = 0;

const game_screen = document.createElement("div");
game_screen.classList.add("game_screen");

const playerScore = document.createElement("div");
playerScore.classList.add("score");
playerScore.textContent = `PLAYER SCORE IS ${userPoints}`;

const resultGame = ["USER WON!", "COMPUTER WON!", "DRAW"];
const whoWin = document.createElement("div");
whoWin.classList.add("who_win");
whoWin.textContent = resultGame[1];

const computerScore = document.createElement("div");
computerScore.classList.add("score");
computerScore.textContent = `COMPUTER SCORE IS ${computerPoints}`;

game_screen.append(playerScore, whoWin, computerScore);
mainDiv.children[1].insertAdjacentElement("afterend", game_screen);

// BUTTONS LOGIC
const buttonsName = ["Rock", "Paper", "Scissors"];

const gameButtons = document.createElement("div");
gameButtons.classList.add("game_buttons");

const rockButton = document.createElement("button");
rockButton.classList.add("rock_button");
rockButton.textContent = buttonsName[0];

const paperButton = document.createElement("button");
paperButton.classList.add("paper_button");
paperButton.textContent = buttonsName[1];

const scissorsButton = document.createElement("button");
scissorsButton.classList.add("scissors_button");
scissorsButton.textContent = buttonsName[2];

gameButtons.append(rockButton, paperButton, scissorsButton);

mainDiv.insertAdjacentElement("beforeend", gameButtons);

// Get computer's choice
function getComputerChoice() {
  let temp = Math.random();

  if (temp < 0.33) {
    return "Rock";
  } else if (temp < 0.66) {
    return "Paper";
  } else if (temp > 0.66) {
    return "Scissors";
  }
}

// Game Logic
function gameLogic(userChoice, computerChoice) {
  if (userChoice == "Rock") {
    if (computerChoice == "Paper") {
      whoWin.textContent = resultGame[1];
      computerPoints++;
      return { computerPoints, userPoints };
    } else if (computerChoice == "Scissors") {
      whoWin.textContent = resultGame[0];
      userPoints++;
      return { computerPoints, userPoints };
    } else {
      whoWin.textContent = resultGame[2];
      return { computerPoints, userPoints };
    }
  } else if (userChoice == "Paper") {
    if (computerChoice == "Rock") {
      whoWin.textContent = resultGame[0];
      userPoints++;
      return { computerPoints, userPoints };
    } else if (computerChoice == "Scissors") {
      whoWin.textContent = resultGame[1];
      computerPoints++;
      return { computerPoints, userPoints };
    } else {
      whoWin.textContent = resultGame[2];
      return { computerPoints, userPoints };
    }
  } else {
    if (computerChoice == "Rock") {
      whoWin.textContent = resultGame[1];
      computerPoints++;
      return { computerPoints, userPoints };
    } else if (computerChoice == "Paper") {
      whoWin.textContent = resultGame[0];
      userPoints++;
      return { computerPoints, userPoints };
    }else{
      whoWin.textContent = resultGame[2];
      return { computerPoints, userPoints };
    }
  }
}

//update points
function updateResult() {
  playerScore.textContent = `PLAYER SCORE IS ${userPoints}`;
  computerScore.textContent = `COMPUTER SCORE IS ${computerPoints}`;
  whoWin.style.visibility = "visible";
}

function startGame(e) {
  let user = e.target.textContent;
  let computer = getComputerChoice();
  gameLogic(user, computer);
  updateResult();
}

gameButtons.addEventListener("click", (e) => {
  startGame(e);
});
