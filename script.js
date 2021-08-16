'use strict';

// selecting elements 
let score1 = document.getElementById('score--0');
let score2 = document.getElementById('score--1');
let currentScore1 = document.getElementById('current--0');
let currentScore2 = document.getElementById('currentScore1');
let dice = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");

let score1Text = score1.textContent;
let score2Text = score2.textContent;

score1 = 0;
score2 = 0;

dice.classList.add('hidden');

// Adding Event Listeners 

btnRoll.addEventListener("click", roll);
let currentScore = 0;
let activePlayer = 0;
const scoresArr = [0, 0];

function roll() {

    //Generate a dice roll 

    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    dice.classList.remove("hidden");

    // Display dice

    if (diceNumber === 1) {
        dice.src = 'dice-1.png';
        if (activePlayer === 0)
            activePlayer = 1;
        else if (activePlayer === 1)
            activePlayer = 0;

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

function diceScore(diceNum, activePlay, currScore) {
    dice.src = `dice-${diceNum}.png`;
    currScore += diceNum;
    document.getElementById(`current--${activePlay}`).textContent = currScore;
    return currScore;
}