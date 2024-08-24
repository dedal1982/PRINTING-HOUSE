const swiper = new Swiper(".advantage__swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 2.5,
  spaceBetween: 0,
  loop: true,
  speed: 2500,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
