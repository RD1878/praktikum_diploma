//Количество миллисекунд в сутках
const msPerDay = 86400000;

const weekInterval = () => {
  const now = new Date();//Дата в данный момент
  const end = Date.parse(now);//Дата в данный момент в миллисекундах
  return {
    end: end,//Конечный момент в миллисекундах
    begin: end - (6 * msPerDay)//Начальный момент в миллисекундах
  };
};

//Функция для определения интервальных дат
const getBoundaryDays = (end, begin) => {
  const dateEnd = new Date(end);
  const dateBegin = new Date(begin);
  return {
    from: `${dateEnd.getFullYear()}-${String(dateEnd.getMonth() + 1).padStart(2, "0")}-${String(dateEnd.getDate()).padStart(2, "0")}`,
    to: `${dateBegin.getFullYear()}-${String(dateBegin.getMonth() + 1).padStart(2, "0")}-${String(dateBegin.getDate()).padStart(2, "0")}`
  }
};

//Функция для определения дат и дней недели интервала
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

const getMonth = (end, begin) => {
  const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
  return new Date(end).getMonth() === new Date(begin).getMonth() ?
    `${months[new Date(begin).getMonth()]}` : `${months[new Date(begin).getMonth()]}-${months[new Date(end).getMonth()]}`;
};


//Переменная интервала с граничными датами
export const interval = getBoundaryDays(weekInterval().end, weekInterval().begin);
//Переменная с днями и днями недели интервала
export const days = getDaysForAnalytics(weekInterval().begin);

export const month = getMonth(weekInterval().end, weekInterval().begin);

export const renderNews = (container, block, card, array, i) => {
  return (container.addNews(block, card.create(array[i])));
};
