export default class Statistics {
  constructor(options) {
    this.options = options;
  }

  renderGraph() {
    this.options.graphMonth.textContent = `Дата (${this.options.month})`;
    for (let i = 0; i < 7; i += 1) {
      this.options.graphDays[i].textContent = `${this.options.days[i].day}, ${this.options.days[i].weekDay}`;
    }
  }
}
