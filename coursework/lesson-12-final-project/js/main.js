const storageKey = "julian-reference-library-theme";

function initializeTheme() {
  const header = document.querySelector("header");
  if (!header) return;

  let button = document.getElementById("theme-toggle");
  if (!button) {
    button = document.createElement("button");
    button.id = "theme-toggle";
    button.className = "theme-toggle";
    button.type = "button";
    button.setAttribute("aria-pressed", "false");
    header.appendChild(button);
  }

  if (localStorage.getItem(storageKey) === "dark") {
    document.body.classList.add("dark-mode");
  }

  function updateButton() {
    const isDark = document.body.classList.contains("dark-mode");
    button.textContent = isDark ? "Light mode" : "Dark mode";
    button.setAttribute("aria-pressed", String(isDark));
  }

  updateButton();

  button.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem(storageKey, isDark ? "dark" : "light");
    updateButton();
  });
}

function markCurrentPage() {
  const currentFile = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a[href]").forEach(function (link) {
    if (link.getAttribute("href") === currentFile) {
      link.setAttribute("aria-current", "page");
    }
  });
}

function addBackToTopLink() {
  if (window.self !== window.top) {
    document.body.classList.add("embedded-page");
  }

  if (!document.body.id) {
    document.body.id = "top";
  }

  if (document.querySelector(".back-to-top")) return;

  const link = document.createElement("a");
  link.className = "back-to-top";
  link.href = "#top";
  link.textContent = "Back to top ↑";
  link.setAttribute("aria-label", "Back to top of page");
  document.body.appendChild(link);
}

let video;
let transcriptDiv;
let trackElements = [];
let textTracks = [];

function initializeTranscript() {
  video = document.querySelector("#myVideo");
  transcriptDiv = document.querySelector("#transcript");
  if (!video || !transcriptDiv) return;

  trackElements = Array.from(video.querySelectorAll("track"));
  textTracks = Array.from(video.textTracks);

  ["buttonEnglish", "buttonDeutsch"].forEach(function (id) {
    const button = document.getElementById(id);
    if (button) button.disabled = false;
  });
}

function clearTranscript() {
  if (transcriptDiv) transcriptDiv.replaceChildren();
}

function jumpTo(time) {
  if (!video) return;
  video.currentTime = time;
  video.play();
}

function addCue(cue) {
  const item = document.createElement("li");
  item.className = "cues";
  item.id = cue.id || `cue-${cue.startTime}`;
  item.tabIndex = 0;
  item.textContent = cue.text.replace(/<[^>]*>/g, "");
  item.addEventListener("click", function () {
    jumpTo(cue.startTime);
  });
  item.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      jumpTo(cue.startTime);
    }
  });
  transcriptDiv.appendChild(item);
}

function displayTrack(track) {
  if (!track.cues) return;
  Array.from(track.cues).forEach(addCue);
}

function loadTranscript(language) {
  if (!video || !transcriptDiv) return;
  clearTranscript();

  textTracks.forEach(function (track, index) {
    track.mode = "disabled";
    if (track.language !== language || track.kind === "chapters") return;

    track.mode = "showing";
    const trackElement = trackElements[index];
    if (track.cues) {
      displayTrack(track);
    } else if (trackElement) {
      trackElement.addEventListener("load", function () {
        displayTrack(track);
      }, { once: true });
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initializeTheme();
  markCurrentPage();
  addBackToTopLink();
  initializeTranscript();
});
