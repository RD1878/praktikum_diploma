export default class SearchInput {
  constructor(options) {
    this.options = options;
  }

  //Функция ожидания загрузки информации новостей
  renderLoading(isLoading, block) {
    if(isLoading) {
      block.classList.add('news__find_is-visible');
    } else {
      block.classList.remove('news__find_is-visible');
    }
  }

  renderStartNews() {
    this.options.newsOut.classList.remove('news__out_is-visible');//отключение блока "ничего не найдено"
    this.options.newsData.classList.remove('news__data_is-visible');//скрытие найденных предыдущих новостей
    this.options.newsButton.classList.remove('news__button_is-invisible');//включение кнопки доп новостей

    //очистка контейнера с предыдущими найденными новостями
    while (this.options.newsContainer.firstChild) {
      this.options.newsContainer.removeChild(this.options.newsContainer.firstChild);
    }
    //включение прелоудера
    this.renderLoading(true, this.options.newsFind);
    //запись новостей в локальное хранилище с дальнейшими действиями
    this.options.dataStorage.saveStorage(this.options.themeInput)
    .then((data) => {
      //console.log(data);
      //console.log(this.options.dataStorage.getNewsArray());
      //Проверка наличия
      if (data.length === 0) {
        this.renderLoading(false, this.options.newsFind);//отключение прелоудера
        this.options.newsOut.classList.add('news__out_is-visible');//включение блока "ничего не найдено"
      } else {
        const newsBlock = this.options.newsCardList.createNewsContainer();//Создание первого блока новостей
        this.options.newsContainer.appendChild(newsBlock);//добавление первого блока в контейнер
        this.renderLoading(false, this.options.newsFind);//отключение прелоудера
        //рендеринг первых трех новостей
        for (let i = 0; i < 3; i += 1) {
          this.options.renderNews(this.options.newsCardList, newsBlock, this.options.newsCard, data, i);
        };
        this.options.newsData.classList.add('news__data_is-visible');//показ первого блока новостей
        //Если новостей < 3 - дальнейшие действия
        if(data.length <= 3) {
          this.options.newsButton.classList.add('news__button_is-invisible');//скрытие кнопки с доп новостями
        }
      }
    });
  }
}
