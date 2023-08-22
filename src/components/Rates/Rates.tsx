import React from 'react';
import './Rates.css';
import { ratesItems } from '__mocks__/RatesItems.mock';

export default function Rates() {
  return (
    <div className="rates">
      {ratesItems.map((item, index) => (
        <div key={index} className="rates__item">
          <p className="rates__item-text rates__item-text_black">{item.title}</p>
          <p className="rates__item-text">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
