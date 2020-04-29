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

  //Метод отрисовки баров и шкал
  renderGraphBars() {
    const maxNum = this.options.getMaxScale(this.options.maxCountMentions);//максимальное число шкалы
    //Простановка единиц шкалы
    for (let i = 0; i < 2; i += 1) {
      this.options.graphScalesTwo[i].textContent = `${this.options.getScaleNums(maxNum).two}`;
      this.options.graphScalesThree[i].textContent = `${this.options.getScaleNums(maxNum).three}`;
      this.options.graphScalesFour[i].textContent = `${this.options.getScaleNums(maxNum).four}`;
      this.options.graphScalesFive[i].textContent = `${this.options.getScaleNums(maxNum).five}`;
    }
    //Простановка значений баров и величины баров
    for (let i = 0; i < 7; i += 1) {
      //Вставка значения
      this.options.graphNums[i].textContent = `${this.options.countMentionsPerDay[i]}`;
      //Установка величины бара
      this.options.graphLines[i].style.width = `${(this.options.countMentionsPerDay[i] / maxNum) * 100}%`;
    }
  }
}
