import React from 'react';
import { Navigate } from 'react-router-dom';
import Sign from 'modules/Document/components/Sign/Sign';

export default function DocumentSignPage() {
  const creditStep = localStorage.getItem('status');
  if (creditStep === 'step_payment' || creditStep === 'step_signing') {
    return <Sign />;
  }
  return <Navigate to={'/404'} />;
}
