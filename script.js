function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === null) {
        return {
            message: "Game cancelled.",
            result: 'cancel'
        };
    }

    if (typeof playerSelection !== 'string') {
        return { message: "Invalid input.", result: 'invalid' };
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
// game function that plays 5 rounds and keeps score
function game() {
  const TOTAL_ROUNDS = 5;
  let playerScore = 0;
  let computerScore = 0;

  console.log("=== ROCK, PAPER, SCISSORS — 5 Rounds ===\n");

  for (let i = 0; i < TOTAL_ROUNDS; i++) {
    const round = i + 1;

    const playerSelection = prompt("Your move! Type: Rock, Paper, or Scissors");
    const computerSelection = computerPlay();

    // Pass both selections directly into playRound
    // playRound handles null, invalid input, ties, wins and losses
    const roundResult = playRound(playerSelection, computerSelection);

    // If the player cancelled, end the game immediately
    if (roundResult.result === 'cancel') {
      console.log("Game cancelled by player.");
      alert("Game cancelled. Refresh to play again.");
      return;
    }

    // If the player typed something invalid, do not advance the round
    // Decrement i so the loop replays this round
    if (roundResult.result === 'invalid') {
      alert(roundResult.message);
      console.log(`Round ${round} — invalid input: replaying round.`);
      i--;
      continue;
    }

    // Valid round — update scores
    if (roundResult.result === 'win')  playerScore++;
    if (roundResult.result === 'lose') computerScore++;

    console.log(`Round ${round}: ${roundResult.message} | Score — You: ${playerScore} | Computer: ${computerScore}`);

    alert(
      `Round ${round} of ${TOTAL_ROUNDS}\n\n${roundResult.message}\n\nScore — You: ${playerScore} | Computer: ${computerScore}`
    );
  }

  // Final result
  let finalResult;
  if (playerScore > computerScore)      finalResult = "You win the match!";
  else if (computerScore > playerScore) finalResult = "Computer wins the match!";
  else                                  finalResult = "It's a draw!";

  console.log(`\n=== FINAL RESULT ===`);
  console.log(`${finalResult} | You: ${playerScore} | Computer: ${computerScore}`);

  alert(`${finalResult}\n\nFinal Score — You: ${playerScore} | Computer: ${computerScore}`);
}

game();
