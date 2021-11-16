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

var swiperTwo = new Swiper(".reviews-swiper", {
  pagination: {
    el: ".reviews-swiper__pagination",
    type: "fraction",
  },
  loop: true,
  navigation: {
    nextEl: ".reviews-swiper__button-next",
    prevEl: ".reviews-swiper__button-prev",
  },

});

// прилипающее меню в шапке
window.onscroll = function showHeader() {
  let header = document.querySelector('.header');

  if (window.pageYOffset > header.offsetHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
