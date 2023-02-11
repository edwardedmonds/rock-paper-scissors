import inquirer from 'inquirer';

const scoreCard = {
  numberOfRoundsToPlay: 0,
  numberOfRoundsPlayed: 0,
  playerName: '',
  playerWins: 0,
  computerWins: 0,
  ties: 0,
};

const choices = {
  0: 'rock',
  1: 'paper',
  2: 'scissors',
};

const outcomeLookup = {
  2: 'Player wins',
  1: 'Computer wins',
  0: 'Tie',
};

async function playerChoice() {
  const playerItemChoice = {
    type: 'list',
    name: 'playerItemSelection',
    message: 'What item do you want to pick?',
    choices: ['rock', 'paper', 'scissors'],
  };

  const playerSelection = (await inquirer.prompt(playerItemChoice))
    .playerItemSelection;
  return playerSelection === 'rock' ? 0 : playerSelection === 'paper' ? 1 : 2;
}

function computerChoice() {
  return Math.floor(Math.random() * 3);
}

async function playRound() {
  const playerSelection = await playerChoice();
  const computerSelection = computerChoice();

  const result = (playerSelection + computerSelection) % 3;

  updateScoreCard(result);

  // Result will be 0 if the result is a tie, 1 if the computer wins and 2 if the player wins.
  return {
    outcome: result,
    playerChoice: playerSelection,
    computerChoice: computerSelection,
  };
}

function updateScoreCard(result) {
  result === 2
    ? scoreCard.playerWins++
    : result === 1
    ? scoreCard.computerWins++
    : scoreCard.ties++;
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

  scoreCard.numberOfRoundsToPlay = (
    await inquirer.prompt(howManyRounds)
  ).numberOfRoundsSelected;
}

async function askForPlayerName() {
  const whatIsYourName = {
    type: 'input',
    name: 'myNameIs',
    message: 'What is your name?',
    default: 'player1',
  };

  scoreCard.playerName = (await inquirer.prompt(whatIsYourName)).myNameIs;
  outcomeLookup[2] = `${scoreCard.playerName} wins`;
}

function logRoundOutcome(roundNumber, playerChoice, computerChoice, outcome) {
  let outcomeString = outcomeLookup[outcome];
  console.log(
    `Round ${roundNumber + 1}: ${choices[playerChoice]} vs ${
      choices[computerChoice]
    } - ${outcomeString}`
  );
}

async function playGame() {
  console.log('Rock, paper, scissors');

  await askForPlayerName();

  await askHowManyRoundsToPlay();

  while (scoreCard.numberOfRoundsPlayed < scoreCard.numberOfRoundsToPlay) {
    let { outcome, playerChoice, computerChoice } = await playRound();
    logRoundOutcome(
      scoreCard.numberOfRoundsPlayed,
      playerChoice,
      computerChoice,
      outcome
    );
    scoreCard.numberOfRoundsPlayed++;
  }

  console.log(determineWinner());
}

playGame();
