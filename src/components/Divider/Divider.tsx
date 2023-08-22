import React from 'react';
import './Divider.css';
import { dividerItems } from '__mocks__/DividerItems.mock';

export default function Divider() {
  return (
    <section className="divider">
      <h2 className="divider__title">How to get a card</h2>
      <div className="divider__wrapper">
        {dividerItems.map((item) => (
          <div key={item.id} className="divider__item">
            <div className="divider__item-number">{item.id}</div>
            <p className="divider__item-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
