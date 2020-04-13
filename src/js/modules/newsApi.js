export default class NewsApi {
  constructor(options) {
    this.options = options;
  }

  //Получение новостей от NewsAPI
  getNews() {
    return (fetch(`http://newsapi.org/v2/everything?` +
                  `q=${this.options.themeInput.value}&` +
                  `from=${this.options.from}&` +
                  `to=${this.options.to}&` +
                  `sortBy=popularity&` +
                  `apiKey=${this.options.apiKey}&` +
                  `pageSize=${this.options.pageSize}`)
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => console.log(err))
    );
  }
}
