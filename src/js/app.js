'use strict';

import * as flsFunctions from './modules/functions.js'

//<Табы>=============================================================================================

// const tabItems = Array.from(document.querySelectorAll('.tab-item'))
// const contentItems = Array.from(document.querySelectorAll('.content-item'))

// const clearActiveClass = (element, className = 'is-active') => {
//   element.find(item => item.classList.remove(`${ className }`))
// }

// const setActiveClass = (element, index, className = 'is-active') => {
//   element[index].classList.add(`${ className }`)
// }

// const checkoutTabs = (item, index) => {
//   item.addEventListener('click', () => {
    
//     if (item.classList.contains('is-active')) return
//     console.log(item)
  
//     clearActiveClass(tabItems)
//     clearActiveClass(contentItems)
    
//     setActiveClass(tabItems, index)
//     setActiveClass(contentItems, index)
//   })
// }

// tabItems.forEach(checkoutTabs)

//<Swiper>=============================================================================================

// const swiper = new Swiper('.swiper', {
//   // Стрелки
// 	navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// 	// Навигация
// 	// Буллеты, текущее положение, прогрессбар
// 	pagination: {
// 		el: '.swiper-pagination',
// 		// Буллеты
// 		clickable: true,
// 		// Динамические буллеты
// 		dynamicBullets: true,
// 	},
// 	// Автовысота
// 	autoHeight: false,
// 	slidesPerView: 3,
// 	keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
// 	autoplay: {
// 		delay: 5000,
// 	},
//   effect: 'coverflow',
//   coverflowEffect: {
//     rotate: 30,
//     slideShadows: false,
//   },
// 	speed: 800,
// 	observer: true,
// 	observerParents: true,
// 	observerSlideChildren: true,
// });

//<Hamburger>=============================================================================================

const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);
const body = document.body;

hamb.addEventListener('click', hambHandler);

function hambHandler(e) {
	e.preventDefault();
	popup.classList.toggle('open');
	hamb.classList.toggle('active');
	body.classList.toggle('noscroll');
	renderPopup();
}

function renderPopup() {
	popup.appendChild(menu);
}

//<Плавный скролл>=============================================================================================

// const anchors = document.querySelectorAll('a[href^="#"]')

// // Цикл по всем ссылкам
// for(let anchor of anchors) {
//   anchor.addEventListener("click", function(e) {
//     e.preventDefault() // Предотвратить стандартное поведение ссылок
//     // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
//     const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
//     // Плавная прокрутка до элемента с id = href у ссылки
//     document.querySelector(goto).scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     })
//   })
// }


