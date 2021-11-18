var swiper = new Swiper(".teachers-swiper", {
  breakpoints: {
    /* 320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 16,
    }, */
    1024: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    1420: {
      slidesPerView: 2,
      spaceBetween: 32,
    }
  },
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
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('navigation__link')) {
    menuLink.forEach(function (y) {
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


// плавная анимация скрола по якорной ссылке
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 700,
  framesCount = 40;

anchors.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    let scroller = setInterval(function () {
      let scrollBy = coordY / framesCount;

      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});


// Диалоговые окна
const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const buttonClose = document.querySelectorAll('.modal');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.toggle('custom-lock');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
    document.body.classList.toggle('custom-lock');
  });
});

modalOverlay.addEventListener('click', (e) => {

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    document.body.classList.toggle('custom-lock');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.toggle('custom-lock');
    });
  }

  if (e.target.classList.contains('modal-close')) {
    modalOverlay.classList.remove('modal-overlay--visible');
    document.body.classList.toggle('custom-lock');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.toggle('custom-lock');
    });
  }

  if (e.target.classList.contains('button--close-text')) {
    modalOverlay.classList.remove('modal-overlay--visible');
    document.body.classList.toggle('custom-lock');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.toggle('custom-lock');
    });
  }
});

// Кастомная валидация форм
(function () {
  window.addEventListener("click", function (event) {

    if (event.target.classList.contains("js-validate")) {

      const formParent = event.target.closest("form");

      formParent.querySelectorAll(".custom-form__item-wrapper").forEach(function (item) {
        console.log(item)
        if (item.querySelector("[data-required]")) {
          if (item.querySelector("[data-required]").value === '') {
            console.log("не заполнен")
            item.classList.add("js-field-error");
          } else {
            console.log("заполнен")
            item.classList.remove("js-field-error");
          }
        }
      });
    }
  })
})();








