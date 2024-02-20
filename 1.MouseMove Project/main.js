const body = document.getElementById("body");
const crsr = document.getElementById("cursor");

body.addEventListener("mousemove", (e) => {
  crsr.style.top = e.clientY + "px";
  crsr.style.left = e.clientX + "px";
});

const box = document.getElementById("box");
const heart = document.getElementById("heart");
const hrt = document.getElementById("hrt");
const solidHrt = document.getElementById("solid-heart");
let originalColor = "whitesmoke";
let currentColor = originalColor;

box.addEventListener("dblclick", () => {
  heart.style.transform = "translate(-50%,-50%) scale(2)";
  heart.style.opacity = "0.8";

  // solidHrt.classList.toggle("solidHrt")

  currentColor = (currentColor === originalColor) ? "pink" : originalColor;
      hrt.style.color = currentColor;

  setTimeout(function () {
    heart.style.opacity = 0;
  }, 1000);

  setTimeout(function () {
    heart.style.transform = "translate(-50%,-50%) scale(0)";
  }, 2000);
});

hrt.addEventListener("click", () => {
  
});
