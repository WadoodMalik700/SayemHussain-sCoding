setInterval(() => {
  document.body.style.fontSize =
    Math.random() * 10 + 14 + "px";

  document.getElementById("title").style.fontSize =
    Math.random() * 40 + 20 + "px";
}, 500);

const buttons = document.querySelectorAll(".runaway");

buttons.forEach(btn => {
  moveButton(btn);

  btn.addEventListener("mouseenter", () => {
    moveButton(btn);
  });

  btn.addEventListener("click", () => {
    randomOutput();
    moveButton(btn);
  });
});

function moveButton(button) {
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 80);

  button.style.left = x + "px";
  button.style.top = y + "px";
}

const messages = [
  "That wasn't the right one.",
  "Why would you do that?",
  "Something happened. Maybe.",
  "Try again.",
  "You broke it.",
  "It worked. Or did it?",
  "Nothing is stable.",
  "Stop clicking."
];

function randomOutput() {
  const output = document.getElementById("output");

  output.textContent =
    messages[Math.floor(Math.random() * messages.length)];

  output.style.color =
    `hsl(${Math.random() * 360}, 100%, 70%)`;

  output.style.transform =
    `rotate(${Math.random() * 20 - 10}deg)`;
}

setInterval(() => {
  document.body.style.background =
    `hsl(${Math.random() * 360}, 30%, 15%)`;
}, 1500);
