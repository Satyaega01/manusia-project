const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector("header nav ul");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("close");
});
