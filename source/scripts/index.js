const burgerLine = document.querySelector('.burger__line');
const navList = document.querySelector('.main-nav__list');
const catalogList = document.querySelector('.catalog-nav__list');

burgerLine.addEventListener('click', () => {
  if (burgerLine.classList.contains('burger__line--closed-menu') & navList.classList.contains('main-nav__list--closed-menu') & catalogList.classList.contains('catalog-nav__list--closed-menu')) {
    burgerLine.classList.remove('burger__line--closed-menu');
    burgerLine.classList.add('burger__line--opened-menu');

    navList.classList.remove('main-nav__list--closed-menu');
    navList.classList.add('main-nav__list--opened-menu');

    catalogList.classList.remove('catalog-nav__list--closed-menu');
    catalogList.classList.add('catalog-nav__list--opened-menu');
  } else {
    burgerLine.classList.add('burger__line--closed-menu');
    burgerLine.classList.remove('burger__line--opened-menu');

    navList.classList.add('main-nav__list--closed-menu');
    navList.classList.remove('main-nav__list--opened-menu');

    catalogList.classList.add('catalog-nav__list--closed-menu');
    catalogList.classList.remove('catalog-nav__list--opened-menu');
  }
});


/* КАРТА */

document.addEventListener('DOMContentLoaded', () => {

  const ymaps = window.ymaps;
  ymaps.ready(() => {
    const myMap = new ymaps.Map('map', {
        center: [59.938679, 30.3230044],
        zoom: 14,
        controls: []
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/map-pin.png',
        iconImageSize: [57, 53],
        iconImageOffset: [-26, -42]
      });

    myMap.geoObjects.add(myPlacemark);
  });

});
