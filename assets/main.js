const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

const navLinks = Array.from(document.getElementsByClassName("nav__link"));
navLinks.forEach(link => link.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
}));