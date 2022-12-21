import inquirer from 'inquirer';

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

const playerChoice = {
  type: 'list',
  name: 'playerSelection',
  message: 'Which would you like to pick?',
  choices: ['rock', 'paper', 'scissors'],
};

function playRound() {
  inquirer.prompt(playerChoice).then((answers) => {
    let player = answers.playerSelection;
    console.log(`You selected: ${player}`);
    let computer = computerChoice();
    console.log(`The computer selected: ${computer}`);
  });
}

playRound();