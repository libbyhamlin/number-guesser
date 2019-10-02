// Import function
import compareNumber from './compare-numbers.js';

// Initialize DOM elements
const userGuess = document.getElementById('user-guess');
const correctNumber = 7;
const submitButton = document.getElementById('submit-button');
const triesLeftDisplay = document.getElementById('tries-left');
const gameResult = document.getElementById('game-result');

// Set inital state
triesLeftDisplay.textContent = 4;
gameResult.textContent = '';
let remainingTries = 4;

// Set Event handlers
submitButton.addEventListener('click', () => {
    remainingTries = remainingTries - 1;
    triesLeftDisplay.textContent = remainingTries;
    const guessedNumber = parseInt(userGuess.value, 10);

    const result = compareNumber(guessedNumber, correctNumber);
    if (result === 1) {
        return (gameResult.textContent = 'you lost');
    } else if (result === -1 && remainingTries > 0) {
        return (gameResult.textContent = 'you lost');
    } else if (result === 0 && remainingTries > 0) {
        return (gameResult.textContent = 'you win!!!');
    } else {
        submitButton.disabled = true;
    }

    console.log(result);
});
