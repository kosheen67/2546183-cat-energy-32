var e=document.querySelector(".burger__line"),n=document.querySelector(".main-nav__list");e.addEventListener("click",()=>{e.classList.contains("burger__line--closed-menu")&n.classList.contains("main-nav__list--closed-menu")?(e.classList.remove("burger__line--closed-menu"),e.classList.add("burger__line--opened-menu"),n.classList.remove("main-nav__list--closed-menu"),n.classList.add("main-nav__list--opened-menu")):(e.classList.add("burger__line--closed-menu"),e.classList.remove("burger__line--opened-menu"),n.classList.add("main-nav__list--closed-menu"),n.classList.remove("main-nav__list--opened-menu"))});document.addEventListener("DOMContentLoaded",()=>{let s=window.ymaps;s.ready(()=>{let a=new s.Map("map",{center:[59.938679,30.3230044],zoom:14,controls:[]}),i=new s.Placemark(a.getCenter(),{},{iconLayout:"default#image",iconImageHref:"images/map-pin.png",iconImageSize:[57,53],iconImageOffset:[-26,-42]});a.geoObjects.add(i)})});
