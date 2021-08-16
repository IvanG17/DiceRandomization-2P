'use strict';

// selecting elements 
let score1 = document.getElementById('score--0');
let score2 = document.getElementById('score--1');
let dice = document.querySelector(".dice");

let score1Text = score1.textContent;
let score2Text = score2.textContent;

score1 = 0;
score2 = 0;

dice.classList.add('hidden');