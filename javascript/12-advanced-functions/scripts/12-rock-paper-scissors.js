// Load persistent score or set default object
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

// Attach Event Listeners using addEventListener instead of onclick inline attributes
document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

// Keyboard shortcuts support
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
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

// Auto Play functionality using setInterval & clearInterval
let isAutoPlay = false;
let intervalId;

function autoPlayToggle() {  
  const autoPlayButton = document.querySelector('.js-auto-play');

  if (!isAutoPlay) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);

    autoPlayButton.innerHTML = 'Stop Play';
    isAutoPlay = true;
  } else {
    clearInterval(intervalId);
    autoPlayButton.innerHTML = 'Auto Play';
    isAutoPlay = false;
  }
}