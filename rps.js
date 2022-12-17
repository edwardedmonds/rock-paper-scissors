// make a function to return computer choice
function computerChoice() {
  let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
      return 'rock';
    } else if (computerSelection === 1) {
      return 'paper';
    } else if (computerSelection === 2) {
      return 'scissors';
    }
}

// make a function to return the player choice
function playerChoice(playerSelection) {
  return playerSelection;
}

// make a function to return player verses computer
function playerVersusComputer(playerSelection) {
  let computer = computerChoice();
  let player = playerChoice(playerSelection);
  return 'Player: ' + player + ', ' + 'Computer: ' + computer;
}

// game loop
function playGame(playerSelection) {
  let numberOfGamesToPlay = 5; 

  for (let gamesPlayed = 0; gamesPlayed <= numberOfGamesToPlay; gamesPlayed++) {
    console.log(playerVersusComputer(playerSelection));
  }
}

// run game
playGame('rock');