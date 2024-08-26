const headerPanel = document.querySelector(".header__panel");
const toggleMenu = document.querySelector(".toggle__menu");
const backDrop = document.querySelector(".backdrop");

toggleMenu.addEventListener("click", () => {
  headerPanel.classList.toggle("open");
  toggleMenu.classList.toggle("open");
  backDrop.classList.toggle("open");
});
