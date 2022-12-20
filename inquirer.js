import inquirer from 'inquirer';

inquirer.prompt([
  {
    name: 'user_name',
    type: 'input',
    message: 'What is your name?',
  },])
  .then((answer) => {
    console.log('Hello ' + answer.user_name);
  });