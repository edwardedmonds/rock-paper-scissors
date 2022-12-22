import inquirer from 'inquirer';
import chalk from 'chalk';
import boxen from 'boxen';

const scoreCard = {
  playerWins: 0,
  computerWins: 0,
  ties: 0,
} 

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

async function playerChoice() {
  let playerItemChoice = {
    type: 'list',
    name: 'playerItemSelection',
    message: 'What item do you want to pick?',
    choices: ['rock', 'paper', 'scissors'],
  }

  let playerSelection = '';

  await inquirer.prompt(playerItemChoice).then((answer) => {
    playerSelection = answer.playerItemSelection;
  });

  return playerSelection;
}

async function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    scoreCard.ties++;
    return 'Tie';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
    scoreCard.playerWins++;
    return 'Player Wins';
  } else if ((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'paper' && playerSelection == 'rock') || (computerSelection === 'scissors' && playerSelection === 'paper')) {
    scoreCard.computerWins++;
    return 'Computer Wins';
  }
}

async function playGame() {

  console.log(boxen('Rock! Paper! Scissors!', {padding: 1, borderColor: 'cyan'}));

  playRound(await playerChoice(), computerChoice()).then((winner) => {
    console.log(winner);
  });
  console.log(scoreCard);
}

playGame();