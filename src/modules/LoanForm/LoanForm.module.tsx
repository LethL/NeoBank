import React from 'react';
import StepOneForm from './components/StepOneForm/StepOneForm';
import StepTwoForm from './components/StepTwoForm/StepTwoForm';
import { PresciringFormProps } from 'modules/Prescoring/Prescoring.types';

export default function LoanForm({ onSubmitHandler }: PresciringFormProps) {
  return (
    <>
      {/* <StepOneForm onSubmitHandler={onSubmitHandler} /> */}
      <StepTwoForm />
    </>
  );
}
