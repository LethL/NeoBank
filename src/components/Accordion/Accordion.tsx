import React from 'react';
import './Accordion.css';
import { AccordionProps } from './Accordion.types';

export default function Accordion({ title, text, titleClassName, textClassName, itemClassName }: AccordionProps) {
  function handleTabClick() {
    const accordions = document.querySelectorAll('.faq__accordion-item');
    accordions.forEach((accordion) => {
      accordion.removeAttribute('open');
    });
  }

  return (
    <details className={itemClassName} onClick={handleTabClick}>
      <summary className={titleClassName}>{title}</summary>
      <p className={textClassName}>{text}</p>
    </details>
  );
}
