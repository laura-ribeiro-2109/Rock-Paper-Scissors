# Rock, Paper, Scissors

A browser-based Rock, Paper, Scissors game played entirely through native `prompt()` and `alert()` dialogs.

## How to play

1. Open `index.html` in a browser (or paste the script into the browser console).
2. Type your move when prompted: `Rock`, `Paper`, or `Scissors`.
3. The computer picks a random move.
4. The game runs for **5 rounds** and displays a running score after each one.
5. The player with the most wins after 5 rounds wins the match.

## Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock
- Equal moves result in a tie (no point awarded)

## Input handling

- Capitalization and extra spaces are ignored (`ROCK`, `rock`, ` Rock ` are all valid).
- Invalid input replays the round without counting it.
- Cancelling the prompt ends the game immediately.

## Files

| File | Description |
|------|-------------|
| `script.js` | Game logic |
| `index.html` | Entry point |