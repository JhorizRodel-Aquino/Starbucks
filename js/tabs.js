const rewardsCategory = document.querySelectorAll(".rewardsItems__category");
const rewardsDetails = document.querySelectorAll(".rewardsItems__details");
const rewardsUnderline = document.querySelector(".rewardsItems__tabs");

var recentUnderline = `rewards__tab-1-underline`;

rewardsCategory.forEach((category) => {
    category.addEventListener("click", () => {
        removeActiveCategory();
        category.classList.add("active");
        const activeDetails = document.querySelector(`#${category.id}-details`);
        removeActiveDetails();
        activeDetails.classList.add("active");
        
        rewardsUnderline.classList.remove(recentUnderline);
        rewardsUnderline.classList.add(`${category.id}-underline`);
        recentUnderline = `${category.id}-underline`;
    });
});


function removeActiveCategory() {
  rewardsCategory.forEach((category) => {
    category.classList.remove("active");
  });
}

function removeActiveDetails() {
  rewardsDetails.forEach((details) => {
    details.classList.remove("active");
  });
}
