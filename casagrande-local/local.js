const form = document.querySelector("#directory-search");
const query = document.querySelector("#search-query");
const category = document.querySelector("#category-filter");
const cards = [...document.querySelectorAll(".listing-card")];
const status = document.querySelector("#search-status");
const empty = document.querySelector("#empty-state");

function filterListings() {
  const term = query.value.trim().toLowerCase();
  const selected = category.value;
  let visible = 0;

  cards.forEach((card) => {
    const matchesCategory = selected === "all" || card.dataset.category === selected;
    const matchesTerm = !term || card.dataset.search.includes(term) || card.textContent.toLowerCase().includes(term);
    const show = matchesCategory && matchesTerm;
    card.hidden = !show;
    if (show) visible += 1;
  });

  empty.hidden = visible !== 0;
  status.textContent = `${visible} sample ${visible === 1 ? "listing" : "listings"} shown.`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  filterListings();
});

category.addEventListener("change", filterListings);
query.addEventListener("input", filterListings);

document.querySelectorAll("[data-category]").forEach((button) => {
  button.addEventListener("click", () => {
    category.value = button.dataset.category;
    filterListings();
    document.querySelector("#discover").scrollIntoView({ behavior: "smooth" });
  });
});
