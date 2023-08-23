import React from 'react';
import { AboutElementProps } from './AboutElement.types';

export default function AboutElement({
  elementTitle,
  elementSubtitle,
  elementImgSrc,
  elementImgAlt,
}: AboutElementProps) {
  return (
    <div className="about__item">
      <img className="about__item-img" src={elementImgSrc} alt={elementImgAlt} />
      <h2 className="about__item-title">{elementTitle}</h2>
      <p className="about__item-subtitle">{elementSubtitle}</p>
    </div>
  );
}
