import React from 'react';
import OffersCard from './components/OffersCard/OffersCard';
import cardLogo from 'src/images/card-surprise.png';
import './components/OffersList/OffersList.css';
import { OffersItems } from '__mocks__/OffersItems.mock';

export default function Offers() {
  return (
    <section className="offers">
      {OffersItems.map((item, index) => (
        <OffersCard
          key={index}
          cardLogo={cardLogo}
          cardLogoAlt="card image"
          cardAmount="200"
          cardTime="24"
          cardPayment="9000"
          cardRate="15"
          cardInsurance={item.insurance}
          cardSalary={item.salary}
        />
      ))}
    </section>
  );
}
