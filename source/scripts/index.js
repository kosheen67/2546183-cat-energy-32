const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('main-nav--no-js');
navToggle.classList.remove('header__toggle--no-js');

navToggle.addEventListener('click', () => {
  if (!navMain.classList.contains('main-nav--opened')) {
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.remove('main-nav--opened');
  }
});

// const navMain = document.querySelector('.main-nav');
// const navToggle = document.querySelector('.main-nav__toggle');

// navMain.classList.remove('main-nav--no-js');
// navToggle.classList.remove('main-nav__toggle--no-js');

// navToggle.addEventListener('click', () => {
//   if (!navMain.classList.contains('main-nav--opened')) {
//     navMain.classList.add('main-nav--opened');
//   } else {
//     navMain.classList.remove('main-nav--opened');
//   }
// });

/* КАРТА */

document.addEventListener('DOMContentLoaded', () => {
  const ymaps = window.ymaps;
  ymaps.ready(() => {
    const myMap = new ymaps.Map('map', {
        center: [59.938679, 30.3230044],
        zoom: 14,
        controls: [],
      }),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {},
        {
          iconLayout: 'default#image',
          iconImageHref: 'images/map-pin.png',
          iconImageSize: [57, 53],
          iconImageOffset: [-26, -42],
        }
      );

    myMap.geoObjects.add(myPlacemark);
  });
});
