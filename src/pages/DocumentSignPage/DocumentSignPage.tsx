import React from 'react';
import { Navigate } from 'react-router-dom';
import Sign from 'modules/Document/components/Sign/Sign';

export default function DocumentSignPage() {
  const creditStep = localStorage.getItem('status');
  return creditStep === 'step_payment' ? <Sign /> : <Navigate to={'/404'} />;
}
