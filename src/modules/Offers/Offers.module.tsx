import React from 'react';
import OffersCard from './components/OffersCard/OffersCard';
import { OffersDataProps } from './components/OffersCard/OffersCard.types';
import cardLogo from 'src/images/card-surprise.png';
import './components/OffersList/OffersList.css';

export default function Offers() {
  const storedData = localStorage.getItem('offersData');
  const jsonData = storedData ? JSON.parse(storedData) : null;

  return (
    <section className="offers">
      {jsonData.map((item: OffersDataProps, index: number) => (
        <OffersCard
          key={index}
          cardLogo={cardLogo}
          cardLogoAlt="card image"
          applicationId={item.applicationId}
          totalAmount={item.requestedAmount}
          requestedAmount={item.totalAmount}
          term={item.term}
          monthlyPayment={item.monthlyPayment}
          rate={item.rate}
          isInsuranceEnabled={item.isInsuranceEnabled}
          isSalaryClient={item.isSalaryClient}
        />
      ))}
    </section>
  );
}
