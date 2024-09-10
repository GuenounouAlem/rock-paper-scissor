const choices = ['rock', 'paper', 'scissor']

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const choiceButtons = document.querySelectorAll('.btn-choice')

const cpScoreElem = document.querySelector('.computer-score>h3')
const playerScoreElem = document.querySelector('.player-score>h3')
const roundsElem = document.querySelector('.round-count>h3')
const playerChoiceElem = document.querySelector('.player-choice>h3')
const cpChoiceElem = document.querySelector('.computer-choice>h3')
const winnerElem = document.querySelector('.winner>h2')
const resetBtn = document.querySelector('.reset')

resetBtn.addEventListener('click', () => {
    location.reload()
})




choiceButtons.forEach((chBtn) => {
    chBtn.addEventListener('click', () => {
        let cpChoice = getComputerChoice()
        let playerChoice = chBtn.id
        playRound(playerChoice, cpChoice)
        roundCount++
        playerChoiceElem.innerText = `Player: ${playerChoice.toUpperCase()}`
        cpChoiceElem.innerText = `Computer: ${cpChoice.toUpperCase()}`
        cpScoreElem.innerText = `Computer Score: ${computerScore}`
        playerScoreElem.innerText = `Player Score: ${playerScore}`
        roundsElem.innerText = `Rounds: ${roundCount}`
        if (roundCount >= 5) {
            if (playerScore > computerScore) {
                winnerElem.innerText = 'YOU WIN!'
            } else if (computerScore > playerScore) {
                winnerElem.innerText = 'COMPUTER WIN!'
            } else {
                winnerElem.innerText = "IT'S A DRAW!"
            }
            resetBtn.removeAttribute('hidden')
        }
    })
})


function getComputerChoice(){
    let i = Math.floor(Math.random() * 3)
    return choices[i]
}

// function getPlayerChoice(){
//     let choice = prompt("rock ? paper ? scissor ?\nChoose one")
//     return choice.toLowerCase();
// }


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

// function playGame(){
//     for(let i = 0; i < 5; i++){
//         let pcChoice = getComputerChoice();
//         let pChoice = getPlayerChoice();
//         playRound(pChoice, pcChoice);
//     }
//     if (playerScore > computerScore){
//         console.log('The winner is the PLAYER ' + playerScore + ' points');
//     } else if (playerScore < computerScore){
//         console.log('The winner is the COMPUTER ' + computerScore + ' points');
        
//     } else {
//         console.log('EVEN MATCH NO WINNER ' + computerScore + ' ' + playerScore);
        
//     }
// }



// playGame();

