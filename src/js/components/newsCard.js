export default class NewsCard {

  create(item) {
    return `
    <div class="news__item">
              <img class="news__item_image" alt="Image" src="${item.urlToImage}">
              <div class="news__item_content">
                <div class="news__item_content_info">
                  <p class="date api-block__item_date news__item_date">${item.publishedAt}</p>
                  <h4 class="headline api-block__item_title news__item_title">${item.title}</h4>
                  <p class="api-block__item_text news__item_subtitle">${item.description}</p>
                </div>
                <a class="link news__itemу_source" href="${item.url}">${item.source.name}</a>
              </div>
            </div>
    `
  }
}
