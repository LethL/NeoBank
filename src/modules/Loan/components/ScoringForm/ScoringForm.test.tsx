import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ScoringForm from './ScoringForm';

test('Проверка отображения формы скоринга', () => {
  render(<ScoringForm />);
  const formElement = screen.getByTestId('scoringForm');
  expect(formElement).toBeInTheDocument();
});

test('Проверка ввода и валидации данных', async () => {
  render(<ScoringForm />);

  const issueDateInput = screen.getByLabelText('Date of issue of the passport *');
  const issueBranchInput = screen.getByLabelText('Division code *');
  const employerINNInput = screen.getByLabelText('Your employer INN *');
  const salaryInput = screen.getByLabelText('Your salary *');
  const workExperienceTotalInput = screen.getByLabelText('Your work experience total *');
  const workExperienceCurrentInput = screen.getByLabelText('Your work experience current *');

  fireEvent.change(issueDateInput, { target: { value: '2022-01-01' } });
  fireEvent.change(issueBranchInput, { target: { value: 123456 } });
  fireEvent.change(employerINNInput, { target: { value: 123456789012 } });
  fireEvent.change(salaryInput, { target: { value: 50000 } });
  fireEvent.change(workExperienceTotalInput, { target: { value: 5 } });
  fireEvent.change(workExperienceCurrentInput, { target: { value: 2 } });

  expect(issueDateInput).toHaveValue('2022-01-01');
  expect(issueBranchInput).toHaveValue(123456);
  expect(employerINNInput).toHaveValue(123456789012);
  expect(salaryInput).toHaveValue(50000);
  expect(workExperienceTotalInput).toHaveValue(5);
  expect(workExperienceCurrentInput).toHaveValue(2);

  await waitFor(() => {
    expect(screen.queryByText('This field is required')).not.toBeInTheDocument();
  });
});

test('Проверка отображения ошибок валидации', async () => {
  render(<ScoringForm />);

  const continueButton = screen.getByText('Continue');
  fireEvent.click(continueButton);

  await waitFor(() => {
    expect(screen.getByText('Incorrect date of passport issue date')).toBeInTheDocument();
    expect(screen.getByText('Enter your passport division code')).toBeInTheDocument();
    expect(screen.getByText('Enter your salary')).toBeInTheDocument();
    expect(screen.getByText('Enter your work experience total')).toBeInTheDocument();
    expect(screen.getByText('Enter your work experience current')).toBeInTheDocument();
  });
});
