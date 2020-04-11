import './index.css';

import { func } from './about/about';
import NewsApi from './js/modules/newsApi';
import DataStorage from './js/modules/dataStorage';
import NewsCard from './js/components/newsCard';
import NewsCardList from './js/components/newsCardList';
import { formSearch, themeInput, apiKey, pageSize, from, to, newsContainer } from './js/constants/constants';


//ОПРЕДЕЛЕНИЕ КОНСТАНТ С КЛАССАМИ
/*******************************/
//Создание News
const news = new NewsApi({
  themeInput: themeInput,
  apiKey: apiKey,
  from: from,
  to: to,
  pageSize: pageSize
});


//Создание локального хранилища
const dataStorage = new DataStorage({
  news: news
});

//Создание карточки
const newsCard = new NewsCard();

//Создание списка карточек
const newsCardList = new NewsCardList({
  dataStorage: dataStorage,
  newsCard: newsCard,
  newsContainer: newsContainer
});





//СЛУШАТЕЛИ
/*********/
//Отправка запроса темы новости
formSearch.addEventListener('submit', function(event) {
  event.preventDefault();
  dataStorage.setData();
  newsCardList.add(newsContainer);
});



func();

