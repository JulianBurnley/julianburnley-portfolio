const themeButton = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("lesson11-project-theme");

function updateThemeButton() {
  const isDark = document.body.classList.contains("dark-mode");
  themeButton.textContent = isDark ? "Light mode" : "Dark mode";
  themeButton.setAttribute("aria-pressed", String(isDark));
}

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

updateThemeButton();

themeButton.addEventListener("click", function () {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "lesson11-project-theme",
    isDark ? "dark" : "light"
  );
  updateThemeButton();
});
