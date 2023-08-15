import React from "react";
import "./Features.css";
import userImage from "../../images/userimage.png";
import checkedLogo from "../../images/checked.svg";

export default function Features() {
  return (
    <section className="features">
      <img className="features__img" src={userImage} alt="user" />
      <div className="features__info">
        <h2 className="features__title">
          We Provide Many Features You Can Use
        </h2>
        <p className="features__text">
          You can explore the features that we provide with fun and have their
          own functions each feature
        </p>
        <ul className="features__list">
          <li className="features__item">
            <img src={checkedLogo} alt="checked item" />
            <p className="features__item-text">Powerfull online protection.</p>
          </li>
          <li className="features__item">
            <img src={checkedLogo} alt="checked item" />
            <p className="features__item-text">Cashback without borders.</p>
          </li>
          <li className="features__item">
            <img src={checkedLogo} alt="checked item" />
            <p className="features__item-text">Personal design</p>
          </li>
          <li className="features__item">
            <img src={checkedLogo} alt="checked item" />
            <p className="features__item-text">Work anywhere in the world</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
