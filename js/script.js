// dark theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// previously selected topic (check from local storage)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// validate if the user has previously chosen a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// activate or deactivate the theme manually w/ the button
themeButton.addEventListener("click", () => {
  // add or remove the dark / light icon & theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //   save these and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

console.log("theme setting is working!! :-)");

// menu show & hide
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// menu show
// validate if the constant exist
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// menu hide
// validate if the constant exist
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

console.log("menu y setting working");

// remove menu profile
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //   clicking on nav__links removes show menu
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
console.log("remove menu, profile is working :-)");

// typewriter effect
// import Typewriter from "typewriter-effect/dist/core";

new Typewriter("#typewriter", {
  strings: ["Diana Vargas", "Web-developer"],
  autoStart: true,
  loop: true,
  cursor: " ",
});
console.log("typewriter effect is working :-)");

// Portfolio Swiper Effect

var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
  // mousewheel: true,
  keyboard: true,
});
console.log("Portfolio is working :-)");

// Scroll up section

function scrollUp() {
  const scrollup = document.getElementById("scroll-up");
  // When the scroll is higher that 560 viewpoint / height ,
  // then the scroll up button will appear
  // and on clicking should reach the top of the page
  if (this.scrollY >= 560) {
    scrollup.classList.add("show-scroll");
  } else {
    scrollup.classList.remove("show-scroll");
  }
  console.log("scroll is working :-)");
}

window.addEventListener("scroll", scrollUp);

// Scroll section active HIGHLIGHT

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
  console.log("scroll active is working :-)");
}
window.addEventListener("scroll", scrollActive);
