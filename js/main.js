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
  const isSpanish = document.documentElement.lang.toLowerCase().startsWith("es");
  const savedTheme = localStorage.getItem("julian-portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const startDark = savedTheme ? savedTheme === "dark" : prefersDark;

  const applyTheme = (dark) => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    themeToggle.setAttribute("aria-pressed", String(dark));
    themeToggle.textContent = dark
      ? (isSpanish ? "Modo claro" : "Light mode")
      : (isSpanish ? "Modo oscuro" : "Dark mode");
  };

  applyTheme(startDark);

  themeToggle.addEventListener("click", () => {
    const dark = document.documentElement.dataset.theme !== "dark";
    applyTheme(dark);
    localStorage.setItem("julian-portfolio-theme", dark ? "dark" : "light");
  });
}

const inquiryForms = document.querySelectorAll(".inquiry-form");

inquiryForms.forEach((form) => {
  const submitButton = form.querySelector('button[type="submit"]');
  const status = form.querySelector(".form-status");
  const isSpanish = document.documentElement.lang.toLowerCase().startsWith("es");
  const idleLabel = submitButton?.textContent || "";
  const messages = isSpanish
    ? {
        sending: "Enviando…",
        success:
          "Gracias. Su consulta fue enviada correctamente. Julian se comunicará con usted después de revisarla.",
        error:
          "No se pudo enviar la consulta. Inténtelo de nuevo o escriba a julian@julianburnley.com.",
      }
    : {
        sending: "Sending…",
        success:
          "Thank you. Your inquiry was sent successfully. Julian will contact you after reviewing it.",
        error:
          "The inquiry could not be sent. Please try again or email julian@julianburnley.com.",
      };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity() || !submitButton || !status) {
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = messages.sending;
    status.hidden = true;
    status.removeAttribute("data-state");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      status.textContent = messages.success;
      status.dataset.state = "success";
      status.hidden = false;
      status.focus();
    } catch {
      status.textContent = messages.error;
      status.dataset.state = "error";
      status.hidden = false;
      status.focus();
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = idleLabel;
    }
  });
});
