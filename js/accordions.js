const accordions = document.querySelectorAll(".footerTop__item--category");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.nextElementSibling.classList.toggle("open");
    accordion.querySelector("i").classList.toggle("open");
  });
});
