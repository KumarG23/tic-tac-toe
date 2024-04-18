const square = document.querySelectorAll(".square"); // query all squares
const statText = document.querySelector("#statText");
const restartBtn = document.querySelector("#restartBtn");
let coinSound = document.querySelector("#coinSound");
let winSound = document.querySelector('#winSound');
let catSound = document.querySelector('#catSound');

let winConditions = [
    // array defining win conditions
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
// array to store current state of the game board
let options = ["", "", "", "", "", "", "", "", ""];
// keep track of current player "X" or "O"
let currentPlayer = "X";

// keep track if game is running or not
let gameRunning = false;



//initializeGame();
window.onload = function(){
 let storedData = localStorage.getItem('board');
if (storedData) {
    options = JSON.parse(storedData);
}
let storedPlayer = localStorage.getItem('player');
if (storedData) {
    currentPlayer = JSON.parse(storedPlayer);
}

square.forEach((square, index) => { // add text content back in
    // after local storage saved
    square.textContent = options[index];
    if (options[index] !== '') { // only if index does not = ''
        square.classList.add(options[index]);
    }
})
//console.log(options);


  
       square.forEach(square => square.addEventListener("click", squareClicked))// add event listener to each square

    restartBtn.addEventListener("click", restartGame);// add event listener to restart button

    statText.textContent = `${currentPlayer}'s turn`;// display current players turn

    gameRunning = true;// change game running to true
    

    
}

function squareClicked(){// function for when square is clicked
    let squareIndex = this.getAttribute("squareIndex");// get index of clicked square
    coinSound.play();


    if(options[squareIndex] != "" || !gameRunning){// check if square is already occupied or the game isn't running
        return; // return nothing
    }

    updateSquare(this, squareIndex); // update square with current players symbol
    checkWin(); //check for win or draw
}

function updateSquare(square, index){ // function to update state of game board
    options[index] = currentPlayer; // update options array with current players symbol
    square.textContent = currentPlayer; // display current players symbol in the square
    square.classList.add(currentPlayer);
    localStorage.setItem('board', JSON.stringify(options))
    //console.log(options);
    localStorage.setItem('player', JSON.stringify(currentPlayer));
}

function changePlayer(){ // function to change player turn
    currentPlayer = (currentPlayer === "X") ? "O" : "X"; // change current player to other player
    statText.textContent = `${currentPlayer}'s turn`; // display current players turn
}

function checkWin(){ // function to check for win or draw
    let winner = false; // start with win or draw as false

    for(let i = 0; i < winConditions.length; i++){ // iterate through each win condition
        let condition = winConditions[i]; // retrieves the current win conditions from win conditions array, each condition is 3 indices
        let squareA = options[condition[0]]; // checks each square for a set of symbols with a winning condition in the array.
        let squareB = options[condition[1]]; 
        let squareC = options[condition[2]]; 

        if (squareA === "" || squareB === "" || squareC === ""){ //if any of the winning conditions are not met and any squares are empty
            continue; // then continue game
        }
        if (squareA === squareB && squareB === squareC){ // if winning condition is met with 3 of the same symbols
        winner = true; // then winner
        break; // break the loop because there is a winner
        }
    }

    if(winner){
        statText.textContent = `${currentPlayer} Wins!🏆`;
        winSound.play();
         // display winner 
        gameRunning = false; // set game running to false
    }
    else if (!options.includes("")){ // if options does not include any spaces then its a draw
        statText.textContent = "Cat! 😼 (Draw)"; // display text for draw
        catSound.play();
        gameRunning = false; // stop game
    }
    else { // if no winner and there are still spaces change player
        changePlayer();
    }
}

function restartGame(){ // function to restart game
    currentPlayer = "X"; // set the current player back to x
    options = ["", "", "", "", "", "", "", "", ""]; // set options array back to empty
    statText.textContent = `${currentPlayer}'s turn`; // display current players turn
    square.forEach(square => square.textContent = ""); // set each square back to empty
    gameRunning = true; // turn game back to true
    
}

