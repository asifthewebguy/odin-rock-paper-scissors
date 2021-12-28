let yourScore = 0;
let computerScore = 0;
let rounds = 5;
let scoreBoard = [];

let pSE = document.getElementsByClassName('yourscore')[0];
let cSE = document.getElementsByClassName('compscore')[0];

// getting buttons
let psButton = document.getElementsByClassName('psButton');

// adding event listener to the buttons
for (let i = 0; i < psButton.length; i++) {
    let psdata = psButton[i].getAttribute('data');
    psButton[i].addEventListener('click', ()=>{ playerSelection(psdata);});
    
}
// button section
const buttonSection = document.getElementsByClassName('buttons')[0];



let resultSect = document.getElementsByClassName('result');
resetResultDisplay();

function computerPlay(){
    var options = ['rock', 'paper', 'scissors'];
    var random = Math.floor(Math.random() * 3);
    return options[random];
}

function playerSelection(selection){
    buttonSection.style.display = "none";
    playRound(selection, computerPlay());
    console.log(selection);
}

function displayResults(id, location =""){
    resultSect[id].style.display = "flex";
    if(location == 'flip'){
        resultSect[id].getElementsByTagName('img')[0].classList.add("flip");
    }
    uSB(yourScore,computerScore);
    setTimeout(
        resetResultDisplay, 3000
    );
}

function resetResultDisplay(){
    buttonSection.style.display = "block";
    for(let i =0; i < resultSect.length; i++){
        resultSect[i].style.display = "none";
    }
}

function uSB(ys, cs) {
    pSE.innerHTML = ys;
    cSE.innerHTML = cs;
}

function playRound(playerSelection, computerSelection){
    ps = playerSelection;
    cs = computerSelection;
    console.log(ps, cs);
    let round = { pSelection: ps, cSelection: cs };
    if (ps == "rock" && cs == "scissors") {
        yourScore +=1;
        displayResults(2,"flip");
        message = "You Win!, Rock beats Scissors!";
        round.winner = "you";
        round.message = message;
    }else if(ps == "rock" && cs == "paper") {
        computerScore +=1;
        displayResults(0,"");
        message = "You Lose! Paper beats Rock";
        round.winner = "computer";
        round.message = message;
    }else if(ps == "paper" && cs == "rock"){
        yourScore +=1;
        displayResults(0,"flip");
        message = "You Win!, Paper beats Rock!";
        round.winner = "you";
        round.message = message;
    }else if(ps == "paper" && cs == "scissors"){
        computerScore +=1;
        displayResults(1,"");
        message = "You Lose! Scissors beats Paper";
        round.winner = "computer";
        round.message = message;
    }else if(ps == "scissors" && cs == "paper"){
        yourScore +=1;
        displayResults(1,"flip");
        message = "You Win!, Scissors beats paper!";
        round.winner = "you";
        round.message = message;
    }else if(ps == "scissors" && cs == "rock"){
        computerScore +=1;
        displayResults(2,"");
        message = "You Lose! Rock beats Scissors";
        round.winner = "computer";
        round.message = message;
    }else{
        rounds += 1;
        displayResults(3,"");
        message = "It's a tie! Play again.";
        round.winner = "tie";
        round.message = message;
    }
    scoreBoard.push(round); 
}

function game(){
    if(round <= 1){

    }
}