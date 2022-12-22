import inquirer from 'inquirer';

async function playGame(numberOfRoundsToPlay = 5) {  
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