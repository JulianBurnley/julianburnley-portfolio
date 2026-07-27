// This code makes the tab interface work.

function changeTab(evt, tabContentName) {
  // Declare variables.
  var i, tabContent, tabs;

  // Hide all tab panels.
  tabContent = document.getElementsByClassName("tab-content");

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Set all tabs to not selected.
  tabs = document.getElementsByClassName("tab");

  for (i = 0; i < tabs.length; i++) {
    tabs[i].setAttribute("aria-selected", "false");
    tabs[i].setAttribute("tabindex", "-1");
  }

  // Display the selected panel.
  document.getElementById(tabContentName).style.display = "block";

  // Mark the selected tab as active.
  evt.currentTarget.setAttribute("aria-selected", "true");
  evt.currentTarget.setAttribute("tabindex", "0");
}

const tabButtons = Array.from(document.querySelectorAll('[role="tab"]'));

tabButtons.forEach(function (tab, index) {
  tab.addEventListener("keydown", function (event) {
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % tabButtons.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabButtons.length - 1;
    } else {
      return;
    }

    event.preventDefault();

    const nextTab = tabButtons[nextIndex];
    changeTab(
      { currentTarget: nextTab },
      nextTab.getAttribute("aria-controls")
    );
    nextTab.focus();
  });
});
