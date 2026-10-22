let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

// 12s: Event Listeners for Move Buttons
document.querySelector('.js-rock-button')
  .addEventListener('click', () => playGame('rock'));

document.querySelector('.js-paper-button')
  .addEventListener('click', () => playGame('paper'));

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => playGame('scissors'));

// 12u & 12w: Keyboard Listeners (r, p, s, a = auto play, Backspace = reset confirmation)
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') { // 12u
    autoPlayToggle();
  } else if (event.key === 'Backspace') { // 12w
    showResetConfirmation();
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') result = 'You lose.';
    else if (computerMove === 'paper') result = 'You win.';
    else if (computerMove === 'scissors') result = 'Tie.';
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') result = 'Tie.';
    else if (computerMove === 'paper') result = 'You lose.';
    else if (computerMove === 'scissors') result = 'You win.';
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') result = 'You win.';
    else if (computerMove === 'paper') result = 'Tie.';
    else if (computerMove === 'scissors') result = 'You lose.';
  }

  if (result === 'You win.') score.wins += 1;
  else if (result === 'You lose.') score.losses += 1;
  else if (result === 'Tie.') score.ties += 1;

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You <img class="move-icon" src="../images/${playerMove}-emoji.png"> <img class="move-icon" src="../images/${computerMove}-emoji.png"> Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) return 'rock';
  if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) return 'paper';
  return 'scissors';
}

// 12s & 12t: Auto Play Toggle with button text updates
let isAutoPlay = false;
let intervalId;

const autoPlayButton = document.querySelector('.js-auto-play-button');
autoPlayButton.addEventListener('click', () => autoPlayToggle());

function autoPlayToggle() {
  if (!isAutoPlay) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);

    autoPlayButton.innerText = 'Stop Playing'; // 12t
    isAutoPlay = true;
  } else {
    clearInterval(intervalId);
    autoPlayButton.innerText = 'Auto Play'; // 12t
    isAutoPlay = false;
  }
}

// 12v & 12x: Reset Score Confirmation Listener and Functions
const resetScoreButton = document.querySelector('.js-reset-score-button');
resetScoreButton.addEventListener('click', () => showResetConfirmation());

function showResetConfirmation() {
  const confirmationContainer = document.querySelector('.js-reset-confirmation');
  confirmationContainer.innerHTML = `
    Are you sure you want to reset the score?
    <button class="confirm-button js-confirm-yes">Yes</button>
    <button class="confirm-button js-confirm-no">No</button>
  `;

  document.querySelector('.js-confirm-yes').addEventListener('click', () => {
    resetScore();
    confirmationContainer.innerHTML = '';
  });

  document.querySelector('.js-confirm-no').addEventListener('click', () => {
    confirmationContainer.innerHTML = '';
  });
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = '';
  document.querySelector('.js-moves').innerHTML = '';
}