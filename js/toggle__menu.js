const headerPanel = document.querySelector(".header__panel");
// const headerRight = document.querySelector(".header__right");
const toggleMenu = document.querySelector(".toggle__menu");

toggleMenu.addEventListener("click", () => {
  headerPanel.classList.toggle("open");
  headerRight.classList.toggle("open");
});
