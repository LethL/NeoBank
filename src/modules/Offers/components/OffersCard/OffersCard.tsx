import React from 'react';
import { OffersDataProps } from './OffersCard.types';
import yesLogo from 'src/images/ok-logo.svg';
import noLogo from 'src/images/fail-logo.svg';
import './OffersCard.css';
import { FormStore } from 'modules/LoanForm/store/Form.store';

export default function OffersCard({
  cardLogo,
  cardLogoAlt,
  applicationId,
  requestedAmount,
  totalAmount,
  term,
  monthlyPayment,
  rate,
  isInsuranceEnabled,
  isSalaryClient,
  onSubmitHandler,
}: OffersDataProps) {
  const { handleOfferSend } = FormStore;
  return (
    <div className="offers-card">
      <img src={cardLogo} alt={cardLogoAlt} className="offers-card__img" />
      <p className="offers-card__text">Requested amount: {requestedAmount} ₽</p>
      <p className="offers-card__text">Total amount: {totalAmount} ₽</p>
      <p className="offers-card__text">For {term} month</p>
      <p className="offers-card__text">Monthly payment: {monthlyPayment}</p>
      <p className="offers-card__text">Your rate: {rate}</p>
      <div className="offers-card__wrapper">
        <p className="offers-card__text">Insurance included</p>
        {isInsuranceEnabled ? (
          <img src={yesLogo} alt="yes" className="offers-card__logo" />
        ) : (
          <img src={noLogo} alt="no" className="offers-card__logo" />
        )}
      </div>
      <div className="offers-card__wrapper">
        <p className="offers-card__text">Salary client</p>
        {isSalaryClient ? (
          <img src={yesLogo} alt="yes" className="offers-card__logo" />
        ) : (
          <img src={noLogo} alt="no" className="offers-card__logo" />
        )}
      </div>
      <button
        onClick={() => {
          handleOfferSend({
            'applicationId': applicationId,
            'requestedAmount': requestedAmount,
            'totalAmount': totalAmount,
            'term': term,
            'monthlyPayment': monthlyPayment,
            'rate': rate,
            'isInsuranceEnabled': isInsuranceEnabled,
            'isSalaryClient': isSalaryClient,
          });
        }}
        className="offers-card__btn">
        Select
      </button>
    </div>
  );
}
