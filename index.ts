#! /usr/bin/env node 
import inquirer from "inquirer";
import chlak from "chalk";

console.log(chlak.yellow("You have Three Chances to Win The Game!"));
let randomNumber =Math.floor(Math.random() * 10)
//let randomNumber = 7;

for (let i = 0; i <3 ; i++) {
  const callNumber = await inquirer.prompt([
    {
      message: chlak.blue("Please guess the Any Number Between 1 to 10 "),
      type: "number",
      name: "firstGuess",
    },
  ]);
  console.log(
    callNumber.firstGuess === randomNumber ? chlak.green ("You win The Game" ): chlak.red("Try Again")
  );
}

