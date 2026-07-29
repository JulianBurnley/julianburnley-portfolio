const byId = (id) => document.getElementById(id);
const show = (id, message, state = "") => {
  const output = byId(id);
  output.textContent = message;
  output.dataset.state = state;
};

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;

  if (action === "capacity") {
    const seats = Number(byId("seats").value);
    const people = Number(byId("people").value);
    show("capacity-output", `${seats} seats × ${people} people = ${seats * people} riders`, "success");
  }

  if (action === "homework") {
    const classroom = {
      students: Number(byId("students").value),
      submitted: Number(byId("submitted").value),
      rate() { return Math.min(100, (this.submitted / this.students) * 100); }
    };
    if (!classroom.students || classroom.submitted < 0) {
      show("homework-output", "Enter valid classroom totals.", "error");
    } else {
      show("homework-output", `${classroom.rate().toFixed(1)}% submitted homework.`, "success");
    }
  }

  if (action === "random") {
    const number = Math.floor(Math.random() * 100) + 1;
    const won = number >= 50 && number <= 75;
    show("random-output", `${number} — ${won ? "You won!" : "Keep trying."}`, won ? "success" : "");
  }

  if (action === "grades") {
    const students = [["Lucy", 80], ["Tony", 60], ["Tina", 97], ["Greg", 70], ["Julian Jr.", 98]];
    const letter = (grade) => grade >= 90 ? "A" : grade >= 80 ? "B" : grade >= 70 ? "C" : grade >= 60 ? "D" : "F";
    show("grades-output", students.map(([name, grade]) => `${name}: ${grade} (${letter(grade)})`).join(" · "), "success");
  }

  if (action === "audit") {
    const counts = {
      headings: document.querySelectorAll("h1,h2,h3").length,
      paragraphs: document.querySelectorAll("p").length,
      links: document.querySelectorAll("a").length,
      controls: document.querySelectorAll("button,input").length
    };
    show("audit-output", Object.entries(counts).map(([key, value]) => `${value} ${key}`).join(" · "), "success");
  }

  if (action === "validate") {
    const value = byId("range-input").value.trim();
    try {
      if (!value) throw new Error("Enter a value.");
      const number = Number(value);
      if (!Number.isFinite(number)) throw new Error("Use numbers only.");
      if (number < 5) throw new Error("That number is below 5.");
      if (number > 15) throw new Error("That number is above 15.");
      show("validation-output", `${number} is inside the accepted range.`, "success");
    } catch (error) {
      show("validation-output", error.message, "error");
    }
  }

  if (action === "location") {
    if (!navigator.geolocation) {
      show("location-output", "Geolocation is not supported by this browser.", "error");
      return;
    }
    show("location-output", "Waiting for your permission…");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => show("location-output", `Latitude ${coords.latitude.toFixed(4)}, longitude ${coords.longitude.toFixed(4)}.`, "success"),
      () => show("location-output", "Location was unavailable or permission was declined.", "error"),
      { timeout: 8000 }
    );
  }
});

const eventInput = byId("event-input");
["focus", "input", "copy", "keydown"].forEach((type) => {
  eventInput.addEventListener(type, (event) => {
    const detail = type === "keydown" ? `: ${event.key}` : "";
    show("event-output", `${type} event detected${detail}`, "success");
  });
});
