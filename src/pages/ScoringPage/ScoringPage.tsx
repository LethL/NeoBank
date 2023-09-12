import React from 'react';
import { Navigate } from 'react-router-dom';
import Scoring from 'modules/Loan/components/Scoring/Scoring';

export default function ScoringPage() {
  const creditStep = localStorage.getItem('status');
  if (creditStep === 'step_offers' || creditStep === 'step_scoring') {
    return <Scoring />;
  }
  return <Navigate to={'/404'} />;
}
