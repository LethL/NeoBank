import React from 'react';
import { toJS } from 'mobx';
import OffersCard from './components/OffersCard/OffersCard';
import cardLogo from 'src/images/card-surprise.png';
import './components/OffersList/OffersList.css';
import { OffersItems } from '__mocks__/OffersItems.mock';
import { FormStore } from 'modules/LoanForm/store/Form.store';
import { PresciringSelectHProps } from 'modules/Prescoring/Prescoring.types';

export default function Offers({ onSelectHandler }: PresciringSelectHProps) {
  const { formData } = FormStore;
  const amount = toJS(formData?.map((e) => e.amount));
  const term = toJS(formData?.map((e) => e.term));

  function onSubmit(value: boolean) {
    onSelectHandler(value);
  }

  return (
    <section className="offers">
      {OffersItems.map((item, index) => (
        <OffersCard
          key={index}
          cardLogo={cardLogo}
          cardLogoAlt="card image"
          cardAmount={`${amount}`}
          cardTerm={`${term}`}
          cardPayment="9 697 ₽"
          cardRate="15"
          cardInsurance={item.insurance}
          cardSalary={item.salary}
          onSubmitHandler={onSubmit}
        />
      ))}
    </section>
  );
}
