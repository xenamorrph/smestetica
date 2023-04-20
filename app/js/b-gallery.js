document.addEventListener('DOMContentLoaded', function(){

  const swiper = new Swiper('.b-gallery__swiper', {
    breakpoints: {
      320: {
        // Отображение кол-ва слайдов
        slidesPerView: 1,
      },
      
      480: {
        slidesPerView: 2,
        // Отступ между слайдами
        spaceBetween: 24,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 34,
      },
      
      1200: {
        slidesPerView: 4,
        spaceBetween: 54,
      },
    },
    
    // Стрелки
    navigation: {
      prevEl: '.b-gallery__button--prev',
      nextEl: '.b-gallery__button--next',
    },
    // Возможность управлять с клавиатуры
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    // Отключение слайдера, если слайдов меньше видимой области
    watchOverflow: true,
  });
})




