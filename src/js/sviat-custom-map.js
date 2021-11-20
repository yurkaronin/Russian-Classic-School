

    // function init() {
    //   var myMap = new ymaps.Map('map', {
    //       center: [45.035470, 38.975313],
    //       zoom: 10
    //     },
    //     {
    //       searchControlProvider: 'yandex#search'
    //     }),
    //     objectManager = new ymaps.ObjectManager({
    //       // Чтобы метки начали кластеризоваться, выставляем опцию.
    //       clusterize: true,
    //       // ObjectManager принимает те же опции, что и кластеризатор.
    //       gridSize: 32,
    //       clusterDisableClickZoom: true
    //     });

    //   myMap.behaviors.disable(['drag', 'scrollZoom']);

    //   objectManager.objects.options.set({
    //     iconLayout: 'default#image',
    //     iconImageHref: 'img/svg-min/balun.svg',
    //     iconImageSize: [30, 42],
    //     iconImageOffset: [-3, -42]
    //   });

    //   objectManager.objects.overlays.events.add('mouseenter', function(e) {
    //     objectManager.objects.setObjectOptions(
    //       e.get('objectId'), {
    //         iconImageHref: 'img/svg-min/balun2.svg'
    //       }
    //     );
    //   });
    //   objectManager.objects.overlays.events.add('mouseleave', function(e) {
    //     objectManager.objects.setObjectOptions(
    //       e.get('objectId'), {
    //         iconImageHref: 'img/svg-min/balun.svg'
    //       }
    //     );
    //   });

    //   fetch('js/projects.json').then(response => response.json()).then(data => {
    //     objectManager.add(data);
    //   });

    //   objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
    //   myMap.geoObjects.add(objectManager);
    // };

    // const swiper = new Swiper('.projects-slider__container', {
    //   slidesPerView: 3,
    //   spaceBetween: 32,
    //   loop: true,
    //   loopAdditionalSlides: 2,
    //   watchSlidesProgress: true,
    //   pagination: {
    //     el: '.projects-slider__fraction',
    //     type: "fraction",
    //     renderFraction: function(currentClass, totalClass) {
    //       return '<span class="' + currentClass + '"></span> ' + 'из' + ' <span class="' + totalClass + '"></span>';
    //     },
    //   },
    //   navigation: {
    //     nextEl: '.projects-slider__arrow-next',
    //     prevEl: '.projects-slider__arrow-prev',
    //   },
    //   breakpoints: {
    //     1200: {
    //       slidesPerView: 3,
    //     },
    //     575: {
    //       slidesPerView: 'auto',
    //     },
    //     320: {
    //       slidesPerView: 1,
    //       spaceBetween: 10,
    //     }
    //   }
    // });

    // const swiperTwo = new Swiper('.our-customers__container', {
    //   slidesPerView: 3,
    //   spaceBetween: 0,
    //   loop: true,
    //   loopAdditionalSlides: 2,
    //   watchSlidesProgress: true,
    //   pagination: {
    //     el: '.our-customers__fraction',
    //     type: "fraction",
    //     renderFraction: function(currentClass, totalClass) {
    //       return '<span class="' + currentClass + '"></span> ' + 'из' + ' <span class="' + totalClass + '"></span>';
    //     },
    //   },
    //   navigation: {
    //     nextEl: '.our-customers__arrow-next',
    //     prevEl: '.our-customers__arrow-prev',
    //   },
    //   breakpoints: {
    //     1200: {
    //       slidesPerView: 3,
    //     },
    //     575: {
    //       slidesPerView: 'auto',
    //       loopedSlides: 2,
    //     },
    //     320: {
    //       slidesPerView: 1,
    //     }
    //   }
    // });
