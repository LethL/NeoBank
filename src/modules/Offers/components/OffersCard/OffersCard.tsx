import React from 'react';
import { OffersCardProps } from './OffersCard.types';
import yesLogo from 'src/images/ok-logo.svg';
import noLogo from 'src/images/fail-logo.svg';
import './OffersCard.css';

export default function OffersCard({
  cardLogo,
  cardLogoAlt,
  cardAmount,
  cardTime,
  cardRate,
  cardInsurance,
  cardSalary,
}: OffersCardProps) {
  return (
    <div className="offers-card">
      <img src={cardLogo} alt={cardLogoAlt} className="offers-card__img" />
      <p className="offers-card__text">Requested amount: {cardAmount} ₽</p>
      <p className="offers-card__text">Total amount: {cardAmount} ₽</p>
      <p className="offers-card__text">For {cardTime} months</p>
      <p className="offers-card__text">Your rate: {cardRate}</p>
      <div className="offers-card__wrapper">
        <p className="offers-card__text">Insurance included</p>
        {cardInsurance ? (
          <img src={yesLogo} alt="yes" className="offers-card__logo" />
        ) : (
          <img src={noLogo} alt="no" className="offers-card__logo" />
        )}
      </div>
      <div className="offers-card__wrapper">
        <p className="offers-card__text">Salary client</p>
        {cardSalary ? (
          <img src={yesLogo} alt="yes" className="offers-card__logo" />
        ) : (
          <img src={noLogo} alt="no" className="offers-card__logo" />
        )}
      </div>
      <button className="offers-card__btn">Select</button>
    </div>
  );
}
