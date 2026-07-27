const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const navLinks = document.querySelectorAll(".primary-nav a");
const currentYear = document.querySelector("#current-year");
const themeToggle = document.querySelector(".theme-toggle");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (themeToggle) {
  const savedTheme = localStorage.getItem("julian-portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const startDark = savedTheme ? savedTheme === "dark" : prefersDark;

  const applyTheme = (dark) => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    themeToggle.setAttribute("aria-pressed", String(dark));
    themeToggle.textContent = dark ? "Light mode" : "Dark mode";
  };

  applyTheme(startDark);

  themeToggle.addEventListener("click", () => {
    const dark = document.documentElement.dataset.theme !== "dark";
    applyTheme(dark);
    localStorage.setItem("julian-portfolio-theme", dark ? "dark" : "light");
  });
}
