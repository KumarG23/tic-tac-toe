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

    gameRunning = true;
}

function squareClicked(){
    let squareIndex = this.getAttribute("squareIndex");

    if(options[squareIndex] != "" || !gameRunning){
        return;
    }

    updateSquare(this, squareIndex);
    checkWin();
}

function updateSquare(square, index){
    options[index] = currentPlayer;
    square.textContent = currentPlayer;
}

function changePlayer(){
    currentPlayer = (currentPlayer === "X") ? "O" : "X";

    statText.textContent = `${currentPlayer}'s turn`;
}

function checkWin(){
    let winner = false;

    for(let i = 0; i < winConditions.length; i++){
        let condition = winConditions[i];
        let squareA = options[condition[0]];
        let squareB = options[condition[1]];
        let squareC = options[condition[2]];

        if (squareA === "" || squareB === "" || squareC === ""){
            continue;
        }
        if (squareA === squareB && squareB === squareC){
        winner = true;
        break;
        }
    }

    if(winner){
        statText.textContent = `${currentPlayer} Wins!`;
        gameRunning = false;
    }
    else if (!options.includes("")){
        statText.textContent = "Cat! (Draw)";
        gameRunning = false;
    }
    else {
        changePlayer();
    }
}

function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statText.textContent = `${currentPlayer}'s turn`;
    square.forEach(square => square.textContent = "");
    gameRunning = true;
    
}

