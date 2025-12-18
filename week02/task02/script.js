const messages = [
  "You feel the web tighten.",
  "This place looks familiar.",
  "You have been here before.",
  "The link loops back on itself.",
  "There is no edge to this web.",
  "You click, therefore it continues."
];

function updatePage() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("message").textContent = msg;

  document.body.style.filter = `hue-rotate(${Math.random() * 40 - 20}deg)`;
}

window.addEventListener("hashchange", () => {
  updatePage();

  setTimeout(() => {
    location.hash = "thread" + Math.floor(Math.random() * 3 + 1);
  }, 2000);
});

updatePage();
