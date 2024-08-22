const scrolls = document.querySelectorAll(".partner-scroll");
const scrollBacks = document.querySelectorAll(".partner-scrollBack");

var animation = "animate-[bgYellow_2s]";
var animation2 = "animate-[bgYellow2_2s]";

scrolls.forEach((scroll) => {
  scroll.addEventListener("click", () => {
    const p_bgYellow = document.querySelector(`#${scroll.id}-p`);
    if (p_bgYellow.classList.contains(animation)) {
      p_bgYellow.classList.remove(animation);
      p_bgYellow.classList.add(animation2);
    } else if (p_bgYellow.classList.contains(animation2)) {
      p_bgYellow.classList.remove(animation2);
      p_bgYellow.classList.add(animation);
    } else {
      p_bgYellow.classList.add(animation);
    }
  });
  
  const scrollBack = document.querySelector(`#${scroll.id}-back`);
  scrollBack.addEventListener("click", () => {
    if (scroll.classList.contains(animation)) {
      scroll.classList.remove(animation);
      scroll.classList.add(animation2);
    } else if (scroll.classList.contains(animation2)) {
      scroll.classList.remove(animation2);
      scroll.classList.add(animation);
    } else {
      scroll.classList.add(animation);
    }
  });
});
