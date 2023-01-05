let stickyNavbar = document.querySelector("header");
let hamBtn = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
let navLink = document.querySelectorAll(".nav-links");
let navBg = document.querySelector(".navbar");
let wrapCard = document.querySelectorAll(".ins-wrapper");
let prevBtn = document.querySelectorAll(".prev-btn");
let nextBtn = document.querySelectorAll(".next-btn");

window.addEventListener("scroll", () => {
  stickyNavbar.classList.toggle("sticky", window.scrollY > 0);
});

hamBtn.addEventListener("click", () => {
  hamBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
  navBg.classList.toggle("active");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    hamBtn.classList.remove("active");
    navMenu.classList.remove("active");
    navBg.classList.remove("active");
  })
);

wrapCard.forEach((item, i) => {
  let containerDimension = item.getBoundingClientRect();
  let containerWidth = containerDimension.width;

  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  prevBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
