function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("clock").textContent = `${h}:${m}:${s}`;
}

setInterval(updateClock, 1000);
updateClock();


const API_KEY = "YOUR_API_KEY_HERE";
const CITY = "London";

async function getWeather() {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`
    );
    const data = await res.json();

    document.getElementById("weather").textContent =
      `${data.weather[0].description} • ${Math.round(data.main.temp)}°C`;
  } catch {
    document.getElementById("weather").textContent =
      "Weather unavailable";
  }
}

getWeather();


const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const drops = Array.from({ length: 300 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  speed: 4 + Math.random() * 6,
  length: 10 + Math.random() * 20
}));

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(180,200,255,0.6)";
  ctx.lineWidth = 1;

  drops.forEach(d => {
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x, d.y + d.length);
    ctx.stroke();

    d.y += d.speed;
    if (d.y > canvas.height) {
      d.y = -d.length;
      d.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawRain);
}

drawRain();


let waterLevel = 0;

setInterval(() => {
  if (waterLevel < 100) {
    waterLevel += 0.2; 
    document.getElementById("water").style.height = waterLevel + "%";
  }
}, 1000);
