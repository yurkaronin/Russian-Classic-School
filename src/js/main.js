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


// плавная анимация скрола по якорной ссылке
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 700,
  framesCount = 40;

anchors.forEach(function (item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function (e) {
    // убираем стандартное поведение
    e.preventDefault();

    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    // запускаем интервал, в котором
    let scroller = setInterval(function () {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;

      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
      // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});

