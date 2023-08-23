import React, { useEffect, useState } from 'react';
import './NewsList.css';
import Slider from 'modules/Slider/Slider';

export default function NewsList() {
  const [news, setNews] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function onSlidesShownHandler(): number {
    const smallWidthDisplay = windowWidth <= 700;
    const mediumWidthDisplay = windowWidth <= 1050;

    if (smallWidthDisplay) {
      return 1;
    }
    if (mediumWidthDisplay) {
      return 2;
    } else {
      return 3;
    }
  }

  // так не делается, но для проверки не стал создавать .env
  const newsApiKey = '96da7fbe43e546f1941cae7b7a5fb5e7';

  async function onGetNewsHandler() {
    await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`, {
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
  }

  useEffect(() => {
    onGetNewsHandler();
    const intervalId = setInterval(() => {
      onGetNewsHandler();
      return () => {
        clearInterval(intervalId);
      };
    }, 15 * 60 * 1000);
  }, []);

  return (
    <section className="news">
      <h2 className="section-title">Current news from the world of finance</h2>
      <p className="map__text">
        We update the news feed every 15 minutes. You can learn more by clicking on the news you are interested in.
      </p>
      <Slider items={news} slidesToShow={onSlidesShownHandler()} />
    </section>
  );
}
