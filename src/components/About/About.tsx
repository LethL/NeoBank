import React from 'react';
import './About.css';
import AboutElement from 'components/AboutElement/AboutElement';
import { AboutItems } from '__mocks__/AboutItems.mock';

export default function About() {
  return (
    <div className="about">
      {AboutItems.map((item, index) => (
        <AboutElement
          key={index}
          elementTitle={item.title}
          elementSubtitle={item.subtitle}
          elementImgSrc={item.imgSrc}
          elementImgAlt={item.imgAlt}
        />
      ))}
    </div>
  );
}
