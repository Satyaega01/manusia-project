const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector("header nav ul");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("close");
});

// test button
const loginButton = document.querySelector("#loginButton");
const form = document.querySelector("#form");
loginButton.addEventListener("click", () => {
  if (form.value == "") {
    alert("Form harus lengkap");
  } else {
    alert("Login Berhasil");
  }
});
