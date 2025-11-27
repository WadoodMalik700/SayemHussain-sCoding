let posX = 130;
let posY = 130;
const step = 20;

function moveBox(direction) {
  const box = document.getElementById("box");

  if (direction === "up" && posY > 0) posY -= step;
  if (direction === "down" && posY < 260) posY += step;
  if (direction === "left" && posX > 0) posX -= step;
  if (direction === "right" && posX < 260) posX += step;

  box.style.top = posY + "px";
  box.style.left = posX + "px";
}
