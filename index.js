const swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  effect: "cards",
  cardsEffect: {
    rotate: true,
    slideShadows: true,
  },
  mousewheel: {
    forceToAxis: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  speed: 500,
});

const mainImage = document.getElementById("mainImage");
const categoryImages = document.querySelectorAll(".category-image");

categoryImages.forEach((image) => {
  image.addEventListener("click", () => {
    const newImage = image.getAttribute("data-image");
    mainImage.src = newImage;
  });
});

const hamburger = document.querySelector(".hamburger-menu");
const mobileNav = document.querySelector(".mobile-nav");
const closeButton = document.querySelector(".close-button");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

closeButton.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});
