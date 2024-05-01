#! /user/bin/env node

import inquirer from "inquirer"

// 1) computer will generate a random num
// 2) user input for guessing num
// 3) compare user input to computer generated num and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);



// const randomNumber = 13;
const answer = await inquirer.prompt(
    [
        {
       name:"userGuessedNumber",
       message: "Please guess a number between 1-10",
       type: "number"
    
   }
        
]
 );
// console.log(answer);

if (answer.userGuessedNumber === randomNumber){
    console.log("\n\tcongratulations! you guess right number :)\n ")
 } 
else {
 console.log("\n\tyou guess wrong number :(\n")
 };
