export default class DataStorage {
  constructor(options) {
    this.options = options;
  }

  saveStorage() {
    return this.options.news.getNews()
    .then((data) => {
      localStorage.setItem("storage", JSON.stringify(data.articles));
      return JSON.parse(localStorage.getItem("storage"));
    });
  }

  getNewsArray() {
    return JSON.parse(localStorage.getItem("storage"));
  }
}
