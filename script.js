'use strict';

// selecting elements 
let score1 = document.getElementById('score--0');
let score2 = document.getElementById('score--1');
let currentScore1 = document.getElementById('current--0');
let currentScore2 = document.getElementById('current--1');
let dice = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
let btnDirections = document.querySelector(".btn--directions");

score1.textContent = 0;
score2.textContent = 0;
dice.classList.add('hidden');

// Adding Event Listeners 

btnRoll.addEventListener("click", roll);
let currentScore = 0;
let activePlayer = 0;
let scoresArr = [0, 0];
let playing = true;

function roll() {
    if (playing) {
        const diceNumber = Math.trunc(Math.random() * 6 + 1);
        dice.classList.remove("hidden");

        // Display dice

        if (diceNumber === 1) {
            dice.src = 'dice-1.png';
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // if (activePlayer === 0) {
            //     activePlayer = 1;

            // } else if (activePlayer === 1) {
            //     activePlayer = 0;

            // }
            // swiching backgrounds for active player 
            //switchPlayer(activePlayer);
            activePlayer = switchPlayer(activePlayer);


        } else if (diceNumber !== 1) {
            console.log(diceNumber);
            currentScore = diceScore(diceNumber, activePlayer, currentScore);


        }
        // } else if (diceNumber === 3) {
        //     dice.src = 'dice-3.png';
        // } else if (diceNumber === 4) {
        //     dice.src = 'dice-4.png';
        // } else if (diceNumber === 5) {
        //     dice.src = 'dice-5.png';
        // } else if (diceNumber === 6) {
        //     dice.src = 'dice-6.png';
        // }


        // check if it is 1 

    }

    //Generate a dice roll 


}

function diceScore(diceNum, activePlay, currScore) {
    dice.src = `dice-${diceNum}.png`;
    currScore += diceNum;
    document.getElementById(`current--${activePlay}`).textContent = currScore;
    return currScore;
}

function switchPlayer(activePlayer) {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else if (activePlayer === 1) {
        activePlayer = 0;
    }
    document.querySelector('.player--1').classList.toggle('player--active');
    document.querySelector('.player--0').classList.toggle('player--active');
    return activePlayer;
}


// hold option 

btnHold.addEventListener('click', hold);

function hold() {
    if (playing) {
        if (scoresArr[activePlayer] + currentScore < 100) {
            scoresArr[activePlayer] += currentScore;
            //console.log(scoresArr[activePlayer]);
            document.getElementById(`score--${activePlayer}`).textContent = scoresArr[activePlayer];
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            currentScore = 0;


        }

        // if score >= 100, game ends 

        if (scoresArr[activePlayer] + currentScore >= 100) {
            scoresArr[activePlayer] += currentScore;
            document.getElementById(`score--${activePlayer}`).textContent = 100;
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            currentScore = 0;

            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            updateStatus(activePlayer);

        }


        // if not, add current score to overall score and swtich player 

        if (scoresArr[activePlayer] < 100) {
            activePlayer = switchPlayer(activePlayer);

        }
    }
    // add current score to active player's score


}

function updateStatus(activePlayer) {
    console.log(activePlayer);
    if (activePlayer === 0) {
        document.getElementById(`name--${ activePlayer }`).textContent = "Player 1 wins!";

        document.getElementById('name--1').textContent = "Player 2 loses.";
    } else if (activePlayer === 1) {
        document.getElementById(`name--${ activePlayer } `).textContent = `Player 2 wins!`;

        document.getElementById('name--0').textContent = "Player 1 loses.";
    }
}

btnNew.addEventListener('click', reset);

function reset() {
    document.location.reload();
}

btnDirections.addEventListener('click', directions);
//document.addEventListener('keydown', closeWindow(e));
document.querySelector('.close-modal').addEventListener('click', function() {
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
    console.log('x');
    playing = true;
})

function directions() {
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
    playing = false;
}