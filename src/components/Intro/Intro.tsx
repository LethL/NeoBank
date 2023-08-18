import React from 'react';
import './Intro.css';
import card1 from '../../images/cardImage1.png';
import card2 from '../../images/cardImage2.png';
import card3 from '../../images/cardImage3.png';
import card4 from '../../images/cardImage4.png';
import LinkButton from '../LinkButton/LinkButton';

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro__info">
        <h1 className="intro__title">Choose the design you like and apply for card right now</h1>
        <LinkButton text="Choose the card" link="/loan" />
      </div>
      <div className="intro__cards-wrapper">
        <img className="intro__card" src={card1} alt="credit card image" />
        <img className="intro__card" src={card2} alt="credit card image" />
        <img className="intro__card" src={card3} alt="credit card image" />
        <img className="intro__card" src={card4} alt="credit card image" />
      </div>
    </section>
  );
}
