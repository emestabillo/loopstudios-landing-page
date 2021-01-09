const navToggle = document.querySelector(".nav__toggle");
const navWrapper = document.querySelector(".nav__wrapper");
const navIcon = document.querySelector(".menu-icon");
const body = document.body;

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
    navIcon.src = "images/icon-hamburger.svg"
    body.style.overflow = "auto"
    
  } else {
    navWrapper.classList.add("active");
    navIcon.src = "images/icon-close.svg"
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
    body.style.overflow ="hidden";
  }
});