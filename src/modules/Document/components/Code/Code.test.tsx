import React from 'react';
import { render, screen } from '@testing-library/react';
import Congratulations from '../../../../components/Congratulations/Congratulations';
import Code from './Code';

test('Отображение компонента Code', () => {
  localStorage.setItem('status', 'step_signing');
  render(<Code />);
  const codeElement = screen.getByTestId('code');
  expect(codeElement).toBeInTheDocument();
});

test('Провка пин кода и его валидности', () => {
  render(<Code />);
  const numberInputs = screen.getAllByRole('spinbutton');
  numberInputs.forEach((input) => {
    expect(input).toBeValid();
    expect(input).not.toHaveClass('invalid-class');
  });
  expect(numberInputs).toHaveLength(4);
});

test('Отображение Congratulations при успешной отправке кода', () => {
  localStorage.setItem('status', 'step_code');
  render(<Congratulations />);
  const congratulationsElement = screen.getByTestId('congratulations');
  expect(congratulationsElement).toBeInTheDocument();
});
