import React, { useState } from 'react';
import { NewsEntity } from 'domains/News.entity';
import './Slider.css';
import sliderBtnLogo from 'src/images/slider-btn.svg';

interface SliderProps {
  items: NewsEntity[];
  slidesToShow: number;
}

export default function Slider({ items, slidesToShow }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    currentIndex === 0 ? '' : setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % items.length;
    currentIndex === items.length - slidesToShow ? '' : setCurrentIndex(newIndex);
  };
  return (
    <div className="slider">
      <ul className="slider-wrapper">
        {items.map((item: NewsEntity, i: number) => (
          <li
            className={`${i >= currentIndex && i < currentIndex + slidesToShow ? 'slider-slide' : 'slider-slide_hide'}`}
            key={i}>
            <div className="slider-slide__wrapper">
              <a className="slider-element" href={item.url} target="_blank" rel="noreferrer">
                <img className="slider-element__image" src={item.urlToImage} alt={item.title} />
                <div className="slider-element__info">
                  <h2 className="slider-element__title">{item.title}</h2>
                  <p className="slider-element__description">{item.description}</p>
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className="slider-btns__wrapper">
        <button className={`slider-btn ${currentIndex === 0 ? 'slider-btn_disabled' : ''}`} onClick={goToPrevSlide}>
          <img src={sliderBtnLogo} alt="slider button" />
        </button>
        <button
          className={`slider-btn slider-btn slider-btn_next ${
            currentIndex === items.length - slidesToShow ? 'slider-btn_disabled' : ''
          }`}>
          <img src={sliderBtnLogo} alt="slider button" onClick={goToNextSlide} />
        </button>
      </div>
    </div>
  );
}
