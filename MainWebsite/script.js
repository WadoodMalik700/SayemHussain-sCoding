const settings = {
  dark: localStorage.getItem("darkMode") === "true",
  keyboard: localStorage.getItem("keyboardMode") === "true",
  contrast: localStorage.getItem("highContrast") === "true",
  fontSize: localStorage.getItem("fontSize") || "100"
};

applySettings();


function applySettings() {
  document.body.classList.toggle("dark", settings.dark);
  document.body.classList.toggle("keyboard-mode", settings.keyboard);
  document.body.classList.toggle("high-contrast", settings.contrast);
  document.documentElement.style.fontSize = settings.fontSize + "%";
}


const darkToggle = document.getElementById("darkModeToggle");
const keyboardToggle = document.getElementById("keyboardModeToggle");
const contrastToggle = document.getElementById("highContrastToggle");
const fontSizeSelect = document.getElementById("fontSizeSelect");

if (darkToggle) {
  darkToggle.checked = settings.dark;
  darkToggle.onchange = () => {
    settings.dark = darkToggle.checked;
    localStorage.setItem("darkMode", settings.dark);
    applySettings();
  };
}

if (keyboardToggle) {
  keyboardToggle.checked = settings.keyboard;
  keyboardToggle.onchange = () => {
    settings.keyboard = keyboardToggle.checked;
    localStorage.setItem("keyboardMode", settings.keyboard);
    applySettings();
  };
}

if (contrastToggle) {
  contrastToggle.checked = settings.contrast;
  contrastToggle.onchange = () => {
    settings.contrast = contrastToggle.checked;
    localStorage.setItem("highContrast", settings.contrast);
    applySettings();
  };
}

if (fontSizeSelect) {
  fontSizeSelect.value = settings.fontSize;
  fontSizeSelect.onchange = () => {
    settings.fontSize = fontSizeSelect.value;
    localStorage.setItem("fontSize", settings.fontSize);
    applySettings();
  };
}


const mobileToggle = document.getElementById("mobileToggle");
if (mobileToggle) {
  mobileToggle.onclick = () => {
    document.body.classList.toggle("force-mobile");
  };
}

const form = document.getElementById("bookingForm");
const thankYou = document.getElementById("thankYouMessage");

if (form) {
  form.onsubmit = e => {
    e.preventDefault();
    form.style.display = "none";
    thankYou.style.display = "block";
  };
}

document.querySelectorAll("a").forEach(link => {
  link.onclick = e => {
    if (link.href.includes(".html")) {
      e.preventDefault();
      document.body.classList.add("page-exit");
      setTimeout(() => window.location = link.href, 400);
    }
  };
});

const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
