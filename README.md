# Color Guessing Game

Welcome to the **Color Guessing Game**! This is a fun and interactive web-based game built using **HTML**, **CSS**, and **Vanilla JavaScript**. The goal of the game is to guess the correct color displayed in the target box from a set of color options. Test your color recognition skills and see how high you can score!

---

## Table of Contents

1. [Features](#features)
2. [How to Play](#how-to-play)
3. [Project Structure](#project-structure)
4. [Setup Instructions](#setup-instructions)
5. [Technologies Used](#technologies-used)
6. [Acceptance Criteria](#acceptance-criteria)
7. [Future Enhancements](#future-enhancements)

---

## Features

- **Target Color Display**: A box displays a randomly selected color that the player needs to guess.
- **Color Options**: Six color buttons are provided, one of which matches the target color.
- **Score Tracking**: The score increases by 2 for each correct guess and decreases by 2 for each wrong guess.
- **Negative Scores**: If the score goes below zero, it turns red to indicate a negative value.
- **Game Status**: Feedback is displayed after each guess (e.g., "Correct!" or "Wrong! Try again.").
- **New Round Button**: Start a new round with a new target color and options.
- **Restart Button**: Reset the score to zero and start a new game.
- **Responsive Design**: The game is fully responsive and works seamlessly on desktop, tablet, and mobile devices.

---

## How to Play

1. **Objective**: Guess the correct color displayed in the target box.
2. **Gameplay**:
   - A target color is displayed in the box.
   - Click on one of the six color buttons to make your guess.
   - If your guess is correct, your score increases by 2.
   - If your guess is wrong, your score decreases by 2.
3. **Score**:
   - The score is displayed at the top of the screen.
   - If the score becomes negative, it turns red.
4. **New Round**: Click the "New Round" button to start a new round with a new target color.
5. **Restart Game**: Click the "Restart Game" button to reset the score to zero and start a new game.

---

## Project Structure

The project consists of three main files:

1. **`index.html`**: The main HTML file that structures the game.
2. **`styles.css`**: The CSS file that styles the game and makes it visually appealing.
3. **`main.js`**: The JavaScript file that handles the game logic, including color generation, scoring, and user interactions.

---

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/S-Man129/color-guessing-game.git
   cd color-guessing-game
   ```

2. **Open the Project**:

   - Open the `index.html` file in your preferred browser.

3. **Play the Game**:
   - Follow the on-screen instructions to play the game.

---

## Technologies Used

- **HTML**: For structuring the game.
- **CSS**: For styling and responsive design.
- **JavaScript**: For game logic and interactivity.

---

## Acceptance Criteria

### Content

- All required elements (target color box, color options, game instructions, score, and buttons) are present and functional.
- The game displays the correct game instructions, status, and score.
- The `data-testid` attributes are correctly implemented for testing purposes.

### Design

- The game is visually appealing, with a clear distinction between the target color and options.
- The design is responsive and works well across desktop, tablet, and mobile devices.

### Functionality

- The game correctly updates the score and game status after each guess.
- The "New Round" and "Restart Game" buttons function as expected.

### Code Quality

- The code is well-organized, readable, and properly indented.
- Proper use of JavaScript functions and event handling.

---

## Future Enhancements

- **Timer**: Add a timer to challenge players to guess the color within a time limit.
- **High Score**: Implement a high score system to track the best performance.
- **Color Difficulty Levels**: Introduce different difficulty levels with more color options or similar shades.
- **Sound Effects**: Add sound effects for correct and wrong guesses to enhance the gaming experience.

---

## Screenshots

![Game Screenshot](/asset/image/Screenshot.png)  
_Example of the game in action._

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Enjoy the game! If you have any questions or feedback, feel free to reach out. 🚀
