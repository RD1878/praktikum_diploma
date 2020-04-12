export default class DataStorage {
  constructor(options) {
    this.options = options;
  }

  setData() {
    //localStorage.clear();
    this.options.news.getNews().then((data) => {
      //console.log(data);
      localStorage.setItem("storage", JSON.stringify(data.articles));
      console.log('1');
    });
  }

  getData() {
      const arr = JSON.parse(localStorage.getItem("storage"));
      return arr;
  }
}
