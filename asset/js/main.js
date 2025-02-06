// Predefined set of colors
const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#A133FF",
  "#33FFF5",
  "#FFC300",
  "#C70039",
  "#900C3F",
  "#581845",
  "#1A5276",
  "#1E8449",
];

// DOM Elements
const colorBox = document.querySelector('[data-testid="colorBox"]');
const colorOptions = document.querySelector('[data-testid="colorOptions"]');
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreElement = document.querySelector('[data-testid="score"]');
const newGameButton = document.querySelector('[data-testid="newGameButton"]');
const restartButton = document.querySelector('[data-testid="restartButton"]');

let targetColor;
let score = 0;

// Initialize the game
function initGame() {
  // Randomly select a target color
  targetColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = targetColor;

  // Generate color options
  colorOptions.innerHTML = "";
  const shuffledColors = shuffleArray([...colors]).slice(0, 6);
  if (!shuffledColors.includes(targetColor)) {
    shuffledColors[Math.floor(Math.random() * 6)] = targetColor;
  }

  shuffledColors.forEach((color) => {
    const button = document.createElement("button");
    button.style.backgroundColor = color;
    button.addEventListener("click", () => handleGuess(color));
    colorOptions.appendChild(button);
  });

  // Reset game status
  gameStatus.textContent = "";
}

// Handle user guess
function handleGuess(selectedColor) {
  if (selectedColor === targetColor) {
    gameStatus.textContent = "Correct! 🎉";
    gameStatus.style.color = "green";
    score += 2; // Increase score by 2 for correct guess
  } else {
    gameStatus.textContent = "Wrong! Try again. 😢";
    gameStatus.style.color = "red";
    score -= 2; // Decrease score by 1 for wrong guess
  }

  // Update score display
  scoreElement.textContent = score;

  // Change score color to red if negative
  if (score < 0) {
    scoreElement.style.color = "red";
  } else {
    scoreElement.style.color = "black";
  }

  // Start new round after 1 second
  setTimeout(initGame, 1000);
}

// Shuffle array function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// New game button event listener
newGameButton.addEventListener("click", initGame);

// Restart button event listener
restartButton.addEventListener("click", () => {
  score = 0;
  scoreElement.textContent = score;
  scoreElement.style.color = "black"; // Reset score color
  initGame();
});

// Start the game on page load
initGame();
