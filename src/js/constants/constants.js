import { timeInterval } from '../utils/utils';


const days = 7;

const formSearch = document.forms.search;
const themeInput = formSearch.elements.theme;
const apiKey = '9696b93dab8c4e0dacc4fdbadb7daea2';
const pageSize = '100';
const from = timeInterval(days).from;
const to = timeInterval(days).to;

const newsContainer = document.querySelector('.news__container');

export { formSearch, themeInput, apiKey, pageSize, from, to, newsContainer };
