# **Дипломный проект "NewsAnalyzer" от Яндекс.Практикум**
### В дипломном проекте реализован сервис для анализа происходящих в мире событий.
### Ссылка на проект: [NewsAnalyzer](https://rd1878.github.io/praktikum_diploma/)
### Версия v.0.0.3
### Инструкция по развертыванию проекта
1. Склонировать репозиторий в локальную директорию
`git clone https://github.com/RD1878/praktikum_diploma.git`
2. Установить NPM
`npm install`
3. Запустить с помощью локального сервера
`npm run dev`

### О проекте

#### Главная
На "Главной" странице реализован функционал поиска популярных новостей по одному ключевому слову с помощью API запроса с интернет-ресурса [NewsApi](https://newsapi.org/). Полученные данные сохраняются в локальное хранилище браузера.

После полученного ответа, новости отображаются в блоках по 3 штуки в каждом блоке. Каждый дополнительный блок открывается по кнопке. Максимальное количество отображаемых новостей 100 штук.

На странице имеется блок "Об авторе".

Каждая карточка полученной новости имеет:

1. Дату размещения
2. Заголовок
3. Начало текста новости
4. Ресурс размещения

Карточки с новостями имеют возможность перейти на ресурсы, на которых они размещены, по клику на них.

В случае нахождения новостей согласно ключевому слову, становится доступной вкладка для просмотра аналитики вышеуказанных новостей за предыдущую неделю.

#### Аналитика
На вкладке "Аналитика" размещено:

1. Ключевое слово запроса
2. Количество новостей за неделю
3. Количество упоминаний в заголовках за неделю
4. Диаграмма количества упоминаний ключевого слова в заголовках и в текстах новостей за каждый день в течении последней недели

Работа с аналитикой новостей реализована с помощью локального хранилища браузера.

####О проекте
На данной странице размещена информация о дипломном проекте, используемых технологиях, информация об авторе, а также блок с коммитами репозитория проектной работы на Github данного дипломного проекта.

Коммиты репозитория представлены в виде карусели, которая реализована с помощью сторонней библиотеки [SwiperJS](https://swiperjs.com/).
