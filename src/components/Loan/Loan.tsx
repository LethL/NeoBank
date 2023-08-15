import React from "react";
import "./Loan.css";
import LinkButton from "../LinkButton/LinkButton";
import loanCard from "../../images/loan-card.png";

export default function Loan() {
  return (
    <section className="loan">
      <div className="loan__content">
        <h2 className="loan__title">Platinum digital credit card</h2>
        <p className="loan__subtitle">
          Our best credit card. Suitable for everyday spending and shopping.
          Cash withdrawals and transfers without commission and interest.
        </p>
        <div className="loan__wrapper">
          <div>
            <p className="loan__text loan__text_accent">Up to 160 days</p>
            <p className="loan__text">No percent</p>
          </div>
          <div>
            <p className="loan__text loan__text_accent">Up to 600 000 ₽</p>
            <p className="loan__text">Credit limit</p>
          </div>
          <div>
            <p className="loan__text loan__text_accent">0 ₽</p>
            <p className="loan__text">Card service is free</p>
          </div>
        </div>
        <LinkButton text="Apply for card" link="#" />
      </div>
      <img className="loan__img" src={loanCard} alt="credit card" />
    </section>
  );
}
