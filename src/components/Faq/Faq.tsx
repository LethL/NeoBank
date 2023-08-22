import React, { useState } from 'react';
import './Faq.css';
import Accordion from 'components/Accordion/Accordion';
import { issuingFaqAccorions, usingFaqAccorions } from '__mocks__/FaqAccordions.mock';

export default function Faq() {
  return (
    <div className="faq">
      <h2 className="faq__title">Issuing and receiving a card</h2>
      {issuingFaqAccorions.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          text={item.text}
          titleClassName="faq__accordion-title"
          textClassName="faq__accordion-text"
          itemClassName="faq__accordion-item"
        />
      ))}
      <h2 className="faq__title">Using a credit card</h2>
      {usingFaqAccorions.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          text={item.text}
          titleClassName="faq__accordion-title"
          textClassName="faq__accordion-text"
          itemClassName="faq__accordion-item"
        />
      ))}
    </div>
  );
}
