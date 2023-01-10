import inquirer from 'inquirer';
import chalk from 'chalk';
import boxen from 'boxen';
import ora from 'ora';

const scoreCard = {
  numberOfRoundsToPlay: 0,
  numberOfRoundsPlayed: 0,
  playerName: '',
  playerWins: 0,
  computerWins: 0,
  ties: 0,
};

function computerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let computerSelection = Math.floor(Math.random() * 3);
  return choices[computerSelection];
}

async function playerChoice() {
  const playerItemChoice = {
    type: 'list',
    name: 'playerItemSelection',
    message: 'What item do you want to pick?',
    choices: ['rock', 'paper', 'scissors'],
  };

  return (await inquirer.prompt(playerItemChoice)).playerItemSelection;
}

async function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    scoreCard.ties++;
    return chalk.blue('tie!'.toUpperCase());
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    scoreCard.playerWins++;
    return chalk.green(`${scoreCard.playerName} wins!`.toUpperCase());
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection == 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
  ) {
    scoreCard.computerWins++;
    return chalk.magenta('computer wins!'.toUpperCase());
  }
}

function whoWinsTheGame() {
  if (scoreCard.playerWins > scoreCard.computerWins) {
    return `${scoreCard.playerName} wins the game!`.toUpperCase();
  } else if (scoreCard.playerWins < scoreCard.computerWins) {
    return 'computer wins the game!'.toUpperCase();
  } else {
    return 'tie game!'.toUpperCase();
  }
}

async function askHowManyRoundsToPlay() {
  const howManyRounds = {
    type: 'number',
    name: 'numberOfRoundsSelected',
    message: `How many rounds would you like to play ${scoreCard.playerName}?`,
    default: 5,
  };

  return (await inquirer.prompt(howManyRounds)).numberOfRoundsSelected;
}

async function askForPlayerName() {
  const whatIsYourName = {
    type: 'input',
    name: 'myNameIs',
    message: 'What is your name?',
    default: 'player1',
  };

  return (await inquirer.prompt(whatIsYourName)).myNameIs;
}

async function playGame() {
  console.log(
    boxen('Rock! Paper! Scissors!', { padding: 1, borderColor: 'cyan' })
  );

  scoreCard.playerName = await askForPlayerName();

  scoreCard.numberOfRoundsToPlay = await askHowManyRoundsToPlay();

  while (scoreCard.numberOfRoundsPlayed < scoreCard.numberOfRoundsToPlay) {
    let whoWon = await playRound(await playerChoice(), computerChoice());
    console.log(whoWon);
    scoreCard.numberOfRoundsPlayed++;
  }

  console.log(boxen(whoWinsTheGame(), { padding: 1, borderColor: 'cyan' }));
}

playGame();
