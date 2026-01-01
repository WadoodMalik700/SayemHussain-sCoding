const textElement = document.getElementById("text");
const sentence = "Each letter is its own element.";
const letters = sentence.split("");

let index = 0;
let typing = false;

document.getElementById("typeBtn").addEventListener("click", () => {
  if (typing) return;

  textElement.innerHTML = "";
  index = 0;
  typing = true;
  typeWriter();
});

function typeWriter() {
  if (index < letters.length) {
    const span = document.createElement("span");
    span.textContent = letters[index];

    span.style.color = randomColor();

    textElement.appendChild(span);
    index++;

    setTimeout(typeWriter, 70);
  } else {
    typing = false;
  }
}

function randomColor() {
  const colors = ["#8affc1", "#ff7a7a", "#8ab4ff", "#faff8a"];
  return colors[Math.floor(Math.random() * colors.length)];
}
