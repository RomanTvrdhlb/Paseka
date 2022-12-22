import Swiper from '../vendor/swiper';


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




