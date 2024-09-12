var sliderSelector = ".swiper-container",
  options = {
    init: false,
    loop: true,
    speed: 5000,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    grabCursor: true,
    parallax: true,
    autoplay: {
      delay: 0,
      enabled: true,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1023: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };
var mySwipert = new Swiper(sliderSelector, options);
mySwipert.init();

//////
var sliderSelector2 = ".swiper-container-2",
  options = {
    init: false,
    loop: true,
    speed: 5000,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    grabCursor: true,
    parallax: true,
    autoplay: {
      delay: 0,
      enabled: true,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1440: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1023: {
        slidesPerView: 1.5,
        spaceBetween: 0,
      },
      690: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      375: {
        slidesPerView: 1.2,
        spaceBetween: 18,
      },
    },
  };
var mySwipert2 = new Swiper(sliderSelector2, options);
mySwipert2.init();
