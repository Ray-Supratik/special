"use strict";
const song = document.querySelector(".song");
const button = document.getElementById("start");
const container = document.querySelector(".container");
const text = document.querySelector(".text");
const head = document.querySelector(".head");
const emoji = document.querySelector(".emoji");
let active = false;

button.addEventListener("click", () => {
  if (!active) {
    active = true;
    const audio = new Audio("audio.mp3");
    audio.play();
    head.textContent = "I love you!! my bakaa";
    text.textContent = "okkay lets have fun!";
    emoji.textContent = "🥰";
    setInterval(createHeart, 100);
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  container.appendChild(heart);
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  setTimeout(() => {
    heart.remove();
  }, 3000);
}
