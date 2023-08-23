import React from 'react';
import './LinkButton.css';
import { LinkBtnProps } from './LinkButton.types';

export default function LinkButton({ link, text, elementClassName = 'link-button', linkTarget }: LinkBtnProps) {
  return (
    <a href={link} className={elementClassName} target={linkTarget}>
      {text}
    </a>
  );
}
