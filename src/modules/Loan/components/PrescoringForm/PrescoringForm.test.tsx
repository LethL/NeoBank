import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { PrescoringForm } from './PrescoringForm';

test('Отображает форму и кнопку "Continue"', () => {
  render(<PrescoringForm />);
  const form = screen.getByTestId('prescoringForm');
  const continueButton = screen.getByText('Continue');
  expect(form).toBeInTheDocument();
  expect(continueButton).toBeInTheDocument();
});

test('Значения инпута меняется при вводе', () => {
  render(<PrescoringForm />);
  const lastNameInput = screen.getByLabelText('Your last name *');
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  expect(lastNameInput).toHaveValue('Doe');
});

test('Валидация поля ввода', () => {
  render(<PrescoringForm />);
  const emailInput = screen.getByLabelText('Your email *');
  fireEvent.change(emailInput, { target: { value: 'test@mail.ru' } });
  expect(emailInput).toHaveClass('is-correct');
});

test('Обновление ввода даты рождения', () => {
  render(<PrescoringForm />);
  const birthdateInput = screen.getByLabelText('Your date of birth *');
  fireEvent.change(birthdateInput, { target: { value: '1990-01-01' } });
  expect(birthdateInput).toHaveValue('1990-01-01');
});
