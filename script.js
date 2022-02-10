'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
let guess = document.querySelector('.guess').value;
*/
let number = Math.trunc(Math.random() * 20) + 1;
let highestScore = 0;
let score = 20;
let inGame = true;

function showScore() {
  document.querySelector('.score').textContent = score;
}

function setMessage(msg) {
  document.querySelector('.message').textContent = msg;
}

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  showScore();
  inGame = true;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  setMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});

document.querySelector('.check').addEventListener('click', function () {
  const yourGuess = Number(document.querySelector('.guess').value);
  if (score > 0 && inGame) {
    if (yourGuess) {
      if (yourGuess === number) {
        document.querySelector('body').style.backgroundColor = '#60b347'; //changes in style
        document.querySelector('.number').style.width = '30rem'; //changes in style
        document.querySelector('.number').textContent = number;
        setMessage('You guessed it right');
        inGame = false;
        if (highestScore < score) {
          highestScore = score;
          document.querySelector('.highscore').textContent = highestScore;
        }
      } else {
        score--;
        if (score === 1) {
          setMessage('You lost');
        } else {
          yourGuess > number
            ? setMessage('Guessing too high')
            : setMessage('Guessing too low');
          showScore();
        }
      }
    } else {
      setMessage('Not a valid guess');
    }
  }
});
