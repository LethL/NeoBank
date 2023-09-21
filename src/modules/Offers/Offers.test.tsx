import React from 'react';
import { render, screen } from '@testing-library/react';
import Offers from './Offers.module';

test('Проверка отображения предложений из LocalStorage', () => {
  const mockData = [
    {
      applicationId: 1,
      requestedAmount: 1000,
      totalAmount: 2000,
      term: 12,
      monthlyPayment: 100,
      rate: 5,
      isInsuranceEnabled: false,
      isSalaryClient: true,
    },
  ];
  localStorage.setItem('offersData', JSON.stringify(mockData));

  render(<Offers />);

  const offerElements = screen.getAllByTestId('offersCard');
  expect(offerElements).toHaveLength(mockData.length);
});

test('Проверка передачи пропсов в OffersCard', () => {
  const mockData = [
    {
      applicationId: 1,
      requestedAmount: 1000,
      totalAmount: 2000,
      term: 12,
      monthlyPayment: 100,
      rate: 5,
      isInsuranceEnabled: false,
      isSalaryClient: true,
    },
  ];
  localStorage.setItem('offersData', JSON.stringify(mockData));

  render(<Offers />);

  const offerElements = screen.getAllByTestId('offersCard');
  for (let i = 0; i < mockData.length; i++) {
    const offer = mockData[i];
    expect(offerElements[i]).toHaveAttribute('data-testid', 'offersCard');
    expect(offerElements[i]).toHaveAttribute('data-applicationid', offer.applicationId.toString());
    expect(offerElements[i]).toHaveAttribute('data-rate', offer.rate.toString());
  }
});

test('Проверка отображения данных в OffersCard', () => {
  const mockData = [
    {
      applicationId: 1,
      requestedAmount: 1000,
      totalAmount: 2000,
      term: 12,
      monthlyPayment: 100,
      rate: 5,
      isInsuranceEnabled: false,
      isSalaryClient: true,
    },
    {
      applicationId: 2,
      requestedAmount: 1500,
      totalAmount: 2500,
      term: 18,
      monthlyPayment: 120,
      rate: 6,
      isInsuranceEnabled: true,
      isSalaryClient: false,
    },
  ];
  localStorage.setItem('offersData', JSON.stringify(mockData));

  render(<Offers />);

  const offerElements = screen.getAllByTestId('offersCard');
  for (let i = 0; i < mockData.length; i++) {
    const offer = mockData[i];
    expect(offerElements[i]).toHaveTextContent(offer.totalAmount.toString());
    expect(offerElements[i]).toHaveTextContent(offer.term.toString());
    expect(offerElements[i]).toHaveTextContent(offer.monthlyPayment.toString());
  }
});
