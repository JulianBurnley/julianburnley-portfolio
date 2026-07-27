(() => {
  const checks = [...document.querySelectorAll("[data-check]")];
  const progress = document.querySelector(".progress-bar");
  const label = document.querySelector(".progress strong");
  const storageKey = "lesson-one-readiness";

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    checks.forEach((check) => {
      check.checked = saved.includes(check.dataset.check);
    });
  } catch {
    localStorage.removeItem(storageKey);
  }

  const update = () => {
    const completed = checks.filter((check) => check.checked);
    const percent = checks.length ? (completed.length / checks.length) * 100 : 0;
    progress.style.width = `${percent}%`;
    label.textContent = completed.length === checks.length
      ? "Environment ready"
      : `${completed.length} of ${checks.length} ready`;
    localStorage.setItem(storageKey, JSON.stringify(completed.map((check) => check.dataset.check)));
  };

  checks.forEach((check) => check.addEventListener("change", update));
  update();
})();
