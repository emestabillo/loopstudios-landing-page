const navToggle = document.querySelector(".nav__toggle");
const navWrapper = document.querySelector(".nav__wrapper");
const navIcon = document.querySelector(".menu-icon");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
    navIcon.src = "images/icon-hamburger.svg"
    
  } else {
    navWrapper.classList.add("active");
    navIcon.src = "images/icon-close.svg"
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});