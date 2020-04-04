import './about.css';

import '../../node_modules/swiper/css/swiper.min.css';
import Swiper from '../../node_modules/swiper/js/swiper';

const func = () => {
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    slidesPerView: 3.5,
    direction: 'horizontal',
    centeredSlides: true,
    loop: true,
    updateOnWindowResize: true,
    watchOverflow: true,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    //effect: 'slide',
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
};

export { func };
