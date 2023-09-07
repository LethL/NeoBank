import React from 'react';
import { ButtonProps } from './Button.types';
import './Button.css';

export default function Button({ text, onClick, className, type = 'button', disabled = false }: ButtonProps) {
  return (
    <button className={className} onClick={onClick} type={type} disabled={disabled}>
      {text}
    </button>
  );
}
