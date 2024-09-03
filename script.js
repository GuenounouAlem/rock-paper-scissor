const choices = ['rock', 'paper', 'scissor']

let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let i = Math.floor(Math.random() * 3)
    return choices[i]
}

function getPlayerChoice(){
    let choice = prompt("rock ? paper ? scissor ?\nChoose one")
    return choice.toLowerCase();
}


function playRound(playerChoice, computerChoice){
    switch(playerChoice){
        case 'rock':
            if (computerChoice === 'paper'){
                computerScore++;
            } else if (computerChoice === 'scissor'){
                playerScore++;
            } else {
                console.log('EVEN !');
                
            }
            break;
        case 'paper':
            if (computerChoice === 'scissor'){
                computerScore++;
            } else if (computerChoice === 'rock'){
                playerScore++;
            } else {
                console.log('EVEN !');
                
            }
            break;
        case 'scissor':
            if (computerChoice === 'rock'){
                computerScore++;
            } else if (computerChoice === 'paper'){
                playerScore++;
            } else {
                console.log('EVEN !');
                
            }   
            break;
        default :
            console.log('Wrong Input !'); 
            break;
    }
    console.log(`Player score : ${playerScore}, Computer score: ${computerScore}`);
    
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let pcChoice = getComputerChoice();
        let pChoice = getPlayerChoice();
        playRound(pChoice, pcChoice);
    }
    if (playerScore > computerScore){
        console.log('The winner is the PLAYER ' + playerScore + ' points');
    } else if (playerScore < computerScore){
        console.log('The winner is the COMPUTER ' + computerScore + ' points');
        
    } else {
        console.log('EVEN MATCH NO WINNER ' + computerScore + ' ' + playerScore);
        
    }
}



playGame();

