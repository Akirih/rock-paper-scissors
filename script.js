function getComputerChoice (){
    let cpu = Math.floor(Math.random()*3);
    if (cpu === 0) return ("rock");
    else if (cpu === 1) return("paper");
    else return ("scissor");
}
// 
function getPlayerChoice (e){
    //console.log (this.dataset.rps);
    //console.log(playerSelection);
    options.forEach(option => option.classList.remove("selected"));
    this.classList.add("selected");
    playerSelection = this.dataset.rps;
}
// 
function playRound (player, cpu){
    let playerLC = player;
    let cpuLC = cpu.toLowerCase();

    console.log(playerLC,cpuLC)

    if (!playerLC){ 
        alert ("No choice made");
        return;
    }
    // Test for Draw and Player Win conditions, else returns CPU win
    if (playerLC === cpuLC){
        // alert("Draw");
    }else if (
        (playerLC === "rock" && cpuLC === "scissor") ||
        (playerLC === "paper" && cpuLC === "rock") ||
        (playerLC === "scissor" && cpuLC === "paper")
        ){
            playerScore++;
            document.getElementById("player-score").innerHTML = playerScore;
    }else {
        computerScore++;
        document.getElementById("cpu-score").innerHTML = computerScore;
    }

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) alert ("PLAYER WINS")
        else alert ("CPU WINS");
        playerScore = 0;
        computerScore = 0;
        document.getElementById("player-score").innerHTML = playerScore;
        document.getElementById("cpu-score").innerHTML = computerScore;
        toggleVisible();
    }

}
// 
function playGame(){
    let computerSelection;
    computerSelection = getComputerChoice();
    options.forEach(option => option.classList.remove("selected"));
    playRound(playerSelection, computerSelection);
    playerSelection = null;
}

function toggleVisible(e) {
    // console.log(e);
    document.getElementById("pre-game").classList.toggle("visible");
    document.getElementById("pre-game").classList.toggle("invisible");
    document.getElementById("in-game").classList.toggle("invisible");
    document.getElementById("in-game").classList.toggle("visible");
}



let playerSelection;
let playerScore = 0;
let computerScore = 0;
const options = document.querySelectorAll('.diamond-shape');
options.forEach(option => option.addEventListener('click', getPlayerChoice));

const button = document.querySelector('.button');
button.addEventListener('click', playGame);

const start = document.querySelector('#pre-game');
start.addEventListener('click', toggleVisible);

const game = document.querySelector('#in-game');



