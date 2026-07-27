fetch('scripts/table-data.json')
  .then(response => response.json())
  .then(data => populatePlanets(data.planetdata))
  .catch(err => console.error("JSON load error:", err));

function populatePlanets(planets) {
  const tbody = document.querySelector("tbody");
  const template = document.querySelector("#planetrow");

  planets.forEach(planet => {
    const clone = template.content.cloneNode(true);
    const cells = clone.querySelectorAll("td");

    cells[0].textContent = planet.planet;
    cells[1].textContent = planet.type;
    cells[2].textContent = planet.diameter;
    cells[3].textContent = planet.day;
    cells[4].textContent = planet.orbit;

    tbody.appendChild(clone);
  });
}

