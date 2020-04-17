import './index.css';

import NewsApi from './js/modules/newsApi';
import DataStorage from './js/modules/dataStorage';
import NewsCard from './js/components/newsCard';
import NewsCardList from './js/components/newsCardList';
import SearchInput from './js/components/searchInput';
import {
  renderNews,
  interval
} from './js/utils/utils';
import {
  formSearch,
  themeInput,
  apiKey,
  pageSize,
  //from,
  //to,
  newsContainer,
  //searchContainer,
  newsButton,
  newsData,
  newsFind,
  newsOut
} from './js/constants/indexConstants';

//ОПРЕДЕЛЕНИЕ ЭКЗЕМПЛЯРОВ КЛАССОВ
/*******************************/
//Создание экземпляра класса новостей
const news = new NewsApi({
  apiKey: apiKey,
  from: interval.from,
  to: interval.to,
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
  themeInput: themeInput,
  renderNews: renderNews
});

//СЛУШАТЕЛИ
/*********/
//Отправка запроса темы новости
formSearch.addEventListener('submit', (event) => {
  event.preventDefault();
  searchInput.renderStartNews();
  formSearch.reset();
});
//начальный счетчик порядкового номера новости
let countNews = 3;
//слушатель на кнопку по доп новостям
newsButton.addEventListener('click', () => {
  //НЕ РАБОТАЕТ const newsArray = dataStorage.getNewsArray();
  //console.log(newsArray);
  const newsAddBlock = newsCardList.createNewsContainer();//следующий блок с допновостями
  newsContainer.appendChild(newsAddBlock);//добавление блока к контейнеру
  //цикл добавления новых новостей в блок
  for (let i = countNews; i < countNews + 3 && i <= dataStorage.getNewsArray().length; i += 1) {
    //если количество оставшихся новостей меньше чем хранилище, то...
    if (i === dataStorage.getNewsArray().length - 1) {
      renderNews(newsCardList, newsAddBlock, newsCard, dataStorage.getNewsArray(), i);
      newsButton.classList.add('news__button_is-invisible');
      return;
    }
    //рендеринг следующих новостей
    renderNews(newsCardList, newsAddBlock, newsCard, dataStorage.getNewsArray(), i);
  };
  countNews += 3;//изменение счетчика на следующие 3 новости
});
