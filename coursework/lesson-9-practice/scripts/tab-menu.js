// This is the code needed to help make the tab interface work.

function changeTab(evt, tabContentName) {
  // declare needed variables
  var i, tabContent, tabs;
  
  // set all tab contents to not display at all
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].setAttribute("style", "display: none;");
  }

  // set all tabs to not be selected
  tabs = document.getElementsByClassName("tab");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].ariaSelected = "false"; 
  }

  // set the tab to be selected and the content to display
  document.getElementById(tabContentName).setAttribute("style", "display: block;");
  evt.currentTarget.ariaSelected = "true";
}