import React from 'react';
import './Divider.css';

export default function Divider() {
  return (
    <section className="divider">
      <h2 className="divider__title">How to get a card</h2>
      <div className="divider__wrapper">
        <div className="divider__item">
          <div className="divider__item-number">1</div>
          <p className="divider__item-text">Fill out an online application - you do not need to visit the bank</p>
        </div>
        <div className="divider__item">
          <div className="divider__item-number">2</div>
          <p className="divider__item-text">
            Find out the bank's decision immediately after filling out the application
          </p>
        </div>
        <div className="divider__item">
          <div className="divider__item-number">3</div>
          <p className="divider__item-text">
            The bank will deliver the card free of charge, wherever convenient, to your city
          </p>
        </div>
      </div>
    </section>
  );
}
