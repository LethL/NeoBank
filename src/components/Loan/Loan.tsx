import React from 'react';
import './Loan.css';
import LinkButton from '../LinkButton/LinkButton';
import loanCard from '../../images/loan-card.png';
import Tooltip from 'components/Tooltip/Tooltip';

export default function Loan() {
  return (
    <section className="loan">
      <div className="loan__content">
        <h2 className="loan__title">Platinum digital credit card</h2>
        <p className="loan__subtitle">
          Our best credit card. Suitable for everyday spending and shopping. Cash withdrawals and transfers without
          commission and interest.
        </p>
        <div className="loan__wrapper">
          <Tooltip text="When repaying the full debt up to 160 days.">
            <div>
              <p className="loan__text loan__text_accent">Up to 160 days</p>
              <p className="loan__text">No percent</p>
            </div>
          </Tooltip>
          <Tooltip text="Over the limit willaccrue percent">
            <div>
              <p className="loan__text loan__text_accent">Up to 600 000 ₽</p>
              <p className="loan__text">Credit limit</p>
            </div>
          </Tooltip>
          <Tooltip text="Promotion valid until December 31, 20224.">
            <div>
              <p className="loan__text loan__text_accent">0 ₽</p>
              <p className="loan__text">Card service is free</p>
            </div>
          </Tooltip>
        </div>
        <LinkButton text="Apply for card" link="#form" />
      </div>
      <img className="loan__img" src={loanCard} alt="credit card" />
    </section>
  );
}
