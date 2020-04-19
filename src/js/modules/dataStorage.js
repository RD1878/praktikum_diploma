export default class DataStorage {
  constructor(options) {
    this.options = options;
  }

  //Метод записи полученных новостей и ключевого слова в локальное хранилище
  //с промисом для дальнейшего использования
  saveStorage(themeInput) {
    //Запись в локальное хранилище ключевого слова
    localStorage.setItem("keyword", JSON.stringify(themeInput.value));
    //Возврат промиса с засписью новостей в локальное хранилище
    return this.options.news.getNews(themeInput)
    .then((data) => {
      localStorage.setItem("storage", JSON.stringify(data.articles));
      return JSON.parse(localStorage.getItem("storage"));
    })
    .catch((err) => console.log(err));
  }

  //Метод получения новостей из локального хранилища
  getNewsArray() {
    return JSON.parse(localStorage.getItem("storage"));
  }
}
