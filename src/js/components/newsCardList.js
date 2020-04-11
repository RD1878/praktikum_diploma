export default class NewsCardList {
  constructor(options) {
    this.options = options;
  }

  add(container) {
    const item1 = this.options.newsCard.create(this.options.dataStorage.getData()[0]);
    const item2 = this.options.newsCard.create(this.options.dataStorage.getData()[1]);
    const item3 = this.options.newsCard.create(this.options.dataStorage.getData()[2]);
    console.log(container);
    container.innerHTML = item1 + item2 + item3;
    //container.appendChild(item2);
    //container.appendChild(item3);
    //return container;
  }
}
