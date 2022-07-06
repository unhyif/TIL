const toggleBtn = document.querySelector(".toggleBtn");
const nav = document.querySelector(".header__nav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("header__nav--active");
});
