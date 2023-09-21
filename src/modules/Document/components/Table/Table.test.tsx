import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Table from './Table';

test('Проверка рендера таблицы', () => {
  render(<Table />);
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();
});

test('Проверка рендера таблицы, если этап скоринга выполнен', () => {
  localStorage.setItem('status', 'step_scoring');
  render(<Table />);
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();
});

test('Провера сортировки таблицы', () => {
  render(<Table />);
  const columnHeader = screen.getByText(/NUMBER/i);
  fireEvent.click(columnHeader);
});

test('Провера сортировки таблицы', () => {
  render(<Table />);
  const columnHeader = screen.getByText(/date/i);
  fireEvent.click(columnHeader);
});

test('Провера сортировки таблицы', () => {
  render(<Table />);
  const columnHeader = screen.getByText(/TOTAL PAYMENT/i);
  fireEvent.click(columnHeader);
});

test('Провера сортировки таблицы', () => {
  render(<Table />);
  const columnHeader = screen.getByText(/INTEREST PAYMENT/i);
  fireEvent.click(columnHeader);
});

test('Провера сортировки таблицы', () => {
  render(<Table />);
  const columnHeader = screen.getByText(/DEBT PAYMENT/i);
  fireEvent.click(columnHeader);
});

test('Провера сортировки таблицы', () => {
  render(<Table />);
  const columnHeader = screen.getByText(/REMAINING DEBT/i);
  fireEvent.click(columnHeader);
});

test('Открытие модального окна при нажатии кнопки Deny', () => {
  const { getByText, getByRole } = render(<Table />);
  const denyButton = getByText('Deny');
  fireEvent.click(denyButton);
  const modal = getByRole('dialog');
  expect(modal).toBeInTheDocument();
});

it('Проверка отображения текст об успешном подписании таблицы платежей', () => {
  localStorage.setItem('status', 'step_payment');
  render(<Table />);
  const successText = screen.getByText('Documents are formed');
  expect(successText).toBeInTheDocument();
});
