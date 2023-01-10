import inquirer from 'inquirer';
import boxen from 'boxen';

const scoreCard = {
  numberOfRoundsToPlay: 0,
  numberOfRoundsPlayed: 0,
  playerName: '',
  playerWins: 0,
  computerWins: 0,
  ties: 0,
};

async function playerChoice() {
  const playerItemChoice = {
    type: 'list',
    name: 'playerItemSelection',
    message: 'What item do you want to pick?',
    choices: ['rock', 'paper', 'scissors'],
  };

  return (await inquirer.prompt(playerItemChoice)).playerItemSelection;
}

function computerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let computerSelection = Math.floor(Math.random() * 3);
  return choices[computerSelection];
}

async function playRound() {
  const playerSelection = await playerChoice();
  const computerSelection = computerChoice();

  const choices = { rock: 0, paper: 1, scissors: 2 };
  const result = (choices[playerSelection] + choices[computerSelection]) % 3;
  const outcomes = ['Tie', 'Computer wins', 'Player wins'];

  // result will be 0 if the result is a tie, 1 if the computer wins and 2 if the player wins.
  return { outcome: outcomes[result], computerChoice: computerSelection };
}

function determineWinner() {
  const { playerName, playerWins, computerWins } = scoreCard;
  return playerWins > computerWins
    ? `${playerName} wins!`
    : playerWins < computerWins
    ? 'Computer wins!'
    : 'Tie game!';
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
    let { outcome, computerChoice } = await playRound();
    console.log(`Computer chose ${computerChoice}. ${outcome}!`);
    scoreCard.numberOfRoundsPlayed++;
  }

  console.log(boxen(determineWinner(), { padding: 1, borderColor: 'cyan' }));
}

playGame();
