import prompt from 'prompt-sync';

// Wrapper function to make prompt from prompt-sync human readable
function askUserQuestion(question) {
  let questionToAsk = prompt();
  return questionToAsk(question);
}

// Function to return a random computer choice
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

// Function to get the player choice
function playerChoice() {
  let playerSelection = askUserQuestion('Choose rock, paper, or scissors: ').toLowerCase();
  return playerSelection;
}

// Function to compare player verses computer choices
let playerWins = 0;
let computerWins = 0;

function playerVersusComputer() {
  let player = playerChoice();
  let computer = computerChoice();

  if (player == computer) {
    return 'Tie';
  } else if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
    playerWins++;
    return 'Player Wins';
  } else if ((computer === 'rock' && player === 'scissors') || (computer === 'paper' && player == 'rock') || (computer === 'scissors' && player === 'paper')) {
    computerWins++;
    return 'Computer Wins';
  }
}

// Wrapper sugar
function playRound() {
  return playerVersusComputer();
}

// Function for main game loop
function playGame(howManyRounds) {
  let numberOfRoundsToPlay = howManyRounds;

  console.log('---------');
  console.log(`Sweet, we will play ${numberOfRoundsToPlay} rounds!`);  
  console.log('---------');

  for (let numberOfRoundsPlayed = 1; numberOfRoundsPlayed <= numberOfRoundsToPlay; numberOfRoundsPlayed++) {
    console.log(`Round: ${numberOfRoundsPlayed}`);
    console.log(playRound());
    console.log('---');
  }

  if (playerWins > computerWins) {
    console.log('Player Wins!');
  } else if (playerWins < computerWins) {
    console.log('Computer Wins!');
  } else {
    console.log('Tie!');
  }
}

// Ask the user how many games we should play then call playGame()
console.log('Welcome to Rock, Paper, Scissors. A game of ESP brute force!');
let numberOfRounds = askUserQuestion('How many rounds would you like to play? ');
playGame(numberOfRounds);