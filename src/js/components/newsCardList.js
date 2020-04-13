export default class NewsCardList {
  constructor(options) {
    this.options = options;
  }

  createNewsContainer() {
    const newsBlock = document.createElement('div');
    newsBlock.classList.add('news__block');
    return newsBlock;
  }

  addNews(container, card) {
    //console.log(this.newsContainer, card);
    container.insertAdjacentHTML('beforeend', card);
  }
}
