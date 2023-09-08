import React from 'react';
import './Loan.css';
import LinkButton from '../LinkButton/LinkButton';
import loanCard from '../../images/loan-card.png';
import Tooltip from 'components/Tooltip/Tooltip';
import { loanItems } from '__mocks__/LoanItems.mock';

export default function LoanIntro() {
  return (
    <section className="loan">
      <div className="loan__content">
        <h2 className="loan__title">Platinum digital credit card</h2>
        <p className="loan__subtitle">
          Our best credit card. Suitable for everyday spending and shopping. Cash withdrawals and transfers without
          commission and interest.
        </p>
        <div className="loan__wrapper">
          {loanItems.map((item, index) => (
            <Tooltip key={index} text={item.tooltipText}>
              <div>
                <p className="loan__text loan__text_accent">{item.title}</p>
                <p className="loan__text">{item.text}</p>
              </div>
            </Tooltip>
          ))}
        </div>
        <LinkButton text="Apply for card" link="#form" />
      </div>
      <img className="loan__img" src={loanCard} alt="credit card" />
    </section>
  );
}
