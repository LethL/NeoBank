import React from 'react';
import './About.css';
import moneyLogo from '../../images/Money_duotone.svg';
import calendarLogo from '../../images/Calendar_duotone.svg';
import clockLogo from '../../images/Clock_duotone.svg';
import bagLogo from '../../images/Bag_duotone.svg';
import cardLogo from '../../images/Credit-card_duotone.svg';

export default function About() {
  return (
    <div className="about">
      <div className="about__item about__item_xs">
        <img className="about__item-img" src={moneyLogo} alt="money" />
        <h2 className="about__item-title">Up to 50 000 ₽</h2>
        <p className="about__item-subtitle">Cash and transfers without commission and percent</p>
      </div>
      <div className="about__item about__item_xs">
        <img className="about__item-img" src={calendarLogo} alt="calendar" />
        <h2 className="about__item-title">Up to 160 days</h2>
        <p className="about__item-subtitle">Without percent on the loan</p>
      </div>
      <div className="about__item about__item_xs">
        <img className="about__item-img" src={clockLogo} alt="clock" />
        <h2 className="about__item-title">Free delivery</h2>
        <p className="about__item-subtitle">
          We will deliver your card by courier at a convenient place and time for you
        </p>
      </div>
      <div className="about__item about__item_xl">
        <img className="about__item-img" src={bagLogo} alt="bag" />
        <h2 className="about__item-title">Up to 12 months</h2>
        <p className="about__item-subtitle">No percent. For equipment, clothes and other purchases in installments</p>
      </div>
      <div className="about__item about__item_xl">
        <img className="about__item-img" src={cardLogo} alt="credit card" />
        <h2 className="about__item-title">Convenient deposit and withdrawal</h2>
        <p className="about__item-subtitle">
          At any ATM. Top up your credit card for free with cash or transfer from other cards
        </p>
      </div>
    </div>
  );
}
