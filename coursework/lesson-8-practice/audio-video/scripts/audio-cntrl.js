document.querySelectorAll("audio").forEach(a => {
  a.addEventListener("play", () => {
    document.querySelectorAll(".media-card").forEach(c => c.classList.remove("playing"));
    a.closest(".media-card").classList.add("playing");
  });
});
