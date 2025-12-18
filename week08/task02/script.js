const activateBtn = document.getElementById("activate");
const deactivateBtn = document.getElementById("deactivate");

activateBtn.addEventListener("click", () => {
  document.body.style.background = "#8ab4ff"; 
});

deactivateBtn.addEventListener("click", () => {
  document.body.style.background = "white"; 
});
