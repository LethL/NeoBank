import React from 'react';
import Form from './components/Form/Form';
import { PresciringFormProps } from 'modules/Prescoring/Prescoring.types';

export default function LoanForm({ onSubmitHandler }: PresciringFormProps) {
  return <Form onSubmitHandler={onSubmitHandler} />;
}
