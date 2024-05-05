// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburger selections

const burger = document.querySelector("#burger");
const ul = document.querySelector("nav ul");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
