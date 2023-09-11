import React from 'react';
import { Navigate } from 'react-router-dom';
import Code from 'modules/Document/components/Code/Code';

export default function CodePage() {
  const creditStep = localStorage.getItem('status');
  if (creditStep === 'step_code' || creditStep === 'step_signing') {
    return <Code />;
  }
  return <Navigate to={'/404'} />;
}
