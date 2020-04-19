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

  //Функция проверки на валидность поля ввода
  checkInputValidity(elementInput, elementError) {
    if (elementInput.validity.tooShort) {
      elementError.classList.remove('lead__search_error-message_type_inactive');
      elementError.textContent = this.options.validationWords.validationInput;
      return;
    }
    this.resetError(elementError);
    return;
  }

  //Функция установки валидности поля
  setSubmitButtonState(elementForm, elementButton) {
    if (!elementForm.checkValidity()) {
      elementButton.setAttribute('disabled', true);
      elementButton.classList.remove('lead__button_type_active');
    } else {
      elementButton.removeAttribute('disabled');
      elementButton.classList.add('lead__button_type_active');
    }
  }

  //Функция сброса ошибки
  resetError(element) {
    element.classList.add('lead__search_error-message_type_inactive');
    element.textContent = '';
  }

  //Метод отрисовки первоначального блока новостей
  renderStartNews() {
    this.options.newsError.classList.remove('news__error_is-visible');//отключение блока ошибки получения данных
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
      //Проверка наличия новостей
      if (data.length === 0) {
        this.renderLoading(false, this.options.newsFind);//отключение прелоудера
        this.options.newsOut.classList.add('news__out_is-visible');//включение блока "ничего не найдено"
      } else {
        const newsBlock = this.options.newsCardList.createNewsContainer();//Создание первого блока новостей
        this.options.newsContainer.appendChild(newsBlock);//добавление первого блока в контейнер
        this.renderLoading(false, this.options.newsFind);//отключение прелоудера
        const len = data.length < 3 ? data.length : 3;//переменная для опредления длины массива новостей
        //рендеринг первых трех новостей
        for (let i = 0; i < len; i += 1) {
          data[i].urlToImage === null ? data[i].urlToImage = "../../images/faviconka_ru_1119.png" : data[i].urlToImage;
          this.options.renderNews(this.options.newsCardList, newsBlock, this.options.newsCard, data, i);

        };
        this.options.newsData.classList.add('news__data_is-visible');//показ первого блока новостей
        //Если новостей < 3 - дальнейшие действия
        if(data.length <= 3) {
          this.options.newsButton.classList.add('news__button_is-invisible');//скрытие кнопки с доп новостями
        }
      }
    })
    .catch((err) => {
      this.renderLoading(false, this.options.newsFind);//выключение прелоудера
      this.options.newsError.classList.add('news__error_is-visible');//включение блока с ошибкой получения данных
    });
  }

  //Метод установки слушателей
  setEventListeners() {
    this.options.formSearch.addEventListener('input', (event) => {
      this.checkInputValidity(event.target, this.options.errorMessage);
      this.setSubmitButtonState(this.options.formSearch, this.options.searchButton);
    });
  }
}
