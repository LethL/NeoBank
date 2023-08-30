import React, { useState } from 'react';
import LoanForm from 'modules/LoanForm/LoanForm.module';
import Offers from 'modules/Offers/Offers.module';
import Decision from 'components/Decision/Decision';

export default function Prescoring() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState(false);

  const onSubmitHandler = (value: boolean) => {
    setSubmitted(value);
  };

  const onSelectHandler = (value: boolean) => {
    setSelected(value);
  };

  return (
    <section>
      {selected ? (
        <Decision />
      ) : submitted ? (
        <Offers onSelectHandler={onSelectHandler} />
      ) : (
        <LoanForm onSubmitHandler={onSubmitHandler} />
      )}
    </section>
  );
}
