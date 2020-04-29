import './analytics.css';

//Импорт констант
import {
  keyword,
  newsArray,
  queryString,
  countNews,
  countMentionsHeadlines,
  graphDays,
  graphMonth,
  graphNums,
  graphLines,
  graphScalesTwo,
  graphScalesThree,
  graphScalesFour,
  graphScalesFive,
} from '../js/constants/analyticsConstants.js';

//Импорт утилит
import {
  days,
  month,
  getCountMentionsTitles,
  getCountMentionsPerDay,
  getMaxOfArray,
  getScaleNums,
  getMaxScale
} from '../js/utils/utils';

//Импорт классов
import Statistics from '../js/components/statistics';

//ОПРЕДЕЛЕНИЕ ПЕРЕМЕННЫХ
/*******************************/
//Переменная упоминаний каждый день в течении 7 дней
const countMentionsPerDay = getCountMentionsPerDay(newsArray, keyword);
//Максимальное число упоминаний в один из дней
const maxCountMentions = getMaxOfArray(countMentionsPerDay);

//ОПРЕДЕЛЕНИЕ ЭКЗЕМПЛЯРОВ КЛАССОВ
/*******************************/
//Создание экземпляра класса статистики
const statistics = new Statistics({
  days: days,
  graphDays: graphDays,
  month: month,
  graphMonth: graphMonth,
  graphNums: graphNums,
  graphLines: graphLines,
  countMentionsPerDay: countMentionsPerDay,
  maxCountMentions: maxCountMentions,
  graphScalesTwo : graphScalesTwo,
  graphScalesThree : graphScalesThree,
  graphScalesFour : graphScalesFour,
  graphScalesFive : graphScalesFive,
  getScaleNums: getScaleNums,
  getMaxScale: getMaxScale
});

//Вызов функции отрисовки страницы
(function() {
  queryString.textContent = `Вы спросили: "${keyword}"`;//Вставка ключевого слова
  countNews.textContent = `${newsArray.length}`;//Количество найденных новостей
  countMentionsHeadlines.textContent = `${getCountMentionsTitles(newsArray, keyword)}`;//Количество упоминаний ключевого слова в заголовках
  statistics.renderGraphDays();//отрисовка шкалы дней
  statistics.renderGraphBars();//отрисовка баров
}());
