import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH_LIST } from '../constants/paths';
import HomePage from '../pages/HomePage/HomePage';
import LoanPage from '../pages/LoanPage/LoanPage';

export function Router() {
  return (
    <Routes>
      <Route path={PATH_LIST.HOME} element={<HomePage />} />
      <Route path={PATH_LIST.LOAN} element={<LoanPage />} />
    </Routes>
  );
}
