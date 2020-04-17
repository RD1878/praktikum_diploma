export default class DataStorage {
  constructor(options) {
    this.options = options;
  }

  saveStorage(themeInput) {
    //Запись в локальное хранилище ключевого слова
    localStorage.setItem("keyword", JSON.stringify(themeInput.value));
    //Возврат промиса с засписью новостей в локальное хранилище
    return this.options.news.getNews(themeInput)
    .then((data) => {
      localStorage.setItem("storage", JSON.stringify(data.articles));
      return JSON.parse(localStorage.getItem("storage"));
    });
  }

  getNewsArray() {
    return JSON.parse(localStorage.getItem("storage"));
  }
}
