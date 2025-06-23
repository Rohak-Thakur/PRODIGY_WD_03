# PRODIGY_WD_03

# ❌⭕ Tic Tac Toe Web App

A fun and interactive Tic Tac Toe game created using **HTML**, **CSS**, and **JavaScript**. This project includes:

- ✅ 2-Player local mode
- 🤖 Single-player mode with a basic AI

---

## 🎮 Features

- Play against a friend or AI
- Highlight winning combination
- Option to restart the game anytime
- Clean, responsive UI
- Simple game logic implemented in JavaScript

---

## 🧩 Game Modes

- **2 Player Mode**: Take turns with another player on the same device.
- **AI Mode**: Challenge a basic computer opponent that picks moves logically.

---

## 🖼️ Preview

![Tic Tac Toe Demo](preview.gif)  
*(Add a GIF or image to show off the UI here)*
![image](https://github.com/user-attachments/assets/1fdcf811-d9fd-4797-bf10-aea972bf4692)


---

## 🛠️ Tech Stack

- **HTML** – Page structure and layout
- **CSS** – Styling and animations
- **JavaScript** – Game logic and interactivity

---

# Logic & How It Works
## 1. HTML Layout
- A simple 3x3 grid is created using divs for each cell.

- Buttons are included to switch between 2 Player Mode and AI Mode.

## 2. CSS Styling
- The board is styled using Flexbox or CSS Grid for easy alignment.

- Basic animations (hover, win highlight) improve user experience.

- Responsive design ensures it works on desktop and mobile.

## 3. JavaScript Logic
### ✅ Game Initialization
- The board is represented as an array of 9 elements.

- A currentPlayer variable toggles between 'X' and 'O'.

### 🔄 Player Moves
- On each click:

- If the cell is empty, it gets filled with the current player's symbol.

- The board array is updated accordingly.

### 🏆 Win & Draw Detection
- A list of all winning combinations (rows, columns, diagonals) is stored.

- After every move, the game checks if the current player has a winning combination.

- If all cells are filled and no winner, it's declared a draw.

### 🤖 AI Mode
- When it's the AI’s turn:

- The AI scans for empty cells.

- It picks one (randomly or using simple prioritization).

- The move is made after a slight delay to simulate "thinking".

- The rest of the logic (win/draw checking) remains the same.

### 🔁 Reset Function
- Clears the board and resets all variables to start a fresh game.



