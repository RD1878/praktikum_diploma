import './analytics.css';

import Statistics from '../js/components/statistics';

import {
  keyword,
  newsArray,
  queryString,
  countNews,
  countMentionsHeadlines,
  graphDays,
  graphMonth
} from '../js/constants/analyticsConstants.js';

import {
  interval,
  days,
  month
} from '../js/utils/utils';

console.log(keyword);
console.log(newsArray);

const statistics = new Statistics({
  days: days,
  graphDays: graphDays,
  month: month,
  graphMonth: graphMonth
})

const countMentions = (array, word) => {
  let result = 0;
  array.forEach((element) => {
    element.title.toLowerCase().includes(word.toLowerCase()) ? result += 1 : result;
  });
  return result;
}

(function() {
  queryString.textContent = `Вы спросили: "${keyword}"`;
  countNews.textContent = `${newsArray.length}`;
  countMentionsHeadlines.textContent = `${countMentions(newsArray, keyword)}`;
  statistics.renderGraph();
}());
