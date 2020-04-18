//Переменные ключевого слова и массива новостей из локального хранилища
export const keyword = JSON.parse(localStorage.getItem("keyword")).toLowerCase();
export const newsArray = JSON.parse(localStorage.getItem("storage"));

//DOM-элементы
export const queryString = document.querySelector('.analytics-data__title');
export const countNews = document.querySelector('.num-span_type_news');
export const countMentionsHeadlines = document.querySelector('.num-span_type_headlines');
export const graphDays = document.querySelectorAll('.analytics-graph__day');
export const graphMonth = document.querySelector('.analytics-graph__subtitle_date');
export const graphNums = document.querySelectorAll('.analytics-graph__bar-item_num');
export const graphLines = document.querySelectorAll('.analytics-graph__bar-item_line');
