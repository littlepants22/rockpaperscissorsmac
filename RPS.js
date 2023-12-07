let playerWinCounter = 0;
let comWinCounter = 0;
let resultsWindow = document.querySelector('#results-window');
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    let choice = "";

    if(num == 0){
        choice = "rock";
    }
    if(num == 1){
        choice = "paper";
    }
    if(num == 2){
        choice = "scissors";
    }
    return choice;
}

function playRound(comChoice, userInput){
    let playerScoreDisplay = document.querySelector('#player-score');
    let comScoreDisplay = document.querySelector('#computer-score');
    let result = '';
    switch(comChoice){
        case("rock"): 
            if(userInput === "rock"){
                result = "tied";
            }
            // if user is rock, result is tie
            if(userInput === "paper"){
                playerWinCounter++;
                result = "win";
            }
            // if user is paper, result is win
            if(userInput === "scissors"){
                comWinCounter++;
                result = "loss";
            }
            // if user is scissors, result is loss 
        break;
        case("paper"): 
            if(userInput === "rock"){
                comWinCounter++;
                result = "loss";
            }
            if(userInput === "paper"){
                result = "tied";
            }
            if(userInput === "scissors"){
                playerWinCounter++;
                result = "win";
            }

        break;
        case("scissors"): 
            if(userInput === "rock"){
                playerWinCounter++;
                result = "win";
            }
            if(userInput === "paper"){
                comWinCounter++;
                result = "loss";
            }
            if(userInput === "scissors"){
                result = "tied";
            }
        break;
    }
    resultsWindow.textContent = result;
    playerScoreDisplay.textContent = playerWinCounter;
    comScoreDisplay.textContent = comWinCounter;
    checkWinner();
}


function gameSetup(){
    let buttons = document.querySelectorAll('#button-container > button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log(e.target.id);
            playRound(getComputerChoice(), e.target.id)
            
        })
    })
}
gameSetup()

//start game
//click choice
//declare round winner
//add point to round winner
//check for winner 

// get user Input 
// compare results
// declare winner

function checkWinner(){
    let rock = document.querySelector("#rock")
    let paper = document.querySelector("#paper")
    let scissors = document.querySelector("#scissors")
    if(comWinCounter == 5){
        resultsWindow.textContent = 'looooooooser'
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    if(playerWinCounter == 5){
        resultsWindow.textContent = 'its the best day ever :D' 
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }   
    
}



// if user score is higher they win
// if com score is higher they win
// if scores are the same its a tie