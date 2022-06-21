
"use strict";

const button = document.getElementById('btn');
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");

button.addEventListener("click", () => {
    box1.style.background = `url(https://picsum.photos/200/300?random=${getRandomInt(1, 20)})`;
    box2.style.background = box1.style.background;
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}