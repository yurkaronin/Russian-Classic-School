var swiper = new Swiper(".teachers-swiper", {
  slidesPerView: 2,
  spaceBetween: 32,
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

// прилипающее меню
window.onscroll = function showHeader() {
  let header = document.querySelector('.header');
  let headerWrapper = document.querySelector('.header__content-wrapper');

  if (window.pageYOffset > headerWrapper.offsetHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};


// кнопка меню
const menuButton = document.querySelector('.header__menu-button');
const mainMenu = document.querySelector('.header');
const menuLink = document.querySelectorAll('.navigation__link');

if (menuButton) {
  menuButton.addEventListener('click', function (r) {
    document.body.classList.toggle('custom-lock');
    menuButton.classList.toggle('active');
    mainMenu.classList.toggle('active');
  });
};

// свернуть меню при клике по пункту меню
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('navigation__link')) {
    mainMenu.classList.remove('active');
    if (document.querySelector('.custom-lock')) {
      document.querySelector('.custom-lock').classList.remove('custom-lock');
    }
  }
});

// подчёркивание активной ссылки
document.addEventListener('click',function(event) {
  if (event.target.classList.contains('navigation__link')) {
    menuLink.forEach(function(y) {
      y.classList.remove('navigation__link--active');
    });
    event.target.classList.add('navigation__link--active');
  }
})


// аккордеон faq
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('faq__button')) {
    if (e.target.closest('.faq__item').classList.contains('active')) {
      e.target.closest('.faq__item').classList.remove('active');
    } else {
      e.target.closest('.faq__item').classList.add('active');
    }
  }
});

