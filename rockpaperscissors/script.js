/*

function getComputerChoice() returns 'rock' 'paper' or 'scissors'
    get random number - Math.random()
    IF random number is less than 1/3 return 'rock'
    ELSEIF random number is less than 2/3 return 'paper'
    ELSE return 'scissors'

function getHumanChoice() returns 'rock' 'paper' or 'scissors'
    FOR 3 iterations
        prompt for input, make it ToLower()
        IF is valid input return input with first letter capitalized
        ELSE alert bad input

    alert too many invalid responses, using random answer
    return getComputerChoice()

function playRound(getComputerChoice(), getHumanChoice())
    IF variables are equal alert 'Tie'
    ELSEIF computerChoice == 'Rock' AND humanChoice == 'Scissors'
    OR computerChoice == 'Paper' AND humanChoice == 'Rock'
    OR computerChoice == 'Scissors' AND humanChoice == 'Paper'
        alert 'You lose, {computerChoice} beats {humanChoice}'
        increment computerScore
    ELSE
        alert 'You win, {computerChoice} beats {humanChoice}'
        increment humanScore

function playGame takes integer number of rounds, default 5
    humanScore = 0
    computerScore = 0

    FOR parameter number of iterations
        playRound()

    IF humanScore == computerScore
        alert 'Tie'
    ELSEIF humanScore > computerScore
        alert 'You win!'
    ELSE
        alert 'You lose...'

*/

function getComputerChoice() {
    let rand = Math.random();
    if (rand < 1/3)
        return 'Rock';
    else if  (rand < 2/3)
        return 'Paper';
    else
        return 'Scissors';
}

function getHumanChoice(attempts = 3) {
    for (i = 1; i <= attempts; i++) {
        let response = prompt('Select "Rock", "Paper", or "Scissors"').toLowerCase();
        if (response === 'rock' || response === 'paper' || response === 'scissors')
            return (response[0].toUpperCase() + response.substring(1));
        else
            alert('Invalid response');
    }

    alert('Too many invalid responses, using random response');
    return getComputerChoice();
}