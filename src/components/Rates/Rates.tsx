import React from 'react';
import './Rates.css';

export default function Rates() {
  return (
    <div className="rates">
      <div className="rates__item">
        <p className="rates__item-text rates__item-text_black">Card currency</p>
        <p className="rates__item-text">Rubles, dollars, euro</p>
      </div>
      <div className="rates__item">
        <p className="rates__item-text rates__item-text_black">Interest free period</p>
        <p className="rates__item-text">0% up to 160 days</p>
      </div>
      <div className="rates__item">
        <p className="rates__item-text rates__item-text_black">Payment system</p>
        <p className="rates__item-text">Mastercard, Visa</p>
      </div>
      <div className="rates__item">
        <p className="rates__item-text rates__item-text_black">Maximum credit limit on the card</p>
        <p className="rates__item-text">600 000 ₽</p>
      </div>
      <div className="rates__item">
        <p className="rates__item-text rates__item-text_black">Replenishment and withdrawal</p>
        <p className="rates__item-text">
          At any ATM. Top up your credit card for free with cash or transfer from other cards
        </p>
      </div>
      <div className="rates__item">
        <p className="rates__item-text rates__item-text_black">Max cashback per month</p>
        <p className="rates__item-text">15 000 ₽</p>
      </div>
      <div className="rates__item">
        <p className="rates__item-text rates__item-text_black">Transaction Alert</p>
        <p className="rates__item-text">
          60 ₽ — SMS or push notifications <br /> 0 ₽ — card statement, information about transactions in the online
          bank
        </p>
      </div>
    </div>
  );
}
