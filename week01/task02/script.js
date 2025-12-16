const funFacts = [
  "I once fixed a bug by restarting my computer.",
  "Dark mode saves my eyes and my soul.",
];

function changeFact() {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  document.getElementById("funFact").textContent = funFacts[randomIndex];
}

function toggleMode() {
  const body = document.body;
  body.classList.toggle("dark");
  body.classList.toggle("light");
}
