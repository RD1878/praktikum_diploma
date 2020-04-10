import './about.css';

import '../../node_modules/swiper/css/swiper.min.css';
import Swiper from '../../node_modules/swiper/js/swiper';

const func = () => {
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    slidesPerView: 'auto',
    centeredSlides: true,
    direction: 'horizontal',
    loop: true,
    simulateTouch: true,
    spaceBetween: 16,
    pagination: {
      el: '.commits__pagination',
      dynamicBullets: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.commits__button_type_right',
      prevEl: '.commits__button_type_left',
    }
  })
};

export { func };
