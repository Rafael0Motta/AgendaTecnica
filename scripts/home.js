/* Hamburguer Menu */

function showSidebar() {
  const sidebar = document.querySelector(".navItensContainerMobile");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".navItensContainerMobile");
  sidebar.style.display = "none";
}

/* Vertical Tabs  */

function openVerticalTabs(e, tabsId) {
  let i, optionsTabContent, optionsNavItem;

  optionsTabContent = document.getElementsByClassName("optionsTabContent");
  optionsNavItem = document.getElementsByClassName("optionsNavItem");

  for (i = 0; i < optionsTabContent.length; i++) {
    optionsTabContent[i].style.display = "none";
  }

  for (i = 0; i < optionsNavItem.length; i++) {
    optionsNavItem[i].className = optionsNavItem[i].className.replace(
      " active",
      ""
    );
  }

  document.getElementById(tabsId).style.display = "block";
  e.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
