import React from 'react';
import './FormBtn.css';
import { FormBtnProps } from './FormBtn.types';

FormBtn.defaultProps = {
  isDisabled: false,
};

export default function FormBtn({ text, isDisabled }: FormBtnProps) {
  return (
    <button className={`form-btn ${isDisabled ? 'form-btn_disabled' : ''}`} type="submit" disabled={isDisabled}>
      {text}
    </button>
  );
}
