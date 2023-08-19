import React, { useState } from 'react';
import './Tabs.css';
import About from 'components/About/About';
import Rates from 'components/Rates/Rates';
import Cashback from 'components/Cashback/Cashback';
import Faq from 'components/Faq/Faq';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('About');

  function handleTabClick(event: React.MouseEvent<HTMLElement>) {
    const tabHeaders = document.querySelectorAll('.tabs__list-item');
    tabHeaders.forEach((tabs) => {
      tabs.classList.remove('tabs__list-item_active');
    });
    setActiveTab(event.currentTarget.id);
    event.currentTarget.classList.add('tabs__list-item_active');
  }

  function render() {
    if (activeTab === 'About') {
      return <About />;
    }
    if (activeTab === 'Rates') {
      return <Rates />;
    }
    if (activeTab === 'Cashback') {
      return <Cashback />;
    }
    if (activeTab === 'Faq') {
      return <Faq />;
    }
  }

  return (
    <section className="tabs">
      <ul className="tabs__list">
        <li id="About" className="tabs__list-item tabs__list-item_active" onClick={handleTabClick}>
          About card
        </li>
        <li id="Rates" className="tabs__list-item" onClick={handleTabClick}>
          Rates and conditions
        </li>
        <li id="Cashback" className="tabs__list-item" onClick={handleTabClick}>
          Cashback
        </li>
        <li id="Faq" className="tabs__list-item" onClick={handleTabClick}>
          FAQ
        </li>
      </ul>
      {render()}
    </section>
  );
}
