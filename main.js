// random rps choice
function computerPlay() {
    let compOptions = ["rock", "paper", "scissors"]; // 0, 1, 2
    let compChoice = compOptions[Math.floor(Math.random() * 3)];
    return compChoice;
}


let rounds = 0;
let wins = 0;


const playerScore = document.getElementById('player-score');
const compScore = document.getElementById('computer-score');
const output = document.getElementById('text-output');
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', round));

//Initial scores
playerScore.innerHTML = 0;
compScore.innerHTML = 0;


function round() {
    let playerSelect = this.id;
    let computerSelect = computerPlay();


    if (playerSelect === computerSelect) {
        output.innerHTML = 'Tie!';
        // rounds--;
    }
    else if (playerSelect === 'rock') {
        switch (computerSelect) {
            case 'paper':
                output.innerHTML = 'Paper covers rock, you lose!';
                compScore.innerHTML++;
                break;
            default:
                output.innerHTML = 'Those scissors never stood a chance. Nice job!';
                playerScore.innerHTML++;
        }
    }
    else if (playerSelect === 'paper') {
        switch (computerSelect) {
            case 'rock':
                output.innerHTML = 'Nice job, paper covers rock!';
                playerScore.innerHTML++;
                break;
            default:
                output.innerHTML = 'The scissors ended you. Maybe next time!';
                compScore.innerHTML++;
        }
    }
    else if (playerSelect === 'scissors') {
        switch (computerSelect) {
            case 'paper':
                output.innerHTML = 'You cut that paper with no problem!';
                playerScore.innerHTML++;
                break;
            default:
                output.innerHTML = 'Maybe next time... not enough for The Rock';
                compScore.innerHTML++;
        }
    }

}