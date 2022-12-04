import Swiper from '../vendor/swiper';


// for (const mobileSlider of document.querySelectorAll('.mobile-slider')) {
//   if (mobileSlider) {
//     (function () {
//       "use strict";

//       const breakpoint = window.matchMedia("(min-width:1240px)");
//       let slider;

//       const enableSwiper = function () {
//         slider = new Swiper(mobileSlider, {
//           slidesPerView: 'auto',
//           slidesPerColumn: 3,
//           slidesPerColumnFill: "row",
//           spaceBetween: 20,
//           freeMode: true,
//           observer: true,
//           observeParents: true
//         });
//       };

//       const breakpointChecker = function () {
//         if (breakpoint.matches === true) {
//           if (slider !== undefined) slider.destroy(true, true);

//           return;
//         } else if (breakpoint.matches === false) {
//           return enableSwiper();
//         }
//       };

//       breakpoint.addListener(breakpointChecker);
//       breakpointChecker();
//     })();
//   }

// }

const mainSlider = new Swiper('.main-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
     // desktop >= 1240
     1024: {
      direction: 'vertical',
    },
  }
});

const catalogSwiper = new Swiper('.catalog-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 50,
  observer: true,
  observeParents: true,
  loop:true,

  navigation: {
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.catalog-swiper__pagination',
  },

  breakpoints: {
    // mobile - 320-576
    320: {
      centeredSlides: true,
      spaceBetween:40,
    
    },
    // tablet - 576-1240
    576: {
      centeredSlides: false,
      spaceBetween:40,
    },
    
    
     // desktop >= 1240
     1240: {
      slidesPerView: 4,
    },

    1350: {
      slidesPerView: 'auto',
      spaceBetween: 50,
    }

  }
});

let test = document.querySelector('.about-swiper');

if (test) {
  const aboutSwiper = new Swiper(test, {
    spaceBetween: 10,
    loopedSlides: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
     loop: true,
     pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
  
  });
  const subSwiper = new Swiper('.sub-swiper', {
    spaceBetween: 40,
    slidesPerView: "auto",
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 4,
  
  });
  subSwiper.controller.control = aboutSwiper;
  aboutSwiper.controller.control = subSwiper;
}




