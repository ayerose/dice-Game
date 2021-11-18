// Create variables for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById('player1Dice');
const player2Dice = document.getElementById('player2Dice');
const player1Scoreboard = document.getElementById('player1Scoreboard');
const player2Scoreboard = document.getElementById('player2Scoreboard');
const message = document.getElementById('message');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');

/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  // 1. Display the dice number instead of logging it out
  // 2. Use the 'active' class to show which player's turn it is
  // Hint: use the .classList.remove() and classList.add() methods
  // 3. Update the "message" DOM node so that it states who's turn it is
  if (player1Turn) {
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove('active');
    player2Dice.classList.add('active');
  } else {
    player2Dice.textContent = randomNumber;
  }
  player1Turn = !player1Turn;
});
