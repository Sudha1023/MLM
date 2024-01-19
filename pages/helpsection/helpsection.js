const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelector(".dropdownlink");
if (dropdown) {
  dropdown.addEventListener("click", () => {
    dropdownLink.classList.toggle("dropdownlinkToggle");
  });
}

const menuBar = document.querySelector(".menu_sidebar2");

const sidebar2 = document.querySelector(".help_sidebar");
if (menuBar) {
  menuBar.addEventListener("click", () => {
    sidebar2.classList.toggle("opensidebar2");
  });
}