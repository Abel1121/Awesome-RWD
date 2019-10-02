"use strict";
console.log(`Hello world!`);

const roll = document.querySelector('.about__circlesuqare');
const object = document.querySelector('.object');

roll.addEventListener("click", () => {
    roll.classList.toggle('roll');
  });
