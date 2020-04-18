export default class NewsCard {
  constructor(options) {
    this.options = options;
  }

  //Метод создания карточки с новостью
  create(element) {
    return `<div class="news__item">
              <a class="link news__item_link" href="${element.url}" target="_blank">
                <div class="news__item_image-container">
                  <img class="news__item_image" alt="Image" src="${element.urlToImage}">
                </div>
                <div class="news__item_content">
                  <div class="news__item_content_info">
                    <p class="date api-block__item_date news__item_date">${this.options.getFormattedDate(element.publishedAt)}</p>
                    <h4 class="headline api-block__item_title news__item_title">${element.title}</h4>
                    <p class="api-block__item_text news__item_subtitle">${element.description}</p>
                  </div>
                  <p class="news__item_source">${element.source.name}</p>
                </div>
              </a>
            </div>`
  }
}
