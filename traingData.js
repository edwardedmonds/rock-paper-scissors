const trainingData = [];
const numberOfTrainingExamples = 1000;

for (let i = 0; i < numberOfTrainingExamples; i++) {
  let playerChoice = Math.floor(Math.random() * 3);
  let computerChoice = Math.floor(Math.random() * 3);
  let outcome = (playerChoice + computerChoice) % 3;
  trainingData.push({
    input: [playerChoice, computerChoice],
    output: [outcome],
  });
}

console.log(trainingData);
