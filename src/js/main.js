var swiper = new Swiper(".teachers-swiper", {
  slidesPerView: 2,
  spaceBetween: 32,
  // loop: true,
  // slidesPerView: 'auto',
  grabCursor: true,
  pagination: {
    el: ".teachers-swiper__pagination",
    clickable: true,
    type: 'fraction',
  },
  navigation: {
    nextEl: ".teachers-swiper__button-next",
    prevEl: ".teachers-swiper__button-prev",
  },
  // centeredSlides: true,

});
