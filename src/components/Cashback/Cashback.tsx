import React from 'react';
import './Cashback.css';

export default function Cashback() {
  return (
    <div className="cashback">
      <div className="cashback__item">
        <p className="cashback__item-name">For food delivery, cafes and restaurants</p>
        <p className="cashback__item-info">5%</p>
      </div>
      <div className="cashback__item">
        <p className="cashback__item-name">In supermarkets with our subscription</p>
        <p className="cashback__item-info">5%</p>
      </div>
      <div className="cashback__item">
        <p className="cashback__item-name">In clothing stores and children`s goods</p>
        <p className="cashback__item-info">2%</p>
      </div>
      <div className="cashback__item">
        <p className="cashback__item-name">Other purchases and payment of services and fines</p>
        <p className="cashback__item-info">1%</p>
      </div>
      <div className="cashback__item">
        <p className="cashback__item-name">Shopping in online stores</p>
        <p className="cashback__item-info">up to 3%</p>
      </div>
      <div className="cashback__item">
        <p className="cashback__item-name">Purchases from our partners</p>
        <p className="cashback__item-info">30%</p>
      </div>
    </div>
  );
}
