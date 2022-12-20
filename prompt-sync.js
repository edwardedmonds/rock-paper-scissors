import prompt from 'prompt-sync';

let question = prompt();

let name = question('What is your name? ');

console.log(`Hello ${name}`);
