import './index.css';

import NewsApi from './js/modules/newsApi';
import DataStorage from './js/modules/dataStorage';
import NewsCard from './js/components/newsCard';
import NewsCardList from './js/components/newsCardList';
import SearchInput from './js/components/searchInput';
import { renderNews } from './js/utils/utils';
import { formSearch,
         themeInput,
         apiKey,
         pageSize,
         from,
         to,
         newsContainer,
         searchContainer,
         newsButton,
         newsData,
         newsFind,
         newsOut } from './js/constants/constants';


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
const newsCardList = new NewsCardList();

//создание экземпляра класса поискового запроса
const searchInput = new SearchInput({
  newsCard: newsCard,
  newsCardList: newsCardList,
  dataStorage: dataStorage,
  newsData: newsData,
  newsContainer: newsContainer,
  newsButton: newsButton,
  newsFind: newsFind,
  newsOut: newsOut,
  //themeInput: themeInput,
  renderNews: renderNews
});

//СЛУШАТЕЛИ
/*********/
//Отправка запроса темы новости
formSearch.addEventListener('submit', function(event) {
  event.preventDefault();
  searchInput.startLoad();
  //searchInput.renderLoading(true, newsContainer, searchContainer, newsButton, newsData);
  formSearch.reset();
  //searchInput.renderLoading(false, newsContainer, searchContainer, newsButton, newsData);
});






