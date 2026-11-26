const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

themeToggle.addEventListener("click", () => {
  const isLight = document.documentElement.getAttribute("data-theme") !== "light";
  document.documentElement.setAttribute("data-theme", isLight ? "light" : "dark");
  themeToggle.textContent = isLight ? "☾" : "☼";
  try { localStorage.setItem("portfolio-theme", isLight ? "light" : "dark"); } catch (_) {}
});

try {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeToggle.textContent = savedTheme === "light" ? "☾" : "☼";
  }
} catch (_) {}

document.getElementById("year").textContent = new Date().getFullYear();
