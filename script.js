function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === null || playerSelection === undefined) {
        return {
            message: "Game cancelled.",
            result: 'cancel'
        };
    }

    const player = playerSelection.trim().toLowerCase();
    const computer = computerSelection.trim().toLowerCase();
    
    const validChoices = ['rock', 'paper', 'scissors'];
    if (!validChoices.includes(player)) {
        return {
            message: `"${playerSelection}" is not a valid value! Choose Rock, Paper, or Scissors.`,
            result: 'invalid'
        };
    }
    
    if (player === computer) {
        return {
            message: `TIE! Both threw ${computerSelection}!`,
            result: 'tie'
        };
    }
    
    const winsAgainst = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };
    
    const playerWins = winsAgainst[player] === computer;

    const playerFormatted = player.charAt(0).toUpperCase() + player.slice(1);
    
    if (playerWins) {
        return {
            message: `VICTORY! Your ${playerFormatted} beats the Computer's ${computerSelection}!`,
            result: 'win'
        };
    } else {
        return {
            message: `DEFEAT! The Computer's ${computerSelection} beats your ${playerFormatted}!`,
            result: 'lose'
        };
    }
}

playRound();