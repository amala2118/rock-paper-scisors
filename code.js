/* NOW, IT'S TIME TO RECREATE THE GAME BY YOURSELF USING PSEUDOCODE, CREATE A NEW FILE AND START FROM SCRATCH */

/* Objectie, create a game where an user plays with a computer RPS.
It must contain three options, different possibilities, and five rounds.
Everything must be in the console */

/* EXTRA STEP, create the scores for the future round as variables, they will change everytime someone wins */

let humanScore= 0
let computerScore= 0


/* STEP1: Create the humanchoice function, this will contain a prompt to ask to type, RPS */


alert("Welcome to RPS, please use the console to see the results")

function getHumanChoice() {


const question = prompt("Rock, paper or scissors?").toLowerCase()

/* create an if condition to state if the user writes rock, paper, or scissors,
the console will output the message */

if (question === "rock") {
  console.log("rock")
  return "rock"
}

else if(question === "paper") {
  console.log("paper")
  return "paper"
  
}
/* make question.toLowerCase with two options, scissors or scissor */
else if (question === "scissors" || question.toLowerCase() === "scissor") {
  console.log("scissors")
  return "scissors"
  
}


}


/* Now, create a function that makes the computer choose between RPS */
function getComputerChoice() {

/* make a variable that stores an answer, use math.floor and math.random to create an option */
const choice = Math.floor(Math.random()* 3) + 1
/* the variable from above will create a random decimal and it will convert it to a normal one.
Make the number generated multiplies itself by 3 and adds 1, this is for creating the 3 options */

/* create the if condition to see if the number is either, 1, 2 or 3, it states RPS */
if (choice === 1) {
  console.log("rock")
  return "rock"
}

else if (choice === 2) {
  console.log("paper")
  return "paper"
}

else if (choice ===3) { /* you can either leave it like that or put else condition. The important is that is creating the options */
  console.log("scissors")
  return "scissors"
  /* make use of return to show the actual values, otherwise, you're producing output different from the result of the function */
}

}
/* Now create a function to play a round */




function playRound(humanChoice, computerChoice) /* make two parameters to receive later the responses from the first functions created */ {

/* create the conditions to see whether someone wins or loses */

if (humanChoice === "rock" && computerChoice === "paper") {
  console.log("you lose, paper beats rock")
  /* make use of the variables to change the score from 0 to 1 when someone wins or loses */
  console.log("computer:", computerScore = computerScore + 1)
  /* also state the 0 points from human */
  console.log("human:", humanScore = humanScore + 0)
}

else if (humanChoice === "paper" && computerChoice === "rock") {
  console.log("you win, paper beats rock")
  console.log("computer:", computerScore = computerScore + 0)
  console.log("human:", humanScore = humanScore + 1)
  /* do the same but reversed */
}

else if (humanChoice === "paper" && computerChoice === "scissors") {
  console.log("you lose, scissors beats paper")
  console.log("computer:", computerScore = computerScore + 1)
  console.log("human:", humanScore = humanScore + 0)

}

else if (humanChoice === "scissors" && computerChoice === "paper") {
  console.log("you win, scissors beats paper")
  console.log("computer:", computerScore = computerScore + 0)
  console.log("human:", humanScore = humanScore + 1)

}

else if (humanChoice === "rock" && computerChoice === "scissors") {
  console.log("you win, rock beats scissors")
  console.log("computer:", computerScore = computerScore + 0)
  console.log("human:", humanScore = humanScore + 1)
}

else if (humanChoice === "scissors" && computerChoice === "rock") {
  console.log("you lose, rock beats scissors")
  console.log("computer:", computerScore = computerScore + 1)
  console.log("human:", humanScore = humanScore + 0)
}

/* make else ifs to state a tie */
else if (humanChoice === "rock" && computerChoice === "rock") {
  console.log("A tie")
  console.log("computer:", computerScore = computerScore + 0)
  console.log("human:", humanScore = humanScore + 0)
}



/* make an else when the responses from human are incorrect */
else {
  console.log("tie")
}

}
/* make two variables to use them as arguments in playRound */

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

/* finish everything by stating the function */

playRound(humanSelection, computerSelection)

/* Now create a function for playing a game. You need that humanScore and computerScore reaches five, once that happens, the game ends */

function playGame() {
  /* It's important to create new variables to store the results from gethumanchoice and getcomputerchoice.
  If you se the humanSelection, and computerSelection, the results repeated will be the same */

let human = getHumanChoice();
let computer = getComputerChoice();

/* now state playRound with the new variables and below create an if condition that states the results */

playRound(human, computer);

/* make a condition to state if the scores are below five, the game keeps going */

if (humanScore < 5 && computerScore < 5) {
setTimeout(playGame, 5000)
}
/* make a condition to state if the scores reach five, they alert a message stating the winner */

else if (humanScore === 5) {
  alert("the winner is the human!")

}

else if (computerScore === 5) {
  alert("the winner is the computer!")
}

}


/* play the game */
setTimeout(playGame,5000)
