export default class NewsCardList {
  constructor(options) {
    this.options = options;
  }

  createNewsContainer() {
    const newsBlock = document.createElement('div');
    newsBlock.classList.add('news__block');
    return newsBlock;
  }

  /*addNewsContainer(container) {
    this.options.newsContainer.appendChild(container);
  }*/

  addNews(container, card) {
    //console.log(this.newsContainer, card);
    container.insertAdjacentHTML('afterbegin', card);
  }
}



/*add(container) {
    const newsContainer = document.querySelector('.news__container');
    const item1 = this.options.newsCard.create(this.options.dataStorage.getData()[0]);
    const item2 = this.options.newsCard.create(this.options.dataStorage.getData()[1]);
    const item3 = this.options.newsCard.create(this.options.dataStorage.getData()[2]);
    console.log(container);
    container.innerHTML = item1 + item2 + item3;
    //container.appendChild(item2);
    //container.appendChild(item3);
    //return container;
  }

constructor(options) {
  this.options = options;
}


add() {
  const сontainer = document.querySelector('.news__container');
  const item1 = this.options.newsCard.create(this.options.dataStorage.getData()[0]);
  const item2 = this.options.newsCard.create(this.options.dataStorage.getData()[1]);
  const item3 = this.options.newsCard.create(this.options.dataStorage.getData()[2]);
  console.log(container);
  сontainer.innerHTML = item1 + item2 + item3;
}*/
