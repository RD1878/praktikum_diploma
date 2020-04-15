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

  startLoad() {
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
    this.options.dataStorage.saveStorage()
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
        let countNews = 3;//начальный счетчик порядкового номера новости
        //слушатель на кнопку по доп новостям
        this.options.newsButton.addEventListener('click', (event) => {
          const newsAddBlock = this.options.newsCardList.createNewsContainer();//следующий блок с допновостями
          this.options.newsContainer.appendChild(newsAddBlock);//добавление блока к контейнеру
          //цикл добавления новых новостей в блок
          for (let i = countNews; i < countNews + 3 && i <= data.length; i += 1) {
            //если количество оставшихся новостей меньше чем хранилище, то...
            if (i === data.length - 1) {
              this.options.renderNews(this.options.newsCardList, newsAddBlock, this.options.newsCard, data, i);
              this.options.newsButton.classList.add('news__button_is-invisible');
              break;
            }
            //рендеринг следующих новостей
            this.options.renderNews(this.options.newsCardList, newsAddBlock, this.options.newsCard, data, i);
          };
          countNews += 3;//изменение счетчика на следующие 3 новости
        });
      }
    });
  }
}
