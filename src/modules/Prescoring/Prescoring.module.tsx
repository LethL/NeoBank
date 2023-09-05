import React from 'react';
import LoanForm from 'modules/LoanForm/LoanForm.module';
import Offers from 'modules/Offers/Offers.module';
import Decision from 'components/Decision/Decision';

export default function Prescoring() {
  const submittedPrescoringData = localStorage.getItem('offersData');
  const offerChoosenData = localStorage.getItem('offerChoose');

  return <section>{offerChoosenData ? <Decision /> : submittedPrescoringData ? <Offers /> : <LoanForm />}</section>;
}
