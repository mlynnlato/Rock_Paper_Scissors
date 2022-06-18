let compPlay = "";
let userPlay = "";
let userNum = 0;
let choice = 0;
let playerScore = 0;
let compScore = 0;

for(let i=0; i<5; i++){
   let promptChoice= prompt("What would you like to play? (1) Rock (2) Paper (3) Scissors:");
playerChoice(promptChoice); 
}


function compChoice() {
    let max = 3;
    let min = 1;
    choice = Math.floor(Math.random() * (max - min + 1) + min);
    if (choice == 1) {
        compPlay = "Rock";
    } else if (choice == 2) {
        compPlay = "Paper";
    } else {
        compPlay = "Scissors";
    }

}

function playerChoice(str) {
    if (str == 1 || str.toString().toLowerCase() == "rock") {
        userNum = 1;
        userPlay = "Rock";
    } else if (str == 2 || str.toString().toLowerCase() == "paper") {
        userNum = 2;
        userPlay = "Paper";
    } else {
        userNum = 3;
        userPlay = "Scissors";
    }
    compChoice();
    switch (choice) {
        case 1: //Comp chose Rock
            if (userNum == 2) { //user chose Paper
                console.log("Great job! You won! " + userPlay + " beats " + compPlay);
                playerScore++;
            } else if (userNum == 3) { //user chose Scissors
                console.log("Oof sorry, you lost. " + compPlay + " beats " + userPlay);
                compScore++;
            }else{
                console.log("Looks like it was a tie, close call! " + userPlay + " ties with " + compPlay);
            }
            break;
        case 2: //Comp chose Paper
            if (userNum == 1) { //user chose Rock
                console.log("Oof sorry, you lost. " + compPlay + " beats " + userPlay);
                playerScore++;
            } else if (userNum == 3) { //user chose scissors
                console.log("Great job! You won! " + userPlay + " beats " + compPlay);
                compScore++;
            }else{
                console.log("Looks like it was a tie, close call! " + userPlay + " ties with " + compPlay);
            }
            break;
        case 3: //Comp chose scissors
            if (userNum == 1) { //user chose Rock
                console.log("Great job! You won! " + userPlay + " beats " + compPlay);
                playerScore++;
            } else if (userNum == 2) { //user chose Paper
                console.log("Oof sorry, you lost. " + compPlay + " beats " + userPlay);
                compScore++;
            }else{
                console.log("Looks like it was a tie, close call! " + userPlay + " ties with " + compPlay);
            }
            break;


    }
return;
}


