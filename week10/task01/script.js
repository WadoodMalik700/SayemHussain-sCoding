const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const confetti = [];

function createConfetti() {
  for (let i = 0; i < 5; i++) {
    confetti.push({
      x: mouseX,
      y: mouseY,
      size: Math.random() * 6 + 4,
      vx: (Math.random() - 0.5) * 6,
      vy: Math.random() * -6 - 2,
      gravity: 0.2,
      rotation: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.2,
      color: `hsl(${(mouseX / window.innerWidth) * 360}, 80%, 60%)`
    });
  }
}

function updateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  createConfetti();

  for (let i = confetti.length - 1; i >= 0; i--) {
    const c = confetti[i];

    c.vy += c.gravity;
    c.x += c.vx;
    c.y += c.vy;
    c.rotation += c.spin;

    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.rotate(c.rotation);
    ctx.fillStyle = c.color;
    ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
    ctx.restore();

    if (c.y > canvas.height + 50) {
      confetti.splice(i, 1);
    }
  }

  requestAnimationFrame(updateConfetti);
}

updateConfetti();
