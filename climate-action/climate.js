const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");

menuButton?.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  navigation.classList.toggle("open", !expanded);
});

navigation?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton?.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
  }
});

const actionInputs = [...document.querySelectorAll(".action-list input")];
const count = document.querySelector("#action-count");
const message = document.querySelector("#action-message");
const savedActions = JSON.parse(localStorage.getItem("climate-actions") || "[]");

actionInputs.forEach((input) => {
  input.checked = savedActions.includes(input.value);
  input.addEventListener("change", updateActions);
});

function updateActions() {
  const selected = actionInputs.filter((input) => input.checked).map((input) => input.value);
  localStorage.setItem("climate-actions", JSON.stringify(selected));
  count.textContent = selected.length;
  message.textContent = selected.length
    ? `${selected.length === 1 ? "One realistic commitment" : "A personal action plan"} saved on this device. Start small, stay consistent, and invite someone else into the conversation.`
    : "Choose one action you can realistically repeat. Progress grows through practice.";
}

updateActions();
