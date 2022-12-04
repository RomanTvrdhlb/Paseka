export default {
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  overlay: document.querySelector('[data-overlay]'),
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
  header: document.querySelector("header"),
  video: [...document.querySelectorAll("[data-video]")],
  startButton: document.querySelector(".start-button"),
  image: document.querySelector(".our-section__image"),
  mainData: [6000,3500,5500,6800,10000,6400,6200],
  subData: [2000,1500,3500,2800,8000,2400,4200],
  mainLabels: ['31 Авг','1 Сен','2 Сен','3 Сен','4 Сен','5 Сен','6 Сен'],
 
  
}




