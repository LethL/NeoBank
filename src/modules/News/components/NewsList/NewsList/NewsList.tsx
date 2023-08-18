import React, { useEffect } from 'react';
import './NewsList.css';
import { NewsEntity } from '../../../../../domains/News.entity';

export default function NewsList() {
  const [news, setNews] = React.useState([]);
  // так не делается, но для проверки не стал создавать .env
  const newsApiKey = '96da7fbe43e546f1941cae7b7a5fb5e7';

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': newsApiKey,
        Authorization: newsApiKey,
      },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)))
      .then((data) => {
        setNews(data.articles);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="news">
      <h2 className="section-title">Current news from the world of finance</h2>
      <p className="map__text">
        We update the news feed every 15 minutes. You can learn more by clicking on the news you are interested in.
      </p>
      <div className="swiper">
        <ul className="swiper-wrapper">
          {news.map((item: NewsEntity, i) => (
            <li className="swiper-slide" key={i}>
              <div className="swiper-slide__wrapper">
                <a className="news-element" href={item.url} target="_blank" rel="noreferrer">
                  <img className="news-element__image" src={item.urlToImage} alt={item.title} />
                  <div className="news-element__info">
                    <h2 className="news-element__title">{item.title}</h2>
                    <p className="news-element__description">{item.description}</p>
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </section>
  );
}
