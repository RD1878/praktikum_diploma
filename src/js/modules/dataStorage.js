export default class DataStorage {
  constructor(options) {
    this.options = options;
  }

  setData() {
    this.options.news.getNews().then((data) => {
      //console.log(data);
      localStorage.setItem("storage", JSON.stringify(data.articles));
    });
  }

  getData() {
    //console.log(JSON.parse(localStorage.getItem("storage")));
    return JSON.parse(localStorage.getItem("storage"));
  }
}
