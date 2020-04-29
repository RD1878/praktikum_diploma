import './index.css';

//Импорт классов
import NewsApi from './js/modules/newsApi';
import DataStorage from './js/modules/dataStorage';
import NewsCard from './js/components/newsCard';
import NewsCardList from './js/components/newsCardList';
import SearchInput from './js/components/searchInput';

//Импорт утилит
import {
  renderNews,
  interval,
  getFormattedDate
} from './js/utils/utils';

//импорт констант
import {
  formSearch,
  themeInput,
  apiKey,
  pageSize,
  newsContainer,
  newsButton,
  newsData,
  newsFind,
  newsOut,
  validationWords,
  errorMessage,
  searchButton,
  newsError
} from './js/constants/indexConstants';

//ОПРЕДЕЛЕНИЕ ЭКЗЕМПЛЯРОВ КЛАССОВ
/*******************************/
//Создание экземпляра класса новостей
const news = new NewsApi({
  apiKey: apiKey,
  from: interval.from,
  to: interval.to,
  pageSize: pageSize,
  newsError: newsError
});

//Создание экзкмпляра класса локального хранилища
const dataStorage = new DataStorage({
  news: news
});

//Создание экземпляра класса карточки
const newsCard = new NewsCard({
  getFormattedDate: getFormattedDate
});

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
  validationWords: validationWords,
  searchButton: searchButton,
  errorMessage: errorMessage,
  formSearch: formSearch,
  newsError: newsError,
  renderNews: renderNews
});

//ФУНКЦИИ
/*********/
//Функция отрисовки первых трех новостей
const handleKeyWord = (event) => {
  countNews = 3;
  event.preventDefault();
  searchInput.renderStartNews();
  formSearch.reset();
};

//Функция отрисовки дополнительных карточек
const handleAddNews = () => {
  const newsArray = dataStorage.getNewsArray();//массив новостей
  const newsAddBlock = newsCardList.createNewsContainer();//следующий блок с допновостями
  newsContainer.appendChild(newsAddBlock);//добавление блока к контейнеру
  //цикл добавления новых новостей в блок
  for (let i = countNews; i < countNews + 3 && i <= newsArray.length; i += 1) {
    //если количество оставшихся новостей меньше чем хранилище, то...
    if (i === newsArray.length - 1) {
      newsArray[i].urlToImage === null ? newsArray[i].urlToImage = "./images/faviconka_ru_1119.png" : newsArray[i].urlToImage;
      renderNews(newsCardList, newsAddBlock, newsCard, newsArray, i);
      newsButton.classList.add('news__button_is-invisible');
      return;
    }
    //рендеринг следующих новостей
    newsArray[i].urlToImage === null ? newsArray[i].urlToImage = "./images/faviconka_ru_1119.png" : newsArray[i].urlToImage;
    renderNews(newsCardList, newsAddBlock, newsCard, newsArray, i);
  };
  countNews += 3;//изменение счетчика на следующие 3 новости
};

//ПЕРЕМЕННЫЕ
/*********/
//Счетчик порядкового номера новости в случае найденных более трех
let countNews;

//СЛУШАТЕЛИ
/*********/
//Установка слушателей на форму ввода новости
searchInput.setEventListeners();

//Отправка запроса темы новости
formSearch.addEventListener('submit', handleKeyWord);

//Слушатель на кнопку по доп новостям
newsButton.addEventListener('click', handleAddNews);
