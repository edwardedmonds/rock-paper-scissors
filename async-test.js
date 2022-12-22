import inquirer from 'inquirer';
import boxen from 'boxen';
import chalk from 'chalk';

async function playGame(numberOfRoundsToPlay = 5) {

  let gameSetup = {
    type: 'input',
    name: 'playerName',
    message: 'What is your name?',
    default: 'player1',
  }

  console.log(boxen('Welcome to Rock! Paper! Scissors!', {padding: 1, borderColor: 'cyan'}));

  await inquirer.prompt(gameSetup).then((answers) => {
    console.log(chalk.green(`Hello ${answers.playerName}, my name is Computer.`));
  });

  let playerChoice = {
    type: 'list',
    name: 'playerSelection',
    message: 'Which would you like to pick?',
    choices: ['rock', 'paper', 'scissors'],
  };
  
  for (let numberOfRoundsPlayed = 1; numberOfRoundsPlayed <= numberOfRoundsToPlay; numberOfRoundsPlayed++) {
    await inquirer.prompt(playerChoice).then((answers) => {
      console.log(`You choose: ${answers.playerSelection}`);
    });
  }
}

playGame();