import React from 'react';
import './Features.css';
import userImage from '../../images/userimage.png';
import checkedLogo from '../../images/checked.svg';
import { featuresItems } from '__mocks__/FeaturesItems.mock';

export default function Features() {
  return (
    <section className="features">
      <img className="features__img" src={userImage} alt="user" />
      <div className="features__info">
        <h2 className="features__title">We Provide Many Features You Can Use</h2>
        <p className="features__text">
          You can explore the features that we provide with fun and have their own functions each feature
        </p>
        <ul className="features__list">
          {featuresItems.map((item) => (
            <li key={item.id} className="features__item">
              <img src={checkedLogo} alt="checked item" />
              <p className="features__item-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
