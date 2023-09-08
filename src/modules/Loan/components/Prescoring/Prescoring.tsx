import React, { useEffect, useState } from 'react';
import { PrescoringForm } from '../PrescoringForm/PrescoringForm';
import Offers from 'modules/Offers/Offers.module';
import Decision from 'components/Decision/Decision';

export default function Prescoring() {
  const [stepStorageValue, setStepStorageValue] = useState<string | null>(localStorage.getItem('credit'));

  useEffect(() => {
    const handleLocalStorageChange = () => {
      setStepStorageValue(localStorage.getItem('credit'));
    };
    window.addEventListener('localStorageChange', handleLocalStorageChange);
    return () => {
      window.removeEventListener('localStorageChange', handleLocalStorageChange);
    };
  }, []);

  return (
    <section>
      {stepStorageValue === 'step_offers' ? (
        <Decision />
      ) : stepStorageValue === 'step_prescoring' ? (
        <Offers />
      ) : (
        <PrescoringForm />
      )}
    </section>
  );
}
