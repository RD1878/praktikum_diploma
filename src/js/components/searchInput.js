export default class SearchInput {
  constructor(options) {
    this.options = options;
  }

  //Функция ожидания загрузки информации новостей
  renderLoading(isLoading, containerHasNews, containerFindNews, button, headerNews) {
    if(isLoading) {
      containerFindNews.style.display = 'block';
      containerHasNews.style.display = 'none';
      button.style.display = 'none';
      headerNews.style.display = 'none';
    } else {
      containerFindNews.style.display = 'none';
      containerHasNews.style.display = 'block';
      button.style.display = 'block';
      headerNews.style.display = 'block';
    }
  }

  startLoad() {
    this.options.newsData.classList.remove('news__data_is-visible');
    this.options.newsButton.classList.remove('news__button_is-invisible');
    while (this.options.newsContainer.firstChild) {
      this.options.newsContainer.removeChild(this.options.newsContainer.firstChild);
    }

    this.options.dataStorage.saveStorage()
    .then((data) => {
      //console.log(data);
      const newsBlock = this.options.newsCardList.createNewsContainer();
      this.options.newsContainer.appendChild(newsBlock);
      for (let i = 0; i < 3; i += 1) {
        this.options.renderNews(this.options.newsCardList, newsBlock, this.options.newsCard, data, i);
      };
      this.options.newsData.classList.add('news__data_is-visible');

      if(data.length <= 3) {
        this.options.newsButton.classList.add('news__button_is-invisible');
      }
      let countNews = 3;
      this.options.newsButton.addEventListener('click', (event) => {
        //const arrNews = dataStorage.getNewsArray();
        const newsAddBlock = this.options.newsCardList.createNewsContainer();
        this.options.newsContainer.appendChild(newsAddBlock);
        for (let i = countNews; i < countNews + 3 && i <= data.length; i += 1) {
          if (i === data.length - 1) {
            this.options.renderNews(this.options.newsCardList, newsAddBlock, this.options.newsCard, data, i);
            this.options.newsButton.classList.add('news__button_is-invisible');
            break;
          }
          this.options.renderNews(this.options.newsCardList, newsAddBlock, this.options.newsCard, data, i);
        };
        countNews += 3;
      });
    });
  }
}
