let yourScore = 0;
let computerScore = 0;
let rounds = 5;

let scoreBoard = [];
// getting buttons
let psButton = document.getElementsByClassName('psButton');

function computerPlay(){
    var options = ['Rock', 'Paper', 'Scissors'];
    var random = Math.floor(Math.random() * 3);
    return options[random];
}

function playRound(playerSelection, computerSelection){
    ps = playerSelection;
    cs = computerSelection;
    console.log(ps, cs);
    let round = { pSelection: ps, cSelection: cs };
    scoreBoard.push(round); 
    if (ps == "rock" && cs == "scissors") {
        yourScore +=1;
        return "You Win!, Rock beats Scissors!";
    }else if(ps == "rock" && cs == "paper") {
        computerScore +=1;
        return "You Lose! Paper beats Rock";
    }else{
        rounds += 1;
        return "It's a tie! Play again.";
    }
}

function gameCalculation(){

}

function game(){
    for (let i = 0; i < rounds; i++) {
        const playerSelection = psButton.dataset;
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("your score: " + yourScore + " & computer's score: " + computerScore);
    }
}
// game();
// const buttonSection = document.getElementsByClassName('buttons')[0];
// buttonSection.style.display = "none";