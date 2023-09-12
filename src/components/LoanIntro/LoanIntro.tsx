import React, { useEffect, useState } from 'react';
import './LoanIntro.css';
import LinkButton from '../LinkButton/LinkButton';
import loanCard from '../../images/loan-card.png';
import Tooltip from 'components/Tooltip/Tooltip';
import { loanItems } from '__mocks__/LoanItems.mock';
import { APPLICATIONID } from 'constants/paths';

export default function LoanIntro() {
  const [text, setText] = useState('Apply for card');
  const [link, setLink] = useState('#form');

  function setBtnStatus() {
    const status = localStorage.getItem('status');
    switch (status) {
      case 'step_offers':
        setText('Continue registration');
        setLink(`loan/${APPLICATIONID}`);
        break;
      case 'step_scoring':
        setText('Continue registration');
        setLink(`loan/${APPLICATIONID}/document`);
        break;
      case 'step_payment':
        setText('Continue registration');
        setLink(`loan/${APPLICATIONID}/document/sign`);
        break;
      case 'step_signing' || 'step_code':
        setText('Continue registration');
        setLink(`loan/${APPLICATIONID}/code`);
    }
  }

  useEffect(() => {
    setBtnStatus();
  }, []);

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
        <LinkButton text={text} link={link} />
      </div>
      <img className="loan__img" src={loanCard} alt="credit card" />
    </section>
  );
}
