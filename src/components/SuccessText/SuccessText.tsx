import React from 'react';
import './SuccessText.css';
import { SuccessTextProps } from './SuccessText.types';

export default function SuccessText({ title, text }: SuccessTextProps) {
  return (
    <div className="success">
      <h2 className="success__title">{title}</h2>
      <p className="success__text">{text}</p>
    </div>
  );
}
