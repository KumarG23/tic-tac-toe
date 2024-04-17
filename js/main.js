const square = document.querySelectorAll(".square");
const statText = document.querySelector("#statText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let options = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "X";

let gameRunning = false;

initializeGame();

function initializeGame(){
    square.forEach(square => square.addEventListener("click", squareClicked))

    restartBtn.addEventListener("click", restartGame);

    statText.textContent = `${currentPlayer}'s turn`;
}

function squareClicked(){
    let squareIndex = this.getAttribute("squareIndex");

    if(options[squareIndex] != "" || !running){
        return;
    }
}

function updateSquare(square, index){

}

function changePlayer(){

}

function checkWin(){

}

function restartGame(){

}

