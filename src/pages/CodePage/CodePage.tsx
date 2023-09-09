import React from 'react';
import { Navigate } from 'react-router-dom';
import Code from 'modules/Document/components/Code/Code';

export default function CodePage() {
  const creditStep = localStorage.getItem('status');
  return creditStep === ('step_signing' || 'step_code') ? <Code /> : <Navigate to={'/404'} />;
}
