'use strict';

// selecting elements 
let score1 = document.getElementById('score--0');
let score2 = document.getElementById('score--1');
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

function roll() {

    //Generate a dice roll 

    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    dice.classList.remove("hidden");

    // Display dice

    if (diceNumber === 1) {
        dice.src = 'dice-1.png';
    } else if (diceNumber === 2) {
        dice.src = 'dice-2.png';
        score1 += diceNumber;

    } else if (diceNumber === 3) {
        dice.src = 'dice-3.png';
    } else if (diceNumber === 4) {
        dice.src = 'dice-4.png';
    } else if (diceNumber === 5) {
        dice.src = 'dice-5.png';
    } else if (diceNumber === 6) {
        dice.src = 'dice-6.png';
    }


    // check if it is 1 

}