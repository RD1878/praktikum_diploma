export default class Statistics {
  constructor(options) {
    this.options = options;
  }

  //Метод отрисовки шкалы дней
  renderGraphDays() {
    //Вставка месяца
    this.options.graphMonth.textContent = `Дата (${this.options.month})`;
    //Простановка дней
    for (let i = 0; i < 7; i += 1) {
      this.options.graphDays[i].textContent = `${this.options.days[i].day}, ${this.options.days[i].weekDay}`;
    }
  }

  //Метод отрисовки баров
  renderGraphBars() {
    for (let i = 0; i < 7; i += 1) {
      //Вставка значения
      this.options.graphNums[i].textContent = `${this.options.countMentionsPerDay[i]}`;
      //Установка величины бара
      this.options.graphLines[i].style.width = `${this.options.countMentionsPerDay[i]}%`;
    }
  }
}
