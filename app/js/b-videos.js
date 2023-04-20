console.log('Скрипт инициализации свайпера на видео подключен')

document.addEventListener('DOMContentLoaded', function(){
  const swiper = new Swiper('.b-videos__swiper', {
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 30,
      },

      992: {
        slidesPerView: 2,
        spaceBetween: 50,
      },

    },
    
    // Стрелки
    navigation: {
      prevEl: '.b-videos__button-prev',
      nextEl: '.b-videos__button-next',
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






