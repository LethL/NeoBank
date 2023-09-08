import React, { useEffect, useState } from 'react';
import ScoringForm from '../ScoringForm/ScoringForm';
import SuccessText from 'components/SuccessText/SuccessText';

export default function Scoring() {
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
    <>
      {stepStorageValue === 'step_scoring' ? (
        <SuccessText
          title="Wait for a decision on the application"
          text="The answer will come to your mail within 10 minutes"
        />
      ) : (
        <ScoringForm />
      )}
    </>
  );
}
