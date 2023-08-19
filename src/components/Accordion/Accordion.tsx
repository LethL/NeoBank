import React from 'react';
import './Accordion.css';
import { AccordionProps } from './Accordion.types';

export default function Accordion({ title, text, titleClassName, textClassName, itemClassName }: AccordionProps) {
  return (
    <details className={itemClassName}>
      <summary className={titleClassName}>{title}</summary>
      <p className={textClassName}>{text}</p>
    </details>
  );
}
