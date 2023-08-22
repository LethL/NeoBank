import React from 'react';
import './Cashback.css';
import { cashbackItems } from '__mocks__/CashbackItems.mock';

export default function Cashback() {
  return (
    <div className="cashback">
      {cashbackItems.map((item, index) => (
        <div key={index} className="cashback__item">
          <p className="cashback__item-name">{item.name}</p>
          <p className="cashback__item-info">{item.info}</p>
        </div>
      ))}
    </div>
  );
}
