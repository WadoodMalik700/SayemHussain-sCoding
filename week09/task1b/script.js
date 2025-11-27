let posX = 125;
let posY = 125;
const step = 30;

function moveBox(direction) {
  const box = document.getElementById("box");

  // Movement boundaries
  if (direction === "up" && posY > 0) posY -= step;
  if (direction === "down" && posY < 250) posY += step;
  if (direction === "left" && posX > 0) posX -= step;
  if (direction === "right" && posX < 250) posX += step;

  // GSAP movement animation
  gsap.to(box, {
    duration: 0.35,
    x: posX - 125, // shift relative to starting point
    y: posY - 125,
    ease: "power2.out"
  });

  // GSAP “pop” effect
  gsap.fromTo(
    box,
    { scale: 1 },
    { scale: 1.15, duration: 0.15, yoyo: true, repeat: 1, ease: "power1.out" }
  );
}
