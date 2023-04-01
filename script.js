function startGame(){
    preGame.classList.toggle('started');
    gameScreen.classList.toggle('hidden');
    playerScore = 0;
    computerScore = 0;
    drawCounter = 0;
}

function getPlayerChoice (e){
    playerSelection = this.dataset.rps; 
    let tempSelection = document.getElementById('playerEC');
    tempSelection.className = '';
    tempSelection.classList.add(this.classList[1]);
    tempSelection.innerHTML = this.innerHTML;
    document.getElementById('cpuEC').classList.add('selection-cpu');
    document.getElementById('cpuEC').innerHTML = "?";
}

function valuesReset(){
    playerSelection = 0;
    document.getElementById("pScore").innerHTML = playerScore;
    computerSelection = 0;
    document.getElementById("cScore").innerHTML = computerScore;
    document.getElementById("dScore").innerHTML = drawCounter;
    document.getElementById('cpuEC').classList.remove('selection-cpu');
    document.getElementById('cpuEC').innerHTML = "";
    let tempSelection = document.getElementById('playerEC');
    tempSelection.className = '';
    tempSelection.classList.add('selection-empty');
}

/* NOT IMPLEMENTED
function pushLogs(){
    if (battleLog.length > 9) battleLog.shift();
    battleLog.push(playerSelection + " x " + computerSelection);
} */

function playGame(){
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    pushLogs();
    valuesReset();
}

function getComputerChoice (){
    let cpu = Math.floor(Math.random()*3);
    if (cpu === 0) return ("rock");
    else if (cpu === 1) return("paper");
    else return ("scissor");
}

function displayPoint(point){
    document.getElementById('battle-screen').style.display = "none";
    document.getElementById('score-screen').style.display = "flex";
    if(point == "draw") document.getElementById('score-screen').innerHTML = `Draw!`;
    else document.getElementById('score-screen').innerHTML = `${point} point!`;

    setTimeout(()=>{
        document.getElementById('score-screen').style.display = "none";
        document.getElementById('score-screen').innerHTML = ``;
        document.getElementById('battle-screen').style.display = "flex";
    },1000)
}

function victory(win){
    document.getElementById('battle-screen').style.display = "none";
    document.getElementById('score-screen').style.display = "flex";
    if (win == 1) document.getElementById('score-screen').innerHTML = `PLAYER WINS`;
    else document.getElementById('score-screen').innerHTML = `CPU WINS`;

    setTimeout(()=>{
        valuesReset();
        startGame(); 
        document.getElementById('score-screen').style.display = "none";
        document.getElementById('score-screen').innerHTML = ``;
        document.getElementById('battle-screen').style.display = "flex";   
    },2000)

}

function playRound (player, cpu){
    let playerLC = player;
    let cpuLC = cpu.toLowerCase();
    
    if (!playerLC) return;
    if (playerLC === cpuLC){
        drawCounter++;
        document.getElementById("dScore").innerHTML = drawCounter;
        displayPoint("draw");
    }else 
    if (
        (playerLC === "rock" && cpuLC === "scissor") ||
        (playerLC === "paper" && cpuLC === "rock") ||
        (playerLC === "scissor" && cpuLC === "paper")
        ){
            playerScore++;
            document.getElementById("pScore").innerHTML = playerScore;
            if (playerScore == 5)victory(1);
            else displayPoint("Player");
    }else {
        computerScore++;
        document.getElementById("cScore").innerHTML = computerScore;
        if(computerScore == 5)victory(0);
        else displayPoint("CPU");
    }
}



let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let drawCounter = 0;
//const battleLog = [];

const startButton = document.getElementById('start-button');
const gameScreen = document.getElementById('during-game');
const preGame = document.getElementById('before-game');
const playerChoice = document.querySelectorAll('.selections');
const fightButton = document.getElementById('fight-button');

playerChoice.forEach(selection => selection.addEventListener('click', getPlayerChoice));
startButton.addEventListener('click', startGame);
fightButton.addEventListener('click', playGame);




