import './about.css';

import '../../node_modules/swiper/css/swiper.min.css';
import Swiper from '../../node_modules/swiper/js/swiper';

import GithubApi from '../js/modules/githubApi'

const githubApi = new GithubApi({

})

const createSwiper = () => {
  const mySwiper = new Swiper ('.swiper-container', {
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

createSwiper();
