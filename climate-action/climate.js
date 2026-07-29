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

const briefingGrid = document.querySelector("#briefing-grid");
const briefingUpdated = document.querySelector("#briefing-updated");
const briefingFilters = [...document.querySelectorAll("[data-briefing-filter]")];
let briefingArticles = [];

function articleCard(article) {
  const card = document.createElement("article");
  const meta = document.createElement("p");
  const title = document.createElement("h3");
  const description = document.createElement("p");
  const link = document.createElement("a");
  const date = article.published
    ? new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(article.published))
    : "Recent";

  meta.className = "article-meta";
  meta.textContent = `${article.category} · ${article.source} · ${date}`;
  title.textContent = article.title;
  description.textContent = article.description || "Read the complete article at the original source.";
  link.href = article.link;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = "Read at the source ↗";

  card.append(meta, title, description, link);
  return card;
}

function renderBriefing(filter = "all") {
  briefingGrid.replaceChildren();
  const visible = filter === "all"
    ? briefingArticles
    : briefingArticles.filter((article) => article.category === filter);

  if (!visible.length) {
    const empty = document.createElement("p");
    empty.className = "briefing-loading";
    empty.textContent = "No recent articles are available in this category.";
    briefingGrid.append(empty);
    return;
  }

  visible.slice(0, 12).forEach((article) => briefingGrid.append(articleCard(article)));
}

briefingFilters.forEach((button) => {
  button.addEventListener("click", () => {
    briefingFilters.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderBriefing(button.dataset.briefingFilter);
  });
});

fetch("data/articles.json")
  .then((response) => {
    if (!response.ok) throw new Error("Briefing unavailable");
    return response.json();
  })
  .then((data) => {
    briefingArticles = Array.isArray(data.articles) ? data.articles : [];
    const updated = new Date(data.updatedAt);
    briefingUpdated.textContent = Number.isNaN(updated.getTime())
      ? `${briefingArticles.length} recent articles`
      : `Updated ${new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(updated)} · ${briefingArticles.length} articles`;
    renderBriefing();
  })
  .catch(() => {
    briefingUpdated.textContent = "The briefing could not be refreshed.";
    briefingGrid.innerHTML = '<p class="briefing-loading">Please return later or explore the primary sources below.</p>';
  });
