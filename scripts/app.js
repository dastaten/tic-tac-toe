const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const players = [
  {
    name: '',
    symbol: 'X',
  },
  {
    name: '',
    symbol: 'O',
  },
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

document.getElementById('playername').value = '';

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.getElementById('config-form');
const errorOutputElement = document.getElementById('config-error');
const gameAreaElement = document.getElementById('active-game');
const playerNameInputElement = document.getElementById('playername');
const winnerTextElement = document.getElementById('game-over').firstElementChild;

const editPlayer1ButtonElement = document.getElementById('edit-player-1-btn');
const editPlayer2ButtonElement = document.getElementById('edit-player-2-btn');
const cancelConfigButtonElement = document.getElementById('cancel-config-btn');
const startNewGameButtonElement = document.getElementById('start-game-btn');
const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

editPlayer1ButtonElement.addEventListener('click', openPlayerConfig);
editPlayer2ButtonElement.addEventListener('click', openPlayerConfig);

cancelConfigButtonElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startNewGameButtonElement.addEventListener('click', startNewGame);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener('click', selectGameField);
}
