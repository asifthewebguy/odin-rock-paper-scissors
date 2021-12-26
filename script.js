let yourScore = 0;
let computerScore = 0;
let rounds = 5;

function computerPlay(){
    var options = ['Rock', 'Paper', 'Scissors'];
    var random = Math.floor(Math.random() * 3);
    return options[random];
}

function playRound(playerSelection, computerSelection){
    ps = playerSelection.toLowerCase();
    cs = computerSelection.toLowerCase();
    console.log(ps, cs);
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


function game(){
    let score = 0;
    for (let i = 0; i < rounds; i++) {
        const playerSelection = window.prompt("message", "rock");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("your score: " + yourScore + " & computer's score: " + computerScore);
    }
}
game();