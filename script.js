const $ = (selector) => document.querySelector(selector);
const playerButtons= $('#playerButtons');
const humanScoreP = $('#humanScore');
const computerScoreP = $('#computerScore');
const container = $('.container');
const eventLog = $('#event-log')
let humanScore=0;
let computerScore=0;
humanScoreP.textContent = `Human Score= ${humanScore}`;
computerScoreP.textContent = `Computer Score= ${computerScore}`;

function getComputerChoice(){
    let caseNum= Math.floor(Math.random()*3);
    switch (caseNum){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}


function playRound(humanChoice,computerChoice){
    humanChoice=humanChoice.toLowerCase();
    if (humanChoice===computerChoice) return "draw";

    else if (humanChoice==="paper"){
        if (computerChoice==="scissors") return "computerWin";
        else if(computerChoice==="rock") return "humanWin";
    }

    else if(humanChoice==="rock"){
        if(computerChoice==="paper") return "computerWin";
        else if(computerChoice==="scissors") return "humanWin";

    }

    else if(humanChoice==="scissors"){
        if(computerChoice==="rock") return "computerWin";
        else if(computerChoice==="paper") return "humanWin";
    }
}

function camelToSpace(str) {
    return str.replace(/([A-Z])/g, " $1").toLowerCase();
}

playerButtons.addEventListener('click', (event) =>{
    const button= event.target.closest('button');

    if (!button) return;

    const playerChoice= button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result=playRound(playerChoice,computerChoice);
    if (result==='humanWin'){
        humanScore++;
        humanScoreP.textContent=`Human Score=${humanScore}`;
    }
    else if (result==='computerWin'){
        computerScore++;
        computerScoreP.textContent=`Computer Score=${computerScore}`;
    }
    const resultText=document.createElement('p');
    resultText.textContent=(`You chose ${playerChoice}. Computer chose ${computerChoice}. Result: ${camelToSpace(result)}`);
    eventLog.appendChild(resultText);
})
