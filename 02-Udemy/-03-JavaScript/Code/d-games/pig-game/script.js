//**** HTML elements selecting ***//

//------ the buttons
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

//------ the dice picture
const diceEl = document.querySelector('.dice');

//------ select each player section
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//------ players total score
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

//------  player current score
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//**** Variables ***//
let scores, currentScore, activePlayer, playing;

//**** Initialization conditions  ***/
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

//****  switching the player function  *****/

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//**** Roll functionality ***//
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. generate random number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. display the dice image
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. add the dice to the active player current score
    // but just if dice != 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//****   Adding the hold functionality  ****/

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 50) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 2. switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
