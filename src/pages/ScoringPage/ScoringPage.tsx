import React from 'react';
import { Navigate } from 'react-router-dom';
import Scoring from 'modules/Loan/components/Scoring/Scoring';

export default function ScoringPage() {
  const creditStep = localStorage.getItem('status');
  return creditStep === 'step_offers' ? <Scoring /> : <Navigate to={'/404'} />;
}
