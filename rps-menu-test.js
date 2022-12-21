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


function playRound() {
  let playerChoice = {
    type: 'list',
    name: 'playerSelection',
    message: 'Which would you like to pick?',
    choices: ['rock', 'paper', 'scissors'],
  };

  inquirer.prompt(playerChoice).then((answers) => {
    let player = answers.playerSelection;
    console.log(`You selected: ${player}`);
    let computer = computerChoice();
    console.log(`The computer selected: ${computer}`);
  });
}


function playGame() {

  let gameSetup = [
    {
      name: 'playerName',
      type: 'input',
      message: 'What is your name?',
    },
    {
      name: 'howManyRoundsToPlay',
      type: 'number',
      message: 'How many rounds would you like to play?',
    },
  ];

  console.log('Welcome to Rock, Paper, Scissors. A game of ESP brute force!');

  inquirer.prompt(gameSetup).then((answers) => {
    let numberOfRoundsToPlay = answers.howManyRoundsToPlay;
    let playerName = answers.playerName;
    console.log(`Hello ${playerName}! We will play ${numberOfRoundsToPlay} rounds.`);
    
    for (let numberOfRoundsPlayed = 1; numberOfRoundsPlayed <= numberOfRoundsToPlay; numberOfRoundsPlayed++) {
      playRound();
    }
  });

}

playGame();