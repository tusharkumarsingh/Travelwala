const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".offer__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".offer__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".offer__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".offer__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".offer__content h5, .offer__ratings", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".offer__content .offer__btn", {
  ...scrollRevealOption,
  delay: 2500,
});

ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});


