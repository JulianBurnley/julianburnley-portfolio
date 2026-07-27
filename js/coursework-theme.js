(() => {
  const storageKey = "julian-coursework-theme";
  const root = document.documentElement;
  const buttons = document.querySelectorAll(".course-theme-toggle");

  const applyTheme = (dark) => {
    root.dataset.courseworkTheme = dark ? "dark" : "light";
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(dark));
      button.textContent = dark ? "Light mode" : "Dark mode";
    });
  };

  const saved = localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved ? saved === "dark" : prefersDark);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const dark = root.dataset.courseworkTheme !== "dark";
      applyTheme(dark);
      localStorage.setItem(storageKey, dark ? "dark" : "light");
    });
  });
})();
