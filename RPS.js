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

// generate random number between 1 and 3 
// map numbers to choices
// return computer choice

function getUserChoice(){
    let userChoice = prompt("choose rock, paper, or scissors");

    return userChoice;
}

function compareResults(comChoice, userInput){
    switch(comChoice){
        case("rock"): 
            if(userInput === "rock"){
                return "tied";
            }
            // if user is rock, result is tie
            if(userInput === "paper"){
                return "win";
            }
            // if user is paper, result is win
            if(userInput === "scissors"){
                return "loss";
            }
            // if user is scissors, result is loss 
        break;
        case("paper"): 
            if(userInput === "rock"){
                return "loss";
            }
            if(userInput === "paper"){
                return "tied";
            }
            if(userInput === "scissors"){
                return "win";
            }

        break;
        case("scissors"): 
            if(userInput === "rock"){
                return "win";
            }
            if(userInput === "paper"){
                return "loss";
            }
            if(userInput === "scissors"){
                return "tied";
            }
        break;
    }
}


// get user Input 
// compare results
// declare winner

function game(){

    let comWinCount = 0;

    let userWinCount = 0;

    for( i = 0; i < 5; i++){
        switch(compareResults(getComputerChoice(), getUserChoice())){
            case("win"):
                userWinCount++;
                console.log("You win the round, user score is " + userWinCount);
            break;
            case("tied"):
                console.log("Round tied " + " user score is " + userWinCount + " com score is " + comWinCount);
            break;
            case("loss"):
                comWinCount++;
                console.log("Computer wins the round, com score is " + comWinCount); 
            break; 

        }
    } 
    if(userWinCount > comWinCount){
        console.log("You win! :D");
    }
    if(userWinCount < comWinCount){
        console.log("You lose! >:(");
    }
    if(userWinCount == comWinCount){
        console.log("Tied :/");
    }
}

// if user score is higher they win
// if com score is higher they win
// if scores are the same its a tie

game();

// play a round
// keep score
// do that 5 times
// declare winner