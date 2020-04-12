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

  load() {
    const newsContainer = document.querySelector('.news__container');
    const newsBlocks = newsContainer.querySelectorAll('.news__block');
    if (newsBlocks.length > 0) {
      for (let i = 0; i < newsBlocks.length; i += 1) {
        newsContainer.removeChild(newsBlocks[i]);
      }
    }
    //Запись новостей по выбранной теме в хранилище
    this.options.dataStorage.setData();
    //Выгрузка массива с новостями
    const newsArray = this.options.dataStorage.getData();
    //Создание первого контейнера для трех новостей
    const newsBlock = this.options.newsCardList.createNewsContainer();
    //Добавление первого контейнера в разметку
    newsContainer.appendChild(newsBlock);
    //добавление в разметку трех первых новостей
    this.options.newsCardList.addNews(newsBlock, this.options.newsCard.create(newsArray[0]));
    this.options.newsCardList.addNews(newsBlock, this.options.newsCard.create(newsArray[1]));
    this.options.newsCardList.addNews(newsBlock, this.options.newsCard.create(newsArray[2]));
  }
}
