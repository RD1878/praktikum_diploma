export default class CommitCard {

  //Метод создания комиита
  create(element) {
    return `
      <div class="commits__slide swiper-slide">
        <p class="api-block__item_date commits__date">${element.commit.committer.date}</p>
        <div class="commits__author">
          <img class="commits__author_photo" alt="Photo" src="${element.author.avatar_url}">
          <div class="commits__author_data">
            <h4 class="headline api-block__item_title commits__author_name">${element.commit.committer.name}</h4>
            <a class="link commits__author_email" href="mailto:${element.commit.committer.email}">${element.commit.committer.email}</a>
          </div>
        </div>
        <p class="api-block__item_text commits__text">${element.commit.message}</p>
      </div>
    `;
  }
}


