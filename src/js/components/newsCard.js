export default class NewsCard {

  create(element) {
    return `<div class="news__item">
              <img class="news__item_image" alt="Image" src="${element.urlToImage}">
              <div class="news__item_content">
                <div class="news__item_content_info">
                  <p class="date api-block__item_date news__item_date">${element.publishedAt}</p>
                  <h4 class="headline api-block__item_title news__item_title">${element.title}</h4>
                  <p class="api-block__item_text news__item_subtitle">${element.description}</p>
                </div>
                <a class="link news__item_source" href="${element.url}">${element.source.name}</a>
              </div>
            </div>`
  }
}
