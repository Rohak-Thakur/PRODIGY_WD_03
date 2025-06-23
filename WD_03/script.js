const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const resetBtn = document.getElementById('reset');
const toggleBtn = document.getElementById('toggle-mode');
const modeText = document.getElementById('mode-indicator');

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;
let vsAI = true; // default mode

const winningCombinations = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function handleClick(e) {
  const index = e.target.dataset.index;

  if (board[index] !== "" || !isGameActive) return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWinner(currentPlayer)) {
    statusText.textContent = `Player ${currentPlayer} wins! 🎉`;
    isGameActive = false;
    return;
  }

  if (isDraw()) {
    statusText.textContent = "It's a draw!";
    isGameActive = false;
    return;
  }

  if (vsAI && currentPlayer === "X") {
    currentPlayer = "O";
    statusText.textContent = "AI is thinking...";
    setTimeout(aiMove, 500);
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function aiMove() {
  if (!isGameActive) return;

  const empty = board.map((v, i) => v === "" ? i : null).filter(v => v !== null);
  if (empty.length === 0) return;

  const choice = empty[Math.floor(Math.random() * empty.length)];
  board[choice] = "O";
  cells[choice].textContent = "O";

  if (checkWinner("O")) {
    statusText.textContent = "AI wins!";
    isGameActive = false;
    return;
  }

  if (isDraw()) {
    statusText.textContent = "It's a draw!";
    isGameActive = false;
    return;
  }

  currentPlayer = "X";
  statusText.textContent = "Player X's turn";
}

function checkWinner(player) {
  return winningCombinations.some(comb =>
    comb.every(index => board[index] === player)
  );
}

function isDraw() {
  return board.every(cell => cell !== "");
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;
  currentPlayer = "X";
  cells.forEach(cell => cell.textContent = "");
  statusText.textContent = "Player X's turn";
}

function toggleMode() {
  vsAI = !vsAI;
  resetGame();
  toggleBtn.textContent = vsAI ? "Switch to 2-Player Mode" : "Switch to AI Mode";
  modeText.textContent = `Current Mode: ${vsAI ? "Player vs AI" : "2 Players"}`;
}

// Event Listeners
cells.forEach(cell => cell.addEventListener('click', handleClick));
resetBtn.addEventListener('click', resetGame);
toggleBtn.addEventListener('click', toggleMode);
