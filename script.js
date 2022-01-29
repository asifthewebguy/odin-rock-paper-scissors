let yourScore = 0;
let computerScore = 0;
let rounds = 5;
let scoreBoard = [];
const messages = [
    "You Win!, Rock beats Scissors!",
    "You Lose! Paper beats Rock",
    "You Win!, Paper beats Rock!",
    "You Lose! Scissors beats Paper",
    "You Win!, Scissors beats paper!",
    "You Lose! Rock beats Scissors",
    "It's a tie! Play again.",
    "Game Over! You Win!",
    "Game Over! Computer Wins!",
    "Whats your next Move?",
    "Only 2 Rounds left. Whats your next Move?",
    "Final Round!",
    "What are your waiting for?",
    "Choose your weapon!",
];
// message element
let messageDisplayElement = document.getElementsByClassName('descR')[0];
// scoreboard elements
const pSE = document.getElementsByClassName('yourscore')[0];
const cSE = document.getElementsByClassName('compscore')[0];

// getting buttons
let psButton = document.getElementsByClassName('psButton');
// getting reset button
const resetBtn = document.getElementsByClassName('result')[4].getElementsByTagName('button')[0];
// adding event listener to the buttons
for (let i = 0; i < psButton.length; i++) {
    let psdata = psButton[i].getAttribute('data');
    psButton[i].addEventListener('click', () => { playerSelection(psdata); });

}
// button section
const buttonSection = document.getElementsByClassName('buttons')[0];

let resultSect = document.getElementsByClassName('result');
resetResultDisplay();

// computer selection
function computerPlay() {
    var options = ['rock', 'paper', 'scissors'];
    var random = Math.floor(Math.random() * 3);
    return options[random];
}

// takes user result and starts game round
function playerSelection(selection) {
    buttonSection.style.display = "none";
    playRound(selection, computerPlay());
}

// displays appropriate result on screen
function displayResults(id, location = "") {
    if (id == 4) {
        for (let i = 0; i < resultSect.length; i++) {
            resultSect[i].style.display = "none";
        }
        resultSect[id].style.display = "flex";
    } else {
        resultSect[id].style.display = "flex";
        if (location == 'flip') {
            resultSect[id].getElementsByTagName('img')[0].classList.add("flip");
        }
        uSB(yourScore, computerScore);

        setTimeout(
            resetResultDisplay, 3000
        );
    }
}

// resets result display
function resetResultDisplay() {
    if (rounds >= 1) {
        buttonSection.style.display = "block";
        for (let i = 0; i < resultSect.length; i++) {
            resultSect[i].style.display = "none";
        }
        game(1, 1);
    } else {
        game(1, 1);
    }

}

// update score on screen
function uSB(ys, cs) {
    pSE.innerHTML = ys;
    cSE.innerHTML = cs;
}


function playRound(playerSelection, computerSelection) {
    ps = playerSelection;
    cs = computerSelection;
    let round = { pSelection: ps, cSelection: cs };

    function gameProcess(r, ys, cs, dr1, dr2, w, m) {
        rounds += r;
        yourScore += ys;
        computerScore += cs;
        displayResults(dr1, dr2);
        round.winner = w;
        round.message = messages[m];
    }

    if (ps == "rock" && cs == "scissors") {
        gameProcess(-1, 1, 0, 2, "flip", "you", 0);
    } else if (ps == "rock" && cs == "paper") {
        gameProcess(-1, 0, 1, 0, "", "computer", 1);
    } else if (ps == "paper" && cs == "rock") {
        gameProcess(-1, 1, 0, 0, "flip", "you", 2);
    } else if (ps == "paper" && cs == "scissors") {
        gameProcess(-1, 0, 1, 1, "", "computer", 3);
    } else if (ps == "scissors" && cs == "paper") {
        gameProcess(-1, 1, 0, 1, "flip", "you", 4);
    } else if (ps == "scissors" && cs == "rock") {
        gameProcess(-1, 0, 1, 2, "", "computer", 5);
    } else {
        gameProcess(0, 0, 0, 3, "", "tie", 6);
    }
    scoreBoard.push(round);

    game(scoreBoard.length - 1, 0);
}

function game(i, time) {
    if (time == 0) {
        if (rounds >= 1) {
            messageDisplayElement.classList.add("gameMessage");
            messageDisplayElement.innerHTML = scoreBoard[i].message;
            console.log(i, scoreBoard[i].message);
        } else if (rounds == 0 && yourScore > computerScore) {
            messageDisplayElement.innerHTML = messages[7];
            displayResults(4, "");
        } else {
            messageDisplayElement.innerHTML = messages[8];
            displayResults(4, "");
        }
    } else if (time == 1) {
        if (rounds == 1) {
            messageDisplayElement.innerHTML = messages[11];
        } else if (rounds == 2) {
            messageDisplayElement.innerHTML = messages[10];
        } else if (rounds == 5) {

        }
    } else {
        messageDisplayElement.innerHTML = messages[i];
    }
}

function restart() {
    resetBtn.addEventListener('click', () => {
        window.location.reload();
    });
    const descCon = document.getElementsByTagName('header')[0];
    descCon.innerHTML = "<h1>Rock Paper Scissors</h1><div class='source'><a href='https://github.com/asifthewebguy/odin-rock-paper-scissors' rel='noreferrer' target='_blank'><img src='./assets/github.svg' alt='github'/></a></div>";
}
restart();

setTimeout(
    game(1, 1),
    30000
);

function resize() {
    let width = screen.width;
    console.log(width);
    if (width < 500) {
        document.querySelectorAll("header > h1")[0].style.fontSize = "40px";
        // console.log(header);
    }
}
resize();