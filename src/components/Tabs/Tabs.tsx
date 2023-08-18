import React from 'react';
import './Tabs.css';
import About from '../About/About';

export default function Tabs() {
  return (
    <section className="tabs">
      <ul className="tabs__list">
        <li className="tabs__list-item tabs__list-item_active">About card</li>
        <li className="tabs__list-item">Rates and conditions</li>
        <li className="tabs__list-item">Cashback</li>
        <li className="tabs__list-item">FAQ</li>
      </ul>
      <About />
    </section>
  );
}
