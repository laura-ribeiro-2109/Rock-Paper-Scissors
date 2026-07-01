function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function validateInput(playerSelection) {
    if (playerSelection === null) return { result: 'cancel' };
    if (typeof playerSelection !== 'string') return { result: 'invalid', message: "Invalid input." };
    const normalized = playerSelection.trim().toLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(normalized)) {
        return { result: 'invalid', message: `"${playerSelection}" is not a valid value! Choose Rock, Paper, or Scissors.` };
    }
    return { result: 'valid', normalized };
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.trim().toLowerCase();
    const computer = computerSelection.trim().toLowerCase();
    const playerFormatted = player.charAt(0).toUpperCase() + player.slice(1);

    if (player === computer) {
        return { result: 'tie', player: playerFormatted, computer: computerSelection };
    }

    const winsAgainst = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
    const playerWins = winsAgainst[player] === computer;

    return playerWins
        ? { result: 'win',  player: playerFormatted, computer: computerSelection }
        : { result: 'lose', player: playerFormatted, computer: computerSelection };
}

function getPlayerInput() {
    return prompt("Your move! Type: Rock, Paper, or Scissors");
}

function formatRoundMessage({ result, player, computer }) {
    if (result === 'win')  return `VICTORY! Your ${player} beats the Computer's ${computer}!`;
    if (result === 'lose') return `DEFEAT! The Computer's ${computer} beats your ${player}!`;
    return `TIE! Both threw ${computer}!`;
}

function showRoundResult(round, total, message, playerScore, computerScore) {
    console.log(`Round ${round}: ${message} | Score — You: ${playerScore} | Computer: ${computerScore}`);
    alert(`Round ${round} of ${total}\n\n${message}\n\nScore — You: ${playerScore} | Computer: ${computerScore}`);
}

function showFinalResult(finalResult, playerScore, computerScore) {
    console.log(`\n=== FINAL RESULT ===`);
    console.log(`${finalResult} | You: ${playerScore} | Computer: ${computerScore}`);
    alert(`${finalResult}\n\nFinal Score — You: ${playerScore} | Computer: ${computerScore}`);
}

function game() {
    const TOTAL_ROUNDS = 5;
    let playerScore = 0;
    let computerScore = 0;

    console.log("=== ROCK, PAPER, SCISSORS — 5 Rounds ===\n");

    for (let i = 0; i < TOTAL_ROUNDS; i++) {
        const round = i + 1;

        let playerSelection;
        while (true) {
            const validation = validateInput(getPlayerInput());

            if (validation.result === 'cancel') {
                console.log("Game cancelled by player.");
                alert("Game cancelled. Refresh to play again.");
                return;
            }

            if (validation.result === 'invalid') {
                alert(validation.message);
                console.log(`Round ${round} — invalid input: replaying round.`);
                continue;
            }

            playerSelection = validation.normalized;
            break;
        }

        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);

        if (roundResult.result === 'win')  playerScore++;
        if (roundResult.result === 'lose') computerScore++;

        showRoundResult(round, TOTAL_ROUNDS, formatRoundMessage(roundResult), playerScore, computerScore);
    }

    let finalResult;
    if (playerScore > computerScore)      finalResult = "You win the match!";
    else if (computerScore > playerScore) finalResult = "Computer wins the match!";
    else                                  finalResult = "It's a draw!";

    showFinalResult(finalResult, playerScore, computerScore);
}

game();
