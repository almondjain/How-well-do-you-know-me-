//How well do you know me?
var takeInput = require('readline-sync'); 
const chalk = require('chalk');
var highestScore = 10;
var score = 0; 

var userName = takeInput.question(chalk.bgBlue.bold('Enter your name please?'))
console.log(chalk.bgGreen.bold('Welcome! Mr/Ms.',userName));

var questionOne = {
  question: chalk.bgBlue.bold("What is my Nick Name?"),
  answer: "Ashi",
}

var questionTwo = {
  question: chalk.bgBlue.bold("Where do I Live?"),
  answer: "Barara",
}

var questionThree = {
  question: chalk.bgBlue.bold("What is my DOB?"),
  answer: "4 Sep 2000",
}

var questionFour = {
  question: chalk.bgBlue.bold("Am I graduated?"),
  answer: "Yes",
}

var questionFive = {
  question: chalk.bgBlue.bold("Where do I born?"),
  answer: "Shahbaad",
}

var questionSix = {
  question: chalk.bgBlue.bold("Which flavor of Icecream I eat often?"),
  answer: "ButterScotch",
}

var questionSeven = {
  question: chalk.bgBlue.bold("What is my favourite food"),
  answer: "Paneer",
}

var questionEight = {
  question: chalk.bgBlue.bold("What is my Mother Name?"),
  answer: "Neeti Jain",
}

var questionNine = {
  question: chalk.bgBlue.bold("What is my Father name?"),
  answer: "Sunil Jain",
}

var questionTen = {
  question: chalk.bgBlue.bold("Do I have sibling?"),
  answer: "Yes",
}

//array of ojects
var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];

function play(question,answer)
{
  var userAnswer = takeInput.question(question);
    if(userAnswer.toUpperCase() === answer.toUpperCase())
    {
      console.log(chalk.bgGreen('Correct!'));
      score++;
    }
    else
    {
      console.log(chalk.bgRed('Incorrect!'));
      score--;
    }
}


for(var i=0;i<questions.length;i++)
{
  var question = questions[i];
  play(question.question,question.answer); 
}

if(highestScore<=score)
{
  console.log(chalk.bgGreen('Congratulations,You scored the highest!',score));
}


console.log(chalk.bgGreen('Highest Score is: ',highestScore));
console.log(chalk.bgRed('Congratulations,You scored:',score));

