export const keyword = JSON.parse(localStorage.getItem("keyword")).toLowerCase();
export const newsArray = JSON.parse(localStorage.getItem("storage"));

export const queryString = document.querySelector('.analytics-data__title');
export const countNews = document.querySelector('.num-span_type_news');
export const countMentionsHeadlines = document.querySelector('.num-span_type_headlines');
export const graphDays = document.querySelectorAll('.analytics-graph__day');
export const graphMonth = document.querySelector('.analytics-graph__subtitle_date');
