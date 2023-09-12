import React from 'react';
import { Navigate } from 'react-router-dom';
import Table from 'modules/Document/components/Table/Table';

export default function DocumentPage() {
  const creditStep = localStorage.getItem('status');
  if (creditStep === 'step_payment' || creditStep === 'step_scoring') {
    return <Table />;
  }
  return <Navigate to={'/404'} />;
}
