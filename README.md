# Rock! Paper! Scissors!

Rock, paper, scissors game for The Odin Project.

![Rock, paper, scissors](./img/screenshot-1.gif 'Rock, Paper, Scissors Demo')
![Rock, paper, scissors](./img/screenshot-2.gif 'Rock, Paper, Scissors Demo')

## Installation

There are number of files in the root directory I used for testing
different solutions. The main file to play the game is rps.js which has
dependencies on chalk, inquirer, and boxen. You should be able to clone
and run this if you have npm and node installed. At the moment I do
not have the knowledge on how to make this portable.

## Notes

I implemented this project in Node.js to give myself a little more
challenge in this exercise and to have something "portfolio" worthy.
I felt doing console logs to the browser was cumbersome and detracted
away from the focus on learning the JavaScript language. Being able to
write and test in the integrated VSCode terminal was well worth the
hassle.

I experimented with a number of different solutions to get user
input including some synchronous packages like prompt-sync. I ended
up settling on the npm inquirer package which forced me to have to
wrap my mind around async/await operations as well as getting my
hands a little dirty with promises. I learned a lot.

I keep the player name and other parameters in a "scoreCard"
object to make testing conditions and setting them throughout
the program more straight forward and I broke down the program
into several functions to make both reading the code and
following the logic easier.

## Future Features

Although the game is relatively simple, there is a lot of features
I want to add to challenge my knowledge. I would like to add the ability
to save score card data to an external file that can be read which would
report historical scores and win percentages displayed with some kind
of TUI widget. And there is always room for some error checking. I would
also like to add the ability to set number of matches when the program is
launched with flags.

![Rock, paper, scissors, code](./img/screenshot-3.gif 'Rock, Paper, Scissors Demo')
