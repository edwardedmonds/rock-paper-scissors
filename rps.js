const prompt = require('prompt-sync')();
let colors = require('@colors/colors');

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
function playerChoice() {
  let playerSelection = prompt('Choose rock, paper, or scissors: ').toLowerCase();
  return playerSelection;
}

// make a function to return player verses computer choices
let playerWins = 0;
let computerWins = 0;

function playerVersusComputer() {
  let player = playerChoice();
  let computer = computerChoice();

  if (player == computer) {
    return 'Tie'.underline;
  } else if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
    playerWins++;
    return 'Player Wins'.underline;
  } else if ((computer === 'rock' && player === 'scissors') || (computer === 'paper' && player == 'rock') || (computer === 'scissors' && player === 'paper')) {
    computerWins++;
    return 'Computer Wins'.underline;
  }
}

// play round
function playRound() {
  return playerVersusComputer();
}

// playGame
function playGame(howManyRounds) {
  let numberOfRoundsToPlay = howManyRounds;

  console.log('---------');
  console.log('Rock, Paper, Scissors!'.rainbow);
  console.log(`Number of rounds we are going to play: ${numberOfRoundsToPlay}`);  
  console.log('---------');

  for (let numberOfRoundsPlayed = 1; numberOfRoundsPlayed <= numberOfRoundsToPlay; numberOfRoundsPlayed++) {
    console.log(`Round: ${numberOfRoundsPlayed}`);
    console.log(playRound());
    console.log('---');
  }

  if (playerWins > computerWins) {
    console.log('Player Wins!'.rainbow);
  } else if (playerWins < computerWins) {
    console.log('Computer Wins!'.rainbow);
  } else {
    console.log('Tie!'.rainbow);
  }
}

// prompt for how many games we should play then call playGame()
let numberOfRounds = prompt('How many rounds would you like to play? ');
playGame(numberOfRounds);