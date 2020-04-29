import './about.css';

//Импорт библиотеки слайдера Swiper
import '../../node_modules/swiper/css/swiper.min.css';
import Swiper from 'swiper';

//Импорт утилит
import {
  getFormattedDate
} from '../js/utils/utils';

//Импорт классов
import GithubApi from '../js/modules/githubApi';
import CommitsCardList from '../js/components/commitCardList';
import CommitCard from '../js/components/commitCard';

//Функция инициализации слайдера
const initSwiper = () => {
  const mySwiper = new Swiper ('.swiper-container', {
    //Опции
    slidesPerView: 'auto',
    centeredSlides: true,
    direction: 'horizontal',
    loop: true,
    simulateTouch: true,
    spaceBetween: 16,
    //Пагинация
    pagination: {
      el: '.commits__pagination',
      dynamicBullets: true,
    },
    //Кнопки навигации
    navigation: {
      nextEl: '.commits__button_type_right',
      prevEl: '.commits__button_type_left',
    }
  });
};

//ОПРЕДЕЛЕНИЕ ЭКЗЕМПЛЯРОВ КЛАССОВ
/*******************************/
//Создание экземпляпра класса API
const githubApi = new GithubApi();
//Создание экземпляра карточки с коммитом
const commitCard = new CommitCard({
  getFormattedDate: getFormattedDate
});
//Создание экземпляра списка коммитов
const commitsCardList = new CommitsCardList({
  commitCard: commitCard,
  githubApi: githubApi,
  initSwiper: initSwiper
});

//Функции
/*******************************/
//Функция рендеренга коммитов
commitsCardList.renderCommits();
