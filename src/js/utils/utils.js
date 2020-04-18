//Количество миллисекунд в сутках
const msPerDay = 86400000;

//Функция определения интервала
const getWeekInterval = () => {
  const now = new Date();//Дата в данный момент
  const end = Date.parse(now);//Дата в данный момент в миллисекундах
  return {
    end: end,//Конечный момент в миллисекундах
    begin: end - (6 * msPerDay)//Начальный момент в миллисекундах
  };
};

//Функция для определения интервальных дат в формате для API
const getBoundaryDays = (end, begin) => {
  const dateEnd = new Date(end);
  const dateBegin = new Date(begin);
  return {
    from: `${dateEnd.getFullYear()}-${String(dateEnd.getMonth() + 1).padStart(2, "0")}-${String(dateEnd.getDate()).padStart(2, "0")}`,
    to: `${dateBegin.getFullYear()}-${String(dateBegin.getMonth() + 1).padStart(2, "0")}-${String(dateBegin.getDate()).padStart(2, "0")}`
  }
};

//Функция для определения ежедневных дат и дней недели интервала для графика
const getDaysForAnalytics = (begin) => {
  const daysArray = [];
  const weekDays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

  for (let ms = begin; ms < begin + (7 * msPerDay); ms += msPerDay) {
    daysArray.push({
      day: (new Date(ms)).getDate(),
      weekDay: weekDays[(new Date(ms)).getDay()]
    });
  }
  return daysArray;
};

//Функция опредления месяца для графика
const getMonth = (end, begin) => {
  const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
  return new Date(end).getMonth() === new Date(begin).getMonth() ?
    `${months[new Date(begin).getMonth()]}` : `${months[new Date(begin).getMonth()]}-${months[new Date(end).getMonth()]}`;
};

//Функция определения упоминаний ключевого слова в заголовках
export const getCountMentionsTitles = (array, word) => {
  let count = 0;
  const re = new RegExp(word, 'gi');
  array.forEach((element) => {
    const result = element.title.match(re);
     result !== null ? count += result.length : count;
  });
  return count;
};

//Функция упоминания ключевого слова в заголовках и содержании с разбивкой на каждый из 7 дней
export const getCountMentionsPerDay = (array, word) => {
  const daysArray = [];
  const re = new RegExp(word, 'gi');
  for (const item of days) {
    let count = 0;
    array.forEach((element) => {
      if(item.day === (new Date(element.publishedAt)).getDate()) {
        const resultTtitle = element.title.match(re);
        resultTtitle !== null ? count += resultTtitle.length : count;
        const resultDescription = element.description.match(re);
        resultDescription !== null ? count += resultDescription.length : count;
      }
    });
    daysArray.push(count);
  }
  return daysArray;
};

//Функция вычисления максимального числа в массиве
export const getMaxOfArray = (numArray) => {
  let maxNum = 0;
  numArray.forEach((element) => {
    maxNum > element ? maxNum : maxNum = element;
  })
  return maxNum;
};

//Функция форматирования даты
export const getFormattedDate = (dateString) => {
  const msDate = new Date(dateString);
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  return `${msDate.getDate()} ${months[msDate.getMonth()]}, ${msDate.getFullYear()}`
}

//Переменная интервала с граничными датами для API
export const interval = getBoundaryDays(getWeekInterval().end,getWeekInterval().begin);

//Переменная с ежедневными днями и днями недели интервала для графика
export const days = getDaysForAnalytics(getWeekInterval().begin);

//Переменная с месяцем статистики для графика
export const month = getMonth(getWeekInterval().end, getWeekInterval().begin);

//Функция обработчика массива новостей
export const renderNews = (container, block, card, array, i) => {
  return (container.addNews(block, card.create(array[i])));
};
