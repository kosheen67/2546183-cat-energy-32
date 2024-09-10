const burgerLine = document.querySelector('.burger__line');
const navList = document.querySelector('.main-nav__list');

burgerLine.addEventListener('click', () => {
  if (burgerLine.classList.contains('burger__line--closed-menu') & navList.classList.contains('main-nav__list--closed-menu')) {
    burgerLine.classList.remove('burger__line--closed-menu');
    burgerLine.classList.add('burger__line--opened-menu');

    navList.classList.remove('main-nav__list--closed-menu');
    navList.classList.add('main-nav__list--opened-menu');
  } else {
    burgerLine.classList.add('burger__line--closed-menu');
    burgerLine.classList.remove('burger__line--opened-menu');

    navList.classList.add('main-nav__list--closed-menu');
    navList.classList.remove('main-nav__list--opened-menu');
  }
});
