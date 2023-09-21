import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Sign from './Sign';

test('Компонент Sign отображается корректно при значении в localStorage "step_payment', () => {
  localStorage.setItem('status', 'step_payment');
  render(<Sign />);
  const signElement = screen.getByTestId('sign');
  expect(signElement).toBeInTheDocument();
});

test('Проверка чекбокса о согласии и активации кнопки отправить когда он нажат', () => {
  render(<Sign />);
  const consentTextElement = screen.getByText('I agree');
  expect(consentTextElement).toBeInTheDocument();
  const sendButton = screen.getByText('Send');
  expect(sendButton).toBeDisabled();
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(sendButton).toBeEnabled();
});

test('Компонент Sign отображает ссылку на документ', () => {
  render(<Sign />);
  const linkElement = screen.getByText('Information on your card');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute(
    'href',
    'https://neostudy.neoflex.ru/pluginfile.php/108672/mod_assign/intro/credit-card-offer.pdf'
  );
});

test('Компонент Sign отображает сообщение об успешной подписи документов', () => {
  localStorage.setItem('status', 'step_signing');
  render(<Sign />);
  const successTextElement = screen.getByText('Documents have been successfully signed and sent for approval');
  expect(successTextElement).toBeInTheDocument();
});
