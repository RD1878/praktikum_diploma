import './index.css';

import { func } from './about/about';
import NewsApi from './js/modules/newsApi';
import DataStorage from './js/modules/dataStorage';
import NewsCard from './js/components/newsCard';
import NewsCardList from './js/components/newsCardList';
import SearchInput from './js/components/searchInput';
import { formSearch,
         themeInput,
         apiKey,
         pageSize,
         from,
         to,
         newsContainer,
         searchContainer,
         newsButton,
         newsData } from './js/constants/constants';


//ОПРЕДЕЛЕНИЕ ЭКЗЕМПЛЯРОВ КЛАССОВ
/*******************************/
//Создание экзкмпляра класса новостей
const news = new NewsApi({
  themeInput: themeInput,
  apiKey: apiKey,
  from: from,
  to: to,
  pageSize: pageSize
});

//Создание экзкмпляра класса локального хранилища
const dataStorage = new DataStorage({
  news: news
});

//Создание экземпляра класса карточки
const newsCard = new NewsCard();

//Создание экземпляра класса списка карточек
const newsCardList = new NewsCardList({
  newsContainer: newsContainer
});

//создание экземпляра класса поискового запроса
const searchInput = new SearchInput({
  //news: news,
  newsCard: newsCard,
  newsCardList: newsCardList,
  dataStorage: dataStorage,
  themeInput: themeInput,
  //newsContainer: newsContainer
});



//СЛУШАТЕЛИ
/*********/
//Отправка запроса темы новости
formSearch.addEventListener('submit', function(event) {
  //debugger
  event.preventDefault();
  searchInput.renderLoading(true, newsContainer, searchContainer, newsButton, newsData);
  searchInput.load();
  //dataStorage.setData();
  //dataStorage.getData();
  formSearch.reset();
  searchInput.renderLoading(false, newsContainer, searchContainer, newsButton, newsData);
});



func();

