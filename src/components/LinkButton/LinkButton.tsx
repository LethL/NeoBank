import React from 'react';
import './LinkButton.css';
import { LinkBtnProps } from './LinkButton.types';

export default function LinkButton({ link, text }: LinkBtnProps) {
  return (
    <>
      <a href={link} className="link-button">
        {text}
      </a>
    </>
  );
}
