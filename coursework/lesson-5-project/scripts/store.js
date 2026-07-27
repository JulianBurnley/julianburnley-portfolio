(() => {
  const countElements = document.querySelectorAll(".cart-count");
  const buttons = document.querySelectorAll(".add-to-cart");
  let count = Number(sessionStorage.getItem("jr-toy-cart") || 0);

  const updateCount = () => {
    countElements.forEach((element) => {
      element.textContent = String(count);
    });
  };

  updateCount();

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      count += 1;
      sessionStorage.setItem("jr-toy-cart", String(count));
      updateCount();
      button.textContent = "Added!";
      button.classList.add("added");
      window.setTimeout(() => {
        button.textContent = "Add to cart";
        button.classList.remove("added");
      }, 1200);
    });
  });

  document.querySelectorAll(".store-search").forEach((form) => {
    form.addEventListener("submit", (event) => {
      const input = form.querySelector('input[type="search"]');
      if (!input?.value.trim()) event.preventDefault();
    });
  });
})();
