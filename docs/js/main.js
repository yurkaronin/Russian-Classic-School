var swiper = new Swiper(".teachers-swiper", {
  breakpoints: {
    1024: {
      slidesPerView: 1,
      spaceBetween: 16,
      centeredSlides: true,
      slidesPerView: "auto",
    },
    1420: {
      slidesPerView: 2,
      spaceBetween: 32,
      centeredSlides: true,
      slidesPerView: "auto",
    }
  },
  loop: true,
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
  centeredSlides: true,
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
});

// аккордеон faq
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
};

items.forEach(item => item.addEventListener('click', toggleAccordion));

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

// //плавная прокрутка до блока js
const anchors = document.querySelectorAll('a[data-target^="anchor"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); //отмена стандартного поведения элемента
    const sectionTarget = anchor.getAttribute("href");
    let targetOffset = document.querySelector("" + sectionTarget).offsetTop - 120;
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth"
    });
  });
}

// Интерактивная карта с гео меткой
let center = [45.013460, 38.958488];

function init() {

  let map = new ymaps.Map("map", {
    center: center, // ваши данные
    zoom: 15
  });

  let placemarRkschool = new ymaps.Placemark([45.013460, 38.958488], {}, {
    iconLayout: 'default#image', /* говорим что будем отображать на карте в качестве геометки  */
    iconImageHref: '../img/map/balun.svg', /* указываем пусть к картинке на нашем сайте  */
    iconImageSize: [56, 80], /* размеры картинки  */
    iconImageOffset: [-19, -44] /* отступ от центра  */
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemarRkschool);

  placemarRkschool.events
    .add('mouseenter', function (e) {
      e.get('target').options.set('iconImageHref', '../img/map/balun-2.svg');
    })
    .add('mouseleave', function (e) {
      e.get('target').options.set('iconImageHref', '../img/map/balun.svg');
    });
}

ymaps.ready(init);


Inputmask("+7 (999) 999-99-99").mask('[type="tel"]');





