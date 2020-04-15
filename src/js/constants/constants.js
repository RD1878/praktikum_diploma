import { timeInterval } from '../utils/utils';

//Количество дней назад для промежутка новостей
const days = 7;

//Константы для запроса новостей с NewsApi
const formSearch = document.forms.search;
const themeInput = formSearch.elements.theme;
const apiKey = '9696b93dab8c4e0dacc4fdbadb7daea2';
const pageSize = '100';
const from = timeInterval(days).from;
const to = timeInterval(days).to;


//DOM-элементы
const newsContainer = document.querySelector('.news__container');
const searchContainer = document.querySelector('.news__find');
const newsButton = document.querySelector('.news__button');
const newsData = document.querySelector('.news__data');
const newsFind = document.querySelector('.news__find');
const newsOut = document.querySelector('.news__out');

export { formSearch,
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
         newsOut };
